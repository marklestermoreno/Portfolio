import Typewriter from 'typewriter-effect';
import "./Home.css"

export default function Home({ infoImages }: { infoImages: HTMLImageElement[] }) {

    return (
        <>
            <div className="w-100 flex flex-col justify-around align-center py-10 px-5 text-white
                        md:flex-row ">
                <div className="w-100 text-center self-center order-2 mr-0 ml-5
                        md:w-2/3 md:text-start md:order-1 md:mr-10">
                    <p className="text-greetings pt-5 md:pt-0"> Welcome to my Porfolio </p>
                    <p className="text-intro"> Hi, I'm Mark Lester Moreno </p>
                    <p className="text-position">
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
                    </p>
                    <p className="text-details">  A consistently achieved President's and Dean's List honors, holds a degree in Bachelor of Information Communication and Technology as well as an Associate Degree in Diploma in Information Communication and Technology from Polytechnic University of the Philippines - Sta Mesa. Currently employed as a Junior Web Developer with expertise in Blazor and ASP.Net, alongside proficiency in web design. </p>
                </div>

                <div className="w-100 flex justify-center text-center self-center order-1
                    md:w-1/3 md:order-2">
                    <a href="mailto:mlmoreno.work@gmail.com" target="_blank">
                        {infoImages.length > 0 && infoImages[0] && (
                            <img src={infoImages[0].src ?? ""} alt="profile-header" className='profile-image hover:brightness-110' />
                        )}
                    </a>
                </div>

            </div>
        </>
    )
}