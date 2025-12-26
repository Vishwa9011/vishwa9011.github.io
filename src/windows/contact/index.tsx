import { lazy } from 'react';
import { DeviceSwitch } from '@components/shared';

const ContactDesktop = lazy(() => import('./contact.desktop'));
const ContactMobile = lazy(() => import('./contact.mobile'));

export default function Contact() {
    return <DeviceSwitch Mobile={ContactMobile} Desktop={ContactDesktop} />;
}
