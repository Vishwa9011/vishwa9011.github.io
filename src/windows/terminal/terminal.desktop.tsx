import WindowWrapper from '@/hoc/window-wrapper';
import { WindowControls } from '@components';
import { techStack } from '@constants';
import { Check, Flag } from 'lucide-react';

const TerminalDesktop = () => {
    return (
        <>
            <div
                id="window-header"
                className="dark:border-surface-muted border-border bg-muted text-muted-foreground flex items-center justify-between rounded-t-lg border-b px-4 py-3 text-sm select-none"
            >
                <WindowControls target="terminal" />
                <h2 className="w-full text-center text-sm font-bold">Tech Stack</h2>
            </div>

            <div className="font-roboto p-5 text-sm">
                <p>
                    <span className="font-bold">@vishwa % </span>
                    show tech stack
                </p>

                <div className="ms-10 mt-7 flex items-center">
                    <p className="w-32">Category</p>
                    <p>Technologies</p>
                </div>

                <ul className="border-border my-5 space-y-1 border-y border-dashed py-5">
                    {techStack.map(({ category, items }) => (
                        <li key={category} className="flex items-center">
                            <Check className="text-success w-5" size={20} />
                            <h3 className="text-success ms-5 w-32 font-semibold">{category}</h3>
                            <ul className="flex items-center gap-3">
                                {items.map((item, i) => (
                                    <li key={i}>
                                        {item}
                                        {i !== items.length - 1 && ','}
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>

                <div className="text-success space-y-1">
                    <p className="flex items-center">
                        <Check size={20} className="me-5 w-5" /> 5 of 5 stacks loaded successfully (100%)
                    </p>
                    <p className="text-foreground flex items-center">
                        <Flag size={15} className="text-foreground me-5 w-5" /> Render time: 0.023s
                    </p>
                </div>
            </div>
        </>
    );
};

const TerminalDesktopWindow = WindowWrapper(TerminalDesktop, 'terminal');

export { TerminalDesktopWindow };
