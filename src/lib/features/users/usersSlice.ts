import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { User } from "@/types/types";

export interface CounterSliceState {
    users: Array<User>;
    selectedUser: User;
}

const initialState: CounterSliceState = {
    users: [],
    selectedUser: {
        "id": "",
        "name": "",
        "surname": "",
        "email": "",
        "age": 0,
    }
};

export const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        addUsers(state, action: PayloadAction<User[]>) {
            state.users = [...state.users, ...action.payload];
        },

        setSelectedUser(state, action: PayloadAction<User>) {
            state.selectedUser = action.payload;
        },
    },
});

export const {addUsers, setSelectedUser} = usersSlice.actions;

export default usersSlice.reducer;
