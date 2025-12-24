import WindowWrapper from '@/hoc/window-wrapper';
import useWindowStore from '@/store/window';
import type { LocationFile } from '@/types';
import { WindowControls } from '@components';

const TextDesktop = () => {
    const { windows } = useWindowStore();
    const data = windows.txtfile.data as LocationFile | null;

    if (!data || data.kind !== 'file') return null;

    const imageSrc = data.image || data.imageUrl;

    return (
        <>
            <div
                id="window-header"
                className="dark:border-surface-muted border-border bg-muted text-muted-foreground flex items-center justify-between rounded-t-lg border-b px-4 py-3 text-sm select-none"
            >
                <WindowControls target="txtfile" />
                <h2 className="w-full text-center text-sm font-bold">{data.name}</h2>
            </div>

            <div className="bg-card space-y-4 p-5">
                {imageSrc && (
                    <div className="overflow-hidden rounded-lg">
                        <img src={imageSrc} alt={data.name} className="h-48 w-full object-cover" />
                    </div>
                )}

                {data.subtitle && <h3 className="text-foreground text-lg font-semibold">{data.subtitle}</h3>}

                {data.description?.map((paragraph, index) => (
                    <p key={index} className="text-muted-foreground text-sm leading-relaxed">
                        {paragraph}
                    </p>
                ))}
            </div>
        </>
    );
};

const TextDesktopWindow = WindowWrapper(TextDesktop, 'txtfile');

export { TextDesktopWindow };
