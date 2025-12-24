import { MobileWindowWrapper } from '@/hoc/mobile-window-wrapper';
import useWindowStore from '@/store/window';
import { MobileWindowHeader } from '@components/shared/mobile-window-header';
import { socials } from '@constants/index';

const ContactMobile = () => {
    const { closeWindow } = useWindowStore();
    return (
        <>
            <MobileWindowHeader title="Contact Me" onClose={() => closeWindow('contact')} />
            <div className="space-y-5 p-5">
                <img src="/images/adrian.jpg" alt="adrian" className="w-20 rounded-full" />

                <h3>Let's Connect</h3>
                <p>Got an idea? A bug to squash? Or just wanna talk tech? I'm in.</p>
                <p>
                    <a
                        href="mailTo:vishu842301@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline"
                    >
                        vishu842301@gmail.com
                    </a>
                </p>
                <ul className="flex flex-col justify-center gap-2">
                    {socials.map(({ id, bg, link, icon, text }) => (
                        <li key={id} style={{ backgroundColor: bg }} className="rounded-xl">
                            <a
                                href={link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex flex-col gap-4 p-2"
                            >
                                <img className="size-5" src={icon} alt={text} />
                                <p>{text}</p>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

const ContactMobileWrapped = MobileWindowWrapper(ContactMobile, 'contact');

export { ContactMobileWrapped };
