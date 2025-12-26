import { lazy } from 'react';
import { DeviceSwitch } from '@components/shared';
import useWindowStore from '@/store/window';

const ResumeDesktop = lazy(() => import('./resume.desktop'));
const ResumeMobile = lazy(() => import('./resume.mobile'));

export default function Resume() {
    const isOpen = useWindowStore(state => state.windows.resume.isOpen);

    if (!isOpen) return null;

    return <DeviceSwitch Mobile={ResumeMobile} Desktop={ResumeDesktop} />;
}
