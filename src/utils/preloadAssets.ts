
const homeImagePaths = [
    // Header Logo
    'https://firebasestorage.googleapis.com/v0/b/portfolio-efbfd.appspot.com/o/header-logo.png?alt=media&token=3f8fcf79-f027-4a08-b8d1-0321e888998c',
];

const infoImagePaths = [
    'https://firebasestorage.googleapis.com/v0/b/portfolio-efbfd.appspot.com/o/home-profile.png?alt=media&token=0bb3f816-0c1a-495d-8acc-409218b3c07f'
];

const contactsImagePath = [
    'https://firebasestorage.googleapis.com/v0/b/portfolio-efbfd.appspot.com/o/profile-02.png?alt=media&token=855c4773-19b7-4d59-8daf-876e827e7c86'
];


export async function preloadImageAssets(pImagePaths: string): Promise<HTMLImageElement[]> {

    let imagePaths: any[];

    if (pImagePaths === "HOME") {
        imagePaths = homeImagePaths;
    }

    else if (pImagePaths === "INFO") {
        imagePaths = infoImagePaths;
    }

    else if (pImagePaths === "CONTACTS") {
        imagePaths = contactsImagePath;
    }


    else {
        imagePaths = [...homeImagePaths, ...infoImagePaths, ...contactsImagePath]
    }


    try {
        const loadedImages: HTMLImageElement[] = [];
        await Promise.all(
            imagePaths.map(async (imageUrl) => {
                const image = new Image();
                image.src = imageUrl;
                await new Promise<void>((resolve, reject) => {
                    image.onload = () => {
                        loadedImages.push(image);
                        resolve();
                    };
                    image.onerror = reject;
                });
            })
        );
        return loadedImages;
    } catch (error) {
        console.error('Error preloading images:', error);
        return [];
    }
}