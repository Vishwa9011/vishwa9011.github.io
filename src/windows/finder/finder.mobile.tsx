import useWindowStore from '@/store/window';
import type { Location } from '@/types';
import { MobileWindowWrapper } from '@/hoc/mobile-window-wrapper';
import { MobileWindowHeader } from '@components/shared/mobile-window-header';
import { locations } from '@constants';
import { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { windowKeyForFileType } from './window-key';

type FolderLocation = Extract<Location, { kind: 'folder' }>;

const FinderMobile = () => {
    const [activeLocation, setActiveLocation] = useState<FolderLocation | null>(null);
    const [history, setHistory] = useState<FolderLocation[]>([]);
    const { closeWindow, openWindow } = useWindowStore();

    const openItem = (item: Location) => {
        if (item.kind === 'folder') {
            setActiveLocation(item);
            setHistory(prev => [...prev, item]);
            return;
        }

        if (item.kind !== 'file') return;

        if (item.fileType === 'pdf') {
            openWindow('resume');
            return;
        }

        if (item.fileType === 'fig' || item.fileType === 'url') {
            if (item.href) window.open(item.href, '_blank', 'noopener,noreferrer');
            return;
        }

        const windowKey = windowKeyForFileType(item.fileType);
        if (windowKey) openWindow(windowKey, item);
    };

    const activeItems = activeLocation ? activeLocation.children : Object.values(locations);

    const handleGoBack = () => {
        const newHistory = [...history];
        const length = newHistory.length;

        if (length === 0) {
            closeWindow('finder');
            return;
        } else {
            newHistory.pop();
            setActiveLocation(newHistory[newHistory.length - 1] || null);
            setHistory(newHistory);
            return;
        }
    };

    const handleBreadcrumbClick = (index: number | null) => {
        if (index === null) {
            setActiveLocation(null);
            setHistory([]);
            return;
        }

        const newHistory = history.slice(0, index + 1);
        setActiveLocation(newHistory[newHistory.length - 1] || null);
        setHistory(newHistory);
    };

    return (
        <>
            <MobileWindowHeader title="Finder" onClose={() => handleGoBack()} />
            {history.length > 0 && (
                <div className="bg-background flex items-center gap-2 p-5 text-sm">
                    <button
                        type="button"
                        className="flex cursor-pointer items-center gap-2"
                        onClick={() => handleBreadcrumbClick(null)}
                    >
                        <span className="text-sm text-blue-500">Portfolio</span>
                        <ChevronRight className="size-4 text-gray-400" />
                    </button>
                    {history.map((item, index) => (
                        <button
                            type="button"
                            className="flex cursor-pointer items-center gap-2"
                            onClick={() => handleBreadcrumbClick(index)}
                            key={item.id}
                        >
                            <span className="max-w-32 truncate text-sm text-blue-500">{item.name}</span>
                            {index !== history.length - 1 && <ChevronRight className="size-4 text-gray-400" />}
                        </button>
                    ))}
                </div>
            )}
            <ul className="grid grid-cols-3 gap-4 p-5">
                {activeItems.map(item => (
                    <li
                        key={item.id}
                        onClick={() => openItem(item)}
                        className={'flex h-full w-full flex-col items-center justify-end gap-2'}
                    >
                        {item.kind === 'folder' ? (
                            <img src="/images/folder.png" alt={item.name} className={cn('w-16')} />
                        ) : (
                            <img src={item.icon} alt={item.name} className={cn('w-20')} />
                        )}
                        <p className="line-clamp-2 text-center text-sm font-medium">{item.name}</p>
                    </li>
                ))}
            </ul>
        </>
    );
};

const FinderMobileWindow = MobileWindowWrapper(FinderMobile, 'finder');

export { FinderMobileWindow };
