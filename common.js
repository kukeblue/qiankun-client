ocr = $plugins.load("com.hraps.ocr")

function Common() {
    this.a = 1
    this.识别区域文字 = function (img, x, y, x1, y1) {
        if (x && y && x1 && y1) {
            img = images.clip(img, x, y, x1 - x, y1 - y)
        }
        results = ocr.detect(img.getBitmap(), 1)
        results = ocr.filterScore(results, 0.5, 0.5, 0.5)
        for (var i = 0; i < results.size(); i++) {
            var re = results.get(i)
            // log("结果:" + i + "  文字:" + re.text + "  位置:" + re.frame)
            // 角度类型:" + re.angleType
            // log("区域置信度:" + re.dbScore + "  角度置信度:" + re.angleScore + "  文字置信度:" + re.crnnScore + "\n")
        }
        img.recycle()
        return results
    }
    this.地点信息提取 = function (results) {
        for (var i = 0; i < results.size(); i++) {
            var re = results.get(i)
            if (re.text.includes('狮驼岭')) {
                return '狮驼岭'
            } else if (re.text.includes('花果山')) {
                return '花果山'
            } else if (re.text.includes('傲来国')) {
                return '傲来国'
            } else if (re.text.includes('大唐境外')) {
                return '大唐境外'
            } else if (re.text.includes('普陀山')) {
                return '普陀山'
            } else if (re.text.includes('普陀山')) {
                return '墨家村'
            }
        }
    }
}


module.exports = new Common();
