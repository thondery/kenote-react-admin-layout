import React, { PureComponent } from 'react'
import { Menu, Dropdown } from 'antd'
import '../../styles/menu.scss'

export default class NormalCell extends PureComponent {

  render () {
    const { name, data } = this.props
    const menuPanel = (
      <Menu className="app-header-menu">
        {data && data.map( (item, i) => {
          return item.type === 'driver' ? (
            <Menu.Divider key={i} />
          ) : (
            <Menu.Item key={i} className={'app-header-menu-span'} >
              <span>{item.name}</span>
            </Menu.Item>
          )
        })}
      </Menu>
    )
    return (
      <Dropdown 
        overlay={menuPanel}
        >
        <div className={'app-header-link-div'} >
          <a className={'app-header-link'}>
            <span>{name}</span>
          </a>
        </div>
      </Dropdown>
    )
  }
}