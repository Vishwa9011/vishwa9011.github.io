import WindowWrapper from '@/hoc/window-wrapper';
import useWindowStore from '@/store/window';
import type { LocationFile } from '@/types';
import { WindowControls } from '@components';

const Image = () => {
    const { windows } = useWindowStore();
    const data = windows.imgfile.data as LocationFile | null;

    if (!data || data.kind !== 'file') return null;

    const imageSrc = data.imageUrl || data.image;

    if (!imageSrc) return null;

    return (
        <>
            <div id="window-header">
                <WindowControls target="imgfile" />
                <p>{data.name}</p>
            </div>

            <div className="preview">
                <img src={imageSrc} alt={data.name} />
            </div>
        </>
    );
};

const ImageDesktopWindow = WindowWrapper(Image, 'imgfile');

export { ImageDesktopWindow };
