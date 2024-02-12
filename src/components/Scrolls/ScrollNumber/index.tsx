import { useContext } from 'react';
import { SummonContext } from '../../../contexts/summon.context';

type ScrollNumberType = {
    multiplier: number,
}

const ScrollNumber = ({multiplier}: ScrollNumberType) => {
	const { scrollNumber, updateScrollNumber } = useContext(SummonContext);

	return(
		<button className={`text-white text-xl font-bold rounded-md bg-[#130D06] border border-[#9F662E] flex flex-col justify-center items-center py-2 px-1 space-y-2 lg:min-w-16 ${scrollNumber === multiplier ? 'border-[#F3BD4B]' : ''}`} type="button" onClick={() => {updateScrollNumber(multiplier);}}>x {multiplier}</button>
	);
};

export default ScrollNumber;