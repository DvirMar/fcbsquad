import React from 'react';
import Card from './Card';

const CardList = ( { players } ) => {
 return(
   <div>
      {
      	players.map((user,i) => {
 	        return(
 	          <Card 
 	            key={i} 
 	            link={players[i].link} 
 	            name={players[i].name} 
 	            position={players[i].position}
 	            number={players[i].number}
 	            nationality={players[i].nationality}
 	          />
 	        );
        })   
    }
   </div>
 );
}

export default CardList;