"use strict";
cc._RF.push(module, '087712saOBESo2jmCzgw7C3', 'Scale');
// Javascript/Scale.js

"use strict";

// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html
var flag;
cc.Class({
    extends: cc.Component,

    properties: {},

    start: function start() {
        flag = true;
    },

    update: function update(dt) {
        if (this.node.scale <= 1 || flag) {
            this.node.scale += 0.001;
            flag = true;
        }
        if (this.node.scale >= 1.1 || !flag) {
            this.node.scale -= 0.001;
            flag = false;
        }
        this.node.setScale(this.node.scale);
    }
});

cc._RF.pop();