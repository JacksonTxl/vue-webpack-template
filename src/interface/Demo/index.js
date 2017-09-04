import CONSTANT from '../../util/index';
export default function () {

  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log(111);
      resolve(CONSTANT.basic.TESTVALUE);
    }, 5000);
  });
}
