import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import { styled } from "@mui/material/styles";


export const mainContainer = {
    display: "flex",
    flexDirection: {
        xs: "column",
        md: "row",
    },
}

export const xsNonesmFlex = {
    display: {
        xs: "none",
        md: "flex",

    }
}

export const mobScreen = {
    display: { xs: "flex", md: "none" },
    width: "100%",
    overflow: 'hidden'
}

export const body = {
    width: "100%",
}

const DRAWERWIDTH = 320;

// Styled components
const openedMixin = (theme) => ({
    width: DRAWERWIDTH,
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up("md")]: {
        width: `calc(86px)`,
    },
});

export const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
}));

export const AppBar = styled(MuiAppBar, {shouldForwardProp: (prop) => prop !== "open",})(({ theme, open }) => ({
    [theme.breakpoints.up("md")]: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        ...(open && {
            marginLeft: DRAWERWIDTH,
            width: `calc(100% - ${DRAWERWIDTH - 1}px  )`,
            transition: theme.transitions.create(["width", "margin"], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        }),
        ...(!open && {
            [theme.breakpoints.up("md")]: {
                width: `calc(100%)`,
            },
        }),
    },
    [theme.breakpoints.down("md")]: {
        width: '100%',
    },
}));

export const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
    width: DRAWERWIDTH,
    
    [theme.breakpoints.up("md")]: {
        flexShrink: 0,
        whiteSpace: "nowrap",
        boxSizing: "border-box",
        ...(open && {
            ...openedMixin(theme),
            "& .MuiDrawer-paper": openedMixin(theme),
        }),
        ...(!open && {
            height: "100vh",
            ...closedMixin(theme),
            "& .MuiDrawer-paper": closedMixin(theme),
        }),
    },
    [theme.breakpoints.down("md")]: {
        anchor: 'left'
    },

}));