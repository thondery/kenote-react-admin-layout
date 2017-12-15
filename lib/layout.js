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

var _permission = require('./permission');

var _permission2 = _interopRequireDefault(_permission);

var _breadcrumb = require('./breadcrumb');

var _breadcrumb2 = _interopRequireDefault(_breadcrumb);

require('../styles/layout.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CoreLayout = (_temp = _class = function (_PureComponent) {
  _inherits(CoreLayout, _PureComponent);

  function CoreLayout(props) {
    _classCallCheck(this, CoreLayout);

    var _this = _possibleConstructorReturn(this, (CoreLayout.__proto__ || Object.getPrototypeOf(CoreLayout)).call(this, props));

    _this._loadingView = null;
    return _this;
  }

  _createClass(CoreLayout, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      var pageLoading = this.props.pageLoading;

      pageLoading && setTimeout(function () {
        _this2._loadingView.style.width = '100%';
        setTimeout(function () {
          _this2._loadingView.style.opacity = 0;
        }, 1200);
      }, 0);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props = this.props,
          children = _props.children,
          auth = _props.auth,
          pageCode = _props.pageCode,
          header = _props.header,
          sider = _props.sider,
          breadcrumb = _props.breadcrumb,
          pageLoading = _props.pageLoading;

      var permissionView = this.renderPermission();
      return _react2.default.createElement(
        'div',
        { className: 'layout-warpper', style: { flexDirection: 'column' } },
        header,
        _react2.default.createElement(
          'div',
          { className: 'layout-warpper' },
          sider,
          _react2.default.createElement(
            _permission2.default,
            {
              className: 'layout-page-container',
              pageCode: pageCode,
              flag: auth && auth.group.flag || [],
              viewComponent: permissionView },
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(_breadcrumb2.default, { data: breadcrumb }),
              children
            ),
            pageLoading && _react2.default.createElement('div', {
              className: 'layout-page-loading',
              ref: function ref(view) {
                return _this3._loadingView = view;
              },
              style: { width: '0%' }
            })
          )
        )
      );
    }
  }, {
    key: 'renderPermission',
    value: function renderPermission() {
      var _this4 = this;

      var permissionView = this.props.permissionView;

      return _react2.default.createElement(
        'div',
        { className: 'layout-page-container', style: { padding: 0, overflow: 'hidden' } },
        permissionView ? permissionView : _react2.default.createElement(
          'div',
          { className: 'layout-page-not-found' },
          _react2.default.createElement(
            'div',
            { className: 'page-not-found' },
            _react2.default.createElement(
              'h1',
              null,
              '401'
            ),
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'h2',
                null,
                'The page is not allowed.'
              )
            )
          )
        ),
        _react2.default.createElement('div', {
          className: 'layout-page-loading',
          ref: function ref(view) {
            return _this4._loadingView = view;
          },
          style: { width: '0%' }
        })
      );
    }
  }]);

  return CoreLayout;
}(_react.PureComponent), _class.propTypes = {
  children: _propTypes2.default.node,
  pageCode: _propTypes2.default.string,
  auth: _propTypes2.default.object,
  header: _propTypes2.default.element,
  sider: _propTypes2.default.element,
  breadcrumb: _propTypes2.default.array,
  pageLoading: _propTypes2.default.bool,
  permissionView: _propTypes2.default.element
}, _class.defaultProps = {
  children: null,
  pageCode: 'none',
  auth: null,
  header: null,
  sider: null,
  breadcrumb: null,
  pageLoading: false,
  permissionView: null
}, _temp);
exports.default = CoreLayout;