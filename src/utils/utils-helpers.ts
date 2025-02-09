/**
 * restituisce un index da 0 a 3 in base al momento della giornata
 * 1: mattina, 2: pomeriggio, 0 e 3: sera/notte
 * @returns 0 | 1 | 2 | 3
 */
export const dayTime = () => {
	const now: number = Math.floor(new Date().getHours() / 6);
	return now;
};
