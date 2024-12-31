import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, Typography, CardMedia, Box } from '@mui/material';

export default function BlogCard({ props }) {
  return (
    <Link href={`/blog/${props.slug}`} style={{ textDecoration: 'none' }}>
      <Card sx={{ display: 'flex', height: 200, '&:hover': { boxShadow: 6 } }}>
        <CardMedia
          component="div"
          sx={{ width: 300, position: 'relative' }}
        >
          <Image
            src={props.imageUrl}
            alt={props.title}
            layout="fill"
            objectFit="cover"
          />
        </CardMedia>
        <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component="h2" variant="h5" gutterBottom>
              {props.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {props.description}
            </Typography>
          </CardContent>
        </Box>
      </Card>
    </Link>
  );
}

