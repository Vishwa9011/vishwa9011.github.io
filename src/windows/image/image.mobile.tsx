import useWindowStore from '@/store/window';
import type { LocationFile } from '@/types';
import { MobileWindowWrapper } from '@/hoc/mobile-window-wrapper';
import { MobileWindowHeader } from '@components/shared/mobile-window-header';

const ImageMobile = () => {
    const { windows, closeWindow } = useWindowStore();
    const data = windows.imgfile.data as LocationFile | null;

    if (!data || data.kind !== 'file') return null;

    const imageSrc = data.imageUrl || data.image;

    if (!imageSrc) return null;

    return (
        <>
            <MobileWindowHeader title={data.name} onClose={() => closeWindow('imgfile')} />

            <div className="flex h-full items-center justify-center p-4">
                <img src={imageSrc} alt={data.name} />
            </div>
        </>
    );
};

const ImageMobileWindow = MobileWindowWrapper(ImageMobile, 'imgfile');

export { ImageMobileWindow };
