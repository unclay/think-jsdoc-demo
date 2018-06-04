/**
# 用户
*/
const BaseRest = require('../rest.js');

module.exports = class extends BaseRest {
/**
## GET接口

### 描述说明
获取登录的用户信息

### 参数
null

### 正确返回
```json
{
  "errno": 0,
  "data": {
    "id": 1,
    "account": "unclay"
  }
}
```
*/
  getAction () {
    return this.success({
      id: 1,
      account: 'unclay'
    });
  }
/**
## POST接口

### 描述说明
登录

### 参数
|#|param|type|defaut|description
|---|---|---|---|---|
|#|account|string,number||账号
|#|password|string||密码

### 正确返回
```json
{
  "errno": 0,
  "data": "登录成功"
}
```
*/
  async getAction () {
    const account = this.post('account');
    await this.session('user', {
      account,
      id: 1
    })
    return this.success("登录成功");
  }
};
