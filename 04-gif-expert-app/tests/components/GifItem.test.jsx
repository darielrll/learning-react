
import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components";

describe('Pruebas a GifItem', () => { 

    const title = "Test Title";
    const url = "https://testurl.com/test.gif";

    test('debe hacer match con el snapshot', () => {
        const {container} = render( <GifItem  title={title} url={url}/> )       

        expect(container).toMatchSnapshot()
    })

    test('debe mostrar la url y el ALT indicado', () => {
        render( <GifItem title={title} url={url} /> )       

        const {src, alt} = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);
    })

    test('debe de mostrar el titulo en el componente', () => {
        render( <GifItem title={title} url={url} /> )       

        expect(screen.getByText( title )).toBeTruthy();
    })

    // TODO: this tests, how to capture the error
    // test('debe lanzar error si no se reciben title y url', () => {
        
    //     render( <GifItem  /> )

    //     console.error = jest.fn(); // Mock console.error to suppress error output in test

    //     expect(() => render( <GifItem /> )).toThrow();
    //     expect(console.error).toHaveBeenCalled();
    // })

})