//DrawRectPoint.js

//顶点着色器程序
var VSHADER_SOURCE = 
    'void main()\n' +
    '{\n' + 
    '   gl_Position = vec4(0.0, 0.0, 0.0, 1.0);\n' +
    '   gl_PointSize = 10.0;\n' +
    '}\n';

//片元着色器程序
var FSHADER_SOURCE = 
    'void main()\n' +
    '{\n' +
    '   gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);\n' +
    '}\n';

function main()
{
    //获取<canvas>元素标签
    var canvas = document.getElementById('webgl');
    //获取WebGL绘图上下文
    var gl = getWebGLContext(canvas);

    //初始化着色器
    if (!initShaders(gl, VSHADER_SOURCE, FSHADER_SOURCE))
    {
        console.log('Failed to initialize shaders.');
        return;
    }

    //清空<canvas>
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);

    //绘制一个点
    gl.drawArrays(gl.POINTS, 0, 1);
}