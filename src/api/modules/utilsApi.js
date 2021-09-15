function buildEndpoint(resourceGroupPayload, countryNamePayload, statusPayload)
{
    let result = process.env.VUE_APP_API_BASE_URL || '';

    if(result)
    {
        if(resourceGroupPayload)
        {
            result += resourceGroupPayload;
        }

        if(countryNamePayload)
        {
            result += countryNamePayload;
        }

        if(statusPayload)
        {
            result +=  `/status/${statusPayload}`;
        }
    }    

    return result;
}

const _utils_module = {
    buildEndpoint
};

export default _utils_module;