var CONTANT = require('../../util/index');

function getUserInfo () {
  return new Promise(function (resolve, reject) {
    CONTANT.method.commonInterface('getUserInfo', {accNbr: 123}).then(function (data) {
      resolve(data);
    }, function (error) {
      reject(error);
    });
  });
}

export default getUserInfo;
