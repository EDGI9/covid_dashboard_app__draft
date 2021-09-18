function capitalizeFirstLetter(strPayload)
{
    return (strPayload) ?  strPayload[0].toUpperCase() + strPayload.slice(1): strPayload;
}

function areEqual(firstStrPayload, secondStrPayload)
{
    return ( firstStrPayload && secondStrPayload ) ? ( firstStrPayload.toLocaleLowerCase().trim() === secondStrPayload.toLocaleLowerCase().trim() ) : false;
}

const _common_module = {
    capitalizeFirstLetter,
    areEqual
};

export default _common_module;