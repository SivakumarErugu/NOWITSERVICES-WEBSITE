'use client';
import { useState, useEffect } from "react";
import { useNowit } from "@/store/useNowit";
import MDXContent from "@/components/blogs/slug/MDXContent";
import Image from "next/image";
import { IoCalendarOutline } from "react-icons/io5";
import { BiTimeFive } from "react-icons/bi";
import { socialMedia } from "@/components/partials/utils";
import SimilarBlogs from "@/components/blogs/slug/SimilarBlogs";
import NewsletterCard from "@/components/blogs/slug/NewsLetterCard";

const tagColors = [
    "text-blue-600",
    "text-green-600",
    "text-purple-600",
    "text-pink-600",
    "text-indigo-600",
    "text-red-600",
    "text-yellow-600",
    "text-teal-600",
];

const BlogDetailView = ({ blogid }) => {
    const [GettedBlogId, setBlogid] = useState(0)
    const [translatedBlogContent, setTranslatedBlogContent] = useState({})
    const { t, isReady } = useNowit()
    const [translatedBlogs, setTranslatedBlogs] = useState([])
    const [btnText,setBtnText]=useState("Read More") 
    //  const similarBlogs = translatedBlogs
    //         .filter(b =>
    //             b.slug !== blog.slug && // exclude current blog
    //             b.tags?.some(tag => blog.tags?.includes(tag)) // shared tags
    //         )
    //         .map(b => ({
    //             ...b,
    //             matchCount: b.tags.filter(tag => blog.tags.includes(tag)).length
    //         }))
    //         .sort((a, b) => b.matchCount - a.matchCount) // most relevant first
    //         .slice(0, 5); 

    console.log("blogid in detail view", blogid);
    useEffect(() => {
        setBlogid(blogid)
        if (isReady) {
            const data = t("blogs")
            const currentBlog = data?.data?.find(b => b.id == blogid) || {}
            setTranslatedBlogs(data?.data || [])
            setTranslatedBlogContent(currentBlog)
            setBtnText(t("blog.readMore"))
        }
    }, [blogid, isReady, t, translatedBlogContent,translatedBlogs])
    // console.log(translatedBlogContent, "translatedBlogContent")
    if (!translatedBlogContent || !isReady) return null
    console.log("translatedBlogContent in detail view", translatedBlogContent);
    return (
        <article className="w-full bg-white px-4 sm:px-6 lg:px-12 py-6">
            {/* blog image */}
            <section className="relative w-full  h-[220px] sm:h-[320px] md:h-[420px] lg:h-[480px] rounded-lg overflow-hidden">
                <Image
                    src={translatedBlogContent?.image}
                    alt="Blog Background"
                    fill
                    priority
                    className="object-cover"
                />
            </section>

            {/* blog content */}
            <section className="px-3">
                {/* tags */}
                <ul className="flex flex-wrap gap-2 mt-8 mb-3">
                    {translatedBlogContent.tags?.map((tag, index) => {
                        const colorClass = tagColors[index % tagColors.length];

                        return (
                            <li
                                key={tag}
                                className={`inline-block text-xs font-semibold px-2.5 py-0.5 rounded ${colorClass}`}
                            >
                                {tag}
                            </li>
                        );
                    })}
                </ul>
                <h1 className="mb-3 text-4xl font-bold text-black">
                    {translatedBlogContent.title}
                </h1>
                <hr />
                <div className="flex gap-x-3 mt-2">
                    <span className="text-sm flex items-center text-gray-500"><IoCalendarOutline className="mr-1" size={19} />{translatedBlogContent.publishedAt}</span>
                    <span className="text-sm flex items-center text-gray-500"><BiTimeFive className="mr-1" size={20} />{translatedBlogContent.readingTime}</span>
                </div>

                <MDXContent source={translatedBlogContent.content} />
            </section>

            <section>
                <hr className="my-10" />
                <div className="flex items-center gap-x-3">
                    <h4 className="text-[#4B5563] ">{t("blogs.share")}</h4>
                    <div className="flex gap-4">
                        {socialMedia.map((each, i) => (
                            <span
                                key={i}
                                className="relative h-10 w-10 flex items-center justify-center cursor-pointer"
                            >
                                {/* Diffused glow */}
                                <span className="absolute inset-0 rounded-full bg-[#55B233] blur-md opacity-10"></span>

                                {/* Softened circle */}
                                <span className="absolute h-8 w-8 rounded-full bg-[#55B233] blur-[1px]"></span>

                                {/* Icon */}
                                <span className="relative z-10 text-white">
                                    {each.icon}
                                </span>
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            <section>
                    <SimilarBlogs relatedDesc={translatedBlogContent?.excerpt} blogs={translatedBlogs} />    
            </section>
            <section>
                <NewsletterCard />
            </section>

        </article>

    )
}
export default BlogDetailView;