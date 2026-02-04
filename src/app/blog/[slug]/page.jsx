import { blogs } from "@/components/blogs/utils";
import MDXContent from "@/components/blogs/MDX/MDXContent";

export default async function BlogPage({ params }) {
    const { slug } = await params;
    const blog = blogs.find(b => b.slug === slug);

    if (!blog) {
        return <div className="p-10 text-black">Blog not found</div>;
    }

    return (
        <article className="w-full border-2 border-black px-6 py-14">
            <h1 className="mb-6 text-4xl font-bold text-black">
                {blog.title}
            </h1>
            <div>

            </div>

            <MDXContent source={blog.content} />
        </article>
    );
}
