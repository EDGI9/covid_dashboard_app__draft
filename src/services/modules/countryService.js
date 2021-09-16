import Common from '../../common';

function processCountryData(dataPayload, entitiesPayload)
{
    const result = [];

    if(dataPayload && Common.arrayCommon.isValid(dataPayload) && entitiesPayload)
    {
        dataPayload.forEach( (item, index )=> {

            const tempEntity = entitiesPayload.countryEntity();
            tempEntity.id = (index + 1);
            tempEntity.name = item.Country;
            tempEntity.iso = item.ISO2;
                       
            result.push(tempEntity);
        });
    }

    return result;
}

function processCountriesTotalData(dataPayload, entitiesPayload)
{
    let result = {};

    if(dataPayload && Common.arrayCommon.isValid(dataPayload) && entitiesPayload)
    {
        const tempEntity = entitiesPayload.countryStatusEntity();

        tempEntity.name = dataPayload[0].Country;
        tempEntity.statusDescription = dataPayload[0].Status;
        
        dataPayload.forEach( (item, index ) => {

            tempEntity.id = (index + 1);

            const tempDateCaseEntity = entitiesPayload.dateCaseEntity( (index + 1) ,Common.momentCommon.formatUtcDate(item.Date), item.Cases );
            tempEntity.statuses.push( tempDateCaseEntity );
            
        });

        result = tempEntity;
    }

    return result;
}

const _service_module = {
    processCountryData,
    processCountriesTotalData
};

export default _service_module;