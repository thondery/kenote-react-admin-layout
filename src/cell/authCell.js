import React, { PureComponent } from 'react'
import { Menu, Dropdown } from 'antd'
//import '../../styles/header.scss'
import '../../styles/menu.scss'

export default class AuthCell extends PureComponent {

  render () {
    const { name, data } = this.props
    const menuPanel = (
      <Menu className="app-header-menu app-header-menu-userpanel">
        {data && data.map( (item, i) => {
          if (item.type === 'driver') {
            return (
              <Menu.Divider key={i} className="app-header-menu-userpanel-driver" />
            )
          }
          else if (item.type === 'quit') {
            return (
              <Menu.Item key={i}  className={'app-header-menu-userpanel-span'} >
                <span>{item.name}</span>
              </Menu.Item>
            )
          }
          else {
            return (
              <Menu.Item key={i}  className={'app-header-menu-userpanel-item'} direction="column" >
                {item.icon}
                <span>{item.name}</span>
              </Menu.Item>
            )
          }
        })}
      </Menu>
    )
    return (
      <Dropdown 
        overlay={menuPanel}
        getPopupContainer={() => document.getElementById('app-header-userpanel')}
        >
        <div id="app-header-userpanel"
          className={'app-header-link-div'} >
          <a className={'app-header-link'}>
            <span>{name}</span>
          </a>
        </div>
      </Dropdown>
    )
  }
}