import { deletePlant, fetchCategories, fetchPlantById, fetchPlants, savePlant, saveCategory, fetchCategoryById, deleteCategory } from '../../../api'
import { useEffect, useState } from 'react';
import './AdminCategory.css'

import Select from 'react-select'
import { toast } from 'react-toastify'
import 'react-quill/dist/quill.snow.css'
import { ImageResize } from 'quill-image-resize-module'
import * as ReactQuill from 'react-quill'


function AdminCategory() {

    ReactQuill.Quill.register('modules/imageResize', ImageResize)

    useEffect(() => {
        fetchAndSetCategories()
    }, [])

    const [categories, setCategories] = useState([])
    const [category, setCategory] = useState({ id: null })

    const [mode, setMode] = useState('save')

    const fetchAndSetCategories = () => {
        fetchCategories()
            .then(res => setCategories(res.data.map(c => {
                return { value: c.id, label: c.name }
            })))
    }

    const clear = () => {
        setCategory({ id: null, name: '', icon: '' })
        setMode('save')
        fetchAndSetCategories()
    }
    
    const handleRadioChange = (e) => {
        setMode(e.target.getAttribute('mode'))
        setCategory({ id: null, name: '', icon: '' })
        fetchAndSetCategories()
    }

    const handleSave = () => {
        saveCategory(category).then(res => {
            toast.success(`Categoria salva com sucesso`)
            clear()
        })
            .catch((err) => {
                toast.error(`Erro: ${err}`)
            })

    }

    const fetchAndSetCategory = (id) => {
        fetchCategoryById(id)
            .then(res => {
                setCategory({
                    id: res.data.id,
                    name: res.data.name,
                    icon: res.data.icon,
                })
            })
    }

    const handleDelete = () => {
        deleteCategory(category.id)
            .then(() => {
                toast.success('Categoria excluída com sucesso')
            })
            .catch((err) => {
                toast.error(err.response.data)
            })
        clear()
    }

    const handleFieldUpdate = (e) => {
        setCategory({ ...category, [e.target.id]: e.target.value })
    }

    const handleIconButtonClick = (e) => {
        document.getElementById('category-icon-input').click()
    }

    const handleIconFileInput = (e) => {
        const file = e.target.files[0]
        const reader = new FileReader()

        reader.readAsDataURL(file)
        reader.onloadend = () => {
            setCategory({...category, icon: reader.result})
        }
    }

    return (

        <>
            <h1>Administração de Categorias</h1>
            <div className="admin-mode">
                <button className={`button-normal admin-mode-button ${mode !== 'edit' ? 'button-highlight' : ''}`} mode="save" onClick={handleRadioChange}>
                    + Nova Categoria
                    </button>

                <button className={`button-normal admin-mode-button ${mode !== 'save' ? 'button-highlight' : ''}`} mode="edit" onClick={handleRadioChange}>
                    Editar Categoria
                    </button>
            </div>

            <Select placeholder="Selecione a categoria a ser editada..." options={categories} value={category.id} className={`admin-select ${mode === 'save' ? 'hidden' : ''}`} onChange={option => fetchAndSetCategory(option.value)} />

            <div className="admin-current admin-current-category">
                <div className="admin-input">

                    <input type="text" placeholder="Nome da Categoria..." id="name" value={category.name} onChange={handleFieldUpdate} />

                    <input type="file" id="category-icon-input" className="hidden" accept="image/svg+xml" onChange={handleIconFileInput} />

                    <button className="button-normal button-input" onClick={handleIconButtonClick}>Selecionar ícone em svg</button>

                    <h3 className={`${category.icon && category.icon.length > 0 ? '' : 'hidden'}`}>Ícone:</h3>
                    <img src={category.icon} className={`category-icon ${category.icon && category.icon.length > 0 ? '' : 'hidden'}`}/>

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

export default AdminCategory;
