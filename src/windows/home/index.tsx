import { lazy } from 'react';
import { DeviceSwitch } from '@components/shared';

const HomeDesktop = lazy(() => import('./home.desktop'));
const HomeMobile = lazy(() => import('./home.mobile'));

export default function Home() {
    return <DeviceSwitch Mobile={HomeMobile} Desktop={HomeDesktop} />;
}
