const fentu_common = require('./common.js')
const fentu_images = require('./images.js')
const fentu_P_仓库加号按钮 = fentu_images.P_仓库加号按钮
const fentu_P_仓库宝图 = fentu_images.P_仓库宝图
function Fentu() {
    this.仓库区域 = [0, 0, 0, 0]
    this.仓库区域_type_2 = [0, 0, 0, 0]
    this.仓库区域_width = 1421
    this.仓库区域_height = 928
    this.仓库打开_道具区域 = [0, 0, 0, 0]
    this.仓库打开_道具区域_type_2 = [0, 0, 0, 0]


    this.仓库对应字典 = {
        '花果山': 25,
        '傲来国': 24,
        '狮驼岭': 23,
        '大唐境外': 22,
        '普陀山': 21,
        '墨家村': 20,
        '北俱芦洲': 19,
        '朱紫国': 18,
        '大唐国境': 17,
        '麒麟山': 16,
        '长寿郊外': 15,
        '东海湾': 14,
        '五庄观': 13,
        '江南野外': 12,
        '建业城': 11,
        '女儿村': 10,
        '东海': 9,
    }
    this.F_查找仓库区域 = function () {
        let img = captureScreen()
        const p = images.findMultiColors(img, fentu_P_仓库加号按钮[0], fentu_P_仓库加号按钮[1], {
        });
        if (p) {
            this.仓库区域 = [p.x, p.y, p.x + this.仓库区域_width, p.y + 928]
            this.仓库区域_type_2 = [p.x, p.y, this.仓库区域_width, 928]
            this.仓库打开_道具区域 = [p.x + 693, p.y, p.x + this.仓库区域_width, p.y + 928]
            this.仓库打开_道具区域_type_2 = [p.x + 693, p.y, 725, 928]
            console.log('仓库区域', this.仓库区域)
            // console.log('仓库区域_type_2', this.仓库区域_type_2)
            // console.log('仓库打开_道具区域_type_2', this.仓库打开_道具区域_type_2);
            // console.log('仓库打开_道具区域', this.仓库打开_道具区域);
            return img
        } else {
            console.log('未找到仓库区域');
            return false
        }
    }
    this.F_选中宝图 = function () {
        const p = fentu_common.F_区域颜色识别(fentu_P_仓库宝图, this.仓库打开_道具区域, 50)
        console.log('F_选中宝图', p);
        if (p) {
            click(p.x, p.y)
            return [p.x, p.y]
        } else {
            return false
        }
    }
    this.F_识别宝图地区 = function () {
        const img = captureScreen()
        const results = fentu_common.识别区域文字(img, this.仓库区域[0], this.仓库区域[1], this.仓库区域[0] + 709, this.仓库区域[1] + 860)
        const path = fentu_common.地点信息提取(results)
        if (path) {
            console.log('识别到宝图地区：' + path);
            return path
        }
    }
    this.F_点击仓库号 = function (number) {
        console.log('F_点击仓库号', number)
        let img = this.F_查找仓库区域()
        if (img) {
            const p = images.findMultiColors(img, fentu_images.P_仓库锁头[0], fentu_images.P_仓库锁头[1], {
                region: this.仓库区域_type_2
            });
            if (p) {
                click(this.仓库区域[0] + 200, this.仓库区域[1] + 855)
                sleep(500)
            } else {
                console.log('已经打开数字键盘')
            }
            const oneBlock = [this.仓库区域[0] + 105, this.仓库区域[1] + 168]
            console.log(oneBlock, number);
            const arg = (number % 5) === 0 ? 1 : 0
            const height = (Math.floor(number / 5) - arg) * 145 + oneBlock[1]
            const rol = (number % 5) === 0 ? 5 : (number % 5)
            const width = oneBlock[0] + (rol - 1) * 145
            console.log(width, height);
            click(width, height)

        } else {
            console.log('F_点击仓库号:失败');
        }
    }
    this.F_主线分图 = function () {
        this.F_查找仓库区域()
        let ap = this.F_选中宝图()
        if (ap) {
            sleep(1500)
            const address = this.F_识别宝图地区()
            console.log('识别到地图：', address);
            if (address) {
                const number = this.仓库对应字典[address]
                this.F_点击仓库号(number)
                sleep(500)
                click(ap[0], ap[1])
                click(ap[0], ap[1])
            }else {
                console.log('未识别到区域');
            }
        } else {
            console.log('未找到宝图');
        }
    }

}


module.exports = new Fentu();
