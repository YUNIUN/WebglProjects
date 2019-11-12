//DrawingRectangle.js
function main()
{
    //获取<canvas>元素标签
    var canvas = document.getElementById('rect');
    if (!canvas)
    {
        console.log('Failed to retrieve the <canvas> element');
        return;
    }

    //获取绘制二维图形的绘图上下文
    var ctx = canvas.getContext('2d');

    //绘制矩形
    ctx.fillStyle = 'rgba(128, 0, 0, 1.0)';//设置填充的颜色
    ctx.fillRect(50, 100, 200, 200);//填充矩形区域，x轴，y轴，宽，高
}