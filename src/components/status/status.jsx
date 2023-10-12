import { Typography, Box } from '@mui/material';

export const Status = ({
  title,
  color,
  bgColor,
  children,
  styleWrapper,
  handleStatusClick,
  isLoading,
}) => {
  return (
    <Box
      sx={{
        width: 'auto',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '4px',
        padding: '8px 8px',
        backgroundColor: bgColor,
        ...styleWrapper,
      }}
      onClick={handleStatusClick}
    >
      <Typography variant="h4" sx={{ color: color, whiteSpace: 'nowrap', fontSize: "16px", }} className="font-family-Exo">
        {title}
      </Typography>
      {children}
    </Box>
  );
};
