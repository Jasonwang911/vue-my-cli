import * as types from '@/store/types';

const state = {
    loginWarning: {
        phone: '',
        smscode: '',
        password: ''
    },
}

const getters = {
    loginWarning: state => state.loginWarning,
}

const actions = {
    // WARMING({commit}, res) {
    //     commit(types.WARMING, res);
    // }
}

const mutations = {
    [types.LOGIN_WARMING](state, res) {
        for(let name in res) {
            state.loginWarning[name] = res[name];
        }
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
