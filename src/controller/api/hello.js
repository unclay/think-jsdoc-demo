/**
# Test
*/
const BaseRest = require('../rest.js');

module.exports = class extends BaseRest {
/**
## GET接口

### 接口描述
输出hello world

### 参数
null

### 正确返回
```json
{
  "errno": 0,
  "data": "hello world"
}
```
*/
  getAction() {
    return this.success('hello world');
  }
};
