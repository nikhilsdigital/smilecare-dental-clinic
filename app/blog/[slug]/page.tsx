import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { blogs, getBlogBySlug } from "@/data/blogs";
import BlogDetailHero from "@/components/blog/BlogDetailHero";
import BlogArticle from "@/components/blog/BlogArticle";

type BlogDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogDetailPageProps): Promise<Metadata> {
  const { slug } = await params;

  const blog = getBlogBySlug(slug);

  if (!blog) {
    return {
      title: "Article Not Found | SmileCare Dental Clinic",
    };
  }

  return {
    title: `${blog.title} | SmileCare Dental Clinic`,
    description: blog.excerpt,
  };
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;

  const blog = getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  return (
    <>
      <BlogDetailHero blog={blog} />
      <BlogArticle blog={blog} />
    </>
  );
}
