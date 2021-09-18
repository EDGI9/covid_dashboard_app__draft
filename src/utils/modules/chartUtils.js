import Common from '../../common';

const _graphTypes = {
    summary: {
        generator: summaryGraphGenerator
    },
    country: {
        generator: countryGraphGenerator
    }
};

function generateChartDataObject(dataPayload) {
    const result = {
        labels: [],
        datasets: []
    };

    if (Common.arrayCommon.isValid(dataPayload.data)) {
        _graphTypes[dataPayload.type].generator(result, dataPayload);
    }

    return result;
}

function summaryGraphGenerator(resultPayload, dataPayload)
{
    const targetDataSet = dataPayload.data;

    if(targetDataSet)
    {
        resultPayload.datasets = buildDataSets(targetDataSet[0]);

        targetDataSet.forEach(item => {
            resultPayload.labels.push(item.name);        
            updateDataSets(resultPayload.datasets, item);
        });
    }    
}

function countryGraphGenerator(resultPayload, dataPayload)
{
    const targetDataSet = dataPayload.data[0].statuses;

    if(targetDataSet)
    {
        resultPayload.datasets = buildDataSets(targetDataSet[0]);

        targetDataSet.forEach(item => {
            resultPayload.labels.push(item.date);        
            updateDataSets(resultPayload.datasets, item);
        });
    }        
}

function buildDataSets(itemObjectPayload) {
    const result = [];

    if(itemObjectPayload)
    {
        processDataSet( itemObjectPayload, keyPayload => {
            result.push({
                label: keyPayload,
                backgroundColor: generateRandomColor(),
                data: []
            });
        });
    }

    return result;
}

function updateDataSets(dataSetPayload, itemObjectPayload) 
{    
    if(dataSetPayload && itemObjectPayload)
    {
        processDataSet( itemObjectPayload, keyPayload => {
            const targetDataSet = dataSetPayload.find(x => x.label === keyPayload);
            targetDataSet.data.push(itemObjectPayload[keyPayload]);
        });
    }
}

function processDataSet( itemObjectPayload, callback)
{
    if(itemObjectPayload)
    {
        Object.keys(itemObjectPayload).forEach(key => {
        
            if(!Common.stringCommon.areEqual(key,'id') && !Common.stringCommon.areEqual(key,'name') && !Common.stringCommon.areEqual(key,'date'))
            {
                if(callback)
                {
                    callback(key);
                }
            }
        });
    }
}

function generateRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const _utils_module = {
    generateChartDataObject
};

export default _utils_module;