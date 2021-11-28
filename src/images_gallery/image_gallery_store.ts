import { writable } from 'svelte/store';
import { crossfade, scale } from 'svelte/transition';
import demoImagesLibrary from './demo_images_library';

/**
 * Return send and receive transitions to generate fade out/in transition from sent to received position.
 * @returns [send, receive] 
 */
const [send, receive] = crossfade({
    duration: 50,
    fallback: scale
});

function createImageStore() {
    const { update, subscribe, set } = writable({
        send,
        receive,
        selectedImage: null,
        previewMode: true,
        images: demoImagesLibrary,
    });

    return {
        subscribe,
        update,
        set
    }
} 

function createImageLoader() {
    const { subscribe, set, update } = writable(null);
    const loadImageToStore = (imageFile: Blob) => {
        console.log(imageFile)
        const fileReader = new FileReader();

        fileReader.onload = (fileLoadedEvent) => {
            const srcData = fileLoadedEvent.target.result; // <--- data: base64

            let newImage = document.createElement('img') as any;
            newImage.src = srcData;

            alert("Converted Base64 version is " + newImage.outerHTML);
        }
        fileReader.readAsDataURL(imageFile);
    }

    return {
        subscribe,
        loadImageToStore,
    }
}

export const ImageLoader = createImageLoader();
export const ImageGalleryStore = createImageStore();