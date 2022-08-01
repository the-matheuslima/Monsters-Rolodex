import { render, screen } from '@testing-library/react'
import CardList from '.'


describe('Should render <CardList/>', () => {
    const mockListMoster = [
        {
            "id": 1,
            "name": "Leanne Graham",
            "username": "Bret",
            "email": "Sincere@april.biz",
        },
        {
            "id": 2,
            "name": "Ervin Howell",
            "username": "Antonette",
            "email": "Shanna@melissa.tv",
        }
    ]
    it('Should render <CardList/>', () => {
        const view = render(<CardList monsters={mockListMoster} />);
        const firstName = screen.getByText('Leanne Graham')
        const secondyName = screen.getByText('Ervin Howell')

        expect(view).toBeTruthy()
        expect(firstName).toBeTruthy();
        expect(secondyName).toBeTruthy();
    })
})