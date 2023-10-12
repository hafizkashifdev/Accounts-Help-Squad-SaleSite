import { useState } from "react";

export const useMUITooltip = () => {
    const [anchorElMUITooltip, setAnchorElMUITooltip] =useState(null);
    const OPEN = Boolean(anchorElMUITooltip);

    const handleClickMUITooltip = ( event ) => {
        !!anchorElMUITooltip ? setAnchorElMUITooltip(null) : setAnchorElMUITooltip(event.currentTarget)
    };
    const handleCloseMUITooltip = () => {
        setAnchorElMUITooltip(null);
    };

    return {
        OPEN, handleClickMUITooltip, handleCloseMUITooltip,
    }
}