import GLContext from "./GLContext"
export class RenderSystem {
    public constructor(glContext: WebGL2RenderingContext) {
        // gl = glContext;
        GLContext.gl = glContext;
        // InitGL(glContext);
        // this.pos = vec4.create();
        // this.pos[0] = this.pos[1] = this.pos[2] = this.pos[3] = 0.0;
        // this.offset = vec4.create();
        // this.offset[0] = this.offset[1] = this.offset[2] = this.offset[3] = 0.1;
    }
    public Clear(r: number, g: number, b: number, a: number) {
        const gl = GLContext.gl;
        gl.clearColor(r, g, b, a);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    }
    public Run() {
        // vec4.add(this.pos, this.pos, this.offset);
        // for (let index = 0; index < this.pos.length; index++) {
        //     this.pos[index] = Math.sin(this.pos[index]);
        // }
        // this.Clear(this.pos[0], this.pos[1], this.pos[2], 1.0);
    }
    // pos: vec4;
    // offset: vec4;
}