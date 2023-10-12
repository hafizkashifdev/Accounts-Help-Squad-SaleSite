import { styled } from "@mui/material/styles";
import { NavLink } from "react-router-dom";

export const NavLinkMenu = styled(NavLink)(() => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    listStyle: "none",
    textDecoration: "none",
}));

export const SidebarLabel = styled("div")(() => ({
    wordBreak: "break-all",
}));

export const DropdownLink = styled(NavLink)(() => ({
    alignItems: "center",
    textDecoration: "none",
    wordWrap: "break-word",
}));