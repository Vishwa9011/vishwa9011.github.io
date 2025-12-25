import useWindowStore from '@/store/window';
import type { WindowKey } from '@/types';

type WindowControlsProps = {
    target: WindowKey;
};

const WindowControls = ({ target }: WindowControlsProps) => {
    const { closeWindow } = useWindowStore();

    return (
        <div id="window-controls" className="flex gap-2">
            <div className="bg-destructive size-3.5 cursor-pointer rounded-full" onClick={() => closeWindow(target)} />
            <div className="bg-warning size-3.5 rounded-full" />
            <div className="bg-success size-3.5 rounded-full" />
        </div>
    );
};

export default WindowControls;
