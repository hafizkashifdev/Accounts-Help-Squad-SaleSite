import { Box, Typography } from "@mui/material";

export const Descriptors = ({
  mainHeading,
  heading,
  description,
  listItem,
}: any) => {
  return (
    <Box>
      {!!mainHeading?.length && (
        <Typography
          sx={{
            color: "primary.main",
            marginY: 1,
          }}
          variant="h3"
        >
          {mainHeading}
        </Typography>
      )}
      {!!heading?.length && (
        <Typography
          sx={{
            // fontSize: "1.2rem",
            // fontWeight: 600,
            color: "primary.main",
            marginY: 1,
          }}
          variant="h4"
        >
          {heading}
        </Typography>
      )}
      {!!listItem?.length && (
        <Box
          marginLeft={2}
          sx={{
            fontSize: "1rem",
            fontWeight: 600,
            color: "primary.main",
            marginY: 1,
          }}
        >
          <ul>
            <li key={listItem} style={{ marginBottom: 1, marginTop: 1 }}>
              {listItem}
            </li>
          </ul>
        </Box>
      )}
      <Typography
        sx={{ fontWeight: 500, color: "primary.lighter", marginY: 1 }}
        variant="body2"
      >
        {description}
      </Typography>
    </Box>
  );
};
