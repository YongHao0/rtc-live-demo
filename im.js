function initIM(params, callbacks) {
  var appkey = params.appkey;
  var token = params.token;

  var im = RongIMLib.init({ appkey });
  im.watch({
    status: (event) => {
      console.log('status', event);
    }
  });
  return im.connect({ token });
}