import { useState } from 'react';
import { render } from 'react-dom';
import AdminCategory from './AdminCategory';
import './AdminContainer.css'
import AdminPlant from './AdminPlant'

function AdminContainer() {

    const [administrating, setAdministrating] = useState('plants')

    const handleAdministratingButton = (e) => {
        setAdministrating(e.target.id)
    }

    return (
        <div className="admin-container">
            <div className="administrating-buttons-container">
                <button className={`button-normal ${administrating !== 'categories' ? 'button-highlight' : ''}`} onClick={handleAdministratingButton} id="plants">Plantas</button>
                <button className={`button-normal ${administrating !== 'plants' ? 'button-highlight' : ''}`} onClick={handleAdministratingButton} id="categories">Categorias</button>
            </div>
    
            {administrating !== 'categories' ? <AdminPlant/> : <AdminCategory/>}

        </div>

    )
}

export default AdminContainer;
