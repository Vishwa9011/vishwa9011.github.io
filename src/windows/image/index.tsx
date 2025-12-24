import { useMobile } from '@/hooks/use-mobile';
import { ImageDesktopWindow } from './image.desktop';
import { ImageMobileWindow } from './image.mobile';

export default function Image() {
    const isMobile = useMobile();
    return isMobile ? <ImageMobileWindow /> : <ImageDesktopWindow />;
}
