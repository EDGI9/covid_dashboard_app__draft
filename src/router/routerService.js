function generateRoute(routePathPayload, routeNamePayload, routeViewPayload, isProtectedPayload, allowedRolesPayload)
{
    return{
        path: routePathPayload || '',
        name: routeNamePayload || '',
        component: routeViewPayload || {},
        meta: {
            requiresAuth: isProtectedPayload || false,
            role: allowedRolesPayload || []
        }
    };
}

const _service_module = {
    generateRoute
};

export default _service_module;