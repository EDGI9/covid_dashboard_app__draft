import Moment from 'moment';

import 'moment/locale/en-gb';
import 'moment/locale/en-au';

const _formatOptions = {
    dashUTC: 'YYYY/MM/DD',
    kebabUTC: 'YYYY-MM-DD'
};

function formatUtcDate(datePayload, formatOptionPayload)
{
    const formatOption = formatOptionPayload || _formatOptions.dashUTC;
    return ( datePayload ) ? Moment(datePayload.toString()).format(formatOption) : '';
}

const _common_module = {
    moment: Moment,
    _formatOptions,
    formatUtcDate
};

export default _common_module;