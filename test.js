// if (!requestScreenCapture(true)) {
//     toast("请求截图失败");
//     exit();
// }
// var ocr = $plugins.load("com.hraps.ocr")
// var img = captureScreen();
// var clip = images.clip(img, 1237, 117, 362, 256);
// images.save(clip, "/sdcard/clip.png");
// results = ocr.detect(clip.getBitmap(), 1)
// console.log(results);
// console.info("过滤前结果数：" + results.size())
// //识别结果过滤
// results = ocr.filterScore(results, 0.5, 0.5, 0.5)
// for (var i = 0; i < results.size(); i++) {
//     var re = results.get(i)
//     log("结果:" + i + "  文字:" + re.text + "  位置:" + re.frame + "  角度类型:" + re.angleType)
//     log("区域置信度:" + re.dbScore + "  角度置信度:" + re.angleScore + "  文字置信度:" + re.crnnScore + "\n")
// }
// sleep(3000)
// let p = images.findMultiColors(captureScreen(), "#98c0d0", [[2, 0, "#98c0cf"], [2, 4, "#88b6c3"], [-1, 4, "#88b6c3"]], {
// });
// click(p.x, p.y)\

