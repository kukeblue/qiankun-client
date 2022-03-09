
// var ocr = $plugins.load("com.hraps.ocr")
if (!requestScreenCapture(true)) {
    toast("请求截图失败");
    exit();
}
// sleep(1000)
// var img = captureScreen();
// results = ocr.detect(img.getBitmap(), 1)
// console.log(results);
// console.info("过滤前结果数：" + results.size())
// results = ocr.filterScore(results, 0.5, 0.5, 0.5)
// for (var i = 0; i < results.size(); i++) {
//     var re = results.get(i)
//     if (re.text.includes('古')) {
//         log("结果:" + i + "  文字:" + re.text + "  位置:" + re.frame + "  角度类型:" + re.angleType)
//         log("区域置信度:" + re.dbScore + "  角度置信度:" + re.angleScore + "  文字置信度:" + re.crnnScore + "\n")
//         break
//     }
// }


// ---------------- utils ------------------

// function 点击小地图() {
//     click(180, 40)
// }

// function 碗子山小地图寻路() {
//     点击小地图()
//     sleep(1000)
//     const img = captureScreen()
//     const p = images.findMultiColors(img, "#d6dbd6", [[2, 3, "#000000"], [5, 4, "#514e1c"], [5, 5, "#948b2c"], [9, 12, "#000000"], [4, 31, "#a8c064"], [16, 31, "#3a94a2"], [9, 35, "#2d8090"], [31, -7, "#b05898"]], {
//     });
//     地图 + 270
// }
var common = require('common.js')
console.log(common);
common.打开隐藏功能()
// 碗子山小地图寻路()
