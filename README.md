# rtc-live-demo

### 配置

修改 config.js

```js
const Config = {
  appkey: 'e5t4ouvptkm2a', // appkey
  anchor: [ // 主播 token
    'dvbuCF3ewNdG8oKPJXsAsAojczDDPr8Tu8rBbZYr4GePAWcDOsjy2A==@5o9j.cn.rongnav.com;5o9j.cn.rongcfg.com'
  ],
  audience: [ // 观众 token
    'dvbuCF3ewNcjlO8yvxIwEQojczDDPr8TZOPorFhuNrfq9GGtjrlb8g==@5o9j.cn.rongnav.com;5o9j.cn.rongcfg.com'
  ]
};
```

### 主播端

1、点击加入房间

2、点击发布音视频流

3、点击发布屏幕共享

4、点击设置混流

### 观众端

1、将主播端 LiveUrl 复制到观众端输入框内

2、点击观看直播