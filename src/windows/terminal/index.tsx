import { lazy } from 'react';
import { DeviceSwitch } from '@components/shared';
import useWindowStore from '@/store/window';

const TerminalDesktop = lazy(() => import('./terminal.desktop'));
const TerminalMobile = lazy(() => import('./terminal.mobile'));

export default function Terminal() {
    const isOpen = useWindowStore(state => state.windows.terminal.isOpen);
    if (!isOpen) return null;
    return <DeviceSwitch Mobile={TerminalMobile} Desktop={TerminalDesktop} />;
}
