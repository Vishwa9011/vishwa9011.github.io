import { cn } from '@/lib/utils';
import useLocationStore from '@/store/location';
import useWindowStore from '@/store/window';
import type { LocationFolder } from '@/types';
import { locations } from '@constants';
import { useGSAP } from '@gsap/react';
import { Draggable } from 'gsap/Draggable';

const projects = locations.work.children;

const HomeDesktop = () => {
    const { openWindow } = useWindowStore();
    const { setActiveLocation } = useLocationStore();

    const handleOpenProjectFinder = (project: LocationFolder) => {
        setActiveLocation(project);
        openWindow('finder');
    };

    useGSAP(() => {
        const instances = Draggable.create('.folder');
        return () => {
            instances.forEach(instance => instance.kill());
        };
    }, []);

    return (
        <section id="home" className="relative z-0">
            <ul>
                {projects.map(project => (
                    <li
                        key={project.id}
                        onClick={() => handleOpenProjectFinder(project)}
                        className={cn(
                            'group folder absolute z-0 flex flex-col items-center select-none',
                            project.windowPosition,
                        )}
                    >
                        <img
                            src={project.icon}
                            alt={project.name}
                            className="group-hover:bg-foreground/10 rounded-md p-1"
                        />
                        <p className="max-w-40 rounded-md px-1 text-center text-sm text-white transition-colors group-hover:bg-blue-500">
                            {project.name}
                        </p>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default HomeDesktop;
export { HomeDesktop };
