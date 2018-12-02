/// <reference path="./WebGL.ts" />
namespace onlight {
    export class RenderSystem {
        public constructor(glContext: WebGL2RenderingContext) {
            gl = glContext;
        }
        public Clear(r: number, g: number, b: number, a: number) {
            gl.clearColor(r, g, b, a);
            gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        }
    }
}