import { useMobile } from '@/hooks/use-mobile';
import { SafariDesktopWindow } from './safari.desktop';
import { SafariMobileWindow } from './safari.mobile';

export default function Safari() {
    const isMobile = useMobile();

    return isMobile ? <SafariMobileWindow /> : <SafariDesktopWindow />;
}
