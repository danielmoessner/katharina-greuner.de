var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/@swc/helpers/lib/_interop_require_default.js
var require_interop_require_default = __commonJS({
  "node_modules/@swc/helpers/lib/_interop_require_default.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = _interopRequireDefault;
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
  }
});

// node_modules/@swc/helpers/lib/_object_without_properties_loose.js
var require_object_without_properties_loose = __commonJS({
  "node_modules/@swc/helpers/lib/_object_without_properties_loose.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = _objectWithoutPropertiesLoose;
    function _objectWithoutPropertiesLoose(source, excluded) {
      if (source == null)
        return {};
      var target = {};
      var sourceKeys = Object.keys(source);
      var key, i;
      for (i = 0; i < sourceKeys.length; i++) {
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0)
          continue;
        target[key] = source[key];
      }
      return target;
    }
  }
});

// node_modules/object-assign/index.js
var require_object_assign = __commonJS({
  "node_modules/object-assign/index.js"(exports, module) {
    "use strict";
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var propIsEnumerable = Object.prototype.propertyIsEnumerable;
    function toObject(val) {
      if (val === null || val === void 0) {
        throw new TypeError("Object.assign cannot be called with null or undefined");
      }
      return Object(val);
    }
    function shouldUseNative() {
      try {
        if (!Object.assign) {
          return false;
        }
        var test1 = new String("abc");
        test1[5] = "de";
        if (Object.getOwnPropertyNames(test1)[0] === "5") {
          return false;
        }
        var test2 = {};
        for (var i = 0; i < 10; i++) {
          test2["_" + String.fromCharCode(i)] = i;
        }
        var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
          return test2[n];
        });
        if (order2.join("") !== "0123456789") {
          return false;
        }
        var test3 = {};
        "abcdefghijklmnopqrst".split("").forEach(function(letter) {
          test3[letter] = letter;
        });
        if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
          return false;
        }
        return true;
      } catch (err) {
        return false;
      }
    }
    module.exports = shouldUseNative() ? Object.assign : function(target, source) {
      var from;
      var to = toObject(target);
      var symbols;
      for (var s = 1; s < arguments.length; s++) {
        from = Object(arguments[s]);
        for (var key in from) {
          if (hasOwnProperty.call(from, key)) {
            to[key] = from[key];
          }
        }
        if (getOwnPropertySymbols) {
          symbols = getOwnPropertySymbols(from);
          for (var i = 0; i < symbols.length; i++) {
            if (propIsEnumerable.call(from, symbols[i])) {
              to[symbols[i]] = from[symbols[i]];
            }
          }
        }
      }
      return to;
    };
  }
});

// node_modules/react/cjs/react.development.js
var require_react_development = __commonJS({
  "node_modules/react/cjs/react.development.js"(exports) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        var _assign = require_object_assign();
        var ReactVersion = "17.0.2";
        var REACT_ELEMENT_TYPE = 60103;
        var REACT_PORTAL_TYPE = 60106;
        exports.Fragment = 60107;
        exports.StrictMode = 60108;
        exports.Profiler = 60114;
        var REACT_PROVIDER_TYPE = 60109;
        var REACT_CONTEXT_TYPE = 60110;
        var REACT_FORWARD_REF_TYPE = 60112;
        exports.Suspense = 60113;
        var REACT_SUSPENSE_LIST_TYPE = 60120;
        var REACT_MEMO_TYPE = 60115;
        var REACT_LAZY_TYPE = 60116;
        var REACT_BLOCK_TYPE = 60121;
        var REACT_SERVER_BLOCK_TYPE = 60122;
        var REACT_FUNDAMENTAL_TYPE = 60117;
        var REACT_SCOPE_TYPE = 60119;
        var REACT_OPAQUE_ID_TYPE = 60128;
        var REACT_DEBUG_TRACING_MODE_TYPE = 60129;
        var REACT_OFFSCREEN_TYPE = 60130;
        var REACT_LEGACY_HIDDEN_TYPE = 60131;
        if (typeof Symbol === "function" && Symbol.for) {
          var symbolFor = Symbol.for;
          REACT_ELEMENT_TYPE = symbolFor("react.element");
          REACT_PORTAL_TYPE = symbolFor("react.portal");
          exports.Fragment = symbolFor("react.fragment");
          exports.StrictMode = symbolFor("react.strict_mode");
          exports.Profiler = symbolFor("react.profiler");
          REACT_PROVIDER_TYPE = symbolFor("react.provider");
          REACT_CONTEXT_TYPE = symbolFor("react.context");
          REACT_FORWARD_REF_TYPE = symbolFor("react.forward_ref");
          exports.Suspense = symbolFor("react.suspense");
          REACT_SUSPENSE_LIST_TYPE = symbolFor("react.suspense_list");
          REACT_MEMO_TYPE = symbolFor("react.memo");
          REACT_LAZY_TYPE = symbolFor("react.lazy");
          REACT_BLOCK_TYPE = symbolFor("react.block");
          REACT_SERVER_BLOCK_TYPE = symbolFor("react.server.block");
          REACT_FUNDAMENTAL_TYPE = symbolFor("react.fundamental");
          REACT_SCOPE_TYPE = symbolFor("react.scope");
          REACT_OPAQUE_ID_TYPE = symbolFor("react.opaque.id");
          REACT_DEBUG_TRACING_MODE_TYPE = symbolFor("react.debug_trace_mode");
          REACT_OFFSCREEN_TYPE = symbolFor("react.offscreen");
          REACT_LEGACY_HIDDEN_TYPE = symbolFor("react.legacy_hidden");
        }
        var MAYBE_ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
        var FAUX_ITERATOR_SYMBOL = "@@iterator";
        function getIteratorFn(maybeIterable) {
          if (maybeIterable === null || typeof maybeIterable !== "object") {
            return null;
          }
          var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
          if (typeof maybeIterator === "function") {
            return maybeIterator;
          }
          return null;
        }
        var ReactCurrentDispatcher = {
          current: null
        };
        var ReactCurrentBatchConfig = {
          transition: 0
        };
        var ReactCurrentOwner = {
          current: null
        };
        var ReactDebugCurrentFrame = {};
        var currentExtraStackFrame = null;
        function setExtraStackFrame(stack) {
          {
            currentExtraStackFrame = stack;
          }
        }
        {
          ReactDebugCurrentFrame.setExtraStackFrame = function(stack) {
            {
              currentExtraStackFrame = stack;
            }
          };
          ReactDebugCurrentFrame.getCurrentStack = null;
          ReactDebugCurrentFrame.getStackAddendum = function() {
            var stack = "";
            if (currentExtraStackFrame) {
              stack += currentExtraStackFrame;
            }
            var impl = ReactDebugCurrentFrame.getCurrentStack;
            if (impl) {
              stack += impl() || "";
            }
            return stack;
          };
        }
        var IsSomeRendererActing = {
          current: false
        };
        var ReactSharedInternals = {
          ReactCurrentDispatcher,
          ReactCurrentBatchConfig,
          ReactCurrentOwner,
          IsSomeRendererActing,
          assign: _assign
        };
        {
          ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame;
        }
        function warn(format) {
          {
            for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
              args[_key - 1] = arguments[_key];
            }
            printWarning("warn", format, args);
          }
        }
        function error(format) {
          {
            for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
              args[_key2 - 1] = arguments[_key2];
            }
            printWarning("error", format, args);
          }
        }
        function printWarning(level, format, args) {
          {
            var ReactDebugCurrentFrame2 = ReactSharedInternals.ReactDebugCurrentFrame;
            var stack = ReactDebugCurrentFrame2.getStackAddendum();
            if (stack !== "") {
              format += "%s";
              args = args.concat([stack]);
            }
            var argsWithFormat = args.map(function(item) {
              return "" + item;
            });
            argsWithFormat.unshift("Warning: " + format);
            Function.prototype.apply.call(console[level], console, argsWithFormat);
          }
        }
        var didWarnStateUpdateForUnmountedComponent = {};
        function warnNoop(publicInstance, callerName) {
          {
            var _constructor = publicInstance.constructor;
            var componentName = _constructor && (_constructor.displayName || _constructor.name) || "ReactClass";
            var warningKey = componentName + "." + callerName;
            if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
              return;
            }
            error("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", callerName, componentName);
            didWarnStateUpdateForUnmountedComponent[warningKey] = true;
          }
        }
        var ReactNoopUpdateQueue = {
          isMounted: function(publicInstance) {
            return false;
          },
          enqueueForceUpdate: function(publicInstance, callback, callerName) {
            warnNoop(publicInstance, "forceUpdate");
          },
          enqueueReplaceState: function(publicInstance, completeState, callback, callerName) {
            warnNoop(publicInstance, "replaceState");
          },
          enqueueSetState: function(publicInstance, partialState, callback, callerName) {
            warnNoop(publicInstance, "setState");
          }
        };
        var emptyObject = {};
        {
          Object.freeze(emptyObject);
        }
        function Component(props, context, updater) {
          this.props = props;
          this.context = context;
          this.refs = emptyObject;
          this.updater = updater || ReactNoopUpdateQueue;
        }
        Component.prototype.isReactComponent = {};
        Component.prototype.setState = function(partialState, callback) {
          if (!(typeof partialState === "object" || typeof partialState === "function" || partialState == null)) {
            {
              throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
            }
          }
          this.updater.enqueueSetState(this, partialState, callback, "setState");
        };
        Component.prototype.forceUpdate = function(callback) {
          this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
        };
        {
          var deprecatedAPIs = {
            isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
            replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
          };
          var defineDeprecationWarning = function(methodName, info) {
            Object.defineProperty(Component.prototype, methodName, {
              get: function() {
                warn("%s(...) is deprecated in plain JavaScript React classes. %s", info[0], info[1]);
                return void 0;
              }
            });
          };
          for (var fnName in deprecatedAPIs) {
            if (deprecatedAPIs.hasOwnProperty(fnName)) {
              defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
            }
          }
        }
        function ComponentDummy() {
        }
        ComponentDummy.prototype = Component.prototype;
        function PureComponent(props, context, updater) {
          this.props = props;
          this.context = context;
          this.refs = emptyObject;
          this.updater = updater || ReactNoopUpdateQueue;
        }
        var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
        pureComponentPrototype.constructor = PureComponent;
        _assign(pureComponentPrototype, Component.prototype);
        pureComponentPrototype.isPureReactComponent = true;
        function createRef() {
          var refObject = {
            current: null
          };
          {
            Object.seal(refObject);
          }
          return refObject;
        }
        function getWrappedName(outerType, innerType, wrapperName) {
          var functionName = innerType.displayName || innerType.name || "";
          return outerType.displayName || (functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName);
        }
        function getContextName(type) {
          return type.displayName || "Context";
        }
        function getComponentName(type) {
          if (type == null) {
            return null;
          }
          {
            if (typeof type.tag === "number") {
              error("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue.");
            }
          }
          if (typeof type === "function") {
            return type.displayName || type.name || null;
          }
          if (typeof type === "string") {
            return type;
          }
          switch (type) {
            case exports.Fragment:
              return "Fragment";
            case REACT_PORTAL_TYPE:
              return "Portal";
            case exports.Profiler:
              return "Profiler";
            case exports.StrictMode:
              return "StrictMode";
            case exports.Suspense:
              return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
              return "SuspenseList";
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_CONTEXT_TYPE:
                var context = type;
                return getContextName(context) + ".Consumer";
              case REACT_PROVIDER_TYPE:
                var provider = type;
                return getContextName(provider._context) + ".Provider";
              case REACT_FORWARD_REF_TYPE:
                return getWrappedName(type, type.render, "ForwardRef");
              case REACT_MEMO_TYPE:
                return getComponentName(type.type);
              case REACT_BLOCK_TYPE:
                return getComponentName(type._render);
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return getComponentName(init(payload));
                } catch (x) {
                  return null;
                }
              }
            }
          }
          return null;
        }
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        var RESERVED_PROPS = {
          key: true,
          ref: true,
          __self: true,
          __source: true
        };
        var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;
        {
          didWarnAboutStringRefs = {};
        }
        function hasValidRef(config3) {
          {
            if (hasOwnProperty.call(config3, "ref")) {
              var getter = Object.getOwnPropertyDescriptor(config3, "ref").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config3.ref !== void 0;
        }
        function hasValidKey(config3) {
          {
            if (hasOwnProperty.call(config3, "key")) {
              var getter = Object.getOwnPropertyDescriptor(config3, "key").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config3.key !== void 0;
        }
        function defineKeyPropWarningGetter(props, displayName) {
          var warnAboutAccessingKey = function() {
            {
              if (!specialPropKeyWarningShown) {
                specialPropKeyWarningShown = true;
                error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
              }
            }
          };
          warnAboutAccessingKey.isReactWarning = true;
          Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: true
          });
        }
        function defineRefPropWarningGetter(props, displayName) {
          var warnAboutAccessingRef = function() {
            {
              if (!specialPropRefWarningShown) {
                specialPropRefWarningShown = true;
                error("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
              }
            }
          };
          warnAboutAccessingRef.isReactWarning = true;
          Object.defineProperty(props, "ref", {
            get: warnAboutAccessingRef,
            configurable: true
          });
        }
        function warnIfStringRefCannotBeAutoConverted(config3) {
          {
            if (typeof config3.ref === "string" && ReactCurrentOwner.current && config3.__self && ReactCurrentOwner.current.stateNode !== config3.__self) {
              var componentName = getComponentName(ReactCurrentOwner.current.type);
              if (!didWarnAboutStringRefs[componentName]) {
                error('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', componentName, config3.ref);
                didWarnAboutStringRefs[componentName] = true;
              }
            }
          }
        }
        var ReactElement = function(type, key, ref, self2, source, owner, props) {
          var element = {
            $$typeof: REACT_ELEMENT_TYPE,
            type,
            key,
            ref,
            props,
            _owner: owner
          };
          {
            element._store = {};
            Object.defineProperty(element._store, "validated", {
              configurable: false,
              enumerable: false,
              writable: true,
              value: false
            });
            Object.defineProperty(element, "_self", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: self2
            });
            Object.defineProperty(element, "_source", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: source
            });
            if (Object.freeze) {
              Object.freeze(element.props);
              Object.freeze(element);
            }
          }
          return element;
        };
        function createElement(type, config3, children) {
          var propName;
          var props = {};
          var key = null;
          var ref = null;
          var self2 = null;
          var source = null;
          if (config3 != null) {
            if (hasValidRef(config3)) {
              ref = config3.ref;
              {
                warnIfStringRefCannotBeAutoConverted(config3);
              }
            }
            if (hasValidKey(config3)) {
              key = "" + config3.key;
            }
            self2 = config3.__self === void 0 ? null : config3.__self;
            source = config3.__source === void 0 ? null : config3.__source;
            for (propName in config3) {
              if (hasOwnProperty.call(config3, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                props[propName] = config3[propName];
              }
            }
          }
          var childrenLength = arguments.length - 2;
          if (childrenLength === 1) {
            props.children = children;
          } else if (childrenLength > 1) {
            var childArray = Array(childrenLength);
            for (var i = 0; i < childrenLength; i++) {
              childArray[i] = arguments[i + 2];
            }
            {
              if (Object.freeze) {
                Object.freeze(childArray);
              }
            }
            props.children = childArray;
          }
          if (type && type.defaultProps) {
            var defaultProps = type.defaultProps;
            for (propName in defaultProps) {
              if (props[propName] === void 0) {
                props[propName] = defaultProps[propName];
              }
            }
          }
          {
            if (key || ref) {
              var displayName = typeof type === "function" ? type.displayName || type.name || "Unknown" : type;
              if (key) {
                defineKeyPropWarningGetter(props, displayName);
              }
              if (ref) {
                defineRefPropWarningGetter(props, displayName);
              }
            }
          }
          return ReactElement(type, key, ref, self2, source, ReactCurrentOwner.current, props);
        }
        function cloneAndReplaceKey(oldElement, newKey) {
          var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
          return newElement;
        }
        function cloneElement(element, config3, children) {
          if (!!(element === null || element === void 0)) {
            {
              throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + element + ".");
            }
          }
          var propName;
          var props = _assign({}, element.props);
          var key = element.key;
          var ref = element.ref;
          var self2 = element._self;
          var source = element._source;
          var owner = element._owner;
          if (config3 != null) {
            if (hasValidRef(config3)) {
              ref = config3.ref;
              owner = ReactCurrentOwner.current;
            }
            if (hasValidKey(config3)) {
              key = "" + config3.key;
            }
            var defaultProps;
            if (element.type && element.type.defaultProps) {
              defaultProps = element.type.defaultProps;
            }
            for (propName in config3) {
              if (hasOwnProperty.call(config3, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                if (config3[propName] === void 0 && defaultProps !== void 0) {
                  props[propName] = defaultProps[propName];
                } else {
                  props[propName] = config3[propName];
                }
              }
            }
          }
          var childrenLength = arguments.length - 2;
          if (childrenLength === 1) {
            props.children = children;
          } else if (childrenLength > 1) {
            var childArray = Array(childrenLength);
            for (var i = 0; i < childrenLength; i++) {
              childArray[i] = arguments[i + 2];
            }
            props.children = childArray;
          }
          return ReactElement(element.type, key, ref, self2, source, owner, props);
        }
        function isValidElement(object) {
          return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        var SEPARATOR = ".";
        var SUBSEPARATOR = ":";
        function escape(key) {
          var escapeRegex = /[=:]/g;
          var escaperLookup = {
            "=": "=0",
            ":": "=2"
          };
          var escapedString = key.replace(escapeRegex, function(match) {
            return escaperLookup[match];
          });
          return "$" + escapedString;
        }
        var didWarnAboutMaps = false;
        var userProvidedKeyEscapeRegex = /\/+/g;
        function escapeUserProvidedKey(text3) {
          return text3.replace(userProvidedKeyEscapeRegex, "$&/");
        }
        function getElementKey(element, index) {
          if (typeof element === "object" && element !== null && element.key != null) {
            return escape("" + element.key);
          }
          return index.toString(36);
        }
        function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
          var type = typeof children;
          if (type === "undefined" || type === "boolean") {
            children = null;
          }
          var invokeCallback = false;
          if (children === null) {
            invokeCallback = true;
          } else {
            switch (type) {
              case "string":
              case "number":
                invokeCallback = true;
                break;
              case "object":
                switch (children.$$typeof) {
                  case REACT_ELEMENT_TYPE:
                  case REACT_PORTAL_TYPE:
                    invokeCallback = true;
                }
            }
          }
          if (invokeCallback) {
            var _child = children;
            var mappedChild = callback(_child);
            var childKey = nameSoFar === "" ? SEPARATOR + getElementKey(_child, 0) : nameSoFar;
            if (Array.isArray(mappedChild)) {
              var escapedChildKey = "";
              if (childKey != null) {
                escapedChildKey = escapeUserProvidedKey(childKey) + "/";
              }
              mapIntoArray(mappedChild, array, escapedChildKey, "", function(c) {
                return c;
              });
            } else if (mappedChild != null) {
              if (isValidElement(mappedChild)) {
                mappedChild = cloneAndReplaceKey(
                  mappedChild,
                  escapedPrefix + (mappedChild.key && (!_child || _child.key !== mappedChild.key) ? escapeUserProvidedKey("" + mappedChild.key) + "/" : "") + childKey
                );
              }
              array.push(mappedChild);
            }
            return 1;
          }
          var child;
          var nextName;
          var subtreeCount = 0;
          var nextNamePrefix = nameSoFar === "" ? SEPARATOR : nameSoFar + SUBSEPARATOR;
          if (Array.isArray(children)) {
            for (var i = 0; i < children.length; i++) {
              child = children[i];
              nextName = nextNamePrefix + getElementKey(child, i);
              subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
            }
          } else {
            var iteratorFn = getIteratorFn(children);
            if (typeof iteratorFn === "function") {
              var iterableChildren = children;
              {
                if (iteratorFn === iterableChildren.entries) {
                  if (!didWarnAboutMaps) {
                    warn("Using Maps as children is not supported. Use an array of keyed ReactElements instead.");
                  }
                  didWarnAboutMaps = true;
                }
              }
              var iterator = iteratorFn.call(iterableChildren);
              var step;
              var ii = 0;
              while (!(step = iterator.next()).done) {
                child = step.value;
                nextName = nextNamePrefix + getElementKey(child, ii++);
                subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
              }
            } else if (type === "object") {
              var childrenString = "" + children;
              {
                {
                  throw Error("Objects are not valid as a React child (found: " + (childrenString === "[object Object]" ? "object with keys {" + Object.keys(children).join(", ") + "}" : childrenString) + "). If you meant to render a collection of children, use an array instead.");
                }
              }
            }
          }
          return subtreeCount;
        }
        function mapChildren(children, func, context) {
          if (children == null) {
            return children;
          }
          var result = [];
          var count = 0;
          mapIntoArray(children, result, "", "", function(child) {
            return func.call(context, child, count++);
          });
          return result;
        }
        function countChildren(children) {
          var n = 0;
          mapChildren(children, function() {
            n++;
          });
          return n;
        }
        function forEachChildren(children, forEachFunc, forEachContext) {
          mapChildren(children, function() {
            forEachFunc.apply(this, arguments);
          }, forEachContext);
        }
        function toArray(children) {
          return mapChildren(children, function(child) {
            return child;
          }) || [];
        }
        function onlyChild(children) {
          if (!isValidElement(children)) {
            {
              throw Error("React.Children.only expected to receive a single React element child.");
            }
          }
          return children;
        }
        function createContext(defaultValue, calculateChangedBits) {
          if (calculateChangedBits === void 0) {
            calculateChangedBits = null;
          } else {
            {
              if (calculateChangedBits !== null && typeof calculateChangedBits !== "function") {
                error("createContext: Expected the optional second argument to be a function. Instead received: %s", calculateChangedBits);
              }
            }
          }
          var context = {
            $$typeof: REACT_CONTEXT_TYPE,
            _calculateChangedBits: calculateChangedBits,
            _currentValue: defaultValue,
            _currentValue2: defaultValue,
            _threadCount: 0,
            Provider: null,
            Consumer: null
          };
          context.Provider = {
            $$typeof: REACT_PROVIDER_TYPE,
            _context: context
          };
          var hasWarnedAboutUsingNestedContextConsumers = false;
          var hasWarnedAboutUsingConsumerProvider = false;
          var hasWarnedAboutDisplayNameOnConsumer = false;
          {
            var Consumer = {
              $$typeof: REACT_CONTEXT_TYPE,
              _context: context,
              _calculateChangedBits: context._calculateChangedBits
            };
            Object.defineProperties(Consumer, {
              Provider: {
                get: function() {
                  if (!hasWarnedAboutUsingConsumerProvider) {
                    hasWarnedAboutUsingConsumerProvider = true;
                    error("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?");
                  }
                  return context.Provider;
                },
                set: function(_Provider) {
                  context.Provider = _Provider;
                }
              },
              _currentValue: {
                get: function() {
                  return context._currentValue;
                },
                set: function(_currentValue) {
                  context._currentValue = _currentValue;
                }
              },
              _currentValue2: {
                get: function() {
                  return context._currentValue2;
                },
                set: function(_currentValue2) {
                  context._currentValue2 = _currentValue2;
                }
              },
              _threadCount: {
                get: function() {
                  return context._threadCount;
                },
                set: function(_threadCount) {
                  context._threadCount = _threadCount;
                }
              },
              Consumer: {
                get: function() {
                  if (!hasWarnedAboutUsingNestedContextConsumers) {
                    hasWarnedAboutUsingNestedContextConsumers = true;
                    error("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?");
                  }
                  return context.Consumer;
                }
              },
              displayName: {
                get: function() {
                  return context.displayName;
                },
                set: function(displayName) {
                  if (!hasWarnedAboutDisplayNameOnConsumer) {
                    warn("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", displayName);
                    hasWarnedAboutDisplayNameOnConsumer = true;
                  }
                }
              }
            });
            context.Consumer = Consumer;
          }
          {
            context._currentRenderer = null;
            context._currentRenderer2 = null;
          }
          return context;
        }
        var Uninitialized = -1;
        var Pending = 0;
        var Resolved = 1;
        var Rejected = 2;
        function lazyInitializer(payload) {
          if (payload._status === Uninitialized) {
            var ctor = payload._result;
            var thenable = ctor();
            var pending = payload;
            pending._status = Pending;
            pending._result = thenable;
            thenable.then(function(moduleObject) {
              if (payload._status === Pending) {
                var defaultExport = moduleObject.default;
                {
                  if (defaultExport === void 0) {
                    error("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))", moduleObject);
                  }
                }
                var resolved = payload;
                resolved._status = Resolved;
                resolved._result = defaultExport;
              }
            }, function(error2) {
              if (payload._status === Pending) {
                var rejected = payload;
                rejected._status = Rejected;
                rejected._result = error2;
              }
            });
          }
          if (payload._status === Resolved) {
            return payload._result;
          } else {
            throw payload._result;
          }
        }
        function lazy(ctor) {
          var payload = {
            _status: -1,
            _result: ctor
          };
          var lazyType = {
            $$typeof: REACT_LAZY_TYPE,
            _payload: payload,
            _init: lazyInitializer
          };
          {
            var defaultProps;
            var propTypes;
            Object.defineProperties(lazyType, {
              defaultProps: {
                configurable: true,
                get: function() {
                  return defaultProps;
                },
                set: function(newDefaultProps) {
                  error("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.");
                  defaultProps = newDefaultProps;
                  Object.defineProperty(lazyType, "defaultProps", {
                    enumerable: true
                  });
                }
              },
              propTypes: {
                configurable: true,
                get: function() {
                  return propTypes;
                },
                set: function(newPropTypes) {
                  error("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.");
                  propTypes = newPropTypes;
                  Object.defineProperty(lazyType, "propTypes", {
                    enumerable: true
                  });
                }
              }
            });
          }
          return lazyType;
        }
        function forwardRef(render) {
          {
            if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
              error("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).");
            } else if (typeof render !== "function") {
              error("forwardRef requires a render function but was given %s.", render === null ? "null" : typeof render);
            } else {
              if (render.length !== 0 && render.length !== 2) {
                error("forwardRef render functions accept exactly two parameters: props and ref. %s", render.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined.");
              }
            }
            if (render != null) {
              if (render.defaultProps != null || render.propTypes != null) {
                error("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
              }
            }
          }
          var elementType = {
            $$typeof: REACT_FORWARD_REF_TYPE,
            render
          };
          {
            var ownName;
            Object.defineProperty(elementType, "displayName", {
              enumerable: false,
              configurable: true,
              get: function() {
                return ownName;
              },
              set: function(name) {
                ownName = name;
                if (render.displayName == null) {
                  render.displayName = name;
                }
              }
            });
          }
          return elementType;
        }
        var enableScopeAPI = false;
        function isValidElementType(type) {
          if (typeof type === "string" || typeof type === "function") {
            return true;
          }
          if (type === exports.Fragment || type === exports.Profiler || type === REACT_DEBUG_TRACING_MODE_TYPE || type === exports.StrictMode || type === exports.Suspense || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI) {
            return true;
          }
          if (typeof type === "object" && type !== null) {
            if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
              return true;
            }
          }
          return false;
        }
        function memo(type, compare) {
          {
            if (!isValidElementType(type)) {
              error("memo: The first argument must be a component. Instead received: %s", type === null ? "null" : typeof type);
            }
          }
          var elementType = {
            $$typeof: REACT_MEMO_TYPE,
            type,
            compare: compare === void 0 ? null : compare
          };
          {
            var ownName;
            Object.defineProperty(elementType, "displayName", {
              enumerable: false,
              configurable: true,
              get: function() {
                return ownName;
              },
              set: function(name) {
                ownName = name;
                if (type.displayName == null) {
                  type.displayName = name;
                }
              }
            });
          }
          return elementType;
        }
        function resolveDispatcher() {
          var dispatcher = ReactCurrentDispatcher.current;
          if (!(dispatcher !== null)) {
            {
              throw Error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.");
            }
          }
          return dispatcher;
        }
        function useContext(Context, unstable_observedBits) {
          var dispatcher = resolveDispatcher();
          {
            if (unstable_observedBits !== void 0) {
              error("useContext() second argument is reserved for future use in React. Passing it is not supported. You passed: %s.%s", unstable_observedBits, typeof unstable_observedBits === "number" && Array.isArray(arguments[2]) ? "\n\nDid you call array.map(useContext)? Calling Hooks inside a loop is not supported. Learn more at https://reactjs.org/link/rules-of-hooks" : "");
            }
            if (Context._context !== void 0) {
              var realContext = Context._context;
              if (realContext.Consumer === Context) {
                error("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?");
              } else if (realContext.Provider === Context) {
                error("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
              }
            }
          }
          return dispatcher.useContext(Context, unstable_observedBits);
        }
        function useState(initialState) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useState(initialState);
        }
        function useReducer(reducer, initialArg, init) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useReducer(reducer, initialArg, init);
        }
        function useRef(initialValue) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useRef(initialValue);
        }
        function useEffect(create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useEffect(create, deps);
        }
        function useLayoutEffect(create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useLayoutEffect(create, deps);
        }
        function useCallback(callback, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useCallback(callback, deps);
        }
        function useMemo(create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useMemo(create, deps);
        }
        function useImperativeHandle(ref, create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useImperativeHandle(ref, create, deps);
        }
        function useDebugValue(value, formatterFn) {
          {
            var dispatcher = resolveDispatcher();
            return dispatcher.useDebugValue(value, formatterFn);
          }
        }
        var disabledDepth = 0;
        var prevLog;
        var prevInfo;
        var prevWarn;
        var prevError;
        var prevGroup;
        var prevGroupCollapsed;
        var prevGroupEnd;
        function disabledLog() {
        }
        disabledLog.__reactDisabledLog = true;
        function disableLogs() {
          {
            if (disabledDepth === 0) {
              prevLog = console.log;
              prevInfo = console.info;
              prevWarn = console.warn;
              prevError = console.error;
              prevGroup = console.group;
              prevGroupCollapsed = console.groupCollapsed;
              prevGroupEnd = console.groupEnd;
              var props = {
                configurable: true,
                enumerable: true,
                value: disabledLog,
                writable: true
              };
              Object.defineProperties(console, {
                info: props,
                log: props,
                warn: props,
                error: props,
                group: props,
                groupCollapsed: props,
                groupEnd: props
              });
            }
            disabledDepth++;
          }
        }
        function reenableLogs() {
          {
            disabledDepth--;
            if (disabledDepth === 0) {
              var props = {
                configurable: true,
                enumerable: true,
                writable: true
              };
              Object.defineProperties(console, {
                log: _assign({}, props, {
                  value: prevLog
                }),
                info: _assign({}, props, {
                  value: prevInfo
                }),
                warn: _assign({}, props, {
                  value: prevWarn
                }),
                error: _assign({}, props, {
                  value: prevError
                }),
                group: _assign({}, props, {
                  value: prevGroup
                }),
                groupCollapsed: _assign({}, props, {
                  value: prevGroupCollapsed
                }),
                groupEnd: _assign({}, props, {
                  value: prevGroupEnd
                })
              });
            }
            if (disabledDepth < 0) {
              error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
            }
          }
        }
        var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
        var prefix;
        function describeBuiltInComponentFrame(name, source, ownerFn) {
          {
            if (prefix === void 0) {
              try {
                throw Error();
              } catch (x) {
                var match = x.stack.trim().match(/\n( *(at )?)/);
                prefix = match && match[1] || "";
              }
            }
            return "\n" + prefix + name;
          }
        }
        var reentry = false;
        var componentFrameCache;
        {
          var PossiblyWeakMap = typeof WeakMap === "function" ? WeakMap : Map;
          componentFrameCache = new PossiblyWeakMap();
        }
        function describeNativeComponentFrame(fn, construct) {
          if (!fn || reentry) {
            return "";
          }
          {
            var frame = componentFrameCache.get(fn);
            if (frame !== void 0) {
              return frame;
            }
          }
          var control;
          reentry = true;
          var previousPrepareStackTrace = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          var previousDispatcher;
          {
            previousDispatcher = ReactCurrentDispatcher$1.current;
            ReactCurrentDispatcher$1.current = null;
            disableLogs();
          }
          try {
            if (construct) {
              var Fake = function() {
                throw Error();
              };
              Object.defineProperty(Fake.prototype, "props", {
                set: function() {
                  throw Error();
                }
              });
              if (typeof Reflect === "object" && Reflect.construct) {
                try {
                  Reflect.construct(Fake, []);
                } catch (x) {
                  control = x;
                }
                Reflect.construct(fn, [], Fake);
              } else {
                try {
                  Fake.call();
                } catch (x) {
                  control = x;
                }
                fn.call(Fake.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (x) {
                control = x;
              }
              fn();
            }
          } catch (sample) {
            if (sample && control && typeof sample.stack === "string") {
              var sampleLines = sample.stack.split("\n");
              var controlLines = control.stack.split("\n");
              var s = sampleLines.length - 1;
              var c = controlLines.length - 1;
              while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
                c--;
              }
              for (; s >= 1 && c >= 0; s--, c--) {
                if (sampleLines[s] !== controlLines[c]) {
                  if (s !== 1 || c !== 1) {
                    do {
                      s--;
                      c--;
                      if (c < 0 || sampleLines[s] !== controlLines[c]) {
                        var _frame = "\n" + sampleLines[s].replace(" at new ", " at ");
                        {
                          if (typeof fn === "function") {
                            componentFrameCache.set(fn, _frame);
                          }
                        }
                        return _frame;
                      }
                    } while (s >= 1 && c >= 0);
                  }
                  break;
                }
              }
            }
          } finally {
            reentry = false;
            {
              ReactCurrentDispatcher$1.current = previousDispatcher;
              reenableLogs();
            }
            Error.prepareStackTrace = previousPrepareStackTrace;
          }
          var name = fn ? fn.displayName || fn.name : "";
          var syntheticFrame = name ? describeBuiltInComponentFrame(name) : "";
          {
            if (typeof fn === "function") {
              componentFrameCache.set(fn, syntheticFrame);
            }
          }
          return syntheticFrame;
        }
        function describeFunctionComponentFrame(fn, source, ownerFn) {
          {
            return describeNativeComponentFrame(fn, false);
          }
        }
        function shouldConstruct(Component2) {
          var prototype = Component2.prototype;
          return !!(prototype && prototype.isReactComponent);
        }
        function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
          if (type == null) {
            return "";
          }
          if (typeof type === "function") {
            {
              return describeNativeComponentFrame(type, shouldConstruct(type));
            }
          }
          if (typeof type === "string") {
            return describeBuiltInComponentFrame(type);
          }
          switch (type) {
            case exports.Suspense:
              return describeBuiltInComponentFrame("Suspense");
            case REACT_SUSPENSE_LIST_TYPE:
              return describeBuiltInComponentFrame("SuspenseList");
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_FORWARD_REF_TYPE:
                return describeFunctionComponentFrame(type.render);
              case REACT_MEMO_TYPE:
                return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
              case REACT_BLOCK_TYPE:
                return describeFunctionComponentFrame(type._render);
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
                } catch (x) {
                }
              }
            }
          }
          return "";
        }
        var loggedTypeFailures = {};
        var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
        function setCurrentlyValidatingElement(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
            } else {
              ReactDebugCurrentFrame$1.setExtraStackFrame(null);
            }
          }
        }
        function checkPropTypes(typeSpecs, values, location2, componentName, element) {
          {
            var has = Function.call.bind(Object.prototype.hasOwnProperty);
            for (var typeSpecName in typeSpecs) {
              if (has(typeSpecs, typeSpecName)) {
                var error$1 = void 0;
                try {
                  if (typeof typeSpecs[typeSpecName] !== "function") {
                    var err = Error((componentName || "React class") + ": " + location2 + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                    err.name = "Invariant Violation";
                    throw err;
                  }
                  error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location2, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
                } catch (ex) {
                  error$1 = ex;
                }
                if (error$1 && !(error$1 instanceof Error)) {
                  setCurrentlyValidatingElement(element);
                  error("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location2, typeSpecName, typeof error$1);
                  setCurrentlyValidatingElement(null);
                }
                if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                  loggedTypeFailures[error$1.message] = true;
                  setCurrentlyValidatingElement(element);
                  error("Failed %s type: %s", location2, error$1.message);
                  setCurrentlyValidatingElement(null);
                }
              }
            }
          }
        }
        function setCurrentlyValidatingElement$1(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              setExtraStackFrame(stack);
            } else {
              setExtraStackFrame(null);
            }
          }
        }
        var propTypesMisspellWarningShown;
        {
          propTypesMisspellWarningShown = false;
        }
        function getDeclarationErrorAddendum() {
          if (ReactCurrentOwner.current) {
            var name = getComponentName(ReactCurrentOwner.current.type);
            if (name) {
              return "\n\nCheck the render method of `" + name + "`.";
            }
          }
          return "";
        }
        function getSourceInfoErrorAddendum(source) {
          if (source !== void 0) {
            var fileName = source.fileName.replace(/^.*[\\\/]/, "");
            var lineNumber = source.lineNumber;
            return "\n\nCheck your code at " + fileName + ":" + lineNumber + ".";
          }
          return "";
        }
        function getSourceInfoErrorAddendumForProps(elementProps) {
          if (elementProps !== null && elementProps !== void 0) {
            return getSourceInfoErrorAddendum(elementProps.__source);
          }
          return "";
        }
        var ownerHasKeyUseWarning = {};
        function getCurrentComponentErrorInfo(parentType) {
          var info = getDeclarationErrorAddendum();
          if (!info) {
            var parentName = typeof parentType === "string" ? parentType : parentType.displayName || parentType.name;
            if (parentName) {
              info = "\n\nCheck the top-level render call using <" + parentName + ">.";
            }
          }
          return info;
        }
        function validateExplicitKey(element, parentType) {
          if (!element._store || element._store.validated || element.key != null) {
            return;
          }
          element._store.validated = true;
          var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
          if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
            return;
          }
          ownerHasKeyUseWarning[currentComponentErrorInfo] = true;
          var childOwner = "";
          if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
            childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
          }
          {
            setCurrentlyValidatingElement$1(element);
            error('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
            setCurrentlyValidatingElement$1(null);
          }
        }
        function validateChildKeys(node, parentType) {
          if (typeof node !== "object") {
            return;
          }
          if (Array.isArray(node)) {
            for (var i = 0; i < node.length; i++) {
              var child = node[i];
              if (isValidElement(child)) {
                validateExplicitKey(child, parentType);
              }
            }
          } else if (isValidElement(node)) {
            if (node._store) {
              node._store.validated = true;
            }
          } else if (node) {
            var iteratorFn = getIteratorFn(node);
            if (typeof iteratorFn === "function") {
              if (iteratorFn !== node.entries) {
                var iterator = iteratorFn.call(node);
                var step;
                while (!(step = iterator.next()).done) {
                  if (isValidElement(step.value)) {
                    validateExplicitKey(step.value, parentType);
                  }
                }
              }
            }
          }
        }
        function validatePropTypes(element) {
          {
            var type = element.type;
            if (type === null || type === void 0 || typeof type === "string") {
              return;
            }
            var propTypes;
            if (typeof type === "function") {
              propTypes = type.propTypes;
            } else if (typeof type === "object" && (type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_MEMO_TYPE)) {
              propTypes = type.propTypes;
            } else {
              return;
            }
            if (propTypes) {
              var name = getComponentName(type);
              checkPropTypes(propTypes, element.props, "prop", name, element);
            } else if (type.PropTypes !== void 0 && !propTypesMisspellWarningShown) {
              propTypesMisspellWarningShown = true;
              var _name = getComponentName(type);
              error("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _name || "Unknown");
            }
            if (typeof type.getDefaultProps === "function" && !type.getDefaultProps.isReactClassApproved) {
              error("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
            }
          }
        }
        function validateFragmentProps(fragment) {
          {
            var keys = Object.keys(fragment.props);
            for (var i = 0; i < keys.length; i++) {
              var key = keys[i];
              if (key !== "children" && key !== "key") {
                setCurrentlyValidatingElement$1(fragment);
                error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", key);
                setCurrentlyValidatingElement$1(null);
                break;
              }
            }
            if (fragment.ref !== null) {
              setCurrentlyValidatingElement$1(fragment);
              error("Invalid attribute `ref` supplied to `React.Fragment`.");
              setCurrentlyValidatingElement$1(null);
            }
          }
        }
        function createElementWithValidation(type, props, children) {
          var validType = isValidElementType(type);
          if (!validType) {
            var info = "";
            if (type === void 0 || typeof type === "object" && type !== null && Object.keys(type).length === 0) {
              info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
            }
            var sourceInfo = getSourceInfoErrorAddendumForProps(props);
            if (sourceInfo) {
              info += sourceInfo;
            } else {
              info += getDeclarationErrorAddendum();
            }
            var typeString;
            if (type === null) {
              typeString = "null";
            } else if (Array.isArray(type)) {
              typeString = "array";
            } else if (type !== void 0 && type.$$typeof === REACT_ELEMENT_TYPE) {
              typeString = "<" + (getComponentName(type.type) || "Unknown") + " />";
              info = " Did you accidentally export a JSX literal instead of a component?";
            } else {
              typeString = typeof type;
            }
            {
              error("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, info);
            }
          }
          var element = createElement.apply(this, arguments);
          if (element == null) {
            return element;
          }
          if (validType) {
            for (var i = 2; i < arguments.length; i++) {
              validateChildKeys(arguments[i], type);
            }
          }
          if (type === exports.Fragment) {
            validateFragmentProps(element);
          } else {
            validatePropTypes(element);
          }
          return element;
        }
        var didWarnAboutDeprecatedCreateFactory = false;
        function createFactoryWithValidation(type) {
          var validatedFactory = createElementWithValidation.bind(null, type);
          validatedFactory.type = type;
          {
            if (!didWarnAboutDeprecatedCreateFactory) {
              didWarnAboutDeprecatedCreateFactory = true;
              warn("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.");
            }
            Object.defineProperty(validatedFactory, "type", {
              enumerable: false,
              get: function() {
                warn("Factory.type is deprecated. Access the class directly before passing it to createFactory.");
                Object.defineProperty(this, "type", {
                  value: type
                });
                return type;
              }
            });
          }
          return validatedFactory;
        }
        function cloneElementWithValidation(element, props, children) {
          var newElement = cloneElement.apply(this, arguments);
          for (var i = 2; i < arguments.length; i++) {
            validateChildKeys(arguments[i], newElement.type);
          }
          validatePropTypes(newElement);
          return newElement;
        }
        {
          try {
            var frozenObject = Object.freeze({});
            /* @__PURE__ */ new Map([[frozenObject, null]]);
            /* @__PURE__ */ new Set([frozenObject]);
          } catch (e) {
          }
        }
        var createElement$1 = createElementWithValidation;
        var cloneElement$1 = cloneElementWithValidation;
        var createFactory = createFactoryWithValidation;
        var Children = {
          map: mapChildren,
          forEach: forEachChildren,
          count: countChildren,
          toArray,
          only: onlyChild
        };
        exports.Children = Children;
        exports.Component = Component;
        exports.PureComponent = PureComponent;
        exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
        exports.cloneElement = cloneElement$1;
        exports.createContext = createContext;
        exports.createElement = createElement$1;
        exports.createFactory = createFactory;
        exports.createRef = createRef;
        exports.forwardRef = forwardRef;
        exports.isValidElement = isValidElement;
        exports.lazy = lazy;
        exports.memo = memo;
        exports.useCallback = useCallback;
        exports.useContext = useContext;
        exports.useDebugValue = useDebugValue;
        exports.useEffect = useEffect;
        exports.useImperativeHandle = useImperativeHandle;
        exports.useLayoutEffect = useLayoutEffect;
        exports.useMemo = useMemo;
        exports.useReducer = useReducer;
        exports.useRef = useRef;
        exports.useState = useState;
        exports.version = ReactVersion;
      })();
    }
  }
});

