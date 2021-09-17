const _entity_module = (
    idPayload,
    namePayload,
    statusDescriptionPayload,
    statusesPayload,
) => {
    return {
        id: idPayload || '',
        name: namePayload || '',
        statusDescription: statusDescriptionPayload || '',
        statuses: statusesPayload || []
    };
};

export default _entity_module;