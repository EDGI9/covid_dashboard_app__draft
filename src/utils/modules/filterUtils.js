import Common from '../../common';

function filterObjectByNameProperty(dataPayload, namePayload, returnEmptyIfNotFound = false)
{
    return (Common.arrayCommon.isValid(dataPayload) && namePayload) ? dataPayload.filter( x => x.name.toLowerCase().indexOf(namePayload.toLowerCase()) > -1 ) : ( returnEmptyIfNotFound ) ? [] : dataPayload;
}

function emitTableDataFilterRequest(requestPayload)
{
    if(requestPayload.context)
    {
        requestPayload.context.$emit('filter-table-data', requestPayload);
    }
}

const _utils_module = {
    filterObjectByNameProperty,
    emitTableDataFilterRequest
};

export default _utils_module;