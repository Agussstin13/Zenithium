import { Card, CardContent, Typography, CardMedia, Box } from '@mui/material';

export default function BlogCard({ slug, title, description, imageUrl }) {
  return (
    <a href={`/blog/${slug}`} style={{ textDecoration: 'none' }}>
      <Card sx={{ display: 'flex', height: 200, '&:hover': { boxShadow: 6 } }}>
        <CardMedia
          component="div"
          sx={{ width: 300, position: 'relative' }}
        >
          <img className='blog-image' src={imageUrl} alt={title}/>
        </CardMedia>
        <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component="h2" variant="h5" gutterBottom>
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </CardContent>
        </Box>
      </Card>
    </a>
  );
}

