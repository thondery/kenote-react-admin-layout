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

require('../../styles/menu.scss');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var name = _ref.name,
      data = _ref.data,
      onPressItem = _ref.onPressItem;

  var menuPanel = _react2.default.createElement(
    _menu2.default,
    {
      className: 'app-header-menu app-header-menu-userpanel',
      onClick: onPressItem
    },
    data && data.map(function (item, i) {
      if (item.type === 'driver') {
        return _react2.default.createElement(_menu2.default.Divider, { key: i, className: 'app-header-menu-userpanel-driver' });
      } else if (item.type === 'quit') {
        return _react2.default.createElement(
          _menu2.default.Item,
          { key: item.key, className: 'app-header-menu-userpanel-span' },
          _react2.default.createElement(
            'span',
            null,
            item.name
          )
        );
      } else {
        return _react2.default.createElement(
          _menu2.default.Item,
          { key: item.key, className: 'app-header-menu-userpanel-item', direction: 'column' },
          item.icon,
          _react2.default.createElement(
            'span',
            null,
            item.name
          )
        );
      }
    })
  );
  return _react2.default.createElement(
    _dropdown2.default,
    {
      overlay: menuPanel,
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
          name
        )
      )
    )
  );
};