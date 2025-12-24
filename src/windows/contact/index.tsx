import { useMobile } from '@/hooks/use-mobile';
import { ContactDesktopWindow } from './contact.desktop';
import { ContactMobileWrapped } from './contact.mobile';

export default function Contact() {
    const isMobile = useMobile();

    return isMobile ? <ContactMobileWrapped /> : <ContactDesktopWindow />;
}
