import Star from '../../SummonStats/SummonStatsNaturalStars/Star';

type MonsterType = {
    name: string,
    element: string,
	image: string,
	natural_stars: number,
	awaken_name?: string 
}

const MonsterSummoned = ({name, element, image, natural_stars, awaken_name}: MonsterType) => {

	// Fonction pour générer le tableau de composants Star
	const generateStars = (numStars: number) => {
		const stars = [];
		for (let i = 0; i < numStars; i++) {
			stars.push(<Star key={i} />);
		}
		return stars;
	};

	return(
		<div className="bg-[#271505] flex flex-col justify-center items-center py-4 px-4 lg:px-10 lg:py-8">
			<img src={`https://swarfarm.com/static/herders/images/monsters/${image}`} alt={name} className="rounded-full lg:w-28 lg:h-28 w-16 h-16 border-4 border-[#F3BD4B]"/>
			<h3 className="text-white lg:text-base text-xs pt-6 min-w-56 text-center">{element} {name}</h3>
			<h2 className="lg:text-2xl text-lg text-[#F3BD4B] pt-4">{awaken_name?.toUpperCase()}</h2>
			<div className="flex pt-2">{generateStars(natural_stars)}</div>
		</div>
	);
};

export default MonsterSummoned;