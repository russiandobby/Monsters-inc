import React, { Component } from 'react';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';

import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state = {
      monsters:[
        
      ],
      searchField:''
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters:users}));
  }

  onChange =(e)=>{
    // console.log(e.target.value);
    // setState is asynchronous so 1 letter behind
    this.setState({searchField:e.target.value},()=>console.log(this.state.searchField));
    
  }
  handleChange =(e)=>{
    this.setState({searchField:e.target.value});
  }

  render(){
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monster Relodex</h1>
        {/* <input type="search" placeholder='Search Monsters...' onChange={this.onChange}/> */}
        <SearchBox placeholder='Search Monsters...' handleChange={this.handleChange} />
        <CardList monsters={filteredMonsters}/>
        
       
      </div>
    );
  }
  }


export default App;
