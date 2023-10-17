"use client";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
export const FooterAuth = () => {
    const currentYear = new Date()?.getFullYear();
    return (
        <>
            <Box
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                paddingTop={2}

            >
                <Typography
                    sx={{
                        color: "#666",
                        fontWeight: 500,
                        fontSize: "16px",
                    }}
                >
                    Copyright  © {currentYear} Accounts Help Squad. All rights reserved.
                </Typography>

            </Box>
        </>
    );
};
