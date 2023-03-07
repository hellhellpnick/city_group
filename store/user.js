export const state = () => ({
    user: null,
    authenticated: true,
});

export const mutations = {
    setClearUser(state) {
        state.user = null;
        state.authenticated = false;
    },
};

export const actions = {
    setClearUser({ commit }) {
        commit("setClearUser");
    },
};

export const getters = {
    user: (state) => state.user,
    authenticated: (state) => state.authenticated,
};
