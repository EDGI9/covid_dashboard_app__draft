function isValid(arrayPayload)
{
    return (arrayPayload && Array.isArray(arrayPayload) && arrayPayload.length > 0 ) ? true : false;
}

const _common_module = {
    isValid
};

export default _common_module;