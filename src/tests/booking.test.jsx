import { render, screen } from '@testing-library/react';
import { Main } from '../components/main/main';

test('Renders the BookingForm heading', () => {
    render(<Main />);
    const button = screen.getByText('Reserve a table');
    expect(button).toBeInTheDocument();
});