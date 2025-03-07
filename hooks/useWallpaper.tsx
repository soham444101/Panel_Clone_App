export interface wallpaper {
    uri: string;
    name: string;
}
interface FullWallpaer extends wallpaper {
    likes: boolean,
    suggested: boolean,
    library: boolean,
    collection: number
}
export function UseSuggested() {
    const wallpaper = UseWallpaper()
    return wallpaper.filter(wallpaper => wallpaper.suggested)
}
export function UseLiked() {
    const wallpaper = UseWallpaper()
    return wallpaper.filter(wallpaper => wallpaper.likes)
}
export function UseLibrarey() {
    const wallpaper = UseWallpaper()
    return wallpaper.filter(wallpaper => wallpaper.library)
}

export function UseWallpaper(): FullWallpaer[] {
    return [
        {
            uri: "https://ideogram.ai/assets/progressive-image/balanced/response/QflTI_-eShGb2NuCeuB9ew",
            name: "Be Happy",
            likes: true,
            suggested: true,
            library: false,
            collection: 1,
        },
        {
            uri: "https://ideogram.ai/assets/progressive-image/balanced/response/HbKof71sQ4ysjKANvQ6ezQ",
            name: "Chill Guy",
            likes: false,
            suggested: true,
            library: true,
            collection: 12,

        },
        {
            uri: "https://ideogram.ai/assets/progressive-image/balanced/response/0zCD9nVISXuU8J8ChP_7OA",
            name: "Horse",
            likes: true,
            suggested: false,
            library: false,
            collection: 12,

        },
        {
            uri: "https://ideogram.ai/assets/progressive-image/balanced/response/1AL63RzuQoqbn-tRPiiakg",
            name: "Ram Ji"
            , likes: true,
            suggested: true,
            library: false
            , collection: 12,

        },
        {
            uri: "https://ideogram.ai/assets/progressive-image/balanced/response/E0ylkADiS5mhf3n1nfGm4g",
            name: "Sport Car",
            likes: true,
            suggested: true,
            library: true,
            collection: 12,

        },
        {
            uri: "https://ideogram.ai/assets/progressive-image/balanced/response/_UpL600zQ6qGGgoH0Ut1Uw",
            name: "Love",
            likes: true,
            suggested: false,
            library: false,
            collection: 12,

        },





        {
            uri: "https://ideogram.ai/assets/progressive-image/balanced/response/tbKOPW8mSr6NVaQnV5MPfQ",
            name: "Just Click"
            , likes: true,
            suggested: true,
            library: false,
            collection: 12,

        },
        {
            uri: "https://ideogram.ai/assets/progressive-image/balanced/response/LZ_oxhUDQji4WDsU0xpijg",
            name: "Luxury",
            likes: true,
            suggested: true,
            library: true,
            collection: 12,

        },
        {
            uri: "https://ideogram.ai/assets/progressive-image/balanced/response/ItXKSxdARCOTHLBhHk6nyw",
            name: "Mammel",
            likes: true,
            suggested: false,
            library: false,
            collection: 12,

        },
        {
            uri: "https://ideogram.ai/assets/progressive-image/balanced/response/TYddTtt6TBmym3p-MeCrEQ",
            name: "Ostrich"
            , likes: true,
            suggested: true,
            library: false,
            collection: 12,

        },
        {
            uri: "https://ideogram.ai/assets/progressive-image/balanced/response/HSYQKAT5SRC3jNGSvfP03w",
            name: "Peace",
            likes: true,
            suggested: true,
            library: true,
            collection: 12,

        },
        {
            uri: "https://ideogram.ai/assets/progressive-image/balanced/response/k2tP2nFDS_yFbMBN8bG-tQ",
            name: "Broken",
            likes: true,
            suggested: false,
            library: false,
            collection: 12,

        }
    ]
}