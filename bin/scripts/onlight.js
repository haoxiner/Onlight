var onlight;
(function (onlight) {
})(onlight || (onlight = {}));
var onlight;
(function (onlight) {
    var RenderSystem = (function () {
        function RenderSystem(glContext) {
            onlight.gl = glContext;
        }
        RenderSystem.prototype.Clear = function (r, g, b, a) {
            onlight.gl.clearColor(r, g, b, a);
            onlight.gl.clear(onlight.gl.COLOR_BUFFER_BIT | onlight.gl.DEPTH_BUFFER_BIT);
        };
        return RenderSystem;
    }());
    onlight.RenderSystem = RenderSystem;
})(onlight || (onlight = {}));
var onlight;
(function (onlight) {
    document.body.innerHTML = "<canvas id='onlight-editor'></canvas>";
    var canvas = document.getElementById("onlight-editor");
    var glContext = canvas.getContext("webgl2");
    var render = new onlight.RenderSystem(glContext);
    render.Clear(0, 0, 0, 1);
})(onlight || (onlight = {}));
