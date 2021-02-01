import React, { useState } from 'react';


const GifExpertApp = () => {

    // const categories = ['One Push', 'Dragon Ball','Bleach'];
    const [categories, setcategories] = useState(['One Push', 'Dragon Ball','Bleach']);

    const handleAdd =() => {
        // setcategories(
        //     [...categories,'Black clover']
        // )
        setcategories(cats=>[...cats,'Black clover'])
    }

    return (
        <>  
            <h2>GifExpertApp</h2>
            <hr/>
            <button  onClick= { handleAdd }>Addicionar</button>
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
 