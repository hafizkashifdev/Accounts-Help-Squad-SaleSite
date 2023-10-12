import React from 'react'
import './animated-btn.scss';
export const AnimatedBtn = ({openInnerSidbar,setOpenInnerSidbar}) => {
    return (
        <>
            <div className='animated-btn-wrapper'>
                <div className={`icon nav-icon-1 ${openInnerSidbar ? 'sidebar-btn-open' : ''}`} onClick={()=> setOpenInnerSidbar(!openInnerSidbar)}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </>
    )
}
