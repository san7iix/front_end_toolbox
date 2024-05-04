import { useCallback, useEffect, useMemo, useState } from "react";
import {
  getAllFilesData,
  getFileByFilter,
} from "../app/Files/infraestructure/FilesService";

const UseGetFilesData = () => {
  const [files, setFiles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filter, setFilter] = useState("all");

  const getDataFileDataMemo = useMemo(() => getAllFilesData, []);
  const getFilteredData = useMemo(() => getFileByFilter, []);

  const getData = useCallback(async () => {
    try {
      setIsLoading(true);
      setFiles([]);
      const data =
        filter === "all"
          ? await getDataFileDataMemo()
          : await getFilteredData(filter);

      if ("error" in data) {
        throw new Error("Error fetching data");
      }

      setFiles(data);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  }, [filter, getDataFileDataMemo, getFilteredData]);

  useEffect(() => {
    getData();
  }, [getData]);

  return { files, getData, isLoading, filter, setFilter };
};

export default UseGetFilesData;
