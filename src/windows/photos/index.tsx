import { lazy } from 'react';
import { DeviceSwitch } from '@components/shared';

const PhotosDesktop = lazy(() => import('./photos.desktop'));
const PhotosMobile = lazy(() => import('./photos.mobile'));

export default function Photos() {
    return <DeviceSwitch Mobile={PhotosMobile} Desktop={PhotosDesktop} />;
}
