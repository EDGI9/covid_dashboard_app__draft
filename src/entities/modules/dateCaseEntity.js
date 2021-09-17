const _entity_module = (
    idPayload,
    datePayload,
    casePayload,
) => {
    return {
        id: idPayload || '',
        date: datePayload || '',
        cases: casePayload || 0
    };
};

export default _entity_module;