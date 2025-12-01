import type { LucideIcon } from 'lucide-react';
import { LaptopMinimal, Moon, Sun } from 'lucide-react';

export type ThemeOption = 'light' | 'dark' | 'system';

export const THEME_OPTIONS: Array<{ value: ThemeOption; label: string; Icon: LucideIcon }> = [
    { value: 'light', label: 'Light', Icon: Sun },
    { value: 'dark', label: 'Dark', Icon: Moon },
    { value: 'system', label: 'System', Icon: LaptopMinimal },
];
