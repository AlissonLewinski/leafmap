import { deletePlant, fetchCategories, fetchPlantById, fetchPlants, savePlant } from '../../../api'
import { useEffect, useState } from 'react';
import './AdminPlant.css'

import Select from 'react-select'
import { toast } from 'react-toastify'
import 'react-quill/dist/quill.snow.css'
import { ImageResize } from 'quill-image-resize-module'
import * as ReactQuill from 'react-quill'


function AdminPlant() {

    ReactQuill.Quill.register('modules/imageResize', ImageResize)

    useEffect(() => {
        fetchAndSetPlants()
        fetchCategories()
            .then(res => setCategories(res.data))
    }, [])

    const [categories, setCategories] = useState([])
    const [plants, setPlants] = useState([])
    const [plant, setPlant] = useState({ id: null, id_category: 1 })
    const [plantContent, setPlantContent] = useState('')

    const [mode, setMode] = useState('save')

    const fetchAndSetPlants = () => {
        fetchPlants()
            .then(res => setPlants(res.data.plants.map(p => {
                return { value: p.id, label: p.name }
            })))
    }

    const clear = () => {
        setPlant({ id: null, name: '', scientific_name: '', img: '', id_category: 1 })
        setPlantContent('')
        setMode('save')
        fetchAndSetPlants()
    }

    const handleRadioChange = (e) => {
        setMode(e.target.getAttribute('mode'))
        setPlant({ id: null, name: '', scientific_name: '', img: '', id_category: 1 })
        setPlantContent('')
    }

    const handleSave = () => {
        savePlant({ ...plant, content: plantContent }).then(res => {
            toast.success(`Planta salva com sucesso`)
            clear()
        })
            .catch((err) => {
                toast.error(`Erro: ${err.response.data}`)
            })
    }

    const fetchAndSetPlant = (id) => {
        fetchPlantById(id)
            .then(res => {
                setPlant({
                    id: res.data.id,
                    name: res.data.name,
                    scientific_name: res.data.scientific_name,
                    img: res.data.img,
                    id_category: res.data.id_category
                })
                setPlantContent(res.data.content)
            })
    }

    const handleDelete = () => {
        deletePlant(plant.id)
            .then(() => {
                toast.success('Planta excluída com sucesso')
            })
            .catch((err) => {
                toast.error(err.response.data)
            })
        clear()
    }

    const handleFieldUpdate = (e) => {
        setPlant({ ...plant, [e.target.id]: e.target.value })
    }

    const toolbar = [
        [{ 'font': [] }, { 'header': [4, false] }],
        ['bold', 'italic', 'underline', 'strike'],
        [{ 'color': [] }, { 'background': [] }],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        [{ 'align': [] }],
        ['link', 'image', 'video'],
        ['clean']
    ]
    return (

        <>
            <h1>Administração de plantas</h1>

            <div className="admin-mode">
                <button className={`button-normal admin-mode-button ${mode !== 'edit' ? 'button-highlight' : ''}`} mode="save" onClick={handleRadioChange}>
                    + Nova Planta
                    </button>

                <button className={`button-normal admin-mode-button ${mode !== 'save' ? 'button-highlight' : ''}`} mode="edit" onClick={handleRadioChange}>
                    Editar Planta
                    </button>
            </div>

            <Select placeholder="Selecione a planta a ser editada..." options={plants} value={plant.id} className={`admin-select ${mode === 'save' ? 'hidden' : ''}`} onChange={option => fetchAndSetPlant(option.value)} />

            <div className="admin-current">
                <div className="admin-input">
                    <div className="admin-input-names">
                        <input type="text" placeholder="Nome da planta..." id="name" value={plant.name} onChange={handleFieldUpdate} />

                        <input type="text" placeholder="Nome científico..." id="scientific_name" value={plant.scientific_name} onChange={handleFieldUpdate} />
                    </div>

                    <input type="text" placeholder="Url da imagem..." id="img" value={plant.img} onChange={handleFieldUpdate} />

                    <select id="id_category" placeholder="Categorias..." value={plant.id_category} onChange={handleFieldUpdate}>
                        {categories.map(cat => (
                            <option value={cat.id}>{cat.name}</option>
                        ))}
                    </select>

                    <ReactQuill modules={{ toolbar, imageResize: {} }} id="content" value={plantContent || ''} onChange={text => setPlantContent(text)} />

                    <div className="admin-input-buttons">
                        <button className="button-danger" onClick={clear}>Cancelar</button>
                        <button className={`button-danger ${mode === 'save' ? 'hidden' : ''}`} onClick={handleDelete}>Excluir</button>
                        <button className="button-save" onClick={handleSave}>Salvar</button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default AdminPlant;
