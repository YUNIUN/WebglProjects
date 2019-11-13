//DrawRectPoint.js

//顶点着色器程序
var VSHADER_SOURCE = 
    'attribute vec4 a_Position;\n' +
    'void main()\n' +
    '{\n' + 
    '   gl_Position = a_Position;\n' +
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
    var canvas = document.getElementById('webgl');
    var gl = getWebGLContext(canvas);
    //初始化着色器
    if (!initShaders(gl, VSHADER_SOURCE, FSHADER_SOURCE))
    {
        console.log('Failed to initialize shaders.');
        return;
    }

    //获取attribute变量的存储位置
    var a_Position = gl.getAttribLocation(gl.program, 'a_Position');
    if(a_Position < 0)
    {
        console.log('Failed to get the storage location of a_Position.');
        return;
    }
    //将顶点位置传输给attribute变量
    gl.vertexAttrib3f(a_Position, 0.0, 0.5, 0.0);

    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);

    gl.drawArrays(gl.POINTS, 0, 1);
}