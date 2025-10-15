import { styled } from '@mui/material';
import { Link } from 'react-router';

/**
 * React Router の Link
 * styled API で sx props も使えるようになる
 */
export const RouterLink = styled(Link)(({ theme }) => ({
  display: 'inline-block',
  color: theme.palette.text.primary,
  textDecoration: 'none',
  fontSize: theme.typography.button.fontSize,
  padding: `${theme.spacing(0.5)} ${theme.spacing(1)}`,
}));
