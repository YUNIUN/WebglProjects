//ClearCanvas.js
function main()
{
    //获取<canvas>元素标签
    var canvas = document.getElementById('webgl');
    if (!canvas)
    {
        console.log('Failed to retrieve the <canvas> element');
        return;
    }

    //获取WebGL绘图上下文
    var gl = getWebGLContext(canvas);
    if (!gl)
    {
        console.log('Failed to get the rendering context for WebGL');
        return;
    }
    
    //指定清空<canvas>的颜色
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    //清空<canvas>
    gl.clear(gl.COLOR_BUFFER_BIT);
}