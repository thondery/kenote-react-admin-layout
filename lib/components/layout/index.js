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

var _permission = require('../permission');

var _permission2 = _interopRequireDefault(_permission);

var _breadcrumb = require('../breadcrumb');

var _breadcrumb2 = _interopRequireDefault(_breadcrumb);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// ------------------------------------
// Component -- CoreLayout
// ------------------------------------
var CoreLayout = function (_PureComponent) {
  (0, _inherits3.default)(CoreLayout, _PureComponent);

  function CoreLayout(props) {
    (0, _classCallCheck3.default)(this, CoreLayout);

    var _this = (0, _possibleConstructorReturn3.default)(this, (CoreLayout.__proto__ || (0, _getPrototypeOf2.default)(CoreLayout)).call(this, props));

    _this.state = {};
    _this._loadingView = null;
    return _this;
  }

  (0, _createClass3.default)(CoreLayout, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      //console.log('start')
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      //console.log('end')
      setTimeout(function () {
        _this2._loadingView.style.width = '100%';
        _this2._loadingView.style.opacity = 0;
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
          breadcrumb = _props.breadcrumb;

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
            _react2.default.createElement('div', {
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

      return _react2.default.createElement(
        'div',
        { className: 'layout-page-container', style: { padding: 0, overflow: 'hidden' } },
        _react2.default.createElement(
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
}(_react.PureComponent);

CoreLayout.propTypes = {
  children: _propTypes2.default.node,
  pageCode: _propTypes2.default.string,
  auth: _propTypes2.default.object,
  header: _propTypes2.default.element,
  sider: _propTypes2.default.element,
  breadcrumb: _propTypes2.default.array
};
CoreLayout.defaultProps = {
  children: null,
  pageCode: 'none',
  auth: null,
  header: null,
  sider: null,
  breadcrumb: null
};
exports.default = CoreLayout;