// node_modules/react/index.js
var require_react = __commonJS({
  "node_modules/react/index.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_development();
    }
  }
});

// node_modules/@swc/helpers/lib/_async_to_generator.js
var require_async_to_generator = __commonJS({
  "node_modules/@swc/helpers/lib/_async_to_generator.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = _asyncToGenerator;
    function _asyncToGenerator(fn) {
      return function() {
        var self2 = this, args = arguments;
        return new Promise(function(resolve, reject) {
          var gen = fn.apply(self2, args);
          function _next(value) {
            asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
          }
          function _throw(err) {
            asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
          }
          _next(void 0);
        });
      };
    }
    function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
      try {
        var info = gen[key](arg);
        var value = info.value;
      } catch (error) {
        reject(error);
        return;
      }
      if (info.done) {
        resolve(value);
      } else {
        Promise.resolve(value).then(_next, _throw);
      }
    }
  }
});

// node_modules/@swc/helpers/lib/_extends.js
var require_extends = __commonJS({
  "node_modules/@swc/helpers/lib/_extends.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = _extends;
    function _extends() {
      return extends_.apply(this, arguments);
    }
    function extends_() {
      extends_ = Object.assign || function(target) {
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
      return extends_.apply(this, arguments);
    }
  }
});

// node_modules/@swc/helpers/lib/_interop_require_wildcard.js
var require_interop_require_wildcard = __commonJS({
  "node_modules/@swc/helpers/lib/_interop_require_wildcard.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = _interopRequireWildcard;
    function _interopRequireWildcard(obj, nodeInterop) {
      if (!nodeInterop && obj && obj.__esModule) {
        return obj;
      }
      if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
          default: obj
        };
      }
      var cache = _getRequireWildcardCache(nodeInterop);
      if (cache && cache.has(obj)) {
        return cache.get(obj);
      }
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) {
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
          if (desc && (desc.get || desc.set)) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
      newObj.default = obj;
      if (cache) {
        cache.set(obj, newObj);
      }
      return newObj;
    }
    function _getRequireWildcardCache(nodeInterop1) {
      if (typeof WeakMap !== "function")
        return null;
      var cacheBabelInterop = /* @__PURE__ */ new WeakMap();
      var cacheNodeInterop = /* @__PURE__ */ new WeakMap();
      return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
      })(nodeInterop1);
    }
  }
});

// node_modules/next/dist/shared/lib/router/utils/remove-trailing-slash.js
var require_remove_trailing_slash = __commonJS({
  "node_modules/next/dist/shared/lib/router/utils/remove-trailing-slash.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.removeTrailingSlash = removeTrailingSlash;
    function removeTrailingSlash(route) {
      return route.replace(/\/$/, "") || "/";
    }
  }
});

// node_modules/next/dist/shared/lib/router/utils/parse-path.js
var require_parse_path = __commonJS({
  "node_modules/next/dist/shared/lib/router/utils/parse-path.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.parsePath = parsePath;
    function parsePath(path) {
      const hashIndex = path.indexOf("#");
      const queryIndex = path.indexOf("?");
      const hasQuery = queryIndex > -1 && (hashIndex < 0 || queryIndex < hashIndex);
      if (hasQuery || hashIndex > -1) {
        return {
          pathname: path.substring(0, hasQuery ? queryIndex : hashIndex),
          query: hasQuery ? path.substring(queryIndex, hashIndex > -1 ? hashIndex : void 0) : "",
          hash: hashIndex > -1 ? path.slice(hashIndex) : ""
        };
      }
      return {
        pathname: path,
        query: "",
        hash: ""
      };
    }
  }
});

// node_modules/next/dist/client/normalize-trailing-slash.js
var require_normalize_trailing_slash = __commonJS({
  "node_modules/next/dist/client/normalize-trailing-slash.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.normalizePathTrailingSlash = void 0;
    var _removeTrailingSlash = require_remove_trailing_slash();
    var _parsePath = require_parse_path();
    var normalizePathTrailingSlash = (path) => {
      if (!path.startsWith("/") || process.env.__NEXT_MANUAL_TRAILING_SLASH) {
        return path;
      }
      const { pathname, query, hash } = (0, _parsePath).parsePath(path);
      if (process.env.__NEXT_TRAILING_SLASH) {
        if (/\.[^/]+\/?$/.test(pathname)) {
          return `${(0, _removeTrailingSlash).removeTrailingSlash(pathname)}${query}${hash}`;
        } else if (pathname.endsWith("/")) {
          return `${pathname}${query}${hash}`;
        } else {
          return `${pathname}/${query}${hash}`;
        }
      }
      return `${(0, _removeTrailingSlash).removeTrailingSlash(pathname)}${query}${hash}`;
    };
    exports.normalizePathTrailingSlash = normalizePathTrailingSlash;
    if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
      Object.defineProperty(exports.default, "__esModule", { value: true });
      Object.assign(exports.default, exports);
      module.exports = exports.default;
    }
  }
});

// node_modules/next/dist/shared/lib/router/utils/get-asset-path-from-route.js
var require_get_asset_path_from_route = __commonJS({
  "node_modules/next/dist/shared/lib/router/utils/get-asset-path-from-route.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = getAssetPathFromRoute;
    function getAssetPathFromRoute(route, ext = "") {
      const path = route === "/" ? "/index" : /^\/index(\/|$)/.test(route) ? `/index${route}` : `${route}`;
      return path + ext;
    }
  }
});

// node_modules/next/dist/client/trusted-types.js
var require_trusted_types = __commonJS({
  "node_modules/next/dist/client/trusted-types.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.__unsafeCreateTrustedScriptURL = __unsafeCreateTrustedScriptURL;
    var policy;
    function getPolicy() {
      if (typeof policy === "undefined" && typeof window !== "undefined") {
        var ref;
        policy = ((ref = window.trustedTypes) == null ? void 0 : ref.createPolicy("nextjs", {
          createHTML: (input) => input,
          createScript: (input) => input,
          createScriptURL: (input) => input
        })) || null;
      }
      return policy;
    }
    function __unsafeCreateTrustedScriptURL(url) {
      var ref;
      return ((ref = getPolicy()) == null ? void 0 : ref.createScriptURL(url)) || url;
    }
    if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
      Object.defineProperty(exports.default, "__esModule", { value: true });
      Object.assign(exports.default, exports);
      module.exports = exports.default;
    }
  }
});

// node_modules/next/dist/client/request-idle-callback.js
var require_request_idle_callback = __commonJS({
  "node_modules/next/dist/client/request-idle-callback.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.cancelIdleCallback = exports.requestIdleCallback = void 0;
    var requestIdleCallback = typeof self !== "undefined" && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function(cb) {
      let start = Date.now();
      return setTimeout(function() {
        cb({
          didTimeout: false,
          timeRemaining: function() {
            return Math.max(0, 50 - (Date.now() - start));
          }
        });
      }, 1);
    };
    exports.requestIdleCallback = requestIdleCallback;
    var cancelIdleCallback = typeof self !== "undefined" && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function(id) {
      return clearTimeout(id);
    };
    exports.cancelIdleCallback = cancelIdleCallback;
    if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
      Object.defineProperty(exports.default, "__esModule", { value: true });
      Object.assign(exports.default, exports);
      module.exports = exports.default;
    }
  }
});

// node_modules/next/dist/client/route-loader.js
var require_route_loader = __commonJS({
  "node_modules/next/dist/client/route-loader.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.markAssetError = markAssetError;
    exports.isAssetError = isAssetError;
    exports.getClientBuildManifest = getClientBuildManifest;
    exports.createRouteLoader = createRouteLoader;
    var _interop_require_default = require_interop_require_default().default;
    var _getAssetPathFromRoute = _interop_require_default(require_get_asset_path_from_route());
    var _trustedTypes = require_trusted_types();
    var _requestIdleCallback = require_request_idle_callback();
    var MS_MAX_IDLE_DELAY = 3800;
    function withFuture(key, map, generator) {
      let entry = map.get(key);
      if (entry) {
        if ("future" in entry) {
          return entry.future;
        }
        return Promise.resolve(entry);
      }
      let resolver;
      const prom = new Promise((resolve) => {
        resolver = resolve;
      });
      map.set(key, entry = {
        resolve: resolver,
        future: prom
      });
      return generator ? generator().then((value) => (resolver(value), value)).catch((err) => {
        map.delete(key);
        throw err;
      }) : prom;
    }
    function hasPrefetch(link4) {
      try {
        link4 = document.createElement("link");
        return !!window.MSInputMethodContext && !!document.documentMode || link4.relList.supports("prefetch");
      } catch (e) {
        return false;
      }
    }
    var canPrefetch = hasPrefetch();
    function prefetchViaDom(href, as, link4) {
      return new Promise((res, rej) => {
        const selector = `
      link[rel="prefetch"][href^="${href}"],
      link[rel="preload"][href^="${href}"],
      script[src^="${href}"]`;
        if (document.querySelector(selector)) {
          return res();
        }
        link4 = document.createElement("link");
        if (as)
          link4.as = as;
        link4.rel = `prefetch`;
        link4.crossOrigin = process.env.__NEXT_CROSS_ORIGIN;
        link4.onload = res;
        link4.onerror = rej;
        link4.href = href;
        document.head.appendChild(link4);
      });
    }
    var ASSET_LOAD_ERROR = Symbol("ASSET_LOAD_ERROR");
    function markAssetError(err) {
      return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
    }
    function isAssetError(err) {
      return err && ASSET_LOAD_ERROR in err;
    }
    function appendScript(src, script) {
      return new Promise((resolve, reject) => {
        script = document.createElement("script");
        script.onload = resolve;
        script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`)));
        script.crossOrigin = process.env.__NEXT_CROSS_ORIGIN;
        script.src = src;
        document.body.appendChild(script);
      });
    }
    var devBuildPromise;
    function resolvePromiseWithTimeout(p, ms, err) {
      return new Promise((resolve, reject) => {
        let cancelled = false;
        p.then((r) => {
          cancelled = true;
          resolve(r);
        }).catch(reject);
        if (true) {
          (devBuildPromise || Promise.resolve()).then(() => {
            (0, _requestIdleCallback).requestIdleCallback(() => setTimeout(() => {
              if (!cancelled) {
                reject(err);
              }
            }, ms));
          });
        }
        if (false) {
          (0, _requestIdleCallback).requestIdleCallback(() => setTimeout(() => {
            if (!cancelled) {
              reject(err);
            }
          }, ms));
        }
      });
    }
    function getClientBuildManifest() {
      if (self.__BUILD_MANIFEST) {
        return Promise.resolve(self.__BUILD_MANIFEST);
      }
      const onBuildManifest = new Promise((resolve) => {
        const cb = self.__BUILD_MANIFEST_CB;
        self.__BUILD_MANIFEST_CB = () => {
          resolve(self.__BUILD_MANIFEST);
          cb && cb();
        };
      });
      return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error("Failed to load client build manifest")));
    }
    function getFilesForRoute(assetPrefix, route) {
      if (true) {
        const scriptUrl = assetPrefix + "/_next/static/chunks/pages" + encodeURI((0, _getAssetPathFromRoute).default(route, ".js"));
        return Promise.resolve({
          scripts: [
            (0, _trustedTypes).__unsafeCreateTrustedScriptURL(scriptUrl)
          ],
          css: []
        });
      }
      return getClientBuildManifest().then((manifest) => {
        if (!(route in manifest)) {
          throw markAssetError(new Error(`Failed to lookup route: ${route}`));
        }
        const allFiles = manifest[route].map((entry) => assetPrefix + "/_next/" + encodeURI(entry));
        return {
          scripts: allFiles.filter((v) => v.endsWith(".js")).map((v) => (0, _trustedTypes).__unsafeCreateTrustedScriptURL(v)),
          css: allFiles.filter((v) => v.endsWith(".css"))
        };
      });
    }
    function createRouteLoader(assetPrefix) {
      const entrypoints = /* @__PURE__ */ new Map();
      const loadedScripts = /* @__PURE__ */ new Map();
      const styleSheets = /* @__PURE__ */ new Map();
      const routes = /* @__PURE__ */ new Map();
      function maybeExecuteScript(src) {
        if (false) {
          let prom = loadedScripts.get(src.toString());
          if (prom) {
            return prom;
          }
          if (document.querySelector(`script[src^="${src}"]`)) {
            return Promise.resolve();
          }
          loadedScripts.set(src.toString(), prom = appendScript(src));
          return prom;
        } else {
          return appendScript(src);
        }
      }
      function fetchStyleSheet(href) {
        let prom = styleSheets.get(href);
        if (prom) {
          return prom;
        }
        styleSheets.set(href, prom = fetch(href).then((res) => {
          if (!res.ok) {
            throw new Error(`Failed to load stylesheet: ${href}`);
          }
          return res.text().then((text3) => ({
            href,
            content: text3
          }));
        }).catch((err) => {
          throw markAssetError(err);
        }));
        return prom;
      }
      return {
        whenEntrypoint(route) {
          return withFuture(route, entrypoints);
        },
        onEntrypoint(route, execute) {
          (execute ? Promise.resolve().then(() => execute()).then((exports2) => ({
            component: exports2 && exports2.default || exports2,
            exports: exports2
          }), (err) => ({
            error: err
          })) : Promise.resolve(void 0)).then((input) => {
            const old = entrypoints.get(route);
            if (old && "resolve" in old) {
              if (input) {
                entrypoints.set(route, input);
                old.resolve(input);
              }
            } else {
              if (input) {
                entrypoints.set(route, input);
              } else {
                entrypoints.delete(route);
              }
              routes.delete(route);
            }
          });
        },
        loadRoute(route, prefetch) {
          return withFuture(route, routes, () => {
            let devBuildPromiseResolve;
            if (true) {
              devBuildPromise = new Promise((resolve) => {
                devBuildPromiseResolve = resolve;
              });
            }
            return resolvePromiseWithTimeout(getFilesForRoute(assetPrefix, route).then(({ scripts, css }) => {
              return Promise.all([
                entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)),
                Promise.all(css.map(fetchStyleSheet))
              ]);
            }).then((res) => {
              return this.whenEntrypoint(route).then((entrypoint) => ({
                entrypoint,
                styles: res[1]
              }));
            }), MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`))).then(({ entrypoint, styles }) => {
              const res = Object.assign({
                styles
              }, entrypoint);
              return "error" in entrypoint ? entrypoint : res;
            }).catch((err) => {
              if (prefetch) {
                throw err;
              }
              return {
                error: err
              };
            }).finally(() => {
              return devBuildPromiseResolve == null ? void 0 : devBuildPromiseResolve();
            });
          });
        },
        prefetch(route) {
          let cn;
          if (cn = navigator.connection) {
            if (cn.saveData || /2g/.test(cn.effectiveType))
              return Promise.resolve();
          }
          return getFilesForRoute(assetPrefix, route).then((output) => Promise.all(canPrefetch ? output.scripts.map((script) => prefetchViaDom(script.toString(), "script")) : [])).then(() => {
            (0, _requestIdleCallback).requestIdleCallback(() => this.loadRoute(route, true).catch(() => {
            }));
          }).catch(
            () => {
            }
          );
        }
      };
    }
    if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
      Object.defineProperty(exports.default, "__esModule", { value: true });
      Object.assign(exports.default, exports);
      module.exports = exports.default;
    }
  }
});

