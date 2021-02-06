import React from 'react';
import { shallow } from 'enzyme';    
import GifGridItem from '../../components/GifGridItem';

describe('Pruebas en <GifGridItem />', () => {
    
    const title = 'Hola mundo';
    const url = 'https://localhost/algo.jpg';

    const wrapper = shallow( <GifGridItem 
            title={ title }
            url = { url }
            /> );

    test('debe mostrar el componente correctamente ', () => {



        expect( wrapper ).toMatchSnapshot();
    })
    
    test('debe tener un párrafo con el title', () => {
        
        const p = wrapper.find( 'p' );
        expect( p.text().trim() ).toBe( title );

    })
    
    test('debe tener la imagen igual a la url y el alt al title', () => {
        
        const img = wrapper.find('img');
        // console.log(img.props());

        expect( img.props().src.trim() ).toBe(url);
        expect( img.props().alt.trim() ).toBe(title);

    })

    test('debe tener la clase animate__fadeInUp', () => {
        
        const div = wrapper.find('div');
        // console.log( div.prop('className') );
        const className = div.prop('className');

        expect(className.includes('animate__fadeInUp')).toBe(true);
    })
    
    
    
    
})
