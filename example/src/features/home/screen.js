// ------------------------------------
// Screen -- Home
// ------------------------------------
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { rootActions } from 'reduxs'
import { Breadcrumb, Layout, Sider } from '../../../../src'

@connect(
  state => ({
    initialPending:     state.Root.initialPending,
    initialError:     state.Root.initialError,
    initialMessage:     state.Root.initialMessage,
    welcome:     state.Root.welcome
  }),
  dispatch => ({
    actions: bindActionCreators({...rootActions}, dispatch)
  })
)
export default class Home extends PureComponent {
  
  constructor (props) {
    super(props)
  }

  componentDidMount () {
    this.props.actions.initial()
  }
  
  render() {
    const { location, welcome } = this.props
    const sider = (
      <Sider 
        location={location}
        menuSubs={{
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
        }}
        />
    )
    return (
      <Layout
        pageCode={'1001'}
        auth={{
          username: 'admin',
          group: {
            flag: ['1001', '1002', '1003']
          }
        }}
        breadcrumb={[
          { name: '主页',       link: `/` },
          { name: '帐号管理',    link: `/admins` },
          { name: '用户管理' }
        ]}
        permissionView={(
          <div className="layout-page-not-found">
            <div className="page-not-found">
              <h1>403</h1>
              <div>
                <h2>The page is not allowed.</h2>
              </div>
            </div>
          </div>
        )}
        sider={sider}
        pageLoading
        >
        <span>Hello, Welcome to World of React!</span>
      </Layout>
    )
  }
}