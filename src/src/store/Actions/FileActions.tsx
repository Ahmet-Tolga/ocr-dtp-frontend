import { createAction } from "@reduxjs/toolkit";
import axios from "axios";

export const LOAD_FILES = createAction<File[]>("LOAD_FILES");

export const createFilesAction =async (data: any)=>{
    try{
        const response = await axios.post("/api/v1/files",data);
        return response.data;
    }
    catch(error){
        throw error;
    }
}