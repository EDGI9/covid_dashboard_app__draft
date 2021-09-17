import Entities from '../../entities';
import Services from '../../services';

const _store_module = {
    namespaced: true,
    state: {
        statusses: []
    },
    getters:{
        STATUSSES_DATA: state => { return state.statusses; }
    },
    actions:{
        GET_STATUSSES_DATA: ({commit}) => {

            const tempStatusses = ['confirmed', 'recovered', 'deaths'];

            commit('UPDATE_STATUSSES_DATA', tempStatusses);
        }
    },
    mutations:{
        UPDATE_STATUSSES_DATA: (state, mutationPayload) => {

            const entities = {
                statusEntity: Entities.statusEntity
            };

            state.statusses = Services.caseStatussesService.processStatussesData(mutationPayload, entities);
        }
    }
};

export default _store_module;