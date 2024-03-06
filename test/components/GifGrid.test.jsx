import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas de GifGrid', () => {

    const category = 'Goku'

    test('debe mostrar el loading inicialmente', () => { 

        useFetchGifs.mockReturnValue({
            gifs: [],
            isLoading: true
        });
        
        render(<GifGrid category={category}/>);
        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category));
    });

    test('debe mostrar items cuando se cargan las imagenes useFetchGifs', () => {

        const gifs = [
            {
                id: 'ABC',
                title: 'Saitama',
                url: 'https://localhost/saitama.jpg'
            },
            {
                id: '123',
                title: 'Goku',
                url: 'https://localhost/goku.jpg'
            }
        ];

        useFetchGifs.mockReturnValue({
            gifs: gifs,
            isLoading: true
        });
        
        render(<GifGrid category={category}/>);

        expect(screen.getAllByRole('img').length).toBe(2);

    });
})