import { allScrolls } from '../../datas/scrolls';
import Scroll from './Scroll';
import ScrollNumber from './ScrollNumber';


const Scrolls = () => {
	return(
		<div>
			<div className="md:grid md:grid-cols-2 flex md:gap-3 gap-2 min-w-40 overflow-x-auto pt-10 pb-4">
				{allScrolls.map(scroll => <Scroll key={scroll.id} {...scroll} />)}
			</div>
			<div className="grid grid-cols-3 gap-2 py-4">
				<ScrollNumber multiplier={1}/>
				<ScrollNumber multiplier={10}/>
				<ScrollNumber multiplier={100}/>
			</div>
		</div>
	);
};

export default Scrolls;