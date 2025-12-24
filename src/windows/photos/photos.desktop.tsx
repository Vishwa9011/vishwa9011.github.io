import WindowWrapper from '@/hoc/window-wrapper';
import useWindowStore from '@/store/window';
import { WindowControls } from '@components';
import { gallery, photosLinks } from '@constants/index';
import { Mail, Search } from 'lucide-react';

const Photos = () => {
    const { openWindow } = useWindowStore();
    return (
        <>
            <div id="window-header">
                <WindowControls target="photos" />

                <div className="text-muted-foreground flex w-full items-center justify-end gap-3">
                    <Mail className="icon" />
                    <Search className="icon" />
                </div>
            </div>

            <div className="flex w-full">
                <div className="sidebar">
                    <h2>Photos</h2>
                    <ul>
                        {photosLinks.map(({ id, icon, title }) => (
                            <li key={id}>
                                <img src={icon} alt={title} />
                                <p>{title}</p>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="gallery">
                    <ul>
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
                                <img src={img} alt={`Gallery image ${id}`} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
};

const PhotosDesktopWindow = WindowWrapper(Photos, 'photos');

export { PhotosDesktopWindow };
