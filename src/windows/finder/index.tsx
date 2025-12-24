import { useMobile } from '@/hooks/use-mobile';
import { FinderDesktopWindow } from './finder.desktop';
import { FinderMobileWindow } from './finder.mobile';

export default function Finder() {
    const isMobile = useMobile();
    return isMobile ? <FinderMobileWindow /> : <FinderDesktopWindow />;
}
