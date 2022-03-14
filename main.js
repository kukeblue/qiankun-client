if (!requestScreenCapture(true)) {
    toast("请求截图失败");
    exit();
}
sleep(2000)

const common = require('./common.js')
const fentu = require('./流程分图')
const gamePanel = require('./game')


fentu.F_查找仓库区域()
// fentu.F_识别宝图地区()
for(let i = 0; i < 20; i ++) {
    fentu.F_主线分图()
    sleep(1500)
}
