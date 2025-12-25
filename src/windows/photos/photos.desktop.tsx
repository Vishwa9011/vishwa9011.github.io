import WindowWrapper from '@/hoc/window-wrapper';
import useWindowStore from '@/store/window';
import { WindowControls } from '@components';
import { gallery, photosLinks } from '@constants';
import { Mail, Search } from 'lucide-react';

const PhotosDesktop = () => {
    const { openWindow } = useWindowStore();
    return (
        <>
            <div
                id="window-header"
                className="dark:border-surface-muted border-border bg-muted text-muted-foreground flex items-center justify-between rounded-t-lg border-b px-4 py-3 text-sm select-none"
            >
                <WindowControls target="photos" />

                <div className="text-muted-foreground flex w-full items-center justify-end gap-3">
                    <Mail className="icon" />
                    <Search className="icon" />
                </div>
            </div>

            <div className="flex w-2xl">
                <div className="border-border bg-muted flex w-3/12 flex-none flex-col border-r px-2 py-5">
                    <h2 className="text-muted-foreground mb-1 px-3 text-xs font-medium">Photos</h2>
                    <ul>
                        {photosLinks.map(({ id, icon, title }) => (
                            <li
                                key={id}
                                className="first:bg-accent/20 first:text-accent flex cursor-pointer items-center gap-2 rounded-md px-3 py-2 transition-colors"
                            >
                                <img src={icon} alt={title} className="size-4" />
                                <p className="text-sm font-medium">{title}</p>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="p-5">
                    <ul className="grid grid-cols-5 grid-rows-5 gap-2.5">
                        {gallery.map(({ id, img }, index) => (
                            <li
                                key={id}
                                className={
                                    index === 0
                                        ? 'col-span-3 col-start-1 row-span-3 row-start-1'
                                        : index === 1
                                          ? 'col-span-2 col-start-4 row-span-3 row-start-1'
                                          : index === 2
                                            ? 'col-span-3 col-start-3 row-span-2 row-start-4'
                                            : index === gallery.length - 1
                                              ? 'col-span-2 col-start-1 row-span-2 row-start-4'
                                              : undefined
                                }
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
                                    src={img}
                                    alt={`Gallery image ${id}`}
                                    className="size-full rounded-lg object-cover"
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
};

const PhotosDesktopWindow = WindowWrapper(PhotosDesktop, 'photos');

export { PhotosDesktopWindow };
