import Common from '../../common';

function processCountryData(dataPayload, entitiesPayload)
{
    let result = {};

    if(dataPayload && Common.arrayCommon.isValid(dataPayload) && entitiesPayload)
    {
        const tempEntity = entitiesPayload.countryStatusEntity();

        tempEntity.name = dataPayload[0].Country;
        tempEntity.statusDescription = dataPayload[0].Status;
        
        dataPayload.forEach( item => {

            const tempDateCaseEntity = entitiesPayload.dateCaseEntity( Common.momentCommon.formatUtcDate(item.Date), item.Cases );
            tempEntity.statuses.push( tempDateCaseEntity );
            
        });

        result = tempEntity;
    }

    return result;
}

const _service_module = {
    processCountryData
};

export default _service_module;