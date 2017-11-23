'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Permission = (_temp = _class = function (_PureComponent) {
  _inherits(Permission, _PureComponent);

  function Permission() {
    _classCallCheck(this, Permission);

    return _possibleConstructorReturn(this, (Permission.__proto__ || Object.getPrototypeOf(Permission)).apply(this, arguments));
  }

  _createClass(Permission, [{
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
}(_react.PureComponent), _class.propTypes = {
  className: _propTypes2.default.string,
  style: _propTypes2.default.object,
  pageCode: _propTypes2.default.string.isRequired,
  flag: _propTypes2.default.arrayOf(_propTypes2.default.string),
  children: _propTypes2.default.any,
  viewComponent: _propTypes2.default.element
}, _class.defaultProps = {
  className: null,
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
}, _temp);
exports.default = Permission;