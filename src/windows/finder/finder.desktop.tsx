import WindowWrapper from '@/hoc/window-wrapper';
import { cn } from '@/lib/utils';
import useLocationStore from '@/store/location';
import useWindowStore from '@/store/window';
import type { Location } from '@/types';
import { WindowControls } from '@components';
import { locations } from '@constants';
import { Search } from 'lucide-react';
import { windowKeyForFileType } from './window-key';

const FinderDesktop = () => {
    const { openWindow } = useWindowStore();
    const { setActiveLocation, activeLocation } = useLocationStore();

    const openItem = (item: Location) => {
        if (item.kind === 'file' && item.fileType === 'pdf') {
            openWindow('resume');
            return;
        }

        if (item.kind === 'folder') {
            setActiveLocation(item);
            return;
        }

        if (item.kind !== 'file') return;

        if (item.fileType === 'fig' || item.fileType === 'url') {
            if (item.href) window.open(item.href, '_blank', 'noopener,noreferrer');
            return;
        }

        const windowKey = windowKeyForFileType(item.fileType);
        if (windowKey) openWindow(windowKey, item);
    };

    const renderList = (name: string, locations: Location[]) => {
        return (
            <div>
                <h3 className="text-muted-foreground mb-1 px-2 text-xs font-medium">{name}</h3>
                <ul className="space-y-1">
                    {locations.map(location => (
                        <li
                            key={location.id}
                            onClick={() => setActiveLocation(location)}
                            className={cn(
                                'hover:bg-muted-foreground/10 flex cursor-pointer items-center gap-2 rounded-md px-2 py-2 transition-colors',
                                location.id === activeLocation.id ? 'bg-muted-foreground/10 text-blue-500' : null,
                            )}
                        >
                            <img src={location.icon} alt={location.name} className="w-4" />
                            <p className="truncate text-sm font-medium">{location.name}</p>
                        </li>
                    ))}
                </ul>
            </div>
        );
    };

    return (
        <>
            <div
                id="window-header"
                className="dark:border-surface-muted border-border bg-muted text-muted-foreground flex items-center justify-between rounded-t-lg border-b px-4 py-3 text-sm select-none"
            >
                <WindowControls target="finder" />
                <Search className="icon" />
            </div>

            <div className="flex h-full">
                <div className="border-border bg-muted flex w-48 flex-col space-y-3 border-r px-3 py-5">
                    {renderList('Favorites', Object.values(locations))}
                    {renderList('My Projects', locations.work.children)}
                </div>
                <ul className="bg-card relative max-w-2xl flex-1 p-8">
                    {('children' in activeLocation ? activeLocation.children : []).map(item => (
                        <li
                            key={item.id}
                            className={cn('absolute flex flex-col items-center gap-3', item.position)}
                            onClick={() => openItem(item)}
                        >
                            <img
                                src={item.icon}
                                alt={item.name}
                                className="relative size-16 object-contain object-center group-hover:scale-105"
                            />
                            <p className="w-40 text-center text-sm font-medium">{item.name}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

const FinderDesktopWindow = WindowWrapper(FinderDesktop, 'finder');

export { FinderDesktopWindow };
