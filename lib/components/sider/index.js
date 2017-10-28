'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = require('react-router-dom');

var _antd = require('antd');

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ------------------------------------
// Component -- Sider
// ------------------------------------
var SubMenu = _antd.Menu.SubMenu;

var Sider = function (_PureComponent) {
  (0, _inherits3.default)(Sider, _PureComponent);

  function Sider(props) {
    (0, _classCallCheck3.default)(this, Sider);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Sider.__proto__ || (0, _getPrototypeOf2.default)(Sider)).call(this, props));

    _this.state = {
      collapsed: false
    };
    return _this;
  }

  (0, _createClass3.default)(Sider, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          location = _props.location,
          menuSubs = _props.menuSubs;
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
          _react2.default.createElement(_antd.Icon, { type: this.state.collapsed ? 'menu-unfold' : 'menu-fold' })
        ),
        _react2.default.createElement(
          _antd.Menu,
          {
            mode: 'inline',
            theme: 'dark',
            inlineCollapsed: this.state.collapsed,
            defaultOpenKeys: [pathMatch && pathMatch[2]],
            selectedKeys: [pathname.toLowerCase()]
          },
          menuSubs && _lodash2.default.keys(menuSubs).map(function (item, i) {
            var _menuSubs$item = menuSubs[item],
                key = _menuSubs$item.key,
                name = _menuSubs$item.name,
                icon = _menuSubs$item.icon,
                data = _menuSubs$item.data,
                path = _menuSubs$item.path;

            return _lodash2.default.has(menuSubs[item], 'data') && data.length > 0 ? _this2.renderSubMenu(key, name, icon, data, pathname.toLowerCase()) : _react2.default.createElement(
              _antd.Menu.Item,
              { key: '/' + (key === 'home' ? '' : key) },
              _react2.default.createElement(
                _reactRouterDom.Link,
                { to: '/' + (key === 'home' ? '' : key) },
                _react2.default.createElement(_antd.Icon, { type: '' + icon }),
                _react2.default.createElement(
                  'span',
                  null,
                  name
                )
              )
            );
          })
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
            _react2.default.createElement(_antd.Icon, { type: icon || 'appstore' }),
            _react2.default.createElement(
              'span',
              null,
              name
            )
          ) },
        data.map(function (item, i) {
          return _react2.default.createElement(
            _antd.Menu.Item,
            { key: '/' + item.path + '/' + item.key },
            _react2.default.createElement(
              _reactRouterDom.Link,
              { to: '/' + item.path + '/' + item.key },
              _react2.default.createElement(_antd.Icon, { type: '/' + item.path + '/' + item.key === pathname ? 'right-square-o' : 'right-square' }),
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
}(_react.PureComponent);

Sider.propTypes = {
  location: _propTypes2.default.object,
  menuSubs: _propTypes2.default.object
};
Sider.defaultProps = {
  location: null,
  menuSubs: null
};
exports.default = Sider;