// node_modules/next/dist/shared/lib/head-manager-context.js
var require_head_manager_context = __commonJS({
  "node_modules/next/dist/shared/lib/head-manager-context.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.HeadManagerContext = void 0;
    var _interop_require_default = require_interop_require_default().default;
    var _react = _interop_require_default(require_react());
    var HeadManagerContext = _react.default.createContext({});
    exports.HeadManagerContext = HeadManagerContext;
    if (true) {
      HeadManagerContext.displayName = "HeadManagerContext";
    }
  }
});

// node_modules/next/dist/client/head-manager.js
var require_head_manager = __commonJS({
  "node_modules/next/dist/client/head-manager.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = initHeadManager;
    exports.isEqualNode = isEqualNode;
    exports.DOMAttributeNames = void 0;
    function initHeadManager() {
      return {
        mountedInstances: /* @__PURE__ */ new Set(),
        updateHead: (head) => {
          const tags = {};
          head.forEach((h) => {
            if (h.type === "link" && h.props["data-optimized-fonts"]) {
              if (document.querySelector(`style[data-href="${h.props["data-href"]}"]`)) {
                return;
              } else {
                h.props.href = h.props["data-href"];
                h.props["data-href"] = void 0;
              }
            }
            const components = tags[h.type] || [];
            components.push(h);
            tags[h.type] = components;
          });
          const titleComponent = tags.title ? tags.title[0] : null;
          let title2 = "";
          if (titleComponent) {
            const { children } = titleComponent.props;
            title2 = typeof children === "string" ? children : Array.isArray(children) ? children.join("") : "";
          }
          if (title2 !== document.title)
            document.title = title2;
          [
            "meta",
            "base",
            "link",
            "style",
            "script"
          ].forEach((type) => {
            updateElements(type, tags[type] || []);
          });
        }
      };
    }
    var DOMAttributeNames = {
      acceptCharset: "accept-charset",
      className: "class",
      htmlFor: "for",
      httpEquiv: "http-equiv",
      noModule: "noModule"
    };
    exports.DOMAttributeNames = DOMAttributeNames;
    function reactElementToDOM({ type, props }) {
      const el = document.createElement(type);
      for (const p in props) {
        if (!props.hasOwnProperty(p))
          continue;
        if (p === "children" || p === "dangerouslySetInnerHTML")
          continue;
        if (props[p] === void 0)
          continue;
        const attr = DOMAttributeNames[p] || p.toLowerCase();
        if (type === "script" && (attr === "async" || attr === "defer" || attr === "noModule")) {
          el[attr] = !!props[p];
        } else {
          el.setAttribute(attr, props[p]);
        }
      }
      const { children, dangerouslySetInnerHTML } = props;
      if (dangerouslySetInnerHTML) {
        el.innerHTML = dangerouslySetInnerHTML.__html || "";
      } else if (children) {
        el.textContent = typeof children === "string" ? children : Array.isArray(children) ? children.join("") : "";
      }
      return el;
    }
    function isEqualNode(oldTag, newTag) {
      if (oldTag instanceof HTMLElement && newTag instanceof HTMLElement) {
        const nonce = newTag.getAttribute("nonce");
        if (nonce && !oldTag.getAttribute("nonce")) {
          const cloneTag = newTag.cloneNode(true);
          cloneTag.setAttribute("nonce", "");
          cloneTag.nonce = nonce;
          return nonce === oldTag.nonce && oldTag.isEqualNode(cloneTag);
        }
      }
      return oldTag.isEqualNode(newTag);
    }
    function updateElements(type, components) {
      const headEl = document.getElementsByTagName("head")[0];
      const headCountEl = headEl.querySelector("meta[name=next-head-count]");
      if (true) {
        if (!headCountEl) {
          console.error("Warning: next-head-count is missing. https://nextjs.org/docs/messages/next-head-count-missing");
          return;
        }
      }
      const headCount = Number(headCountEl.content);
      const oldTags = [];
      for (let i = 0, j = headCountEl.previousElementSibling; i < headCount; i++, j = (j == null ? void 0 : j.previousElementSibling) || null) {
        var ref;
        if ((j == null ? void 0 : (ref = j.tagName) == null ? void 0 : ref.toLowerCase()) === type) {
          oldTags.push(j);
        }
      }
      const newTags = components.map(reactElementToDOM).filter((newTag) => {
        for (let k = 0, len = oldTags.length; k < len; k++) {
          const oldTag = oldTags[k];
          if (isEqualNode(oldTag, newTag)) {
            oldTags.splice(k, 1);
            return false;
          }
        }
        return true;
      });
      oldTags.forEach((t) => {
        var ref2;
        return (ref2 = t.parentNode) == null ? void 0 : ref2.removeChild(t);
      });
      newTags.forEach((t) => headEl.insertBefore(t, headCountEl));
      headCountEl.content = (headCount - oldTags.length + newTags.length).toString();
    }
    if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
      Object.defineProperty(exports.default, "__esModule", { value: true });
      Object.assign(exports.default, exports);
      module.exports = exports.default;
    }
  }
});

// node_modules/next/dist/client/script.js
var require_script = __commonJS({
  "node_modules/next/dist/client/script.js"(exports, module) {
    "use strict";
    "client";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.handleClientScriptLoad = handleClientScriptLoad;
    exports.initScriptLoader = initScriptLoader;
    exports.default = void 0;
    var _extends = require_extends().default;
    var _interop_require_wildcard = require_interop_require_wildcard().default;
    var _object_without_properties_loose = require_object_without_properties_loose().default;
    var _react = _interop_require_wildcard(require_react());
    var _headManagerContext = require_head_manager_context();
    var _headManager = require_head_manager();
    var _requestIdleCallback = require_request_idle_callback();
    var ScriptCache = /* @__PURE__ */ new Map();
    var LoadCache = /* @__PURE__ */ new Set();
    var ignoreProps = [
      "onLoad",
      "onReady",
      "dangerouslySetInnerHTML",
      "children",
      "onError",
      "strategy"
    ];
    var loadScript = (props) => {
      const { src, id, onLoad = () => {
      }, onReady = null, dangerouslySetInnerHTML, children = "", strategy = "afterInteractive", onError } = props;
      const cacheKey = id || src;
      if (cacheKey && LoadCache.has(cacheKey)) {
        return;
      }
      if (ScriptCache.has(src)) {
        LoadCache.add(cacheKey);
        ScriptCache.get(src).then(onLoad, onError);
        return;
      }
      const afterLoad = () => {
        if (onReady) {
          onReady();
        }
        LoadCache.add(cacheKey);
      };
      const el = document.createElement("script");
      const loadPromise = new Promise((resolve, reject) => {
        el.addEventListener("load", function(e) {
          resolve();
          if (onLoad) {
            onLoad.call(this, e);
          }
          afterLoad();
        });
        el.addEventListener("error", function(e) {
          reject(e);
        });
      }).catch(function(e) {
        if (onError) {
          onError(e);
        }
      });
      if (dangerouslySetInnerHTML) {
        el.innerHTML = dangerouslySetInnerHTML.__html || "";
        afterLoad();
      } else if (children) {
        el.textContent = typeof children === "string" ? children : Array.isArray(children) ? children.join("") : "";
        afterLoad();
      } else if (src) {
        el.src = src;
        ScriptCache.set(src, loadPromise);
      }
      for (const [k, value] of Object.entries(props)) {
        if (value === void 0 || ignoreProps.includes(k)) {
          continue;
        }
        const attr = _headManager.DOMAttributeNames[k] || k.toLowerCase();
        el.setAttribute(attr, value);
      }
      if (strategy === "worker") {
        el.setAttribute("type", "text/partytown");
      }
      el.setAttribute("data-nscript", strategy);
      document.body.appendChild(el);
    };
    function handleClientScriptLoad(props) {
      const { strategy = "afterInteractive" } = props;
      if (strategy === "lazyOnload") {
        window.addEventListener("load", () => {
          (0, _requestIdleCallback).requestIdleCallback(() => loadScript(props));
        });
      } else {
        loadScript(props);
      }
    }
    function loadLazyScript(props) {
      if (document.readyState === "complete") {
        (0, _requestIdleCallback).requestIdleCallback(() => loadScript(props));
      } else {
        window.addEventListener("load", () => {
          (0, _requestIdleCallback).requestIdleCallback(() => loadScript(props));
        });
      }
    }
    function addBeforeInteractiveToCache() {
      const scripts = [
        ...document.querySelectorAll('[data-nscript="beforeInteractive"]'),
        ...document.querySelectorAll('[data-nscript="beforePageRender"]')
      ];
      scripts.forEach((script) => {
        const cacheKey = script.id || script.getAttribute("src");
        LoadCache.add(cacheKey);
      });
    }
    function initScriptLoader(scriptLoaderItems) {
      scriptLoaderItems.forEach(handleClientScriptLoad);
      addBeforeInteractiveToCache();
    }
    function Script(props) {
      const { id, src = "", onLoad = () => {
      }, onReady = null, strategy = "afterInteractive", onError } = props, restProps = _object_without_properties_loose(props, [
        "id",
        "src",
        "onLoad",
        "onReady",
        "strategy",
        "onError"
      ]);
      const { updateScripts, scripts, getIsSsr } = (0, _react).useContext(_headManagerContext.HeadManagerContext);
      const hasOnReadyEffectCalled = (0, _react).useRef(false);
      (0, _react).useEffect(() => {
        const cacheKey = id || src;
        if (!hasOnReadyEffectCalled.current) {
          if (onReady && cacheKey && LoadCache.has(cacheKey)) {
            onReady();
          }
          hasOnReadyEffectCalled.current = true;
        }
      }, [
        onReady,
        id,
        src
      ]);
      const hasLoadScriptEffectCalled = (0, _react).useRef(false);
      (0, _react).useEffect(() => {
        if (!hasLoadScriptEffectCalled.current) {
          if (strategy === "afterInteractive") {
            loadScript(props);
          } else if (strategy === "lazyOnload") {
            loadLazyScript(props);
          }
          hasLoadScriptEffectCalled.current = true;
        }
      }, [
        props,
        strategy
      ]);
      if (strategy === "beforeInteractive" || strategy === "worker") {
        if (updateScripts) {
          scripts[strategy] = (scripts[strategy] || []).concat([
            _extends({
              id,
              src,
              onLoad,
              onReady,
              onError
            }, restProps)
          ]);
          updateScripts(scripts);
        } else if (getIsSsr && getIsSsr()) {
          LoadCache.add(id || src);
        } else if (getIsSsr && !getIsSsr()) {
          loadScript(props);
        }
      }
      return null;
    }
    Object.defineProperty(Script, "__nextScript", {
      value: true
    });
    var _default = Script;
    exports.default = _default;
    if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
      Object.defineProperty(exports.default, "__esModule", { value: true });
      Object.assign(exports.default, exports);
      module.exports = exports.default;
    }
  }
});

// node_modules/next/dist/shared/lib/is-plain-object.js
var require_is_plain_object = __commonJS({
  "node_modules/next/dist/shared/lib/is-plain-object.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.getObjectClassLabel = getObjectClassLabel;
    exports.isPlainObject = isPlainObject;
    function getObjectClassLabel(value) {
      return Object.prototype.toString.call(value);
    }
    function isPlainObject(value) {
      if (getObjectClassLabel(value) !== "[object Object]") {
        return false;
      }
      const prototype = Object.getPrototypeOf(value);
      return prototype === null || prototype.hasOwnProperty("isPrototypeOf");
    }
  }
});

// node_modules/next/dist/lib/is-error.js
var require_is_error = __commonJS({
  "node_modules/next/dist/lib/is-error.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isError;
    exports.getProperError = getProperError;
    var _isPlainObject = require_is_plain_object();
    function isError(err) {
      return typeof err === "object" && err !== null && "name" in err && "message" in err;
    }
    function getProperError(err) {
      if (isError(err)) {
        return err;
      }
      if (true) {
        if (typeof err === "undefined") {
          return new Error("An undefined error was thrown, see here for more info: https://nextjs.org/docs/messages/threw-undefined");
        }
        if (err === null) {
          return new Error("A null error was thrown, see here for more info: https://nextjs.org/docs/messages/threw-undefined");
        }
      }
      return new Error((0, _isPlainObject).isPlainObject(err) ? JSON.stringify(err) : err + "");
    }
  }
});

// node_modules/next/dist/shared/lib/router/utils/sorted-routes.js
var require_sorted_routes = __commonJS({
  "node_modules/next/dist/shared/lib/router/utils/sorted-routes.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.getSortedRoutes = getSortedRoutes;
    var UrlNode = class {
      insert(urlPath) {
        this._insert(urlPath.split("/").filter(Boolean), [], false);
      }
      smoosh() {
        return this._smoosh();
      }
      _smoosh(prefix = "/") {
        const childrenPaths = [
          ...this.children.keys()
        ].sort();
        if (this.slugName !== null) {
          childrenPaths.splice(childrenPaths.indexOf("[]"), 1);
        }
        if (this.restSlugName !== null) {
          childrenPaths.splice(childrenPaths.indexOf("[...]"), 1);
        }
        if (this.optionalRestSlugName !== null) {
          childrenPaths.splice(childrenPaths.indexOf("[[...]]"), 1);
        }
        const routes = childrenPaths.map((c) => this.children.get(c)._smoosh(`${prefix}${c}/`)).reduce((prev, curr) => [
          ...prev,
          ...curr
        ], []);
        if (this.slugName !== null) {
          routes.push(...this.children.get("[]")._smoosh(`${prefix}[${this.slugName}]/`));
        }
        if (!this.placeholder) {
          const r = prefix === "/" ? "/" : prefix.slice(0, -1);
          if (this.optionalRestSlugName != null) {
            throw new Error(`You cannot define a route with the same specificity as a optional catch-all route ("${r}" and "${r}[[...${this.optionalRestSlugName}]]").`);
          }
          routes.unshift(r);
        }
        if (this.restSlugName !== null) {
          routes.push(...this.children.get("[...]")._smoosh(`${prefix}[...${this.restSlugName}]/`));
        }
        if (this.optionalRestSlugName !== null) {
          routes.push(...this.children.get("[[...]]")._smoosh(`${prefix}[[...${this.optionalRestSlugName}]]/`));
        }
        return routes;
      }
      _insert(urlPaths, slugNames, isCatchAll) {
        if (urlPaths.length === 0) {
          this.placeholder = false;
          return;
        }
        if (isCatchAll) {
          throw new Error(`Catch-all must be the last part of the URL.`);
        }
        let nextSegment = urlPaths[0];
        if (nextSegment.startsWith("[") && nextSegment.endsWith("]")) {
          let handleSlug = function(previousSlug, nextSlug) {
            if (previousSlug !== null) {
              if (previousSlug !== nextSlug) {
                throw new Error(`You cannot use different slug names for the same dynamic path ('${previousSlug}' !== '${nextSlug}').`);
              }
            }
            slugNames.forEach((slug2) => {
              if (slug2 === nextSlug) {
                throw new Error(`You cannot have the same slug name "${nextSlug}" repeat within a single dynamic path`);
              }
              if (slug2.replace(/\W/g, "") === nextSegment.replace(/\W/g, "")) {
                throw new Error(`You cannot have the slug names "${slug2}" and "${nextSlug}" differ only by non-word symbols within a single dynamic path`);
              }
            });
            slugNames.push(nextSlug);
          };
          let segmentName = nextSegment.slice(1, -1);
          let isOptional = false;
          if (segmentName.startsWith("[") && segmentName.endsWith("]")) {
            segmentName = segmentName.slice(1, -1);
            isOptional = true;
          }
          if (segmentName.startsWith("...")) {
            segmentName = segmentName.substring(3);
            isCatchAll = true;
          }
          if (segmentName.startsWith("[") || segmentName.endsWith("]")) {
            throw new Error(`Segment names may not start or end with extra brackets ('${segmentName}').`);
          }
          if (segmentName.startsWith(".")) {
            throw new Error(`Segment names may not start with erroneous periods ('${segmentName}').`);
          }
          if (isCatchAll) {
            if (isOptional) {
              if (this.restSlugName != null) {
                throw new Error(`You cannot use both an required and optional catch-all route at the same level ("[...${this.restSlugName}]" and "${urlPaths[0]}" ).`);
              }
              handleSlug(this.optionalRestSlugName, segmentName);
              this.optionalRestSlugName = segmentName;
              nextSegment = "[[...]]";
            } else {
              if (this.optionalRestSlugName != null) {
                throw new Error(`You cannot use both an optional and required catch-all route at the same level ("[[...${this.optionalRestSlugName}]]" and "${urlPaths[0]}").`);
              }
              handleSlug(this.restSlugName, segmentName);
              this.restSlugName = segmentName;
              nextSegment = "[...]";
            }
          } else {
            if (isOptional) {
              throw new Error(`Optional route parameters are not yet supported ("${urlPaths[0]}").`);
            }
            handleSlug(this.slugName, segmentName);
            this.slugName = segmentName;
            nextSegment = "[]";
          }
        }
        if (!this.children.has(nextSegment)) {
          this.children.set(nextSegment, new UrlNode());
        }
        this.children.get(nextSegment)._insert(urlPaths.slice(1), slugNames, isCatchAll);
      }
      constructor() {
        this.placeholder = true;
        this.children = /* @__PURE__ */ new Map();
        this.slugName = null;
        this.restSlugName = null;
        this.optionalRestSlugName = null;
      }
    };
    function getSortedRoutes(normalizedPages) {
      const root = new UrlNode();
      normalizedPages.forEach((pagePath) => root.insert(pagePath));
      return root.smoosh();
    }
  }
});

// node_modules/next/dist/shared/lib/router/utils/is-dynamic.js
var require_is_dynamic = __commonJS({
  "node_modules/next/dist/shared/lib/router/utils/is-dynamic.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.isDynamicRoute = isDynamicRoute;
    var TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;
    function isDynamicRoute(route) {
      return TEST_ROUTE.test(route);
    }
  }
});

// node_modules/next/dist/shared/lib/router/utils/index.js
var require_utils = __commonJS({
  "node_modules/next/dist/shared/lib/router/utils/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    Object.defineProperty(exports, "getSortedRoutes", {
      enumerable: true,
      get: function() {
        return _sortedRoutes.getSortedRoutes;
      }
    });
    Object.defineProperty(exports, "isDynamicRoute", {
      enumerable: true,
      get: function() {
        return _isDynamic.isDynamicRoute;
      }
    });
    var _sortedRoutes = require_sorted_routes();
    var _isDynamic = require_is_dynamic();
  }
});

// node_modules/next/dist/shared/lib/page-path/normalize-path-sep.js
var require_normalize_path_sep = __commonJS({
  "node_modules/next/dist/shared/lib/page-path/normalize-path-sep.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.normalizePathSep = normalizePathSep;
    function normalizePathSep(path) {
      return path.replace(/\\/g, "/");
    }
  }
});

// node_modules/next/dist/shared/lib/page-path/denormalize-page-path.js
var require_denormalize_page_path = __commonJS({
  "node_modules/next/dist/shared/lib/page-path/denormalize-page-path.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.denormalizePagePath = denormalizePagePath;
    var _utils = require_utils();
    var _normalizePathSep = require_normalize_path_sep();
    function denormalizePagePath(page) {
      let _page = (0, _normalizePathSep).normalizePathSep(page);
      return _page.startsWith("/index/") && !(0, _utils).isDynamicRoute(_page) ? _page.slice(6) : _page !== "/index" ? _page : "/";
    }
  }
});

// node_modules/next/dist/shared/lib/i18n/normalize-locale-path.js
var require_normalize_locale_path = __commonJS({
  "node_modules/next/dist/shared/lib/i18n/normalize-locale-path.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.normalizeLocalePath = normalizeLocalePath;
    function normalizeLocalePath(pathname, locales) {
      let detectedLocale;
      const pathnameParts = pathname.split("/");
      (locales || []).some((locale) => {
        if (pathnameParts[1] && pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
          detectedLocale = locale;
          pathnameParts.splice(1, 1);
          pathname = pathnameParts.join("/") || "/";
          return true;
        }
        return false;
      });
      return {
        pathname,
        detectedLocale
      };
    }
  }
});

// node_modules/next/dist/shared/lib/mitt.js
var require_mitt = __commonJS({
  "node_modules/next/dist/shared/lib/mitt.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = mitt;
    function mitt() {
      const all = /* @__PURE__ */ Object.create(null);
      return {
        on(type, handler) {
          (all[type] || (all[type] = [])).push(handler);
        },
        off(type, handler) {
          if (all[type]) {
            all[type].splice(all[type].indexOf(handler) >>> 0, 1);
          }
        },
        emit(type, ...evts) {
          (all[type] || []).slice().map((handler) => {
            handler(...evts);
          });
        }
      };
    }
  }
});

// node_modules/next/dist/shared/lib/utils.js
var require_utils2 = __commonJS({
  "node_modules/next/dist/shared/lib/utils.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.execOnce = execOnce;
    exports.getLocationOrigin = getLocationOrigin;
    exports.getURL = getURL;
    exports.getDisplayName = getDisplayName;
    exports.isResSent = isResSent;
    exports.normalizeRepeatedSlashes = normalizeRepeatedSlashes;
    exports.loadGetInitialProps = loadGetInitialProps;
    exports.ST = exports.SP = exports.warnOnce = exports.isAbsoluteUrl = void 0;
    var _async_to_generator = require_async_to_generator().default;
    function execOnce(fn) {
      let used = false;
      let result;
      return (...args) => {
        if (!used) {
          used = true;
          result = fn(...args);
        }
        return result;
      };
    }
    var ABSOLUTE_URL_REGEX = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/;
    var isAbsoluteUrl = (url) => ABSOLUTE_URL_REGEX.test(url);
    exports.isAbsoluteUrl = isAbsoluteUrl;
    function getLocationOrigin() {
      const { protocol, hostname, port } = window.location;
      return `${protocol}//${hostname}${port ? ":" + port : ""}`;
    }
    function getURL() {
      const { href } = window.location;
      const origin = getLocationOrigin();
      return href.substring(origin.length);
    }
    function getDisplayName(Component) {
      return typeof Component === "string" ? Component : Component.displayName || Component.name || "Unknown";
    }
    function isResSent(res) {
      return res.finished || res.headersSent;
    }
    function normalizeRepeatedSlashes(url) {
      const urlParts = url.split("?");
      const urlNoQuery = urlParts[0];
      return urlNoQuery.replace(/\\/g, "/").replace(/\/\/+/g, "/") + (urlParts[1] ? `?${urlParts.slice(1).join("?")}` : "");
    }
    function loadGetInitialProps(App, ctx) {
      return _loadGetInitialProps.apply(this, arguments);
    }
    function _loadGetInitialProps() {
      _loadGetInitialProps = _async_to_generator(function* (App, ctx) {
        if (true) {
          var ref;
          if ((ref = App.prototype) == null ? void 0 : ref.getInitialProps) {
            const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://nextjs.org/docs/messages/get-initial-props-as-an-instance-method for more information.`;
            throw new Error(message);
          }
        }
        const res = ctx.res || ctx.ctx && ctx.ctx.res;
        if (!App.getInitialProps) {
          if (ctx.ctx && ctx.Component) {
            return {
              pageProps: yield loadGetInitialProps(ctx.Component, ctx.ctx)
            };
          }
          return {};
        }
        const props = yield App.getInitialProps(ctx);
        if (res && isResSent(res)) {
          return props;
        }
        if (!props) {
          const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
          throw new Error(message);
        }
        if (true) {
          if (Object.keys(props).length === 0 && !ctx.ctx) {
            console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://nextjs.org/docs/messages/empty-object-getInitialProps`);
          }
        }
        return props;
      });
      return _loadGetInitialProps.apply(this, arguments);
    }
    var warnOnce = (_) => {
    };
    if (true) {
      const warnings = /* @__PURE__ */ new Set();
      exports.warnOnce = warnOnce = (msg) => {
        if (!warnings.has(msg)) {
          console.warn(msg);
        }
        warnings.add(msg);
      };
    }
    var SP = typeof performance !== "undefined";
    exports.SP = SP;
    var ST = SP && [
      "mark",
      "measure",
      "getEntriesByName"
    ].every((method) => typeof performance[method] === "function");
    exports.ST = ST;
    var DecodeError = class extends Error {
    };
    exports.DecodeError = DecodeError;
    var NormalizeError = class extends Error {
    };
    exports.NormalizeError = NormalizeError;
    var PageNotFoundError = class extends Error {
      constructor(page) {
        super();
        this.code = "ENOENT";
        this.message = `Cannot find module for page: ${page}`;
      }
    };
    exports.PageNotFoundError = PageNotFoundError;
    var MissingStaticPage = class extends Error {
      constructor(page, message) {
        super();
        this.message = `Failed to load static file for page: ${page} ${message}`;
      }
    };
    exports.MissingStaticPage = MissingStaticPage;
    var MiddlewareNotFoundError = class extends Error {
      constructor() {
        super();
        this.code = "ENOENT";
        this.message = `Cannot find the middleware module`;
      }
    };
    exports.MiddlewareNotFoundError = MiddlewareNotFoundError;
    exports.warnOnce = warnOnce;
  }
});

// node_modules/next/dist/shared/lib/router/utils/querystring.js
var require_querystring = __commonJS({
  "node_modules/next/dist/shared/lib/router/utils/querystring.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
    exports.urlQueryToSearchParams = urlQueryToSearchParams;
    exports.assign = assign;
    function searchParamsToUrlQuery(searchParams) {
      const query = {};
      searchParams.forEach((value, key) => {
        if (typeof query[key] === "undefined") {
          query[key] = value;
        } else if (Array.isArray(query[key])) {
          query[key].push(value);
        } else {
          query[key] = [
            query[key],
            value
          ];
        }
      });
      return query;
    }
    function stringifyUrlQueryParam(param) {
      if (typeof param === "string" || typeof param === "number" && !isNaN(param) || typeof param === "boolean") {
        return String(param);
      } else {
        return "";
      }
    }
    function urlQueryToSearchParams(urlQuery) {
      const result = new URLSearchParams();
      Object.entries(urlQuery).forEach(([key, value]) => {
        if (Array.isArray(value)) {
          value.forEach((item) => result.append(key, stringifyUrlQueryParam(item)));
        } else {
          result.set(key, stringifyUrlQueryParam(value));
        }
      });
      return result;
    }
    function assign(target, ...searchParamsList) {
      searchParamsList.forEach((searchParams) => {
        Array.from(searchParams.keys()).forEach((key) => target.delete(key));
        searchParams.forEach((value, key) => target.append(key, value));
      });
      return target;
    }
  }
});

