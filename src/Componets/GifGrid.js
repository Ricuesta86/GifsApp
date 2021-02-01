import React from 'react'

const GifGrid = ({category}) => {

    const getGifs = async ()=>{
        const url='https://api.giphy.com/v1/gifs/search?q=Bleach&limit=10&api_key=rEt4L3uxG8ozsY4Tm8aWWIxvcpAvoTgv';
        const respuesta = await fetch(url);
        const {data} = await respuesta.json();
        const gifs = data.map(img =>{
            return {
                id : img.id,
                title : img.title,
                url : img.images?.downsized_medium.url
            }
        });
        console.log(gifs);
    }

    getGifs();

    return (
        <>
            <h3>{ category }</h3>
        </>
    )
}

export default GifGrid
