# kenote-react-admin-layout

Admin Layout for React

[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![Build Status][travis-image]][travis-url]
[![Codecov Status][codecov-image]][codecov-url]
[![Gratipay][licensed-image]][licensed-url]

[npm-image]: https://img.shields.io/npm/v/kenote-react-admin-layout.svg
[npm-url]: https://www.npmjs.org/package/kenote-react-admin-layout
[downloads-image]: https://img.shields.io/npm/dm/kenote-react-admin-layout.svg
[downloads-url]: https://npmjs.org/package/kenote-react-admin-layout
[travis-image]: https://travis-ci.org/thondery/kenote-react-admin-layout.svg?branch=master
[travis-url]: https://travis-ci.org/thondery/kenote-react-admin-layout
[codecov-image]: https://img.shields.io/codecov/c/github/thondery/kenote-react-admin-layout/master.svg
[codecov-url]:   https://codecov.io/github/thondery/kenote-react-admin-layout?branch=master
[licensed-image]: https://img.shields.io/badge/license-MIT-blue.svg
[licensed-url]: https://github.com/thondery/kenote-react-admin-layout/blob/master/LICENSE

## Install

```bash
yarn add kenote-react-admin-layout
```

## Usages

`sider.js`

```js
import React from 'react'
import { Sider } from 'kenote-react-admin-layout'
import { Icon } from 'antd'

export default ({ location }) => (
  <Sider 
    {...{ location }}
    menuSubs={{
      menuSubHome: {
        key: 'home',
        name: '主页',
        icon: <Icon type="home" />,
        data: []
      },
      menuSubAdmins: {
        key: 'admins',
        name: '帐号管理',
        icon: <Icon type="solution" />,
        data: [
          { key: 'group', name: '管理组设定', path: 'admins' },
          { key: 'user', name: '用户管理', path: 'admins' },
          { key: 'log', name: '操作日志', path: 'admins' }
        ]
      }
    }}
    footer={ (collapsed) => (
      <div>
        <Icon type="windows" style={!collapsed ? { fontSize: '16px' } : null} />
        {!collapsed && <span>v1.0.0</span>}
      </div>
    )}
  />
)
```

`header.js`

```js
import React from 'react'
import { Icon } from 'antd'
import { Header, getMenuList } from 'kenote-react-admin-layout'
import _ from 'lodash'

export default ({ auth }) => {
  const menus = [
    {
      key: 'expense',
      name: '费用',
      data: [
        {
          key: '1001',
          name: '充值'
        },
        {
          key: '1002',
          name: '订单'
        },
        {
          key: '1003',
          name: '发票'
        },
        {
          key: '1004',
          name: '消费记录'
        },
        {
          key: '1005',
          name: '续费管理'
        },
        {
          type: 'driver'
        },
        {
          key: '1006',
          name: '进入费用中心'
        }
      ]
    },
    {
      key: 'workorder',
      name: '工单',
      data: [
        {
          key: '1011',
          name: '我的工单'
        },
        {
          key: '1012',
          name: '提交工单'
        }
      ]
    },
    {
      key: 'bsn',
      name: '备案',
      data: [
        {
          key: '1021',
          name: '申请备案服务号'
        },
        {
          key: '1022',
          name: '备案服务号管理'
        },
        {
          key: '1023',
          name: '备案专区'
        },
        {
          key: '1024',
          name: 'ICP备案系统'
        }
      ]
    },
    {
      key: 'help',
      name: '支持',
      data: [
        {
          key: '1031',
          name: '帮助与文档'
        },
        {
          key: '1032',
          name: '提交意见'
        },
        {
          key: '1033',
          name: '论坛'
        },
        {
          key: '1034',
          name: '博客'
        }
      ]
    },
    {
      key: 'auth',
      name: `${auth && auth.username || '\<admin\>'}`,
      data: [
        {
          key: '9001',
          name: '基本资料',
          icon: (<Icon type="exception" />)
        },
        {
          key: '9002',
          name: '实名认证',
          icon: (<Icon type="contacts" />)
        },
        {
          key: '9003',
          name: '安全设置',
          icon: (<Icon type="setting" />)
        },
        {
          key: '9004',
          name: '安全管控',
          icon: (<Icon type="lock" />)
        },
        {
          key: '9005',
          name: '访问控制',
          icon: (<Icon type="idcard" />)
        },
        {
          key: '9006',
          name: 'accesskeys',
          icon: (<Icon type="key" />)
        },
        {
          key: '9007',
          name: '会员权益',
          icon: (<Icon type="solution" />)
        },
        {
          key: '9008',
          name: '会员积分',
          icon: (<Icon type="solution" />)
        },
        {
          key: '9009',
          name: '云大使管理',
          icon: (<Icon type="cloud-o" />)
        },
        {
          type: 'driver'
        },
        {
          key: '-1',
          name: '退出管理控制台',
          type: 'quit',
          onPress: () => notification.info({
            message: `Open Menu.Item`,
            description: `您点击了菜单 => [-1]退出管理控制台`,
            duration: 8,
            placement: 'bottomRight'
          })
        }
      ]
    },
    {
      key: 'lanage',
      name: '简体中文',
      data: [
        {
          key: '1041',
          name: 'English'
        }
      ]
    },
  ]
  return (
    <Header 
      {...{ auth, menus }}
      onPressItem={ ({ key }) => {
        let list = getMenuList(menus)
        let data = _.find(list, o => o.key === key)
        if (_.has(data, 'onPress')) {
          data.onPress()
        }
        else {
          notification.info({
            message: `Open Menu.Item`,
            description: `您点击了菜单 => [${data.key}]${data.name}`,
            duration: 8,
            placement: 'bottomRight'
          })
        }
      }}
    />
  )
}
```

