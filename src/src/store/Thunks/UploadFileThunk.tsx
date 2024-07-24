import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const createFileThunk = createAsyncThunk(
  'fileUpload/uploadFile',
  async (file: File) => {
    const formData = new FormData();
    formData.append('file', file);

    const response = await axios.post('http://localhost:8002/api/v1/files', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return response.data;
  }
);
