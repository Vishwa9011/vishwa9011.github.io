import useWindowStore from '@/store/window';
import type { WindowKey } from '@/types';
import type { ComponentType } from 'react';

type NamedComponent = { displayName?: string; name?: string };

export function MobileWindowWrapper<Props extends object>(Component: ComponentType<Props>, windowKey: WindowKey) {
    const Wrapped = (props: Props) => {
        const { windows } = useWindowStore();
        const { isOpen, zIndex } = windows[windowKey];

        if (!isOpen) {
            return null;
        }

        return (
            <section
                id={`mobile-${windowKey}`}
                className="bg-card pt-nav-height fixed inset-0 z-50 flex h-full w-full flex-col"
                style={{ zIndex }}
            >
                <Component {...props} />
            </section>
        );
    };

    const componentName =
        (Component as NamedComponent).displayName ?? (Component as NamedComponent).name ?? 'Component';
    Wrapped.displayName = `MobileWindowWrapper(${componentName})`;

    return Wrapped;
}