`layou.js`

```js
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Icon } from 'antd'
import { Layout } from 'kenote-react-admin-layout'
import Sider from './sider'
import Header from './header'

@connect(
  state => ({
    auth: state.Root.auth
  })
)
export default class CoreLayout extends PureComponent {
  
  static propTypes = {
    location: PropTypes.object,
    children: PropTypes.any,
    auth: PropTypes.object,
    pageCode: PropTypes.string,
    breadcrumb: PropTypes.array
  }
  
  static defaultProps = {
    location: null,
    children: null,
    auth: null,
    pageCode: undefined,
    breadcrumb: null
  }

  render () {
    const { location, children, auth, pageCode, breadcrumb } = this.props
    const options = {
      auth,
      pageCode,
      breadcrumb,
      permissionView: (
        <div className="layout-page-not-found">
          <div className="page-not-found">
            <h1>403</h1>
            <div>
              <h2>The page is not allowed.</h2>
            </div>
          </div>
        </div>
      ),
      sider: (
        <Sider {...{ location }} />
      ),
      header: (
        <Header {...{ auth }} />
      ),
      pageLoading: true
    }
    return (
      <Layout {...options}>
        {children}
      </Layout>
    )
  }
}
```


## API

\<Breadcrumb\>

| 参数 | 说明 | 类型 | 默认值 |
|-----|-----|-----|-----|
| data | 面包屑导航数据 | object[] | null |

\<Sider\>

| 参数 | 说明 | 类型 | 默认值 |
|-----|-----|-----|-----|
| location | 即 window.location 对象 | object | null |
| menuSubs | 侧栏导航菜单数据 | object | null |
| footer | 侧栏底部自定义元素 | (collapsed) => element | -- |

\<Header\>

| 参数 | 说明 | 类型 | 默认值 |
|-----|-----|-----|-----|
| auth | Auth 认证的用户数据 | object | null |
| menus | 头部菜单数据 | object | null |
| onPressItem | 点击菜单单元事件 | Function ({ key }) | null |
| logoSource | LOGO图片地址 | string | -- |
| titleName | 标题名称 | string | 管理控制台 |

\<Layout\>

| 参数 | 说明 | 类型 | 默认值 |
|-----|-----|-----|-----|
| auth | Auth 认证的用户数据 | object | null |
| pageCode | 设置页面的阅读权限 | string | 'none' |
| breadcrumb | 面包屑导航数据 | object[] | null |
| header | 页面头部组件 | element | null |
| sider | 页面侧栏组件 | element | null |
| pageLoading | 页面加载进度条 | bool | false |
| permissionView | 无权限页面视图 | element | -- |

## License

this repo is released under the [MIT License](https://github.com/thondery/kenote-react-admin-layout/blob/master/LICENSE).