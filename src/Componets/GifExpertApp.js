import React, { useState } from 'react';
import AddCategory from './AddCategory';


const GifExpertApp = () => {

    const [categories, setcategories] = useState(['One Push', 'Dragon Ball','Bleach']);

    // const handleAdd =() => {
    //     // setcategories(
    //     //     [...categories,'Black clover']
    //     // )
    //     setcategories(cats=>[...cats,'Black clover'])
    // }

    return (
        <>  
            <h2>GifExpertApp</h2>
            <AddCategory setcategories = { setcategories }/>
            <hr/>
            <ol>
            {
                categories.map( category => {
                    return <li key={category}>{category}</li>
                })
            }
            </ol>

        </>
    )
}

export default GifExpertApp;
 