import Common from '../../common';

function filterObjectByNameProperty(dataPayload, namePayload, returnEmptyIfNotFound = false)
{
    return (Common.arrayCommon.isValid(dataPayload) && namePayload) ? dataPayload.filter( x => x.name.toLowerCase().indexOf(namePayload.toLowerCase()) > -1 ) : ( returnEmptyIfNotFound ) ? [] : dataPayload;
}

function emitDataFilterRequest(requestPayload)
{
    if(requestPayload.context)
    {
        requestPayload.context.$emit('filter-data', requestPayload);
    }
}

const _utils_module = {
    filterObjectByNameProperty,
    emitDataFilterRequest
};

export default _utils_module;