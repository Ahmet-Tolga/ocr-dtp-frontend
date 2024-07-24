import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface ProjectCreateDto {
    project: {
        fileIds: string[],
        translation?: {
            sourceLang: string;
            targetLang: string;
        };
    },
    email:string;
}

interface FileCreateDto {
    originalName: string;
    projectId: string;
}

export const createProjectThunk = createAsyncThunk(
    'projects/createProject',
    async (projectData: ProjectCreateDto, { rejectWithValue }) => {
        try {
            const response = await axios.post('http://localhost:8002/api/v1/project/guest', projectData);
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const uploadFileThunk = createAsyncThunk(
    'files/uploadFile',
    async (fileData: FormData, { rejectWithValue }) => {
        try {
            const response = await axios.post('http://localhost:8002/api/v1/files', fileData);
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const associateFileWithProjectThunk = createAsyncThunk(
    'files/associateFileWithProject',
    async ({ originalName, projectId }: FileCreateDto, { rejectWithValue }) => {
        try {
            const response = await axios.post('http://localhost:8002/api/v1/files', { originalName, projectId });
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.response.data);
        }
    }
);
