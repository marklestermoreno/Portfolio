import "./Header.css"
import Link from 'next/link';

import { PiAddressBookDuotone, PiFacebookLogoFill } from "react-icons/pi";
import { MdContactEmergency, MdContacts } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

import { Tooltip } from 'react-tooltip'

import NavLink from "../Other/NavLink";



export default function Header({ homeImages }: { homeImages: HTMLImageElement[] }) {

    return (
        <>
            <div className="flex justify-around items-center text-center py-3 background-color text-slate-400 border-b-2">

                <span id="address" className="flex align-middle items-center text-xs hover:cursor-pointer">
                    <PiAddressBookDuotone />
                    <p className="ml-1 hidden sm:flex"> Marikina City, Philippines </p>
                </span>
                <Tooltip anchorSelect="#address" className="tooltip-global" place="bottom">
                    Marikina City, Philippines
                </Tooltip>

                <span id="number" className="flex align-middle items-center text-xs hover:cursor-pointer">
                    <MdContactEmergency />
                    <p className="ml-1 hidden sm:flex"> 09089260456 </p>
                </span>
                <Tooltip anchorSelect="#number" className="tooltip-global" place="bottom">
                    09089260456
                </Tooltip>

                <Link href="https://www.facebook.com/MLMoreno09/">
                    <span id="facebook" className="flex align-middle items-center text-xs hover:cursor-pointer hover:opacity-75">
                        <PiFacebookLogoFill />
                        <p className="ml-1 hidden sm:flex"> MLMoreno09 </p>
                    </span>
                </Link>
                <Tooltip anchorSelect="#facebook" className="tooltip-global" place="bottom">
                    Click To View
                </Tooltip>

                <Link href="https://github.com/marklestermoreno">
                    <span id="github" className="flex align-middle items-center text-xs hover:cursor-pointer hover:opacity-75">
                        <FaGithub />
                        <p className="ml-1 hidden sm:flex"> marklestermoreno09 </p>
                    </span>
                </Link>
                <Tooltip anchorSelect="#github" className="tooltip-global" place="bottom">
                    Click To View
                </Tooltip>

                <Link href="https://www.linkedin.com/in/mark-lester-moreno-6a06a6219/">
                    <span id="linkedin" className="flex align-middle items-center text-xs hover:cursor-pointer hover:opacity-75">
                        <FaLinkedin />
                        <p className="ml-1 hidden sm:flex"> mark-lester-moreno  </p>
                    </span>
                </Link>
                <Tooltip anchorSelect="#linkedin" className="tooltip-global" place="bottom">
                    Click To View
                </Tooltip>

            </div>

            {/* Desktop Header */}

            <header className='flex justify-between items-center text-center py-3 px-5 background-color text-white'>
                <div className="sm:w-2/12">
                    {homeImages.length > 0 && homeImages[0] && (
                        <Link href='/'>
                            <img src={homeImages[0].src ?? ""} alt="profile-header" className='w-16 h-16 hover:brightness-110' />
                        </Link>
                    )}
                </div>
                <div className="sm:w-11/12">
                    <div className="hidden sm:flex justify-around">
                        <NavLink href="skills">
                            Skill
                        </NavLink>
                        <NavLink href="experience">
                            Experience
                        </NavLink>
                        <NavLink href="portfolios">
                            Portfolio
                        </NavLink>
                        <NavLink href="achievements">
                            Achievement
                        </NavLink>
                        <NavLink href="contacts">
                            Contact
                        </NavLink>
                    </div>

                    {/* Mobile Header */}
                    <div className="flex sm:hidden">
                        <NavLink href="contacts">
                            <MdContacts size={40} />
                        </NavLink>
                    </div>
                </div>


            </header>
        </>
    );
}