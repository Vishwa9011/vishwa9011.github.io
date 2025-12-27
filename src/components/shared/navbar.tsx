import dayjs from 'dayjs';
import { cn } from '@/lib/utils';
import useWindowStore from '@/store/window';
import ThemeDropdown from './theme-dropdown';
import { Battery, Wifi } from 'lucide-react';
import { navIcons, navLinks, portfolioIdentity } from '@constants';

const Navbar = () => {
    const openWindow = useWindowStore().openWindow;
    const otherIcons = navIcons.filter(icon => icon.action !== 'theme');

    return (
        <>
            <nav className="bg-card/60 text-foreground hidden items-center justify-between p-2 px-5 backdrop-blur-3xl select-none sm:flex">
                <div className="flex items-center gap-5 max-sm:w-full max-sm:justify-center">
                    <div className="flex cursor-pointer items-center gap-3">
                        <img src="/images/logo.svg" alt="logo" className="dark:invert" />
                        <p className="font-bold">{portfolioIdentity.fullName}</p>
                    </div>
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
                                <img src={img} className="icon dark:invert" alt={`icon-${id}`} />
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
    const { nextZIndex, windows } = useWindowStore();

    // it checks if any window is open
    const isAnyWindowOpen = Object.values(windows).some(win => win.isOpen);

    return (
        <section
            className={cn(
                'text-foreground h-nav-height relative flex items-center justify-between gap-5 px-5 py-3 sm:hidden dark:bg-transparent',
                !isAnyWindowOpen && 'text-white', // this will make sure that text is visible when no window is open
            )}
            style={{ zIndex: nextZIndex }}
        >
            <p className="2xs:text-base text-xs whitespace-nowrap">{dayjs().format('h:mm A')}</p>

            <div className="2xs:h-6 mx-auto h-5 w-40 rounded-full bg-black/80"></div>
            <ul className="flex items-center gap-2">
                <li>
                    <Wifi className="2xs:size-4 size-3" />
                </li>
                <li>
                    <Battery className="2xs:size-4 size-3" />
                </li>
            </ul>
        </section>
    );
}
