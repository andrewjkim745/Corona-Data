import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Navbar from './Navbar'




test("Navbar renders properly and functions properly", () => {
    render(<Navbar/>)
    let navbar = screen.getByRole('navigation')
    let hamburger = screen.getByRole('button', {name: /Toggle Navigation/i})
    let dropdown = screen.getByText('Dropdown')
    let link = screen.getByText('Features')
    expect(navbar).toBeInTheDocument();
    expect(hamburger).toBeInTheDocument();
    expect(dropdown).toBeInTheDocument();
    userEvent.click(hamburger)
    expect(hamburger).toHaveClass('navbar-toggler')
    userEvent.click(dropdown)
    let dropdownEle = screen.getByText('Action')
    expect(dropdownEle).toBeInTheDocument();
    expect(link).toHaveAttribute('href', "#features")

    // research closest function
})