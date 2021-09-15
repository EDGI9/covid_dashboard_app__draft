import Axios from 'axios';
import EventBus from '../../eventbus';

Axios.interceptors.request.use( req => {
    EventBus.$emit('show-spinner');
    return req;
});

Axios.interceptors.response.use( res => {
    EventBus.$emit('hide-spinner');
    return res;
});

function get(endpointPayload, callbackPayload)
{
    if(endpointPayload && callbackPayload)
    {
        Axios
            .get(endpointPayload)
            .then( resPayload => processResponse(resPayload, callbackPayload))
            .catch( processError );
    }    
}

function processResponse(resPayload, callbackPayload)
{
    if(resPayload && callbackPayload)
    {
        callbackPayload(resPayload.data);
    }
}

function processError( errPayload )
{
    EventBus.$emit('hide-spinner');
    
    if(errPayload)
    {
        console.error(errPayload);
    }
}

const _service_module = {
    get
};

export default _service_module;