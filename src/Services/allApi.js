import { BASEURL } from "./baseUrl";
import { commonAPI } from "./commonApi";

export const addtolocalhost = async(reqBody)=>{
    return await commonAPI("POST",`${BASEURL}`,{reqBody},"")
 }