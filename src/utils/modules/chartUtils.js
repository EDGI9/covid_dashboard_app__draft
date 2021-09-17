import Common from '../../common';

function generateChartDataObject(dataPayload) {
    const result = {
        labels: [],
        datasets: []
    };

    if (Common.arrayCommon.isValid(dataPayload)) {
        result.datasets = buildDataSets(dataPayload[0]);

        dataPayload.forEach(item => {
            result.labels.push(item.name);
            updateDataSets(result.datasets, item);
        });
    }
    
    return result;
}

function buildDataSets(itemObjectPayload) {
    const result = [];

    if (itemObjectPayload) {
        Object.keys(itemObjectPayload).forEach(key => {

            if ((key.toLocaleLowerCase() !== 'id') && (key.toLocaleLowerCase() !== 'name')) {
                result.push({
                    label: key,
                    backgroundColor: generateRandomColor(),
                    data: []
                });
            }
        });
    }

    return result;
}

function updateDataSets(dataSetPayload, itemObjectPayload) 
{
    Object.keys(itemObjectPayload).forEach(key => {

        if ((key.toLocaleLowerCase() !== 'id') && (key.toLocaleLowerCase() !== 'name')) 
        {
            const targetDataSet = dataSetPayload.find(x => x.label === key);
            targetDataSet.data.push(itemObjectPayload[key]);
        }
    });
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