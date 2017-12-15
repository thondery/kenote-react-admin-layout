'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dropdown = require('antd/lib/dropdown');

var _dropdown2 = _interopRequireDefault(_dropdown);

var _menu = require('antd/lib/menu');

var _menu2 = _interopRequireDefault(_menu);

require('antd/lib/dropdown/style/css');

require('antd/lib/menu/style/css');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('../../styles/menu.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var name = _ref.name,
      data = _ref.data,
      onPressItem = _ref.onPressItem;

  var menuPanel = _react2.default.createElement(
    _menu2.default,
    {
      className: 'app-header-menu',
      onClick: onPressItem
    },
    data && data.map(function (item, i) {
      return item.type === 'driver' ? _react2.default.createElement(_menu2.default.Divider, { key: i, className: 'app-header-menu-driver' }) : _react2.default.createElement(
        _menu2.default.Item,
        { key: item.key, className: 'app-header-menu-span' },
        _react2.default.createElement(
          'span',
          null,
          item.name
        )
      );
    })
  );
  return _react2.default.createElement(
    _dropdown2.default,
    {
      overlay: menuPanel
    },
    _react2.default.createElement(
      'div',
      { className: 'app-header-link-div' },
      _react2.default.createElement(
        'a',
        { className: 'app-header-link' },
        _react2.default.createElement(
          'span',
          null,
          name
        )
      )
    )
  );
};