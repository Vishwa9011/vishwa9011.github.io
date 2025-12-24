import { useMobile } from '@/hooks/use-mobile';
import { TerminalDesktopWindow } from './terminal.desktop';
import { TerminalMobileWindow } from './terminal.mobile';

export default function Terminal() {
    const isMobile = useMobile();

    return isMobile ? <TerminalMobileWindow /> : <TerminalDesktopWindow />;
}
