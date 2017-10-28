// ------------------------------------
// Component -- Header
// ------------------------------------
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './style.scss'
import { Dropdown, Menu, Icon, Tag, Badge, Input, Layout } from 'antd'
import classnames from 'classnames'
import { Link } from 'react-router-dom'

export default class Header extends PureComponent {
  
  static propTypes = {
    auth: PropTypes.object,
    menu: PropTypes.object,
    onPressItem: PropTypes.func
  }
  
  static defaultProps = {
    auth: null,
    menu: {
      user: null
    },
    onPressItem: () => null
  }

  constructor (props) {
    super(props)
    //this.handleClick = this.handleClick.bind(this)
  }
  
  render() {
    const { auth, menus, onPressItem } = this.props
    const userMenu = menus.user
    const userPanel = (
      <Menu 
        className={classnames('app-header-menu', 'app-header-menu-userpanel')}
        onClick={ (e) => onPressItem(e) } >
        {userMenu && userMenu.map( (item, i) => 
          <Menu.Item 
            key={item.key}
            className={'app-header-menu-userpanel-item'} 
            direction="column">
            <i className={`fa fa-${item.icon}`} />
            <span>{item.name}</span>
          </Menu.Item>
        )}
        <Menu.Divider className={'app-header-menu-userpanel-driver'} />
        <Menu.Item key={'9999'} className={'app-header-menu-userpanel-span'} >
          <span>退出管理控制台</span>
        </Menu.Item>
      </Menu>
    )
    
    return (
      <div className={'layout-header'}>
        <div className={'app-header-start'}>
          <Link to={'/'} className={classnames('app-header-link', 'app-header-logo')}>
            <img src={require('../../../assets/images/Icon-60@2x.png')} />
          </Link>
          <Link to={'/'} className={classnames('app-header-link', 'app-header-dashboard')}>
            <span>管理控制台</span>
          </Link>
        </div>
        <div className={'app-header-end'}>
          <Dropdown 
            overlay={userPanel}
            getPopupContainer={() => document.getElementById('app-header-userpanel')}
            >
            <div id="app-header-userpanel"
              className={'app-header-link-div'} >
              <a className={'app-header-link'}>
                <span>{auth && auth.username || ''}</span>
              </a>
            </div>
          </Dropdown>
        </div>
      </div>
    )
  }
}