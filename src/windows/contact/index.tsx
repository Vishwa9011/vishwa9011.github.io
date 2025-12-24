import { useMobile } from '@/hooks/use-mobile';
import { ContactDesktopWindow } from './contact.desktop';
import { ContactMobileWindow } from './contact.mobile';

export default function Contact() {
    const isMobile = useMobile();

    return isMobile ? <ContactMobileWindow /> : <ContactDesktopWindow />;
}
