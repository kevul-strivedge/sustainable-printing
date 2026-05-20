// components/pages/Blog.tsx

import { blogData } from "@/src/constants/blog.data";
import PageHeader from "../ui/PageHeader";
import ProductCard from "../ui/ProductCard";

const Blog = () => {
  return (
    <>
      <PageHeader title="Our Blogs" />
      <div className="bg-[#e8ffd6]">
        <div className="sm:max-w-6xl mx-auto px-6 sm:py-16 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogData.map((post) => (
              <ProductCard
                key={post.id}
                product={{
                  id: post.id,
                  image: post.image,
                  imageAlt: post.imageAlt,
                  title: post.title,
                  description: "",
                  shopLabel: "Read More",
                  shopHref: `/blogs/${post.slug}`,
                  imgClassName:
                    "!object-contain transition-transform duration-500 group-hover:scale-110",
                  containerClassName: "aspect-[16/9] h-auto",
                  titleClassName: "!text-lg",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
