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


        userStatuschange: (state, action) => {
            const userIndex = state.users.findIndex((u) => u.id === action.payload);
            if (userIndex !== -1) {
                const newStatus = !state.users[userIndex].status;
                state.users[userIndex].status = newStatus;
                localStorage.setItem("users", JSON.stringify(state.users));

                if (state.user?.id === action.payload) {
                    if (newStatus) {
                        state.user.status = true;
                        localStorage.setItem("user", JSON.stringify(state.user));
                        localStorage.setItem("isAuthenticated", "true");
                    } else {
                        state.user = null;
                        state.isAuthenticated = false;
                        localStorage.removeItem("user");
                        localStorage.removeItem("isAuthenticated");
                    }
                }
            }
        },



        userRolechange: (state, action) => {
            const { id, role } = action.payload;
            const userIndex = state.users.findIndex((u) => u.id === id);

            if (userIndex !== -1) {
                state.users[userIndex].role = role;
                localStorage.setItem("users", JSON.stringify(state.users));

                if (state.user?.id === id) {
                    state.user.role = role;
                    localStorage.setItem("user", JSON.stringify(state.user));
                }
            }
        },
        editUser: (state, action) => {
            const userIndex = state.users.findIndex((eu) => eu.id === action.payload.id,
            );



            if (userIndex !== -1) {
                state.users[userIndex] = { ...state.users[userIndex], ...action.payload };
                localStorage.setItem("users", JSON.stringify(state.users));

            }
            if (state.user?.id === action.payload.id) {
                state.user = { ...state.user, ...action.payload };
                localStorage.setItem("user", JSON.stringify(state.user));
            }

        },
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