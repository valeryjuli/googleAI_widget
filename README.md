
# Google Vision Widget

This repository contains the svelte project for the Google Vision Widget. The Widget allows to upload and select an image to be processed with the *Cloud Vision API*
of Google for the following features:

*  Object localization
* Text detection
* Label detection
* Face detection

## Demo
The widget can be tested directly by cloning this repository and opening `./test/index.html`

<img src="./assets/demo1.gif" height=600>

## Specifications

The following table specifies the outputs of each feature

| Feature  |  Description  | 
|---|---|
|Object Localization   | Shows the first 10 identified objects on the image and the confidence score for each one with matching colors  |  
|Text Detection   | Shows the full identified text from the image  |   
|Label Detection   | Shows the first 10 labels identified and their scores  |   
|Face Detection   | Shows the faces identified and their likelihood of 'JOY' state  |   

> :warning: If the response from Google Vision API is **empty** a tag with `No results` is shown

### How to use?
The widget can be embedded on any HTML page as a Web-Component of itself, as an example the following HTML page will contain the widget:
````html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset='utf-8'>
	<meta name='viewport' content='width=device-width,initial-scale=1'>

	<title>Test of GoogleAPI Widget</title>

	<link rel='stylesheet' href='../public/build/bundle.css'>
	<link rel='stylesheet' href='../public/global.css'>

	<script defer src='../public/build/bundle.js'></script>
</head>

<body>
    <div>
        <googleVision-widget></googleVision-widget>
    </div>
</body>
</html>
````
It is required to add the files:
* `bundle.css`
* `global.css`
* `bundle.js`

in order for the widget to work.
## Deployment

To deploy this project run

```bash
  npm run dev
```
Then open `http://localhost:5000` to view the working widget demo page

## Future enhancements

This is a non-exhaustive list of future enhancements to add:

* Allow to pass the max number of items to detect
* Add a section to visualize all the response data
* Allow to drop image directly on the large viewer
* Allow image batch uploads
* Use Tailwind CSS for style management
* Add night/day modes
