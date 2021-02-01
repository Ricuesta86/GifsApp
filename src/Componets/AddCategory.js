import React, { useState } from 'react'

const AddCategory = () => {

    const [inputvalue, setInputvalue] = useState('Hola mundo');

    const handleInputChange = (e)=>{
        setInputvalue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submit hecho');
    }
    return (
        <form onSubmit = { handleSubmit }>            
            <input 
                type="text"
                value={ inputvalue }
                onChange = { handleInputChange }
            />
        </form>

    )
}

export default AddCategory