// node_modules/next/dist/shared/lib/router/utils/parse-relative-url.js
var require_parse_relative_url = __commonJS({
  "node_modules/next/dist/shared/lib/router/utils/parse-relative-url.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.parseRelativeUrl = parseRelativeUrl;
    var _utils = require_utils2();
    var _querystring = require_querystring();
    function parseRelativeUrl(url, base) {
      const globalBase = new URL(typeof window === "undefined" ? "http://n" : (0, _utils).getLocationOrigin());
      const resolvedBase = base ? new URL(base, globalBase) : url.startsWith(".") ? new URL(typeof window === "undefined" ? "http://n" : window.location.href) : globalBase;
      const { pathname, searchParams, search, hash, href, origin } = new URL(url, resolvedBase);
      if (origin !== globalBase.origin) {
        throw new Error(`invariant: invalid relative URL, router received ${url}`);
      }
      return {
        pathname,
        query: (0, _querystring).searchParamsToUrlQuery(searchParams),
        search,
        hash,
        href: href.slice(globalBase.origin.length)
      };
    }
  }
});

// node_modules/next/dist/compiled/path-to-regexp/index.js
var require_path_to_regexp = __commonJS({
  "node_modules/next/dist/compiled/path-to-regexp/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function lexer(str) {
      var tokens = [];
      var i = 0;
      while (i < str.length) {
        var char = str[i];
        if (char === "*" || char === "+" || char === "?") {
          tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
          continue;
        }
        if (char === "\\") {
          tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
          continue;
        }
        if (char === "{") {
          tokens.push({ type: "OPEN", index: i, value: str[i++] });
          continue;
        }
        if (char === "}") {
          tokens.push({ type: "CLOSE", index: i, value: str[i++] });
          continue;
        }
        if (char === ":") {
          var name = "";
          var j = i + 1;
          while (j < str.length) {
            var code = str.charCodeAt(j);
            if (code >= 48 && code <= 57 || code >= 65 && code <= 90 || code >= 97 && code <= 122 || code === 95) {
              name += str[j++];
              continue;
            }
            break;
          }
          if (!name)
            throw new TypeError("Missing parameter name at " + i);
          tokens.push({ type: "NAME", index: i, value: name });
          i = j;
          continue;
        }
        if (char === "(") {
          var count = 1;
          var pattern = "";
          var j = i + 1;
          if (str[j] === "?") {
            throw new TypeError('Pattern cannot start with "?" at ' + j);
          }
          while (j < str.length) {
            if (str[j] === "\\") {
              pattern += str[j++] + str[j++];
              continue;
            }
            if (str[j] === ")") {
              count--;
              if (count === 0) {
                j++;
                break;
              }
            } else if (str[j] === "(") {
              count++;
              if (str[j + 1] !== "?") {
                throw new TypeError("Capturing groups are not allowed at " + j);
              }
            }
            pattern += str[j++];
          }
          if (count)
            throw new TypeError("Unbalanced pattern at " + i);
          if (!pattern)
            throw new TypeError("Missing pattern at " + i);
          tokens.push({ type: "PATTERN", index: i, value: pattern });
          i = j;
          continue;
        }
        tokens.push({ type: "CHAR", index: i, value: str[i++] });
      }
      tokens.push({ type: "END", index: i, value: "" });
      return tokens;
    }
    function parse(str, options) {
      if (options === void 0) {
        options = {};
      }
      var tokens = lexer(str);
      var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
      var defaultPattern = "[^" + escapeString(options.delimiter || "/#?") + "]+?";
      var result = [];
      var key = 0;
      var i = 0;
      var path = "";
      var tryConsume = function(type) {
        if (i < tokens.length && tokens[i].type === type)
          return tokens[i++].value;
      };
      var mustConsume = function(type) {
        var value2 = tryConsume(type);
        if (value2 !== void 0)
          return value2;
        var _a2 = tokens[i], nextType = _a2.type, index = _a2.index;
        throw new TypeError("Unexpected " + nextType + " at " + index + ", expected " + type);
      };
      var consumeText = function() {
        var result2 = "";
        var value2;
        while (value2 = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR")) {
          result2 += value2;
        }
        return result2;
      };
      while (i < tokens.length) {
        var char = tryConsume("CHAR");
        var name = tryConsume("NAME");
        var pattern = tryConsume("PATTERN");
        if (name || pattern) {
          var prefix = char || "";
          if (prefixes.indexOf(prefix) === -1) {
            path += prefix;
            prefix = "";
          }
          if (path) {
            result.push(path);
            path = "";
          }
          result.push({
            name: name || key++,
            prefix,
            suffix: "",
            pattern: pattern || defaultPattern,
            modifier: tryConsume("MODIFIER") || ""
          });
          continue;
        }
        var value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
          path += value;
          continue;
        }
        if (path) {
          result.push(path);
          path = "";
        }
        var open = tryConsume("OPEN");
        if (open) {
          var prefix = consumeText();
          var name_1 = tryConsume("NAME") || "";
          var pattern_1 = tryConsume("PATTERN") || "";
          var suffix = consumeText();
          mustConsume("CLOSE");
          result.push({
            name: name_1 || (pattern_1 ? key++ : ""),
            pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
            prefix,
            suffix,
            modifier: tryConsume("MODIFIER") || ""
          });
          continue;
        }
        mustConsume("END");
      }
      return result;
    }
    exports.parse = parse;
    function compile(str, options) {
      return tokensToFunction(parse(str, options), options);
    }
    exports.compile = compile;
    function tokensToFunction(tokens, options) {
      if (options === void 0) {
        options = {};
      }
      var reFlags = flags(options);
      var _a = options.encode, encode = _a === void 0 ? function(x) {
        return x;
      } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
      var matches = tokens.map(function(token) {
        if (typeof token === "object") {
          return new RegExp("^(?:" + token.pattern + ")$", reFlags);
        }
      });
      return function(data) {
        var path = "";
        for (var i = 0; i < tokens.length; i++) {
          var token = tokens[i];
          if (typeof token === "string") {
            path += token;
            continue;
          }
          var value = data ? data[token.name] : void 0;
          var optional = token.modifier === "?" || token.modifier === "*";
          var repeat = token.modifier === "*" || token.modifier === "+";
          if (Array.isArray(value)) {
            if (!repeat) {
              throw new TypeError('Expected "' + token.name + '" to not repeat, but got an array');
            }
            if (value.length === 0) {
              if (optional)
                continue;
              throw new TypeError('Expected "' + token.name + '" to not be empty');
            }
            for (var j = 0; j < value.length; j++) {
              var segment = encode(value[j], token);
              if (validate && !matches[i].test(segment)) {
                throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but got "' + segment + '"');
              }
              path += token.prefix + segment + token.suffix;
            }
            continue;
          }
          if (typeof value === "string" || typeof value === "number") {
            var segment = encode(String(value), token);
            if (validate && !matches[i].test(segment)) {
              throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but got "' + segment + '"');
            }
            path += token.prefix + segment + token.suffix;
            continue;
          }
          if (optional)
            continue;
          var typeOfMessage = repeat ? "an array" : "a string";
          throw new TypeError('Expected "' + token.name + '" to be ' + typeOfMessage);
        }
        return path;
      };
    }
    exports.tokensToFunction = tokensToFunction;
    function match(str, options) {
      var keys = [];
      var re = pathToRegexp(str, keys, options);
      return regexpToFunction(re, keys, options);
    }
    exports.match = match;
    function regexpToFunction(re, keys, options) {
      if (options === void 0) {
        options = {};
      }
      var _a = options.decode, decode = _a === void 0 ? function(x) {
        return x;
      } : _a;
      return function(pathname) {
        var m = re.exec(pathname);
        if (!m)
          return false;
        var path = m[0], index = m.index;
        var params = /* @__PURE__ */ Object.create(null);
        var _loop_1 = function(i2) {
          if (m[i2] === void 0)
            return "continue";
          var key = keys[i2 - 1];
          if (key.modifier === "*" || key.modifier === "+") {
            params[key.name] = m[i2].split(key.prefix + key.suffix).map(function(value) {
              return decode(value, key);
            });
          } else {
            params[key.name] = decode(m[i2], key);
          }
        };
        for (var i = 1; i < m.length; i++) {
          _loop_1(i);
        }
        return { path, index, params };
      };
    }
    exports.regexpToFunction = regexpToFunction;
    function escapeString(str) {
      return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
    }
    function flags(options) {
      return options && options.sensitive ? "" : "i";
    }
    function regexpToRegexp(path, keys) {
      if (!keys)
        return path;
      var groups = path.source.match(/\((?!\?)/g);
      if (groups) {
        for (var i = 0; i < groups.length; i++) {
          keys.push({
            name: i,
            prefix: "",
            suffix: "",
            modifier: "",
            pattern: ""
          });
        }
      }
      return path;
    }
    function arrayToRegexp(paths, keys, options) {
      var parts = paths.map(function(path) {
        return pathToRegexp(path, keys, options).source;
      });
      return new RegExp("(?:" + parts.join("|") + ")", flags(options));
    }
    function stringToRegexp(path, keys, options) {
      return tokensToRegexp(parse(path, options), keys, options);
    }
    function tokensToRegexp(tokens, keys, options) {
      if (options === void 0) {
        options = {};
      }
      var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function(x) {
        return x;
      } : _d;
      var endsWith = "[" + escapeString(options.endsWith || "") + "]|$";
      var delimiter = "[" + escapeString(options.delimiter || "/#?") + "]";
      var route = start ? "^" : "";
      for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
        var token = tokens_1[_i];
        if (typeof token === "string") {
          route += escapeString(encode(token));
        } else {
          var prefix = escapeString(encode(token.prefix));
          var suffix = escapeString(encode(token.suffix));
          if (token.pattern) {
            if (keys)
              keys.push(token);
            if (prefix || suffix) {
              if (token.modifier === "+" || token.modifier === "*") {
                var mod = token.modifier === "*" ? "?" : "";
                route += "(?:" + prefix + "((?:" + token.pattern + ")(?:" + suffix + prefix + "(?:" + token.pattern + "))*)" + suffix + ")" + mod;
              } else {
                route += "(?:" + prefix + "(" + token.pattern + ")" + suffix + ")" + token.modifier;
              }
            } else {
              route += "(" + token.pattern + ")" + token.modifier;
            }
          } else {
            route += "(?:" + prefix + suffix + ")" + token.modifier;
          }
        }
      }
      if (end) {
        if (!strict)
          route += delimiter + "?";
        route += !options.endsWith ? "$" : "(?=" + endsWith + ")";
      } else {
        var endToken = tokens[tokens.length - 1];
        var isEndDelimited = typeof endToken === "string" ? delimiter.indexOf(endToken[endToken.length - 1]) > -1 : endToken === void 0;
        if (!strict) {
          route += "(?:" + delimiter + "(?=" + endsWith + "))?";
        }
        if (!isEndDelimited) {
          route += "(?=" + delimiter + "|" + endsWith + ")";
        }
      }
      return new RegExp(route, flags(options));
    }
    exports.tokensToRegexp = tokensToRegexp;
    function pathToRegexp(path, keys, options) {
      if (path instanceof RegExp)
        return regexpToRegexp(path, keys);
      if (Array.isArray(path))
        return arrayToRegexp(path, keys, options);
      return stringToRegexp(path, keys, options);
    }
    exports.pathToRegexp = pathToRegexp;
  }
});

// node_modules/next/dist/shared/lib/router/utils/path-match.js
var require_path_match = __commonJS({
  "node_modules/next/dist/shared/lib/router/utils/path-match.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.getPathMatch = getPathMatch;
    var _extends = require_extends().default;
    var _pathToRegexp = require_path_to_regexp();
    function getPathMatch(path, options) {
      const keys = [];
      const regexp = (0, _pathToRegexp).pathToRegexp(path, keys, {
        delimiter: "/",
        sensitive: false,
        strict: options == null ? void 0 : options.strict
      });
      const matcher = (0, _pathToRegexp).regexpToFunction((options == null ? void 0 : options.regexModifier) ? new RegExp(options.regexModifier(regexp.source), regexp.flags) : regexp, keys);
      return (pathname, params) => {
        const res = pathname == null ? false : matcher(pathname);
        if (!res) {
          return false;
        }
        if (options == null ? void 0 : options.removeUnnamedParams) {
          for (const key of keys) {
            if (typeof key.name === "number") {
              delete res.params[key.name];
            }
          }
        }
        return _extends({}, params, res.params);
      };
    }
  }
});

// node_modules/next/dist/shared/lib/escape-regexp.js
var require_escape_regexp = __commonJS({
  "node_modules/next/dist/shared/lib/escape-regexp.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.escapeStringRegexp = escapeStringRegexp;
    var reHasRegExp = /[|\\{}()[\]^$+*?.-]/;
    var reReplaceRegExp = /[|\\{}()[\]^$+*?.-]/g;
    function escapeStringRegexp(str) {
      if (reHasRegExp.test(str)) {
        return str.replace(reReplaceRegExp, "\\$&");
      }
      return str;
    }
  }
});

// node_modules/next/dist/shared/lib/router/utils/parse-url.js
var require_parse_url = __commonJS({
  "node_modules/next/dist/shared/lib/router/utils/parse-url.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.parseUrl = parseUrl;
    var _querystring = require_querystring();
    var _parseRelativeUrl = require_parse_relative_url();
    function parseUrl(url) {
      if (url.startsWith("/")) {
        return (0, _parseRelativeUrl).parseRelativeUrl(url);
      }
      const parsedURL = new URL(url);
      return {
        hash: parsedURL.hash,
        hostname: parsedURL.hostname,
        href: parsedURL.href,
        pathname: parsedURL.pathname,
        port: parsedURL.port,
        protocol: parsedURL.protocol,
        query: (0, _querystring).searchParamsToUrlQuery(parsedURL.searchParams),
        search: parsedURL.search
      };
    }
  }
});

// node_modules/next/dist/shared/lib/router/utils/prepare-destination.js
var require_prepare_destination = __commonJS({
  "node_modules/next/dist/shared/lib/router/utils/prepare-destination.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.matchHas = matchHas;
    exports.compileNonPath = compileNonPath;
    exports.prepareDestination = prepareDestination;
    var _extends = require_extends().default;
    var _pathToRegexp = require_path_to_regexp();
    var _escapeRegexp = require_escape_regexp();
    var _parseUrl = require_parse_url();
    function getSafeParamName(paramName) {
      let newParamName = "";
      for (let i = 0; i < paramName.length; i++) {
        const charCode = paramName.charCodeAt(i);
        if (charCode > 64 && charCode < 91 || charCode > 96 && charCode < 123) {
          newParamName += paramName[i];
        }
      }
      return newParamName;
    }
    function escapeSegment(str, segmentName) {
      return str.replace(new RegExp(`:${(0, _escapeRegexp).escapeStringRegexp(segmentName)}`, "g"), `__ESC_COLON_${segmentName}`);
    }
    function unescapeSegments(str) {
      return str.replace(/__ESC_COLON_/gi, ":");
    }
    function matchHas(req, query, has = [], missing = []) {
      const params = {};
      const hasMatch = (hasItem) => {
        let value;
        let key = hasItem.key;
        switch (hasItem.type) {
          case "header": {
            key = key.toLowerCase();
            value = req.headers[key];
            break;
          }
          case "cookie": {
            value = req.cookies[hasItem.key];
            break;
          }
          case "query": {
            value = query[key];
            break;
          }
          case "host": {
            const { host } = (req == null ? void 0 : req.headers) || {};
            const hostname = host == null ? void 0 : host.split(":")[0].toLowerCase();
            value = hostname;
            break;
          }
          default: {
            break;
          }
        }
        if (!hasItem.value && value) {
          params[getSafeParamName(key)] = value;
          return true;
        } else if (value) {
          const matcher = new RegExp(`^${hasItem.value}$`);
          const matches = Array.isArray(value) ? value.slice(-1)[0].match(matcher) : value.match(matcher);
          if (matches) {
            if (Array.isArray(matches)) {
              if (matches.groups) {
                Object.keys(matches.groups).forEach((groupKey) => {
                  params[groupKey] = matches.groups[groupKey];
                });
              } else if (hasItem.type === "host" && matches[0]) {
                params.host = matches[0];
              }
            }
            return true;
          }
        }
        return false;
      };
      const allMatch = has.every((item) => hasMatch(item)) && !missing.some((item) => hasMatch(item));
      if (allMatch) {
        return params;
      }
      return false;
    }
    function compileNonPath(value, params) {
      if (!value.includes(":")) {
        return value;
      }
      for (const key of Object.keys(params)) {
        if (value.includes(`:${key}`)) {
          value = value.replace(new RegExp(`:${key}\\*`, "g"), `:${key}--ESCAPED_PARAM_ASTERISKS`).replace(new RegExp(`:${key}\\?`, "g"), `:${key}--ESCAPED_PARAM_QUESTION`).replace(new RegExp(`:${key}\\+`, "g"), `:${key}--ESCAPED_PARAM_PLUS`).replace(new RegExp(`:${key}(?!\\w)`, "g"), `--ESCAPED_PARAM_COLON${key}`);
        }
      }
      value = value.replace(/(:|\*|\?|\+|\(|\)|\{|\})/g, "\\$1").replace(/--ESCAPED_PARAM_PLUS/g, "+").replace(/--ESCAPED_PARAM_COLON/g, ":").replace(/--ESCAPED_PARAM_QUESTION/g, "?").replace(/--ESCAPED_PARAM_ASTERISKS/g, "*");
      return (0, _pathToRegexp).compile(`/${value}`, {
        validate: false
      })(params).slice(1);
    }
    function prepareDestination(args) {
      const query = Object.assign({}, args.query);
      delete query.__nextLocale;
      delete query.__nextDefaultLocale;
      delete query.__nextDataReq;
      let escapedDestination = args.destination;
      for (const param of Object.keys(_extends({}, args.params, query))) {
        escapedDestination = escapeSegment(escapedDestination, param);
      }
      const parsedDestination = (0, _parseUrl).parseUrl(escapedDestination);
      const destQuery = parsedDestination.query;
      const destPath = unescapeSegments(`${parsedDestination.pathname}${parsedDestination.hash || ""}`);
      const destHostname = unescapeSegments(parsedDestination.hostname || "");
      const destPathParamKeys = [];
      const destHostnameParamKeys = [];
      (0, _pathToRegexp).pathToRegexp(destPath, destPathParamKeys);
      (0, _pathToRegexp).pathToRegexp(destHostname, destHostnameParamKeys);
      const destParams = [];
      destPathParamKeys.forEach((key) => destParams.push(key.name));
      destHostnameParamKeys.forEach((key) => destParams.push(key.name));
      const destPathCompiler = (0, _pathToRegexp).compile(
        destPath,
        {
          validate: false
        }
      );
      const destHostnameCompiler = (0, _pathToRegexp).compile(destHostname, {
        validate: false
      });
      for (const [key1, strOrArray] of Object.entries(destQuery)) {
        if (Array.isArray(strOrArray)) {
          destQuery[key1] = strOrArray.map((value) => compileNonPath(unescapeSegments(value), args.params));
        } else {
          destQuery[key1] = compileNonPath(unescapeSegments(strOrArray), args.params);
        }
      }
      let paramKeys = Object.keys(args.params).filter((name) => name !== "nextInternalLocale");
      if (args.appendParamsToQuery && !paramKeys.some((key) => destParams.includes(key))) {
        for (const key of paramKeys) {
          if (!(key in destQuery)) {
            destQuery[key] = args.params[key];
          }
        }
      }
      let newUrl;
      try {
        newUrl = destPathCompiler(args.params);
        const [pathname, hash] = newUrl.split("#");
        parsedDestination.hostname = destHostnameCompiler(args.params);
        parsedDestination.pathname = pathname;
        parsedDestination.hash = `${hash ? "#" : ""}${hash || ""}`;
        delete parsedDestination.search;
      } catch (err) {
        if (err.message.match(/Expected .*? to not repeat, but got an array/)) {
          throw new Error(`To use a multi-match in the destination you must add \`*\` at the end of the param name to signify it should repeat. https://nextjs.org/docs/messages/invalid-multi-match`);
        }
        throw err;
      }
      parsedDestination.query = _extends({}, query, parsedDestination.query);
      return {
        newUrl,
        destQuery,
        parsedDestination
      };
    }
  }
});

// node_modules/next/dist/shared/lib/router/utils/path-has-prefix.js
var require_path_has_prefix = __commonJS({
  "node_modules/next/dist/shared/lib/router/utils/path-has-prefix.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.pathHasPrefix = pathHasPrefix;
    var _parsePath = require_parse_path();
    function pathHasPrefix(path, prefix) {
      if (typeof path !== "string") {
        return false;
      }
      const { pathname } = (0, _parsePath).parsePath(path);
      return pathname === prefix || pathname.startsWith(prefix + "/");
    }
  }
});

// node_modules/next/dist/client/has-base-path.js
var require_has_base_path = __commonJS({
  "node_modules/next/dist/client/has-base-path.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.hasBasePath = hasBasePath;
    var _pathHasPrefix = require_path_has_prefix();
    var basePath = process.env.__NEXT_ROUTER_BASEPATH || "";
    function hasBasePath(path) {
      return (0, _pathHasPrefix).pathHasPrefix(path, basePath);
    }
    if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
      Object.defineProperty(exports.default, "__esModule", { value: true });
      Object.assign(exports.default, exports);
      module.exports = exports.default;
    }
  }
});

// node_modules/next/dist/client/remove-base-path.js
var require_remove_base_path = __commonJS({
  "node_modules/next/dist/client/remove-base-path.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.removeBasePath = removeBasePath;
    var _hasBasePath = require_has_base_path();
    var basePath = process.env.__NEXT_ROUTER_BASEPATH || "";
    function removeBasePath(path) {
      if (process.env.__NEXT_MANUAL_CLIENT_BASE_PATH) {
        if (!(0, _hasBasePath).hasBasePath(path)) {
          return path;
        }
      }
      path = path.slice(basePath.length);
      if (!path.startsWith("/"))
        path = `/${path}`;
      return path;
    }
    if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
      Object.defineProperty(exports.default, "__esModule", { value: true });
      Object.assign(exports.default, exports);
      module.exports = exports.default;
    }
  }
});

// node_modules/next/dist/shared/lib/router/utils/resolve-rewrites.js
var require_resolve_rewrites = __commonJS({
  "node_modules/next/dist/shared/lib/router/utils/resolve-rewrites.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = resolveRewrites;
    var _pathMatch = require_path_match();
    var _prepareDestination = require_prepare_destination();
    var _removeTrailingSlash = require_remove_trailing_slash();
    var _normalizeLocalePath = require_normalize_locale_path();
    var _removeBasePath = require_remove_base_path();
    var _parseRelativeUrl = require_parse_relative_url();
    function resolveRewrites(asPath, pages, rewrites, query, resolveHref, locales) {
      let matchedPage = false;
      let externalDest = false;
      let parsedAs = (0, _parseRelativeUrl).parseRelativeUrl(asPath);
      let fsPathname = (0, _removeTrailingSlash).removeTrailingSlash((0, _normalizeLocalePath).normalizeLocalePath((0, _removeBasePath).removeBasePath(parsedAs.pathname), locales).pathname);
      let resolvedHref;
      const handleRewrite = (rewrite) => {
        const matcher = (0, _pathMatch).getPathMatch(rewrite.source + (process.env.__NEXT_TRAILING_SLASH ? "(/)?" : ""), {
          removeUnnamedParams: true,
          strict: true
        });
        let params = matcher(parsedAs.pathname);
        if ((rewrite.has || rewrite.missing) && params) {
          const hasParams = (0, _prepareDestination).matchHas({
            headers: {
              host: document.location.hostname
            },
            cookies: document.cookie.split("; ").reduce((acc, item) => {
              const [key, ...value] = item.split("=");
              acc[key] = value.join("=");
              return acc;
            }, {})
          }, parsedAs.query, rewrite.has, rewrite.missing);
          if (hasParams) {
            Object.assign(params, hasParams);
          } else {
            params = false;
          }
        }
        if (params) {
          if (!rewrite.destination) {
            externalDest = true;
            return true;
          }
          const destRes = (0, _prepareDestination).prepareDestination({
            appendParamsToQuery: true,
            destination: rewrite.destination,
            params,
            query
          });
          parsedAs = destRes.parsedDestination;
          asPath = destRes.newUrl;
          Object.assign(query, destRes.parsedDestination.query);
          fsPathname = (0, _removeTrailingSlash).removeTrailingSlash((0, _normalizeLocalePath).normalizeLocalePath((0, _removeBasePath).removeBasePath(asPath), locales).pathname);
          if (pages.includes(fsPathname)) {
            matchedPage = true;
            resolvedHref = fsPathname;
            return true;
          }
          resolvedHref = resolveHref(fsPathname);
          if (resolvedHref !== asPath && pages.includes(resolvedHref)) {
            matchedPage = true;
            return true;
          }
        }
      };
      let finished = false;
      for (let i = 0; i < rewrites.beforeFiles.length; i++) {
        handleRewrite(rewrites.beforeFiles[i]);
      }
      matchedPage = pages.includes(fsPathname);
      if (!matchedPage) {
        if (!finished) {
          for (let i = 0; i < rewrites.afterFiles.length; i++) {
            if (handleRewrite(rewrites.afterFiles[i])) {
              finished = true;
              break;
            }
          }
        }
        if (!finished) {
          resolvedHref = resolveHref(fsPathname);
          matchedPage = pages.includes(resolvedHref);
          finished = matchedPage;
        }
        if (!finished) {
          for (let i = 0; i < rewrites.fallback.length; i++) {
            if (handleRewrite(rewrites.fallback[i])) {
              finished = true;
              break;
            }
          }
        }
      }
      return {
        asPath,
        parsedAs,
        matchedPage,
        resolvedHref,
        externalDest
      };
    }
  }
});

// node_modules/next/dist/shared/lib/router/utils/route-matcher.js
var require_route_matcher = __commonJS({
  "node_modules/next/dist/shared/lib/router/utils/route-matcher.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.getRouteMatcher = getRouteMatcher;
    var _utils = require_utils2();
    function getRouteMatcher({ re, groups }) {
      return (pathname) => {
        const routeMatch = re.exec(pathname);
        if (!routeMatch) {
          return false;
        }
        const decode = (param) => {
          try {
            return decodeURIComponent(param);
          } catch (_) {
            throw new _utils.DecodeError("failed to decode param");
          }
        };
        const params = {};
        Object.keys(groups).forEach((slugName) => {
          const g = groups[slugName];
          const m = routeMatch[g.pos];
          if (m !== void 0) {
            params[slugName] = ~m.indexOf("/") ? m.split("/").map((entry) => decode(entry)) : g.repeat ? [
              decode(m)
            ] : decode(m);
          }
        });
        return params;
      };
    }
  }
});

// node_modules/next/dist/shared/lib/router/utils/route-regex.js
var require_route_regex = __commonJS({
  "node_modules/next/dist/shared/lib/router/utils/route-regex.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.getRouteRegex = getRouteRegex;
    exports.getNamedRouteRegex = getNamedRouteRegex;
    exports.getNamedMiddlewareRegex = getNamedMiddlewareRegex;
    var _extends = require_extends().default;
    var _escapeRegexp = require_escape_regexp();
    var _removeTrailingSlash = require_remove_trailing_slash();
    function parseParameter(param) {
      const optional = param.startsWith("[") && param.endsWith("]");
      if (optional) {
        param = param.slice(1, -1);
      }
      const repeat = param.startsWith("...");
      if (repeat) {
        param = param.slice(3);
      }
      return {
        key: param,
        repeat,
        optional
      };
    }
    function getParametrizedRoute(route) {
      const segments = (0, _removeTrailingSlash).removeTrailingSlash(route).slice(1).split("/");
      const groups = {};
      let groupIndex = 1;
      return {
        parameterizedRoute: segments.map((segment) => {
          if (segment.startsWith("[") && segment.endsWith("]")) {
            const { key, optional, repeat } = parseParameter(segment.slice(1, -1));
            groups[key] = {
              pos: groupIndex++,
              repeat,
              optional
            };
            return repeat ? optional ? "(?:/(.+?))?" : "/(.+?)" : "/([^/]+?)";
          } else {
            return `/${(0, _escapeRegexp).escapeStringRegexp(segment)}`;
          }
        }).join(""),
        groups
      };
    }
    function getRouteRegex(normalizedRoute) {
      const { parameterizedRoute, groups } = getParametrizedRoute(normalizedRoute);
      return {
        re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
        groups
      };
    }
    function buildGetSafeRouteKey() {
      let routeKeyCharCode = 97;
      let routeKeyCharLength = 1;
      return () => {
        let routeKey = "";
        for (let i = 0; i < routeKeyCharLength; i++) {
          routeKey += String.fromCharCode(routeKeyCharCode);
          routeKeyCharCode++;
          if (routeKeyCharCode > 122) {
            routeKeyCharLength++;
            routeKeyCharCode = 97;
          }
        }
        return routeKey;
      };
    }
    function getNamedParametrizedRoute(route) {
      const segments = (0, _removeTrailingSlash).removeTrailingSlash(route).slice(1).split("/");
      const getSafeRouteKey = buildGetSafeRouteKey();
      const routeKeys = {};
      return {
        namedParameterizedRoute: segments.map((segment) => {
          if (segment.startsWith("[") && segment.endsWith("]")) {
            const { key, optional, repeat } = parseParameter(segment.slice(1, -1));
            let cleanedKey = key.replace(/\W/g, "");
            let invalidKey = false;
            if (cleanedKey.length === 0 || cleanedKey.length > 30) {
              invalidKey = true;
            }
            if (!isNaN(parseInt(cleanedKey.slice(0, 1)))) {
              invalidKey = true;
            }
            if (invalidKey) {
              cleanedKey = getSafeRouteKey();
            }
            routeKeys[cleanedKey] = key;
            return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
          } else {
            return `/${(0, _escapeRegexp).escapeStringRegexp(segment)}`;
          }
        }).join(""),
        routeKeys
      };
    }
    function getNamedRouteRegex(normalizedRoute) {
      const result = getNamedParametrizedRoute(normalizedRoute);
      return _extends({}, getRouteRegex(normalizedRoute), {
        namedRegex: `^${result.namedParameterizedRoute}(?:/)?$`,
        routeKeys: result.routeKeys
      });
    }
    function getNamedMiddlewareRegex(normalizedRoute, options) {
      const { parameterizedRoute } = getParametrizedRoute(normalizedRoute);
      const { catchAll = true } = options;
      if (parameterizedRoute === "/") {
        let catchAllRegex = catchAll ? ".*" : "";
        return {
          namedRegex: `^/${catchAllRegex}$`
        };
      }
      const { namedParameterizedRoute } = getNamedParametrizedRoute(normalizedRoute);
      let catchAllGroupedRegex = catchAll ? "(?:(/.*)?)" : "";
      return {
        namedRegex: `^${namedParameterizedRoute}${catchAllGroupedRegex}$`
      };
    }
  }
});

