import { Download } from 'lucide-react';
import WindowWrapper from '@/hoc/window-wrapper';
import { WindowControls } from '@components';

import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL('pdfjs-dist/build/pdf.worker.min.mjs', import.meta.url).toString();

const ResumeDesktop = () => {
    return (
        <>
            <div
                id="window-header"
                className="dark:border-surface-muted border-border bg-muted text-muted-foreground flex items-center justify-between rounded-t-lg border-b px-4 py-3 text-sm select-none"
            >
                <WindowControls target="resume" />
                <h2 className="flex-1 text-center text-sm font-bold">Resume.pdf</h2>
                <a href="files/resume.pdf" download className="cursor-pointer" title="Download resume">
                    <Download className="icon" />
                </a>
            </div>

            <Document file="files/resume.pdf">
                <Page pageNumber={1} renderAnnotationLayer renderTextLayer />
            </Document>
        </>
    );
};

const ResumeDesktopWindow = WindowWrapper(ResumeDesktop, 'resume');

export { ResumeDesktopWindow };
