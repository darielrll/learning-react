
import { render, screen, fireEvent } from "@testing-library/react"
import { GifItem } from "../../src/components";

describe('Pruebas a GifItem', () => { 

    const title = "Test Title";
    const url = "https://testurl.com/test.gif";

    test('debe hacer match con el snapshot', () => {
        const {container} = render( <GifItem  title={title} url={url}/> )       

        expect(container).toMatchSnapshot()
    })

    // test('debe mostrar la url y el title', () => {
    //     const title = "Test Title";
    //     const url = "https://testurl.com/test.gif";
    //     render( <GifItem title={title} url={url} /> )       

    //     const imgElement = screen.getByRole('img');
    //     expect(imgElement.src).toBe(url);
    //     expect(imgElement.alt).toBe(title);

    //     expect(screen.getByText(title)).toBeTruthy();
    // })

    // test('debe lanzar error si no se reciben title y url', () => {
        
    //     render( <GifItem  /> )

    //     // console.error = jest.fn(); // Mock console.error to suppress error output in test

    //     // expect(() => render( <GifItem /> )).toThrow();
    //     // expect(console.error).toHaveBeenCalled();
    // })

})