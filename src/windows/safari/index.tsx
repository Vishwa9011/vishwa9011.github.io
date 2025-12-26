import { lazy } from 'react';
import { DeviceSwitch } from '@components/shared';
import useWindowStore from '@/store/window';

const SafariDesktop = lazy(() => import('./safari.desktop'));
const SafariMobile = lazy(() => import('./safari.mobile'));

export default function Safari() {
    const isOpen = useWindowStore(state => state.windows.safari.isOpen);
    if (!isOpen) return null;
    return <DeviceSwitch Mobile={SafariMobile} Desktop={SafariDesktop} />;
}
