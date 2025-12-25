import { pdfjs } from 'react-pdf';
import workerSrc from 'pdfjs-dist/build/pdf.worker.min.mjs?url';

import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

let initialized = false;

export function initReactPdf() {
    if (initialized) return;
    pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;
    initialized = true;
}
