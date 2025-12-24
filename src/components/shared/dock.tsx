import gsap from 'gsap';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { Tooltip } from 'react-tooltip';
import { dockApps } from '@constants/index';
import useWindowStore from '@/store/window';
import type { WindowKey } from '@/types';
import { useMobile } from '@/hooks/use-mobile';

type ToggleAppParams = {
    id: string;
    canOpen: boolean;
};

const Dock = () => {
    const isMobile = useMobile();
    const { windows, closeWindow, openWindow } = useWindowStore();
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
            icons.forEach(icon =>
                gsap.to(icon, {
                    scale: 1,
                    y: 0,
                    duration: 0.3,
                    ease: 'power2.out',
                }),
            );
        };
        dock.addEventListener('mousemove', handleMouseMove);
        dock.addEventListener('mouseleave', resetIcons);
        return () => {
            dock.removeEventListener('mousemove', handleMouseMove);
            dock.removeEventListener('mouseleave', resetIcons);
        };
    }, []);

    return (
        <section id="dock">
            <div ref={dockRef} className="dock-container">
                {filteredDockApps.map(({ id, name, icon, canOpen }) => (
                    <div key={id} className="relative flex justify-center">
                        <button
                            type="button"
                            className="dock-icon"
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
                                className={canOpen ? '' : 'opacity-60'}
                            />
                        </button>
                    </div>
                ))}

                <Tooltip id="dock-tooltip" place="top" className="tooltip" />
            </div>
        </section>
    );
};

export default Dock;
