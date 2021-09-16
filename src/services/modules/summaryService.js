import Common from '../../common';

function processSummaryData(dataPayload, entitiesPayload)
{
    const result = [];

    if(dataPayload && Common.arrayCommon.isValid(dataPayload.Countries) && entitiesPayload)
    {
        dataPayload.Countries.forEach( item => {

            const tempEntity = entitiesPayload.countrySummaryEntity();
            tempEntity.id = item.ID;
            tempEntity.name = item.Country;
            tempEntity.activeCases = item.TotalConfirmed;
            tempEntity.deaths = item.TotalDeaths;
            tempEntity.recoveries = item.TotalRecovered;
            tempEntity.total = item.TotalConfirmed + item.TotalDeaths + item.TotalRecovered;
            
            result.push(tempEntity);
        });
    }

    return result;
}

const _service_module = {
    processSummaryData
};

export default _service_module;