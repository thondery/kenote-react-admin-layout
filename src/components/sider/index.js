// ------------------------------------
// Component -- Sider
// ------------------------------------
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './style.scss'
import { Link } from 'react-router-dom'
import { Menu, Icon, Button } from 'antd'
const SubMenu = Menu.SubMenu
import _ from 'lodash'

export default class Sider extends PureComponent {
  
  static propTypes = {
    location: PropTypes.object,
    menuSubs: PropTypes.object
  }
  
  static defaultProps = {
    location: null,
    menuSubs: null
  }

  state = {
    collapsed: false
  }
  
  constructor (props) {
    super(props)
  }
  
  render() {
    const { location, menuSubs } = this.props
    const { pathname } = location
    const pathMatch = pathname.match(/^(\/)([a-z\-]+)/)
    return (
      <div className={'layout-sider'} 
        style={this.state.collapsed ? { flex: '0 0 64px' } : null}>
        <div className={'menu-collapsed'} 
          onClick={() => this.setState({ collapsed: !this.state.collapsed })}>
          <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
        </div>
        <Menu
          mode={'inline'}
          theme={'dark'}
          inlineCollapsed={this.state.collapsed}
          defaultOpenKeys={[pathMatch && pathMatch[2]]}
          selectedKeys={[pathname.toLowerCase()]}
          >
          {menuSubs && _.keys(menuSubs).map( (item, i) => {
            let { key, name, icon, data, path } = menuSubs[item]
            return _.has(menuSubs[item], 'data') && data.length > 0
              ? this.renderSubMenu(key, name, icon, data, pathname.toLowerCase())
              : (
                <Menu.Item key={`/${key === 'home' ? '' : key}`}>
                  <Link to={`/${key === 'home' ? '' : key}`}>
                    <Icon type={`${icon}`} />
                    <span>{name}</span>
                  </Link>
                </Menu.Item>
              )
          })}
        </Menu>
      </div>
    )
  }
  
  renderSubMenu (key, name, icon, data, pathname) {
    return (
      <SubMenu
        key={key}
        title={<span><Icon type={icon || 'appstore'} /><span>{name}</span></span>} >
        {data.map( (item, i) => {
          return(
            <Menu.Item key={`/${item.path}/${item.key}`}>
              <Link to={`/${item.path}/${item.key}`}>
                <Icon type={`/${item.path}/${item.key}` === pathname ? `right-square-o` : `right-square`} />
                <span>{item.name}</span>
              </Link>
            </Menu.Item>
          )
        })}
      </SubMenu>
    )
  }
}