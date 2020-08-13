import React, { Component } from 'react';
import './App.css';

import {CardList} from '../src/components/card-list/card-list.component';
import {SearchBox} from '../src/components/search-box/search-box.component';

class App extends Component{

  constructor(){
    super();
    this.state = {
      monsters:[],
      searchField : ''
    };
  }

  componentDidMount(){
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(Response => Response.json())
    .then(users => this.setState({monsters : users}));
  }

  render(){
    const {monsters, searchField} = this.state;
    const filtredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
      <div className="App">
        <SearchBox placeholder = 'search monster' 
        handlechange = {e => this.setState({searchField : e.target.value})} />
        <CardList monsters = {filtredMonsters}/>
      </div>
    );
  }
}

export default App;
