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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ------------------------------------
// Component -- Permission
// ------------------------------------
var Permission = function (_PureComponent) {
  (0, _inherits3.default)(Permission, _PureComponent);

  function Permission() {
    (0, _classCallCheck3.default)(this, Permission);
    return (0, _possibleConstructorReturn3.default)(this, (Permission.__proto__ || (0, _getPrototypeOf2.default)(Permission)).apply(this, arguments));
  }

  (0, _createClass3.default)(Permission, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          flag = _props.flag,
          children = _props.children,
          pageCode = _props.pageCode,
          viewComponent = _props.viewComponent,
          className = _props.className,
          style = _props.style;

      return _react2.default.createElement(
        'div',
        { className: className, style: style },
        flag.indexOf(pageCode) > -1 || pageCode === 'none' ? children : viewComponent
      );
    }
  }]);
  return Permission;
}(_react.PureComponent);

Permission.propTypes = {
  className: _propTypes2.default.string,
  style: _propTypes2.default.object,
  pageCode: _propTypes2.default.string.isRequired,
  flag: _propTypes2.default.arrayOf(_propTypes2.default.string),
  children: _propTypes2.default.element,
  viewComponent: _propTypes2.default.element
};
Permission.defaultProps = {
  className: 'app-layout-body',
  style: null,
  flag: [],
  children: null,
  viewComponent: _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h1',
      null,
      'Page Not Permission.'
    )
  )
};
exports.default = Permission;