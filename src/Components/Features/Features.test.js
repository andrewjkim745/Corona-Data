import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Features from './Features';
import layout from '../../assets/layout.jpg'
import layout2 from '../../assets/layout2.jpg'
import layout3 from '../../assets/layout3.jpg'



test("Features component renders properly", () => {
    render(<Features/>)


    let column1Image = screen.getByAltText(/Layout/i)
    expect(column1Image).toHaveAttribute('src', layout)
    expect(column1Image).toHaveAttribute('alt', 'Layout')
    let column2Image = screen.getByAltText(/ideas/i)
    expect(column2Image).toHaveAttribute('src', layout2)
    expect(column2Image).toHaveAttribute('alt', 'ideas')
    let column3Image = screen.getByAltText(/posts/i)
    expect(column3Image).toHaveAttribute('src', layout3)
    expect(column3Image).toHaveAttribute('alt', 'posts')

})