// node_modules/next/dist/shared/lib/router/utils/format-url.js
var require_format_url = __commonJS({
  "node_modules/next/dist/shared/lib/router/utils/format-url.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.formatUrl = formatUrl;
    exports.formatWithValidation = formatWithValidation;
    exports.urlObjectKeys = void 0;
    var _interop_require_wildcard = require_interop_require_wildcard().default;
    var querystring = _interop_require_wildcard(require_querystring());
    var slashedProtocols = /https?|ftp|gopher|file/;
    function formatUrl(urlObj) {
      let { auth, hostname } = urlObj;
      let protocol = urlObj.protocol || "";
      let pathname = urlObj.pathname || "";
      let hash = urlObj.hash || "";
      let query = urlObj.query || "";
      let host = false;
      auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ":") + "@" : "";
      if (urlObj.host) {
        host = auth + urlObj.host;
      } else if (hostname) {
        host = auth + (~hostname.indexOf(":") ? `[${hostname}]` : hostname);
        if (urlObj.port) {
          host += ":" + urlObj.port;
        }
      }
      if (query && typeof query === "object") {
        query = String(querystring.urlQueryToSearchParams(query));
      }
      let search = urlObj.search || query && `?${query}` || "";
      if (protocol && !protocol.endsWith(":"))
        protocol += ":";
      if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
        host = "//" + (host || "");
        if (pathname && pathname[0] !== "/")
          pathname = "/" + pathname;
      } else if (!host) {
        host = "";
      }
      if (hash && hash[0] !== "#")
        hash = "#" + hash;
      if (search && search[0] !== "?")
        search = "?" + search;
      pathname = pathname.replace(/[?#]/g, encodeURIComponent);
      search = search.replace("#", "%23");
      return `${protocol}${host}${pathname}${search}${hash}`;
    }
    var urlObjectKeys = [
      "auth",
      "hash",
      "host",
      "hostname",
      "href",
      "path",
      "pathname",
      "port",
      "protocol",
      "query",
      "search",
      "slashes"
    ];
    exports.urlObjectKeys = urlObjectKeys;
    function formatWithValidation(url) {
      if (true) {
        if (url !== null && typeof url === "object") {
          Object.keys(url).forEach((key) => {
            if (urlObjectKeys.indexOf(key) === -1) {
              console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
            }
          });
        }
      }
      return formatUrl(url);
    }
  }
});

// node_modules/next/dist/shared/lib/i18n/detect-domain-locale.js
var require_detect_domain_locale = __commonJS({
  "node_modules/next/dist/shared/lib/i18n/detect-domain-locale.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.detectDomainLocale = detectDomainLocale;
    function detectDomainLocale(domainItems, hostname, detectedLocale) {
      let domainItem;
      if (domainItems) {
        if (detectedLocale) {
          detectedLocale = detectedLocale.toLowerCase();
        }
        for (const item of domainItems) {
          var ref, ref1;
          const domainHostname = (ref = item.domain) == null ? void 0 : ref.split(":")[0].toLowerCase();
          if (hostname === domainHostname || detectedLocale === item.defaultLocale.toLowerCase() || ((ref1 = item.locales) == null ? void 0 : ref1.some((locale) => locale.toLowerCase() === detectedLocale))) {
            domainItem = item;
            break;
          }
        }
      }
      return domainItem;
    }
  }
});

// node_modules/next/dist/client/detect-domain-locale.js
var require_detect_domain_locale2 = __commonJS({
  "node_modules/next/dist/client/detect-domain-locale.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.detectDomainLocale = void 0;
    var detectDomainLocale = (...args) => {
      if (process.env.__NEXT_I18N_SUPPORT) {
        return require_detect_domain_locale().detectDomainLocale(...args);
      }
    };
    exports.detectDomainLocale = detectDomainLocale;
    if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
      Object.defineProperty(exports.default, "__esModule", { value: true });
      Object.assign(exports.default, exports);
      module.exports = exports.default;
    }
  }
});

// node_modules/next/dist/shared/lib/router/utils/add-path-prefix.js
var require_add_path_prefix = __commonJS({
  "node_modules/next/dist/shared/lib/router/utils/add-path-prefix.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.addPathPrefix = addPathPrefix;
    var _parsePath = require_parse_path();
    function addPathPrefix(path, prefix) {
      if (!path.startsWith("/") || !prefix) {
        return path;
      }
      const { pathname, query, hash } = (0, _parsePath).parsePath(path);
      return `${prefix}${pathname}${query}${hash}`;
    }
  }
});

// node_modules/next/dist/shared/lib/router/utils/add-locale.js
var require_add_locale = __commonJS({
  "node_modules/next/dist/shared/lib/router/utils/add-locale.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.addLocale = addLocale;
    var _addPathPrefix = require_add_path_prefix();
    var _pathHasPrefix = require_path_has_prefix();
    function addLocale(path, locale, defaultLocale, ignorePrefix) {
      if (locale && locale !== defaultLocale && (ignorePrefix || !(0, _pathHasPrefix).pathHasPrefix(path.toLowerCase(), `/${locale.toLowerCase()}`) && !(0, _pathHasPrefix).pathHasPrefix(path.toLowerCase(), "/api"))) {
        return (0, _addPathPrefix).addPathPrefix(path, `/${locale}`);
      }
      return path;
    }
  }
});

// node_modules/next/dist/client/add-locale.js
var require_add_locale2 = __commonJS({
  "node_modules/next/dist/client/add-locale.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.addLocale = void 0;
    var _normalizeTrailingSlash = require_normalize_trailing_slash();
    var addLocale = (path, ...args) => {
      if (process.env.__NEXT_I18N_SUPPORT) {
        return (0, _normalizeTrailingSlash).normalizePathTrailingSlash(require_add_locale().addLocale(path, ...args));
      }
      return path;
    };
    exports.addLocale = addLocale;
    if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
      Object.defineProperty(exports.default, "__esModule", { value: true });
      Object.assign(exports.default, exports);
      module.exports = exports.default;
    }
  }
});

// node_modules/next/dist/client/remove-locale.js
var require_remove_locale = __commonJS({
  "node_modules/next/dist/client/remove-locale.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.removeLocale = removeLocale;
    var _parsePath = require_parse_path();
    function removeLocale(path, locale) {
      if (process.env.__NEXT_I18N_SUPPORT) {
        const { pathname } = (0, _parsePath).parsePath(path);
        const pathLower = pathname.toLowerCase();
        const localeLower = locale == null ? void 0 : locale.toLowerCase();
        return locale && (pathLower.startsWith(`/${localeLower}/`) || pathLower === `/${localeLower}`) ? `${pathname.length === locale.length + 1 ? `/` : ``}${path.slice(locale.length + 1)}` : path;
      }
      return path;
    }
    if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
      Object.defineProperty(exports.default, "__esModule", { value: true });
      Object.assign(exports.default, exports);
      module.exports = exports.default;
    }
  }
});

// node_modules/next/dist/client/add-base-path.js
var require_add_base_path = __commonJS({
  "node_modules/next/dist/client/add-base-path.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.addBasePath = addBasePath;
    var _addPathPrefix = require_add_path_prefix();
    var _normalizeTrailingSlash = require_normalize_trailing_slash();
    var basePath = process.env.__NEXT_ROUTER_BASEPATH || "";
    function addBasePath(path, required) {
      if (process.env.__NEXT_MANUAL_CLIENT_BASE_PATH) {
        if (!required) {
          return path;
        }
      }
      return (0, _normalizeTrailingSlash).normalizePathTrailingSlash((0, _addPathPrefix).addPathPrefix(path, basePath));
    }
    if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
      Object.defineProperty(exports.default, "__esModule", { value: true });
      Object.assign(exports.default, exports);
      module.exports = exports.default;
    }
  }
});

// node_modules/next/dist/shared/lib/router/utils/remove-path-prefix.js
var require_remove_path_prefix = __commonJS({
  "node_modules/next/dist/shared/lib/router/utils/remove-path-prefix.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.removePathPrefix = removePathPrefix;
    var _pathHasPrefix = require_path_has_prefix();
    function removePathPrefix(path, prefix) {
      if ((0, _pathHasPrefix).pathHasPrefix(path, prefix)) {
        const withoutPrefix = path.slice(prefix.length);
        return withoutPrefix.startsWith("/") ? withoutPrefix : `/${withoutPrefix}`;
      }
      return path;
    }
  }
});

// node_modules/next/dist/shared/lib/router/utils/get-next-pathname-info.js
var require_get_next_pathname_info = __commonJS({
  "node_modules/next/dist/shared/lib/router/utils/get-next-pathname-info.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.getNextPathnameInfo = getNextPathnameInfo;
    var _normalizeLocalePath = require_normalize_locale_path();
    var _removePathPrefix = require_remove_path_prefix();
    var _pathHasPrefix = require_path_has_prefix();
    function getNextPathnameInfo(pathname, options) {
      var _nextConfig;
      const { basePath, i18n, trailingSlash } = (_nextConfig = options.nextConfig) != null ? _nextConfig : {};
      const info = {
        pathname,
        trailingSlash: pathname !== "/" ? pathname.endsWith("/") : trailingSlash
      };
      if (basePath && (0, _pathHasPrefix).pathHasPrefix(info.pathname, basePath)) {
        info.pathname = (0, _removePathPrefix).removePathPrefix(info.pathname, basePath);
        info.basePath = basePath;
      }
      if (options.parseData === true && info.pathname.startsWith("/_next/data/") && info.pathname.endsWith(".json")) {
        const paths = info.pathname.replace(/^\/_next\/data\//, "").replace(/\.json$/, "").split("/");
        const buildId = paths[0];
        info.pathname = paths[1] !== "index" ? `/${paths.slice(1).join("/")}` : "/";
        info.buildId = buildId;
      }
      if (i18n) {
        const pathLocale = (0, _normalizeLocalePath).normalizeLocalePath(info.pathname, i18n.locales);
        info.locale = pathLocale == null ? void 0 : pathLocale.detectedLocale;
        info.pathname = (pathLocale == null ? void 0 : pathLocale.pathname) || info.pathname;
      }
      return info;
    }
  }
});

// node_modules/next/dist/shared/lib/router/utils/add-path-suffix.js
var require_add_path_suffix = __commonJS({
  "node_modules/next/dist/shared/lib/router/utils/add-path-suffix.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.addPathSuffix = addPathSuffix;
    var _parsePath = require_parse_path();
    function addPathSuffix(path, suffix) {
      if (!path.startsWith("/") || !suffix) {
        return path;
      }
      const { pathname, query, hash } = (0, _parsePath).parsePath(path);
      return `${pathname}${suffix}${query}${hash}`;
    }
  }
});

// node_modules/next/dist/shared/lib/router/utils/format-next-pathname-info.js
var require_format_next_pathname_info = __commonJS({
  "node_modules/next/dist/shared/lib/router/utils/format-next-pathname-info.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.formatNextPathnameInfo = formatNextPathnameInfo;
    var _removeTrailingSlash = require_remove_trailing_slash();
    var _addPathPrefix = require_add_path_prefix();
    var _addPathSuffix = require_add_path_suffix();
    var _addLocale = require_add_locale();
    function formatNextPathnameInfo(info) {
      let pathname = (0, _addLocale).addLocale(info.pathname, info.locale, info.buildId ? void 0 : info.defaultLocale, info.ignorePrefix);
      if (info.buildId) {
        pathname = (0, _addPathSuffix).addPathSuffix((0, _addPathPrefix).addPathPrefix(pathname, `/_next/data/${info.buildId}`), info.pathname === "/" ? "index.json" : ".json");
      }
      pathname = (0, _addPathPrefix).addPathPrefix(pathname, info.basePath);
      return info.trailingSlash ? !info.buildId && !pathname.endsWith("/") ? (0, _addPathSuffix).addPathSuffix(pathname, "/") : pathname : (0, _removeTrailingSlash).removeTrailingSlash(pathname);
    }
  }
});

// node_modules/next/dist/shared/lib/router/utils/compare-states.js
var require_compare_states = __commonJS({
  "node_modules/next/dist/shared/lib/router/utils/compare-states.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.compareRouterStates = compareRouterStates;
    function compareRouterStates(a, b) {
      const stateKeys = Object.keys(a);
      if (stateKeys.length !== Object.keys(b).length)
        return false;
      for (let i = stateKeys.length; i--; ) {
        const key = stateKeys[i];
        if (key === "query") {
          const queryKeys = Object.keys(a.query);
          if (queryKeys.length !== Object.keys(b.query).length) {
            return false;
          }
          for (let j = queryKeys.length; j--; ) {
            const queryKey = queryKeys[j];
            if (!b.query.hasOwnProperty(queryKey) || a.query[queryKey] !== b.query[queryKey]) {
              return false;
            }
          }
        } else if (!b.hasOwnProperty(key) || a[key] !== b[key]) {
          return false;
        }
      }
      return true;
    }
  }
});

// node_modules/next/dist/shared/lib/router/utils/is-bot.js
var require_is_bot = __commonJS({
  "node_modules/next/dist/shared/lib/router/utils/is-bot.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.isBot = isBot;
    function isBot(userAgent) {
      return /Googlebot|Mediapartners-Google|AdsBot-Google|googleweblight|Storebot-Google|Google-PageRenderer|Bingbot|BingPreview|Slurp|DuckDuckBot|baiduspider|yandex|sogou|LinkedInBot|bitlybot|tumblr|vkShare|quora link preview|facebookexternalhit|facebookcatalog|Twitterbot|applebot|redditbot|Slackbot|Discordbot|WhatsApp|SkypeUriPreview|ia_archiver/i.test(userAgent);
    }
  }
});

// node_modules/next/dist/compiled/react-is/cjs/react-is.development.js
var require_react_is_development = __commonJS({
  "node_modules/next/dist/compiled/react-is/cjs/react-is.development.js"(exports) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        var REACT_ELEMENT_TYPE = 60103;
        var REACT_PORTAL_TYPE = 60106;
        var REACT_FRAGMENT_TYPE = 60107;
        var REACT_STRICT_MODE_TYPE = 60108;
        var REACT_PROFILER_TYPE = 60114;
        var REACT_PROVIDER_TYPE = 60109;
        var REACT_CONTEXT_TYPE = 60110;
        var REACT_FORWARD_REF_TYPE = 60112;
        var REACT_SUSPENSE_TYPE = 60113;
        var REACT_SUSPENSE_LIST_TYPE = 60120;
        var REACT_MEMO_TYPE = 60115;
        var REACT_LAZY_TYPE = 60116;
        var REACT_BLOCK_TYPE = 60121;
        var REACT_SERVER_BLOCK_TYPE = 60122;
        var REACT_FUNDAMENTAL_TYPE = 60117;
        var REACT_SCOPE_TYPE = 60119;
        var REACT_OPAQUE_ID_TYPE = 60128;
        var REACT_DEBUG_TRACING_MODE_TYPE = 60129;
        var REACT_OFFSCREEN_TYPE = 60130;
        var REACT_LEGACY_HIDDEN_TYPE = 60131;
        if (typeof Symbol === "function" && Symbol.for) {
          var symbolFor = Symbol.for;
          REACT_ELEMENT_TYPE = symbolFor("react.element");
          REACT_PORTAL_TYPE = symbolFor("react.portal");
          REACT_FRAGMENT_TYPE = symbolFor("react.fragment");
          REACT_STRICT_MODE_TYPE = symbolFor("react.strict_mode");
          REACT_PROFILER_TYPE = symbolFor("react.profiler");
          REACT_PROVIDER_TYPE = symbolFor("react.provider");
          REACT_CONTEXT_TYPE = symbolFor("react.context");
          REACT_FORWARD_REF_TYPE = symbolFor("react.forward_ref");
          REACT_SUSPENSE_TYPE = symbolFor("react.suspense");
          REACT_SUSPENSE_LIST_TYPE = symbolFor("react.suspense_list");
          REACT_MEMO_TYPE = symbolFor("react.memo");
          REACT_LAZY_TYPE = symbolFor("react.lazy");
          REACT_BLOCK_TYPE = symbolFor("react.block");
          REACT_SERVER_BLOCK_TYPE = symbolFor("react.server.block");
          REACT_FUNDAMENTAL_TYPE = symbolFor("react.fundamental");
          REACT_SCOPE_TYPE = symbolFor("react.scope");
          REACT_OPAQUE_ID_TYPE = symbolFor("react.opaque.id");
          REACT_DEBUG_TRACING_MODE_TYPE = symbolFor("react.debug_trace_mode");
          REACT_OFFSCREEN_TYPE = symbolFor("react.offscreen");
          REACT_LEGACY_HIDDEN_TYPE = symbolFor("react.legacy_hidden");
        }
        var enableScopeAPI = false;
        function isValidElementType(type) {
          if (typeof type === "string" || typeof type === "function") {
            return true;
          }
          if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || type === REACT_DEBUG_TRACING_MODE_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI) {
            return true;
          }
          if (typeof type === "object" && type !== null) {
            if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
              return true;
            }
          }
          return false;
        }
        function typeOf(object) {
          if (typeof object === "object" && object !== null) {
            var $$typeof = object.$$typeof;
            switch ($$typeof) {
              case REACT_ELEMENT_TYPE:
                var type = object.type;
                switch (type) {
                  case REACT_FRAGMENT_TYPE:
                  case REACT_PROFILER_TYPE:
                  case REACT_STRICT_MODE_TYPE:
                  case REACT_SUSPENSE_TYPE:
                  case REACT_SUSPENSE_LIST_TYPE:
                    return type;
                  default:
                    var $$typeofType = type && type.$$typeof;
                    switch ($$typeofType) {
                      case REACT_CONTEXT_TYPE:
                      case REACT_FORWARD_REF_TYPE:
                      case REACT_LAZY_TYPE:
                      case REACT_MEMO_TYPE:
                      case REACT_PROVIDER_TYPE:
                        return $$typeofType;
                      default:
                        return $$typeof;
                    }
                }
              case REACT_PORTAL_TYPE:
                return $$typeof;
            }
          }
          return void 0;
        }
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element = REACT_ELEMENT_TYPE;
        var ForwardRef = REACT_FORWARD_REF_TYPE;
        var Fragment = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false;
        var hasWarnedAboutDeprecatedIsConcurrentMode = false;
        function isAsyncMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsAsyncMode) {
              hasWarnedAboutDeprecatedIsAsyncMode = true;
              console["warn"]("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.");
            }
          }
          return false;
        }
        function isConcurrentMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsConcurrentMode) {
              hasWarnedAboutDeprecatedIsConcurrentMode = true;
              console["warn"]("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.");
            }
          }
          return false;
        }
        function isContextConsumer(object) {
          return typeOf(object) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object) {
          return typeOf(object) === REACT_PROVIDER_TYPE;
        }
        function isElement(object) {
          return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        function isForwardRef(object) {
          return typeOf(object) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment(object) {
          return typeOf(object) === REACT_FRAGMENT_TYPE;
        }
        function isLazy(object) {
          return typeOf(object) === REACT_LAZY_TYPE;
        }
        function isMemo(object) {
          return typeOf(object) === REACT_MEMO_TYPE;
        }
        function isPortal(object) {
          return typeOf(object) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object) {
          return typeOf(object) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object) {
          return typeOf(object) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object) {
          return typeOf(object) === REACT_SUSPENSE_TYPE;
        }
        exports.ContextConsumer = ContextConsumer;
        exports.ContextProvider = ContextProvider;
        exports.Element = Element;
        exports.ForwardRef = ForwardRef;
        exports.Fragment = Fragment;
        exports.Lazy = Lazy;
        exports.Memo = Memo;
        exports.Portal = Portal;
        exports.Profiler = Profiler;
        exports.StrictMode = StrictMode;
        exports.Suspense = Suspense;
        exports.isAsyncMode = isAsyncMode;
        exports.isConcurrentMode = isConcurrentMode;
        exports.isContextConsumer = isContextConsumer;
        exports.isContextProvider = isContextProvider;
        exports.isElement = isElement;
        exports.isForwardRef = isForwardRef;
        exports.isFragment = isFragment;
        exports.isLazy = isLazy;
        exports.isMemo = isMemo;
        exports.isPortal = isPortal;
        exports.isProfiler = isProfiler;
        exports.isStrictMode = isStrictMode;
        exports.isSuspense = isSuspense;
        exports.isValidElementType = isValidElementType;
        exports.typeOf = typeOf;
      })();
    }
  }
});

// node_modules/next/dist/compiled/react-is/index.js
var require_react_is = __commonJS({
  "node_modules/next/dist/compiled/react-is/index.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_is_development();
    }
  }
});

