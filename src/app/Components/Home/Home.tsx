import Typewriter from 'typewriter-effect';
import Image from 'next/image';
import "./Home.css"

export default function Home({ infoImages }: { infoImages: HTMLImageElement[] }) {

    const resumeLink = document.createElement('a');
    resumeLink.target = "_blank"; // Open link in a new tab
    resumeLink.href = "https://firebasestorage.googleapis.com/v0/b/portfolio-efbfd.appspot.com/o/Mark%20Lester%20Moreno.pdf?alt=media&token=dc04336c-0e0f-4c24-ad0a-931dc0bb24db";
    document.body.appendChild(resumeLink);

    // APK
    // const apk = document.createElement('a');
    // apk.target = "_blank"; // Open link in a new tab
    // apk.href = "https://firebasestorage.googleapis.com/v0/b/portfolio-efbfd.appspot.com/o/ML%20Moreno.apk?alt=media&token=082a3b5b-0add-4be4-a881-573e6a10e1a9";
    // document.body.appendChild(apk);

    return (
        <>
            <div className="w-100 flex flex-col justify-around align-center py-10 px-5 text-white
                        md:flex-row ">
                <div className="w-100 text-center self-center order-2 mr-0 ml-0
                        md:ml-5
                        md:w-2/3 md:text-start md:order-1 md:mr-10">
                    <p className="text-greetings pt-5 md:pt-0"> Welcome to my Porfolio </p>
                    <p className="text-intro"> Hi, I&apos;m Mark Lester Moreno </p>
                    <div className="text-position">
                        <span>
                            <Typewriter
                                options={{
                                    strings: [
                                        'a Fullstack Developer', 'a UI/UX Designer',
                                        'a Media Editor', 'a Computer Technician'
                                    ],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </span>
                    </div>
                    <p className="text-details">
                        A graduate of BSIT from PUP-Sta Mesa, consistently achieving President's and Dean's List honors, I am a Full-Stack Web Developer and UI/UX Designer actively seeking a long-term, work-from-home opportunity. Skilled in Blazor (Server, MAUI, WASM), ASP.Net, React/NextJS, MS SQL, Firebase, and Redis, I specialize in architecting dynamic, high-performance web applications with efficient database management and aggressive caching strategies. My technical foundation is complemented by creative expertise in Photoshop, Figma, and Illustrator, allowing me to design intuitive interfaces and high-quality digital assets. With a comprehensive background in System Design, Front-End, Back-End, Database management, and DevOps, I am deeply passionate about building seamless, scalable platforms while rigorously optimizing SEO, performance, and security.                    </p>
                    <div className="flex flex-col sm:flex-row md:justify-start justify-center text-center mt-5 mb-1">
                        <button onClick={() => resumeLink.click()} className='bg-[#ff014f] text-sm text-white rounded-sm mx-1 py-1 px-5 hover:bg-white hover:text-[#ff014f] hover:cursor-pointer transition-all duration-150'>
                            Download Resume
                        </button>
                    </div>
                </div>

                <div className="w-100 flex justify-center text-center self-center order-1
                    md:w-1/3 md:order-2">
                    <a href="mailto:mlmoreno.work@gmail.com" target="_blank">
                        {infoImages.length > 0 && infoImages[0] && (
                            <Image src={infoImages[0].src ?? ""}
                                alt="profile-header"
                                width={1000}
                                height={1000}
                                className='profile-image hover:brightness-110' />
                        )}
                    </a>
                </div>

            </div>
        </>
    )
}
