import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Navbar from './Navbar'




test("Navbar renders properly", () => {
    render(<Navbar/>)

    let navbar = screen.getByRole('navigation')
    let hamburger = screen.getByRole('button', {name: /Toggle Navigation/i})
    expect(navbar).toBeInTheDocument();
    expect(hamburger).toBeInTheDocument();

    userEvent.click(hamburger)

    expect(hamburger).toHaveBeenCalledTimes(1)

})