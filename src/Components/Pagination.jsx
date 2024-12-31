import { Pagination as MuiPagination } from '@mui/material';

export default function Pagination({ itemsPerPage, totalItems, paginate, currentPage }) {
  const pageCount = Math.ceil(totalItems / itemsPerPage);

  const handleChange = (event, value) => {
    paginate(value);
  };

  return (
    <MuiPagination
      count={pageCount}
      page={currentPage}
      onChange={handleChange}
      color="primary"
      size="large"
      sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}
    />
  );
}
