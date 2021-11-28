import type { WidgetImage } from '../types/widget_types';


/**
 * URL of base repository for demo images.
 */
 export const DEMO_IMAGES_SRC = `https://sveltejs.github.io/assets/crossfade`;

const demoImagesLibrary: Array<WidgetImage> = [
	{
		id: 1,
		alt: 'Posters in a bar',
		path: `${DEMO_IMAGES_SRC}/1.jpg`,
	},
	{
		id: 2,
		alt: 'Daffodil',
		path: `${DEMO_IMAGES_SRC}/2.jpg`,
	},
	{
		id: 3,
		alt: 'Dust storm in Sydney',
		path: `${DEMO_IMAGES_SRC}/3.jpg`,
	},
	{
		id: 4,
		alt: 'Postbox',
		path: `${DEMO_IMAGES_SRC}/4.jpg`,
	},
	{
		id: 5,
		alt: 'Fireworks',
		path: `${DEMO_IMAGES_SRC}/5.jpg`,
	},
	{
		id: 6,
		alt: 'The Stereophonics',
		path: `${DEMO_IMAGES_SRC}/6.jpg`,
	}, {
		id: 7,
		alt: 'Crepuscular rays',
		path: `${DEMO_IMAGES_SRC}/7.jpg`,
	},
	{
		id: 8,
		alt: 'Lapland winter scene',
		path: `${DEMO_IMAGES_SRC}/8.jpg`,
	},
	{
		id: 9,
		alt: 'Jellyfish',
		path: `${DEMO_IMAGES_SRC}/9.jpg`,
	},
];

export default demoImagesLibrary;
