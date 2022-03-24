import Vue from 'vue';
import Vuex from 'vuex';
import movies from './movies/movies.js'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        movies
    }
})