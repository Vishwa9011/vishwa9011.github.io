import { Document, Page } from 'react-pdf';
import useWindowStore from '@/store/window';
import { useEffect, useRef, useState } from 'react';
import { MobileWindowWrapper } from '@/hoc/mobile-window-wrapper';
import { MobileWindowHeader } from '@components/shared/mobile-window-header';

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
            <MobileWindowHeader title="Resume" onClose={() => closeWindow('resume')} />
            <div ref={containerRef} className="w-full">
                <Document file="files/resume.pdf" className={'w-full'}>
                    <Page pageNumber={1} width={pageWidth} renderAnnotationLayer renderTextLayer />
                </Document>
            </div>
        </>
    );
};

const ResumeMobileWindow = MobileWindowWrapper(ResumeMobile, 'resume');

export { ResumeMobileWindow };
