
import { blogs, tagColors } from "@/components/blogs/utils";
import MDXContent from "@/components/blogs/slug/MDXContent";
import Image from "next/image";
import { IoCalendarOutline } from "react-icons/io5";
import { BiTimeFive } from "react-icons/bi";
import { socialMedia } from "@/components/partials/utils";
import SimilarBlogs from "@/components/blogs/slug/SimilarBlogs";
import NewsletterCard from "@/components/blogs/slug/NewsLetterCard";


export default async function BlogPage({ params }) {
    const { slug } = await params;
    const blog = blogs.find(b => b.slug === slug);

    if (!blog) {
        return <div className="p-10 text-black">Blog not found</div>;
    }

    const similarBlogs = blogs
        .filter(b =>
            b.slug !== blog.slug && // exclude current blog
            b.tags?.some(tag => blog.tags?.includes(tag)) // shared tags
        )
        .map(b => ({
            ...b,
            matchCount: b.tags.filter(tag => blog.tags.includes(tag)).length
        }))
        .sort((a, b) => b.matchCount - a.matchCount) // most relevant first
        .slice(0, 5); // limit to top 3

    return (
        <article className="w-full px-15 py-5 bg-white">
            {/* blog image */}
            <section className="relative w-full h-[480px] rounded-lg overflow-hidden">
                <Image
                    src={blog.image}
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
                    {blog.tags.map((tag, index) => {
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
                    {blog.title}
                </h1>
                <hr />
                <div className="flex gap-x-3 mt-2">
                    <span className="text-sm flex items-center text-gray-500"><IoCalendarOutline className="mr-1" size={19} />{blog.publishedAt}</span>
                    <span className="text-sm flex items-center text-gray-500"><BiTimeFive className="mr-1" size={20} />{blog.readingTime}</span>
                </div>

                <MDXContent source={blog.content} />
            </section>

            <section>
                <hr className="my-10" />
                <div className="flex items-center gap-x-3">
                    <h4 className="text-[#4B5563] ">Share this article:</h4>
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
                <SimilarBlogs relatedDesc={blog.excerpt} blogs={similarBlogs} />
            </section>

            <section>
                <NewsletterCard />
            </section>

        </article>
    );
}
