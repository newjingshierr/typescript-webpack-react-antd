webpackJsonp([16],{0:function(t,e,n){"use strict";var r=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)},i=n(1),o=n(12),u=n(112),a=n(229),s=(u["default"].TelBaseUrl,n(13)),c=n(38),l={accout:{name:"用户",require:!0},password:{name:"密码",require:!0}},p=function(t){function e(e){t.call(this,e),this.submitDate={accout:"",password:""}}return r(e,t),e.prototype.sublimeButton=function(){var t=c["default"].verifyConfig(this.submitDate,l,!0);if(t.length>0)return s.Tips({message:t[0].tips,type:2}),!1;var e=this.submitDate.accout,n=this.submitDate.password;a.LoginAction(e,n)},e.prototype.valueChange=function(t,e){this.submitDate[t]=e},e.prototype.render=function(){var t=this;return i.createElement("div",null,i.createElement(s.FormGroup,null,i.createElement(s.FormItems,{label:"用户名"},i.createElement(s.InputText,{type:"test",placeholder:"请输入您的用户名",onChange:function(e){return t.valueChange("accout",e.target.value)}})),i.createElement(s.FormItems,{label:"密码"},i.createElement(s.InputText,{type:"password",placeholder:"请输入您的密码",onChange:function(e){return t.valueChange("password",e.target.value)}})),i.createElement(s.FormItems,{BtnFormItems:!0},i.createElement(s.Buttons,{type:"primary",display:"block",size:"large",onClick:function(){return t.sublimeButton()}},"登录"))))},e.prototype.componentDidMount=function(){},e.prototype.componentWillUnmount=function(){},e}(i.Component),m=document.getElementById("example");o.render(i.createElement(p,null),m)},38:function(t,e){"use strict";var n={require:{test:function(t,e){return e?t?t.toString().trim().length>0:!1:!0},tip:"不能为空"},password:{test:function(t,e){return e?t?t.toString().trim().length>0:!1:!0},tip:"不能为空"},minLength:{test:function(t,e){return t&&t.toString().trim().length>=e},tip:"长度不能小于{value}位"},maxLength:{test:function(t,e){return t&&t.toString().trim().length<e},tip:"长度不能大于{value}位"},number:{test:function(t){return/^\d+$/.test(t.toString().trim())},tip:"只能为数字"},mobile:{test:function(t){return t&&/^((1[378][0-9]{9})|(15[89][0-9]{8}))$/.test(t.toString().trim())},tip:"手机号码格式不正确"},email:{test:function(t){return t&&/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(t.toString().trim())},tip:"格式不对"},select:{test:function(t,e){return t!=e},tip:"不能为空"},group:{test:function(t,e){return parseInt(t.length)+1>e},tip:"选择不能小于{value}个"},bank:{test:function(t){return t&&/^\d{16}|\d{19}$/.test(t.toString().trim())},tip:"格式不对"}},r=function(t,e,r){if("test"===t)return r.test&&!r.test(e)?r.tip||"fail":!0;var i=n[t];if(i&&i.test){var o=i.test(e,r);if(!o)return i.tip.replace("{value}",r)}return!0},i=function(t,e,n){void 0===n&&(n=!1);var i=[];for(var o in e){var u=e[o];for(var a in u){var s=u[a],c=r(a,t[o],s);if("string"==typeof c){var l=u.name+c;if(l={name:o,tips:l},n)return[l];i.push(l)}}}return i},o={verifyConfig:i,verify:r};Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=o},229:function(t,e,n){"use strict";function r(t,e){if("admin"==t&&"123456"==e){var n={AdvAccount_ID:35,CityID:115,LOGIN_ID:"admin",ROLE_ID:17,USER_ID:154,pass:!0};return o["default"].add("cw_auth",n),i["default"].goPush("Api"),!1}u.Tips({message:"账号或者密码错误",type:2})}var i=n(2),o=n(16),u=n(13);e.LoginAction=r}});