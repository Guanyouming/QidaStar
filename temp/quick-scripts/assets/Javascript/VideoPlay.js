(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Javascript/VideoPlay.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'cac514hAKlBkqColcKUoGx0', 'VideoPlay', __filename);
// Javascript/VideoPlay.js

'use strict';

cc.Class({
    extends: cc.Component,

    properties: {
        videoplayer: cc.VideoPlayer
    },

    onLoad: function onLoad() {
        this.videoplayer.node.on('completed', this.callback, this);
        this.videoplayer.play();
    },

    callback: function callback(event) {
        //这里的 event 是一个 EventCustom 对象，你可以通过 event.detail 获取 VideoPlayer 组件
        videoplayer = event.detail;
        cc.director.loadScene('gamestart');
    }

});

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=VideoPlay.js.map
        