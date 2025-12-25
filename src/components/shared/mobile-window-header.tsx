import { ChevronLeft } from 'lucide-react';

type MobileWindowHeaderProps = {
    title: string;
    onClose: () => void;
};
export function MobileWindowHeader({ title, onClose }: MobileWindowHeaderProps) {
    return (
        <div className="z-10 flex h-10 w-full items-center gap-5 px-3 pb-3">
            <div className="flex flex-1 cursor-pointer items-center gap-1" onClick={onClose}>
                <ChevronLeft className="size-4" />
                <span className="text-link text-sm">Go Back </span>
            </div>

            <div className="flex-[1.5]">
                <h2 className="text-lg font-medium">{title}</h2>
            </div>
        </div>
    );
}
