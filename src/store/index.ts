import {createStore, Store} from 'vuex'

export interface stateType {
    click: number;
    hi: string;
}

export default createStore<stateType>({
    state: {
        click: 0,
        hi: 'hi'
    },
    mutations: {
        click(state, v) {
            state.click = v;
        }
    },

});