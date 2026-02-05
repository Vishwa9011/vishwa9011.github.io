import { pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

let initialized = false;

export function initReactPdf() {
    if (initialized) return;
    pdfjs.GlobalWorkerOptions.workerSrc = `${import.meta.env.BASE_URL}pdf.worker.min.js`;
    initialized = true;
}
