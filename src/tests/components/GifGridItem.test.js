import React from 'react';
import { shallow } from 'enzyme';    
import GifGridItem from '../../components/GifGridItem';

describe('Pruebas en <GifGridItem />', () => {
    
    const title = 'Hola mundo';
    const url = 'https://localhost/algo.jpg';


    test('debe mostrar el componente correctamente ', () => {



        const wrapper = shallow( <GifGridItem 
                title={ title }
                url = { url }
                /> );
        expect( wrapper ).toMatchSnapshot();
    })
    
    
    
})