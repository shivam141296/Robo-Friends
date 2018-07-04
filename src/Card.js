import React from 'react';

const Card = ({name,email,id}) => {
	
	return (
		<div className='bg-light-green dib pa3 ma2 grow bw2 shadow-5 tc'>
			<img alt='photo' src={`https://robohash.org/${id}?`} height={200} width={200} />
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>

		</div>
		);
}
export default Card;