import { useTheme } from "@mui/material/styles";

const styles = () => {
    const { palette }: any = useTheme()
    return {
        flexCenter: {
            display: "flex", justifyContent: "center", alignItems: "center"
        },
        columnWrapper: {

        },
        headerText: {
            color: palette?.primary?.lighter,
            fontSize: 20, pb: { xs: 2.6, md: 4.6 },
        },
        imageWrapper: {
            width: { xs: "100%" },
            minWidth: { xs: "100%", xl: "783px" },
            minHeight: { xs: "260px", sm: 340, md: 486 },
            position: "relative",
        },
        image: {
            position: "absolute",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0
        }
    }
}
export default styles;