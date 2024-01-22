import { useContext } from 'react';
import MonsterSummoned from './MonsterSummoned';
import { SummonContext } from '../../../contexts/summon.context';


const MonstersSummoned = () => {
	const { allSummonedMonsters, starFilter } = useContext(SummonContext);
	const filteredMonsters = allSummonedMonsters.filter(monster => !starFilter.includes(monster.natural_stars));


	// Inverse l'ordre des éléments dans un nouveau tableau
	const reversedMonsters = [...filteredMonsters].reverse();

	return(
		<div className="my-20 grid lg:grid-cols-5 md:grid-cols-4 grid-cols-2 gap-x-6 gap-y-12">
			{
				reversedMonsters.map((monster, index) => (
					<MonsterSummoned key={index} {...monster} />
				))
			}
		</div>
	);
};

export default MonstersSummoned;