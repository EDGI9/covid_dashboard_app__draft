import Entities from '../../entities';
import Services from '../../services';
import Api from '../../api';

const _store_module = {
    namespaced: true,
    state: {
        totalSummary: []
    },
    getters:{
        TOTAL_SUMMARY: state => { return state.totalSummary; }
    },
    actions:{
        GET_TOTAL_SUMMARY: ({commit}) => {

            const endpoint = Api.utilsApi.buildEndpoint(Api.resourceGroupApi.summary);

            Api.serviceApi.get(endpoint, res => {
                commit( 'UPDATE_TOTAL_SUMMARY', res);
            });

        }
    },
    mutations:{
        UPDATE_TOTAL_SUMMARY: (state, mutationPayload) => {

            const entities = {
                countrySummaryEntity: Entities.countrySummaryEntity
            };

            state.totalSummary = Services.summaryService.processSummaryData(mutationPayload, entities);
        }
    }
};

export default _store_module;