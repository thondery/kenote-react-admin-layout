'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMenuList = exports.default = undefined;

var _filter2 = require('lodash/filter');

var _filter3 = _interopRequireDefault(_filter2);

var _concat2 = require('lodash/concat');

var _concat3 = _interopRequireDefault(_concat2);

var _has2 = require('lodash/has');

var _has3 = _interopRequireDefault(_has2);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _antd = require('antd');

var _reactRouterDom = require('react-router-dom');

require('../styles/header.css');

var _cell = require('./cell');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = (_temp = _class = function (_PureComponent) {
  _inherits(Header, _PureComponent);

  function Header(props) {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          auth = _props.auth,
          menus = _props.menus,
          onPressItem = _props.onPressItem,
          logoSource = _props.logoSource,
          titleName = _props.titleName;

      return _react2.default.createElement(
        'div',
        { className: 'layout-header' },
        _react2.default.createElement(
          'div',
          { className: 'app-header-start' },
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '/', className: 'app-header-link app-header-logo' },
            _react2.default.createElement('img', { src: logoSource })
          ),
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: '/', className: 'app-header-link app-header-dashboard' },
            _react2.default.createElement(
              'span',
              null,
              titleName
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'app-header-end' },
          menus && menus.map(function (item, i) {
            var key = item.key,
                name = item.name,
                data = item.data,
                onPress = item.onPress;

            if (!data) {
              return _react2.default.createElement(
                'div',
                { className: 'app-header-link-div', key: key, onClick: onPress },
                _react2.default.createElement(
                  'a',
                  { className: 'app-header-link' },
                  _react2.default.createElement(
                    'span',
                    null,
                    name
                  )
                )
              );
            }
            if (item.key === 'auth') {
              return _react2.default.createElement(_cell.AuthCell, { key: key, name: name, data: data, onPressItem: onPressItem });
            } else if (item.key === 'message') {
              //
            } else if (item.key === 'search') {
              //
            } else if ((0, _has3.default)(data, 'component')) {
              return _react2.default.createElement(
                'div',
                { className: 'app-header-link-div', key: key, onClick: onPress },
                _react2.default.createElement(
                  'a',
                  { className: 'app-header-link' },
                  data.component
                )
              );
            } else {
              return _react2.default.createElement(_cell.NormalCell, { key: key, name: name, data: data, onPressItem: onPressItem });
            }
          })
        )
      );
    }
  }]);

  return Header;
}(_react.PureComponent), _class.propTypes = {
  auth: _propTypes2.default.object,
  menus: _propTypes2.default.array,
  onPressItem: _propTypes2.default.func,
  logoSource: _propTypes2.default.any,
  titleName: _propTypes2.default.string
}, _class.defaultProps = {
  auth: null,
  menus: null,
  onPressItem: function onPressItem() {
    return null;
  },
  logoSource: require('../assets/images/Icon-60@2x.png'),
  titleName: '管理控制台'
}, _temp);
exports.default = Header;
var getMenuList = exports.getMenuList = function getMenuList(menus) {
  var list = [];
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = menus[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var e = _step.value;

      if ((0, _has3.default)(e, 'data')) {
        list = (0, _concat3.default)(list, e.data);
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  list = (0, _filter3.default)(list, function (o) {
    return (0, _has3.default)(o, 'key');
  });
  return list;
};