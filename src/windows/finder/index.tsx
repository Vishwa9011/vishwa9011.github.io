import { useMobile } from '@/hooks/use-mobile';
import { FinderDesktopWindow } from './finder.desktop';
import { FinderMobileWrapped } from './finder.mobile';

export default function Finder() {
    const isMobile = useMobile();
    return isMobile ? <FinderMobileWrapped /> : <FinderDesktopWindow />;
}
