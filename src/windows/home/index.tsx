import { useMobile } from '@/hooks/use-mobile';
import HomeDesktop from './home.desktop';
import HomeMobile from './home.mobile';

export default function Home() {
    const isMobile = useMobile();
    return isMobile ? <HomeMobile /> : <HomeDesktop />;
}

export { HomeDesktop, HomeMobile };
