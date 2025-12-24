import gsap from 'gsap';
import { Draggable } from 'gsap/Draggable';

import { Finder, Resume, Safari, Terminal, Text, Image, Contact, Home, Photos } from '@/windows';
import { Navbar, Welcome, Dock } from '@components';

gsap.registerPlugin(Draggable);

const App = () => {
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
