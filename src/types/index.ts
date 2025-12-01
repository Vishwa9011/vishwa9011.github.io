export const WINDOW_KEYS = [
    'finder',
    'contact',
    'resume',
    'safari',
    'photos',
    'terminal',
    'txtfile',
    'imgfile',
] as const;

export type WindowKey = (typeof WINDOW_KEYS)[number];

export type WindowState = {
    isOpen: boolean;
    zIndex: number;
    data: unknown;
};

export type WindowConfig = Record<WindowKey, WindowState>;

export const LOCATION_KEYS = ['work', 'about', 'resume', 'trash'] as const;

export type LocationKey = (typeof LOCATION_KEYS)[number];

type LocationFileKind = 'txt' | 'url' | 'img' | 'fig' | 'pdf';

export type LocationFile = {
    id: number;
    name: string;
    icon: string;
    kind: 'file';
    fileType: LocationFileKind;
    position?: string;
    description?: string[];
    href?: string;
    imageUrl?: string;
    subtitle?: string;
    image?: string;
};

export type LocationFolder = {
    id: number;
    name: string;
    icon: string;
    kind: 'folder';
    position?: string;
    windowPosition?: string;
    children: LocationFile[];
};

export type LocationChild = LocationFolder | LocationFile;

export type Location =
    | {
          id: number;
          type: LocationKey;
          name: string;
          icon: string;
          kind: 'folder';
          children: LocationChild[];
      }
    | LocationFolder
    | LocationFile;

export type LocationsMap = Record<LocationKey, Location>;
