import React, { useState } from 'react';
import AddCategory from './AddCategory';
import GifGrid from './GifGrid';


const GifExpertApp = () => {

    const [categories, setcategories] = useState([ 'Dragon Ball' ]);

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
                categories.map( category => (
                    <GifGrid 
                        key = { category }
                        category = { category }
                    />
                ))
            }
            </ol>

        </>
    )
}

export default GifExpertApp;
 