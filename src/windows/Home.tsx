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
        <section id="home">
            <ul>
                {projects.map(project => (
                    <li
                        key={project.id}
                        onClick={() => handleOpenProjectFinder(project)}
                        className={cn('group folder', project.windowPosition)}
                    >
                        <img src={project.icon} alt={project.name} />
                        <p>{project.name}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Home;
