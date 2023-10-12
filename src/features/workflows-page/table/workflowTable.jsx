import React from "react";
import CustomTable from "../../../components/Table/CustomTable";

const WorkflowTable = ({ INVOICE_DATA, columns, paginationClass }) => {
  return (
    <>
      <CustomTable
        data={INVOICE_DATA}
        columns={columns}
        // showSerialNo
        // onPageChange={pageChangeHandler}
        // onSortByChange={sortChangeHandler}
        paginationClass={paginationClass}
        isSuccess={true}
        isPagination={true}
      />
    </>
  );
};

export default WorkflowTable;
