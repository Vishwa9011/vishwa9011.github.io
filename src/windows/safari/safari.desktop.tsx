import WindowWrapper from '@/hoc/window-wrapper';
import { WindowControls } from '@components/shared';
import { blogPosts } from '@constants';
import { ChevronLeft, ChevronRight, Copy, MoveRight, PanelLeft, Plus, Search, Share, ShieldHalf } from 'lucide-react';

const SafariDesktop = () => {
    return (
        <>
            <div
                id="window-header"
                className="dark:border-surface-muted border-border bg-muted text-muted-foreground flex items-center justify-between rounded-t-lg border-b px-4 py-3 text-sm select-none"
            >
                <WindowControls target="safari" />

                <PanelLeft className="icon ml-10" />

                <div className="ml-5 flex items-center gap-1">
                    <ChevronLeft className="icon" />
                    <ChevronRight className="icon" />
                </div>

                <div className="flex-center flex-1 gap-3">
                    <ShieldHalf className="icon" />

                    <div className="border-border bg-card flex w-2/3 items-center gap-3 rounded-lg border px-3 py-2">
                        <Search className="icon" />

                        <input
                            type="text"
                            placeholder="Search or enter website name"
                            className="placeholder:text-muted-foreground flex-1"
                        />
                    </div>
                </div>

                <div className="flex items-center gap-5">
                    <Share className="icon" />
                    <Plus className="icon" />
                    <Copy className="icon" />
                </div>
            </div>

            <div className="bg-card mx-auto max-w-3xl p-10">
                <h2 className="text-brand mb-10 text-xl font-bold">My Developer Blog</h2>

                <div className="space-y-8">
                    {blogPosts.map(({ id, date, image, link, title }) => (
                        <div key={id} className="grid grid-cols-12 space-x-5">
                            <div className="col-span-2">
                                <img src={image} alt={title} className="size-full rounded-md object-cover" />
                            </div>
                            <div className="col-span-10 space-y-3">
                                <p className="text-muted-foreground text-xs">{date}</p>
                                <h3 className="text-foreground text-base font-semibold">{title}</h3>
                                <a
                                    href={link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-accent flex items-center gap-3 text-xs hover:underline"
                                >
                                    Check out the full post <MoveRight className="icon-hover" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

const SafariDesktopWindow = WindowWrapper(SafariDesktop, 'safari');

export default SafariDesktopWindow;
