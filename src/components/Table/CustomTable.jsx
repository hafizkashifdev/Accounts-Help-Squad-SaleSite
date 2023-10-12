import React, { useEffect, useRef, useState } from "react";
// import Pagination from '@mui/material/Pagination';
import Stack from "@mui/material/Stack";
// Tantack table
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
// components
import TableSkeleton from "./TableSkeleton";
import NoContentFound from "./NoContentFound";
import IsFetching from "../loaders/IsFetching";

// @mui
import { alpha, styled, useTheme } from "@mui/material/styles";
import {
  Grid,
  TableCell,
  Pagination,
  TableRow,
  TableHead,
  TableContainer,
  TableBody,
  Table,
  Box,
  tableCellClasses,
  TablePagination,
  Checkbox,
} from "@mui/material";

// @mui icons
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { ReactComponent as Filter } from "../../assests/svg/setting-box.svg";
import { ExpandableRow } from "./expandable-row";



// constant
const EMPTY_ARRAY = [];

// ----------------------------------------------------------------------
// component
const CustomTable = (props) => {
  const {
    pageData,
    columns,
    data,
    isFetching = false,
    isLoading = false,
    isError = false,
    isSuccess = false,
    totalPages = 1,
    currentPage = 1,
    onPageChange,
    onSortByChange,
    isPagination = true,
    tableContainerSX = {},
    rootSX = {},
    showSerialNo = false,
    serialName = "Sr.#",
    showHeaderFilter = true,
    serialNoSortable = false
  } = props;

  const [rowSelection, setRowSelection] = React.useState({});
  const [page, setPage] = React.useState(2);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const checkboxInList =
    columns?.length !== 0 &&
    columns?.map((e) => ({
      ...e,
      checkbox: true,
    }));
  const [checkboxes, setCheckboxes] = useState(checkboxInList || []);
  const [show, setShow] = useState(false);
  const menu = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menu.current && !menu.current.contains(event.target)) {
        setShow(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleFilterHeader = (header, i) => {
    const items = [...checkboxes];
    items[i]["checkbox"] = !items[i]["checkbox"];
    setCheckboxes(items);
  };
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const theme = useTheme();
  // Handling sort using useRef
  const refSortData = (() => {
    const sortDataMap = {};
    for (const colData of checkboxes) {
      if (colData.isSortable) sortDataMap[colData?.id] = 0;
    }
    return sortDataMap;
  })();

  const sortRef = useRef(refSortData);

  const handleSortBy = (colId) => {
    sortRef.current[colId]++;

    if (sortRef.current[colId] % 2 === 1)
      onSortByChange({ id: colId, sortOrder: 1 });
    else onSortByChange({ id: colId, sortOrder: -1 });
  };

  let columnsData = checkboxes;

  if (showSerialNo)
    columnsData = [
      {
        accessorFn: (row) => row,
        id: serialName,
        cell: (info) => {
          return serialNoSortable ? <div className="flex justify-center align-center">{info?.row?.id.length === 1 ? `0${Number(info?.row?.id) + 1}` : Number(info?.row?.id) + 1}</div> : info?.row?.id.length === 1 ? `0${Number(info?.row?.id) + 1}` : Number(info?.row?.id) + 1
        },
        header: serialNoSortable ? <div className="flex justify-center align-center">{serialName}</div> : serialName,
        isSortable: serialNoSortable,
      },
      ...checkboxes,
    ];
  const table = useReactTable({
    data: data ?? EMPTY_ARRAY,
    columns: columnsData?.filter((e) => e?.checkbox !== false),
    state: {
      rowSelection,
    },
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
  });

  const isSorted = (colId) => {
    return sortRef.current[colId] % 2 === 1;
  };

  if (isLoading) return <TableSkeleton />;

  return (
    <Grid container sx={{ position: "relative", ...rootSX }}>
      <IsFetching isFetching={isFetching} />
      <Grid xs={12} item>
        {/* Table Container */}
        <div style={{ display: "flex" }}>
          <Box sx={{ overflowX: "auto", flex: "1" }}>
            <TableContainer
              className="no-scrollbar"
              sx={styles.tableContainer(tableContainerSX, theme)}
            >
              <Table stickyHeader>
                <TableHead>
                  {table.getHeaderGroups().map((headerGroup) => (
                    <StyledTableRow key={headerGroup.id}>
                      {headerGroup.headers.map((header, index) => (
                        header.column.columnDef.isSticky ?
                          <StickyTableCell
                            sx={{
                              borderRadius:
                                index === 0
                                  ? "4px 0px 0px 4px"
                                  : index === headerGroup.headers.length - 1
                                    ? "0px 4px 4px 0px"
                                    : "0px",
                            }}
                            key={header.id}

                          >
                            <Box
                              onClick={() =>
                                header.column.columnDef.isSortable &&
                                handleSortBy(header?.id)
                              }
                              sx={{ ...styles.cell, }}
                              className="flex"
                            >
                              {header.isPlaceholder
                                ? null
                                : flexRender(
                                  header.column.columnDef.header,
                                  header.getContext()
                                )}
                              <Box className="flex flex-column">
                                {header.column.columnDef.isSortable &&
                                  !isSorted(header.id) && <KeyboardArrowUpIcon fontSize="9px" />}
                                {header.column.columnDef.isSortable &&
                                  !isSorted(header.id) && <KeyboardArrowDownIcon fontSize="9px" sx={{ mt: '-6px' }} />}
                              </Box>
                            </Box>
                          </StickyTableCell>
                          :
                          <StyledTableCell
                            sx={{
                              borderRadius:
                                index === 0
                                  ? "4px 0px 0px 4px"
                                  : index === headerGroup.headers.length - 1
                                    ? "0px 4px 4px 0px"
                                    : "0px",
                            }}
                            key={header.id}

                          >
                            <Box
                              onClick={() =>
                                header.column.columnDef.isSortable &&
                                handleSortBy(header?.id)
                              }
                              sx={{ ...styles.cell, }}
                              className="flex"
                            >
                              {header.isPlaceholder
                                ? null
                                : flexRender(
                                  header.column.columnDef.header,
                                  header.getContext()
                                )}
                              <Box className="flex flex-column">
                                {header.column.columnDef.isSortable &&
                                  !isSorted(header.id) && <KeyboardArrowUpIcon fontSize="9px" />}
                                {header.column.columnDef.isSortable &&
                                  !isSorted(header.id) && <KeyboardArrowDownIcon fontSize="9px" sx={{ mt: '-6px' }} />}
                              </Box>
                            </Box>
                          </StyledTableCell>
                      ))}
                    </StyledTableRow>
                  ))}
                </TableHead>

                {isSuccess && table.getRowModel().rows.length > 0 && (
                  <TableBody>
                    {table.getRowModel().rows?.map((row) =>
                      row.original.expand ?
                        <ExpandableRow key={row?.id} data={row.getVisibleCells()} expandData={row.original.expandData} />
                        : <StyledTableRow key={row?.id}>
                          {row.getVisibleCells().map((cell) => (

                            cell.column.columnDef.isSticky ?
                              <StickyTableCell sx={row.original.sx} key={cell?.id}>
                                {flexRender(
                                  cell.column.columnDef.cell,
                                  cell.getContext()
                                )}
                              </StickyTableCell>
                              : <StyledTableCell sx={row.original.sx} key={cell?.id}>
                                {flexRender(
                                  cell.column.columnDef.cell,
                                  cell.getContext()
                                )}
                              </StyledTableCell>
                          ))}
                        </StyledTableRow>
                    )}
                  </TableBody>
                )}
              </Table>
              {(isError || table.getRowModel().rows.length === 0) && (
                <Grid container sx={styles.error}>
                  <Grid item width={200}>
                    <NoContentFound />
                  </Grid>
                </Grid>
              )}
            </TableContainer>
          </Box>
          {showHeaderFilter && (
            <Box
              ref={menu}
              sx={{
                flex: "0 0 auto",
                position: "relative",
                right: "-7px",
                top: "15px",
                zIndex: 10,
              }}
            >
              <Filter
                onClick={() => setShow(!show)}
                style={{ cursor: "pointer" }}
              />
              {show && (
                <Box
                  sx={{
                    display: "block",
                    marginTop: "-19px",
                    marginLeft: "-150px",
                    position: "absolute",
                    zIndex: 11,
                  }}
                >
                  <ul
                    style={{
                      padding: "0",
                      listStyle: "none",
                      background: "white",
                      borderRadius: "8px",
                      boxShadow: "-4px 4px 4px rgba(222, 222, 222, 0.25)",
                      position: "relative",
                      zIndex: 12,
                    }}
                  >
                    {checkboxes?.map((e, i) => (
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          background: "white",
                        }}
                        key={e?.id}
                      >
                        <Checkbox
                          checked={e?.checkbox ? true : false}
                          onChange={(event) => handleFilterHeader(e, i)}
                          value={e?.checkbox}
                          sx={{
                            color: "black",
                            "&.Mui-checked": {
                              color: "black",
                            },
                          }}
                        />
                        <span
                          style={{
                            fontWeight: "400",
                            fontSize: "14px",
                            lineHeight: "20px",
                            color: " #6B6B80",
                          }}
                        >
                          {typeof e?.header === "string"
                            ? e?.header || e?.id
                            : e?.id}
                        </span>
                      </Box>
                    ))}
                  </ul>
                </Box>
              )}
            </Box>
          )}
        </div>
        {/* Pagination */}
        {pageData !== "clients-view" && (
          <Grid container>
            <Grid xs={12} item>
              {isSuccess && Boolean(table?.getRowModel()?.rows?.length) && (
                <Box sx={styles.currentPageBox}>
                  {isPagination && (
                    <Box sx={{ marginRight: "auto" }}>
                      <div
                        className={`pagination-style ${props.paginationClass}`}
                      >
                        <Stack spacing={2}>
                          <Pagination
                            count={10}
                            shape="rounded"
                            defaultPage={1}
                            sx={{
                              "& .MuiPaginationItem-rounded.Mui-selected": {
                                backgroundColor: "#40404D",
                                color: "#ffffff",
                                border: "1px solid #777777",
                                borderRadius: "7px",
                                fontSize: "16px",
                                fontFamily: "Exo 2",
                                fontStyle: "normal",
                                fontWeight: "400",
                              }, // Change the font color of the selected number
                              "& .MuiPaginationItem-root": {
                                fontSize: "16px",
                                fontFamily: "Exo 2",
                                fontStyle: "normal",
                                fontWeight: "400",
                              }, // Change the font size of the numbers
                              "& .MuiPaginationItem-icon": {
                                color: "#777777",
                                borderRadius: "10px",
                              }, // Change the color of the next and previous icons
                              "& .MuiPaginationItem-previousNext": {
                                border: "1px solid #777777",
                                borderRadius: "10px",
                              }, // Example: Change the border radius of the next and previous buttons
                            }}
                          />
                        </Stack>
                      </div>
                    </Box>
                  )}
                  {isPagination && (
                    <TablePagination
                      className={`pagination-style ${props.paginationClass}`}
                      component="div"
                      count={20}
                      page={page}
                      onPageChange={handleChangePage}
                      rowsPerPage={rowsPerPage}
                      onRowsPerPageChange={handleChangeRowsPerPage}
                      labelRowsPerPage="Show: "
                      labelDisplayedRows={({ from, to, count }) =>
                        `Showing ${from}-${to} out of ${count}`
                      }
                      sx={{
                        "& .MuiTablePagination-actions": { display: "none" },
                      }}
                    />
                  )}
                </Box>
              )}
            </Grid>
          </Grid>
        )}
      </Grid>
    </Grid>
  );
};

