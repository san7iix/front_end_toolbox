import { useCallback, useEffect, useMemo, useState } from "react";
import { getFilesList } from "../app/Files/infraestructure/FilesService";

const UseFilesList = () => {
  const [filesList, setFilesList] = useState([]);

  const getFilesListMemo = useMemo(() => getFilesList, []);

  const getFiles = useCallback(async () => {
    try {
      const data = await getFilesListMemo();
      setFilesList(data?.files);
    } catch (error) {
      console.error("Error:", error);
    }
  }, [getFilesListMemo]);

  useEffect(() => {
    getFiles();
  }, [getFiles]);

  return { filesList, getFiles };
};

export default UseFilesList;
