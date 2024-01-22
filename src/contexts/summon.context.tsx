import { ReactNode, createContext, useEffect, useState } from 'react';
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
    summonMysticalScroll: () => void;
    allSummonedMonsters: MonsterType[];
	summonLightAndDarkScroll: () => void;
	chosenScroll: string;
	changeChosenScroll: (scrollname: string) => void;
	starFilter: number[];
	updateStarFilter: (starNumber: number) => void;
	summonWaterScroll: () => void;
	summonFireScroll: () => void;
	summonWindScroll: () => void;
	summonLegendaryScroll: () => void;
	summonIfritScroll: () => void;
	summonCowGirlScroll: () => void;
	resetAllSummonedMonsters: () => void;
	isSummonButtonClicked: boolean;
	setSummonButtonToTrue: () => void;
}

const defaultContextValue: SummonContextType = {
	monsters: [],
	allNonAwakenMonsters: [],
	summonMysticalScroll: () => {},
	allSummonedMonsters: [],
	summonLightAndDarkScroll: () => {},
	chosenScroll: '',
	changeChosenScroll: () => {},
	starFilter: [],
	updateStarFilter: () => {},
	summonWaterScroll: () => {},
	summonFireScroll: () => {},
	summonWindScroll: () => {},
	summonLegendaryScroll: () => {},
	summonIfritScroll: () => {},
	summonCowGirlScroll : () => {},
	resetAllSummonedMonsters: () => {},
	isSummonButtonClicked: false,
	setSummonButtonToTrue: () => {},
};

export const SummonContext = createContext<SummonContextType>(defaultContextValue);

