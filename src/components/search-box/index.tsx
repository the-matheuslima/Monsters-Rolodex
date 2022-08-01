import { ChangeEvent } from "react";
import './style.scss'

type SearchBoxProps = {
    className: string;
    placeholder?: string;
    onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
};

const SearchBox = ({ placeholder, onChangeHandler }: SearchBoxProps) => {

    return (
        <input
            className={`search-box`}
            type='search'
            placeholder={placeholder}
            onChange={onChangeHandler}
        />
    )
};

export default SearchBox;
