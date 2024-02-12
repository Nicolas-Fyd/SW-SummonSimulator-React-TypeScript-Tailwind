import Scrolls from './components/Scrolls';
import Summon from './components/Summon';
import SummonTool from './components/SummonTool';
import { SummonContextProvider } from './contexts/summon.context';
import ResetButton from './components/ResetButton';

function App() {

	return (
		<SummonContextProvider>
			<div className="bg-[#271505] min-h-screen">
				<div className="max-w-[80%] mx-auto flex flex-col justify-center md:flex-row gap-3 lg:gap-64">
					<Scrolls />
					<SummonTool />
				</div>
				<ResetButton />
				<Summon />
			</div>
		</SummonContextProvider>

	);
}

export default App;
