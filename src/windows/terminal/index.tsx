import { useMobile } from '@/hooks/use-mobile';
import { TerminalDesktopWrapped } from './terminal.desktop';
import { TerminalMobileWrapped } from './terminal.mobile';

export default function Terminal() {
    const isMobile = useMobile();

    return isMobile ? <TerminalMobileWrapped /> : <TerminalDesktopWrapped />;
}
