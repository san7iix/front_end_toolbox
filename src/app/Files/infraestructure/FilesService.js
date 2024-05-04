import { API_ROUTES } from "../../../const/Consts";
import { GET } from "../../../utils/HTTPFunctions";

const getAllFilesData = async () => {
    try {
        return await GET(API_ROUTES.GET_FILES_DATA);
    } catch (error) {
        console.error('Error:', error);
    }
}

const getFilesList = async () => {
    try {
        return await GET(API_ROUTES.GET_FILES_LIST);
    } catch (error) {
        console.error('Error:', error);
    }
}

const getFileByFilter = async (filter) => {
    try {
        return await GET(`${API_ROUTES.GET_FILES_DATA}?fileName=${filter}`);
    } catch (error) {
        console.error('Error:', error);
        return []
    }

}

export { getAllFilesData, getFilesList, getFileByFilter };