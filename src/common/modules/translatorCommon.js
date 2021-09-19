import Translator from '../../resources';

function translate(keyToTranslatePayload)
{
    return (keyToTranslatePayload) ? Translator.t(keyToTranslatePayload): keyToTranslatePayload;
}

const _common_module = {
    translate
};

export default _common_module;