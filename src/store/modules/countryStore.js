import Entities from '../../entities';
import Services from '../../services';
import Api from '../../api';

const _store_module = {
    namespaced: true,
    state: {
        countryTotals: 'some'
    },
    getters:{
        COUNTRY_TOTALS: state => { return state.countryTotals; }
    },
    actions:{
        GET_COUNTRY_TOTALS: ({commit}, actionPayload ) => {

            const endpoint = Api.utilsApi.buildEndpoint(Api.resourceGroupApi.dayOneTotals, actionPayload.countryName, actionPayload.status);

            Api.serviceApi.get(endpoint, res => {
                commit( 'UPDATE_COUNTRY_TOTALS', res);
            });

        }
    },
    mutations:{
        UPDATE_COUNTRY_TOTALS: (state, mutationPayload) => {

            const entities = {
                countryStatusEntity: Entities.countryStatusEntity,
                dateCaseEntity: Entities.dateCaseEntity
            };

            state.countryTotals = Services.countryService.processCountryData(mutationPayload, entities);

        }
    }
};

export default _store_module;