import React from 'react';

const Card = ({link,name, position, number,nationality}) => {
	return (
		<div className='tc dib br3 pa3 ma2 grow bw2 shadow-5'>
		  <img alt='player' src={link} width="200" height="300"/>
		  <div>
		    <h2>{name}</h2>
		    <p>{position}</p>
		    <p>{number}</p>
		    <p>{nationality}</p>
		  </div>
		</div>
	);
}

export default Card;