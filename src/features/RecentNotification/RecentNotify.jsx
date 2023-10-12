import React from "react";
import {notify_data} from '../../mock-data/RecentNotifyData';
import './recent_notify.scss';

export default function RecentNotify() {
  return (
      <div className="card-body" style={{overflow: 'auto', height:'300px'}}>
            <br />
            {
                notify_data?.map((item, i) => (
                    <React.Fragment key={item?.id}>
                        <div className="card-body-line">
                        <span className="card-left-text">{item?.title}</span>
                        <span className="card-right-text">{item?.time}</span>
                        </div>
                        <hr className="separator"/>
                    </React.Fragment>
                ))
            }
        </div>
  );
}
