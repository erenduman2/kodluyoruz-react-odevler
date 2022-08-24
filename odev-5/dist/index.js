function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };
  return _extends.apply(this, arguments);
}

var styles = {"test":"_3ybTi","primary":"_3ljpl","default":"_3UK6o","dashed":"_27xYC","text":"_5bXm4","link":"_71S8l"};

var Button = function Button(props) {
  if (props.type == "primary") {
    return /*#__PURE__*/React.createElement("button", _extends({}, props, {
      className: styles.primary
    }), props.text);
  }

  if (props.type == "default") {
    return /*#__PURE__*/React.createElement("button", _extends({}, props, {
      className: styles["default"]
    }), props.text);
  }

  if (props.type == "dashed") {
    return /*#__PURE__*/React.createElement("button", _extends({}, props, {
      className: styles.dashed
    }), props.text);
  }

  if (props.type == "text") {
    return /*#__PURE__*/React.createElement("button", _extends({}, props, {
      className: styles.text
    }), props.text);
  }

  if (props.type == "link") {
    return /*#__PURE__*/React.createElement("button", _extends({}, props, {
      className: styles.link
    }), props.text);
  }
};

exports.Button = Button;
//# sourceMappingURL=index.js.map
