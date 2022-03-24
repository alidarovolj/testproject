import axios from 'axios'

export default {
    actions: {
        async fetchUsers(result) {
            const res = await axios.get('http://localhost:3001/users');
            const newUser = res.data;
            result.commit('addUser', newUser);
        }
    },
    mutations: {
        addUser(state, newUser) {
            state.users = newUser
        }
    },
    state: {
        users: []
    },
    getters: {
        sendUserState(state) {
            return state.users
        }
    }
}