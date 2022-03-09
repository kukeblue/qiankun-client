
var common = {
    全屏幕找色(firstColor, colors, region) {
        // let img = captureScreen()
        // return images.findMultiColors(img, firstColor, colors, {
        //     region
        // });
    },
    打开隐藏功能() {
        console.log('打开隐藏界面功能');
        let p = 全屏幕找色("#f0d498", [[2, 0, "#f0d498"], [3, 0, "#f0d498"], [4, 0, "#f0d498"], [8, 3, "#e4d297"], [8, 6, "#e8c88c"], [10, 6, "#eed292"], [11, 8, "#e9cd8a"], [12, 10, "#e2c786"], [29, 26, "#deb96b"], [37, 31, "#d8a858"]], [13, 154, 355, 709])
        if (p.x > 0) {
            click(p.x, p.y)
            return true
        } else {
            console.log('打开隐藏功能失败');
            return false
        }
    }
}
