import Button from "@mui/material/Button";

export const MenuItem = ({ menuOnClick, isActive, menuItemName }: any) => {
  return (
    <Button
      //   onClick={() => router.push("/pricing")}
      onClick={() => menuOnClick?.()}
      disableRipple
      sx={{
        // color: pathname.startsWith("/pricing") ? "red" : "#2B2B33",
        color: isActive ? "#2B2B33" : "#2B2B33",
        fontsize: "18px",
        fontWeight: "600",
        backgroundColor: "transparent",
        "&:hover": { backgroundColor: "transparent" },
      }}
    >
      {" "}
      {menuItemName}{" "}
    </Button>
  );
};
