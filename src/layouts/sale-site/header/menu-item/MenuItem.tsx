import Button from "@mui/material/Button";

export const MenuItem = ({ menuOnClick, isActive, menuItemName }: any) => {
  return (
    <Button
      onClick={() => menuOnClick?.()}
      disableRipple
      sx={{
        color: isActive ? "primary.main" : "primary.main",
        fontsize: "18px",
        fontWeight: "600",
        backgroundColor: "transparent",
        "&:hover": { backgroundColor: "transparent" },
      }}
    >
      {menuItemName}
    </Button>
  );
};
