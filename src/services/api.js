import axios from 'axios';
const URL="http://localhost:3080";
export default API_CHATGPT=async(urlObject,payload={},type)=>{
    return await axios({
        method:urlObject.method,
        url:`${URL}/${urlObject.endpoint}/${type}`,
        data:payload
    })
}
