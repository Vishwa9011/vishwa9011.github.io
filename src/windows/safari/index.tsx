import { useMobile } from '@/hooks/use-mobile';
import { SafariDesktopWindow } from './safari.desktop';
import { SafariMobileWrapped } from './safari.mobile';

export default function Safari() {
    const isMobile = useMobile();

    return isMobile ? <SafariMobileWrapped /> : <SafariDesktopWindow />;
}
