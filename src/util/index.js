function checkDevice () {
  var agent = navigator.userAgent;

  return {
    // IE内核
    trident: agent.indexOf('Trident') > -1,
    // opera内核
    presto: agent.indexOf('Presto') > -1,
    // 苹果、谷歌内核
    webKit: agent.indexOf('AppleWebKit') > -1,
    // 火狐内核
    gecko: agent.indexOf('Gecko') > -1 && agent.indexOf('KHTML') == -1,
    // 是否为移动终端
    mobile: !!agent.match(/AppleWebKit.*Mobile.*/) || !!agent.match(/AppleWebKit/),
    // ios终端
    ios: !!agent.match(/\(i[^]+( U)? CPU.+Mac OS X/),
    // android终端或者uc浏览器
    android: agent.indexOf('Android') > -1 || agent.indexOf('Linux') > -1,
    // 是否为iPhone或者QQHD浏览器
    iPhone: agent.indexOf('iPhone') > -1 || agent.indexOf('Mac') > -1,
    // 是否iPad
    iPad: agent.indexOf('iPad') > -1,
    // 是否web应该程序，没有头部与底部
    webApp: agent.indexOf('Safari') === -1,
    // 加mobile和这个属性一起，可以判断uc浏览器
    linux: agent.indexOf('linux') > -1,
    // trident IE内核 并且包含WP7标示 windows phone7手机
    wp7: (agent.indexOf('WP7') > -1) || (agent.indexOf('Windows Phone OS') > -1)
  };
}


export default {
  basic: {
    TESTVALUE: '111'
  },

  method: {

    commonInterface (interfaceName, data) {
      return new Promise(function (resolve, reject) {
        if (checkDevice.ios) {
          window.WebViewJavascriptBridge.callHandler(interfaceName, data, function (data) {
            resolve(data, 1);
          });
        } else if (checkDevice.android) {
          window.WebViewJavascriptBridge.callHandler(interfaceName, data, function (data) {
            resolve(data, 2);
          });
        } else {
          window.external[interfaceName](JSON.stringify(data), function (data) {
            resolve(data, 3);
          });
        }

      });
    }
  }
};
