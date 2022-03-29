const game_images = require('./images.js')
const game_P_游戏左上角 = game_images.P_游戏左上角
const game_P_道具 = game_images.P_道具

function GamePanel() {
    this.游戏面板左上角坐标 = [0, 0]
    this.init = function () {
        let img = captureScreen()
        const p = images.findMultiColors(img, game_P_游戏左上角[0], game_P_游戏左上角[1], {
        });
        if (p) {
            this.游戏面板左上角坐标 = [p.x, p.y]
        } else {
            console.log('初始化失败');
        }
    }
    this.F_打开道具 = function () {
        let img = captureScreen()
        const p = images.findMultiColors(img, game_P_道具[0], game_P_道具[1], {});
        if (p) {
            click(p.x, p.y)
            return p
        } else {
            console.log('打开道具失败');
        }
    }
    this.F_使用飞行旗 = function () {
        while(true) {
            let img = captureScreen()
            images.findMultiColors(img,)

            F_打开道具()
            sleep(500)
        }
        let img = captureScreen()
        const p = images.findMultiColors(img, game_P_道具[0], game_P_道具[1], {});
        if (p) {
            click(p.x, p.y)
            return p
        } else {
            console.log('打开道具失败');
        }
    }
}

module.exports = new GamePanel();
