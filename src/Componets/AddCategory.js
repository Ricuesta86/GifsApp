import React, { useState } from 'react';
import PropTypes from 'prop-types';


const AddCategory = ({ setcategories }) => {

    const [inputvalue, setInputvalue] = useState('');

    const handleInputChange = (e)=>{
        setInputvalue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(inputvalue.trim().length > 2 ){
            setcategories( cats => [ inputvalue,...cats ]);
            setInputvalue('');
        }
        
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

AddCategory.propTypes = { 
    setcategories: PropTypes.func.isRequired
}

export default AddCategory
