cc.Class({
    extends: cc.Component,

    properties: {
        videoplayer: cc.VideoPlayer
    },

    onLoad: function () {
        this.videoplayer.node.on('completed', this.callback, this);
        this.videoplayer.play();
    },

    callback: function (event) {
        //这里的 event 是一个 EventCustom 对象，你可以通过 event.detail 获取 VideoPlayer 组件
        videoplayer = event.detail;
        cc.director.loadScene('gamestart');
     },

});