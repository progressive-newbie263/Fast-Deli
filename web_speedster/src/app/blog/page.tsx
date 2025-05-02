import { FC } from 'react';
import Blog from '@/components/Blog';

const BlogPage: FC = () => {
  const blogs = [
    { 
      title: 'Bài viết 1', 
      description: 'Giới thiệu sơ lược bài viết 1', 
      href: '/blog/blog-1/page.tsx',
      image: '/assets/blog-images/blog1.png', 
    },
    { 
      title: 'Bài viết 2', 
      description: 'Giới thiệu sơ lược bài viết 2', 
      href: '/blog/blog-2/page.tsx',
      image: '', 
    },
    {
      title: 'Bài viết 3',
      description: 'Giới thiệu sơ lược bài viết 3',
      href: '/blog/blog-3/page.tsx',
      image: '',
    },
    {
      title: 'Bài viết 4',
      description: 'Giới thiệu sơ lược bài viết 4',
      href: '/blog/blog-4/page.tsx',
      image: '',
    },
  ];

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Danh sách bài viết</h1>

      <div className="space-y-6">
        {blogs.map((blog, index) => (
          <Blog
            image={blog.image} 
            key={index}
            title={blog.title}
            description={blog.description}
            href={blog.href}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
