const _entity_module = (
    namePayload,
    statusDescriptionPayload,
    statusesPayload,
) => {
    return {
        name: namePayload || '',
        statusDescription: statusDescriptionPayload || '',
        statuses: statusesPayload || []
    }
};

export default _entity_module;