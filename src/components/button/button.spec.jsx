import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Button } from "."


describe('<Button />', () => {

    it('should render the button with the text "Load more"', () => {
        render(<Button text="Load more" />)

        expect.assertions(1)

        const button = screen.getByRole('button', { text: /load more/i })
        expect(button).toBeInTheDocument('class', 'button')
    })

    it('should be a function when on button click', () => {
        const fn = jest.fn()
        render(<Button text="Load more" onClick={fn}/>)

        const button = screen.getByRole('button', { text: /load more/i })

        userEvent.click(button)

        expect(fn).toHaveBeenCalledTimes(1)

    })

    it('should be disable when disabled is true', () => {

        render(<Button text="Load more" disabled={true} />)

        const button = screen.getByRole('button', { text: /load more/i })

        expect(button).toBeDisabled()
    })

    it('should be enabled when disabled is false', () => {

        render(<Button text="Load more" disabled={false} />)

        const button = screen.getByRole('button', { text: /load more/i })

        expect(button).toBeEnabled()
    })

    it('should match snapshot', () => {

        const { container } = render(<Button text="Load more" disabled={false} />)
        
        expect(container.firstChild).toMatchSnapshot()
    })
})