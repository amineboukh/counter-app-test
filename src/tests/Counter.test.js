import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import Counter from '../components/Counter';

test('increment', async () => {
    render(<Counter />);
    await userEvent.click(screen.getByText(/increment/i));
    expect(screen.getByText(/count/i)).toBeInTheDocument();
})

test('decrement', async () => {
    render(<Counter />);
    await userEvent.click(screen.getByText(/decrement/i));
    expect(screen.getByText(/count/i)).toBeInTheDocument();
})

test('reset', async () => {
    render(<Counter />);
    await userEvent.click(screen.getByText(/reset/i));
    expect(screen.getByText(/count/i)).toBeInTheDocument();
})
