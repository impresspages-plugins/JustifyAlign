
var justifyAlignOriginalConfigFunction = ipTinyMceConfig;

var ipTinyMceConfig = function () {
    var originalConfig = justifyAlignOriginalConfigFunction();

    originalConfig.toolbar1 = originalConfig.toolbar1.replace('alignleft', 'alignjustify  alignleft');

    return originalConfig;
}
