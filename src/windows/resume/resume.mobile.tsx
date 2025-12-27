import { Document, Page } from 'react-pdf';
import useWindowStore from '@/store/window';
import { useEffect, useRef, useState } from 'react';
import { MobileWindowWrapper } from '@/hoc/mobile-window-wrapper';
import { MobileWindowHeader } from '@components/shared';
import { initReactPdf } from '@/lib/react-pdf';
import { Download } from 'lucide-react';

initReactPdf();

const RESUME_PDF_URL = `${import.meta.env.BASE_URL}files/resume.pdf`;
const RESUME_DOWNLOAD_FILENAME = 'Vishwa_Vivek_Yadav_Resume.pdf';

const ResumeMobile = () => {
    const { closeWindow } = useWindowStore();
    const containerRef = useRef<HTMLDivElement>(null);
    const [pageWidth, setPageWidth] = useState(300);

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        const updateWidth = () => {
            setPageWidth(Math.floor(el.getBoundingClientRect().width));
        };

        updateWidth();

        if (typeof ResizeObserver === 'undefined') {
            window.addEventListener('resize', updateWidth);
            return () => window.removeEventListener('resize', updateWidth);
        }

        const observer = new ResizeObserver(updateWidth);
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <>
            <div className="flex items-center justify-between">
                <MobileWindowHeader title="Resume" onClose={() => closeWindow('resume')} />

                <a
                    href={RESUME_PDF_URL}
                    download={RESUME_DOWNLOAD_FILENAME}
                    className="w-min cursor-pointer pt-2 pr-3 pb-3"
                    title="Download resume"
                >
                    <Download className="size-4" />
                </a>
            </div>
            <div className="resume-pdf bg-background w-full p-4">
                <div ref={containerRef} className="flex w-full justify-center">
                    <Document
                        file={RESUME_PDF_URL}
                        className={'w-full'}
                        loading={<div className="text-muted-foreground p-4 text-sm">Loading PDF…</div>}
                        error={<div className="p-4 text-sm text-red-500">Failed to load PDF.</div>}
                        noData={<div className="text-muted-foreground p-4 text-sm">No PDF file specified.</div>}
                        onLoadError={error => console.error('Failed to load resume PDF:', error)}
                    >
                        <Page pageNumber={1} width={pageWidth} renderAnnotationLayer renderTextLayer />
                    </Document>
                </div>
            </div>
        </>
    );
};

const ResumeMobileWindow = MobileWindowWrapper(ResumeMobile, 'resume');

export default ResumeMobileWindow;