// node_modules/next/dist/shared/lib/router/router.js
var require_router = __commonJS({
  "node_modules/next/dist/shared/lib/router/router.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.matchesMiddleware = matchesMiddleware;
    exports.isLocalURL = isLocalURL;
    exports.interpolateAs = interpolateAs;
    exports.resolveHref = resolveHref;
    exports.createKey = createKey;
    exports.default = void 0;
    var _async_to_generator = require_async_to_generator().default;
    var _extends = require_extends().default;
    var _interop_require_default = require_interop_require_default().default;
    var _interop_require_wildcard = require_interop_require_wildcard().default;
    var _normalizeTrailingSlash = require_normalize_trailing_slash();
    var _removeTrailingSlash = require_remove_trailing_slash();
    var _routeLoader = require_route_loader();
    var _script = require_script();
    var _isError = _interop_require_wildcard(require_is_error());
    var _denormalizePagePath = require_denormalize_page_path();
    var _normalizeLocalePath = require_normalize_locale_path();
    var _mitt = _interop_require_default(require_mitt());
    var _utils = require_utils2();
    var _isDynamic = require_is_dynamic();
    var _parseRelativeUrl = require_parse_relative_url();
    var _querystring = require_querystring();
    var _resolveRewrites = _interop_require_default(require_resolve_rewrites());
    var _routeMatcher = require_route_matcher();
    var _routeRegex = require_route_regex();
    var _formatUrl = require_format_url();
    var _detectDomainLocale = require_detect_domain_locale2();
    var _parsePath = require_parse_path();
    var _addLocale = require_add_locale2();
    var _removeLocale = require_remove_locale();
    var _removeBasePath = require_remove_base_path();
    var _addBasePath = require_add_base_path();
    var _hasBasePath = require_has_base_path();
    var _getNextPathnameInfo = require_get_next_pathname_info();
    var _formatNextPathnameInfo = require_format_next_pathname_info();
    var _compareStates = require_compare_states();
    var _isBot = require_is_bot();
    function buildCancellationError() {
      return Object.assign(new Error("Route Cancelled"), {
        cancelled: true
      });
    }
    function matchesMiddleware(options) {
      return _matchesMiddleware.apply(this, arguments);
    }
    function _matchesMiddleware() {
      _matchesMiddleware = _async_to_generator(function* (options) {
        const matchers = yield Promise.resolve(options.router.pageLoader.getMiddleware());
        if (!matchers)
          return false;
        const { pathname: asPathname } = (0, _parsePath).parsePath(options.asPath);
        const cleanedAs = (0, _hasBasePath).hasBasePath(asPathname) ? (0, _removeBasePath).removeBasePath(asPathname) : asPathname;
        const asWithBasePathAndLocale = (0, _addBasePath).addBasePath((0, _addLocale).addLocale(cleanedAs, options.locale));
        return matchers.some((m) => new RegExp(m.regexp).test(asWithBasePathAndLocale));
      });
      return _matchesMiddleware.apply(this, arguments);
    }
    function stripOrigin(url) {
      const origin = (0, _utils).getLocationOrigin();
      return url.startsWith(origin) ? url.substring(origin.length) : url;
    }
    function omit(object, keys) {
      const omitted = {};
      Object.keys(object).forEach((key) => {
        if (!keys.includes(key)) {
          omitted[key] = object[key];
        }
      });
      return omitted;
    }
    function isLocalURL(url) {
      if (!(0, _utils).isAbsoluteUrl(url))
        return true;
      try {
        const locationOrigin = (0, _utils).getLocationOrigin();
        const resolved = new URL(url, locationOrigin);
        return resolved.origin === locationOrigin && (0, _hasBasePath).hasBasePath(resolved.pathname);
      } catch (_) {
        return false;
      }
    }
    function interpolateAs(route, asPathname, query) {
      let interpolatedRoute = "";
      const dynamicRegex = (0, _routeRegex).getRouteRegex(route);
      const dynamicGroups = dynamicRegex.groups;
      const dynamicMatches = (asPathname !== route ? (0, _routeMatcher).getRouteMatcher(dynamicRegex)(asPathname) : "") || query;
      interpolatedRoute = route;
      const params = Object.keys(dynamicGroups);
      if (!params.every((param) => {
        let value = dynamicMatches[param] || "";
        const { repeat, optional } = dynamicGroups[param];
        let replaced = `[${repeat ? "..." : ""}${param}]`;
        if (optional) {
          replaced = `${!value ? "/" : ""}[${replaced}]`;
        }
        if (repeat && !Array.isArray(value))
          value = [
            value
          ];
        return (optional || param in dynamicMatches) && (interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map(
          (segment) => encodeURIComponent(segment)
        ).join("/") : encodeURIComponent(value)) || "/");
      })) {
        interpolatedRoute = "";
      }
      return {
        params,
        result: interpolatedRoute
      };
    }
    function resolveHref(router, href, resolveAs) {
      let base;
      let urlAsString = typeof href === "string" ? href : (0, _formatUrl).formatWithValidation(href);
      const urlProtoMatch = urlAsString.match(/^[a-zA-Z]{1,}:\/\//);
      const urlAsStringNoProto = urlProtoMatch ? urlAsString.slice(urlProtoMatch[0].length) : urlAsString;
      const urlParts = urlAsStringNoProto.split("?");
      if ((urlParts[0] || "").match(/(\/\/|\\)/)) {
        console.error(`Invalid href passed to next/router: ${urlAsString}, repeated forward-slashes (//) or backslashes \\ are not valid in the href`);
        const normalizedUrl = (0, _utils).normalizeRepeatedSlashes(urlAsStringNoProto);
        urlAsString = (urlProtoMatch ? urlProtoMatch[0] : "") + normalizedUrl;
      }
      if (!isLocalURL(urlAsString)) {
        return resolveAs ? [
          urlAsString
        ] : urlAsString;
      }
      try {
        base = new URL(urlAsString.startsWith("#") ? router.asPath : router.pathname, "http://n");
      } catch (_) {
        base = new URL("/", "http://n");
      }
      try {
        const finalUrl = new URL(urlAsString, base);
        finalUrl.pathname = (0, _normalizeTrailingSlash).normalizePathTrailingSlash(finalUrl.pathname);
        let interpolatedAs = "";
        if ((0, _isDynamic).isDynamicRoute(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
          const query = (0, _querystring).searchParamsToUrlQuery(finalUrl.searchParams);
          const { result, params } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);
          if (result) {
            interpolatedAs = (0, _formatUrl).formatWithValidation({
              pathname: result,
              hash: finalUrl.hash,
              query: omit(query, params)
            });
          }
        }
        const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
        return resolveAs ? [
          resolvedHref,
          interpolatedAs || resolvedHref
        ] : resolvedHref;
      } catch (_1) {
        return resolveAs ? [
          urlAsString
        ] : urlAsString;
      }
    }
    function prepareUrlAs(router, url, as) {
      let [resolvedHref, resolvedAs] = resolveHref(router, url, true);
      const origin = (0, _utils).getLocationOrigin();
      const hrefHadOrigin = resolvedHref.startsWith(origin);
      const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
      resolvedHref = stripOrigin(resolvedHref);
      resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
      const preparedUrl = hrefHadOrigin ? resolvedHref : (0, _addBasePath).addBasePath(resolvedHref);
      const preparedAs = as ? stripOrigin(resolveHref(router, as)) : resolvedAs || resolvedHref;
      return {
        url: preparedUrl,
        as: asHadOrigin ? preparedAs : (0, _addBasePath).addBasePath(preparedAs)
      };
    }
    function resolveDynamicRoute(pathname, pages) {
      const cleanPathname = (0, _removeTrailingSlash).removeTrailingSlash((0, _denormalizePagePath).denormalizePagePath(pathname));
      if (cleanPathname === "/404" || cleanPathname === "/_error") {
        return pathname;
      }
      if (!pages.includes(cleanPathname)) {
        pages.some((page) => {
          if ((0, _isDynamic).isDynamicRoute(page) && (0, _routeRegex).getRouteRegex(page).re.test(cleanPathname)) {
            pathname = page;
            return true;
          }
        });
      }
      return (0, _removeTrailingSlash).removeTrailingSlash(pathname);
    }
    function getMiddlewareData(source, response, options) {
      const nextConfig = {
        basePath: options.router.basePath,
        i18n: {
          locales: options.router.locales
        },
        trailingSlash: Boolean(process.env.__NEXT_TRAILING_SLASH)
      };
      const rewriteHeader = response.headers.get("x-nextjs-rewrite");
      let rewriteTarget = rewriteHeader || response.headers.get("x-nextjs-matched-path");
      const matchedPath = response.headers.get("x-matched-path");
      if (matchedPath && !rewriteTarget && !matchedPath.includes("__next_data_catchall") && !matchedPath.includes("/_error") && !matchedPath.includes("/404")) {
        rewriteTarget = matchedPath;
      }
      if (rewriteTarget) {
        if (rewriteTarget.startsWith("/")) {
          const parsedRewriteTarget = (0, _parseRelativeUrl).parseRelativeUrl(rewriteTarget);
          const pathnameInfo = (0, _getNextPathnameInfo).getNextPathnameInfo(parsedRewriteTarget.pathname, {
            nextConfig,
            parseData: true
          });
          let fsPathname = (0, _removeTrailingSlash).removeTrailingSlash(pathnameInfo.pathname);
          return Promise.all([
            options.router.pageLoader.getPageList(),
            (0, _routeLoader).getClientBuildManifest()
          ]).then(([pages, { __rewrites: rewrites }]) => {
            let as = (0, _addLocale).addLocale(pathnameInfo.pathname, pathnameInfo.locale);
            if ((0, _isDynamic).isDynamicRoute(as) || !rewriteHeader && pages.includes((0, _normalizeLocalePath).normalizeLocalePath((0, _removeBasePath).removeBasePath(as), options.router.locales).pathname)) {
              const parsedSource = (0, _getNextPathnameInfo).getNextPathnameInfo((0, _parseRelativeUrl).parseRelativeUrl(source).pathname, {
                parseData: true
              });
              as = (0, _addBasePath).addBasePath(parsedSource.pathname);
              parsedRewriteTarget.pathname = as;
            }
            if (process.env.__NEXT_HAS_REWRITES) {
              const result = (0, _resolveRewrites).default(as, pages, rewrites, parsedRewriteTarget.query, (path) => resolveDynamicRoute(path, pages), options.router.locales);
              if (result.matchedPage) {
                parsedRewriteTarget.pathname = result.parsedAs.pathname;
                as = parsedRewriteTarget.pathname;
                Object.assign(parsedRewriteTarget.query, result.parsedAs.query);
              }
            } else if (!pages.includes(fsPathname)) {
              const resolvedPathname = resolveDynamicRoute(fsPathname, pages);
              if (resolvedPathname !== fsPathname) {
                fsPathname = resolvedPathname;
              }
            }
            const resolvedHref = !pages.includes(fsPathname) ? resolveDynamicRoute((0, _normalizeLocalePath).normalizeLocalePath((0, _removeBasePath).removeBasePath(parsedRewriteTarget.pathname), options.router.locales).pathname, pages) : fsPathname;
            if ((0, _isDynamic).isDynamicRoute(resolvedHref)) {
              const matches = (0, _routeMatcher).getRouteMatcher((0, _routeRegex).getRouteRegex(resolvedHref))(as);
              Object.assign(parsedRewriteTarget.query, matches || {});
            }
            return {
              type: "rewrite",
              parsedAs: parsedRewriteTarget,
              resolvedHref
            };
          });
        }
        const src = (0, _parsePath).parsePath(source);
        const pathname = (0, _formatNextPathnameInfo).formatNextPathnameInfo(_extends({}, (0, _getNextPathnameInfo).getNextPathnameInfo(src.pathname, {
          nextConfig,
          parseData: true
        }), {
          defaultLocale: options.router.defaultLocale,
          buildId: ""
        }));
        return Promise.resolve({
          type: "redirect-external",
          destination: `${pathname}${src.query}${src.hash}`
        });
      }
      const redirectTarget = response.headers.get("x-nextjs-redirect");
      if (redirectTarget) {
        if (redirectTarget.startsWith("/")) {
          const src = (0, _parsePath).parsePath(redirectTarget);
          const pathname = (0, _formatNextPathnameInfo).formatNextPathnameInfo(_extends({}, (0, _getNextPathnameInfo).getNextPathnameInfo(src.pathname, {
            nextConfig,
            parseData: true
          }), {
            defaultLocale: options.router.defaultLocale,
            buildId: ""
          }));
          return Promise.resolve({
            type: "redirect-internal",
            newAs: `${pathname}${src.query}${src.hash}`,
            newUrl: `${pathname}${src.query}${src.hash}`
          });
        }
        return Promise.resolve({
          type: "redirect-external",
          destination: redirectTarget
        });
      }
      return Promise.resolve({
        type: "next"
      });
    }
    function withMiddlewareEffects(options) {
      return matchesMiddleware(options).then((matches) => {
        if (matches && options.fetchData) {
          return options.fetchData().then((data) => getMiddlewareData(data.dataHref, data.response, options).then((effect) => ({
            dataHref: data.dataHref,
            cacheKey: data.cacheKey,
            json: data.json,
            response: data.response,
            text: data.text,
            effect
          }))).catch((_err) => {
            return null;
          });
        }
        return null;
      });
    }
    var manualScrollRestoration = process.env.__NEXT_SCROLL_RESTORATION && typeof window !== "undefined" && "scrollRestoration" in window.history && !!function() {
      try {
        let v = "__next";
        return sessionStorage.setItem(v, v), sessionStorage.removeItem(v), true;
      } catch (n) {
      }
    }();
    var SSG_DATA_NOT_FOUND = Symbol("SSG_DATA_NOT_FOUND");
    function fetchRetry(url, attempts, options) {
      return fetch(url, {
        credentials: "same-origin",
        method: options.method || "GET",
        headers: Object.assign({}, options.headers, {
          "x-nextjs-data": "1"
        })
      }).then((response) => {
        return !response.ok && attempts > 1 && response.status >= 500 ? fetchRetry(url, attempts - 1, options) : response;
      });
    }
    function handleSmoothScroll(fn) {
      const htmlElement = document.documentElement;
      const existing = htmlElement.style.scrollBehavior;
      htmlElement.style.scrollBehavior = "auto";
      fn();
      htmlElement.style.scrollBehavior = existing;
    }
    function tryToParseAsJSON(text3) {
      try {
        return JSON.parse(text3);
      } catch (error) {
        return null;
      }
    }
    function fetchNextData({ dataHref, inflightCache, isPrefetch, hasMiddleware, isServerRender, parseJSON, persistCache, isBackground, unstable_skipClientCache }) {
      const { href: cacheKey } = new URL(dataHref, window.location.href);
      var ref1;
      const getData = (params) => {
        return fetchRetry(dataHref, isServerRender ? 3 : 1, {
          headers: isPrefetch ? {
            purpose: "prefetch"
          } : {},
          method: (ref1 = params == null ? void 0 : params.method) != null ? ref1 : "GET"
        }).then((response) => {
          if (response.ok && (params == null ? void 0 : params.method) === "HEAD") {
            return {
              dataHref,
              response,
              text: "",
              json: {},
              cacheKey
            };
          }
          return response.text().then((text3) => {
            if (!response.ok) {
              if (hasMiddleware && [
                301,
                302,
                307,
                308
              ].includes(response.status)) {
                return {
                  dataHref,
                  response,
                  text: text3,
                  json: {},
                  cacheKey
                };
              }
              if (!hasMiddleware && response.status === 404) {
                var ref;
                if ((ref = tryToParseAsJSON(text3)) == null ? void 0 : ref.notFound) {
                  return {
                    dataHref,
                    json: {
                      notFound: SSG_DATA_NOT_FOUND
                    },
                    response,
                    text: text3,
                    cacheKey
                  };
                }
              }
              const error = new Error(`Failed to load static props`);
              if (!isServerRender) {
                (0, _routeLoader).markAssetError(error);
              }
              throw error;
            }
            return {
              dataHref,
              json: parseJSON ? tryToParseAsJSON(text3) : null,
              response,
              text: text3,
              cacheKey
            };
          });
        }).then((data) => {
          if (!persistCache || true) {
            delete inflightCache[cacheKey];
          }
          return data;
        }).catch((err) => {
          delete inflightCache[cacheKey];
          throw err;
        });
      };
      if (unstable_skipClientCache && persistCache) {
        return getData({}).then((data) => {
          inflightCache[cacheKey] = Promise.resolve(data);
          return data;
        });
      }
      if (inflightCache[cacheKey] !== void 0) {
        return inflightCache[cacheKey];
      }
      return inflightCache[cacheKey] = getData(isBackground ? {
        method: "HEAD"
      } : {});
    }
    function createKey() {
      return Math.random().toString(36).slice(2, 10);
    }
    function handleHardNavigation({ url, router }) {
      if (url === (0, _addBasePath).addBasePath((0, _addLocale).addLocale(router.asPath, router.locale))) {
        throw new Error(`Invariant: attempted to hard navigate to the same URL ${url} ${location.href}`);
      }
      window.location.href = url;
    }
    var getCancelledHandler = ({ route, router }) => {
      let cancelled = false;
      const cancel = router.clc = () => {
        cancelled = true;
      };
      const handleCancelled = () => {
        if (cancelled) {
          const error = new Error(`Abort fetching component for route: "${route}"`);
          error.cancelled = true;
          throw error;
        }
        if (cancel === router.clc) {
          router.clc = null;
        }
      };
      return handleCancelled;
    };
    var Router = class {
      reload() {
        window.location.reload();
      }
      back() {
        window.history.back();
      }
      push(url, as, options = {}) {
        if (process.env.__NEXT_SCROLL_RESTORATION) {
          if (manualScrollRestoration) {
            try {
              sessionStorage.setItem("__next_scroll_" + this._key, JSON.stringify({
                x: self.pageXOffset,
                y: self.pageYOffset
              }));
            } catch (e) {
            }
          }
        }
        ({ url, as } = prepareUrlAs(this, url, as));
        return this.change("pushState", url, as, options);
      }
      replace(url, as, options = {}) {
        ({ url, as } = prepareUrlAs(this, url, as));
        return this.change("replaceState", url, as, options);
      }
      change(method, url, as, options, forcedScroll) {
        var _this = this;
        return _async_to_generator(function* () {
          if (!isLocalURL(url)) {
            handleHardNavigation({
              url,
              router: _this
            });
            return false;
          }
          const isQueryUpdating = options._h;
          const shouldResolveHref = isQueryUpdating || options._shouldResolveHref || (0, _parsePath).parsePath(url).pathname === (0, _parsePath).parsePath(as).pathname;
          const nextState = _extends({}, _this.state);
          const readyStateChange = _this.isReady !== true;
          _this.isReady = true;
          const isSsr = _this.isSsr;
          if (!isQueryUpdating) {
            _this.isSsr = false;
          }
          if (isQueryUpdating && _this.clc) {
            return false;
          }
          const prevLocale = nextState.locale;
          if (process.env.__NEXT_I18N_SUPPORT) {
            nextState.locale = options.locale === false ? _this.defaultLocale : options.locale || nextState.locale;
            if (typeof options.locale === "undefined") {
              options.locale = nextState.locale;
            }
            const parsedAs = (0, _parseRelativeUrl).parseRelativeUrl((0, _hasBasePath).hasBasePath(as) ? (0, _removeBasePath).removeBasePath(as) : as);
            const localePathResult = (0, _normalizeLocalePath).normalizeLocalePath(parsedAs.pathname, _this.locales);
            if (localePathResult.detectedLocale) {
              nextState.locale = localePathResult.detectedLocale;
              parsedAs.pathname = (0, _addBasePath).addBasePath(parsedAs.pathname);
              as = (0, _formatUrl).formatWithValidation(parsedAs);
              url = (0, _addBasePath).addBasePath((0, _normalizeLocalePath).normalizeLocalePath((0, _hasBasePath).hasBasePath(url) ? (0, _removeBasePath).removeBasePath(url) : url, _this.locales).pathname);
            }
            let didNavigate = false;
            if (process.env.__NEXT_I18N_SUPPORT) {
              var ref;
              if (!((ref = _this.locales) == null ? void 0 : ref.includes(nextState.locale))) {
                parsedAs.pathname = (0, _addLocale).addLocale(parsedAs.pathname, nextState.locale);
                handleHardNavigation({
                  url: (0, _formatUrl).formatWithValidation(parsedAs),
                  router: _this
                });
                didNavigate = true;
              }
            }
            const detectedDomain = (0, _detectDomainLocale).detectDomainLocale(_this.domainLocales, void 0, nextState.locale);
            if (process.env.__NEXT_I18N_SUPPORT) {
              if (!didNavigate && detectedDomain && _this.isLocaleDomain && self.location.hostname !== detectedDomain.domain) {
                const asNoBasePath = (0, _removeBasePath).removeBasePath(as);
                handleHardNavigation({
                  url: `http${detectedDomain.http ? "" : "s"}://${detectedDomain.domain}${(0, _addBasePath).addBasePath(`${nextState.locale === detectedDomain.defaultLocale ? "" : `/${nextState.locale}`}${asNoBasePath === "/" ? "" : asNoBasePath}` || "/")}`,
                  router: _this
                });
                didNavigate = true;
              }
            }
            if (didNavigate) {
              return new Promise(() => {
              });
            }
          }
          if (_utils.ST) {
            performance.mark("routeChange");
          }
          const { shallow = false, scroll = true } = options;
          const routeProps = {
            shallow
          };
          if (_this._inFlightRoute && _this.clc) {
            if (!isSsr) {
              Router.events.emit("routeChangeError", buildCancellationError(), _this._inFlightRoute, routeProps);
            }
            _this.clc();
            _this.clc = null;
          }
          as = (0, _addBasePath).addBasePath((0, _addLocale).addLocale((0, _hasBasePath).hasBasePath(as) ? (0, _removeBasePath).removeBasePath(as) : as, options.locale, _this.defaultLocale));
          const cleanedAs = (0, _removeLocale).removeLocale((0, _hasBasePath).hasBasePath(as) ? (0, _removeBasePath).removeBasePath(as) : as, nextState.locale);
          _this._inFlightRoute = as;
          const localeChange = prevLocale !== nextState.locale;
          if (!isQueryUpdating && _this.onlyAHashChange(cleanedAs) && !localeChange) {
            nextState.asPath = cleanedAs;
            Router.events.emit("hashChangeStart", as, routeProps);
            _this.changeState(method, url, as, _extends({}, options, {
              scroll: false
            }));
            if (scroll) {
              _this.scrollToHash(cleanedAs);
            }
            try {
              yield _this.set(nextState, _this.components[nextState.route], null);
            } catch (err) {
              if ((0, _isError).default(err) && err.cancelled) {
                Router.events.emit("routeChangeError", err, cleanedAs, routeProps);
              }
              throw err;
            }
            Router.events.emit("hashChangeComplete", as, routeProps);
            return true;
          }
          let parsed = (0, _parseRelativeUrl).parseRelativeUrl(url);
          let { pathname, query } = parsed;
          let pages, rewrites;
          try {
            [pages, { __rewrites: rewrites }] = yield Promise.all([
              _this.pageLoader.getPageList(),
              (0, _routeLoader).getClientBuildManifest(),
              _this.pageLoader.getMiddleware()
            ]);
          } catch (err) {
            handleHardNavigation({
              url: as,
              router: _this
            });
            return false;
          }
          if (!_this.urlIsNew(cleanedAs) && !localeChange) {
            method = "replaceState";
          }
          let resolvedAs = as;
          pathname = pathname ? (0, _removeTrailingSlash).removeTrailingSlash((0, _removeBasePath).removeBasePath(pathname)) : pathname;
          const isMiddlewareMatch = yield matchesMiddleware({
            asPath: as,
            locale: nextState.locale,
            router: _this
          });
          if (options.shallow && isMiddlewareMatch) {
            pathname = _this.pathname;
          }
          if (shouldResolveHref && pathname !== "/_error") {
            options._shouldResolveHref = true;
            if (process.env.__NEXT_HAS_REWRITES && as.startsWith("/")) {
              const rewritesResult = (0, _resolveRewrites).default((0, _addBasePath).addBasePath((0, _addLocale).addLocale(cleanedAs, nextState.locale), true), pages, rewrites, query, (p) => resolveDynamicRoute(p, pages), _this.locales);
              if (rewritesResult.externalDest) {
                handleHardNavigation({
                  url: as,
                  router: _this
                });
                return true;
              }
              if (!isMiddlewareMatch) {
                resolvedAs = rewritesResult.asPath;
              }
              if (rewritesResult.matchedPage && rewritesResult.resolvedHref) {
                pathname = rewritesResult.resolvedHref;
                parsed.pathname = (0, _addBasePath).addBasePath(pathname);
                if (!isMiddlewareMatch) {
                  url = (0, _formatUrl).formatWithValidation(parsed);
                }
              }
            } else {
              parsed.pathname = resolveDynamicRoute(pathname, pages);
              if (parsed.pathname !== pathname) {
                pathname = parsed.pathname;
                parsed.pathname = (0, _addBasePath).addBasePath(pathname);
                if (!isMiddlewareMatch) {
                  url = (0, _formatUrl).formatWithValidation(parsed);
                }
              }
            }
          }
          if (!isLocalURL(as)) {
            if (true) {
              throw new Error(`Invalid href: "${url}" and as: "${as}", received relative href and external as
See more info: https://nextjs.org/docs/messages/invalid-relative-url-external-as`);
            }
            handleHardNavigation({
              url: as,
              router: _this
            });
            return false;
          }
          resolvedAs = (0, _removeLocale).removeLocale((0, _removeBasePath).removeBasePath(resolvedAs), nextState.locale);
          let route = (0, _removeTrailingSlash).removeTrailingSlash(pathname);
          let routeMatch = false;
          if ((0, _isDynamic).isDynamicRoute(route)) {
            const parsedAs = (0, _parseRelativeUrl).parseRelativeUrl(resolvedAs);
            const asPathname = parsedAs.pathname;
            const routeRegex = (0, _routeRegex).getRouteRegex(route);
            routeMatch = (0, _routeMatcher).getRouteMatcher(routeRegex)(asPathname);
            const shouldInterpolate = route === asPathname;
            const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};
            if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
              const missingParams = Object.keys(routeRegex.groups).filter((param) => !query[param]);
              if (missingParams.length > 0 && !isMiddlewareMatch) {
                if (true) {
                  console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide the params: ${missingParams.join(", ")} in the \`href\`'s \`query\``);
                }
                throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(", ")}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://nextjs.org/docs/messages/${shouldInterpolate ? "href-interpolation-failed" : "incompatible-href-as"}`);
              }
            } else if (shouldInterpolate) {
              as = (0, _formatUrl).formatWithValidation(Object.assign({}, parsedAs, {
                pathname: interpolatedAs.result,
                query: omit(query, interpolatedAs.params)
              }));
            } else {
              Object.assign(query, routeMatch);
            }
          }
          if (!isQueryUpdating) {
            Router.events.emit("routeChangeStart", as, routeProps);
          }
          try {
            var ref2, ref3;
            let routeInfo = yield _this.getRouteInfo({
              route,
              pathname,
              query,
              as,
              resolvedAs,
              routeProps,
              locale: nextState.locale,
              isPreview: nextState.isPreview,
              hasMiddleware: isMiddlewareMatch
            });
            if ("route" in routeInfo && isMiddlewareMatch) {
              pathname = routeInfo.route || route;
              route = pathname;
              if (!routeProps.shallow) {
                query = Object.assign({}, routeInfo.query || {}, query);
              }
              const cleanedParsedPathname = (0, _hasBasePath).hasBasePath(parsed.pathname) ? (0, _removeBasePath).removeBasePath(parsed.pathname) : parsed.pathname;
              if (routeMatch && pathname !== cleanedParsedPathname) {
                Object.keys(routeMatch).forEach((key) => {
                  if (routeMatch && query[key] === routeMatch[key]) {
                    delete query[key];
                  }
                });
              }
              if ((0, _isDynamic).isDynamicRoute(pathname)) {
                const prefixedAs = !routeProps.shallow && routeInfo.resolvedAs ? routeInfo.resolvedAs : (0, _addBasePath).addBasePath((0, _addLocale).addLocale(new URL(as, location.href).pathname, nextState.locale), true);
                let rewriteAs = prefixedAs;
                if ((0, _hasBasePath).hasBasePath(rewriteAs)) {
                  rewriteAs = (0, _removeBasePath).removeBasePath(rewriteAs);
                }
                if (process.env.__NEXT_I18N_SUPPORT) {
                  const localeResult = (0, _normalizeLocalePath).normalizeLocalePath(rewriteAs, _this.locales);
                  nextState.locale = localeResult.detectedLocale || nextState.locale;
                  rewriteAs = localeResult.pathname;
                }
                const routeRegex = (0, _routeRegex).getRouteRegex(pathname);
                const curRouteMatch = (0, _routeMatcher).getRouteMatcher(routeRegex)(rewriteAs);
                if (curRouteMatch) {
                  Object.assign(query, curRouteMatch);
                }
              }
            }
            if ("type" in routeInfo) {
              if (routeInfo.type === "redirect-internal") {
                return _this.change(method, routeInfo.newUrl, routeInfo.newAs, options);
              } else {
                handleHardNavigation({
                  url: routeInfo.destination,
                  router: _this
                });
                return new Promise(() => {
                });
              }
            }
            let { error, props, __N_SSG, __N_SSP } = routeInfo;
            const component = routeInfo.Component;
            if (component && component.unstable_scriptLoader) {
              const scripts = [].concat(component.unstable_scriptLoader());
              scripts.forEach((script) => {
                (0, _script).handleClientScriptLoad(script.props);
              });
            }
            if ((__N_SSG || __N_SSP) && props) {
              if (props.pageProps && props.pageProps.__N_REDIRECT) {
                options.locale = false;
                const destination = props.pageProps.__N_REDIRECT;
                if (destination.startsWith("/") && props.pageProps.__N_REDIRECT_BASE_PATH !== false) {
                  const parsedHref = (0, _parseRelativeUrl).parseRelativeUrl(destination);
                  parsedHref.pathname = resolveDynamicRoute(parsedHref.pathname, pages);
                  const { url: newUrl, as: newAs } = prepareUrlAs(_this, destination, destination);
                  return _this.change(method, newUrl, newAs, options);
                }
                handleHardNavigation({
                  url: destination,
                  router: _this
                });
                return new Promise(() => {
                });
              }
              nextState.isPreview = !!props.__N_PREVIEW;
              if (props.notFound === SSG_DATA_NOT_FOUND) {
                let notFoundRoute;
                try {
                  yield _this.fetchComponent("/404");
                  notFoundRoute = "/404";
                } catch (_) {
                  notFoundRoute = "/_error";
                }
                routeInfo = yield _this.getRouteInfo({
                  route: notFoundRoute,
                  pathname: notFoundRoute,
                  query,
                  as,
                  resolvedAs,
                  routeProps: {
                    shallow: false
                  },
                  locale: nextState.locale,
                  isPreview: nextState.isPreview
                });
                if ("type" in routeInfo) {
                  throw new Error(`Unexpected middleware effect on /404`);
                }
              }
            }
            Router.events.emit("beforeHistoryChange", as, routeProps);
            _this.changeState(method, url, as, options);
            if (isQueryUpdating && pathname === "/_error" && ((ref2 = self.__NEXT_DATA__.props) == null ? void 0 : (ref3 = ref2.pageProps) == null ? void 0 : ref3.statusCode) === 500 && (props == null ? void 0 : props.pageProps)) {
              props.pageProps.statusCode = 500;
            }
            var _route;
            const isValidShallowRoute = options.shallow && nextState.route === ((_route = routeInfo.route) != null ? _route : route);
            var _scroll;
            const shouldScroll = (_scroll = options.scroll) != null ? _scroll : !options._h && !isValidShallowRoute;
            const resetScroll = shouldScroll ? {
              x: 0,
              y: 0
            } : null;
            const upcomingRouterState = _extends({}, nextState, {
              route,
              pathname,
              query,
              asPath: cleanedAs,
              isFallback: false
            });
            const upcomingScrollState = forcedScroll != null ? forcedScroll : resetScroll;
            const canSkipUpdating = options._h && !upcomingScrollState && !readyStateChange && !localeChange && (0, _compareStates).compareRouterStates(upcomingRouterState, _this.state);
            if (!canSkipUpdating) {
              yield _this.set(upcomingRouterState, routeInfo, upcomingScrollState).catch((e) => {
                if (e.cancelled)
                  error = error || e;
                else
                  throw e;
              });
              if (error) {
                if (!isQueryUpdating) {
                  Router.events.emit("routeChangeError", error, cleanedAs, routeProps);
                }
                throw error;
              }
              if (process.env.__NEXT_I18N_SUPPORT) {
                if (nextState.locale) {
                  document.documentElement.lang = nextState.locale;
                }
              }
              if (!isQueryUpdating) {
                Router.events.emit("routeChangeComplete", as, routeProps);
              }
              const hashRegex = /#.+$/;
              if (shouldScroll && hashRegex.test(as)) {
                _this.scrollToHash(as);
              }
            }
            return true;
          } catch (err1) {
            if ((0, _isError).default(err1) && err1.cancelled) {
              return false;
            }
            throw err1;
          }
        })();
      }
      changeState(method, url, as, options = {}) {
        if (true) {
          if (typeof window.history === "undefined") {
            console.error(`Warning: window.history is not available.`);
            return;
          }
          if (typeof window.history[method] === "undefined") {
            console.error(`Warning: window.history.${method} is not available`);
            return;
          }
        }
        if (method !== "pushState" || (0, _utils).getURL() !== as) {
          this._shallow = options.shallow;
          window.history[method](
            {
              url,
              as,
              options,
              __N: true,
              key: this._key = method !== "pushState" ? this._key : createKey()
            },
            "",
            as
          );
        }
      }
      handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
        var _this = this;
        return _async_to_generator(function* () {
          console.error(err);
          if (err.cancelled) {
            throw err;
          }
          if ((0, _routeLoader).isAssetError(err) || loadErrorFail) {
            Router.events.emit("routeChangeError", err, as, routeProps);
            handleHardNavigation({
              url: as,
              router: _this
            });
            throw buildCancellationError();
          }
          try {
            let props;
            const { page: Component, styleSheets } = yield _this.fetchComponent("/_error");
            const routeInfo = {
              props,
              Component,
              styleSheets,
              err,
              error: err
            };
            if (!routeInfo.props) {
              try {
                routeInfo.props = yield _this.getInitialProps(Component, {
                  err,
                  pathname,
                  query
                });
              } catch (gipErr) {
                console.error("Error in error page `getInitialProps`: ", gipErr);
                routeInfo.props = {};
              }
            }
            return routeInfo;
          } catch (routeInfoErr) {
            return _this.handleRouteInfoError((0, _isError).default(routeInfoErr) ? routeInfoErr : new Error(routeInfoErr + ""), pathname, query, as, routeProps, true);
          }
        })();
      }
      getRouteInfo({ route: requestedRoute, pathname, query, as, resolvedAs, routeProps, locale, hasMiddleware, isPreview, unstable_skipClientCache }) {
        var _this = this;
        return _async_to_generator(function* () {
          let route = requestedRoute;
          try {
            var ref, ref4, ref5;
            const handleCancelled = getCancelledHandler({
              route,
              router: _this
            });
            let existingInfo = _this.components[route];
            if (routeProps.shallow && existingInfo && _this.route === route) {
              return existingInfo;
            }
            if (hasMiddleware) {
              existingInfo = void 0;
            }
            let cachedRouteInfo = existingInfo && !("initial" in existingInfo) && false ? existingInfo : void 0;
            const fetchNextDataParams = {
              dataHref: _this.pageLoader.getDataHref({
                href: (0, _formatUrl).formatWithValidation({
                  pathname,
                  query
                }),
                skipInterpolation: true,
                asPath: resolvedAs,
                locale
              }),
              hasMiddleware: true,
              isServerRender: _this.isSsr,
              parseJSON: true,
              inflightCache: _this.sdc,
              persistCache: !isPreview,
              isPrefetch: false,
              unstable_skipClientCache
            };
            const data = yield withMiddlewareEffects({
              fetchData: () => fetchNextData(fetchNextDataParams),
              asPath: resolvedAs,
              locale,
              router: _this
            });
            handleCancelled();
            if ((data == null ? void 0 : (ref = data.effect) == null ? void 0 : ref.type) === "redirect-internal" || (data == null ? void 0 : (ref4 = data.effect) == null ? void 0 : ref4.type) === "redirect-external") {
              return data.effect;
            }
            if ((data == null ? void 0 : (ref5 = data.effect) == null ? void 0 : ref5.type) === "rewrite") {
              route = (0, _removeTrailingSlash).removeTrailingSlash(data.effect.resolvedHref);
              pathname = data.effect.resolvedHref;
              query = _extends({}, query, data.effect.parsedAs.query);
              resolvedAs = (0, _removeBasePath).removeBasePath((0, _normalizeLocalePath).normalizeLocalePath(data.effect.parsedAs.pathname, _this.locales).pathname);
              existingInfo = _this.components[route];
              if (routeProps.shallow && existingInfo && _this.route === route && !hasMiddleware) {
                return _extends({}, existingInfo, {
                  route
                });
              }
            }
            if (route === "/api" || route.startsWith("/api/")) {
              handleHardNavigation({
                url: as,
                router: _this
              });
              return new Promise(() => {
              });
            }
            const routeInfo = cachedRouteInfo || (yield _this.fetchComponent(route).then((res) => ({
              Component: res.page,
              styleSheets: res.styleSheets,
              __N_SSG: res.mod.__N_SSG,
              __N_SSP: res.mod.__N_SSP
            })));
            if (true) {
              const { isValidElementType } = require_react_is();
              if (!isValidElementType(routeInfo.Component)) {
                throw new Error(`The default export is not a React Component in page: "${pathname}"`);
              }
            }
            const shouldFetchData = routeInfo.__N_SSG || routeInfo.__N_SSP;
            const { props, cacheKey } = yield _this._getData(_async_to_generator(function* () {
              if (shouldFetchData) {
                const { json, cacheKey: _cacheKey } = (data == null ? void 0 : data.json) ? data : yield fetchNextData({
                  dataHref: _this.pageLoader.getDataHref({
                    href: (0, _formatUrl).formatWithValidation({
                      pathname,
                      query
                    }),
                    asPath: resolvedAs,
                    locale
                  }),
                  isServerRender: _this.isSsr,
                  parseJSON: true,
                  inflightCache: _this.sdc,
                  persistCache: !isPreview,
                  isPrefetch: false,
                  unstable_skipClientCache
                });
                return {
                  cacheKey: _cacheKey,
                  props: json || {}
                };
              }
              return {
                headers: {},
                cacheKey: "",
                props: yield _this.getInitialProps(
                  routeInfo.Component,
                  {
                    pathname,
                    query,
                    asPath: as,
                    locale,
                    locales: _this.locales,
                    defaultLocale: _this.defaultLocale
                  }
                )
              };
            }));
            if (routeInfo.__N_SSP && fetchNextDataParams.dataHref) {
              delete _this.sdc[cacheKey];
            }
            if (!_this.isPreview && routeInfo.__N_SSG && false) {
              fetchNextData(Object.assign({}, fetchNextDataParams, {
                isBackground: true,
                persistCache: false,
                inflightCache: backgroundCache
              })).catch(() => {
              });
            }
            props.pageProps = Object.assign({}, props.pageProps);
            routeInfo.props = props;
            routeInfo.route = route;
            routeInfo.query = query;
            routeInfo.resolvedAs = resolvedAs;
            _this.components[route] = routeInfo;
            return routeInfo;
          } catch (err) {
            return _this.handleRouteInfoError((0, _isError).getProperError(err), pathname, query, as, routeProps);
          }
        })();
      }
      set(state, data, resetScroll) {
        this.state = state;
        return this.sub(data, this.components["/_app"].Component, resetScroll);
      }
      beforePopState(cb) {
        this._bps = cb;
      }
      onlyAHashChange(as) {
        if (!this.asPath)
          return false;
        const [oldUrlNoHash, oldHash] = this.asPath.split("#");
        const [newUrlNoHash, newHash] = as.split("#");
        if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
          return true;
        }
        if (oldUrlNoHash !== newUrlNoHash) {
          return false;
        }
        return oldHash !== newHash;
      }
      scrollToHash(as) {
        const [, hash = ""] = as.split("#");
        if (hash === "" || hash === "top") {
          handleSmoothScroll(() => window.scrollTo(0, 0));
          return;
        }
        const rawHash = decodeURIComponent(hash);
        const idEl = document.getElementById(rawHash);
        if (idEl) {
          handleSmoothScroll(() => idEl.scrollIntoView());
          return;
        }
        const nameEl = document.getElementsByName(rawHash)[0];
        if (nameEl) {
          handleSmoothScroll(() => nameEl.scrollIntoView());
        }
      }
      urlIsNew(asPath) {
        return this.asPath !== asPath;
      }
      prefetch(url, asPath = url, options = {}) {
        var _this = this;
        return _async_to_generator(function* () {
          if (typeof window !== "undefined" && (0, _isBot).isBot(window.navigator.userAgent)) {
            return;
          }
          let parsed = (0, _parseRelativeUrl).parseRelativeUrl(url);
          let { pathname, query } = parsed;
          if (process.env.__NEXT_I18N_SUPPORT) {
            if (options.locale === false) {
              pathname = (0, _normalizeLocalePath).normalizeLocalePath(pathname, _this.locales).pathname;
              parsed.pathname = pathname;
              url = (0, _formatUrl).formatWithValidation(parsed);
              let parsedAs = (0, _parseRelativeUrl).parseRelativeUrl(asPath);
              const localePathResult = (0, _normalizeLocalePath).normalizeLocalePath(parsedAs.pathname, _this.locales);
              parsedAs.pathname = localePathResult.pathname;
              options.locale = localePathResult.detectedLocale || _this.defaultLocale;
              asPath = (0, _formatUrl).formatWithValidation(parsedAs);
            }
          }
          const pages = yield _this.pageLoader.getPageList();
          let resolvedAs = asPath;
          const locale = typeof options.locale !== "undefined" ? options.locale || void 0 : _this.locale;
          if (process.env.__NEXT_HAS_REWRITES && asPath.startsWith("/")) {
            let rewrites;
            ({ __rewrites: rewrites } = yield (0, _routeLoader).getClientBuildManifest());
            const rewritesResult = (0, _resolveRewrites).default((0, _addBasePath).addBasePath((0, _addLocale).addLocale(asPath, _this.locale), true), pages, rewrites, parsed.query, (p) => resolveDynamicRoute(p, pages), _this.locales);
            if (rewritesResult.externalDest) {
              return;
            }
            resolvedAs = (0, _removeLocale).removeLocale((0, _removeBasePath).removeBasePath(rewritesResult.asPath), _this.locale);
            if (rewritesResult.matchedPage && rewritesResult.resolvedHref) {
              pathname = rewritesResult.resolvedHref;
              parsed.pathname = pathname;
              url = (0, _formatUrl).formatWithValidation(parsed);
            }
          }
          parsed.pathname = resolveDynamicRoute(parsed.pathname, pages);
          if ((0, _isDynamic).isDynamicRoute(parsed.pathname)) {
            pathname = parsed.pathname;
            parsed.pathname = pathname;
            Object.assign(query, (0, _routeMatcher).getRouteMatcher((0, _routeRegex).getRouteRegex(parsed.pathname))((0, _parsePath).parsePath(asPath).pathname) || {});
            url = (0, _formatUrl).formatWithValidation(parsed);
          }
          if (true) {
            return;
          }
          const route = (0, _removeTrailingSlash).removeTrailingSlash(pathname);
          yield Promise.all([
            _this.pageLoader._isSsg(route).then((isSsg) => {
              return isSsg ? fetchNextData({
                dataHref: _this.pageLoader.getDataHref({
                  href: url,
                  asPath: resolvedAs,
                  locale
                }),
                isServerRender: false,
                parseJSON: true,
                inflightCache: _this.sdc,
                persistCache: !_this.isPreview,
                isPrefetch: true,
                unstable_skipClientCache: options.unstable_skipClientCache || options.priority && !!process.env.__NEXT_OPTIMISTIC_CLIENT_CACHE
              }).then(() => false) : false;
            }),
            _this.pageLoader[options.priority ? "loadPage" : "prefetch"](route)
          ]);
        })();
      }
      fetchComponent(route) {
        var _this = this;
        return _async_to_generator(function* () {
          const handleCancelled = getCancelledHandler({
            route,
            router: _this
          });
          try {
            const componentResult = yield _this.pageLoader.loadPage(route);
            handleCancelled();
            return componentResult;
          } catch (err) {
            handleCancelled();
            throw err;
          }
        })();
      }
      _getData(fn) {
        let cancelled = false;
        const cancel = () => {
          cancelled = true;
        };
        this.clc = cancel;
        return fn().then((data) => {
          if (cancel === this.clc) {
            this.clc = null;
          }
          if (cancelled) {
            const err = new Error("Loading initial props cancelled");
            err.cancelled = true;
            throw err;
          }
          return data;
        });
      }
      _getFlightData(dataHref) {
        return fetchNextData({
          dataHref,
          isServerRender: true,
          parseJSON: false,
          inflightCache: this.sdc,
          persistCache: false,
          isPrefetch: false
        }).then(({ text: text3 }) => ({
          data: text3
        }));
      }
      getInitialProps(Component, ctx) {
        const { Component: App } = this.components["/_app"];
        const AppTree = this._wrapApp(App);
        ctx.AppTree = AppTree;
        return (0, _utils).loadGetInitialProps(App, {
          AppTree,
          Component,
          router: this,
          ctx
        });
      }
      get route() {
        return this.state.route;
      }
      get pathname() {
        return this.state.pathname;
      }
      get query() {
        return this.state.query;
      }
      get asPath() {
        return this.state.asPath;
      }
      get locale() {
        return this.state.locale;
      }
      get isFallback() {
        return this.state.isFallback;
      }
      get isPreview() {
        return this.state.isPreview;
      }
      constructor(pathname1, query1, as1, { initialProps, pageLoader, App, wrapApp, Component, err, subscription, isFallback, locale, locales, defaultLocale, domainLocales, isPreview }) {
        this.sdc = {};
        this.isFirstPopStateEvent = true;
        this._key = createKey();
        this.onPopState = (e) => {
          const { isFirstPopStateEvent } = this;
          this.isFirstPopStateEvent = false;
          const state = e.state;
          if (!state) {
            const { pathname: pathname2, query } = this;
            this.changeState("replaceState", (0, _formatUrl).formatWithValidation({
              pathname: (0, _addBasePath).addBasePath(pathname2),
              query
            }), (0, _utils).getURL());
            return;
          }
          if (state.__NA) {
            window.location.reload();
            return;
          }
          if (!state.__N) {
            return;
          }
          if (isFirstPopStateEvent && this.locale === state.options.locale && state.as === this.asPath) {
            return;
          }
          let forcedScroll;
          const { url, as, options, key } = state;
          if (process.env.__NEXT_SCROLL_RESTORATION) {
            if (manualScrollRestoration) {
              if (this._key !== key) {
                try {
                  sessionStorage.setItem("__next_scroll_" + this._key, JSON.stringify({
                    x: self.pageXOffset,
                    y: self.pageYOffset
                  }));
                } catch (e2) {
                }
                try {
                  const v = sessionStorage.getItem("__next_scroll_" + key);
                  forcedScroll = JSON.parse(v);
                } catch (e1) {
                  forcedScroll = {
                    x: 0,
                    y: 0
                  };
                }
              }
            }
          }
          this._key = key;
          const { pathname } = (0, _parseRelativeUrl).parseRelativeUrl(url);
          if (this.isSsr && as === (0, _addBasePath).addBasePath(this.asPath) && pathname === (0, _addBasePath).addBasePath(this.pathname)) {
            return;
          }
          if (this._bps && !this._bps(state)) {
            return;
          }
          this.change("replaceState", url, as, Object.assign({}, options, {
            shallow: options.shallow && this._shallow,
            locale: options.locale || this.defaultLocale,
            _h: 0
          }), forcedScroll);
        };
        const route = (0, _removeTrailingSlash).removeTrailingSlash(pathname1);
        this.components = {};
        if (pathname1 !== "/_error") {
          this.components[route] = {
            Component,
            initial: true,
            props: initialProps,
            err,
            __N_SSG: initialProps && initialProps.__N_SSG,
            __N_SSP: initialProps && initialProps.__N_SSP
          };
        }
        this.components["/_app"] = {
          Component: App,
          styleSheets: []
        };
        this.events = Router.events;
        this.pageLoader = pageLoader;
        const autoExportDynamic = (0, _isDynamic).isDynamicRoute(pathname1) && self.__NEXT_DATA__.autoExport;
        this.basePath = process.env.__NEXT_ROUTER_BASEPATH || "";
        this.sub = subscription;
        this.clc = null;
        this._wrapApp = wrapApp;
        this.isSsr = true;
        this.isLocaleDomain = false;
        this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || self.__NEXT_DATA__.appGip && !self.__NEXT_DATA__.gsp || !autoExportDynamic && !self.location.search && !process.env.__NEXT_HAS_REWRITES);
        if (process.env.__NEXT_I18N_SUPPORT) {
          this.locales = locales;
          this.defaultLocale = defaultLocale;
          this.domainLocales = domainLocales;
          this.isLocaleDomain = !!(0, _detectDomainLocale).detectDomainLocale(domainLocales, self.location.hostname);
        }
        this.state = {
          route,
          pathname: pathname1,
          query: query1,
          asPath: autoExportDynamic ? pathname1 : as1,
          isPreview: !!isPreview,
          locale: process.env.__NEXT_I18N_SUPPORT ? locale : void 0,
          isFallback
        };
        this._initialMatchesMiddlewarePromise = Promise.resolve(false);
        if (typeof window !== "undefined") {
          if (!as1.startsWith("//")) {
            const options = {
              locale
            };
            const asPath = (0, _utils).getURL();
            this._initialMatchesMiddlewarePromise = matchesMiddleware({
              router: this,
              locale,
              asPath
            }).then((matches) => {
              options._shouldResolveHref = as1 !== pathname1;
              this.changeState("replaceState", matches ? asPath : (0, _formatUrl).formatWithValidation({
                pathname: (0, _addBasePath).addBasePath(pathname1),
                query: query1
              }), asPath, options);
              return matches;
            });
          }
          window.addEventListener("popstate", this.onPopState);
          if (process.env.__NEXT_SCROLL_RESTORATION) {
            if (manualScrollRestoration) {
              window.history.scrollRestoration = "manual";
            }
          }
        }
      }
    };
    Router.events = (0, _mitt).default();
    exports.default = Router;
  }
});

