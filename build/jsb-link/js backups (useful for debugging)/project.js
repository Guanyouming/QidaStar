window.__require = function e(o, t, c) {
function n(r, s) {
if (!t[r]) {
if (!o[r]) {
var a = r.split("/");
a = a[a.length - 1];
if (!o[a]) {
var l = "function" == typeof __require && __require;
if (!s && l) return l(a, !0);
if (i) return i(a, !0);
throw new Error("Cannot find module '" + r + "'");
}
}
var u = t[r] = {
exports: {}
};
o[r][0].call(u.exports, function(e) {
return n(o[r][1][e] || e);
}, u, u.exports, e, o, t, c);
}
return t[r].exports;
}
for (var i = "function" == typeof __require && __require, r = 0; r < c.length; r++) n(c[r]);
return n;
}({
Scale: [ function(e, o, t) {
"use strict";
cc._RF.push(o, "087712saOBESo2jmCzgw7C3", "Scale");
var c;
cc.Class({
extends: cc.Component,
properties: {},
start: function() {
c = !0;
},
update: function(e) {
console.log(this.node.scale);
console.log(c);
if (this.node.scale <= 1 || c) {
this.node.scale += .001;
c = !0;
}
if (this.node.scale >= 1.1 || !c) {
this.node.scale -= .001;
c = !1;
}
this.node.setScale(this.node.scale);
}
});
cc._RF.pop();
}, {} ],
VideoPlay: [ function(e, o, t) {
"use strict";
cc._RF.push(o, "cac514hAKlBkqColcKUoGx0", "VideoPlay");
cc.Class({
extends: cc.Component,
properties: {
videoplayer: cc.VideoPlayer
},
onLoad: function() {
this.videoplayer.node.on("completed", this.callback, this);
this.videoplayer.play();
},
callback: function(e) {
e.detail;
cc.director.loadScene("gamestart");
}
});
cc._RF.pop();
}, {} ]
}, {}, [ "Scale", "VideoPlay" ]);