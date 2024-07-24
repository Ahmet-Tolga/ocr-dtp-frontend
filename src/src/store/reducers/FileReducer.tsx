import { createReducer } from '@reduxjs/toolkit';
import { LOAD_FILES } from '../Actions/FileActions';

interface FileState {
    files: File[];
}

const initialState: FileState = {
    files: [],
};

const fileReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(LOAD_FILES, (state, action) => {
            state.files = action.payload;
        });
});

export default fileReducer;
