import React, { useState, useEffect } from "react";
import { Box, Card, CardContent, Typography, CardMedia, Container, Pagination, Stack } from "@mui/material";

const ITEMS_PER_PAGE = 20;

export default function Blog() {
  const [currentPage, setCurrentPage] = useState(1);
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    setBlogPosts(generateMockBlogPosts(100));
  }, []);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  const indexOfLastPost = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstPost = indexOfLastPost - ITEMS_PER_PAGE;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h3" align="center" gutterBottom>
        Blog
      </Typography>
      <Stack spacing={3}>
        {currentPosts.map((post) => (
          <Card key={post.id} sx={{ display: "flex", boxShadow: 3 }}>
            <CardMedia
              component="img"
              image={post.imageUrl}
              alt={post.title}
              sx={{
                width: 200,
                height: "auto",
                borderRadius: "8px",
                margin: 2,
              }}
            />
            <CardContent sx={{ flex: 1 }}>
              <Typography variant="h5" component="h2" gutterBottom>
                {post.title}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {post.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Stack>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        <Pagination
          count={Math.ceil(blogPosts.length / ITEMS_PER_PAGE)}
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
          size="large"
        />
      </Box>
    </Container>
  );
}

function generateMockBlogPosts(count) {
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    title: `Entrada de Blog ${i + 1}`,
    description: `Esta es una descripción de prueba para la entrada número ${i + 1}. Aquí puedes incluir un resumen del contenido.`,
    imageUrl: `https://via.placeholder.com/200x150?text=Imagen+${i + 1}`,
    slug: `entrada-blog-${i + 1}`, // Preparado para redirección
  }));
}
