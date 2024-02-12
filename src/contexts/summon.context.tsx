import { ReactNode, createContext, useState } from 'react';
import { monsters } from '../datas/monstersData';

export type MonsterType = {
    id: number,
    name: string,
    element: string,
    image: string,
    natural_stars: number,
    awakens_to: number | null,
	awaken_level: number,
    awaken_name?: string ,
};

type SummonContextType = {
    monsters: MonsterType[];
    allNonAwakenMonsters: MonsterType[];
    allSummonedMonsters: MonsterType[];
	chosenScroll: string;
	changeChosenScroll: (scrollname: string) => void;
	starFilter: number[];
	updateStarFilter: (starNumber: number) => void;
	resetAllSummonedMonsters: () => void;
	handleClick: (event?: React.MouseEvent<HTMLButtonElement>, scroll?: string) => void; // Scroll optional because it's only chosen in context not in the SummonTool component
	isSummonButtonClicked: boolean;
	setSummonButtonToTrue: () => void;
	scrollNumber: number;
	updateScrollNumber: (multiplier: number) => void;
}

const defaultContextValue: SummonContextType = {
	monsters: [],
	allNonAwakenMonsters: [],
	allSummonedMonsters: [],
	chosenScroll: '',
	changeChosenScroll: () => {},
	starFilter: [],
	updateStarFilter: () => {},
	resetAllSummonedMonsters: () => {},
	handleClick: () => () => {},
	isSummonButtonClicked: false,
	setSummonButtonToTrue: () => {},
	scrollNumber: 1,
	updateScrollNumber: () => {},
};

export const SummonContext = createContext<SummonContextType>(defaultContextValue);

