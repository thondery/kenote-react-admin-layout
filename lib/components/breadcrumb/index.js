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

var _reactRouterDom = require('react-router-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ------------------------------------
// Component -- LayoutBreadcrumb
// ------------------------------------
var LayoutBreadcrumb = function (_PureComponent) {
  (0, _inherits3.default)(LayoutBreadcrumb, _PureComponent);

  function LayoutBreadcrumb() {
    (0, _classCallCheck3.default)(this, LayoutBreadcrumb);
    return (0, _possibleConstructorReturn3.default)(this, (LayoutBreadcrumb.__proto__ || (0, _getPrototypeOf2.default)(LayoutBreadcrumb)).apply(this, arguments));
  }

  (0, _createClass3.default)(LayoutBreadcrumb, [{
    key: 'render',
    value: function render() {
      var data = this.props.data;

      return data ? _react2.default.createElement(
        _antd.Breadcrumb,
        null,
        data.map(function (item, i) {
          return _react2.default.createElement(
            _antd.Breadcrumb.Item,
            null,
            item.link ? _react2.default.createElement(
              _reactRouterDom.Link,
              { to: item.link },
              item.name
            ) : item.name
          );
        })
      ) : null;
    }
  }]);
  return LayoutBreadcrumb;
}(_react.PureComponent);

LayoutBreadcrumb.propTypes = {
  data: _propTypes2.default.array
};
LayoutBreadcrumb.defaultProps = {
  data: null
};
exports.default = LayoutBreadcrumb;