import { useMobile } from '@/hooks/use-mobile';
import { lazy, Suspense } from 'react';
import useWindowStore from '@/store/window';

const ResumeMobileWindow = lazy(() => import('./resume.mobile').then(m => ({ default: m.ResumeMobileWindow })));
const ResumeDesktopWindow = lazy(() => import('./resume.desktop').then(m => ({ default: m.ResumeDesktopWindow })));

export default function Resume() {
    const isMobile = useMobile();
    const isOpen = useWindowStore(state => state.windows.resume.isOpen);

    if (!isOpen) return null;

    return <Suspense fallback={null}>{isMobile ? <ResumeMobileWindow /> : <ResumeDesktopWindow />}</Suspense>;
}
