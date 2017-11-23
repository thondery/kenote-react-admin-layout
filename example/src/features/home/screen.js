// ------------------------------------
// Screen -- Home
// ------------------------------------
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { rootActions } from 'reduxs'
import CoreLayout from 'containers/layout'

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
    const options = {
      location,
      pageCode: '1001',
      breadcrumb: [
        { name: '主页',       link: `/` },
        { name: '帐号管理',    link: `/admins` },
        { name: '用户管理' }
      ]
    }
    return (
      <CoreLayout {...options}>
        <span>Hello, Welcome to World of React!</span>
      </CoreLayout>
    )
  }
}