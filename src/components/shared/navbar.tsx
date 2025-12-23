import dayjs from 'dayjs';
import { navIcons, navLinks } from '@constants';
import useWindowStore from '@/store/window';
import ThemeDropdown from './theme-dropdown';

const Navbar = () => {
    const { openWindow } = useWindowStore();
    const otherIcons = navIcons.filter(icon => icon.action !== 'theme');

    return (
        <nav>
            <div className="">
                <img src="/images/logo.svg" alt="logo" className="dark:invert" />
                <p className="font-bold">Vishwa's Portfolio</p>
                <ul>
                    {navLinks.map(({ id, name, type }) => (
                        <li key={id} onClick={() => openWindow(type)}>
                            <p>{name}</p>
                        </li>
                    ))}
                </ul>
            </div>

            <div>
                <ul className="">
                    {otherIcons.map(({ id, img }) => (
                        <li key={id}>
                            <img src={img} className="icon nav-icon" alt={`icon-${id}`} />
                        </li>
                    ))}

                    <li>
                        <ThemeDropdown iconSrc={'/icons/mode.svg'} />
                    </li>
                </ul>
                <time>{dayjs().format('ddd MMM D h:mm A')}</time>
            </div>
        </nav>
    );
};

export default Navbar;
