// MUI
import { Box, ClickAwayListener, Divider, Tooltip } from "@mui/material";

// Data
import { moreOptionsData } from "./more-options-data";

// Custom Hook
import { useMUITooltip } from "../../../../../hooks/use-mui-tooltip";
import UserAvatar from "../../../../../assests/svg/app-logo/app-logo.svg";
import PersonIcon from '@mui/icons-material/Person';
// MUI Styles
import { tooltipComponenetsProps } from "./more-options-mui-style";
import "./more-options.scss";
// Component Function Starts Here

export const MoreOptions = () => {
  const { OPEN, handleClickMUITooltip, handleCloseMUITooltip } = useMUITooltip();

  const MenuCard = (<div className="dropdown-menu font-family-Exo">
    <div>
      <Box className="user-profile-name" sx={{ display: { md: 'none', xs: 'block' } }}>
        <div className="flex dropdown-menu-row align-center cursor-pointer"
          onClick={() => handleCloseMUITooltip()}
        >
          <PersonIcon color="#40404D" width="10px" />
          <span className="font-weight-400 menu-title ">
            <Box className="header-profile-name font-weight-600 primary-color secondary-title center-text">
              Scott Fisher
            </Box>
          </span>
        </div>

        <Divider sx={{ display: { md: 'none', xs: 'block' }, }} color="#40404D" variant="middle" />
      </Box>
      {moreOptionsData.map((item) => (
        <div key={item.id}>
          <div className="flex dropdown-menu-row align-center cursor-pointer"
            onClick={() => handleCloseMUITooltip()}
          >
            <div className="dropdown-menu-row-icon">{item.icon}</div>
            <span className="font-weight-400 menu-title ">{item.title}</span>
          </div>
        </div>
      ))}
    </div>
  </div >)

  return (
    <div>

      <ClickAwayListener onClickAway={handleCloseMUITooltip}>
        <div>
          <Tooltip
            arrow
            placement="bottom-start"
            componentsProps={tooltipComponenetsProps}
            PopperProps={{
              disablePortal: true,
            }}
            open={OPEN}
            title={MenuCard}
          >
            <div className="flex align-center">
              <Box sx={{ display: { md: 'flex', xs: 'none' } }} className="header-profile-name flex-column font-weight-600 primary-color secondary-title">
                <span>
                  Scott
                </span>
                <span>
                  Fisher
                </span>
              </Box>
              <div className="profile-picture cursor-pointer flex justify-center align-center border-radius-rounded" onClick={handleClickMUITooltip}>
                <img src={UserAvatar} className='profile-picture-img' alt="" />
              </div>
            </div>
          </Tooltip>
        </div>
      </ClickAwayListener>
    </div>
  );
};
