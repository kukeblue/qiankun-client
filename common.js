ocr = $plugins.load("com.hraps.ocr")

function Common() {
    this.a = 1
    this.F_区域颜色识别 = function (colors, region, threshold) {
        console.log('F_区域颜色识别', region, threshold);
        const img = captureScreen()
        if(region) {
            region[2] = region[2] - region[0]
            region[3] = region[3] - region[1]
        }
        return images.findMultiColors(img, colors[0], colors[1], {
            region: region,
            threshold: threshold
        });
    }
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
            } else if (re.text.includes('墨家村')) {
                return '墨家村'
            }else if (re.text.includes('北俱芦洲')) {
                return '北俱芦洲'
            } 
            else if (re.text.includes('朱紫国')) {
                return '朱紫国'
            }  
            else if (re.text.includes('大唐国境')) {
                return '大唐国境'
            }  
            else if (re.text.includes('麒麟山')) {
                return '麒麟山'
            } 
            else if (re.text.includes('长寿郊外')) {
                return '长寿郊外'
            } 
            else if (re.text.includes('东海湾')) {
                return '东海湾'
            } 
            else if (re.text.includes('五庄观')) {
                return '五庄观'
            } 
            else if (re.text.includes('江南野外')) {
                return '江南野外'
            } 
            else if (re.text.includes('建业') || re.text.includes('建邺') || re.text.includes('建邮城')) {
                return '建业城'
            } 
            else if (re.text.includes('女儿')) {
                return '女儿村'
            } else if (re.text.includes('东海')) {
                return '东海'
            } 
            else {
                console.log("地区提取失败");
            }
        }
    }
}


module.exports = new Common();
