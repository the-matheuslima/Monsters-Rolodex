import React, { useState, useEffect, ChangeEvent } from 'react';

import SearchBox from './components/search-box';
import CardList from './components/card-list';
import { getData } from './components/utils/data';
import './App.css';

export type Monster = {
  id: string;
  name: string;
  email: string;
};

function App() {
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [filteredMonsters, setFilterMonsters] = useState(monsters);

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getData(
        'https://jsonplaceholder.typicode.com/users'
      );
      setMonsters(users);
    };

    fetchUsers();
  }, []);
  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    setFilterMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className='App'>
      <h1 className='app-title'>Monsters Rolodex</h1>

      <SearchBox
        className='monsters-search-box'
        onChangeHandler={onSearchChange}
        placeholder='search monsters'
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
}

export default App;
