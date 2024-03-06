import { render, screen, fireEvent} from '@testing-library/react';
import { GifinderApp } from '../src/GifinderApp';

describe('Pruebas en <GifinderApp />', () => {

    const category = 'Naruto';

    test('debería permitir agregar una nueva categoría que no esté presente en el arreglo', () => {
        render(<GifinderApp />);
        const input = screen.getByRole('textbox')
        const form = screen.getByLabelText('form');

        fireEvent.change(input, { target: { value: category } });
        fireEvent.submit(form);

        const gifGrids = screen.getAllByText(category);
        expect(gifGrids).toHaveLength(1);
    });


    test('no debería agregar una categoría que ya está en el arreglo', () => {
        render(<GifinderApp />);
        const input = screen.getByRole('textbox');
        const form = screen.getByLabelText('form');

        fireEvent.change(input, { target: { value: category } });
        fireEvent.submit(form);

        fireEvent.change(input, { target: { value: category } });
        fireEvent.submit(form);

        const gifGrids = screen.getAllByText(category);
        expect(gifGrids).toHaveLength(1);
    });
    
})
