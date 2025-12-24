import { useMobile } from '@/hooks/use-mobile';
import { TextMobileWrapped } from './text.mobile';
import { TextDesktopWindow } from './text.desktop';

export default function Text() {
    const isMobile = useMobile();
    return isMobile ? <TextMobileWrapped /> : <TextDesktopWindow />;
}
