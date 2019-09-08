import './random.js';
import {situations} from './situations.js';

const occurances = [
	{n: "bizarre", p: 1, s: situations.bizarre},
	{n: "unprecedented", p: 3, s: situations.unprecedented},
	{n: "strange", p: 6, s: situations.strange},
	{n: "rare", p: 10, s: situations.rare},
	{n: "uncommon", p: 20, s: situations.uncommon},
	{n: "common", p: 60, s: situations.common}
];

function generateSituation(){
	let totalProbability = [];
	let randomNumber = Math.random();
	let sum = 0;
	let i = 0;

	occurances.forEach((occurance,index)=>{
		sum += (occurance.p / 100.0);
		totalProbability[index] = sum;
	})

	for(i = 0 ; i < totalProbability.length && randomNumber >= totalProbability[i]; i++ );

	return occurances[i].s.random();
}

export default generateSituation;
