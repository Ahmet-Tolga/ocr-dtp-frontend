import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../utils/axios';

interface ProjectGuestCreateDto {
    project: {
        fileIds: string[],
        translation?: {
            sourceLang: string;
            targetLang: string;
        };
        ocr:boolean;
        dtp:boolean;
    },
    email: string;
}

interface ProjectLoginDto {
    fileIds: string[],
    translation?: {
        sourceLang: string;
        targetLang: string;
    };
    ocr:boolean;
    dtp:boolean;
}

interface FileCreateDto {
    originalName: string;
    projectId: string;
}

export const createProjectThunk = createAsyncThunk(
    'projects/createProject',
    async (projectData: ProjectGuestCreateDto, { rejectWithValue }) => {
        try {
            const response = await axios.post('/api/v1/project/guest', projectData);
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const createLoginedProjectThunk = createAsyncThunk(
    'projects/createLoginedProject',
    async (projectData: ProjectLoginDto, { rejectWithValue }) => {
        try {
            const response = await axios.post('/api/v1/project', projectData);
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
            const response = await axios.post('/api/v1/files', fileData);
            return response.data.data;
        } catch (error: any) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const associateFileWithProjectThunk = createAsyncThunk(
    'files/associateFileWithProject',
    async ({ originalName, projectId }: FileCreateDto, { rejectWithValue }) => {
        try {
            const response = await axios.post('/api/v1/files', { originalName, projectId });
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.response.data);
        }
    }
);


export const GetAllProjectsThunk = createAsyncThunk(
    'projects/allOffers',
    async () => {
        try {
            const response = await axios.get(`/api/v1/project`, { params: { "relations": "user", "status": "pending" } });
            return response.data;
        } catch (error: any) {
            return error.response.data
        }
    }
);

export const GetAllCurrentProjectsThunk = createAsyncThunk(
    'projects/GetAllCurrentProjects',
    async () => {
        try {
            const response = await axios.get(`/api/v1/project`, { params: { "relations": "user", "filter.status": "accepted" } });
            return response.data;
        } catch (error: any) {
            return error.response.data
        }
    }
);

export const GetProjectsByUserIDThunk = createAsyncThunk(
    'projects/getProjectByUserId',
    async (userId: string, { rejectWithValue }) => {
        try {
            const response = await axios.get(`/api/v1/project/`, { params: { "user.id": userId, "relations": "user" } });
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const GetCurentProjectsByUserIdThunk = createAsyncThunk(
    'projects/GetCurentProjectsByUserId',
    async (userId: string, { rejectWithValue }) => {
        try {
            const response = await axios.get(`/api/v1/project/`, { params: { "user.id": userId, "relations": "user" ,"filter.status":"accepted"} });
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.response.data);
        }
    }
);

export const GetProposalsByUserIDThunk = createAsyncThunk(
    'projects/GetProposalsByUserID',
    async (userId: string, { rejectWithValue }) => {
        try {
            const response = await axios.get(`/api/v1/project/`, { params: { "user.id": userId, "relations": "user" } });
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.response.data);
        }
    }
);