const SummonContextProvider = ({ children }: { children: ReactNode}) => {
	const [allMonsters] = useState<MonsterType[]>(monsters);
	const [allNonAwakenMonsters, setAllNonAwakenMonsters] = useState<MonsterType[]>([]);
	const [allNonAwakenElementaryMonsters, setAllNonAwakenElementaryMonsters] = useState<MonsterType[]>([]);
	const [allNonAwakenDarkAndLightMonsters, setAllNonAwakenDarkAndLightMonsters] = useState<MonsterType[]>([]);
	const [allSummonedMonsters, setAllSummonedMonsters] = useState<MonsterType[]>([]);
	const [chosenScroll, setChosenScroll] = useState<string>('Mystical');
	const [starFilter, setStarFilter] = useState<number[]>([]);
	const [isSummonButtonClicked, setsummonButtonClicked] = useState(false);
  
	useEffect(() => {
		setAllNonAwakenMonsters(allMonsters.filter(monster => monster.awaken_level === 0));
	}, []);

	useEffect(() => {
		setAllNonAwakenElementaryMonsters(allNonAwakenMonsters.filter(monster => (monster.element === 'Fire' || monster.element === 'Water' || monster.element === 'Wind') && monster.name !== 'Ifrit' && monster.name !== 'Cow Girl'));
		setAllNonAwakenDarkAndLightMonsters(allNonAwakenMonsters.filter(monster => (monster.element === 'Light' || monster.element === 'Dark') && monster.name !== 'Ifrit' && monster.name !== 'Cow Girl'));
	}, [allNonAwakenMonsters]);
	

	// Fonction random number
	function generateRandomNumber(maxNumber: number) {
		return Math.floor(Math.random() * maxNumber) + 1;
	}
  
	// Summon function to Mystical scrolls
	const summonMysticalScroll = () => {
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

	// Summon function to Water scrolls
	const summonWaterScroll = () => {
		const allWaterMonsters = allNonAwakenMonsters.filter(monster => monster.element === 'Water' && monster.name !== 'Ifrit' && monster.name !== 'Cow Girl');
		const randomNumber = generateRandomNumber(200);

		if (randomNumber >= 1 && randomNumber <= 183) {
			const monsters = allWaterMonsters.filter(monster => monster.natural_stars === 3);
			const monsterIndex = generateRandomNumber(monsters.length) - 1;
			setAllSummonedMonsters(prevState => [...prevState, monsters[monsterIndex]]);
		} else if (randomNumber >= 184 && randomNumber <= 199) {
			const monsters = allWaterMonsters.filter(monster => monster.natural_stars === 4);
			const monsterIndex = generateRandomNumber(monsters.length) - 1;
			setAllSummonedMonsters(prevState => [...prevState, monsters[monsterIndex]]);
		} else if (randomNumber === 200) {
			const monsters = allWaterMonsters.filter(monster => monster.natural_stars === 5);
			const monsterIndex = generateRandomNumber(monsters.length) - 1;
			setAllSummonedMonsters(prevState => [...prevState, monsters[monsterIndex]]);
		}

	};

	// Summon function to Fire scrolls
	const summonFireScroll = () => {
		const allFireMonsters = allNonAwakenMonsters.filter(monster => monster.element === 'Fire' && monster.name !== 'Ifrit' && monster.name !== 'Cow Girl');
		const randomNumber = generateRandomNumber(200);

		if (randomNumber >= 1 && randomNumber <= 183) {
			const monsters = allFireMonsters.filter(monster => monster.natural_stars === 3);
			const monsterIndex = generateRandomNumber(monsters.length) - 1;
			setAllSummonedMonsters(prevState => [...prevState, monsters[monsterIndex]]);
		} else if (randomNumber >= 184 && randomNumber <= 199) {
			const monsters = allFireMonsters.filter(monster => monster.natural_stars === 4);
			const monsterIndex = generateRandomNumber(monsters.length) - 1;
			setAllSummonedMonsters(prevState => [...prevState, monsters[monsterIndex]]);
		} else if (randomNumber === 200) {
			const monsters = allFireMonsters.filter(monster => monster.natural_stars === 5);
			const monsterIndex = generateRandomNumber(monsters.length) - 1;
			setAllSummonedMonsters(prevState => [...prevState, monsters[monsterIndex]]);
		}

	};

	// Summon function to Wind scrolls
	const summonWindScroll = () => {
		const allWindMonsters = allNonAwakenMonsters.filter(monster => monster.element === 'Wind' && monster.name !== 'Ifrit' && monster.name !== 'Cow Girl');
		const randomNumber = generateRandomNumber(200);

		if (randomNumber >= 1 && randomNumber <= 183) {
			const monsters = allWindMonsters.filter(monster => monster.natural_stars === 3);
			const monsterIndex = generateRandomNumber(monsters.length) - 1;
			setAllSummonedMonsters(prevState => [...prevState, monsters[monsterIndex]]);
		} else if (randomNumber >= 184 && randomNumber <= 199) {
			const monsters = allWindMonsters.filter(monster => monster.natural_stars === 4);
			const monsterIndex = generateRandomNumber(monsters.length) - 1;
			setAllSummonedMonsters(prevState => [...prevState, monsters[monsterIndex]]);
		} else if (randomNumber === 200) {
			const monsters = allWindMonsters.filter(monster => monster.natural_stars === 5);
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

	// Summon function to Ifrit Scrolls
	const summonIfritScroll = () => {
		const allIfritMonsters = allNonAwakenMonsters.filter(monster => (monster.element === 'Fire' || monster.element === 'Water' || monster.element === 'Wind') && monster.name === 'Ifrit');
		
		const monsterIndex = generateRandomNumber(allIfritMonsters.length) - 1;
		setAllSummonedMonsters(prevState => [...prevState, allIfritMonsters[monsterIndex]]);
	};

	// Summon function to Cow Girl scrolls
	const summonCowGirlScroll = () => {
		const allCowGirlMonsters = allNonAwakenMonsters.filter(monster => (monster.element === 'Fire' || monster.element === 'Water' || monster.element === 'Wind') && monster.name === 'Cow Girl');
		
		const monsterIndex = generateRandomNumber(allCowGirlMonsters.length) - 1;
		setAllSummonedMonsters(prevState => [...prevState, allCowGirlMonsters[monsterIndex]]);
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

	const setSummonButtonToTrue = () => {
		setsummonButtonClicked(true);
	};


	return (
		<SummonContext.Provider value={{monsters, allNonAwakenMonsters, summonMysticalScroll, allSummonedMonsters, summonLightAndDarkScroll, chosenScroll, changeChosenScroll, starFilter, updateStarFilter, summonWaterScroll, summonFireScroll, summonWindScroll, summonLegendaryScroll, summonIfritScroll, summonCowGirlScroll, resetAllSummonedMonsters, isSummonButtonClicked, setSummonButtonToTrue}}>
			{children}
		</SummonContext.Provider>
	);
};

export { SummonContextProvider };