export const handleThemeChange = () => {
	const html = document.getElementsByTagName('html')[0];
	const line = document.getElementById('line');
	line?.classList.add('hidden');
	html.style.animation = 'shake .25s ease-in-out';
	setTimeout(() => {
		html.classList.toggle('dark');
		cleanAnimation(html, line);
	}, 250);
};

const cleanAnimation = (html: HTMLHtmlElement, line: HTMLElement | null) => {
	html.style.animation = '';
	line?.classList.remove('hidden');
};
