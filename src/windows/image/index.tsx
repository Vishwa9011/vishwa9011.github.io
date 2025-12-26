import { lazy } from 'react';
import { DeviceSwitch } from '@components/shared';

const ImageDesktop = lazy(() => import('./image.desktop'));
const ImageMobile = lazy(() => import('./image.mobile'));

export default function Image() {
    return <DeviceSwitch Mobile={ImageMobile} Desktop={ImageDesktop} />;
}
