import useWindowStore from '@/store/window';
import type { WindowKey } from '@/types';

export function MobileWindowWrapper(Component: any, windowKey: WindowKey) {
    const Wrapped = (props: any) => {
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

    Wrapped.displayName = `MobileWindowWrapper(${Component.displayName || Component.name || 'Component'})`;

    return Wrapped;
}
