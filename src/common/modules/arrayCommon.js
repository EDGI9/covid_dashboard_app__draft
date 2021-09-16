function isValid(arrayPayload)
{
    return (arrayPayload && Array.isArray(arrayPayload) && arrayPayload.length > 0 ) ? true : false;
}

function sortToAscendingOrder (arrayPayload)
{
    return (isValid(arrayPayload)) ? arrayPayload.sort( ( x, y) => { return x.orderId - y.orderId; } ) : arrayPayload;
}

function sortToDescendingOrder (arrayPayload)
{
    return (isValid(arrayPayload)) ? arrayPayload.sort( ( x, y) => { return y.orderId - x.orderId; } ) : arrayPayload;
}

const _common_module = {
    isValid,
    sortToAscendingOrder,
    sortToDescendingOrder
};

export default _common_module;