import gsap from 'gsap';
import { useEffect } from 'react';
import { Draggable } from 'gsap/Draggable';

import { useUiStore } from './store/ui-store';
import { Navbar, Welcome, Dock } from '@components';
import { Finder, Resume, Safari, Terminal, Text, Image, Contact, Home, Photos } from '@/windows';

gsap.registerPlugin(Draggable);

const App = () => {
    useEffect(() => {
        const update = () => {
            useUiStore.getState().setIsMobile(window.innerWidth < 640);
        };

        update();
        window.addEventListener('resize', update);
        return () => window.removeEventListener('resize', update);
    }, []);

    return (
        <main className="h-dvh w-dvw overflow-hidden">
            <Navbar />
            <Welcome />
            <Dock />

            <Terminal />
            <Safari />
            <Text />
            <Image />
            <Resume />
            <Finder />
            <Contact />
            <Home />
            <Photos />
        </main>
    );
};

export default App;
