import { allScrolls } from '../../datas/scrolls';
import Scroll from './Scroll';


const Scrolls = () => {
	return(
		<div className="md:grid md:grid-cols-2 flex md:gap-3 gap-2 min-w-40 overflow-x-auto py-10">
			{allScrolls.map(scroll => <Scroll key={scroll.id} {...scroll} />)}
		</div>
	);
};

export default Scrolls;