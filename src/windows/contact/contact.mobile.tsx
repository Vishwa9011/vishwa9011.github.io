import useWindowStore from '@/store/window';
import { MobileWindowWrapper } from '@/hoc/mobile-window-wrapper';
import { portfolioIdentity, socials } from '@constants';
import { MobileWindowHeader } from '@components/shared';

const ContactMobile = () => {
    const { closeWindow } = useWindowStore();
    return (
        <>
            <MobileWindowHeader title="Contact Me" onClose={() => closeWindow('contact')} />
            <div className="space-y-5 p-5">
                <img src="/images/vishwa.webp" alt={portfolioIdentity.fullName} className="w-20 rounded-full" />

                <h3 className="text-xl font-semibold">Let's Connect</h3>
                <p className="text-muted-foreground">Got an idea? A bug to squash? Or just wanna talk tech? I'm in.</p>
                <p>
                    <a
                        href={`mailTo:${portfolioIdentity.email}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-link hover:text-link-hover underline underline-offset-2"
                    >
                        {portfolioIdentity.email}
                    </a>
                </p>
                <ul className="flex flex-col justify-center gap-2">
                    {socials.map(({ id, link, icon, text }) => (
                        <li key={id} className="border-border bg-card text-foreground rounded-xl border">
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

export default MobileWindowWrapper(ContactMobile, 'contact');
