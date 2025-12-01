import WindowWrapper from '@/hoc/WindowWrapper';
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

const ImageWindow = WindowWrapper(Image, 'imgfile');

export default ImageWindow;