const SummonContextProvider = ({ children }: { children: ReactNode}) => {
	const [allMonsters] = useState<MonsterType[]>(monsters);
	const [allNonAwakenMonsters] = useState<MonsterType[]>(allMonsters.filter(monster => monster.awaken_level === 0));
	const [allSummonedMonsters, setAllSummonedMonsters] = useState<MonsterType[]>([]);
	const [chosenScroll, setChosenScroll] = useState<string>('Mystical');
	const [starFilter, setStarFilter] = useState<number[]>([]);
	const [isSummonButtonClicked, setsummonButtonClicked] = useState(false);
	const [scrollNumber, setScrollNumber] = useState(1);
	
	// Fonction random number
	function generateRandomNumber(maxNumber: number) {
		return Math.floor(Math.random() * maxNumber) + 1;
	}
  
	// Summon function to Mystical scrolls
	const summonMysticalScroll = () => {
		const allNonAwakenElementaryMonsters = allNonAwakenMonsters.filter(monster => (monster.element === 'Fire' || monster.element === 'Water' || monster.element === 'Wind') && monster.name !== 'Ifrit' && monster.name !== 'Cow Girl');
		const randomNumber = generateRandomNumber(200);

		if (randomNumber >= 1 && randomNumber <= 183) {
			const monsters = allNonAwakenElementaryMonsters.filter(monster => monster.natural_stars === 3);
			const monsterIndex = generateRandomNumber(monsters.length) - 1;
			setAllSummonedMonsters(prevState => [...prevState, monsters[monsterIndex]]);
		} else if (randomNumber >= 184 && randomNumber <= 199) {
			const monsters = allNonAwakenElementaryMonsters.filter(monster => monster.natural_stars === 4);
			const monsterIndex = generateRandomNumber(monsters.length) - 1;
			setAllSummonedMonsters(prevState => [...prevState, monsters[monsterIndex]]);
		} else if (randomNumber === 200) {
			const monsters = allNonAwakenElementaryMonsters.filter(monster => monster.natural_stars === 5);
			const monsterIndex = generateRandomNumber(monsters.length) - 1;
			setAllSummonedMonsters(prevState => [...prevState, monsters[monsterIndex]]);
		}
	};

	// Summon function to Dark and Light scrolls
	const summonLightAndDarkScroll = () => {
		const allNonAwakenDarkAndLightMonsters = allNonAwakenMonsters.filter(monster => (monster.element === 'Light' || monster.element === 'Dark') && monster.name !== 'Ifrit' && monster.name !== 'Cow Girl');
		const randomNumber = generateRandomNumber(10000);
	
		if (randomNumber >= 1 && randomNumber <= 9365) {
			const monsters = allNonAwakenDarkAndLightMonsters.filter(monster => monster.natural_stars === 3);
			const monsterIndex = generateRandomNumber(monsters.length) - 1;
			setAllSummonedMonsters(prevState => [...prevState, monsters[monsterIndex]]);
		} else if (randomNumber >= 9366 && randomNumber <= 9965) {
			const monsters = allNonAwakenDarkAndLightMonsters.filter(monster => monster.natural_stars === 4);
			const monsterIndex = generateRandomNumber(monsters.length) - 1;
			setAllSummonedMonsters(prevState => [...prevState, monsters[monsterIndex]]);
		} else if (randomNumber >= 9966 && randomNumber <= 10000) {
			const monsters = allNonAwakenDarkAndLightMonsters.filter(monster => monster.natural_stars === 5);
			const monsterIndex = generateRandomNumber(monsters.length) - 1;
			setAllSummonedMonsters(prevState => [...prevState, monsters[monsterIndex]]);
		}
	};

	// Summon function to Elemental Scrolls
	const summonElementalScroll = (chosenElement: string) => {
		const filteredMonsters = allNonAwakenMonsters.filter(monster => monster.element === chosenElement && monster.name !== 'Ifrit' && monster.name !== 'Cow Girl');
		const randomNumber = generateRandomNumber(200);

		if (randomNumber >= 1 && randomNumber <= 183) {
			const monsters = filteredMonsters.filter(monster => monster.natural_stars === 3);
			const monsterIndex = generateRandomNumber(monsters.length) - 1;
			setAllSummonedMonsters(prevState => [...prevState, monsters[monsterIndex]]);
		} else if (randomNumber >= 184 && randomNumber <= 199) {
			const monsters = filteredMonsters.filter(monster => monster.natural_stars === 4);
			const monsterIndex = generateRandomNumber(monsters.length) - 1;
			setAllSummonedMonsters(prevState => [...prevState, monsters[monsterIndex]]);
		} else if (randomNumber === 200) {
			const monsters = filteredMonsters.filter(monster => monster.natural_stars === 5);
			const monsterIndex = generateRandomNumber(monsters.length) - 1;
			setAllSummonedMonsters(prevState => [...prevState, monsters[monsterIndex]]);
		}
	};

	// Summon function to Legendary scrolls
	const summonLegendaryScroll = () => {
		const allLegendaryMonsters = allNonAwakenMonsters.filter(monster => (monster.element === 'Fire' || monster.element === 'Water' || monster.element === 'Wind') && monster.name !== 'Ifrit' && monster.name !== 'Cow Girl');
		const randomNumber = generateRandomNumber(200);
	
		if (randomNumber >= 1 && randomNumber <= 187) {
			const monsters = allLegendaryMonsters.filter(monster => monster.natural_stars === 4);
			const monsterIndex = generateRandomNumber(monsters.length) - 1;
			setAllSummonedMonsters(prevState => [...prevState, monsters[monsterIndex]]);
		} else if (randomNumber >= 188 && randomNumber <= 200) {
			const monsters = allLegendaryMonsters.filter(monster => monster.natural_stars === 5);
			const monsterIndex = generateRandomNumber(monsters.length) - 1;
			setAllSummonedMonsters(prevState => [...prevState, monsters[monsterIndex]]);
		}
	};

	// Summon function to Ifrit or CowGirl scrolls
	const summonIfritOrCowgirlScroll = (chosenMonster: string) => {
		const filteredMonsters = allNonAwakenMonsters.filter(monster => (monster.element === 'Fire' || monster.element === 'Water' || monster.element === 'Wind') && monster.name === chosenMonster);
		
		const monsterIndex = generateRandomNumber(filteredMonsters.length) - 1;
		setAllSummonedMonsters(prevState => [...prevState, filteredMonsters[monsterIndex]]);
	};

  
	const changeChosenScroll = (scrollname: string) => {
		setChosenScroll(scrollname);
	};


	// Function that updates the starFilter array in order to filter the monsters by their star number.
	const updateStarFilter = (starNumber: number) => {
		const existingStarNumber = starFilter.find((number) => number === starNumber);
		if (existingStarNumber) {
			const updatedFilter = starFilter.filter((number) => number !== starNumber);
			setStarFilter(updatedFilter);
		} else {
			setStarFilter([...starFilter, starNumber]);
		}
	};

	const resetAllSummonedMonsters = () => {
		setAllSummonedMonsters([]);
		setsummonButtonClicked(false);
	};

	const handleClick = () => {
		switch (chosenScroll) {
		case 'Mystical':
			summonMysticalScroll();
			break;
		case 'Light & Dark':
			summonLightAndDarkScroll();
			break;
		case 'Water':
			summonElementalScroll('Water');
			break;
		case 'Fire':
			summonElementalScroll('Fire');
			break;
		case 'Wind':
			summonElementalScroll('Wind');
			break;
		case 'Legendary':
			summonLegendaryScroll();
			break;
		case 'Ifrit':
			summonIfritOrCowgirlScroll('Ifrit');
			break;
		case 'Cowgirl':
			summonIfritOrCowgirlScroll('Cow Girl');
			break;
		default:
			break;
		}
	
		if (!isSummonButtonClicked) setSummonButtonToTrue();
	};

	const setSummonButtonToTrue = () => {
		setsummonButtonClicked(true);
	};

	const updateScrollNumber = (multiplier: number) => {
		setScrollNumber(multiplier);
	};


	return (
		<SummonContext.Provider value={{monsters, allNonAwakenMonsters, allSummonedMonsters, chosenScroll, changeChosenScroll, starFilter, updateStarFilter, resetAllSummonedMonsters, isSummonButtonClicked, setSummonButtonToTrue, handleClick, scrollNumber, updateScrollNumber}}>
			{children}
		</SummonContext.Provider>
	);
};

export { SummonContextProvider };