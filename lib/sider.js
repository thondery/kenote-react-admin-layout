'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _icon = require('antd/lib/icon');

var _icon2 = _interopRequireDefault(_icon);

var _menu = require('antd/lib/menu');

var _menu2 = _interopRequireDefault(_menu);

var _has2 = require('lodash/has');

var _has3 = _interopRequireDefault(_has2);

var _keys2 = require('lodash/keys');

var _keys3 = _interopRequireDefault(_keys2);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

require('antd/lib/icon/style/css');

require('antd/lib/menu/style/css');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = require('react-router-dom');

var _antd = require('antd');

require('../styles/sider.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SubMenu = _menu2.default.SubMenu;
var Sider = (_temp = _class = function (_PureComponent) {
  _inherits(Sider, _PureComponent);

  function Sider(props) {
    _classCallCheck(this, Sider);

    var _this = _possibleConstructorReturn(this, (Sider.__proto__ || Object.getPrototypeOf(Sider)).call(this, props));

    _this.state = {
      collapsed: false
    };
    return _this;
  }

  _createClass(Sider, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          location = _props.location,
          menuSubs = _props.menuSubs,
          footer = _props.footer;
      var pathname = location.pathname;

      var pathMatch = pathname.match(/^(\/)([a-z\-]+)/);
      return _react2.default.createElement(
        'div',
        { className: 'layout-sider',
          style: this.state.collapsed ? { flex: '0 0 64px' } : null },
        _react2.default.createElement(
          'div',
          { className: 'menu-collapsed',
            onClick: function onClick() {
              return _this2.setState({ collapsed: !_this2.state.collapsed });
            } },
          _react2.default.createElement(_icon2.default, { type: this.state.collapsed ? 'menu-unfold' : 'menu-fold' })
        ),
        _react2.default.createElement(
          'div',
          { className: 'menu-bodyer' },
          _react2.default.createElement(
            _menu2.default,
            {
              mode: 'inline',
              theme: 'dark',
              inlineCollapsed: this.state.collapsed,
              defaultOpenKeys: [pathMatch && pathMatch[2]],
              selectedKeys: [pathname.toLowerCase()]
            },
            menuSubs && (0, _keys3.default)(menuSubs).map(function (item, i) {
              var _menuSubs$item = menuSubs[item],
                  key = _menuSubs$item.key,
                  name = _menuSubs$item.name,
                  icon = _menuSubs$item.icon,
                  data = _menuSubs$item.data,
                  path = _menuSubs$item.path;

              return (0, _has3.default)(menuSubs[item], 'data') && data.length > 0 ? _this2.renderSubMenu(key, name, icon, data, pathname.toLowerCase()) : _react2.default.createElement(
                _menu2.default.Item,
                { key: '/' + (key === 'home' ? '' : key) },
                _react2.default.createElement(
                  _reactRouterDom.Link,
                  { to: '/' + (key === 'home' ? '' : key) },
                  icon,
                  _react2.default.createElement(
                    'span',
                    null,
                    name
                  )
                )
              );
            })
          )
        ),
        footer && _react2.default.createElement(
          'div',
          { className: 'menu-footer' },
          footer(this.state.collapsed)
        )
      );
    }
  }, {
    key: 'renderSubMenu',
    value: function renderSubMenu(key, name, icon, data, pathname) {
      return _react2.default.createElement(
        SubMenu,
        {
          key: key,
          title: _react2.default.createElement(
            'span',
            null,
            icon,
            _react2.default.createElement(
              'span',
              null,
              name
            )
          ) },
        data.map(function (item, i) {
          return _react2.default.createElement(
            _menu2.default.Item,
            { key: '/' + item.path + '/' + item.key },
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: '/' + item.path + '/' + item.key },
              _react2.default.createElement(
                'span',
                null,
                item.name
              )
            )
          );
        })
      );
    }
  }]);

  return Sider;
}(_react.PureComponent), _class.propTypes = {
  location: _propTypes2.default.object,
  menuSubs: _propTypes2.default.object,
  footer: _propTypes2.default.func
}, _class.defaultProps = {
  location: null,
  menuSubs: null,
  footer: function footer(collapsed) {
    return _react2.default.createElement(
      'a',
      { href: 'https://github.com/thondery', target: '_blank' },
      _react2.default.createElement(_icon2.default, { type: 'github', style: !collapsed ? { fontSize: '16px' } : null }),
      !collapsed && _react2.default.createElement(
        'span',
        null,
        'github/thondery'
      )
    );
  }
}, _temp);
exports.default = Sider;