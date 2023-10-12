import { useState } from "react";

export function useTableParams(defaultParams = {}) {
  const [params, setParams] = useState({
    page: 1,
    offset: 0,
    ...defaultParams,
  });

  const headerChangeHandler = (data) => {
    setParams((prev) => ({ ...prev, ...data }));
  };

  const pageChangeHandler = (pageNo) => {
    setParams((prev) => ({
      ...prev,
      page: pageNo,
      offset: (pageNo - 1) * 10,
    }));
  };

  const sortChangeHandler = ({ id, sortOrder }) => {
    setParams((prev) => {
      const updatedParams = {
        ...prev,
        sortData: {
          ...prev.sortData,
          [id]: sortOrder,
        },
      };

      let sortArr = [];
      const order = { "1": "asc", "-1": "desc" };

      for (const sortItem in updatedParams.sortData) {
        const orderNum = updatedParams.sortData[sortItem];
        const orderKey = order[orderNum];
        // sortArr.push(`${sortItem}:${orderKey}`);
      }

      updatedParams.sort = sortArr.toString();

      return updatedParams;
    });
  };

  const { sortData, ...allParams } = params;

  return {
    params: allParams,
    headerChangeHandler,
    pageChangeHandler,
    sortChangeHandler,
  };
}
