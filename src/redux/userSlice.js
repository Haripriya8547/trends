import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "userSlice",

    initialState: {
        users: JSON.parse(localStorage.getItem("users")) || [],
        user: JSON.parse(localStorage.getItem("user")) || null,
        isAuthenticated:
            JSON.parse(localStorage.getItem("isAuthenticated")) || false
    },

    reducers: {

        // REGISTER USER
        userRegister: (state, action) => {
            state.users.push(action.payload);

            localStorage.setItem(
                "users",
                JSON.stringify(state.users)
            );
        },

        
        userLogin: (state, action) => {
            state.user = action.payload;
            state.isAuthenticated = true;

            localStorage.setItem(
                "user",
                JSON.stringify(state.user)
            );

            localStorage.setItem(
                "isAuthenticated",
                JSON.stringify(state.isAuthenticated)
            );
        },

      
        userLogout: (state) => {
            state.user = null;
            state.isAuthenticated = false;

            localStorage.removeItem("user");
            localStorage.removeItem("isAuthenticated");
        },

        
        deleteUser: (state, action) => {
            state.users = state.users.filter(
                (user) =>
                    String(user.id) !== String(action.payload)
            );

            localStorage.setItem(
                "users",
                JSON.stringify(state.users)
            );
        },

       
       userStatusChange: (state, action) => {

    const userIndex = state.users.findIndex(
        (user) =>
            String(user.id) ===
            String(action.payload.id)
    );

    if (userIndex !== -1) {

        state.users[userIndex].status =
            !state.users[userIndex].status;

        localStorage.setItem(
            "users",
            JSON.stringify(state.users)
        );
    }
},

       
        userRoleChange: (state, action) => {
            const userIndex = state.users.findIndex(
                (user) =>
                    String(user.id) === String(action.payload.id)
            );

            if (userIndex !== -1) {
                state.users[userIndex].role =
                    action.payload.role;

                localStorage.setItem(
                    "users",
                    JSON.stringify(state.users)
                );
            }
        }
    }
});

// EXPORT ACTIONS
export const {
    userRegister,
    userLogin,
    userLogout,
    userStatusChange,
    userRoleChange,
    deleteUser
} = userSlice.actions;

export default userSlice.reducer;