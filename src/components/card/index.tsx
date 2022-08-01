import React from "react";
import { Monster } from "../../App";
import './style.scss';

type CardProps = {
    monster: Monster;
};

const Card = ({ monster }: CardProps) => {
    const { id, name, email } = monster;

    return (
        <li className="card__item">
            <img src={`https://robohash.org/${id}?set=set2&size=180x180`} alt={`monster ${name}`} />

            <h2>{name}</h2>
            <p>{email}</p>
        </li>
    );
}

export default Card;
