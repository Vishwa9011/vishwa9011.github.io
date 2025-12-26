import useWindowStore from '@/store/window';
import { Check, ChevronRight, Flag } from 'lucide-react';
import { portfolioIdentity, techStack } from '@constants';
import { MobileWindowWrapper } from '@/hoc/mobile-window-wrapper';
import { MobileWindowHeader } from '@components/shared/mobile-window-header';

const TerminalMobile = () => {
    const { closeWindow } = useWindowStore();
    return (
        <>
            <MobileWindowHeader onClose={() => closeWindow('terminal')} title="Tech Stack" />
            <div className="font-roboto overflow-x-hidden overflow-y-auto p-5">
                <p>
                    <span className="font-bold">@{portfolioIdentity.terminalHandle} % </span>
                    show tech stack
                </p>

                <ul className="border-border mb-5 border-b py-5">
                    {techStack.map(({ category, items }) => (
                        <li key={category} className="mb-4 flex flex-col">
                            <div className="flex items-center gap-2">
                                <ChevronRight className="text-success" size={20} />
                                <h3 className="text-success">{category}</h3>
                            </div>
                            <ul className="ml-8">
                                {items.map((item, i) => (
                                    <li key={i}>
                                        - {item}
                                        {i !== items.length - 1 && ','}
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>

                <div className="">
                    <div className="text-success flex items-center gap-2">
                        <Check size={20} className="mr-5" />
                        <p>5 of 5 stacks loaded successfully (100%)</p>
                    </div>
                    <div className="text-foreground mt-2 flex items-center gap-2">
                        <Flag size={15} className="text-foreground mr-6" />
                        <p>Render time: 0.023s</p>
                    </div>
                </div>
            </div>
        </>
    );
};

const TerminalMobileWindow = MobileWindowWrapper(TerminalMobile, 'terminal');

export default TerminalMobileWindow;
