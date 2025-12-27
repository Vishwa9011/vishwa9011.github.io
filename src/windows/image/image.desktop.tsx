import WindowWrapper from '@/hoc/window-wrapper';
import useWindowStore from '@/store/window';
import type { LocationFile } from '@/types';
import { WindowControls } from '@components/shared';

const ImageDesktop = () => {
    const { windows } = useWindowStore();
    const data = windows.imgfile.data as LocationFile | null;

    if (!data || data.kind !== 'file') return null;

    const imageSrc = data.imageUrl || data.image;

    if (!imageSrc) return null;

    return (
        <>
            <div
                id="window-header"
                className="dark:border-surface-muted border-border bg-muted text-muted-foreground flex items-center justify-between rounded-t-lg border-b px-4 py-3 text-sm select-none"
            >
                <WindowControls target="imgfile" />
                <p className="text-muted-foreground font-bold">{data.name}</p>
            </div>

            <div className="bg-muted max-h-[70vh] p-2">
                <img src={imageSrc} alt={data.name} className="h-fit w-full object-contain object-center" />
            </div>
        </>
    );
};

const ImageDesktopWindow = WindowWrapper(ImageDesktop, 'imgfile');

export default ImageDesktopWindow;
