declare let Strava: any;

declare let follow: any; // variable for Google Analytics

declare class QRCode {
    constructor(elementId: string, options: any);
    static CorrectLevel: {
        L: string;
        M: string;
        Q: string;
        H: string;
    }
}

interface JQueryStatic {
    fancybox: (str: any, options?: any) => void;
}

interface Window {
    currentAthlete: any;
    pageView: any; // Allow access of window.pageView where page wiew
    unescape(str: string): string; // Allow access of window.pageView where page wiew
    googleMapsApiLoaded: () => void;
 	__fixtures__: any;
}

interface RegExpConstructor {
    new (pattern: RegExp, flags?: string): RegExp;
    (pattern: RegExp, flags?: string): RegExp;
}

declare class LatLon {
    constructor(lat: number, lon: number);

    lat: number;
    lon: number;

    destinationPoint(distance: number, number: number): LatLon;
}

interface Env {
    preview: boolean;
    analyticsTrackingID: string; // GA ID
    simulateUpdate: boolean; // Must be false in release
    debugMode: boolean; // Must be false in release
    useActivityStreamCache: boolean; // Must be true in release
    endPoint: string; // Stravistix endPoint for new features
}

interface Constants {
    VERSION: string;
    EXTENSION_ID: string;
    OPTIONS_URL: string;
}