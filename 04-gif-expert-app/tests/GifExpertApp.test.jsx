import { render, screen, fireEvent} from "@testing-library/react"
import { GifExpertApp } from "../src/GifExpertApp"

describe('Pruebas en GifExpertApp', () => { 
    // TODO: Tarea
    /*
        - probar onAddCategory
        - escribir en el input y tocar enter a ver que pasa
        - que pasa si vuelvo a escribir la misma categoria
        - que pasa si escribo otra categoria
        - [Tomar el snapshot]
    
    Nota: no dedicarle mas de 15-20 min 
    */
    
    test('cuando inicia debe mostrar header', () => { 
        const { container } = render( <GifExpertApp /> )
        // screen.debug()

        expect( screen.getByRole('heading', {level: 1}).innerHTML ).toContain('GifExpertApp');

        /*
            TODO: como capturar el state categories del componente
            GifExpertApp para saber cuando tiene elementos o no,
            le necesito para poder hacer pruebas
        */
    })

    test("Debe agregar una nueva categoría si no existe en el estado", () => {
        render(<GifExpertApp />);
    
        // Obtener el input
        const input = screen.getByRole("textbox");
        const form = input.closest("form"); // Suponiendo que está dentro de un <form>
    
        // Simular escribir una nueva categoría
        fireEvent.input(input, { target: { value: "One Piece" } });
    
        // Simular enviar el formulario
        fireEvent.submit(form);

        // screen.debug();
    
        // Verificar si la nueva categoría está en el estado (a través del DOM)
        expect(screen.getByText("One Piece")).toBeTruthy();
      });

      test("No debe agregar una categoría repetida", () => {
        render(<GifExpertApp />);
    
        const input = screen.getByRole("textbox");
        const form = input.closest("form");
    
        // Intentar agregar la misma categoría que ya está en el estado ('Naruto')
        fireEvent.input(input, { target: { value: "Naruto" } });
        fireEvent.submit(form);
    
        // Verificar que solo hay una instancia de 'Naruto'
        const categories = screen.getAllByText("Naruto");
        expect(categories.length).toBe(1);
      });

 })