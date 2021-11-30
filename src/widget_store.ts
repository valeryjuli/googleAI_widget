import { writable } from 'svelte/store';
import { crossfade, scale } from 'svelte/transition';
import demoImagesLibrary from './images_gallery/demo_images_library';

/**
 * Enum of Google Vision available features
 */
export enum GoogleAPIFeatures {
    FACE_DETECTION = 'Face Detection',
    LABEL_DETECTION = 'Label Detection',
    TEXT_DETECTION = 'Text Detection',
    OBJECT_LOCALIZATION = 'Object Localization',
    PRODUCT_SEARCH= 'Product Search',
}

/**
 * API Key used for testing Google Vision API
 */
export const API_KEY = 'AIzaSyCF9XOM4zPvWvy_umctDPItMPVYzav3BoM';
export const GOOGLE_API_ENDPOINT = 'https://vision.googleapis.com/v1/images:annotate' + `?key=${API_KEY}`

/**
 * Return send and receive transitions to generate fade out/in transition from sent to received position.
 * @returns [send, receive] 
 */
const [send, receive] = crossfade({
    duration: 50,
    fallback: scale
});

function createWidgetStore() {
    const { update, subscribe, set } = writable({
        send,
        receive,
        selectedImage: null,
        previewMode: true,
        images: demoImagesLibrary,
        selectedFeature: null,
        loadingResult: false,
    });

    return {
        subscribe,
        update,
        set
    }
} 

export const WidgetStore = createWidgetStore();