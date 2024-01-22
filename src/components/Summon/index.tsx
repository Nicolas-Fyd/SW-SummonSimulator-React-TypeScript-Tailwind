import MonstersSummoned from './MonstersSummoned';
import SummonStats from './SummonStats';

const Summon = () => {
	return(
		<div className="bg-[#351E0A] mt-6 flex flex-col justify-center items-center" >
			<SummonStats />
			<div className="border-b border-[#F3BD4B] w-[80%]"></div>
			<MonstersSummoned />
		</div>
	);
};

export default Summon;