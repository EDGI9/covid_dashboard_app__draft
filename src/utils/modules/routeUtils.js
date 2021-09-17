import Common from '../../common';

function extractNameAndPath(routesPayload)
{
    return (Common.arrayCommon.isValid(routesPayload)) ?  routesPayload.map( (x, index) => { return { name: x.name, path: x.path, orderId:(index + 1)}; } ) : [];
}

function gotoRoute(contextPayload,routeNamePayload)
{
    if( (contextPayload && routeNamePayload) && (contextPayload.$router.currentRoute.name !== routeNamePayload))
    {
        contextPayload.$router.push({path: routeNamePayload});
    }
}


const _utils_module = {
    extractNameAndPath,
    gotoRoute
};

export default _utils_module;