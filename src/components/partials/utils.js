
import { BiLogoFacebook } from "react-icons/bi";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { LuBriefcaseBusiness } from "react-icons/lu";
import { LiaHeadsetSolid } from "react-icons/lia";
import { TbDatabaseImport } from "react-icons/tb";
import { MdOutlineModelTraining } from "react-icons/md";
import { RiLightbulbFlashFill } from "react-icons/ri";
import { LuMessageCircleMore } from "react-icons/lu";
import { BsGlobe2 } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";



export const headerOptions = [
    { name: 'home', label: 'Home', link: '/', icon: '', options: [] },
    { name: 'about us', label: 'About Us', link: '/aboutus', icon: '', options: [] },
    {
        name: 'services', label: 'Services', link: '/', icon: '', options: [
            { name: 'smart marketing', label: 'Smart Marketing', link: '/', icon: <RiLightbulbFlashFill /> },
            { name: 'business launch', label: 'Business Launch', link: '/', icon: <LuBriefcaseBusiness /> },
            { name: 'professional services', label: 'Professional Services', link: '/', icon: <LiaHeadsetSolid /> },
            { name: 'migration', label: 'Migration', link: '/', icon: <TbDatabaseImport /> },
            { name: 'training services', label: 'Training Services', link: '/', icon: <MdOutlineModelTraining /> },
            { name: 'messaging services', label: 'Messaging Services', link: '/', icon: <LuMessageCircleMore /> },
            { name: 'ip filing services', label: 'IP Filing Services', link: '/', icon: <BsGlobe2 /> },
        ]
    },
    { name: 'products', label: 'Products', link: '/products', icon: '', options: [] },
    { name: 'blog', label: 'Blog', link: '/blog', icon: '', options: [] },
    { name: 'careers', label: 'Careers', link: '/careers', icon: '', options: [] },
]

export const socialMedia = [
    { name: 'facebook', icon: <BiLogoFacebook size={22} />, label: 'Facebook', link: 'https://www.facebook.com/p/NOWIT-Services-61559601166623/' },
    { name: 'linkedin', icon: <FaLinkedin size={16} />, label: 'Twitter', link: 'https://www.linkedin.com/company/nowitservices/' },
    { name: 'instagram', icon: <FaInstagram size={20} />, label: 'Instagram', link: 'https://www.instagram.com/_nowitservices_/' },
    { name: 'youtube', icon: <FaYoutube size={20} />, label: 'Youtube', link: 'https://www.youtube.com/@NOWITSERVICES-j7k' },
]

export const quickLinks = [
    { name: 'home', label: 'Home', link: '/', icon: '', },
    { name: 'about us', label: 'About Us', link: '/aboutus', icon: '', },
    // { name: 'services', label: 'Services', link: '/services', icon: '', },
    { name: 'products', label: 'Products', link: '/products', icon: '', },
    // { name: 'industries', label: 'Industries', link: '/', icon: '', },
    { name: 'careers', label: 'Careers', link: '/careers', icon: '', },
]

export const ServicesLinks = [
    { name: 'become a partner', label: 'Become a Partner', link: '/become-a-partner' },
    { name: 'become an Invester', label: 'Become an Invester', link: '/become-a-partner' },
]

export const LegalLinks = [
    { name: 'privacy policy', label: 'Privacy Policy', link: '/terms-privacy-cookie-policy' },
    { name: 'terms of service', label: 'Terms Of Service', link: '/terms-privacy-cookie-policy' },
    { name: 'cookie policy', label: 'Cookie Policy', link: '/terms-privacy-cookie-policy' }
]




