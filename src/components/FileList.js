import React from "react";
import { Col, Container, FormSelect, Row } from "react-bootstrap";
import UseGetFilesData from "../hooks/UseGetFilesData";
import CustomTable from "./CustomTable";
import { useMemo } from "react";
import UseFilesList from "../hooks/UseGetFilesList";

const FileList = () => {
  const { files, isLoading, setFilter } = UseGetFilesData();
  const { filesList } = UseFilesList();

  const columns = useMemo(
    () => [
      {
        Header: "File name",
        accessor: "file",
      },
      {
        Header: "Text",
        accessor: "text",
      },
      {
        Header: "Number",
        accessor: "number",
      },
      {
        Header: "Hex",
        accessor: "hex",
      },
    ],
    []
  );

  return (
    <Container fluid>
      <Row className="bg-danger border">
        <Col>
          <h3 className="text-white">React test app</h3>
        </Col>
      </Row>

      <Row>
        <Col>
          <h4 className="mt-3">Files filter</h4>
          <FormSelect
            onChange={(e) => {
              setFilter(e.target.value);
            }}
          >
            <option value="all">All</option>
            {filesList?.map((file) => (
              <option key={file} value={file}>
                {file}
              </option>
            ))}
          </FormSelect>
        </Col>
      </Row>

      <Row>
        <Col>
          <CustomTable columns={columns} data={files} loading={isLoading} />
        </Col>
      </Row>
    </Container>
  );
};

export default FileList;
