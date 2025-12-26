import { DeviceSwitch } from '@components/shared';
import { lazy } from 'react';
import useWindowStore from '@/store/window';

const FinderDesktop = lazy(() => import('./finder.desktop'));
const FinderMobile = lazy(() => import('./finder.mobile'));

export default function Finder() {
    const isOpen = useWindowStore(state => state.windows.finder.isOpen);
    if (!isOpen) return null;
    return <DeviceSwitch Mobile={FinderMobile} Desktop={FinderDesktop} />;
}
