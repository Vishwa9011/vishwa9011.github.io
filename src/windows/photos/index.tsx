import { useMobile } from '@/hooks/use-mobile';
import { PhotosDesktopWindow } from './photos.desktop';
import { PhotosMobileWindow } from './photos.mobile';

export default function Photos() {
    const isMobile = useMobile();
    return isMobile ? <PhotosMobileWindow /> : <PhotosDesktopWindow />;
}
