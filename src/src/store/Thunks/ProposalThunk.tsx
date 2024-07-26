import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../utils/axios';

interface ProposalCreateDto {
    price:number;
    projectId:string;
    dueDate:Date
}

export const createProposalThunk = createAsyncThunk(
    'projects/createProposal',
    async (proposalData: ProposalCreateDto, { rejectWithValue }) => {
        try {
            const response = await axios.post('/api/v1/proposal', proposalData);
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.response.data);
        }
    }
);



