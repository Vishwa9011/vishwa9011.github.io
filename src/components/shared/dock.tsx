import gsap from 'gsap';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { Tooltip } from 'react-tooltip';
import { dockApps } from '@constants';
import useWindowStore from '@/store/window';
import type { WindowKey } from '@/types';
import { useMobile } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';

type ToggleAppParams = {
    id: string;
    canOpen: boolean;
};

const Dock = () => {
    const isMobile = useMobile();
    const windows = useWindowStore(state => state.windows);
    const openWindow = useWindowStore(state => state.openWindow);
    const closeWindow = useWindowStore(state => state.closeWindow);

    const dockRef = useRef<HTMLDivElement>(null);

    const filteredDockApps = dockApps.filter(app => (isMobile ? app.mobileVisibility !== false : true));

    const toggleApp = (app: ToggleAppParams) => {
        if (!app.canOpen) return;
        const id = app.id as WindowKey;
        const window = windows[id];

        if (!window) {
            throw new Error(`Window with id ${id} does not exist in the store.`);
        }

        if (window.isOpen) {
            closeWindow(id);
        } else {
            openWindow(id);
        }
    };

    useGSAP(() => {
        const dock = dockRef.current;
        if (!dock) return;

        const icons = dock.querySelectorAll('.dock-icon');

        const animateIcons = (mouseX: number) => {
            const { left } = dock.getBoundingClientRect();

            icons.forEach(icon => {
                const { left: iconLeft, width } = icon.getBoundingClientRect();
                const center = iconLeft - left + width / 2;
                const distance = Math.abs(mouseX - center);
                const intensity = Math.exp(-(distance ** 2.5) / 20000);

                gsap.to(icon, {
                    scale: 1 + 0.25 * intensity,
                    y: -15 * intensity,
                    duration: 0.2,
                    ease: 'power1.out',
                });
            });
        };

        const handleMouseMove = (event: MouseEvent) => {
            const left = dock.getBoundingClientRect().left;
            const mouseX = event.clientX - left;
            animateIcons(mouseX);
        };

        const resetIcons = () => {
            icons.forEach(icon => {
                gsap.to(icon, {
                    scale: 1,
                    y: 0,
                    duration: 0.3,
                    ease: 'power2.out',
                });
            });
        };
        dock.addEventListener('mousemove', handleMouseMove);
        dock.addEventListener('mouseleave', resetIcons);
        return () => {
            dock.removeEventListener('mousemove', handleMouseMove);
            dock.removeEventListener('mouseleave', resetIcons);
        };
    }, []);

    return (
        <section
            id="dock"
            className="absolute bottom-5 left-1/2 z-50 w-max -translate-x-1/2 px-5 select-none sm:w-auto sm:px-0"
        >
            <div
                ref={dockRef}
                className="bg-card/20 flex items-end justify-between gap-1.5 rounded-2xl p-1.5 backdrop-blur-sm motion-reduce:backdrop-blur-none sm:backdrop-blur-md"
            >
                {filteredDockApps.map(({ id, name, icon, canOpen }) => (
                    <div key={id} className="relative flex justify-center">
                        <button
                            type="button"
                            className="dock-icon cursor-pointer"
                            aria-label={name}
                            data-tooltip-id="dock-tooltip"
                            data-tooltip-content={name}
                            data-tooltip-delay-show={150}
                            disabled={!canOpen}
                            onClick={() => toggleApp({ id, canOpen })}
                        >
                            <img
                                src={`/images/${icon}`}
                                alt={`icon-${name}`}
                                loading="lazy"
                                className={cn(
                                    'size-14 sm:size-14 @max-xs:size-20',
                                    canOpen ? 'object-cover object-center' : 'object-cover object-center opacity-60',
                                )}
                            />
                        </button>
                    </div>
                ))}

                {isMobile === false && (
                    <Tooltip
                        id="dock-tooltip"
                        place="top"
                        className="!bg-accent/80 !text-accent-foreground !w-fit !rounded-md !px-3 !py-1 !text-center !text-xs !shadow-2xl"
                    />
                )}
            </div>
        </section>
    );
};

export default Dock;
