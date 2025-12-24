import { socials } from '@constants/index';
import WindowWrapper from '@/hoc/window-wrapper';
import { WindowControls } from '@components';

const Contact = () => {
    return (
        <>
            <div id="window-header">
                <WindowControls target="contact" />
                <h2>Contact Me</h2>
            </div>

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
                <ul>
                    {socials.map(({ id, bg, link, icon, text }) => (
                        <li key={id} style={{ backgroundColor: bg }}>
                            <a href={link} target="_blank" rel="noopener noreferrer">
                                <img src={icon} alt={text} />
                                <p>{text}</p>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

const ContactDesktopWindow = WindowWrapper(Contact, 'contact');

export { ContactDesktopWindow };
