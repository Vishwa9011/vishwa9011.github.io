import { useMobile } from '@/hooks/use-mobile';
import { ResumeMobileWrapped } from './resume.mobile';
import { ResumeDesktopWindow } from './resume.desktop';

export default function Resume() {
    const isMobile = useMobile();

    return isMobile ? <ResumeMobileWrapped /> : <ResumeDesktopWindow />;
}
