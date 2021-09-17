import Entities from '../../entities';
import Services from '../../services';

const _store_module = {
    namespaced: true,
    state: {
        graphData: Entities.graphEntity()
    },
    getters:{
        GRAPH_DATA: state => { return state.graphData; }
    },
    actions:{
        SET_GRAPH_DATA: ({commit}, actionPayload) => {
            commit('UPDATE_GRAPH_DATA', actionPayload);
        }
    },
    mutations:{
        UPDATE_GRAPH_DATA: (state, mutationPayload) => {

            const entities = {
                graphEntity: Entities.graphEntity
            };

            state.graphData = Services.graphService.processGraphData(mutationPayload, entities);
        }
    }
};

export default _store_module;