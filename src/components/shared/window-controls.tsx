import useWindowStore from '@/store/window';
import type { WindowKey } from '@/types';

type WindowControlsProps = {
    target: WindowKey;
};

const WindowControls = ({ target }: WindowControlsProps) => {
    const { closeWindow } = useWindowStore();

    return (
        <div id="window-controls" className="flex gap-2">
            <div className="size-3.5 cursor-pointer rounded-full bg-[#ff6157]" onClick={() => closeWindow(target)} />
            <div className="size-3.5 rounded-full bg-[#ffc030]" />
            <div className="size-3.5 rounded-full bg-[#2acb42]" />
        </div>
    );
};

export default WindowControls;
