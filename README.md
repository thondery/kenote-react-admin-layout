# kenote-react-admin-layout

react admin layout

[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![Gratipay][licensed-image]][licensed-url]

[npm-image]: https://img.shields.io/npm/v/kenote-react-admin-layout.svg
[npm-url]: https://www.npmjs.org/package/kenote-react-admin-layout
[downloads-image]: https://img.shields.io/npm/dm/kenote-react-admin-layout.svg
[downloads-url]: https://npmjs.org/package/kenote-react-admin-layout
[licensed-image]: https://img.shields.io/badge/license-MIT-blue.svg
[licensed-url]: https://github.com/thondery/kenote-react-admin-layout/blob/master/LICENSE

## Install

```bash
yarn add kenote-react-admin-layout
```

## Usages

```js
import { Layout, Header, Sider } from 'kenote-react-admin-layout'
```

Header

```jsx
const header = (
  <Header 
    auth={auth}
    menus={menus}
    onPressItem={handlePressItem}
    />
)

const handlePressItem = ({ key }) => {
  witch (key) {
    case '9001': 
      // ...
      break
    case '9002': 
      // ...
      break
    case '9999': 
      // ...
      break
    default:
      break
  }
}
```

Sider

```js
const sider = (
  <Sider 
    location={location}
    menuSubs={menuSubs}
    />
)
```

Layout

```js
const CoreLayout = (
  <Layout
    pageCode={'1001'}
    auth={auth}
    breadcrumb={breadcrumb}
    header={header}
    sider={sider}
    >
    {/* 页面内容 */}
  </Layout>
)
```

## Data Structure

Auth

```js
{
  username: 'admin',
  group: {
    flag: ['1001', '1002', '1003']
  }
}
```

Header Menus

```js
{
  user: [
    {
      key: '9001',
      name: '基本资料',
      icon: 'wpforms'
    },
    {
      key: '9002',
      name: '修改密码',
      icon: 'address-card'
    }
  ]
}
```

menuSubs

```js
{
  menuSubHome: {
    key: 'home',
    name: '主页',
    icon: 'home',
    data: []
  },
  menuSubAdmins: {
    key: 'admins',
    name: '帐号管理',
    icon: 'solution',
    data: [
      { key: 'group', name: '管理组设定', path: 'admins' },
      { key: 'user', name: '用户管理', path: 'admins' },
      { key: 'log', name: '操作日志', path: 'admins' }
    ]
  }
}
```

breadcrumb

```js
[
  { name: '主页',       link: `/` },
  { name: '帐号管理',    link: `/admins` },
  { name: '用户管理' }
]
```

## API

Layout

| 参数 | 说明 | 类型 | 默认值 |
|-----|-----|-----|-----|
| auth | Auth 认证的用户数据 | object | null |
| pageCode | 设置页面的阅读权限 | string | 'none' |
| breadcrumb | 面包屑导航数据 | object[] | null |
| header | 页面头部组件 | element | null |
| sider | 页面侧栏组件 | element | null |

Header

| 参数 | 说明 | 类型 | 默认值 |
|-----|-----|-----|-----|
| auth | Auth 认证的用户数据 | object | null |
| menus | 头部菜单数据 | object | null |
| onPressItem | 点击菜单单元事件 | Function ({ key }) | null |

Sider

| 参数 | 说明 | 类型 | 默认值 |
|-----|-----|-----|-----|
| location | 即 window.location 对象 | object | null |
| menuSubs | 侧栏导航菜单数据 | object | null |

## License

this repo is released under the [MIT License](https://github.com/thondery/kenote-react-admin-layout/blob/master/LICENSE).