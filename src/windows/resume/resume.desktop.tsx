import { Download } from 'lucide-react';
import WindowWrapper from '@/hoc/window-wrapper';
import { WindowControls } from '@components';

import { Document, Page } from 'react-pdf';
import { initReactPdf } from '@/lib/react-pdf';

initReactPdf();

export const RESUME_PDF_URL = `${import.meta.env.BASE_URL}files/resume.pdf`;
export const RESUME_DOWNLOAD_FILENAME = 'Vishwa_Vivek_Yadav_Resume.pdf';

const ResumeDesktop = () => {
    return (
        <>
            <div
                id="window-header"
                className="dark:border-surface-muted border-border bg-muted text-muted-foreground flex items-center justify-between rounded-t-lg border-b px-4 py-3 text-sm select-none"
            >
                <WindowControls target="resume" />
                <h2 className="flex-1 text-center text-sm font-bold">Resume.pdf</h2>
                <a
                    href={RESUME_PDF_URL}
                    download={RESUME_DOWNLOAD_FILENAME}
                    className="cursor-pointer"
                    title="Download resume"
                >
                    <Download className="icon" />
                </a>
            </div>

            <div className="resume-pdf bg-background flex justify-center p-4">
                <Document
                    file={RESUME_PDF_URL}
                    loading={<div className="text-muted-foreground p-4 text-sm">Loading PDF…</div>}
                    error={<div className="p-4 text-sm text-red-500">Failed to load PDF.</div>}
                    noData={<div className="text-muted-foreground p-4 text-sm">No PDF file specified.</div>}
                    onLoadError={error => console.error('Failed to load resume PDF:', error)}
                >
                    <Page pageNumber={1} renderAnnotationLayer renderTextLayer />
                </Document>
            </div>
        </>
    );
};

const ResumeDesktopWindow = WindowWrapper(ResumeDesktop, 'resume');

export default ResumeDesktopWindow;
