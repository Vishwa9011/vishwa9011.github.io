import WindowWrapper from '@/hoc/WindowWrapper';
import { cn } from '@/lib/utils';
import useLocationStore from '@/store/location';
import useWindowStore from '@/store/window';
import type { Location, LocationFolder } from '@/types';
import { WindowControls } from '@components';
import { locations } from '@constants';
import { Search } from 'lucide-react';

const Finder = () => {
    const { openWindow } = useWindowStore();
    const { setActiveLocation, activeLocation } = useLocationStore();

    const openItem = (item: Location) => {
        if (item.kind === 'file' && item.fileType === 'pdf') {
            openWindow('resume');
        }

        if (item.kind === 'folder') setActiveLocation(item);
        if (item.kind === 'file' && ['fig', 'url'].includes(item.fileType)) {
            window.open(item.href, '_blank');
        }

        if (item.kind === 'file') {
            // TODO: fix type assertion
            openWindow(`${item.fileType}${item.kind}` as any, item);
        }
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

            <div className="flex h-full bg-white">
                <div className="sidebar">
                    {renderList('Favorites', Object.values(locations))}
                    {renderList('My Projects', locations.work.children)}
                </div>
                <ul className="content">
                    {(activeLocation as LocationFolder).children.map(item => (
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

const FinderWindow = WindowWrapper(Finder, 'finder');

export default FinderWindow;
