import { FooterAuth } from "@root/layouts/auth/footer/footer";
import { HeaderAuth } from "@root/layouts/auth/header/Header";
import Box from "@mui/material/Box";

export default function Layout({ children }: any) {
  return (
    <Box display={"flex"} flexDirection={"column"} minHeight={"100vh"}>
      <Box marginX={{ xs: 1, md: 5 }} paddingY={{ xs: 1, md: 2 }}>
        <HeaderAuth />
      </Box>

      <Box
        flexGrow={1}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        {children}
      </Box>

      <Box margin={{ xs: 2.5, md: 4.5 }}>
        <FooterAuth />
      </Box>
    </Box>
  );
}
