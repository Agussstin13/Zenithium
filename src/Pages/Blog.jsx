import { useState, useEffect } from 'react';
import BlogCard from './components/BlogCard';
import Pagination from './components/Pagination';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

export default function Blog() {
  const [currentPage, setCurrentPage] = useState(1);
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    setBlogPosts(generateMockBlogPosts(100));
  }, []);

  const indexOfLastPost = currentPage * 20;
  const indexOfFirstPost = indexOfLastPost - 20;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <ThemeProvider theme={theme}>
      <div className="min-h-screen bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8">Mi Blog</h1>
          <div className="space-y-6">
            {currentPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
          <div className="mt-8">
            <Pagination
              itemsPerPage={20}
              totalItems={blogPosts.length}
              paginate={paginate}
              currentPage={currentPage}
            />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

function generateMockBlogPosts(count) {
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    title: `Entrada de blog ${i + 1}`,
    description: `Esta es una descripción de prueba para la entrada de blog número ${i + 1}. Aquí iría un resumen del contenido del artículo.`,
    imageUrl: `/placeholder.svg?height=200&width=300&text=Imagen+${i + 1}`,
    slug: `entrada-blog-${i + 1}`,
  }));
}
