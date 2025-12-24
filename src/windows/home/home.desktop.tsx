import { cn } from '@/lib/utils';
import useLocationStore from '@/store/location';
import useWindowStore from '@/store/window';
import type { LocationFolder } from '@/types';
import { locations } from '@constants';
import { useGSAP } from '@gsap/react';
import { Draggable } from 'gsap/Draggable';

const projects = locations.work.children;

const Home = () => {
    const { openWindow } = useWindowStore();
    const { setActiveLocation } = useLocationStore();

    const handleOpenProjectFinder = (project: LocationFolder) => {
        setActiveLocation(project);
        openWindow('finder');
    };

    useGSAP(() => {
        Draggable.create('.folder');
    }, []);

    return (
        <section id="home" className="relative z-0">
            <ul className="hidden sm:block">
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
                        <p className="group-hover:bg-accent max-w-40 rounded-md px-1 text-center text-sm text-white transition-colors">
                            {project.name}
                        </p>
                    </li>
                ))}
            </ul>

            <ul className="flex items-center gap-2 px-5 sm:hidden">
                <li
                    key={'pages'}
                    onClick={() => openWindow('resume')}
                    className={cn('group folder inline-flex size-20 items-center justify-center')}
                >
                    <img src={'/images/pages.png'} alt={'pages.png'} className="w-full object-contain object-center" />
                </li>
                <li
                    key={'terminal'}
                    onClick={() => openWindow('terminal')}
                    className={cn('group folder inline-flex size-[84px] items-center justify-center')}
                >
                    <img
                        src={'/images/terminal.png'}
                        alt={'pages.png'}
                        className="w-full object-contain object-center"
                    />
                </li>
            </ul>
        </section>
    );
};

export default Home;