// node_modules/next/dist/shared/lib/router-context.js
var require_router_context = __commonJS({
  "node_modules/next/dist/shared/lib/router-context.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.RouterContext = void 0;
    var _interop_require_default = require_interop_require_default().default;
    var _react = _interop_require_default(require_react());
    var RouterContext = _react.default.createContext(null);
    exports.RouterContext = RouterContext;
    if (true) {
      RouterContext.displayName = "RouterContext";
    }
  }
});

// node_modules/next/dist/shared/lib/app-router-context.js
var require_app_router_context = __commonJS({
  "node_modules/next/dist/shared/lib/app-router-context.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.TemplateContext = exports.GlobalLayoutRouterContext = exports.LayoutRouterContext = exports.AppRouterContext = void 0;
    var _interop_require_default = require_interop_require_default().default;
    var _react = _interop_require_default(require_react());
    var AppRouterContext = _react.default.createContext(null);
    exports.AppRouterContext = AppRouterContext;
    var LayoutRouterContext = _react.default.createContext(null);
    exports.LayoutRouterContext = LayoutRouterContext;
    var GlobalLayoutRouterContext = _react.default.createContext(null);
    exports.GlobalLayoutRouterContext = GlobalLayoutRouterContext;
    var TemplateContext = _react.default.createContext(null);
    exports.TemplateContext = TemplateContext;
    if (true) {
      AppRouterContext.displayName = "AppRouterContext";
      LayoutRouterContext.displayName = "LayoutRouterContext";
      GlobalLayoutRouterContext.displayName = "GlobalLayoutRouterContext";
      TemplateContext.displayName = "TemplateContext";
    }
  }
});

// node_modules/next/dist/client/use-intersection.js
var require_use_intersection = __commonJS({
  "node_modules/next/dist/client/use-intersection.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.useIntersection = useIntersection;
    var _react = require_react();
    var _requestIdleCallback = require_request_idle_callback();
    var hasIntersectionObserver = typeof IntersectionObserver === "function";
    var observers = /* @__PURE__ */ new Map();
    var idList = [];
    function createObserver(options) {
      const id = {
        root: options.root || null,
        margin: options.rootMargin || ""
      };
      const existing = idList.find((obj) => obj.root === id.root && obj.margin === id.margin);
      let instance;
      if (existing) {
        instance = observers.get(existing);
        if (instance) {
          return instance;
        }
      }
      const elements = /* @__PURE__ */ new Map();
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          const callback = elements.get(entry.target);
          const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;
          if (callback && isVisible) {
            callback(isVisible);
          }
        });
      }, options);
      instance = {
        id,
        observer,
        elements
      };
      idList.push(id);
      observers.set(id, instance);
      return instance;
    }
    function observe(element, callback, options) {
      const { id, observer, elements } = createObserver(options);
      elements.set(element, callback);
      observer.observe(element);
      return function unobserve() {
        elements.delete(element);
        observer.unobserve(element);
        if (elements.size === 0) {
          observer.disconnect();
          observers.delete(id);
          const index = idList.findIndex((obj) => obj.root === id.root && obj.margin === id.margin);
          if (index > -1) {
            idList.splice(index, 1);
          }
        }
      };
    }
    function useIntersection({ rootRef, rootMargin, disabled }) {
      const isDisabled = disabled || !hasIntersectionObserver;
      const [visible, setVisible] = (0, _react).useState(false);
      const [element, setElement] = (0, _react).useState(null);
      (0, _react).useEffect(() => {
        if (hasIntersectionObserver) {
          if (isDisabled || visible)
            return;
          if (element && element.tagName) {
            const unobserve = observe(element, (isVisible) => isVisible && setVisible(isVisible), {
              root: rootRef == null ? void 0 : rootRef.current,
              rootMargin
            });
            return unobserve;
          }
        } else {
          if (!visible) {
            const idleCallback = (0, _requestIdleCallback).requestIdleCallback(() => setVisible(true));
            return () => (0, _requestIdleCallback).cancelIdleCallback(idleCallback);
          }
        }
      }, [
        element,
        isDisabled,
        rootMargin,
        rootRef,
        visible
      ]);
      const resetVisible = (0, _react).useCallback(() => {
        setVisible(false);
      }, []);
      return [
        setElement,
        visible,
        resetVisible
      ];
    }
    if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
      Object.defineProperty(exports.default, "__esModule", { value: true });
      Object.assign(exports.default, exports);
      module.exports = exports.default;
    }
  }
});

// node_modules/next/dist/client/normalize-locale-path.js
var require_normalize_locale_path2 = __commonJS({
  "node_modules/next/dist/client/normalize-locale-path.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.normalizeLocalePath = void 0;
    var normalizeLocalePath = (pathname, locales) => {
      if (process.env.__NEXT_I18N_SUPPORT) {
        return require_normalize_locale_path().normalizeLocalePath(pathname, locales);
      }
      return {
        pathname,
        detectedLocale: void 0
      };
    };
    exports.normalizeLocalePath = normalizeLocalePath;
    if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
      Object.defineProperty(exports.default, "__esModule", { value: true });
      Object.assign(exports.default, exports);
      module.exports = exports.default;
    }
  }
});

// node_modules/next/dist/client/get-domain-locale.js
var require_get_domain_locale = __commonJS({
  "node_modules/next/dist/client/get-domain-locale.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.getDomainLocale = getDomainLocale;
    var basePath = process.env.__NEXT_ROUTER_BASEPATH || "";
    function getDomainLocale(path, locale, locales, domainLocales) {
      if (process.env.__NEXT_I18N_SUPPORT) {
        const normalizeLocalePath = require_normalize_locale_path2().normalizeLocalePath;
        const detectDomainLocale = require_detect_domain_locale2().detectDomainLocale;
        const target = locale || normalizeLocalePath(path, locales).detectedLocale;
        const domain = detectDomainLocale(domainLocales, void 0, target);
        if (domain) {
          const proto = `http${domain.http ? "" : "s"}://`;
          const finalLocale = target === domain.defaultLocale ? "" : `/${target}`;
          return `${proto}${domain.domain}${basePath}${finalLocale}${path}`;
        }
        return false;
      } else {
        return false;
      }
    }
    if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
      Object.defineProperty(exports.default, "__esModule", { value: true });
      Object.assign(exports.default, exports);
      module.exports = exports.default;
    }
  }
});

// node_modules/next/dist/client/link.js
var require_link = __commonJS({
  "node_modules/next/dist/client/link.js"(exports, module) {
    "use strict";
    "client";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _interop_require_default = require_interop_require_default().default;
    var _object_without_properties_loose = require_object_without_properties_loose().default;
    var _react = _interop_require_default(require_react());
    var _router = require_router();
    var _addLocale = require_add_locale2();
    var _routerContext = require_router_context();
    var _appRouterContext = require_app_router_context();
    var _useIntersection = require_use_intersection();
    var _getDomainLocale = require_get_domain_locale();
    var _addBasePath = require_add_base_path();
    var prefetched = {};
    function prefetch(router, href, as, options) {
      if (typeof window === "undefined" || !router)
        return;
      if (!(0, _router).isLocalURL(href))
        return;
      Promise.resolve(router.prefetch(href, as, options)).catch((err) => {
        if (true) {
          throw err;
        }
      });
      const curLocale = options && typeof options.locale !== "undefined" ? options.locale : router && router.locale;
      prefetched[href + "%" + as + (curLocale ? "%" + curLocale : "")] = true;
    }
    function isModifiedEvent(event) {
      const { target } = event.currentTarget;
      return target && target !== "_self" || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.nativeEvent && event.nativeEvent.which === 2;
    }
    function linkClicked(e, router, href, as, replace, shallow, scroll, locale, isAppRouter, prefetchEnabled) {
      const { nodeName } = e.currentTarget;
      const isAnchorNodeName = nodeName.toUpperCase() === "A";
      if (isAnchorNodeName && (isModifiedEvent(e) || !(0, _router).isLocalURL(href))) {
        return;
      }
      e.preventDefault();
      const navigate = () => {
        if ("beforePopState" in router) {
          router[replace ? "replace" : "push"](href, as, {
            shallow,
            locale,
            scroll
          });
        } else {
          const method = replace ? "replace" : "push";
          router[method](href, {
            forceOptimisticNavigation: !prefetchEnabled
          });
        }
      };
      if (isAppRouter) {
        _react.default.startTransition(navigate);
      } else {
        navigate();
      }
    }
    var Link = /* @__PURE__ */ _react.default.forwardRef(function LinkComponent(props, forwardedRef) {
      if (true) {
        let createPropError = function(args) {
          return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (typeof window !== "undefined" ? "\nOpen your browser's console to view the Component stack trace." : ""));
        };
        const requiredPropsGuard = {
          href: true
        };
        const requiredProps = Object.keys(requiredPropsGuard);
        requiredProps.forEach((key) => {
          if (key === "href") {
            if (props[key] == null || typeof props[key] !== "string" && typeof props[key] !== "object") {
              throw createPropError({
                key,
                expected: "`string` or `object`",
                actual: props[key] === null ? "null" : typeof props[key]
              });
            }
          } else {
            const _ = key;
          }
        });
        const optionalPropsGuard = {
          as: true,
          replace: true,
          scroll: true,
          shallow: true,
          passHref: true,
          prefetch: true,
          locale: true,
          onClick: true,
          onMouseEnter: true,
          onTouchStart: true,
          legacyBehavior: true
        };
        const optionalProps = Object.keys(optionalPropsGuard);
        optionalProps.forEach((key) => {
          const valType = typeof props[key];
          if (key === "as") {
            if (props[key] && valType !== "string" && valType !== "object") {
              throw createPropError({
                key,
                expected: "`string` or `object`",
                actual: valType
              });
            }
          } else if (key === "locale") {
            if (props[key] && valType !== "string") {
              throw createPropError({
                key,
                expected: "`string`",
                actual: valType
              });
            }
          } else if (key === "onClick" || key === "onMouseEnter" || key === "onTouchStart") {
            if (props[key] && valType !== "function") {
              throw createPropError({
                key,
                expected: "`function`",
                actual: valType
              });
            }
          } else if (key === "replace" || key === "scroll" || key === "shallow" || key === "passHref" || key === "prefetch" || key === "legacyBehavior") {
            if (props[key] != null && valType !== "boolean") {
              throw createPropError({
                key,
                expected: "`boolean`",
                actual: valType
              });
            }
          } else {
            const _ = key;
          }
        });
        const hasWarned = _react.default.useRef(false);
        if (props.prefetch && !hasWarned.current) {
          hasWarned.current = true;
          console.warn("Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://nextjs.org/docs/messages/prefetch-true-deprecated");
        }
      }
      let children;
      const { href: hrefProp, as: asProp, children: childrenProp, prefetch: prefetchProp, passHref, replace, shallow, scroll, locale, onClick, onMouseEnter, onTouchStart, legacyBehavior = Boolean(process.env.__NEXT_NEW_LINK_BEHAVIOR) !== true } = props, restProps = _object_without_properties_loose(props, [
        "href",
        "as",
        "children",
        "prefetch",
        "passHref",
        "replace",
        "shallow",
        "scroll",
        "locale",
        "onClick",
        "onMouseEnter",
        "onTouchStart",
        "legacyBehavior"
      ]);
      children = childrenProp;
      if (legacyBehavior && (typeof children === "string" || typeof children === "number")) {
        children = /* @__PURE__ */ _react.default.createElement("a", null, children);
      }
      const p = prefetchProp !== false;
      let router = _react.default.useContext(_routerContext.RouterContext);
      const appRouter = _react.default.useContext(_appRouterContext.AppRouterContext);
      if (appRouter) {
        router = appRouter;
      }
      const { href, as } = _react.default.useMemo(() => {
        const [resolvedHref, resolvedAs] = (0, _router).resolveHref(router, hrefProp, true);
        return {
          href: resolvedHref,
          as: asProp ? (0, _router).resolveHref(router, asProp) : resolvedAs || resolvedHref
        };
      }, [
        router,
        hrefProp,
        asProp
      ]);
      const previousHref = _react.default.useRef(href);
      const previousAs = _react.default.useRef(as);
      let child;
      if (legacyBehavior) {
        if (true) {
          if (onClick) {
            console.warn(`"onClick" was passed to <Link> with \`href\` of \`${hrefProp}\` but "legacyBehavior" was set. The legacy behavior requires onClick be set on the child of next/link`);
          }
          if (onMouseEnter) {
            console.warn(`"onMouseEnter" was passed to <Link> with \`href\` of \`${hrefProp}\` but "legacyBehavior" was set. The legacy behavior requires onMouseEnter be set on the child of next/link`);
          }
          try {
            child = _react.default.Children.only(children);
          } catch (err) {
            if (!children) {
              throw new Error(`No children were passed to <Link> with \`href\` of \`${hrefProp}\` but one child is required https://nextjs.org/docs/messages/link-no-children`);
            }
            throw new Error(`Multiple children were passed to <Link> with \`href\` of \`${hrefProp}\` but only one child is supported https://nextjs.org/docs/messages/link-multiple-children` + (typeof window !== "undefined" ? " \nOpen your browser's console to view the Component stack trace." : ""));
          }
        } else {
          child = _react.default.Children.only(children);
        }
      }
      const childRef = legacyBehavior ? child && typeof child === "object" && child.ref : forwardedRef;
      const [setIntersectionRef, isVisible, resetVisible] = (0, _useIntersection).useIntersection({
        rootMargin: "200px"
      });
      const setRef = _react.default.useCallback((el) => {
        if (previousAs.current !== as || previousHref.current !== href) {
          resetVisible();
          previousAs.current = as;
          previousHref.current = href;
        }
        setIntersectionRef(el);
        if (childRef) {
          if (typeof childRef === "function")
            childRef(el);
          else if (typeof childRef === "object") {
            childRef.current = el;
          }
        }
      }, [
        as,
        childRef,
        href,
        resetVisible,
        setIntersectionRef
      ]);
      _react.default.useEffect(() => {
        const shouldPrefetch = isVisible && p && (0, _router).isLocalURL(href);
        const curLocale = typeof locale !== "undefined" ? locale : router && router.locale;
        const isPrefetched = prefetched[href + "%" + as + (curLocale ? "%" + curLocale : "")];
        if (shouldPrefetch && !isPrefetched) {
          prefetch(router, href, as, {
            locale: curLocale
          });
        }
      }, [
        as,
        href,
        isVisible,
        locale,
        p,
        router
      ]);
      const childProps = {
        ref: setRef,
        onClick: (e) => {
          if (true) {
            if (!e) {
              throw new Error(`Component rendered inside next/link has to pass click event to "onClick" prop.`);
            }
          }
          if (!legacyBehavior && typeof onClick === "function") {
            onClick(e);
          }
          if (legacyBehavior && child.props && typeof child.props.onClick === "function") {
            child.props.onClick(e);
          }
          if (!e.defaultPrevented) {
            linkClicked(e, router, href, as, replace, shallow, scroll, locale, Boolean(appRouter), p);
          }
        },
        onMouseEnter: (e) => {
          if (!legacyBehavior && typeof onMouseEnter === "function") {
            onMouseEnter(e);
          }
          if (legacyBehavior && child.props && typeof child.props.onMouseEnter === "function") {
            child.props.onMouseEnter(e);
          }
          if (!(!p && appRouter)) {
            if ((0, _router).isLocalURL(href)) {
              prefetch(router, href, as, {
                priority: true
              });
            }
          }
        },
        onTouchStart: (e) => {
          if (!legacyBehavior && typeof onTouchStart === "function") {
            onTouchStart(e);
          }
          if (legacyBehavior && child.props && typeof child.props.onTouchStart === "function") {
            child.props.onTouchStart(e);
          }
          if (!(!p && appRouter)) {
            if ((0, _router).isLocalURL(href)) {
              prefetch(router, href, as, {
                priority: true
              });
            }
          }
        }
      };
      if (!legacyBehavior || passHref || child.type === "a" && !("href" in child.props)) {
        const curLocale = typeof locale !== "undefined" ? locale : router && router.locale;
        const localeDomain = router && router.isLocaleDomain && (0, _getDomainLocale).getDomainLocale(as, curLocale, router.locales, router.domainLocales);
        childProps.href = localeDomain || (0, _addBasePath).addBasePath((0, _addLocale).addLocale(as, curLocale, router && router.defaultLocale));
      }
      return legacyBehavior ? /* @__PURE__ */ _react.default.cloneElement(child, childProps) : /* @__PURE__ */ _react.default.createElement("a", Object.assign({}, restProps, childProps), children);
    });
    var _default = Link;
    exports.default = _default;
    if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
      Object.defineProperty(exports.default, "__esModule", { value: true });
      Object.assign(exports.default, exports);
      module.exports = exports.default;
    }
  }
});

