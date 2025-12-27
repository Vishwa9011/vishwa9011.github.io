import { MobileWindowWrapper } from '@/hoc/mobile-window-wrapper';
import useWindowStore from '@/store/window';
import type { LocationFile } from '@/types';
import { MobileWindowHeader } from '@components/shared';

const TextMobile = () => {
    const { windows, closeWindow } = useWindowStore();
    const data = windows.txtfile.data as LocationFile | null;

    if (!data || data.kind !== 'file') return null;

    const imageSrc = data.image || data.imageUrl;

    return (
        <>
            <MobileWindowHeader title={data.name} onClose={() => closeWindow('txtfile')} />
            <div className="bg-card space-y-4 p-5">
                {imageSrc && (
                    <div className="overflow-hidden rounded-lg">
                        <img src={imageSrc} alt={data.name} className="h-48 w-full object-cover" />
                    </div>
                )}

                {data.subtitle && <h3 className="text-foreground text-lg font-semibold">{data.subtitle}</h3>}

                {data.description?.map((paragraph, index) => (
                    <p key={index} className="text-foreground text-base leading-relaxed sm:text-sm">
                        {paragraph}
                    </p>
                ))}
            </div>
        </>
    );
};

const TextMobileWindow = MobileWindowWrapper(TextMobile, 'txtfile');

export default TextMobileWindow;
