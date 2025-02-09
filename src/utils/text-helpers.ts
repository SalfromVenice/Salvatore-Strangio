export const handleLangChange = () => {
	const text = document.getElementsByClassName(
		't'
	) as HTMLCollectionOf<HTMLElement>;

	for (const t of text) {
		t.style.transition = 'opacity .2s ease-in-out';
		t.style.opacity = '0';
		setTimeout(() => requestAnimationFrame(() => cleanAnimation(t)), 400);
	}
};

const cleanAnimation = (t: HTMLElement) => {
	t.style.opacity = '1';
	setTimeout(() => {
		t.style.removeProperty('transition');
	}, 100);
};
