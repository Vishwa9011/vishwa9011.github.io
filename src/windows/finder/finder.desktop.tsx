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
                <h3>{name}</h3>
                <ul>
                    {locations.map(location => (
                        <li
                            key={location.id}
                            onClick={() => setActiveLocation(location)}
                            className={cn(location.id === activeLocation.id ? 'active' : 'non-active')}
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
            <div id="window-header">
                <WindowControls target="finder" />
                <Search className="icon" />
            </div>

            <div className="flex h-full">
                <div className="sidebar">
                    {renderList('Favorites', Object.values(locations))}
                    {renderList('My Projects', locations.work.children)}
                </div>
                <ul className="content">
                    {('children' in activeLocation ? activeLocation.children : []).map(item => (
                        <li key={item.id} className={item.position} onClick={() => openItem(item)}>
                            <img src={item.icon} alt={item.name} className="w-8" />
                            <p>{item.name}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

const FinderDesktopWindow = WindowWrapper(FinderDesktop, 'finder');

export { FinderDesktopWindow };
