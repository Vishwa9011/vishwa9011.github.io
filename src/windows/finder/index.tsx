import { DeviceSwitch } from '@components/shared';
import { lazy } from 'react';

const FinderDesktop = lazy(() => import('./finder.desktop'));
const FinderMobile = lazy(() => import('./finder.mobile'));

export default function Finder() {
    return <DeviceSwitch Mobile={FinderMobile} Desktop={FinderDesktop} />;
}
