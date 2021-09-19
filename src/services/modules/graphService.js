import Common from '../../common';


function processGraphData(dataPayload, entitiesPayload)
{
    if(dataPayload && entitiesPayload)
    {
        const result = entitiesPayload.graphEntity();
        result.title = generateGraphTitle(dataPayload);
        result.type = dataPayload.type;
        result.data = Common.arrayCommon.isValid(dataPayload.data) ? dataPayload.data: [dataPayload.data];

        return result;
    }
}

function generateGraphTitle(dataPayload)
{
    let result = '';

    if(dataPayload)
    {
        result = dataPayload.type;

        if(dataPayload.data.name && dataPayload.data.statusDescription)
        {
            result = `${dataPayload.data.name} - ${dataPayload.data.statusDescription}`;
        }

        if(dataPayload.data.length === 1 && dataPayload.data[0].name)
        {
            result = `${dataPayload.data[0].name} - ${dataPayload.type}`;
        }
    }

    return result;
}

const _service_module = {
    processGraphData
};

export default _service_module;