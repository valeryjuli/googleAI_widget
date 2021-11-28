<script lang="ts">
import type { WidgetImage } from "../types/widget_types";

import { ImageGalleryStore } from "./image_gallery_store";

    /**
     * Internal state
     */
    let dragging = false;

    /**
     * File selection input element used to retrieve selected files.
     */
    let inputElement: HTMLInputElement;

    /**
     * Return image file from dropped elements. 
     * Throws an error if multiple elements are dropped or elements are not images.
     */
    const getFilesFromDropEvent = async (dropEvent: DragEvent): Promise<File> => {
        const droppedItems: DataTransferItem[] = Array.from(dropEvent.dataTransfer?.items);      
        return new Promise<File>(async (resolve) => {
            // CASE 1: Dropped item is an URL ex. image on browser imgur
            if (droppedItems[0].type === 'text/plain') {
                const droppedURL: string = dropEvent.dataTransfer.getData('URL');
                const imageFile = await getImageFileFromURL(droppedURL);
                resolve(imageFile); 
            } else {  
            // CASE 2: Dropped item is an image from local file
                if (droppedItems.length > 1) {
                    // TODO: Add an error section to show error correctly
                    alert('Error: Trying to load more than one image');
                    return;
                }
                if (!droppedItems[0].type.match('^image/')) {
                    alert('Error: Trying to load non image file type');
                }
                const imageFile = droppedItems[0].getAsFile();
                resolve(imageFile);
            }
        })
    }

    /**
     * Return a PNG file created from given URL
     */
    const getImageFileFromURL = async (url: string): Promise<File> => {
        const response = await fetch(url);
        const responseBlob = await response.blob();
        return new File([responseBlob], "uploadedImage", { type: "image/png" });;
    }

    /**
     * Return image from selected elements. 
     */
    const getFilesFromInputEvent = async (inputEvent: InputEvent) => {
        return inputElement.files[0];
    }

    const onFileSelected = (getFilesFunction: (event) => Promise<File>) => (event) => {
        dragging = false;

        getFilesFunction(event).then((file) => {
            console.log(file)
        const fileReader = new FileReader();

        fileReader.onload = (fileLoadedEvent) => {
            const srcData = fileLoadedEvent.target.result;
            const newGalleryImage: WidgetImage = {
                id: 1,
                alt: 'todo',
                path: srcData as string,
            }
            const oldImages = $ImageGalleryStore.images;
            $ImageGalleryStore.images = [newGalleryImage, ...oldImages.slice(0, -1)];
            console.log($ImageGalleryStore.images);
        }
        fileReader.readAsDataURL(file);

        });
    };
</script>
<div class="image-upload-container">
    <label
        class:dragging
        on:drop|preventDefault = {onFileSelected(getFilesFromDropEvent)}
        on:dragover|preventDefault={() => dragging = true}
        on:dragleave|preventDefault={() => dragging = false}>
        <slot {dragging}>
            <div class="slot">
                Drag &amp; Drop your file(s) or
                <strong>browse.</strong>
            </div>
        </slot>
        <input
            bind:this = {inputElement}
            type="file"
            on:input={onFileSelected(getFilesFromInputEvent)}
            accept="image/*" />
    </label>
</div>

<style>
    input {
        position: absolute !important;
        height: 1px;
        width: 1px;
        overflow: hidden;
        clip: rect(1px 1px 1px 1px);
        clip: rect(1px, 1px, 1px, 1px);
        white-space: nowrap;
    }
    .slot {
        padding: 20px;
        border: 1px solid gray;
        border-radius: 5px;
        text-align: center;
        cursor: pointer;
    }
    .upload {
        width: 50%;
        margin: auto;
    }
</style>
