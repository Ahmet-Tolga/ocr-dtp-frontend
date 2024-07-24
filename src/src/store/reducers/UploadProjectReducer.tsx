import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createProjectThunk, uploadFileThunk, associateFileWithProjectThunk } from '../Thunks/UploadProjectThunk';

interface ProjectState {
    email: string;
    projects: any[];
    files: any[];
    loading: boolean;
    error: string | null;
}

const initialState: ProjectState = {
    email:"",
    projects: [],
    files: [],
    loading: false,
    error: null,
};

const projectSlice = createSlice({
    name: 'projects',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(createProjectThunk.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(createProjectThunk.fulfilled, (state, action: PayloadAction<any>) => {
                state.projects.push(action.payload);
                state.loading = false;
            })
            .addCase(createProjectThunk.rejected, (state, action: PayloadAction<any>) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(uploadFileThunk.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(uploadFileThunk.fulfilled, (state, action: PayloadAction<any>) => {
                state.files.push(action.payload);
                state.loading = false;
            })
            .addCase(uploadFileThunk.rejected, (state, action: PayloadAction<any>) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(associateFileWithProjectThunk.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(associateFileWithProjectThunk.fulfilled, (state, action: PayloadAction<any>) => {
                const file = state.files.find(f => f.id === action.payload.id);
                if (file) {
                    file.projectId = action.payload.projectId;
                }
                state.loading = false;
            })
            .addCase(associateFileWithProjectThunk.rejected, (state, action: PayloadAction<any>) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default projectSlice.reducer;
