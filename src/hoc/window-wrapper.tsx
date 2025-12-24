import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import type { WindowKey } from '@/types';
import useWindowStore from '@/store/window';

import { Draggable } from 'gsap/Draggable';
import type { ComponentType } from 'react';
import { useLayoutEffect, useRef } from 'react';
import { useMobile } from '@/hooks/use-mobile';

type NamedComponent = { displayName?: string; name?: string };

const WindowWrapper = <Props extends object>(Component: ComponentType<Props>, windowKey: WindowKey) => {
    const Wrapped = (props: Props) => {
        const isMobile = useMobile();
        const { windows, focusWindow } = useWindowStore();
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
            if (!el) return;

            const [instance] = Draggable.create(el, {
                onPress: () => focusWindow(windowKey),
            });

            return () => {
                instance.kill();
            };
        }, []);

        useLayoutEffect(() => {
            const el = ref.current;
            if (!el) return;

            el.style.display = isOpen ? 'block' : 'none';
        }, [isOpen]);

        if (isMobile) {
            return null;
        }

        return (
            <section id={windowKey} ref={ref} style={{ zIndex }} className="absolute">
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
