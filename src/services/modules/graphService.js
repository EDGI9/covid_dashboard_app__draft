//import Common from '../../common';

function processGraphData(dataPayload, entitiesPayload)
{
    if(dataPayload && entitiesPayload)
    {
        const result = entitiesPayload.graphEntity();
        result.title = dataPayload.type;
        result.type = dataPayload.type;
        result.data = dataPayload.data;

        return result;
    }
}

const _service_module = {
    processGraphData
};

export default _service_module;