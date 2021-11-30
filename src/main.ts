import App from './imageProcessing_widget.svelte';
import "tailwindcss/tailwind.css"

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;