const _entity_module = (
    datePayload,
    casePayload,
) => {
    return {
        date: datePayload || '',
        cases: casePayload || 0
    }
};

export default _entity_module;