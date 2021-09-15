const _entity_module = (
    idPayload,
    namePayload,
    activeCasesPayload,
    deathsPayload,
    recoveriesPayload,
    totalPayload
) => {
    return {
        id: idPayload || '',
        name: namePayload || '',
        activeCases: activeCasesPayload || 0,
        deaths: deathsPayload || 0,
        recoveries: recoveriesPayload || 0,
        total: totalPayload || 0 
    }
};

export default _entity_module;