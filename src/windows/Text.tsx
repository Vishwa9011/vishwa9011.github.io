import WindowWrapper from '@/hoc/WindowWrapper';
import useWindowStore from '@/store/window';
import type { LocationFile } from '@/types';
import { WindowControls } from '@components';

const Text = () => {
    const { windows } = useWindowStore();
    const data = windows.txtfile.data as LocationFile | null;

    if (!data || data.kind !== 'file') return null;

    const imageSrc = data.image || data.imageUrl;

    return (
        <>
            <div id="window-header">
                <WindowControls target="txtfile" />
                <h2>{data.name}</h2>
            </div>

            <div className="space-y-4 bg-white p-5">
                {imageSrc && (
                    <div className="overflow-hidden rounded-lg">
                        <img src={imageSrc} alt={data.name} className="h-48 w-full object-cover" />
                    </div>
                )}

                {data.subtitle && <h3 className="text-lg font-semibold text-gray-800">{data.subtitle}</h3>}

                {data.description?.map((paragraph, index) => (
                    <p key={index} className="text-sm leading-relaxed text-gray-700">
                        {paragraph}
                    </p>
                ))}
            </div>
        </>
    );
};

const TextWindow = WindowWrapper(Text, 'txtfile');

export default TextWindow;
