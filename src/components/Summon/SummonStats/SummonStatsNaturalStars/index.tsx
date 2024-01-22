import { useContext } from 'react';
import Star from './Star';
import { SummonContext } from '../../../../contexts/summon.context';

type StarAndMonsterNumberType = {
    starNumber: number,
    monsterNumber: number
}

const SummonStatsNaturalStars = ({starNumber, monsterNumber}: StarAndMonsterNumberType) => {
	const { updateStarFilter, starFilter } = useContext(SummonContext);
	const isClicked = starFilter.find((star) => star === starNumber);

	const stars = Array.from({ length: starNumber }, (_, index) => <Star key={index} />);

	return (
		<button 
			className={`flex flex-col justify-center items-center ${isClicked ? 'opacity-25' : ''}`}
			onClick={() => {
				updateStarFilter(starNumber);
			}}
		>
			<div className="flex">{stars}</div>
			<p className="text-xl text-[#F3BD4B] font-medium py-4">{monsterNumber}</p>
		</button>
	);
};

export default SummonStatsNaturalStars;