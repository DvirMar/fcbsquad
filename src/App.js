import React from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox'
import { players } from './playersData';
import Scroll from './Scroll';
import './App.css';

class App extends React.Component {
	constructor () {
		super ()
		this.state= {
			players: players,
			searchfield: ''
		}
	}

	onSearchChange = (event) => {
		this.setState({searchfield: event.target.value})
	}

    render () {
    	const filteredPlayers=this.state.players.filter(players=>{
			return players.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})
    	return (
       <div className='tc'>
     	<h1>FCB Squad</h1>
		<SearchBox searchChange= { this.onSearchChange}/>
		<Scroll>
		  <CardList players={filteredPlayers}/>
        </Scroll>
	   </div>
	  );
    }
	  
}

export default App;