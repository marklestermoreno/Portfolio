
const homeImagePaths = [
    // Header Logo
    'https://firebasestorage.googleapis.com/v0/b/portfolio-efbfd.appspot.com/o/header-logo.png?alt=media&token=3f8fcf79-f027-4a08-b8d1-0321e888998c',
];

const infoImagePaths = [
    'https://firebasestorage.googleapis.com/v0/b/portfolio-efbfd.appspot.com/o/PUP-Formal.png?alt=media&token=4c6a6318-b334-4586-ab97-d3bffc9ad7cc'
];

const experienceImagePaths = [
    'https://firebasestorage.googleapis.com/v0/b/portfolio-efbfd.appspot.com/o/header-logo.png?alt=media&token=3f8fcf79-f027-4a08-b8d1-0321e888998c',
];

const skillsImagePaths = [
    'https://firebasestorage.googleapis.com/v0/b/portfolio-efbfd.appspot.com/o/header-logo.png?alt=media&token=3f8fcf79-f027-4a08-b8d1-0321e888998c',
];

const portfolioImagePaths = [
    'https://firebasestorage.googleapis.com/v0/b/portfolio-efbfd.appspot.com/o/header-logo.png?alt=media&token=3f8fcf79-f027-4a08-b8d1-0321e888998c',
];

const achievementsImagePaths = [
    'https://firebasestorage.googleapis.com/v0/b/portfolio-efbfd.appspot.com/o/header-logo.png?alt=media&token=3f8fcf79-f027-4a08-b8d1-0321e888998c',
];




export async function preloadImageAssets(pImagePaths: string): Promise<HTMLImageElement[]> {

    let imagePaths: any[];

    if (pImagePaths === "HOME") {
        imagePaths = homeImagePaths;
    }

    else if (pImagePaths === "INFO") {
        imagePaths = infoImagePaths;
    }

    else if (pImagePaths === "SKILLS") {
        imagePaths = skillsImagePaths;
    }

    else if (pImagePaths === "EXPERIENCE") {
        imagePaths = experienceImagePaths;
    }

    else if (pImagePaths === "PORTFOLIO") {
        imagePaths = portfolioImagePaths;
    }

    else if (pImagePaths === "ACHIEVEMENTS") {
        imagePaths = achievementsImagePaths;
    }

    else {
        imagePaths = [...homeImagePaths, ...infoImagePaths, ...skillsImagePaths, ...experienceImagePaths, ...portfolioImagePaths, ...achievementsImagePaths]
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