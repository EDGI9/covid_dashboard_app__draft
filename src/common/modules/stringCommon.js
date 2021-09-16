function capitalizeFirstLetter(strPayload)
{
    return (strPayload) ?  strPayload[0].toUpperCase() + strPayload.slice(1): strPayload;
}

const _common_module = {
    capitalizeFirstLetter
};

export default _common_module;