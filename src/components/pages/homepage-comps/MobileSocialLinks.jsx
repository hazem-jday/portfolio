import React from "react";
import { FaGithub, FaLinkedin, FaGooglePlay } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const MobileSocialLinks = () => {

    const links = [
        {
            id: 1,
            child: (
                <>
                    <FaLinkedin size={20} /> LinkedIn
                </>
            ),
            href: 'https://www.linkedin.com/in/hazemjday/',
            style: 'rounded-tr-md'
        },
        {
            id: 2,
            child: (
                <>
                    <FaGithub size={20} /> GitHub 
                </>
            ),
            href: 'https://github.com/hazem-jday'
        },
        {
            id: 3,
            child: (
                <>
                    <FaGooglePlay size={20} /> Apps 
                </>
            ),
            href: 'https://play.google.com/store/apps/developer?id=Hazem+Jday'
        },
        {
            id: 4,
            child: (
                <>
                    <HiOutlineMail size={20} /> Mail
                </>
            ),
            href: 'mailto:hazemjday@gmail.com'
        },
        {
            id: 5,
            child: (
                <>
                    <BsFillPersonLinesFill size={20} /> Resume 
                </>
            ),
            href: '/hazemjday.pdf',
            style: 'rounded-br-md',
            download: true
        }
    ]

    return (
        <div className="flex mt-4 desktop:hidden">
            <ul className="flex gap-2 flex-wrap justify-center">
                {
                    links.map(({id, child, href, style, download}) => (
                        <li key={id} className={"flex items-center gap-2 w-28 h-9 px-4 bg-gradient-to-t from-green-400/50 to-primary-color/50 rounded-md" + " " + style }>
                            <a href={href} className="flex gap-3 items-center w-full text-white text-sm" download={download} target="_blank" rel="noreferrer">
                            {child}
                            </a>
                        </li>
                    ))
                }
                
            </ul>
        </div>
    );
};

export default MobileSocialLinks;
