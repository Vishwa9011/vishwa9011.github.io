import { socials } from '@constants';
import WindowWrapper from '@/hoc/window-wrapper';
import { WindowControls } from '@components';

const ContactDesktop = () => {
    return (
        <>
            <div
                id="window-header"
                className="dark:border-surface-muted border-border bg-muted text-muted-foreground flex items-center justify-between rounded-t-lg border-b px-4 py-3 text-sm select-none"
            >
                <WindowControls target="contact" />
                <h2 className="w-full text-center text-sm font-bold">Contact Me</h2>
            </div>

            <div className="space-y-5 p-5">
                <img src="/images/adrian.jpg" alt="adrian" className="w-20 rounded-full" />

                <h3 className="text-xl font-semibold">Let's Connect</h3>
                <p className="text-muted-foreground">Got an idea? A bug to squash? Or just wanna talk tech? I'm in.</p>
                <p>
                    <a
                        href="mailTo:vishu842301@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-link hover:text-link-hover underline underline-offset-2"
                    >
                        vishu842301@gmail.com
                    </a>
                </p>
                <ul className="flex items-center gap-3">
                    {socials.map(({ id, link, icon, text }) => (
                        <li
                            key={id}
                            className="border-border bg-card text-foreground hover:bg-muted w-60 origin-center rounded-lg border p-3 transition-all duration-300 hover:-translate-y-0.5 hover:scale-105"
                        >
                            <a href={link} target="_blank" rel="noopener noreferrer" className="space-y-5">
                                <img src={icon} alt={text} />
                                <p className="text-sm font-semibold">{text}</p>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

const ContactDesktopWindow = WindowWrapper(ContactDesktop, 'contact');

export { ContactDesktopWindow };
