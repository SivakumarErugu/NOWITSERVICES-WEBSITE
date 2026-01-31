
import { BiLogoFacebook } from "react-icons/bi";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { LuBriefcaseBusiness } from "react-icons/lu";
import { LiaHeadsetSolid } from "react-icons/lia";
import { TbDatabaseImport } from "react-icons/tb";
import { MdOutlineModelTraining } from "react-icons/md";
import { RiLightbulbFlashFill } from "react-icons/ri";

export const headerOptions = [
    { name: 'home', label: 'Home', link: '/', icon: '', options: [] },
    { name: 'about us', label: 'About Us', link: '/', icon: '', options: [] },
    {
        name: 'services', label: 'Services', link: '/', icon: '', options: [
            { name: 'business launch', label: 'Business Launch', link: '/', icon: <LuBriefcaseBusiness /> },
            { name: 'professional services', label: 'Professional Services', link: '/', icon: <LiaHeadsetSolid /> },
            { name: 'migration', label: 'Migration', link: '/', icon: <TbDatabaseImport /> },
            { name: 'training services', label: 'Training Services', link: '/', icon: <MdOutlineModelTraining /> },
            { name: 'smart marketing', label: 'Smart Marketing', link: '/', icon: <RiLightbulbFlashFill /> },
            { name: 'messaging services', label: 'Messaging Services', link: '/', icon: <LuBriefcaseBusiness /> },
            { name: 'ip filing services', label: 'IP Filing Services', link: '/', icon: <LuBriefcaseBusiness /> },
        ]
    },
    { name: 'products', label: 'Products', link: '/', icon: '', options: [] },
    { name: 'blog', label: 'Blog', link: '/', icon: '', options: [] },
    { name: 'careers', label: 'Careers', link: '/careers', icon: '', options: [] },
]

export const socialMedia = [
    { name: 'facebook', icon: <BiLogoFacebook size={22} />, label: 'Facebook', link: '' },
    { name: 'x', icon: <FaTwitter size={16} />, label: 'Twitter', link: '' },
    { name: 'instagram', icon: <FaInstagram size={20} />, label: 'Instagram', link: '' },
    { name: 'youtube', icon: <FaYoutube size={20} />, label: 'Youtube', link: '' },
]

export const quickLinks = [
    { name: 'home', label: 'Home', link: '/', icon: '', },
    { name: 'about us', label: 'About Us', link: '/', icon: '', },
    { name: 'services', label: 'Services', link: '/', icon: '', },
    { name: 'products', label: 'Products', link: '/', icon: '', },
    { name: 'industries', label: 'Industries', link: '/', icon: '', },
    { name: 'careers', label: 'Careers', link: '/', icon: '', },
]

export const ServicesLinks = [
    { name: 'cloud & digital', label: 'Cloud & Digital Transformation', link: '/' },
    { name: 'ai & automation', label: 'AI & Automation', link: '/' },
    { name: 'analytics & intelligence', label: 'Analytics & Intelligence', link: '/' },
    { name: 'consulting/professional services', label: 'Consulting / Professional Services', link: '/' },
]

export const LegalLinks = [
    { name: 'privacy policy', label: 'Privacy Policy', link: '/' },
    { name: 'terms of service', label: 'Terms Of Service', link: '/' },
    { name: 'cookie policy', label: 'Cookie Policy', link: '/' }
]




