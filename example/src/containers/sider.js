import React from 'react'
import { Sider } from '../../../lib'
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