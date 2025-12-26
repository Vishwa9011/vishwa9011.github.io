import { lazy } from 'react';
import { DeviceSwitch } from '@components/shared';
import useWindowStore from '@/store/window';

const ImageDesktop = lazy(() => import('./image.desktop'));
const ImageMobile = lazy(() => import('./image.mobile'));

export default function Image() {
    const isOpen = useWindowStore(state => state.windows.imgfile.isOpen);
    if (!isOpen) return null;
    return <DeviceSwitch Mobile={ImageMobile} Desktop={ImageDesktop} />;
}
