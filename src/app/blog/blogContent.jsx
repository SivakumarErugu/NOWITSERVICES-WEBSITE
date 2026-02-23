'use client';

import { useEffect } from 'react';
import { useNowit } from '@/store/useNowit';

import TopArticles from '@/components/blogs/TopArticles';
import LatestBlogs from '@/components/blogs/LatestBlogs';
import Banner from '@/components/blogs/Banner';

const BlogsContent = () => {
  const { setPageKey, isReady } = useNowit();

  // ✅ Stable page key for Blogs
  useEffect(() => {
    setPageKey('blog');
  }, [setPageKey]);

  // ✅ Wait until translations are ready
  if (!isReady) return null; // or <Loading />

  return (
    <div className="w-full px-4 sm:px-6 lg:px-12 py-6 space-y-8">
      {/* Banner section */}
      <section
        className="
          relative w-full overflow-hidden rounded-xl
          min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh]
        "
      >
        <Banner />
      </section>

      <section>
        <TopArticles />
      </section>

      <section>
        <LatestBlogs />
      </section>
    </div>
  );
};

export default BlogsContent;