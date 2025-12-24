import { useMobile } from '@/hooks/use-mobile';
import { TextMobileWindow } from './text.mobile';
import { TextDesktopWindow } from './text.desktop';

export default function Text() {
    const isMobile = useMobile();
    return isMobile ? <TextMobileWindow /> : <TextDesktopWindow />;
}
