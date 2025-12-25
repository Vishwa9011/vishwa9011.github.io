import { MobileWindowWrapper } from '@/hoc/mobile-window-wrapper';
import useWindowStore from '@/store/window';
import { MobileWindowHeader } from '@components/shared/mobile-window-header';
import { blogPosts } from '@constants';
import { BookOpen, ChevronLeft, ChevronRight, Copy, Mic, MoveRight, Search, Share } from 'lucide-react';

const SafariMobile = () => {
    const { closeWindow } = useWindowStore();
    return (
        <>
            <MobileWindowHeader title="Safari" onClose={() => closeWindow('safari')} />

            <div className="flex max-h-[calc(100dvh-48px-40px-120px)] flex-col gap-5 p-5">
                <h2 className="text-brand text-xl font-bold">My Developer Blog</h2>

                <div className="space-y-8 overflow-y-auto">
                    {blogPosts.map(({ id, date, image, link, title }) => (
                        <div key={id} className="grid grid-cols-3 items-center">
                            <div className="">
                                <img src={image} alt={title} />
                            </div>
                            <div className="col-span-2 flex h-full flex-col justify-center gap-2">
                                <p className="text-sm">{date}</p>
                                <h3 className="font-semibold">{title}</h3>
                                <a href={link} target="_blank" rel="noopener noreferrer" className="text-link text-sm">
                                    Check out the full post <MoveRight className="icon-hover" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="border-border h-30 rounded-2xl border-t p-5">
                <div className="border-border flex items-center rounded-xl border px-3 py-2">
                    <Search className="size-5" />
                    <input
                        type="text"
                        placeholder="Search or enter website name"
                        className="ml-2 w-full text-sm outline-none"
                    />
                    <Mic className="size-5" />
                </div>

                <div className="mt-4 flex items-center justify-between">
                    <ChevronLeft className="size-6" />
                    <ChevronRight className="size-6" />
                    <Share className="text-link size-6" />
                    <BookOpen className="text-link size-6" />
                    <Copy className="text-link size-6" />
                </div>
            </div>
        </>
    );
};

const SafariMobileWindow = MobileWindowWrapper(SafariMobile, 'safari');

export { SafariMobileWindow };
