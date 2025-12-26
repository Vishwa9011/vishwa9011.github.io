import { lazy } from 'react';
import { DeviceSwitch } from '@components/shared';

const TerminalDesktop = lazy(() => import('./terminal.desktop'));
const TerminalMobile = lazy(() => import('./terminal.mobile'));

export default function Terminal() {
    return <DeviceSwitch Mobile={TerminalMobile} Desktop={TerminalDesktop} />;
}
