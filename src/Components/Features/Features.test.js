import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Features from './Features';
import layout from '../../assets/layout.jpg'




test("Features component renders properly", () => {
    render(<Features/>)


    let column1Image = screen.getByRole('img')
    expect(column1Image).toHaveAttribute('src', '/layout.jpg')
    expect(column1Image).toHaveAttribute('alt', 'layout')


})