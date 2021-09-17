const _entity_module = (
    idPayload,
    namePayload,
    isoPayload,
) => {
    return {
        id: idPayload || '',
        name: namePayload || '',
        iso: isoPayload || ''
    };
};

export default _entity_module;