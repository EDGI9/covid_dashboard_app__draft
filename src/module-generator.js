
function moduleLoaderIsValid(loaderPayload)
{
    return (loaderPayload && loaderPayload.keys) ? true : false;
}

function generateArrayModule(moduleLoaderPayload)
{
    return ( moduleLoaderIsValid(moduleLoaderPayload) ) ? generateModule([], moduleLoaderPayload) : [];
}

function generateObjectModule(moduleLoaderPayload)
{
    return ( moduleLoaderIsValid(moduleLoaderPayload) ) ? generateModule({}, moduleLoaderPayload) : {};
}

function generateModule(structurePayload, moduleLoaderPayload)
{
    const indexFileName = "./index.js";

    if(structurePayload && moduleLoaderPayload)
    {
        moduleLoaderPayload.keys().forEach(fileName => {

            //reject the index.js file
            if( fileName === indexFileName)
            {
                return;
            }

            const moduleName = toCamelCase(fileName.replace(/(\.\/|\.js)/g, ''));

            if(Array.isArray(structurePayload))
            {
                structurePayload.push(moduleLoaderPayload(fileName).default);
            }
            else
            {
                structurePayload[moduleName] = moduleLoaderPayload(fileName).default;
            }
            
        });
    }

    return structurePayload;
}


function toCamelCase(strPayload)
{
    return strPayload
        .replace(/\s(.)/g, function($1) { return $1.toUpperCase(); })
        .replace(/\s/g, '')
        .replace(/^(.)/, function($1) { return $1.toLowerCase(); });
}


const _module_generator = {
    generateArrayModule,
    generateObjectModule
};

export default _module_generator;