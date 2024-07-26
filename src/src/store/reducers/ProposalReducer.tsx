import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createProposalThunk } from '../Thunks/ProposalThunk'; 

interface ProposalState {
    proposals: any[];
    loading: boolean;
    error: string | null;
}

const initialState: ProposalState = {
    proposals: [],
    loading: false,
    error: null,
};

const proposalSlice = createSlice({
    name: 'proposals',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(createProposalThunk.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(createProposalThunk.fulfilled, (state, action: PayloadAction<any>) => {
                state.proposals.push(action.payload);
                state.loading = false;
            })
            .addCase(createProposalThunk.rejected, (state, action: PayloadAction<any>) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default proposalSlice.reducer;
