import { lazy } from 'react';
import { DeviceSwitch } from '@components/shared';

const SafariDesktop = lazy(() => import('./safari.desktop'));
const SafariMobile = lazy(() => import('./safari.mobile'));

export default function Safari() {
    return <DeviceSwitch Mobile={SafariMobile} Desktop={SafariDesktop} />;
}
