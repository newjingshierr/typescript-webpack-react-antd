webpackJsonp([14],[function(e,t,n){(function(e){!function(){var t=n(5),a=n(3),o=n(2),r=n(1);e.makeHot=e.hot.data?e.hot.data.makeHot:t(function(){return a.getRootInstances(o)},r)}();try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{"default":e}}function t(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function l(e){return{Actions:(0,d.bindActionCreators)({changeActiveAction:p.changeActiveAction,switchMenu:p.switchMenu,getAuthAction:v.getAuthAction,loginOutAction:v.loginOutAction},e)}}var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),c=n(1),i=t(c),s=n(19),f=t(s),d=n(10),m=n(23),h=n(18),p=n(8),v=n(9),b=n(11),y=e(b),E=n(14),g=(0,E.BaseStore)({}),C=function(e){function t(e){a(this,t);var n=o(this,Object.getPrototypeOf(t).call(this,e));return n.state={value:"1"},n.date=[{label:"北京",value:"1"}],n.SelectGroupDate=[{label:"福建省",options:[{label:"福州",value:"1"},{label:"厦门",value:"2"}]},{label:"北京市",options:[{label:"北京",value:"1"}]}],n}return r(t,e),u(t,[{key:"handleInputChange",value:function(e){console.log(e.target.value)}},{key:"handleRadioChange",value:function(e){this.setState({value:e.target.value})}},{key:"handleCheckboxChange",value:function(e){console.log(e.target.checked)}},{key:"handleCheckGroupChange",value:function(e){console.log("checked = ",e)}},{key:"valueChange",value:function(e,t){console.log(e,t)}},{key:"render",value:function(){var e=this,t=this.props,n=t.MenuReducers,a=t.HeaderReducer,o=t.Actions;return i.createElement(h.AppBody,{meu_reducers:n,hed_reducers:a,actions:o},i.createElement(h.Panel,{title:"行内-表单面板"},i.createElement(h.FormGroup,{inline:!0},i.createElement(h.FormItems,{label:"账户 : "},i.createElement(h.InputText,{type:"test",placeholder:"请输入账号",id:"user_name"})),i.createElement(h.FormItems,null,i.createElement(h.InputText,{type:"test",placeholder:"请输入账号"})))),i.createElement(h.Panel,{title:"水平-表单面板"},i.createElement(h.FormGroup,{horizontal:!0},i.createElement(h.FormItems,{label:"提示文本域"},i.createElement(h.InfoText,null,"56.2元")),i.createElement(h.FormItems,{label:"多行文本域"},i.createElement(h.InfoText,null,i.createElement(h.Textarea,{defaultValue:"文本域，文本域，文本域11"}))),i.createElement(h.FormItems,{label:"用户名"},i.createElement(h.InputText,{type:"test"})),i.createElement(h.FormItems,{label:"数字"},i.createElement(h.InputText,{type:"number",placeholder:"请输入数字"})),i.createElement(h.FormItems,{label:"密码"},i.createElement(h.InputText,{type:"password",placeholder:"请输入你要提示的文本域内容"})),i.createElement(h.FormItems,{label:"普通下拉选择框"},i.createElement(h.InputSelect,{data:this.date,onChange:function(t){return e.handleInputChange(t)}})),i.createElement(h.FormItems,{label:"下拉选择组"},i.createElement(h.SelectGroup,{data:this.SelectGroupDate,onChange:function(t){return e.handleInputChange(t)}})),i.createElement(h.FormItems,{label:"禁用普通下拉选择框"},i.createElement(h.InputSelect,{data:this.date,disabled:!0,onChange:function(t){return e.handleInputChange(t)}})),i.createElement(h.FormItems,{label:"单选按钮"},i.createElement(h.RadioGroup,{value:this.state.value,onChange:function(t){return e.handleRadioChange(t)}},i.createElement(h.InputRadio,{label:"全部",name:"delivery_channel",value:"1"}),i.createElement(h.InputRadio,{label:"微信",name:"delivery_channel",value:"2"}),i.createElement(h.InputRadio,{label:"APP",name:"delivery_channel",value:"3"}))),i.createElement(h.FormItems,{label:"未选不可选单选按钮"},i.createElement(h.InputRadio,{label:"全部",name:"delivery_channel1",value:"-1",disabled:!0})),i.createElement(h.FormItems,{label:"已选不可选单选按钮"},i.createElement(h.InputRadio,{label:"全部",name:"delivery_channel2",value:"-1",defaultChecked:!0,disabled:!0,onChange:function(t){return e.handleRadioChange(t)}})),i.createElement(h.FormItems,{label:"复选框"},i.createElement(h.InputCheckbox,{label:"选择",name:"circle",value:"1",onChange:function(t){return e.handleCheckboxChange(t)}})),i.createElement(h.FormItems,{label:"复选框组"},i.createElement(h.CheckGroup,{options:[{label:"短信通知",value:"1"},{label:"邮件通知",value:"2"}],defaultValue:["1"],onChange:function(t){return e.handleCheckGroupChange(t)}})),i.createElement(h.FormItems,{label:"复选框组-锁"},i.createElement(h.CheckGroup,{options:[{label:"短信通知",value:"1"},{label:"邮件通知",value:"2"}],disabled:!0,defaultValue:["1"],onChange:function(t){return e.handleCheckGroupChange(t)}})),i.createElement(h.FormItems,{label:"不可选择复选框"},i.createElement(h.InputCheckbox,{label:"选择",name:"circle",value:"1",disabled:!0,onChange:function(t){return e.handleCheckboxChange(t)}})),i.createElement(h.FormItems,{label:"选择不可选择复选框"},i.createElement(h.InputCheckbox,{label:"选择",name:"circle",value:"1",checked:!0,disabled:!0,onChange:function(t){return e.handleCheckboxChange(t)}})),i.createElement(h.FormItems,{label:" "},i.createElement(h.InfoText,null,i.createElement(h.Buttons,{type:"primary"},"登录"),i.createElement(h.Buttons,{type:"success"},"注册"))))),i.createElement(h.Panel,{title:"特殊文本域"},i.createElement(h.FormGroup,{horizontal:!0},i.createElement(h.FormItems,{label:"用户名"},i.createElement(h.InputText,{type:"test",addonBefore:"美元"}))),i.createElement(h.FormGroup,{horizontal:!0},i.createElement(h.FormItems,{label:"用户名"},i.createElement(h.InputText,{type:"test",addonBefore:"输入",addonAfter:"元"})))),i.createElement(h.Panel,{title:"搜索框文本域"},i.createElement("div",{className:"ui-search-input"},i.createElement(h.InputText,{type:"test"}),i.createElement("div",{className:"btn-box"},i.createElement(h.Icon,{type:"ssi"})))))}},{key:"componentDidMount",value:function(){var e=this.props,t=(e.MenuReducers,e.Actions);t.changeActiveAction()}},{key:"componentWillUnmount",value:function(){}}]),t}(y["default"]),I=function(e){return{HeaderReducer:e.HeaderReducer,MenuReducers:e.MenuReducers}},k=(0,m.connect)(I,l)(C),_=document.getElementById("example");f.render(i.createElement(m.Provider,{store:g},i.createElement(k,null)),_)}).call(this)}finally{!function(){var t=e.hot.data&&e.hot.data.foundReactClasses||!1;if(e.exports&&e.makeHot){var a=n(4);a(e,n(1))&&(t=!0);var o=t;o&&e.hot.accept(function(e){e&&console.error("Cannot not apply hot update to FormContainer.tsx: "+e.message)})}e.hot.dispose(function(n){n.makeHot=e.makeHot,n.foundReactClasses=t})}()}}).call(t,n(6)(e))},,,,,,,,,,,function(e,t,n){(function(e){!function(){var t=n(5),a=n(3),o=n(2),r=n(1);e.makeHot=e.hot.data?e.hot.data.makeHot:t(function(){return a.getRootInstances(o)},r)}();try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{"default":e}}function a(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),c=n(1),i=a(c),s=n(7),f=e(s),d=n(22),m=e(d),h=function(e){function t(e){o(this,t);var n=r(this,Object.getPrototypeOf(t).call(this,e)),a=m["default"].get("cw_auth");return a||(alert("请求超时,请重新登录"),f["default"].goPush("login")),n}return l(t,e),u(t,[{key:"componentDidMount",value:function(){}},{key:"componentWillUnmount",value:function(){}}]),t}(i.Component);t["default"]=h}).call(this)}finally{!function(){var t=e.hot.data&&e.hot.data.foundReactClasses||!1;if(e.exports&&e.makeHot){var a=n(4);a(e,n(1))&&(t=!0);var o=t;o&&e.hot.accept(function(e){e&&console.error("Cannot not apply hot update to BaseContainer.tsx: "+e.message)})}e.hot.dispose(function(n){n.makeHot=e.makeHot,n.foundReactClasses=t})}()}}).call(t,n(6)(e))},function(e,t,n){(function(e){!function(){var t=n(5),a=n(3),o=n(2),r=n(1);e.makeHot=e.hot.data?e.hot.data.makeHot:t(function(){return a.getRootInstances(o)},r)}();try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{"default":e}}function a(){var e=arguments.length<=0||void 0===arguments[0]?u:arguments[0],t=arguments[1];switch(t.type){case o.GET_AUTH:return l["default"].assign({},e,t.state);default:return e}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=a;var o=n(9),r=n(7),l=e(r),u={LOGIN_ID:""}}).call(this)}finally{!function(){var t=e.hot.data&&e.hot.data.foundReactClasses||!1;if(e.exports&&e.makeHot){var a=n(4);a(e,n(1))&&(t=!0);var o=t;o&&e.hot.accept(function(e){e&&console.error("Cannot not apply hot update to HeaderReducer.ts: "+e.message)})}e.hot.dispose(function(n){n.makeHot=e.makeHot,n.foundReactClasses=t})}()}}).call(t,n(6)(e))},function(e,t,n){(function(e){!function(){var t=n(5),a=n(3),o=n(2),r=n(1);e.makeHot=e.hot.data?e.hot.data.makeHot:t(function(){return a.getRootInstances(o)},r)}();try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{"default":e}}function a(){var e=arguments.length<=0||void 0===arguments[0]?u:arguments[0],t=arguments[1];switch(t.type){case o.BASE_MENU:return l["default"].assign({},e,t.state);case o.SWITCH_MENU:return l["default"].assign({},e,{menuSwitch:t.menuSwitch});case o.CHANGE_ACTIVE:return l["default"].assign({},e,{active:t.active});default:return e}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=a;var o=n(8),r=n(7),l=e(r),u={active:{parent:-1,child:-1},menuSwitch:!0,menuList:[]}}).call(this)}finally{!function(){var t=e.hot.data&&e.hot.data.foundReactClasses||!1;if(e.exports&&e.makeHot){var a=n(4);a(e,n(1))&&(t=!0);var o=t;o&&e.hot.accept(function(e){e&&console.error("Cannot not apply hot update to MenuReducer.ts: "+e.message)})}e.hot.dispose(function(n){n.makeHot=e.makeHot,n.foundReactClasses=t})}()}}).call(t,n(6)(e))},function(e,t,n){(function(e){!function(){var t=n(5),a=n(3),o=n(2),r=n(1);e.makeHot=e.hot.data?e.hot.data.makeHot:t(function(){return a.getRootInstances(o)},r)}();try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{"default":e}}function a(e){if(m)return m;var t=c["default"].assign(e,{HeaderReducer:s["default"],MenuReducers:d["default"]}),n=(0,o.combineReducers)(t);return m=(0,o.createStore)(n,(0,o.applyMiddleware)(l["default"]))}Object.defineProperty(t,"__esModule",{value:!0}),t.BaseStore=a;var o=n(10),r=n(15),l=e(r),u=n(7),c=e(u),i=n(12),s=e(i),f=n(13),d=e(f),m=void 0}).call(this)}finally{!function(){var t=e.hot.data&&e.hot.data.foundReactClasses||!1;if(e.exports&&e.makeHot){var a=n(4);a(e,n(1))&&(t=!0);var o=t;o&&e.hot.accept(function(e){e&&console.error("Cannot not apply hot update to BaseStore.ts: "+e.message)})}e.hot.dispose(function(n){n.makeHot=e.makeHot,n.foundReactClasses=t})}()}}).call(t,n(6)(e))},function(e,t){"use strict";function n(e){return function(t){var n=t.dispatch,a=t.getState;return function(t){return function(o){return"function"==typeof o?o(n,a,e):t(o)}}}}t.__esModule=!0;var a=n();a.withExtraArgument=n,t["default"]=a}]);