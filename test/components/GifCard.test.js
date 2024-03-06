import { GifCard } from '../../src/components/GifCard';
import { render, screen } from "@testing-library/react";

describe('GifCard test', () => {
    const title = 'Goku';
    const url = 'https://dragonball.com/imagendegoku.jpg';
    test('Debe hacer match con el snapshot', () => {
        const { container } = render( <GifCard title={title} url={url}/> );
        expect( container ).toMatchSnapshot()
    });

    test('Debe mostrar el url y el atl indicado', () => {
        render( <GifCard title={title} url={url}/> );
        // expect( screen.getByRole('img').src ).toBe(url);
        // expect( screen.getByRole('img').alt ).toBe(title);
        const { src, alt } = screen.getByRole('img');
        expect( src ).toBe(url);
        expect( alt ).toBe(title);
    });

    test('Debe mostrar el titulo en el componente', () => { 
        render( <GifCard title={title} url={url}/> );
        expect( screen.getByText(title) ).toBeTruthy();
    });
 })