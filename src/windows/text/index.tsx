import { lazy } from 'react';
import { DeviceSwitch } from '@components/shared';

const TextDesktop = lazy(() => import('./text.desktop'));
const TextMobile = lazy(() => import('./text.mobile'));

export default function Text() {
    return <DeviceSwitch Mobile={TextMobile} Desktop={TextDesktop} />;
}
