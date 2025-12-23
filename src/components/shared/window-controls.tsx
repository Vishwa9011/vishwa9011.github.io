import useWindowStore from '@/store/window';
import type { WindowKey } from '@/types';

type WindowControlsProps = {
    target: WindowKey;
};

const WindowControls = ({ target }: WindowControlsProps) => {
    const { closeWindow } = useWindowStore();

    return (
        <div id="window-controls">
            <div className="close" onClick={() => closeWindow(target)} />
            <div className="minimize" />
            <div className="maximize" />
        </div>
    );
};

export default WindowControls;
