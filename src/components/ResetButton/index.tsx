import { useContext } from 'react';
import { SummonContext } from '../../contexts/summon.context';

const ResetButton = () => {
	const { resetAllSummonedMonsters } = useContext(SummonContext);

	return(
		<button 
			className="text-[#F3BD4B] bg-[#351E0B] py-1 px-6 rounded-2xl mx-auto block cursor-pointer hover:text-white"
			onClick={() => {
				resetAllSummonedMonsters();
			}}
		>Reset Summons
		</button>
	);
};

export default ResetButton;