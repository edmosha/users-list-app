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
        "id": 1,
        "name": "Leanne",
        "surname": "Bret",
        "email": "Sincere@april.biz",
        "age": 18
    }
};

export const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        addUsers(state, action: PayloadAction<User[]>) {
             state.users = action.payload;
        },

        setSelectedUser(state, action: PayloadAction<User>) {
            state.selectedUser = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function.
export const { addUsers, setSelectedUser } = usersSlice.actions;

export default usersSlice.reducer;
