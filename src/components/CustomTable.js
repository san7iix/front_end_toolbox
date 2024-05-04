import React from "react";
import { Table } from "react-bootstrap";

const CustomTable = ({ columns = [], data, loading }) => {
  if (loading) {
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            {columns?.map((column) => (
              <th key={column.Header}>{column.Header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan={columns.length}>Loading...</td>
          </tr>
        </tbody>
      </Table>
    );
  }

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          {columns?.map((column) => (
            <th key={column.Header}>{column.Header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data?.map((file) => (
          <>
            {file?.lines?.map((line) => (
              <tr key={line.hex}>
                <td>{file.file}</td>
                <td>{line.text}</td>
                <td>{line.number}</td>
                <td>{line.hex}</td>
              </tr>
            ))}
          </>
        ))}
      </tbody>
    </Table>
  );
};

export default CustomTable;
