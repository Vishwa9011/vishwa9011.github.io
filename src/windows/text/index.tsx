import { lazy } from 'react';
import { DeviceSwitch } from '@components/shared';
import useWindowStore from '@/store/window';

const TextDesktop = lazy(() => import('./text.desktop'));
const TextMobile = lazy(() => import('./text.mobile'));

export default function Text() {
    const isOpen = useWindowStore(state => state.windows.txtfile.isOpen);
    if (!isOpen) return null;
    return <DeviceSwitch Mobile={TextMobile} Desktop={TextDesktop} />;
}
