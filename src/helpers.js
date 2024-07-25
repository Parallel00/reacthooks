import uuid from "uuid";

function choice(values) {
  const randIdx = Math.floor(Math.random() * values.length);
  return values[randIdx];
}

function cardFrm(dt){
	return {
		image: dt.cards[0].image,
		id: uuid()
	};
}

function charFrm(dt){
	return{
		id: uuid(),
		front: dt.sprites.front_default,
		back: dt.sprites.back_default,
		name: dt.name,
		stats: dt.stats.map(stat => ({
			value: stat.base_stat,
			name: stat.stat.name
		}))
	};
}

export { choice, cardFrm, charFrm };