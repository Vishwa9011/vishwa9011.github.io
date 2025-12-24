import { Document, Page } from 'react-pdf';
import useWindowStore from '@/store/window';
import { MobileWindowHeader } from '@components/shared/mobile-window-header';
import { MobileWindowWrapper } from '@/hoc/mobile-window-wrapper';

const ResumeMobile = () => {
    const { closeWindow } = useWindowStore();
    return (
        <>
            <MobileWindowHeader title="Resume" onClose={() => closeWindow('resume')} />
            // TODO fix the pdf rendering issue on mobile devices for width
            <div className="w-full">
                <Document file="files/resume.pdf" className={'h-fit w-[300px] max-w-dvw object-contain object-center'}>
                    <Page pageNumber={1} renderAnnotationLayer renderTextLayer />
                </Document>
            </div>
        </>
    );
};

const ResumeMobileWindow = MobileWindowWrapper(ResumeMobile, 'resume');

export { ResumeMobileWindow };
