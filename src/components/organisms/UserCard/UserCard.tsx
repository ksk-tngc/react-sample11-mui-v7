import { Card, CardMedia, Stack, Typography } from '@mui/material';
import { memo } from 'react';

type Props = {
  image: string;
  name: string;
  fullName: string;
  onClick: () => void;
};

/**
 * ユーザーカード
 */
export const UserCard = memo(({ image, name, fullName, onClick }: Props) => {
  return (
    <Card
      onClick={onClick}
      sx={{
        height: 260,
        pt: 2.5,
        pb: 2,
        borderRadius: 2,
        '&:hover': {
          cursor: 'pointer',
          opacity: 0.8,
        },
      }}
    >
      <Stack sx={{ textAlign: 'center' }} spacing={1} useFlexGap>
        <CardMedia
          image={image}
          sx={{
            width: 160,
            aspectRatio: 1,
            borderRadius: '50%',
            mx: 'auto',
          }}
        />
        <Typography variant="subtitle1" fontWeight="bold">
          {name}
        </Typography>
        <Typography variant="body2">{fullName}</Typography>
      </Stack>
    </Card>
  );
});
