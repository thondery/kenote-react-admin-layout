import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Dropdown, Menu, Icon, Tag, Badge, Input, Layout } from 'antd'
import { Link } from 'react-router-dom'
import '../styles/header.scss'
import { AuthCell, NormalCell } from './cell'
import _ from 'lodash'

export default class Header extends PureComponent {
  
  static propTypes = {
    auth: PropTypes.object,
    menus: PropTypes.array,
    onPressItem: PropTypes.func,
    logoSource: PropTypes.any,
    titleName: PropTypes.string
  }
  
  static defaultProps = {
    auth: null,
    menus: null,
    onPressItem: () => null,
    logoSource: require('../assets/images/Icon-60@2x.png'),
    titleName: '管理控制台'
  }

  constructor (props) {
    super(props)
  }
  
  render() {
    const { auth, menus, onPressItem, logoSource, titleName } = this.props
    return (
      <div className={'layout-header'}>
        <div className={'app-header-start'}>
          <Link to={'/'} className="app-header-link app-header-logo">
            <img src={logoSource} />
          </Link>
          <Link to={'/'} className="app-header-link app-header-dashboard">
            <span>{titleName}</span>
          </Link>
        </div>
        <div className={'app-header-end'}>
          {menus && menus.map( (item, i) => {
            let { key, name, data } = item
            if (item.key === 'auth') {
              return (
                <AuthCell {...{ key, name, data, onPressItem }} />
              )
            }
            else if (item.key === 'message') {
              //
            }
            else if (item.key === 'search') {
              //
            }
            else {
              return (
                <NormalCell {...{ key, name, data, onPressItem }} />
              )
            }
          })}
        </div>
      </div>
    )
  }
}

export const getMenuList = (menus) => {
  let list = []
  for (let e of menus) {
    if (_.has(e, 'data')) {
      list = _.concat(list, e.data)
    }
  }
  list = _.filter(list, o => _.has(o, 'key'))
  return list
}