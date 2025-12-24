import gsap from 'gsap';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';

const FONT_WEIGHTS = {
    subtitle: { min: 100, max: 400, default: 100 },
    title: { min: 400, max: 900, default: 400 },
};

type TextType = 'title' | 'subtitle';

const renderText = (text: string, className: string, baseWeight = 400) => {
    return [...text].map((char, i) => (
        <span key={i} className={className} style={{ fontVariationSettings: `'wght' ${baseWeight}` }}>
            {char === ' ' ? '\u00A0' : char}
        </span>
    ));
};

const setupTextHover = (container: HTMLElement, type: TextType) => {
    if (!container) return () => {};
    const letters = container.querySelectorAll('span');
    const { min, max, default: base } = FONT_WEIGHTS[type];

    const animateLetter = (letter: HTMLSpanElement, weight: number, duration = 0.25) => {
        return gsap.to(letter, {
            duration,
            ease: 'power2.out',
            fontVariationSettings: `'wght' ${weight}`,
        });
    };

    const handleMouseMove = (event: MouseEvent) => {
        const { left } = container.getBoundingClientRect();
        const mouseX = event.clientX - left;
        letters.forEach(letter => {
            const { left: l, width: w } = letter.getBoundingClientRect();
            const distance = Math.abs(mouseX - (l - left + w / 2));
            const intensity = Math.exp(-(distance ** 2) / 20000);
            animateLetter(letter, min + (max - min) * intensity);
        });
    };
    const handleMouseLeave = () => {
        letters.forEach(letter => {
            animateLetter(letter, base);
        });
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseleave', handleMouseLeave);
    };
};

const Welcome = () => {
    const titleRef = useRef<HTMLHeadingElement>(null);
    const subtitleRef = useRef<HTMLParagraphElement>(null);

    useGSAP(() => {
        const titleCleanup = setupTextHover(titleRef.current as HTMLElement, 'title');
        const subtitleCleanup = setupTextHover(subtitleRef.current as HTMLElement, 'subtitle');
        return () => {
            titleCleanup();
            subtitleCleanup();
        };
    }, []);

    return (
        <section id="welcome">
            <p ref={subtitleRef}>
                {renderText("Hey, I'm Vishwa Vivek! Welcome to my", 'text-2xl sm:text-3xl font-georama', 100)}
            </p>
            <h1 ref={titleRef}>{renderText('portfolio', 'sm:text-9xl text-7xl italic font-georama', 400)}</h1>
        </section>
    );
};

export default Welcome;
