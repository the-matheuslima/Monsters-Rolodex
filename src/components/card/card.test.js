import { render, screen } from '@testing-library/react';
import Card from './index';

it('expect to render Card component', () => {
    render(<Card monster={{ id: '2', name: 'Leanne Graham', email: 'Sincere@april.biz' }} />)

    const getName = screen.getByText('Leanne Graham')
    expect(getName).toBeInTheDocument();

    const getEmail = screen.getByText('Sincere@april.biz')
    expect(getEmail).toBeInTheDocument();
})
