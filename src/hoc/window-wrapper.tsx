import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import type { WindowKey } from '@/types';
import useWindowStore from '@/store/window';

import { Draggable } from 'gsap/Draggable';
import type { ComponentType } from 'react';
import { useLayoutEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

type NamedComponent = { displayName?: string; name?: string };

const DESKTOP_WINDOW_CLASSNAMES: Record<WindowKey, string> = {
    finder: 'bg-card top-20 left-40 w-3xl overflow-hidden rounded-xl shadow-2xl drop-shadow-2xl',
    contact: 'bg-card top-60 left-5/12 max-w-2xl overflow-hidden rounded-xl shadow-2xl drop-shadow-2xl',
    resume: 'bg-card top-16 left-7/12 h-fit w-fit overflow-hidden rounded-xl shadow-2xl drop-shadow-2xl',
    safari: 'bg-card top-40 left-2/12 w-4xl overflow-hidden rounded-xl shadow-2xl drop-shadow-2xl',
    photos: 'bg-card top-96 left-1/2 max-w-3xl -translate-y-1/2 overflow-hidden rounded-xl shadow-2xl drop-shadow-2xl',
    terminal: 'bg-card top-32 left-1/12 w-xl overflow-hidden rounded-xl shadow-2xl drop-shadow-2xl',
    txtfile: 'bg-card top-36 right-32 w-md overflow-hidden rounded-xl shadow-2xl drop-shadow-2xl',
    imgfile: 'bg-card top-40 left-2/12 w-xl overflow-hidden rounded-xl shadow-2xl drop-shadow-2xl',
};

const WindowWrapper = <Props extends object>(Component: ComponentType<Props>, windowKey: WindowKey) => {
    const Wrapped = (props: Props) => {
        const windows = useWindowStore(state => state.windows);
        const focusWindow = useWindowStore(state => state.focusWindow);
        const { isOpen, zIndex } = windows[windowKey];
        const ref = useRef<HTMLDivElement>(null);

        useGSAP(() => {
            const el = ref.current;
            if (!el || !isOpen) return;

            el.style.display = 'block';
            gsap.fromTo(
                el,
                { scale: 0.8, opacity: 0, y: 40 },
                { scale: 1, opacity: 1, y: 0, duration: 0.4, ease: 'power3.out' },
            );
        }, [isOpen]);

        useGSAP(() => {
            const el = ref.current;
            if (!el || !isOpen) return;

            const [instance] = Draggable.create(el, {
                onPress: () => focusWindow(windowKey),
            });

            return () => {
                instance.kill();
            };
        }, [isOpen]);

        useLayoutEffect(() => {
            const el = ref.current;
            if (!el) return;

            el.style.display = isOpen ? 'block' : 'none';
        }, [isOpen]);

        if (!isOpen) {
            return null;
        }

        return (
            <section
                id={windowKey}
                ref={ref}
                style={{ zIndex }}
                className={cn('absolute', DESKTOP_WINDOW_CLASSNAMES[windowKey])}
            >
                <Component {...props} />
            </section>
        );
    };

    const componentName =
        (Component as NamedComponent).displayName ?? (Component as NamedComponent).name ?? 'Component';
    Wrapped.displayName = `WindowWrapper(${componentName})`;
    return Wrapped;
};

export default WindowWrapper;
