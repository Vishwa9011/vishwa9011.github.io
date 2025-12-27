import { lazy } from 'react';
import useWindowStore from '@/store/window';
import { DeviceSwitch } from '@components/shared';

const ContactDesktop = lazy(() => import('./contact.desktop'));
const ContactMobile = lazy(() => import('./contact.mobile'));

export default function Contact() {
    const isOpen = useWindowStore(state => state.windows.contact.isOpen);
    if (!isOpen) return null;
    return <DeviceSwitch Mobile={ContactMobile} Desktop={ContactDesktop} />;
}
