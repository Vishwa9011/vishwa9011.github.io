import { lazy } from 'react';
import { DeviceSwitch } from '@components/shared';
import useWindowStore from '@/store/window';

const PhotosDesktop = lazy(() => import('./photos.desktop'));
const PhotosMobile = lazy(() => import('./photos.mobile'));

export default function Photos() {
    const isOpen = useWindowStore(state => state.windows.photos.isOpen);
    if (!isOpen) return null;
    return <DeviceSwitch Mobile={PhotosMobile} Desktop={PhotosDesktop} />;
}