// node_modules/next/link.js
var require_link2 = __commonJS({
  "node_modules/next/link.js"(exports, module) {
    module.exports = require_link();
  }
});

// cms/symbols/meta.ts
var meta = {
  label: "Meta",
  name: "meta",
  widget: "object",
  fields: [
    { label: "Titel", name: "title", widget: "string" },
    { label: "Beschreibung", name: "description", widget: "text" },
    { label: "Bild", name: "image", widget: "image", required: false }
  ]
};
var meta_default = meta;

// cms/symbols/header.ts
var header = {
  label: "Header",
  name: "header",
  widget: "object",
  fields: [
    { label: "Titel", name: "title", widget: "text", required: false },
    { label: "Position", name: "position", widget: "string", required: false },
    { label: "Farbe", name: "color", widget: "string", required: false },
    { label: "Bild", name: "image", widget: "image" }
  ]
};
var header_default = header;

// cms/symbols/text.ts
var text = {
  label: "Text",
  name: "text",
  widget: "text"
};
var text_default = text;

// cms/symbols/title.ts
var title = {
  label: "Titel",
  name: "title",
  widget: "string"
};
var title_default = title;

// cms/symbols/image.ts
var image = {
  label: "Bild",
  name: "image",
  widget: "image"
};
var image_default = image;

// cms/symbols/link.ts
var externalLinkFields = [
  {
    label: "Text",
    name: "text",
    widget: "string"
  },
  {
    label: "href",
    name: "href",
    widget: "string",
    hint: "Die URL sollte nicht auf die selbe Seite zeigen, kann aber alles enthalten. Beispiele: mailto:kontakt@tortuga-webdesign.de oder https://tortuga-webdesign.de/referenzen/"
  }
];
var internalLinkFields = [
  {
    label: "Text",
    name: "text",
    widget: "string"
  },
  {
    label: "href",
    name: "href",
    widget: "string",
    hint: "Die URL muss auf die selbe Seite zeigen. Es muss am Anfang und am Ende ein Slash sein. Beispiele: /wildtiere/wolf oder /kontakt"
  }
];

// cms/symbols/cta.ts
var cta = {
  label: "CTA",
  name: "cta",
  widget: "object",
  fields: internalLinkFields
};
var cta_default = cta;

// cms/page/home.ts
var home = {
  file: "content/page/home.json",
  label: "Startseite",
  name: "home",
  fields: [
    meta_default,
    header_default,
    {
      label: "Events",
      name: "events",
      widget: "object",
      fields: [{ label: "Button", name: "button", widget: "string" }]
    },
    {
      label: "Angebots\xFCbersicht",
      name: "offeroverview",
      widget: "list",
      fields: [
        image_default,
        title_default,
        text_default,
        cta_default,
        { label: "Button", name: "button", widget: "string" }
      ]
    },
    {
      label: "\xDCber mich",
      name: "about",
      widget: "object",
      fields: [{ label: "Text", name: "text", widget: "text" }]
    },
    {
      label: "Reisen",
      name: "travel",
      widget: "object",
      fields: [
        cta_default,
        { label: "Titel", name: "title", widget: "string" },
        { label: "Text", name: "text", widget: "text" },
        { label: "Button", name: "button", widget: "string" }
      ]
    }
  ]
};
var home_default = home;

// cms/symbols/internalLink.ts
var linkFields = (required) => [
  {
    label: "Text",
    name: "text",
    type: "string",
    required
  },
  {
    label: "href",
    name: "href",
    type: "string",
    required,
    hint: "Die URL muss auf die selbe Seite zeigen. Es muss am Anfang ein Slash sein. Beispiele: /wildtiere/wolf oder /kontakt"
  }
];
var internalLink = (required = false) => ({
  label: "Interner Link",
  name: "link",
  widget: "object",
  fields: linkFields(required),
  required,
  collapsed: false
});
var internalLink_default = internalLink;

// cms/page/about.ts
var about = {
  file: "content/page/about.json",
  label: "\xDCber mich",
  name: "about",
  fields: [
    meta_default,
    header_default,
    {
      label: "\xDCber mich",
      name: "about",
      widget: "object",
      fields: [
        { label: "Titel", name: "title", widget: "string" },
        { label: "Text", name: "text", widget: "text" },
        { label: "Bild", name: "image", widget: "image" },
        {
          label: "Titel Inhaltsverzeichnis",
          name: "titleTableOfContents",
          widget: "string"
        },
        {
          label: "Inhaltsverzeichnis",
          name: "tableOfContents",
          widget: "list",
          field: internalLink_default()
        },
        {
          label: "Titel Arbeitsprinzipien",
          name: "titlePrinciples",
          widget: "string"
        },
        { label: "Text", name: "textPrinciples", widget: "text" }
      ]
    },
    {
      label: "Stichworte",
      name: "keywords",
      widget: "object",
      fields: [
        { label: "Bild", name: "image", widget: "image" },
        { label: "Titel", name: "title", widget: "string" },
        {
          label: "Punkte",
          name: "points",
          widget: "list",
          field: {
            label: "Punkt",
            name: "point",
            widget: "string"
          }
        }
      ]
    },
    {
      label: "Pers\xF6nlicher Berufsweg",
      name: "career",
      widget: "object",
      fields: [
        { label: "Titel", name: "title", widget: "string" },
        { label: "Text", name: "text", widget: "text" },
        { label: "Lebenslauf Titel", name: "careerTitle", widget: "string" },
        {
          label: "Lebenslauf",
          name: "career",
          widget: "list",
          fields: [
            { label: "Name", name: "name", widget: "string" },
            {
              label: "Eintrag",
              name: "entries",
              widget: "list",
              fields: [
                {
                  label: "Jahr",
                  name: "year",
                  widget: "string"
                },
                {
                  label: "Text",
                  name: "text",
                  widget: "string"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      label: "Bl\xF6cke",
      name: "blocks",
      widget: "list",
      fields: [
        { label: "Titel", name: "title", widget: "string" },
        { label: "Text", name: "text", widget: "text" },
        internalLink_default(),
        { label: "Bild", name: "image", widget: "image" }
      ]
    }
  ]
};
var about_default = about;

// cms/symbols/markdown.ts
var markdown = {
  label: "Markdown",
  name: "markdown",
  widget: "markdown",
  hint: "Bitte nur \xDCberschriften vom Typ h3 verwenden."
};
var markdown_default = markdown;

// cms/page/kala.ts
var kala = {
  file: "content/page/kala.json",
  label: "Kala Heilarbeit",
  name: "kala",
  fields: [
    meta_default,
    header_default,
    {
      label: "Start Oben",
      name: "start",
      widget: "object",
      fields: [
        title_default,
        image_default,
        text_default,
        { label: "Text", name: "text2", widget: "text" },
        cta_default,
        { label: "Bild", name: "image2", widget: "image" }
      ]
    },
    {
      label: "Blume",
      name: "flower",
      widget: "object",
      fields: [
        {
          label: "Links",
          name: "links",
          widget: "list",
          field: {
            label: "href",
            name: "href",
            widget: "string",
            hint: "Die URL muss auf die selbe Seite zeigen. Es muss am Anfang ein Slash sein. Beispiele: /wildtiere/wolf oder /kontakt"
          }
        },
        markdown_default
      ]
    },
    {
      label: "Fragen",
      name: "questions",
      widget: "object",
      fields: [text_default, cta_default, image_default]
    }
  ]
};
var kala_default = kala;

// cms/symbols/slug.ts
var slug = {
  label: "Slug",
  name: "slug",
  widget: "string",
  hint: 'Bitte nur Kleinbuchstaben, Zahlen und Bindestriche verwenden. Der Slug beschreibt die URL dieses Objektes. Ein Beispielwert ist "mein-toller-artikel".'
};
var slug_default = slug;

// cms/page/heal.ts
var heal = {
  file: "content/page/heal.json",
  label: "Heilweisen",
  name: "heal",
  fields: [
    meta_default,
    {
      label: "Heilweisen",
      name: "heal",
      widget: "object",
      fields: [
        title_default,
        {
          label: "Items",
          name: "items",
          widget: "list",
          fields: [image_default, slug_default, title_default, markdown_default, cta_default]
        }
      ]
    }
  ]
};
var heal_default = heal;

// cms/symbols/string.ts
var string = {
  label: "Text",
  name: "string",
  widget: "string"
};
var string_default = string;

// cms/symbols/questionsSection.ts
var questionsSection = {
  label: "Fragen",
  name: "questions",
  widget: "object",
  fields: [text_default, cta_default, image_default]
};
var questionsSection_default = questionsSection;

// cms/page/schooling.ts
var schooling = {
  file: "content/page/schooling.json",
  label: "Ausbildung",
  name: "schooling",
  fields: [
    meta_default,
    header_default,
    {
      label: "Start Oben",
      name: "start",
      widget: "object",
      fields: [
        title_default,
        image_default,
        markdown_default,
        { label: "Markdown", name: "markdown2", widget: "markdown" },
        { label: "Bild", name: "image2", widget: "image" }
      ]
    },
    {
      label: "\xDCbersicht",
      name: "overview",
      widget: "object",
      fields: [
        title_default,
        {
          label: "Schritt",
          name: "step",
          widget: "list",
          fields: [image_default, title_default, string_default]
        }
      ]
    },
    {
      label: "Ausbildung",
      name: "schooling",
      widget: "object",
      fields: [
        title_default,
        { label: "Termin", name: "date", widget: "string" },
        { label: "Kosten", name: "costs", widget: "string" },
        { label: "Ort", name: "location", widget: "string" },
        {
          label: "Seminar",
          name: "seminar",
          widget: "list",
          fields: [
            image_default,
            title_default,
            string_default,
            markdown_default,
            { label: "Termin", name: "date", widget: "string" },
            { label: "Kosten", name: "costs", widget: "string" },
            { label: "Ort", name: "location", widget: "string" },
            { label: "Beschreibung", name: "markdown2", widget: "markdown" }
          ]
        },
        cta_default
      ]
    },
    questionsSection_default
  ]
};
var schooling_default = schooling;

// cms/page/contact.ts
var contact = {
  file: "content/page/contact.json",
  label: "Kontakt",
  name: "contact",
  fields: [
    meta_default,
    {
      label: "Kontakt",
      name: "contact",
      widget: "object",
      fields: [
        title_default,
        image_default,
        markdown_default,
        {
          label: "Formular",
          name: "form",
          widget: "list",
          fields: [
            { label: "Label", name: "label", widget: "string" },
            { label: "Name", name: "name", widget: "string" },
            {
              label: "Ben\xF6tigt",
              name: "required",
              widget: "boolean",
              required: false
            },
            {
              label: "Typ",
              name: "type",
              widget: "select",
              options: ["text", "email", "tel", "number"]
            },
            {
              label: "Element",
              name: "element",
              widget: "select",
              options: ["input", "textarea"]
            },
            {
              label: "Class",
              name: "className",
              widget: "string"
            }
          ]
        },
        { label: "Button", name: "button", widget: "string" }
      ]
    },
    {
      label: "Anfahrt",
      name: "directions",
      widget: "object",
      fields: [title_default, { label: "Maps", name: "maps", widget: "string" }]
    },
    {
      label: "Information",
      name: "information",
      widget: "list",
      fields: [title_default, markdown_default]
    },
    {
      label: "Newsletter",
      name: "newsletter",
      widget: "object",
      fields: [
        title_default,
        {
          label: "Formular",
          name: "form",
          widget: "list",
          fields: [
            { label: "Label", name: "label", widget: "string" },
            { label: "Name", name: "name", widget: "string" },
            {
              label: "Ben\xF6tigt",
              name: "required",
              widget: "boolean",
              required: false
            }
          ]
        },
        { label: "Button", name: "button", widget: "string" },
        text_default
      ]
    }
  ]
};
var contact_default = contact;

// cms/page/nepal.ts
var nepal = {
  file: "content/page/nepal.json",
  label: "Nepal Projekt",
  name: "nepal",
  fields: [
    meta_default,
    header_default,
    {
      label: "Start Oben",
      name: "start",
      widget: "object",
      fields: [
        title_default,
        image_default,
        markdown_default,
        { label: "Markdown", name: "markdown2", widget: "markdown" },
        { label: "Bild", name: "image2", widget: "image" }
      ]
    },
    {
      label: "Beschreibung",
      name: "description",
      widget: "object",
      fields: [title_default, markdown_default]
    },
    {
      label: "Aktivit\xE4ten",
      name: "activities",
      widget: "object",
      fields: [
        title_default,
        text_default,
        {
          label: "Links",
          name: "links",
          widget: "list",
          fields: linkFields(true)
        },
        cta_default,
        image_default
      ]
    }
  ]
};
var nepal_default = nepal;

// cms/symbols/alt.ts
var alt = {
  label: "Beschreibung des Bildes",
  name: "alt",
  widget: "string"
};
var alt_default = alt;

// cms/page/seminars.ts
var seminars = {
  file: "content/page/seminars.json",
  label: "Heilsame Seminare",
  name: "seminars",
  fields: [
    meta_default,
    header_default,
    {
      label: "Inhalt",
      name: "content",
      widget: "object",
      fields: [
        title_default,
        markdown_default,
        cta_default,
        image_default,
        alt_default,
        { label: "Seminar-Button", name: "seminarButton", widget: "string" }
      ]
    }
  ]
};
var seminars_default = seminars;

// cms/page/psychotherapie.ts
var therapie = {
  file: "content/page/psychotherapie.json",
  label: "Psychotherapie",
  name: "therapie",
  fields: [
    meta_default,
    header_default,
    {
      label: "Start Oben",
      name: "start",
      widget: "object",
      fields: [
        title_default,
        markdown_default,
        image_default,
        { label: "Markdown", name: "markdown2", widget: "markdown" }
      ]
    },
    {
      label: "Verfahren",
      name: "procedures",
      widget: "object",
      fields: [image_default, markdown_default]
    },
    cta_default
  ]
};
var psychotherapie_default = therapie;

// cms/page/blog.ts
var import_link2 = __toESM(require_link2());
var blog = {
  file: "content/page/blog.json",
  label: "Blog",
  name: "blog",
  fields: [
    meta_default,
    header_default,
    {
      label: "Inhalt",
      name: "content",
      widget: "object",
      fields: [title_default, markdown_default, cta_default, image_default, alt_default]
    },
    { label: "Button", name: "button", widget: "string" },
    {
      label: "nebeninhalt",
      name: "asidecontent",
      widget: "object",
      fields: [
        title_default,
        image_default,
        text_default,
        import_link2.default,
        { label: "Schlagworttitel", name: "markdowntitle", widget: "string" }
      ]
    }
  ]
};
var blog_default = blog;

// cms/page/index.ts
var config = {
  name: "pages",
  label: "Seiten",
  label_singular: "Seite",
  delete: false,
  editor: {
    preview: false
  },
  files: [
    home_default,
    about_default,
    kala_default,
    heal_default,
    schooling_default,
    seminars_default,
    contact_default,
    nepal_default,
    psychotherapie_default,
    blog_default
  ]
};
var page_default = config;

// cms/article/index.ts
var article = {
  name: "article",
  label: "Artikel",
  label_singular: "Artikel",
  extension: "json",
  editor: {
    preview: false
  },
  folder: "content/article",
  slug: "{{slug}}",
  create: true,
  fields: [
    title_default,
    slug_default,
    {
      label: "Datum",
      name: "date",
      widget: "datetime",
      date_format: "DD.MM.YYYY",
      time_format: false
    },
    {
      label: "Bild",
      name: "image",
      widget: "image",
      required: false
    },
    markdown_default,
    {
      label: "comments",
      name: "comments",
      widget: "list",
      fields: [
        { label: "Autor", name: "autor", widget: "string" },
        {
          label: "Datum",
          name: "date",
          widget: "datetime",
          date_format: "DD.MM.YYYY",
          time_format: false
        },
        { label: "Text", name: "text", widget: "text" }
      ]
    },
    {
      label: "Beschreibung",
      name: "description",
      widget: "text"
    }
  ]
};
var article_default = article;

// cms/category/index.ts
var category = {
  name: "category",
  label: "Kategorien",
  label_singular: "Kategorie",
  extension: "json",
  editor: {
    preview: false
  },
  folder: "content/category",
  slug: "{{slug}}",
  create: true,
  fields: [{ label: "Titel", name: "title", widget: "string" }]
};
var category_default = category;

// cms/setting/footer.ts
var link2 = {
  label: "Interner Link",
  name: "link",
  widget: "object",
  fields: linkFields(true),
  collapsed: false
};
var text2 = {
  label: "Text",
  name: "text",
  widget: "object",
  fields: [{ label: "Text", name: "text", widget: "text" }]
};
var externalLink = {
  label: "Externer Link",
  name: "externalLink",
  widget: "object",
  fields: externalLinkFields,
  collapsed: false
};
var footer = {
  file: "content/setting/footer.json",
  label: "Footer",
  name: "footer",
  fields: [
    { label: "Copyright", name: "copyright", widget: "string" },
    {
      label: "Spalten",
      name: "columns",
      widget: "list",
      collapsed: false,
      fields: [
        { label: "Titel", name: "title", widget: "string" },
        {
          label: "Class (Experte)",
          name: "class",
          widget: "string",
          default: "col-span-6 md:col-span-3"
        },
        {
          label: "Inhalt",
          name: "content",
          widget: "list",
          types: [link2, externalLink, text2]
        }
      ]
    }
  ]
};
var footer_default = footer;

// cms/setting/global.ts
var global = {
  file: "content/setting/global.json",
  label: "Global",
  name: "global",
  fields: [{ label: "Favicon", name: "favicon", widget: "image" }]
};
var global_default = global;

// cms/setting/navigation.ts
var linkFields2 = [
  {
    label: "Text",
    name: "text",
    type: "string"
  },
  {
    label: "href",
    name: "href",
    type: "string",
    hint: "Die URL muss auf die selbe Seite zeigen. Es muss am Anfang und am Ende ein Slash sein. Beispiele: /wildtiere/wolf/ oder /kontakt/"
  }
];
var link3 = {
  label: "Normales Item",
  name: "link",
  widget: "object",
  fields: linkFields2,
  collapsed: false
};
var links = {
  label: "Dropdown Item",
  name: "links",
  widget: "object",
  collapsed: false,
  fields: [
    {
      label: "Text",
      name: "text",
      widget: "string"
    },
    {
      label: "Links",
      name: "links",
      widget: "list",
      fields: linkFields2
    }
  ]
};
var navigation = {
  file: "content/setting/navigation.json",
  label: "Navigation",
  name: "navigation",
  fields: [
    {
      label: "Titel",
      name: "title",
      widget: "string"
    },
    {
      label: "Links",
      name: "links",
      widget: "list",
      collapsed: false,
      types: [link3, links]
    }
  ]
};
var navigation_default = navigation;

// cms/setting/index.ts
var setting = {
  name: "setting",
  label: "Einstellungen",
  label_singular: "Einstellung",
  delete: false,
  editor: {
    preview: false
  },
  files: [global_default, navigation_default, footer_default]
};
var setting_default = setting;

// cms/legal/index.ts
var legal = {
  name: "legal",
  label: "Rechtliches",
  label_singular: "Rechtliches",
  extension: "md",
  editor: {
    preview: false
  },
  folder: "content/legal",
  slug: "{{fields.slug}}",
  create: true,
  fields: [
    { label: "Titel", name: "title", widget: "string" },
    { label: "Slug", name: "slug", widget: "string" },
    { label: "Inhalt", name: "body", widget: "markdown" }
  ]
};
var legal_default = legal;

// cms/seminar/index.ts
var seminar = {
  name: "seminar",
  label: "Seminare",
  label_singular: "Seminar",
  extension: "json",
  editor: {
    preview: false
  },
  folder: "content/seminar",
  slug: "{{slug}}",
  create: true,
  fields: [
    title_default,
    slug_default,
    {
      label: "Sortierung",
      name: "order",
      widget: "number",
      required: true
    },
    {
      label: "Auf der Startseite anzeigen?",
      name: "showOnHome",
      widget: "boolean",
      required: false
    },
    {
      label: "Auf der Seminarseite anzeigen?",
      name: "showOnSeminars",
      widget: "boolean",
      required: false
    },
    {
      label: "Beschreibung (Erscheint unter Heilsame Seminare)",
      name: "description",
      widget: "text"
    },
    {
      label: "Termin (Erscheint unter Heilsame Seminare)",
      name: "date",
      widget: "string"
    },
    {
      label: "Kurzbeschreibung (Erscheint auf der Startseite)",
      name: "shortDescription",
      widget: "text"
    },
    {
      label: "Neues Bild",
      name: "newImage",
      widget: "image"
    },
    image_default,
    {
      label: "Sektionen",
      name: "sections",
      widget: "list",
      types: [
        {
          label: "Text Bild",
          name: "textimage",
          widget: "object",
          fields: [markdown_default, image_default, alt_default]
        },
        {
          label: "Text",
          name: "text",
          widget: "object",
          fields: [markdown_default]
        },
        {
          label: "Bild Text",
          name: "imagetext",
          widget: "object",
          fields: [image_default, alt_default, markdown_default]
        },
        {
          label: "Kundenstimme",
          name: "review",
          widget: "object",
          fields: [image_default, text_default, string_default]
        },
        {
          label: "Events",
          name: "events",
          widget: "object",
          fields: [
            title_default,
            {
              label: "Events",
              name: "events",
              widget: "list",
              fields: [
                { label: "Monat", name: "month", widget: "string" },
                {
                  label: "Datum",
                  name: "date",
                  widget: "datetime",
                  date_format: "DD.MM.YYYY",
                  time_format: false
                },
                { label: "Zeit", name: "time", widget: "string" }
              ]
            },
            markdown_default,
            image_default
          ]
        },
        {
          label: "Titel Text Bild Blume",
          name: "flowertitle",
          widget: "object",
          fields: [title_default, markdown_default, image_default]
        },
        {
          label: "Termin",
          name: "date",
          widget: "object",
          fields: [
            { label: "Vortitel", name: "pretitle", widget: "string" },
            title_default,
            {
              label: "Daten",
              name: "data",
              widget: "list",
              fields: [
                { label: "Schl\xFCssel", name: "key", widget: "string" },
                { label: "Wert", name: "value", widget: "text" }
              ]
            },
            cta_default
          ]
        },
        {
          label: "Yoga Termin",
          name: "yogadate",
          widget: "object",
          fields: [
            title_default,
            text_default,
            {
              label: "Daten",
              name: "yogadata",
              widget: "list",
              fields: [
                { label: "Schl\xFCssel", name: "key", widget: "string" },
                { label: "Wert", name: "value", widget: "text" }
              ]
            },
            cta_default
          ]
        },
        {
          label: "Titel Text Bild Text Button",
          name: "titletextimagetextbutton",
          widget: "object",
          fields: [title_default, text_default, image_default, alt_default, markdown_default, cta_default]
        },
        {
          label: "Titel Text Bild",
          name: "titletextimage",
          widget: "object",
          fields: [title_default, markdown_default, image_default, alt_default]
        },
        {
          label: "Titel Bild Text Button",
          name: "titleimagetextcta",
          widget: "object",
          fields: [title_default, image_default, alt_default, markdown_default, cta_default]
        },
        {
          label: "Banner",
          name: "banner",
          widget: "object",
          fields: [title_default, markdown_default]
        },
        {
          label: "Banner Pretitle",
          name: "prebanner",
          widget: "object",
          fields: [
            title_default,
            { label: "Vortitel", name: "pretitle", widget: "string" },
            markdown_default
          ]
        },
        {
          label: "Banner Pretitle 2",
          name: "prebanner2",
          widget: "object",
          fields: [
            title_default,
            { label: "Vortitel 2", name: "pretitle2", widget: "string" },
            markdown_default
          ]
        },
        {
          label: "Yoga Termine \xDCbersicht ",
          name: "yogadateoverview",
          widget: "object",
          fields: [title_default, markdown_default, text_default, cta_default]
        }
      ]
    }
  ]
};
var seminar_default = seminar;

// cms/config.ts
var config2 = {
  publish_mode: "simple",
  backend: {
    name: "git-gateway",
    branch: "main",
    repo: "danielmoessner/katharina-greuner.de"
  },
  local_backend: true,
  locale: "de",
  display_url: "https://katharina-greuner.de",
  site_url: "https://katharina-greuner.de",
  media_folder: "/public/media",
  public_folder: "/media",
  load_config_file: false,
  collections: [page_default, seminar_default, category_default, setting_default, legal_default, article_default]
};
var config_default = config2;
export {
  config_default as default
};
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/** @license React v17.0.2
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/** @license React v17.0.2
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
