import { useMobile } from '@/hooks/use-mobile';
import type React from 'react';
import { Suspense } from 'react';

type DeviceSwitchProps = {
    Mobile: React.LazyExoticComponent<React.FC>;
    Desktop: React.LazyExoticComponent<React.FC>;
};

export default function DeviceSwitch({ Mobile, Desktop }: DeviceSwitchProps) {
    const isMobile = useMobile();

    // critical: don't resolve until known
    // It helps to avoid hydration mismatch and layout shifts
    if (isMobile === null) return null;

    return <Suspense fallback={null}>{isMobile ? <Mobile /> : <Desktop />}</Suspense>;
}
