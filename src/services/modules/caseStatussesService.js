import Common from '../../common';


function processStatussesData(dataPayload, entitiesPayload)
{
    const result = [];

    if(dataPayload && Common.arrayCommon.isValid(dataPayload) && entitiesPayload)
    {
        dataPayload.forEach( (item, index )=> {

            const tempEntity = entitiesPayload.statusEntity();
            tempEntity.id = (index + 1);
            tempEntity.value = item;
            tempEntity.description = item;
                       
            result.push(tempEntity);
        });
    }

    return result;
}

const _service_module = {
    processStatussesData
};

export default _service_module;