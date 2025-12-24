import type { WindowKey } from '@/types';

export const windowKeyForFileType = (fileType: string): WindowKey | null => {
    if (fileType === 'txt') return 'txtfile';
    if (fileType === 'img') return 'imgfile';
    return null;
};
