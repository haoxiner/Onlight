import { RenderSystem } from "./Engine/Graphics/RenderSystem";

document.body.innerHTML = "<canvas id='onlight-editor'></canvas>";
let canvas = document.getElementById("onlight-editor") as HTMLCanvasElement;
let glContext = canvas.getContext("webgl2");
let render = new RenderSystem(glContext);
render.Clear(0,0,0,1);