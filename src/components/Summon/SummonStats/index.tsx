import { useContext } from 'react';
import SummonStatsNaturalStars from './SummonStatsNaturalStars';
import { SummonContext } from '../../../contexts/summon.context';

const SummonStats = () => {
	const { allSummonedMonsters } = useContext(SummonContext);

	return (
		<div className="flex flex-col justify-center items-center">
			<h2 className="text-xl text-[#F3BD4B] py-4">SUMMONED STATS</h2>
			<div className="flex flex-row justify-between lg:gap-72 md:gap-8 gap-8">
				<SummonStatsNaturalStars starNumber={3} monsterNumber={allSummonedMonsters.filter(monster => monster.natural_stars === 3).length} />
				<SummonStatsNaturalStars starNumber={4} monsterNumber={allSummonedMonsters.filter(monster => monster.natural_stars === 4).length} />
				<SummonStatsNaturalStars starNumber={5} monsterNumber={allSummonedMonsters.filter(monster => monster.natural_stars === 5).length} />
			</div>
		</div>
	);
};

export default SummonStats;