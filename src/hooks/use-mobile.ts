import { useUiStore } from '@/store/ui-store';

export function useMobile() {
    return useUiStore(s => s.isMobile);
}
