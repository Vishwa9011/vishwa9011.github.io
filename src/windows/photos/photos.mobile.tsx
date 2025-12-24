import { gallery } from '@constants';
import useWindowStore from '@/store/window';
import { MobileWindowHeader } from '@components/shared/mobile-window-header';
import { MobileWindowWrapper } from '@/hoc/mobile-window-wrapper';

const PhotosMobile = () => {
    const { openWindow, closeWindow } = useWindowStore();
    return (
        <>
            <MobileWindowHeader title="Photos" onClose={() => closeWindow('photos')} />

            <div className="flex w-full p-4">
                <ul className="grid grid-cols-2 gap-2">
                    {gallery.map(({ id, img }) => (
                        <li
                            key={id}
                            onClick={() =>
                                openWindow('imgfile', {
                                    id,
                                    name: 'Gallery image',
                                    icon: '/images/image.png',
                                    kind: 'file',
                                    fileType: 'img',
                                    imageUrl: img,
                                })
                            }
                        >
                            <img
                                className="aspect-square h-full w-full rounded-2xl object-cover"
                                src={img}
                                alt={`Gallery image ${id}`}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

const PhotosMobileWindow = MobileWindowWrapper(PhotosMobile, 'photos');

export { PhotosMobileWindow };
