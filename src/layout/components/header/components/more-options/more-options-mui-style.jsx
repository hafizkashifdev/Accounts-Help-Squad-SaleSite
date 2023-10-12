
export const tooltipComponenetsProps = {
    tooltip: { sx: { maxWidth: '192px', padding: '0 !important',background:'#fff',borderRadius:'10px' } },
    arrow: {
        sx: {
            fontSize: 18, width: 20, color: '#FFFFFF',transform: 'translate(155px, 0px) !important',
            "&::before": {
                boxSizing: "border-box",
                boxShadow: 1
            }
        }
    }
}
