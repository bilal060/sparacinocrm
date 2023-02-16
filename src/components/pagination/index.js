import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function CustomPagination(props) {
  return (
    <>
      <div className="pagination flex justify-center items-center">
        <Stack spacing={2}>
          <Pagination count={props.count} />
        </Stack>
      </div>
    </>
  );
}
