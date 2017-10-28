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

var _antd = require('antd');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactRouterDom = require('react-router-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function (_PureComponent) {
  (0, _inherits3.default)(Header, _PureComponent);

  function Header(props) {
    (0, _classCallCheck3.default)(this, Header);
    return (0, _possibleConstructorReturn3.default)(this, (Header.__proto__ || (0, _getPrototypeOf2.default)(Header)).call(this, props));
    //this.handleClick = this.handleClick.bind(this)
  }

  (0, _createClass3.default)(Header, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          auth = _props.auth,
          menus = _props.menus,
          onPressItem = _props.onPressItem;

      var userMenu = menus.user;
      var userPanel = _react2.default.createElement(
        _antd.Menu,
        {
          className: (0, _classnames2.default)('app-header-menu', 'app-header-menu-userpanel'),
          onClick: function onClick(e) {
            return onPressItem(e);
          } },
        userMenu && userMenu.map(function (item, i) {
          return _react2.default.createElement(
            _antd.Menu.Item,
            {
              key: item.key,
              className: 'app-header-menu-userpanel-item',
              direction: 'column' },
            _react2.default.createElement('i', { className: 'fa fa-' + item.icon }),
            _react2.default.createElement(
              'span',
              null,
              item.name
            )
          );
        }),
        _react2.default.createElement(_antd.Menu.Divider, { className: 'app-header-menu-userpanel-driver' }),
        _react2.default.createElement(
          _antd.Menu.Item,
          { key: '9999', className: 'app-header-menu-userpanel-span' },
          _react2.default.createElement(
            'span',
            null,
            '\u9000\u51FA\u7BA1\u7406\u63A7\u5236\u53F0'
          )
        )
      );

      return _react2.default.createElement(
        'div',
        { className: 'layout-header' },
        _react2.default.createElement(
          'div',
          { className: 'app-header-start' },
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '/', className: (0, _classnames2.default)('app-header-link', 'app-header-logo') },
            _react2.default.createElement('img', { src: require('../../../assets/images/Icon-60@2x.png') })
          ),
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '/', className: (0, _classnames2.default)('app-header-link', 'app-header-dashboard') },
            _react2.default.createElement(
              'span',
              null,
              '\u7BA1\u7406\u63A7\u5236\u53F0'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'app-header-end' },
          _react2.default.createElement(
            _antd.Dropdown,
            {
              overlay: userPanel,
              getPopupContainer: function getPopupContainer() {
                return document.getElementById('app-header-userpanel');
              }
            },
            _react2.default.createElement(
              'div',
              { id: 'app-header-userpanel',
                className: 'app-header-link-div' },
              _react2.default.createElement(
                'a',
                { className: 'app-header-link' },
                _react2.default.createElement(
                  'span',
                  null,
                  auth && auth.username || ''
                )
              )
            )
          )
        )
      );
    }
  }]);
  return Header;
}(_react.PureComponent); // ------------------------------------
// Component -- Header
// ------------------------------------


Header.propTypes = {
  auth: _propTypes2.default.object,
  menu: _propTypes2.default.object,
  onPressItem: _propTypes2.default.func
};
Header.defaultProps = {
  auth: null,
  menu: {
    user: null
  },
  onPressItem: function onPressItem() {
    return null;
  }
};
exports.default = Header;