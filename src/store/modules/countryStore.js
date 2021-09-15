import Api from '../../api';

const _store_module = {
    namespaced: true,
    state: {
        totals: 'some'
    },
    getters:{
        TOTALS: state => { return state.totals; }
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

            console.log(state);
            console.log('HERE -->',mutationPayload);

        }
    }
};

export default _store_module;