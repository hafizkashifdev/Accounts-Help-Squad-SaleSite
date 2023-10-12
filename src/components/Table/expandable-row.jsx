import React from 'react'
import { StickyTableCell, StyledTableCell, StyledTableRow } from './CustomTable'
import { Box, IconButton } from '@mui/material'
import { ReactComponent as DownArrow } from "../../assests/svg/dashboard/arrow-down.svg";
import { flexRender } from '@tanstack/react-table';
export const ExpandableRow = ({ data, expandData }) => {
    const [isExpanded, setIsExpanded] = React.useState(false);
    return (
        <>
            <StyledTableRow >
                <StyledTableCell padding="checkbox">
                    <IconButton onClick={() => setIsExpanded(!isExpanded)}>
                        <DownArrow style={{ rotate: isExpanded ? '180deg' : '0deg' }} />
                    </IconButton>
                </StyledTableCell>
                {data.map((cell, i) => i !== 0 && (
                    cell.column.columnDef.isSticky ?
                        <StickyTableCell key={cell?.id}>
                            {flexRender(
                                cell.column.columnDef.cell,
                                cell.getContext()
                            )}
                        </StickyTableCell> :
                        <StyledTableCell key={cell?.id}>
                            {flexRender(
                                cell.column.columnDef.cell,
                                cell.getContext()
                            )}
                        </StyledTableCell>
                ))}
            </StyledTableRow>
            {isExpanded && (
                expandData.map((item, i) =>
                    <StyledTableRow key={i}>
                        <StyledTableCell padding="checkbox" />
                        {
                            Object.values(item).map((cell, index) => <StyledTableCell key={index} sx={{py:index===0 && 0}}>{ <Box sx={{py:'16px',pl: index===0 ? '25px':'',borderLeft: index===0 ? '2px dashed #F0F0F2':''}}>{cell}</Box>}</StyledTableCell>)
                        }
                    </StyledTableRow>
                )
            )}
        </>
    )
}
