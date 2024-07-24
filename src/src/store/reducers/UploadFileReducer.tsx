import { createSlice } from '@reduxjs/toolkit';
import { createFileThunk } from '../Thunks/UploadFileThunk'; 

interface FileMetadata {
  name: string;
  size: number;
  type: string;
  lastModified: number;
}

interface FileState {
  files: FileMetadata[] | null;
  uploadStatus: 'idle' | 'loading' | 'succeeded' | 'failed';
}

const initialState: FileState = {
  files: null,
  uploadStatus: 'idle',
};

const uploadFileSlice = createSlice({
  name: 'fileUpload',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createFileThunk.pending, (state) => {
        state.uploadStatus = 'loading';
      })
      .addCase(createFileThunk.fulfilled, (state, action) => {
        state.uploadStatus = 'succeeded';
        if (!state.files) {
          state.files = [];
        }
        state.files.push(action.payload);
      })
      .addCase(createFileThunk.rejected, (state) => {
        state.uploadStatus = 'failed';
      });
  },
});

export default uploadFileSlice.reducer;
