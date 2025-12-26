import { cn } from '@/lib/utils';
import useWindowStore from '@/store/window';

const HomeMobile = () => {
    const { openWindow } = useWindowStore();

    return (
        <section id="home" className="relative z-0">
            <ul className="flex items-center gap-2 px-5">
                <li
                    key="pages"
                    onClick={() => openWindow('resume')}
                    className={cn('group inline-flex size-20 items-center justify-center select-none')}
                >
                    <img src="/images/pages.png" alt="Resume" className="w-full object-contain object-center" />
                </li>
                <li
                    key="terminal"
                    onClick={() => openWindow('terminal')}
                    className={cn('group inline-flex size-[84px] items-center justify-center select-none')}
                >
                    <img src="/images/terminal.png" alt="Terminal" className="w-full object-contain object-center" />
                </li>
            </ul>
        </section>
    );
};

export default HomeMobile;
