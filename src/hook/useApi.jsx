import { useState } from "react";
import API_CHATGPT from '../services/api.js'

const useApi = (urlObject) => {
    const [response, setResponse] = useState("");
    const [isloading, setisLoading] = useState(false);

    const call = async (payload, type = '') => {
        try {
            const res = await API_CHATGPT(urlObject, payload, type);
            setResponse(res.data);
        } catch (err) {
            console.log("error While Hitting the Endpoint from Frontend");
        } finally {
            setisLoading(false);
        }
    }
    return { call, response, isloading };
}
export default useApi;
