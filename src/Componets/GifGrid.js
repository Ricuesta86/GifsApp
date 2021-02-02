import React from 'react';
import { useFetchGifs } from '../Hooks/useFetchGifs';
// import GifGridItem from './GifGridItem';
// import { getGifs } from '../Helpers/getGifs';

const GifGrid = ({category}) => {

    // const [images, setImages] = useState([])
    const { loading } = useFetchGifs();
    // useEffect(() => {
    //     getGifs(category)
    //         .then( setImages );
    // }, [ category ]);


    return (
        <>
            <h3>{ category }</h3>

            { loading ? 'Cargando .... ' : 'Dados Cargados.'}

            {/* <div className="card-grid">
                {
                    images.map( (image)=> (
                        <GifGridItem 
                            key = { image.id }
                            { ...image }
                        />
                    ))             
                }    
                
            </div> */}
        </>
    )
}

export default GifGrid
