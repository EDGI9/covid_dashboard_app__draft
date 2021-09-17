const _entity_module = (
    titlePayload,
    typePayload,
    dataPayload
) => {
    return {
        title: titlePayload || '',
        type: typePayload || '',
        data: dataPayload || [],
    };
};

export default _entity_module;