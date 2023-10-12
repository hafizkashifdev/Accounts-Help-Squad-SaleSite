export const CustomModalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  minHeight: 220,
  bgcolor: 'background.paper',
  boxShadow: 24,
  py: 2,
  px: 4,
  width: { xs: '90%', sm: '60%', md: '40%', xl: '30%' },
  borderRadius: '8px',
  border: 'none',
  '&:focus-visible': {
    outline: 'none',
  },
  overflow: 'auto',
  '&::-webkit-scrollbar': { width: '7px', height: '7px', cursor: 'pointer' },
  '&::-webkit-scrollbar-track': {
    boxShadow: 'inset 0 0 5px grey',
    borderRadius: '10px',
  },
  '&::-webkit-scrollbar-thumb': {
    background: '#645CAA',
    borderRadius: '10px',
  },
};
