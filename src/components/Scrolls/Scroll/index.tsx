import { useContext } from 'react';
import { SummonContext } from '../../../contexts/summon.context';

type ScrollType = {
    name: string,
    urlImage: string
}

const Scroll = ({name, urlImage}: ScrollType) => {
	const { changeChosenScroll, chosenScroll } = useContext(SummonContext);

	return(
		<button className={`rounded-md bg-[#130D06] border border-[#9F662E] flex flex-col justify-center items-center py-2 px-3 space-y-2 ${chosenScroll === name ? 'border-[#F3BD4B]' : ''} min-w-24`} type="button"
			onClick={() => {
				changeChosenScroll(name);}
			}
		>
			<img src={urlImage} alt={name} className="rounded-full md:w-14 md:h-14 w-10 h-10"/>
			<h2 className="md:text-base text-xs text-white ">{name}</h2>
		</button>
	);
};

export default Scroll;