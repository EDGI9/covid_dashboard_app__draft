import Entities from '../../entities';
import Services from '../../services';
import Api from '../../api';

const _store_module = {
    namespaced: true,
    state: {
        coutries: [],
        countryTotals: Entities.countryStatusEntity()
    },
    getters:{
        COUNTRIES: state => { return state.coutries; },
        COUNTRY_TOTALS: state => { return state.countryTotals; }
    },
    actions:{
        GET_ALL_COUNTRIES: ({commit}) => {

            const endpoint = Api.utilsApi.buildEndpoint(Api.resourceGroupApi.countries);

            Api.serviceApi.get(endpoint, res => {
                commit( 'UPDATE_COUNTRIES', res);
            });

        },
        GET_COUNTRY_TOTALS: ({commit}, actionPayload ) => {

            const endpoint = Api.utilsApi.buildEndpoint(Api.resourceGroupApi.dayOneTotals, actionPayload.countryName, actionPayload.status);

            Api.serviceApi.get(endpoint, res => {
                commit( 'UPDATE_COUNTRY_TOTALS', res);
            });

        }
    },
    mutations:{
        UPDATE_COUNTRIES: (state, mutationPayload) => {

            const entities = {
                countryEntity: Entities.countryEntity
            };

            state.coutries = Services.countryService.processCountryData(mutationPayload, entities);

        },
        UPDATE_COUNTRY_TOTALS: (state, mutationPayload) => {

            const entities = {
                countryStatusEntity: Entities.countryStatusEntity,
                dateCaseEntity: Entities.dateCaseEntity
            };

            state.countryTotals = Services.countryService.processCountriesTotalData(mutationPayload, entities);
        }
    }
};

export default _store_module;