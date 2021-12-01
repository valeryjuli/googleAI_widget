/**
 * Describe any image on the widget
 */
export interface WidgetImage {
    /**
     * Unique image identifier
     */
    id: number;
    /**
     * Alternative text to use
     */
    alt: string;
    /**
     * Image in base64
     */
    base64: string;
}

/**
 * Interface for cards contents
 */
export  interface CardContent {
   description: string,
   color: string,
   score?: number,
   likelihood?: string,
}

/**
 * Image annotation interface
 */
export  interface ImageAnnotation {
  description: string,
  boundingPoly: BoundingPoly,
  color: string,
  normalized?: boolean,
}

export interface Coordinates {
  x: number,
  y: number
}

export interface BoundingPoly {
  normalizedVertices?: Array<Coordinates>,
  vertices?: Array<Coordinates>,
}

/**
 * Interface of Google API response
 */
export interface GoogleAPIResponse {
    [key: string]: Array<FaceAnnotation> | Array<LocalizedObjectAnnotation> | TextAnnotation | Array<LocalizedObjectAnnotation> | Array<EntityAnnotation>;
}

/**
 * Enum of Google Vision response types
 */
 export enum GoogleAPIResponseTypes {
  FACE_DETECTION = 'faceAnnotations',
  LABEL_DETECTION = 'labelAnnotations',
  TEXT_DETECTION = 'textAnnotations',
  OBJECT_LOCALIZATION = 'localizedObjectAnnotations',
}

export type FaceAnnotation = {
    boundingPoly: BoundingPoly,
    fdBoundingPoly: Object,
    landmarks: [Object],
    rollAngle: number,
    panAngle: number,
    tiltAngle: number,
    detectionConfidence: number,
    landmarkingConfidence: number,
    joyLikelihood: string,
    sorrowLikelihood: string,
    angerLikelihood: string,
    surpriseLikelihood: string,
    underExposedLikelihood: string,
    blurredLikelihood: string,
    headwearLikelihood: string
}

export type LocalizedObjectAnnotation = {
  mid: string,
  languageCode: string,
  name: string,
  score: number,
  boundingPoly: BoundingPoly
}

export type EntityAnnotation = {
  mid: string,
  locale: string,
  description: string,
  score: number,
  confidence: number,
  topicality: number,
  boundingPoly: BoundingPoly,
  locations: [Object],
  properties: [Object]
  }

export type TextAnnotation = {
    pages: [any],
    text: string
}