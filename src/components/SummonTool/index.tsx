import { SummonContext } from '../../contexts/summon.context';
import Star from '../Summon/SummonStats/SummonStatsNaturalStars/Star';
import { useContext} from 'react';

const SummonTool = () => {
	const { allSummonedMonsters, handleClick, isSummonButtonClicked, scrollNumber } = useContext(SummonContext);

	const lastSummonedMonster = allSummonedMonsters[allSummonedMonsters.length - 1];

	// Fonction pour générer le tableau de composants Star
	const generateStars = (numStars: number) => {
		const stars = [];
		for (let i = 0; i < numStars; i++) {
			stars.push(<Star key={i} />);
		}
		return stars;
	};

	return(
		<div className="flex flex-col items-center py-10 relative" >
			{/* <button className="cursor-pointer outline-none bg-[#F3BD4B] text-black text-lg flex items-center py-2 px-10 rounded-lg shadow-[0_6px_#9F662E] active:shadow-[0_3px_#9F662E] active:translate-y-1" onClick={handleClick}>SUMMON</button> */}
			<button className="cursor-pointer outline-none bg-[#F3BD4B] text-black text-lg flex items-center py-2 px-10 rounded-lg shadow-[0_6px_#9F662E] active:shadow-[0_3px_#9F662E] active:translate-y-1" onClick={() => { for (let i = 0; i < scrollNumber; i++) { handleClick(); } }}>SUMMON</button>
			{!isSummonButtonClicked ? (
				<>
					<p className="text-xs text-white pt-10">Select a scroll then click the summon button above to begin.</p>
					<h2 className="text-4xl text-white font-medium pt-6">GOOD LUCK !</h2>
				</>
			) : (
				<>
					<h3 className="text-xl text-white mt-6">{lastSummonedMonster.element} {lastSummonedMonster.name}</h3>
					<h2 className="text-3xl text-white font-bold mt-2">{lastSummonedMonster.awaken_name}</h2>
					<div className="flex pt-2">{generateStars(lastSummonedMonster.natural_stars)}</div>
					<img src={`https://swarfarm.com/static/herders/images/monsters/${lastSummonedMonster.image}`} alt={lastSummonedMonster.awaken_name ?? 'monster_name'} className="rounded-full w-28 h-28 border-4 border-[#F3BD4B] absolute z-10 bottom-44 animate-[bounce_3s_ease-in-out_infinite]"/>
				</>
			)
			}
			<img src="/summonhenge.png" alt="Summonhenge" className="pt-16 h-72 w-72 z-0"/>
		</div>
	);
};

export default SummonTool;