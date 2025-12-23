import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { THEME_OPTIONS, type ThemeOption } from '@constants/theme';

type Props = {
    iconSrc: string;
};

const ThemeDropdown = ({ iconSrc }: Props) => {
    const { theme, resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const modeLabel = (() => {
        if (!mounted) return 'Toggle theme';
        if (theme === 'system') return `System (${resolvedTheme || 'light'})`;
        return theme === 'dark' ? 'Dark mode' : 'Light mode';
    })();

    const selectedTheme: ThemeOption = !mounted ? 'system' : ((theme as ThemeOption) ?? 'system');

    const handleSelect = (value: string) => {
        setTheme(value as ThemeOption);
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild className="cursor-pointer focus-visible:outline-none">
                <button type="button" className="mt-1.5" aria-label={modeLabel} title={modeLabel}>
                    <img src={iconSrc} alt="toggle-theme" className="icon nav-icon" />
                </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent
                align="center"
                sideOffset={8}
                className="border-border bg-card text-foreground w-32 rounded-xl border p-1 shadow-2xl backdrop-blur-md"
            >
                <DropdownMenuRadioGroup value={selectedTheme} onValueChange={handleSelect}>
                    {THEME_OPTIONS.map(({ value, label, Icon }) => (
                        <DropdownMenuRadioItem
                            key={value}
                            value={value}
                            className="text-muted-foreground hover:bg-muted hover:text-foreground data-[state=checked]:bg-muted data-[state=checked]:text-foreground data-[state=checked]:[&_svg]:text-accent flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors"
                        >
                            <Icon size={16} className="text-foreground" />
                            <span>{label}</span>
                        </DropdownMenuRadioItem>
                    ))}
                </DropdownMenuRadioGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default ThemeDropdown;
