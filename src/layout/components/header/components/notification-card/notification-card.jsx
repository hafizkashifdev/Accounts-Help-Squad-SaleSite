import "./notification-card.scss"
import { Button, ClickAwayListener, Tooltip, } from "@mui/material";

// Data
import { notificationData } from "./notification-card-data";



// Custom Hook
import { useMUITooltip } from '../../../../../hooks/use-mui-tooltip';


// MUI Styles
import { tooltipNotificationCardComponenetsProps } from "./notification-card-mui-style";

// Component Function Starts Here
const NotificationCard = () => {
  const { OPEN, handleClickMUITooltip, handleCloseMUITooltip } = useMUITooltip();


  const NotoficationData = (<div className="notification-card-parent font-family-Exo">
    {
      Object.keys(notificationData).map((item) => {
        return <div className='notifications-sub-container' key={item}>
          <div className="day-stream flex">
            <div className="day">
              {item}
            </div>
            <div className="noti-length">
              ({notificationData[item].length})
            </div>
          </div>
          {
            notificationData[item].map((SingleNotification) => (
              <div key={SingleNotification.id} >
                <div >
                  <div className="notification-row cursor-pointer">
                    <div className="profile-pic-and-notification">
                      <div className="profile-pic flex justify-center align-center">{SingleNotification.avatar}</div>
                      <div className="notification-and-title">
                        <span className="notification-text">{SingleNotification.notification}</span>
                        <span className="notification-date">{SingleNotification.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      })}
  </div >)

  return (
    <>
      <ClickAwayListener onClickAway={handleCloseMUITooltip}>
        <div>
          <Tooltip
            arrow
            placement="bottom-end"
            componentsProps={tooltipNotificationCardComponenetsProps}
            PopperProps={{
              disablePortal: true,
            }}
            // sx={{ transform: translate(227, 0), }}
            // onClose={handleClose}
            open={OPEN}
            title={NotoficationData}
          >
            <Button sx={{ minWidth: 'auto' }} onClick={handleClickMUITooltip}><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M12 6.43945V9.76945" stroke="#40404D" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" />
              <path d="M12.0199 2C8.3399 2 5.3599 4.98 5.3599 8.66V10.76C5.3599 11.44 5.0799 12.46 4.7299 13.04L3.4599 15.16C2.6799 16.47 3.2199 17.93 4.6599 18.41C9.4399 20 14.6099 20 19.3899 18.41C20.7399 17.96 21.3199 16.38 20.5899 15.16L19.3199 13.04C18.9699 12.46 18.6899 11.43 18.6899 10.76V8.66C18.6799 5 15.6799 2 12.0199 2Z" stroke="#40404D" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" />
              <path d="M15.3299 18.8203C15.3299 20.6503 13.8299 22.1503 11.9999 22.1503C11.0899 22.1503 10.2499 21.7703 9.64992 21.1703C9.04992 20.5703 8.66992 19.7303 8.66992 18.8203" stroke="#40404D" strokeWidth="1.5" strokeMiterlimit="10" />
            </svg></Button>
          </Tooltip>
        </div>
      </ClickAwayListener>
    </>
  );
};

export default NotificationCard;
