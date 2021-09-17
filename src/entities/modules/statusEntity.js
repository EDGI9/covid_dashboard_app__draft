const _entity_module = (
    idPayload,
    valuePayload,
    descriptionPayload,
) => {
    return {
        id: idPayload || '',
        value: valuePayload || '',
        description: descriptionPayload || ''
    };
};

export default _entity_module;