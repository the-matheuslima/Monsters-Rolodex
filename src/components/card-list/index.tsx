import { Monster } from '../../App';
import Card from '../card/';
import './style.scss';

type CardListProps = {
    monsters: Monster[];
};

const CardList = ({ monsters }: CardListProps) => {
    console.log(monsters);

    return (
        <ul className='card-list'>
            {monsters.map((monster) => (
                <Card key={monster.id} monster={monster} />
            ))}
        </ul>
    )
};

export default CardList