export default CustomTable;

// ----------------------------------------------------------------------
// STYLED COMPONENTS
export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#F0F0F2 !important",
    color: "#6B6B80",
    fontFamily: `'Exo 2', "Roboto", "sans-serif"`,
    fontWeight: 600,
    backgroundImage: "unset",
    textTransform: "capitalize",
    fontSize: 16,
    whiteSpace: "nowrap",
    borderBottom: "none",
    cursor: "pointer",
    zIndex: theme.zIndex.appBar,
  },
  [`&.${tableCellClasses.root}`]: {
    boxShadow: "unset !important",
  },

  [`&.${tableCellClasses.body}`]: {
    fontSize: "16px",
    color: "#40404D",
    fontFamily: `'Exo 2', "Roboto", "sans-serif"`,
    fontWeight: 400,
    borderBottom: "1px solid #F0F0F2",
  },
}));

export const StickyTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#F0F0F2 !important",
    color: "#6B6B80",
    fontFamily: `'Exo 2', "Roboto", "sans-serif"`,
    fontWeight: 600,
    backgroundImage: "unset",
    textTransform: "capitalize",
    fontSize: 16,
    whiteSpace: "nowrap",
    borderBottom: "none",
    cursor: "pointer",
    left: 0,
    position: "sticky",
    zIndex: 4
  },
  [`&.${tableCellClasses.root}`]: {
    boxShadow: "unset !important",
  },

  [`&.${tableCellClasses.body}`]: {
    fontSize: "16px",
    color: "#40404D",
    backgroundColor: "#fff",
    fontFamily: `'Exo 2', "Roboto", "sans-serif"`,
    fontWeight: 400,
    borderBottom: "1px solid #F0F0F2",
    minWidth: "50px",
    left: 0,
    position: "sticky",
    zIndex: 2
  },
}));

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
  " &:last-child th": {
    backgroundColor:
      theme.palette.mode === "light" ? alpha("#BEBEBE", 0.12) : "#454F5B",
    backdropFilter: " blur(20px)",
  },
}));

// ----------------------------------------------------------------------
// styles

export const styles = {
  tableContainer: (tableContainerSX, theme) => ({
    "&::-webkit-scrollbar": {
      width: 5,
      height: 4,
    },

    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#BEBEBE",
      borderRadius: 2,
    },
    maxHeight: 560,
    mt: theme.palette.mode === "dark" ? 0.5 : 0,
    backgroundColor: theme.palette.mode === "light" ? "#fff" : "#212B36",
    ...tableContainerSX,
  }),
  currentPageBox: {
    display: "flex",
    my: "15px",
    px: "25px",
    alignItems: "center",
  },
  currentPage: (theme) => ({
    color: "#637381",
    fontSize: "12px",
    fontFamily: `'Exo 2', "Roboto", "sans-serif"`,
  }),
  error: {
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
  },
  pagination: (theme) => ({
    ".Mui-selected": {
      backgroundColor: `${"#6B6B80"} !important`,
      color: "#FFFFFF",
    },
  }),
};
