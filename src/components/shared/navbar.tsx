import dayjs from 'dayjs';
import { cn } from '@/lib/utils';
import useWindowStore from '@/store/window';
import ThemeDropdown from './theme-dropdown';
import { Battery, Wifi } from 'lucide-react';
import { navIcons, navLinks } from '@constants';

const Navbar = () => {
    const { openWindow } = useWindowStore();
    const otherIcons = navIcons.filter(icon => icon.action !== 'theme');

    return (
        <>
            <nav className="bg-card/60 text-foreground hidden items-center justify-between p-2 px-5 backdrop-blur-3xl select-none sm:flex">
                <div className="flex items-center gap-5 max-sm:w-full max-sm:justify-center">
                    <img src="/images/logo.svg" alt="logo" />
                    <p className="font-bold">Vishwa's Portfolio</p>
                    <ul className="text-foreground flex items-center gap-5 max-sm:hidden">
                        {navLinks.map(({ id, name, type }) => (
                            <li key={id} onClick={() => openWindow(type)}>
                                <p className="cursor-pointer text-sm transition-all hover:underline">{name}</p>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex items-center gap-5 max-sm:hidden">
                    <ul className="text-foreground flex items-center gap-5 max-sm:hidden">
                        {otherIcons.map(({ id, img }) => (
                            <li key={id}>
                                <img src={img} className="icon nav-icon" alt={`icon-${id}`} />
                            </li>
                        ))}

                        <li>
                            <ThemeDropdown iconSrc={'/icons/mode.svg'} />
                        </li>
                    </ul>
                    <time className="text-foreground text-sm font-medium">{dayjs().format('ddd MMM D h:mm A')}</time>
                </div>
            </nav>

            <MobileNavbar />
        </>
    );
};

export default Navbar;

function MobileNavbar() {
    const { nextZIndex } = useWindowStore();
    return (
        <section
            className={cn(
                'h-nav-height text-foreground relative flex items-center justify-between gap-5 px-5 py-3 sm:hidden',
            )}
            style={{ zIndex: nextZIndex }}
        >
            <p>{dayjs().format('h:mm A')}</p>

            <div className="bg-foreground/80 mx-auto h-6 w-40 rounded-full"></div>
            <ul className="flex items-center gap-2">
                <li>
                    <Wifi className="size-4" />
                </li>
                <li>
                    <Battery className="size-4" />
                </li>
            </ul>
        </section>
    );
}
