"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res, err) => function __init() {
  if (err) throw err[0];
  try {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  } catch (e) {
    throw err = [e], e;
  }
};
var __commonJS = (cb, mod) => function __require() {
  try {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  } catch (e) {
    throw mod = 0, e;
  }
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
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/process-nextick-args/index.js
var require_process_nextick_args = __commonJS({
  "node_modules/process-nextick-args/index.js"(exports2, module2) {
    "use strict";
    if (typeof process === "undefined" || !process.version || process.version.indexOf("v0.") === 0 || process.version.indexOf("v1.") === 0 && process.version.indexOf("v1.8.") !== 0) {
      module2.exports = { nextTick };
    } else {
      module2.exports = process;
    }
    function nextTick(fn, arg1, arg2, arg3) {
      if (typeof fn !== "function") {
        throw new TypeError('"callback" argument must be a function');
      }
      var len = arguments.length;
      var args, i;
      switch (len) {
        case 0:
        case 1:
          return process.nextTick(fn);
        case 2:
          return process.nextTick(function afterTickOne() {
            fn.call(null, arg1);
          });
        case 3:
          return process.nextTick(function afterTickTwo() {
            fn.call(null, arg1, arg2);
          });
        case 4:
          return process.nextTick(function afterTickThree() {
            fn.call(null, arg1, arg2, arg3);
          });
        default:
          args = new Array(len - 1);
          i = 0;
          while (i < args.length) {
            args[i++] = arguments[i];
          }
          return process.nextTick(function afterTick() {
            fn.apply(null, args);
          });
      }
    }
  }
});

// node_modules/isarray/index.js
var require_isarray = __commonJS({
  "node_modules/isarray/index.js"(exports2, module2) {
    var toString = {}.toString;
    module2.exports = Array.isArray || function(arr) {
      return toString.call(arr) == "[object Array]";
    };
  }
});

// node_modules/jszip/node_modules/readable-stream/lib/internal/streams/stream.js
var require_stream = __commonJS({
  "node_modules/jszip/node_modules/readable-stream/lib/internal/streams/stream.js"(exports2, module2) {
    module2.exports = require("stream");
  }
});

// node_modules/jszip/node_modules/safe-buffer/index.js
var require_safe_buffer = __commonJS({
  "node_modules/jszip/node_modules/safe-buffer/index.js"(exports2, module2) {
    var buffer = require("buffer");
    var Buffer2 = buffer.Buffer;
    function copyProps(src, dst) {
      for (var key in src) {
        dst[key] = src[key];
      }
    }
    if (Buffer2.from && Buffer2.alloc && Buffer2.allocUnsafe && Buffer2.allocUnsafeSlow) {
      module2.exports = buffer;
    } else {
      copyProps(buffer, exports2);
      exports2.Buffer = SafeBuffer;
    }
    function SafeBuffer(arg, encodingOrOffset, length) {
      return Buffer2(arg, encodingOrOffset, length);
    }
    copyProps(Buffer2, SafeBuffer);
    SafeBuffer.from = function(arg, encodingOrOffset, length) {
      if (typeof arg === "number") {
        throw new TypeError("Argument must not be a number");
      }
      return Buffer2(arg, encodingOrOffset, length);
    };
    SafeBuffer.alloc = function(size, fill, encoding) {
      if (typeof size !== "number") {
        throw new TypeError("Argument must be a number");
      }
      var buf = Buffer2(size);
      if (fill !== void 0) {
        if (typeof encoding === "string") {
          buf.fill(fill, encoding);
        } else {
          buf.fill(fill);
        }
      } else {
        buf.fill(0);
      }
      return buf;
    };
    SafeBuffer.allocUnsafe = function(size) {
      if (typeof size !== "number") {
        throw new TypeError("Argument must be a number");
      }
      return Buffer2(size);
    };
    SafeBuffer.allocUnsafeSlow = function(size) {
      if (typeof size !== "number") {
        throw new TypeError("Argument must be a number");
      }
      return buffer.SlowBuffer(size);
    };
  }
});

// node_modules/core-util-is/lib/util.js
var require_util = __commonJS({
  "node_modules/core-util-is/lib/util.js"(exports2) {
    function isArray(arg) {
      if (Array.isArray) {
        return Array.isArray(arg);
      }
      return objectToString(arg) === "[object Array]";
    }
    exports2.isArray = isArray;
    function isBoolean(arg) {
      return typeof arg === "boolean";
    }
    exports2.isBoolean = isBoolean;
    function isNull(arg) {
      return arg === null;
    }
    exports2.isNull = isNull;
    function isNullOrUndefined(arg) {
      return arg == null;
    }
    exports2.isNullOrUndefined = isNullOrUndefined;
    function isNumber(arg) {
      return typeof arg === "number";
    }
    exports2.isNumber = isNumber;
    function isString(arg) {
      return typeof arg === "string";
    }
    exports2.isString = isString;
    function isSymbol(arg) {
      return typeof arg === "symbol";
    }
    exports2.isSymbol = isSymbol;
    function isUndefined(arg) {
      return arg === void 0;
    }
    exports2.isUndefined = isUndefined;
    function isRegExp(re) {
      return objectToString(re) === "[object RegExp]";
    }
    exports2.isRegExp = isRegExp;
    function isObject(arg) {
      return typeof arg === "object" && arg !== null;
    }
    exports2.isObject = isObject;
    function isDate(d) {
      return objectToString(d) === "[object Date]";
    }
    exports2.isDate = isDate;
    function isError(e) {
      return objectToString(e) === "[object Error]" || e instanceof Error;
    }
    exports2.isError = isError;
    function isFunction(arg) {
      return typeof arg === "function";
    }
    exports2.isFunction = isFunction;
    function isPrimitive(arg) {
      return arg === null || typeof arg === "boolean" || typeof arg === "number" || typeof arg === "string" || typeof arg === "symbol" || // ES6 symbol
      typeof arg === "undefined";
    }
    exports2.isPrimitive = isPrimitive;
    exports2.isBuffer = require("buffer").Buffer.isBuffer;
    function objectToString(o) {
      return Object.prototype.toString.call(o);
    }
  }
});

// node_modules/inherits/inherits_browser.js
var require_inherits_browser = __commonJS({
  "node_modules/inherits/inherits_browser.js"(exports2, module2) {
    if (typeof Object.create === "function") {
      module2.exports = function inherits(ctor, superCtor) {
        if (superCtor) {
          ctor.super_ = superCtor;
          ctor.prototype = Object.create(superCtor.prototype, {
            constructor: {
              value: ctor,
              enumerable: false,
              writable: true,
              configurable: true
            }
          });
        }
      };
    } else {
      module2.exports = function inherits(ctor, superCtor) {
        if (superCtor) {
          ctor.super_ = superCtor;
          var TempCtor = function() {
          };
          TempCtor.prototype = superCtor.prototype;
          ctor.prototype = new TempCtor();
          ctor.prototype.constructor = ctor;
        }
      };
    }
  }
});

// node_modules/inherits/inherits.js
var require_inherits = __commonJS({
  "node_modules/inherits/inherits.js"(exports2, module2) {
    try {
      util = require("util");
      if (typeof util.inherits !== "function") throw "";
      module2.exports = util.inherits;
    } catch (e) {
      module2.exports = require_inherits_browser();
    }
    var util;
  }
});

// node_modules/jszip/node_modules/readable-stream/lib/internal/streams/BufferList.js
var require_BufferList = __commonJS({
  "node_modules/jszip/node_modules/readable-stream/lib/internal/streams/BufferList.js"(exports2, module2) {
    "use strict";
    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }
    var Buffer2 = require_safe_buffer().Buffer;
    var util = require("util");
    function copyBuffer(src, target, offset) {
      src.copy(target, offset);
    }
    module2.exports = (function() {
      function BufferList() {
        _classCallCheck(this, BufferList);
        this.head = null;
        this.tail = null;
        this.length = 0;
      }
      BufferList.prototype.push = function push(v) {
        var entry = { data: v, next: null };
        if (this.length > 0) this.tail.next = entry;
        else this.head = entry;
        this.tail = entry;
        ++this.length;
      };
      BufferList.prototype.unshift = function unshift(v) {
        var entry = { data: v, next: this.head };
        if (this.length === 0) this.tail = entry;
        this.head = entry;
        ++this.length;
      };
      BufferList.prototype.shift = function shift() {
        if (this.length === 0) return;
        var ret = this.head.data;
        if (this.length === 1) this.head = this.tail = null;
        else this.head = this.head.next;
        --this.length;
        return ret;
      };
      BufferList.prototype.clear = function clear() {
        this.head = this.tail = null;
        this.length = 0;
      };
      BufferList.prototype.join = function join(s) {
        if (this.length === 0) return "";
        var p = this.head;
        var ret = "" + p.data;
        while (p = p.next) {
          ret += s + p.data;
        }
        return ret;
      };
      BufferList.prototype.concat = function concat(n) {
        if (this.length === 0) return Buffer2.alloc(0);
        var ret = Buffer2.allocUnsafe(n >>> 0);
        var p = this.head;
        var i = 0;
        while (p) {
          copyBuffer(p.data, ret, i);
          i += p.data.length;
          p = p.next;
        }
        return ret;
      };
      return BufferList;
    })();
    if (util && util.inspect && util.inspect.custom) {
      module2.exports.prototype[util.inspect.custom] = function() {
        var obj = util.inspect({ length: this.length });
        return this.constructor.name + " " + obj;
      };
    }
  }
});

// node_modules/jszip/node_modules/readable-stream/lib/internal/streams/destroy.js
var require_destroy = __commonJS({
  "node_modules/jszip/node_modules/readable-stream/lib/internal/streams/destroy.js"(exports2, module2) {
    "use strict";
    var pna = require_process_nextick_args();
    function destroy(err, cb) {
      var _this = this;
      var readableDestroyed = this._readableState && this._readableState.destroyed;
      var writableDestroyed = this._writableState && this._writableState.destroyed;
      if (readableDestroyed || writableDestroyed) {
        if (cb) {
          cb(err);
        } else if (err) {
          if (!this._writableState) {
            pna.nextTick(emitErrorNT, this, err);
          } else if (!this._writableState.errorEmitted) {
            this._writableState.errorEmitted = true;
            pna.nextTick(emitErrorNT, this, err);
          }
        }
        return this;
      }
      if (this._readableState) {
        this._readableState.destroyed = true;
      }
      if (this._writableState) {
        this._writableState.destroyed = true;
      }
      this._destroy(err || null, function(err2) {
        if (!cb && err2) {
          if (!_this._writableState) {
            pna.nextTick(emitErrorNT, _this, err2);
          } else if (!_this._writableState.errorEmitted) {
            _this._writableState.errorEmitted = true;
            pna.nextTick(emitErrorNT, _this, err2);
          }
        } else if (cb) {
          cb(err2);
        }
      });
      return this;
    }
    function undestroy() {
      if (this._readableState) {
        this._readableState.destroyed = false;
        this._readableState.reading = false;
        this._readableState.ended = false;
        this._readableState.endEmitted = false;
      }
      if (this._writableState) {
        this._writableState.destroyed = false;
        this._writableState.ended = false;
        this._writableState.ending = false;
        this._writableState.finalCalled = false;
        this._writableState.prefinished = false;
        this._writableState.finished = false;
        this._writableState.errorEmitted = false;
      }
    }
    function emitErrorNT(self2, err) {
      self2.emit("error", err);
    }
    module2.exports = {
      destroy,
      undestroy
    };
  }
});

// node_modules/util-deprecate/node.js
var require_node = __commonJS({
  "node_modules/util-deprecate/node.js"(exports2, module2) {
    module2.exports = require("util").deprecate;
  }
});

// node_modules/jszip/node_modules/readable-stream/lib/_stream_writable.js
var require_stream_writable = __commonJS({
  "node_modules/jszip/node_modules/readable-stream/lib/_stream_writable.js"(exports2, module2) {
    "use strict";
    var pna = require_process_nextick_args();
    module2.exports = Writable;
    function CorkedRequest(state2) {
      var _this = this;
      this.next = null;
      this.entry = null;
      this.finish = function() {
        onCorkedFinish(_this, state2);
      };
    }
    var asyncWrite = !process.browser && ["v0.10", "v0.9."].indexOf(process.version.slice(0, 5)) > -1 ? setImmediate : pna.nextTick;
    var Duplex;
    Writable.WritableState = WritableState;
    var util = Object.create(require_util());
    util.inherits = require_inherits();
    var internalUtil = {
      deprecate: require_node()
    };
    var Stream = require_stream();
    var Buffer2 = require_safe_buffer().Buffer;
    var OurUint8Array = (typeof global !== "undefined" ? global : typeof window !== "undefined" ? window : typeof self !== "undefined" ? self : {}).Uint8Array || function() {
    };
    function _uint8ArrayToBuffer(chunk) {
      return Buffer2.from(chunk);
    }
    function _isUint8Array(obj) {
      return Buffer2.isBuffer(obj) || obj instanceof OurUint8Array;
    }
    var destroyImpl = require_destroy();
    util.inherits(Writable, Stream);
    function nop() {
    }
    function WritableState(options2, stream) {
      Duplex = Duplex || require_stream_duplex();
      options2 = options2 || {};
      var isDuplex = stream instanceof Duplex;
      this.objectMode = !!options2.objectMode;
      if (isDuplex) this.objectMode = this.objectMode || !!options2.writableObjectMode;
      var hwm = options2.highWaterMark;
      var writableHwm = options2.writableHighWaterMark;
      var defaultHwm = this.objectMode ? 16 : 16 * 1024;
      if (hwm || hwm === 0) this.highWaterMark = hwm;
      else if (isDuplex && (writableHwm || writableHwm === 0)) this.highWaterMark = writableHwm;
      else this.highWaterMark = defaultHwm;
      this.highWaterMark = Math.floor(this.highWaterMark);
      this.finalCalled = false;
      this.needDrain = false;
      this.ending = false;
      this.ended = false;
      this.finished = false;
      this.destroyed = false;
      var noDecode = options2.decodeStrings === false;
      this.decodeStrings = !noDecode;
      this.defaultEncoding = options2.defaultEncoding || "utf8";
      this.length = 0;
      this.writing = false;
      this.corked = 0;
      this.sync = true;
      this.bufferProcessing = false;
      this.onwrite = function(er) {
        onwrite(stream, er);
      };
      this.writecb = null;
      this.writelen = 0;
      this.bufferedRequest = null;
      this.lastBufferedRequest = null;
      this.pendingcb = 0;
      this.prefinished = false;
      this.errorEmitted = false;
      this.bufferedRequestCount = 0;
      this.corkedRequestsFree = new CorkedRequest(this);
    }
    WritableState.prototype.getBuffer = function getBuffer() {
      var current = this.bufferedRequest;
      var out = [];
      while (current) {
        out.push(current);
        current = current.next;
      }
      return out;
    };
    (function() {
      try {
        Object.defineProperty(WritableState.prototype, "buffer", {
          get: internalUtil.deprecate(function() {
            return this.getBuffer();
          }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
        });
      } catch (_) {
      }
    })();
    var realHasInstance;
    if (typeof Symbol === "function" && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] === "function") {
      realHasInstance = Function.prototype[Symbol.hasInstance];
      Object.defineProperty(Writable, Symbol.hasInstance, {
        value: function(object2) {
          if (realHasInstance.call(this, object2)) return true;
          if (this !== Writable) return false;
          return object2 && object2._writableState instanceof WritableState;
        }
      });
    } else {
      realHasInstance = function(object2) {
        return object2 instanceof this;
      };
    }
    function Writable(options2) {
      Duplex = Duplex || require_stream_duplex();
      if (!realHasInstance.call(Writable, this) && !(this instanceof Duplex)) {
        return new Writable(options2);
      }
      this._writableState = new WritableState(options2, this);
      this.writable = true;
      if (options2) {
        if (typeof options2.write === "function") this._write = options2.write;
        if (typeof options2.writev === "function") this._writev = options2.writev;
        if (typeof options2.destroy === "function") this._destroy = options2.destroy;
        if (typeof options2.final === "function") this._final = options2.final;
      }
      Stream.call(this);
    }
    Writable.prototype.pipe = function() {
      this.emit("error", new Error("Cannot pipe, not readable"));
    };
    function writeAfterEnd(stream, cb) {
      var er = new Error("write after end");
      stream.emit("error", er);
      pna.nextTick(cb, er);
    }
    function validChunk(stream, state2, chunk, cb) {
      var valid = true;
      var er = false;
      if (chunk === null) {
        er = new TypeError("May not write null values to stream");
      } else if (typeof chunk !== "string" && chunk !== void 0 && !state2.objectMode) {
        er = new TypeError("Invalid non-string/buffer chunk");
      }
      if (er) {
        stream.emit("error", er);
        pna.nextTick(cb, er);
        valid = false;
      }
      return valid;
    }
    Writable.prototype.write = function(chunk, encoding, cb) {
      var state2 = this._writableState;
      var ret = false;
      var isBuf = !state2.objectMode && _isUint8Array(chunk);
      if (isBuf && !Buffer2.isBuffer(chunk)) {
        chunk = _uint8ArrayToBuffer(chunk);
      }
      if (typeof encoding === "function") {
        cb = encoding;
        encoding = null;
      }
      if (isBuf) encoding = "buffer";
      else if (!encoding) encoding = state2.defaultEncoding;
      if (typeof cb !== "function") cb = nop;
      if (state2.ended) writeAfterEnd(this, cb);
      else if (isBuf || validChunk(this, state2, chunk, cb)) {
        state2.pendingcb++;
        ret = writeOrBuffer(this, state2, isBuf, chunk, encoding, cb);
      }
      return ret;
    };
    Writable.prototype.cork = function() {
      var state2 = this._writableState;
      state2.corked++;
    };
    Writable.prototype.uncork = function() {
      var state2 = this._writableState;
      if (state2.corked) {
        state2.corked--;
        if (!state2.writing && !state2.corked && !state2.bufferProcessing && state2.bufferedRequest) clearBuffer(this, state2);
      }
    };
    Writable.prototype.setDefaultEncoding = function setDefaultEncoding(encoding) {
      if (typeof encoding === "string") encoding = encoding.toLowerCase();
      if (!(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((encoding + "").toLowerCase()) > -1)) throw new TypeError("Unknown encoding: " + encoding);
      this._writableState.defaultEncoding = encoding;
      return this;
    };
    function decodeChunk(state2, chunk, encoding) {
      if (!state2.objectMode && state2.decodeStrings !== false && typeof chunk === "string") {
        chunk = Buffer2.from(chunk, encoding);
      }
      return chunk;
    }
    Object.defineProperty(Writable.prototype, "writableHighWaterMark", {
      // making it explicit this property is not enumerable
      // because otherwise some prototype manipulation in
      // userland will fail
      enumerable: false,
      get: function() {
        return this._writableState.highWaterMark;
      }
    });
    function writeOrBuffer(stream, state2, isBuf, chunk, encoding, cb) {
      if (!isBuf) {
        var newChunk = decodeChunk(state2, chunk, encoding);
        if (chunk !== newChunk) {
          isBuf = true;
          encoding = "buffer";
          chunk = newChunk;
        }
      }
      var len = state2.objectMode ? 1 : chunk.length;
      state2.length += len;
      var ret = state2.length < state2.highWaterMark;
      if (!ret) state2.needDrain = true;
      if (state2.writing || state2.corked) {
        var last = state2.lastBufferedRequest;
        state2.lastBufferedRequest = {
          chunk,
          encoding,
          isBuf,
          callback: cb,
          next: null
        };
        if (last) {
          last.next = state2.lastBufferedRequest;
        } else {
          state2.bufferedRequest = state2.lastBufferedRequest;
        }
        state2.bufferedRequestCount += 1;
      } else {
        doWrite(stream, state2, false, len, chunk, encoding, cb);
      }
      return ret;
    }
    function doWrite(stream, state2, writev, len, chunk, encoding, cb) {
      state2.writelen = len;
      state2.writecb = cb;
      state2.writing = true;
      state2.sync = true;
      if (writev) stream._writev(chunk, state2.onwrite);
      else stream._write(chunk, encoding, state2.onwrite);
      state2.sync = false;
    }
    function onwriteError(stream, state2, sync, er, cb) {
      --state2.pendingcb;
      if (sync) {
        pna.nextTick(cb, er);
        pna.nextTick(finishMaybe, stream, state2);
        stream._writableState.errorEmitted = true;
        stream.emit("error", er);
      } else {
        cb(er);
        stream._writableState.errorEmitted = true;
        stream.emit("error", er);
        finishMaybe(stream, state2);
      }
    }
    function onwriteStateUpdate(state2) {
      state2.writing = false;
      state2.writecb = null;
      state2.length -= state2.writelen;
      state2.writelen = 0;
    }
    function onwrite(stream, er) {
      var state2 = stream._writableState;
      var sync = state2.sync;
      var cb = state2.writecb;
      onwriteStateUpdate(state2);
      if (er) onwriteError(stream, state2, sync, er, cb);
      else {
        var finished = needFinish(state2);
        if (!finished && !state2.corked && !state2.bufferProcessing && state2.bufferedRequest) {
          clearBuffer(stream, state2);
        }
        if (sync) {
          asyncWrite(afterWrite, stream, state2, finished, cb);
        } else {
          afterWrite(stream, state2, finished, cb);
        }
      }
    }
    function afterWrite(stream, state2, finished, cb) {
      if (!finished) onwriteDrain(stream, state2);
      state2.pendingcb--;
      cb();
      finishMaybe(stream, state2);
    }
    function onwriteDrain(stream, state2) {
      if (state2.length === 0 && state2.needDrain) {
        state2.needDrain = false;
        stream.emit("drain");
      }
    }
    function clearBuffer(stream, state2) {
      state2.bufferProcessing = true;
      var entry = state2.bufferedRequest;
      if (stream._writev && entry && entry.next) {
        var l = state2.bufferedRequestCount;
        var buffer = new Array(l);
        var holder = state2.corkedRequestsFree;
        holder.entry = entry;
        var count = 0;
        var allBuffers = true;
        while (entry) {
          buffer[count] = entry;
          if (!entry.isBuf) allBuffers = false;
          entry = entry.next;
          count += 1;
        }
        buffer.allBuffers = allBuffers;
        doWrite(stream, state2, true, state2.length, buffer, "", holder.finish);
        state2.pendingcb++;
        state2.lastBufferedRequest = null;
        if (holder.next) {
          state2.corkedRequestsFree = holder.next;
          holder.next = null;
        } else {
          state2.corkedRequestsFree = new CorkedRequest(state2);
        }
        state2.bufferedRequestCount = 0;
      } else {
        while (entry) {
          var chunk = entry.chunk;
          var encoding = entry.encoding;
          var cb = entry.callback;
          var len = state2.objectMode ? 1 : chunk.length;
          doWrite(stream, state2, false, len, chunk, encoding, cb);
          entry = entry.next;
          state2.bufferedRequestCount--;
          if (state2.writing) {
            break;
          }
        }
        if (entry === null) state2.lastBufferedRequest = null;
      }
      state2.bufferedRequest = entry;
      state2.bufferProcessing = false;
    }
    Writable.prototype._write = function(chunk, encoding, cb) {
      cb(new Error("_write() is not implemented"));
    };
    Writable.prototype._writev = null;
    Writable.prototype.end = function(chunk, encoding, cb) {
      var state2 = this._writableState;
      if (typeof chunk === "function") {
        cb = chunk;
        chunk = null;
        encoding = null;
      } else if (typeof encoding === "function") {
        cb = encoding;
        encoding = null;
      }
      if (chunk !== null && chunk !== void 0) this.write(chunk, encoding);
      if (state2.corked) {
        state2.corked = 1;
        this.uncork();
      }
      if (!state2.ending) endWritable(this, state2, cb);
    };
    function needFinish(state2) {
      return state2.ending && state2.length === 0 && state2.bufferedRequest === null && !state2.finished && !state2.writing;
    }
    function callFinal(stream, state2) {
      stream._final(function(err) {
        state2.pendingcb--;
        if (err) {
          stream.emit("error", err);
        }
        state2.prefinished = true;
        stream.emit("prefinish");
        finishMaybe(stream, state2);
      });
    }
    function prefinish(stream, state2) {
      if (!state2.prefinished && !state2.finalCalled) {
        if (typeof stream._final === "function") {
          state2.pendingcb++;
          state2.finalCalled = true;
          pna.nextTick(callFinal, stream, state2);
        } else {
          state2.prefinished = true;
          stream.emit("prefinish");
        }
      }
    }
    function finishMaybe(stream, state2) {
      var need = needFinish(state2);
      if (need) {
        prefinish(stream, state2);
        if (state2.pendingcb === 0) {
          state2.finished = true;
          stream.emit("finish");
        }
      }
      return need;
    }
    function endWritable(stream, state2, cb) {
      state2.ending = true;
      finishMaybe(stream, state2);
      if (cb) {
        if (state2.finished) pna.nextTick(cb);
        else stream.once("finish", cb);
      }
      state2.ended = true;
      stream.writable = false;
    }
    function onCorkedFinish(corkReq, state2, err) {
      var entry = corkReq.entry;
      corkReq.entry = null;
      while (entry) {
        var cb = entry.callback;
        state2.pendingcb--;
        cb(err);
        entry = entry.next;
      }
      state2.corkedRequestsFree.next = corkReq;
    }
    Object.defineProperty(Writable.prototype, "destroyed", {
      get: function() {
        if (this._writableState === void 0) {
          return false;
        }
        return this._writableState.destroyed;
      },
      set: function(value) {
        if (!this._writableState) {
          return;
        }
        this._writableState.destroyed = value;
      }
    });
    Writable.prototype.destroy = destroyImpl.destroy;
    Writable.prototype._undestroy = destroyImpl.undestroy;
    Writable.prototype._destroy = function(err, cb) {
      this.end();
      cb(err);
    };
  }
});

// node_modules/jszip/node_modules/readable-stream/lib/_stream_duplex.js
var require_stream_duplex = __commonJS({
  "node_modules/jszip/node_modules/readable-stream/lib/_stream_duplex.js"(exports2, module2) {
    "use strict";
    var pna = require_process_nextick_args();
    var objectKeys = Object.keys || function(obj) {
      var keys2 = [];
      for (var key in obj) {
        keys2.push(key);
      }
      return keys2;
    };
    module2.exports = Duplex;
    var util = Object.create(require_util());
    util.inherits = require_inherits();
    var Readable = require_stream_readable();
    var Writable = require_stream_writable();
    util.inherits(Duplex, Readable);
    {
      keys = objectKeys(Writable.prototype);
      for (v = 0; v < keys.length; v++) {
        method = keys[v];
        if (!Duplex.prototype[method]) Duplex.prototype[method] = Writable.prototype[method];
      }
    }
    var keys;
    var method;
    var v;
    function Duplex(options2) {
      if (!(this instanceof Duplex)) return new Duplex(options2);
      Readable.call(this, options2);
      Writable.call(this, options2);
      if (options2 && options2.readable === false) this.readable = false;
      if (options2 && options2.writable === false) this.writable = false;
      this.allowHalfOpen = true;
      if (options2 && options2.allowHalfOpen === false) this.allowHalfOpen = false;
      this.once("end", onend);
    }
    Object.defineProperty(Duplex.prototype, "writableHighWaterMark", {
      // making it explicit this property is not enumerable
      // because otherwise some prototype manipulation in
      // userland will fail
      enumerable: false,
      get: function() {
        return this._writableState.highWaterMark;
      }
    });
    function onend() {
      if (this.allowHalfOpen || this._writableState.ended) return;
      pna.nextTick(onEndNT, this);
    }
    function onEndNT(self2) {
      self2.end();
    }
    Object.defineProperty(Duplex.prototype, "destroyed", {
      get: function() {
        if (this._readableState === void 0 || this._writableState === void 0) {
          return false;
        }
        return this._readableState.destroyed && this._writableState.destroyed;
      },
      set: function(value) {
        if (this._readableState === void 0 || this._writableState === void 0) {
          return;
        }
        this._readableState.destroyed = value;
        this._writableState.destroyed = value;
      }
    });
    Duplex.prototype._destroy = function(err, cb) {
      this.push(null);
      this.end();
      pna.nextTick(cb, err);
    };
  }
});

// node_modules/jszip/node_modules/string_decoder/lib/string_decoder.js
var require_string_decoder = __commonJS({
  "node_modules/jszip/node_modules/string_decoder/lib/string_decoder.js"(exports2) {
    "use strict";
    var Buffer2 = require_safe_buffer().Buffer;
    var isEncoding = Buffer2.isEncoding || function(encoding) {
      encoding = "" + encoding;
      switch (encoding && encoding.toLowerCase()) {
        case "hex":
        case "utf8":
        case "utf-8":
        case "ascii":
        case "binary":
        case "base64":
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
        case "raw":
          return true;
        default:
          return false;
      }
    };
    function _normalizeEncoding(enc) {
      if (!enc) return "utf8";
      var retried;
      while (true) {
        switch (enc) {
          case "utf8":
          case "utf-8":
            return "utf8";
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return "utf16le";
          case "latin1":
          case "binary":
            return "latin1";
          case "base64":
          case "ascii":
          case "hex":
            return enc;
          default:
            if (retried) return;
            enc = ("" + enc).toLowerCase();
            retried = true;
        }
      }
    }
    function normalizeEncoding(enc) {
      var nenc = _normalizeEncoding(enc);
      if (typeof nenc !== "string" && (Buffer2.isEncoding === isEncoding || !isEncoding(enc))) throw new Error("Unknown encoding: " + enc);
      return nenc || enc;
    }
    exports2.StringDecoder = StringDecoder;
    function StringDecoder(encoding) {
      this.encoding = normalizeEncoding(encoding);
      var nb;
      switch (this.encoding) {
        case "utf16le":
          this.text = utf16Text;
          this.end = utf16End;
          nb = 4;
          break;
        case "utf8":
          this.fillLast = utf8FillLast;
          nb = 4;
          break;
        case "base64":
          this.text = base64Text;
          this.end = base64End;
          nb = 3;
          break;
        default:
          this.write = simpleWrite;
          this.end = simpleEnd;
          return;
      }
      this.lastNeed = 0;
      this.lastTotal = 0;
      this.lastChar = Buffer2.allocUnsafe(nb);
    }
    StringDecoder.prototype.write = function(buf) {
      if (buf.length === 0) return "";
      var r;
      var i;
      if (this.lastNeed) {
        r = this.fillLast(buf);
        if (r === void 0) return "";
        i = this.lastNeed;
        this.lastNeed = 0;
      } else {
        i = 0;
      }
      if (i < buf.length) return r ? r + this.text(buf, i) : this.text(buf, i);
      return r || "";
    };
    StringDecoder.prototype.end = utf8End;
    StringDecoder.prototype.text = utf8Text;
    StringDecoder.prototype.fillLast = function(buf) {
      if (this.lastNeed <= buf.length) {
        buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed);
        return this.lastChar.toString(this.encoding, 0, this.lastTotal);
      }
      buf.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, buf.length);
      this.lastNeed -= buf.length;
    };
    function utf8CheckByte(byte) {
      if (byte <= 127) return 0;
      else if (byte >> 5 === 6) return 2;
      else if (byte >> 4 === 14) return 3;
      else if (byte >> 3 === 30) return 4;
      return byte >> 6 === 2 ? -1 : -2;
    }
    function utf8CheckIncomplete(self2, buf, i) {
      var j = buf.length - 1;
      if (j < i) return 0;
      var nb = utf8CheckByte(buf[j]);
      if (nb >= 0) {
        if (nb > 0) self2.lastNeed = nb - 1;
        return nb;
      }
      if (--j < i || nb === -2) return 0;
      nb = utf8CheckByte(buf[j]);
      if (nb >= 0) {
        if (nb > 0) self2.lastNeed = nb - 2;
        return nb;
      }
      if (--j < i || nb === -2) return 0;
      nb = utf8CheckByte(buf[j]);
      if (nb >= 0) {
        if (nb > 0) {
          if (nb === 2) nb = 0;
          else self2.lastNeed = nb - 3;
        }
        return nb;
      }
      return 0;
    }
    function utf8CheckExtraBytes(self2, buf, p) {
      if ((buf[0] & 192) !== 128) {
        self2.lastNeed = 0;
        return "\uFFFD";
      }
      if (self2.lastNeed > 1 && buf.length > 1) {
        if ((buf[1] & 192) !== 128) {
          self2.lastNeed = 1;
          return "\uFFFD";
        }
        if (self2.lastNeed > 2 && buf.length > 2) {
          if ((buf[2] & 192) !== 128) {
            self2.lastNeed = 2;
            return "\uFFFD";
          }
        }
      }
    }
    function utf8FillLast(buf) {
      var p = this.lastTotal - this.lastNeed;
      var r = utf8CheckExtraBytes(this, buf, p);
      if (r !== void 0) return r;
      if (this.lastNeed <= buf.length) {
        buf.copy(this.lastChar, p, 0, this.lastNeed);
        return this.lastChar.toString(this.encoding, 0, this.lastTotal);
      }
      buf.copy(this.lastChar, p, 0, buf.length);
      this.lastNeed -= buf.length;
    }
    function utf8Text(buf, i) {
      var total = utf8CheckIncomplete(this, buf, i);
      if (!this.lastNeed) return buf.toString("utf8", i);
      this.lastTotal = total;
      var end = buf.length - (total - this.lastNeed);
      buf.copy(this.lastChar, 0, end);
      return buf.toString("utf8", i, end);
    }
    function utf8End(buf) {
      var r = buf && buf.length ? this.write(buf) : "";
      if (this.lastNeed) return r + "\uFFFD";
      return r;
    }
    function utf16Text(buf, i) {
      if ((buf.length - i) % 2 === 0) {
        var r = buf.toString("utf16le", i);
        if (r) {
          var c = r.charCodeAt(r.length - 1);
          if (c >= 55296 && c <= 56319) {
            this.lastNeed = 2;
            this.lastTotal = 4;
            this.lastChar[0] = buf[buf.length - 2];
            this.lastChar[1] = buf[buf.length - 1];
            return r.slice(0, -1);
          }
        }
        return r;
      }
      this.lastNeed = 1;
      this.lastTotal = 2;
      this.lastChar[0] = buf[buf.length - 1];
      return buf.toString("utf16le", i, buf.length - 1);
    }
    function utf16End(buf) {
      var r = buf && buf.length ? this.write(buf) : "";
      if (this.lastNeed) {
        var end = this.lastTotal - this.lastNeed;
        return r + this.lastChar.toString("utf16le", 0, end);
      }
      return r;
    }
    function base64Text(buf, i) {
      var n = (buf.length - i) % 3;
      if (n === 0) return buf.toString("base64", i);
      this.lastNeed = 3 - n;
      this.lastTotal = 3;
      if (n === 1) {
        this.lastChar[0] = buf[buf.length - 1];
      } else {
        this.lastChar[0] = buf[buf.length - 2];
        this.lastChar[1] = buf[buf.length - 1];
      }
      return buf.toString("base64", i, buf.length - n);
    }
    function base64End(buf) {
      var r = buf && buf.length ? this.write(buf) : "";
      if (this.lastNeed) return r + this.lastChar.toString("base64", 0, 3 - this.lastNeed);
      return r;
    }
    function simpleWrite(buf) {
      return buf.toString(this.encoding);
    }
    function simpleEnd(buf) {
      return buf && buf.length ? this.write(buf) : "";
    }
  }
});

// node_modules/jszip/node_modules/readable-stream/lib/_stream_readable.js
var require_stream_readable = __commonJS({
  "node_modules/jszip/node_modules/readable-stream/lib/_stream_readable.js"(exports2, module2) {
    "use strict";
    var pna = require_process_nextick_args();
    module2.exports = Readable;
    var isArray = require_isarray();
    var Duplex;
    Readable.ReadableState = ReadableState;
    var EE = require("events").EventEmitter;
    var EElistenerCount = function(emitter, type) {
      return emitter.listeners(type).length;
    };
    var Stream = require_stream();
    var Buffer2 = require_safe_buffer().Buffer;
    var OurUint8Array = (typeof global !== "undefined" ? global : typeof window !== "undefined" ? window : typeof self !== "undefined" ? self : {}).Uint8Array || function() {
    };
    function _uint8ArrayToBuffer(chunk) {
      return Buffer2.from(chunk);
    }
    function _isUint8Array(obj) {
      return Buffer2.isBuffer(obj) || obj instanceof OurUint8Array;
    }
    var util = Object.create(require_util());
    util.inherits = require_inherits();
    var debugUtil = require("util");
    var debug = void 0;
    if (debugUtil && debugUtil.debuglog) {
      debug = debugUtil.debuglog("stream");
    } else {
      debug = function() {
      };
    }
    var BufferList = require_BufferList();
    var destroyImpl = require_destroy();
    var StringDecoder;
    util.inherits(Readable, Stream);
    var kProxyEvents = ["error", "close", "destroy", "pause", "resume"];
    function prependListener(emitter, event, fn) {
      if (typeof emitter.prependListener === "function") return emitter.prependListener(event, fn);
      if (!emitter._events || !emitter._events[event]) emitter.on(event, fn);
      else if (isArray(emitter._events[event])) emitter._events[event].unshift(fn);
      else emitter._events[event] = [fn, emitter._events[event]];
    }
    function ReadableState(options2, stream) {
      Duplex = Duplex || require_stream_duplex();
      options2 = options2 || {};
      var isDuplex = stream instanceof Duplex;
      this.objectMode = !!options2.objectMode;
      if (isDuplex) this.objectMode = this.objectMode || !!options2.readableObjectMode;
      var hwm = options2.highWaterMark;
      var readableHwm = options2.readableHighWaterMark;
      var defaultHwm = this.objectMode ? 16 : 16 * 1024;
      if (hwm || hwm === 0) this.highWaterMark = hwm;
      else if (isDuplex && (readableHwm || readableHwm === 0)) this.highWaterMark = readableHwm;
      else this.highWaterMark = defaultHwm;
      this.highWaterMark = Math.floor(this.highWaterMark);
      this.buffer = new BufferList();
      this.length = 0;
      this.pipes = null;
      this.pipesCount = 0;
      this.flowing = null;
      this.ended = false;
      this.endEmitted = false;
      this.reading = false;
      this.sync = true;
      this.needReadable = false;
      this.emittedReadable = false;
      this.readableListening = false;
      this.resumeScheduled = false;
      this.destroyed = false;
      this.defaultEncoding = options2.defaultEncoding || "utf8";
      this.awaitDrain = 0;
      this.readingMore = false;
      this.decoder = null;
      this.encoding = null;
      if (options2.encoding) {
        if (!StringDecoder) StringDecoder = require_string_decoder().StringDecoder;
        this.decoder = new StringDecoder(options2.encoding);
        this.encoding = options2.encoding;
      }
    }
    function Readable(options2) {
      Duplex = Duplex || require_stream_duplex();
      if (!(this instanceof Readable)) return new Readable(options2);
      this._readableState = new ReadableState(options2, this);
      this.readable = true;
      if (options2) {
        if (typeof options2.read === "function") this._read = options2.read;
        if (typeof options2.destroy === "function") this._destroy = options2.destroy;
      }
      Stream.call(this);
    }
    Object.defineProperty(Readable.prototype, "destroyed", {
      get: function() {
        if (this._readableState === void 0) {
          return false;
        }
        return this._readableState.destroyed;
      },
      set: function(value) {
        if (!this._readableState) {
          return;
        }
        this._readableState.destroyed = value;
      }
    });
    Readable.prototype.destroy = destroyImpl.destroy;
    Readable.prototype._undestroy = destroyImpl.undestroy;
    Readable.prototype._destroy = function(err, cb) {
      this.push(null);
      cb(err);
    };
    Readable.prototype.push = function(chunk, encoding) {
      var state2 = this._readableState;
      var skipChunkCheck;
      if (!state2.objectMode) {
        if (typeof chunk === "string") {
          encoding = encoding || state2.defaultEncoding;
          if (encoding !== state2.encoding) {
            chunk = Buffer2.from(chunk, encoding);
            encoding = "";
          }
          skipChunkCheck = true;
        }
      } else {
        skipChunkCheck = true;
      }
      return readableAddChunk(this, chunk, encoding, false, skipChunkCheck);
    };
    Readable.prototype.unshift = function(chunk) {
      return readableAddChunk(this, chunk, null, true, false);
    };
    function readableAddChunk(stream, chunk, encoding, addToFront, skipChunkCheck) {
      var state2 = stream._readableState;
      if (chunk === null) {
        state2.reading = false;
        onEofChunk(stream, state2);
      } else {
        var er;
        if (!skipChunkCheck) er = chunkInvalid(state2, chunk);
        if (er) {
          stream.emit("error", er);
        } else if (state2.objectMode || chunk && chunk.length > 0) {
          if (typeof chunk !== "string" && !state2.objectMode && Object.getPrototypeOf(chunk) !== Buffer2.prototype) {
            chunk = _uint8ArrayToBuffer(chunk);
          }
          if (addToFront) {
            if (state2.endEmitted) stream.emit("error", new Error("stream.unshift() after end event"));
            else addChunk(stream, state2, chunk, true);
          } else if (state2.ended) {
            stream.emit("error", new Error("stream.push() after EOF"));
          } else {
            state2.reading = false;
            if (state2.decoder && !encoding) {
              chunk = state2.decoder.write(chunk);
              if (state2.objectMode || chunk.length !== 0) addChunk(stream, state2, chunk, false);
              else maybeReadMore(stream, state2);
            } else {
              addChunk(stream, state2, chunk, false);
            }
          }
        } else if (!addToFront) {
          state2.reading = false;
        }
      }
      return needMoreData(state2);
    }
    function addChunk(stream, state2, chunk, addToFront) {
      if (state2.flowing && state2.length === 0 && !state2.sync) {
        stream.emit("data", chunk);
        stream.read(0);
      } else {
        state2.length += state2.objectMode ? 1 : chunk.length;
        if (addToFront) state2.buffer.unshift(chunk);
        else state2.buffer.push(chunk);
        if (state2.needReadable) emitReadable(stream);
      }
      maybeReadMore(stream, state2);
    }
    function chunkInvalid(state2, chunk) {
      var er;
      if (!_isUint8Array(chunk) && typeof chunk !== "string" && chunk !== void 0 && !state2.objectMode) {
        er = new TypeError("Invalid non-string/buffer chunk");
      }
      return er;
    }
    function needMoreData(state2) {
      return !state2.ended && (state2.needReadable || state2.length < state2.highWaterMark || state2.length === 0);
    }
    Readable.prototype.isPaused = function() {
      return this._readableState.flowing === false;
    };
    Readable.prototype.setEncoding = function(enc) {
      if (!StringDecoder) StringDecoder = require_string_decoder().StringDecoder;
      this._readableState.decoder = new StringDecoder(enc);
      this._readableState.encoding = enc;
      return this;
    };
    var MAX_HWM = 8388608;
    function computeNewHighWaterMark(n) {
      if (n >= MAX_HWM) {
        n = MAX_HWM;
      } else {
        n--;
        n |= n >>> 1;
        n |= n >>> 2;
        n |= n >>> 4;
        n |= n >>> 8;
        n |= n >>> 16;
        n++;
      }
      return n;
    }
    function howMuchToRead(n, state2) {
      if (n <= 0 || state2.length === 0 && state2.ended) return 0;
      if (state2.objectMode) return 1;
      if (n !== n) {
        if (state2.flowing && state2.length) return state2.buffer.head.data.length;
        else return state2.length;
      }
      if (n > state2.highWaterMark) state2.highWaterMark = computeNewHighWaterMark(n);
      if (n <= state2.length) return n;
      if (!state2.ended) {
        state2.needReadable = true;
        return 0;
      }
      return state2.length;
    }
    Readable.prototype.read = function(n) {
      debug("read", n);
      n = parseInt(n, 10);
      var state2 = this._readableState;
      var nOrig = n;
      if (n !== 0) state2.emittedReadable = false;
      if (n === 0 && state2.needReadable && (state2.length >= state2.highWaterMark || state2.ended)) {
        debug("read: emitReadable", state2.length, state2.ended);
        if (state2.length === 0 && state2.ended) endReadable(this);
        else emitReadable(this);
        return null;
      }
      n = howMuchToRead(n, state2);
      if (n === 0 && state2.ended) {
        if (state2.length === 0) endReadable(this);
        return null;
      }
      var doRead = state2.needReadable;
      debug("need readable", doRead);
      if (state2.length === 0 || state2.length - n < state2.highWaterMark) {
        doRead = true;
        debug("length less than watermark", doRead);
      }
      if (state2.ended || state2.reading) {
        doRead = false;
        debug("reading or ended", doRead);
      } else if (doRead) {
        debug("do read");
        state2.reading = true;
        state2.sync = true;
        if (state2.length === 0) state2.needReadable = true;
        this._read(state2.highWaterMark);
        state2.sync = false;
        if (!state2.reading) n = howMuchToRead(nOrig, state2);
      }
      var ret;
      if (n > 0) ret = fromList(n, state2);
      else ret = null;
      if (ret === null) {
        state2.needReadable = true;
        n = 0;
      } else {
        state2.length -= n;
      }
      if (state2.length === 0) {
        if (!state2.ended) state2.needReadable = true;
        if (nOrig !== n && state2.ended) endReadable(this);
      }
      if (ret !== null) this.emit("data", ret);
      return ret;
    };
    function onEofChunk(stream, state2) {
      if (state2.ended) return;
      if (state2.decoder) {
        var chunk = state2.decoder.end();
        if (chunk && chunk.length) {
          state2.buffer.push(chunk);
          state2.length += state2.objectMode ? 1 : chunk.length;
        }
      }
      state2.ended = true;
      emitReadable(stream);
    }
    function emitReadable(stream) {
      var state2 = stream._readableState;
      state2.needReadable = false;
      if (!state2.emittedReadable) {
        debug("emitReadable", state2.flowing);
        state2.emittedReadable = true;
        if (state2.sync) pna.nextTick(emitReadable_, stream);
        else emitReadable_(stream);
      }
    }
    function emitReadable_(stream) {
      debug("emit readable");
      stream.emit("readable");
      flow(stream);
    }
    function maybeReadMore(stream, state2) {
      if (!state2.readingMore) {
        state2.readingMore = true;
        pna.nextTick(maybeReadMore_, stream, state2);
      }
    }
    function maybeReadMore_(stream, state2) {
      var len = state2.length;
      while (!state2.reading && !state2.flowing && !state2.ended && state2.length < state2.highWaterMark) {
        debug("maybeReadMore read 0");
        stream.read(0);
        if (len === state2.length)
          break;
        else len = state2.length;
      }
      state2.readingMore = false;
    }
    Readable.prototype._read = function(n) {
      this.emit("error", new Error("_read() is not implemented"));
    };
    Readable.prototype.pipe = function(dest, pipeOpts) {
      var src = this;
      var state2 = this._readableState;
      switch (state2.pipesCount) {
        case 0:
          state2.pipes = dest;
          break;
        case 1:
          state2.pipes = [state2.pipes, dest];
          break;
        default:
          state2.pipes.push(dest);
          break;
      }
      state2.pipesCount += 1;
      debug("pipe count=%d opts=%j", state2.pipesCount, pipeOpts);
      var doEnd = (!pipeOpts || pipeOpts.end !== false) && dest !== process.stdout && dest !== process.stderr;
      var endFn = doEnd ? onend : unpipe;
      if (state2.endEmitted) pna.nextTick(endFn);
      else src.once("end", endFn);
      dest.on("unpipe", onunpipe);
      function onunpipe(readable, unpipeInfo) {
        debug("onunpipe");
        if (readable === src) {
          if (unpipeInfo && unpipeInfo.hasUnpiped === false) {
            unpipeInfo.hasUnpiped = true;
            cleanup();
          }
        }
      }
      function onend() {
        debug("onend");
        dest.end();
      }
      var ondrain = pipeOnDrain(src);
      dest.on("drain", ondrain);
      var cleanedUp = false;
      function cleanup() {
        debug("cleanup");
        dest.removeListener("close", onclose);
        dest.removeListener("finish", onfinish);
        dest.removeListener("drain", ondrain);
        dest.removeListener("error", onerror);
        dest.removeListener("unpipe", onunpipe);
        src.removeListener("end", onend);
        src.removeListener("end", unpipe);
        src.removeListener("data", ondata);
        cleanedUp = true;
        if (state2.awaitDrain && (!dest._writableState || dest._writableState.needDrain)) ondrain();
      }
      var increasedAwaitDrain = false;
      src.on("data", ondata);
      function ondata(chunk) {
        debug("ondata");
        increasedAwaitDrain = false;
        var ret = dest.write(chunk);
        if (false === ret && !increasedAwaitDrain) {
          if ((state2.pipesCount === 1 && state2.pipes === dest || state2.pipesCount > 1 && indexOf(state2.pipes, dest) !== -1) && !cleanedUp) {
            debug("false write response, pause", state2.awaitDrain);
            state2.awaitDrain++;
            increasedAwaitDrain = true;
          }
          src.pause();
        }
      }
      function onerror(er) {
        debug("onerror", er);
        unpipe();
        dest.removeListener("error", onerror);
        if (EElistenerCount(dest, "error") === 0) dest.emit("error", er);
      }
      prependListener(dest, "error", onerror);
      function onclose() {
        dest.removeListener("finish", onfinish);
        unpipe();
      }
      dest.once("close", onclose);
      function onfinish() {
        debug("onfinish");
        dest.removeListener("close", onclose);
        unpipe();
      }
      dest.once("finish", onfinish);
      function unpipe() {
        debug("unpipe");
        src.unpipe(dest);
      }
      dest.emit("pipe", src);
      if (!state2.flowing) {
        debug("pipe resume");
        src.resume();
      }
      return dest;
    };
    function pipeOnDrain(src) {
      return function() {
        var state2 = src._readableState;
        debug("pipeOnDrain", state2.awaitDrain);
        if (state2.awaitDrain) state2.awaitDrain--;
        if (state2.awaitDrain === 0 && EElistenerCount(src, "data")) {
          state2.flowing = true;
          flow(src);
        }
      };
    }
    Readable.prototype.unpipe = function(dest) {
      var state2 = this._readableState;
      var unpipeInfo = { hasUnpiped: false };
      if (state2.pipesCount === 0) return this;
      if (state2.pipesCount === 1) {
        if (dest && dest !== state2.pipes) return this;
        if (!dest) dest = state2.pipes;
        state2.pipes = null;
        state2.pipesCount = 0;
        state2.flowing = false;
        if (dest) dest.emit("unpipe", this, unpipeInfo);
        return this;
      }
      if (!dest) {
        var dests = state2.pipes;
        var len = state2.pipesCount;
        state2.pipes = null;
        state2.pipesCount = 0;
        state2.flowing = false;
        for (var i = 0; i < len; i++) {
          dests[i].emit("unpipe", this, { hasUnpiped: false });
        }
        return this;
      }
      var index = indexOf(state2.pipes, dest);
      if (index === -1) return this;
      state2.pipes.splice(index, 1);
      state2.pipesCount -= 1;
      if (state2.pipesCount === 1) state2.pipes = state2.pipes[0];
      dest.emit("unpipe", this, unpipeInfo);
      return this;
    };
    Readable.prototype.on = function(ev, fn) {
      var res = Stream.prototype.on.call(this, ev, fn);
      if (ev === "data") {
        if (this._readableState.flowing !== false) this.resume();
      } else if (ev === "readable") {
        var state2 = this._readableState;
        if (!state2.endEmitted && !state2.readableListening) {
          state2.readableListening = state2.needReadable = true;
          state2.emittedReadable = false;
          if (!state2.reading) {
            pna.nextTick(nReadingNextTick, this);
          } else if (state2.length) {
            emitReadable(this);
          }
        }
      }
      return res;
    };
    Readable.prototype.addListener = Readable.prototype.on;
    function nReadingNextTick(self2) {
      debug("readable nexttick read 0");
      self2.read(0);
    }
    Readable.prototype.resume = function() {
      var state2 = this._readableState;
      if (!state2.flowing) {
        debug("resume");
        state2.flowing = true;
        resume(this, state2);
      }
      return this;
    };
    function resume(stream, state2) {
      if (!state2.resumeScheduled) {
        state2.resumeScheduled = true;
        pna.nextTick(resume_, stream, state2);
      }
    }
    function resume_(stream, state2) {
      if (!state2.reading) {
        debug("resume read 0");
        stream.read(0);
      }
      state2.resumeScheduled = false;
      state2.awaitDrain = 0;
      stream.emit("resume");
      flow(stream);
      if (state2.flowing && !state2.reading) stream.read(0);
    }
    Readable.prototype.pause = function() {
      debug("call pause flowing=%j", this._readableState.flowing);
      if (false !== this._readableState.flowing) {
        debug("pause");
        this._readableState.flowing = false;
        this.emit("pause");
      }
      return this;
    };
    function flow(stream) {
      var state2 = stream._readableState;
      debug("flow", state2.flowing);
      while (state2.flowing && stream.read() !== null) {
      }
    }
    Readable.prototype.wrap = function(stream) {
      var _this = this;
      var state2 = this._readableState;
      var paused = false;
      stream.on("end", function() {
        debug("wrapped end");
        if (state2.decoder && !state2.ended) {
          var chunk = state2.decoder.end();
          if (chunk && chunk.length) _this.push(chunk);
        }
        _this.push(null);
      });
      stream.on("data", function(chunk) {
        debug("wrapped data");
        if (state2.decoder) chunk = state2.decoder.write(chunk);
        if (state2.objectMode && (chunk === null || chunk === void 0)) return;
        else if (!state2.objectMode && (!chunk || !chunk.length)) return;
        var ret = _this.push(chunk);
        if (!ret) {
          paused = true;
          stream.pause();
        }
      });
      for (var i in stream) {
        if (this[i] === void 0 && typeof stream[i] === "function") {
          this[i] = /* @__PURE__ */ (function(method) {
            return function() {
              return stream[method].apply(stream, arguments);
            };
          })(i);
        }
      }
      for (var n = 0; n < kProxyEvents.length; n++) {
        stream.on(kProxyEvents[n], this.emit.bind(this, kProxyEvents[n]));
      }
      this._read = function(n2) {
        debug("wrapped _read", n2);
        if (paused) {
          paused = false;
          stream.resume();
        }
      };
      return this;
    };
    Object.defineProperty(Readable.prototype, "readableHighWaterMark", {
      // making it explicit this property is not enumerable
      // because otherwise some prototype manipulation in
      // userland will fail
      enumerable: false,
      get: function() {
        return this._readableState.highWaterMark;
      }
    });
    Readable._fromList = fromList;
    function fromList(n, state2) {
      if (state2.length === 0) return null;
      var ret;
      if (state2.objectMode) ret = state2.buffer.shift();
      else if (!n || n >= state2.length) {
        if (state2.decoder) ret = state2.buffer.join("");
        else if (state2.buffer.length === 1) ret = state2.buffer.head.data;
        else ret = state2.buffer.concat(state2.length);
        state2.buffer.clear();
      } else {
        ret = fromListPartial(n, state2.buffer, state2.decoder);
      }
      return ret;
    }
    function fromListPartial(n, list, hasStrings) {
      var ret;
      if (n < list.head.data.length) {
        ret = list.head.data.slice(0, n);
        list.head.data = list.head.data.slice(n);
      } else if (n === list.head.data.length) {
        ret = list.shift();
      } else {
        ret = hasStrings ? copyFromBufferString(n, list) : copyFromBuffer(n, list);
      }
      return ret;
    }
    function copyFromBufferString(n, list) {
      var p = list.head;
      var c = 1;
      var ret = p.data;
      n -= ret.length;
      while (p = p.next) {
        var str2 = p.data;
        var nb = n > str2.length ? str2.length : n;
        if (nb === str2.length) ret += str2;
        else ret += str2.slice(0, n);
        n -= nb;
        if (n === 0) {
          if (nb === str2.length) {
            ++c;
            if (p.next) list.head = p.next;
            else list.head = list.tail = null;
          } else {
            list.head = p;
            p.data = str2.slice(nb);
          }
          break;
        }
        ++c;
      }
      list.length -= c;
      return ret;
    }
    function copyFromBuffer(n, list) {
      var ret = Buffer2.allocUnsafe(n);
      var p = list.head;
      var c = 1;
      p.data.copy(ret);
      n -= p.data.length;
      while (p = p.next) {
        var buf = p.data;
        var nb = n > buf.length ? buf.length : n;
        buf.copy(ret, ret.length - n, 0, nb);
        n -= nb;
        if (n === 0) {
          if (nb === buf.length) {
            ++c;
            if (p.next) list.head = p.next;
            else list.head = list.tail = null;
          } else {
            list.head = p;
            p.data = buf.slice(nb);
          }
          break;
        }
        ++c;
      }
      list.length -= c;
      return ret;
    }
    function endReadable(stream) {
      var state2 = stream._readableState;
      if (state2.length > 0) throw new Error('"endReadable()" called on non-empty stream');
      if (!state2.endEmitted) {
        state2.ended = true;
        pna.nextTick(endReadableNT, state2, stream);
      }
    }
    function endReadableNT(state2, stream) {
      if (!state2.endEmitted && state2.length === 0) {
        state2.endEmitted = true;
        stream.readable = false;
        stream.emit("end");
      }
    }
    function indexOf(xs, x) {
      for (var i = 0, l = xs.length; i < l; i++) {
        if (xs[i] === x) return i;
      }
      return -1;
    }
  }
});

// node_modules/jszip/node_modules/readable-stream/lib/_stream_transform.js
var require_stream_transform = __commonJS({
  "node_modules/jszip/node_modules/readable-stream/lib/_stream_transform.js"(exports2, module2) {
    "use strict";
    module2.exports = Transform;
    var Duplex = require_stream_duplex();
    var util = Object.create(require_util());
    util.inherits = require_inherits();
    util.inherits(Transform, Duplex);
    function afterTransform(er, data) {
      var ts = this._transformState;
      ts.transforming = false;
      var cb = ts.writecb;
      if (!cb) {
        return this.emit("error", new Error("write callback called multiple times"));
      }
      ts.writechunk = null;
      ts.writecb = null;
      if (data != null)
        this.push(data);
      cb(er);
      var rs = this._readableState;
      rs.reading = false;
      if (rs.needReadable || rs.length < rs.highWaterMark) {
        this._read(rs.highWaterMark);
      }
    }
    function Transform(options2) {
      if (!(this instanceof Transform)) return new Transform(options2);
      Duplex.call(this, options2);
      this._transformState = {
        afterTransform: afterTransform.bind(this),
        needTransform: false,
        transforming: false,
        writecb: null,
        writechunk: null,
        writeencoding: null
      };
      this._readableState.needReadable = true;
      this._readableState.sync = false;
      if (options2) {
        if (typeof options2.transform === "function") this._transform = options2.transform;
        if (typeof options2.flush === "function") this._flush = options2.flush;
      }
      this.on("prefinish", prefinish);
    }
    function prefinish() {
      var _this = this;
      if (typeof this._flush === "function") {
        this._flush(function(er, data) {
          done(_this, er, data);
        });
      } else {
        done(this, null, null);
      }
    }
    Transform.prototype.push = function(chunk, encoding) {
      this._transformState.needTransform = false;
      return Duplex.prototype.push.call(this, chunk, encoding);
    };
    Transform.prototype._transform = function(chunk, encoding, cb) {
      throw new Error("_transform() is not implemented");
    };
    Transform.prototype._write = function(chunk, encoding, cb) {
      var ts = this._transformState;
      ts.writecb = cb;
      ts.writechunk = chunk;
      ts.writeencoding = encoding;
      if (!ts.transforming) {
        var rs = this._readableState;
        if (ts.needTransform || rs.needReadable || rs.length < rs.highWaterMark) this._read(rs.highWaterMark);
      }
    };
    Transform.prototype._read = function(n) {
      var ts = this._transformState;
      if (ts.writechunk !== null && ts.writecb && !ts.transforming) {
        ts.transforming = true;
        this._transform(ts.writechunk, ts.writeencoding, ts.afterTransform);
      } else {
        ts.needTransform = true;
      }
    };
    Transform.prototype._destroy = function(err, cb) {
      var _this2 = this;
      Duplex.prototype._destroy.call(this, err, function(err2) {
        cb(err2);
        _this2.emit("close");
      });
    };
    function done(stream, er, data) {
      if (er) return stream.emit("error", er);
      if (data != null)
        stream.push(data);
      if (stream._writableState.length) throw new Error("Calling transform done when ws.length != 0");
      if (stream._transformState.transforming) throw new Error("Calling transform done when still transforming");
      return stream.push(null);
    }
  }
});

// node_modules/jszip/node_modules/readable-stream/lib/_stream_passthrough.js
var require_stream_passthrough = __commonJS({
  "node_modules/jszip/node_modules/readable-stream/lib/_stream_passthrough.js"(exports2, module2) {
    "use strict";
    module2.exports = PassThrough;
    var Transform = require_stream_transform();
    var util = Object.create(require_util());
    util.inherits = require_inherits();
    util.inherits(PassThrough, Transform);
    function PassThrough(options2) {
      if (!(this instanceof PassThrough)) return new PassThrough(options2);
      Transform.call(this, options2);
    }
    PassThrough.prototype._transform = function(chunk, encoding, cb) {
      cb(null, chunk);
    };
  }
});

// node_modules/jszip/node_modules/readable-stream/readable.js
var require_readable = __commonJS({
  "node_modules/jszip/node_modules/readable-stream/readable.js"(exports2, module2) {
    var Stream = require("stream");
    if (process.env.READABLE_STREAM === "disable" && Stream) {
      module2.exports = Stream;
      exports2 = module2.exports = Stream.Readable;
      exports2.Readable = Stream.Readable;
      exports2.Writable = Stream.Writable;
      exports2.Duplex = Stream.Duplex;
      exports2.Transform = Stream.Transform;
      exports2.PassThrough = Stream.PassThrough;
      exports2.Stream = Stream;
    } else {
      exports2 = module2.exports = require_stream_readable();
      exports2.Stream = Stream || exports2;
      exports2.Readable = exports2;
      exports2.Writable = require_stream_writable();
      exports2.Duplex = require_stream_duplex();
      exports2.Transform = require_stream_transform();
      exports2.PassThrough = require_stream_passthrough();
    }
  }
});

// node_modules/jszip/lib/support.js
var require_support = __commonJS({
  "node_modules/jszip/lib/support.js"(exports2) {
    "use strict";
    exports2.base64 = true;
    exports2.array = true;
    exports2.string = true;
    exports2.arraybuffer = typeof ArrayBuffer !== "undefined" && typeof Uint8Array !== "undefined";
    exports2.nodebuffer = typeof Buffer !== "undefined";
    exports2.uint8array = typeof Uint8Array !== "undefined";
    if (typeof ArrayBuffer === "undefined") {
      exports2.blob = false;
    } else {
      buffer = new ArrayBuffer(0);
      try {
        exports2.blob = new Blob([buffer], {
          type: "application/zip"
        }).size === 0;
      } catch (e) {
        try {
          Builder = self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder;
          builder = new Builder();
          builder.append(buffer);
          exports2.blob = builder.getBlob("application/zip").size === 0;
        } catch (e2) {
          exports2.blob = false;
        }
      }
    }
    var buffer;
    var Builder;
    var builder;
    try {
      exports2.nodestream = !!require_readable().Readable;
    } catch (e) {
      exports2.nodestream = false;
    }
  }
});

// node_modules/jszip/lib/base64.js
var require_base64 = __commonJS({
  "node_modules/jszip/lib/base64.js"(exports2) {
    "use strict";
    var utils = require_utils();
    var support = require_support();
    var _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    exports2.encode = function(input) {
      var output = [];
      var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
      var i = 0, len = input.length, remainingBytes = len;
      var isArray = utils.getTypeOf(input) !== "string";
      while (i < input.length) {
        remainingBytes = len - i;
        if (!isArray) {
          chr1 = input.charCodeAt(i++);
          chr2 = i < len ? input.charCodeAt(i++) : 0;
          chr3 = i < len ? input.charCodeAt(i++) : 0;
        } else {
          chr1 = input[i++];
          chr2 = i < len ? input[i++] : 0;
          chr3 = i < len ? input[i++] : 0;
        }
        enc1 = chr1 >> 2;
        enc2 = (chr1 & 3) << 4 | chr2 >> 4;
        enc3 = remainingBytes > 1 ? (chr2 & 15) << 2 | chr3 >> 6 : 64;
        enc4 = remainingBytes > 2 ? chr3 & 63 : 64;
        output.push(_keyStr.charAt(enc1) + _keyStr.charAt(enc2) + _keyStr.charAt(enc3) + _keyStr.charAt(enc4));
      }
      return output.join("");
    };
    exports2.decode = function(input) {
      var chr1, chr2, chr3;
      var enc1, enc2, enc3, enc4;
      var i = 0, resultIndex = 0;
      var dataUrlPrefix = "data:";
      if (input.substr(0, dataUrlPrefix.length) === dataUrlPrefix) {
        throw new Error("Invalid base64 input, it looks like a data url.");
      }
      input = input.replace(/[^A-Za-z0-9+/=]/g, "");
      var totalLength = input.length * 3 / 4;
      if (input.charAt(input.length - 1) === _keyStr.charAt(64)) {
        totalLength--;
      }
      if (input.charAt(input.length - 2) === _keyStr.charAt(64)) {
        totalLength--;
      }
      if (totalLength % 1 !== 0) {
        throw new Error("Invalid base64 input, bad content length.");
      }
      var output;
      if (support.uint8array) {
        output = new Uint8Array(totalLength | 0);
      } else {
        output = new Array(totalLength | 0);
      }
      while (i < input.length) {
        enc1 = _keyStr.indexOf(input.charAt(i++));
        enc2 = _keyStr.indexOf(input.charAt(i++));
        enc3 = _keyStr.indexOf(input.charAt(i++));
        enc4 = _keyStr.indexOf(input.charAt(i++));
        chr1 = enc1 << 2 | enc2 >> 4;
        chr2 = (enc2 & 15) << 4 | enc3 >> 2;
        chr3 = (enc3 & 3) << 6 | enc4;
        output[resultIndex++] = chr1;
        if (enc3 !== 64) {
          output[resultIndex++] = chr2;
        }
        if (enc4 !== 64) {
          output[resultIndex++] = chr3;
        }
      }
      return output;
    };
  }
});

// node_modules/jszip/lib/nodejsUtils.js
var require_nodejsUtils = __commonJS({
  "node_modules/jszip/lib/nodejsUtils.js"(exports2, module2) {
    "use strict";
    module2.exports = {
      /**
       * True if this is running in Nodejs, will be undefined in a browser.
       * In a browser, browserify won't include this file and the whole module
       * will be resolved an empty object.
       */
      isNode: typeof Buffer !== "undefined",
      /**
       * Create a new nodejs Buffer from an existing content.
       * @param {Object} data the data to pass to the constructor.
       * @param {String} encoding the encoding to use.
       * @return {Buffer} a new Buffer.
       */
      newBufferFrom: function(data, encoding) {
        if (Buffer.from && Buffer.from !== Uint8Array.from) {
          return Buffer.from(data, encoding);
        } else {
          if (typeof data === "number") {
            throw new Error('The "data" argument must not be a number');
          }
          return new Buffer(data, encoding);
        }
      },
      /**
       * Create a new nodejs Buffer with the specified size.
       * @param {Integer} size the size of the buffer.
       * @return {Buffer} a new Buffer.
       */
      allocBuffer: function(size) {
        if (Buffer.alloc) {
          return Buffer.alloc(size);
        } else {
          var buf = new Buffer(size);
          buf.fill(0);
          return buf;
        }
      },
      /**
       * Find out if an object is a Buffer.
       * @param {Object} b the object to test.
       * @return {Boolean} true if the object is a Buffer, false otherwise.
       */
      isBuffer: function(b) {
        return Buffer.isBuffer(b);
      },
      isStream: function(obj) {
        return obj && typeof obj.on === "function" && typeof obj.pause === "function" && typeof obj.resume === "function";
      }
    };
  }
});

// node_modules/immediate/lib/index.js
var require_lib = __commonJS({
  "node_modules/immediate/lib/index.js"(exports2, module2) {
    "use strict";
    var Mutation = global.MutationObserver || global.WebKitMutationObserver;
    var scheduleDrain;
    if (process.browser) {
      if (Mutation) {
        called = 0;
        observer = new Mutation(nextTick);
        element = global.document.createTextNode("");
        observer.observe(element, {
          characterData: true
        });
        scheduleDrain = function() {
          element.data = called = ++called % 2;
        };
      } else if (!global.setImmediate && typeof global.MessageChannel !== "undefined") {
        channel = new global.MessageChannel();
        channel.port1.onmessage = nextTick;
        scheduleDrain = function() {
          channel.port2.postMessage(0);
        };
      } else if ("document" in global && "onreadystatechange" in global.document.createElement("script")) {
        scheduleDrain = function() {
          var scriptEl = global.document.createElement("script");
          scriptEl.onreadystatechange = function() {
            nextTick();
            scriptEl.onreadystatechange = null;
            scriptEl.parentNode.removeChild(scriptEl);
            scriptEl = null;
          };
          global.document.documentElement.appendChild(scriptEl);
        };
      } else {
        scheduleDrain = function() {
          setTimeout(nextTick, 0);
        };
      }
    } else {
      scheduleDrain = function() {
        process.nextTick(nextTick);
      };
    }
    var called;
    var observer;
    var element;
    var channel;
    var draining;
    var queue = [];
    function nextTick() {
      draining = true;
      var i, oldQueue;
      var len = queue.length;
      while (len) {
        oldQueue = queue;
        queue = [];
        i = -1;
        while (++i < len) {
          oldQueue[i]();
        }
        len = queue.length;
      }
      draining = false;
    }
    module2.exports = immediate;
    function immediate(task) {
      if (queue.push(task) === 1 && !draining) {
        scheduleDrain();
      }
    }
  }
});

// node_modules/lie/lib/index.js
var require_lib2 = __commonJS({
  "node_modules/lie/lib/index.js"(exports2, module2) {
    "use strict";
    var immediate = require_lib();
    function INTERNAL() {
    }
    var handlers = {};
    var REJECTED = ["REJECTED"];
    var FULFILLED = ["FULFILLED"];
    var PENDING = ["PENDING"];
    if (!process.browser) {
      UNHANDLED = ["UNHANDLED"];
    }
    var UNHANDLED;
    module2.exports = Promise2;
    function Promise2(resolver) {
      if (typeof resolver !== "function") {
        throw new TypeError("resolver must be a function");
      }
      this.state = PENDING;
      this.queue = [];
      this.outcome = void 0;
      if (!process.browser) {
        this.handled = UNHANDLED;
      }
      if (resolver !== INTERNAL) {
        safelyResolveThenable(this, resolver);
      }
    }
    Promise2.prototype.finally = function(callback) {
      if (typeof callback !== "function") {
        return this;
      }
      var p = this.constructor;
      return this.then(resolve2, reject2);
      function resolve2(value) {
        function yes() {
          return value;
        }
        return p.resolve(callback()).then(yes);
      }
      function reject2(reason) {
        function no() {
          throw reason;
        }
        return p.resolve(callback()).then(no);
      }
    };
    Promise2.prototype.catch = function(onRejected) {
      return this.then(null, onRejected);
    };
    Promise2.prototype.then = function(onFulfilled, onRejected) {
      if (typeof onFulfilled !== "function" && this.state === FULFILLED || typeof onRejected !== "function" && this.state === REJECTED) {
        return this;
      }
      var promise = new this.constructor(INTERNAL);
      if (!process.browser) {
        if (this.handled === UNHANDLED) {
          this.handled = null;
        }
      }
      if (this.state !== PENDING) {
        var resolver = this.state === FULFILLED ? onFulfilled : onRejected;
        unwrap(promise, resolver, this.outcome);
      } else {
        this.queue.push(new QueueItem(promise, onFulfilled, onRejected));
      }
      return promise;
    };
    function QueueItem(promise, onFulfilled, onRejected) {
      this.promise = promise;
      if (typeof onFulfilled === "function") {
        this.onFulfilled = onFulfilled;
        this.callFulfilled = this.otherCallFulfilled;
      }
      if (typeof onRejected === "function") {
        this.onRejected = onRejected;
        this.callRejected = this.otherCallRejected;
      }
    }
    QueueItem.prototype.callFulfilled = function(value) {
      handlers.resolve(this.promise, value);
    };
    QueueItem.prototype.otherCallFulfilled = function(value) {
      unwrap(this.promise, this.onFulfilled, value);
    };
    QueueItem.prototype.callRejected = function(value) {
      handlers.reject(this.promise, value);
    };
    QueueItem.prototype.otherCallRejected = function(value) {
      unwrap(this.promise, this.onRejected, value);
    };
    function unwrap(promise, func, value) {
      immediate(function() {
        var returnValue;
        try {
          returnValue = func(value);
        } catch (e) {
          return handlers.reject(promise, e);
        }
        if (returnValue === promise) {
          handlers.reject(promise, new TypeError("Cannot resolve promise with itself"));
        } else {
          handlers.resolve(promise, returnValue);
        }
      });
    }
    handlers.resolve = function(self2, value) {
      var result = tryCatch(getThen, value);
      if (result.status === "error") {
        return handlers.reject(self2, result.value);
      }
      var thenable = result.value;
      if (thenable) {
        safelyResolveThenable(self2, thenable);
      } else {
        self2.state = FULFILLED;
        self2.outcome = value;
        var i = -1;
        var len = self2.queue.length;
        while (++i < len) {
          self2.queue[i].callFulfilled(value);
        }
      }
      return self2;
    };
    handlers.reject = function(self2, error) {
      self2.state = REJECTED;
      self2.outcome = error;
      if (!process.browser) {
        if (self2.handled === UNHANDLED) {
          immediate(function() {
            if (self2.handled === UNHANDLED) {
              process.emit("unhandledRejection", error, self2);
            }
          });
        }
      }
      var i = -1;
      var len = self2.queue.length;
      while (++i < len) {
        self2.queue[i].callRejected(error);
      }
      return self2;
    };
    function getThen(obj) {
      var then = obj && obj.then;
      if (obj && (typeof obj === "object" || typeof obj === "function") && typeof then === "function") {
        return function appyThen() {
          then.apply(obj, arguments);
        };
      }
    }
    function safelyResolveThenable(self2, thenable) {
      var called = false;
      function onError(value) {
        if (called) {
          return;
        }
        called = true;
        handlers.reject(self2, value);
      }
      function onSuccess(value) {
        if (called) {
          return;
        }
        called = true;
        handlers.resolve(self2, value);
      }
      function tryToUnwrap() {
        thenable(onSuccess, onError);
      }
      var result = tryCatch(tryToUnwrap);
      if (result.status === "error") {
        onError(result.value);
      }
    }
    function tryCatch(func, value) {
      var out = {};
      try {
        out.value = func(value);
        out.status = "success";
      } catch (e) {
        out.status = "error";
        out.value = e;
      }
      return out;
    }
    Promise2.resolve = resolve;
    function resolve(value) {
      if (value instanceof this) {
        return value;
      }
      return handlers.resolve(new this(INTERNAL), value);
    }
    Promise2.reject = reject;
    function reject(reason) {
      var promise = new this(INTERNAL);
      return handlers.reject(promise, reason);
    }
    Promise2.all = all;
    function all(iterable) {
      var self2 = this;
      if (Object.prototype.toString.call(iterable) !== "[object Array]") {
        return this.reject(new TypeError("must be an array"));
      }
      var len = iterable.length;
      var called = false;
      if (!len) {
        return this.resolve([]);
      }
      var values = new Array(len);
      var resolved = 0;
      var i = -1;
      var promise = new this(INTERNAL);
      while (++i < len) {
        allResolver(iterable[i], i);
      }
      return promise;
      function allResolver(value, i2) {
        self2.resolve(value).then(resolveFromAll, function(error) {
          if (!called) {
            called = true;
            handlers.reject(promise, error);
          }
        });
        function resolveFromAll(outValue) {
          values[i2] = outValue;
          if (++resolved === len && !called) {
            called = true;
            handlers.resolve(promise, values);
          }
        }
      }
    }
    Promise2.race = race;
    function race(iterable) {
      var self2 = this;
      if (Object.prototype.toString.call(iterable) !== "[object Array]") {
        return this.reject(new TypeError("must be an array"));
      }
      var len = iterable.length;
      var called = false;
      if (!len) {
        return this.resolve([]);
      }
      var i = -1;
      var promise = new this(INTERNAL);
      while (++i < len) {
        resolver(iterable[i]);
      }
      return promise;
      function resolver(value) {
        self2.resolve(value).then(function(response) {
          if (!called) {
            called = true;
            handlers.resolve(promise, response);
          }
        }, function(error) {
          if (!called) {
            called = true;
            handlers.reject(promise, error);
          }
        });
      }
    }
  }
});

// node_modules/jszip/lib/external.js
var require_external = __commonJS({
  "node_modules/jszip/lib/external.js"(exports2, module2) {
    "use strict";
    var ES6Promise = null;
    if (typeof Promise !== "undefined") {
      ES6Promise = Promise;
    } else {
      ES6Promise = require_lib2();
    }
    module2.exports = {
      Promise: ES6Promise
    };
  }
});

// node_modules/setimmediate/setImmediate.js
var require_setImmediate = __commonJS({
  "node_modules/setimmediate/setImmediate.js"(exports2) {
    (function(global2, undefined2) {
      "use strict";
      if (global2.setImmediate) {
        return;
      }
      var nextHandle = 1;
      var tasksByHandle = {};
      var currentlyRunningATask = false;
      var doc = global2.document;
      var registerImmediate;
      function setImmediate2(callback) {
        if (typeof callback !== "function") {
          callback = new Function("" + callback);
        }
        var args = new Array(arguments.length - 1);
        for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
        }
        var task = { callback, args };
        tasksByHandle[nextHandle] = task;
        registerImmediate(nextHandle);
        return nextHandle++;
      }
      function clearImmediate(handle) {
        delete tasksByHandle[handle];
      }
      function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
          case 0:
            callback();
            break;
          case 1:
            callback(args[0]);
            break;
          case 2:
            callback(args[0], args[1]);
            break;
          case 3:
            callback(args[0], args[1], args[2]);
            break;
          default:
            callback.apply(undefined2, args);
            break;
        }
      }
      function runIfPresent(handle) {
        if (currentlyRunningATask) {
          setTimeout(runIfPresent, 0, handle);
        } else {
          var task = tasksByHandle[handle];
          if (task) {
            currentlyRunningATask = true;
            try {
              run(task);
            } finally {
              clearImmediate(handle);
              currentlyRunningATask = false;
            }
          }
        }
      }
      function installNextTickImplementation() {
        registerImmediate = function(handle) {
          process.nextTick(function() {
            runIfPresent(handle);
          });
        };
      }
      function canUsePostMessage() {
        if (global2.postMessage && !global2.importScripts) {
          var postMessageIsAsynchronous = true;
          var oldOnMessage = global2.onmessage;
          global2.onmessage = function() {
            postMessageIsAsynchronous = false;
          };
          global2.postMessage("", "*");
          global2.onmessage = oldOnMessage;
          return postMessageIsAsynchronous;
        }
      }
      function installPostMessageImplementation() {
        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
          if (event.source === global2 && typeof event.data === "string" && event.data.indexOf(messagePrefix) === 0) {
            runIfPresent(+event.data.slice(messagePrefix.length));
          }
        };
        if (global2.addEventListener) {
          global2.addEventListener("message", onGlobalMessage, false);
        } else {
          global2.attachEvent("onmessage", onGlobalMessage);
        }
        registerImmediate = function(handle) {
          global2.postMessage(messagePrefix + handle, "*");
        };
      }
      function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
          var handle = event.data;
          runIfPresent(handle);
        };
        registerImmediate = function(handle) {
          channel.port2.postMessage(handle);
        };
      }
      function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
          var script = doc.createElement("script");
          script.onreadystatechange = function() {
            runIfPresent(handle);
            script.onreadystatechange = null;
            html.removeChild(script);
            script = null;
          };
          html.appendChild(script);
        };
      }
      function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
          setTimeout(runIfPresent, 0, handle);
        };
      }
      var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global2);
      attachTo = attachTo && attachTo.setTimeout ? attachTo : global2;
      if ({}.toString.call(global2.process) === "[object process]") {
        installNextTickImplementation();
      } else if (canUsePostMessage()) {
        installPostMessageImplementation();
      } else if (global2.MessageChannel) {
        installMessageChannelImplementation();
      } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        installReadyStateChangeImplementation();
      } else {
        installSetTimeoutImplementation();
      }
      attachTo.setImmediate = setImmediate2;
      attachTo.clearImmediate = clearImmediate;
    })(typeof self === "undefined" ? typeof global === "undefined" ? exports2 : global : self);
  }
});

// node_modules/jszip/lib/utils.js
var require_utils = __commonJS({
  "node_modules/jszip/lib/utils.js"(exports2) {
    "use strict";
    var support = require_support();
    var base64 = require_base64();
    var nodejsUtils = require_nodejsUtils();
    var external = require_external();
    require_setImmediate();
    function string2binary(str2) {
      var result = null;
      if (support.uint8array) {
        result = new Uint8Array(str2.length);
      } else {
        result = new Array(str2.length);
      }
      return stringToArrayLike(str2, result);
    }
    exports2.newBlob = function(part, type) {
      exports2.checkSupport("blob");
      try {
        return new Blob([part], {
          type
        });
      } catch (e) {
        try {
          var Builder = self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder;
          var builder = new Builder();
          builder.append(part);
          return builder.getBlob(type);
        } catch (e2) {
          throw new Error("Bug : can't construct the Blob.");
        }
      }
    };
    function identity(input) {
      return input;
    }
    function stringToArrayLike(str2, array) {
      for (var i = 0; i < str2.length; ++i) {
        array[i] = str2.charCodeAt(i) & 255;
      }
      return array;
    }
    var arrayToStringHelper = {
      /**
       * Transform an array of int into a string, chunk by chunk.
       * See the performances notes on arrayLikeToString.
       * @param {Array|ArrayBuffer|Uint8Array|Buffer} array the array to transform.
       * @param {String} type the type of the array.
       * @param {Integer} chunk the chunk size.
       * @return {String} the resulting string.
       * @throws Error if the chunk is too big for the stack.
       */
      stringifyByChunk: function(array, type, chunk) {
        var result = [], k = 0, len = array.length;
        if (len <= chunk) {
          return String.fromCharCode.apply(null, array);
        }
        while (k < len) {
          if (type === "array" || type === "nodebuffer") {
            result.push(String.fromCharCode.apply(null, array.slice(k, Math.min(k + chunk, len))));
          } else {
            result.push(String.fromCharCode.apply(null, array.subarray(k, Math.min(k + chunk, len))));
          }
          k += chunk;
        }
        return result.join("");
      },
      /**
       * Call String.fromCharCode on every item in the array.
       * This is the naive implementation, which generate A LOT of intermediate string.
       * This should be used when everything else fail.
       * @param {Array|ArrayBuffer|Uint8Array|Buffer} array the array to transform.
       * @return {String} the result.
       */
      stringifyByChar: function(array) {
        var resultStr = "";
        for (var i = 0; i < array.length; i++) {
          resultStr += String.fromCharCode(array[i]);
        }
        return resultStr;
      },
      applyCanBeUsed: {
        /**
         * true if the browser accepts to use String.fromCharCode on Uint8Array
         */
        uint8array: (function() {
          try {
            return support.uint8array && String.fromCharCode.apply(null, new Uint8Array(1)).length === 1;
          } catch (e) {
            return false;
          }
        })(),
        /**
         * true if the browser accepts to use String.fromCharCode on nodejs Buffer.
         */
        nodebuffer: (function() {
          try {
            return support.nodebuffer && String.fromCharCode.apply(null, nodejsUtils.allocBuffer(1)).length === 1;
          } catch (e) {
            return false;
          }
        })()
      }
    };
    function arrayLikeToString(array) {
      var chunk = 65536, type = exports2.getTypeOf(array), canUseApply = true;
      if (type === "uint8array") {
        canUseApply = arrayToStringHelper.applyCanBeUsed.uint8array;
      } else if (type === "nodebuffer") {
        canUseApply = arrayToStringHelper.applyCanBeUsed.nodebuffer;
      }
      if (canUseApply) {
        while (chunk > 1) {
          try {
            return arrayToStringHelper.stringifyByChunk(array, type, chunk);
          } catch (e) {
            chunk = Math.floor(chunk / 2);
          }
        }
      }
      return arrayToStringHelper.stringifyByChar(array);
    }
    exports2.applyFromCharCode = arrayLikeToString;
    function arrayLikeToArrayLike(arrayFrom, arrayTo) {
      for (var i = 0; i < arrayFrom.length; i++) {
        arrayTo[i] = arrayFrom[i];
      }
      return arrayTo;
    }
    var transform = {};
    transform["string"] = {
      "string": identity,
      "array": function(input) {
        return stringToArrayLike(input, new Array(input.length));
      },
      "arraybuffer": function(input) {
        return transform["string"]["uint8array"](input).buffer;
      },
      "uint8array": function(input) {
        return stringToArrayLike(input, new Uint8Array(input.length));
      },
      "nodebuffer": function(input) {
        return stringToArrayLike(input, nodejsUtils.allocBuffer(input.length));
      }
    };
    transform["array"] = {
      "string": arrayLikeToString,
      "array": identity,
      "arraybuffer": function(input) {
        return new Uint8Array(input).buffer;
      },
      "uint8array": function(input) {
        return new Uint8Array(input);
      },
      "nodebuffer": function(input) {
        return nodejsUtils.newBufferFrom(input);
      }
    };
    transform["arraybuffer"] = {
      "string": function(input) {
        return arrayLikeToString(new Uint8Array(input));
      },
      "array": function(input) {
        return arrayLikeToArrayLike(new Uint8Array(input), new Array(input.byteLength));
      },
      "arraybuffer": identity,
      "uint8array": function(input) {
        return new Uint8Array(input);
      },
      "nodebuffer": function(input) {
        return nodejsUtils.newBufferFrom(new Uint8Array(input));
      }
    };
    transform["uint8array"] = {
      "string": arrayLikeToString,
      "array": function(input) {
        return arrayLikeToArrayLike(input, new Array(input.length));
      },
      "arraybuffer": function(input) {
        return input.buffer;
      },
      "uint8array": identity,
      "nodebuffer": function(input) {
        return nodejsUtils.newBufferFrom(input);
      }
    };
    transform["nodebuffer"] = {
      "string": arrayLikeToString,
      "array": function(input) {
        return arrayLikeToArrayLike(input, new Array(input.length));
      },
      "arraybuffer": function(input) {
        return transform["nodebuffer"]["uint8array"](input).buffer;
      },
      "uint8array": function(input) {
        return arrayLikeToArrayLike(input, new Uint8Array(input.length));
      },
      "nodebuffer": identity
    };
    exports2.transformTo = function(outputType, input) {
      if (!input) {
        input = "";
      }
      if (!outputType) {
        return input;
      }
      exports2.checkSupport(outputType);
      var inputType = exports2.getTypeOf(input);
      var result = transform[inputType][outputType](input);
      return result;
    };
    exports2.resolve = function(path9) {
      var parts = path9.split("/");
      var result = [];
      for (var index = 0; index < parts.length; index++) {
        var part = parts[index];
        if (part === "." || part === "" && index !== 0 && index !== parts.length - 1) {
          continue;
        } else if (part === "..") {
          result.pop();
        } else {
          result.push(part);
        }
      }
      return result.join("/");
    };
    exports2.getTypeOf = function(input) {
      if (typeof input === "string") {
        return "string";
      }
      if (Object.prototype.toString.call(input) === "[object Array]") {
        return "array";
      }
      if (support.nodebuffer && nodejsUtils.isBuffer(input)) {
        return "nodebuffer";
      }
      if (support.uint8array && input instanceof Uint8Array) {
        return "uint8array";
      }
      if (support.arraybuffer && input instanceof ArrayBuffer) {
        return "arraybuffer";
      }
    };
    exports2.checkSupport = function(type) {
      var supported = support[type.toLowerCase()];
      if (!supported) {
        throw new Error(type + " is not supported by this platform");
      }
    };
    exports2.MAX_VALUE_16BITS = 65535;
    exports2.MAX_VALUE_32BITS = -1;
    exports2.pretty = function(str2) {
      var res = "", code, i;
      for (i = 0; i < (str2 || "").length; i++) {
        code = str2.charCodeAt(i);
        res += "\\x" + (code < 16 ? "0" : "") + code.toString(16).toUpperCase();
      }
      return res;
    };
    exports2.delay = function(callback, args, self2) {
      setImmediate(function() {
        callback.apply(self2 || null, args || []);
      });
    };
    exports2.inherits = function(ctor, superCtor) {
      var Obj = function() {
      };
      Obj.prototype = superCtor.prototype;
      ctor.prototype = new Obj();
    };
    exports2.extend = function() {
      var result = {}, i, attr;
      for (i = 0; i < arguments.length; i++) {
        for (attr in arguments[i]) {
          if (Object.prototype.hasOwnProperty.call(arguments[i], attr) && typeof result[attr] === "undefined") {
            result[attr] = arguments[i][attr];
          }
        }
      }
      return result;
    };
    exports2.prepareContent = function(name, inputData, isBinary, isOptimizedBinaryString, isBase64) {
      var promise = external.Promise.resolve(inputData).then(function(data) {
        var isBlob = support.blob && (data instanceof Blob || ["[object File]", "[object Blob]"].indexOf(Object.prototype.toString.call(data)) !== -1);
        if (isBlob && typeof FileReader !== "undefined") {
          return new external.Promise(function(resolve, reject) {
            var reader = new FileReader();
            reader.onload = function(e) {
              resolve(e.target.result);
            };
            reader.onerror = function(e) {
              reject(e.target.error);
            };
            reader.readAsArrayBuffer(data);
          });
        } else {
          return data;
        }
      });
      return promise.then(function(data) {
        var dataType = exports2.getTypeOf(data);
        if (!dataType) {
          return external.Promise.reject(
            new Error("Can't read the data of '" + name + "'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?")
          );
        }
        if (dataType === "arraybuffer") {
          data = exports2.transformTo("uint8array", data);
        } else if (dataType === "string") {
          if (isBase64) {
            data = base64.decode(data);
          } else if (isBinary) {
            if (isOptimizedBinaryString !== true) {
              data = string2binary(data);
            }
          }
        }
        return data;
      });
    };
  }
});

// node_modules/jszip/lib/stream/GenericWorker.js
var require_GenericWorker = __commonJS({
  "node_modules/jszip/lib/stream/GenericWorker.js"(exports2, module2) {
    "use strict";
    function GenericWorker(name) {
      this.name = name || "default";
      this.streamInfo = {};
      this.generatedError = null;
      this.extraStreamInfo = {};
      this.isPaused = true;
      this.isFinished = false;
      this.isLocked = false;
      this._listeners = {
        "data": [],
        "end": [],
        "error": []
      };
      this.previous = null;
    }
    GenericWorker.prototype = {
      /**
       * Push a chunk to the next workers.
       * @param {Object} chunk the chunk to push
       */
      push: function(chunk) {
        this.emit("data", chunk);
      },
      /**
       * End the stream.
       * @return {Boolean} true if this call ended the worker, false otherwise.
       */
      end: function() {
        if (this.isFinished) {
          return false;
        }
        this.flush();
        try {
          this.emit("end");
          this.cleanUp();
          this.isFinished = true;
        } catch (e) {
          this.emit("error", e);
        }
        return true;
      },
      /**
       * End the stream with an error.
       * @param {Error} e the error which caused the premature end.
       * @return {Boolean} true if this call ended the worker with an error, false otherwise.
       */
      error: function(e) {
        if (this.isFinished) {
          return false;
        }
        if (this.isPaused) {
          this.generatedError = e;
        } else {
          this.isFinished = true;
          this.emit("error", e);
          if (this.previous) {
            this.previous.error(e);
          }
          this.cleanUp();
        }
        return true;
      },
      /**
       * Add a callback on an event.
       * @param {String} name the name of the event (data, end, error)
       * @param {Function} listener the function to call when the event is triggered
       * @return {GenericWorker} the current object for chainability
       */
      on: function(name, listener) {
        this._listeners[name].push(listener);
        return this;
      },
      /**
       * Clean any references when a worker is ending.
       */
      cleanUp: function() {
        this.streamInfo = this.generatedError = this.extraStreamInfo = null;
        this._listeners = [];
      },
      /**
       * Trigger an event. This will call registered callback with the provided arg.
       * @param {String} name the name of the event (data, end, error)
       * @param {Object} arg the argument to call the callback with.
       */
      emit: function(name, arg) {
        if (this._listeners[name]) {
          for (var i = 0; i < this._listeners[name].length; i++) {
            this._listeners[name][i].call(this, arg);
          }
        }
      },
      /**
       * Chain a worker with an other.
       * @param {Worker} next the worker receiving events from the current one.
       * @return {worker} the next worker for chainability
       */
      pipe: function(next) {
        return next.registerPrevious(this);
      },
      /**
       * Same as `pipe` in the other direction.
       * Using an API with `pipe(next)` is very easy.
       * Implementing the API with the point of view of the next one registering
       * a source is easier, see the ZipFileWorker.
       * @param {Worker} previous the previous worker, sending events to this one
       * @return {Worker} the current worker for chainability
       */
      registerPrevious: function(previous) {
        if (this.isLocked) {
          throw new Error("The stream '" + this + "' has already been used.");
        }
        this.streamInfo = previous.streamInfo;
        this.mergeStreamInfo();
        this.previous = previous;
        var self2 = this;
        previous.on("data", function(chunk) {
          self2.processChunk(chunk);
        });
        previous.on("end", function() {
          self2.end();
        });
        previous.on("error", function(e) {
          self2.error(e);
        });
        return this;
      },
      /**
       * Pause the stream so it doesn't send events anymore.
       * @return {Boolean} true if this call paused the worker, false otherwise.
       */
      pause: function() {
        if (this.isPaused || this.isFinished) {
          return false;
        }
        this.isPaused = true;
        if (this.previous) {
          this.previous.pause();
        }
        return true;
      },
      /**
       * Resume a paused stream.
       * @return {Boolean} true if this call resumed the worker, false otherwise.
       */
      resume: function() {
        if (!this.isPaused || this.isFinished) {
          return false;
        }
        this.isPaused = false;
        var withError = false;
        if (this.generatedError) {
          this.error(this.generatedError);
          withError = true;
        }
        if (this.previous) {
          this.previous.resume();
        }
        return !withError;
      },
      /**
       * Flush any remaining bytes as the stream is ending.
       */
      flush: function() {
      },
      /**
       * Process a chunk. This is usually the method overridden.
       * @param {Object} chunk the chunk to process.
       */
      processChunk: function(chunk) {
        this.push(chunk);
      },
      /**
       * Add a key/value to be added in the workers chain streamInfo once activated.
       * @param {String} key the key to use
       * @param {Object} value the associated value
       * @return {Worker} the current worker for chainability
       */
      withStreamInfo: function(key, value) {
        this.extraStreamInfo[key] = value;
        this.mergeStreamInfo();
        return this;
      },
      /**
       * Merge this worker's streamInfo into the chain's streamInfo.
       */
      mergeStreamInfo: function() {
        for (var key in this.extraStreamInfo) {
          if (!Object.prototype.hasOwnProperty.call(this.extraStreamInfo, key)) {
            continue;
          }
          this.streamInfo[key] = this.extraStreamInfo[key];
        }
      },
      /**
       * Lock the stream to prevent further updates on the workers chain.
       * After calling this method, all calls to pipe will fail.
       */
      lock: function() {
        if (this.isLocked) {
          throw new Error("The stream '" + this + "' has already been used.");
        }
        this.isLocked = true;
        if (this.previous) {
          this.previous.lock();
        }
      },
      /**
       *
       * Pretty print the workers chain.
       */
      toString: function() {
        var me = "Worker " + this.name;
        if (this.previous) {
          return this.previous + " -> " + me;
        } else {
          return me;
        }
      }
    };
    module2.exports = GenericWorker;
  }
});

// node_modules/jszip/lib/utf8.js
var require_utf8 = __commonJS({
  "node_modules/jszip/lib/utf8.js"(exports2) {
    "use strict";
    var utils = require_utils();
    var support = require_support();
    var nodejsUtils = require_nodejsUtils();
    var GenericWorker = require_GenericWorker();
    var _utf8len = new Array(256);
    for (i = 0; i < 256; i++) {
      _utf8len[i] = i >= 252 ? 6 : i >= 248 ? 5 : i >= 240 ? 4 : i >= 224 ? 3 : i >= 192 ? 2 : 1;
    }
    var i;
    _utf8len[254] = _utf8len[254] = 1;
    var string2buf = function(str2) {
      var buf, c, c2, m_pos, i2, str_len = str2.length, buf_len = 0;
      for (m_pos = 0; m_pos < str_len; m_pos++) {
        c = str2.charCodeAt(m_pos);
        if ((c & 64512) === 55296 && m_pos + 1 < str_len) {
          c2 = str2.charCodeAt(m_pos + 1);
          if ((c2 & 64512) === 56320) {
            c = 65536 + (c - 55296 << 10) + (c2 - 56320);
            m_pos++;
          }
        }
        buf_len += c < 128 ? 1 : c < 2048 ? 2 : c < 65536 ? 3 : 4;
      }
      if (support.uint8array) {
        buf = new Uint8Array(buf_len);
      } else {
        buf = new Array(buf_len);
      }
      for (i2 = 0, m_pos = 0; i2 < buf_len; m_pos++) {
        c = str2.charCodeAt(m_pos);
        if ((c & 64512) === 55296 && m_pos + 1 < str_len) {
          c2 = str2.charCodeAt(m_pos + 1);
          if ((c2 & 64512) === 56320) {
            c = 65536 + (c - 55296 << 10) + (c2 - 56320);
            m_pos++;
          }
        }
        if (c < 128) {
          buf[i2++] = c;
        } else if (c < 2048) {
          buf[i2++] = 192 | c >>> 6;
          buf[i2++] = 128 | c & 63;
        } else if (c < 65536) {
          buf[i2++] = 224 | c >>> 12;
          buf[i2++] = 128 | c >>> 6 & 63;
          buf[i2++] = 128 | c & 63;
        } else {
          buf[i2++] = 240 | c >>> 18;
          buf[i2++] = 128 | c >>> 12 & 63;
          buf[i2++] = 128 | c >>> 6 & 63;
          buf[i2++] = 128 | c & 63;
        }
      }
      return buf;
    };
    var utf8border = function(buf, max) {
      var pos;
      max = max || buf.length;
      if (max > buf.length) {
        max = buf.length;
      }
      pos = max - 1;
      while (pos >= 0 && (buf[pos] & 192) === 128) {
        pos--;
      }
      if (pos < 0) {
        return max;
      }
      if (pos === 0) {
        return max;
      }
      return pos + _utf8len[buf[pos]] > max ? pos : max;
    };
    var buf2string = function(buf) {
      var i2, out, c, c_len;
      var len = buf.length;
      var utf16buf = new Array(len * 2);
      for (out = 0, i2 = 0; i2 < len; ) {
        c = buf[i2++];
        if (c < 128) {
          utf16buf[out++] = c;
          continue;
        }
        c_len = _utf8len[c];
        if (c_len > 4) {
          utf16buf[out++] = 65533;
          i2 += c_len - 1;
          continue;
        }
        c &= c_len === 2 ? 31 : c_len === 3 ? 15 : 7;
        while (c_len > 1 && i2 < len) {
          c = c << 6 | buf[i2++] & 63;
          c_len--;
        }
        if (c_len > 1) {
          utf16buf[out++] = 65533;
          continue;
        }
        if (c < 65536) {
          utf16buf[out++] = c;
        } else {
          c -= 65536;
          utf16buf[out++] = 55296 | c >> 10 & 1023;
          utf16buf[out++] = 56320 | c & 1023;
        }
      }
      if (utf16buf.length !== out) {
        if (utf16buf.subarray) {
          utf16buf = utf16buf.subarray(0, out);
        } else {
          utf16buf.length = out;
        }
      }
      return utils.applyFromCharCode(utf16buf);
    };
    exports2.utf8encode = function utf8encode(str2) {
      if (support.nodebuffer) {
        return nodejsUtils.newBufferFrom(str2, "utf-8");
      }
      return string2buf(str2);
    };
    exports2.utf8decode = function utf8decode(buf) {
      if (support.nodebuffer) {
        return utils.transformTo("nodebuffer", buf).toString("utf-8");
      }
      buf = utils.transformTo(support.uint8array ? "uint8array" : "array", buf);
      return buf2string(buf);
    };
    function Utf8DecodeWorker() {
      GenericWorker.call(this, "utf-8 decode");
      this.leftOver = null;
    }
    utils.inherits(Utf8DecodeWorker, GenericWorker);
    Utf8DecodeWorker.prototype.processChunk = function(chunk) {
      var data = utils.transformTo(support.uint8array ? "uint8array" : "array", chunk.data);
      if (this.leftOver && this.leftOver.length) {
        if (support.uint8array) {
          var previousData = data;
          data = new Uint8Array(previousData.length + this.leftOver.length);
          data.set(this.leftOver, 0);
          data.set(previousData, this.leftOver.length);
        } else {
          data = this.leftOver.concat(data);
        }
        this.leftOver = null;
      }
      var nextBoundary = utf8border(data);
      var usableData = data;
      if (nextBoundary !== data.length) {
        if (support.uint8array) {
          usableData = data.subarray(0, nextBoundary);
          this.leftOver = data.subarray(nextBoundary, data.length);
        } else {
          usableData = data.slice(0, nextBoundary);
          this.leftOver = data.slice(nextBoundary, data.length);
        }
      }
      this.push({
        data: exports2.utf8decode(usableData),
        meta: chunk.meta
      });
    };
    Utf8DecodeWorker.prototype.flush = function() {
      if (this.leftOver && this.leftOver.length) {
        this.push({
          data: exports2.utf8decode(this.leftOver),
          meta: {}
        });
        this.leftOver = null;
      }
    };
    exports2.Utf8DecodeWorker = Utf8DecodeWorker;
    function Utf8EncodeWorker() {
      GenericWorker.call(this, "utf-8 encode");
    }
    utils.inherits(Utf8EncodeWorker, GenericWorker);
    Utf8EncodeWorker.prototype.processChunk = function(chunk) {
      this.push({
        data: exports2.utf8encode(chunk.data),
        meta: chunk.meta
      });
    };
    exports2.Utf8EncodeWorker = Utf8EncodeWorker;
  }
});

// node_modules/jszip/lib/stream/ConvertWorker.js
var require_ConvertWorker = __commonJS({
  "node_modules/jszip/lib/stream/ConvertWorker.js"(exports2, module2) {
    "use strict";
    var GenericWorker = require_GenericWorker();
    var utils = require_utils();
    function ConvertWorker(destType) {
      GenericWorker.call(this, "ConvertWorker to " + destType);
      this.destType = destType;
    }
    utils.inherits(ConvertWorker, GenericWorker);
    ConvertWorker.prototype.processChunk = function(chunk) {
      this.push({
        data: utils.transformTo(this.destType, chunk.data),
        meta: chunk.meta
      });
    };
    module2.exports = ConvertWorker;
  }
});

// node_modules/jszip/lib/nodejs/NodejsStreamOutputAdapter.js
var require_NodejsStreamOutputAdapter = __commonJS({
  "node_modules/jszip/lib/nodejs/NodejsStreamOutputAdapter.js"(exports2, module2) {
    "use strict";
    var Readable = require_readable().Readable;
    var utils = require_utils();
    utils.inherits(NodejsStreamOutputAdapter, Readable);
    function NodejsStreamOutputAdapter(helper, options2, updateCb) {
      Readable.call(this, options2);
      this._helper = helper;
      var self2 = this;
      helper.on("data", function(data, meta) {
        if (!self2.push(data)) {
          self2._helper.pause();
        }
        if (updateCb) {
          updateCb(meta);
        }
      }).on("error", function(e) {
        self2.emit("error", e);
      }).on("end", function() {
        self2.push(null);
      });
    }
    NodejsStreamOutputAdapter.prototype._read = function() {
      this._helper.resume();
    };
    module2.exports = NodejsStreamOutputAdapter;
  }
});

// node_modules/jszip/lib/stream/StreamHelper.js
var require_StreamHelper = __commonJS({
  "node_modules/jszip/lib/stream/StreamHelper.js"(exports2, module2) {
    "use strict";
    var utils = require_utils();
    var ConvertWorker = require_ConvertWorker();
    var GenericWorker = require_GenericWorker();
    var base64 = require_base64();
    var support = require_support();
    var external = require_external();
    var NodejsStreamOutputAdapter = null;
    if (support.nodestream) {
      try {
        NodejsStreamOutputAdapter = require_NodejsStreamOutputAdapter();
      } catch (e) {
      }
    }
    function transformZipOutput(type, content, mimeType) {
      switch (type) {
        case "blob":
          return utils.newBlob(utils.transformTo("arraybuffer", content), mimeType);
        case "base64":
          return base64.encode(content);
        default:
          return utils.transformTo(type, content);
      }
    }
    function concat(type, dataArray) {
      var i, index = 0, res = null, totalLength = 0;
      for (i = 0; i < dataArray.length; i++) {
        totalLength += dataArray[i].length;
      }
      switch (type) {
        case "string":
          return dataArray.join("");
        case "array":
          return Array.prototype.concat.apply([], dataArray);
        case "uint8array":
          res = new Uint8Array(totalLength);
          for (i = 0; i < dataArray.length; i++) {
            res.set(dataArray[i], index);
            index += dataArray[i].length;
          }
          return res;
        case "nodebuffer":
          return Buffer.concat(dataArray);
        default:
          throw new Error("concat : unsupported type '" + type + "'");
      }
    }
    function accumulate(helper, updateCallback) {
      return new external.Promise(function(resolve, reject) {
        var dataArray = [];
        var chunkType = helper._internalType, resultType = helper._outputType, mimeType = helper._mimeType;
        helper.on("data", function(data, meta) {
          dataArray.push(data);
          if (updateCallback) {
            updateCallback(meta);
          }
        }).on("error", function(err) {
          dataArray = [];
          reject(err);
        }).on("end", function() {
          try {
            var result = transformZipOutput(resultType, concat(chunkType, dataArray), mimeType);
            resolve(result);
          } catch (e) {
            reject(e);
          }
          dataArray = [];
        }).resume();
      });
    }
    function StreamHelper(worker, outputType, mimeType) {
      var internalType = outputType;
      switch (outputType) {
        case "blob":
        case "arraybuffer":
          internalType = "uint8array";
          break;
        case "base64":
          internalType = "string";
          break;
      }
      try {
        this._internalType = internalType;
        this._outputType = outputType;
        this._mimeType = mimeType;
        utils.checkSupport(internalType);
        this._worker = worker.pipe(new ConvertWorker(internalType));
        worker.lock();
      } catch (e) {
        this._worker = new GenericWorker("error");
        this._worker.error(e);
      }
    }
    StreamHelper.prototype = {
      /**
       * Listen a StreamHelper, accumulate its content and concatenate it into a
       * complete block.
       * @param {Function} updateCb the update callback.
       * @return Promise the promise for the accumulation.
       */
      accumulate: function(updateCb) {
        return accumulate(this, updateCb);
      },
      /**
       * Add a listener on an event triggered on a stream.
       * @param {String} evt the name of the event
       * @param {Function} fn the listener
       * @return {StreamHelper} the current helper.
       */
      on: function(evt, fn) {
        var self2 = this;
        if (evt === "data") {
          this._worker.on(evt, function(chunk) {
            fn.call(self2, chunk.data, chunk.meta);
          });
        } else {
          this._worker.on(evt, function() {
            utils.delay(fn, arguments, self2);
          });
        }
        return this;
      },
      /**
       * Resume the flow of chunks.
       * @return {StreamHelper} the current helper.
       */
      resume: function() {
        utils.delay(this._worker.resume, [], this._worker);
        return this;
      },
      /**
       * Pause the flow of chunks.
       * @return {StreamHelper} the current helper.
       */
      pause: function() {
        this._worker.pause();
        return this;
      },
      /**
       * Return a nodejs stream for this helper.
       * @param {Function} updateCb the update callback.
       * @return {NodejsStreamOutputAdapter} the nodejs stream.
       */
      toNodejsStream: function(updateCb) {
        utils.checkSupport("nodestream");
        if (this._outputType !== "nodebuffer") {
          throw new Error(this._outputType + " is not supported by this method");
        }
        return new NodejsStreamOutputAdapter(this, {
          objectMode: this._outputType !== "nodebuffer"
        }, updateCb);
      }
    };
    module2.exports = StreamHelper;
  }
});

// node_modules/jszip/lib/defaults.js
var require_defaults = __commonJS({
  "node_modules/jszip/lib/defaults.js"(exports2) {
    "use strict";
    exports2.base64 = false;
    exports2.binary = false;
    exports2.dir = false;
    exports2.createFolders = true;
    exports2.date = null;
    exports2.compression = null;
    exports2.compressionOptions = null;
    exports2.comment = null;
    exports2.unixPermissions = null;
    exports2.dosPermissions = null;
  }
});

// node_modules/jszip/lib/stream/DataWorker.js
var require_DataWorker = __commonJS({
  "node_modules/jszip/lib/stream/DataWorker.js"(exports2, module2) {
    "use strict";
    var utils = require_utils();
    var GenericWorker = require_GenericWorker();
    var DEFAULT_BLOCK_SIZE = 16 * 1024;
    function DataWorker(dataP) {
      GenericWorker.call(this, "DataWorker");
      var self2 = this;
      this.dataIsReady = false;
      this.index = 0;
      this.max = 0;
      this.data = null;
      this.type = "";
      this._tickScheduled = false;
      dataP.then(function(data) {
        self2.dataIsReady = true;
        self2.data = data;
        self2.max = data && data.length || 0;
        self2.type = utils.getTypeOf(data);
        if (!self2.isPaused) {
          self2._tickAndRepeat();
        }
      }, function(e) {
        self2.error(e);
      });
    }
    utils.inherits(DataWorker, GenericWorker);
    DataWorker.prototype.cleanUp = function() {
      GenericWorker.prototype.cleanUp.call(this);
      this.data = null;
    };
    DataWorker.prototype.resume = function() {
      if (!GenericWorker.prototype.resume.call(this)) {
        return false;
      }
      if (!this._tickScheduled && this.dataIsReady) {
        this._tickScheduled = true;
        utils.delay(this._tickAndRepeat, [], this);
      }
      return true;
    };
    DataWorker.prototype._tickAndRepeat = function() {
      this._tickScheduled = false;
      if (this.isPaused || this.isFinished) {
        return;
      }
      this._tick();
      if (!this.isFinished) {
        utils.delay(this._tickAndRepeat, [], this);
        this._tickScheduled = true;
      }
    };
    DataWorker.prototype._tick = function() {
      if (this.isPaused || this.isFinished) {
        return false;
      }
      var size = DEFAULT_BLOCK_SIZE;
      var data = null, nextIndex = Math.min(this.max, this.index + size);
      if (this.index >= this.max) {
        return this.end();
      } else {
        switch (this.type) {
          case "string":
            data = this.data.substring(this.index, nextIndex);
            break;
          case "uint8array":
            data = this.data.subarray(this.index, nextIndex);
            break;
          case "array":
          case "nodebuffer":
            data = this.data.slice(this.index, nextIndex);
            break;
        }
        this.index = nextIndex;
        return this.push({
          data,
          meta: {
            percent: this.max ? this.index / this.max * 100 : 0
          }
        });
      }
    };
    module2.exports = DataWorker;
  }
});

// node_modules/jszip/lib/crc32.js
var require_crc32 = __commonJS({
  "node_modules/jszip/lib/crc32.js"(exports2, module2) {
    "use strict";
    var utils = require_utils();
    function makeTable() {
      var c, table = [];
      for (var n = 0; n < 256; n++) {
        c = n;
        for (var k = 0; k < 8; k++) {
          c = c & 1 ? 3988292384 ^ c >>> 1 : c >>> 1;
        }
        table[n] = c;
      }
      return table;
    }
    var crcTable = makeTable();
    function crc32(crc, buf, len, pos) {
      var t = crcTable, end = pos + len;
      crc = crc ^ -1;
      for (var i = pos; i < end; i++) {
        crc = crc >>> 8 ^ t[(crc ^ buf[i]) & 255];
      }
      return crc ^ -1;
    }
    function crc32str(crc, str2, len, pos) {
      var t = crcTable, end = pos + len;
      crc = crc ^ -1;
      for (var i = pos; i < end; i++) {
        crc = crc >>> 8 ^ t[(crc ^ str2.charCodeAt(i)) & 255];
      }
      return crc ^ -1;
    }
    module2.exports = function crc32wrapper(input, crc) {
      if (typeof input === "undefined" || !input.length) {
        return 0;
      }
      var isArray = utils.getTypeOf(input) !== "string";
      if (isArray) {
        return crc32(crc | 0, input, input.length, 0);
      } else {
        return crc32str(crc | 0, input, input.length, 0);
      }
    };
  }
});

// node_modules/jszip/lib/stream/Crc32Probe.js
var require_Crc32Probe = __commonJS({
  "node_modules/jszip/lib/stream/Crc32Probe.js"(exports2, module2) {
    "use strict";
    var GenericWorker = require_GenericWorker();
    var crc32 = require_crc32();
    var utils = require_utils();
    function Crc32Probe() {
      GenericWorker.call(this, "Crc32Probe");
      this.withStreamInfo("crc32", 0);
    }
    utils.inherits(Crc32Probe, GenericWorker);
    Crc32Probe.prototype.processChunk = function(chunk) {
      this.streamInfo.crc32 = crc32(chunk.data, this.streamInfo.crc32 || 0);
      this.push(chunk);
    };
    module2.exports = Crc32Probe;
  }
});

// node_modules/jszip/lib/stream/DataLengthProbe.js
var require_DataLengthProbe = __commonJS({
  "node_modules/jszip/lib/stream/DataLengthProbe.js"(exports2, module2) {
    "use strict";
    var utils = require_utils();
    var GenericWorker = require_GenericWorker();
    function DataLengthProbe(propName) {
      GenericWorker.call(this, "DataLengthProbe for " + propName);
      this.propName = propName;
      this.withStreamInfo(propName, 0);
    }
    utils.inherits(DataLengthProbe, GenericWorker);
    DataLengthProbe.prototype.processChunk = function(chunk) {
      if (chunk) {
        var length = this.streamInfo[this.propName] || 0;
        this.streamInfo[this.propName] = length + chunk.data.length;
      }
      GenericWorker.prototype.processChunk.call(this, chunk);
    };
    module2.exports = DataLengthProbe;
  }
});

// node_modules/jszip/lib/compressedObject.js
var require_compressedObject = __commonJS({
  "node_modules/jszip/lib/compressedObject.js"(exports2, module2) {
    "use strict";
    var external = require_external();
    var DataWorker = require_DataWorker();
    var Crc32Probe = require_Crc32Probe();
    var DataLengthProbe = require_DataLengthProbe();
    function CompressedObject(compressedSize, uncompressedSize, crc32, compression, data) {
      this.compressedSize = compressedSize;
      this.uncompressedSize = uncompressedSize;
      this.crc32 = crc32;
      this.compression = compression;
      this.compressedContent = data;
    }
    CompressedObject.prototype = {
      /**
       * Create a worker to get the uncompressed content.
       * @return {GenericWorker} the worker.
       */
      getContentWorker: function() {
        var worker = new DataWorker(external.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new DataLengthProbe("data_length"));
        var that = this;
        worker.on("end", function() {
          if (this.streamInfo["data_length"] !== that.uncompressedSize) {
            throw new Error("Bug : uncompressed data size mismatch");
          }
        });
        return worker;
      },
      /**
       * Create a worker to get the compressed content.
       * @return {GenericWorker} the worker.
       */
      getCompressedWorker: function() {
        return new DataWorker(external.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize", this.compressedSize).withStreamInfo("uncompressedSize", this.uncompressedSize).withStreamInfo("crc32", this.crc32).withStreamInfo("compression", this.compression);
      }
    };
    CompressedObject.createWorkerFrom = function(uncompressedWorker, compression, compressionOptions) {
      return uncompressedWorker.pipe(new Crc32Probe()).pipe(new DataLengthProbe("uncompressedSize")).pipe(compression.compressWorker(compressionOptions)).pipe(new DataLengthProbe("compressedSize")).withStreamInfo("compression", compression);
    };
    module2.exports = CompressedObject;
  }
});

// node_modules/jszip/lib/zipObject.js
var require_zipObject = __commonJS({
  "node_modules/jszip/lib/zipObject.js"(exports2, module2) {
    "use strict";
    var StreamHelper = require_StreamHelper();
    var DataWorker = require_DataWorker();
    var utf8 = require_utf8();
    var CompressedObject = require_compressedObject();
    var GenericWorker = require_GenericWorker();
    var ZipObject = function(name, data, options2) {
      this.name = name;
      this.dir = options2.dir;
      this.date = options2.date;
      this.comment = options2.comment;
      this.unixPermissions = options2.unixPermissions;
      this.dosPermissions = options2.dosPermissions;
      this._data = data;
      this._dataBinary = options2.binary;
      this.options = {
        compression: options2.compression,
        compressionOptions: options2.compressionOptions
      };
    };
    ZipObject.prototype = {
      /**
       * Create an internal stream for the content of this object.
       * @param {String} type the type of each chunk.
       * @return StreamHelper the stream.
       */
      internalStream: function(type) {
        var result = null, outputType = "string";
        try {
          if (!type) {
            throw new Error("No output type specified.");
          }
          outputType = type.toLowerCase();
          var askUnicodeString = outputType === "string" || outputType === "text";
          if (outputType === "binarystring" || outputType === "text") {
            outputType = "string";
          }
          result = this._decompressWorker();
          var isUnicodeString = !this._dataBinary;
          if (isUnicodeString && !askUnicodeString) {
            result = result.pipe(new utf8.Utf8EncodeWorker());
          }
          if (!isUnicodeString && askUnicodeString) {
            result = result.pipe(new utf8.Utf8DecodeWorker());
          }
        } catch (e) {
          result = new GenericWorker("error");
          result.error(e);
        }
        return new StreamHelper(result, outputType, "");
      },
      /**
       * Prepare the content in the asked type.
       * @param {String} type the type of the result.
       * @param {Function} onUpdate a function to call on each internal update.
       * @return Promise the promise of the result.
       */
      async: function(type, onUpdate) {
        return this.internalStream(type).accumulate(onUpdate);
      },
      /**
       * Prepare the content as a nodejs stream.
       * @param {String} type the type of each chunk.
       * @param {Function} onUpdate a function to call on each internal update.
       * @return Stream the stream.
       */
      nodeStream: function(type, onUpdate) {
        return this.internalStream(type || "nodebuffer").toNodejsStream(onUpdate);
      },
      /**
       * Return a worker for the compressed content.
       * @private
       * @param {Object} compression the compression object to use.
       * @param {Object} compressionOptions the options to use when compressing.
       * @return Worker the worker.
       */
      _compressWorker: function(compression, compressionOptions) {
        if (this._data instanceof CompressedObject && this._data.compression.magic === compression.magic) {
          return this._data.getCompressedWorker();
        } else {
          var result = this._decompressWorker();
          if (!this._dataBinary) {
            result = result.pipe(new utf8.Utf8EncodeWorker());
          }
          return CompressedObject.createWorkerFrom(result, compression, compressionOptions);
        }
      },
      /**
       * Return a worker for the decompressed content.
       * @private
       * @return Worker the worker.
       */
      _decompressWorker: function() {
        if (this._data instanceof CompressedObject) {
          return this._data.getContentWorker();
        } else if (this._data instanceof GenericWorker) {
          return this._data;
        } else {
          return new DataWorker(this._data);
        }
      }
    };
    var removedMethods = ["asText", "asBinary", "asNodeBuffer", "asUint8Array", "asArrayBuffer"];
    var removedFn = function() {
      throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
    };
    for (i = 0; i < removedMethods.length; i++) {
      ZipObject.prototype[removedMethods[i]] = removedFn;
    }
    var i;
    module2.exports = ZipObject;
  }
});

// node_modules/pako/lib/utils/common.js
var require_common = __commonJS({
  "node_modules/pako/lib/utils/common.js"(exports2) {
    "use strict";
    var TYPED_OK = typeof Uint8Array !== "undefined" && typeof Uint16Array !== "undefined" && typeof Int32Array !== "undefined";
    function _has(obj, key) {
      return Object.prototype.hasOwnProperty.call(obj, key);
    }
    exports2.assign = function(obj) {
      var sources = Array.prototype.slice.call(arguments, 1);
      while (sources.length) {
        var source = sources.shift();
        if (!source) {
          continue;
        }
        if (typeof source !== "object") {
          throw new TypeError(source + "must be non-object");
        }
        for (var p in source) {
          if (_has(source, p)) {
            obj[p] = source[p];
          }
        }
      }
      return obj;
    };
    exports2.shrinkBuf = function(buf, size) {
      if (buf.length === size) {
        return buf;
      }
      if (buf.subarray) {
        return buf.subarray(0, size);
      }
      buf.length = size;
      return buf;
    };
    var fnTyped = {
      arraySet: function(dest, src, src_offs, len, dest_offs) {
        if (src.subarray && dest.subarray) {
          dest.set(src.subarray(src_offs, src_offs + len), dest_offs);
          return;
        }
        for (var i = 0; i < len; i++) {
          dest[dest_offs + i] = src[src_offs + i];
        }
      },
      // Join array of chunks to single array.
      flattenChunks: function(chunks) {
        var i, l, len, pos, chunk, result;
        len = 0;
        for (i = 0, l = chunks.length; i < l; i++) {
          len += chunks[i].length;
        }
        result = new Uint8Array(len);
        pos = 0;
        for (i = 0, l = chunks.length; i < l; i++) {
          chunk = chunks[i];
          result.set(chunk, pos);
          pos += chunk.length;
        }
        return result;
      }
    };
    var fnUntyped = {
      arraySet: function(dest, src, src_offs, len, dest_offs) {
        for (var i = 0; i < len; i++) {
          dest[dest_offs + i] = src[src_offs + i];
        }
      },
      // Join array of chunks to single array.
      flattenChunks: function(chunks) {
        return [].concat.apply([], chunks);
      }
    };
    exports2.setTyped = function(on) {
      if (on) {
        exports2.Buf8 = Uint8Array;
        exports2.Buf16 = Uint16Array;
        exports2.Buf32 = Int32Array;
        exports2.assign(exports2, fnTyped);
      } else {
        exports2.Buf8 = Array;
        exports2.Buf16 = Array;
        exports2.Buf32 = Array;
        exports2.assign(exports2, fnUntyped);
      }
    };
    exports2.setTyped(TYPED_OK);
  }
});

// node_modules/pako/lib/zlib/trees.js
var require_trees = __commonJS({
  "node_modules/pako/lib/zlib/trees.js"(exports2) {
    "use strict";
    var utils = require_common();
    var Z_FIXED = 4;
    var Z_BINARY = 0;
    var Z_TEXT = 1;
    var Z_UNKNOWN = 2;
    function zero(buf) {
      var len = buf.length;
      while (--len >= 0) {
        buf[len] = 0;
      }
    }
    var STORED_BLOCK = 0;
    var STATIC_TREES = 1;
    var DYN_TREES = 2;
    var MIN_MATCH = 3;
    var MAX_MATCH = 258;
    var LENGTH_CODES = 29;
    var LITERALS = 256;
    var L_CODES = LITERALS + 1 + LENGTH_CODES;
    var D_CODES = 30;
    var BL_CODES = 19;
    var HEAP_SIZE = 2 * L_CODES + 1;
    var MAX_BITS = 15;
    var Buf_size = 16;
    var MAX_BL_BITS = 7;
    var END_BLOCK = 256;
    var REP_3_6 = 16;
    var REPZ_3_10 = 17;
    var REPZ_11_138 = 18;
    var extra_lbits = (
      /* extra bits for each length code */
      [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0]
    );
    var extra_dbits = (
      /* extra bits for each distance code */
      [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13]
    );
    var extra_blbits = (
      /* extra bits for each bit length code */
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7]
    );
    var bl_order = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
    var DIST_CODE_LEN = 512;
    var static_ltree = new Array((L_CODES + 2) * 2);
    zero(static_ltree);
    var static_dtree = new Array(D_CODES * 2);
    zero(static_dtree);
    var _dist_code = new Array(DIST_CODE_LEN);
    zero(_dist_code);
    var _length_code = new Array(MAX_MATCH - MIN_MATCH + 1);
    zero(_length_code);
    var base_length = new Array(LENGTH_CODES);
    zero(base_length);
    var base_dist = new Array(D_CODES);
    zero(base_dist);
    function StaticTreeDesc(static_tree, extra_bits, extra_base, elems, max_length) {
      this.static_tree = static_tree;
      this.extra_bits = extra_bits;
      this.extra_base = extra_base;
      this.elems = elems;
      this.max_length = max_length;
      this.has_stree = static_tree && static_tree.length;
    }
    var static_l_desc;
    var static_d_desc;
    var static_bl_desc;
    function TreeDesc(dyn_tree, stat_desc) {
      this.dyn_tree = dyn_tree;
      this.max_code = 0;
      this.stat_desc = stat_desc;
    }
    function d_code(dist) {
      return dist < 256 ? _dist_code[dist] : _dist_code[256 + (dist >>> 7)];
    }
    function put_short(s, w) {
      s.pending_buf[s.pending++] = w & 255;
      s.pending_buf[s.pending++] = w >>> 8 & 255;
    }
    function send_bits(s, value, length) {
      if (s.bi_valid > Buf_size - length) {
        s.bi_buf |= value << s.bi_valid & 65535;
        put_short(s, s.bi_buf);
        s.bi_buf = value >> Buf_size - s.bi_valid;
        s.bi_valid += length - Buf_size;
      } else {
        s.bi_buf |= value << s.bi_valid & 65535;
        s.bi_valid += length;
      }
    }
    function send_code(s, c, tree) {
      send_bits(
        s,
        tree[c * 2],
        tree[c * 2 + 1]
        /*.Len*/
      );
    }
    function bi_reverse(code, len) {
      var res = 0;
      do {
        res |= code & 1;
        code >>>= 1;
        res <<= 1;
      } while (--len > 0);
      return res >>> 1;
    }
    function bi_flush(s) {
      if (s.bi_valid === 16) {
        put_short(s, s.bi_buf);
        s.bi_buf = 0;
        s.bi_valid = 0;
      } else if (s.bi_valid >= 8) {
        s.pending_buf[s.pending++] = s.bi_buf & 255;
        s.bi_buf >>= 8;
        s.bi_valid -= 8;
      }
    }
    function gen_bitlen(s, desc) {
      var tree = desc.dyn_tree;
      var max_code = desc.max_code;
      var stree = desc.stat_desc.static_tree;
      var has_stree = desc.stat_desc.has_stree;
      var extra = desc.stat_desc.extra_bits;
      var base2 = desc.stat_desc.extra_base;
      var max_length = desc.stat_desc.max_length;
      var h;
      var n, m;
      var bits;
      var xbits;
      var f;
      var overflow = 0;
      for (bits = 0; bits <= MAX_BITS; bits++) {
        s.bl_count[bits] = 0;
      }
      tree[s.heap[s.heap_max] * 2 + 1] = 0;
      for (h = s.heap_max + 1; h < HEAP_SIZE; h++) {
        n = s.heap[h];
        bits = tree[tree[n * 2 + 1] * 2 + 1] + 1;
        if (bits > max_length) {
          bits = max_length;
          overflow++;
        }
        tree[n * 2 + 1] = bits;
        if (n > max_code) {
          continue;
        }
        s.bl_count[bits]++;
        xbits = 0;
        if (n >= base2) {
          xbits = extra[n - base2];
        }
        f = tree[n * 2];
        s.opt_len += f * (bits + xbits);
        if (has_stree) {
          s.static_len += f * (stree[n * 2 + 1] + xbits);
        }
      }
      if (overflow === 0) {
        return;
      }
      do {
        bits = max_length - 1;
        while (s.bl_count[bits] === 0) {
          bits--;
        }
        s.bl_count[bits]--;
        s.bl_count[bits + 1] += 2;
        s.bl_count[max_length]--;
        overflow -= 2;
      } while (overflow > 0);
      for (bits = max_length; bits !== 0; bits--) {
        n = s.bl_count[bits];
        while (n !== 0) {
          m = s.heap[--h];
          if (m > max_code) {
            continue;
          }
          if (tree[m * 2 + 1] !== bits) {
            s.opt_len += (bits - tree[m * 2 + 1]) * tree[m * 2];
            tree[m * 2 + 1] = bits;
          }
          n--;
        }
      }
    }
    function gen_codes(tree, max_code, bl_count) {
      var next_code = new Array(MAX_BITS + 1);
      var code = 0;
      var bits;
      var n;
      for (bits = 1; bits <= MAX_BITS; bits++) {
        next_code[bits] = code = code + bl_count[bits - 1] << 1;
      }
      for (n = 0; n <= max_code; n++) {
        var len = tree[n * 2 + 1];
        if (len === 0) {
          continue;
        }
        tree[n * 2] = bi_reverse(next_code[len]++, len);
      }
    }
    function tr_static_init() {
      var n;
      var bits;
      var length;
      var code;
      var dist;
      var bl_count = new Array(MAX_BITS + 1);
      length = 0;
      for (code = 0; code < LENGTH_CODES - 1; code++) {
        base_length[code] = length;
        for (n = 0; n < 1 << extra_lbits[code]; n++) {
          _length_code[length++] = code;
        }
      }
      _length_code[length - 1] = code;
      dist = 0;
      for (code = 0; code < 16; code++) {
        base_dist[code] = dist;
        for (n = 0; n < 1 << extra_dbits[code]; n++) {
          _dist_code[dist++] = code;
        }
      }
      dist >>= 7;
      for (; code < D_CODES; code++) {
        base_dist[code] = dist << 7;
        for (n = 0; n < 1 << extra_dbits[code] - 7; n++) {
          _dist_code[256 + dist++] = code;
        }
      }
      for (bits = 0; bits <= MAX_BITS; bits++) {
        bl_count[bits] = 0;
      }
      n = 0;
      while (n <= 143) {
        static_ltree[n * 2 + 1] = 8;
        n++;
        bl_count[8]++;
      }
      while (n <= 255) {
        static_ltree[n * 2 + 1] = 9;
        n++;
        bl_count[9]++;
      }
      while (n <= 279) {
        static_ltree[n * 2 + 1] = 7;
        n++;
        bl_count[7]++;
      }
      while (n <= 287) {
        static_ltree[n * 2 + 1] = 8;
        n++;
        bl_count[8]++;
      }
      gen_codes(static_ltree, L_CODES + 1, bl_count);
      for (n = 0; n < D_CODES; n++) {
        static_dtree[n * 2 + 1] = 5;
        static_dtree[n * 2] = bi_reverse(n, 5);
      }
      static_l_desc = new StaticTreeDesc(static_ltree, extra_lbits, LITERALS + 1, L_CODES, MAX_BITS);
      static_d_desc = new StaticTreeDesc(static_dtree, extra_dbits, 0, D_CODES, MAX_BITS);
      static_bl_desc = new StaticTreeDesc(new Array(0), extra_blbits, 0, BL_CODES, MAX_BL_BITS);
    }
    function init_block(s) {
      var n;
      for (n = 0; n < L_CODES; n++) {
        s.dyn_ltree[n * 2] = 0;
      }
      for (n = 0; n < D_CODES; n++) {
        s.dyn_dtree[n * 2] = 0;
      }
      for (n = 0; n < BL_CODES; n++) {
        s.bl_tree[n * 2] = 0;
      }
      s.dyn_ltree[END_BLOCK * 2] = 1;
      s.opt_len = s.static_len = 0;
      s.last_lit = s.matches = 0;
    }
    function bi_windup(s) {
      if (s.bi_valid > 8) {
        put_short(s, s.bi_buf);
      } else if (s.bi_valid > 0) {
        s.pending_buf[s.pending++] = s.bi_buf;
      }
      s.bi_buf = 0;
      s.bi_valid = 0;
    }
    function copy_block(s, buf, len, header) {
      bi_windup(s);
      if (header) {
        put_short(s, len);
        put_short(s, ~len);
      }
      utils.arraySet(s.pending_buf, s.window, buf, len, s.pending);
      s.pending += len;
    }
    function smaller(tree, n, m, depth) {
      var _n2 = n * 2;
      var _m2 = m * 2;
      return tree[_n2] < tree[_m2] || tree[_n2] === tree[_m2] && depth[n] <= depth[m];
    }
    function pqdownheap(s, tree, k) {
      var v = s.heap[k];
      var j = k << 1;
      while (j <= s.heap_len) {
        if (j < s.heap_len && smaller(tree, s.heap[j + 1], s.heap[j], s.depth)) {
          j++;
        }
        if (smaller(tree, v, s.heap[j], s.depth)) {
          break;
        }
        s.heap[k] = s.heap[j];
        k = j;
        j <<= 1;
      }
      s.heap[k] = v;
    }
    function compress_block(s, ltree, dtree) {
      var dist;
      var lc;
      var lx = 0;
      var code;
      var extra;
      if (s.last_lit !== 0) {
        do {
          dist = s.pending_buf[s.d_buf + lx * 2] << 8 | s.pending_buf[s.d_buf + lx * 2 + 1];
          lc = s.pending_buf[s.l_buf + lx];
          lx++;
          if (dist === 0) {
            send_code(s, lc, ltree);
          } else {
            code = _length_code[lc];
            send_code(s, code + LITERALS + 1, ltree);
            extra = extra_lbits[code];
            if (extra !== 0) {
              lc -= base_length[code];
              send_bits(s, lc, extra);
            }
            dist--;
            code = d_code(dist);
            send_code(s, code, dtree);
            extra = extra_dbits[code];
            if (extra !== 0) {
              dist -= base_dist[code];
              send_bits(s, dist, extra);
            }
          }
        } while (lx < s.last_lit);
      }
      send_code(s, END_BLOCK, ltree);
    }
    function build_tree(s, desc) {
      var tree = desc.dyn_tree;
      var stree = desc.stat_desc.static_tree;
      var has_stree = desc.stat_desc.has_stree;
      var elems = desc.stat_desc.elems;
      var n, m;
      var max_code = -1;
      var node;
      s.heap_len = 0;
      s.heap_max = HEAP_SIZE;
      for (n = 0; n < elems; n++) {
        if (tree[n * 2] !== 0) {
          s.heap[++s.heap_len] = max_code = n;
          s.depth[n] = 0;
        } else {
          tree[n * 2 + 1] = 0;
        }
      }
      while (s.heap_len < 2) {
        node = s.heap[++s.heap_len] = max_code < 2 ? ++max_code : 0;
        tree[node * 2] = 1;
        s.depth[node] = 0;
        s.opt_len--;
        if (has_stree) {
          s.static_len -= stree[node * 2 + 1];
        }
      }
      desc.max_code = max_code;
      for (n = s.heap_len >> 1; n >= 1; n--) {
        pqdownheap(s, tree, n);
      }
      node = elems;
      do {
        n = s.heap[
          1
          /*SMALLEST*/
        ];
        s.heap[
          1
          /*SMALLEST*/
        ] = s.heap[s.heap_len--];
        pqdownheap(
          s,
          tree,
          1
          /*SMALLEST*/
        );
        m = s.heap[
          1
          /*SMALLEST*/
        ];
        s.heap[--s.heap_max] = n;
        s.heap[--s.heap_max] = m;
        tree[node * 2] = tree[n * 2] + tree[m * 2];
        s.depth[node] = (s.depth[n] >= s.depth[m] ? s.depth[n] : s.depth[m]) + 1;
        tree[n * 2 + 1] = tree[m * 2 + 1] = node;
        s.heap[
          1
          /*SMALLEST*/
        ] = node++;
        pqdownheap(
          s,
          tree,
          1
          /*SMALLEST*/
        );
      } while (s.heap_len >= 2);
      s.heap[--s.heap_max] = s.heap[
        1
        /*SMALLEST*/
      ];
      gen_bitlen(s, desc);
      gen_codes(tree, max_code, s.bl_count);
    }
    function scan_tree(s, tree, max_code) {
      var n;
      var prevlen = -1;
      var curlen;
      var nextlen = tree[0 * 2 + 1];
      var count = 0;
      var max_count = 7;
      var min_count = 4;
      if (nextlen === 0) {
        max_count = 138;
        min_count = 3;
      }
      tree[(max_code + 1) * 2 + 1] = 65535;
      for (n = 0; n <= max_code; n++) {
        curlen = nextlen;
        nextlen = tree[(n + 1) * 2 + 1];
        if (++count < max_count && curlen === nextlen) {
          continue;
        } else if (count < min_count) {
          s.bl_tree[curlen * 2] += count;
        } else if (curlen !== 0) {
          if (curlen !== prevlen) {
            s.bl_tree[curlen * 2]++;
          }
          s.bl_tree[REP_3_6 * 2]++;
        } else if (count <= 10) {
          s.bl_tree[REPZ_3_10 * 2]++;
        } else {
          s.bl_tree[REPZ_11_138 * 2]++;
        }
        count = 0;
        prevlen = curlen;
        if (nextlen === 0) {
          max_count = 138;
          min_count = 3;
        } else if (curlen === nextlen) {
          max_count = 6;
          min_count = 3;
        } else {
          max_count = 7;
          min_count = 4;
        }
      }
    }
    function send_tree(s, tree, max_code) {
      var n;
      var prevlen = -1;
      var curlen;
      var nextlen = tree[0 * 2 + 1];
      var count = 0;
      var max_count = 7;
      var min_count = 4;
      if (nextlen === 0) {
        max_count = 138;
        min_count = 3;
      }
      for (n = 0; n <= max_code; n++) {
        curlen = nextlen;
        nextlen = tree[(n + 1) * 2 + 1];
        if (++count < max_count && curlen === nextlen) {
          continue;
        } else if (count < min_count) {
          do {
            send_code(s, curlen, s.bl_tree);
          } while (--count !== 0);
        } else if (curlen !== 0) {
          if (curlen !== prevlen) {
            send_code(s, curlen, s.bl_tree);
            count--;
          }
          send_code(s, REP_3_6, s.bl_tree);
          send_bits(s, count - 3, 2);
        } else if (count <= 10) {
          send_code(s, REPZ_3_10, s.bl_tree);
          send_bits(s, count - 3, 3);
        } else {
          send_code(s, REPZ_11_138, s.bl_tree);
          send_bits(s, count - 11, 7);
        }
        count = 0;
        prevlen = curlen;
        if (nextlen === 0) {
          max_count = 138;
          min_count = 3;
        } else if (curlen === nextlen) {
          max_count = 6;
          min_count = 3;
        } else {
          max_count = 7;
          min_count = 4;
        }
      }
    }
    function build_bl_tree(s) {
      var max_blindex;
      scan_tree(s, s.dyn_ltree, s.l_desc.max_code);
      scan_tree(s, s.dyn_dtree, s.d_desc.max_code);
      build_tree(s, s.bl_desc);
      for (max_blindex = BL_CODES - 1; max_blindex >= 3; max_blindex--) {
        if (s.bl_tree[bl_order[max_blindex] * 2 + 1] !== 0) {
          break;
        }
      }
      s.opt_len += 3 * (max_blindex + 1) + 5 + 5 + 4;
      return max_blindex;
    }
    function send_all_trees(s, lcodes, dcodes, blcodes) {
      var rank;
      send_bits(s, lcodes - 257, 5);
      send_bits(s, dcodes - 1, 5);
      send_bits(s, blcodes - 4, 4);
      for (rank = 0; rank < blcodes; rank++) {
        send_bits(s, s.bl_tree[bl_order[rank] * 2 + 1], 3);
      }
      send_tree(s, s.dyn_ltree, lcodes - 1);
      send_tree(s, s.dyn_dtree, dcodes - 1);
    }
    function detect_data_type(s) {
      var black_mask = 4093624447;
      var n;
      for (n = 0; n <= 31; n++, black_mask >>>= 1) {
        if (black_mask & 1 && s.dyn_ltree[n * 2] !== 0) {
          return Z_BINARY;
        }
      }
      if (s.dyn_ltree[9 * 2] !== 0 || s.dyn_ltree[10 * 2] !== 0 || s.dyn_ltree[13 * 2] !== 0) {
        return Z_TEXT;
      }
      for (n = 32; n < LITERALS; n++) {
        if (s.dyn_ltree[n * 2] !== 0) {
          return Z_TEXT;
        }
      }
      return Z_BINARY;
    }
    var static_init_done = false;
    function _tr_init(s) {
      if (!static_init_done) {
        tr_static_init();
        static_init_done = true;
      }
      s.l_desc = new TreeDesc(s.dyn_ltree, static_l_desc);
      s.d_desc = new TreeDesc(s.dyn_dtree, static_d_desc);
      s.bl_desc = new TreeDesc(s.bl_tree, static_bl_desc);
      s.bi_buf = 0;
      s.bi_valid = 0;
      init_block(s);
    }
    function _tr_stored_block(s, buf, stored_len, last) {
      send_bits(s, (STORED_BLOCK << 1) + (last ? 1 : 0), 3);
      copy_block(s, buf, stored_len, true);
    }
    function _tr_align(s) {
      send_bits(s, STATIC_TREES << 1, 3);
      send_code(s, END_BLOCK, static_ltree);
      bi_flush(s);
    }
    function _tr_flush_block(s, buf, stored_len, last) {
      var opt_lenb, static_lenb;
      var max_blindex = 0;
      if (s.level > 0) {
        if (s.strm.data_type === Z_UNKNOWN) {
          s.strm.data_type = detect_data_type(s);
        }
        build_tree(s, s.l_desc);
        build_tree(s, s.d_desc);
        max_blindex = build_bl_tree(s);
        opt_lenb = s.opt_len + 3 + 7 >>> 3;
        static_lenb = s.static_len + 3 + 7 >>> 3;
        if (static_lenb <= opt_lenb) {
          opt_lenb = static_lenb;
        }
      } else {
        opt_lenb = static_lenb = stored_len + 5;
      }
      if (stored_len + 4 <= opt_lenb && buf !== -1) {
        _tr_stored_block(s, buf, stored_len, last);
      } else if (s.strategy === Z_FIXED || static_lenb === opt_lenb) {
        send_bits(s, (STATIC_TREES << 1) + (last ? 1 : 0), 3);
        compress_block(s, static_ltree, static_dtree);
      } else {
        send_bits(s, (DYN_TREES << 1) + (last ? 1 : 0), 3);
        send_all_trees(s, s.l_desc.max_code + 1, s.d_desc.max_code + 1, max_blindex + 1);
        compress_block(s, s.dyn_ltree, s.dyn_dtree);
      }
      init_block(s);
      if (last) {
        bi_windup(s);
      }
    }
    function _tr_tally(s, dist, lc) {
      s.pending_buf[s.d_buf + s.last_lit * 2] = dist >>> 8 & 255;
      s.pending_buf[s.d_buf + s.last_lit * 2 + 1] = dist & 255;
      s.pending_buf[s.l_buf + s.last_lit] = lc & 255;
      s.last_lit++;
      if (dist === 0) {
        s.dyn_ltree[lc * 2]++;
      } else {
        s.matches++;
        dist--;
        s.dyn_ltree[(_length_code[lc] + LITERALS + 1) * 2]++;
        s.dyn_dtree[d_code(dist) * 2]++;
      }
      return s.last_lit === s.lit_bufsize - 1;
    }
    exports2._tr_init = _tr_init;
    exports2._tr_stored_block = _tr_stored_block;
    exports2._tr_flush_block = _tr_flush_block;
    exports2._tr_tally = _tr_tally;
    exports2._tr_align = _tr_align;
  }
});

// node_modules/pako/lib/zlib/adler32.js
var require_adler32 = __commonJS({
  "node_modules/pako/lib/zlib/adler32.js"(exports2, module2) {
    "use strict";
    function adler32(adler, buf, len, pos) {
      var s1 = adler & 65535 | 0, s2 = adler >>> 16 & 65535 | 0, n = 0;
      while (len !== 0) {
        n = len > 2e3 ? 2e3 : len;
        len -= n;
        do {
          s1 = s1 + buf[pos++] | 0;
          s2 = s2 + s1 | 0;
        } while (--n);
        s1 %= 65521;
        s2 %= 65521;
      }
      return s1 | s2 << 16 | 0;
    }
    module2.exports = adler32;
  }
});

// node_modules/pako/lib/zlib/crc32.js
var require_crc322 = __commonJS({
  "node_modules/pako/lib/zlib/crc32.js"(exports2, module2) {
    "use strict";
    function makeTable() {
      var c, table = [];
      for (var n = 0; n < 256; n++) {
        c = n;
        for (var k = 0; k < 8; k++) {
          c = c & 1 ? 3988292384 ^ c >>> 1 : c >>> 1;
        }
        table[n] = c;
      }
      return table;
    }
    var crcTable = makeTable();
    function crc32(crc, buf, len, pos) {
      var t = crcTable, end = pos + len;
      crc ^= -1;
      for (var i = pos; i < end; i++) {
        crc = crc >>> 8 ^ t[(crc ^ buf[i]) & 255];
      }
      return crc ^ -1;
    }
    module2.exports = crc32;
  }
});

// node_modules/pako/lib/zlib/messages.js
var require_messages = __commonJS({
  "node_modules/pako/lib/zlib/messages.js"(exports2, module2) {
    "use strict";
    module2.exports = {
      2: "need dictionary",
      /* Z_NEED_DICT       2  */
      1: "stream end",
      /* Z_STREAM_END      1  */
      0: "",
      /* Z_OK              0  */
      "-1": "file error",
      /* Z_ERRNO         (-1) */
      "-2": "stream error",
      /* Z_STREAM_ERROR  (-2) */
      "-3": "data error",
      /* Z_DATA_ERROR    (-3) */
      "-4": "insufficient memory",
      /* Z_MEM_ERROR     (-4) */
      "-5": "buffer error",
      /* Z_BUF_ERROR     (-5) */
      "-6": "incompatible version"
      /* Z_VERSION_ERROR (-6) */
    };
  }
});

// node_modules/pako/lib/zlib/deflate.js
var require_deflate = __commonJS({
  "node_modules/pako/lib/zlib/deflate.js"(exports2) {
    "use strict";
    var utils = require_common();
    var trees = require_trees();
    var adler32 = require_adler32();
    var crc32 = require_crc322();
    var msg = require_messages();
    var Z_NO_FLUSH = 0;
    var Z_PARTIAL_FLUSH = 1;
    var Z_FULL_FLUSH = 3;
    var Z_FINISH = 4;
    var Z_BLOCK = 5;
    var Z_OK = 0;
    var Z_STREAM_END = 1;
    var Z_STREAM_ERROR = -2;
    var Z_DATA_ERROR = -3;
    var Z_BUF_ERROR = -5;
    var Z_DEFAULT_COMPRESSION = -1;
    var Z_FILTERED = 1;
    var Z_HUFFMAN_ONLY = 2;
    var Z_RLE = 3;
    var Z_FIXED = 4;
    var Z_DEFAULT_STRATEGY = 0;
    var Z_UNKNOWN = 2;
    var Z_DEFLATED = 8;
    var MAX_MEM_LEVEL = 9;
    var MAX_WBITS = 15;
    var DEF_MEM_LEVEL = 8;
    var LENGTH_CODES = 29;
    var LITERALS = 256;
    var L_CODES = LITERALS + 1 + LENGTH_CODES;
    var D_CODES = 30;
    var BL_CODES = 19;
    var HEAP_SIZE = 2 * L_CODES + 1;
    var MAX_BITS = 15;
    var MIN_MATCH = 3;
    var MAX_MATCH = 258;
    var MIN_LOOKAHEAD = MAX_MATCH + MIN_MATCH + 1;
    var PRESET_DICT = 32;
    var INIT_STATE = 42;
    var EXTRA_STATE = 69;
    var NAME_STATE = 73;
    var COMMENT_STATE = 91;
    var HCRC_STATE = 103;
    var BUSY_STATE = 113;
    var FINISH_STATE = 666;
    var BS_NEED_MORE = 1;
    var BS_BLOCK_DONE = 2;
    var BS_FINISH_STARTED = 3;
    var BS_FINISH_DONE = 4;
    var OS_CODE = 3;
    function err(strm, errorCode) {
      strm.msg = msg[errorCode];
      return errorCode;
    }
    function rank(f) {
      return (f << 1) - (f > 4 ? 9 : 0);
    }
    function zero(buf) {
      var len = buf.length;
      while (--len >= 0) {
        buf[len] = 0;
      }
    }
    function flush_pending(strm) {
      var s = strm.state;
      var len = s.pending;
      if (len > strm.avail_out) {
        len = strm.avail_out;
      }
      if (len === 0) {
        return;
      }
      utils.arraySet(strm.output, s.pending_buf, s.pending_out, len, strm.next_out);
      strm.next_out += len;
      s.pending_out += len;
      strm.total_out += len;
      strm.avail_out -= len;
      s.pending -= len;
      if (s.pending === 0) {
        s.pending_out = 0;
      }
    }
    function flush_block_only(s, last) {
      trees._tr_flush_block(s, s.block_start >= 0 ? s.block_start : -1, s.strstart - s.block_start, last);
      s.block_start = s.strstart;
      flush_pending(s.strm);
    }
    function put_byte(s, b) {
      s.pending_buf[s.pending++] = b;
    }
    function putShortMSB(s, b) {
      s.pending_buf[s.pending++] = b >>> 8 & 255;
      s.pending_buf[s.pending++] = b & 255;
    }
    function read_buf(strm, buf, start, size) {
      var len = strm.avail_in;
      if (len > size) {
        len = size;
      }
      if (len === 0) {
        return 0;
      }
      strm.avail_in -= len;
      utils.arraySet(buf, strm.input, strm.next_in, len, start);
      if (strm.state.wrap === 1) {
        strm.adler = adler32(strm.adler, buf, len, start);
      } else if (strm.state.wrap === 2) {
        strm.adler = crc32(strm.adler, buf, len, start);
      }
      strm.next_in += len;
      strm.total_in += len;
      return len;
    }
    function longest_match(s, cur_match) {
      var chain_length = s.max_chain_length;
      var scan = s.strstart;
      var match;
      var len;
      var best_len = s.prev_length;
      var nice_match = s.nice_match;
      var limit = s.strstart > s.w_size - MIN_LOOKAHEAD ? s.strstart - (s.w_size - MIN_LOOKAHEAD) : 0;
      var _win = s.window;
      var wmask = s.w_mask;
      var prev = s.prev;
      var strend = s.strstart + MAX_MATCH;
      var scan_end1 = _win[scan + best_len - 1];
      var scan_end = _win[scan + best_len];
      if (s.prev_length >= s.good_match) {
        chain_length >>= 2;
      }
      if (nice_match > s.lookahead) {
        nice_match = s.lookahead;
      }
      do {
        match = cur_match;
        if (_win[match + best_len] !== scan_end || _win[match + best_len - 1] !== scan_end1 || _win[match] !== _win[scan] || _win[++match] !== _win[scan + 1]) {
          continue;
        }
        scan += 2;
        match++;
        do {
        } while (_win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && _win[++scan] === _win[++match] && scan < strend);
        len = MAX_MATCH - (strend - scan);
        scan = strend - MAX_MATCH;
        if (len > best_len) {
          s.match_start = cur_match;
          best_len = len;
          if (len >= nice_match) {
            break;
          }
          scan_end1 = _win[scan + best_len - 1];
          scan_end = _win[scan + best_len];
        }
      } while ((cur_match = prev[cur_match & wmask]) > limit && --chain_length !== 0);
      if (best_len <= s.lookahead) {
        return best_len;
      }
      return s.lookahead;
    }
    function fill_window(s) {
      var _w_size = s.w_size;
      var p, n, m, more, str2;
      do {
        more = s.window_size - s.lookahead - s.strstart;
        if (s.strstart >= _w_size + (_w_size - MIN_LOOKAHEAD)) {
          utils.arraySet(s.window, s.window, _w_size, _w_size, 0);
          s.match_start -= _w_size;
          s.strstart -= _w_size;
          s.block_start -= _w_size;
          n = s.hash_size;
          p = n;
          do {
            m = s.head[--p];
            s.head[p] = m >= _w_size ? m - _w_size : 0;
          } while (--n);
          n = _w_size;
          p = n;
          do {
            m = s.prev[--p];
            s.prev[p] = m >= _w_size ? m - _w_size : 0;
          } while (--n);
          more += _w_size;
        }
        if (s.strm.avail_in === 0) {
          break;
        }
        n = read_buf(s.strm, s.window, s.strstart + s.lookahead, more);
        s.lookahead += n;
        if (s.lookahead + s.insert >= MIN_MATCH) {
          str2 = s.strstart - s.insert;
          s.ins_h = s.window[str2];
          s.ins_h = (s.ins_h << s.hash_shift ^ s.window[str2 + 1]) & s.hash_mask;
          while (s.insert) {
            s.ins_h = (s.ins_h << s.hash_shift ^ s.window[str2 + MIN_MATCH - 1]) & s.hash_mask;
            s.prev[str2 & s.w_mask] = s.head[s.ins_h];
            s.head[s.ins_h] = str2;
            str2++;
            s.insert--;
            if (s.lookahead + s.insert < MIN_MATCH) {
              break;
            }
          }
        }
      } while (s.lookahead < MIN_LOOKAHEAD && s.strm.avail_in !== 0);
    }
    function deflate_stored(s, flush) {
      var max_block_size = 65535;
      if (max_block_size > s.pending_buf_size - 5) {
        max_block_size = s.pending_buf_size - 5;
      }
      for (; ; ) {
        if (s.lookahead <= 1) {
          fill_window(s);
          if (s.lookahead === 0 && flush === Z_NO_FLUSH) {
            return BS_NEED_MORE;
          }
          if (s.lookahead === 0) {
            break;
          }
        }
        s.strstart += s.lookahead;
        s.lookahead = 0;
        var max_start = s.block_start + max_block_size;
        if (s.strstart === 0 || s.strstart >= max_start) {
          s.lookahead = s.strstart - max_start;
          s.strstart = max_start;
          flush_block_only(s, false);
          if (s.strm.avail_out === 0) {
            return BS_NEED_MORE;
          }
        }
        if (s.strstart - s.block_start >= s.w_size - MIN_LOOKAHEAD) {
          flush_block_only(s, false);
          if (s.strm.avail_out === 0) {
            return BS_NEED_MORE;
          }
        }
      }
      s.insert = 0;
      if (flush === Z_FINISH) {
        flush_block_only(s, true);
        if (s.strm.avail_out === 0) {
          return BS_FINISH_STARTED;
        }
        return BS_FINISH_DONE;
      }
      if (s.strstart > s.block_start) {
        flush_block_only(s, false);
        if (s.strm.avail_out === 0) {
          return BS_NEED_MORE;
        }
      }
      return BS_NEED_MORE;
    }
    function deflate_fast(s, flush) {
      var hash_head;
      var bflush;
      for (; ; ) {
        if (s.lookahead < MIN_LOOKAHEAD) {
          fill_window(s);
          if (s.lookahead < MIN_LOOKAHEAD && flush === Z_NO_FLUSH) {
            return BS_NEED_MORE;
          }
          if (s.lookahead === 0) {
            break;
          }
        }
        hash_head = 0;
        if (s.lookahead >= MIN_MATCH) {
          s.ins_h = (s.ins_h << s.hash_shift ^ s.window[s.strstart + MIN_MATCH - 1]) & s.hash_mask;
          hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
          s.head[s.ins_h] = s.strstart;
        }
        if (hash_head !== 0 && s.strstart - hash_head <= s.w_size - MIN_LOOKAHEAD) {
          s.match_length = longest_match(s, hash_head);
        }
        if (s.match_length >= MIN_MATCH) {
          bflush = trees._tr_tally(s, s.strstart - s.match_start, s.match_length - MIN_MATCH);
          s.lookahead -= s.match_length;
          if (s.match_length <= s.max_lazy_match && s.lookahead >= MIN_MATCH) {
            s.match_length--;
            do {
              s.strstart++;
              s.ins_h = (s.ins_h << s.hash_shift ^ s.window[s.strstart + MIN_MATCH - 1]) & s.hash_mask;
              hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
              s.head[s.ins_h] = s.strstart;
            } while (--s.match_length !== 0);
            s.strstart++;
          } else {
            s.strstart += s.match_length;
            s.match_length = 0;
            s.ins_h = s.window[s.strstart];
            s.ins_h = (s.ins_h << s.hash_shift ^ s.window[s.strstart + 1]) & s.hash_mask;
          }
        } else {
          bflush = trees._tr_tally(s, 0, s.window[s.strstart]);
          s.lookahead--;
          s.strstart++;
        }
        if (bflush) {
          flush_block_only(s, false);
          if (s.strm.avail_out === 0) {
            return BS_NEED_MORE;
          }
        }
      }
      s.insert = s.strstart < MIN_MATCH - 1 ? s.strstart : MIN_MATCH - 1;
      if (flush === Z_FINISH) {
        flush_block_only(s, true);
        if (s.strm.avail_out === 0) {
          return BS_FINISH_STARTED;
        }
        return BS_FINISH_DONE;
      }
      if (s.last_lit) {
        flush_block_only(s, false);
        if (s.strm.avail_out === 0) {
          return BS_NEED_MORE;
        }
      }
      return BS_BLOCK_DONE;
    }
    function deflate_slow(s, flush) {
      var hash_head;
      var bflush;
      var max_insert;
      for (; ; ) {
        if (s.lookahead < MIN_LOOKAHEAD) {
          fill_window(s);
          if (s.lookahead < MIN_LOOKAHEAD && flush === Z_NO_FLUSH) {
            return BS_NEED_MORE;
          }
          if (s.lookahead === 0) {
            break;
          }
        }
        hash_head = 0;
        if (s.lookahead >= MIN_MATCH) {
          s.ins_h = (s.ins_h << s.hash_shift ^ s.window[s.strstart + MIN_MATCH - 1]) & s.hash_mask;
          hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
          s.head[s.ins_h] = s.strstart;
        }
        s.prev_length = s.match_length;
        s.prev_match = s.match_start;
        s.match_length = MIN_MATCH - 1;
        if (hash_head !== 0 && s.prev_length < s.max_lazy_match && s.strstart - hash_head <= s.w_size - MIN_LOOKAHEAD) {
          s.match_length = longest_match(s, hash_head);
          if (s.match_length <= 5 && (s.strategy === Z_FILTERED || s.match_length === MIN_MATCH && s.strstart - s.match_start > 4096)) {
            s.match_length = MIN_MATCH - 1;
          }
        }
        if (s.prev_length >= MIN_MATCH && s.match_length <= s.prev_length) {
          max_insert = s.strstart + s.lookahead - MIN_MATCH;
          bflush = trees._tr_tally(s, s.strstart - 1 - s.prev_match, s.prev_length - MIN_MATCH);
          s.lookahead -= s.prev_length - 1;
          s.prev_length -= 2;
          do {
            if (++s.strstart <= max_insert) {
              s.ins_h = (s.ins_h << s.hash_shift ^ s.window[s.strstart + MIN_MATCH - 1]) & s.hash_mask;
              hash_head = s.prev[s.strstart & s.w_mask] = s.head[s.ins_h];
              s.head[s.ins_h] = s.strstart;
            }
          } while (--s.prev_length !== 0);
          s.match_available = 0;
          s.match_length = MIN_MATCH - 1;
          s.strstart++;
          if (bflush) {
            flush_block_only(s, false);
            if (s.strm.avail_out === 0) {
              return BS_NEED_MORE;
            }
          }
        } else if (s.match_available) {
          bflush = trees._tr_tally(s, 0, s.window[s.strstart - 1]);
          if (bflush) {
            flush_block_only(s, false);
          }
          s.strstart++;
          s.lookahead--;
          if (s.strm.avail_out === 0) {
            return BS_NEED_MORE;
          }
        } else {
          s.match_available = 1;
          s.strstart++;
          s.lookahead--;
        }
      }
      if (s.match_available) {
        bflush = trees._tr_tally(s, 0, s.window[s.strstart - 1]);
        s.match_available = 0;
      }
      s.insert = s.strstart < MIN_MATCH - 1 ? s.strstart : MIN_MATCH - 1;
      if (flush === Z_FINISH) {
        flush_block_only(s, true);
        if (s.strm.avail_out === 0) {
          return BS_FINISH_STARTED;
        }
        return BS_FINISH_DONE;
      }
      if (s.last_lit) {
        flush_block_only(s, false);
        if (s.strm.avail_out === 0) {
          return BS_NEED_MORE;
        }
      }
      return BS_BLOCK_DONE;
    }
    function deflate_rle(s, flush) {
      var bflush;
      var prev;
      var scan, strend;
      var _win = s.window;
      for (; ; ) {
        if (s.lookahead <= MAX_MATCH) {
          fill_window(s);
          if (s.lookahead <= MAX_MATCH && flush === Z_NO_FLUSH) {
            return BS_NEED_MORE;
          }
          if (s.lookahead === 0) {
            break;
          }
        }
        s.match_length = 0;
        if (s.lookahead >= MIN_MATCH && s.strstart > 0) {
          scan = s.strstart - 1;
          prev = _win[scan];
          if (prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan]) {
            strend = s.strstart + MAX_MATCH;
            do {
            } while (prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && prev === _win[++scan] && scan < strend);
            s.match_length = MAX_MATCH - (strend - scan);
            if (s.match_length > s.lookahead) {
              s.match_length = s.lookahead;
            }
          }
        }
        if (s.match_length >= MIN_MATCH) {
          bflush = trees._tr_tally(s, 1, s.match_length - MIN_MATCH);
          s.lookahead -= s.match_length;
          s.strstart += s.match_length;
          s.match_length = 0;
        } else {
          bflush = trees._tr_tally(s, 0, s.window[s.strstart]);
          s.lookahead--;
          s.strstart++;
        }
        if (bflush) {
          flush_block_only(s, false);
          if (s.strm.avail_out === 0) {
            return BS_NEED_MORE;
          }
        }
      }
      s.insert = 0;
      if (flush === Z_FINISH) {
        flush_block_only(s, true);
        if (s.strm.avail_out === 0) {
          return BS_FINISH_STARTED;
        }
        return BS_FINISH_DONE;
      }
      if (s.last_lit) {
        flush_block_only(s, false);
        if (s.strm.avail_out === 0) {
          return BS_NEED_MORE;
        }
      }
      return BS_BLOCK_DONE;
    }
    function deflate_huff(s, flush) {
      var bflush;
      for (; ; ) {
        if (s.lookahead === 0) {
          fill_window(s);
          if (s.lookahead === 0) {
            if (flush === Z_NO_FLUSH) {
              return BS_NEED_MORE;
            }
            break;
          }
        }
        s.match_length = 0;
        bflush = trees._tr_tally(s, 0, s.window[s.strstart]);
        s.lookahead--;
        s.strstart++;
        if (bflush) {
          flush_block_only(s, false);
          if (s.strm.avail_out === 0) {
            return BS_NEED_MORE;
          }
        }
      }
      s.insert = 0;
      if (flush === Z_FINISH) {
        flush_block_only(s, true);
        if (s.strm.avail_out === 0) {
          return BS_FINISH_STARTED;
        }
        return BS_FINISH_DONE;
      }
      if (s.last_lit) {
        flush_block_only(s, false);
        if (s.strm.avail_out === 0) {
          return BS_NEED_MORE;
        }
      }
      return BS_BLOCK_DONE;
    }
    function Config(good_length, max_lazy, nice_length, max_chain, func) {
      this.good_length = good_length;
      this.max_lazy = max_lazy;
      this.nice_length = nice_length;
      this.max_chain = max_chain;
      this.func = func;
    }
    var configuration_table;
    configuration_table = [
      /*      good lazy nice chain */
      new Config(0, 0, 0, 0, deflate_stored),
      /* 0 store only */
      new Config(4, 4, 8, 4, deflate_fast),
      /* 1 max speed, no lazy matches */
      new Config(4, 5, 16, 8, deflate_fast),
      /* 2 */
      new Config(4, 6, 32, 32, deflate_fast),
      /* 3 */
      new Config(4, 4, 16, 16, deflate_slow),
      /* 4 lazy matches */
      new Config(8, 16, 32, 32, deflate_slow),
      /* 5 */
      new Config(8, 16, 128, 128, deflate_slow),
      /* 6 */
      new Config(8, 32, 128, 256, deflate_slow),
      /* 7 */
      new Config(32, 128, 258, 1024, deflate_slow),
      /* 8 */
      new Config(32, 258, 258, 4096, deflate_slow)
      /* 9 max compression */
    ];
    function lm_init(s) {
      s.window_size = 2 * s.w_size;
      zero(s.head);
      s.max_lazy_match = configuration_table[s.level].max_lazy;
      s.good_match = configuration_table[s.level].good_length;
      s.nice_match = configuration_table[s.level].nice_length;
      s.max_chain_length = configuration_table[s.level].max_chain;
      s.strstart = 0;
      s.block_start = 0;
      s.lookahead = 0;
      s.insert = 0;
      s.match_length = s.prev_length = MIN_MATCH - 1;
      s.match_available = 0;
      s.ins_h = 0;
    }
    function DeflateState() {
      this.strm = null;
      this.status = 0;
      this.pending_buf = null;
      this.pending_buf_size = 0;
      this.pending_out = 0;
      this.pending = 0;
      this.wrap = 0;
      this.gzhead = null;
      this.gzindex = 0;
      this.method = Z_DEFLATED;
      this.last_flush = -1;
      this.w_size = 0;
      this.w_bits = 0;
      this.w_mask = 0;
      this.window = null;
      this.window_size = 0;
      this.prev = null;
      this.head = null;
      this.ins_h = 0;
      this.hash_size = 0;
      this.hash_bits = 0;
      this.hash_mask = 0;
      this.hash_shift = 0;
      this.block_start = 0;
      this.match_length = 0;
      this.prev_match = 0;
      this.match_available = 0;
      this.strstart = 0;
      this.match_start = 0;
      this.lookahead = 0;
      this.prev_length = 0;
      this.max_chain_length = 0;
      this.max_lazy_match = 0;
      this.level = 0;
      this.strategy = 0;
      this.good_match = 0;
      this.nice_match = 0;
      this.dyn_ltree = new utils.Buf16(HEAP_SIZE * 2);
      this.dyn_dtree = new utils.Buf16((2 * D_CODES + 1) * 2);
      this.bl_tree = new utils.Buf16((2 * BL_CODES + 1) * 2);
      zero(this.dyn_ltree);
      zero(this.dyn_dtree);
      zero(this.bl_tree);
      this.l_desc = null;
      this.d_desc = null;
      this.bl_desc = null;
      this.bl_count = new utils.Buf16(MAX_BITS + 1);
      this.heap = new utils.Buf16(2 * L_CODES + 1);
      zero(this.heap);
      this.heap_len = 0;
      this.heap_max = 0;
      this.depth = new utils.Buf16(2 * L_CODES + 1);
      zero(this.depth);
      this.l_buf = 0;
      this.lit_bufsize = 0;
      this.last_lit = 0;
      this.d_buf = 0;
      this.opt_len = 0;
      this.static_len = 0;
      this.matches = 0;
      this.insert = 0;
      this.bi_buf = 0;
      this.bi_valid = 0;
    }
    function deflateResetKeep(strm) {
      var s;
      if (!strm || !strm.state) {
        return err(strm, Z_STREAM_ERROR);
      }
      strm.total_in = strm.total_out = 0;
      strm.data_type = Z_UNKNOWN;
      s = strm.state;
      s.pending = 0;
      s.pending_out = 0;
      if (s.wrap < 0) {
        s.wrap = -s.wrap;
      }
      s.status = s.wrap ? INIT_STATE : BUSY_STATE;
      strm.adler = s.wrap === 2 ? 0 : 1;
      s.last_flush = Z_NO_FLUSH;
      trees._tr_init(s);
      return Z_OK;
    }
    function deflateReset(strm) {
      var ret = deflateResetKeep(strm);
      if (ret === Z_OK) {
        lm_init(strm.state);
      }
      return ret;
    }
    function deflateSetHeader(strm, head) {
      if (!strm || !strm.state) {
        return Z_STREAM_ERROR;
      }
      if (strm.state.wrap !== 2) {
        return Z_STREAM_ERROR;
      }
      strm.state.gzhead = head;
      return Z_OK;
    }
    function deflateInit2(strm, level, method, windowBits, memLevel, strategy) {
      if (!strm) {
        return Z_STREAM_ERROR;
      }
      var wrap2 = 1;
      if (level === Z_DEFAULT_COMPRESSION) {
        level = 6;
      }
      if (windowBits < 0) {
        wrap2 = 0;
        windowBits = -windowBits;
      } else if (windowBits > 15) {
        wrap2 = 2;
        windowBits -= 16;
      }
      if (memLevel < 1 || memLevel > MAX_MEM_LEVEL || method !== Z_DEFLATED || windowBits < 8 || windowBits > 15 || level < 0 || level > 9 || strategy < 0 || strategy > Z_FIXED) {
        return err(strm, Z_STREAM_ERROR);
      }
      if (windowBits === 8) {
        windowBits = 9;
      }
      var s = new DeflateState();
      strm.state = s;
      s.strm = strm;
      s.wrap = wrap2;
      s.gzhead = null;
      s.w_bits = windowBits;
      s.w_size = 1 << s.w_bits;
      s.w_mask = s.w_size - 1;
      s.hash_bits = memLevel + 7;
      s.hash_size = 1 << s.hash_bits;
      s.hash_mask = s.hash_size - 1;
      s.hash_shift = ~~((s.hash_bits + MIN_MATCH - 1) / MIN_MATCH);
      s.window = new utils.Buf8(s.w_size * 2);
      s.head = new utils.Buf16(s.hash_size);
      s.prev = new utils.Buf16(s.w_size);
      s.lit_bufsize = 1 << memLevel + 6;
      s.pending_buf_size = s.lit_bufsize * 4;
      s.pending_buf = new utils.Buf8(s.pending_buf_size);
      s.d_buf = 1 * s.lit_bufsize;
      s.l_buf = (1 + 2) * s.lit_bufsize;
      s.level = level;
      s.strategy = strategy;
      s.method = method;
      return deflateReset(strm);
    }
    function deflateInit(strm, level) {
      return deflateInit2(strm, level, Z_DEFLATED, MAX_WBITS, DEF_MEM_LEVEL, Z_DEFAULT_STRATEGY);
    }
    function deflate(strm, flush) {
      var old_flush, s;
      var beg, val;
      if (!strm || !strm.state || flush > Z_BLOCK || flush < 0) {
        return strm ? err(strm, Z_STREAM_ERROR) : Z_STREAM_ERROR;
      }
      s = strm.state;
      if (!strm.output || !strm.input && strm.avail_in !== 0 || s.status === FINISH_STATE && flush !== Z_FINISH) {
        return err(strm, strm.avail_out === 0 ? Z_BUF_ERROR : Z_STREAM_ERROR);
      }
      s.strm = strm;
      old_flush = s.last_flush;
      s.last_flush = flush;
      if (s.status === INIT_STATE) {
        if (s.wrap === 2) {
          strm.adler = 0;
          put_byte(s, 31);
          put_byte(s, 139);
          put_byte(s, 8);
          if (!s.gzhead) {
            put_byte(s, 0);
            put_byte(s, 0);
            put_byte(s, 0);
            put_byte(s, 0);
            put_byte(s, 0);
            put_byte(s, s.level === 9 ? 2 : s.strategy >= Z_HUFFMAN_ONLY || s.level < 2 ? 4 : 0);
            put_byte(s, OS_CODE);
            s.status = BUSY_STATE;
          } else {
            put_byte(
              s,
              (s.gzhead.text ? 1 : 0) + (s.gzhead.hcrc ? 2 : 0) + (!s.gzhead.extra ? 0 : 4) + (!s.gzhead.name ? 0 : 8) + (!s.gzhead.comment ? 0 : 16)
            );
            put_byte(s, s.gzhead.time & 255);
            put_byte(s, s.gzhead.time >> 8 & 255);
            put_byte(s, s.gzhead.time >> 16 & 255);
            put_byte(s, s.gzhead.time >> 24 & 255);
            put_byte(s, s.level === 9 ? 2 : s.strategy >= Z_HUFFMAN_ONLY || s.level < 2 ? 4 : 0);
            put_byte(s, s.gzhead.os & 255);
            if (s.gzhead.extra && s.gzhead.extra.length) {
              put_byte(s, s.gzhead.extra.length & 255);
              put_byte(s, s.gzhead.extra.length >> 8 & 255);
            }
            if (s.gzhead.hcrc) {
              strm.adler = crc32(strm.adler, s.pending_buf, s.pending, 0);
            }
            s.gzindex = 0;
            s.status = EXTRA_STATE;
          }
        } else {
          var header = Z_DEFLATED + (s.w_bits - 8 << 4) << 8;
          var level_flags = -1;
          if (s.strategy >= Z_HUFFMAN_ONLY || s.level < 2) {
            level_flags = 0;
          } else if (s.level < 6) {
            level_flags = 1;
          } else if (s.level === 6) {
            level_flags = 2;
          } else {
            level_flags = 3;
          }
          header |= level_flags << 6;
          if (s.strstart !== 0) {
            header |= PRESET_DICT;
          }
          header += 31 - header % 31;
          s.status = BUSY_STATE;
          putShortMSB(s, header);
          if (s.strstart !== 0) {
            putShortMSB(s, strm.adler >>> 16);
            putShortMSB(s, strm.adler & 65535);
          }
          strm.adler = 1;
        }
      }
      if (s.status === EXTRA_STATE) {
        if (s.gzhead.extra) {
          beg = s.pending;
          while (s.gzindex < (s.gzhead.extra.length & 65535)) {
            if (s.pending === s.pending_buf_size) {
              if (s.gzhead.hcrc && s.pending > beg) {
                strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
              }
              flush_pending(strm);
              beg = s.pending;
              if (s.pending === s.pending_buf_size) {
                break;
              }
            }
            put_byte(s, s.gzhead.extra[s.gzindex] & 255);
            s.gzindex++;
          }
          if (s.gzhead.hcrc && s.pending > beg) {
            strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
          }
          if (s.gzindex === s.gzhead.extra.length) {
            s.gzindex = 0;
            s.status = NAME_STATE;
          }
        } else {
          s.status = NAME_STATE;
        }
      }
      if (s.status === NAME_STATE) {
        if (s.gzhead.name) {
          beg = s.pending;
          do {
            if (s.pending === s.pending_buf_size) {
              if (s.gzhead.hcrc && s.pending > beg) {
                strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
              }
              flush_pending(strm);
              beg = s.pending;
              if (s.pending === s.pending_buf_size) {
                val = 1;
                break;
              }
            }
            if (s.gzindex < s.gzhead.name.length) {
              val = s.gzhead.name.charCodeAt(s.gzindex++) & 255;
            } else {
              val = 0;
            }
            put_byte(s, val);
          } while (val !== 0);
          if (s.gzhead.hcrc && s.pending > beg) {
            strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
          }
          if (val === 0) {
            s.gzindex = 0;
            s.status = COMMENT_STATE;
          }
        } else {
          s.status = COMMENT_STATE;
        }
      }
      if (s.status === COMMENT_STATE) {
        if (s.gzhead.comment) {
          beg = s.pending;
          do {
            if (s.pending === s.pending_buf_size) {
              if (s.gzhead.hcrc && s.pending > beg) {
                strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
              }
              flush_pending(strm);
              beg = s.pending;
              if (s.pending === s.pending_buf_size) {
                val = 1;
                break;
              }
            }
            if (s.gzindex < s.gzhead.comment.length) {
              val = s.gzhead.comment.charCodeAt(s.gzindex++) & 255;
            } else {
              val = 0;
            }
            put_byte(s, val);
          } while (val !== 0);
          if (s.gzhead.hcrc && s.pending > beg) {
            strm.adler = crc32(strm.adler, s.pending_buf, s.pending - beg, beg);
          }
          if (val === 0) {
            s.status = HCRC_STATE;
          }
        } else {
          s.status = HCRC_STATE;
        }
      }
      if (s.status === HCRC_STATE) {
        if (s.gzhead.hcrc) {
          if (s.pending + 2 > s.pending_buf_size) {
            flush_pending(strm);
          }
          if (s.pending + 2 <= s.pending_buf_size) {
            put_byte(s, strm.adler & 255);
            put_byte(s, strm.adler >> 8 & 255);
            strm.adler = 0;
            s.status = BUSY_STATE;
          }
        } else {
          s.status = BUSY_STATE;
        }
      }
      if (s.pending !== 0) {
        flush_pending(strm);
        if (strm.avail_out === 0) {
          s.last_flush = -1;
          return Z_OK;
        }
      } else if (strm.avail_in === 0 && rank(flush) <= rank(old_flush) && flush !== Z_FINISH) {
        return err(strm, Z_BUF_ERROR);
      }
      if (s.status === FINISH_STATE && strm.avail_in !== 0) {
        return err(strm, Z_BUF_ERROR);
      }
      if (strm.avail_in !== 0 || s.lookahead !== 0 || flush !== Z_NO_FLUSH && s.status !== FINISH_STATE) {
        var bstate = s.strategy === Z_HUFFMAN_ONLY ? deflate_huff(s, flush) : s.strategy === Z_RLE ? deflate_rle(s, flush) : configuration_table[s.level].func(s, flush);
        if (bstate === BS_FINISH_STARTED || bstate === BS_FINISH_DONE) {
          s.status = FINISH_STATE;
        }
        if (bstate === BS_NEED_MORE || bstate === BS_FINISH_STARTED) {
          if (strm.avail_out === 0) {
            s.last_flush = -1;
          }
          return Z_OK;
        }
        if (bstate === BS_BLOCK_DONE) {
          if (flush === Z_PARTIAL_FLUSH) {
            trees._tr_align(s);
          } else if (flush !== Z_BLOCK) {
            trees._tr_stored_block(s, 0, 0, false);
            if (flush === Z_FULL_FLUSH) {
              zero(s.head);
              if (s.lookahead === 0) {
                s.strstart = 0;
                s.block_start = 0;
                s.insert = 0;
              }
            }
          }
          flush_pending(strm);
          if (strm.avail_out === 0) {
            s.last_flush = -1;
            return Z_OK;
          }
        }
      }
      if (flush !== Z_FINISH) {
        return Z_OK;
      }
      if (s.wrap <= 0) {
        return Z_STREAM_END;
      }
      if (s.wrap === 2) {
        put_byte(s, strm.adler & 255);
        put_byte(s, strm.adler >> 8 & 255);
        put_byte(s, strm.adler >> 16 & 255);
        put_byte(s, strm.adler >> 24 & 255);
        put_byte(s, strm.total_in & 255);
        put_byte(s, strm.total_in >> 8 & 255);
        put_byte(s, strm.total_in >> 16 & 255);
        put_byte(s, strm.total_in >> 24 & 255);
      } else {
        putShortMSB(s, strm.adler >>> 16);
        putShortMSB(s, strm.adler & 65535);
      }
      flush_pending(strm);
      if (s.wrap > 0) {
        s.wrap = -s.wrap;
      }
      return s.pending !== 0 ? Z_OK : Z_STREAM_END;
    }
    function deflateEnd(strm) {
      var status;
      if (!strm || !strm.state) {
        return Z_STREAM_ERROR;
      }
      status = strm.state.status;
      if (status !== INIT_STATE && status !== EXTRA_STATE && status !== NAME_STATE && status !== COMMENT_STATE && status !== HCRC_STATE && status !== BUSY_STATE && status !== FINISH_STATE) {
        return err(strm, Z_STREAM_ERROR);
      }
      strm.state = null;
      return status === BUSY_STATE ? err(strm, Z_DATA_ERROR) : Z_OK;
    }
    function deflateSetDictionary(strm, dictionary) {
      var dictLength = dictionary.length;
      var s;
      var str2, n;
      var wrap2;
      var avail;
      var next;
      var input;
      var tmpDict;
      if (!strm || !strm.state) {
        return Z_STREAM_ERROR;
      }
      s = strm.state;
      wrap2 = s.wrap;
      if (wrap2 === 2 || wrap2 === 1 && s.status !== INIT_STATE || s.lookahead) {
        return Z_STREAM_ERROR;
      }
      if (wrap2 === 1) {
        strm.adler = adler32(strm.adler, dictionary, dictLength, 0);
      }
      s.wrap = 0;
      if (dictLength >= s.w_size) {
        if (wrap2 === 0) {
          zero(s.head);
          s.strstart = 0;
          s.block_start = 0;
          s.insert = 0;
        }
        tmpDict = new utils.Buf8(s.w_size);
        utils.arraySet(tmpDict, dictionary, dictLength - s.w_size, s.w_size, 0);
        dictionary = tmpDict;
        dictLength = s.w_size;
      }
      avail = strm.avail_in;
      next = strm.next_in;
      input = strm.input;
      strm.avail_in = dictLength;
      strm.next_in = 0;
      strm.input = dictionary;
      fill_window(s);
      while (s.lookahead >= MIN_MATCH) {
        str2 = s.strstart;
        n = s.lookahead - (MIN_MATCH - 1);
        do {
          s.ins_h = (s.ins_h << s.hash_shift ^ s.window[str2 + MIN_MATCH - 1]) & s.hash_mask;
          s.prev[str2 & s.w_mask] = s.head[s.ins_h];
          s.head[s.ins_h] = str2;
          str2++;
        } while (--n);
        s.strstart = str2;
        s.lookahead = MIN_MATCH - 1;
        fill_window(s);
      }
      s.strstart += s.lookahead;
      s.block_start = s.strstart;
      s.insert = s.lookahead;
      s.lookahead = 0;
      s.match_length = s.prev_length = MIN_MATCH - 1;
      s.match_available = 0;
      strm.next_in = next;
      strm.input = input;
      strm.avail_in = avail;
      s.wrap = wrap2;
      return Z_OK;
    }
    exports2.deflateInit = deflateInit;
    exports2.deflateInit2 = deflateInit2;
    exports2.deflateReset = deflateReset;
    exports2.deflateResetKeep = deflateResetKeep;
    exports2.deflateSetHeader = deflateSetHeader;
    exports2.deflate = deflate;
    exports2.deflateEnd = deflateEnd;
    exports2.deflateSetDictionary = deflateSetDictionary;
    exports2.deflateInfo = "pako deflate (from Nodeca project)";
  }
});

// node_modules/pako/lib/utils/strings.js
var require_strings = __commonJS({
  "node_modules/pako/lib/utils/strings.js"(exports2) {
    "use strict";
    var utils = require_common();
    var STR_APPLY_OK = true;
    var STR_APPLY_UIA_OK = true;
    try {
      String.fromCharCode.apply(null, [0]);
    } catch (__) {
      STR_APPLY_OK = false;
    }
    try {
      String.fromCharCode.apply(null, new Uint8Array(1));
    } catch (__) {
      STR_APPLY_UIA_OK = false;
    }
    var _utf8len = new utils.Buf8(256);
    for (q = 0; q < 256; q++) {
      _utf8len[q] = q >= 252 ? 6 : q >= 248 ? 5 : q >= 240 ? 4 : q >= 224 ? 3 : q >= 192 ? 2 : 1;
    }
    var q;
    _utf8len[254] = _utf8len[254] = 1;
    exports2.string2buf = function(str2) {
      var buf, c, c2, m_pos, i, str_len = str2.length, buf_len = 0;
      for (m_pos = 0; m_pos < str_len; m_pos++) {
        c = str2.charCodeAt(m_pos);
        if ((c & 64512) === 55296 && m_pos + 1 < str_len) {
          c2 = str2.charCodeAt(m_pos + 1);
          if ((c2 & 64512) === 56320) {
            c = 65536 + (c - 55296 << 10) + (c2 - 56320);
            m_pos++;
          }
        }
        buf_len += c < 128 ? 1 : c < 2048 ? 2 : c < 65536 ? 3 : 4;
      }
      buf = new utils.Buf8(buf_len);
      for (i = 0, m_pos = 0; i < buf_len; m_pos++) {
        c = str2.charCodeAt(m_pos);
        if ((c & 64512) === 55296 && m_pos + 1 < str_len) {
          c2 = str2.charCodeAt(m_pos + 1);
          if ((c2 & 64512) === 56320) {
            c = 65536 + (c - 55296 << 10) + (c2 - 56320);
            m_pos++;
          }
        }
        if (c < 128) {
          buf[i++] = c;
        } else if (c < 2048) {
          buf[i++] = 192 | c >>> 6;
          buf[i++] = 128 | c & 63;
        } else if (c < 65536) {
          buf[i++] = 224 | c >>> 12;
          buf[i++] = 128 | c >>> 6 & 63;
          buf[i++] = 128 | c & 63;
        } else {
          buf[i++] = 240 | c >>> 18;
          buf[i++] = 128 | c >>> 12 & 63;
          buf[i++] = 128 | c >>> 6 & 63;
          buf[i++] = 128 | c & 63;
        }
      }
      return buf;
    };
    function buf2binstring(buf, len) {
      if (len < 65534) {
        if (buf.subarray && STR_APPLY_UIA_OK || !buf.subarray && STR_APPLY_OK) {
          return String.fromCharCode.apply(null, utils.shrinkBuf(buf, len));
        }
      }
      var result = "";
      for (var i = 0; i < len; i++) {
        result += String.fromCharCode(buf[i]);
      }
      return result;
    }
    exports2.buf2binstring = function(buf) {
      return buf2binstring(buf, buf.length);
    };
    exports2.binstring2buf = function(str2) {
      var buf = new utils.Buf8(str2.length);
      for (var i = 0, len = buf.length; i < len; i++) {
        buf[i] = str2.charCodeAt(i);
      }
      return buf;
    };
    exports2.buf2string = function(buf, max) {
      var i, out, c, c_len;
      var len = max || buf.length;
      var utf16buf = new Array(len * 2);
      for (out = 0, i = 0; i < len; ) {
        c = buf[i++];
        if (c < 128) {
          utf16buf[out++] = c;
          continue;
        }
        c_len = _utf8len[c];
        if (c_len > 4) {
          utf16buf[out++] = 65533;
          i += c_len - 1;
          continue;
        }
        c &= c_len === 2 ? 31 : c_len === 3 ? 15 : 7;
        while (c_len > 1 && i < len) {
          c = c << 6 | buf[i++] & 63;
          c_len--;
        }
        if (c_len > 1) {
          utf16buf[out++] = 65533;
          continue;
        }
        if (c < 65536) {
          utf16buf[out++] = c;
        } else {
          c -= 65536;
          utf16buf[out++] = 55296 | c >> 10 & 1023;
          utf16buf[out++] = 56320 | c & 1023;
        }
      }
      return buf2binstring(utf16buf, out);
    };
    exports2.utf8border = function(buf, max) {
      var pos;
      max = max || buf.length;
      if (max > buf.length) {
        max = buf.length;
      }
      pos = max - 1;
      while (pos >= 0 && (buf[pos] & 192) === 128) {
        pos--;
      }
      if (pos < 0) {
        return max;
      }
      if (pos === 0) {
        return max;
      }
      return pos + _utf8len[buf[pos]] > max ? pos : max;
    };
  }
});

// node_modules/pako/lib/zlib/zstream.js
var require_zstream = __commonJS({
  "node_modules/pako/lib/zlib/zstream.js"(exports2, module2) {
    "use strict";
    function ZStream() {
      this.input = null;
      this.next_in = 0;
      this.avail_in = 0;
      this.total_in = 0;
      this.output = null;
      this.next_out = 0;
      this.avail_out = 0;
      this.total_out = 0;
      this.msg = "";
      this.state = null;
      this.data_type = 2;
      this.adler = 0;
    }
    module2.exports = ZStream;
  }
});

// node_modules/pako/lib/deflate.js
var require_deflate2 = __commonJS({
  "node_modules/pako/lib/deflate.js"(exports2) {
    "use strict";
    var zlib_deflate = require_deflate();
    var utils = require_common();
    var strings = require_strings();
    var msg = require_messages();
    var ZStream = require_zstream();
    var toString = Object.prototype.toString;
    var Z_NO_FLUSH = 0;
    var Z_FINISH = 4;
    var Z_OK = 0;
    var Z_STREAM_END = 1;
    var Z_SYNC_FLUSH = 2;
    var Z_DEFAULT_COMPRESSION = -1;
    var Z_DEFAULT_STRATEGY = 0;
    var Z_DEFLATED = 8;
    function Deflate(options2) {
      if (!(this instanceof Deflate)) return new Deflate(options2);
      this.options = utils.assign({
        level: Z_DEFAULT_COMPRESSION,
        method: Z_DEFLATED,
        chunkSize: 16384,
        windowBits: 15,
        memLevel: 8,
        strategy: Z_DEFAULT_STRATEGY,
        to: ""
      }, options2 || {});
      var opt = this.options;
      if (opt.raw && opt.windowBits > 0) {
        opt.windowBits = -opt.windowBits;
      } else if (opt.gzip && opt.windowBits > 0 && opt.windowBits < 16) {
        opt.windowBits += 16;
      }
      this.err = 0;
      this.msg = "";
      this.ended = false;
      this.chunks = [];
      this.strm = new ZStream();
      this.strm.avail_out = 0;
      var status = zlib_deflate.deflateInit2(
        this.strm,
        opt.level,
        opt.method,
        opt.windowBits,
        opt.memLevel,
        opt.strategy
      );
      if (status !== Z_OK) {
        throw new Error(msg[status]);
      }
      if (opt.header) {
        zlib_deflate.deflateSetHeader(this.strm, opt.header);
      }
      if (opt.dictionary) {
        var dict;
        if (typeof opt.dictionary === "string") {
          dict = strings.string2buf(opt.dictionary);
        } else if (toString.call(opt.dictionary) === "[object ArrayBuffer]") {
          dict = new Uint8Array(opt.dictionary);
        } else {
          dict = opt.dictionary;
        }
        status = zlib_deflate.deflateSetDictionary(this.strm, dict);
        if (status !== Z_OK) {
          throw new Error(msg[status]);
        }
        this._dict_set = true;
      }
    }
    Deflate.prototype.push = function(data, mode) {
      var strm = this.strm;
      var chunkSize = this.options.chunkSize;
      var status, _mode;
      if (this.ended) {
        return false;
      }
      _mode = mode === ~~mode ? mode : mode === true ? Z_FINISH : Z_NO_FLUSH;
      if (typeof data === "string") {
        strm.input = strings.string2buf(data);
      } else if (toString.call(data) === "[object ArrayBuffer]") {
        strm.input = new Uint8Array(data);
      } else {
        strm.input = data;
      }
      strm.next_in = 0;
      strm.avail_in = strm.input.length;
      do {
        if (strm.avail_out === 0) {
          strm.output = new utils.Buf8(chunkSize);
          strm.next_out = 0;
          strm.avail_out = chunkSize;
        }
        status = zlib_deflate.deflate(strm, _mode);
        if (status !== Z_STREAM_END && status !== Z_OK) {
          this.onEnd(status);
          this.ended = true;
          return false;
        }
        if (strm.avail_out === 0 || strm.avail_in === 0 && (_mode === Z_FINISH || _mode === Z_SYNC_FLUSH)) {
          if (this.options.to === "string") {
            this.onData(strings.buf2binstring(utils.shrinkBuf(strm.output, strm.next_out)));
          } else {
            this.onData(utils.shrinkBuf(strm.output, strm.next_out));
          }
        }
      } while ((strm.avail_in > 0 || strm.avail_out === 0) && status !== Z_STREAM_END);
      if (_mode === Z_FINISH) {
        status = zlib_deflate.deflateEnd(this.strm);
        this.onEnd(status);
        this.ended = true;
        return status === Z_OK;
      }
      if (_mode === Z_SYNC_FLUSH) {
        this.onEnd(Z_OK);
        strm.avail_out = 0;
        return true;
      }
      return true;
    };
    Deflate.prototype.onData = function(chunk) {
      this.chunks.push(chunk);
    };
    Deflate.prototype.onEnd = function(status) {
      if (status === Z_OK) {
        if (this.options.to === "string") {
          this.result = this.chunks.join("");
        } else {
          this.result = utils.flattenChunks(this.chunks);
        }
      }
      this.chunks = [];
      this.err = status;
      this.msg = this.strm.msg;
    };
    function deflate(input, options2) {
      var deflator = new Deflate(options2);
      deflator.push(input, true);
      if (deflator.err) {
        throw deflator.msg || msg[deflator.err];
      }
      return deflator.result;
    }
    function deflateRaw(input, options2) {
      options2 = options2 || {};
      options2.raw = true;
      return deflate(input, options2);
    }
    function gzip(input, options2) {
      options2 = options2 || {};
      options2.gzip = true;
      return deflate(input, options2);
    }
    exports2.Deflate = Deflate;
    exports2.deflate = deflate;
    exports2.deflateRaw = deflateRaw;
    exports2.gzip = gzip;
  }
});

// node_modules/pako/lib/zlib/inffast.js
var require_inffast = __commonJS({
  "node_modules/pako/lib/zlib/inffast.js"(exports2, module2) {
    "use strict";
    var BAD = 30;
    var TYPE = 12;
    module2.exports = function inflate_fast(strm, start) {
      var state2;
      var _in;
      var last;
      var _out;
      var beg;
      var end;
      var dmax;
      var wsize;
      var whave;
      var wnext;
      var s_window;
      var hold;
      var bits;
      var lcode;
      var dcode;
      var lmask;
      var dmask;
      var here;
      var op;
      var len;
      var dist;
      var from;
      var from_source;
      var input, output;
      state2 = strm.state;
      _in = strm.next_in;
      input = strm.input;
      last = _in + (strm.avail_in - 5);
      _out = strm.next_out;
      output = strm.output;
      beg = _out - (start - strm.avail_out);
      end = _out + (strm.avail_out - 257);
      dmax = state2.dmax;
      wsize = state2.wsize;
      whave = state2.whave;
      wnext = state2.wnext;
      s_window = state2.window;
      hold = state2.hold;
      bits = state2.bits;
      lcode = state2.lencode;
      dcode = state2.distcode;
      lmask = (1 << state2.lenbits) - 1;
      dmask = (1 << state2.distbits) - 1;
      top:
        do {
          if (bits < 15) {
            hold += input[_in++] << bits;
            bits += 8;
            hold += input[_in++] << bits;
            bits += 8;
          }
          here = lcode[hold & lmask];
          dolen:
            for (; ; ) {
              op = here >>> 24;
              hold >>>= op;
              bits -= op;
              op = here >>> 16 & 255;
              if (op === 0) {
                output[_out++] = here & 65535;
              } else if (op & 16) {
                len = here & 65535;
                op &= 15;
                if (op) {
                  if (bits < op) {
                    hold += input[_in++] << bits;
                    bits += 8;
                  }
                  len += hold & (1 << op) - 1;
                  hold >>>= op;
                  bits -= op;
                }
                if (bits < 15) {
                  hold += input[_in++] << bits;
                  bits += 8;
                  hold += input[_in++] << bits;
                  bits += 8;
                }
                here = dcode[hold & dmask];
                dodist:
                  for (; ; ) {
                    op = here >>> 24;
                    hold >>>= op;
                    bits -= op;
                    op = here >>> 16 & 255;
                    if (op & 16) {
                      dist = here & 65535;
                      op &= 15;
                      if (bits < op) {
                        hold += input[_in++] << bits;
                        bits += 8;
                        if (bits < op) {
                          hold += input[_in++] << bits;
                          bits += 8;
                        }
                      }
                      dist += hold & (1 << op) - 1;
                      if (dist > dmax) {
                        strm.msg = "invalid distance too far back";
                        state2.mode = BAD;
                        break top;
                      }
                      hold >>>= op;
                      bits -= op;
                      op = _out - beg;
                      if (dist > op) {
                        op = dist - op;
                        if (op > whave) {
                          if (state2.sane) {
                            strm.msg = "invalid distance too far back";
                            state2.mode = BAD;
                            break top;
                          }
                        }
                        from = 0;
                        from_source = s_window;
                        if (wnext === 0) {
                          from += wsize - op;
                          if (op < len) {
                            len -= op;
                            do {
                              output[_out++] = s_window[from++];
                            } while (--op);
                            from = _out - dist;
                            from_source = output;
                          }
                        } else if (wnext < op) {
                          from += wsize + wnext - op;
                          op -= wnext;
                          if (op < len) {
                            len -= op;
                            do {
                              output[_out++] = s_window[from++];
                            } while (--op);
                            from = 0;
                            if (wnext < len) {
                              op = wnext;
                              len -= op;
                              do {
                                output[_out++] = s_window[from++];
                              } while (--op);
                              from = _out - dist;
                              from_source = output;
                            }
                          }
                        } else {
                          from += wnext - op;
                          if (op < len) {
                            len -= op;
                            do {
                              output[_out++] = s_window[from++];
                            } while (--op);
                            from = _out - dist;
                            from_source = output;
                          }
                        }
                        while (len > 2) {
                          output[_out++] = from_source[from++];
                          output[_out++] = from_source[from++];
                          output[_out++] = from_source[from++];
                          len -= 3;
                        }
                        if (len) {
                          output[_out++] = from_source[from++];
                          if (len > 1) {
                            output[_out++] = from_source[from++];
                          }
                        }
                      } else {
                        from = _out - dist;
                        do {
                          output[_out++] = output[from++];
                          output[_out++] = output[from++];
                          output[_out++] = output[from++];
                          len -= 3;
                        } while (len > 2);
                        if (len) {
                          output[_out++] = output[from++];
                          if (len > 1) {
                            output[_out++] = output[from++];
                          }
                        }
                      }
                    } else if ((op & 64) === 0) {
                      here = dcode[(here & 65535) + (hold & (1 << op) - 1)];
                      continue dodist;
                    } else {
                      strm.msg = "invalid distance code";
                      state2.mode = BAD;
                      break top;
                    }
                    break;
                  }
              } else if ((op & 64) === 0) {
                here = lcode[(here & 65535) + (hold & (1 << op) - 1)];
                continue dolen;
              } else if (op & 32) {
                state2.mode = TYPE;
                break top;
              } else {
                strm.msg = "invalid literal/length code";
                state2.mode = BAD;
                break top;
              }
              break;
            }
        } while (_in < last && _out < end);
      len = bits >> 3;
      _in -= len;
      bits -= len << 3;
      hold &= (1 << bits) - 1;
      strm.next_in = _in;
      strm.next_out = _out;
      strm.avail_in = _in < last ? 5 + (last - _in) : 5 - (_in - last);
      strm.avail_out = _out < end ? 257 + (end - _out) : 257 - (_out - end);
      state2.hold = hold;
      state2.bits = bits;
      return;
    };
  }
});

// node_modules/pako/lib/zlib/inftrees.js
var require_inftrees = __commonJS({
  "node_modules/pako/lib/zlib/inftrees.js"(exports2, module2) {
    "use strict";
    var utils = require_common();
    var MAXBITS = 15;
    var ENOUGH_LENS = 852;
    var ENOUGH_DISTS = 592;
    var CODES = 0;
    var LENS = 1;
    var DISTS = 2;
    var lbase = [
      /* Length codes 257..285 base */
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      13,
      15,
      17,
      19,
      23,
      27,
      31,
      35,
      43,
      51,
      59,
      67,
      83,
      99,
      115,
      131,
      163,
      195,
      227,
      258,
      0,
      0
    ];
    var lext = [
      /* Length codes 257..285 extra */
      16,
      16,
      16,
      16,
      16,
      16,
      16,
      16,
      17,
      17,
      17,
      17,
      18,
      18,
      18,
      18,
      19,
      19,
      19,
      19,
      20,
      20,
      20,
      20,
      21,
      21,
      21,
      21,
      16,
      72,
      78
    ];
    var dbase = [
      /* Distance codes 0..29 base */
      1,
      2,
      3,
      4,
      5,
      7,
      9,
      13,
      17,
      25,
      33,
      49,
      65,
      97,
      129,
      193,
      257,
      385,
      513,
      769,
      1025,
      1537,
      2049,
      3073,
      4097,
      6145,
      8193,
      12289,
      16385,
      24577,
      0,
      0
    ];
    var dext = [
      /* Distance codes 0..29 extra */
      16,
      16,
      16,
      16,
      17,
      17,
      18,
      18,
      19,
      19,
      20,
      20,
      21,
      21,
      22,
      22,
      23,
      23,
      24,
      24,
      25,
      25,
      26,
      26,
      27,
      27,
      28,
      28,
      29,
      29,
      64,
      64
    ];
    module2.exports = function inflate_table(type, lens, lens_index, codes2, table, table_index, work, opts) {
      var bits = opts.bits;
      var len = 0;
      var sym = 0;
      var min = 0, max = 0;
      var root = 0;
      var curr = 0;
      var drop = 0;
      var left = 0;
      var used = 0;
      var huff = 0;
      var incr;
      var fill;
      var low;
      var mask;
      var next;
      var base2 = null;
      var base_index = 0;
      var end;
      var count = new utils.Buf16(MAXBITS + 1);
      var offs = new utils.Buf16(MAXBITS + 1);
      var extra = null;
      var extra_index = 0;
      var here_bits, here_op, here_val;
      for (len = 0; len <= MAXBITS; len++) {
        count[len] = 0;
      }
      for (sym = 0; sym < codes2; sym++) {
        count[lens[lens_index + sym]]++;
      }
      root = bits;
      for (max = MAXBITS; max >= 1; max--) {
        if (count[max] !== 0) {
          break;
        }
      }
      if (root > max) {
        root = max;
      }
      if (max === 0) {
        table[table_index++] = 1 << 24 | 64 << 16 | 0;
        table[table_index++] = 1 << 24 | 64 << 16 | 0;
        opts.bits = 1;
        return 0;
      }
      for (min = 1; min < max; min++) {
        if (count[min] !== 0) {
          break;
        }
      }
      if (root < min) {
        root = min;
      }
      left = 1;
      for (len = 1; len <= MAXBITS; len++) {
        left <<= 1;
        left -= count[len];
        if (left < 0) {
          return -1;
        }
      }
      if (left > 0 && (type === CODES || max !== 1)) {
        return -1;
      }
      offs[1] = 0;
      for (len = 1; len < MAXBITS; len++) {
        offs[len + 1] = offs[len] + count[len];
      }
      for (sym = 0; sym < codes2; sym++) {
        if (lens[lens_index + sym] !== 0) {
          work[offs[lens[lens_index + sym]]++] = sym;
        }
      }
      if (type === CODES) {
        base2 = extra = work;
        end = 19;
      } else if (type === LENS) {
        base2 = lbase;
        base_index -= 257;
        extra = lext;
        extra_index -= 257;
        end = 256;
      } else {
        base2 = dbase;
        extra = dext;
        end = -1;
      }
      huff = 0;
      sym = 0;
      len = min;
      next = table_index;
      curr = root;
      drop = 0;
      low = -1;
      used = 1 << root;
      mask = used - 1;
      if (type === LENS && used > ENOUGH_LENS || type === DISTS && used > ENOUGH_DISTS) {
        return 1;
      }
      for (; ; ) {
        here_bits = len - drop;
        if (work[sym] < end) {
          here_op = 0;
          here_val = work[sym];
        } else if (work[sym] > end) {
          here_op = extra[extra_index + work[sym]];
          here_val = base2[base_index + work[sym]];
        } else {
          here_op = 32 + 64;
          here_val = 0;
        }
        incr = 1 << len - drop;
        fill = 1 << curr;
        min = fill;
        do {
          fill -= incr;
          table[next + (huff >> drop) + fill] = here_bits << 24 | here_op << 16 | here_val | 0;
        } while (fill !== 0);
        incr = 1 << len - 1;
        while (huff & incr) {
          incr >>= 1;
        }
        if (incr !== 0) {
          huff &= incr - 1;
          huff += incr;
        } else {
          huff = 0;
        }
        sym++;
        if (--count[len] === 0) {
          if (len === max) {
            break;
          }
          len = lens[lens_index + work[sym]];
        }
        if (len > root && (huff & mask) !== low) {
          if (drop === 0) {
            drop = root;
          }
          next += min;
          curr = len - drop;
          left = 1 << curr;
          while (curr + drop < max) {
            left -= count[curr + drop];
            if (left <= 0) {
              break;
            }
            curr++;
            left <<= 1;
          }
          used += 1 << curr;
          if (type === LENS && used > ENOUGH_LENS || type === DISTS && used > ENOUGH_DISTS) {
            return 1;
          }
          low = huff & mask;
          table[low] = root << 24 | curr << 16 | next - table_index | 0;
        }
      }
      if (huff !== 0) {
        table[next + huff] = len - drop << 24 | 64 << 16 | 0;
      }
      opts.bits = root;
      return 0;
    };
  }
});

// node_modules/pako/lib/zlib/inflate.js
var require_inflate = __commonJS({
  "node_modules/pako/lib/zlib/inflate.js"(exports2) {
    "use strict";
    var utils = require_common();
    var adler32 = require_adler32();
    var crc32 = require_crc322();
    var inflate_fast = require_inffast();
    var inflate_table = require_inftrees();
    var CODES = 0;
    var LENS = 1;
    var DISTS = 2;
    var Z_FINISH = 4;
    var Z_BLOCK = 5;
    var Z_TREES = 6;
    var Z_OK = 0;
    var Z_STREAM_END = 1;
    var Z_NEED_DICT = 2;
    var Z_STREAM_ERROR = -2;
    var Z_DATA_ERROR = -3;
    var Z_MEM_ERROR = -4;
    var Z_BUF_ERROR = -5;
    var Z_DEFLATED = 8;
    var HEAD = 1;
    var FLAGS = 2;
    var TIME = 3;
    var OS = 4;
    var EXLEN = 5;
    var EXTRA = 6;
    var NAME = 7;
    var COMMENT = 8;
    var HCRC = 9;
    var DICTID = 10;
    var DICT = 11;
    var TYPE = 12;
    var TYPEDO = 13;
    var STORED = 14;
    var COPY_ = 15;
    var COPY = 16;
    var TABLE = 17;
    var LENLENS = 18;
    var CODELENS = 19;
    var LEN_ = 20;
    var LEN = 21;
    var LENEXT = 22;
    var DIST = 23;
    var DISTEXT = 24;
    var MATCH = 25;
    var LIT = 26;
    var CHECK = 27;
    var LENGTH = 28;
    var DONE = 29;
    var BAD = 30;
    var MEM = 31;
    var SYNC = 32;
    var ENOUGH_LENS = 852;
    var ENOUGH_DISTS = 592;
    var MAX_WBITS = 15;
    var DEF_WBITS = MAX_WBITS;
    function zswap32(q) {
      return (q >>> 24 & 255) + (q >>> 8 & 65280) + ((q & 65280) << 8) + ((q & 255) << 24);
    }
    function InflateState() {
      this.mode = 0;
      this.last = false;
      this.wrap = 0;
      this.havedict = false;
      this.flags = 0;
      this.dmax = 0;
      this.check = 0;
      this.total = 0;
      this.head = null;
      this.wbits = 0;
      this.wsize = 0;
      this.whave = 0;
      this.wnext = 0;
      this.window = null;
      this.hold = 0;
      this.bits = 0;
      this.length = 0;
      this.offset = 0;
      this.extra = 0;
      this.lencode = null;
      this.distcode = null;
      this.lenbits = 0;
      this.distbits = 0;
      this.ncode = 0;
      this.nlen = 0;
      this.ndist = 0;
      this.have = 0;
      this.next = null;
      this.lens = new utils.Buf16(320);
      this.work = new utils.Buf16(288);
      this.lendyn = null;
      this.distdyn = null;
      this.sane = 0;
      this.back = 0;
      this.was = 0;
    }
    function inflateResetKeep(strm) {
      var state2;
      if (!strm || !strm.state) {
        return Z_STREAM_ERROR;
      }
      state2 = strm.state;
      strm.total_in = strm.total_out = state2.total = 0;
      strm.msg = "";
      if (state2.wrap) {
        strm.adler = state2.wrap & 1;
      }
      state2.mode = HEAD;
      state2.last = 0;
      state2.havedict = 0;
      state2.dmax = 32768;
      state2.head = null;
      state2.hold = 0;
      state2.bits = 0;
      state2.lencode = state2.lendyn = new utils.Buf32(ENOUGH_LENS);
      state2.distcode = state2.distdyn = new utils.Buf32(ENOUGH_DISTS);
      state2.sane = 1;
      state2.back = -1;
      return Z_OK;
    }
    function inflateReset(strm) {
      var state2;
      if (!strm || !strm.state) {
        return Z_STREAM_ERROR;
      }
      state2 = strm.state;
      state2.wsize = 0;
      state2.whave = 0;
      state2.wnext = 0;
      return inflateResetKeep(strm);
    }
    function inflateReset2(strm, windowBits) {
      var wrap2;
      var state2;
      if (!strm || !strm.state) {
        return Z_STREAM_ERROR;
      }
      state2 = strm.state;
      if (windowBits < 0) {
        wrap2 = 0;
        windowBits = -windowBits;
      } else {
        wrap2 = (windowBits >> 4) + 1;
        if (windowBits < 48) {
          windowBits &= 15;
        }
      }
      if (windowBits && (windowBits < 8 || windowBits > 15)) {
        return Z_STREAM_ERROR;
      }
      if (state2.window !== null && state2.wbits !== windowBits) {
        state2.window = null;
      }
      state2.wrap = wrap2;
      state2.wbits = windowBits;
      return inflateReset(strm);
    }
    function inflateInit2(strm, windowBits) {
      var ret;
      var state2;
      if (!strm) {
        return Z_STREAM_ERROR;
      }
      state2 = new InflateState();
      strm.state = state2;
      state2.window = null;
      ret = inflateReset2(strm, windowBits);
      if (ret !== Z_OK) {
        strm.state = null;
      }
      return ret;
    }
    function inflateInit(strm) {
      return inflateInit2(strm, DEF_WBITS);
    }
    var virgin = true;
    var lenfix;
    var distfix;
    function fixedtables(state2) {
      if (virgin) {
        var sym;
        lenfix = new utils.Buf32(512);
        distfix = new utils.Buf32(32);
        sym = 0;
        while (sym < 144) {
          state2.lens[sym++] = 8;
        }
        while (sym < 256) {
          state2.lens[sym++] = 9;
        }
        while (sym < 280) {
          state2.lens[sym++] = 7;
        }
        while (sym < 288) {
          state2.lens[sym++] = 8;
        }
        inflate_table(LENS, state2.lens, 0, 288, lenfix, 0, state2.work, { bits: 9 });
        sym = 0;
        while (sym < 32) {
          state2.lens[sym++] = 5;
        }
        inflate_table(DISTS, state2.lens, 0, 32, distfix, 0, state2.work, { bits: 5 });
        virgin = false;
      }
      state2.lencode = lenfix;
      state2.lenbits = 9;
      state2.distcode = distfix;
      state2.distbits = 5;
    }
    function updatewindow(strm, src, end, copy) {
      var dist;
      var state2 = strm.state;
      if (state2.window === null) {
        state2.wsize = 1 << state2.wbits;
        state2.wnext = 0;
        state2.whave = 0;
        state2.window = new utils.Buf8(state2.wsize);
      }
      if (copy >= state2.wsize) {
        utils.arraySet(state2.window, src, end - state2.wsize, state2.wsize, 0);
        state2.wnext = 0;
        state2.whave = state2.wsize;
      } else {
        dist = state2.wsize - state2.wnext;
        if (dist > copy) {
          dist = copy;
        }
        utils.arraySet(state2.window, src, end - copy, dist, state2.wnext);
        copy -= dist;
        if (copy) {
          utils.arraySet(state2.window, src, end - copy, copy, 0);
          state2.wnext = copy;
          state2.whave = state2.wsize;
        } else {
          state2.wnext += dist;
          if (state2.wnext === state2.wsize) {
            state2.wnext = 0;
          }
          if (state2.whave < state2.wsize) {
            state2.whave += dist;
          }
        }
      }
      return 0;
    }
    function inflate(strm, flush) {
      var state2;
      var input, output;
      var next;
      var put;
      var have, left;
      var hold;
      var bits;
      var _in, _out;
      var copy;
      var from;
      var from_source;
      var here = 0;
      var here_bits, here_op, here_val;
      var last_bits, last_op, last_val;
      var len;
      var ret;
      var hbuf = new utils.Buf8(4);
      var opts;
      var n;
      var order = (
        /* permutation of code lengths */
        [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]
      );
      if (!strm || !strm.state || !strm.output || !strm.input && strm.avail_in !== 0) {
        return Z_STREAM_ERROR;
      }
      state2 = strm.state;
      if (state2.mode === TYPE) {
        state2.mode = TYPEDO;
      }
      put = strm.next_out;
      output = strm.output;
      left = strm.avail_out;
      next = strm.next_in;
      input = strm.input;
      have = strm.avail_in;
      hold = state2.hold;
      bits = state2.bits;
      _in = have;
      _out = left;
      ret = Z_OK;
      inf_leave:
        for (; ; ) {
          switch (state2.mode) {
            case HEAD:
              if (state2.wrap === 0) {
                state2.mode = TYPEDO;
                break;
              }
              while (bits < 16) {
                if (have === 0) {
                  break inf_leave;
                }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              if (state2.wrap & 2 && hold === 35615) {
                state2.check = 0;
                hbuf[0] = hold & 255;
                hbuf[1] = hold >>> 8 & 255;
                state2.check = crc32(state2.check, hbuf, 2, 0);
                hold = 0;
                bits = 0;
                state2.mode = FLAGS;
                break;
              }
              state2.flags = 0;
              if (state2.head) {
                state2.head.done = false;
              }
              if (!(state2.wrap & 1) || /* check if zlib header allowed */
              (((hold & 255) << 8) + (hold >> 8)) % 31) {
                strm.msg = "incorrect header check";
                state2.mode = BAD;
                break;
              }
              if ((hold & 15) !== Z_DEFLATED) {
                strm.msg = "unknown compression method";
                state2.mode = BAD;
                break;
              }
              hold >>>= 4;
              bits -= 4;
              len = (hold & 15) + 8;
              if (state2.wbits === 0) {
                state2.wbits = len;
              } else if (len > state2.wbits) {
                strm.msg = "invalid window size";
                state2.mode = BAD;
                break;
              }
              state2.dmax = 1 << len;
              strm.adler = state2.check = 1;
              state2.mode = hold & 512 ? DICTID : TYPE;
              hold = 0;
              bits = 0;
              break;
            case FLAGS:
              while (bits < 16) {
                if (have === 0) {
                  break inf_leave;
                }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              state2.flags = hold;
              if ((state2.flags & 255) !== Z_DEFLATED) {
                strm.msg = "unknown compression method";
                state2.mode = BAD;
                break;
              }
              if (state2.flags & 57344) {
                strm.msg = "unknown header flags set";
                state2.mode = BAD;
                break;
              }
              if (state2.head) {
                state2.head.text = hold >> 8 & 1;
              }
              if (state2.flags & 512) {
                hbuf[0] = hold & 255;
                hbuf[1] = hold >>> 8 & 255;
                state2.check = crc32(state2.check, hbuf, 2, 0);
              }
              hold = 0;
              bits = 0;
              state2.mode = TIME;
            /* falls through */
            case TIME:
              while (bits < 32) {
                if (have === 0) {
                  break inf_leave;
                }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              if (state2.head) {
                state2.head.time = hold;
              }
              if (state2.flags & 512) {
                hbuf[0] = hold & 255;
                hbuf[1] = hold >>> 8 & 255;
                hbuf[2] = hold >>> 16 & 255;
                hbuf[3] = hold >>> 24 & 255;
                state2.check = crc32(state2.check, hbuf, 4, 0);
              }
              hold = 0;
              bits = 0;
              state2.mode = OS;
            /* falls through */
            case OS:
              while (bits < 16) {
                if (have === 0) {
                  break inf_leave;
                }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              if (state2.head) {
                state2.head.xflags = hold & 255;
                state2.head.os = hold >> 8;
              }
              if (state2.flags & 512) {
                hbuf[0] = hold & 255;
                hbuf[1] = hold >>> 8 & 255;
                state2.check = crc32(state2.check, hbuf, 2, 0);
              }
              hold = 0;
              bits = 0;
              state2.mode = EXLEN;
            /* falls through */
            case EXLEN:
              if (state2.flags & 1024) {
                while (bits < 16) {
                  if (have === 0) {
                    break inf_leave;
                  }
                  have--;
                  hold += input[next++] << bits;
                  bits += 8;
                }
                state2.length = hold;
                if (state2.head) {
                  state2.head.extra_len = hold;
                }
                if (state2.flags & 512) {
                  hbuf[0] = hold & 255;
                  hbuf[1] = hold >>> 8 & 255;
                  state2.check = crc32(state2.check, hbuf, 2, 0);
                }
                hold = 0;
                bits = 0;
              } else if (state2.head) {
                state2.head.extra = null;
              }
              state2.mode = EXTRA;
            /* falls through */
            case EXTRA:
              if (state2.flags & 1024) {
                copy = state2.length;
                if (copy > have) {
                  copy = have;
                }
                if (copy) {
                  if (state2.head) {
                    len = state2.head.extra_len - state2.length;
                    if (!state2.head.extra) {
                      state2.head.extra = new Array(state2.head.extra_len);
                    }
                    utils.arraySet(
                      state2.head.extra,
                      input,
                      next,
                      // extra field is limited to 65536 bytes
                      // - no need for additional size check
                      copy,
                      /*len + copy > state.head.extra_max - len ? state.head.extra_max : copy,*/
                      len
                    );
                  }
                  if (state2.flags & 512) {
                    state2.check = crc32(state2.check, input, copy, next);
                  }
                  have -= copy;
                  next += copy;
                  state2.length -= copy;
                }
                if (state2.length) {
                  break inf_leave;
                }
              }
              state2.length = 0;
              state2.mode = NAME;
            /* falls through */
            case NAME:
              if (state2.flags & 2048) {
                if (have === 0) {
                  break inf_leave;
                }
                copy = 0;
                do {
                  len = input[next + copy++];
                  if (state2.head && len && state2.length < 65536) {
                    state2.head.name += String.fromCharCode(len);
                  }
                } while (len && copy < have);
                if (state2.flags & 512) {
                  state2.check = crc32(state2.check, input, copy, next);
                }
                have -= copy;
                next += copy;
                if (len) {
                  break inf_leave;
                }
              } else if (state2.head) {
                state2.head.name = null;
              }
              state2.length = 0;
              state2.mode = COMMENT;
            /* falls through */
            case COMMENT:
              if (state2.flags & 4096) {
                if (have === 0) {
                  break inf_leave;
                }
                copy = 0;
                do {
                  len = input[next + copy++];
                  if (state2.head && len && state2.length < 65536) {
                    state2.head.comment += String.fromCharCode(len);
                  }
                } while (len && copy < have);
                if (state2.flags & 512) {
                  state2.check = crc32(state2.check, input, copy, next);
                }
                have -= copy;
                next += copy;
                if (len) {
                  break inf_leave;
                }
              } else if (state2.head) {
                state2.head.comment = null;
              }
              state2.mode = HCRC;
            /* falls through */
            case HCRC:
              if (state2.flags & 512) {
                while (bits < 16) {
                  if (have === 0) {
                    break inf_leave;
                  }
                  have--;
                  hold += input[next++] << bits;
                  bits += 8;
                }
                if (hold !== (state2.check & 65535)) {
                  strm.msg = "header crc mismatch";
                  state2.mode = BAD;
                  break;
                }
                hold = 0;
                bits = 0;
              }
              if (state2.head) {
                state2.head.hcrc = state2.flags >> 9 & 1;
                state2.head.done = true;
              }
              strm.adler = state2.check = 0;
              state2.mode = TYPE;
              break;
            case DICTID:
              while (bits < 32) {
                if (have === 0) {
                  break inf_leave;
                }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              strm.adler = state2.check = zswap32(hold);
              hold = 0;
              bits = 0;
              state2.mode = DICT;
            /* falls through */
            case DICT:
              if (state2.havedict === 0) {
                strm.next_out = put;
                strm.avail_out = left;
                strm.next_in = next;
                strm.avail_in = have;
                state2.hold = hold;
                state2.bits = bits;
                return Z_NEED_DICT;
              }
              strm.adler = state2.check = 1;
              state2.mode = TYPE;
            /* falls through */
            case TYPE:
              if (flush === Z_BLOCK || flush === Z_TREES) {
                break inf_leave;
              }
            /* falls through */
            case TYPEDO:
              if (state2.last) {
                hold >>>= bits & 7;
                bits -= bits & 7;
                state2.mode = CHECK;
                break;
              }
              while (bits < 3) {
                if (have === 0) {
                  break inf_leave;
                }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              state2.last = hold & 1;
              hold >>>= 1;
              bits -= 1;
              switch (hold & 3) {
                case 0:
                  state2.mode = STORED;
                  break;
                case 1:
                  fixedtables(state2);
                  state2.mode = LEN_;
                  if (flush === Z_TREES) {
                    hold >>>= 2;
                    bits -= 2;
                    break inf_leave;
                  }
                  break;
                case 2:
                  state2.mode = TABLE;
                  break;
                case 3:
                  strm.msg = "invalid block type";
                  state2.mode = BAD;
              }
              hold >>>= 2;
              bits -= 2;
              break;
            case STORED:
              hold >>>= bits & 7;
              bits -= bits & 7;
              while (bits < 32) {
                if (have === 0) {
                  break inf_leave;
                }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              if ((hold & 65535) !== (hold >>> 16 ^ 65535)) {
                strm.msg = "invalid stored block lengths";
                state2.mode = BAD;
                break;
              }
              state2.length = hold & 65535;
              hold = 0;
              bits = 0;
              state2.mode = COPY_;
              if (flush === Z_TREES) {
                break inf_leave;
              }
            /* falls through */
            case COPY_:
              state2.mode = COPY;
            /* falls through */
            case COPY:
              copy = state2.length;
              if (copy) {
                if (copy > have) {
                  copy = have;
                }
                if (copy > left) {
                  copy = left;
                }
                if (copy === 0) {
                  break inf_leave;
                }
                utils.arraySet(output, input, next, copy, put);
                have -= copy;
                next += copy;
                left -= copy;
                put += copy;
                state2.length -= copy;
                break;
              }
              state2.mode = TYPE;
              break;
            case TABLE:
              while (bits < 14) {
                if (have === 0) {
                  break inf_leave;
                }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              state2.nlen = (hold & 31) + 257;
              hold >>>= 5;
              bits -= 5;
              state2.ndist = (hold & 31) + 1;
              hold >>>= 5;
              bits -= 5;
              state2.ncode = (hold & 15) + 4;
              hold >>>= 4;
              bits -= 4;
              if (state2.nlen > 286 || state2.ndist > 30) {
                strm.msg = "too many length or distance symbols";
                state2.mode = BAD;
                break;
              }
              state2.have = 0;
              state2.mode = LENLENS;
            /* falls through */
            case LENLENS:
              while (state2.have < state2.ncode) {
                while (bits < 3) {
                  if (have === 0) {
                    break inf_leave;
                  }
                  have--;
                  hold += input[next++] << bits;
                  bits += 8;
                }
                state2.lens[order[state2.have++]] = hold & 7;
                hold >>>= 3;
                bits -= 3;
              }
              while (state2.have < 19) {
                state2.lens[order[state2.have++]] = 0;
              }
              state2.lencode = state2.lendyn;
              state2.lenbits = 7;
              opts = { bits: state2.lenbits };
              ret = inflate_table(CODES, state2.lens, 0, 19, state2.lencode, 0, state2.work, opts);
              state2.lenbits = opts.bits;
              if (ret) {
                strm.msg = "invalid code lengths set";
                state2.mode = BAD;
                break;
              }
              state2.have = 0;
              state2.mode = CODELENS;
            /* falls through */
            case CODELENS:
              while (state2.have < state2.nlen + state2.ndist) {
                for (; ; ) {
                  here = state2.lencode[hold & (1 << state2.lenbits) - 1];
                  here_bits = here >>> 24;
                  here_op = here >>> 16 & 255;
                  here_val = here & 65535;
                  if (here_bits <= bits) {
                    break;
                  }
                  if (have === 0) {
                    break inf_leave;
                  }
                  have--;
                  hold += input[next++] << bits;
                  bits += 8;
                }
                if (here_val < 16) {
                  hold >>>= here_bits;
                  bits -= here_bits;
                  state2.lens[state2.have++] = here_val;
                } else {
                  if (here_val === 16) {
                    n = here_bits + 2;
                    while (bits < n) {
                      if (have === 0) {
                        break inf_leave;
                      }
                      have--;
                      hold += input[next++] << bits;
                      bits += 8;
                    }
                    hold >>>= here_bits;
                    bits -= here_bits;
                    if (state2.have === 0) {
                      strm.msg = "invalid bit length repeat";
                      state2.mode = BAD;
                      break;
                    }
                    len = state2.lens[state2.have - 1];
                    copy = 3 + (hold & 3);
                    hold >>>= 2;
                    bits -= 2;
                  } else if (here_val === 17) {
                    n = here_bits + 3;
                    while (bits < n) {
                      if (have === 0) {
                        break inf_leave;
                      }
                      have--;
                      hold += input[next++] << bits;
                      bits += 8;
                    }
                    hold >>>= here_bits;
                    bits -= here_bits;
                    len = 0;
                    copy = 3 + (hold & 7);
                    hold >>>= 3;
                    bits -= 3;
                  } else {
                    n = here_bits + 7;
                    while (bits < n) {
                      if (have === 0) {
                        break inf_leave;
                      }
                      have--;
                      hold += input[next++] << bits;
                      bits += 8;
                    }
                    hold >>>= here_bits;
                    bits -= here_bits;
                    len = 0;
                    copy = 11 + (hold & 127);
                    hold >>>= 7;
                    bits -= 7;
                  }
                  if (state2.have + copy > state2.nlen + state2.ndist) {
                    strm.msg = "invalid bit length repeat";
                    state2.mode = BAD;
                    break;
                  }
                  while (copy--) {
                    state2.lens[state2.have++] = len;
                  }
                }
              }
              if (state2.mode === BAD) {
                break;
              }
              if (state2.lens[256] === 0) {
                strm.msg = "invalid code -- missing end-of-block";
                state2.mode = BAD;
                break;
              }
              state2.lenbits = 9;
              opts = { bits: state2.lenbits };
              ret = inflate_table(LENS, state2.lens, 0, state2.nlen, state2.lencode, 0, state2.work, opts);
              state2.lenbits = opts.bits;
              if (ret) {
                strm.msg = "invalid literal/lengths set";
                state2.mode = BAD;
                break;
              }
              state2.distbits = 6;
              state2.distcode = state2.distdyn;
              opts = { bits: state2.distbits };
              ret = inflate_table(DISTS, state2.lens, state2.nlen, state2.ndist, state2.distcode, 0, state2.work, opts);
              state2.distbits = opts.bits;
              if (ret) {
                strm.msg = "invalid distances set";
                state2.mode = BAD;
                break;
              }
              state2.mode = LEN_;
              if (flush === Z_TREES) {
                break inf_leave;
              }
            /* falls through */
            case LEN_:
              state2.mode = LEN;
            /* falls through */
            case LEN:
              if (have >= 6 && left >= 258) {
                strm.next_out = put;
                strm.avail_out = left;
                strm.next_in = next;
                strm.avail_in = have;
                state2.hold = hold;
                state2.bits = bits;
                inflate_fast(strm, _out);
                put = strm.next_out;
                output = strm.output;
                left = strm.avail_out;
                next = strm.next_in;
                input = strm.input;
                have = strm.avail_in;
                hold = state2.hold;
                bits = state2.bits;
                if (state2.mode === TYPE) {
                  state2.back = -1;
                }
                break;
              }
              state2.back = 0;
              for (; ; ) {
                here = state2.lencode[hold & (1 << state2.lenbits) - 1];
                here_bits = here >>> 24;
                here_op = here >>> 16 & 255;
                here_val = here & 65535;
                if (here_bits <= bits) {
                  break;
                }
                if (have === 0) {
                  break inf_leave;
                }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              if (here_op && (here_op & 240) === 0) {
                last_bits = here_bits;
                last_op = here_op;
                last_val = here_val;
                for (; ; ) {
                  here = state2.lencode[last_val + ((hold & (1 << last_bits + last_op) - 1) >> last_bits)];
                  here_bits = here >>> 24;
                  here_op = here >>> 16 & 255;
                  here_val = here & 65535;
                  if (last_bits + here_bits <= bits) {
                    break;
                  }
                  if (have === 0) {
                    break inf_leave;
                  }
                  have--;
                  hold += input[next++] << bits;
                  bits += 8;
                }
                hold >>>= last_bits;
                bits -= last_bits;
                state2.back += last_bits;
              }
              hold >>>= here_bits;
              bits -= here_bits;
              state2.back += here_bits;
              state2.length = here_val;
              if (here_op === 0) {
                state2.mode = LIT;
                break;
              }
              if (here_op & 32) {
                state2.back = -1;
                state2.mode = TYPE;
                break;
              }
              if (here_op & 64) {
                strm.msg = "invalid literal/length code";
                state2.mode = BAD;
                break;
              }
              state2.extra = here_op & 15;
              state2.mode = LENEXT;
            /* falls through */
            case LENEXT:
              if (state2.extra) {
                n = state2.extra;
                while (bits < n) {
                  if (have === 0) {
                    break inf_leave;
                  }
                  have--;
                  hold += input[next++] << bits;
                  bits += 8;
                }
                state2.length += hold & (1 << state2.extra) - 1;
                hold >>>= state2.extra;
                bits -= state2.extra;
                state2.back += state2.extra;
              }
              state2.was = state2.length;
              state2.mode = DIST;
            /* falls through */
            case DIST:
              for (; ; ) {
                here = state2.distcode[hold & (1 << state2.distbits) - 1];
                here_bits = here >>> 24;
                here_op = here >>> 16 & 255;
                here_val = here & 65535;
                if (here_bits <= bits) {
                  break;
                }
                if (have === 0) {
                  break inf_leave;
                }
                have--;
                hold += input[next++] << bits;
                bits += 8;
              }
              if ((here_op & 240) === 0) {
                last_bits = here_bits;
                last_op = here_op;
                last_val = here_val;
                for (; ; ) {
                  here = state2.distcode[last_val + ((hold & (1 << last_bits + last_op) - 1) >> last_bits)];
                  here_bits = here >>> 24;
                  here_op = here >>> 16 & 255;
                  here_val = here & 65535;
                  if (last_bits + here_bits <= bits) {
                    break;
                  }
                  if (have === 0) {
                    break inf_leave;
                  }
                  have--;
                  hold += input[next++] << bits;
                  bits += 8;
                }
                hold >>>= last_bits;
                bits -= last_bits;
                state2.back += last_bits;
              }
              hold >>>= here_bits;
              bits -= here_bits;
              state2.back += here_bits;
              if (here_op & 64) {
                strm.msg = "invalid distance code";
                state2.mode = BAD;
                break;
              }
              state2.offset = here_val;
              state2.extra = here_op & 15;
              state2.mode = DISTEXT;
            /* falls through */
            case DISTEXT:
              if (state2.extra) {
                n = state2.extra;
                while (bits < n) {
                  if (have === 0) {
                    break inf_leave;
                  }
                  have--;
                  hold += input[next++] << bits;
                  bits += 8;
                }
                state2.offset += hold & (1 << state2.extra) - 1;
                hold >>>= state2.extra;
                bits -= state2.extra;
                state2.back += state2.extra;
              }
              if (state2.offset > state2.dmax) {
                strm.msg = "invalid distance too far back";
                state2.mode = BAD;
                break;
              }
              state2.mode = MATCH;
            /* falls through */
            case MATCH:
              if (left === 0) {
                break inf_leave;
              }
              copy = _out - left;
              if (state2.offset > copy) {
                copy = state2.offset - copy;
                if (copy > state2.whave) {
                  if (state2.sane) {
                    strm.msg = "invalid distance too far back";
                    state2.mode = BAD;
                    break;
                  }
                }
                if (copy > state2.wnext) {
                  copy -= state2.wnext;
                  from = state2.wsize - copy;
                } else {
                  from = state2.wnext - copy;
                }
                if (copy > state2.length) {
                  copy = state2.length;
                }
                from_source = state2.window;
              } else {
                from_source = output;
                from = put - state2.offset;
                copy = state2.length;
              }
              if (copy > left) {
                copy = left;
              }
              left -= copy;
              state2.length -= copy;
              do {
                output[put++] = from_source[from++];
              } while (--copy);
              if (state2.length === 0) {
                state2.mode = LEN;
              }
              break;
            case LIT:
              if (left === 0) {
                break inf_leave;
              }
              output[put++] = state2.length;
              left--;
              state2.mode = LEN;
              break;
            case CHECK:
              if (state2.wrap) {
                while (bits < 32) {
                  if (have === 0) {
                    break inf_leave;
                  }
                  have--;
                  hold |= input[next++] << bits;
                  bits += 8;
                }
                _out -= left;
                strm.total_out += _out;
                state2.total += _out;
                if (_out) {
                  strm.adler = state2.check = /*UPDATE(state.check, put - _out, _out);*/
                  state2.flags ? crc32(state2.check, output, _out, put - _out) : adler32(state2.check, output, _out, put - _out);
                }
                _out = left;
                if ((state2.flags ? hold : zswap32(hold)) !== state2.check) {
                  strm.msg = "incorrect data check";
                  state2.mode = BAD;
                  break;
                }
                hold = 0;
                bits = 0;
              }
              state2.mode = LENGTH;
            /* falls through */
            case LENGTH:
              if (state2.wrap && state2.flags) {
                while (bits < 32) {
                  if (have === 0) {
                    break inf_leave;
                  }
                  have--;
                  hold += input[next++] << bits;
                  bits += 8;
                }
                if (hold !== (state2.total & 4294967295)) {
                  strm.msg = "incorrect length check";
                  state2.mode = BAD;
                  break;
                }
                hold = 0;
                bits = 0;
              }
              state2.mode = DONE;
            /* falls through */
            case DONE:
              ret = Z_STREAM_END;
              break inf_leave;
            case BAD:
              ret = Z_DATA_ERROR;
              break inf_leave;
            case MEM:
              return Z_MEM_ERROR;
            case SYNC:
            /* falls through */
            default:
              return Z_STREAM_ERROR;
          }
        }
      strm.next_out = put;
      strm.avail_out = left;
      strm.next_in = next;
      strm.avail_in = have;
      state2.hold = hold;
      state2.bits = bits;
      if (state2.wsize || _out !== strm.avail_out && state2.mode < BAD && (state2.mode < CHECK || flush !== Z_FINISH)) {
        if (updatewindow(strm, strm.output, strm.next_out, _out - strm.avail_out)) {
          state2.mode = MEM;
          return Z_MEM_ERROR;
        }
      }
      _in -= strm.avail_in;
      _out -= strm.avail_out;
      strm.total_in += _in;
      strm.total_out += _out;
      state2.total += _out;
      if (state2.wrap && _out) {
        strm.adler = state2.check = /*UPDATE(state.check, strm.next_out - _out, _out);*/
        state2.flags ? crc32(state2.check, output, _out, strm.next_out - _out) : adler32(state2.check, output, _out, strm.next_out - _out);
      }
      strm.data_type = state2.bits + (state2.last ? 64 : 0) + (state2.mode === TYPE ? 128 : 0) + (state2.mode === LEN_ || state2.mode === COPY_ ? 256 : 0);
      if ((_in === 0 && _out === 0 || flush === Z_FINISH) && ret === Z_OK) {
        ret = Z_BUF_ERROR;
      }
      return ret;
    }
    function inflateEnd(strm) {
      if (!strm || !strm.state) {
        return Z_STREAM_ERROR;
      }
      var state2 = strm.state;
      if (state2.window) {
        state2.window = null;
      }
      strm.state = null;
      return Z_OK;
    }
    function inflateGetHeader(strm, head) {
      var state2;
      if (!strm || !strm.state) {
        return Z_STREAM_ERROR;
      }
      state2 = strm.state;
      if ((state2.wrap & 2) === 0) {
        return Z_STREAM_ERROR;
      }
      state2.head = head;
      head.done = false;
      return Z_OK;
    }
    function inflateSetDictionary(strm, dictionary) {
      var dictLength = dictionary.length;
      var state2;
      var dictid;
      var ret;
      if (!strm || !strm.state) {
        return Z_STREAM_ERROR;
      }
      state2 = strm.state;
      if (state2.wrap !== 0 && state2.mode !== DICT) {
        return Z_STREAM_ERROR;
      }
      if (state2.mode === DICT) {
        dictid = 1;
        dictid = adler32(dictid, dictionary, dictLength, 0);
        if (dictid !== state2.check) {
          return Z_DATA_ERROR;
        }
      }
      ret = updatewindow(strm, dictionary, dictLength, dictLength);
      if (ret) {
        state2.mode = MEM;
        return Z_MEM_ERROR;
      }
      state2.havedict = 1;
      return Z_OK;
    }
    exports2.inflateReset = inflateReset;
    exports2.inflateReset2 = inflateReset2;
    exports2.inflateResetKeep = inflateResetKeep;
    exports2.inflateInit = inflateInit;
    exports2.inflateInit2 = inflateInit2;
    exports2.inflate = inflate;
    exports2.inflateEnd = inflateEnd;
    exports2.inflateGetHeader = inflateGetHeader;
    exports2.inflateSetDictionary = inflateSetDictionary;
    exports2.inflateInfo = "pako inflate (from Nodeca project)";
  }
});

// node_modules/pako/lib/zlib/constants.js
var require_constants = __commonJS({
  "node_modules/pako/lib/zlib/constants.js"(exports2, module2) {
    "use strict";
    module2.exports = {
      /* Allowed flush values; see deflate() and inflate() below for details */
      Z_NO_FLUSH: 0,
      Z_PARTIAL_FLUSH: 1,
      Z_SYNC_FLUSH: 2,
      Z_FULL_FLUSH: 3,
      Z_FINISH: 4,
      Z_BLOCK: 5,
      Z_TREES: 6,
      /* Return codes for the compression/decompression functions. Negative values
      * are errors, positive values are used for special but normal events.
      */
      Z_OK: 0,
      Z_STREAM_END: 1,
      Z_NEED_DICT: 2,
      Z_ERRNO: -1,
      Z_STREAM_ERROR: -2,
      Z_DATA_ERROR: -3,
      //Z_MEM_ERROR:     -4,
      Z_BUF_ERROR: -5,
      //Z_VERSION_ERROR: -6,
      /* compression levels */
      Z_NO_COMPRESSION: 0,
      Z_BEST_SPEED: 1,
      Z_BEST_COMPRESSION: 9,
      Z_DEFAULT_COMPRESSION: -1,
      Z_FILTERED: 1,
      Z_HUFFMAN_ONLY: 2,
      Z_RLE: 3,
      Z_FIXED: 4,
      Z_DEFAULT_STRATEGY: 0,
      /* Possible values of the data_type field (though see inflate()) */
      Z_BINARY: 0,
      Z_TEXT: 1,
      //Z_ASCII:                1, // = Z_TEXT (deprecated)
      Z_UNKNOWN: 2,
      /* The deflate compression method */
      Z_DEFLATED: 8
      //Z_NULL:                 null // Use -1 or null inline, depending on var type
    };
  }
});

// node_modules/pako/lib/zlib/gzheader.js
var require_gzheader = __commonJS({
  "node_modules/pako/lib/zlib/gzheader.js"(exports2, module2) {
    "use strict";
    function GZheader() {
      this.text = 0;
      this.time = 0;
      this.xflags = 0;
      this.os = 0;
      this.extra = null;
      this.extra_len = 0;
      this.name = "";
      this.comment = "";
      this.hcrc = 0;
      this.done = false;
    }
    module2.exports = GZheader;
  }
});

// node_modules/pako/lib/inflate.js
var require_inflate2 = __commonJS({
  "node_modules/pako/lib/inflate.js"(exports2) {
    "use strict";
    var zlib_inflate = require_inflate();
    var utils = require_common();
    var strings = require_strings();
    var c = require_constants();
    var msg = require_messages();
    var ZStream = require_zstream();
    var GZheader = require_gzheader();
    var toString = Object.prototype.toString;
    function Inflate(options2) {
      if (!(this instanceof Inflate)) return new Inflate(options2);
      this.options = utils.assign({
        chunkSize: 16384,
        windowBits: 0,
        to: ""
      }, options2 || {});
      var opt = this.options;
      if (opt.raw && opt.windowBits >= 0 && opt.windowBits < 16) {
        opt.windowBits = -opt.windowBits;
        if (opt.windowBits === 0) {
          opt.windowBits = -15;
        }
      }
      if (opt.windowBits >= 0 && opt.windowBits < 16 && !(options2 && options2.windowBits)) {
        opt.windowBits += 32;
      }
      if (opt.windowBits > 15 && opt.windowBits < 48) {
        if ((opt.windowBits & 15) === 0) {
          opt.windowBits |= 15;
        }
      }
      this.err = 0;
      this.msg = "";
      this.ended = false;
      this.chunks = [];
      this.strm = new ZStream();
      this.strm.avail_out = 0;
      var status = zlib_inflate.inflateInit2(
        this.strm,
        opt.windowBits
      );
      if (status !== c.Z_OK) {
        throw new Error(msg[status]);
      }
      this.header = new GZheader();
      zlib_inflate.inflateGetHeader(this.strm, this.header);
      if (opt.dictionary) {
        if (typeof opt.dictionary === "string") {
          opt.dictionary = strings.string2buf(opt.dictionary);
        } else if (toString.call(opt.dictionary) === "[object ArrayBuffer]") {
          opt.dictionary = new Uint8Array(opt.dictionary);
        }
        if (opt.raw) {
          status = zlib_inflate.inflateSetDictionary(this.strm, opt.dictionary);
          if (status !== c.Z_OK) {
            throw new Error(msg[status]);
          }
        }
      }
    }
    Inflate.prototype.push = function(data, mode) {
      var strm = this.strm;
      var chunkSize = this.options.chunkSize;
      var dictionary = this.options.dictionary;
      var status, _mode;
      var next_out_utf8, tail, utf8str;
      var allowBufError = false;
      if (this.ended) {
        return false;
      }
      _mode = mode === ~~mode ? mode : mode === true ? c.Z_FINISH : c.Z_NO_FLUSH;
      if (typeof data === "string") {
        strm.input = strings.binstring2buf(data);
      } else if (toString.call(data) === "[object ArrayBuffer]") {
        strm.input = new Uint8Array(data);
      } else {
        strm.input = data;
      }
      strm.next_in = 0;
      strm.avail_in = strm.input.length;
      do {
        if (strm.avail_out === 0) {
          strm.output = new utils.Buf8(chunkSize);
          strm.next_out = 0;
          strm.avail_out = chunkSize;
        }
        status = zlib_inflate.inflate(strm, c.Z_NO_FLUSH);
        if (status === c.Z_NEED_DICT && dictionary) {
          status = zlib_inflate.inflateSetDictionary(this.strm, dictionary);
        }
        if (status === c.Z_BUF_ERROR && allowBufError === true) {
          status = c.Z_OK;
          allowBufError = false;
        }
        if (status !== c.Z_STREAM_END && status !== c.Z_OK) {
          this.onEnd(status);
          this.ended = true;
          return false;
        }
        if (strm.next_out) {
          if (strm.avail_out === 0 || status === c.Z_STREAM_END || strm.avail_in === 0 && (_mode === c.Z_FINISH || _mode === c.Z_SYNC_FLUSH)) {
            if (this.options.to === "string") {
              next_out_utf8 = strings.utf8border(strm.output, strm.next_out);
              tail = strm.next_out - next_out_utf8;
              utf8str = strings.buf2string(strm.output, next_out_utf8);
              strm.next_out = tail;
              strm.avail_out = chunkSize - tail;
              if (tail) {
                utils.arraySet(strm.output, strm.output, next_out_utf8, tail, 0);
              }
              this.onData(utf8str);
            } else {
              this.onData(utils.shrinkBuf(strm.output, strm.next_out));
            }
          }
        }
        if (strm.avail_in === 0 && strm.avail_out === 0) {
          allowBufError = true;
        }
      } while ((strm.avail_in > 0 || strm.avail_out === 0) && status !== c.Z_STREAM_END);
      if (status === c.Z_STREAM_END) {
        _mode = c.Z_FINISH;
      }
      if (_mode === c.Z_FINISH) {
        status = zlib_inflate.inflateEnd(this.strm);
        this.onEnd(status);
        this.ended = true;
        return status === c.Z_OK;
      }
      if (_mode === c.Z_SYNC_FLUSH) {
        this.onEnd(c.Z_OK);
        strm.avail_out = 0;
        return true;
      }
      return true;
    };
    Inflate.prototype.onData = function(chunk) {
      this.chunks.push(chunk);
    };
    Inflate.prototype.onEnd = function(status) {
      if (status === c.Z_OK) {
        if (this.options.to === "string") {
          this.result = this.chunks.join("");
        } else {
          this.result = utils.flattenChunks(this.chunks);
        }
      }
      this.chunks = [];
      this.err = status;
      this.msg = this.strm.msg;
    };
    function inflate(input, options2) {
      var inflator = new Inflate(options2);
      inflator.push(input, true);
      if (inflator.err) {
        throw inflator.msg || msg[inflator.err];
      }
      return inflator.result;
    }
    function inflateRaw(input, options2) {
      options2 = options2 || {};
      options2.raw = true;
      return inflate(input, options2);
    }
    exports2.Inflate = Inflate;
    exports2.inflate = inflate;
    exports2.inflateRaw = inflateRaw;
    exports2.ungzip = inflate;
  }
});

// node_modules/pako/index.js
var require_pako = __commonJS({
  "node_modules/pako/index.js"(exports2, module2) {
    "use strict";
    var assign = require_common().assign;
    var deflate = require_deflate2();
    var inflate = require_inflate2();
    var constants = require_constants();
    var pako = {};
    assign(pako, deflate, inflate, constants);
    module2.exports = pako;
  }
});

// node_modules/jszip/lib/flate.js
var require_flate = __commonJS({
  "node_modules/jszip/lib/flate.js"(exports2) {
    "use strict";
    var USE_TYPEDARRAY = typeof Uint8Array !== "undefined" && typeof Uint16Array !== "undefined" && typeof Uint32Array !== "undefined";
    var pako = require_pako();
    var utils = require_utils();
    var GenericWorker = require_GenericWorker();
    var ARRAY_TYPE = USE_TYPEDARRAY ? "uint8array" : "array";
    exports2.magic = "\b\0";
    function FlateWorker(action, options2) {
      GenericWorker.call(this, "FlateWorker/" + action);
      this._pako = null;
      this._pakoAction = action;
      this._pakoOptions = options2;
      this.meta = {};
    }
    utils.inherits(FlateWorker, GenericWorker);
    FlateWorker.prototype.processChunk = function(chunk) {
      this.meta = chunk.meta;
      if (this._pako === null) {
        this._createPako();
      }
      this._pako.push(utils.transformTo(ARRAY_TYPE, chunk.data), false);
    };
    FlateWorker.prototype.flush = function() {
      GenericWorker.prototype.flush.call(this);
      if (this._pako === null) {
        this._createPako();
      }
      this._pako.push([], true);
    };
    FlateWorker.prototype.cleanUp = function() {
      GenericWorker.prototype.cleanUp.call(this);
      this._pako = null;
    };
    FlateWorker.prototype._createPako = function() {
      this._pako = new pako[this._pakoAction]({
        raw: true,
        level: this._pakoOptions.level || -1
        // default compression
      });
      var self2 = this;
      this._pako.onData = function(data) {
        self2.push({
          data,
          meta: self2.meta
        });
      };
    };
    exports2.compressWorker = function(compressionOptions) {
      return new FlateWorker("Deflate", compressionOptions);
    };
    exports2.uncompressWorker = function() {
      return new FlateWorker("Inflate", {});
    };
  }
});

// node_modules/jszip/lib/compressions.js
var require_compressions = __commonJS({
  "node_modules/jszip/lib/compressions.js"(exports2) {
    "use strict";
    var GenericWorker = require_GenericWorker();
    exports2.STORE = {
      magic: "\0\0",
      compressWorker: function() {
        return new GenericWorker("STORE compression");
      },
      uncompressWorker: function() {
        return new GenericWorker("STORE decompression");
      }
    };
    exports2.DEFLATE = require_flate();
  }
});

// node_modules/jszip/lib/signature.js
var require_signature = __commonJS({
  "node_modules/jszip/lib/signature.js"(exports2) {
    "use strict";
    exports2.LOCAL_FILE_HEADER = "PK";
    exports2.CENTRAL_FILE_HEADER = "PK";
    exports2.CENTRAL_DIRECTORY_END = "PK";
    exports2.ZIP64_CENTRAL_DIRECTORY_LOCATOR = "PK\x07";
    exports2.ZIP64_CENTRAL_DIRECTORY_END = "PK";
    exports2.DATA_DESCRIPTOR = "PK\x07\b";
  }
});

// node_modules/jszip/lib/generate/ZipFileWorker.js
var require_ZipFileWorker = __commonJS({
  "node_modules/jszip/lib/generate/ZipFileWorker.js"(exports2, module2) {
    "use strict";
    var utils = require_utils();
    var GenericWorker = require_GenericWorker();
    var utf8 = require_utf8();
    var crc32 = require_crc32();
    var signature = require_signature();
    var decToHex = function(dec, bytes) {
      var hex = "", i;
      for (i = 0; i < bytes; i++) {
        hex += String.fromCharCode(dec & 255);
        dec = dec >>> 8;
      }
      return hex;
    };
    var generateUnixExternalFileAttr = function(unixPermissions, isDir) {
      var result = unixPermissions;
      if (!unixPermissions) {
        result = isDir ? 16893 : 33204;
      }
      return (result & 65535) << 16;
    };
    var generateDosExternalFileAttr = function(dosPermissions) {
      return (dosPermissions || 0) & 63;
    };
    var generateZipParts = function(streamInfo, streamedContent, streamingEnded, offset, platform, encodeFileName) {
      var file = streamInfo["file"], compression = streamInfo["compression"], useCustomEncoding = encodeFileName !== utf8.utf8encode, encodedFileName = utils.transformTo("string", encodeFileName(file.name)), utfEncodedFileName = utils.transformTo("string", utf8.utf8encode(file.name)), comment = file.comment, encodedComment = utils.transformTo("string", encodeFileName(comment)), utfEncodedComment = utils.transformTo("string", utf8.utf8encode(comment)), useUTF8ForFileName = utfEncodedFileName.length !== file.name.length, useUTF8ForComment = utfEncodedComment.length !== comment.length, dosTime, dosDate, extraFields = "", unicodePathExtraField = "", unicodeCommentExtraField = "", dir = file.dir, date = file.date;
      var dataInfo = {
        crc32: 0,
        compressedSize: 0,
        uncompressedSize: 0
      };
      if (!streamedContent || streamingEnded) {
        dataInfo.crc32 = streamInfo["crc32"];
        dataInfo.compressedSize = streamInfo["compressedSize"];
        dataInfo.uncompressedSize = streamInfo["uncompressedSize"];
      }
      var bitflag = 0;
      if (streamedContent) {
        bitflag |= 8;
      }
      if (!useCustomEncoding && (useUTF8ForFileName || useUTF8ForComment)) {
        bitflag |= 2048;
      }
      var extFileAttr = 0;
      var versionMadeBy = 0;
      if (dir) {
        extFileAttr |= 16;
      }
      if (platform === "UNIX") {
        versionMadeBy = 798;
        extFileAttr |= generateUnixExternalFileAttr(file.unixPermissions, dir);
      } else {
        versionMadeBy = 20;
        extFileAttr |= generateDosExternalFileAttr(file.dosPermissions, dir);
      }
      dosTime = date.getUTCHours();
      dosTime = dosTime << 6;
      dosTime = dosTime | date.getUTCMinutes();
      dosTime = dosTime << 5;
      dosTime = dosTime | date.getUTCSeconds() / 2;
      dosDate = date.getUTCFullYear() - 1980;
      dosDate = dosDate << 4;
      dosDate = dosDate | date.getUTCMonth() + 1;
      dosDate = dosDate << 5;
      dosDate = dosDate | date.getUTCDate();
      if (useUTF8ForFileName) {
        unicodePathExtraField = // Version
        decToHex(1, 1) + // NameCRC32
        decToHex(crc32(encodedFileName), 4) + // UnicodeName
        utfEncodedFileName;
        extraFields += // Info-ZIP Unicode Path Extra Field
        "up" + // size
        decToHex(unicodePathExtraField.length, 2) + // content
        unicodePathExtraField;
      }
      if (useUTF8ForComment) {
        unicodeCommentExtraField = // Version
        decToHex(1, 1) + // CommentCRC32
        decToHex(crc32(encodedComment), 4) + // UnicodeName
        utfEncodedComment;
        extraFields += // Info-ZIP Unicode Path Extra Field
        "uc" + // size
        decToHex(unicodeCommentExtraField.length, 2) + // content
        unicodeCommentExtraField;
      }
      var header = "";
      header += "\n\0";
      header += decToHex(bitflag, 2);
      header += compression.magic;
      header += decToHex(dosTime, 2);
      header += decToHex(dosDate, 2);
      header += decToHex(dataInfo.crc32, 4);
      header += decToHex(dataInfo.compressedSize, 4);
      header += decToHex(dataInfo.uncompressedSize, 4);
      header += decToHex(encodedFileName.length, 2);
      header += decToHex(extraFields.length, 2);
      var fileRecord = signature.LOCAL_FILE_HEADER + header + encodedFileName + extraFields;
      var dirRecord = signature.CENTRAL_FILE_HEADER + // version made by (00: DOS)
      decToHex(versionMadeBy, 2) + // file header (common to file and central directory)
      header + // file comment length
      decToHex(encodedComment.length, 2) + // disk number start
      "\0\0\0\0" + // external file attributes
      decToHex(extFileAttr, 4) + // relative offset of local header
      decToHex(offset, 4) + // file name
      encodedFileName + // extra field
      extraFields + // file comment
      encodedComment;
      return {
        fileRecord,
        dirRecord
      };
    };
    var generateCentralDirectoryEnd = function(entriesCount, centralDirLength, localDirLength, comment, encodeFileName) {
      var dirEnd = "";
      var encodedComment = utils.transformTo("string", encodeFileName(comment));
      dirEnd = signature.CENTRAL_DIRECTORY_END + // number of this disk
      "\0\0\0\0" + // total number of entries in the central directory on this disk
      decToHex(entriesCount, 2) + // total number of entries in the central directory
      decToHex(entriesCount, 2) + // size of the central directory   4 bytes
      decToHex(centralDirLength, 4) + // offset of start of central directory with respect to the starting disk number
      decToHex(localDirLength, 4) + // .ZIP file comment length
      decToHex(encodedComment.length, 2) + // .ZIP file comment
      encodedComment;
      return dirEnd;
    };
    var generateDataDescriptors = function(streamInfo) {
      var descriptor = "";
      descriptor = signature.DATA_DESCRIPTOR + // crc-32                          4 bytes
      decToHex(streamInfo["crc32"], 4) + // compressed size                 4 bytes
      decToHex(streamInfo["compressedSize"], 4) + // uncompressed size               4 bytes
      decToHex(streamInfo["uncompressedSize"], 4);
      return descriptor;
    };
    function ZipFileWorker(streamFiles, comment, platform, encodeFileName) {
      GenericWorker.call(this, "ZipFileWorker");
      this.bytesWritten = 0;
      this.zipComment = comment;
      this.zipPlatform = platform;
      this.encodeFileName = encodeFileName;
      this.streamFiles = streamFiles;
      this.accumulate = false;
      this.contentBuffer = [];
      this.dirRecords = [];
      this.currentSourceOffset = 0;
      this.entriesCount = 0;
      this.currentFile = null;
      this._sources = [];
    }
    utils.inherits(ZipFileWorker, GenericWorker);
    ZipFileWorker.prototype.push = function(chunk) {
      var currentFilePercent = chunk.meta.percent || 0;
      var entriesCount = this.entriesCount;
      var remainingFiles = this._sources.length;
      if (this.accumulate) {
        this.contentBuffer.push(chunk);
      } else {
        this.bytesWritten += chunk.data.length;
        GenericWorker.prototype.push.call(this, {
          data: chunk.data,
          meta: {
            currentFile: this.currentFile,
            percent: entriesCount ? (currentFilePercent + 100 * (entriesCount - remainingFiles - 1)) / entriesCount : 100
          }
        });
      }
    };
    ZipFileWorker.prototype.openedSource = function(streamInfo) {
      this.currentSourceOffset = this.bytesWritten;
      this.currentFile = streamInfo["file"].name;
      var streamedContent = this.streamFiles && !streamInfo["file"].dir;
      if (streamedContent) {
        var record = generateZipParts(streamInfo, streamedContent, false, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
        this.push({
          data: record.fileRecord,
          meta: { percent: 0 }
        });
      } else {
        this.accumulate = true;
      }
    };
    ZipFileWorker.prototype.closedSource = function(streamInfo) {
      this.accumulate = false;
      var streamedContent = this.streamFiles && !streamInfo["file"].dir;
      var record = generateZipParts(streamInfo, streamedContent, true, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
      this.dirRecords.push(record.dirRecord);
      if (streamedContent) {
        this.push({
          data: generateDataDescriptors(streamInfo),
          meta: { percent: 100 }
        });
      } else {
        this.push({
          data: record.fileRecord,
          meta: { percent: 0 }
        });
        while (this.contentBuffer.length) {
          this.push(this.contentBuffer.shift());
        }
      }
      this.currentFile = null;
    };
    ZipFileWorker.prototype.flush = function() {
      var localDirLength = this.bytesWritten;
      for (var i = 0; i < this.dirRecords.length; i++) {
        this.push({
          data: this.dirRecords[i],
          meta: { percent: 100 }
        });
      }
      var centralDirLength = this.bytesWritten - localDirLength;
      var dirEnd = generateCentralDirectoryEnd(this.dirRecords.length, centralDirLength, localDirLength, this.zipComment, this.encodeFileName);
      this.push({
        data: dirEnd,
        meta: { percent: 100 }
      });
    };
    ZipFileWorker.prototype.prepareNextSource = function() {
      this.previous = this._sources.shift();
      this.openedSource(this.previous.streamInfo);
      if (this.isPaused) {
        this.previous.pause();
      } else {
        this.previous.resume();
      }
    };
    ZipFileWorker.prototype.registerPrevious = function(previous) {
      this._sources.push(previous);
      var self2 = this;
      previous.on("data", function(chunk) {
        self2.processChunk(chunk);
      });
      previous.on("end", function() {
        self2.closedSource(self2.previous.streamInfo);
        if (self2._sources.length) {
          self2.prepareNextSource();
        } else {
          self2.end();
        }
      });
      previous.on("error", function(e) {
        self2.error(e);
      });
      return this;
    };
    ZipFileWorker.prototype.resume = function() {
      if (!GenericWorker.prototype.resume.call(this)) {
        return false;
      }
      if (!this.previous && this._sources.length) {
        this.prepareNextSource();
        return true;
      }
      if (!this.previous && !this._sources.length && !this.generatedError) {
        this.end();
        return true;
      }
    };
    ZipFileWorker.prototype.error = function(e) {
      var sources = this._sources;
      if (!GenericWorker.prototype.error.call(this, e)) {
        return false;
      }
      for (var i = 0; i < sources.length; i++) {
        try {
          sources[i].error(e);
        } catch (e2) {
        }
      }
      return true;
    };
    ZipFileWorker.prototype.lock = function() {
      GenericWorker.prototype.lock.call(this);
      var sources = this._sources;
      for (var i = 0; i < sources.length; i++) {
        sources[i].lock();
      }
    };
    module2.exports = ZipFileWorker;
  }
});

// node_modules/jszip/lib/generate/index.js
var require_generate = __commonJS({
  "node_modules/jszip/lib/generate/index.js"(exports2) {
    "use strict";
    var compressions = require_compressions();
    var ZipFileWorker = require_ZipFileWorker();
    var getCompression = function(fileCompression, zipCompression) {
      var compressionName = fileCompression || zipCompression;
      var compression = compressions[compressionName];
      if (!compression) {
        throw new Error(compressionName + " is not a valid compression method !");
      }
      return compression;
    };
    exports2.generateWorker = function(zip, options2, comment) {
      var zipFileWorker = new ZipFileWorker(options2.streamFiles, comment, options2.platform, options2.encodeFileName);
      var entriesCount = 0;
      try {
        zip.forEach(function(relativePath, file) {
          entriesCount++;
          var compression = getCompression(file.options.compression, options2.compression);
          var compressionOptions = file.options.compressionOptions || options2.compressionOptions || {};
          var dir = file.dir, date = file.date;
          file._compressWorker(compression, compressionOptions).withStreamInfo("file", {
            name: relativePath,
            dir,
            date,
            comment: file.comment || "",
            unixPermissions: file.unixPermissions,
            dosPermissions: file.dosPermissions
          }).pipe(zipFileWorker);
        });
        zipFileWorker.entriesCount = entriesCount;
      } catch (e) {
        zipFileWorker.error(e);
      }
      return zipFileWorker;
    };
  }
});

// node_modules/jszip/lib/nodejs/NodejsStreamInputAdapter.js
var require_NodejsStreamInputAdapter = __commonJS({
  "node_modules/jszip/lib/nodejs/NodejsStreamInputAdapter.js"(exports2, module2) {
    "use strict";
    var utils = require_utils();
    var GenericWorker = require_GenericWorker();
    function NodejsStreamInputAdapter(filename, stream) {
      GenericWorker.call(this, "Nodejs stream input adapter for " + filename);
      this._upstreamEnded = false;
      this._bindStream(stream);
    }
    utils.inherits(NodejsStreamInputAdapter, GenericWorker);
    NodejsStreamInputAdapter.prototype._bindStream = function(stream) {
      var self2 = this;
      this._stream = stream;
      stream.pause();
      stream.on("data", function(chunk) {
        self2.push({
          data: chunk,
          meta: {
            percent: 0
          }
        });
      }).on("error", function(e) {
        if (self2.isPaused) {
          this.generatedError = e;
        } else {
          self2.error(e);
        }
      }).on("end", function() {
        if (self2.isPaused) {
          self2._upstreamEnded = true;
        } else {
          self2.end();
        }
      });
    };
    NodejsStreamInputAdapter.prototype.pause = function() {
      if (!GenericWorker.prototype.pause.call(this)) {
        return false;
      }
      this._stream.pause();
      return true;
    };
    NodejsStreamInputAdapter.prototype.resume = function() {
      if (!GenericWorker.prototype.resume.call(this)) {
        return false;
      }
      if (this._upstreamEnded) {
        this.end();
      } else {
        this._stream.resume();
      }
      return true;
    };
    module2.exports = NodejsStreamInputAdapter;
  }
});

// node_modules/jszip/lib/object.js
var require_object = __commonJS({
  "node_modules/jszip/lib/object.js"(exports2, module2) {
    "use strict";
    var utf8 = require_utf8();
    var utils = require_utils();
    var GenericWorker = require_GenericWorker();
    var StreamHelper = require_StreamHelper();
    var defaults = require_defaults();
    var CompressedObject = require_compressedObject();
    var ZipObject = require_zipObject();
    var generate = require_generate();
    var nodejsUtils = require_nodejsUtils();
    var NodejsStreamInputAdapter = require_NodejsStreamInputAdapter();
    var fileAdd = function(name, data, originalOptions) {
      var dataType = utils.getTypeOf(data), parent;
      var o = utils.extend(originalOptions || {}, defaults);
      o.date = o.date || /* @__PURE__ */ new Date();
      if (o.compression !== null) {
        o.compression = o.compression.toUpperCase();
      }
      if (typeof o.unixPermissions === "string") {
        o.unixPermissions = parseInt(o.unixPermissions, 8);
      }
      if (o.unixPermissions && o.unixPermissions & 16384) {
        o.dir = true;
      }
      if (o.dosPermissions && o.dosPermissions & 16) {
        o.dir = true;
      }
      if (o.dir) {
        name = forceTrailingSlash(name);
      }
      if (o.createFolders && (parent = parentFolder(name))) {
        folderAdd.call(this, parent, true);
      }
      var isUnicodeString = dataType === "string" && o.binary === false && o.base64 === false;
      if (!originalOptions || typeof originalOptions.binary === "undefined") {
        o.binary = !isUnicodeString;
      }
      var isCompressedEmpty = data instanceof CompressedObject && data.uncompressedSize === 0;
      if (isCompressedEmpty || o.dir || !data || data.length === 0) {
        o.base64 = false;
        o.binary = true;
        data = "";
        o.compression = "STORE";
        dataType = "string";
      }
      var zipObjectContent = null;
      if (data instanceof CompressedObject || data instanceof GenericWorker) {
        zipObjectContent = data;
      } else if (nodejsUtils.isNode && nodejsUtils.isStream(data)) {
        zipObjectContent = new NodejsStreamInputAdapter(name, data);
      } else {
        zipObjectContent = utils.prepareContent(name, data, o.binary, o.optimizedBinaryString, o.base64);
      }
      var object2 = new ZipObject(name, zipObjectContent, o);
      this.files[name] = object2;
    };
    var parentFolder = function(path9) {
      if (path9.slice(-1) === "/") {
        path9 = path9.substring(0, path9.length - 1);
      }
      var lastSlash = path9.lastIndexOf("/");
      return lastSlash > 0 ? path9.substring(0, lastSlash) : "";
    };
    var forceTrailingSlash = function(path9) {
      if (path9.slice(-1) !== "/") {
        path9 += "/";
      }
      return path9;
    };
    var folderAdd = function(name, createFolders) {
      createFolders = typeof createFolders !== "undefined" ? createFolders : defaults.createFolders;
      name = forceTrailingSlash(name);
      if (!this.files[name]) {
        fileAdd.call(this, name, null, {
          dir: true,
          createFolders
        });
      }
      return this.files[name];
    };
    function isRegExp(object2) {
      return Object.prototype.toString.call(object2) === "[object RegExp]";
    }
    var out = {
      /**
       * @see loadAsync
       */
      load: function() {
        throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
      },
      /**
       * Call a callback function for each entry at this folder level.
       * @param {Function} cb the callback function:
       * function (relativePath, file) {...}
       * It takes 2 arguments : the relative path and the file.
       */
      forEach: function(cb) {
        var filename, relativePath, file;
        for (filename in this.files) {
          file = this.files[filename];
          relativePath = filename.slice(this.root.length, filename.length);
          if (relativePath && filename.slice(0, this.root.length) === this.root) {
            cb(relativePath, file);
          }
        }
      },
      /**
       * Filter nested files/folders with the specified function.
       * @param {Function} search the predicate to use :
       * function (relativePath, file) {...}
       * It takes 2 arguments : the relative path and the file.
       * @return {Array} An array of matching elements.
       */
      filter: function(search) {
        var result = [];
        this.forEach(function(relativePath, entry) {
          if (search(relativePath, entry)) {
            result.push(entry);
          }
        });
        return result;
      },
      /**
       * Add a file to the zip file, or search a file.
       * @param   {string|RegExp} name The name of the file to add (if data is defined),
       * the name of the file to find (if no data) or a regex to match files.
       * @param   {String|ArrayBuffer|Uint8Array|Buffer} data  The file data, either raw or base64 encoded
       * @param   {Object} o     File options
       * @return  {JSZip|Object|Array} this JSZip object (when adding a file),
       * a file (when searching by string) or an array of files (when searching by regex).
       */
      file: function(name, data, o) {
        if (arguments.length === 1) {
          if (isRegExp(name)) {
            var regexp = name;
            return this.filter(function(relativePath, file) {
              return !file.dir && regexp.test(relativePath);
            });
          } else {
            var obj = this.files[this.root + name];
            if (obj && !obj.dir) {
              return obj;
            } else {
              return null;
            }
          }
        } else {
          name = this.root + name;
          fileAdd.call(this, name, data, o);
        }
        return this;
      },
      /**
       * Add a directory to the zip file, or search.
       * @param   {String|RegExp} arg The name of the directory to add, or a regex to search folders.
       * @return  {JSZip} an object with the new directory as the root, or an array containing matching folders.
       */
      folder: function(arg) {
        if (!arg) {
          return this;
        }
        if (isRegExp(arg)) {
          return this.filter(function(relativePath, file) {
            return file.dir && arg.test(relativePath);
          });
        }
        var name = this.root + arg;
        var newFolder = folderAdd.call(this, name);
        var ret = this.clone();
        ret.root = newFolder.name;
        return ret;
      },
      /**
       * Delete a file, or a directory and all sub-files, from the zip
       * @param {string} name the name of the file to delete
       * @return {JSZip} this JSZip object
       */
      remove: function(name) {
        name = this.root + name;
        var file = this.files[name];
        if (!file) {
          if (name.slice(-1) !== "/") {
            name += "/";
          }
          file = this.files[name];
        }
        if (file && !file.dir) {
          delete this.files[name];
        } else {
          var kids = this.filter(function(relativePath, file2) {
            return file2.name.slice(0, name.length) === name;
          });
          for (var i = 0; i < kids.length; i++) {
            delete this.files[kids[i].name];
          }
        }
        return this;
      },
      /**
       * @deprecated This method has been removed in JSZip 3.0, please check the upgrade guide.
       */
      generate: function() {
        throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
      },
      /**
       * Generate the complete zip file as an internal stream.
       * @param {Object} options the options to generate the zip file :
       * - compression, "STORE" by default.
       * - type, "base64" by default. Values are : string, base64, uint8array, arraybuffer, blob.
       * @return {StreamHelper} the streamed zip file.
       */
      generateInternalStream: function(options2) {
        var worker, opts = {};
        try {
          opts = utils.extend(options2 || {}, {
            streamFiles: false,
            compression: "STORE",
            compressionOptions: null,
            type: "",
            platform: "DOS",
            comment: null,
            mimeType: "application/zip",
            encodeFileName: utf8.utf8encode
          });
          opts.type = opts.type.toLowerCase();
          opts.compression = opts.compression.toUpperCase();
          if (opts.type === "binarystring") {
            opts.type = "string";
          }
          if (!opts.type) {
            throw new Error("No output type specified.");
          }
          utils.checkSupport(opts.type);
          if (opts.platform === "darwin" || opts.platform === "freebsd" || opts.platform === "linux" || opts.platform === "sunos") {
            opts.platform = "UNIX";
          }
          if (opts.platform === "win32") {
            opts.platform = "DOS";
          }
          var comment = opts.comment || this.comment || "";
          worker = generate.generateWorker(this, opts, comment);
        } catch (e) {
          worker = new GenericWorker("error");
          worker.error(e);
        }
        return new StreamHelper(worker, opts.type || "string", opts.mimeType);
      },
      /**
       * Generate the complete zip file asynchronously.
       * @see generateInternalStream
       */
      generateAsync: function(options2, onUpdate) {
        return this.generateInternalStream(options2).accumulate(onUpdate);
      },
      /**
       * Generate the complete zip file asynchronously.
       * @see generateInternalStream
       */
      generateNodeStream: function(options2, onUpdate) {
        options2 = options2 || {};
        if (!options2.type) {
          options2.type = "nodebuffer";
        }
        return this.generateInternalStream(options2).toNodejsStream(onUpdate);
      }
    };
    module2.exports = out;
  }
});

// node_modules/jszip/lib/reader/DataReader.js
var require_DataReader = __commonJS({
  "node_modules/jszip/lib/reader/DataReader.js"(exports2, module2) {
    "use strict";
    var utils = require_utils();
    function DataReader(data) {
      this.data = data;
      this.length = data.length;
      this.index = 0;
      this.zero = 0;
    }
    DataReader.prototype = {
      /**
       * Check that the offset will not go too far.
       * @param {string} offset the additional offset to check.
       * @throws {Error} an Error if the offset is out of bounds.
       */
      checkOffset: function(offset) {
        this.checkIndex(this.index + offset);
      },
      /**
       * Check that the specified index will not be too far.
       * @param {string} newIndex the index to check.
       * @throws {Error} an Error if the index is out of bounds.
       */
      checkIndex: function(newIndex) {
        if (this.length < this.zero + newIndex || newIndex < 0) {
          throw new Error("End of data reached (data length = " + this.length + ", asked index = " + newIndex + "). Corrupted zip ?");
        }
      },
      /**
       * Change the index.
       * @param {number} newIndex The new index.
       * @throws {Error} if the new index is out of the data.
       */
      setIndex: function(newIndex) {
        this.checkIndex(newIndex);
        this.index = newIndex;
      },
      /**
       * Skip the next n bytes.
       * @param {number} n the number of bytes to skip.
       * @throws {Error} if the new index is out of the data.
       */
      skip: function(n) {
        this.setIndex(this.index + n);
      },
      /**
       * Get the byte at the specified index.
       * @param {number} i the index to use.
       * @return {number} a byte.
       */
      byteAt: function() {
      },
      /**
       * Get the next number with a given byte size.
       * @param {number} size the number of bytes to read.
       * @return {number} the corresponding number.
       */
      readInt: function(size) {
        var result = 0, i;
        this.checkOffset(size);
        for (i = this.index + size - 1; i >= this.index; i--) {
          result = (result << 8) + this.byteAt(i);
        }
        this.index += size;
        return result;
      },
      /**
       * Get the next string with a given byte size.
       * @param {number} size the number of bytes to read.
       * @return {string} the corresponding string.
       */
      readString: function(size) {
        return utils.transformTo("string", this.readData(size));
      },
      /**
       * Get raw data without conversion, <size> bytes.
       * @param {number} size the number of bytes to read.
       * @return {Object} the raw data, implementation specific.
       */
      readData: function() {
      },
      /**
       * Find the last occurrence of a zip signature (4 bytes).
       * @param {string} sig the signature to find.
       * @return {number} the index of the last occurrence, -1 if not found.
       */
      lastIndexOfSignature: function() {
      },
      /**
       * Read the signature (4 bytes) at the current position and compare it with sig.
       * @param {string} sig the expected signature
       * @return {boolean} true if the signature matches, false otherwise.
       */
      readAndCheckSignature: function() {
      },
      /**
       * Get the next date.
       * @return {Date} the date.
       */
      readDate: function() {
        var dostime = this.readInt(4);
        return new Date(Date.UTC(
          (dostime >> 25 & 127) + 1980,
          // year
          (dostime >> 21 & 15) - 1,
          // month
          dostime >> 16 & 31,
          // day
          dostime >> 11 & 31,
          // hour
          dostime >> 5 & 63,
          // minute
          (dostime & 31) << 1
        ));
      }
    };
    module2.exports = DataReader;
  }
});

// node_modules/jszip/lib/reader/ArrayReader.js
var require_ArrayReader = __commonJS({
  "node_modules/jszip/lib/reader/ArrayReader.js"(exports2, module2) {
    "use strict";
    var DataReader = require_DataReader();
    var utils = require_utils();
    function ArrayReader(data) {
      DataReader.call(this, data);
      for (var i = 0; i < this.data.length; i++) {
        data[i] = data[i] & 255;
      }
    }
    utils.inherits(ArrayReader, DataReader);
    ArrayReader.prototype.byteAt = function(i) {
      return this.data[this.zero + i];
    };
    ArrayReader.prototype.lastIndexOfSignature = function(sig) {
      var sig0 = sig.charCodeAt(0), sig1 = sig.charCodeAt(1), sig2 = sig.charCodeAt(2), sig3 = sig.charCodeAt(3);
      for (var i = this.length - 4; i >= 0; --i) {
        if (this.data[i] === sig0 && this.data[i + 1] === sig1 && this.data[i + 2] === sig2 && this.data[i + 3] === sig3) {
          return i - this.zero;
        }
      }
      return -1;
    };
    ArrayReader.prototype.readAndCheckSignature = function(sig) {
      var sig0 = sig.charCodeAt(0), sig1 = sig.charCodeAt(1), sig2 = sig.charCodeAt(2), sig3 = sig.charCodeAt(3), data = this.readData(4);
      return sig0 === data[0] && sig1 === data[1] && sig2 === data[2] && sig3 === data[3];
    };
    ArrayReader.prototype.readData = function(size) {
      this.checkOffset(size);
      if (size === 0) {
        return [];
      }
      var result = this.data.slice(this.zero + this.index, this.zero + this.index + size);
      this.index += size;
      return result;
    };
    module2.exports = ArrayReader;
  }
});

// node_modules/jszip/lib/reader/StringReader.js
var require_StringReader = __commonJS({
  "node_modules/jszip/lib/reader/StringReader.js"(exports2, module2) {
    "use strict";
    var DataReader = require_DataReader();
    var utils = require_utils();
    function StringReader(data) {
      DataReader.call(this, data);
    }
    utils.inherits(StringReader, DataReader);
    StringReader.prototype.byteAt = function(i) {
      return this.data.charCodeAt(this.zero + i);
    };
    StringReader.prototype.lastIndexOfSignature = function(sig) {
      return this.data.lastIndexOf(sig) - this.zero;
    };
    StringReader.prototype.readAndCheckSignature = function(sig) {
      var data = this.readData(4);
      return sig === data;
    };
    StringReader.prototype.readData = function(size) {
      this.checkOffset(size);
      var result = this.data.slice(this.zero + this.index, this.zero + this.index + size);
      this.index += size;
      return result;
    };
    module2.exports = StringReader;
  }
});

// node_modules/jszip/lib/reader/Uint8ArrayReader.js
var require_Uint8ArrayReader = __commonJS({
  "node_modules/jszip/lib/reader/Uint8ArrayReader.js"(exports2, module2) {
    "use strict";
    var ArrayReader = require_ArrayReader();
    var utils = require_utils();
    function Uint8ArrayReader(data) {
      ArrayReader.call(this, data);
    }
    utils.inherits(Uint8ArrayReader, ArrayReader);
    Uint8ArrayReader.prototype.readData = function(size) {
      this.checkOffset(size);
      if (size === 0) {
        return new Uint8Array(0);
      }
      var result = this.data.subarray(this.zero + this.index, this.zero + this.index + size);
      this.index += size;
      return result;
    };
    module2.exports = Uint8ArrayReader;
  }
});

// node_modules/jszip/lib/reader/NodeBufferReader.js
var require_NodeBufferReader = __commonJS({
  "node_modules/jszip/lib/reader/NodeBufferReader.js"(exports2, module2) {
    "use strict";
    var Uint8ArrayReader = require_Uint8ArrayReader();
    var utils = require_utils();
    function NodeBufferReader(data) {
      Uint8ArrayReader.call(this, data);
    }
    utils.inherits(NodeBufferReader, Uint8ArrayReader);
    NodeBufferReader.prototype.readData = function(size) {
      this.checkOffset(size);
      var result = this.data.slice(this.zero + this.index, this.zero + this.index + size);
      this.index += size;
      return result;
    };
    module2.exports = NodeBufferReader;
  }
});

// node_modules/jszip/lib/reader/readerFor.js
var require_readerFor = __commonJS({
  "node_modules/jszip/lib/reader/readerFor.js"(exports2, module2) {
    "use strict";
    var utils = require_utils();
    var support = require_support();
    var ArrayReader = require_ArrayReader();
    var StringReader = require_StringReader();
    var NodeBufferReader = require_NodeBufferReader();
    var Uint8ArrayReader = require_Uint8ArrayReader();
    module2.exports = function(data) {
      var type = utils.getTypeOf(data);
      utils.checkSupport(type);
      if (type === "string" && !support.uint8array) {
        return new StringReader(data);
      }
      if (type === "nodebuffer") {
        return new NodeBufferReader(data);
      }
      if (support.uint8array) {
        return new Uint8ArrayReader(utils.transformTo("uint8array", data));
      }
      return new ArrayReader(utils.transformTo("array", data));
    };
  }
});

// node_modules/jszip/lib/zipEntry.js
var require_zipEntry = __commonJS({
  "node_modules/jszip/lib/zipEntry.js"(exports2, module2) {
    "use strict";
    var readerFor = require_readerFor();
    var utils = require_utils();
    var CompressedObject = require_compressedObject();
    var crc32fn = require_crc32();
    var utf8 = require_utf8();
    var compressions = require_compressions();
    var support = require_support();
    var MADE_BY_DOS = 0;
    var MADE_BY_UNIX = 3;
    var findCompression = function(compressionMethod) {
      for (var method in compressions) {
        if (!Object.prototype.hasOwnProperty.call(compressions, method)) {
          continue;
        }
        if (compressions[method].magic === compressionMethod) {
          return compressions[method];
        }
      }
      return null;
    };
    function ZipEntry(options2, loadOptions) {
      this.options = options2;
      this.loadOptions = loadOptions;
    }
    ZipEntry.prototype = {
      /**
       * say if the file is encrypted.
       * @return {boolean} true if the file is encrypted, false otherwise.
       */
      isEncrypted: function() {
        return (this.bitFlag & 1) === 1;
      },
      /**
       * say if the file has utf-8 filename/comment.
       * @return {boolean} true if the filename/comment is in utf-8, false otherwise.
       */
      useUTF8: function() {
        return (this.bitFlag & 2048) === 2048;
      },
      /**
       * Read the local part of a zip file and add the info in this object.
       * @param {DataReader} reader the reader to use.
       */
      readLocalPart: function(reader) {
        var compression, localExtraFieldsLength;
        reader.skip(22);
        this.fileNameLength = reader.readInt(2);
        localExtraFieldsLength = reader.readInt(2);
        this.fileName = reader.readData(this.fileNameLength);
        reader.skip(localExtraFieldsLength);
        if (this.compressedSize === -1 || this.uncompressedSize === -1) {
          throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");
        }
        compression = findCompression(this.compressionMethod);
        if (compression === null) {
          throw new Error("Corrupted zip : compression " + utils.pretty(this.compressionMethod) + " unknown (inner file : " + utils.transformTo("string", this.fileName) + ")");
        }
        this.decompressed = new CompressedObject(this.compressedSize, this.uncompressedSize, this.crc32, compression, reader.readData(this.compressedSize));
      },
      /**
       * Read the central part of a zip file and add the info in this object.
       * @param {DataReader} reader the reader to use.
       */
      readCentralPart: function(reader) {
        this.versionMadeBy = reader.readInt(2);
        reader.skip(2);
        this.bitFlag = reader.readInt(2);
        this.compressionMethod = reader.readString(2);
        this.date = reader.readDate();
        this.crc32 = reader.readInt(4);
        this.compressedSize = reader.readInt(4);
        this.uncompressedSize = reader.readInt(4);
        var fileNameLength = reader.readInt(2);
        this.extraFieldsLength = reader.readInt(2);
        this.fileCommentLength = reader.readInt(2);
        this.diskNumberStart = reader.readInt(2);
        this.internalFileAttributes = reader.readInt(2);
        this.externalFileAttributes = reader.readInt(4);
        this.localHeaderOffset = reader.readInt(4);
        if (this.isEncrypted()) {
          throw new Error("Encrypted zip are not supported");
        }
        reader.skip(fileNameLength);
        this.readExtraFields(reader);
        this.parseZIP64ExtraField(reader);
        this.fileComment = reader.readData(this.fileCommentLength);
      },
      /**
       * Parse the external file attributes and get the unix/dos permissions.
       */
      processAttributes: function() {
        this.unixPermissions = null;
        this.dosPermissions = null;
        var madeBy = this.versionMadeBy >> 8;
        this.dir = this.externalFileAttributes & 16 ? true : false;
        if (madeBy === MADE_BY_DOS) {
          this.dosPermissions = this.externalFileAttributes & 63;
        }
        if (madeBy === MADE_BY_UNIX) {
          this.unixPermissions = this.externalFileAttributes >> 16 & 65535;
        }
        if (!this.dir && this.fileNameStr.slice(-1) === "/") {
          this.dir = true;
        }
      },
      /**
       * Parse the ZIP64 extra field and merge the info in the current ZipEntry.
       * @param {DataReader} reader the reader to use.
       */
      parseZIP64ExtraField: function() {
        if (!this.extraFields[1]) {
          return;
        }
        var extraReader = readerFor(this.extraFields[1].value);
        if (this.uncompressedSize === utils.MAX_VALUE_32BITS) {
          this.uncompressedSize = extraReader.readInt(8);
        }
        if (this.compressedSize === utils.MAX_VALUE_32BITS) {
          this.compressedSize = extraReader.readInt(8);
        }
        if (this.localHeaderOffset === utils.MAX_VALUE_32BITS) {
          this.localHeaderOffset = extraReader.readInt(8);
        }
        if (this.diskNumberStart === utils.MAX_VALUE_32BITS) {
          this.diskNumberStart = extraReader.readInt(4);
        }
      },
      /**
       * Read the central part of a zip file and add the info in this object.
       * @param {DataReader} reader the reader to use.
       */
      readExtraFields: function(reader) {
        var end = reader.index + this.extraFieldsLength, extraFieldId, extraFieldLength, extraFieldValue;
        if (!this.extraFields) {
          this.extraFields = {};
        }
        while (reader.index + 4 < end) {
          extraFieldId = reader.readInt(2);
          extraFieldLength = reader.readInt(2);
          extraFieldValue = reader.readData(extraFieldLength);
          this.extraFields[extraFieldId] = {
            id: extraFieldId,
            length: extraFieldLength,
            value: extraFieldValue
          };
        }
        reader.setIndex(end);
      },
      /**
       * Apply an UTF8 transformation if needed.
       */
      handleUTF8: function() {
        var decodeParamType = support.uint8array ? "uint8array" : "array";
        if (this.useUTF8()) {
          this.fileNameStr = utf8.utf8decode(this.fileName);
          this.fileCommentStr = utf8.utf8decode(this.fileComment);
        } else {
          var upath = this.findExtraFieldUnicodePath();
          if (upath !== null) {
            this.fileNameStr = upath;
          } else {
            var fileNameByteArray = utils.transformTo(decodeParamType, this.fileName);
            this.fileNameStr = this.loadOptions.decodeFileName(fileNameByteArray);
          }
          var ucomment = this.findExtraFieldUnicodeComment();
          if (ucomment !== null) {
            this.fileCommentStr = ucomment;
          } else {
            var commentByteArray = utils.transformTo(decodeParamType, this.fileComment);
            this.fileCommentStr = this.loadOptions.decodeFileName(commentByteArray);
          }
        }
      },
      /**
       * Find the unicode path declared in the extra field, if any.
       * @return {String} the unicode path, null otherwise.
       */
      findExtraFieldUnicodePath: function() {
        var upathField = this.extraFields[28789];
        if (upathField) {
          var extraReader = readerFor(upathField.value);
          if (extraReader.readInt(1) !== 1) {
            return null;
          }
          if (crc32fn(this.fileName) !== extraReader.readInt(4)) {
            return null;
          }
          return utf8.utf8decode(extraReader.readData(upathField.length - 5));
        }
        return null;
      },
      /**
       * Find the unicode comment declared in the extra field, if any.
       * @return {String} the unicode comment, null otherwise.
       */
      findExtraFieldUnicodeComment: function() {
        var ucommentField = this.extraFields[25461];
        if (ucommentField) {
          var extraReader = readerFor(ucommentField.value);
          if (extraReader.readInt(1) !== 1) {
            return null;
          }
          if (crc32fn(this.fileComment) !== extraReader.readInt(4)) {
            return null;
          }
          return utf8.utf8decode(extraReader.readData(ucommentField.length - 5));
        }
        return null;
      }
    };
    module2.exports = ZipEntry;
  }
});

// node_modules/jszip/lib/zipEntries.js
var require_zipEntries = __commonJS({
  "node_modules/jszip/lib/zipEntries.js"(exports2, module2) {
    "use strict";
    var readerFor = require_readerFor();
    var utils = require_utils();
    var sig = require_signature();
    var ZipEntry = require_zipEntry();
    var support = require_support();
    function ZipEntries(loadOptions) {
      this.files = [];
      this.loadOptions = loadOptions;
    }
    ZipEntries.prototype = {
      /**
       * Check that the reader is on the specified signature.
       * @param {string} expectedSignature the expected signature.
       * @throws {Error} if it is an other signature.
       */
      checkSignature: function(expectedSignature) {
        if (!this.reader.readAndCheckSignature(expectedSignature)) {
          this.reader.index -= 4;
          var signature = this.reader.readString(4);
          throw new Error("Corrupted zip or bug: unexpected signature (" + utils.pretty(signature) + ", expected " + utils.pretty(expectedSignature) + ")");
        }
      },
      /**
       * Check if the given signature is at the given index.
       * @param {number} askedIndex the index to check.
       * @param {string} expectedSignature the signature to expect.
       * @return {boolean} true if the signature is here, false otherwise.
       */
      isSignature: function(askedIndex, expectedSignature) {
        var currentIndex = this.reader.index;
        this.reader.setIndex(askedIndex);
        var signature = this.reader.readString(4);
        var result = signature === expectedSignature;
        this.reader.setIndex(currentIndex);
        return result;
      },
      /**
       * Read the end of the central directory.
       */
      readBlockEndOfCentral: function() {
        this.diskNumber = this.reader.readInt(2);
        this.diskWithCentralDirStart = this.reader.readInt(2);
        this.centralDirRecordsOnThisDisk = this.reader.readInt(2);
        this.centralDirRecords = this.reader.readInt(2);
        this.centralDirSize = this.reader.readInt(4);
        this.centralDirOffset = this.reader.readInt(4);
        this.zipCommentLength = this.reader.readInt(2);
        var zipComment = this.reader.readData(this.zipCommentLength);
        var decodeParamType = support.uint8array ? "uint8array" : "array";
        var decodeContent = utils.transformTo(decodeParamType, zipComment);
        this.zipComment = this.loadOptions.decodeFileName(decodeContent);
      },
      /**
       * Read the end of the Zip 64 central directory.
       * Not merged with the method readEndOfCentral :
       * The end of central can coexist with its Zip64 brother,
       * I don't want to read the wrong number of bytes !
       */
      readBlockZip64EndOfCentral: function() {
        this.zip64EndOfCentralSize = this.reader.readInt(8);
        this.reader.skip(4);
        this.diskNumber = this.reader.readInt(4);
        this.diskWithCentralDirStart = this.reader.readInt(4);
        this.centralDirRecordsOnThisDisk = this.reader.readInt(8);
        this.centralDirRecords = this.reader.readInt(8);
        this.centralDirSize = this.reader.readInt(8);
        this.centralDirOffset = this.reader.readInt(8);
        this.zip64ExtensibleData = {};
        var extraDataSize = this.zip64EndOfCentralSize - 44, index = 0, extraFieldId, extraFieldLength, extraFieldValue;
        while (index < extraDataSize) {
          extraFieldId = this.reader.readInt(2);
          extraFieldLength = this.reader.readInt(4);
          extraFieldValue = this.reader.readData(extraFieldLength);
          this.zip64ExtensibleData[extraFieldId] = {
            id: extraFieldId,
            length: extraFieldLength,
            value: extraFieldValue
          };
        }
      },
      /**
       * Read the end of the Zip 64 central directory locator.
       */
      readBlockZip64EndOfCentralLocator: function() {
        this.diskWithZip64CentralDirStart = this.reader.readInt(4);
        this.relativeOffsetEndOfZip64CentralDir = this.reader.readInt(8);
        this.disksCount = this.reader.readInt(4);
        if (this.disksCount > 1) {
          throw new Error("Multi-volumes zip are not supported");
        }
      },
      /**
       * Read the local files, based on the offset read in the central part.
       */
      readLocalFiles: function() {
        var i, file;
        for (i = 0; i < this.files.length; i++) {
          file = this.files[i];
          this.reader.setIndex(file.localHeaderOffset);
          this.checkSignature(sig.LOCAL_FILE_HEADER);
          file.readLocalPart(this.reader);
          file.handleUTF8();
          file.processAttributes();
        }
      },
      /**
       * Read the central directory.
       */
      readCentralDir: function() {
        var file;
        this.reader.setIndex(this.centralDirOffset);
        while (this.reader.readAndCheckSignature(sig.CENTRAL_FILE_HEADER)) {
          file = new ZipEntry({
            zip64: this.zip64
          }, this.loadOptions);
          file.readCentralPart(this.reader);
          this.files.push(file);
        }
        if (this.centralDirRecords !== this.files.length) {
          if (this.centralDirRecords !== 0 && this.files.length === 0) {
            throw new Error("Corrupted zip or bug: expected " + this.centralDirRecords + " records in central dir, got " + this.files.length);
          } else {
          }
        }
      },
      /**
       * Read the end of central directory.
       */
      readEndOfCentral: function() {
        var offset = this.reader.lastIndexOfSignature(sig.CENTRAL_DIRECTORY_END);
        if (offset < 0) {
          var isGarbage = !this.isSignature(0, sig.LOCAL_FILE_HEADER);
          if (isGarbage) {
            throw new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");
          } else {
            throw new Error("Corrupted zip: can't find end of central directory");
          }
        }
        this.reader.setIndex(offset);
        var endOfCentralDirOffset = offset;
        this.checkSignature(sig.CENTRAL_DIRECTORY_END);
        this.readBlockEndOfCentral();
        if (this.diskNumber === utils.MAX_VALUE_16BITS || this.diskWithCentralDirStart === utils.MAX_VALUE_16BITS || this.centralDirRecordsOnThisDisk === utils.MAX_VALUE_16BITS || this.centralDirRecords === utils.MAX_VALUE_16BITS || this.centralDirSize === utils.MAX_VALUE_32BITS || this.centralDirOffset === utils.MAX_VALUE_32BITS) {
          this.zip64 = true;
          offset = this.reader.lastIndexOfSignature(sig.ZIP64_CENTRAL_DIRECTORY_LOCATOR);
          if (offset < 0) {
            throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");
          }
          this.reader.setIndex(offset);
          this.checkSignature(sig.ZIP64_CENTRAL_DIRECTORY_LOCATOR);
          this.readBlockZip64EndOfCentralLocator();
          if (!this.isSignature(this.relativeOffsetEndOfZip64CentralDir, sig.ZIP64_CENTRAL_DIRECTORY_END)) {
            this.relativeOffsetEndOfZip64CentralDir = this.reader.lastIndexOfSignature(sig.ZIP64_CENTRAL_DIRECTORY_END);
            if (this.relativeOffsetEndOfZip64CentralDir < 0) {
              throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");
            }
          }
          this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir);
          this.checkSignature(sig.ZIP64_CENTRAL_DIRECTORY_END);
          this.readBlockZip64EndOfCentral();
        }
        var expectedEndOfCentralDirOffset = this.centralDirOffset + this.centralDirSize;
        if (this.zip64) {
          expectedEndOfCentralDirOffset += 20;
          expectedEndOfCentralDirOffset += 12 + this.zip64EndOfCentralSize;
        }
        var extraBytes = endOfCentralDirOffset - expectedEndOfCentralDirOffset;
        if (extraBytes > 0) {
          if (this.isSignature(endOfCentralDirOffset, sig.CENTRAL_FILE_HEADER)) {
          } else {
            this.reader.zero = extraBytes;
          }
        } else if (extraBytes < 0) {
          throw new Error("Corrupted zip: missing " + Math.abs(extraBytes) + " bytes.");
        }
      },
      prepareReader: function(data) {
        this.reader = readerFor(data);
      },
      /**
       * Read a zip file and create ZipEntries.
       * @param {String|ArrayBuffer|Uint8Array|Buffer} data the binary string representing a zip file.
       */
      load: function(data) {
        this.prepareReader(data);
        this.readEndOfCentral();
        this.readCentralDir();
        this.readLocalFiles();
      }
    };
    module2.exports = ZipEntries;
  }
});

// node_modules/jszip/lib/load.js
var require_load = __commonJS({
  "node_modules/jszip/lib/load.js"(exports2, module2) {
    "use strict";
    var utils = require_utils();
    var external = require_external();
    var utf8 = require_utf8();
    var ZipEntries = require_zipEntries();
    var Crc32Probe = require_Crc32Probe();
    var nodejsUtils = require_nodejsUtils();
    function checkEntryCRC32(zipEntry) {
      return new external.Promise(function(resolve, reject) {
        var worker = zipEntry.decompressed.getContentWorker().pipe(new Crc32Probe());
        worker.on("error", function(e) {
          reject(e);
        }).on("end", function() {
          if (worker.streamInfo.crc32 !== zipEntry.decompressed.crc32) {
            reject(new Error("Corrupted zip : CRC32 mismatch"));
          } else {
            resolve();
          }
        }).resume();
      });
    }
    module2.exports = function(data, options2) {
      var zip = this;
      options2 = utils.extend(options2 || {}, {
        base64: false,
        checkCRC32: false,
        optimizedBinaryString: false,
        createFolders: false,
        decodeFileName: utf8.utf8decode
      });
      if (nodejsUtils.isNode && nodejsUtils.isStream(data)) {
        return external.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file."));
      }
      return utils.prepareContent("the loaded zip file", data, true, options2.optimizedBinaryString, options2.base64).then(function(data2) {
        var zipEntries = new ZipEntries(options2);
        zipEntries.load(data2);
        return zipEntries;
      }).then(function checkCRC32(zipEntries) {
        var promises = [external.Promise.resolve(zipEntries)];
        var files = zipEntries.files;
        if (options2.checkCRC32) {
          for (var i = 0; i < files.length; i++) {
            promises.push(checkEntryCRC32(files[i]));
          }
        }
        return external.Promise.all(promises);
      }).then(function addFiles(results2) {
        var zipEntries = results2.shift();
        var files = zipEntries.files;
        for (var i = 0; i < files.length; i++) {
          var input = files[i];
          var unsafeName = input.fileNameStr;
          var safeName = utils.resolve(input.fileNameStr);
          zip.file(safeName, input.decompressed, {
            binary: true,
            optimizedBinaryString: true,
            date: input.date,
            dir: input.dir,
            comment: input.fileCommentStr.length ? input.fileCommentStr : null,
            unixPermissions: input.unixPermissions,
            dosPermissions: input.dosPermissions,
            createFolders: options2.createFolders
          });
          if (!input.dir) {
            zip.file(safeName).unsafeOriginalName = unsafeName;
          }
        }
        if (zipEntries.zipComment.length) {
          zip.comment = zipEntries.zipComment;
        }
        return zip;
      });
    };
  }
});

// node_modules/jszip/lib/index.js
var require_lib3 = __commonJS({
  "node_modules/jszip/lib/index.js"(exports2, module2) {
    "use strict";
    function JSZip4() {
      if (!(this instanceof JSZip4)) {
        return new JSZip4();
      }
      if (arguments.length) {
        throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");
      }
      this.files = /* @__PURE__ */ Object.create(null);
      this.comment = null;
      this.root = "";
      this.clone = function() {
        var newObj = new JSZip4();
        for (var i in this) {
          if (typeof this[i] !== "function") {
            newObj[i] = this[i];
          }
        }
        return newObj;
      };
    }
    JSZip4.prototype = require_object();
    JSZip4.prototype.loadAsync = require_load();
    JSZip4.support = require_support();
    JSZip4.defaults = require_defaults();
    JSZip4.version = "3.10.1";
    JSZip4.loadAsync = function(content, options2) {
      return new JSZip4().loadAsync(content, options2);
    };
    JSZip4.external = require_external();
    module2.exports = JSZip4;
  }
});

// apps/desktop/src/main/utils/readBoundedFile.ts
function normalizeRealPathForComparison(realPath) {
  if (process.platform !== "win32") return realPath;
  return realPath.replace(/^([A-Z]):/, (_, drive) => `${drive.toLowerCase()}:`);
}
function isRealPathWithinRoot(realFilePath, realRoot) {
  const comparableFilePath = normalizeRealPathForComparison(realFilePath);
  const comparableRoot = normalizeRealPathForComparison(realRoot);
  if (comparableFilePath === comparableRoot) return true;
  const rootWithSep = comparableRoot.endsWith(import_node_path3.default.sep) ? comparableRoot : `${comparableRoot}${import_node_path3.default.sep}`;
  return comparableFilePath.startsWith(rootWithSep);
}
function sameInode(a, b) {
  if (a.dev === 0n || a.ino === 0n || b.dev === 0n || b.ino === 0n) return false;
  return a.dev === b.dev && a.ino === b.ino;
}
function sameStableFileState2(before, after) {
  if (!after.isFile()) return false;
  if (before.dev !== 0n && before.ino !== 0n && after.dev !== 0n && after.ino !== 0n) {
    return sameHandleVersion(before, after);
  }
  return before.mode === after.mode && before.size === after.size && before.mtimeNs === after.mtimeNs && before.ctimeNs === after.ctimeNs;
}
function changedWhileReadingError() {
  const error = new Error("source file changed while being read");
  error.code = "EIO";
  return error;
}
function sameHandleVersion(a, b) {
  return a.dev === b.dev && a.ino === b.ino && a.mode === b.mode && a.size === b.size && a.mtimeNs === b.mtimeNs && a.ctimeNs === b.ctimeNs;
}
function verifyStillWithinRootSync(handleStat, filePath, realRoot) {
  try {
    const [pathStat, realFilePath] = [
      import_node_fs2.default.statSync(filePath, { bigint: true }),
      import_node_fs2.default.realpathSync(filePath)
    ];
    if (!sameInode(pathStat, handleStat)) return false;
    return isRealPathWithinRoot(realFilePath, realRoot);
  } catch {
    return false;
  }
}
function readBoundedFileNoFollowSync(filePath, maxBytes, options2) {
  const noFollow = options2?.noFollowFlag !== void 0 ? options2.noFollowFlag : import_node_fs2.default.constants.O_NOFOLLOW ?? null;
  const fd = import_node_fs2.default.openSync(
    filePath,
    import_node_fs2.default.constants.O_RDONLY | (import_node_fs2.default.constants.O_NONBLOCK ?? 0) | (noFollow ?? 0)
  );
  try {
    const stat = import_node_fs2.default.fstatSync(fd, { bigint: true });
    if (!stat.isFile() || Number(stat.size) > maxBytes) return null;
    if (noFollow === null) {
      let linkStat;
      try {
        linkStat = import_node_fs2.default.lstatSync(filePath, { bigint: true });
      } catch {
        return null;
      }
      if (linkStat.isSymbolicLink()) return null;
      if (!sameInode(linkStat, stat)) return null;
    }
    if (options2?.containWithin !== void 0) {
      if (!verifyStillWithinRootSync(stat, filePath, options2.containWithin)) return null;
    }
    const size = Number(stat.size);
    const buffer = Buffer.alloc(size);
    let offset = 0;
    while (offset < size) {
      const bytesRead = import_node_fs2.default.readSync(fd, buffer, offset, size - offset, offset);
      if (bytesRead === 0) throw changedWhileReadingError();
      offset += bytesRead;
    }
    const after = import_node_fs2.default.fstatSync(fd, { bigint: true });
    if (offset !== size || !sameStableFileState2(stat, after)) {
      throw changedWhileReadingError();
    }
    if (options2?.containWithin !== void 0) {
      if (!verifyStillWithinRootSync(after, filePath, options2.containWithin)) {
        throw changedWhileReadingError();
      }
    }
    return buffer.subarray(0, offset);
  } finally {
    import_node_fs2.default.closeSync(fd);
  }
}
var import_node_fs2, import_node_path3, GHOST_MANIFEST_MAX_BYTES2;
var init_readBoundedFile = __esm({
  "apps/desktop/src/main/utils/readBoundedFile.ts"() {
    "use strict";
    import_node_fs2 = __toESM(require("node:fs"));
    import_node_path3 = __toESM(require("node:path"));
    GHOST_MANIFEST_MAX_BYTES2 = 512 * 1024;
  }
});

// node_modules/kind-of/index.js
var require_kind_of = __commonJS({
  "node_modules/kind-of/index.js"(exports2, module2) {
    var toString = Object.prototype.toString;
    module2.exports = function kindOf(val) {
      if (val === void 0) return "undefined";
      if (val === null) return "null";
      var type = typeof val;
      if (type === "boolean") return "boolean";
      if (type === "string") return "string";
      if (type === "number") return "number";
      if (type === "symbol") return "symbol";
      if (type === "function") {
        return isGeneratorFn(val) ? "generatorfunction" : "function";
      }
      if (isArray(val)) return "array";
      if (isBuffer(val)) return "buffer";
      if (isArguments(val)) return "arguments";
      if (isDate(val)) return "date";
      if (isError(val)) return "error";
      if (isRegexp(val)) return "regexp";
      switch (ctorName(val)) {
        case "Symbol":
          return "symbol";
        case "Promise":
          return "promise";
        // Set, Map, WeakSet, WeakMap
        case "WeakMap":
          return "weakmap";
        case "WeakSet":
          return "weakset";
        case "Map":
          return "map";
        case "Set":
          return "set";
        // 8-bit typed arrays
        case "Int8Array":
          return "int8array";
        case "Uint8Array":
          return "uint8array";
        case "Uint8ClampedArray":
          return "uint8clampedarray";
        // 16-bit typed arrays
        case "Int16Array":
          return "int16array";
        case "Uint16Array":
          return "uint16array";
        // 32-bit typed arrays
        case "Int32Array":
          return "int32array";
        case "Uint32Array":
          return "uint32array";
        case "Float32Array":
          return "float32array";
        case "Float64Array":
          return "float64array";
      }
      if (isGeneratorObj(val)) {
        return "generator";
      }
      type = toString.call(val);
      switch (type) {
        case "[object Object]":
          return "object";
        // iterators
        case "[object Map Iterator]":
          return "mapiterator";
        case "[object Set Iterator]":
          return "setiterator";
        case "[object String Iterator]":
          return "stringiterator";
        case "[object Array Iterator]":
          return "arrayiterator";
      }
      return type.slice(8, -1).toLowerCase().replace(/\s/g, "");
    };
    function ctorName(val) {
      return typeof val.constructor === "function" ? val.constructor.name : null;
    }
    function isArray(val) {
      if (Array.isArray) return Array.isArray(val);
      return val instanceof Array;
    }
    function isError(val) {
      return val instanceof Error || typeof val.message === "string" && val.constructor && typeof val.constructor.stackTraceLimit === "number";
    }
    function isDate(val) {
      if (val instanceof Date) return true;
      return typeof val.toDateString === "function" && typeof val.getDate === "function" && typeof val.setDate === "function";
    }
    function isRegexp(val) {
      if (val instanceof RegExp) return true;
      return typeof val.flags === "string" && typeof val.ignoreCase === "boolean" && typeof val.multiline === "boolean" && typeof val.global === "boolean";
    }
    function isGeneratorFn(name, val) {
      return ctorName(name) === "GeneratorFunction";
    }
    function isGeneratorObj(val) {
      return typeof val.throw === "function" && typeof val.return === "function" && typeof val.next === "function";
    }
    function isArguments(val) {
      try {
        if (typeof val.length === "number" && typeof val.callee === "function") {
          return true;
        }
      } catch (err) {
        if (err.message.indexOf("callee") !== -1) {
          return true;
        }
      }
      return false;
    }
    function isBuffer(val) {
      if (val.constructor && typeof val.constructor.isBuffer === "function") {
        return val.constructor.isBuffer(val);
      }
      return false;
    }
  }
});

// node_modules/is-extendable/index.js
var require_is_extendable = __commonJS({
  "node_modules/is-extendable/index.js"(exports2, module2) {
    "use strict";
    module2.exports = function isExtendable(val) {
      return typeof val !== "undefined" && val !== null && (typeof val === "object" || typeof val === "function");
    };
  }
});

// node_modules/extend-shallow/index.js
var require_extend_shallow = __commonJS({
  "node_modules/extend-shallow/index.js"(exports2, module2) {
    "use strict";
    var isObject = require_is_extendable();
    module2.exports = function extend(o) {
      if (!isObject(o)) {
        o = {};
      }
      var len = arguments.length;
      for (var i = 1; i < len; i++) {
        var obj = arguments[i];
        if (isObject(obj)) {
          assign(o, obj);
        }
      }
      return o;
    };
    function assign(a, b) {
      for (var key in b) {
        if (hasOwn(b, key)) {
          a[key] = b[key];
        }
      }
    }
    function hasOwn(obj, key) {
      return Object.prototype.hasOwnProperty.call(obj, key);
    }
  }
});

// node_modules/section-matter/index.js
var require_section_matter = __commonJS({
  "node_modules/section-matter/index.js"(exports2, module2) {
    "use strict";
    var typeOf = require_kind_of();
    var extend = require_extend_shallow();
    module2.exports = function(input, options2) {
      if (typeof options2 === "function") {
        options2 = { parse: options2 };
      }
      var file = toObject(input);
      var defaults = { section_delimiter: "---", parse: identity };
      var opts = extend({}, defaults, options2);
      var delim = opts.section_delimiter;
      var lines = file.content.split(/\r?\n/);
      var sections = null;
      var section = createSection();
      var content = [];
      var stack = [];
      function initSections(val) {
        file.content = val;
        sections = [];
        content = [];
      }
      function closeSection(val) {
        if (stack.length) {
          section.key = getKey(stack[0], delim);
          section.content = val;
          opts.parse(section, sections);
          sections.push(section);
          section = createSection();
          content = [];
          stack = [];
        }
      }
      for (var i = 0; i < lines.length; i++) {
        var line = lines[i];
        var len = stack.length;
        var ln = line.trim();
        if (isDelimiter(ln, delim)) {
          if (ln.length === 3 && i !== 0) {
            if (len === 0 || len === 2) {
              content.push(line);
              continue;
            }
            stack.push(ln);
            section.data = content.join("\n");
            content = [];
            continue;
          }
          if (sections === null) {
            initSections(content.join("\n"));
          }
          if (len === 2) {
            closeSection(content.join("\n"));
          }
          stack.push(ln);
          continue;
        }
        content.push(line);
      }
      if (sections === null) {
        initSections(content.join("\n"));
      } else {
        closeSection(content.join("\n"));
      }
      file.sections = sections;
      return file;
    };
    function isDelimiter(line, delim) {
      if (line.slice(0, delim.length) !== delim) {
        return false;
      }
      if (line.charAt(delim.length + 1) === delim.slice(-1)) {
        return false;
      }
      return true;
    }
    function toObject(input) {
      if (typeOf(input) !== "object") {
        input = { content: input };
      }
      if (typeof input.content !== "string" && !isBuffer(input.content)) {
        throw new TypeError("expected a buffer or string");
      }
      input.content = input.content.toString();
      input.sections = [];
      return input;
    }
    function getKey(val, delim) {
      return val ? val.slice(delim.length).trim() : "";
    }
    function createSection() {
      return { key: "", data: "", content: "" };
    }
    function identity(val) {
      return val;
    }
    function isBuffer(val) {
      if (val && val.constructor && typeof val.constructor.isBuffer === "function") {
        return val.constructor.isBuffer(val);
      }
      return false;
    }
  }
});

// node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/common.js
var require_common2 = __commonJS({
  "node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/common.js"(exports2, module2) {
    "use strict";
    function isNothing(subject) {
      return typeof subject === "undefined" || subject === null;
    }
    function isObject(subject) {
      return typeof subject === "object" && subject !== null;
    }
    function toArray(sequence) {
      if (Array.isArray(sequence)) return sequence;
      else if (isNothing(sequence)) return [];
      return [sequence];
    }
    function extend(target, source) {
      var index, length, key, sourceKeys;
      if (source) {
        sourceKeys = Object.keys(source);
        for (index = 0, length = sourceKeys.length; index < length; index += 1) {
          key = sourceKeys[index];
          target[key] = source[key];
        }
      }
      return target;
    }
    function repeat(string2, count) {
      var result = "", cycle;
      for (cycle = 0; cycle < count; cycle += 1) {
        result += string2;
      }
      return result;
    }
    function isNegativeZero(number) {
      return number === 0 && Number.NEGATIVE_INFINITY === 1 / number;
    }
    module2.exports.isNothing = isNothing;
    module2.exports.isObject = isObject;
    module2.exports.toArray = toArray;
    module2.exports.repeat = repeat;
    module2.exports.isNegativeZero = isNegativeZero;
    module2.exports.extend = extend;
  }
});

// node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/exception.js
var require_exception = __commonJS({
  "node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/exception.js"(exports2, module2) {
    "use strict";
    function YAMLException(reason, mark) {
      Error.call(this);
      this.name = "YAMLException";
      this.reason = reason;
      this.mark = mark;
      this.message = (this.reason || "(unknown reason)") + (this.mark ? " " + this.mark.toString() : "");
      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, this.constructor);
      } else {
        this.stack = new Error().stack || "";
      }
    }
    YAMLException.prototype = Object.create(Error.prototype);
    YAMLException.prototype.constructor = YAMLException;
    YAMLException.prototype.toString = function toString(compact) {
      var result = this.name + ": ";
      result += this.reason || "(unknown reason)";
      if (!compact && this.mark) {
        result += " " + this.mark.toString();
      }
      return result;
    };
    module2.exports = YAMLException;
  }
});

// node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/mark.js
var require_mark = __commonJS({
  "node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/mark.js"(exports2, module2) {
    "use strict";
    var common = require_common2();
    function Mark(name, buffer, position, line, column) {
      this.name = name;
      this.buffer = buffer;
      this.position = position;
      this.line = line;
      this.column = column;
    }
    Mark.prototype.getSnippet = function getSnippet(indent, maxLength) {
      var head, start, tail, end, snippet;
      if (!this.buffer) return null;
      indent = indent || 4;
      maxLength = maxLength || 75;
      head = "";
      start = this.position;
      while (start > 0 && "\0\r\n\x85\u2028\u2029".indexOf(this.buffer.charAt(start - 1)) === -1) {
        start -= 1;
        if (this.position - start > maxLength / 2 - 1) {
          head = " ... ";
          start += 5;
          break;
        }
      }
      tail = "";
      end = this.position;
      while (end < this.buffer.length && "\0\r\n\x85\u2028\u2029".indexOf(this.buffer.charAt(end)) === -1) {
        end += 1;
        if (end - this.position > maxLength / 2 - 1) {
          tail = " ... ";
          end -= 5;
          break;
        }
      }
      snippet = this.buffer.slice(start, end);
      return common.repeat(" ", indent) + head + snippet + tail + "\n" + common.repeat(" ", indent + this.position - start + head.length) + "^";
    };
    Mark.prototype.toString = function toString(compact) {
      var snippet, where = "";
      if (this.name) {
        where += 'in "' + this.name + '" ';
      }
      where += "at line " + (this.line + 1) + ", column " + (this.column + 1);
      if (!compact) {
        snippet = this.getSnippet();
        if (snippet) {
          where += ":\n" + snippet;
        }
      }
      return where;
    };
    module2.exports = Mark;
  }
});

// node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/type.js
var require_type = __commonJS({
  "node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/type.js"(exports2, module2) {
    "use strict";
    var YAMLException = require_exception();
    var TYPE_CONSTRUCTOR_OPTIONS = [
      "kind",
      "resolve",
      "construct",
      "instanceOf",
      "predicate",
      "represent",
      "defaultStyle",
      "styleAliases"
    ];
    var YAML_NODE_KINDS = [
      "scalar",
      "sequence",
      "mapping"
    ];
    function compileStyleAliases(map) {
      var result = {};
      if (map !== null) {
        Object.keys(map).forEach(function(style) {
          map[style].forEach(function(alias) {
            result[String(alias)] = style;
          });
        });
      }
      return result;
    }
    function Type(tag, options2) {
      options2 = options2 || {};
      Object.keys(options2).forEach(function(name) {
        if (TYPE_CONSTRUCTOR_OPTIONS.indexOf(name) === -1) {
          throw new YAMLException('Unknown option "' + name + '" is met in definition of "' + tag + '" YAML type.');
        }
      });
      this.tag = tag;
      this.kind = options2["kind"] || null;
      this.resolve = options2["resolve"] || function() {
        return true;
      };
      this.construct = options2["construct"] || function(data) {
        return data;
      };
      this.instanceOf = options2["instanceOf"] || null;
      this.predicate = options2["predicate"] || null;
      this.represent = options2["represent"] || null;
      this.defaultStyle = options2["defaultStyle"] || null;
      this.styleAliases = compileStyleAliases(options2["styleAliases"] || null);
      if (YAML_NODE_KINDS.indexOf(this.kind) === -1) {
        throw new YAMLException('Unknown kind "' + this.kind + '" is specified for "' + tag + '" YAML type.');
      }
    }
    module2.exports = Type;
  }
});

// node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/schema.js
var require_schema = __commonJS({
  "node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/schema.js"(exports2, module2) {
    "use strict";
    var common = require_common2();
    var YAMLException = require_exception();
    var Type = require_type();
    function compileList(schema, name, result) {
      var exclude = [];
      schema.include.forEach(function(includedSchema) {
        result = compileList(includedSchema, name, result);
      });
      schema[name].forEach(function(currentType) {
        result.forEach(function(previousType, previousIndex) {
          if (previousType.tag === currentType.tag && previousType.kind === currentType.kind) {
            exclude.push(previousIndex);
          }
        });
        result.push(currentType);
      });
      return result.filter(function(type, index) {
        return exclude.indexOf(index) === -1;
      });
    }
    function compileMap() {
      var result = {
        scalar: {},
        sequence: {},
        mapping: {},
        fallback: {}
      }, index, length;
      function collectType(type) {
        result[type.kind][type.tag] = result["fallback"][type.tag] = type;
      }
      for (index = 0, length = arguments.length; index < length; index += 1) {
        arguments[index].forEach(collectType);
      }
      return result;
    }
    function Schema(definition) {
      this.include = definition.include || [];
      this.implicit = definition.implicit || [];
      this.explicit = definition.explicit || [];
      this.implicit.forEach(function(type) {
        if (type.loadKind && type.loadKind !== "scalar") {
          throw new YAMLException("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");
        }
      });
      this.compiledImplicit = compileList(this, "implicit", []);
      this.compiledExplicit = compileList(this, "explicit", []);
      this.compiledTypeMap = compileMap(this.compiledImplicit, this.compiledExplicit);
    }
    Schema.DEFAULT = null;
    Schema.create = function createSchema() {
      var schemas, types;
      switch (arguments.length) {
        case 1:
          schemas = Schema.DEFAULT;
          types = arguments[0];
          break;
        case 2:
          schemas = arguments[0];
          types = arguments[1];
          break;
        default:
          throw new YAMLException("Wrong number of arguments for Schema.create function");
      }
      schemas = common.toArray(schemas);
      types = common.toArray(types);
      if (!schemas.every(function(schema) {
        return schema instanceof Schema;
      })) {
        throw new YAMLException("Specified list of super schemas (or a single Schema object) contains a non-Schema object.");
      }
      if (!types.every(function(type) {
        return type instanceof Type;
      })) {
        throw new YAMLException("Specified list of YAML types (or a single Type object) contains a non-Type object.");
      }
      return new Schema({
        include: schemas,
        explicit: types
      });
    };
    module2.exports = Schema;
  }
});

// node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/type/str.js
var require_str = __commonJS({
  "node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/type/str.js"(exports2, module2) {
    "use strict";
    var Type = require_type();
    module2.exports = new Type("tag:yaml.org,2002:str", {
      kind: "scalar",
      construct: function(data) {
        return data !== null ? data : "";
      }
    });
  }
});

// node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/type/seq.js
var require_seq = __commonJS({
  "node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/type/seq.js"(exports2, module2) {
    "use strict";
    var Type = require_type();
    module2.exports = new Type("tag:yaml.org,2002:seq", {
      kind: "sequence",
      construct: function(data) {
        return data !== null ? data : [];
      }
    });
  }
});

// node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/type/map.js
var require_map = __commonJS({
  "node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/type/map.js"(exports2, module2) {
    "use strict";
    var Type = require_type();
    module2.exports = new Type("tag:yaml.org,2002:map", {
      kind: "mapping",
      construct: function(data) {
        return data !== null ? data : {};
      }
    });
  }
});

// node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/schema/failsafe.js
var require_failsafe = __commonJS({
  "node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/schema/failsafe.js"(exports2, module2) {
    "use strict";
    var Schema = require_schema();
    module2.exports = new Schema({
      explicit: [
        require_str(),
        require_seq(),
        require_map()
      ]
    });
  }
});

// node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/type/null.js
var require_null = __commonJS({
  "node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/type/null.js"(exports2, module2) {
    "use strict";
    var Type = require_type();
    function resolveYamlNull(data) {
      if (data === null) return true;
      var max = data.length;
      return max === 1 && data === "~" || max === 4 && (data === "null" || data === "Null" || data === "NULL");
    }
    function constructYamlNull() {
      return null;
    }
    function isNull(object2) {
      return object2 === null;
    }
    module2.exports = new Type("tag:yaml.org,2002:null", {
      kind: "scalar",
      resolve: resolveYamlNull,
      construct: constructYamlNull,
      predicate: isNull,
      represent: {
        canonical: function() {
          return "~";
        },
        lowercase: function() {
          return "null";
        },
        uppercase: function() {
          return "NULL";
        },
        camelcase: function() {
          return "Null";
        }
      },
      defaultStyle: "lowercase"
    });
  }
});

// node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/type/bool.js
var require_bool = __commonJS({
  "node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/type/bool.js"(exports2, module2) {
    "use strict";
    var Type = require_type();
    function resolveYamlBoolean(data) {
      if (data === null) return false;
      var max = data.length;
      return max === 4 && (data === "true" || data === "True" || data === "TRUE") || max === 5 && (data === "false" || data === "False" || data === "FALSE");
    }
    function constructYamlBoolean(data) {
      return data === "true" || data === "True" || data === "TRUE";
    }
    function isBoolean(object2) {
      return Object.prototype.toString.call(object2) === "[object Boolean]";
    }
    module2.exports = new Type("tag:yaml.org,2002:bool", {
      kind: "scalar",
      resolve: resolveYamlBoolean,
      construct: constructYamlBoolean,
      predicate: isBoolean,
      represent: {
        lowercase: function(object2) {
          return object2 ? "true" : "false";
        },
        uppercase: function(object2) {
          return object2 ? "TRUE" : "FALSE";
        },
        camelcase: function(object2) {
          return object2 ? "True" : "False";
        }
      },
      defaultStyle: "lowercase"
    });
  }
});

// node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/type/int.js
var require_int = __commonJS({
  "node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/type/int.js"(exports2, module2) {
    "use strict";
    var common = require_common2();
    var Type = require_type();
    function isHexCode(c) {
      return 48 <= c && c <= 57 || 65 <= c && c <= 70 || 97 <= c && c <= 102;
    }
    function isOctCode(c) {
      return 48 <= c && c <= 55;
    }
    function isDecCode(c) {
      return 48 <= c && c <= 57;
    }
    function resolveYamlInteger(data) {
      if (data === null) return false;
      var max = data.length, index = 0, hasDigits = false, ch;
      if (!max) return false;
      ch = data[index];
      if (ch === "-" || ch === "+") {
        ch = data[++index];
      }
      if (ch === "0") {
        if (index + 1 === max) return true;
        ch = data[++index];
        if (ch === "b") {
          index++;
          for (; index < max; index++) {
            ch = data[index];
            if (ch === "_") continue;
            if (ch !== "0" && ch !== "1") return false;
            hasDigits = true;
          }
          return hasDigits && ch !== "_";
        }
        if (ch === "x") {
          index++;
          for (; index < max; index++) {
            ch = data[index];
            if (ch === "_") continue;
            if (!isHexCode(data.charCodeAt(index))) return false;
            hasDigits = true;
          }
          return hasDigits && ch !== "_";
        }
        for (; index < max; index++) {
          ch = data[index];
          if (ch === "_") continue;
          if (!isOctCode(data.charCodeAt(index))) return false;
          hasDigits = true;
        }
        return hasDigits && ch !== "_";
      }
      if (ch === "_") return false;
      for (; index < max; index++) {
        ch = data[index];
        if (ch === "_") continue;
        if (ch === ":") break;
        if (!isDecCode(data.charCodeAt(index))) {
          return false;
        }
        hasDigits = true;
      }
      if (!hasDigits || ch === "_") return false;
      if (ch !== ":") return true;
      return /^(:[0-5]?[0-9])+$/.test(data.slice(index));
    }
    function constructYamlInteger(data) {
      var value = data, sign = 1, ch, base2, digits = [];
      if (value.indexOf("_") !== -1) {
        value = value.replace(/_/g, "");
      }
      ch = value[0];
      if (ch === "-" || ch === "+") {
        if (ch === "-") sign = -1;
        value = value.slice(1);
        ch = value[0];
      }
      if (value === "0") return 0;
      if (ch === "0") {
        if (value[1] === "b") return sign * parseInt(value.slice(2), 2);
        if (value[1] === "x") return sign * parseInt(value, 16);
        return sign * parseInt(value, 8);
      }
      if (value.indexOf(":") !== -1) {
        value.split(":").forEach(function(v) {
          digits.unshift(parseInt(v, 10));
        });
        value = 0;
        base2 = 1;
        digits.forEach(function(d) {
          value += d * base2;
          base2 *= 60;
        });
        return sign * value;
      }
      return sign * parseInt(value, 10);
    }
    function isInteger(object2) {
      return Object.prototype.toString.call(object2) === "[object Number]" && (object2 % 1 === 0 && !common.isNegativeZero(object2));
    }
    module2.exports = new Type("tag:yaml.org,2002:int", {
      kind: "scalar",
      resolve: resolveYamlInteger,
      construct: constructYamlInteger,
      predicate: isInteger,
      represent: {
        binary: function(obj) {
          return obj >= 0 ? "0b" + obj.toString(2) : "-0b" + obj.toString(2).slice(1);
        },
        octal: function(obj) {
          return obj >= 0 ? "0" + obj.toString(8) : "-0" + obj.toString(8).slice(1);
        },
        decimal: function(obj) {
          return obj.toString(10);
        },
        /* eslint-disable max-len */
        hexadecimal: function(obj) {
          return obj >= 0 ? "0x" + obj.toString(16).toUpperCase() : "-0x" + obj.toString(16).toUpperCase().slice(1);
        }
      },
      defaultStyle: "decimal",
      styleAliases: {
        binary: [2, "bin"],
        octal: [8, "oct"],
        decimal: [10, "dec"],
        hexadecimal: [16, "hex"]
      }
    });
  }
});

// node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/type/float.js
var require_float = __commonJS({
  "node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/type/float.js"(exports2, module2) {
    "use strict";
    var common = require_common2();
    var Type = require_type();
    var YAML_FLOAT_PATTERN = new RegExp(
      // 2.5e4, 2.5 and integers
      "^(?:[-+]?(?:0|[1-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\\.[0-9_]*|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"
    );
    function resolveYamlFloat(data) {
      if (data === null) return false;
      if (!YAML_FLOAT_PATTERN.test(data) || // Quick hack to not allow integers end with `_`
      // Probably should update regexp & check speed
      data[data.length - 1] === "_") {
        return false;
      }
      return true;
    }
    function constructYamlFloat(data) {
      var value, sign, base2, digits;
      value = data.replace(/_/g, "").toLowerCase();
      sign = value[0] === "-" ? -1 : 1;
      digits = [];
      if ("+-".indexOf(value[0]) >= 0) {
        value = value.slice(1);
      }
      if (value === ".inf") {
        return sign === 1 ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY;
      } else if (value === ".nan") {
        return NaN;
      } else if (value.indexOf(":") >= 0) {
        value.split(":").forEach(function(v) {
          digits.unshift(parseFloat(v, 10));
        });
        value = 0;
        base2 = 1;
        digits.forEach(function(d) {
          value += d * base2;
          base2 *= 60;
        });
        return sign * value;
      }
      return sign * parseFloat(value, 10);
    }
    var SCIENTIFIC_WITHOUT_DOT = /^[-+]?[0-9]+e/;
    function representYamlFloat(object2, style) {
      var res;
      if (isNaN(object2)) {
        switch (style) {
          case "lowercase":
            return ".nan";
          case "uppercase":
            return ".NAN";
          case "camelcase":
            return ".NaN";
        }
      } else if (Number.POSITIVE_INFINITY === object2) {
        switch (style) {
          case "lowercase":
            return ".inf";
          case "uppercase":
            return ".INF";
          case "camelcase":
            return ".Inf";
        }
      } else if (Number.NEGATIVE_INFINITY === object2) {
        switch (style) {
          case "lowercase":
            return "-.inf";
          case "uppercase":
            return "-.INF";
          case "camelcase":
            return "-.Inf";
        }
      } else if (common.isNegativeZero(object2)) {
        return "-0.0";
      }
      res = object2.toString(10);
      return SCIENTIFIC_WITHOUT_DOT.test(res) ? res.replace("e", ".e") : res;
    }
    function isFloat(object2) {
      return Object.prototype.toString.call(object2) === "[object Number]" && (object2 % 1 !== 0 || common.isNegativeZero(object2));
    }
    module2.exports = new Type("tag:yaml.org,2002:float", {
      kind: "scalar",
      resolve: resolveYamlFloat,
      construct: constructYamlFloat,
      predicate: isFloat,
      represent: representYamlFloat,
      defaultStyle: "lowercase"
    });
  }
});

// node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/schema/json.js
var require_json = __commonJS({
  "node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/schema/json.js"(exports2, module2) {
    "use strict";
    var Schema = require_schema();
    module2.exports = new Schema({
      include: [
        require_failsafe()
      ],
      implicit: [
        require_null(),
        require_bool(),
        require_int(),
        require_float()
      ]
    });
  }
});

// node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/schema/core.js
var require_core = __commonJS({
  "node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/schema/core.js"(exports2, module2) {
    "use strict";
    var Schema = require_schema();
    module2.exports = new Schema({
      include: [
        require_json()
      ]
    });
  }
});

// node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/type/timestamp.js
var require_timestamp = __commonJS({
  "node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/type/timestamp.js"(exports2, module2) {
    "use strict";
    var Type = require_type();
    var YAML_DATE_REGEXP = new RegExp(
      "^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"
    );
    var YAML_TIMESTAMP_REGEXP = new RegExp(
      "^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$"
    );
    function resolveYamlTimestamp(data) {
      if (data === null) return false;
      if (YAML_DATE_REGEXP.exec(data) !== null) return true;
      if (YAML_TIMESTAMP_REGEXP.exec(data) !== null) return true;
      return false;
    }
    function constructYamlTimestamp(data) {
      var match, year, month, day, hour, minute, second, fraction = 0, delta = null, tz_hour, tz_minute, date;
      match = YAML_DATE_REGEXP.exec(data);
      if (match === null) match = YAML_TIMESTAMP_REGEXP.exec(data);
      if (match === null) throw new Error("Date resolve error");
      year = +match[1];
      month = +match[2] - 1;
      day = +match[3];
      if (!match[4]) {
        return new Date(Date.UTC(year, month, day));
      }
      hour = +match[4];
      minute = +match[5];
      second = +match[6];
      if (match[7]) {
        fraction = match[7].slice(0, 3);
        while (fraction.length < 3) {
          fraction += "0";
        }
        fraction = +fraction;
      }
      if (match[9]) {
        tz_hour = +match[10];
        tz_minute = +(match[11] || 0);
        delta = (tz_hour * 60 + tz_minute) * 6e4;
        if (match[9] === "-") delta = -delta;
      }
      date = new Date(Date.UTC(year, month, day, hour, minute, second, fraction));
      if (delta) date.setTime(date.getTime() - delta);
      return date;
    }
    function representYamlTimestamp(object2) {
      return object2.toISOString();
    }
    module2.exports = new Type("tag:yaml.org,2002:timestamp", {
      kind: "scalar",
      resolve: resolveYamlTimestamp,
      construct: constructYamlTimestamp,
      instanceOf: Date,
      represent: representYamlTimestamp
    });
  }
});

// node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/type/merge.js
var require_merge = __commonJS({
  "node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/type/merge.js"(exports2, module2) {
    "use strict";
    var Type = require_type();
    function resolveYamlMerge(data) {
      return data === "<<" || data === null;
    }
    module2.exports = new Type("tag:yaml.org,2002:merge", {
      kind: "scalar",
      resolve: resolveYamlMerge
    });
  }
});

// node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/type/binary.js
var require_binary = __commonJS({
  "node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/type/binary.js"(exports2, module2) {
    "use strict";
    var NodeBuffer;
    try {
      _require = require;
      NodeBuffer = _require("buffer").Buffer;
    } catch (__) {
    }
    var _require;
    var Type = require_type();
    var BASE64_MAP = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r";
    function resolveYamlBinary(data) {
      if (data === null) return false;
      var code, idx, bitlen = 0, max = data.length, map = BASE64_MAP;
      for (idx = 0; idx < max; idx++) {
        code = map.indexOf(data.charAt(idx));
        if (code > 64) continue;
        if (code < 0) return false;
        bitlen += 6;
      }
      return bitlen % 8 === 0;
    }
    function constructYamlBinary(data) {
      var idx, tailbits, input = data.replace(/[\r\n=]/g, ""), max = input.length, map = BASE64_MAP, bits = 0, result = [];
      for (idx = 0; idx < max; idx++) {
        if (idx % 4 === 0 && idx) {
          result.push(bits >> 16 & 255);
          result.push(bits >> 8 & 255);
          result.push(bits & 255);
        }
        bits = bits << 6 | map.indexOf(input.charAt(idx));
      }
      tailbits = max % 4 * 6;
      if (tailbits === 0) {
        result.push(bits >> 16 & 255);
        result.push(bits >> 8 & 255);
        result.push(bits & 255);
      } else if (tailbits === 18) {
        result.push(bits >> 10 & 255);
        result.push(bits >> 2 & 255);
      } else if (tailbits === 12) {
        result.push(bits >> 4 & 255);
      }
      if (NodeBuffer) {
        return NodeBuffer.from ? NodeBuffer.from(result) : new NodeBuffer(result);
      }
      return result;
    }
    function representYamlBinary(object2) {
      var result = "", bits = 0, idx, tail, max = object2.length, map = BASE64_MAP;
      for (idx = 0; idx < max; idx++) {
        if (idx % 3 === 0 && idx) {
          result += map[bits >> 18 & 63];
          result += map[bits >> 12 & 63];
          result += map[bits >> 6 & 63];
          result += map[bits & 63];
        }
        bits = (bits << 8) + object2[idx];
      }
      tail = max % 3;
      if (tail === 0) {
        result += map[bits >> 18 & 63];
        result += map[bits >> 12 & 63];
        result += map[bits >> 6 & 63];
        result += map[bits & 63];
      } else if (tail === 2) {
        result += map[bits >> 10 & 63];
        result += map[bits >> 4 & 63];
        result += map[bits << 2 & 63];
        result += map[64];
      } else if (tail === 1) {
        result += map[bits >> 2 & 63];
        result += map[bits << 4 & 63];
        result += map[64];
        result += map[64];
      }
      return result;
    }
    function isBinary(object2) {
      return NodeBuffer && NodeBuffer.isBuffer(object2);
    }
    module2.exports = new Type("tag:yaml.org,2002:binary", {
      kind: "scalar",
      resolve: resolveYamlBinary,
      construct: constructYamlBinary,
      predicate: isBinary,
      represent: representYamlBinary
    });
  }
});

// node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/type/omap.js
var require_omap = __commonJS({
  "node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/type/omap.js"(exports2, module2) {
    "use strict";
    var Type = require_type();
    var _hasOwnProperty = Object.prototype.hasOwnProperty;
    var _toString = Object.prototype.toString;
    function resolveYamlOmap(data) {
      if (data === null) return true;
      var objectKeys = [], index, length, pair, pairKey, pairHasKey, object2 = data;
      for (index = 0, length = object2.length; index < length; index += 1) {
        pair = object2[index];
        pairHasKey = false;
        if (_toString.call(pair) !== "[object Object]") return false;
        for (pairKey in pair) {
          if (_hasOwnProperty.call(pair, pairKey)) {
            if (!pairHasKey) pairHasKey = true;
            else return false;
          }
        }
        if (!pairHasKey) return false;
        if (objectKeys.indexOf(pairKey) === -1) objectKeys.push(pairKey);
        else return false;
      }
      return true;
    }
    function constructYamlOmap(data) {
      return data !== null ? data : [];
    }
    module2.exports = new Type("tag:yaml.org,2002:omap", {
      kind: "sequence",
      resolve: resolveYamlOmap,
      construct: constructYamlOmap
    });
  }
});

// node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/type/pairs.js
var require_pairs = __commonJS({
  "node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/type/pairs.js"(exports2, module2) {
    "use strict";
    var Type = require_type();
    var _toString = Object.prototype.toString;
    function resolveYamlPairs(data) {
      if (data === null) return true;
      var index, length, pair, keys, result, object2 = data;
      result = new Array(object2.length);
      for (index = 0, length = object2.length; index < length; index += 1) {
        pair = object2[index];
        if (_toString.call(pair) !== "[object Object]") return false;
        keys = Object.keys(pair);
        if (keys.length !== 1) return false;
        result[index] = [keys[0], pair[keys[0]]];
      }
      return true;
    }
    function constructYamlPairs(data) {
      if (data === null) return [];
      var index, length, pair, keys, result, object2 = data;
      result = new Array(object2.length);
      for (index = 0, length = object2.length; index < length; index += 1) {
        pair = object2[index];
        keys = Object.keys(pair);
        result[index] = [keys[0], pair[keys[0]]];
      }
      return result;
    }
    module2.exports = new Type("tag:yaml.org,2002:pairs", {
      kind: "sequence",
      resolve: resolveYamlPairs,
      construct: constructYamlPairs
    });
  }
});

// node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/type/set.js
var require_set = __commonJS({
  "node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/type/set.js"(exports2, module2) {
    "use strict";
    var Type = require_type();
    var _hasOwnProperty = Object.prototype.hasOwnProperty;
    function resolveYamlSet(data) {
      if (data === null) return true;
      var key, object2 = data;
      for (key in object2) {
        if (_hasOwnProperty.call(object2, key)) {
          if (object2[key] !== null) return false;
        }
      }
      return true;
    }
    function constructYamlSet(data) {
      return data !== null ? data : {};
    }
    module2.exports = new Type("tag:yaml.org,2002:set", {
      kind: "mapping",
      resolve: resolveYamlSet,
      construct: constructYamlSet
    });
  }
});

// node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/schema/default_safe.js
var require_default_safe = __commonJS({
  "node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/schema/default_safe.js"(exports2, module2) {
    "use strict";
    var Schema = require_schema();
    module2.exports = new Schema({
      include: [
        require_core()
      ],
      implicit: [
        require_timestamp(),
        require_merge()
      ],
      explicit: [
        require_binary(),
        require_omap(),
        require_pairs(),
        require_set()
      ]
    });
  }
});

// node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/type/js/undefined.js
var require_undefined = __commonJS({
  "node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/type/js/undefined.js"(exports2, module2) {
    "use strict";
    var Type = require_type();
    function resolveJavascriptUndefined() {
      return true;
    }
    function constructJavascriptUndefined() {
      return void 0;
    }
    function representJavascriptUndefined() {
      return "";
    }
    function isUndefined(object2) {
      return typeof object2 === "undefined";
    }
    module2.exports = new Type("tag:yaml.org,2002:js/undefined", {
      kind: "scalar",
      resolve: resolveJavascriptUndefined,
      construct: constructJavascriptUndefined,
      predicate: isUndefined,
      represent: representJavascriptUndefined
    });
  }
});

// node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/type/js/regexp.js
var require_regexp = __commonJS({
  "node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/type/js/regexp.js"(exports2, module2) {
    "use strict";
    var Type = require_type();
    function resolveJavascriptRegExp(data) {
      if (data === null) return false;
      if (data.length === 0) return false;
      var regexp = data, tail = /\/([gim]*)$/.exec(data), modifiers = "";
      if (regexp[0] === "/") {
        if (tail) modifiers = tail[1];
        if (modifiers.length > 3) return false;
        if (regexp[regexp.length - modifiers.length - 1] !== "/") return false;
      }
      return true;
    }
    function constructJavascriptRegExp(data) {
      var regexp = data, tail = /\/([gim]*)$/.exec(data), modifiers = "";
      if (regexp[0] === "/") {
        if (tail) modifiers = tail[1];
        regexp = regexp.slice(1, regexp.length - modifiers.length - 1);
      }
      return new RegExp(regexp, modifiers);
    }
    function representJavascriptRegExp(object2) {
      var result = "/" + object2.source + "/";
      if (object2.global) result += "g";
      if (object2.multiline) result += "m";
      if (object2.ignoreCase) result += "i";
      return result;
    }
    function isRegExp(object2) {
      return Object.prototype.toString.call(object2) === "[object RegExp]";
    }
    module2.exports = new Type("tag:yaml.org,2002:js/regexp", {
      kind: "scalar",
      resolve: resolveJavascriptRegExp,
      construct: constructJavascriptRegExp,
      predicate: isRegExp,
      represent: representJavascriptRegExp
    });
  }
});

// node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/type/js/function.js
var require_function = __commonJS({
  "node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/type/js/function.js"(exports2, module2) {
    "use strict";
    var esprima;
    try {
      _require = require;
      esprima = _require("esprima");
    } catch (_) {
      if (typeof window !== "undefined") esprima = window.esprima;
    }
    var _require;
    var Type = require_type();
    function resolveJavascriptFunction(data) {
      if (data === null) return false;
      try {
        var source = "(" + data + ")", ast = esprima.parse(source, { range: true });
        if (ast.type !== "Program" || ast.body.length !== 1 || ast.body[0].type !== "ExpressionStatement" || ast.body[0].expression.type !== "ArrowFunctionExpression" && ast.body[0].expression.type !== "FunctionExpression") {
          return false;
        }
        return true;
      } catch (err) {
        return false;
      }
    }
    function constructJavascriptFunction(data) {
      var source = "(" + data + ")", ast = esprima.parse(source, { range: true }), params = [], body;
      if (ast.type !== "Program" || ast.body.length !== 1 || ast.body[0].type !== "ExpressionStatement" || ast.body[0].expression.type !== "ArrowFunctionExpression" && ast.body[0].expression.type !== "FunctionExpression") {
        throw new Error("Failed to resolve function");
      }
      ast.body[0].expression.params.forEach(function(param) {
        params.push(param.name);
      });
      body = ast.body[0].expression.body.range;
      if (ast.body[0].expression.body.type === "BlockStatement") {
        return new Function(params, source.slice(body[0] + 1, body[1] - 1));
      }
      return new Function(params, "return " + source.slice(body[0], body[1]));
    }
    function representJavascriptFunction(object2) {
      return object2.toString();
    }
    function isFunction(object2) {
      return Object.prototype.toString.call(object2) === "[object Function]";
    }
    module2.exports = new Type("tag:yaml.org,2002:js/function", {
      kind: "scalar",
      resolve: resolveJavascriptFunction,
      construct: constructJavascriptFunction,
      predicate: isFunction,
      represent: representJavascriptFunction
    });
  }
});

// node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/schema/default_full.js
var require_default_full = __commonJS({
  "node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/schema/default_full.js"(exports2, module2) {
    "use strict";
    var Schema = require_schema();
    module2.exports = Schema.DEFAULT = new Schema({
      include: [
        require_default_safe()
      ],
      explicit: [
        require_undefined(),
        require_regexp(),
        require_function()
      ]
    });
  }
});

// node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/loader.js
var require_loader = __commonJS({
  "node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/loader.js"(exports2, module2) {
    "use strict";
    var common = require_common2();
    var YAMLException = require_exception();
    var Mark = require_mark();
    var DEFAULT_SAFE_SCHEMA = require_default_safe();
    var DEFAULT_FULL_SCHEMA = require_default_full();
    var _hasOwnProperty = Object.prototype.hasOwnProperty;
    var CONTEXT_FLOW_IN = 1;
    var CONTEXT_FLOW_OUT = 2;
    var CONTEXT_BLOCK_IN = 3;
    var CONTEXT_BLOCK_OUT = 4;
    var CHOMPING_CLIP = 1;
    var CHOMPING_STRIP = 2;
    var CHOMPING_KEEP = 3;
    var PATTERN_NON_PRINTABLE = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
    var PATTERN_NON_ASCII_LINE_BREAKS = /[\x85\u2028\u2029]/;
    var PATTERN_FLOW_INDICATORS = /[,\[\]\{\}]/;
    var PATTERN_TAG_HANDLE = /^(?:!|!!|![a-z\-]+!)$/i;
    var PATTERN_TAG_URI = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;
    function _class(obj) {
      return Object.prototype.toString.call(obj);
    }
    function is_EOL(c) {
      return c === 10 || c === 13;
    }
    function is_WHITE_SPACE(c) {
      return c === 9 || c === 32;
    }
    function is_WS_OR_EOL(c) {
      return c === 9 || c === 32 || c === 10 || c === 13;
    }
    function is_FLOW_INDICATOR(c) {
      return c === 44 || c === 91 || c === 93 || c === 123 || c === 125;
    }
    function fromHexCode(c) {
      var lc;
      if (48 <= c && c <= 57) {
        return c - 48;
      }
      lc = c | 32;
      if (97 <= lc && lc <= 102) {
        return lc - 97 + 10;
      }
      return -1;
    }
    function escapedHexLen(c) {
      if (c === 120) {
        return 2;
      }
      if (c === 117) {
        return 4;
      }
      if (c === 85) {
        return 8;
      }
      return 0;
    }
    function fromDecimalCode(c) {
      if (48 <= c && c <= 57) {
        return c - 48;
      }
      return -1;
    }
    function simpleEscapeSequence(c) {
      return c === 48 ? "\0" : c === 97 ? "\x07" : c === 98 ? "\b" : c === 116 ? "	" : c === 9 ? "	" : c === 110 ? "\n" : c === 118 ? "\v" : c === 102 ? "\f" : c === 114 ? "\r" : c === 101 ? "\x1B" : c === 32 ? " " : c === 34 ? '"' : c === 47 ? "/" : c === 92 ? "\\" : c === 78 ? "\x85" : c === 95 ? "\xA0" : c === 76 ? "\u2028" : c === 80 ? "\u2029" : "";
    }
    function charFromCodepoint(c) {
      if (c <= 65535) {
        return String.fromCharCode(c);
      }
      return String.fromCharCode(
        (c - 65536 >> 10) + 55296,
        (c - 65536 & 1023) + 56320
      );
    }
    function setProperty(object2, key, value) {
      if (key === "__proto__") {
        Object.defineProperty(object2, key, {
          configurable: true,
          enumerable: true,
          writable: true,
          value
        });
      } else {
        object2[key] = value;
      }
    }
    var simpleEscapeCheck = new Array(256);
    var simpleEscapeMap = new Array(256);
    for (i = 0; i < 256; i++) {
      simpleEscapeCheck[i] = simpleEscapeSequence(i) ? 1 : 0;
      simpleEscapeMap[i] = simpleEscapeSequence(i);
    }
    var i;
    function State(input, options2) {
      this.input = input;
      this.filename = options2["filename"] || null;
      this.schema = options2["schema"] || DEFAULT_FULL_SCHEMA;
      this.onWarning = options2["onWarning"] || null;
      this.legacy = options2["legacy"] || false;
      this.json = options2["json"] || false;
      this.listener = options2["listener"] || null;
      this.maxTotalMergeKeys = typeof options2["maxTotalMergeKeys"] === "number" ? options2["maxTotalMergeKeys"] : 1e4;
      this.implicitTypes = this.schema.compiledImplicit;
      this.typeMap = this.schema.compiledTypeMap;
      this.length = input.length;
      this.position = 0;
      this.line = 0;
      this.lineStart = 0;
      this.lineIndent = 0;
      this.totalMergeKeys = 0;
      this.documents = [];
    }
    function generateError(state2, message) {
      return new YAMLException(
        message,
        new Mark(state2.filename, state2.input, state2.position, state2.line, state2.position - state2.lineStart)
      );
    }
    function throwError(state2, message) {
      throw generateError(state2, message);
    }
    function throwWarning(state2, message) {
      if (state2.onWarning) {
        state2.onWarning.call(null, generateError(state2, message));
      }
    }
    var directiveHandlers = {
      YAML: function handleYamlDirective(state2, name, args) {
        var match, major, minor;
        if (state2.version !== null) {
          throwError(state2, "duplication of %YAML directive");
        }
        if (args.length !== 1) {
          throwError(state2, "YAML directive accepts exactly one argument");
        }
        match = /^([0-9]+)\.([0-9]+)$/.exec(args[0]);
        if (match === null) {
          throwError(state2, "ill-formed argument of the YAML directive");
        }
        major = parseInt(match[1], 10);
        minor = parseInt(match[2], 10);
        if (major !== 1) {
          throwError(state2, "unacceptable YAML version of the document");
        }
        state2.version = args[0];
        state2.checkLineBreaks = minor < 2;
        if (minor !== 1 && minor !== 2) {
          throwWarning(state2, "unsupported YAML version of the document");
        }
      },
      TAG: function handleTagDirective(state2, name, args) {
        var handle, prefix;
        if (args.length !== 2) {
          throwError(state2, "TAG directive accepts exactly two arguments");
        }
        handle = args[0];
        prefix = args[1];
        if (!PATTERN_TAG_HANDLE.test(handle)) {
          throwError(state2, "ill-formed tag handle (first argument) of the TAG directive");
        }
        if (_hasOwnProperty.call(state2.tagMap, handle)) {
          throwError(state2, 'there is a previously declared suffix for "' + handle + '" tag handle');
        }
        if (!PATTERN_TAG_URI.test(prefix)) {
          throwError(state2, "ill-formed tag prefix (second argument) of the TAG directive");
        }
        state2.tagMap[handle] = prefix;
      }
    };
    function captureSegment(state2, start, end, checkJson) {
      var _position, _length, _character, _result;
      if (start < end) {
        _result = state2.input.slice(start, end);
        if (checkJson) {
          for (_position = 0, _length = _result.length; _position < _length; _position += 1) {
            _character = _result.charCodeAt(_position);
            if (!(_character === 9 || 32 <= _character && _character <= 1114111)) {
              throwError(state2, "expected valid JSON character");
            }
          }
        } else if (PATTERN_NON_PRINTABLE.test(_result)) {
          throwError(state2, "the stream contains non-printable characters");
        }
        state2.result += _result;
      }
    }
    function mergeMappings(state2, destination, source, overridableKeys) {
      var sourceKeys, key, index, quantity;
      if (!common.isObject(source)) {
        throwError(state2, "cannot merge mappings; the provided source object is unacceptable");
      }
      sourceKeys = Object.keys(source);
      for (index = 0, quantity = sourceKeys.length; index < quantity; index += 1) {
        key = sourceKeys[index];
        if (state2.maxTotalMergeKeys !== -1 && ++state2.totalMergeKeys > state2.maxTotalMergeKeys) {
          throwError(state2, "merge keys exceeded maxTotalMergeKeys (" + state2.maxTotalMergeKeys + ")");
        }
        if (!_hasOwnProperty.call(destination, key)) {
          setProperty(destination, key, source[key]);
          overridableKeys[key] = true;
        }
      }
    }
    function storeMappingPair(state2, _result, overridableKeys, keyTag, keyNode, valueNode, startLine, startPos) {
      var index, quantity;
      if (Array.isArray(keyNode)) {
        keyNode = Array.prototype.slice.call(keyNode);
        for (index = 0, quantity = keyNode.length; index < quantity; index += 1) {
          if (Array.isArray(keyNode[index])) {
            throwError(state2, "nested arrays are not supported inside keys");
          }
          if (typeof keyNode === "object" && _class(keyNode[index]) === "[object Object]") {
            keyNode[index] = "[object Object]";
          }
        }
      }
      if (typeof keyNode === "object" && _class(keyNode) === "[object Object]") {
        keyNode = "[object Object]";
      }
      keyNode = String(keyNode);
      if (_result === null) {
        _result = {};
      }
      if (keyTag === "tag:yaml.org,2002:merge") {
        if (Array.isArray(valueNode)) {
          for (index = 0, quantity = valueNode.length; index < quantity; index += 1) {
            mergeMappings(state2, _result, valueNode[index], overridableKeys);
          }
        } else {
          mergeMappings(state2, _result, valueNode, overridableKeys);
        }
      } else {
        if (!state2.json && !_hasOwnProperty.call(overridableKeys, keyNode) && _hasOwnProperty.call(_result, keyNode)) {
          state2.line = startLine || state2.line;
          state2.position = startPos || state2.position;
          throwError(state2, "duplicated mapping key");
        }
        setProperty(_result, keyNode, valueNode);
        delete overridableKeys[keyNode];
      }
      return _result;
    }
    function readLineBreak(state2) {
      var ch;
      ch = state2.input.charCodeAt(state2.position);
      if (ch === 10) {
        state2.position++;
      } else if (ch === 13) {
        state2.position++;
        if (state2.input.charCodeAt(state2.position) === 10) {
          state2.position++;
        }
      } else {
        throwError(state2, "a line break is expected");
      }
      state2.line += 1;
      state2.lineStart = state2.position;
    }
    function skipSeparationSpace(state2, allowComments, checkIndent) {
      var lineBreaks = 0, ch = state2.input.charCodeAt(state2.position);
      while (ch !== 0) {
        while (is_WHITE_SPACE(ch)) {
          ch = state2.input.charCodeAt(++state2.position);
        }
        if (allowComments && ch === 35) {
          do {
            ch = state2.input.charCodeAt(++state2.position);
          } while (ch !== 10 && ch !== 13 && ch !== 0);
        }
        if (is_EOL(ch)) {
          readLineBreak(state2);
          ch = state2.input.charCodeAt(state2.position);
          lineBreaks++;
          state2.lineIndent = 0;
          while (ch === 32) {
            state2.lineIndent++;
            ch = state2.input.charCodeAt(++state2.position);
          }
        } else {
          break;
        }
      }
      if (checkIndent !== -1 && lineBreaks !== 0 && state2.lineIndent < checkIndent) {
        throwWarning(state2, "deficient indentation");
      }
      return lineBreaks;
    }
    function testDocumentSeparator(state2) {
      var _position = state2.position, ch;
      ch = state2.input.charCodeAt(_position);
      if ((ch === 45 || ch === 46) && ch === state2.input.charCodeAt(_position + 1) && ch === state2.input.charCodeAt(_position + 2)) {
        _position += 3;
        ch = state2.input.charCodeAt(_position);
        if (ch === 0 || is_WS_OR_EOL(ch)) {
          return true;
        }
      }
      return false;
    }
    function writeFoldedLines(state2, count) {
      if (count === 1) {
        state2.result += " ";
      } else if (count > 1) {
        state2.result += common.repeat("\n", count - 1);
      }
    }
    function readPlainScalar(state2, nodeIndent, withinFlowCollection) {
      var preceding, following, captureStart, captureEnd, hasPendingContent, _line, _lineStart, _lineIndent, _kind = state2.kind, _result = state2.result, ch;
      ch = state2.input.charCodeAt(state2.position);
      if (is_WS_OR_EOL(ch) || is_FLOW_INDICATOR(ch) || ch === 35 || ch === 38 || ch === 42 || ch === 33 || ch === 124 || ch === 62 || ch === 39 || ch === 34 || ch === 37 || ch === 64 || ch === 96) {
        return false;
      }
      if (ch === 63 || ch === 45) {
        following = state2.input.charCodeAt(state2.position + 1);
        if (is_WS_OR_EOL(following) || withinFlowCollection && is_FLOW_INDICATOR(following)) {
          return false;
        }
      }
      state2.kind = "scalar";
      state2.result = "";
      captureStart = captureEnd = state2.position;
      hasPendingContent = false;
      while (ch !== 0) {
        if (ch === 58) {
          following = state2.input.charCodeAt(state2.position + 1);
          if (is_WS_OR_EOL(following) || withinFlowCollection && is_FLOW_INDICATOR(following)) {
            break;
          }
        } else if (ch === 35) {
          preceding = state2.input.charCodeAt(state2.position - 1);
          if (is_WS_OR_EOL(preceding)) {
            break;
          }
        } else if (state2.position === state2.lineStart && testDocumentSeparator(state2) || withinFlowCollection && is_FLOW_INDICATOR(ch)) {
          break;
        } else if (is_EOL(ch)) {
          _line = state2.line;
          _lineStart = state2.lineStart;
          _lineIndent = state2.lineIndent;
          skipSeparationSpace(state2, false, -1);
          if (state2.lineIndent >= nodeIndent) {
            hasPendingContent = true;
            ch = state2.input.charCodeAt(state2.position);
            continue;
          } else {
            state2.position = captureEnd;
            state2.line = _line;
            state2.lineStart = _lineStart;
            state2.lineIndent = _lineIndent;
            break;
          }
        }
        if (hasPendingContent) {
          captureSegment(state2, captureStart, captureEnd, false);
          writeFoldedLines(state2, state2.line - _line);
          captureStart = captureEnd = state2.position;
          hasPendingContent = false;
        }
        if (!is_WHITE_SPACE(ch)) {
          captureEnd = state2.position + 1;
        }
        ch = state2.input.charCodeAt(++state2.position);
      }
      captureSegment(state2, captureStart, captureEnd, false);
      if (state2.result) {
        return true;
      }
      state2.kind = _kind;
      state2.result = _result;
      return false;
    }
    function readSingleQuotedScalar(state2, nodeIndent) {
      var ch, captureStart, captureEnd;
      ch = state2.input.charCodeAt(state2.position);
      if (ch !== 39) {
        return false;
      }
      state2.kind = "scalar";
      state2.result = "";
      state2.position++;
      captureStart = captureEnd = state2.position;
      while ((ch = state2.input.charCodeAt(state2.position)) !== 0) {
        if (ch === 39) {
          captureSegment(state2, captureStart, state2.position, true);
          ch = state2.input.charCodeAt(++state2.position);
          if (ch === 39) {
            captureStart = state2.position;
            state2.position++;
            captureEnd = state2.position;
          } else {
            return true;
          }
        } else if (is_EOL(ch)) {
          captureSegment(state2, captureStart, captureEnd, true);
          writeFoldedLines(state2, skipSeparationSpace(state2, false, nodeIndent));
          captureStart = captureEnd = state2.position;
        } else if (state2.position === state2.lineStart && testDocumentSeparator(state2)) {
          throwError(state2, "unexpected end of the document within a single quoted scalar");
        } else {
          state2.position++;
          captureEnd = state2.position;
        }
      }
      throwError(state2, "unexpected end of the stream within a single quoted scalar");
    }
    function readDoubleQuotedScalar(state2, nodeIndent) {
      var captureStart, captureEnd, hexLength, hexResult, tmp, ch;
      ch = state2.input.charCodeAt(state2.position);
      if (ch !== 34) {
        return false;
      }
      state2.kind = "scalar";
      state2.result = "";
      state2.position++;
      captureStart = captureEnd = state2.position;
      while ((ch = state2.input.charCodeAt(state2.position)) !== 0) {
        if (ch === 34) {
          captureSegment(state2, captureStart, state2.position, true);
          state2.position++;
          return true;
        } else if (ch === 92) {
          captureSegment(state2, captureStart, state2.position, true);
          ch = state2.input.charCodeAt(++state2.position);
          if (is_EOL(ch)) {
            skipSeparationSpace(state2, false, nodeIndent);
          } else if (ch < 256 && simpleEscapeCheck[ch]) {
            state2.result += simpleEscapeMap[ch];
            state2.position++;
          } else if ((tmp = escapedHexLen(ch)) > 0) {
            hexLength = tmp;
            hexResult = 0;
            for (; hexLength > 0; hexLength--) {
              ch = state2.input.charCodeAt(++state2.position);
              if ((tmp = fromHexCode(ch)) >= 0) {
                hexResult = (hexResult << 4) + tmp;
              } else {
                throwError(state2, "expected hexadecimal character");
              }
            }
            state2.result += charFromCodepoint(hexResult);
            state2.position++;
          } else {
            throwError(state2, "unknown escape sequence");
          }
          captureStart = captureEnd = state2.position;
        } else if (is_EOL(ch)) {
          captureSegment(state2, captureStart, captureEnd, true);
          writeFoldedLines(state2, skipSeparationSpace(state2, false, nodeIndent));
          captureStart = captureEnd = state2.position;
        } else if (state2.position === state2.lineStart && testDocumentSeparator(state2)) {
          throwError(state2, "unexpected end of the document within a double quoted scalar");
        } else {
          state2.position++;
          captureEnd = state2.position;
        }
      }
      throwError(state2, "unexpected end of the stream within a double quoted scalar");
    }
    function readFlowCollection(state2, nodeIndent) {
      var readNext = true, _line, _tag = state2.tag, _result, _anchor = state2.anchor, following, terminator, isPair, isExplicitPair, isMapping, overridableKeys = {}, keyNode, keyTag, valueNode, ch;
      ch = state2.input.charCodeAt(state2.position);
      if (ch === 91) {
        terminator = 93;
        isMapping = false;
        _result = [];
      } else if (ch === 123) {
        terminator = 125;
        isMapping = true;
        _result = {};
      } else {
        return false;
      }
      if (state2.anchor !== null) {
        state2.anchorMap[state2.anchor] = _result;
      }
      ch = state2.input.charCodeAt(++state2.position);
      while (ch !== 0) {
        skipSeparationSpace(state2, true, nodeIndent);
        ch = state2.input.charCodeAt(state2.position);
        if (ch === terminator) {
          state2.position++;
          state2.tag = _tag;
          state2.anchor = _anchor;
          state2.kind = isMapping ? "mapping" : "sequence";
          state2.result = _result;
          return true;
        } else if (!readNext) {
          throwError(state2, "missed comma between flow collection entries");
        }
        keyTag = keyNode = valueNode = null;
        isPair = isExplicitPair = false;
        if (ch === 63) {
          following = state2.input.charCodeAt(state2.position + 1);
          if (is_WS_OR_EOL(following)) {
            isPair = isExplicitPair = true;
            state2.position++;
            skipSeparationSpace(state2, true, nodeIndent);
          }
        }
        _line = state2.line;
        composeNode(state2, nodeIndent, CONTEXT_FLOW_IN, false, true);
        keyTag = state2.tag;
        keyNode = state2.result;
        skipSeparationSpace(state2, true, nodeIndent);
        ch = state2.input.charCodeAt(state2.position);
        if ((isExplicitPair || state2.line === _line) && ch === 58) {
          isPair = true;
          ch = state2.input.charCodeAt(++state2.position);
          skipSeparationSpace(state2, true, nodeIndent);
          composeNode(state2, nodeIndent, CONTEXT_FLOW_IN, false, true);
          valueNode = state2.result;
        }
        if (isMapping) {
          storeMappingPair(state2, _result, overridableKeys, keyTag, keyNode, valueNode);
        } else if (isPair) {
          _result.push(storeMappingPair(state2, null, overridableKeys, keyTag, keyNode, valueNode));
        } else {
          _result.push(keyNode);
        }
        skipSeparationSpace(state2, true, nodeIndent);
        ch = state2.input.charCodeAt(state2.position);
        if (ch === 44) {
          readNext = true;
          ch = state2.input.charCodeAt(++state2.position);
        } else {
          readNext = false;
        }
      }
      throwError(state2, "unexpected end of the stream within a flow collection");
    }
    function readBlockScalar(state2, nodeIndent) {
      var captureStart, folding, chomping = CHOMPING_CLIP, didReadContent = false, detectedIndent = false, textIndent = nodeIndent, emptyLines = 0, atMoreIndented = false, tmp, ch;
      ch = state2.input.charCodeAt(state2.position);
      if (ch === 124) {
        folding = false;
      } else if (ch === 62) {
        folding = true;
      } else {
        return false;
      }
      state2.kind = "scalar";
      state2.result = "";
      while (ch !== 0) {
        ch = state2.input.charCodeAt(++state2.position);
        if (ch === 43 || ch === 45) {
          if (CHOMPING_CLIP === chomping) {
            chomping = ch === 43 ? CHOMPING_KEEP : CHOMPING_STRIP;
          } else {
            throwError(state2, "repeat of a chomping mode identifier");
          }
        } else if ((tmp = fromDecimalCode(ch)) >= 0) {
          if (tmp === 0) {
            throwError(state2, "bad explicit indentation width of a block scalar; it cannot be less than one");
          } else if (!detectedIndent) {
            textIndent = nodeIndent + tmp - 1;
            detectedIndent = true;
          } else {
            throwError(state2, "repeat of an indentation width identifier");
          }
        } else {
          break;
        }
      }
      if (is_WHITE_SPACE(ch)) {
        do {
          ch = state2.input.charCodeAt(++state2.position);
        } while (is_WHITE_SPACE(ch));
        if (ch === 35) {
          do {
            ch = state2.input.charCodeAt(++state2.position);
          } while (!is_EOL(ch) && ch !== 0);
        }
      }
      while (ch !== 0) {
        readLineBreak(state2);
        state2.lineIndent = 0;
        ch = state2.input.charCodeAt(state2.position);
        while ((!detectedIndent || state2.lineIndent < textIndent) && ch === 32) {
          state2.lineIndent++;
          ch = state2.input.charCodeAt(++state2.position);
        }
        if (!detectedIndent && state2.lineIndent > textIndent) {
          textIndent = state2.lineIndent;
        }
        if (is_EOL(ch)) {
          emptyLines++;
          continue;
        }
        if (state2.lineIndent < textIndent) {
          if (chomping === CHOMPING_KEEP) {
            state2.result += common.repeat("\n", didReadContent ? 1 + emptyLines : emptyLines);
          } else if (chomping === CHOMPING_CLIP) {
            if (didReadContent) {
              state2.result += "\n";
            }
          }
          break;
        }
        if (folding) {
          if (is_WHITE_SPACE(ch)) {
            atMoreIndented = true;
            state2.result += common.repeat("\n", didReadContent ? 1 + emptyLines : emptyLines);
          } else if (atMoreIndented) {
            atMoreIndented = false;
            state2.result += common.repeat("\n", emptyLines + 1);
          } else if (emptyLines === 0) {
            if (didReadContent) {
              state2.result += " ";
            }
          } else {
            state2.result += common.repeat("\n", emptyLines);
          }
        } else {
          state2.result += common.repeat("\n", didReadContent ? 1 + emptyLines : emptyLines);
        }
        didReadContent = true;
        detectedIndent = true;
        emptyLines = 0;
        captureStart = state2.position;
        while (!is_EOL(ch) && ch !== 0) {
          ch = state2.input.charCodeAt(++state2.position);
        }
        captureSegment(state2, captureStart, state2.position, false);
      }
      return true;
    }
    function readBlockSequence(state2, nodeIndent) {
      var _line, _tag = state2.tag, _anchor = state2.anchor, _result = [], following, detected = false, ch;
      if (state2.anchor !== null) {
        state2.anchorMap[state2.anchor] = _result;
      }
      ch = state2.input.charCodeAt(state2.position);
      while (ch !== 0) {
        if (ch !== 45) {
          break;
        }
        following = state2.input.charCodeAt(state2.position + 1);
        if (!is_WS_OR_EOL(following)) {
          break;
        }
        detected = true;
        state2.position++;
        if (skipSeparationSpace(state2, true, -1)) {
          if (state2.lineIndent <= nodeIndent) {
            _result.push(null);
            ch = state2.input.charCodeAt(state2.position);
            continue;
          }
        }
        _line = state2.line;
        composeNode(state2, nodeIndent, CONTEXT_BLOCK_IN, false, true);
        _result.push(state2.result);
        skipSeparationSpace(state2, true, -1);
        ch = state2.input.charCodeAt(state2.position);
        if ((state2.line === _line || state2.lineIndent > nodeIndent) && ch !== 0) {
          throwError(state2, "bad indentation of a sequence entry");
        } else if (state2.lineIndent < nodeIndent) {
          break;
        }
      }
      if (detected) {
        state2.tag = _tag;
        state2.anchor = _anchor;
        state2.kind = "sequence";
        state2.result = _result;
        return true;
      }
      return false;
    }
    function readBlockMapping(state2, nodeIndent, flowIndent) {
      var following, allowCompact, _line, _pos, _tag = state2.tag, _anchor = state2.anchor, _result = {}, overridableKeys = {}, keyTag = null, keyNode = null, valueNode = null, atExplicitKey = false, detected = false, ch;
      if (state2.anchor !== null) {
        state2.anchorMap[state2.anchor] = _result;
      }
      ch = state2.input.charCodeAt(state2.position);
      while (ch !== 0) {
        following = state2.input.charCodeAt(state2.position + 1);
        _line = state2.line;
        _pos = state2.position;
        if ((ch === 63 || ch === 58) && is_WS_OR_EOL(following)) {
          if (ch === 63) {
            if (atExplicitKey) {
              storeMappingPair(state2, _result, overridableKeys, keyTag, keyNode, null);
              keyTag = keyNode = valueNode = null;
            }
            detected = true;
            atExplicitKey = true;
            allowCompact = true;
          } else if (atExplicitKey) {
            atExplicitKey = false;
            allowCompact = true;
          } else {
            throwError(state2, "incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line");
          }
          state2.position += 1;
          ch = following;
        } else if (composeNode(state2, flowIndent, CONTEXT_FLOW_OUT, false, true)) {
          if (state2.line === _line) {
            ch = state2.input.charCodeAt(state2.position);
            while (is_WHITE_SPACE(ch)) {
              ch = state2.input.charCodeAt(++state2.position);
            }
            if (ch === 58) {
              ch = state2.input.charCodeAt(++state2.position);
              if (!is_WS_OR_EOL(ch)) {
                throwError(state2, "a whitespace character is expected after the key-value separator within a block mapping");
              }
              if (atExplicitKey) {
                storeMappingPair(state2, _result, overridableKeys, keyTag, keyNode, null);
                keyTag = keyNode = valueNode = null;
              }
              detected = true;
              atExplicitKey = false;
              allowCompact = false;
              keyTag = state2.tag;
              keyNode = state2.result;
            } else if (detected) {
              throwError(state2, "can not read an implicit mapping pair; a colon is missed");
            } else {
              state2.tag = _tag;
              state2.anchor = _anchor;
              return true;
            }
          } else if (detected) {
            throwError(state2, "can not read a block mapping entry; a multiline key may not be an implicit key");
          } else {
            state2.tag = _tag;
            state2.anchor = _anchor;
            return true;
          }
        } else {
          break;
        }
        if (state2.line === _line || state2.lineIndent > nodeIndent) {
          if (composeNode(state2, nodeIndent, CONTEXT_BLOCK_OUT, true, allowCompact)) {
            if (atExplicitKey) {
              keyNode = state2.result;
            } else {
              valueNode = state2.result;
            }
          }
          if (!atExplicitKey) {
            storeMappingPair(state2, _result, overridableKeys, keyTag, keyNode, valueNode, _line, _pos);
            keyTag = keyNode = valueNode = null;
          }
          skipSeparationSpace(state2, true, -1);
          ch = state2.input.charCodeAt(state2.position);
        }
        if (state2.lineIndent > nodeIndent && ch !== 0) {
          throwError(state2, "bad indentation of a mapping entry");
        } else if (state2.lineIndent < nodeIndent) {
          break;
        }
      }
      if (atExplicitKey) {
        storeMappingPair(state2, _result, overridableKeys, keyTag, keyNode, null);
      }
      if (detected) {
        state2.tag = _tag;
        state2.anchor = _anchor;
        state2.kind = "mapping";
        state2.result = _result;
      }
      return detected;
    }
    function readTagProperty(state2) {
      var _position, isVerbatim = false, isNamed = false, tagHandle, tagName, ch;
      ch = state2.input.charCodeAt(state2.position);
      if (ch !== 33) return false;
      if (state2.tag !== null) {
        throwError(state2, "duplication of a tag property");
      }
      ch = state2.input.charCodeAt(++state2.position);
      if (ch === 60) {
        isVerbatim = true;
        ch = state2.input.charCodeAt(++state2.position);
      } else if (ch === 33) {
        isNamed = true;
        tagHandle = "!!";
        ch = state2.input.charCodeAt(++state2.position);
      } else {
        tagHandle = "!";
      }
      _position = state2.position;
      if (isVerbatim) {
        do {
          ch = state2.input.charCodeAt(++state2.position);
        } while (ch !== 0 && ch !== 62);
        if (state2.position < state2.length) {
          tagName = state2.input.slice(_position, state2.position);
          ch = state2.input.charCodeAt(++state2.position);
        } else {
          throwError(state2, "unexpected end of the stream within a verbatim tag");
        }
      } else {
        while (ch !== 0 && !is_WS_OR_EOL(ch)) {
          if (ch === 33) {
            if (!isNamed) {
              tagHandle = state2.input.slice(_position - 1, state2.position + 1);
              if (!PATTERN_TAG_HANDLE.test(tagHandle)) {
                throwError(state2, "named tag handle cannot contain such characters");
              }
              isNamed = true;
              _position = state2.position + 1;
            } else {
              throwError(state2, "tag suffix cannot contain exclamation marks");
            }
          }
          ch = state2.input.charCodeAt(++state2.position);
        }
        tagName = state2.input.slice(_position, state2.position);
        if (PATTERN_FLOW_INDICATORS.test(tagName)) {
          throwError(state2, "tag suffix cannot contain flow indicator characters");
        }
      }
      if (tagName && !PATTERN_TAG_URI.test(tagName)) {
        throwError(state2, "tag name cannot contain such characters: " + tagName);
      }
      if (isVerbatim) {
        state2.tag = tagName;
      } else if (_hasOwnProperty.call(state2.tagMap, tagHandle)) {
        state2.tag = state2.tagMap[tagHandle] + tagName;
      } else if (tagHandle === "!") {
        state2.tag = "!" + tagName;
      } else if (tagHandle === "!!") {
        state2.tag = "tag:yaml.org,2002:" + tagName;
      } else {
        throwError(state2, 'undeclared tag handle "' + tagHandle + '"');
      }
      return true;
    }
    function readAnchorProperty(state2) {
      var _position, ch;
      ch = state2.input.charCodeAt(state2.position);
      if (ch !== 38) return false;
      if (state2.anchor !== null) {
        throwError(state2, "duplication of an anchor property");
      }
      ch = state2.input.charCodeAt(++state2.position);
      _position = state2.position;
      while (ch !== 0 && !is_WS_OR_EOL(ch) && !is_FLOW_INDICATOR(ch)) {
        ch = state2.input.charCodeAt(++state2.position);
      }
      if (state2.position === _position) {
        throwError(state2, "name of an anchor node must contain at least one character");
      }
      state2.anchor = state2.input.slice(_position, state2.position);
      return true;
    }
    function readAlias(state2) {
      var _position, alias, ch;
      ch = state2.input.charCodeAt(state2.position);
      if (ch !== 42) return false;
      ch = state2.input.charCodeAt(++state2.position);
      _position = state2.position;
      while (ch !== 0 && !is_WS_OR_EOL(ch) && !is_FLOW_INDICATOR(ch)) {
        ch = state2.input.charCodeAt(++state2.position);
      }
      if (state2.position === _position) {
        throwError(state2, "name of an alias node must contain at least one character");
      }
      alias = state2.input.slice(_position, state2.position);
      if (!_hasOwnProperty.call(state2.anchorMap, alias)) {
        throwError(state2, 'unidentified alias "' + alias + '"');
      }
      state2.result = state2.anchorMap[alias];
      skipSeparationSpace(state2, true, -1);
      return true;
    }
    function composeNode(state2, parentIndent, nodeContext, allowToSeek, allowCompact) {
      var allowBlockStyles, allowBlockScalars, allowBlockCollections, indentStatus = 1, atNewLine = false, hasContent = false, typeIndex, typeQuantity, type, flowIndent, blockIndent;
      if (state2.listener !== null) {
        state2.listener("open", state2);
      }
      state2.tag = null;
      state2.anchor = null;
      state2.kind = null;
      state2.result = null;
      allowBlockStyles = allowBlockScalars = allowBlockCollections = CONTEXT_BLOCK_OUT === nodeContext || CONTEXT_BLOCK_IN === nodeContext;
      if (allowToSeek) {
        if (skipSeparationSpace(state2, true, -1)) {
          atNewLine = true;
          if (state2.lineIndent > parentIndent) {
            indentStatus = 1;
          } else if (state2.lineIndent === parentIndent) {
            indentStatus = 0;
          } else if (state2.lineIndent < parentIndent) {
            indentStatus = -1;
          }
        }
      }
      if (indentStatus === 1) {
        while (readTagProperty(state2) || readAnchorProperty(state2)) {
          if (skipSeparationSpace(state2, true, -1)) {
            atNewLine = true;
            allowBlockCollections = allowBlockStyles;
            if (state2.lineIndent > parentIndent) {
              indentStatus = 1;
            } else if (state2.lineIndent === parentIndent) {
              indentStatus = 0;
            } else if (state2.lineIndent < parentIndent) {
              indentStatus = -1;
            }
          } else {
            allowBlockCollections = false;
          }
        }
      }
      if (allowBlockCollections) {
        allowBlockCollections = atNewLine || allowCompact;
      }
      if (indentStatus === 1 || CONTEXT_BLOCK_OUT === nodeContext) {
        if (CONTEXT_FLOW_IN === nodeContext || CONTEXT_FLOW_OUT === nodeContext) {
          flowIndent = parentIndent;
        } else {
          flowIndent = parentIndent + 1;
        }
        blockIndent = state2.position - state2.lineStart;
        if (indentStatus === 1) {
          if (allowBlockCollections && (readBlockSequence(state2, blockIndent) || readBlockMapping(state2, blockIndent, flowIndent)) || readFlowCollection(state2, flowIndent)) {
            hasContent = true;
          } else {
            if (allowBlockScalars && readBlockScalar(state2, flowIndent) || readSingleQuotedScalar(state2, flowIndent) || readDoubleQuotedScalar(state2, flowIndent)) {
              hasContent = true;
            } else if (readAlias(state2)) {
              hasContent = true;
              if (state2.tag !== null || state2.anchor !== null) {
                throwError(state2, "alias node should not have any properties");
              }
            } else if (readPlainScalar(state2, flowIndent, CONTEXT_FLOW_IN === nodeContext)) {
              hasContent = true;
              if (state2.tag === null) {
                state2.tag = "?";
              }
            }
            if (state2.anchor !== null) {
              state2.anchorMap[state2.anchor] = state2.result;
            }
          }
        } else if (indentStatus === 0) {
          hasContent = allowBlockCollections && readBlockSequence(state2, blockIndent);
        }
      }
      if (state2.tag !== null && state2.tag !== "!") {
        if (state2.tag === "?") {
          if (state2.result !== null && state2.kind !== "scalar") {
            throwError(state2, 'unacceptable node kind for !<?> tag; it should be "scalar", not "' + state2.kind + '"');
          }
          for (typeIndex = 0, typeQuantity = state2.implicitTypes.length; typeIndex < typeQuantity; typeIndex += 1) {
            type = state2.implicitTypes[typeIndex];
            if (type.resolve(state2.result)) {
              state2.result = type.construct(state2.result);
              state2.tag = type.tag;
              if (state2.anchor !== null) {
                state2.anchorMap[state2.anchor] = state2.result;
              }
              break;
            }
          }
        } else if (_hasOwnProperty.call(state2.typeMap[state2.kind || "fallback"], state2.tag)) {
          type = state2.typeMap[state2.kind || "fallback"][state2.tag];
          if (state2.result !== null && type.kind !== state2.kind) {
            throwError(state2, "unacceptable node kind for !<" + state2.tag + '> tag; it should be "' + type.kind + '", not "' + state2.kind + '"');
          }
          if (!type.resolve(state2.result)) {
            throwError(state2, "cannot resolve a node with !<" + state2.tag + "> explicit tag");
          } else {
            state2.result = type.construct(state2.result);
            if (state2.anchor !== null) {
              state2.anchorMap[state2.anchor] = state2.result;
            }
          }
        } else {
          throwError(state2, "unknown tag !<" + state2.tag + ">");
        }
      }
      if (state2.listener !== null) {
        state2.listener("close", state2);
      }
      return state2.tag !== null || state2.anchor !== null || hasContent;
    }
    function readDocument(state2) {
      var documentStart = state2.position, _position, directiveName, directiveArgs, hasDirectives = false, ch;
      state2.version = null;
      state2.checkLineBreaks = state2.legacy;
      state2.tagMap = {};
      state2.anchorMap = {};
      while ((ch = state2.input.charCodeAt(state2.position)) !== 0) {
        skipSeparationSpace(state2, true, -1);
        ch = state2.input.charCodeAt(state2.position);
        if (state2.lineIndent > 0 || ch !== 37) {
          break;
        }
        hasDirectives = true;
        ch = state2.input.charCodeAt(++state2.position);
        _position = state2.position;
        while (ch !== 0 && !is_WS_OR_EOL(ch)) {
          ch = state2.input.charCodeAt(++state2.position);
        }
        directiveName = state2.input.slice(_position, state2.position);
        directiveArgs = [];
        if (directiveName.length < 1) {
          throwError(state2, "directive name must not be less than one character in length");
        }
        while (ch !== 0) {
          while (is_WHITE_SPACE(ch)) {
            ch = state2.input.charCodeAt(++state2.position);
          }
          if (ch === 35) {
            do {
              ch = state2.input.charCodeAt(++state2.position);
            } while (ch !== 0 && !is_EOL(ch));
            break;
          }
          if (is_EOL(ch)) break;
          _position = state2.position;
          while (ch !== 0 && !is_WS_OR_EOL(ch)) {
            ch = state2.input.charCodeAt(++state2.position);
          }
          directiveArgs.push(state2.input.slice(_position, state2.position));
        }
        if (ch !== 0) readLineBreak(state2);
        if (_hasOwnProperty.call(directiveHandlers, directiveName)) {
          directiveHandlers[directiveName](state2, directiveName, directiveArgs);
        } else {
          throwWarning(state2, 'unknown document directive "' + directiveName + '"');
        }
      }
      skipSeparationSpace(state2, true, -1);
      if (state2.lineIndent === 0 && state2.input.charCodeAt(state2.position) === 45 && state2.input.charCodeAt(state2.position + 1) === 45 && state2.input.charCodeAt(state2.position + 2) === 45) {
        state2.position += 3;
        skipSeparationSpace(state2, true, -1);
      } else if (hasDirectives) {
        throwError(state2, "directives end mark is expected");
      }
      composeNode(state2, state2.lineIndent - 1, CONTEXT_BLOCK_OUT, false, true);
      skipSeparationSpace(state2, true, -1);
      if (state2.checkLineBreaks && PATTERN_NON_ASCII_LINE_BREAKS.test(state2.input.slice(documentStart, state2.position))) {
        throwWarning(state2, "non-ASCII line breaks are interpreted as content");
      }
      state2.documents.push(state2.result);
      if (state2.position === state2.lineStart && testDocumentSeparator(state2)) {
        if (state2.input.charCodeAt(state2.position) === 46) {
          state2.position += 3;
          skipSeparationSpace(state2, true, -1);
        }
        return;
      }
      if (state2.position < state2.length - 1) {
        throwError(state2, "end of the stream or a document separator is expected");
      } else {
        return;
      }
    }
    function loadDocuments(input, options2) {
      input = String(input);
      options2 = options2 || {};
      if (input.length !== 0) {
        if (input.charCodeAt(input.length - 1) !== 10 && input.charCodeAt(input.length - 1) !== 13) {
          input += "\n";
        }
        if (input.charCodeAt(0) === 65279) {
          input = input.slice(1);
        }
      }
      var state2 = new State(input, options2);
      var nullpos = input.indexOf("\0");
      if (nullpos !== -1) {
        state2.position = nullpos;
        throwError(state2, "null byte is not allowed in input");
      }
      state2.input += "\0";
      while (state2.input.charCodeAt(state2.position) === 32) {
        state2.lineIndent += 1;
        state2.position += 1;
      }
      while (state2.position < state2.length - 1) {
        readDocument(state2);
      }
      return state2.documents;
    }
    function loadAll(input, iterator, options2) {
      if (iterator !== null && typeof iterator === "object" && typeof options2 === "undefined") {
        options2 = iterator;
        iterator = null;
      }
      var documents = loadDocuments(input, options2);
      if (typeof iterator !== "function") {
        return documents;
      }
      for (var index = 0, length = documents.length; index < length; index += 1) {
        iterator(documents[index]);
      }
    }
    function load(input, options2) {
      var documents = loadDocuments(input, options2);
      if (documents.length === 0) {
        return void 0;
      } else if (documents.length === 1) {
        return documents[0];
      }
      throw new YAMLException("expected a single document in the stream, but found more");
    }
    function safeLoadAll(input, iterator, options2) {
      if (typeof iterator === "object" && iterator !== null && typeof options2 === "undefined") {
        options2 = iterator;
        iterator = null;
      }
      return loadAll(input, iterator, common.extend({ schema: DEFAULT_SAFE_SCHEMA }, options2));
    }
    function safeLoad(input, options2) {
      return load(input, common.extend({ schema: DEFAULT_SAFE_SCHEMA }, options2));
    }
    module2.exports.loadAll = loadAll;
    module2.exports.load = load;
    module2.exports.safeLoadAll = safeLoadAll;
    module2.exports.safeLoad = safeLoad;
  }
});

// node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/dumper.js
var require_dumper = __commonJS({
  "node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml/dumper.js"(exports2, module2) {
    "use strict";
    var common = require_common2();
    var YAMLException = require_exception();
    var DEFAULT_FULL_SCHEMA = require_default_full();
    var DEFAULT_SAFE_SCHEMA = require_default_safe();
    var _toString = Object.prototype.toString;
    var _hasOwnProperty = Object.prototype.hasOwnProperty;
    var CHAR_TAB = 9;
    var CHAR_LINE_FEED = 10;
    var CHAR_CARRIAGE_RETURN = 13;
    var CHAR_SPACE = 32;
    var CHAR_EXCLAMATION = 33;
    var CHAR_DOUBLE_QUOTE = 34;
    var CHAR_SHARP = 35;
    var CHAR_PERCENT = 37;
    var CHAR_AMPERSAND = 38;
    var CHAR_SINGLE_QUOTE = 39;
    var CHAR_ASTERISK = 42;
    var CHAR_COMMA = 44;
    var CHAR_MINUS = 45;
    var CHAR_COLON = 58;
    var CHAR_EQUALS = 61;
    var CHAR_GREATER_THAN = 62;
    var CHAR_QUESTION = 63;
    var CHAR_COMMERCIAL_AT = 64;
    var CHAR_LEFT_SQUARE_BRACKET = 91;
    var CHAR_RIGHT_SQUARE_BRACKET = 93;
    var CHAR_GRAVE_ACCENT = 96;
    var CHAR_LEFT_CURLY_BRACKET = 123;
    var CHAR_VERTICAL_LINE = 124;
    var CHAR_RIGHT_CURLY_BRACKET = 125;
    var ESCAPE_SEQUENCES = {};
    ESCAPE_SEQUENCES[0] = "\\0";
    ESCAPE_SEQUENCES[7] = "\\a";
    ESCAPE_SEQUENCES[8] = "\\b";
    ESCAPE_SEQUENCES[9] = "\\t";
    ESCAPE_SEQUENCES[10] = "\\n";
    ESCAPE_SEQUENCES[11] = "\\v";
    ESCAPE_SEQUENCES[12] = "\\f";
    ESCAPE_SEQUENCES[13] = "\\r";
    ESCAPE_SEQUENCES[27] = "\\e";
    ESCAPE_SEQUENCES[34] = '\\"';
    ESCAPE_SEQUENCES[92] = "\\\\";
    ESCAPE_SEQUENCES[133] = "\\N";
    ESCAPE_SEQUENCES[160] = "\\_";
    ESCAPE_SEQUENCES[8232] = "\\L";
    ESCAPE_SEQUENCES[8233] = "\\P";
    var DEPRECATED_BOOLEANS_SYNTAX = [
      "y",
      "Y",
      "yes",
      "Yes",
      "YES",
      "on",
      "On",
      "ON",
      "n",
      "N",
      "no",
      "No",
      "NO",
      "off",
      "Off",
      "OFF"
    ];
    function compileStyleMap(schema, map) {
      var result, keys, index, length, tag, style, type;
      if (map === null) return {};
      result = {};
      keys = Object.keys(map);
      for (index = 0, length = keys.length; index < length; index += 1) {
        tag = keys[index];
        style = String(map[tag]);
        if (tag.slice(0, 2) === "!!") {
          tag = "tag:yaml.org,2002:" + tag.slice(2);
        }
        type = schema.compiledTypeMap["fallback"][tag];
        if (type && _hasOwnProperty.call(type.styleAliases, style)) {
          style = type.styleAliases[style];
        }
        result[tag] = style;
      }
      return result;
    }
    function encodeHex(character) {
      var string2, handle, length;
      string2 = character.toString(16).toUpperCase();
      if (character <= 255) {
        handle = "x";
        length = 2;
      } else if (character <= 65535) {
        handle = "u";
        length = 4;
      } else if (character <= 4294967295) {
        handle = "U";
        length = 8;
      } else {
        throw new YAMLException("code point within a string may not be greater than 0xFFFFFFFF");
      }
      return "\\" + handle + common.repeat("0", length - string2.length) + string2;
    }
    function State(options2) {
      this.schema = options2["schema"] || DEFAULT_FULL_SCHEMA;
      this.indent = Math.max(1, options2["indent"] || 2);
      this.noArrayIndent = options2["noArrayIndent"] || false;
      this.skipInvalid = options2["skipInvalid"] || false;
      this.flowLevel = common.isNothing(options2["flowLevel"]) ? -1 : options2["flowLevel"];
      this.styleMap = compileStyleMap(this.schema, options2["styles"] || null);
      this.sortKeys = options2["sortKeys"] || false;
      this.lineWidth = options2["lineWidth"] || 80;
      this.noRefs = options2["noRefs"] || false;
      this.noCompatMode = options2["noCompatMode"] || false;
      this.condenseFlow = options2["condenseFlow"] || false;
      this.implicitTypes = this.schema.compiledImplicit;
      this.explicitTypes = this.schema.compiledExplicit;
      this.tag = null;
      this.result = "";
      this.duplicates = [];
      this.usedDuplicates = null;
    }
    function indentString(string2, spaces) {
      var ind = common.repeat(" ", spaces), position = 0, next = -1, result = "", line, length = string2.length;
      while (position < length) {
        next = string2.indexOf("\n", position);
        if (next === -1) {
          line = string2.slice(position);
          position = length;
        } else {
          line = string2.slice(position, next + 1);
          position = next + 1;
        }
        if (line.length && line !== "\n") result += ind;
        result += line;
      }
      return result;
    }
    function generateNextLine(state2, level) {
      return "\n" + common.repeat(" ", state2.indent * level);
    }
    function testImplicitResolving(state2, str2) {
      var index, length, type;
      for (index = 0, length = state2.implicitTypes.length; index < length; index += 1) {
        type = state2.implicitTypes[index];
        if (type.resolve(str2)) {
          return true;
        }
      }
      return false;
    }
    function isWhitespace(c) {
      return c === CHAR_SPACE || c === CHAR_TAB;
    }
    function isPrintable(c) {
      return 32 <= c && c <= 126 || 161 <= c && c <= 55295 && c !== 8232 && c !== 8233 || 57344 <= c && c <= 65533 && c !== 65279 || 65536 <= c && c <= 1114111;
    }
    function isNsChar(c) {
      return isPrintable(c) && !isWhitespace(c) && c !== 65279 && c !== CHAR_CARRIAGE_RETURN && c !== CHAR_LINE_FEED;
    }
    function isPlainSafe(c, prev) {
      return isPrintable(c) && c !== 65279 && c !== CHAR_COMMA && c !== CHAR_LEFT_SQUARE_BRACKET && c !== CHAR_RIGHT_SQUARE_BRACKET && c !== CHAR_LEFT_CURLY_BRACKET && c !== CHAR_RIGHT_CURLY_BRACKET && c !== CHAR_COLON && (c !== CHAR_SHARP || prev && isNsChar(prev));
    }
    function isPlainSafeFirst(c) {
      return isPrintable(c) && c !== 65279 && !isWhitespace(c) && c !== CHAR_MINUS && c !== CHAR_QUESTION && c !== CHAR_COLON && c !== CHAR_COMMA && c !== CHAR_LEFT_SQUARE_BRACKET && c !== CHAR_RIGHT_SQUARE_BRACKET && c !== CHAR_LEFT_CURLY_BRACKET && c !== CHAR_RIGHT_CURLY_BRACKET && c !== CHAR_SHARP && c !== CHAR_AMPERSAND && c !== CHAR_ASTERISK && c !== CHAR_EXCLAMATION && c !== CHAR_VERTICAL_LINE && c !== CHAR_EQUALS && c !== CHAR_GREATER_THAN && c !== CHAR_SINGLE_QUOTE && c !== CHAR_DOUBLE_QUOTE && c !== CHAR_PERCENT && c !== CHAR_COMMERCIAL_AT && c !== CHAR_GRAVE_ACCENT;
    }
    function needIndentIndicator(string2) {
      var leadingSpaceRe = /^\n* /;
      return leadingSpaceRe.test(string2);
    }
    var STYLE_PLAIN = 1;
    var STYLE_SINGLE = 2;
    var STYLE_LITERAL = 3;
    var STYLE_FOLDED = 4;
    var STYLE_DOUBLE = 5;
    function chooseScalarStyle(string2, singleLineOnly, indentPerLevel, lineWidth, testAmbiguousType) {
      var i;
      var char, prev_char;
      var hasLineBreak = false;
      var hasFoldableLine = false;
      var shouldTrackWidth = lineWidth !== -1;
      var previousLineBreak = -1;
      var plain = isPlainSafeFirst(string2.charCodeAt(0)) && !isWhitespace(string2.charCodeAt(string2.length - 1));
      if (singleLineOnly) {
        for (i = 0; i < string2.length; i++) {
          char = string2.charCodeAt(i);
          if (!isPrintable(char)) {
            return STYLE_DOUBLE;
          }
          prev_char = i > 0 ? string2.charCodeAt(i - 1) : null;
          plain = plain && isPlainSafe(char, prev_char);
        }
      } else {
        for (i = 0; i < string2.length; i++) {
          char = string2.charCodeAt(i);
          if (char === CHAR_LINE_FEED) {
            hasLineBreak = true;
            if (shouldTrackWidth) {
              hasFoldableLine = hasFoldableLine || // Foldable line = too long, and not more-indented.
              i - previousLineBreak - 1 > lineWidth && string2[previousLineBreak + 1] !== " ";
              previousLineBreak = i;
            }
          } else if (!isPrintable(char)) {
            return STYLE_DOUBLE;
          }
          prev_char = i > 0 ? string2.charCodeAt(i - 1) : null;
          plain = plain && isPlainSafe(char, prev_char);
        }
        hasFoldableLine = hasFoldableLine || shouldTrackWidth && (i - previousLineBreak - 1 > lineWidth && string2[previousLineBreak + 1] !== " ");
      }
      if (!hasLineBreak && !hasFoldableLine) {
        return plain && !testAmbiguousType(string2) ? STYLE_PLAIN : STYLE_SINGLE;
      }
      if (indentPerLevel > 9 && needIndentIndicator(string2)) {
        return STYLE_DOUBLE;
      }
      return hasFoldableLine ? STYLE_FOLDED : STYLE_LITERAL;
    }
    function writeScalar(state2, string2, level, iskey) {
      state2.dump = (function() {
        if (string2.length === 0) {
          return "''";
        }
        if (!state2.noCompatMode && DEPRECATED_BOOLEANS_SYNTAX.indexOf(string2) !== -1) {
          return "'" + string2 + "'";
        }
        var indent = state2.indent * Math.max(1, level);
        var lineWidth = state2.lineWidth === -1 ? -1 : Math.max(Math.min(state2.lineWidth, 40), state2.lineWidth - indent);
        var singleLineOnly = iskey || state2.flowLevel > -1 && level >= state2.flowLevel;
        function testAmbiguity(string3) {
          return testImplicitResolving(state2, string3);
        }
        switch (chooseScalarStyle(string2, singleLineOnly, state2.indent, lineWidth, testAmbiguity)) {
          case STYLE_PLAIN:
            return string2;
          case STYLE_SINGLE:
            return "'" + string2.replace(/'/g, "''") + "'";
          case STYLE_LITERAL:
            return "|" + blockHeader(string2, state2.indent) + dropEndingNewline(indentString(string2, indent));
          case STYLE_FOLDED:
            return ">" + blockHeader(string2, state2.indent) + dropEndingNewline(indentString(foldString(string2, lineWidth), indent));
          case STYLE_DOUBLE:
            return '"' + escapeString(string2, lineWidth) + '"';
          default:
            throw new YAMLException("impossible error: invalid scalar style");
        }
      })();
    }
    function blockHeader(string2, indentPerLevel) {
      var indentIndicator = needIndentIndicator(string2) ? String(indentPerLevel) : "";
      var clip = string2[string2.length - 1] === "\n";
      var keep = clip && (string2[string2.length - 2] === "\n" || string2 === "\n");
      var chomp = keep ? "+" : clip ? "" : "-";
      return indentIndicator + chomp + "\n";
    }
    function dropEndingNewline(string2) {
      return string2[string2.length - 1] === "\n" ? string2.slice(0, -1) : string2;
    }
    function foldString(string2, width) {
      var lineRe = /(\n+)([^\n]*)/g;
      var result = (function() {
        var nextLF = string2.indexOf("\n");
        nextLF = nextLF !== -1 ? nextLF : string2.length;
        lineRe.lastIndex = nextLF;
        return foldLine(string2.slice(0, nextLF), width);
      })();
      var prevMoreIndented = string2[0] === "\n" || string2[0] === " ";
      var moreIndented;
      var match;
      while (match = lineRe.exec(string2)) {
        var prefix = match[1], line = match[2];
        moreIndented = line[0] === " ";
        result += prefix + (!prevMoreIndented && !moreIndented && line !== "" ? "\n" : "") + foldLine(line, width);
        prevMoreIndented = moreIndented;
      }
      return result;
    }
    function foldLine(line, width) {
      if (line === "" || line[0] === " ") return line;
      var breakRe = / [^ ]/g;
      var match;
      var start = 0, end, curr = 0, next = 0;
      var result = "";
      while (match = breakRe.exec(line)) {
        next = match.index;
        if (next - start > width) {
          end = curr > start ? curr : next;
          result += "\n" + line.slice(start, end);
          start = end + 1;
        }
        curr = next;
      }
      result += "\n";
      if (line.length - start > width && curr > start) {
        result += line.slice(start, curr) + "\n" + line.slice(curr + 1);
      } else {
        result += line.slice(start);
      }
      return result.slice(1);
    }
    function escapeString(string2) {
      var result = "";
      var char, nextChar;
      var escapeSeq;
      for (var i = 0; i < string2.length; i++) {
        char = string2.charCodeAt(i);
        if (char >= 55296 && char <= 56319) {
          nextChar = string2.charCodeAt(i + 1);
          if (nextChar >= 56320 && nextChar <= 57343) {
            result += encodeHex((char - 55296) * 1024 + nextChar - 56320 + 65536);
            i++;
            continue;
          }
        }
        escapeSeq = ESCAPE_SEQUENCES[char];
        result += !escapeSeq && isPrintable(char) ? string2[i] : escapeSeq || encodeHex(char);
      }
      return result;
    }
    function writeFlowSequence(state2, level, object2) {
      var _result = "", _tag = state2.tag, index, length;
      for (index = 0, length = object2.length; index < length; index += 1) {
        if (writeNode(state2, level, object2[index], false, false)) {
          if (index !== 0) _result += "," + (!state2.condenseFlow ? " " : "");
          _result += state2.dump;
        }
      }
      state2.tag = _tag;
      state2.dump = "[" + _result + "]";
    }
    function writeBlockSequence(state2, level, object2, compact) {
      var _result = "", _tag = state2.tag, index, length;
      for (index = 0, length = object2.length; index < length; index += 1) {
        if (writeNode(state2, level + 1, object2[index], true, true)) {
          if (!compact || index !== 0) {
            _result += generateNextLine(state2, level);
          }
          if (state2.dump && CHAR_LINE_FEED === state2.dump.charCodeAt(0)) {
            _result += "-";
          } else {
            _result += "- ";
          }
          _result += state2.dump;
        }
      }
      state2.tag = _tag;
      state2.dump = _result || "[]";
    }
    function writeFlowMapping(state2, level, object2) {
      var _result = "", _tag = state2.tag, objectKeyList = Object.keys(object2), index, length, objectKey, objectValue, pairBuffer;
      for (index = 0, length = objectKeyList.length; index < length; index += 1) {
        pairBuffer = "";
        if (index !== 0) pairBuffer += ", ";
        if (state2.condenseFlow) pairBuffer += '"';
        objectKey = objectKeyList[index];
        objectValue = object2[objectKey];
        if (!writeNode(state2, level, objectKey, false, false)) {
          continue;
        }
        if (state2.dump.length > 1024) pairBuffer += "? ";
        pairBuffer += state2.dump + (state2.condenseFlow ? '"' : "") + ":" + (state2.condenseFlow ? "" : " ");
        if (!writeNode(state2, level, objectValue, false, false)) {
          continue;
        }
        pairBuffer += state2.dump;
        _result += pairBuffer;
      }
      state2.tag = _tag;
      state2.dump = "{" + _result + "}";
    }
    function writeBlockMapping(state2, level, object2, compact) {
      var _result = "", _tag = state2.tag, objectKeyList = Object.keys(object2), index, length, objectKey, objectValue, explicitPair, pairBuffer;
      if (state2.sortKeys === true) {
        objectKeyList.sort();
      } else if (typeof state2.sortKeys === "function") {
        objectKeyList.sort(state2.sortKeys);
      } else if (state2.sortKeys) {
        throw new YAMLException("sortKeys must be a boolean or a function");
      }
      for (index = 0, length = objectKeyList.length; index < length; index += 1) {
        pairBuffer = "";
        if (!compact || index !== 0) {
          pairBuffer += generateNextLine(state2, level);
        }
        objectKey = objectKeyList[index];
        objectValue = object2[objectKey];
        if (!writeNode(state2, level + 1, objectKey, true, true, true)) {
          continue;
        }
        explicitPair = state2.tag !== null && state2.tag !== "?" || state2.dump && state2.dump.length > 1024;
        if (explicitPair) {
          if (state2.dump && CHAR_LINE_FEED === state2.dump.charCodeAt(0)) {
            pairBuffer += "?";
          } else {
            pairBuffer += "? ";
          }
        }
        pairBuffer += state2.dump;
        if (explicitPair) {
          pairBuffer += generateNextLine(state2, level);
        }
        if (!writeNode(state2, level + 1, objectValue, true, explicitPair)) {
          continue;
        }
        if (state2.dump && CHAR_LINE_FEED === state2.dump.charCodeAt(0)) {
          pairBuffer += ":";
        } else {
          pairBuffer += ": ";
        }
        pairBuffer += state2.dump;
        _result += pairBuffer;
      }
      state2.tag = _tag;
      state2.dump = _result || "{}";
    }
    function detectType(state2, object2, explicit) {
      var _result, typeList, index, length, type, style;
      typeList = explicit ? state2.explicitTypes : state2.implicitTypes;
      for (index = 0, length = typeList.length; index < length; index += 1) {
        type = typeList[index];
        if ((type.instanceOf || type.predicate) && (!type.instanceOf || typeof object2 === "object" && object2 instanceof type.instanceOf) && (!type.predicate || type.predicate(object2))) {
          state2.tag = explicit ? type.tag : "?";
          if (type.represent) {
            style = state2.styleMap[type.tag] || type.defaultStyle;
            if (_toString.call(type.represent) === "[object Function]") {
              _result = type.represent(object2, style);
            } else if (_hasOwnProperty.call(type.represent, style)) {
              _result = type.represent[style](object2, style);
            } else {
              throw new YAMLException("!<" + type.tag + '> tag resolver accepts not "' + style + '" style');
            }
            state2.dump = _result;
          }
          return true;
        }
      }
      return false;
    }
    function writeNode(state2, level, object2, block, compact, iskey) {
      state2.tag = null;
      state2.dump = object2;
      if (!detectType(state2, object2, false)) {
        detectType(state2, object2, true);
      }
      var type = _toString.call(state2.dump);
      if (block) {
        block = state2.flowLevel < 0 || state2.flowLevel > level;
      }
      var objectOrArray = type === "[object Object]" || type === "[object Array]", duplicateIndex, duplicate;
      if (objectOrArray) {
        duplicateIndex = state2.duplicates.indexOf(object2);
        duplicate = duplicateIndex !== -1;
      }
      if (state2.tag !== null && state2.tag !== "?" || duplicate || state2.indent !== 2 && level > 0) {
        compact = false;
      }
      if (duplicate && state2.usedDuplicates[duplicateIndex]) {
        state2.dump = "*ref_" + duplicateIndex;
      } else {
        if (objectOrArray && duplicate && !state2.usedDuplicates[duplicateIndex]) {
          state2.usedDuplicates[duplicateIndex] = true;
        }
        if (type === "[object Object]") {
          if (block && Object.keys(state2.dump).length !== 0) {
            writeBlockMapping(state2, level, state2.dump, compact);
            if (duplicate) {
              state2.dump = "&ref_" + duplicateIndex + state2.dump;
            }
          } else {
            writeFlowMapping(state2, level, state2.dump);
            if (duplicate) {
              state2.dump = "&ref_" + duplicateIndex + " " + state2.dump;
            }
          }
        } else if (type === "[object Array]") {
          var arrayLevel = state2.noArrayIndent && level > 0 ? level - 1 : level;
          if (block && state2.dump.length !== 0) {
            writeBlockSequence(state2, arrayLevel, state2.dump, compact);
            if (duplicate) {
              state2.dump = "&ref_" + duplicateIndex + state2.dump;
            }
          } else {
            writeFlowSequence(state2, arrayLevel, state2.dump);
            if (duplicate) {
              state2.dump = "&ref_" + duplicateIndex + " " + state2.dump;
            }
          }
        } else if (type === "[object String]") {
          if (state2.tag !== "?") {
            writeScalar(state2, state2.dump, level, iskey);
          }
        } else {
          if (state2.skipInvalid) return false;
          throw new YAMLException("unacceptable kind of an object to dump " + type);
        }
        if (state2.tag !== null && state2.tag !== "?") {
          state2.dump = "!<" + state2.tag + "> " + state2.dump;
        }
      }
      return true;
    }
    function getDuplicateReferences(object2, state2) {
      var objects = [], duplicatesIndexes = [], index, length;
      inspectNode(object2, objects, duplicatesIndexes);
      for (index = 0, length = duplicatesIndexes.length; index < length; index += 1) {
        state2.duplicates.push(objects[duplicatesIndexes[index]]);
      }
      state2.usedDuplicates = new Array(length);
    }
    function inspectNode(object2, objects, duplicatesIndexes) {
      var objectKeyList, index, length;
      if (object2 !== null && typeof object2 === "object") {
        index = objects.indexOf(object2);
        if (index !== -1) {
          if (duplicatesIndexes.indexOf(index) === -1) {
            duplicatesIndexes.push(index);
          }
        } else {
          objects.push(object2);
          if (Array.isArray(object2)) {
            for (index = 0, length = object2.length; index < length; index += 1) {
              inspectNode(object2[index], objects, duplicatesIndexes);
            }
          } else {
            objectKeyList = Object.keys(object2);
            for (index = 0, length = objectKeyList.length; index < length; index += 1) {
              inspectNode(object2[objectKeyList[index]], objects, duplicatesIndexes);
            }
          }
        }
      }
    }
    function dump(input, options2) {
      options2 = options2 || {};
      var state2 = new State(options2);
      if (!state2.noRefs) getDuplicateReferences(input, state2);
      if (writeNode(state2, 0, input, true, true)) return state2.dump + "\n";
      return "";
    }
    function safeDump(input, options2) {
      return dump(input, common.extend({ schema: DEFAULT_SAFE_SCHEMA }, options2));
    }
    module2.exports.dump = dump;
    module2.exports.safeDump = safeDump;
  }
});

// node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml.js
var require_js_yaml = __commonJS({
  "node_modules/gray-matter/node_modules/js-yaml/lib/js-yaml.js"(exports2, module2) {
    "use strict";
    var loader = require_loader();
    var dumper = require_dumper();
    function deprecated(name) {
      return function() {
        throw new Error("Function " + name + " is deprecated and cannot be used.");
      };
    }
    module2.exports.Type = require_type();
    module2.exports.Schema = require_schema();
    module2.exports.FAILSAFE_SCHEMA = require_failsafe();
    module2.exports.JSON_SCHEMA = require_json();
    module2.exports.CORE_SCHEMA = require_core();
    module2.exports.DEFAULT_SAFE_SCHEMA = require_default_safe();
    module2.exports.DEFAULT_FULL_SCHEMA = require_default_full();
    module2.exports.load = loader.load;
    module2.exports.loadAll = loader.loadAll;
    module2.exports.safeLoad = loader.safeLoad;
    module2.exports.safeLoadAll = loader.safeLoadAll;
    module2.exports.dump = dumper.dump;
    module2.exports.safeDump = dumper.safeDump;
    module2.exports.YAMLException = require_exception();
    module2.exports.MINIMAL_SCHEMA = require_failsafe();
    module2.exports.SAFE_SCHEMA = require_default_safe();
    module2.exports.DEFAULT_SCHEMA = require_default_full();
    module2.exports.scan = deprecated("scan");
    module2.exports.parse = deprecated("parse");
    module2.exports.compose = deprecated("compose");
    module2.exports.addConstructor = deprecated("addConstructor");
  }
});

// node_modules/gray-matter/node_modules/js-yaml/index.js
var require_js_yaml2 = __commonJS({
  "node_modules/gray-matter/node_modules/js-yaml/index.js"(exports2, module2) {
    "use strict";
    var yaml2 = require_js_yaml();
    module2.exports = yaml2;
  }
});

// node_modules/gray-matter/lib/engines.js
var require_engines = __commonJS({
  "node_modules/gray-matter/lib/engines.js"(exports, module) {
    "use strict";
    var yaml = require_js_yaml2();
    var engines = exports = module.exports;
    engines.yaml = {
      parse: yaml.safeLoad.bind(yaml),
      stringify: yaml.safeDump.bind(yaml)
    };
    engines.json = {
      parse: JSON.parse.bind(JSON),
      stringify: function(obj, options2) {
        const opts = Object.assign({ replacer: null, space: 2 }, options2);
        return JSON.stringify(obj, opts.replacer, opts.space);
      }
    };
    engines.javascript = {
      parse: function parse(str, options, wrap) {
        try {
          if (wrap !== false) {
            str = "(function() {\nreturn " + str.trim() + ";\n}());";
          }
          return eval(str) || {};
        } catch (err) {
          if (wrap !== false && /(unexpected|identifier)/i.test(err.message)) {
            return parse(str, options, false);
          }
          throw new SyntaxError(err);
        }
      },
      stringify: function() {
        throw new Error("stringifying JavaScript is not supported");
      }
    };
  }
});

// node_modules/strip-bom-string/index.js
var require_strip_bom_string = __commonJS({
  "node_modules/strip-bom-string/index.js"(exports2, module2) {
    "use strict";
    module2.exports = function(str2) {
      if (typeof str2 === "string" && str2.charAt(0) === "\uFEFF") {
        return str2.slice(1);
      }
      return str2;
    };
  }
});

// node_modules/gray-matter/lib/utils.js
var require_utils2 = __commonJS({
  "node_modules/gray-matter/lib/utils.js"(exports2) {
    "use strict";
    var stripBom = require_strip_bom_string();
    var typeOf = require_kind_of();
    exports2.define = function(obj, key, val) {
      Reflect.defineProperty(obj, key, {
        enumerable: false,
        configurable: true,
        writable: true,
        value: val
      });
    };
    exports2.isBuffer = function(val) {
      return typeOf(val) === "buffer";
    };
    exports2.isObject = function(val) {
      return typeOf(val) === "object";
    };
    exports2.toBuffer = function(input) {
      return typeof input === "string" ? Buffer.from(input) : input;
    };
    exports2.toString = function(input) {
      if (exports2.isBuffer(input)) return stripBom(String(input));
      if (typeof input !== "string") {
        throw new TypeError("expected input to be a string or buffer");
      }
      return stripBom(input);
    };
    exports2.arrayify = function(val) {
      return val ? Array.isArray(val) ? val : [val] : [];
    };
    exports2.startsWith = function(str2, substr, len) {
      if (typeof len !== "number") len = substr.length;
      return str2.slice(0, len) === substr;
    };
  }
});

// node_modules/gray-matter/lib/defaults.js
var require_defaults2 = __commonJS({
  "node_modules/gray-matter/lib/defaults.js"(exports2, module2) {
    "use strict";
    var engines2 = require_engines();
    var utils = require_utils2();
    module2.exports = function(options2) {
      const opts = Object.assign({}, options2);
      opts.delimiters = utils.arrayify(opts.delims || opts.delimiters || "---");
      if (opts.delimiters.length === 1) {
        opts.delimiters.push(opts.delimiters[0]);
      }
      opts.language = (opts.language || opts.lang || "yaml").toLowerCase();
      opts.engines = Object.assign({}, engines2, opts.parsers, opts.engines);
      return opts;
    };
  }
});

// node_modules/gray-matter/lib/engine.js
var require_engine = __commonJS({
  "node_modules/gray-matter/lib/engine.js"(exports2, module2) {
    "use strict";
    module2.exports = function(name, options2) {
      let engine = options2.engines[name] || options2.engines[aliase(name)];
      if (typeof engine === "undefined") {
        throw new Error('gray-matter engine "' + name + '" is not registered');
      }
      if (typeof engine === "function") {
        engine = { parse: engine };
      }
      return engine;
    };
    function aliase(name) {
      switch (name.toLowerCase()) {
        case "js":
        case "javascript":
          return "javascript";
        case "coffee":
        case "coffeescript":
        case "cson":
          return "coffee";
        case "yaml":
        case "yml":
          return "yaml";
        default: {
          return name;
        }
      }
    }
  }
});

// node_modules/gray-matter/lib/stringify.js
var require_stringify = __commonJS({
  "node_modules/gray-matter/lib/stringify.js"(exports2, module2) {
    "use strict";
    var typeOf = require_kind_of();
    var getEngine = require_engine();
    var defaults = require_defaults2();
    module2.exports = function(file, data, options2) {
      if (data == null && options2 == null) {
        switch (typeOf(file)) {
          case "object":
            data = file.data;
            options2 = {};
            break;
          case "string":
            return file;
          default: {
            throw new TypeError("expected file to be a string or object");
          }
        }
      }
      const str2 = file.content;
      const opts = defaults(options2);
      if (data == null) {
        if (!opts.data) return file;
        data = opts.data;
      }
      const language = file.language || opts.language;
      const engine = getEngine(language, opts);
      if (typeof engine.stringify !== "function") {
        throw new TypeError('expected "' + language + '.stringify" to be a function');
      }
      data = Object.assign({}, file.data, data);
      const open = opts.delimiters[0];
      const close = opts.delimiters[1];
      const matter3 = engine.stringify(data, options2).trim();
      let buf = "";
      if (matter3 !== "{}") {
        buf = newline(open) + newline(matter3) + newline(close);
      }
      if (typeof file.excerpt === "string" && file.excerpt !== "") {
        if (str2.indexOf(file.excerpt.trim()) === -1) {
          buf += newline(file.excerpt) + newline(close);
        }
      }
      return buf + newline(str2);
    };
    function newline(str2) {
      return str2.slice(-1) !== "\n" ? str2 + "\n" : str2;
    }
  }
});

// node_modules/gray-matter/lib/excerpt.js
var require_excerpt = __commonJS({
  "node_modules/gray-matter/lib/excerpt.js"(exports2, module2) {
    "use strict";
    var defaults = require_defaults2();
    module2.exports = function(file, options2) {
      const opts = defaults(options2);
      if (file.data == null) {
        file.data = {};
      }
      if (typeof opts.excerpt === "function") {
        return opts.excerpt(file, opts);
      }
      const sep = file.data.excerpt_separator || opts.excerpt_separator;
      if (sep == null && (opts.excerpt === false || opts.excerpt == null)) {
        return file;
      }
      const delimiter = typeof opts.excerpt === "string" ? opts.excerpt : sep || opts.delimiters[0];
      const idx = file.content.indexOf(delimiter);
      if (idx !== -1) {
        file.excerpt = file.content.slice(0, idx);
      }
      return file;
    };
  }
});

// node_modules/gray-matter/lib/to-file.js
var require_to_file = __commonJS({
  "node_modules/gray-matter/lib/to-file.js"(exports2, module2) {
    "use strict";
    var typeOf = require_kind_of();
    var stringify = require_stringify();
    var utils = require_utils2();
    module2.exports = function(file) {
      if (typeOf(file) !== "object") {
        file = { content: file };
      }
      if (typeOf(file.data) !== "object") {
        file.data = {};
      }
      if (file.contents && file.content == null) {
        file.content = file.contents;
      }
      utils.define(file, "orig", utils.toBuffer(file.content));
      utils.define(file, "language", file.language || "");
      utils.define(file, "matter", file.matter || "");
      utils.define(file, "stringify", function(data, options2) {
        if (options2 && options2.language) {
          file.language = options2.language;
        }
        return stringify(file, data, options2);
      });
      file.content = utils.toString(file.content);
      file.isEmpty = false;
      file.excerpt = "";
      return file;
    };
  }
});

// node_modules/gray-matter/lib/parse.js
var require_parse = __commonJS({
  "node_modules/gray-matter/lib/parse.js"(exports2, module2) {
    "use strict";
    var getEngine = require_engine();
    var defaults = require_defaults2();
    module2.exports = function(language, str2, options2) {
      const opts = defaults(options2);
      const engine = getEngine(language, opts);
      if (typeof engine.parse !== "function") {
        throw new TypeError('expected "' + language + '.parse" to be a function');
      }
      return engine.parse(str2, opts);
    };
  }
});

// node_modules/gray-matter/index.js
var require_gray_matter = __commonJS({
  "node_modules/gray-matter/index.js"(exports2, module2) {
    "use strict";
    var fs7 = require("fs");
    var sections = require_section_matter();
    var defaults = require_defaults2();
    var stringify = require_stringify();
    var excerpt = require_excerpt();
    var engines2 = require_engines();
    var toFile = require_to_file();
    var parse2 = require_parse();
    var utils = require_utils2();
    function matter3(input, options2) {
      if (input === "") {
        return { data: {}, content: input, excerpt: "", orig: input };
      }
      let file = toFile(input);
      const cached = matter3.cache[file.content];
      if (!options2) {
        if (cached) {
          file = Object.assign({}, cached);
          file.orig = cached.orig;
          return file;
        }
        matter3.cache[file.content] = file;
      }
      return parseMatter(file, options2);
    }
    function parseMatter(file, options2) {
      const opts = defaults(options2);
      const open = opts.delimiters[0];
      const close = "\n" + opts.delimiters[1];
      let str2 = file.content;
      if (opts.language) {
        file.language = opts.language;
      }
      const openLen = open.length;
      if (!utils.startsWith(str2, open, openLen)) {
        excerpt(file, opts);
        return file;
      }
      if (str2.charAt(openLen) === open.slice(-1)) {
        return file;
      }
      str2 = str2.slice(openLen);
      const len = str2.length;
      const language = matter3.language(str2, opts);
      if (language.name) {
        file.language = language.name;
        str2 = str2.slice(language.raw.length);
      }
      let closeIndex = str2.indexOf(close);
      if (closeIndex === -1) {
        closeIndex = len;
      }
      file.matter = str2.slice(0, closeIndex);
      const block = file.matter.replace(/^\s*#[^\n]+/gm, "").trim();
      if (block === "") {
        file.isEmpty = true;
        file.empty = file.content;
        file.data = {};
      } else {
        file.data = parse2(file.language, file.matter, opts);
      }
      if (closeIndex === len) {
        file.content = "";
      } else {
        file.content = str2.slice(closeIndex + close.length);
        if (file.content[0] === "\r") {
          file.content = file.content.slice(1);
        }
        if (file.content[0] === "\n") {
          file.content = file.content.slice(1);
        }
      }
      excerpt(file, opts);
      if (opts.sections === true || typeof opts.section === "function") {
        sections(file, opts.section);
      }
      return file;
    }
    matter3.engines = engines2;
    matter3.stringify = function(file, data, options2) {
      if (typeof file === "string") file = matter3(file, options2);
      return stringify(file, data, options2);
    };
    matter3.read = function(filepath, options2) {
      const str2 = fs7.readFileSync(filepath, "utf8");
      const file = matter3(str2, options2);
      file.path = filepath;
      return file;
    };
    matter3.test = function(str2, options2) {
      return utils.startsWith(str2, defaults(options2).delimiters[0]);
    };
    matter3.language = function(str2, options2) {
      const opts = defaults(options2);
      const open = opts.delimiters[0];
      if (matter3.test(str2)) {
        str2 = str2.slice(open.length);
      }
      const language = str2.slice(0, str2.search(/\r?\n/));
      return {
        raw: language,
        name: language ? language.trim() : ""
      };
    };
    matter3.cache = {};
    matter3.clearCache = function() {
      matter3.cache = {};
    };
    module2.exports = matter3;
  }
});

// apps/desktop/tmp-harness/electron-stub.js
var require_electron_stub = __commonJS({
  "apps/desktop/tmp-harness/electron-stub.js"(exports2, module2) {
    "use strict";
    var os2 = require("node:os");
    var path9 = require("node:path");
    var fs7 = require("node:fs");
    var stubRoot = path9.join(os2.tmpdir(), "cindy-5028-harness-electron-stub");
    fs7.mkdirSync(stubRoot, { recursive: true });
    module2.exports = {
      app: { getPath: (name) => {
        const p = path9.join(stubRoot, name);
        fs7.mkdirSync(p, { recursive: true });
        return p;
      }, getName: () => "cindy-harness", isPackaged: false, getVersion: () => "0.0.0-harness" },
      utilityProcess: { fork: () => {
        throw new Error("HARNESS_COVERAGE_GAP: electron.utilityProcess.fork reached");
      } },
      BrowserWindow: class {
      },
      ipcMain: { handle() {
      }, on() {
      } },
      shell: {},
      dialog: {},
      nativeTheme: {}
    };
  }
});

// apps/desktop/tmp-harness/ghost-install-harness.ts
var import_node_fs6 = __toESM(require("node:fs"));
var import_node_os = __toESM(require("node:os"));
var import_node_path8 = __toESM(require("node:path"));
var import_node_crypto5 = __toESM(require("node:crypto"));
var import_node_child_process = require("node:child_process");
var import_jszip3 = __toESM(require_lib3());

// apps/desktop/src/main/cindy-brain/GhostManager.ts
var import_node_fs4 = __toESM(require("node:fs"));
var import_node_path6 = __toESM(require("node:path"));
var import_node_crypto4 = __toESM(require("node:crypto"));
var import_node_util = require("node:util");
var import_jszip2 = __toESM(require_lib3());

// packages/plugin-protocol/src/routineEvents.ts
function parseGhostRoutineEvents(raw) {
  if (!raw || typeof raw !== "object" || Array.isArray(raw)) return null;
  const events2 = raw.events;
  if (!Array.isArray(events2) || events2.length < 1 || events2.length > 32)
    return null;
  const output = [];
  const seen = /* @__PURE__ */ new Set();
  for (const item of events2) {
    if (!item || typeof item !== "object" || Array.isArray(item)) return null;
    const { type, name, fields } = item;
    if (typeof type !== "string" || !/^[a-zA-Z0-9][a-zA-Z0-9._-]{0,127}$/.test(type) || seen.has(type))
      return null;
    if (typeof name !== "string" || !name.trim() || name.length > 200)
      return null;
    if (!Array.isArray(fields) || fields.length > 32 || fields.some(
      (field) => typeof field !== "string" || !/^[a-zA-Z0-9][a-zA-Z0-9._-]{0,127}$/.test(field)
    ))
      return null;
    if (new Set(fields).size !== fields.length) return null;
    output.push({ type, name, fields });
    seen.add(type);
  }
  return { events: output };
}

// packages/plugin-protocol/src/manifest.ts
var GHOST_MANIFEST_SUMMARY_MAX_CHARS = 300;
var GHOST_LOCALES = ["zh-CN", "en", "ja", "ko"];
var GHOST_LOCALE_MAX_BYTES = 64 * 1024;
var GHOST_SECRET_EXCHANGE_TTL_MAX_S = 30 * 24 * 3600;
var GHOST_OAUTH_SCOPES_MAX = 256;
var GHOST_SKILL_MD_MAX_BYTES = 64 * 1024;
var GHOST_MANUAL_MD_MAX_BYTES = 64 * 1024;
function parseCindyVersion(value) {
  const match = /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-([0-9A-Za-z-]+(?:\.[0-9A-Za-z-]+)*))?(?:\+[0-9A-Za-z-]+(?:\.[0-9A-Za-z-]+)*)?$/.exec(
    value
  );
  if (!match) return null;
  const core = [match[1], match[2], match[3]];
  const prerelease = [];
  for (const part of match[4]?.split(".") ?? []) {
    const numeric = /^\d+$/.test(part);
    if (numeric && !/^(0|[1-9]\d*)$/.test(part)) return null;
    prerelease.push({ numeric, value: part });
  }
  return { core, prerelease };
}
function isValidCindyVersion(value) {
  return typeof value === "string" && value.length <= 32 && parseCindyVersion(value) !== null;
}

// packages/plugin-protocol/src/memberUpload.ts
var PLUGIN_MEMBER_UPLOAD_MAX_ARCHIVE_BYTES = 128 * 1024 * 1024;
var PLUGIN_MEMBER_UPLOAD_MAX_UNCOMPRESSED_BYTES = 256 * 1024 * 1024;
var PLUGIN_MEMBER_UPLOAD_MAX_ZIP_ENTRIES = 2048;

// packages/device-link-protocol/src/protocol.ts
var MAX_FRAME_BYTES = 2 * 1024 * 1024;
var WS_MAX_PAYLOAD_BYTES = 4 * 1024 * 1024;

// packages/device-link/src/filePeer.ts
var FILE_PEER_CHANNEL = "device-link:file-peer";
var FILE_PEER_CHUNK_BYTES = 16 * 1024;
var FILE_PEER_MAX_BYTES = 2 * 1024 * 1024 * 1024;

// packages/device-link/src/remoteResources.ts
var REMOTE_RESOURCE_MANIFEST_CHANNEL = "maker:remote-resources:manifest";
var REMOTE_RESOURCE_LIST_CHANNEL = "maker:remote-resources:list";
var REMOTE_RESOURCE_GET_CHANNEL = "maker:remote-resources:get";
var REMOTE_RESOURCE_INVOKE_CHANNEL = "maker:remote-resources:invoke";
var REMOTE_RESOURCE_CHANNELS = [
  REMOTE_RESOURCE_MANIFEST_CHANNEL,
  REMOTE_RESOURCE_LIST_CHANNEL,
  REMOTE_RESOURCE_GET_CHANNEL,
  REMOTE_RESOURCE_INVOKE_CHANNEL
];
var MAX_ACTION_INPUT_BYTES = 64 * 1024;

// packages/device-link/src/remoteDesktopIce.ts
var REMOTE_DESKTOP_ICE_CONFIG_TIMEOUT_MS = 8e3;
var REMOTE_DESKTOP_OFFER_BUDGET = {
  captureReadyMs: 1e4,
  platformStatusMs: 8e3,
  // Windows Node-API probe: pipe open 3s, write 5s, and ready read 5s.
  platformHandshakeMs: 13e3,
  sourcesMs: 5e3,
  hostMs: 18e3
};
var REMOTE_DESKTOP_INVOKE_MS = REMOTE_DESKTOP_OFFER_BUDGET.captureReadyMs + REMOTE_DESKTOP_OFFER_BUDGET.platformStatusMs + REMOTE_DESKTOP_OFFER_BUDGET.platformHandshakeMs + REMOTE_DESKTOP_OFFER_BUDGET.sourcesMs + REMOTE_DESKTOP_OFFER_BUDGET.hostMs + 5e3;
var REMOTE_DESKTOP_NETWORK = {
  iceConfigMs: REMOTE_DESKTOP_ICE_CONFIG_TIMEOUT_MS,
  iceConfigBridgeMs: 500,
  maxCandidates: 128,
  batchSize: 16,
  pollMs: 250,
  exchangeMs: 3e4,
  disconnectedMs: 5e3,
  answerMs: REMOTE_DESKTOP_INVOKE_MS + 2e3,
  connectMs: 15e3,
  legacyGatherMs: 5e3,
  stableMs: 3e4,
  retryMs: [1e3, 3e3, 8e3]
};

// packages/device-link/src/allowlist.ts
var DL_SUBSCRIBE_CHANNEL = "device-link:subscribe";
var DL_UNSUBSCRIBE_CHANNEL = "device-link:unsubscribe";
var DL_HISTORY_MESSAGES_CHANNEL = "local-db:history:messages";
var DL_SESSION_REFERENCE_CAPABILITY_CHANNEL = "maker:input:session-reference-capability";
var DL_MEDIA_FETCH_CHANNEL = "device-link:media:fetch";
var DL_VOICE_TRANSCRIBE_CHANNEL = "device-link:voice:transcribe";
var DL_VOICE_CREDENTIAL_SYNC_CHANNEL = "device-link:voice:credential-sync";
var DL_TELEGRAM_STATUS_CHANNEL = "device-link:telegram:status";
var DL_TELEGRAM_SET_ONLINE_CHANNEL = "device-link:telegram:set-online";
var DL_VOICE_DICTIONARY_LEARNING_CHANNEL = "device-link:voice:dictionary-learning";
var DL_VOICE_DICTIONARY_GET_CHANNEL = "device-link:voice:dictionary:get";
var CORE_INVOKE_CHANNELS = [
  // —— 会话生命周期 ——
  "maker:create-session",
  "maker:close-session",
  "maker:abort-session",
  "maker:send",
  "maker:steer",
  "maker:list-active",
  "maker:any-session-in-turn",
  "maker:session-in-turn",
  // —— 输入队列(input queue 全集,无本机副作用)——
  DL_SESSION_REFERENCE_CAPABILITY_CHANNEL,
  "maker:input:get-projection",
  "maker:input:enqueue",
  "maker:input:compact",
  // 手动压缩(pi 原生 compact,capability-aware):上下文环 / 会话菜单对远程 pi 会话
  // 隧道到被控端执行。业务 handler 无 sender / 本机 UI 副作用,真相在被控端。
  // 长 LLM 摘要请求可能远超默认 30s → INVOKE_TIMEOUT_OVERRIDES_MS 覆盖(见下)。
  "maker:compact-session",
  "maker:input:steer",
  "maker:input:stop",
  "maker:input:resume",
  "maker:input:retry-last-error",
  "maker:input:clear-error",
  "maker:input:remove",
  "maker:input:update-text",
  // 整条内容替换(文本+附件),手机端排队消息复用 composer 编辑;老被控端无 handler →
  // CHANNEL_NOT_ALLOWED,控制端按「仅文本变化降级 update-text / 附件变化提示升级」处理。
  "maker:input:update-content",
  "maker:input:move",
  "maker:input:set-expanded",
  "maker:input:set-interaction-lock",
  "maker:input:set-edit-lock",
  "maker:input:clear-session",
  // device-link:auth error 重试失败/放弃时控制端调此补落被控端 DB;被控端 main 执行无 sender 依赖。
  "maker:persist-turn-error-deferred",
  // —— 交互审批(permission / ask / plan)——
  "maker:resolve-interaction",
  // 打开/重连/刷新会话时拉当前挂起交互快照,重建可操作面板(只读)。
  "maker:get-pending-interactions",
  // —— 运行时切换 ——
  "maker:set-model",
  // 同一会话 Claude Code / Codex 切换采用 pending intent：写入口只登记意图，
  // 只读入口供控制端重连后恢复 main 权威状态；两者都无 event.sender / 本机 UI 副作用。
  "maker:switch-session-agent",
  "maker:get-session-agent-switch-intent",
  "maker:set-effort",
  "maker:set-permission-mode",
  "maker:set-fast-mode",
  // Pi 本机模型思考开关。runtime-only，无 session 列；老被控端无 handler →
  // CHANNEL_NOT_ALLOWED，控制端按 capabilities.thinkingToggle 隐藏入口。
  "maker:set-thinking-enabled",
  // 计划模式一级开关(runtime-only, 持久化经 dispatch persistRemoteSetting 回流)。
  // 老被控端无 handler → CHANNEL_NOT_ALLOWED → 控制端 UI 本就按 capabilities.planMode 缺失隐藏入口。
  "maker:set-plan-mode",
  "maker:set-extra-dirs",
  "maker:set-writable-dirs",
  // Pi 原生分支树:只读快照 + 当前会话内导航。导航业务 handler 在被控端原子同步
  // SDK leaf 与 SQLite 可见时间线，不依赖 sender/窗口，真相也只在被控端。
  "maker:get-session-tree",
  "maker:navigate-session-tree",
  // 会话「非选中模型」effort/fast 写穿(控制端 → 被控端):控制端纯显示,改非选中行的预设记忆时
  // 通知被控端,被控端调它原来的本地 setter(setSessionModelEffort/Fast)写真实存储。选中模型仍走
  // maker:set-model/effort/fast-mode + sessions:patched,不经此 channel。被控端转发给自身 renderer
  // 执行(无 sender 依赖、无本机副作用)。老被控端无 handler → CHANNEL_NOT_ALLOWED → 控制端吞掉降级。
  "maker:set-session-model-pref",
  // —— 能力查询 ——
  "maker:get-capabilities",
  "maker:list-available-agents",
  // device-link 远程草稿镜像(只读):控制端为被控设备新建项目草稿时,读被控端**当前 New Maker
  // 草稿**在该 vendor 的完整选择(model/effort/fast/permission/source),1:1 seed 控制端草稿。
  // 数据真相在被控端(其 renderer 草稿),无 sender 依赖、无本机副作用 → 准入。老被控端无此 handler
  // → 控制端收 CHANNEL_NOT_ALLOWED → 回退被控端 capabilities 默认。
  "maker:get-new-maker-defaults",
  "maker:model-favorites:get",
  "maker:model-favorites:apply",
  // device-link 草稿「每个模型 effort/fast」写穿(控制端 → 被控端):控制端在远程项目草稿里改
  // 选中 / 非选中模型的 effort/fast 时通知被控端,被控端调它原来的本地 setter(setEffortForModel /
  // setFastModeForModel)写真实草稿;被控端 newMakerDraft 变更自动经既有 maker:sync-new-maker-draft
  // re-mirror 回 main 并广播。被控端转发给自身 renderer 执行(无 sender 依赖、无本机副作用)。
  // 老被控端无 handler → CHANNEL_NOT_ALLOWED → 控制端吞掉,退回一次性 pull 行为。
  "maker:apply-new-maker-draft-pref",
  // device-link 草稿「新建会话默认启用 worktree」写穿(控制端 → 被控端):worktree 勾选记忆是
  // 被控端 newMakerDraft 的 vendor 无关根字段,「这台工作端新建会话是否默认进 worktree」的真相
  // 在被控端。被控端 handler 校验布尔后转发给自身 renderer 写真实草稿(无 sender 依赖、无本机
  // UI 副作用);回读经 maker:get-new-maker-defaults + NEW_MAKER_DRAFT_CHANGED 回流。
  // 老被控端无 handler → CHANNEL_NOT_ALLOWED → 控制端吞掉降级(勾选仅本次草稿生效)。
  "maker:apply-new-maker-worktree-pref",
  // device-link 新建 worktree 源分支镜像:branch 选择属于被控端 canonical baseRepo,
  // 控制端先按 repo 拉取、显式选择时写穿，被控端返回/广播带 revision 的权威 snapshot。
  // GET 只读 main 内存镜像；APPLY 只更新该 repo 的 future-session 偏好，不执行 git/fs。
  "maker:get-new-maker-worktree-branch-pref",
  "maker:apply-new-maker-worktree-branch-pref",
  // 被控端侧栏项目顺序(显示偏好,真相在被控端 Main)。GET 只读;APPLY 写被控端
  // owner 作用域快照。不用 `:set` 后缀(全局设置写禁模式)。老被控端无 handler
  // → CHANNEL_NOT_ALLOWED → 控制端吞掉,回退本机/按时间。
  "sidebar-settings:get-project-order",
  "sidebar-settings:apply-project-order",
  // 模型供应商目录(只读):远程会话的模型选择器据此 1:1 镜像被控端的「供应商+模型」结构。
  // 被控端 dispatch 在返回前剥离 routing 等执行字段(见 device-link/dispatch.ts),只回显示用字段。
  "maker:provider:list",
  // Git safety 设置(只读):远程 Codex Rewind 入口必须按被控端是否会创建 safety snapshot
  // 决定显隐。SET/RESET 不放行,控制端不能改被控端全局偏好。
  "maker:git-safety:get",
  // 会话标题旁的 Git / GitHub 上下文(分支、PR 引用与实时状态)必须在被控端查询,
  // 因为控制端本地没有远端 session 的 DB、工作目录或 gh 登录态。
  "git-context:get-for-session",
  "git-context:pr-refs:list",
  "git-context:pr-status",
  // —— 通用远程资源面——
  // 固定的 manifest / list / get / invoke 入口。业务模块只在被控端 provider
  // registry 注册资源与动作，后续新增模块或动作不再扩张 device-link channel 表。
  ...REMOTE_RESOURCE_CHANNELS,
  // —— 读模型(被控端本地 DB 是数据真相)——
  "local-db:sessions:list",
  "local-db:task-tags:execute",
  "local-db:sessions:get",
  // Bounded metadata reconciliation. Old hosts reject this; controllers fall back to GET.
  "local-db:sessions:get-many",
  // Read-only indexed task search for the remote Composer @ palette and the
  // controller sidebar task search. Older controlled clients reject this
  // channel and the controller falls back to the bounded legacy sessions:list
  // projection.
  "local-db:conversations:search",
  DL_HISTORY_MESSAGES_CHANNEL,
  "local-db:messages:list",
  // Read-only visible history and recoverable work ranges; same session authorization as list.
  "local-db:messages:view",
  "local-db:messages:work-details",
  "local-db:messages:view-intent",
  // 会话内搜索跳转定位(loadAroundMessage):只读,与 messages:list 同安全级。
  "local-db:messages:around",
  // 以 message clientId 定位上下文,供移动端轻量跳转 / fork 来源定位；只读,与 messages:around 同安全级。
  "local-db:messages:around-client-id",
  // 订阅形态会话「本会话价值」历史汇总(assistant agent_meta 估算值求和):只读聚合,
  // 无 sender 依赖、无副作用,与 messages:list 同安全级。控制端底部 $ chip 的历史初值
  // 必须查被控端(查本机是空库恒 0);老被控端无此 channel → CHANNEL_NOT_ALLOWED →
  // 控制端吞错,仅靠已加载消息 + 实时 turn-cost 推送呈现部分值。
  "local-db:messages:estimatedSessionValue",
  "local-db:recent-workdirs:list",
  // 窄口径写:从被控端「最近项目」列表移除一条(专用 handler,path 归一后按主键删,
  // 幂等,不动 sessions / 磁盘)。控制端项目选择器的删除入口与本机语义对等;
  // 老被控端无此 handler → CHANNEL_NOT_ALLOWED → 控制端隐藏/忽略删除能力即可。
  "local-db:recent-workdirs:remove",
  // 窄口径元数据写:仅 status / title / pinnedAt(归档/删除/恢复/重命名/置顶)。专用
  // handler、白名单字段、不是裸 update(update 写任意字段、不放行)。支撑远程删/归档/改名/置顶对等。
  "local-db:sessions:patch-meta",
  // 只读:「疑似中断」(startedAt > endedAt)的 active 会话 id(错误红点数据源)。
  // 与 sessions:list 同安全级。
  "local-db:sessions:interrupted-pending",
  // 窄口径写:中断提示的「继续/忽略」—— 仅写 sessions.last_turn_ended_at = now
  // (专用 handler,单字段幂等,不是裸 update)。远程会话的确认必须落被控端 DB,
  // 否则重开会话提示复活。老被控端无此 handler → CHANNEL_NOT_ALLOWED → 控制端
  // 吞错退化为本视图内存隐藏。
  "local-db:sessions:ack-interrupted",
  // 窄口径写:error-tail-banner 的「关闭/忽略」——仅把 role='error' 行的 content
  // merge dismissed:true(handler 内校验 role,原字段保留,不是裸 updateContent,
  // updateContent 本身不放行)。远程会话的忽略必须落被控端 DB,否则重连/重拉后
  // 红条复活。老被控端无此 handler → CHANNEL_NOT_ALLOWED → 控制端吞错退化为
  // 本视图内存隐藏。
  "local-db:messages:dismiss-error",
  // 消息菜单单条内容删除:在被控端清旧原生上下文并写 context rebuild handoff。
  "maker:message:delete",
  // 订阅控制帧(push 驱动):被控端 dispatch 拦截执行,不落到 ipcMain handler。
  // 列入 allowlist 作契约登记 + 老被控端不识别时回 CHANNEL_NOT_ALLOWED 供控制端探测能力(回退 poll)。
  DL_SUBSCRIBE_CHANNEL,
  DL_UNSUBSCRIBE_CHANNEL,
  // 入方向媒体取件(被控端 dispatch 拦截执行,不落 ipcMain handler;契约登记 + 能力探测)。
  DL_MEDIA_FETCH_CHANNEL,
  FILE_PEER_CHANNEL,
  // 出方向语音转写(被控端 dispatch 拦截执行,不落 ipcMain handler;复用被控端 ASR 配置)。
  DL_VOICE_TRANSCRIBE_CHANNEL,
  // 临时 voice credential 同步(被控端 dispatch 拦截执行,不落 ipcMain handler;禁止泛化)。
  DL_VOICE_CREDENTIAL_SYNC_CHANNEL,
  // voice dictionary learning evidence 回写(被控端 dispatch 拦截执行,不落 ipcMain handler)。
  DL_VOICE_DICTIONARY_LEARNING_CHANNEL,
  // 手机拉取被控桌面的词典只读快照(被控端 dispatch 拦截执行,不落 ipcMain handler;
  // 老被控端不识别时回 CHANNEL_NOT_ALLOWED,手机据此回退到「无词典」而不是报错)。
  DL_VOICE_DICTIONARY_GET_CHANNEL
];
var EXTENDED_INVOKE_CHANNELS = [
  // —— Scheduler(读 + 改 schedule 都在被控端执行才有意义)——
  "maker:schedule:list",
  "maker:schedule:get",
  "maker:schedule:create",
  "maker:schedule:update",
  "maker:schedule:delete",
  "maker:schedule:pause",
  "maker:schedule:resume",
  "maker:schedule:run-now",
  "maker:schedule:list-runs",
  "maker:schedule:list-sidebar-index-runs",
  "maker:schedule:list-cost-summaries",
  "maker:schedule:delete-run",
  "maker:schedule:get-runtime-state",
  "maker:schedule:get-inflight-count",
  "maker:schedule:get-unread-count",
  "maker:schedule:mark-run-read",
  "maker:schedule:mark-all-runs-read",
  "maker:schedule:mark-schedule-runs-read",
  "maker:schedule:list-templates",
  "maker:schedule:create-from-template",
  // script 任务能力选择器的可用性探测:纯只读查询,意识状态在被控端才有意义
  "maker:schedule:script-capability-status",
  // —— 会话未读已读回执(控制端真实展示会话内容后,把被控端的会话未读态清掉)——
  // 准入:会话粒度状态操作(与 mark-run-read 同类),无 event.sender 依赖、无 shell/UI
  // 副作用;语义在被控端执行才正确(灵动岛 / Dock 角标 / 侧栏红绿点的未读真相都在被控端
  // main)。老被控端无此 channel → CHANNEL_NOT_ALLOWED → 控制端吞掉降级(仅本地清点)。
  "notification:clear-session-attention",
  // —— Project automation ——
  "maker:project-automation:reconcile",
  "maker:project-automation:list-consents",
  "maker:project-automation:revoke-consent",
  "maker:project-automation:upsert-schedule",
  "maker:project-automation:remove-schedule",
  // —— Orca 协同(Lead 控多 Worker;在被控端进程内编排)——
  "maker:worker:create",
  "maker:worker:dispatch-ui-assignment",
  "maker:worker:list",
  "maker:worker:switch-focus",
  "maker:worker:idle",
  "maker:worker:acknowledge-done",
  "maker:worker:archive",
  "maker:team:end",
  "maker:session:enable-orca",
  "maker:session:disable-orca",
  "maker:mark-orca-role",
  "maker:collaboration-settings:get",
  "local-db:orca-workflows:get-by-lead",
  "local-db:orca-workflows:get-by-worker-session",
  "local-db:orca-workflows:list-workers-by-lead",
  // —— Rewind / Fork / Title / Context ——
  "maker:rewind:preview",
  "maker:rewind:commit",
  // Shared action via dispatch injection; local IPC retains its trusted-renderer guard.
  "maker:turn-change-set:apply",
  "maker:fork",
  "maker:fork-strip-encrypted",
  "maker:generate-title",
  // 重命名输入框 Magic 按钮:被控端读自己 DB 里的最新对话素材、用自己的 provider 凭证
  // 重生成标题(与 generate-title 同一 oneShot 通道)。老被控端无此 channel →
  // CHANNEL_NOT_ALLOWED → 控制端按生成失败提示。
  "maker:regenerate-title",
  // 输入框推荐提示词：在被控端读取会话素材并使用被控端模型凭证生成。
  "maker:predict-prompt",
  "maker:get-context-usage",
  // workflow 逐 agent 进度树(只读):handler 纯 fs 读 Claude Code workflow 记录文件,
  // 无 event.sender 依赖、无副作用;记录文件真相在被控端 HOME(控制端本机读必落空)。
  // 老被控端无此 channel → CHANNEL_NOT_ALLOWED → 控制端降级为无数据(回退 workflow 级
  // 卡片)。不进 INVOKE_TIMEOUT_OVERRIDES_MS:读小 JSON,默认 30s 足够。
  "maker:get-workflow-progress",
  // 会话仍在运行的后台任务快照(只读):handler 只查活跃会话内存句柄的任务列表,
  // 无 event.sender 依赖、无副作用;任务真身在被控端(控制端 main 无该会话 handle,
  // 本机查必空)。后台任务面板挂载水合用。老被控端无此 channel → CHANNEL_NOT_ALLOWED
  // → 控制端降级空表(面板退化为事件流 + 消息扫描两源)。
  "maker:session-background-tasks:list",
  "maker:session-background-activity",
  // Durable PI Subagent truth and process handles live on the data-owning device.
  // Reads and exact controls must execute there; the controller must never fall
  // back to its own pi-agent-home for a remote task.
  "local-db:subagent-runs:list",
  "local-db:subagent-runs:detail",
  "local-db:subagent-runs:transcript",
  "maker:pi-subagent:control",
  // —— Goal(目标模式;goal 状态机在被控端 GoalController 执行才有意义)——
  "maker:goal:set",
  "maker:goal:clear",
  "maker:goal:get-status",
  "maker:goal:pause",
  "maker:goal:resume",
  "maker:goal:update",
  // —— Agent 状态 / 用量(只读)——
  "maker:agent:status",
  "maker:agent:binary-version",
  "maker:auth:get-state",
  "maker:usage:today",
  "maker:usage:account",
  // Codex app-server 官方控制面:额度/reset 次数读取 + 经 desktop 账号绑定 offer 的
  // 人工 reset。mutation 不接收 creditId,不能泛化成任意账号/凭证控制入口。
  "maker:usage:codex-rate-limits",
  "maker:usage:codex-rate-limit-reset",
  // Claude 订阅账号余量快照(只读,cached-first):控制端远程会话状态栏 chip 显示
  // 被控端订阅的 5h/周/分模型窗口剩余(数据真相在被控端 —— turn 在被控端消耗其
  // 订阅额度)。快照只含利用率百分比、reset 时间与账号归属指纹(单向 scrypt 哈希,
  // 与本机 renderer 收到的广播 payload 同形),不含凭证材料。无 sender 依赖、无副
  // 作用;老被控端无此 channel → CHANNEL_NOT_ALLOWED → 控制端降级为原「仅会话
  // 金额」占位显示。
  "maker:usage:claude-subscription",
  // xAI(SuperGrok)订阅周用量快照(只读):与 claude-subscription 同定位。该 channel
  // 的 ipcMain handler 挂了 assertTrustedSender(合成 event 必然不可信,那道闸不为
  // 远程放宽)—— 与 device-link:telegram:* 同先例,由被控端 dispatch 在通用 dispatch
  // 前拦截、直读 usage reader,不进 ipcMain。列入 allowlist 作契约登记 + 老被控端
  // CHANNEL_NOT_ALLOWED 供控制端探测降级。
  "maker:usage:xai-subscription",
  // cc 默认路由会话的生效计费路由观察值(只读,'gateway' | 'subscription' | null):
  // 控制端远程会话据此判定订阅 / 网关显示形态 —— 路由真值在被控端 proxy 的按请求
  // 观察 registry 里,控制端拿本机凭证状态重算必然张冠李戴。入参 sessionId,无
  // sender 依赖、无副作用;老被控端 CHANNEL_NOT_ALLOWED → 控制端对默认路由远程
  // 会话维持「仅会话金额」占位(与旧行为一致)。
  "maker:claude-session-route:get",
  // 模型单价表(只读,main 侧 Model Access model-groups 投影缓存):控制端模型选择器展示
  // 被控端视角的单价(与被控端桌面 tooltip 同源)。无 sender 依赖、无副作用;老被控端无此 channel
  // → CHANNEL_NOT_ALLOWED → 控制端隐藏价格(与桌面「无价不显示」口径一致)。
  "maker:usage:model-pricing",
  // 网关 API key **presence-only** 探测:只回 { present: boolean },不回、也永不扩展为读取
  // 密钥材料 —— 这是「账号与密钥永不放行」大类下的窄口径例外(同 DL_VOICE_CREDENTIAL_SYNC
  // 的例外定位,禁止泛化)。用途:控制端模型选择器判断折扣版(codex/)是否该置灰,判定依据
  // 在被控端(key 存被控端 safeStorage、请求也从被控端发)。老被控端无此 channel →
  // CHANNEL_NOT_ALLOWED → 控制端按 unknown 处理(不置灰)。
  "maker:api-key:present",
  // —— Memory 读(写全局设置不放行)——
  // Teammate directory: handlers explicitly recognize the authorized device-link
  // context and return only identity/status/canonical task, without local paths,
  // memory, prompts, configuration, or native UI/file mutations.
  "local-db:bots:list",
  "local-db:bots:get",
  // Same-account opted-in controllers may inspect and stop a companion's own
  // child task and read a participant-checked private thread. No profile mutation.
  "maker:bot-delegations:list",
  "maker:bot-delegation:cancel",
  "maker:bot-direct-message-thread:get",
  "maker:memory:get",
  "maker:memory:get-settings",
  // —— 命令 / 技能 / at 资源 列举(只读)——
  "maker:list-desktop-commands",
  "maker:list-agent-commands",
  "maker:list-agent-skills",
  "maker:list-customizations",
  "maker:scan-at-resources",
  // —— 插件列表(只读)——
  "maker:plugins:list",
  // 单个插件的启停状态(只读)。与 maker:plugins:list 同类,差别只在它不跳过
  // HOSTED_ELSEWHERE 插件、且按 id 精确查。准入三条:handler 只读 settings + 项目
  // `.cindy/plugins.json`,不依赖 event.sender、无 UI/shell 副作用;插件启停真相在
  // 被控端(控制端拿被控端的路径查自己本机只会读到自己的用户级开关,判定可能与被控端
  // main 的 assertCollabProjectEnabled 相反 —— issue #1170 的「入口能点但走不完」)。
  // 用途:device-link 项目的协同入口按被控端的项目级 collab 开关置灰。老被控端无此
  // channel → CHANNEL_NOT_ALLOWED → 控制端 fail-closed 置灰并提示设备版本过旧。
  "maker:plugins:get-state",
  // —— 路径解析(被控端解析语义正确;新建会话选目录用)——
  "fs:resolve-path",
  "fs:resolve-path-batch",
  // —— 本机目录浏览(「添加远程项目」逐级选被控端项目目录用)——
  // 准入:只读目录枚举 + mkdir -p,**无**文件写/删/exec;且 device-link 已是同账号 +
  // remoteControlEnabled 显式 opt-in,控制端本就能在 workingDir 跑 agent(可执行任意命令),
  // 故列目录/建目录落在既有信任域内,不扩大攻击面。见 apps/desktop/src/main/fsBrowse/ipc.ts。
  "fs:list-dir",
  "fs:stat-path",
  "fs:mkdir-p",
  // —— 远程文件浏览(右侧栏 / doc 模式,读写增删 + 文件名索引 + 非流式搜索)——
  // 单聚合 channel:被控端专用 handler(见 apps/desktop/src/main/file-browser/device-op.ts),
  // 不复用依赖 event.sender 的既有 file-browser handler。准入:
  //  - workdir 参数先实时探测被控端本地可访问性,再结合 SSH session 归属解析
  //    唯一执行端点；本地 / SSH 或多 SSH 歧义时 fail closed。路径穿越在
  //    scanner 层拦(assertInsideWorkdir + realpath)。
  //  - device-link 已是同账号 + remoteControlEnabled 显式 opt-in,控制端本就能在
  //    workingDir 跑 agent(任意读写/exec),文件浏览不扩大攻击面(fs:list-dir 同款论证)。
  //  - readFile 结果超帧限前被控端预判回结构化 oversize,不裸炸 FRAME_TOO_LARGE。
  //  - 老被控端无此 channel → CHANNEL_NOT_ALLOWED,控制端渲染"设备版本过旧"占位。
  "file-browser:remote-op",
  // —— 远程 git 审查(右侧栏审查面板,只读)——
  // 单聚合 channel:被控端专用 handler(见 apps/desktop/src/main/git-review/device-op.ts),
  // 不复用本机 renderer 的 git-review:* handler。准入:
  //  - 只读 git 数据(status / diff / commit 列表 / 文件 diff / 图片与 Markdown 预览),
  //    **不放行任何写 op**(stage / discard / commit / push 不在被控端 handler 实现)。
  //  - 入参只有 sessionId + 结构化查询字段,不接受任何客户端路径:workdir 一律由被控端
  //    resolveReviewScope 从它自己的 session 记录解析,路径越界在 fsPathGuard 层拦。
  //  - device-link 已是同账号 + remoteControlEnabled 显式 opt-in,控制端本就能在
  //    workingDir 跑 agent(任意读/exec),只读 git 数据不扩大攻击面(fs:list-dir 同款论证)。
  //  - 响应超帧限前被控端预判:先 gzip,仍超回结构化 OVERSIZE,不裸炸 FRAME_TOO_LARGE。
  //  - 老被控端无此 channel → CHANNEL_NOT_ALLOWED,控制端渲染"设备版本过旧"占位。
  "git-review:remote-op",
  // —— 窄口径文本预览(消息附件 / tool 文件引用只读查看)——
  // 不是裸文件读:handler 要求绝对路径,复用系统目录 blocklist,10MB 上限,
  // 并用 reason 明确 oversize / not_found / forbidden。见 bootstrap-electron text-file:read-preview。
  "text-file:read-preview",
  // —— /learn 远程(learn-host 全流程在被控端:证据查它自己的 DB、staging 在它的
  // userData、skill 落它的 ~/.agents/skills;语义在被控端执行才正确)——
  // learn:apply 写被控端 skill 目录的越权论证:提案由被控端 staging 校验 + redaction
  // 双程扫描后生成,且 device-link 已是同账号 + remoteControlEnabled 显式 opt-in,
  // 控制端本就能经 agent 会话在被控端写文件,不扩大攻击面。入参只有 runId / 结构化
  // 请求体,不接受任何客户端路径(staging 路径全部由被控端生成)。
  "learn:start",
  "learn:list-runs",
  "learn:get-proposal-diff",
  "learn:apply",
  "learn:discard",
  "learn:cancel",
  // —— /cmd 远程(远程会话的 shell 命令在被控端 workingDir 执行才是正确语义)——
  // handler 对 cwd 走 remote-workdir-guard 实时可访问性探测,
  // 准入论证同 fs:list-dir:同账号 + 显式 opt-in 下控制端本就能驱动 agent 执行任意命令。
  "desktop-cmd:run",
  // —— Worktree(为被控端项目预建独立 git worktree;git/fs 语义在被控端执行才正确——
  // 控制端本机 git 探测被控端路径必然误报"不是 git 仓库")——
  // 准入:detect-cwd / list-branches / suggest-name 是只读 git 探测,无写副作用;
  // create 只在 baseRepo/.cindy-worktrees/<name> 下派生新目录(name 经被控端
  // validateWorktreeName 白名单校验,不接受任意路径),且 baseRepo 在被控端 dispatch
  // 层过 remote-workdir-guard 同款收敛(见 dispatch.ts PATH_GUARDED)。device-link
  // 已是同账号 + remoteControlEnabled 显式 opt-in,控制端本就能在项目目录跑 agent
  // (任意 exec),不扩大攻击面。removal-preview 只读、用于删除前警告；通用删除路径仍不放行。
  // discard-precreated 是唯一窄删除例外：常规收 sessionId + create 回包的精确 path；
  // 若手机在 create 回包前退出，则收其在 create 前已持久化、并与被控端 worktree
  // 元数据精确匹配的随机 recoveryKey。两路都重新核对 store 归属、无 DB/live
  // session、无 dirty/keep/live-ref 后才删；recoveryKey create/discard 另按 sessionId
  // 串行，且本口与 maker:create-session 共用 session 锁，专门补偿两步创建的失败窗口。
  // 老被控端无这些 channel → CHANNEL_NOT_ALLOWED → 控制端按对应能力降级。
  "worktree:detect-cwd",
  "worktree:list-branches",
  "worktree:suggest-name",
  "worktree:create",
  "worktree:discard-precreated",
  "worktree:removal-preview",
  // —— 个人 Telegram bot 跨设备上下线(准入论证见上方 DL_TELEGRAM_* 常量注释)——
  // 两条都由被控端 dispatch 拦截执行, 不是 ipcMain handler。
  DL_TELEGRAM_STATUS_CHANNEL,
  DL_TELEGRAM_SET_ONLINE_CHANNEL
];
var REMOTE_INVOKE_ALLOWLIST = /* @__PURE__ */ new Set([
  // Same-account owner controls only; guest task dispatch has its own deny-by-default gate.
  "maker:shared-task",
  // Dedicated Host-only OAuth transaction. Args/replies are never forwarded to Renderer.
  "device-link:plugin-oauth:v3",
  "device-link:remote-desktop:v1",
  ...CORE_INVOKE_CHANNELS,
  ...EXTENDED_INVOKE_CHANNELS
]);
var INVOKE_TIMEOUT_OVERRIDES_MS = {
  // Two Git preflight/apply stages each allow 30s, plus snapshot and queue overhead.
  "maker:turn-change-set:apply": 9e4,
  [FILE_PEER_CHANNEL]: 3e4,
  // Capture renderer readiness + source enumeration + offer, then reply delivery.
  "device-link:remote-desktop:v1": REMOTE_DESKTOP_INVOKE_MS,
  // 被控端 CMD_TIMEOUT_MS(30s)+ CMD_KILL_GRACE_MS(5s)+ 5s 回程余量
  "desktop-cmd:run": 4e4,
  // 被控端 worktree:create 含 git worktree add(--no-checkout)+ 白名单文件选择性
  // checkout + .claude/.sivi 拷贝;大仓库 / 慢盘上可能超默认 30s,给足执行预算 + 回程余量。
  "worktree:create": 6e4,
  // 可能先等待同 sessionId 的晚到 create 释放互斥锁，再执行 git worktree remove。
  "worktree:discard-precreated": 6e4,
  // pi 手动压缩调 LLM 生成摘要,大上下文 + 网关排队可达分钟级(core 侧
  // PI_COMPACT_TIMEOUT_MS = 10min);默认 30s 隧道超时会截断远程压缩请求,
  // 用户在控制端看到的就是「无反馈失败」。给足执行预算 + 回程余量:
  // 被控端在请求穿过 relay 后才开始跑 PI_COMPACT_TIMEOUT_MS,控制端若只给相同
  // 10min,压缩恰好到预算上限时会先 INVOKE_TIMEOUT,被误判为「设备无响应」并
  // 可能触发 peer-link 恢复(codex P2)——同 desktop-cmd:run 模式加 1min 余量。
  "maker:compact-session": 11 * 6e4,
  // Persist drain + credentials refresh + 12s model request + return delivery.
  // Shared by desktop/mobile; only this invoke gets the longer wait, no peer reset.
  "maker:predict-prompt": 45e3,
  // 被控端先等 Lead history 最多 30s，再 resume/queue Worker；默认 30s 会与服务端
  // deadline 对撞，把边沿成功误报成 DEVICE_LINK_TIMEOUT。留出派发和回程余量。
  "maker:worker:dispatch-ui-assignment": 65e3,
  // listing tier 轻量 DB 读:毫秒级查询,12s 仍等不到只能是链路问题,快速失败喂给熔断器。
  // 12s 同时覆盖被控端冷启动 DB 迁移的常见时长(那类失败是快速返回的 DbClient not ready,
  // 不吃满超时),不会误伤首拉重试。
  "local-db:sessions:list": 12e3,
  "local-db:sessions:get": 12e3,
  "local-db:sessions:get-many": 12e3
};

// packages/device-link/src/transport.ts
var MAX_TRANSPORT_CHUNK_BYTES = 128 * 1024;
var MAX_TRANSPORT_MESSAGE_BYTES = 4 * 1024 * 1024;
var MAX_TRANSPORT_REASSEMBLY_BYTES = 16 * 1024 * 1024;
var MAX_TRANSPORT_PENDING_BYTES = 16 * 1024 * 1024;
var MAX_TRANSPORT_WEBSOCKET_BUFFERED_BYTES = 8 * 1024 * 1024;
var TRANSPORT_RETRY_INTERVAL_MS = 2e3;
var TRANSPORT_MAX_RETRY_ATTEMPTS = 5;
var TRANSPORT_RETRY_PASS_BUDGET = 8;
var TRANSPORT_PENDING_PUSH_MAX_AGE_MS = 5 * 6e4;

// packages/device-link/src/client.ts
var SOCKET_DATA_HIGH_WATER_BYTES = 512 * 1024;
var SOCKET_DATA_LOW_WATER_BYTES = 128 * 1024;
var SOCKET_CONTROL_RESERVE_BYTES = 64 * 1024;
var SOCKET_SEND_CREDIT_BYTES = 64 * 1024;
var RELIABLE_ACK_BATCH_BYTES = 256 * 1024;
var RELIABLE_RETRY_BYTES_PER_INTERVAL = 16 * 1024;
var MAX_LEGACY_INBOUND_BYTES = 16 * 1024 * 1024;
var DEFAULT_TIMING = {
  reconnectBaseMs: 1e3,
  reconnectMaxMs: 3e4,
  reconnectStableResetMs: 1e4,
  pingIntervalMs: 2e4,
  // 允许弱网在一个额外周期内恢复；真正无响应仍由连续 miss + 无入站流量判定。
  pongMissLimit: 3,
  requestTimeoutMs: 3e4,
  getTokenTimeoutMs: 15e3,
  handshakeTimeoutMs: 15e3,
  transportRetryIntervalMs: TRANSPORT_RETRY_INTERVAL_MS,
  transportMaxRetryAttempts: TRANSPORT_MAX_RETRY_ATTEMPTS,
  transportRetryPassBudget: TRANSPORT_RETRY_PASS_BUDGET,
  presenceRetryIntervalMs: 500,
  stalledLinkPendingMaxAgeMs: 6e4,
  congestionBackoffBaseMs: 5e3,
  congestionBackoffMaxMs: 3e4,
  congestionStableResetMs: 15 * 6e4
};

// packages/device-link/src/attachmentOssRef.ts
var ATTACH_OSS_SCHEME = "cindy-oss-attach";
var LEGACY_ATTACH_OSS_SCHEME = "xdt-oss-attach";
var ATTACH_OSS_PREFIX = `${ATTACH_OSS_SCHEME}://m/`;
var LEGACY_ATTACH_OSS_PREFIX = `${LEGACY_ATTACH_OSS_SCHEME}://m/`;

// packages/device-link/src/contactsSyncProtocol.ts
var CONTACTS_SYNC_CHUNK_BYTES = 256 * 1024;

// packages/device-link/src/remoteClipboard.ts
var CLIPBOARD_CHUNK_CHARS = 64 * 1024;
var CLIPBOARD_MAX_CHARS = 32 * 1024 * 1024;

// packages/device-link/src/remoteDesktop.ts
var DESKTOP_KEY_CODES = [
  ..."ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((key) => `Key${key}`),
  ..."0123456789".split("").map((key) => `Digit${key}`),
  ...Array.from({ length: 12 }, (_, i) => `F${i + 1}`),
  "Enter",
  "Escape",
  "Tab",
  "Space",
  "Backspace",
  "Delete",
  "Insert",
  "Home",
  "End",
  "PageUp",
  "PageDown",
  "ArrowUp",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ShiftLeft",
  "ControlLeft",
  "AltLeft",
  "MetaLeft",
  "Minus",
  "Equal",
  "BracketLeft",
  "BracketRight",
  "Backslash",
  "Semicolon",
  "Quote",
  "Backquote",
  "Comma",
  "Period",
  "Slash"
];
var codes = new Set(DESKTOP_KEY_CODES);

// packages/device-link/src/fileAccess.ts
var FILE_INLINE_MAX_BYTES = 64 * 1024;

// packages/device-link/src/pluginOauth.ts
var PLUGIN_OAUTH_TTL_MS = 5 * 6e4;

// apps/desktop/src/shared/locale.ts
var SUPPORTED_LOCALES = ["zh-CN", "zh-TW", "en", "ja", "ko"];
var DEFAULT_LOCALE = "en";
function normalizeLocaleTag(raw) {
  const tag = raw?.trim().replace(/_/g, "-").replace(/\..*$/, "");
  if (!tag) return null;
  try {
    return new Intl.Locale(tag).toString();
  } catch {
    return null;
  }
}
function getLanguageCode(raw) {
  const tag = normalizeLocaleTag(raw);
  if (!tag) return null;
  try {
    return new Intl.Locale(tag).language.toLowerCase();
  } catch {
    return null;
  }
}
var LOCALE_BY_TAG = /* @__PURE__ */ new Map();
var UNIQUE_LOCALE_BY_LANGUAGE = /* @__PURE__ */ new Map();
var localeCountByLanguage = /* @__PURE__ */ new Map();
for (const locale of SUPPORTED_LOCALES) {
  const tag = normalizeLocaleTag(locale);
  const language = getLanguageCode(locale);
  if (tag) LOCALE_BY_TAG.set(tag.toLowerCase(), locale);
  if (language) {
    localeCountByLanguage.set(language, (localeCountByLanguage.get(language) ?? 0) + 1);
  }
}
for (const locale of SUPPORTED_LOCALES) {
  const language = getLanguageCode(locale);
  if (language && localeCountByLanguage.get(language) === 1) {
    UNIQUE_LOCALE_BY_LANGUAGE.set(language, locale);
  }
}

// apps/desktop/src/shared/ghost.ts
var GHOST_MANIFEST_FILE = "ghost.json";
var GHOST_MANIFEST_MAX_BYTES = 256 * 1024;
var GHOST_INSTALL_MANIFEST_MAX_BYTES = 256 * 1024;
var GHOST_ID_RE = /^[a-z0-9][a-z0-9-]{0,31}$/;
var LEGACY_GHOST_SLOTS = [
  "subscribe",
  "tool",
  "card",
  "panel",
  "main-view",
  "cindy",
  "agent",
  "node",
  "network",
  "notify",
  "badge",
  "confirm",
  "fs",
  "library",
  "session-context",
  "pick",
  "preview",
  "skill",
  "workspace",
  "ios-simulator"
];
var GHOST_SLOT_NAME_RE = /^[a-z][a-z0-9._:-]{0,127}$/;
var GHOST_NODE_PROTOCOLS = ["json-rpc-stdio", "mcp-stdio"];
var GHOST_NODE_LIFECYCLES = ["on-demand", "resident"];
var GHOST_NODE_MAX_SECRET_BINDINGS = 4;
var GHOST_NODE_MAX_SECRET_METHODS = 16;
var GHOST_NODE_MCP_RESERVED_METHODS = /* @__PURE__ */ new Set(["initialize", "notifications/initialized"]);
function isGhostNodeMcpReservedMethod(method) {
  return GHOST_NODE_MCP_RESERVED_METHODS.has(method);
}
var GHOST_NODE_MAX_EXTRA_ENTRIES = 4;
var GHOST_NODE_CHILD_CHUNK_MAX_B64_CHARS = 1024 * 1024;
var GHOST_LAUNCH_MODES = ["on-demand", "resident"];
var GHOST_PANEL_POSITIONS = ["left", "tab"];
var GHOST_MAIN_VIEW_ICONS = [
  "puzzle",
  "globe",
  "code",
  "folder",
  "database",
  "chart-column",
  "image",
  "message-circle",
  "calendar-days"
];
var GHOST_MODEL_IMAGE_ACTIONS = ["generate", "edit"];
var GHOST_MODEL_VIDEO_ACTIONS = ["generate", "edit"];
var GHOST_CINDY_MEDIA_ACTIONS = ["deposit"];
var GHOST_CINDY_TEXT_ACTIONS = ["oneshot"];
var GHOST_CINDY_EMBED_ACTIONS = ["text"];
var GHOST_CINDY_SEARCH_ACTIONS = ["web"];
var GHOST_SUBSCRIBE_HOOKS = ["will-user-message", "will-assistant-message"];
var GHOST_NETWORK_MAX_HOSTS = 8;
var GHOST_NETWORK_MAX_SECRETS = 4;
var GHOST_NETWORK_MAX_CONNECTION_DECLS = 2;
var GHOST_NETWORK_MAX_CONNECTIONS_PER_DECL = 8;
var GHOST_NETWORK_LABEL_RE = /^[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?$/;
function isValidGhostNetworkHostPattern(p) {
  if (typeof p !== "string" || p.length === 0 || p.length > 253) return false;
  const bare = p.startsWith("*.") ? p.slice(2) : p;
  const labels = bare.split(".");
  if (labels.length < 2) return false;
  if (labels.every((l) => /^\d+$/.test(l))) return false;
  return labels.every((l) => GHOST_NETWORK_LABEL_RE.test(l));
}
function ghostNetworkHostMatches(pattern, hostname) {
  if (pattern.startsWith("*."))
    return hostname.endsWith(pattern.slice(1)) && hostname.length > pattern.length - 1;
  return hostname === pattern;
}
var GHOST_SECRET_EXCHANGE_CONTENT_TYPES = [
  "application/json",
  "application/x-www-form-urlencoded"
];
var GHOST_SECRET_EXCHANGE_BODY_MAX_CHARS = 2048;
var GHOST_SECRET_EXCHANGE_TTL_MIN_S = 60;
var GHOST_SECRET_EXCHANGE_TTL_MAX_S2 = 30 * 24 * 3600;
var GHOST_SECRET_EXCHANGE_TOKEN_PATH_RE = /^[A-Za-z0-9_-]+(\.[A-Za-z0-9_-]+)*$/;
var GHOST_OAUTH_IDENTITY_TEMPLATE_PLACEHOLDER_RE = /\{([^{}]*)\}/g;
var GHOST_OAUTH_IDENTITY_TEMPLATE_MAX_CHARS = 200;
var GHOST_OAUTH_CLIENT_ID_ALTERNATIVES_MAX = 8;
var GHOST_OAUTH_EXTRA_PARAMS_MAX = 8;
var GHOST_OAUTH_RESERVED_AUTHORIZE_PARAMS = [
  "response_type",
  "client_id",
  "redirect_uri",
  "state",
  "scope",
  "code_challenge",
  "code_challenge_method"
];
var GHOST_OAUTH_TOKEN_BROKER_RE = /^[a-z][a-z0-9_-]{0,31}$/;
var GHOST_OAUTH_BOUNCE_PATH_RE = /^\/[A-Za-z0-9_-]+(?:\/[A-Za-z0-9_-]+)*$/;
var GHOST_SECRET_SOURCES = [
  "user",
  "login-email",
  "oauth",
  "gh-cli",
  "oidc-token"
];
var GHOST_PREVIEW_MAX_HOSTS = 4;
var GHOST_SCHEDULE_DRAFT_MIN_INTERVAL_SUGGESTION_MS = 30 * 6e4;
var GHOST_PREVIEW_LOOPBACK_HOSTS = /* @__PURE__ */ new Set([
  "localhost",
  "127.0.0.1",
  "[::1]"
]);
var GHOST_SKILL_MAX_ITEMS = 4;
var GHOST_SKILL_MD_MAX_BYTES2 = 64 * 1024;
var GHOST_SKILL_NAME_MAX_CHARS = 64;
var GHOST_SKILL_NAME_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
var GHOST_MANUAL_MAX_ITEMS = 8;
var GHOST_MANUAL_ENTRY_FILE = "MANUAL.md";
var GHOST_MANUAL_MD_MAX_BYTES2 = 64 * 1024;
var GHOST_MANUAL_DESCRIPTION_MAX_CHARS = GHOST_MANIFEST_SUMMARY_MAX_CHARS;
var GHOST_NETWORK_FORBIDDEN_INJECT_HEADERS = [
  "host",
  "content-length",
  "transfer-encoding",
  "connection",
  "cookie",
  "origin",
  "referer",
  // content-type 由请求语义决定(上传通道的 multipart boundary 依赖它),
  // 不许被凭证注入声明占用——401 重换/跨域跳转的重注入会砸掉 boundary。
  "content-type"
];
var GHOST_SETUP_MAX_GROUPS = 8;
var GHOST_SETUP_MAX_HOST_GROUPS = 2;
var GHOST_SETUP_MAX_ITEMS_PER_GROUP = 8;
var GHOST_SETUP_MAX_STEPS = (GHOST_SETUP_MAX_GROUPS + GHOST_SETUP_MAX_HOST_GROUPS) * GHOST_SETUP_MAX_ITEMS_PER_GROUP;
var GHOST_SETUP_MAX_HOST_STEPS = 8;
var GHOST_SETUP_MAX_INTERACTION_STEPS = GHOST_SETUP_MAX_STEPS + GHOST_SETUP_MAX_HOST_STEPS;
var GHOST_SETUP_KV_KEY_RE = /^[A-Za-z0-9_.-]{1,64}$/;
var GHOST_LOCALE_MAX_BYTES2 = 64 * 1024;
function ghostInstallApprovalToken(approval) {
  if (approval?.state === "approved") return `approved:${approval.revision}`;
  return approval?.state ?? "legacy-unapproved";
}
function isValidGhostId2(id) {
  return typeof id === "string" && GHOST_ID_RE.test(id);
}
var GHOST_ICON_MIME_BY_EXT = {
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".gif": "image/gif"
};
var GHOST_ICON_MAX_BYTES = 512 * 1024;
function ghostIconMimeType(p) {
  const dot = p.lastIndexOf(".");
  if (dot < 0) return null;
  return GHOST_ICON_MIME_BY_EXT[p.slice(dot).toLowerCase()] ?? null;
}
var GHOST_PATH_SEGMENT_RE = /^[a-zA-Z0-9_][a-zA-Z0-9._-]{0,63}$/;
function isSafeGhostRelativePath(p) {
  if (typeof p !== "string" || p.length === 0 || p.length > 256) return false;
  if (p.includes("\\")) return false;
  const segments = p.split("/");
  return segments.every((seg) => GHOST_PATH_SEGMENT_RE.test(seg) && seg !== "." && seg !== "..");
}
var WINDOWS_RESERVED_GHOST_PATH_SEGMENT_RE = /^(?:con|prn|aux|nul|com[1-9]|lpt[1-9])(?:\..*)?$/i;
function isPortableGhostRelativePath(p) {
  return isSafeGhostRelativePath(p) && p.split("/").every((segment) => !WINDOWS_RESERVED_GHOST_PATH_SEGMENT_RE.test(segment));
}
var GHOST_MANIFEST_RESERVED_RECORD_KEYS = /* @__PURE__ */ new Set(["__proto__", "constructor", "prototype"]);
function isGhostManifestReservedRecordKey(value) {
  return GHOST_MANIFEST_RESERVED_RECORD_KEYS.has(value);
}
function unknownDeclarationFields(raw, known) {
  return Object.fromEntries(Object.entries(raw).filter(([key]) => !known.includes(key)));
}
function isPlainObject(v) {
  return typeof v === "object" && v !== null && !Array.isArray(v);
}
var GHOST_MANIFEST_KNOWN_TOP_LEVEL_FIELDS = /* @__PURE__ */ new Set([
  "routineEvents",
  "schemaVersion",
  "id",
  "name",
  "version",
  "minCindyVersion",
  "author",
  "locales",
  "resolvedLocale",
  "description",
  "whenToUse",
  "icon",
  "kind",
  "entry",
  "launch",
  "agent",
  "node",
  "settingsHtml",
  "settingsHeight",
  "slots",
  "card",
  "tools",
  "cindy",
  "model",
  "subscribe",
  "network",
  "preview",
  "skill",
  "setup",
  "command",
  "keywords",
  "panel",
  "mainView",
  "notify",
  "badge",
  "confirm",
  "fs",
  "library",
  "sessionContext",
  "pick",
  "workspace",
  "iosSimulator"
]);
var V3_BOOLEAN_CAPABILITY_FIELDS = [
  "notify",
  "badge",
  "confirm",
  "fs",
  "library",
  "sessionContext",
  "pick",
  "workspace",
  "iosSimulator"
];
var V3_DECLARATION_TO_LEGACY_SLOT = [
  ["tools", "tool"],
  ["card", "card"],
  ["panel", "panel"],
  ["mainView", "main-view"],
  ["subscribe", "subscribe"],
  ["skill", "skill"],
  ["cindy", "cindy"],
  ["agent", "agent"],
  ["node", "node"],
  ["network", "network"],
  ["preview", "preview"]
];
var V3_BOOLEAN_TO_LEGACY_SLOT = {
  notify: "notify",
  badge: "badge",
  confirm: "confirm",
  fs: "fs",
  library: "library",
  sessionContext: "session-context",
  pick: "pick",
  workspace: "workspace",
  iosSimulator: "ios-simulator"
};
function prepareGhostManifestForValidation(value) {
  if (!isPlainObject(value)) return { ok: false, reason: "\u6E05\u5355\u4E0D\u662F\u5BF9\u8C61" };
  if (value.schemaVersion !== 2 && value.schemaVersion !== 3) {
    return {
      ok: false,
      reason: `schemaVersion \u5FC5\u987B\u662F 2 \u6216 3,\u5F97\u5230 ${JSON.stringify(value.schemaVersion)}(v1 \u58F0\u660E\u578B\u5DF2\u4E8E 2026-07-12 \u79FB\u9664)`
    };
  }
  if (value.schemaVersion === 2) {
    const sourceSlots = Array.isArray(value.slots) ? value.slots : [];
    const unsupportedLegacySlots = sourceSlots.flatMap((slot) => {
      const normalized = slot === "model" ? "cindy" : slot;
      return typeof normalized === "string" && !LEGACY_GHOST_SLOTS.includes(normalized) ? [normalized] : [];
    });
    return {
      ok: true,
      prepared: {
        raw: Array.isArray(value.slots) ? { ...value, slots: dropEmptyLegacyCapabilitySlots(value, sourceSlots) } : value,
        schemaVersion: 2,
        unsupportedLegacySlots,
        v3BaseCard: false,
        v3BaseAgent: false,
        unknownV3Fields: {}
      }
    };
  }
  if (value.slots !== void 0) {
    return { ok: false, reason: "schemaVersion 3 \u4E0D\u518D\u652F\u6301 slots\uFF1B\u8BF7\u76F4\u63A5\u58F0\u660E\u5BF9\u5E94\u80FD\u529B\u5B57\u6BB5" };
  }
  if (value.minCindyVersion === void 0) {
    return { ok: false, reason: "schemaVersion 3 \u5FC5\u987B\u58F0\u660E minCindyVersion" };
  }
  for (const field of V3_BOOLEAN_CAPABILITY_FIELDS) {
    if (value[field] !== void 0 && value[field] !== true) {
      return { ok: false, reason: `${field} \u51FA\u73B0\u65F6\u5FC5\u987B\u662F true\uFF1B\u4E0D\u9700\u8981\u65F6\u8BF7\u7701\u7565` };
    }
  }
  const syntheticSlots = [];
  for (const [field, slot] of V3_DECLARATION_TO_LEGACY_SLOT) {
    if (value[field] !== void 0) syntheticSlots.push(slot);
  }
  for (const field of V3_BOOLEAN_CAPABILITY_FIELDS) {
    if (value[field] === true) syntheticSlots.push(V3_BOOLEAN_TO_LEGACY_SLOT[field]);
  }
  const v3BaseCard = isPlainObject(value.card) && Object.keys(value.card).length === 0;
  const v3BaseAgent = isPlainObject(value.agent) && Object.keys(value.agent).length === 0;
  const raw = {
    ...value,
    slots: syntheticSlots,
    ...v3BaseCard ? { card: void 0 } : {},
    ...v3BaseAgent ? { agent: void 0 } : {}
  };
  const unknownV3Fields = Object.fromEntries(
    Object.entries(value).filter(
      ([key]) => key === "model" || !GHOST_MANIFEST_KNOWN_TOP_LEVEL_FIELDS.has(key)
    )
  );
  return {
    ok: true,
    prepared: {
      raw,
      schemaVersion: 3,
      unsupportedLegacySlots: [],
      v3BaseCard,
      v3BaseAgent,
      unknownV3Fields
    }
  };
}
function dropEmptyLegacyCapabilitySlots(value, slots) {
  return slots.filter((slot) => {
    const normalized = slot === "model" ? "cindy" : slot;
    if (normalized === "tool") return value.tools !== void 0;
    if (normalized === "panel") return value.panel !== void 0;
    if (normalized === "cindy") return value.cindy !== void 0 || value.model !== void 0;
    if (normalized === "subscribe") return value.subscribe !== void 0;
    if (normalized === "node") return value.node !== void 0;
    if (normalized === "network") return value.network !== void 0;
    if (normalized === "preview") return value.preview !== void 0;
    if (normalized === "skill") return value.skill !== void 0;
    return true;
  });
}
function ghostLocalePathFor(manifest, locale) {
  if (!manifest.locales) return null;
  const manifestLocale = GHOST_LOCALES.includes(locale ?? "") ? locale : null;
  return (manifestLocale ? manifest.locales[manifestLocale] : void 0) ?? manifest.locales.en ?? null;
}
function withGhostResolvedLocale(manifest, locale) {
  const resolvedLocale = SUPPORTED_LOCALES.includes(locale ?? "") ? locale : DEFAULT_LOCALE;
  return { ...manifest, resolvedLocale };
}
var GHOST_SCHEMA_MAP_KEYWORDS = [
  "properties",
  "patternProperties",
  "$defs",
  "definitions",
  "dependentSchemas"
];
var GHOST_SCHEMA_SINGLE_KEYWORDS = [
  "additionalProperties",
  "unevaluatedProperties",
  "propertyNames",
  "items",
  "contains",
  "not",
  "if",
  "then",
  "else"
];
var GHOST_SCHEMA_ARRAY_KEYWORDS = ["allOf", "anyOf", "oneOf", "prefixItems"];
function ghostJsonPointerChild(pointer, segment) {
  const escaped = String(segment).replace(/~/g, "~0").replace(/\//g, "~1");
  return `${pointer}/${escaped}`;
}
function collectGhostSchemaLocaleShape(schema, pointer = "", result = /* @__PURE__ */ Object.create(null)) {
  if (!isPlainObject(schema)) return result;
  const title = typeof schema.title === "string";
  const description = typeof schema.description === "string";
  if (title || description) result[pointer] = { title, description };
  for (const keyword of GHOST_SCHEMA_MAP_KEYWORDS) {
    const children = schema[keyword];
    if (!isPlainObject(children)) continue;
    for (const [key, child] of Object.entries(children)) {
      collectGhostSchemaLocaleShape(
        child,
        ghostJsonPointerChild(ghostJsonPointerChild(pointer, keyword), key),
        result
      );
    }
  }
  for (const keyword of GHOST_SCHEMA_SINGLE_KEYWORDS) {
    collectGhostSchemaLocaleShape(schema[keyword], ghostJsonPointerChild(pointer, keyword), result);
  }
  for (const keyword of GHOST_SCHEMA_ARRAY_KEYWORDS) {
    const children = schema[keyword];
    if (!Array.isArray(children)) continue;
    children.forEach((child, index) => {
      collectGhostSchemaLocaleShape(
        child,
        ghostJsonPointerChild(ghostJsonPointerChild(pointer, keyword), index),
        result
      );
    });
  }
  return result;
}
function resolveGhostSchemaLocale(schema, localized, pointer = "") {
  const result = { ...schema };
  const text = localized[pointer];
  if (text?.title !== void 0) result.title = text.title;
  if (text?.description !== void 0) result.description = text.description;
  for (const keyword of GHOST_SCHEMA_MAP_KEYWORDS) {
    const children = schema[keyword];
    if (!isPlainObject(children)) continue;
    result[keyword] = Object.fromEntries(
      Object.entries(children).map(([key, child]) => [
        key,
        isPlainObject(child) ? resolveGhostSchemaLocale(
          child,
          localized,
          ghostJsonPointerChild(ghostJsonPointerChild(pointer, keyword), key)
        ) : child
      ])
    );
  }
  for (const keyword of GHOST_SCHEMA_SINGLE_KEYWORDS) {
    const child = schema[keyword];
    if (!isPlainObject(child)) continue;
    result[keyword] = resolveGhostSchemaLocale(
      child,
      localized,
      ghostJsonPointerChild(pointer, keyword)
    );
  }
  for (const keyword of GHOST_SCHEMA_ARRAY_KEYWORDS) {
    const children = schema[keyword];
    if (!Array.isArray(children)) continue;
    result[keyword] = children.map(
      (child, index) => isPlainObject(child) ? resolveGhostSchemaLocale(
        child,
        localized,
        ghostJsonPointerChild(ghostJsonPointerChild(pointer, keyword), index)
      ) : child
    );
  }
  return result;
}
function validateGhostManifestLocaleResource(raw, manifest) {
  if (!isPlainObject(raw)) return { ok: false, reason: "locale \u6587\u4EF6\u5FC5\u987B\u662F\u5BF9\u8C61" };
  const allowedTopLevelFields = /* @__PURE__ */ new Set([
    "name",
    "description",
    "whenToUse",
    "tools",
    "panel",
    "mainView",
    "network",
    "node",
    "setup"
  ]);
  const unknownTopLevelField = Object.keys(raw).find((field) => !allowedTopLevelFields.has(field));
  if (unknownTopLevelField) {
    return { ok: false, reason: `locale \u542B\u672A\u77E5\u5B57\u6BB5 ${JSON.stringify(unknownTopLevelField)}` };
  }
  if (raw.name !== void 0 && (typeof raw.name !== "string" || raw.name.trim().length === 0 || raw.name.length > 64)) {
    return { ok: false, reason: "locale.name \u5FC5\u987B\u662F 1\u201364 \u5B57\u7B26\u7684\u975E\u7A7A\u5B57\u7B26\u4E32" };
  }
  const optionalText = (field, max) => {
    const value = raw[field];
    if (value === void 0) return void 0;
    if (manifest[field] === void 0) {
      return { error: `locale.${field} \u4E0D\u5E94\u5B58\u5728\uFF1A\u539F manifest \u672A\u58F0\u660E\u8BE5\u5B57\u6BB5` };
    }
    if (typeof value !== "string" || value.trim().length === 0 || value.length > max) {
      return { error: `locale.${field} \u5FC5\u987B\u662F 1\u2013${max} \u5B57\u7B26\u7684\u975E\u7A7A\u5B57\u7B26\u4E32` };
    }
    return value;
  };
  const description = optionalText("description", GHOST_MANIFEST_SUMMARY_MAX_CHARS);
  if (isPlainObject(description) && typeof description.error === "string") {
    return { ok: false, reason: description.error };
  }
  const whenToUse = optionalText("whenToUse", GHOST_MANIFEST_SUMMARY_MAX_CHARS);
  if (isPlainObject(whenToUse) && typeof whenToUse.error === "string") {
    return { ok: false, reason: whenToUse.error };
  }
  let tools;
  if (raw.tools !== void 0) {
    if (manifest.tools === void 0) {
      return { ok: false, reason: "locale.tools \u4E0D\u5E94\u5B58\u5728\uFF1A\u539F manifest \u672A\u58F0\u660E\u5DE5\u5177" };
    }
    if (!isPlainObject(raw.tools)) {
      return { ok: false, reason: "locale.tools \u5FC5\u987B\u6309 tool name \u63D0\u4F9B\u5BF9\u8C61" };
    }
    const expectedNames = new Set(manifest.tools.map((tool) => tool.name));
    const actualNames = Object.keys(raw.tools);
    const unknown = actualNames.find((name) => !expectedNames.has(name));
    if (unknown) return { ok: false, reason: `locale.tools \u542B\u672A\u77E5\u5DE5\u5177 ${JSON.stringify(unknown)}` };
    tools = /* @__PURE__ */ Object.create(null);
    for (const tool of manifest.tools) {
      const localized = raw.tools[tool.name];
      if (localized === void 0) continue;
      if (!isPlainObject(localized)) {
        return { ok: false, reason: `locale.tools[${JSON.stringify(tool.name)}] \u5FC5\u987B\u662F\u5BF9\u8C61` };
      }
      const unknownToolField = Object.keys(localized).find(
        (field) => field !== "description" && field !== "parameters"
      );
      if (unknownToolField) {
        return {
          ok: false,
          reason: `locale.tools[${JSON.stringify(tool.name)}] \u542B\u672A\u77E5\u5B57\u6BB5 ${JSON.stringify(unknownToolField)}`
        };
      }
      if (typeof localized.description !== "string" || localized.description.trim().length === 0 || localized.description.length > 1024) {
        return {
          ok: false,
          reason: `locale.tools[${JSON.stringify(tool.name)}].description \u5FC5\u987B\u662F 1\u20131024 \u5B57\u7B26\u7684\u975E\u7A7A\u5B57\u7B26\u4E32`
        };
      }
      const parameterShape = collectGhostSchemaLocaleShape(tool.parameters);
      const parameterPointers = Object.keys(parameterShape);
      let parameters;
      if (localized.parameters !== void 0) {
        if (parameterPointers.length === 0) {
          return {
            ok: false,
            reason: `locale.tools[${JSON.stringify(tool.name)}].parameters \u4E0D\u5E94\u5B58\u5728\uFF1A\u539F\u53C2\u6570 schema \u6CA1\u6709 title / description`
          };
        }
        if (!isPlainObject(localized.parameters)) {
          return {
            ok: false,
            reason: `locale.tools[${JSON.stringify(tool.name)}].parameters \u5FC5\u987B\u6309 JSON Pointer \u63D0\u4F9B\u53C2\u6570\u6587\u6848`
          };
        }
        const expectedPointers = new Set(parameterPointers);
        const unknownPointer = Object.keys(localized.parameters).find(
          (pointer) => !expectedPointers.has(pointer)
        );
        if (unknownPointer) {
          return {
            ok: false,
            reason: `locale.tools[${JSON.stringify(tool.name)}].parameters \u542B\u672A\u77E5\u8DEF\u5F84 ${JSON.stringify(unknownPointer)}`
          };
        }
        parameters = /* @__PURE__ */ Object.create(null);
        for (const pointer of parameterPointers) {
          const shape = parameterShape[pointer];
          const localizedText = localized.parameters[pointer];
          if (localizedText === void 0) continue;
          if (!isPlainObject(localizedText)) {
            return {
              ok: false,
              reason: `locale.tools[${JSON.stringify(tool.name)}].parameters[${JSON.stringify(pointer)}] \u5FC5\u987B\u662F\u5BF9\u8C61`
            };
          }
          const allowedFields = /* @__PURE__ */ new Set([
            ...shape.title ? ["title"] : [],
            ...shape.description ? ["description"] : []
          ]);
          const unknownField = Object.keys(localizedText).find(
            (field) => !allowedFields.has(field)
          );
          if (unknownField) {
            return {
              ok: false,
              reason: `locale.tools[${JSON.stringify(tool.name)}].parameters[${JSON.stringify(pointer)}] \u542B\u672A\u77E5\u5B57\u6BB5 ${JSON.stringify(unknownField)}`
            };
          }
          if (localizedText.title !== void 0 && (typeof localizedText.title !== "string" || localizedText.title.trim().length === 0 || localizedText.title.length > 256)) {
            return {
              ok: false,
              reason: `locale.tools[${JSON.stringify(tool.name)}].parameters[${JSON.stringify(pointer)}].title \u5FC5\u987B\u662F 1\u2013256 \u5B57\u7B26\u7684\u975E\u7A7A\u5B57\u7B26\u4E32`
            };
          }
          if (localizedText.description !== void 0 && (typeof localizedText.description !== "string" || localizedText.description.trim().length === 0 || localizedText.description.length > 1024)) {
            return {
              ok: false,
              reason: `locale.tools[${JSON.stringify(tool.name)}].parameters[${JSON.stringify(pointer)}].description \u5FC5\u987B\u662F 1\u20131024 \u5B57\u7B26\u7684\u975E\u7A7A\u5B57\u7B26\u4E32`
            };
          }
          parameters[pointer] = {
            ...typeof localizedText.title === "string" ? { title: localizedText.title } : {},
            ...typeof localizedText.description === "string" ? { description: localizedText.description } : {}
          };
        }
      }
      tools[tool.name] = {
        description: localized.description,
        ...parameters !== void 0 ? { parameters } : {}
      };
    }
  }
  let panel;
  if (raw.panel !== void 0) {
    if (manifest.panel?.title === void 0) {
      return { ok: false, reason: "locale.panel \u4E0D\u5E94\u5B58\u5728\uFF1A\u539F manifest \u672A\u58F0\u660E panel.title" };
    }
    if (!isPlainObject(raw.panel)) {
      return { ok: false, reason: "locale.panel \u5FC5\u987B\u662F\u542B title \u7684\u5BF9\u8C61" };
    }
    const unknownPanelField = Object.keys(raw.panel).find((field) => field !== "title");
    if (unknownPanelField) {
      return { ok: false, reason: `locale.panel \u542B\u672A\u77E5\u5B57\u6BB5 ${JSON.stringify(unknownPanelField)}` };
    }
    if (typeof raw.panel.title !== "string" || raw.panel.title.trim().length === 0 || raw.panel.title.length > 64) {
      return { ok: false, reason: "locale.panel.title \u5FC5\u987B\u662F 1\u201364 \u5B57\u7B26\u7684\u975E\u7A7A\u5B57\u7B26\u4E32" };
    }
    panel = { title: raw.panel.title };
  }
  let mainView;
  if (raw.mainView !== void 0) {
    if (manifest.mainView?.title === void 0) {
      return {
        ok: false,
        reason: "locale.mainView \u4E0D\u5E94\u5B58\u5728\uFF1A\u539F manifest \u672A\u58F0\u660E mainView.title"
      };
    }
    if (!isPlainObject(raw.mainView)) {
      return { ok: false, reason: "locale.mainView \u5FC5\u987B\u662F\u542B title \u7684\u5BF9\u8C61" };
    }
    const unknownMainViewField = Object.keys(raw.mainView).find((field) => field !== "title");
    if (unknownMainViewField) {
      return {
        ok: false,
        reason: `locale.mainView \u542B\u672A\u77E5\u5B57\u6BB5 ${JSON.stringify(unknownMainViewField)}`
      };
    }
    if (typeof raw.mainView.title !== "string" || raw.mainView.title.trim().length === 0 || raw.mainView.title.length > 64) {
      return {
        ok: false,
        reason: "locale.mainView.title \u5FC5\u987B\u662F 1\u201364 \u5B57\u7B26\u7684\u975E\u7A7A\u5B57\u7B26\u4E32"
      };
    }
    mainView = { title: raw.mainView.title };
  }
  const validateLocalizedLabels = (rawValue, fieldPath, declarations) => {
    if (rawValue === void 0) return { ok: true };
    if (declarations.length === 0) {
      return { ok: false, reason: `${fieldPath} \u4E0D\u5E94\u5B58\u5728\uFF1A\u539F manifest \u672A\u58F0\u660E\u5BF9\u5E94\u9879\u76EE` };
    }
    if (!isPlainObject(rawValue)) {
      return { ok: false, reason: `${fieldPath} \u5FC5\u987B\u6309\u7A33\u5B9A key \u63D0\u4F9B\u5BF9\u8C61` };
    }
    const expectedKeys = new Set(declarations.map((declaration) => declaration.key));
    const unknownKey = Object.keys(rawValue).find((key) => !expectedKeys.has(key));
    if (unknownKey) {
      return { ok: false, reason: `${fieldPath} \u542B\u672A\u77E5 key ${JSON.stringify(unknownKey)}` };
    }
    const labels = /* @__PURE__ */ Object.create(null);
    for (const declaration of declarations) {
      const localized = rawValue[declaration.key];
      if (localized === void 0) continue;
      if (!isPlainObject(localized)) {
        return { ok: false, reason: `${fieldPath}[${JSON.stringify(declaration.key)}] \u5FC5\u987B\u662F\u5BF9\u8C61` };
      }
      const allowedFields = declaration.hint !== void 0 ? /* @__PURE__ */ new Set(["label", "hint"]) : /* @__PURE__ */ new Set(["label"]);
      const unknownField = Object.keys(localized).find((field) => !allowedFields.has(field));
      if (unknownField) {
        return {
          ok: false,
          reason: `${fieldPath}[${JSON.stringify(declaration.key)}] \u542B\u672A\u77E5\u5B57\u6BB5 ${JSON.stringify(unknownField)}`
        };
      }
      if (typeof localized.label !== "string" || localized.label.trim().length === 0 || localized.label.length > 64) {
        return {
          ok: false,
          reason: `${fieldPath}[${JSON.stringify(declaration.key)}].label \u5FC5\u987B\u662F 1\u201364 \u5B57\u7B26\u7684\u975E\u7A7A\u5B57\u7B26\u4E32`
        };
      }
      if (localized.hint !== void 0 && (typeof localized.hint !== "string" || localized.hint.trim().length === 0 || localized.hint.length > 200)) {
        return {
          ok: false,
          reason: `${fieldPath}[${JSON.stringify(declaration.key)}].hint \u5FC5\u987B\u662F 1\u2013200 \u5B57\u7B26\u7684\u975E\u7A7A\u5B57\u7B26\u4E32`
        };
      }
      labels[declaration.key] = {
        label: localized.label,
        ...typeof localized.hint === "string" ? { hint: localized.hint } : {}
      };
    }
    return { ok: true, labels };
  };
  const secretDecls = manifest.network?.secrets ?? [];
  const connectionDecls = manifest.network?.connections ?? [];
  let network;
  if (raw.network !== void 0) {
    if (secretDecls.length === 0 && connectionDecls.length === 0) {
      return { ok: false, reason: "locale.network \u4E0D\u5E94\u5B58\u5728\uFF1A\u539F manifest \u672A\u58F0\u660E\u51ED\u8BC1\u6216\u8FDE\u63A5" };
    }
    if (!isPlainObject(raw.network)) {
      return { ok: false, reason: "locale.network \u5FC5\u987B\u662F\u542B secrets / connections \u7684\u5BF9\u8C61" };
    }
    const unknownNetworkField = Object.keys(raw.network).find(
      (field) => field !== "secrets" && field !== "connections"
    );
    if (unknownNetworkField) {
      return {
        ok: false,
        reason: `locale.network \u542B\u672A\u77E5\u5B57\u6BB5 ${JSON.stringify(unknownNetworkField)}`
      };
    }
    const secrets = validateLocalizedLabels(
      raw.network.secrets,
      "locale.network.secrets",
      secretDecls
    );
    if (!secrets.ok) return secrets;
    const connections = validateLocalizedLabels(
      raw.network.connections,
      "locale.network.connections",
      connectionDecls
    );
    if (!connections.ok) return connections;
    network = {
      ...secrets.labels !== void 0 ? { secrets: secrets.labels } : {},
      ...connections.labels !== void 0 ? { connections: connections.labels } : {}
    };
  }
  const nodeSecretDecls = manifest.node?.secretBindings ?? [];
  let node;
  if (raw.node !== void 0) {
    if (nodeSecretDecls.length === 0) {
      return { ok: false, reason: "locale.node \u4E0D\u5E94\u5B58\u5728\uFF1A\u539F manifest \u672A\u58F0\u660E node.secretBindings" };
    }
    if (!isPlainObject(raw.node)) {
      return { ok: false, reason: "locale.node \u5FC5\u987B\u662F\u542B secretBindings \u7684\u5BF9\u8C61" };
    }
    const unknownNodeField = Object.keys(raw.node).find((field) => field !== "secretBindings");
    if (unknownNodeField) {
      return { ok: false, reason: `locale.node \u542B\u672A\u77E5\u5B57\u6BB5 ${JSON.stringify(unknownNodeField)}` };
    }
    const secretBindings = validateLocalizedLabels(
      raw.node.secretBindings,
      "locale.node.secretBindings",
      nodeSecretDecls
    );
    if (!secretBindings.ok) return secretBindings;
    node = secretBindings.labels !== void 0 ? { secretBindings: secretBindings.labels } : {};
  }
  const setupKvDecls = /* @__PURE__ */ new Map();
  for (const group of manifest.setup?.requires ?? []) {
    for (const requirement of group.anyOf) {
      if (requirement.kind === "kv") setupKvDecls.set(requirement.key, { key: requirement.key });
    }
  }
  let setup;
  if (raw.setup !== void 0) {
    if (setupKvDecls.size === 0) {
      return { ok: false, reason: "locale.setup \u4E0D\u5E94\u5B58\u5728\uFF1A\u539F manifest \u672A\u58F0\u660E setup kv \u9879" };
    }
    if (!isPlainObject(raw.setup)) {
      return { ok: false, reason: "locale.setup \u5FC5\u987B\u662F\u542B kv \u7684\u5BF9\u8C61" };
    }
    const unknownSetupField = Object.keys(raw.setup).find((field) => field !== "kv");
    if (unknownSetupField) {
      return { ok: false, reason: `locale.setup \u542B\u672A\u77E5\u5B57\u6BB5 ${JSON.stringify(unknownSetupField)}` };
    }
    const kv = validateLocalizedLabels(raw.setup.kv, "locale.setup.kv", [...setupKvDecls.values()]);
    if (!kv.ok) return kv;
    if (kv.labels !== void 0) {
      const localizedKv = /* @__PURE__ */ Object.create(null);
      for (const [key, localized] of Object.entries(kv.labels)) {
        localizedKv[key] = { label: localized.label };
      }
      setup = { kv: localizedKv };
    } else {
      setup = {};
    }
  }
  return {
    ok: true,
    resource: {
      ...typeof raw.name === "string" ? { name: raw.name } : {},
      ...typeof description === "string" ? { description } : {},
      ...typeof whenToUse === "string" ? { whenToUse } : {},
      ...tools !== void 0 ? { tools } : {},
      ...panel !== void 0 ? { panel } : {},
      ...mainView !== void 0 ? { mainView } : {},
      ...network !== void 0 ? { network } : {},
      ...node !== void 0 ? { node } : {},
      ...setup !== void 0 ? { setup } : {}
    }
  };
}
function resolveGhostManifestLocale(manifest, resource) {
  return {
    ...manifest,
    ...resource.name !== void 0 ? { name: resource.name } : {},
    ...resource.description !== void 0 ? { description: resource.description } : {},
    ...resource.whenToUse !== void 0 ? { whenToUse: resource.whenToUse } : {},
    ...manifest.tools !== void 0 && resource.tools !== void 0 ? {
      tools: manifest.tools.map((tool) => {
        const localized = resource.tools[tool.name];
        if (localized === void 0) return tool;
        return {
          ...tool,
          description: localized.description,
          ...tool.parameters !== void 0 && localized.parameters !== void 0 ? { parameters: resolveGhostSchemaLocale(tool.parameters, localized.parameters) } : {}
        };
      })
    } : {},
    ...manifest.panel !== void 0 && resource.panel !== void 0 ? { panel: { ...manifest.panel, title: resource.panel.title } } : {},
    ...manifest.mainView !== void 0 && resource.mainView !== void 0 ? { mainView: { ...manifest.mainView, title: resource.mainView.title } } : {},
    ...manifest.network !== void 0 && resource.network !== void 0 ? {
      network: {
        ...manifest.network,
        ...manifest.network.secrets !== void 0 && resource.network.secrets !== void 0 ? {
          secrets: manifest.network.secrets.map((secret) => ({
            ...secret,
            ...resource.network.secrets[secret.key] ?? {}
          }))
        } : {},
        ...manifest.network.connections !== void 0 && resource.network.connections !== void 0 ? {
          connections: manifest.network.connections.map((connection) => ({
            ...connection,
            ...resource.network.connections[connection.key] ?? {}
          }))
        } : {}
      }
    } : {},
    ...manifest.node !== void 0 && resource.node?.secretBindings !== void 0 ? {
      node: {
        ...manifest.node,
        secretBindings: manifest.node.secretBindings?.map((binding) => ({
          ...binding,
          ...resource.node.secretBindings[binding.key] ?? {}
        }))
      }
    } : {},
    ...manifest.setup !== void 0 && resource.setup?.kv !== void 0 ? {
      setup: {
        requires: manifest.setup.requires.map((group) => ({
          anyOf: group.anyOf.map(
            (requirement) => requirement.kind === "kv" && resource.setup.kv[requirement.key] !== void 0 ? { ...requirement, label: resource.setup.kv[requirement.key].label } : requirement
          )
        }))
      }
    } : {}
  };
}
function validateGhostManifest2(value) {
  const preparation = prepareGhostManifestForValidation(value);
  if (!preparation.ok) return preparation;
  const prepared = preparation.prepared;
  const raw = prepared.raw;
  if (!isValidGhostId2(raw.id)) {
    return { ok: false, reason: "id \u5FC5\u987B\u662F 1\u201332 \u4F4D\u5C0F\u5199\u5B57\u6BCD/\u6570\u5B57/\u8FDE\u5B57\u7B26(\u4E0D\u80FD\u4EE5\u8FDE\u5B57\u7B26\u5F00\u5934)" };
  }
  if (typeof raw.name !== "string" || raw.name.trim().length === 0 || raw.name.length > 64) {
    return { ok: false, reason: "name \u5FC5\u987B\u662F 1\u201364 \u5B57\u7B26\u7684\u975E\u7A7A\u5B57\u7B26\u4E32" };
  }
  if (typeof raw.version !== "string" || raw.version.trim().length === 0 || raw.version.length > 32) {
    return { ok: false, reason: "version \u5FC5\u987B\u662F 1\u201332 \u5B57\u7B26\u7684\u975E\u7A7A\u5B57\u7B26\u4E32" };
  }
  if (raw.minCindyVersion !== void 0 && !isValidCindyVersion(raw.minCindyVersion)) {
    return { ok: false, reason: "minCindyVersion \u5FC5\u987B\u662F\u5408\u6CD5\u7684 SemVer \u5B57\u7B26\u4E32" };
  }
  if (raw.kind !== void 0 && raw.kind !== "chip") {
    return {
      ok: false,
      reason: `kind \u5FC5\u987B\u662F "chip" \u6216\u7701\u7565(\u7F3A\u7701\u5373 chip),\u5F97\u5230 ${JSON.stringify(raw.kind)}(\u610F\u8BC6\u53EA\u6709\u82AF\u7247\u4E00\u79CD\u5F62\u6001,declaration \u5DF2\u79FB\u9664)`
    };
  }
  if (raw.author !== void 0 && (typeof raw.author !== "string" || raw.author.trim().length === 0 || raw.author.length > 64)) {
    return { ok: false, reason: "author \u5FC5\u987B\u662F 1\u201364 \u5B57\u7B26\u7684\u975E\u7A7A\u5B57\u7B26\u4E32" };
  }
  const declaredFilePathFolds = [
    GHOST_MANIFEST_FILE,
    raw.entry,
    raw.icon,
    raw.settingsHtml,
    isPlainObject(raw.panel) ? raw.panel.html : void 0,
    isPlainObject(raw.mainView) ? raw.mainView.html : void 0,
    isPlainObject(raw.node) ? raw.node.entry : void 0,
    ...isPlainObject(raw.node) && Array.isArray(raw.node.entries) ? raw.node.entries : []
  ].filter((value2) => typeof value2 === "string").map((value2) => value2.toLowerCase());
  const isSameOrDescendant = (path9, ancestor) => path9 === ancestor || path9.startsWith(`${ancestor}/`);
  const pathsConflict = (left, right) => isSameOrDescendant(left, right) || isSameOrDescendant(right, left);
  let locales;
  if (raw.locales !== void 0) {
    if (!isPlainObject(raw.locales)) {
      return { ok: false, reason: "locales \u5FC5\u987B\u662F\u8BED\u8A00\u5230 locale JSON \u8DEF\u5F84\u7684\u5BF9\u8C61" };
    }
    const unknownLocale = Object.keys(raw.locales).find(
      (locale) => !GHOST_LOCALES.includes(locale)
    );
    if (unknownLocale) {
      return {
        ok: false,
        reason: `locales \u542B\u5BBF\u4E3B\u4E0D\u652F\u6301\u7684\u8BED\u8A00 ${JSON.stringify(unknownLocale)}(\u53EF\u7528:${GHOST_LOCALES.join(" / ")})`
      };
    }
    if (raw.locales.en === void 0) {
      return { ok: false, reason: "locales \u5FC5\u987B\u63D0\u4F9B en\uFF0C\u4F5C\u4E3A\u6240\u6709\u4E0D\u652F\u6301\u8BED\u8A00\u7684\u56FA\u5B9A\u56DE\u9000" };
    }
    const normalized = {};
    const seenPaths = /* @__PURE__ */ new Set();
    const manualDirFolds = (isPlainObject(raw.manual) && Array.isArray(raw.manual.items) ? raw.manual.items : []).map((item) => isPlainObject(item) ? item.dir : void 0).filter((value2) => typeof value2 === "string").map((value2) => value2.toLowerCase());
    for (const locale of GHOST_LOCALES) {
      const localePath = raw.locales[locale];
      if (localePath === void 0) continue;
      if (typeof localePath !== "string" || !isSafeGhostRelativePath(localePath) || !localePath.toLowerCase().endsWith(".json")) {
        return {
          ok: false,
          reason: `locales.${locale} \u5FC5\u987B\u662F\u5B89\u88C5\u76EE\u5F55\u5185\u4EE5 .json \u7ED3\u5C3E\u7684\u5B89\u5168\u76F8\u5BF9\u8DEF\u5F84`
        };
      }
      const normalizedLocalePath = localePath.toLowerCase();
      const conflictsWithFile = declaredFilePathFolds.includes(normalizedLocalePath);
      const conflictsWithManualDir = manualDirFolds.some(
        (dir) => pathsConflict(dir, normalizedLocalePath)
      );
      if (conflictsWithFile || conflictsWithManualDir) {
        return {
          ok: false,
          reason: `locales.${locale} \u8DEF\u5F84 ${JSON.stringify(localePath)} \u4E0E\u63D2\u4EF6\u5176\u4ED6\u58F0\u660E\u6587\u4EF6\u5927\u5C0F\u5199\u6298\u53E0\u540E\u51B2\u7A81`
        };
      }
      if (seenPaths.has(normalizedLocalePath)) {
        return { ok: false, reason: `locales \u542B\u91CD\u590D\u8DEF\u5F84 ${JSON.stringify(localePath)}` };
      }
      seenPaths.add(normalizedLocalePath);
      normalized[locale] = localePath;
    }
    locales = normalized;
  }
  if (raw.description !== void 0 && (typeof raw.description !== "string" || raw.description.trim().length === 0 || raw.description.length > GHOST_MANIFEST_SUMMARY_MAX_CHARS)) {
    return {
      ok: false,
      reason: `description \u5FC5\u987B\u662F 1\u2013${GHOST_MANIFEST_SUMMARY_MAX_CHARS} \u5B57\u7B26\u7684\u975E\u7A7A\u5B57\u7B26\u4E32`
    };
  }
  if (raw.whenToUse !== void 0 && (typeof raw.whenToUse !== "string" || raw.whenToUse.trim().length === 0 || raw.whenToUse.length > GHOST_MANIFEST_SUMMARY_MAX_CHARS)) {
    return {
      ok: false,
      reason: `whenToUse \u5FC5\u987B\u662F 1\u2013${GHOST_MANIFEST_SUMMARY_MAX_CHARS} \u5B57\u7B26\u7684\u975E\u7A7A\u5B57\u7B26\u4E32`
    };
  }
  if (raw.icon !== void 0) {
    if (!isSafeGhostRelativePath(raw.icon)) {
      return { ok: false, reason: "icon \u5FC5\u987B\u662F\u5B89\u88C5\u76EE\u5F55\u5185\u7684\u5B89\u5168\u76F8\u5BF9\u8DEF\u5F84" };
    }
    if (ghostIconMimeType(raw.icon) === null) {
      return {
        ok: false,
        reason: `icon \u6269\u5C55\u540D\u4E0D\u53D7\u652F\u6301(\u53EF\u7528:${Object.keys(GHOST_ICON_MIME_BY_EXT).join(" / ")})`
      };
    }
  }
  let panel;
  if (raw.panel !== void 0) {
    const p = raw.panel;
    if (!isPlainObject(p)) return { ok: false, reason: "panel \u5FC5\u987B\u662F\u5BF9\u8C61" };
    if (p.title !== void 0 && (typeof p.title !== "string" || p.title.length === 0 || p.title.length > 64)) {
      return { ok: false, reason: "panel.title \u5FC5\u987B\u662F 1\u201364 \u5B57\u7B26\u7684\u5B57\u7B26\u4E32" };
    }
    if (!isSafeGhostRelativePath(p.html)) {
      return { ok: false, reason: "panel.html \u5FC5\u586B,\u4E14\u5FC5\u987B\u662F\u5B89\u88C5\u76EE\u5F55\u5185\u7684\u5B89\u5168\u76F8\u5BF9\u8DEF\u5F84" };
    }
    if (p.minWidth !== void 0 && (typeof p.minWidth !== "number" || !Number.isFinite(p.minWidth) || p.minWidth < 120 || p.minWidth > 1200)) {
      return { ok: false, reason: "panel.minWidth \u5FC5\u987B\u662F 120\u20131200 \u4E4B\u95F4\u7684\u6570\u5B57" };
    }
    if (p.defaultFraction !== void 0 && (typeof p.defaultFraction !== "number" || !Number.isFinite(p.defaultFraction) || p.defaultFraction < 0.05 || p.defaultFraction > 0.8)) {
      return { ok: false, reason: "panel.defaultFraction \u5FC5\u987B\u662F 0.05\u20130.8 \u4E4B\u95F4\u7684\u6570\u5B57" };
    }
    let systemButtons;
    if (p.systemButtons !== void 0) {
      const sb = p.systemButtons;
      if (!isPlainObject(sb)) {
        return { ok: false, reason: 'panel.systemButtons \u5FC5\u987B\u662F\u5BF9\u8C61(\u5982 { "maximize": false })' };
      }
      const knownButtons = ["maximize", "detach", "minimize"];
      for (const key of Object.keys(sb)) {
        if (!knownButtons.includes(key)) {
          continue;
        }
        if (typeof sb[key] !== "boolean") {
          return { ok: false, reason: `panel.systemButtons.${key} \u5FC5\u987B\u662F\u5E03\u5C14\u503C` };
        }
      }
      const maximize = sb.maximize;
      const detach = sb.detach;
      const minimize = sb.minimize;
      systemButtons = {
        ...unknownDeclarationFields(sb, knownButtons),
        ...typeof maximize === "boolean" ? { maximize } : {},
        ...typeof detach === "boolean" ? { detach } : {},
        ...typeof minimize === "boolean" ? { minimize } : {}
      };
    }
    let position;
    if (p.position !== void 0) {
      if (p.position === "top" || p.position === "bottom") {
        return {
          ok: false,
          reason: "panel.position \u7684 top / bottom \u6682\u672A\u652F\u6301(\u6392\u671F\u4E2D),\u5F53\u524D\u53EF\u7528:left / tab"
        };
      }
      if (p.position === "right") {
        position = "left";
      } else if (!GHOST_PANEL_POSITIONS.includes(p.position)) {
        return {
          ok: false,
          reason: `panel.position \u5FC5\u987B\u662F ${GHOST_PANEL_POSITIONS.join(" / ")}(right \u5DF2\u9000\u5F79,\u65E7\u5305\u81EA\u52A8\u5E76\u5165 left)`
        };
      } else {
        position = p.position;
      }
      if (position === "tab" && (p.minWidth !== void 0 || p.defaultFraction !== void 0 || p.systemButtons !== void 0)) {
        return {
          ok: false,
          reason: "panel.minWidth / panel.defaultFraction / panel.systemButtons \u4EC5\u505C\u9760\u5F62\u6001(left)\u6709\u6548,position:'tab' \u65F6\u8BF7\u79FB\u9664"
        };
      }
    }
    panel = {
      ...unknownDeclarationFields(p, ["title", "position", "html", "minWidth", "defaultFraction", "systemButtons"]),
      ...p.title !== void 0 ? { title: p.title } : {},
      ...position !== void 0 ? { position } : {},
      html: p.html,
      ...p.minWidth !== void 0 ? { minWidth: p.minWidth } : {},
      ...p.defaultFraction !== void 0 ? { defaultFraction: p.defaultFraction } : {},
      ...systemButtons !== void 0 ? { systemButtons } : {}
    };
  }
  let mainView;
  if (raw.mainView !== void 0) {
    if (!isPlainObject(raw.mainView)) {
      return { ok: false, reason: "mainView \u5FC5\u987B\u662F\u5BF9\u8C61" };
    }
    if (raw.mainView.title !== void 0 && (typeof raw.mainView.title !== "string" || raw.mainView.title.trim().length === 0 || raw.mainView.title.length > 64)) {
      return { ok: false, reason: "mainView.title \u5FC5\u987B\u662F 1\u201364 \u5B57\u7B26\u7684\u975E\u7A7A\u5B57\u7B26\u4E32" };
    }
    if (raw.mainView.icon !== void 0 && !GHOST_MAIN_VIEW_ICONS.includes(raw.mainView.icon)) {
      return {
        ok: false,
        reason: `mainView.icon \u5FC5\u987B\u662F\u4EE5\u4E0B\u7CFB\u7EDF\u56FE\u6807\u4E4B\u4E00:${GHOST_MAIN_VIEW_ICONS.join(" / ")}`
      };
    }
    if (!isPortableGhostRelativePath(raw.mainView.html)) {
      return {
        ok: false,
        reason: "mainView.html \u5FC5\u586B\uFF0C\u4E14\u5FC5\u987B\u662F\u5B89\u88C5\u76EE\u5F55\u5185\u7684\u5B89\u5168\u76F8\u5BF9\u8DEF\u5F84"
      };
    }
    mainView = {
      ...unknownDeclarationFields(raw.mainView, ["html", "title", "icon"]),
      ...raw.mainView.title !== void 0 ? { title: raw.mainView.title } : {},
      ...raw.mainView.icon !== void 0 ? { icon: raw.mainView.icon } : {},
      html: raw.mainView.html
    };
  }
  if (!isSafeGhostRelativePath(raw.entry)) {
    return { ok: false, reason: "\u5FC5\u987B\u63D0\u4F9B entry(\u5B89\u88C5\u76EE\u5F55\u5185\u7684\u5B89\u5168\u76F8\u5BF9\u8DEF\u5F84,\u7535\u5B50\u8111\u903B\u8F91\u5165\u53E3)" };
  }
  if (raw.launch !== void 0 && !GHOST_LAUNCH_MODES.includes(raw.launch)) {
    return { ok: false, reason: `launch \u5FC5\u987B\u662F ${GHOST_LAUNCH_MODES.join(" / ")}` };
  }
  if (raw.settingsHtml !== void 0 && !isSafeGhostRelativePath(raw.settingsHtml)) {
    return { ok: false, reason: "settingsHtml \u5FC5\u987B\u662F\u5B89\u88C5\u76EE\u5F55\u5185\u7684\u5B89\u5168\u76F8\u5BF9\u8DEF\u5F84" };
  }
  if (raw.settingsHeight !== void 0) {
    if (raw.settingsHtml === void 0) {
      return {
        ok: false,
        reason: "\u58F0\u660E\u4E86 settingsHeight \u4F46\u6CA1\u6709 settingsHtml\u2014\u2014\u6CA1\u6709\u754C\u9762\u5C31\u6CA1\u6709\u9AD8\u5EA6\u53EF\u8A00"
      };
    }
    if (typeof raw.settingsHeight !== "number" || !Number.isFinite(raw.settingsHeight) || raw.settingsHeight < 160 || raw.settingsHeight > 800) {
      return { ok: false, reason: "settingsHeight \u5FC5\u987B\u662F 160\u2013800 \u4E4B\u95F4\u7684\u6570\u5B57" };
    }
  }
  if (!Array.isArray(raw.slots)) {
    return { ok: false, reason: "schemaVersion 2 \u7684 slots \u5FC5\u987B\u662F\u6570\u7EC4" };
  }
  const slots = [];
  for (const s of raw.slots) {
    const name = s === "model" ? "cindy" : s;
    if (typeof name !== "string" || !GHOST_SLOT_NAME_RE.test(name)) {
      return {
        ok: false,
        reason: `slots \u542B\u683C\u5F0F\u975E\u6CD5\u7684\u5361\u69FD\u540D\u79F0 ${JSON.stringify(s)}`
      };
    }
    if (slots.includes(name)) {
      return { ok: false, reason: `slots \u542B\u91CD\u590D\u5361\u69FD ${JSON.stringify(s)}` };
    }
    slots.push(name);
  }
  if (panel !== void 0 && !slots.includes("panel")) {
    return { ok: false, reason: '\u58F0\u660E\u4E86 panel \u4F46 slots \u672A\u5305\u542B "panel"' };
  }
  if (slots.includes("panel") && panel === void 0) {
    return { ok: false, reason: 'slots \u58F0\u660E\u4E86 "panel" \u4F46\u7F3A\u5C11 panel(\u9762\u677F\u7531\u610F\u8BC6\u81EA\u7ED8,html \u5FC5\u586B)' };
  }
  if (mainView !== void 0 && !slots.includes("main-view")) {
    return { ok: false, reason: '\u58F0\u660E\u4E86 mainView \u4F46 slots \u672A\u5305\u542B "main-view"' };
  }
  if (slots.includes("main-view") && mainView === void 0) {
    return {
      ok: false,
      reason: 'slots \u58F0\u660E\u4E86 "main-view" \u4F46\u7F3A\u5C11 mainView(html \u5FC5\u586B)'
    };
  }
  let card;
  if (raw.card !== void 0) {
    if (!isPlainObject(raw.card)) {
      return { ok: false, reason: 'card \u80FD\u529B\u8BE6\u5355\u5FC5\u987B\u662F\u5BF9\u8C61(\u5982 { "externalLinks": true })' };
    }
    if (!slots.includes("card")) {
      return { ok: false, reason: '\u58F0\u660E\u4E86 card \u80FD\u529B\u8BE6\u5355\u4F46 slots \u672A\u5305\u542B "card"' };
    }
    const cardRaw = raw.card;
    if (cardRaw.externalLinks !== void 0 && typeof cardRaw.externalLinks !== "boolean") {
      return { ok: false, reason: "card.externalLinks \u5FC5\u987B\u662F\u5E03\u5C14\u503C" };
    }
    const cardExtensions = unknownDeclarationFields(cardRaw, ["externalLinks"]);
    if (cardRaw.externalLinks === true || Object.keys(cardExtensions).length > 0) {
      card = { ...cardExtensions, ...cardRaw.externalLinks === true ? { externalLinks: true } : {} };
    }
  }
  if (slots.includes("badge") && panel === void 0) {
    return {
      ok: false,
      reason: 'slots \u58F0\u660E\u4E86 "badge" \u4F46\u7F3A\u5C11 panel\u2014\u2014\u672A\u8BFB\u70B9\u627F\u8BFA\u300C\u70B9\u5F00\u80FD\u770B\u5230\u5185\u5BB9\u300D,\u6CA1\u6709\u9762\u677F\u7684\u610F\u8BC6\u70B9\u4EAE\u4E86\u4E5F\u65E0\u5904\u53EF\u70B9'
    };
  }
  let tools;
  if (raw.tools !== void 0) {
    if (!Array.isArray(raw.tools) || raw.tools.length === 0 || raw.tools.length > 16) {
      return { ok: false, reason: "tools \u5FC5\u987B\u662F 1\u201316 \u9879\u7684\u6570\u7EC4" };
    }
    tools = [];
    const seenNames = /* @__PURE__ */ new Set();
    for (const t of raw.tools) {
      if (!isPlainObject(t)) return { ok: false, reason: "tools \u6BCF\u9879\u5FC5\u987B\u662F\u5BF9\u8C61" };
      if (typeof t.name === "string" && isGhostManifestReservedRecordKey(t.name)) {
        return {
          ok: false,
          reason: `tools[].name \u4E0D\u5141\u8BB8\u4F7F\u7528\u5BF9\u8C61\u4FDD\u7559\u952E\u540D ${JSON.stringify(t.name)}`
        };
      }
      if (typeof t.name !== "string" || !/^[a-z][a-z0-9_-]{0,63}$/.test(t.name)) {
        return {
          ok: false,
          reason: "tools[].name \u5FC5\u987B\u662F\u5C0F\u5199\u5B57\u6BCD\u5F00\u5934\u7684 1\u201364 \u4F4D\u5C0F\u5199/\u6570\u5B57/\u4E0B\u5212\u7EBF/\u8FDE\u5B57\u7B26"
        };
      }
      if (seenNames.has(t.name))
        return { ok: false, reason: `tools \u542B\u91CD\u540D\u5DE5\u5177 ${JSON.stringify(t.name)}` };
      seenNames.add(t.name);
      if (typeof t.description !== "string" || t.description.trim().length === 0 || t.description.length > 1024) {
        return { ok: false, reason: "tools[].description \u5FC5\u987B\u662F 1\u20131024 \u5B57\u7B26\u7684\u975E\u7A7A\u5B57\u7B26\u4E32" };
      }
      if (t.parameters !== void 0) {
        if (!isPlainObject(t.parameters))
          return { ok: false, reason: "tools[].parameters \u5FC5\u987B\u662F\u5BF9\u8C61(JSON Schema)" };
        try {
          if (JSON.stringify(t.parameters).length > 16384) {
            return { ok: false, reason: "tools[].parameters \u8FC7\u5927(\u4E0A\u9650 16KB)" };
          }
        } catch {
          return { ok: false, reason: "tools[].parameters \u5FC5\u987B\u53EF\u5E8F\u5217\u5316" };
        }
      }
      tools.push({
        name: t.name,
        description: t.description,
        ...t.parameters !== void 0 ? { parameters: t.parameters } : {}
      });
    }
  }
  if (tools !== void 0 && !slots.includes("tool")) {
    return { ok: false, reason: '\u58F0\u660E\u4E86 tools \u4F46 slots \u672A\u5305\u542B "tool"' };
  }
  if (slots.includes("tool") && tools === void 0) {
    return { ok: false, reason: 'slots \u58F0\u660E\u4E86 "tool" \u4F46\u7F3A\u5C11 tools(\u6CE8\u518C\u4EC0\u4E48\u5DE5\u5177\u8981\u5199\u6E05\u695A)' };
  }
  const cindyRaw = raw.cindy !== void 0 ? raw.cindy : prepared.schemaVersion === 2 ? raw.model : void 0;
  let cindy;
  if (cindyRaw !== void 0) {
    if (!isPlainObject(cindyRaw)) {
      return { ok: false, reason: 'cindy \u80FD\u529B\u8BE6\u5355\u5FC5\u987B\u662F\u5BF9\u8C61(\u5982 { "image": ["generate"] })' };
    }
    if (!slots.includes("cindy")) {
      return { ok: false, reason: '\u58F0\u660E\u4E86 cindy \u80FD\u529B\u8BE6\u5355\u4F46 slots \u672A\u5305\u542B "cindy"' };
    }
    cindy = unknownDeclarationFields(cindyRaw, ["image", "video", "media", "text", "embed", "search", "oneshotModel"]);
    const oneshotModelRaw = cindyRaw.oneshotModel;
    if (oneshotModelRaw !== void 0 && (typeof oneshotModelRaw !== "string" || oneshotModelRaw.trim().length === 0 || oneshotModelRaw.length > 128)) {
      return {
        ok: false,
        reason: 'cindy.oneshotModel \u5FC5\u987B\u662F 1\u2013128 \u5B57\u7B26\u7684\u76EE\u5F55\u6A21\u578B id(\u5982 "codex/gpt-5.5")'
      };
    }
    const actionTable = {
      image: GHOST_MODEL_IMAGE_ACTIONS,
      video: GHOST_MODEL_VIDEO_ACTIONS,
      media: GHOST_CINDY_MEDIA_ACTIONS,
      text: GHOST_CINDY_TEXT_ACTIONS,
      embed: GHOST_CINDY_EMBED_ACTIONS,
      search: GHOST_CINDY_SEARCH_ACTIONS
    };
    for (const [category, actionsRaw] of Object.entries(cindyRaw)) {
      if (category === "oneshotModel") continue;
      if (!Object.hasOwn(actionTable, category)) continue;
      if (!Array.isArray(actionsRaw) || actionsRaw.length === 0) {
        return { ok: false, reason: `cindy.${category} \u5FC5\u987B\u662F\u975E\u7A7A\u6570\u7EC4` };
      }
      const actions = [];
      for (const a of actionsRaw) {
        if (typeof a !== "string" || !GHOST_SLOT_NAME_RE.test(a)) {
          return {
            ok: false,
            reason: `cindy.${category} \u52A8\u4F5C\u5FC5\u987B\u662F\u5408\u6CD5\u7684\u80FD\u529B\u6807\u8BC6: ${JSON.stringify(a)}`
          };
        }
        if (actions.includes(a)) {
          return { ok: false, reason: `cindy.${category} \u542B\u91CD\u590D\u52A8\u4F5C ${JSON.stringify(a)}` };
        }
        actions.push(a);
      }
      if (category === "image") cindy.image = actions;
      else if (category === "video") cindy.video = actions;
      else if (category === "media") cindy.media = actions;
      else if (category === "text") cindy.text = actions;
      else if (category === "embed") cindy.embed = actions;
      else if (category === "search") cindy.search = actions;
      else
        return {
          ok: false,
          reason: `cindy \u80FD\u529B\u7C7B\u76EE ${JSON.stringify(category)} \u5C1A\u672A\u63A5\u7EBF(\u4E3B\u673A\u7F3A\u9677)`
        };
    }
    if (oneshotModelRaw !== void 0) {
      if (!cindy.text?.includes("oneshot")) {
        return {
          ok: false,
          reason: 'cindy.oneshotModel \u5FC5\u987B\u4E0E text \u542B "oneshot" \u6210\u5BF9\u58F0\u660E(\u5B83\u662F\u5FEB\u95EE\u5FEB\u7B54\u7684\u504F\u597D\u6A21\u578B)'
        };
      }
      cindy.oneshotModel = oneshotModelRaw.trim();
    }
    if (Object.keys(cindy).filter((key) => key !== "oneshotModel").length === 0) {
      return { ok: false, reason: "cindy \u80FD\u529B\u8BE6\u5355\u4E0D\u80FD\u662F\u7A7A\u5BF9\u8C61" };
    }
    if (cindy.search?.includes("web") && (!slots.includes("tool") || tools === void 0)) {
      return {
        ok: false,
        reason: 'cindy.search.web \u53EA\u5141\u8BB8\u7531\u771F\u5B9E tool-call \u89E6\u53D1\uFF0C\u5FC5\u987B\u540C\u65F6\u58F0\u660E "tool" \u69FD\u548C tools'
      };
    }
  }
  let agent;
  if (raw.agent !== void 0) {
    if (!isPlainObject(raw.agent)) {
      return { ok: false, reason: 'agent \u80FD\u529B\u8BE6\u5355\u5FC5\u987B\u662F\u5BF9\u8C61(\u5982 { "background": true })' };
    }
    if (!slots.includes("agent")) {
      return { ok: false, reason: '\u58F0\u660E\u4E86 agent \u80FD\u529B\u8BE6\u5355\u4F46 slots \u672A\u5305\u542B "agent"' };
    }
    const agentRaw = raw.agent;
    if (agentRaw.background !== void 0 && typeof agentRaw.background !== "boolean") {
      return { ok: false, reason: "agent.background \u5FC5\u987B\u662F\u5E03\u5C14\u503C" };
    }
    if (agentRaw.errand !== void 0 && typeof agentRaw.errand !== "boolean") {
      return { ok: false, reason: "agent.errand \u5FC5\u987B\u662F\u5E03\u5C14\u503C" };
    }
    if (agentRaw.schedule !== void 0 && typeof agentRaw.schedule !== "boolean") {
      return { ok: false, reason: "agent.schedule \u5FC5\u987B\u662F\u5E03\u5C14\u503C" };
    }
    if (agentRaw.background !== true && agentRaw.errand !== true && agentRaw.schedule !== true && Object.keys(unknownDeclarationFields(agentRaw, ["background", "errand", "schedule"])).length === 0) {
      return {
        ok: false,
        reason: "agent \u80FD\u529B\u8BE6\u5355\u53EA\u6709 background: true / errand: true / schedule: true \u4E09\u9879\u52A0\u6863\uFF1B\u4EC5\u9700\u7528\u6237\u70B9\u51FB\u89E6\u53D1\u65F6\u8BF7\u7701\u7565 agent \u5B57\u6BB5"
      };
    }
    agent = {
      ...unknownDeclarationFields(agentRaw, ["background", "errand", "schedule"]),
      ...agentRaw.background === true ? { background: true } : {},
      ...agentRaw.errand === true ? { errand: true } : {},
      ...agentRaw.schedule === true ? { schedule: true } : {}
    };
  }
  let node;
  if (raw.node !== void 0) {
    if (!isPlainObject(raw.node)) {
      return { ok: false, reason: "node \u80FD\u529B\u8BE6\u5355\u5FC5\u987B\u662F\u5BF9\u8C61" };
    }
    if (!slots.includes("node")) {
      return { ok: false, reason: '\u58F0\u660E\u4E86 node \u80FD\u529B\u8BE6\u5355\u4F46 slots \u672A\u5305\u542B "node"' };
    }
    const nodeRaw = raw.node;
    if (!isSafeGhostRelativePath(nodeRaw.entry)) {
      return { ok: false, reason: "node.entry \u5FC5\u987B\u662F\u5B89\u88C5\u76EE\u5F55\u5185\u7684\u5B89\u5168\u76F8\u5BF9\u8DEF\u5F84" };
    }
    if (!/\.(?:c?js)$/.test(nodeRaw.entry)) {
      return { ok: false, reason: "node.entry \u5FC5\u987B\u662F CommonJS .js / .cjs \u6587\u4EF6" };
    }
    if (nodeRaw.entry === raw.entry) {
      return { ok: false, reason: "node.entry \u4E0D\u80FD\u4E0E\u6D4F\u89C8\u5668\u6C99\u7BB1 entry \u4F7F\u7528\u540C\u4E00\u4E2A\u6587\u4EF6" };
    }
    if (typeof nodeRaw.protocol !== "string" || !GHOST_NODE_PROTOCOLS.includes(nodeRaw.protocol)) {
      return { ok: false, reason: `node.protocol \u5FC5\u987B\u662F ${GHOST_NODE_PROTOCOLS.join(" / ")}` };
    }
    if (nodeRaw.lifecycle !== void 0 && (typeof nodeRaw.lifecycle !== "string" || !GHOST_NODE_LIFECYCLES.includes(nodeRaw.lifecycle))) {
      return { ok: false, reason: `node.lifecycle \u5FC5\u987B\u662F ${GHOST_NODE_LIFECYCLES.join(" / ")}` };
    }
    if (nodeRaw.idleTimeoutSeconds !== void 0 && (typeof nodeRaw.idleTimeoutSeconds !== "number" || !Number.isInteger(nodeRaw.idleTimeoutSeconds) || nodeRaw.idleTimeoutSeconds < 30 || nodeRaw.idleTimeoutSeconds > 3600)) {
      return { ok: false, reason: "node.idleTimeoutSeconds \u5FC5\u987B\u662F 30\u20133600 \u7684\u6574\u6570" };
    }
    if (nodeRaw.lifecycle === "resident" && nodeRaw.idleTimeoutSeconds !== void 0) {
      return { ok: false, reason: "node.lifecycle \u4E3A resident \u65F6\u4E0D\u80FD\u518D\u58F0\u660E idleTimeoutSeconds" };
    }
    let nodeEntries;
    if (nodeRaw.entries !== void 0) {
      if (!Array.isArray(nodeRaw.entries) || nodeRaw.entries.length === 0) {
        return { ok: false, reason: "node.entries \u5FC5\u987B\u662F\u975E\u7A7A\u6570\u7EC4(\u989D\u5916\u5DE5\u4F5C\u8FDB\u7A0B\u5165\u53E3\u6E05\u5355)" };
      }
      if (nodeRaw.entries.length > GHOST_NODE_MAX_EXTRA_ENTRIES) {
        return { ok: false, reason: `node.entries \u6700\u591A ${GHOST_NODE_MAX_EXTRA_ENTRIES} \u6761` };
      }
      const seen = /* @__PURE__ */ new Set();
      for (const extra of nodeRaw.entries) {
        if (!isSafeGhostRelativePath(extra)) {
          return { ok: false, reason: "node.entries \u6BCF\u9879\u5FC5\u987B\u662F\u5B89\u88C5\u76EE\u5F55\u5185\u7684\u5B89\u5168\u76F8\u5BF9\u8DEF\u5F84" };
        }
        if (!/\.(?:c?js)$/.test(extra)) {
          return { ok: false, reason: "node.entries \u6BCF\u9879\u5FC5\u987B\u662F CommonJS .js / .cjs \u6587\u4EF6" };
        }
        if (extra === raw.entry) {
          return { ok: false, reason: "node.entries \u4E0D\u80FD\u5305\u542B\u6D4F\u89C8\u5668\u6C99\u7BB1 entry" };
        }
        if (extra === nodeRaw.entry) {
          return { ok: false, reason: "node.entries \u4E0D\u80FD\u91CD\u590D\u4E3B\u5165\u53E3 node.entry" };
        }
        if (seen.has(extra)) {
          return { ok: false, reason: `node.entries \u542B\u91CD\u590D\u5165\u53E3 ${JSON.stringify(extra)}` };
        }
        seen.add(extra);
      }
      nodeEntries = nodeRaw.entries;
    }
    if (nodeRaw.childSpawn !== void 0 && typeof nodeRaw.childSpawn !== "boolean") {
      return { ok: false, reason: "node.childSpawn \u5FC5\u987B\u662F\u5E03\u5C14\u503C" };
    }
    let nodeSecretBindings;
    if (nodeRaw.secretBindings !== void 0) {
      if (!Array.isArray(nodeRaw.secretBindings) || nodeRaw.secretBindings.length === 0 || nodeRaw.secretBindings.length > GHOST_NODE_MAX_SECRET_BINDINGS) {
        return {
          ok: false,
          reason: `node.secretBindings \u5FC5\u987B\u662F 1\u2013${GHOST_NODE_MAX_SECRET_BINDINGS} \u6761\u7684\u6570\u7EC4`
        };
      }
      if (raw.settingsHtml === void 0) {
        return {
          ok: false,
          reason: "node.secretBindings \u9700\u8981 settingsHtml \u6536\u96C6\u51ED\u8BC1"
        };
      }
      nodeSecretBindings = [];
      const seenSecretKeys = /* @__PURE__ */ new Set();
      for (const bindingRaw of nodeRaw.secretBindings) {
        if (!isPlainObject(bindingRaw)) {
          return { ok: false, reason: "node.secretBindings \u6BCF\u9879\u5FC5\u987B\u662F\u5BF9\u8C61" };
        }
        const binding = bindingRaw;
        if (typeof binding.key === "string" && isGhostManifestReservedRecordKey(binding.key)) {
          return {
            ok: false,
            reason: `node.secretBindings[].key \u4E0D\u5141\u8BB8\u4F7F\u7528\u5BF9\u8C61\u4FDD\u7559\u952E\u540D ${JSON.stringify(binding.key)}`
          };
        }
        if (typeof binding.key !== "string" || !/^[a-z][a-z0-9_]{0,31}$/.test(binding.key)) {
          return {
            ok: false,
            reason: "node.secretBindings[].key \u5FC5\u987B\u662F\u5C0F\u5199\u5B57\u6BCD\u5F00\u5934\u7684 1\u201332 \u4F4D\u5C0F\u5199/\u6570\u5B57/\u4E0B\u5212\u7EBF"
          };
        }
        if (seenSecretKeys.has(binding.key)) {
          return {
            ok: false,
            reason: `node.secretBindings \u542B\u91CD\u590D key ${JSON.stringify(binding.key)}`
          };
        }
        seenSecretKeys.add(binding.key);
        if (typeof binding.label !== "string" || binding.label.trim().length === 0 || binding.label.length > 64) {
          return {
            ok: false,
            reason: "node.secretBindings[].label \u5FC5\u987B\u662F 1\u201364 \u5B57\u7B26\u7684\u975E\u7A7A\u5B57\u7B26\u4E32"
          };
        }
        if (!Array.isArray(binding.methods) || binding.methods.length === 0 || binding.methods.length > GHOST_NODE_MAX_SECRET_METHODS) {
          return {
            ok: false,
            reason: `node.secretBindings[].methods \u5FC5\u987B\u662F 1\u2013${GHOST_NODE_MAX_SECRET_METHODS} \u6761\u7684\u6570\u7EC4`
          };
        }
        const methods = [];
        for (const method of binding.methods) {
          if (typeof method !== "string" || !/^[A-Za-z0-9_./:-]{1,128}$/.test(method)) {
            return {
              ok: false,
              reason: "node.secretBindings[].methods \u6BCF\u9879\u5FC5\u987B\u662F 1\u2013128 \u4F4D\u5B89\u5168\u65B9\u6CD5\u540D"
            };
          }
          if (nodeRaw.protocol === "mcp-stdio" && isGhostNodeMcpReservedMethod(method)) {
            return {
              ok: false,
              reason: `node.secretBindings[].methods \u4E0D\u80FD\u7ED1\u5B9A\u5BBF\u4E3B\u4FDD\u7559\u7684 MCP \u65B9\u6CD5 ${JSON.stringify(method)}`
            };
          }
          if (methods.includes(method)) {
            return {
              ok: false,
              reason: `node.secretBindings[].methods \u542B\u91CD\u590D\u65B9\u6CD5 ${JSON.stringify(method)}`
            };
          }
          methods.push(method);
        }
        let bindingEntry;
        if (binding.entry !== void 0) {
          if (typeof binding.entry !== "string" || binding.entry !== nodeRaw.entry && !(nodeEntries ?? []).includes(binding.entry)) {
            return {
              ok: false,
              reason: "node.secretBindings[].entry \u5FC5\u987B\u9010\u5B57\u547D\u4E2D node.entry \u6216 node.entries"
            };
          }
          bindingEntry = binding.entry;
        }
        if (binding.hint !== void 0 && (typeof binding.hint !== "string" || binding.hint.trim().length === 0 || binding.hint.length > 200)) {
          return {
            ok: false,
            reason: "node.secretBindings[].hint \u5FC5\u987B\u662F 1\u2013200 \u5B57\u7B26\u7684\u975E\u7A7A\u5B57\u7B26\u4E32"
          };
        }
        if (binding.url !== void 0) {
          if (typeof binding.url !== "string" || binding.url.length === 0 || binding.url.length > 200) {
            return {
              ok: false,
              reason: "node.secretBindings[].url \u5FC5\u987B\u662F 1\u2013200 \u5B57\u7B26\u7684\u5B57\u7B26\u4E32"
            };
          }
          let parsed;
          try {
            parsed = new URL(binding.url);
          } catch {
            return { ok: false, reason: "node.secretBindings[].url \u4E0D\u662F\u5408\u6CD5\u7684\u7EDD\u5BF9\u5730\u5740" };
          }
          if (parsed.protocol !== "https:" || parsed.username || parsed.password) {
            return {
              ok: false,
              reason: "node.secretBindings[].url \u4EC5\u652F\u6301 https \u4E14\u4E0D\u5141\u8BB8\u5185\u5D4C\u7528\u6237\u540D/\u5BC6\u7801"
            };
          }
        }
        if (binding.oauthSecret !== void 0 && (typeof binding.oauthSecret !== "string" || !/^[a-z][a-z0-9_]{0,31}$/.test(binding.oauthSecret))) {
          return { ok: false, reason: "node.secretBindings[].oauthSecret \u5FC5\u987B\u662F\u672C\u63D2\u4EF6 OAuth \u51ED\u8BC1\u952E" };
        }
        nodeSecretBindings.push({
          ...unknownDeclarationFields(binding, ["key", "label", "methods", "entry", "hint", "url", "oauthSecret"]),
          ...binding.oauthSecret !== void 0 ? { oauthSecret: binding.oauthSecret } : {},
          key: binding.key,
          label: binding.label,
          methods,
          ...bindingEntry !== void 0 ? { entry: bindingEntry } : {},
          ...binding.hint !== void 0 ? { hint: binding.hint } : {},
          ...binding.url !== void 0 ? { url: binding.url } : {}
        });
      }
    }
    node = {
      ...unknownDeclarationFields(nodeRaw, ["entry", "protocol", "lifecycle", "idleTimeoutSeconds", "entries", "childSpawn", "secretBindings"]),
      entry: nodeRaw.entry,
      protocol: nodeRaw.protocol,
      ...nodeRaw.lifecycle !== void 0 ? { lifecycle: nodeRaw.lifecycle } : {},
      ...nodeRaw.idleTimeoutSeconds !== void 0 ? { idleTimeoutSeconds: nodeRaw.idleTimeoutSeconds } : {},
      ...nodeEntries !== void 0 ? { entries: nodeEntries } : {},
      ...nodeRaw.childSpawn !== void 0 ? { childSpawn: nodeRaw.childSpawn } : {},
      ...nodeSecretBindings !== void 0 ? { secretBindings: nodeSecretBindings } : {}
    };
  }
  if (slots.includes("node") && node === void 0) {
    return { ok: false, reason: 'slots \u58F0\u660E\u4E86 "node" \u4F46\u7F3A\u5C11 node \u5DE5\u4F5C\u8FDB\u7A0B\u8BE6\u5355' };
  }
  let preview;
  if (raw.preview !== void 0) {
    if (!isPlainObject(raw.preview)) {
      return { ok: false, reason: 'preview \u8BE6\u5355\u5FC5\u987B\u662F\u5BF9\u8C61(\u5982 { "hosts": ["*.example.com"] })' };
    }
    if (!slots.includes("preview")) {
      return { ok: false, reason: '\u58F0\u660E\u4E86 preview \u8BE6\u5355\u4F46 slots \u672A\u5305\u542B "preview"' };
    }
    const previewRaw = raw.preview;
    if (!Array.isArray(previewRaw.hosts) || previewRaw.hosts.length === 0) {
      return { ok: false, reason: "preview.hosts \u5FC5\u987B\u662F\u975E\u7A7A\u6570\u7EC4(\u53EF\u6253\u5F00\u9884\u89C8\u7684\u57DF\u540D\u767D\u540D\u5355)" };
    }
    if (previewRaw.hosts.length > GHOST_PREVIEW_MAX_HOSTS) {
      return { ok: false, reason: `preview.hosts \u6700\u591A ${GHOST_PREVIEW_MAX_HOSTS} \u6761` };
    }
    const seenPreviewHosts = /* @__PURE__ */ new Set();
    for (const host of previewRaw.hosts) {
      if (!isValidGhostNetworkHostPattern(host) && !(typeof host === "string" && GHOST_PREVIEW_LOOPBACK_HOSTS.has(host))) {
        return { ok: false, reason: `preview.hosts \u542B\u4E0D\u5408\u6CD5\u57DF\u540D\u6A21\u5F0F ${JSON.stringify(host)}` };
      }
      if (seenPreviewHosts.has(host)) {
        return { ok: false, reason: `preview.hosts \u542B\u91CD\u590D\u57DF\u540D ${JSON.stringify(host)}` };
      }
      seenPreviewHosts.add(host);
    }
    preview = { ...unknownDeclarationFields(previewRaw, ["hosts"]), hosts: previewRaw.hosts };
  }
  if (slots.includes("preview") && preview === void 0) {
    return {
      ok: false,
      reason: 'slots \u58F0\u660E\u4E86 "preview" \u4F46\u7F3A\u5C11 preview \u8BE6\u5355(hosts \u57DF\u540D\u767D\u540D\u5355\u5FC5\u586B)'
    };
  }
  let skill;
  if (raw.skill !== void 0) {
    if (!isPlainObject(raw.skill)) {
      return {
        ok: false,
        reason: 'skill \u8BE6\u5355\u5FC5\u987B\u662F\u5BF9\u8C61(\u5982 { "items": [{ "dir": "skills/foo", "name": "foo", "description": "..." }] })'
      };
    }
    if (!slots.includes("skill")) {
      return { ok: false, reason: '\u58F0\u660E\u4E86 skill \u8BE6\u5355\u4F46 slots \u672A\u5305\u542B "skill"' };
    }
    const skillRaw = raw.skill;
    if (!Array.isArray(skillRaw.items) || skillRaw.items.length === 0) {
      return { ok: false, reason: "skill.items \u5FC5\u987B\u662F\u975E\u7A7A\u6570\u7EC4(\u968F\u5305\u6346\u7ED1\u7684\u6280\u80FD\u6E05\u5355)" };
    }
    if (skillRaw.items.length > GHOST_SKILL_MAX_ITEMS) {
      return { ok: false, reason: `skill.items \u6700\u591A ${GHOST_SKILL_MAX_ITEMS} \u6761` };
    }
    const skillItems = [];
    const seenSkillNames = /* @__PURE__ */ new Set();
    const seenSkillDirs = /* @__PURE__ */ new Set();
    for (const item of skillRaw.items) {
      if (!isPlainObject(item)) {
        return { ok: false, reason: "skill.items \u6BCF\u9879\u5FC5\u987B\u662F\u5BF9\u8C61({ dir, name, description })" };
      }
      const itemRaw = item;
      if (!isSafeGhostRelativePath(itemRaw.dir)) {
        return {
          ok: false,
          reason: `skill.items[].dir \u5FC5\u987B\u662F\u5305\u5185\u5B89\u5168\u76F8\u5BF9\u8DEF\u5F84(\u5982 "skills/foo"),\u5F97\u5230 ${JSON.stringify(itemRaw.dir)}`
        };
      }
      if (typeof itemRaw.name !== "string" || itemRaw.name.length > GHOST_SKILL_NAME_MAX_CHARS || !GHOST_SKILL_NAME_RE.test(itemRaw.name)) {
        return {
          ok: false,
          reason: `skill.items[].name \u5FC5\u987B\u662F\u5C0F\u5199\u5B57\u6BCD/\u6570\u5B57\u52A0\u5355\u8FDE\u5B57\u7B26\u5206\u6BB5(\u7981\u9996\u5C3E/\u8FDE\u7EED\u8FDE\u5B57\u7B26)\u3001\u957F\u5EA6 1\u2013${GHOST_SKILL_NAME_MAX_CHARS},\u5F97\u5230 ${JSON.stringify(itemRaw.name)}`
        };
      }
      if (typeof itemRaw.description !== "string" || itemRaw.description.trim().length === 0 || itemRaw.description.length > 1024) {
        return { ok: false, reason: "skill.items[].description \u5FC5\u987B\u662F 1\u20131024 \u5B57\u7B26\u7684\u975E\u7A7A\u5B57\u7B26\u4E32" };
      }
      const nameFold = itemRaw.name.toLowerCase();
      if (seenSkillNames.has(nameFold)) {
        return { ok: false, reason: `skill.items \u542B\u91CD\u590D name ${JSON.stringify(itemRaw.name)}` };
      }
      seenSkillNames.add(nameFold);
      const dirFold = itemRaw.dir.toLowerCase();
      if (seenSkillDirs.has(dirFold)) {
        return { ok: false, reason: `skill.items \u542B\u91CD\u590D dir ${JSON.stringify(itemRaw.dir)}` };
      }
      seenSkillDirs.add(dirFold);
      skillItems.push({ ...unknownDeclarationFields(itemRaw, ["dir", "name", "description"]), dir: itemRaw.dir, name: itemRaw.name, description: itemRaw.description });
    }
    skill = { ...unknownDeclarationFields(skillRaw, ["items"]), items: skillItems };
  }
  if (slots.includes("skill") && skill === void 0) {
    return { ok: false, reason: 'slots \u58F0\u660E\u4E86 "skill" \u4F46\u7F3A\u5C11 skill \u8BE6\u5355(items \u6280\u80FD\u6E05\u5355\u5FC5\u586B)' };
  }
  let manual;
  if (raw.manual !== void 0) {
    if (!isPlainObject(raw.manual)) {
      return {
        ok: false,
        reason: 'manual \u5FC5\u987B\u662F\u5BF9\u8C61(\u5982 { "items": [{ "dir": "manual/getting-started", "name": "getting-started", "description": "..." }] })'
      };
    }
    const manualRaw = raw.manual;
    if (!Array.isArray(manualRaw.items) || manualRaw.items.length === 0) {
      return { ok: false, reason: "manual.items \u5FC5\u987B\u662F\u975E\u7A7A\u6570\u7EC4(\u968F\u5305\u624B\u518C\u7D22\u5F15)" };
    }
    if (manualRaw.items.length > GHOST_MANUAL_MAX_ITEMS) {
      return { ok: false, reason: `manual.items \u6700\u591A ${GHOST_MANUAL_MAX_ITEMS} \u6761` };
    }
    const manualItems = [];
    const seenManualNames = /* @__PURE__ */ new Set();
    const seenManualDirs = /* @__PURE__ */ new Set();
    for (const item of manualRaw.items) {
      if (!isPlainObject(item)) {
        return { ok: false, reason: "manual.items \u6BCF\u9879\u5FC5\u987B\u662F\u5BF9\u8C61({ dir, name, description })" };
      }
      const itemRaw = item;
      if (!isSafeGhostRelativePath(itemRaw.dir)) {
        return {
          ok: false,
          reason: `manual.items[].dir \u5FC5\u987B\u662F\u5305\u5185\u5B89\u5168\u76F8\u5BF9\u8DEF\u5F84(\u5982 "manual/getting-started"),\u5F97\u5230 ${JSON.stringify(itemRaw.dir)}`
        };
      }
      const dirFold = itemRaw.dir.toLowerCase();
      if (declaredFilePathFolds.some((path9) => pathsConflict(dirFold, path9))) {
        return {
          ok: false,
          reason: `manual.items[].dir ${JSON.stringify(itemRaw.dir)} \u4E0E\u63D2\u4EF6\u58F0\u660E\u6587\u4EF6\u8DEF\u5F84\u5927\u5C0F\u5199\u6298\u53E0\u540E\u51B2\u7A81`
        };
      }
      if (typeof itemRaw.name !== "string" || itemRaw.name.length > GHOST_SKILL_NAME_MAX_CHARS || !GHOST_SKILL_NAME_RE.test(itemRaw.name)) {
        return {
          ok: false,
          reason: `manual.items[].name \u5FC5\u987B\u662F\u5C0F\u5199\u5B57\u6BCD/\u6570\u5B57\u52A0\u5355\u8FDE\u5B57\u7B26\u5206\u6BB5(\u7981\u9996\u5C3E/\u8FDE\u7EED\u8FDE\u5B57\u7B26)\u3001\u957F\u5EA6 1\u2013${GHOST_SKILL_NAME_MAX_CHARS},\u5F97\u5230 ${JSON.stringify(itemRaw.name)}`
        };
      }
      if (typeof itemRaw.description !== "string" || itemRaw.description.trim().length === 0 || itemRaw.description.length > GHOST_MANUAL_DESCRIPTION_MAX_CHARS) {
        return {
          ok: false,
          reason: `manual.items[].description \u5FC5\u987B\u662F 1\u2013${GHOST_MANUAL_DESCRIPTION_MAX_CHARS} \u5B57\u7B26\u7684\u975E\u7A7A\u5B57\u7B26\u4E32`
        };
      }
      const nameFold = itemRaw.name.toLowerCase();
      if (seenManualNames.has(nameFold)) {
        return { ok: false, reason: `manual.items \u542B\u91CD\u590D name ${JSON.stringify(itemRaw.name)}` };
      }
      seenManualNames.add(nameFold);
      if (seenManualDirs.has(dirFold)) {
        return { ok: false, reason: `manual.items \u542B\u91CD\u590D dir ${JSON.stringify(itemRaw.dir)}` };
      }
      seenManualDirs.add(dirFold);
      manualItems.push({
        ...unknownDeclarationFields(itemRaw, ["dir", "name", "description"]),
        dir: itemRaw.dir,
        name: itemRaw.name,
        description: itemRaw.description
      });
    }
    manual = { ...unknownDeclarationFields(manualRaw, ["items"]), items: manualItems };
  }
  if (raw.routineEvents !== void 0 && prepared.schemaVersion !== 3) {
    return { ok: false, reason: "routineEvents requires schemaVersion 3" };
  }
  const routineEvents = raw.routineEvents === void 0 ? void 0 : parseGhostRoutineEvents(raw.routineEvents);
  if (routineEvents === null) return { ok: false, reason: "Invalid routineEvents declaration" };
  let subscribe;
  if (raw.subscribe !== void 0) {
    if (!isPlainObject(raw.subscribe)) {
      return { ok: false, reason: 'subscribe \u8BA2\u9605\u8BE6\u5355\u5FC5\u987B\u662F\u5BF9\u8C61(\u5982 { "topics": ["turn"] })' };
    }
    if (!slots.includes("subscribe")) {
      return { ok: false, reason: '\u58F0\u660E\u4E86 subscribe \u8BA2\u9605\u8BE6\u5355\u4F46 slots \u672A\u5305\u542B "subscribe"' };
    }
    const subRaw = raw.subscribe;
    subscribe = unknownDeclarationFields(subRaw, ["topics", "hooks"]);
    for (const field of ["topics", "hooks"]) {
      const listRaw = subRaw[field];
      if (listRaw === void 0) continue;
      if (!Array.isArray(listRaw) || listRaw.length === 0) {
        return { ok: false, reason: `subscribe.${field} \u5FC5\u987B\u662F\u975E\u7A7A\u6570\u7EC4` };
      }
      const list = [];
      for (const item of listRaw) {
        if (typeof item !== "string" || !GHOST_SLOT_NAME_RE.test(item)) {
          return {
            ok: false,
            reason: `subscribe.${field} \u5FC5\u987B\u5305\u542B\u5408\u6CD5\u7684\u4E8B\u4EF6\u6807\u8BC6: ${JSON.stringify(item)}`
          };
        }
        if (list.includes(item)) {
          return { ok: false, reason: `subscribe.${field} \u542B\u91CD\u590D\u9879 ${JSON.stringify(item)}` };
        }
        list.push(item);
      }
      if (field === "topics") subscribe.topics = list;
      else subscribe.hooks = list;
    }
    if (Object.keys(subscribe).length === 0) {
      return { ok: false, reason: "subscribe \u8BA2\u9605\u8BE6\u5355\u4E0D\u80FD\u662F\u7A7A\u5BF9\u8C61" };
    }
    if (subscribe.hooks?.some((hook) => GHOST_SUBSCRIBE_HOOKS.includes(hook)) && raw.launch !== "resident") {
      return {
        ok: false,
        reason: '\u58F0\u660E\u4E86 subscribe.hooks(\u62E6\u622A\u94A9\u5B50)\u5FC5\u987B\u540C\u65F6\u58F0\u660E launch: "resident"\u2014\u2014\u62E6\u622A\u8981\u6C42\u5E38\u9A7B\u5728\u573A,\u5426\u5219\u6BCF\u6761\u6D88\u606F\u90FD\u8981\u7B49\u51B7\u542F\u52A8'
      };
    }
  }
  let network;
  if (raw.network !== void 0) {
    if (!isPlainObject(raw.network)) {
      return { ok: false, reason: 'network \u8BE6\u5355\u5FC5\u987B\u662F\u5BF9\u8C61(\u5982 { "hosts": ["api.example.com"] })' };
    }
    if (!slots.includes("network")) {
      return { ok: false, reason: '\u58F0\u660E\u4E86 network \u8BE6\u5355\u4F46 slots \u672A\u5305\u542B "network"' };
    }
    const n = raw.network;
    const hasConnectionDecls = Array.isArray(n.connections) && n.connections.length > 0;
    if (n.hosts === void 0 && !hasConnectionDecls) {
      return {
        ok: false,
        reason: `network.hosts \u5FC5\u987B\u662F 1\u2013${GHOST_NETWORK_MAX_HOSTS} \u6761\u7684\u6570\u7EC4(\u4EC5\u58F0\u660E\u4E86 network.connections \u65F6\u624D\u53EF\u7F3A\u7701)`
      };
    }
    if (n.hosts !== void 0 && (!Array.isArray(n.hosts) || n.hosts.length > GHOST_NETWORK_MAX_HOSTS)) {
      return { ok: false, reason: `network.hosts \u5FC5\u987B\u662F 1\u2013${GHOST_NETWORK_MAX_HOSTS} \u6761\u7684\u6570\u7EC4` };
    }
    if (Array.isArray(n.hosts) && n.hosts.length === 0 && !hasConnectionDecls) {
      return {
        ok: false,
        reason: `network.hosts \u5FC5\u987B\u662F 1\u2013${GHOST_NETWORK_MAX_HOSTS} \u6761\u7684\u6570\u7EC4(\u4EC5\u58F0\u660E\u4E86 network.connections \u65F6\u624D\u5141\u8BB8\u4E3A\u7A7A)`
      };
    }
    const hosts = [];
    for (const h of Array.isArray(n.hosts) ? n.hosts : []) {
      if (typeof h !== "string" || !isValidGhostNetworkHostPattern(h.trim().toLowerCase())) {
        return {
          ok: false,
          reason: `network.hosts \u542B\u975E\u6CD5\u6761\u76EE ${JSON.stringify(h)}(\u5C0F\u5199\u57DF\u540D\u3001\u81F3\u5C11\u4E24\u6BB5\u3001\u901A\u914D\u53EA\u5141\u8BB8\u6700\u5DE6 "*.";\u4E0D\u6536 IP / \u7AEF\u53E3 / \u8DEF\u5F84 / \u534F\u8BAE)`
        };
      }
      const host = h.trim().toLowerCase();
      if (hosts.includes(host)) {
        return { ok: false, reason: `network.hosts \u542B\u91CD\u590D\u6761\u76EE ${JSON.stringify(h)}` };
      }
      hosts.push(host);
    }
    let secrets;
    if (n.secrets !== void 0) {
      if (!Array.isArray(n.secrets) || n.secrets.length === 0 || n.secrets.length > GHOST_NETWORK_MAX_SECRETS) {
        return {
          ok: false,
          reason: `network.secrets \u5FC5\u987B\u662F 1\u2013${GHOST_NETWORK_MAX_SECRETS} \u6761\u7684\u6570\u7EC4`
        };
      }
      secrets = [];
      const seenKeys = /* @__PURE__ */ new Set();
      for (const s of n.secrets) {
        if (!isPlainObject(s)) return { ok: false, reason: "network.secrets \u6BCF\u9879\u5FC5\u987B\u662F\u5BF9\u8C61" };
        if (typeof s.key === "string" && isGhostManifestReservedRecordKey(s.key)) {
          return {
            ok: false,
            reason: `network.secrets[].key \u4E0D\u5141\u8BB8\u4F7F\u7528\u5BF9\u8C61\u4FDD\u7559\u952E\u540D ${JSON.stringify(s.key)}`
          };
        }
        if (typeof s.key !== "string" || !/^[a-z][a-z0-9_]{0,31}$/.test(s.key)) {
          return {
            ok: false,
            reason: "network.secrets[].key \u5FC5\u987B\u662F\u5C0F\u5199\u5B57\u6BCD\u5F00\u5934\u7684 1\u201332 \u4F4D\u5C0F\u5199/\u6570\u5B57/\u4E0B\u5212\u7EBF"
          };
        }
        if (seenKeys.has(s.key)) {
          return { ok: false, reason: `network.secrets \u542B\u91CD\u590D key ${JSON.stringify(s.key)}` };
        }
        if (node?.secretBindings?.some((binding) => binding.key === s.key)) {
          return {
            ok: false,
            reason: `network.secrets \u7684 key ${JSON.stringify(s.key)} \u4E0E node.secretBindings \u649E\u540D`
          };
        }
        seenKeys.add(s.key);
        if (typeof s.label !== "string" || s.label.trim().length === 0 || s.label.length > 64) {
          return { ok: false, reason: "network.secrets[].label \u5FC5\u987B\u662F 1\u201364 \u5B57\u7B26\u7684\u975E\u7A7A\u5B57\u7B26\u4E32" };
        }
        let source;
        if (s.source !== void 0) {
          if (typeof s.source !== "string" || !GHOST_SECRET_SOURCES.includes(s.source)) {
            return {
              ok: false,
              reason: `network.secrets[].source \u4EC5\u652F\u6301 ${GHOST_SECRET_SOURCES.join(" / ")}(\u7F3A\u7701 user)`
            };
          }
          if (s.source === "login-email") source = "login-email";
          if (s.source === "oauth") source = "oauth";
          if (s.source === "gh-cli") source = "gh-cli";
          if (s.source === "oidc-token") source = "oidc-token";
        }
        if (s.input !== void 0 && s.input !== "ghost") {
          return {
            ok: false,
            reason: 'network.secrets[].input \u5DF2\u9000\u5F79:Setup \u8868\u5355\u76F4\u63A5\u4ECE Secret \u58F0\u660E\u751F\u6210,\u8BE6\u60C5\u9875\u7531 settingsHtml \u7BA1\u7406(\u5220\u6389 input \u5B57\u6BB5\u5373\u53EF;\u552F\u4E00\u53EF\u63A5\u53D7\u7684\u9057\u7559\u503C\u662F "ghost")'
          };
        }
        const hostDerived = source === "login-email" || source === "oidc-token";
        if (s.input === "ghost" && hostDerived) {
          return {
            ok: false,
            reason: `source: ${source} \u7684\u51ED\u8BC1\u4E0D\u5141\u8BB8\u6807\u6CE8 input: ghost(\u6D3E\u751F\u51ED\u8BC1\u6CA1\u6709\u8F93\u5165,\u8C08\u4E0D\u4E0A\u8C01\u6536\u5355)`
          };
        }
        if (!hostDerived && raw.settingsHtml === void 0) {
          return {
            ok: false,
            reason: "network.secrets \u58F0\u660E\u4E86\u7528\u6237\u586B\u5199\u7684\u51ED\u8BC1\u65F6\u5FC5\u987B\u540C\u65F6\u58F0\u660E settingsHtml(\u8C03\u7528\u524D\u53EF\u7531 Host Setup \u5361\u6536\u5355,settingsHtml \u4ECD\u662F\u957F\u671F\u7BA1\u7406/\u66FF\u6362/\u6E05\u9664\u5165\u53E3)"
          };
        }
        if (hostDerived && s.url !== void 0) {
          return {
            ok: false,
            reason: `network.secrets[].source \u4E3A ${source} \u65F6\u4E0D\u5141\u8BB8\u58F0\u660E url(\u503C\u53D6\u81EA\u4E3B\u673A\u767B\u5F55\u6001,\u6CA1\u6709"\u524D\u5F80\u63A7\u5236\u53F0"\u53EF\u53BB)`
          };
        }
        if (hostDerived && s.exchange !== void 0) {
          return {
            ok: false,
            reason: `network.secrets[].source \u4E3A ${source} \u65F6\u4E0D\u5141\u8BB8\u58F0\u660E exchange(\u767B\u5F55\u6001\u51ED\u8BC1\u4E0D\u5916\u9001\u4EA4\u6362\u7AEF\u70B9)`
          };
        }
        if (source === "gh-cli" && s.exchange !== void 0) {
          return {
            ok: false,
            reason: "network.secrets[].source \u4E3A gh-cli \u65F6\u4E0D\u5141\u8BB8\u58F0\u660E exchange(GitHub token \u53EA\u80FD\u76F4\u63A5\u6CE8\u5165 GitHub API)"
          };
        }
        if (s.hint !== void 0 && (typeof s.hint !== "string" || s.hint.trim().length === 0 || s.hint.length > 200)) {
          return { ok: false, reason: "network.secrets[].hint \u5FC5\u987B\u662F 1\u2013200 \u5B57\u7B26\u7684\u975E\u7A7A\u5B57\u7B26\u4E32" };
        }
        if (s.url !== void 0) {
          if (typeof s.url !== "string" || s.url.length === 0 || s.url.length > 200) {
            return { ok: false, reason: "network.secrets[].url \u5FC5\u987B\u662F 1\u2013200 \u5B57\u7B26\u7684\u5B57\u7B26\u4E32" };
          }
          let parsed;
          try {
            parsed = new URL(s.url);
          } catch {
            return { ok: false, reason: "network.secrets[].url \u4E0D\u662F\u5408\u6CD5\u7684\u7EDD\u5BF9\u5730\u5740" };
          }
          if (parsed.protocol !== "https:" || parsed.username || parsed.password) {
            return {
              ok: false,
              reason: "network.secrets[].url \u4EC5\u652F\u6301 https \u4E14\u4E0D\u5141\u8BB8\u5185\u5D4C\u7528\u6237\u540D/\u5BC6\u7801"
            };
          }
        }
        if (!isPlainObject(s.inject)) {
          return {
            ok: false,
            reason: `network.secrets[${JSON.stringify(s.key)}].inject \u5FC5\u586B(\u51ED\u8BC1\u8981\u58F0\u660E\u6CE8\u5165\u5230\u54EA\u4E2A\u8BF7\u6C42\u5934)`
          };
        }
        const inj = s.inject;
        if (typeof inj.header !== "string" || !/^[A-Za-z0-9-]{1,64}$/.test(inj.header)) {
          return {
            ok: false,
            reason: "network.secrets[].inject.header \u5FC5\u987B\u662F 1\u201364 \u4F4D\u5B57\u6BCD/\u6570\u5B57/\u8FDE\u5B57\u7B26\u7684\u5934\u540D"
          };
        }
        if (GHOST_NETWORK_FORBIDDEN_INJECT_HEADERS.includes(inj.header.toLowerCase())) {
          return {
            ok: false,
            reason: `network.secrets[].inject.header \u4E0D\u5141\u8BB8\u4F7F\u7528\u534F\u8BAE\u5173\u952E\u5934 ${JSON.stringify(inj.header)}`
          };
        }
        if (typeof inj.format !== "string" || inj.format.length === 0 || inj.format.length > 200 || inj.format.split("{value}").length !== 2) {
          return {
            ok: false,
            reason: 'network.secrets[].inject.format \u5FC5\u987B\u662F \u2264200 \u5B57\u7B26\u4E14\u6070\u542B\u4E00\u4E2A {value} \u5360\u4F4D\u7684\u5B57\u7B26\u4E32(\u5982 "Bearer {value}")'
          };
        }
        let injectHosts;
        if (inj.hosts !== void 0) {
          if (!Array.isArray(inj.hosts) || inj.hosts.length === 0) {
            return {
              ok: false,
              reason: "network.secrets[].inject.hosts \u5FC5\u987B\u662F\u975E\u7A7A\u6570\u7EC4(\u6216\u7701\u7565 = \u5168\u90E8\u767D\u540D\u5355\u57DF\u540D)"
            };
          }
          injectHosts = [];
          for (const ih of inj.hosts) {
            if (typeof ih !== "string" || !hosts.includes(ih.trim().toLowerCase())) {
              return {
                ok: false,
                reason: `network.secrets[].inject.hosts \u542B ${JSON.stringify(ih)}\u2014\u2014\u5FC5\u987B\u9010\u5B57\u53D6\u81EA network.hosts \u58F0\u660E\u6761\u76EE`
              };
            }
            const ihNorm = ih.trim().toLowerCase();
            if (injectHosts.includes(ihNorm)) {
              return {
                ok: false,
                reason: `network.secrets[].inject.hosts \u542B\u91CD\u590D\u6761\u76EE ${JSON.stringify(ih)}`
              };
            }
            injectHosts.push(ihNorm);
          }
        }
        if (source === "oidc-token") {
          if (inj.header !== "Authorization" || inj.format !== "Bearer {value}") {
            return {
              ok: false,
              reason: "network.secrets[].source \u4E3A oidc-token \u65F6 inject \u5FC5\u987B\u662F Authorization: Bearer {value}"
            };
          }
          if (injectHosts === void 0) {
            return {
              ok: false,
              reason: "network.secrets[].source \u4E3A oidc-token \u65F6\u5FC5\u987B\u663E\u5F0F\u58F0\u660E\u975E\u7A7A inject.hosts\uFF0C\u9650\u5236\u4F01\u4E1A\u8EAB\u4EFD\u4EE4\u724C\u7684\u6D41\u5411"
            };
          }
          if (injectHosts.some((host) => host.startsWith("*."))) {
            return {
              ok: false,
              reason: "network.secrets[].source \u4E3A oidc-token \u65F6 inject.hosts \u53EA\u5141\u8BB8\u7CBE\u786E\u57DF\u540D\uFF0C\u4E0D\u5141\u8BB8\u901A\u914D"
            };
          }
        }
        if (source === "gh-cli") {
          if (raw.id !== "cindy-github") {
            return {
              ok: false,
              reason: "network.secrets[].source \u4E3A gh-cli \u65F6\u4EC5\u5141\u8BB8\u5B98\u65B9 cindy-github \u63D2\u4EF6\u4F7F\u7528"
            };
          }
          if (inj.header !== "Authorization" || inj.format !== "Bearer {value}" || injectHosts?.length !== 1 || injectHosts[0] !== "api.github.com") {
            return {
              ok: false,
              reason: "network.secrets[].source \u4E3A gh-cli \u65F6 inject \u5FC5\u987B\u56FA\u5B9A\u4E3A api.github.com \u7684 Authorization: Bearer {value}"
            };
          }
        }
        let oauth;
        if (source === "oauth" && s.oauth === void 0) {
          return {
            ok: false,
            reason: `network.secrets[${JSON.stringify(s.key)}].oauth \u5FC5\u586B(source: oauth \u7684\u51ED\u8BC1\u8981\u58F0\u660E\u53BB\u54EA\u6388\u6743)`
          };
        }
        if (source !== "oauth" && s.oauth !== void 0) {
          return {
            ok: false,
            reason: "network.secrets[].oauth \u4EC5\u5141\u8BB8\u5728 source: oauth \u7684\u51ED\u8BC1\u4E0A\u58F0\u660E"
          };
        }
        if (source === "oauth" && s.exchange !== void 0) {
          return {
            ok: false,
            reason: "network.secrets[].source \u4E3A oauth \u65F6\u4E0D\u5141\u8BB8\u58F0\u660E exchange(access token \u76F4\u63A5\u6CE8\u5165,\u65E0\u4E8C\u6BB5\u4EA4\u6362)"
          };
        }
        if (s.oauth !== void 0) {
          if (!isPlainObject(s.oauth)) {
            return {
              ok: false,
              reason: `network.secrets[${JSON.stringify(s.key)}].oauth \u5FC5\u987B\u662F\u5BF9\u8C61`
            };
          }
          const oa = s.oauth;
          const parseHostBoundUrl = (raw2, field) => {
            if (typeof raw2 !== "string" || raw2.length === 0 || raw2.length > 2048) {
              return {
                ok: false,
                reason: `network.secrets[].oauth.${field} \u5FC5\u987B\u662F 1\u20132048 \u5B57\u7B26\u7684\u5B57\u7B26\u4E32`
              };
            }
            let parsed2;
            try {
              parsed2 = new URL(raw2);
            } catch {
              return { ok: false, reason: `network.secrets[].oauth.${field} \u4E0D\u662F\u5408\u6CD5\u7684\u7EDD\u5BF9\u5730\u5740` };
            }
            if (parsed2.protocol !== "https:" || parsed2.port !== "" || parsed2.username || parsed2.password) {
              return {
                ok: false,
                reason: `network.secrets[].oauth.${field} \u4EC5\u652F\u6301 https \u9ED8\u8BA4\u7AEF\u53E3\u4E14\u4E0D\u5141\u8BB8\u5185\u5D4C\u7528\u6237\u540D/\u5BC6\u7801`
              };
            }
            if (!hosts.some((pattern) => ghostNetworkHostMatches(pattern, parsed2.hostname))) {
              return {
                ok: false,
                reason: `network.secrets[].oauth.${field} \u7684\u57DF\u540D ${JSON.stringify(parsed2.hostname)} \u5FC5\u987B\u547D\u4E2D network.hosts \u767D\u540D\u5355`
              };
            }
            return { ok: true, url: raw2 };
          };
          const authorizeParsed = parseHostBoundUrl(oa.authorizeUrl, "authorizeUrl");
          if (!authorizeParsed.ok) return authorizeParsed;
          const tokenParsed = parseHostBoundUrl(oa.tokenUrl, "tokenUrl");
          if (!tokenParsed.ok) return tokenParsed;
          if (oa.clientId !== void 0) {
            if (typeof oa.clientId !== "string" || oa.clientId.trim().length === 0 || oa.clientId.length > 200 || /\s/.test(oa.clientId)) {
              return {
                ok: false,
                reason: "network.secrets[].oauth.clientId \u5FC5\u987B\u662F 1\u2013200 \u5B57\u7B26\u3001\u4E0D\u542B\u7A7A\u767D\u7684\u5B57\u7B26\u4E32"
              };
            }
          }
          let oaClientIdAlternatives;
          if (oa.clientIdAlternatives !== void 0) {
            if (oa.clientId === void 0) {
              return {
                ok: false,
                reason: "network.secrets[].oauth.clientIdAlternatives \u5FC5\u987B\u4E0E\u9ED8\u8BA4 clientId \u4E00\u8D77\u58F0\u660E"
              };
            }
            if (!Array.isArray(oa.clientIdAlternatives) || oa.clientIdAlternatives.length === 0 || oa.clientIdAlternatives.length > GHOST_OAUTH_CLIENT_ID_ALTERNATIVES_MAX) {
              return {
                ok: false,
                reason: `network.secrets[].oauth.clientIdAlternatives \u5FC5\u987B\u662F 1\u2013${GHOST_OAUTH_CLIENT_ID_ALTERNATIVES_MAX} \u6761\u7684\u6570\u7EC4`
              };
            }
            oaClientIdAlternatives = [];
            for (const clientId of oa.clientIdAlternatives) {
              if (typeof clientId !== "string" || clientId.trim().length === 0 || clientId.length > 200 || /\s/.test(clientId)) {
                return {
                  ok: false,
                  reason: "network.secrets[].oauth.clientIdAlternatives \u542B\u975E\u6CD5\u6761\u76EE(\u987B\u4E3A 1\u2013200 \u5B57\u7B26\u3001\u4E0D\u542B\u7A7A\u767D\u7684\u5B57\u7B26\u4E32)"
                };
              }
              if (clientId === oa.clientId || oaClientIdAlternatives.includes(clientId)) {
                return {
                  ok: false,
                  reason: `network.secrets[].oauth.clientIdAlternatives \u542B\u91CD\u590D\u6761\u76EE ${JSON.stringify(clientId)}`
                };
              }
              oaClientIdAlternatives.push(clientId);
            }
          }
          if (oa.clientSecret !== void 0) {
            if (oa.clientId === void 0) {
              return {
                ok: false,
                reason: "network.secrets[].oauth.clientSecret \u5FC5\u987B\u4E0E clientId \u6210\u5BF9\u58F0\u660E"
              };
            }
            if (typeof oa.clientSecret !== "string" || oa.clientSecret.trim().length === 0 || oa.clientSecret.length > 200 || /\s/.test(oa.clientSecret)) {
              return {
                ok: false,
                reason: "network.secrets[].oauth.clientSecret \u5FC5\u987B\u662F 1\u2013200 \u5B57\u7B26\u3001\u4E0D\u542B\u7A7A\u767D\u7684\u5B57\u7B26\u4E32"
              };
            }
          }
          let oaScopes;
          if (oa.scopes !== void 0) {
            if (!Array.isArray(oa.scopes) || oa.scopes.length > GHOST_OAUTH_SCOPES_MAX) {
              return {
                ok: false,
                reason: `network.secrets[].oauth.scopes \u5FC5\u987B\u662F \u2264${GHOST_OAUTH_SCOPES_MAX} \u6761\u7684\u6570\u7EC4`
              };
            }
            oaScopes = [];
            for (const sc of oa.scopes) {
              if (typeof sc !== "string" || sc.trim().length === 0 || sc.length > 200 || /\s/.test(sc)) {
                return {
                  ok: false,
                  reason: `network.secrets[].oauth.scopes \u542B\u975E\u6CD5\u6761\u76EE ${JSON.stringify(sc)}(1\u2013200 \u5B57\u7B26\u3001\u4E0D\u542B\u7A7A\u767D)`
                };
              }
              if (oaScopes.includes(sc)) {
                return {
                  ok: false,
                  reason: `network.secrets[].oauth.scopes \u542B\u91CD\u590D\u6761\u76EE ${JSON.stringify(sc)}`
                };
              }
              oaScopes.push(sc);
            }
          }
          if (oa.pkce !== void 0 && typeof oa.pkce !== "boolean") {
            return { ok: false, reason: "network.secrets[].oauth.pkce \u5FC5\u987B\u662F\u5E03\u5C14\u503C(\u7F3A\u7701 true)" };
          }
          if (oa.scopeDelimiter !== void 0 && oa.scopeDelimiter !== ",") {
            return {
              ok: false,
              reason: 'network.secrets[].oauth.scopeDelimiter \u76EE\u524D\u53EA\u652F\u6301 ","(\u7F3A\u7701 = \u7A7A\u683C\u62FC\u63A5)'
            };
          }
          let oaExtra;
          if (oa.extraAuthorizeParams !== void 0) {
            if (!isPlainObject(oa.extraAuthorizeParams)) {
              return {
                ok: false,
                reason: "network.secrets[].oauth.extraAuthorizeParams \u5FC5\u987B\u662F\u5BF9\u8C61"
              };
            }
            const entries = Object.entries(oa.extraAuthorizeParams);
            if (entries.length === 0 || entries.length > GHOST_OAUTH_EXTRA_PARAMS_MAX) {
              return {
                ok: false,
                reason: `network.secrets[].oauth.extraAuthorizeParams \u5FC5\u987B\u662F 1\u2013${GHOST_OAUTH_EXTRA_PARAMS_MAX} \u6761(\u6216\u7701\u7565)`
              };
            }
            oaExtra = {};
            for (const [pk, pv] of entries) {
              if (!/^[a-z][a-z0-9_]{0,31}$/.test(pk)) {
                return {
                  ok: false,
                  reason: `network.secrets[].oauth.extraAuthorizeParams \u952E ${JSON.stringify(pk)} \u5FC5\u987B\u662F\u5C0F\u5199\u5B57\u6BCD\u5F00\u5934\u7684 1\u201332 \u4F4D\u5C0F\u5199/\u6570\u5B57/\u4E0B\u5212\u7EBF`
                };
              }
              if (GHOST_OAUTH_RESERVED_AUTHORIZE_PARAMS.includes(pk)) {
                return {
                  ok: false,
                  reason: `network.secrets[].oauth.extraAuthorizeParams \u4E0D\u5141\u8BB8\u58F0\u660E\u534F\u8BAE\u4FDD\u7559\u53C2\u6570 ${JSON.stringify(pk)}`
                };
              }
              if (typeof pv !== "string" || pv.length === 0 || pv.length > 200) {
                return {
                  ok: false,
                  reason: `network.secrets[].oauth.extraAuthorizeParams[${JSON.stringify(pk)}] \u5FC5\u987B\u662F 1\u2013200 \u5B57\u7B26\u7684\u5B57\u7B26\u4E32`
                };
              }
              oaExtra[pk] = pv;
            }
          }
          if (oa.redirectPort !== void 0) {
            if (typeof oa.redirectPort !== "number" || !Number.isInteger(oa.redirectPort) || oa.redirectPort < 1024 || oa.redirectPort > 65535) {
              return {
                ok: false,
                reason: "network.secrets[].oauth.redirectPort \u5FC5\u987B\u662F 1024\u201365535 \u7684\u6574\u6570"
              };
            }
          }
          if (oa.tokenBroker !== void 0) {
            if (typeof oa.tokenBroker !== "string" || !GHOST_OAUTH_TOKEN_BROKER_RE.test(oa.tokenBroker)) {
              return {
                ok: false,
                reason: "network.secrets[].oauth.tokenBroker \u5FC5\u987B\u662F\u5C0F\u5199\u5B57\u6BCD\u5F00\u5934\u7684 1\u201332 \u4F4D\u5C0F\u5199/\u6570\u5B57/\u4E0B\u5212\u7EBF/\u8FDE\u5B57\u7B26"
              };
            }
            if (oa.clientSecret !== void 0) {
              return {
                ok: false,
                reason: "network.secrets[].oauth.tokenBroker \u4E0E clientSecret \u4E92\u65A5(broker \u6A21\u5F0F\u4E0B secret \u7531\u670D\u52A1\u7AEF\u6301\u6709,\u4E0D\u968F\u5305\u5206\u53D1)"
              };
            }
          }
          if (oaClientIdAlternatives !== void 0 && oa.tokenBroker === void 0) {
            return {
              ok: false,
              reason: "network.secrets[].oauth.clientIdAlternatives \u4EC5\u5141\u8BB8\u4E0E tokenBroker \u4E00\u8D77\u58F0\u660E"
            };
          }
          let oaBounce;
          if (oa.brokerBounce !== void 0) {
            if (oa.tokenBroker === void 0 || oa.redirectPort === void 0) {
              return {
                ok: false,
                reason: "network.secrets[].oauth.brokerBounce \u5FC5\u987B\u4E0E tokenBroker\u3001redirectPort \u540C\u65F6\u58F0\u660E"
              };
            }
            if (!isPlainObject(oa.brokerBounce)) {
              return { ok: false, reason: "network.secrets[].oauth.brokerBounce \u5FC5\u987B\u662F\u5BF9\u8C61" };
            }
            const bb = oa.brokerBounce;
            for (const field of ["path", "callbackPath"]) {
              const v = bb[field];
              if (typeof v !== "string" || v.length > 128 || !GHOST_OAUTH_BOUNCE_PATH_RE.test(v)) {
                return {
                  ok: false,
                  reason: `network.secrets[].oauth.brokerBounce.${field} \u5FC5\u987B\u662F / \u5F00\u5934\u7684\u7AD9\u5185\u7EDD\u5BF9\u8DEF\u5F84(\u6BB5\u5B57\u7B26\u9650\u5B57\u6BCD/\u6570\u5B57/_/-,\u2264128 \u5B57\u7B26)`
                };
              }
            }
            oaBounce = { path: bb.path, callbackPath: bb.callbackPath };
          }
          let oaIdentity;
          if (oa.identity !== void 0) {
            if (!isPlainObject(oa.identity)) {
              return { ok: false, reason: "network.secrets[].oauth.identity \u5FC5\u987B\u662F\u5BF9\u8C61" };
            }
            const idn = oa.identity;
            const idnUrl = parseHostBoundUrl(idn.url, "identity.url");
            if (!idnUrl.ok) return idnUrl;
            if (typeof idn.labelPath !== "string" || idn.labelPath.length > 128 || !GHOST_SECRET_EXCHANGE_TOKEN_PATH_RE.test(idn.labelPath)) {
              return {
                ok: false,
                reason: 'network.secrets[].oauth.identity.labelPath \u5FC5\u987B\u662F \u2264128 \u5B57\u7B26\u7684\u70B9\u5206\u8DEF\u5F84(\u6BB5\u540D\u9650\u5B57\u6BCD/\u6570\u5B57/_/-,\u5982 "email" / "user.name")'
              };
            }
            let idnTemplate;
            if (idn.displayTemplate !== void 0) {
              if (typeof idn.displayTemplate !== "string" || idn.displayTemplate.length === 0 || idn.displayTemplate.length > GHOST_OAUTH_IDENTITY_TEMPLATE_MAX_CHARS) {
                return {
                  ok: false,
                  reason: `network.secrets[].oauth.identity.displayTemplate \u5FC5\u987B\u662F 1\u2013${GHOST_OAUTH_IDENTITY_TEMPLATE_MAX_CHARS} \u5B57\u7B26\u7684\u5B57\u7B26\u4E32`
                };
              }
              const placeholders = [
                ...idn.displayTemplate.matchAll(GHOST_OAUTH_IDENTITY_TEMPLATE_PLACEHOLDER_RE)
              ];
              if (placeholders.length === 0) {
                return {
                  ok: false,
                  reason: 'network.secrets[].oauth.identity.displayTemplate \u5FC5\u987B\u542B\u81F3\u5C11\u4E00\u4E2A {\u70B9\u5206\u8DEF\u5F84} \u5360\u4F4D\u7B26(\u5982 "{team} \xB7 {user}")'
                };
              }
              for (const m of placeholders) {
                const p = m[1] ?? "";
                if (p.length > 128 || !GHOST_SECRET_EXCHANGE_TOKEN_PATH_RE.test(p)) {
                  return {
                    ok: false,
                    reason: `network.secrets[].oauth.identity.displayTemplate \u5360\u4F4D\u7B26 {${p}} \u4E0D\u662F\u5408\u6CD5\u70B9\u5206\u8DEF\u5F84(\u6BB5\u540D\u9650\u5B57\u6BCD/\u6570\u5B57/_/-)`
                  };
                }
              }
              idnTemplate = idn.displayTemplate;
            }
            let idnAvatarPath;
            if (idn.avatarPath !== void 0) {
              if (typeof idn.avatarPath !== "string" || idn.avatarPath.length > 128 || !GHOST_SECRET_EXCHANGE_TOKEN_PATH_RE.test(idn.avatarPath)) {
                return {
                  ok: false,
                  reason: 'network.secrets[].oauth.identity.avatarPath \u5FC5\u987B\u662F \u2264128 \u5B57\u7B26\u7684\u70B9\u5206\u8DEF\u5F84(\u6BB5\u540D\u9650\u5B57\u6BCD/\u6570\u5B57/_/-,\u5982 "data.avatar_thumb")'
                };
              }
              idnAvatarPath = idn.avatarPath;
            }
            oaIdentity = {
              url: idnUrl.url,
              labelPath: idn.labelPath,
              ...idnTemplate !== void 0 ? { displayTemplate: idnTemplate } : {},
              ...idnAvatarPath !== void 0 ? { avatarPath: idnAvatarPath } : {}
            };
          }
          oauth = {
            authorizeUrl: authorizeParsed.url,
            tokenUrl: tokenParsed.url,
            ...oa.clientId !== void 0 ? { clientId: oa.clientId } : {},
            ...oaClientIdAlternatives !== void 0 ? { clientIdAlternatives: oaClientIdAlternatives } : {},
            ...oa.clientSecret !== void 0 ? { clientSecret: oa.clientSecret } : {},
            ...oaScopes !== void 0 ? { scopes: oaScopes } : {},
            ...oa.scopeDelimiter !== void 0 ? { scopeDelimiter: oa.scopeDelimiter } : {},
            ...oa.pkce !== void 0 ? { pkce: oa.pkce } : {},
            ...oaExtra !== void 0 ? { extraAuthorizeParams: oaExtra } : {},
            ...oaIdentity !== void 0 ? { identity: oaIdentity } : {},
            ...oa.redirectPort !== void 0 ? { redirectPort: oa.redirectPort } : {},
            ...oa.tokenBroker !== void 0 ? { tokenBroker: oa.tokenBroker } : {},
            ...oaBounce !== void 0 ? { brokerBounce: oaBounce } : {}
          };
        }
        let exchange;
        if (s.exchange !== void 0) {
          if (!isPlainObject(s.exchange)) {
            return {
              ok: false,
              reason: `network.secrets[${JSON.stringify(s.key)}].exchange \u5FC5\u987B\u662F\u5BF9\u8C61`
            };
          }
          const ex = s.exchange;
          if (typeof ex.url !== "string" || ex.url.length === 0 || ex.url.length > 2048) {
            return {
              ok: false,
              reason: "network.secrets[].exchange.url \u5FC5\u987B\u662F 1\u20132048 \u5B57\u7B26\u7684\u5B57\u7B26\u4E32"
            };
          }
          let exUrl;
          try {
            exUrl = new URL(ex.url);
          } catch {
            return { ok: false, reason: "network.secrets[].exchange.url \u4E0D\u662F\u5408\u6CD5\u7684\u7EDD\u5BF9\u5730\u5740" };
          }
          if (exUrl.protocol !== "https:" || exUrl.port !== "" || exUrl.username || exUrl.password) {
            return {
              ok: false,
              reason: "network.secrets[].exchange.url \u4EC5\u652F\u6301 https \u9ED8\u8BA4\u7AEF\u53E3\u4E14\u4E0D\u5141\u8BB8\u5185\u5D4C\u7528\u6237\u540D/\u5BC6\u7801"
            };
          }
          if (!hosts.some((pattern) => ghostNetworkHostMatches(pattern, exUrl.hostname))) {
            return {
              ok: false,
              reason: `network.secrets[].exchange.url \u7684\u57DF\u540D ${JSON.stringify(exUrl.hostname)} \u5FC5\u987B\u547D\u4E2D network.hosts \u767D\u540D\u5355`
            };
          }
          if (typeof ex.bodyFormat !== "string" || ex.bodyFormat.length === 0 || ex.bodyFormat.length > GHOST_SECRET_EXCHANGE_BODY_MAX_CHARS || ex.bodyFormat.split("{value}").length !== 2) {
            return {
              ok: false,
              reason: `network.secrets[].exchange.bodyFormat \u5FC5\u987B\u662F \u2264${GHOST_SECRET_EXCHANGE_BODY_MAX_CHARS} \u5B57\u7B26\u4E14\u6070\u542B\u4E00\u4E2A {value} \u5360\u4F4D\u7684\u5B57\u7B26\u4E32`
            };
          }
          let exContentType;
          if (ex.contentType !== void 0) {
            if (typeof ex.contentType !== "string" || !GHOST_SECRET_EXCHANGE_CONTENT_TYPES.includes(ex.contentType)) {
              return {
                ok: false,
                reason: `network.secrets[].exchange.contentType \u4EC5\u652F\u6301 ${GHOST_SECRET_EXCHANGE_CONTENT_TYPES.join(" / ")}`
              };
            }
            exContentType = ex.contentType;
          }
          if (typeof ex.tokenPath !== "string" || ex.tokenPath.length > 128 || !GHOST_SECRET_EXCHANGE_TOKEN_PATH_RE.test(ex.tokenPath)) {
            return {
              ok: false,
              reason: 'network.secrets[].exchange.tokenPath \u5FC5\u987B\u662F \u2264128 \u5B57\u7B26\u7684\u70B9\u5206\u8DEF\u5F84(\u6BB5\u540D\u9650\u5B57\u6BCD/\u6570\u5B57/_/-,\u5982 "session" / "data.token")'
            };
          }
          let exTtl;
          if (ex.ttlSeconds !== void 0) {
            if (typeof ex.ttlSeconds !== "number" || !Number.isInteger(ex.ttlSeconds) || ex.ttlSeconds < GHOST_SECRET_EXCHANGE_TTL_MIN_S || ex.ttlSeconds > GHOST_SECRET_EXCHANGE_TTL_MAX_S2) {
              return {
                ok: false,
                reason: `network.secrets[].exchange.ttlSeconds \u5FC5\u987B\u662F ${GHOST_SECRET_EXCHANGE_TTL_MIN_S}\u2013${GHOST_SECRET_EXCHANGE_TTL_MAX_S2} \u7684\u6574\u6570(\u79D2)`
              };
            }
            exTtl = ex.ttlSeconds;
          }
          exchange = {
            url: ex.url,
            bodyFormat: ex.bodyFormat,
            ...exContentType !== void 0 ? { contentType: exContentType } : {},
            tokenPath: ex.tokenPath,
            ...exTtl !== void 0 ? { ttlSeconds: exTtl } : {}
          };
        }
        secrets.push({
          key: s.key,
          label: s.label,
          ...source !== void 0 ? { source } : {},
          ...s.hint !== void 0 ? { hint: s.hint } : {},
          ...s.url !== void 0 ? { url: s.url } : {},
          inject: {
            header: inj.header,
            format: inj.format,
            ...injectHosts !== void 0 ? { hosts: injectHosts } : {}
          },
          ...exchange !== void 0 ? { exchange } : {},
          ...oauth !== void 0 ? { oauth } : {}
        });
      }
    }
    let connections;
    if (n.connections !== void 0) {
      if (!Array.isArray(n.connections) || n.connections.length === 0 || n.connections.length > GHOST_NETWORK_MAX_CONNECTION_DECLS) {
        return {
          ok: false,
          reason: `network.connections \u5FC5\u987B\u662F 1\u2013${GHOST_NETWORK_MAX_CONNECTION_DECLS} \u6761\u7684\u6570\u7EC4`
        };
      }
      if (raw.settingsHtml === void 0) {
        return {
          ok: false,
          reason: "\u58F0\u660E\u4E86 network.connections \u5FC5\u987B\u540C\u65F6\u58F0\u660E settingsHtml(\u8FDE\u63A5\u5730\u5740\u4E0E\u51ED\u8BC1\u7531\u610F\u8BC6\u8BBE\u7F6E\u754C\u9762\u6536\u5355,\u6CA1\u6709\u754C\u9762\u5C31\u6CA1\u4EBA\u6536\u5355)"
        };
      }
      connections = [];
      const seenConnKeys = /* @__PURE__ */ new Set();
      const secretKeySet = new Set((secrets ?? []).map((s) => s.key));
      const nodeSecretKeySet = new Set((node?.secretBindings ?? []).map((s) => s.key));
      for (const c of n.connections) {
        if (!isPlainObject(c)) return { ok: false, reason: "network.connections \u6BCF\u9879\u5FC5\u987B\u662F\u5BF9\u8C61" };
        if (typeof c.key === "string" && isGhostManifestReservedRecordKey(c.key)) {
          return {
            ok: false,
            reason: `network.connections[].key \u4E0D\u5141\u8BB8\u4F7F\u7528\u5BF9\u8C61\u4FDD\u7559\u952E\u540D ${JSON.stringify(c.key)}`
          };
        }
        if (typeof c.key !== "string" || !/^[a-z][a-z0-9_]{0,31}$/.test(c.key)) {
          return {
            ok: false,
            reason: "network.connections[].key \u5FC5\u987B\u662F\u5C0F\u5199\u5B57\u6BCD\u5F00\u5934\u7684 1\u201332 \u4F4D\u5C0F\u5199/\u6570\u5B57/\u4E0B\u5212\u7EBF"
          };
        }
        if (seenConnKeys.has(c.key)) {
          return { ok: false, reason: `network.connections \u542B\u91CD\u590D key ${JSON.stringify(c.key)}` };
        }
        if (secretKeySet.has(c.key)) {
          return {
            ok: false,
            reason: `network.connections[].key ${JSON.stringify(c.key)} \u4E0E network.secrets \u7684 key \u649E\u540D(\u4E24\u8005\u5171\u7528\u547D\u540D\u7A7A\u95F4)`
          };
        }
        if (nodeSecretKeySet.has(c.key)) {
          return {
            ok: false,
            reason: `network.connections[].key ${JSON.stringify(c.key)} \u4E0E node.secretBindings \u7684 key \u649E\u540D(\u4E24\u8005\u5171\u7528\u547D\u540D\u7A7A\u95F4)`
          };
        }
        seenConnKeys.add(c.key);
        if (typeof c.label !== "string" || c.label.trim().length === 0 || c.label.length > 64) {
          return { ok: false, reason: "network.connections[].label \u5FC5\u987B\u662F 1\u201364 \u5B57\u7B26\u7684\u975E\u7A7A\u5B57\u7B26\u4E32" };
        }
        if (c.hint !== void 0 && (typeof c.hint !== "string" || c.hint.trim().length === 0 || c.hint.length > 200)) {
          return { ok: false, reason: "network.connections[].hint \u5FC5\u987B\u662F 1\u2013200 \u5B57\u7B26\u7684\u975E\u7A7A\u5B57\u7B26\u4E32" };
        }
        if (!isPlainObject(c.inject)) {
          return {
            ok: false,
            reason: `network.connections[${JSON.stringify(c.key)}].inject \u5FC5\u586B(\u8FDE\u63A5\u51ED\u8BC1\u8981\u58F0\u660E\u6CE8\u5165\u5230\u54EA\u4E2A\u8BF7\u6C42\u5934)`
          };
        }
        const cinj = c.inject;
        if (typeof cinj.header !== "string" || !/^[A-Za-z0-9-]{1,64}$/.test(cinj.header)) {
          return {
            ok: false,
            reason: "network.connections[].inject.header \u5FC5\u987B\u662F 1\u201364 \u4F4D\u5B57\u6BCD/\u6570\u5B57/\u8FDE\u5B57\u7B26\u7684\u5934\u540D"
          };
        }
        if (GHOST_NETWORK_FORBIDDEN_INJECT_HEADERS.includes(cinj.header.toLowerCase())) {
          return {
            ok: false,
            reason: `network.connections[].inject.header \u4E0D\u5141\u8BB8\u4F7F\u7528\u534F\u8BAE\u5173\u952E\u5934 ${JSON.stringify(cinj.header)}`
          };
        }
        if (typeof cinj.format !== "string" || cinj.format.length === 0 || cinj.format.length > 200 || cinj.format.split("{value}").length !== 2) {
          return {
            ok: false,
            reason: 'network.connections[].inject.format \u5FC5\u987B\u662F \u2264200 \u5B57\u7B26\u4E14\u6070\u542B\u4E00\u4E2A {value} \u5360\u4F4D\u7684\u5B57\u7B26\u4E32(\u5982 "Bearer {value}")'
          };
        }
        if (cinj.hosts !== void 0) {
          return {
            ok: false,
            reason: "network.connections[].inject.hosts \u4E0D\u5141\u8BB8\u58F0\u660E(\u8FDE\u63A5\u51ED\u8BC1\u53EA\u6CE8\u5165\u5BF9\u5E94\u8FDE\u63A5\u81EA\u8EAB\u7684\u5730\u5740)"
          };
        }
        if (c.maxConnections !== void 0) {
          if (typeof c.maxConnections !== "number" || !Number.isInteger(c.maxConnections) || c.maxConnections < 1 || c.maxConnections > GHOST_NETWORK_MAX_CONNECTIONS_PER_DECL) {
            return {
              ok: false,
              reason: `network.connections[].maxConnections \u5FC5\u987B\u662F 1\u2013${GHOST_NETWORK_MAX_CONNECTIONS_PER_DECL} \u7684\u6574\u6570(\u7F3A\u7701 ${GHOST_NETWORK_MAX_CONNECTIONS_PER_DECL})`
            };
          }
        }
        connections.push({
          key: c.key,
          label: c.label,
          ...c.hint !== void 0 ? { hint: c.hint } : {},
          inject: { header: cinj.header, format: cinj.format },
          ...c.maxConnections !== void 0 ? { maxConnections: c.maxConnections } : {}
        });
      }
    }
    network = {
      hosts,
      ...secrets !== void 0 ? { secrets } : {},
      ...connections !== void 0 ? { connections } : {}
    };
  }
  let setup;
  if (raw.setup !== void 0) {
    if (!isPlainObject(raw.setup)) {
      return {
        ok: false,
        reason: 'setup \u5FC5\u987B\u662F\u5BF9\u8C61(\u5982 { "requires": [{ "anyOf": ["secret:api_key"] }] })'
      };
    }
    const su = raw.setup;
    if (!Array.isArray(su.requires) || su.requires.length > GHOST_SETUP_MAX_GROUPS) {
      return {
        ok: false,
        reason: `setup.requires \u5FC5\u987B\u662F 0\u2013${GHOST_SETUP_MAX_GROUPS} \u7EC4\u7684\u6570\u7EC4(\u7A7A\u6570\u7EC4 = \u663E\u5F0F\u58F0\u660E\u65E0\u4F7F\u7528\u524D\u7F6E\u9700\u6C42)`
      };
    }
    const secretByKey = new Map([
      ...(network?.secrets ?? []).map(
        (s) => [
          s.key,
          {
            hostDerivedSource: s.source === "login-email" || s.source === "gh-cli" || s.source === "oidc-token" ? s.source : null
          }
        ]
      ),
      ...(node?.secretBindings ?? []).filter((s) => !s.oauthSecret).map((s) => [s.key, { hostDerivedSource: null }])
    ]);
    const connectionKeys = new Set((network?.connections ?? []).map((c) => c.key));
    const groups = [];
    for (const g of su.requires) {
      if (!isPlainObject(g) || !Array.isArray(g.anyOf) || g.anyOf.length === 0 || g.anyOf.length > GHOST_SETUP_MAX_ITEMS_PER_GROUP) {
        return {
          ok: false,
          reason: `setup.requires \u6BCF\u7EC4\u5FC5\u987B\u662F { "anyOf": [...] } \u4E14\u7EC4\u5185 1\u2013${GHOST_SETUP_MAX_ITEMS_PER_GROUP} \u6761`
        };
      }
      const items = [];
      const seenRefs = /* @__PURE__ */ new Set();
      for (const it of g.anyOf) {
        let item;
        if (typeof it === "string") {
          const m = /^(secret|connection):(.+)$/.exec(it);
          if (!m) {
            return {
              ok: false,
              reason: `setup \u6761\u76EE ${JSON.stringify(it)} \u5F62\u6001\u4E0D\u5BF9(\u5B57\u7B26\u4E32\u6761\u76EE\u987B\u4E3A "secret:<key>" \u6216 "connection:<key>";kv \u7528\u5BF9\u8C61 { "kv": "<key>", "label": "..." })`
            };
          }
          const [, refKind, refKey] = m;
          if (refKind === "secret") {
            const decl = secretByKey.get(refKey);
            if (!decl) {
              return {
                ok: false,
                reason: `setup \u5F15\u7528\u4E86\u672A\u58F0\u660E\u7684\u51ED\u8BC1 ${JSON.stringify(refKey)}(\u5FC5\u987B\u9010\u5B57\u53D6\u81EA network.secrets[].key \u6216 node.secretBindings[].key)`
              };
            }
            if (decl.hostDerivedSource) {
              return {
                ok: false,
                reason: `setup \u4E0D\u5141\u8BB8\u5F15\u7528 ${decl.hostDerivedSource} \u6E90\u51ED\u8BC1 ${JSON.stringify(refKey)}(Host \u6D3E\u751F\u8EAB\u4EFD\u6CA1\u6709\u7528\u6237\u914D\u7F6E\u52A8\u4F5C\u53EF\u5F15\u5BFC)`
              };
            }
            item = { kind: "secret", key: refKey };
          } else {
            if (!connectionKeys.has(refKey)) {
              return {
                ok: false,
                reason: `setup \u5F15\u7528\u4E86\u672A\u58F0\u660E\u7684\u8FDE\u63A5 ${JSON.stringify(refKey)}(\u5FC5\u987B\u9010\u5B57\u53D6\u81EA network.connections[].key)`
              };
            }
            item = { kind: "connection", key: refKey };
          }
        } else if (isPlainObject(it)) {
          if (typeof it.kv === "string" && isGhostManifestReservedRecordKey(it.kv)) {
            return {
              ok: false,
              reason: `setup kv \u6761\u76EE\u7684 kv \u4E0D\u5141\u8BB8\u4F7F\u7528\u5BF9\u8C61\u4FDD\u7559\u952E\u540D ${JSON.stringify(it.kv)}`
            };
          }
          if (typeof it.kv !== "string" || !GHOST_SETUP_KV_KEY_RE.test(it.kv)) {
            return {
              ok: false,
              reason: "setup kv \u6761\u76EE\u7684 kv \u5FC5\u987B\u662F 1\u201364 \u4F4D\u5B57\u6BCD/\u6570\u5B57/\u4E0B\u5212\u7EBF/\u70B9/\u8FDE\u5B57\u7B26\u7684\u952E\u540D"
            };
          }
          if (typeof it.label !== "string" || it.label.trim().length === 0 || it.label.length > 64) {
            return {
              ok: false,
              reason: "setup kv \u6761\u76EE\u5FC5\u987B\u5E26 1\u201364 \u5B57\u7B26\u7684 label(kv \u952E\u540D\u5BBF\u4E3B\u65E0\u5148\u9A8C,\u5F39\u7A97\u8981\u6709\u540D\u5B57\u53EF\u5C55\u793A)"
            };
          }
          if (raw.settingsHtml === void 0) {
            return {
              ok: false,
              reason: "setup \u5F15\u7528\u4E86 kv \u53C2\u6570\u4F46\u6CA1\u6709 settingsHtml\u2014\u2014\u53C2\u6570\u7531\u610F\u8BC6\u8BBE\u7F6E\u754C\u9762\u6536\u5355,\u6CA1\u6709\u754C\u9762\u5C31\u6CA1\u4EBA\u586B"
            };
          }
          item = { kind: "kv", key: it.kv, label: it.label };
        } else {
          return {
            ok: false,
            reason: 'setup.requires[].anyOf \u6BCF\u6761\u5FC5\u987B\u662F\u5B57\u7B26\u4E32\u5F15\u7528\u6216 { "kv", "label" } \u5BF9\u8C61'
          };
        }
        const ref = `${item.kind}:${item.key}`;
        if (seenRefs.has(ref)) {
          return { ok: false, reason: `setup \u540C\u7EC4\u5185\u542B\u91CD\u590D\u6761\u76EE ${JSON.stringify(ref)}` };
        }
        seenRefs.add(ref);
        items.push(item);
      }
      groups.push({ anyOf: items });
    }
    setup = { requires: groups };
  }
  if (raw.command !== void 0) {
    if (typeof raw.command !== "string" || raw.command.length === 0 || raw.command.length > 32 || /[\s/]/.test(raw.command)) {
      return { ok: false, reason: 'command \u5FC5\u987B\u662F 1\u201332 \u5B57\u7B26\u3001\u4E0D\u542B\u7A7A\u767D\u4E0E "/" \u7684\u5B57\u7B26\u4E32' };
    }
    if (tools === void 0) {
      return { ok: false, reason: "\u58F0\u660E\u4E86 command \u4F46\u6CA1\u6709 tools\u2014\u2014\u6CA1\u6709\u5DE5\u5177\u7684\u6307\u4EE4\u65E0\u4E8B\u53EF\u505A" };
    }
  }
  let keywords;
  if (raw.keywords !== void 0) {
    if (!Array.isArray(raw.keywords) || raw.keywords.length === 0 || raw.keywords.length > 8) {
      return { ok: false, reason: "keywords \u5FC5\u987B\u662F 1\u20138 \u9879\u7684\u6570\u7EC4" };
    }
    if (tools === void 0) {
      return { ok: false, reason: "\u58F0\u660E\u4E86 keywords \u4F46\u6CA1\u6709 tools\u2014\u2014\u6CA1\u6709\u5DE5\u5177\u7684\u89E6\u53D1\u8BCD\u65E0\u4E8B\u53EF\u505A" };
    }
    const seen = /* @__PURE__ */ new Set();
    keywords = [];
    for (const k of raw.keywords) {
      if (typeof k !== "string") return { ok: false, reason: "keywords \u6BCF\u9879\u5FC5\u987B\u662F\u5B57\u7B26\u4E32" };
      const word = k.trim();
      if (word.length < 2 || word.length > 24) {
        return {
          ok: false,
          reason: `keywords \u6BCF\u9879\u987B\u4E3A 2\u201324 \u5B57\u7B26(\u5355\u5B57\u8BCD\u547D\u4E2D\u9762\u5931\u63A7):${JSON.stringify(k)}`
        };
      }
      const fold = word.toLowerCase();
      if (seen.has(fold)) continue;
      seen.add(fold);
      keywords.push(word);
    }
  }
  return {
    ok: true,
    manifest: {
      ...prepared.unknownV3Fields,
      schemaVersion: prepared.schemaVersion,
      id: raw.id,
      name: raw.name,
      version: raw.version,
      ...raw.minCindyVersion !== void 0 ? { minCindyVersion: raw.minCindyVersion } : {},
      kind: "chip",
      ...raw.author !== void 0 ? { author: raw.author } : {},
      ...locales !== void 0 ? { locales } : {},
      ...raw.description !== void 0 ? { description: raw.description } : {},
      ...raw.whenToUse !== void 0 ? { whenToUse: raw.whenToUse } : {},
      ...raw.icon !== void 0 ? { icon: raw.icon } : {},
      entry: raw.entry,
      ...raw.launch !== void 0 ? { launch: raw.launch } : {},
      ...raw.settingsHtml !== void 0 ? { settingsHtml: raw.settingsHtml } : {},
      ...raw.settingsHeight !== void 0 ? { settingsHeight: raw.settingsHeight } : {},
      ...tools !== void 0 ? { tools } : {},
      ...card !== void 0 || prepared.v3BaseCard || slots.includes("card") ? { card: card ?? {} } : {},
      ...cindy !== void 0 ? { cindy } : {},
      ...agent !== void 0 || prepared.v3BaseAgent || slots.includes("agent") ? { agent: agent ?? {} } : {},
      ...node !== void 0 ? { node } : {},
      ...subscribe !== void 0 ? { subscribe } : {},
      ...routineEvents !== void 0 ? { routineEvents } : {},
      ...network !== void 0 ? { network } : {},
      ...preview !== void 0 ? { preview } : {},
      ...skill !== void 0 ? { skill } : {},
      ...manual !== void 0 ? { manual } : {},
      ...slots.includes("notify") ? { notify: true } : {},
      ...slots.includes("badge") ? { badge: true } : {},
      ...slots.includes("confirm") ? { confirm: true } : {},
      ...slots.includes("fs") ? { fs: true } : {},
      ...slots.includes("library") ? { library: true } : {},
      ...slots.includes("session-context") ? { sessionContext: true } : {},
      ...slots.includes("pick") ? { pick: true } : {},
      ...slots.includes("workspace") ? { workspace: true } : {},
      ...slots.includes("ios-simulator") ? { iosSimulator: true } : {},
      ...setup !== void 0 ? { setup } : {},
      ...raw.command !== void 0 ? { command: raw.command } : {},
      ...keywords !== void 0 ? { keywords } : {},
      ...panel !== void 0 ? { panel } : {},
      ...mainView !== void 0 ? { mainView } : {}
    },
    unsupportedLegacySlots: prepared.unsupportedLegacySlots
  };
}
function validateNormalizedGhostManifest(raw) {
  const authorInput = isPlainObject(raw) ? withLegacyAuthorSlots(raw) : raw;
  const authorResult = validateGhostManifest2(authorInput);
  if (authorResult.ok || !isPlainObject(raw) || raw.setup === void 0) return authorResult;
  if (!isPlainObject(raw.setup) || !Array.isArray(raw.setup.requires)) {
    return { ok: false, reason: "\u6807\u51C6\u5316\u6E05\u5355 setup \u5FC5\u987B\u662F\u5E26 requires \u6570\u7EC4\u7684\u5BF9\u8C61" };
  }
  const requires = [];
  for (const group of raw.setup.requires) {
    if (!isPlainObject(group) || !Array.isArray(group.anyOf)) {
      return { ok: false, reason: "\u6807\u51C6\u5316\u6E05\u5355 setup.requires \u6BCF\u7EC4\u5FC5\u987B\u662F\u5E26 anyOf \u6570\u7EC4\u7684\u5BF9\u8C61" };
    }
    const anyOf = [];
    for (const requirement of group.anyOf) {
      if (!isPlainObject(requirement)) {
        return { ok: false, reason: "\u6807\u51C6\u5316\u6E05\u5355 setup \u6761\u76EE\u5FC5\u987B\u662F { kind, key } \u5BF9\u8C61" };
      }
      if (requirement.kind === "secret" || requirement.kind === "connection") {
        if (typeof requirement.key !== "string") {
          return { ok: false, reason: "\u6807\u51C6\u5316\u6E05\u5355 setup \u6761\u76EE\u7684 key \u5FC5\u987B\u662F\u5B57\u7B26\u4E32" };
        }
        anyOf.push(`${requirement.kind}:${requirement.key}`);
        continue;
      }
      if (requirement.kind === "kv") {
        anyOf.push({ kv: requirement.key, label: requirement.label });
        continue;
      }
      return { ok: false, reason: "\u6807\u51C6\u5316\u6E05\u5355 setup \u6761\u76EE\u7684 kind \u4E0D\u53D7\u652F\u6301" };
    }
    requires.push({ anyOf });
  }
  return validateGhostManifest2({ ...withLegacyAuthorSlots(raw), setup: { requires } });
}
function withLegacyAuthorSlots(raw) {
  if (raw.schemaVersion !== 2) return raw;
  const slots = Array.isArray(raw.slots) ? [...raw.slots] : [];
  if (!Array.isArray(raw.slots)) {
    for (const [field, slot] of V3_DECLARATION_TO_LEGACY_SLOT) {
      if (raw[field] !== void 0) slots.push(slot);
    }
    for (const field of V3_BOOLEAN_CAPABILITY_FIELDS) {
      if (raw[field] === true) slots.push(V3_BOOLEAN_TO_LEGACY_SLOT[field]);
    }
  }
  const legacy = { ...raw, slots };
  for (const field of V3_BOOLEAN_CAPABILITY_FIELDS) delete legacy[field];
  return legacy;
}
function ghostManifestToLegacyV2DigestFormat(manifest, source) {
  if (!isPlainObject(manifest)) return manifest;
  if (manifest.schemaVersion === 2 && isPlainObject(source) && source.schemaVersion === 2 && Array.isArray(source.slots)) {
    const legacy = withLegacyAuthorSlots({
      ...manifest,
      slots: source.slots.map((slot) => slot === "model" ? "cindy" : slot)
    });
    const sourceCard = isPlainObject(source.card) ? source.card : null;
    if (sourceCard?.externalLinks === true) legacy.card = { externalLinks: true };
    else delete legacy.card;
    const sourceAgent = isPlainObject(source.agent) ? source.agent : null;
    const legacyAgent = {};
    for (const field of ["background", "errand", "schedule"]) {
      if (sourceAgent?.[field] === true) legacyAgent[field] = true;
    }
    if (Object.keys(legacyAgent).length > 0) legacy.agent = legacyAgent;
    else delete legacy.agent;
    return legacy;
  }
  return withLegacyAuthorSlots(manifest);
}
function ghostManifestToAuthorFormat(manifest) {
  const authorManifest = withLegacyAuthorSlots(manifest);
  if (manifest.setup === void 0) return { ...authorManifest };
  return {
    ...authorManifest,
    setup: {
      requires: manifest.setup.requires.map((group) => ({
        anyOf: group.anyOf.map((requirement) => {
          if (requirement.kind === "kv") {
            return { kv: requirement.key, label: requirement.label };
          }
          return `${requirement.kind}:${requirement.key}`;
        })
      }))
    }
  };
}
var GHOST_PIPE_CALL_MAX_TOTAL_MS = 30 * 6e4;
var GHOST_ERRAND_JOB_TTL_MS = 30 * 6e4;
var GHOST_NODE_REQUEST_MAX_TOTAL_MS = 15 * 6e4;
var GHOST_CARD_WORKING_WINDOW_MS = 30 * 6e4;
var GHOST_CARD_HTML_MAX_BYTES = 32 * 1024;
var GHOST_VIDEO_REF_IMAGE_MAX_TOTAL_BYTES_BY_REF_MODE = {
  /*
   * 存量路径:**不设闸,原样保留**。
   *
   * 这条路径在多参考图之前没有任何字节闸,而源图远不止来自寄存 ——
   * resolveOwnedMedia 走 ledger.ghostCanRead,放行的还有 ghost-gallery
   * (network as:'media' 落仓,单张硬顶 GHOST_FETCH_MEDIA_MAX_BYTES = 256MB)
   * 与 ghost-grant(用户随附件引渡,上限另算)。所以"源图 ≤ 寄存上限 50MB"
   * 不成立,任何有限预算都可能拒掉一单改之前跑得通的活。
   *
   * 这条路径的 OOM 暴露面是**既有**问题(edit_image 吃源图同样没有闸),
   * 收紧它要改存量行为,不在本 PR 范围,已列入 PR 风险区跟踪。
   */
  first_and_last_frame: null,
  /*
   * 新路径:张数放到 9,不设闸最坏能拖进 9 × 256MB。这个模式是随本 PR 新开
   * 的,没有存量插件依赖,所以从第一天就给个保守边界。
   *
   * 100MB 聚合 → 峰值约 370MB(原始 Buffer 1× + base64 4/3× + JSON 请求体
   * 再 4/3×),是 main 进程能吞下的量级;9 张均摊 11MB,对参考图绰绰有余
   * (1080p 级单张通常几 MB)。不与寄存上限挂钩:那个数管"单张能存多大",
   * 与"一单能读多少"不是同一件事,挂上去只会绑出假的联动。
   */
  reference_image: 100 * 1024 * 1024
};
var GHOST_CINDY_JOB_TTL_MS = 30 * 6e4;
var GHOST_CINDY_DEPOSIT_MAX_BYTES = 50 * 1024 * 1024;
var GHOST_CINDY_DEPOSIT_QUOTA_BYTES = 1024 * 1024 * 1024;
var GHOST_ASSISTANT_HOOK_TIMEOUT_MS = 5 * 6e4;
var GHOST_FETCH_BODY_MAX_BYTES = 256 * 1024;
var GHOST_FETCH_RESPONSE_MAX_BYTES = 50 * 1024 * 1024;
var GHOST_FETCH_MEDIA_MAX_BYTES = 256 * 1024 * 1024;
var GHOST_FETCH_UPLOAD_MAX_BYTES_PER_FILE = 64 * 1024 * 1024;
var GHOST_FETCH_UPLOAD_MAX_TOTAL_BYTES = 128 * 1024 * 1024;
var GHOST_FETCH_DIR_UPLOAD_MAX_BYTES_PER_FILE = 50 * 1024 * 1024;
var GHOST_FETCH_DIR_UPLOAD_MAX_TOTAL_BYTES = 500 * 1024 * 1024;
var GHOST_DIR_DEPOSIT_TTL_MS = 10 * 6e4;
var GHOST_SAVE_DEPOSIT_TTL_MS = 10 * 6e4;
var GHOST_SAVE_DEPOSIT_MAX_TOTAL_BYTES = 512 * 1024 * 1024;
var GHOST_FETCH_FILE_MAX_BYTES = 256 * 1024 * 1024;
var GHOST_FS_WRITE_MAX_BYTES = 16 * 1024 * 1024;
var GHOST_FS_READ_MAX_BYTES = 16 * 1024 * 1024;
var GHOST_FS_DATA_MAX_TOTAL_BYTES = 256 * 1024 * 1024;

// apps/desktop/src/main/cindy-brain/ghostSignature.ts
var import_node_crypto = __toESM(require("node:crypto"));
var import_jszip = __toESM(require_lib3());

// apps/desktop/src/main/cindy-brain/ghostZipPermissions.ts
var S_IFMT = 61440;
var S_IFREG = 32768;
var S_IFDIR = 16384;
var S_IFLNK = 40960;
var PERMISSION_BITS = 511;
var ARCHIVE_REGULAR_0644 = S_IFREG | 420;
var ARCHIVE_DIR_0755 = S_IFDIR | 493;
function parseZipUnixPermissions(unixPermissions) {
  if (typeof unixPermissions === "number") {
    return Number.isSafeInteger(unixPermissions) && unixPermissions >= 0 ? unixPermissions : null;
  }
  if (typeof unixPermissions !== "string" || !/^[0-7]+$/.test(unixPermissions)) {
    return null;
  }
  const parsed = Number.parseInt(unixPermissions, 8);
  return Number.isSafeInteger(parsed) ? parsed : null;
}
function declaresType(mode, type) {
  const fileType = mode & S_IFMT;
  return fileType === 0 || fileType === type;
}
function isZipSymbolicLinkMode(unixPermissions) {
  const parsed = parseZipUnixPermissions(unixPermissions);
  return parsed !== null && (parsed & S_IFMT) === S_IFLNK;
}
function installedFileModeFromZip(unixPermissions, platform = process.platform) {
  if (platform === "win32") return null;
  const parsed = parseZipUnixPermissions(unixPermissions);
  if (parsed === null || !declaresType(parsed, S_IFREG)) return null;
  return parsed & PERMISSION_BITS & ~18 | 384;
}

// apps/desktop/src/main/cindy-brain/ghostSignature.ts
var GHOST_SIGNATURE_FILE = "cindy-signatures.json";
var MAX_SIGNATURE_FILE_BYTES = 64 * 1024;
var MAX_SIGNED_CONTENT_BYTES = 256 * 1024 * 1024;
function canonicalJson(value) {
  return JSON.stringify(value, (_key, v) => {
    if (v && typeof v === "object" && !Array.isArray(v)) {
      const sorted = {};
      for (const k of Object.keys(v).sort()) sorted[k] = v[k];
      return sorted;
    }
    return v;
  });
}
function sha256Hex(data) {
  return import_node_crypto.default.createHash("sha256").update(data).digest("hex");
}
function publicKeyId(publicKeyDer) {
  return `ed25519:${sha256Hex(publicKeyDer).slice(0, 32)}`;
}
function publicKeyObject(publicKeyBase64) {
  return import_node_crypto.default.createPublicKey({
    key: Buffer.from(publicKeyBase64, "base64"),
    format: "der",
    type: "spki"
  });
}
function unsignedTrust() {
  return {
    level: "unverified",
    publisherSigned: false,
    publisherVerified: false,
    reviewed: false
  };
}
async function buildStatement(zip, prefix, manifest) {
  const files = [];
  let totalBytes = 0;
  const entries = Object.values(zip.files).sort((a, b) => a.name.localeCompare(b.name));
  for (const entry of entries) {
    if (entry.dir || entry.name.startsWith("__MACOSX/")) continue;
    if (!entry.name.startsWith(prefix)) continue;
    const rel = entry.name.slice(prefix.length);
    if (!rel || rel === GHOST_SIGNATURE_FILE) continue;
    const digest = await hashZipEntry(entry, MAX_SIGNED_CONTENT_BYTES - totalBytes);
    totalBytes += digest.bytes;
    files.push({ path: rel, sha256: digest.sha256, bytes: digest.bytes });
  }
  files.sort((a, b) => a.path.localeCompare(b.path));
  return {
    schemaVersion: 1,
    ghostId: manifest.id,
    ghostVersion: manifest.version,
    files
  };
}
async function hashZipEntry(entry, remainingBytes) {
  if (remainingBytes < 0) throw new Error("\u7B7E\u540D\u5185\u5BB9\u8D85\u8FC7 256MB \u4E0A\u9650");
  const hash = import_node_crypto.default.createHash("sha256");
  let bytes = 0;
  await consumeZipEntry(entry, (chunk, stream) => {
    bytes += chunk.byteLength;
    if (bytes > remainingBytes) {
      stream.destroy();
      throw new Error("\u7B7E\u540D\u5185\u5BB9\u8D85\u8FC7 256MB \u4E0A\u9650");
    }
    hash.update(chunk);
  });
  return { sha256: hash.digest("hex"), bytes };
}
async function readSignatureText(entry) {
  const chunks = [];
  let bytes = 0;
  await consumeZipEntry(entry, (chunk, stream) => {
    bytes += chunk.byteLength;
    if (bytes > MAX_SIGNATURE_FILE_BYTES) {
      stream.destroy();
      throw new Error("\u7B7E\u540D\u6587\u4EF6\u8FC7\u5927");
    }
    chunks.push(chunk);
  });
  return Buffer.concat(chunks, bytes).toString("utf8");
}
async function consumeZipEntry(entry, onChunk) {
  await new Promise((resolve, reject) => {
    const stream = entry.nodeStream();
    let settled = false;
    const fail = (err) => {
      if (settled) return;
      settled = true;
      reject(err instanceof Error ? err : new Error(String(err)));
    };
    stream.on("data", (value) => {
      if (settled) return;
      try {
        onChunk(Buffer.isBuffer(value) ? value : Buffer.from(value), stream);
      } catch (err) {
        fail(err);
      }
    });
    stream.on("error", fail);
    stream.on("end", () => {
      if (settled) return;
      settled = true;
      resolve();
    });
  });
}
function normalizeDocument(raw) {
  if (!raw || typeof raw !== "object" || Array.isArray(raw)) return null;
  const doc = raw;
  const statement = doc.statement;
  const publisher = doc.publisher;
  if (doc.schemaVersion !== 1 || !statement || !publisher) return null;
  if (statement.schemaVersion !== 1 || typeof statement.ghostId !== "string" || typeof statement.ghostVersion !== "string" || !Array.isArray(statement.files)) return null;
  const files = [];
  for (const item of statement.files) {
    if (!item || typeof item !== "object" || Array.isArray(item)) return null;
    const file = item;
    if (typeof file.path !== "string" || !/^[a-f0-9]{64}$/.test(String(file.sha256)) || typeof file.bytes !== "number" || !Number.isSafeInteger(file.bytes) || file.bytes < 0) return null;
    files.push({ path: file.path, sha256: String(file.sha256), bytes: file.bytes });
  }
  if (publisher.algorithm !== "ed25519" || typeof publisher.keyId !== "string" || typeof publisher.name !== "string" || publisher.name.trim().length === 0 || publisher.name.length > 64 || typeof publisher.publicKey !== "string" || typeof publisher.signature !== "string") return null;
  let review;
  if (doc.review !== void 0) {
    if (!doc.review || typeof doc.review !== "object" || Array.isArray(doc.review)) return null;
    const reviewRaw = doc.review;
    if (reviewRaw.algorithm !== "ed25519" || typeof reviewRaw.keyId !== "string" || typeof reviewRaw.signature !== "string") return null;
    review = {
      algorithm: "ed25519",
      keyId: reviewRaw.keyId,
      signature: reviewRaw.signature
    };
  }
  return {
    schemaVersion: 1,
    statement: {
      schemaVersion: 1,
      ghostId: statement.ghostId,
      ghostVersion: statement.ghostVersion,
      files
    },
    publisher: {
      algorithm: "ed25519",
      keyId: publisher.keyId,
      name: publisher.name,
      publicKey: publisher.publicKey,
      signature: publisher.signature
    },
    ...review ? { review } : {}
  };
}
function reviewPayload(doc) {
  return Buffer.from(
    canonicalJson({
      statement: doc.statement,
      publisher: doc.publisher
    })
  );
}
function publisherPayload(statement, publisher) {
  return Buffer.from(canonicalJson({ statement, publisher }));
}
async function verifyGhostZipSignatures(zip, prefix, manifest, registry = {}) {
  const signatureEntry = zip.file(`${prefix}${GHOST_SIGNATURE_FILE}`);
  if (!signatureEntry) return { ok: true, trust: unsignedTrust() };
  let text;
  try {
    text = await readSignatureText(signatureEntry);
  } catch (err) {
    return {
      ok: false,
      reason: err instanceof Error ? err.message : "\u7B7E\u540D\u6587\u4EF6\u65E0\u6CD5\u8BFB\u53D6"
    };
  }
  let doc;
  try {
    doc = normalizeDocument(JSON.parse(text));
  } catch {
    doc = null;
  }
  if (!doc) return { ok: false, reason: "\u7B7E\u540D\u6587\u4EF6\u683C\u5F0F\u4E0D\u5408\u6CD5" };
  let actualStatement;
  try {
    actualStatement = await buildStatement(zip, prefix, manifest);
  } catch (err) {
    return {
      ok: false,
      reason: err instanceof Error ? err.message : "\u7B7E\u540D\u5185\u5BB9\u65E0\u6CD5\u8BFB\u53D6"
    };
  }
  if (canonicalJson(doc.statement) !== canonicalJson(actualStatement)) {
    return { ok: false, reason: "\u63D2\u4EF6\u6587\u4EF6\u6216\u7248\u672C\u4E0E\u7B7E\u540D\u8BB0\u5F55\u4E0D\u4E00\u81F4\uFF0C\u5305\u53EF\u80FD\u5DF2\u88AB\u4FEE\u6539" };
  }
  let publisherKey;
  let publisherDer;
  let publisherSignature;
  try {
    publisherDer = Buffer.from(doc.publisher.publicKey, "base64");
    publisherKey = publicKeyObject(doc.publisher.publicKey);
    publisherSignature = Buffer.from(doc.publisher.signature, "base64");
  } catch {
    return { ok: false, reason: "\u53D1\u5E03\u8005\u516C\u94A5\u6216\u7B7E\u540D\u7F16\u7801\u635F\u574F" };
  }
  if (publicKeyId(publisherDer) !== doc.publisher.keyId) {
    return { ok: false, reason: "\u53D1\u5E03\u8005 keyId \u4E0E\u516C\u94A5\u4E0D\u5339\u914D" };
  }
  const publisherIdentity = {
    algorithm: doc.publisher.algorithm,
    keyId: doc.publisher.keyId,
    name: doc.publisher.name,
    publicKey: doc.publisher.publicKey
  };
  if (!import_node_crypto.default.verify(
    null,
    publisherPayload(doc.statement, publisherIdentity),
    publisherKey,
    publisherSignature
  )) {
    return { ok: false, reason: "\u53D1\u5E03\u8005\u7B7E\u540D\u9A8C\u8BC1\u5931\u8D25\uFF0C\u5305\u53EF\u80FD\u5DF2\u88AB\u4FEE\u6539" };
  }
  const trustedPublisher = registry.publishers?.[doc.publisher.keyId];
  const publisherVerified = Boolean(
    trustedPublisher && trustedPublisher.publicKey === doc.publisher.publicKey
  );
  let reviewed = false;
  let reviewerName;
  let unknownReviewer = false;
  if (doc.review) {
    const trustedReviewer = registry.reviewers?.[doc.review.keyId];
    if (!trustedReviewer) {
      unknownReviewer = true;
    } else {
      try {
        const reviewerDer = Buffer.from(trustedReviewer.publicKey, "base64");
        if (publicKeyId(reviewerDer) !== doc.review.keyId) {
          return { ok: false, reason: "\u5BA2\u6237\u7AEF\u5185\u7F6E\u7684\u5BA1\u6838 key \u914D\u7F6E\u4E0D\u4E00\u81F4" };
        }
        reviewed = import_node_crypto.default.verify(
          null,
          reviewPayload(doc),
          publicKeyObject(trustedReviewer.publicKey),
          Buffer.from(doc.review.signature, "base64")
        );
      } catch {
        reviewed = false;
      }
      if (!reviewed) return { ok: false, reason: "Cindy \u5BA1\u6838\u7B7E\u540D\u9A8C\u8BC1\u5931\u8D25\uFF0C\u5305\u53EF\u80FD\u5DF2\u88AB\u4FEE\u6539" };
      reviewerName = trustedReviewer.name;
    }
  }
  const verifiedByReview = reviewed;
  const trust = {
    level: reviewed ? "reviewed" : publisherVerified ? "verified-publisher" : "unverified",
    publisherSigned: true,
    publisherVerified: publisherVerified || verifiedByReview,
    reviewed,
    publisherName: trustedPublisher?.name ?? doc.publisher.name,
    publisherKeyId: doc.publisher.keyId,
    ...reviewerName ? { reviewerName } : {},
    ...unknownReviewer ? { unknownReviewer: true } : {}
  };
  return { ok: true, trust, document: doc };
}

// apps/desktop/src/main/cindy-brain/dirDeposit.ts
var import_node_path = __toESM(require("node:path"));
function isPathInsideDir(parentAbs, childAbs) {
  const fold = (p) => process.platform === "win32" ? p.toLowerCase() : p;
  const rel = import_node_path.default.relative(fold(import_node_path.default.resolve(parentAbs)), fold(import_node_path.default.resolve(childAbs)));
  return rel === "" || !rel.startsWith("..") && !import_node_path.default.isAbsolute(rel);
}

// apps/desktop/src/main/cindy-brain/ghostContentTree.ts
var import_node_crypto2 = __toESM(require("node:crypto"));
var import_node_fs = __toESM(require("node:fs"));
var import_node_path2 = __toESM(require("node:path"));
function kindOfStat(stat) {
  if (stat.isSymbolicLink()) return "link";
  if (stat.isDirectory()) return "directory";
  if (stat.isFile()) return "file";
  return "other";
}
async function classifyGhostDirEntry(absPath) {
  return kindOfStat(await import_node_fs.default.promises.lstat(absPath));
}
function classifyGhostDirEntrySync(absPath) {
  return kindOfStat(import_node_fs.default.lstatSync(absPath));
}
function isRegularGhostDirEntry(kind) {
  return kind === "file" || kind === "directory";
}
async function resolveGhostContentPath(baseDir, relPath, options2) {
  const segments = relPath.split("/").filter((segment) => segment.length > 0);
  let current = baseDir;
  for (const [index, segment] of segments.entries()) {
    current = import_node_path2.default.join(current, segment);
    assertSegment(
      await classifyGhostDirEntry(current),
      index === segments.length - 1 ? options2.expect : "directory",
      relPath,
      options2.label
    );
  }
  return current;
}
function resolveGhostContentPathSync(baseDir, relPath, options2) {
  const segments = relPath.split("/").filter((segment) => segment.length > 0);
  let current = baseDir;
  for (const [index, segment] of segments.entries()) {
    current = import_node_path2.default.join(current, segment);
    assertSegment(
      classifyGhostDirEntrySync(current),
      index === segments.length - 1 ? options2.expect : "directory",
      relPath,
      options2.label
    );
  }
  return current;
}
function assertSegment(kind, expect, relPath, label) {
  if (kind === "link") {
    throw new Error(`${label} path segment is a link: ${relPath}`);
  }
  if (kind !== expect) {
    throw new Error(
      `${label} path segment is not a ${expect === "directory" ? "directory" : "regular file"}: ${relPath}`
    );
  }
}
function sameFileIdentity(a, b) {
  if (a.dev === 0n || a.ino === 0n || b.dev === 0n || b.ino === 0n) return false;
  return a.dev === b.dev && a.ino === b.ino;
}
function sameStableFileState(before, after) {
  return after.isFile() && sameFileIdentity(before, after) && before.size === after.size && before.mtimeNs === after.mtimeNs && before.ctimeNs === after.ctimeNs;
}
function sameStableDirectoryState(before, after) {
  return after.isDirectory() && sameFileIdentity(before, after) && before.mtimeNs === after.mtimeNs && before.ctimeNs === after.ctimeNs;
}
async function captureGhostContentRootIdentity(rootDir2) {
  const lexicalBefore = await import_node_fs.default.promises.lstat(rootDir2, { bigint: true });
  if (lexicalBefore.isSymbolicLink() || !lexicalBefore.isDirectory()) {
    throw new Error(`ghost content root is not a real directory: ${rootDir2}`);
  }
  const realPath = await import_node_fs.default.promises.realpath(rootDir2);
  const [pathStat, realStat, lexicalAfter] = await Promise.all([
    import_node_fs.default.promises.stat(rootDir2, { bigint: true }),
    import_node_fs.default.promises.stat(realPath, { bigint: true }),
    import_node_fs.default.promises.lstat(rootDir2, { bigint: true })
  ]);
  if (!sameStableDirectoryState(lexicalBefore, pathStat) || !sameStableDirectoryState(pathStat, realStat) || !sameStableDirectoryState(pathStat, lexicalAfter) || lexicalAfter.isSymbolicLink()) {
    throw new Error(`ghost content root is not a stable directory: ${rootDir2}`);
  }
  return {
    realPath,
    dev: realStat.dev,
    ino: realStat.ino,
    mtimeNs: realStat.mtimeNs,
    ctimeNs: realStat.ctimeNs
  };
}
async function assertGhostContentRootIdentity(rootDir2, expected) {
  let current;
  try {
    current = await captureGhostContentRootIdentity(rootDir2);
  } catch (error) {
    throw new Error(`ghost content root changed while reading: ${rootDir2}`, { cause: error });
  }
  if (current.realPath !== expected.realPath || current.dev !== expected.dev || current.ino !== expected.ino || current.mtimeNs !== expected.mtimeNs || current.ctimeNs !== expected.ctimeNs) {
    throw new Error(`ghost content root changed while reading: ${rootDir2}`);
  }
}
async function captureGhostContentAncestorIdentities(rootRealPath, relativePath) {
  const identities = [];
  const segments = relativePath.split("/").slice(0, -1);
  let absolutePath = rootRealPath;
  let currentRelativePath = "";
  for (const segment of segments) {
    absolutePath = import_node_path2.default.join(absolutePath, segment);
    currentRelativePath = currentRelativePath ? `${currentRelativePath}/${segment}` : segment;
    const stat = await import_node_fs.default.promises.lstat(absolutePath, { bigint: true });
    if (stat.isSymbolicLink() || !stat.isDirectory()) {
      throw new Error(`ghost content ancestor changed into a link: ${currentRelativePath}`);
    }
    identities.push({
      relativePath: currentRelativePath,
      dev: stat.dev,
      ino: stat.ino,
      mtimeNs: stat.mtimeNs,
      ctimeNs: stat.ctimeNs
    });
  }
  return identities;
}
function assertGhostContentAncestorIdentities(expected, current) {
  if (current.length !== expected.length || current.some(
    (identity, index) => identity.relativePath !== expected[index]?.relativePath || identity.dev !== expected[index]?.dev || identity.ino !== expected[index]?.ino || identity.mtimeNs !== expected[index]?.mtimeNs || identity.ctimeNs !== expected[index]?.ctimeNs
  )) {
    throw new Error("ghost content ancestor changed while reading");
  }
}
async function collectGhostContentFiles(rootDir2, options2) {
  const rootIdentity = await captureGhostContentRootIdentity(rootDir2);
  const files = [];
  let hasNonRegularEntry = false;
  const collect = async (relativeDir) => {
    const absoluteDir = import_node_path2.default.join(rootIdentity.realPath, ...relativeDir.split("/").filter(Boolean));
    for (const entry of await import_node_fs.default.promises.readdir(absoluteDir, { withFileTypes: true })) {
      const isDotEntry = entry.name.startsWith(".");
      const relativePath = relativeDir ? `${relativeDir}/${entry.name}` : entry.name;
      const kind = await classifyGhostDirEntry(import_node_path2.default.join(absoluteDir, entry.name));
      if (!isRegularGhostDirEntry(kind)) {
        if (options2.nonRegular === "throw") {
          throw new Error(
            `${options2.label} rejects ${kind === "link" ? "link" : "non-regular"} entry: ${relativePath}`
          );
        }
        hasNonRegularEntry = true;
        continue;
      }
      if (isDotEntry && options2.dotEntries === "skip") continue;
      if (kind === "directory") {
        await collect(relativePath);
      } else {
        files.push(relativePath);
      }
    }
  };
  await collect("");
  await assertGhostContentRootIdentity(rootDir2, rootIdentity);
  files.sort();
  return { files, hasNonRegularEntry, rootIdentity };
}
function hashGhostContentBuffers(files) {
  const hash = import_node_crypto2.default.createHash("sha256");
  hash.update("cindy-ghost-content-v2\0");
  const sorted = [...files].sort((a, b) => a.path < b.path ? -1 : a.path > b.path ? 1 : 0);
  for (const file of sorted) {
    const pathBytes = Buffer.from(file.path, "utf8");
    const pathLength = Buffer.allocUnsafe(8);
    pathLength.writeBigUInt64BE(BigInt(pathBytes.byteLength));
    hash.update(pathLength);
    hash.update(pathBytes);
    hash.update(import_node_crypto2.default.createHash("sha256").update(file.bytes).digest());
  }
  return hash.digest("hex");
}
async function hashGhostContentFiles(rootDir2, files, collectedRootIdentity) {
  const rootIdentity = collectedRootIdentity ?? await captureGhostContentRootIdentity(rootDir2);
  await assertGhostContentRootIdentity(rootDir2, rootIdentity);
  const hash = import_node_crypto2.default.createHash("sha256");
  hash.update("cindy-ghost-content-v2\0");
  for (const relativePath of files) {
    await assertGhostContentRootIdentity(rootDir2, rootIdentity);
    const pathBytes = Buffer.from(relativePath, "utf8");
    const pathLength = Buffer.allocUnsafe(8);
    pathLength.writeBigUInt64BE(BigInt(pathBytes.byteLength));
    hash.update(pathLength);
    hash.update(pathBytes);
    const fileHash = import_node_crypto2.default.createHash("sha256");
    const filePath = import_node_path2.default.join(rootIdentity.realPath, ...relativePath.split("/"));
    const ancestorIdentities = await captureGhostContentAncestorIdentities(
      rootIdentity.realPath,
      relativePath
    );
    const noFollow = import_node_fs.default.constants.O_NOFOLLOW ?? null;
    const handle = await import_node_fs.default.promises.open(
      filePath,
      import_node_fs.default.constants.O_RDONLY | (import_node_fs.default.constants.O_NONBLOCK ?? 0) | (noFollow ?? 0)
    );
    let handleStat;
    let initialRealFilePath;
    try {
      handleStat = await handle.stat({ bigint: true });
      if (!handleStat.isFile()) {
        throw new Error(`ghost content entry is not a regular file: ${relativePath}`);
      }
      assertGhostContentAncestorIdentities(
        ancestorIdentities,
        await captureGhostContentAncestorIdentities(rootIdentity.realPath, relativePath)
      );
      if (noFollow === null) {
        const linkStat = await import_node_fs.default.promises.lstat(filePath, { bigint: true });
        if (linkStat.isSymbolicLink() || !sameFileIdentity(linkStat, handleStat)) {
          throw new Error(`ghost content entry changed into a link: ${relativePath}`);
        }
      }
      const [pathStat, realFilePath] = await Promise.all([
        import_node_fs.default.promises.stat(filePath, { bigint: true }),
        import_node_fs.default.promises.realpath(filePath)
      ]);
      initialRealFilePath = realFilePath;
      const relativeRealPath = import_node_path2.default.relative(rootIdentity.realPath, realFilePath);
      const outsideRoot = relativeRealPath === ".." || relativeRealPath.startsWith(`..${import_node_path2.default.sep}`) || import_node_path2.default.isAbsolute(relativeRealPath);
      if (!sameFileIdentity(pathStat, handleStat) || outsideRoot) {
        throw new Error(`ghost content entry escaped its root: ${relativePath}`);
      }
      const stream = handle.createReadStream({ autoClose: false });
      for await (const chunk of stream) fileHash.update(chunk);
      const afterReadStat = await handle.stat({ bigint: true });
      if (!sameStableFileState(handleStat, afterReadStat)) {
        throw new Error(`ghost content entry changed while reading: ${relativePath}`);
      }
    } finally {
      await handle.close();
    }
    const fileDigest = fileHash.digest();
    const verificationHandle = await import_node_fs.default.promises.open(
      filePath,
      import_node_fs.default.constants.O_RDONLY | (import_node_fs.default.constants.O_NONBLOCK ?? 0) | (noFollow ?? 0)
    );
    try {
      const verificationStat = await verificationHandle.stat({ bigint: true });
      if (!sameStableFileState(handleStat, verificationStat)) {
        throw new Error(`ghost content entry changed while reading: ${relativePath}`);
      }
      const verificationFileHash = import_node_crypto2.default.createHash("sha256");
      const verificationStream = verificationHandle.createReadStream({ autoClose: false });
      for await (const chunk of verificationStream) verificationFileHash.update(chunk);
      const afterVerificationReadStat = await verificationHandle.stat({ bigint: true });
      if (!sameStableFileState(verificationStat, afterVerificationReadStat)) {
        throw new Error(`ghost content entry changed while reading: ${relativePath}`);
      }
      if (!import_node_crypto2.default.timingSafeEqual(fileDigest, verificationFileHash.digest())) {
        throw new Error(`ghost content entry changed while reading: ${relativePath}`);
      }
      const [afterReadPathStat, afterReadRealFilePath] = await Promise.all([
        import_node_fs.default.promises.lstat(filePath, { bigint: true }),
        import_node_fs.default.promises.realpath(filePath)
      ]);
      if (initialRealFilePath === void 0 || afterReadPathStat.isSymbolicLink() || !afterReadPathStat.isFile() || !sameFileIdentity(afterReadPathStat, afterVerificationReadStat) || afterReadRealFilePath !== initialRealFilePath) {
        throw new Error(`ghost content entry path changed while reading: ${relativePath}`);
      }
      if (!sameStableFileState(afterVerificationReadStat, afterReadPathStat)) {
        throw new Error(`ghost content entry changed while reading: ${relativePath}`);
      }
      assertGhostContentAncestorIdentities(
        ancestorIdentities,
        await captureGhostContentAncestorIdentities(rootIdentity.realPath, relativePath)
      );
    } finally {
      await verificationHandle.close();
    }
    hash.update(fileDigest);
  }
  await assertGhostContentRootIdentity(rootDir2, rootIdentity);
  return hash.digest("hex");
}

// apps/desktop/src/main/cindy-brain/GhostManager.ts
init_readBoundedFile();

// apps/desktop/src/main/cindy-brain/skillSlot.ts
var import_gray_matter2 = __toESM(require_gray_matter());

// apps/desktop/src/main/skillhub/frontmatterValidation.ts
var import_gray_matter = __toESM(require_gray_matter());
var isNonEmptyString = (v) => typeof v === "string" && v.trim().length > 0;
var SKILL_RULES = {
  // SKILL.md per Claude Code spec — name + description are the only required
  // fields; the rest are descriptive metadata that the loader tolerates
  // missing.
  name: {
    required: true,
    validate: (v) => isNonEmptyString(v) ? null : "name \u5FC5\u586B,\u4E14\u4E3A\u975E\u7A7A\u5B57\u7B26\u4E32"
  },
  description: {
    required: true,
    validate: (v) => isNonEmptyString(v) ? null : "description \u5FC5\u586B,\u4E14\u4E3A\u975E\u7A7A\u5B57\u7B26\u4E32"
  },
  version: {
    validate: (v) => v == null || typeof v === "string" || typeof v === "number" ? null : "version \u5E94\u4E3A\u5B57\u7B26\u4E32\u6216\u6570\u5B57"
  }
};
var COMMAND_RULES = {
  // Commands are simpler — description is conventional but not strictly
  // required by Claude Code (the body itself is the prompt).
  description: {
    validate: (v) => v == null || isNonEmptyString(v) ? null : "description \u5E94\u4E3A\u975E\u7A7A\u5B57\u7B26\u4E32(\u6216\u7701\u7565)"
  }
};
function rulesFor(kind) {
  if (kind === "skill") return SKILL_RULES;
  if (kind === "command") return COMMAND_RULES;
  return null;
}
function validateParsed(frontmatter, kind) {
  const rules = rulesFor(kind);
  if (!rules) return [];
  const issues = [];
  const fm = frontmatter ?? {};
  for (const [field, rule] of Object.entries(rules)) {
    const value = fm[field];
    if (rule.required && (value == null || value === "")) {
      issues.push({ field, message: `${field} \u5FC5\u586B` });
      continue;
    }
    if (rule.validate) {
      const msg = rule.validate(value);
      if (msg) issues.push({ field, message: msg });
    }
  }
  return issues;
}
function parseAndValidateFrontmatter(content, kind) {
  let data = null;
  try {
    data = (0, import_gray_matter.default)(content).data ?? null;
  } catch {
    return { issues: [] };
  }
  return { issues: validateParsed(data, kind) };
}

// apps/desktop/src/main/cindy-brain/skillSlot.ts
function checkSkillMdConsistency(content, item) {
  let data;
  try {
    data = (0, import_gray_matter2.default)(content).data ?? {};
  } catch {
    return "SKILL.md frontmatter \u65E0\u6CD5\u89E3\u6790(YAML \u8BED\u6CD5\u9519\u8BEF)";
  }
  const { issues } = parseAndValidateFrontmatter(content, "skill");
  if (issues.length > 0) {
    return `SKILL.md frontmatter \u4E0D\u5408\u683C:${issues.map((i) => `${i.field}:${i.message}`).join("; ")}`;
  }
  const fmName = typeof data.name === "string" ? data.name.trim() : "";
  const fmDescription = typeof data.description === "string" ? data.description.trim() : "";
  if (fmName !== item.name) {
    return `SKILL.md frontmatter name ${JSON.stringify(fmName)} \u4E0E\u6E05\u5355\u58F0\u660E ${JSON.stringify(item.name)} \u4E0D\u4E00\u81F4(\u63D2\u4EF6\u8BE6\u60C5\u5C55\u793A\u7684\u5FC5\u987B\u5C31\u662F Agent \u8BFB\u5230\u7684)`;
  }
  if (fmDescription !== item.description) {
    return "SKILL.md frontmatter description \u4E0E\u6E05\u5355\u58F0\u660E\u4E0D\u4E00\u81F4(\u63D2\u4EF6\u8BE6\u60C5\u5C55\u793A\u7684\u5FC5\u987B\u5C31\u662F Agent \u8BFB\u5230\u7684)";
  }
  return null;
}

// apps/desktop/src/main/cindy-brain/ghostInstallReceipt.ts
var import_node_crypto3 = __toESM(require("node:crypto"));
var import_node_fs3 = __toESM(require("node:fs"));
var import_node_path5 = __toESM(require("node:path"));
init_readBoundedFile();

// apps/desktop/src/main/cindy-brain/ghostSnapshotCapability.ts
var import_electron = __toESM(require_electron_stub());
var import_node_path4 = __toESM(require("node:path"));
function mutateGhostSnapshotWithStableParent(request) {
  const child = import_electron.utilityProcess.fork(import_node_path4.default.join(__dirname, "ghostSnapshotWorkerProcess.js"), [], {
    cwd: request.parentDir,
    stdio: ["ignore", "ignore", "pipe"],
    serviceName: "cindy-ghost-snapshot"
  });
  return new Promise((resolve, reject) => {
    let settled = false;
    let ready = false;
    const finish = (error) => {
      if (settled) return;
      settled = true;
      clearTimeout(timer);
      child.kill();
      error ? reject(error) : resolve();
    };
    const timer = setTimeout(() => finish(new Error("ghost snapshot worker timed out")), 3e4);
    timer.unref?.();
    child.on("message", (message) => {
      if (!message || typeof message !== "object") return;
      const value = message;
      if (!ready && value.type === "ready") {
        ready = true;
        const { parentDir: _parentDir, ...workerRequest } = request;
        child.postMessage({ type: "mutate", request: workerRequest });
      } else if (value.ok === true) finish();
      else if (value.ok === false) finish(new Error(String(value.message ?? "ghost snapshot worker failed")));
    });
    child.on("error", (error) => finish(new Error(String(error))));
    child.on("exit", (code) => {
      if (!settled) finish(new Error(`ghost snapshot worker exited (${code})`));
    });
  });
}

// apps/desktop/src/main/cindy-brain/ghostInstallReceipt.ts
var RECEIPT_SCHEMA_VERSION = 2;
var MAX_RECEIPT_BYTES = 2 * 1024 * 1024;
var MAX_PENDING_MUTATION_BYTES = 64 * 1024;
var MAX_ICON_DATA_URL_BYTES = 768 * 1024;
var MAX_MIGRATION_LEDGER_BYTES = 64 * 1024;
var ICON_DATA_URL_RE = /^data:image\/(?:png|jpeg|webp|gif);base64,[A-Za-z0-9+/]+={0,2}$/;
var GhostInstallReceiptStore = class {
  constructor(getRootDir, mutateSnapshot = mutateGhostSnapshotWithStableParent) {
    this.getRootDir = getRootDir;
    this.mutateSnapshot = mutateSnapshot;
  }
  getRootDir;
  mutateSnapshot;
  rootDir() {
    return import_node_path5.default.resolve(this.getRootDir());
  }
  realRootDirSync() {
    return import_node_fs3.default.realpathSync(this.rootDir());
  }
  read(id) {
    const result = this.readForRecovery(id);
    if (result.state === "approved") return result;
    if (result.state === "missing") return { state: "legacy-unapproved" };
    return { state: "invalid", reason: result.reason };
  }
  /** Recovery must not confuse transient state-root IO with missing/corrupt approval state. */
  readForRecovery(id) {
    const receiptPath = this.receiptPath(id);
    let bytes;
    try {
      bytes = readBoundedFileNoFollowSync(receiptPath, MAX_RECEIPT_BYTES, {
        containWithin: this.realRootDirSync()
      });
    } catch (error) {
      if (error.code === "ENOENT") {
        return { state: "missing" };
      }
      return {
        state: "unreadable",
        reason: error instanceof Error ? error.message : String(error)
      };
    }
    if (!bytes) {
      return { state: "invalid", reason: "receipt \u4E0D\u662F\u666E\u901A\u6587\u4EF6\u6216\u8D85\u8FC7\u5927\u5C0F\u4E0A\u9650" };
    }
    const text = bytes.toString("utf8");
    let parsed;
    try {
      parsed = JSON.parse(text);
    } catch (error) {
      return { state: "invalid", reason: error instanceof Error ? error.message : String(error) };
    }
    const validated = validateReceipt(parsed, id);
    return validated.ok ? { state: "approved", receipt: validated.receipt } : { state: "invalid", reason: validated.reason };
  }
  /**
   * 写入批准事实。`skillSourceDir` 是快照缺失时的取字节来源:装入/更新传新
   * 内容目录，纯状态改写(启停)传当前安装目录即可自愈。
   *
   * `requireSkillSnapshot: false` 用于**必须成功的收敛方向**(停用):快照
   * 已被外部删掉时不该把插件卡在"既不能用也不能关"的状态，此时按无 skill
   * 落链继续写批准事实，由对账撤掉链接。
   */
  async write(receipt, options2 = {}) {
    const validated = validateReceipt(receipt, receipt.id);
    if (!validated.ok)
      throw new Error(`refusing to write invalid ghost receipt: ${validated.reason}`);
    const root = this.rootDir();
    await import_node_fs3.default.promises.mkdir(root, { recursive: true });
    try {
      await this.ensureSkillSnapshot(receipt, options2.skillSourceDir);
    } catch (error) {
      if (options2.requireSkillSnapshot !== false) throw error;
    }
    if (!this.hasMigrationLedger()) {
      await this.ensureMigrationMarker(receipt.id);
    }
    const target = this.receiptPath(receipt.id);
    const temp = import_node_path5.default.join(
      root,
      `.${receipt.id}-${process.pid}-${import_node_crypto3.default.randomBytes(6).toString("hex")}.tmp`
    );
    const persistedReceipt = {
      ...validated.receipt,
      manifest: ghostManifestToAuthorFormat(validated.receipt.manifest)
    };
    try {
      await import_node_fs3.default.promises.writeFile(temp, `${JSON.stringify(persistedReceipt, null, 2)}
`, {
        encoding: "utf8",
        flag: "wx",
        mode: 384
      });
      await import_node_fs3.default.promises.rename(temp, target);
    } catch (error) {
      throw error;
    } finally {
      await import_node_fs3.default.promises.rm(temp, { force: true }).catch(() => void 0);
    }
    await this.pruneStaleSkillSnapshots(receipt);
  }
  async remove(id) {
    const receiptPath = this.receiptPath(id);
    const receiptKind = await classifyCleanupEntry(receiptPath);
    if (receiptKind === "missing") {
    } else if (receiptKind !== "file") {
      throw new Error(`ghost receipt path is not a regular file: ${receiptPath}`);
    } else {
      await import_node_fs3.default.promises.rm(receiptPath, { force: true });
    }
    const snapshotPath = await this.assertManagedSnapshotParent(id, { createMissing: false });
    if (!snapshotPath) return;
    const parentDir = import_node_path5.default.join(this.rootDir(), "skill-snapshots");
    const parentStats = await import_node_fs3.default.promises.lstat(parentDir, { bigint: true });
    await this.mutateSnapshot({
      parentDir,
      expectedParent: {
        realPath: await import_node_fs3.default.promises.realpath(parentDir),
        dev: parentStats.dev,
        ino: parentStats.ino
      },
      operation: "remove",
      targetName: id
    });
  }
  /** `remove` 的同步版:启动恢复(构造期同步)收尾未完成卸载用,判据同 `remove`。 */
  removeSync(id) {
    const receiptPath = this.receiptPath(id);
    const receiptKind = classifyCleanupEntrySync(receiptPath);
    if (receiptKind === "missing") {
    } else if (receiptKind !== "file") {
      throw new Error(`ghost receipt path is not a regular file: ${receiptPath}`);
    } else {
      import_node_fs3.default.rmSync(receiptPath, { force: true });
    }
    const snapshotPath = this.assertManagedSnapshotParentSync(id, { createMissing: false });
    if (!snapshotPath) return;
  }
  skillSnapshotRoot(id, revision) {
    if (!isValidGhostId2(id) || !isRevision(revision)) {
      throw new Error("invalid ghost skill snapshot identity");
    }
    return import_node_path5.default.join(this.rootDir(), "skill-snapshots", id, revision);
  }
  /**
   * 快照父路径(`<状态根>/skill-snapshots/<id>`)的逐段遏制断言。
   *
   * 任何 readdir / mkdir / rename / rm 之前都必须过这道:父段被同权限进程换成
   * junction/链接时,这些操作会**穿透**到状态根之外 —— 把 §7 登记的「状态根可写→
   * 可伪造批准」升级成「任意外部目录删除/写入」,是一次真实的权限升级(已在
   * Windows 上实测复现)。判据与 ghostContentTree 同源:逐段 lstat、链接一律拒,
   * 最后再 realpath 对账"物理路径仍在状态根内"(状态根自身的祖先允许是链接 ——
   * relocated home 场景,所以以 realpath(root) 为基准而不是词法路径)。
   *
   * `createMissing`:装入/更新路径按需补建缺失段;prune/remove 等回收路径不建,
   * 段缺失(ENOENT)返回 null 表示"没有可回收对象"。段存在但不是真目录一律抛错,
   * 由调用方决定 fail closed 还是跳过 —— 绝不带着可疑父段继续动盘。
   */
  async assertManagedSnapshotParent(id, opts) {
    if (!isValidGhostId2(id)) throw new Error("invalid ghost id for snapshot path");
    const root = this.rootDir();
    let current = root;
    for (const segment of ["skill-snapshots", id]) {
      current = import_node_path5.default.join(current, segment);
      let kind;
      try {
        kind = await classifyGhostDirEntry(current);
      } catch (error) {
        if (error.code !== "ENOENT") throw error;
        kind = null;
      }
      if (kind === null) {
        if (!opts.createMissing) return null;
        await import_node_fs3.default.promises.mkdir(current);
        continue;
      }
      if (kind !== "directory") {
        throw new Error(
          `skill snapshot path segment is not a real directory: ${segment} (${kind})`
        );
      }
    }
    const [realRoot, realParent] = await Promise.all([
      import_node_fs3.default.promises.realpath(root),
      import_node_fs3.default.promises.realpath(current)
    ]);
    if (!isPathInsideDir(realRoot, realParent)) {
      throw new Error("skill snapshot parent escaped the approval state root");
    }
    return current;
  }
  assertManagedSnapshotParentSync(id, opts) {
    if (!isValidGhostId2(id)) throw new Error("invalid ghost id for snapshot path");
    const root = this.rootDir();
    let current = root;
    for (const segment of ["skill-snapshots", id]) {
      current = import_node_path5.default.join(current, segment);
      let kind;
      try {
        kind = classifyGhostDirEntrySync(current);
      } catch (error) {
        if (error.code !== "ENOENT") throw error;
        kind = null;
      }
      if (kind === null) {
        if (!opts.createMissing) return null;
        import_node_fs3.default.mkdirSync(current);
        continue;
      }
      if (kind !== "directory") {
        throw new Error(
          `skill snapshot path segment is not a real directory: ${segment} (${kind})`
        );
      }
    }
    const realRoot = import_node_fs3.default.realpathSync(root);
    const realParent = import_node_fs3.default.realpathSync(current);
    if (!isPathInsideDir(realRoot, realParent)) {
      throw new Error("skill snapshot parent escaped the approval state root");
    }
    return current;
  }
  /** 迁移台账路径。点开头,不会与任何合法 ghost id 的 `<id>.json` receipt 撞名。 */
  migrationLedgerPath() {
    return import_node_path5.default.join(this.rootDir(), ".legacy-migration.json");
  }
  /** 读迁移台账(缺失/损坏返回 null;追加 id 时用,判定门只看 hasMigrationLedger)。 */
  readMigrationLedger() {
    try {
      const bytes = readBoundedFileNoFollowSync(
        this.migrationLedgerPath(),
        MAX_MIGRATION_LEDGER_BYTES,
        { containWithin: this.realRootDirSync() }
      );
      if (bytes === null) return null;
      const raw = JSON.parse(
        bytes.toString("utf8")
      );
      if (!raw || raw.version !== 1 || typeof raw.migratedAt !== "string" || !isValidUniqueGhostIdArray(raw.migratedIds)) {
        return null;
      }
      if (raw.state !== void 0 && raw.state !== "in-progress" && raw.state !== "completed") {
        return null;
      }
      if (raw.failedIds !== void 0 && !isValidUniqueGhostIdArray(raw.failedIds)) return null;
      if (raw.state === "in-progress" && (!isValidUniqueGhostIdArray(raw.pendingIds) || raw.pendingIds.length === 0)) {
        return null;
      }
      if (raw.state !== "in-progress" && raw.pendingIds !== void 0) return null;
      if (raw.recoveryApprovalProjectionSha256ById !== void 0 && (typeof raw.recoveryApprovalProjectionSha256ById !== "object" || raw.recoveryApprovalProjectionSha256ById === null || Array.isArray(raw.recoveryApprovalProjectionSha256ById) || Object.keys(raw.recoveryApprovalProjectionSha256ById).some(
        (k) => !isValidGhostId2(k) || !/^[a-f0-9]{64}$/.test(raw.recoveryApprovalProjectionSha256ById[k])
      ))) {
        return null;
      }
      return raw;
    } catch {
      return null;
    }
  }
  /**
   * 迁移门是否已关死。三种情况:
   * - 无台账 → 开(首轮迁移 / legacy 恢复流程的留门);
   * - 台账 `in-progress` → 开(上一轮中途崩溃,按 pendingIds 续跑);
   * - 台账 `completed` / 无 state(旧格式)/ **存在但读不出** → 关。
   * 损坏台账按"关"处理是刻意的保守方向:台账由原子 temp+rename 写出,自然损坏面
   * 趋近于零;能改坏它的进程与 §7「可直接伪造合法 receipt」同类,把门放开反而是
   * 给这类进程送一条重铸授权的路。调用方发现"存在但读不出"应记 error 日志。
   */
  migrationDoorClosed() {
    if (!this.hasMigrationLedger()) return false;
    const ledger = this.readMigrationLedger();
    return ledger === null || ledger.state !== "in-progress";
  }
  /** 是否已跑过一轮 legacy 迁移(全局一次性门;存在即按"已跑"处理,宁可不再迁)。 */
  hasMigrationLedger() {
    try {
      import_node_fs3.default.lstatSync(this.migrationLedgerPath());
      return true;
    } catch (error) {
      return error.code !== "ENOENT";
    }
  }
  /**
   * Per-id migration marker path. 与 receipt 同位（状态根内）,coordinator 扫描
   * 时用它区分"安装了 receipt 之前就是 legacy"与"新模型安装后 receipt 被删"。
   */
  migrationMarkerPath(id) {
    if (!isValidGhostId2(id)) throw new Error("invalid ghost id for migration marker path");
    return import_node_path5.default.join(this.rootDir(), `.migrated-${id}`);
  }
  /**
   * 确保 per-id 迁移标记存在。receipt 初次落账时调用；标记是零字节普通文件,
   * 在 migration ledger 按 completed 关闭前钉住"此 id 已进入新模型"。
   */
  async ensureMigrationMarker(id) {
    const initialState = this.migrationMarkerState(id);
    if (initialState.state === "present") return false;
    if (initialState.state === "unavailable") throw initialState.error;
    const root = this.rootDir();
    await import_node_fs3.default.promises.mkdir(root, { recursive: true });
    const target = this.migrationMarkerPath(id);
    const temp = import_node_path5.default.join(root, `.migrated-${id}-${process.pid}-${import_node_crypto3.default.randomBytes(4).toString("hex")}.tmp`);
    try {
      await import_node_fs3.default.promises.writeFile(temp, "", { encoding: "utf8", flag: "wx", mode: 384 });
      try {
        await import_node_fs3.default.promises.link(temp, target);
      } catch (error) {
        if (error.code === "EEXIST") {
          return false;
        }
        if (error.code === "EXDEV") {
          const stateBeforeRename = this.migrationMarkerState(id);
          if (stateBeforeRename.state === "present") return false;
          if (stateBeforeRename.state === "unavailable") throw stateBeforeRename.error;
          await import_node_fs3.default.promises.rename(temp, target);
        } else {
          throw error;
        }
      }
      return true;
    } catch (error) {
      if (error.code === "EEXIST") {
        return false;
      }
      throw error;
    } finally {
      await import_node_fs3.default.promises.rm(temp, { force: true }).catch(() => void 0);
    }
  }
  /** 是否存在 per-id 迁移标记(表明此 id 是通过新模型安装,而非 legacy)。 */
  hasMigrationMarker(id) {
    return this.migrationMarkerState(id).state !== "missing";
  }
  migrationMarkerState(id) {
    try {
      import_node_fs3.default.lstatSync(this.migrationMarkerPath(id));
      return { state: "present" };
    } catch (error) {
      if (error.code === "ENOENT") {
        return { state: "missing" };
      }
      return { state: "unavailable", error };
    }
  }
  /** 回滚 per-id 迁移标记(receipt 写入失败时调用)。 */
  async removeMigrationMarker(id) {
    await import_node_fs3.default.promises.rm(this.migrationMarkerPath(id), { force: true });
  }
  async writeMigrationLedger(ledger) {
    const root = this.rootDir();
    await import_node_fs3.default.promises.mkdir(root, { recursive: true });
    const target = this.migrationLedgerPath();
    const temp = import_node_path5.default.join(
      root,
      `.legacy-migration-${process.pid}-${import_node_crypto3.default.randomBytes(6).toString("hex")}.tmp`
    );
    try {
      await import_node_fs3.default.promises.writeFile(temp, `${JSON.stringify(ledger, null, 2)}
`, {
        encoding: "utf8",
        flag: "wx",
        mode: 384
      });
      await import_node_fs3.default.promises.rename(temp, target);
    } finally {
      await import_node_fs3.default.promises.rm(temp, { force: true }).catch(() => void 0);
    }
  }
  /** 事务标记路径。点开头,不与 `<id>.json` receipt 或 `.legacy-migration.json` 撞名。 */
  pendingMutationPath(id) {
    if (!isValidGhostId2(id)) throw new Error("invalid ghost id for pending mutation path");
    return import_node_path5.default.join(this.rootDir(), `.pending-${id}.json`);
  }
  /** 事务开始:装入/更新 rename 动盘**之前**落标记(原子 temp+rename;re-begin 覆盖)。 */
  async writePendingMutation(id, entry) {
    const root = this.rootDir();
    await import_node_fs3.default.promises.mkdir(root, { recursive: true });
    const target = this.pendingMutationPath(id);
    const temp = import_node_path5.default.join(
      root,
      `.pending-${id}-${process.pid}-${import_node_crypto3.default.randomBytes(6).toString("hex")}.tmp`
    );
    try {
      await import_node_fs3.default.promises.writeFile(temp, `${JSON.stringify({ version: 1, id, ...entry })}
`, {
        encoding: "utf8",
        flag: "wx",
        mode: 384
      });
      await import_node_fs3.default.promises.rename(temp, target);
    } finally {
      await import_node_fs3.default.promises.rm(temp, { force: true }).catch(() => void 0);
    }
  }
  /** 事务提交:receipt 写成功后清标记。删不动只多留一份标记,下轮恢复幂等重判。 */
  async clearPendingMutation(id) {
    await import_node_fs3.default.promises.rm(this.pendingMutationPath(id), { force: true });
  }
  /** 同步清标记(启动恢复在构造期同步跑,不能留 fire-and-forget 的异步删除)。 */
  clearPendingMutationSync(id) {
    import_node_fs3.default.rmSync(this.pendingMutationPath(id), { force: true });
  }
  readPendingMutationSync(id) {
    let raw;
    const markerPath = this.pendingMutationPath(id);
    let bytes;
    try {
      bytes = readBoundedFileNoFollowSync(markerPath, MAX_PENDING_MUTATION_BYTES, {
        containWithin: this.realRootDirSync()
      });
    } catch (error) {
      if (error.code === "ENOENT") return { state: "missing" };
      return {
        state: "unreadable",
        reason: error instanceof Error ? error.message : String(error)
      };
    }
    if (!bytes) {
      return { state: "invalid", reason: "journal is not a regular file or exceeds size limit" };
    }
    const text = bytes.toString("utf8");
    let parsed;
    try {
      parsed = JSON.parse(text);
    } catch (error) {
      return { state: "invalid", reason: error instanceof Error ? error.message : String(error) };
    }
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
      return { state: "invalid", reason: "journal must be an object" };
    }
    raw = parsed;
    if (raw.version !== 1 || raw.id !== id) {
      return { state: "invalid", reason: "journal version/id mismatch" };
    }
    if (raw.kind === "uninstall") {
      if (raw.builtinTombstone !== void 0 && typeof raw.builtinTombstone !== "boolean") {
        return { state: "invalid", reason: "journal builtinTombstone is invalid" };
      }
      return {
        state: "valid",
        mutation: {
          kind: "uninstall",
          ...raw.builtinTombstone === true ? { builtinTombstone: true } : {}
        }
      };
    }
    if (typeof raw.packageSha256 !== "string" || !/^[a-f0-9]{64}$/.test(raw.packageSha256)) {
      return { state: "invalid", reason: "journal packageSha256 is invalid" };
    }
    if (raw.kind === "install") {
      if (raw.receiptRevision !== void 0 && (typeof raw.receiptRevision !== "string" || !isRevision(raw.receiptRevision))) {
        return { state: "invalid", reason: "journal receiptRevision is invalid" };
      }
      if (raw.clearBuiltinTombstone !== void 0 && typeof raw.clearBuiltinTombstone !== "boolean") {
        return { state: "invalid", reason: "journal clearBuiltinTombstone is invalid" };
      }
      return {
        state: "valid",
        mutation: {
          kind: "install",
          packageSha256: raw.packageSha256,
          ...typeof raw.receiptRevision === "string" ? { receiptRevision: raw.receiptRevision } : {},
          ...raw.clearBuiltinTombstone === true ? { clearBuiltinTombstone: true } : {}
        }
      };
    }
    if (raw.kind === "update" && typeof raw.backupDirName === "string" && isManagedBackupDirName(id, raw.backupDirName)) {
      const phase = raw.phase === void 0 ? void 0 : raw.phase;
      if (phase !== void 0 && phase !== "prepared" && phase !== "backed-up" && phase !== "published") {
        return { state: "invalid", reason: "journal update phase is invalid" };
      }
      const oldPackageSha256 = raw.oldPackageSha256;
      const receiptRevision = raw.receiptRevision;
      if (receiptRevision !== void 0 && (typeof receiptRevision !== "string" || !isRevision(receiptRevision))) {
        return { state: "invalid", reason: "journal receiptRevision is invalid" };
      }
      if (oldPackageSha256 !== void 0 && (typeof oldPackageSha256 !== "string" || !/^[a-f0-9]{64}$/.test(oldPackageSha256))) {
        return { state: "invalid", reason: "journal oldPackageSha256 is invalid" };
      }
      return {
        state: "valid",
        mutation: {
          kind: "update",
          packageSha256: raw.packageSha256,
          backupDirName: raw.backupDirName,
          ...receiptRevision !== void 0 ? { receiptRevision } : {},
          ...phase !== void 0 ? { phase } : {},
          ...oldPackageSha256 !== void 0 ? { oldPackageSha256 } : {}
        }
      };
    }
    return { state: "invalid", reason: "journal kind/backupDirName is invalid" };
  }
  /** 状态根里所有未清的事务标记 id(启动恢复用)。 */
  listPendingMutationIdsSync() {
    let names;
    try {
      names = import_node_fs3.default.readdirSync(this.rootDir());
    } catch (error) {
      if (error.code === "ENOENT") {
        return { state: "ok", ids: [], blocked: false };
      }
      return {
        state: "unreadable",
        reason: error instanceof Error ? error.message : String(error)
      };
    }
    const ids = [];
    let blocked = false;
    for (const name of names) {
      const match = /^\.pending-(.+)\.json$/.exec(name);
      if (!match) continue;
      if (isValidGhostId2(match[1])) ids.push(match[1]);
      else blocked = true;
    }
    return { state: "ok", ids, blocked };
  }
  receiptPath(id) {
    if (!isValidGhostId2(id)) throw new Error("invalid ghost id for receipt path");
    return import_node_path5.default.join(this.rootDir(), `${id}.json`);
  }
  async ensureSkillSnapshot(receipt, skillSourceDir) {
    const items = receipt.manifest.skill?.items ?? [];
    if (items.length === 0) return;
    const snapshotsRoot = import_node_path5.default.join(this.rootDir(), "skill-snapshots");
    try {
      await import_node_fs3.default.promises.mkdir(snapshotsRoot, { recursive: false });
    } catch (error) {
      if (error.code !== "EEXIST") throw error;
    }
    const rootStats = await import_node_fs3.default.promises.lstat(snapshotsRoot, { bigint: true });
    if (!rootStats.isDirectory() || rootStats.isSymbolicLink()) throw new Error("skill snapshot root unavailable");
    await this.mutateSnapshot({
      parentDir: snapshotsRoot,
      expectedParent: {
        realPath: await import_node_fs3.default.promises.realpath(snapshotsRoot),
        dev: rootStats.dev,
        ino: rootStats.ino
      },
      operation: "ensure",
      targetName: `${receipt.id}/${receipt.revision}`,
      receipt,
      ...skillSourceDir ? { sourceDir: skillSourceDir } : {}
    });
  }
  /**
   * 快照目录里的字节是否仍等于 receipt 钉住的批准指纹。
   *
   * 三处调用共用同一判据(接受既有快照 / 复制后发布前 / 发布后复核) —— 这类判定散落
   * 多处再各写一遍,就是本 PR 前几轮反复出问题的成因。读不动或含非普通条目一律按
   * 不匹配处理:调用方对"不匹配"的收敛动作都是删掉重建或拒绝,始终 fail closed。
   */
  async skillSnapshotMatchesReceipt(receipt, snapshotDir) {
    if (await classifyGhostDirEntry(snapshotDir).catch(() => null) !== "directory") return false;
    const actual = await hashApprovedSkillContent(receipt.manifest, snapshotDir).catch(() => null);
    if (!actual) return false;
    if (await classifyGhostDirEntry(snapshotDir).catch(() => null) !== "directory") return false;
    return (receipt.manifest.skill?.items ?? []).every(
      (item) => actual[item.dir] === receipt.skillContentSha256[item.dir]
    );
  }
  /**
   * 回收同一插件下非当前 revision 的技能快照与崩溃残留的 `.tmp` 目录。
   *
   * 只在新 receipt 已经原子提交之后跑:此刻旧 revision 已不是批准事实，留着
   * 就是每次更新泄漏一份完整拷贝。共享技能根里指向旧 revision 的链接会因此
   * 短暂断链，直到下一轮对账重指——对越出沙箱的 skill 能力来说，短暂"技能不可
   * 用"是正确的收敛方向，留着旧批准版本继续生效不是。
   *
   * best-effort:批准事实已经落盘，回收失败只记为待清理状态，不回滚安装。
   */
  async pruneStaleSkillSnapshots(receipt) {
    void receipt;
    return;
  }
};
function isValidUniqueGhostIdArray(value) {
  return Array.isArray(value) && value.every((id) => isValidGhostId2(id)) && new Set(value).size === value.length;
}
function isManagedBackupDirName(id, name) {
  return new RegExp(`^\\.cindy-updating-${escapeRegExp(id)}-[0-9a-f]{8}$`).test(name);
}
function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
async function classifyCleanupEntry(absPath) {
  try {
    return await classifyGhostDirEntry(absPath);
  } catch (error) {
    if (error.code === "ENOENT") return "missing";
    throw error;
  }
}
function classifyCleanupEntrySync(absPath) {
  try {
    return classifyGhostDirEntrySync(absPath);
  } catch (error) {
    if (error.code === "ENOENT") return "missing";
    throw error;
  }
}
function readLegacyInstallTrust(dir) {
  const file = import_node_path5.default.join(dir, ".cindy-trust.json");
  try {
    const realDir = import_node_fs3.default.realpathSync(dir);
    const bytes = readBoundedFileNoFollowSync(file, MAX_RECEIPT_BYTES, { containWithin: realDir });
    if (bytes === null) return null;
    try {
      const trust = validateTrust(JSON.parse(bytes.toString("utf8")));
      if (!trust || trust.level === "cindy-official") return null;
      return trust;
    } catch {
      return null;
    }
  } catch (error) {
    if (error.code === "EIO") throw error;
    return null;
  }
}
function createGhostInstallReceipt(input) {
  if (input.installOrigin !== void 0 && !isPersistableInstallOrigin(input.installOrigin)) {
    throw new Error("receipt installOrigin \u4E0D\u5408\u6CD5");
  }
  return {
    schemaVersion: RECEIPT_SCHEMA_VERSION,
    id: input.manifest.id,
    revision: input.revision ?? import_node_crypto3.default.randomUUID(),
    manifest: input.manifest,
    localeResources: input.localeResources,
    enabled: input.enabled,
    trust: input.trust,
    skillContentSha256: input.skillContentSha256,
    ...input.packageSha256 ? { packageSha256: input.packageSha256 } : {},
    ...input.iconDataUrl ? { iconDataUrl: input.iconDataUrl } : {},
    ...input.installOrigin !== void 0 ? { installOrigin: input.installOrigin } : {}
  };
}
var MAX_INSTALL_ORIGIN_CHARS = 64;
var INSTALL_ORIGIN_PATTERN = /^[a-z0-9-]+$/;
function isPersistableInstallOrigin(value) {
  return value.length > 0 && value.length <= MAX_INSTALL_ORIGIN_CHARS && INSTALL_ORIGIN_PATTERN.test(value);
}
function effectiveInstallOrigin(receipt) {
  return receipt.installOrigin === "agent-forge" ? "agent-forge" : "manual";
}
async function hashApprovedSkillContent(manifest, sourceDir) {
  const items = manifest.skill?.items ?? [];
  if (items.length === 0) return {};
  if (!sourceDir) throw new Error("skill content hash requires a source directory");
  const result = {};
  for (const item of items) {
    const itemRoot = await resolveGhostContentPath(sourceDir, item.dir, {
      expect: "directory",
      label: "approved skill"
    });
    const tree = await collectGhostContentFiles(itemRoot, {
      dotEntries: "include",
      nonRegular: "throw",
      label: `approved skill ${item.dir}`
    });
    result[item.dir] = await hashGhostContentFiles(itemRoot, tree.files, tree.rootIdentity);
  }
  return result;
}
function validateReceipt(raw, expectedId) {
  if (!raw || typeof raw !== "object" || Array.isArray(raw)) {
    return { ok: false, reason: "receipt \u5FC5\u987B\u662F\u5BF9\u8C61" };
  }
  const value = raw;
  if (value.schemaVersion !== RECEIPT_SCHEMA_VERSION) {
    return { ok: false, reason: "receipt schemaVersion \u4E0D\u53D7\u652F\u6301" };
  }
  if (value.id !== expectedId || !isValidGhostId2(expectedId)) {
    return { ok: false, reason: "receipt id \u4E0E\u5B89\u88C5\u76EE\u5F55\u4E0D\u4E00\u81F4" };
  }
  if (typeof value.revision !== "string" || !isRevision(value.revision)) {
    return { ok: false, reason: "receipt revision \u4E0D\u5408\u6CD5" };
  }
  const manifestResult = validateNormalizedGhostManifest(value.manifest);
  if (!manifestResult.ok || manifestResult.manifest.id !== expectedId) {
    return {
      ok: false,
      reason: manifestResult.ok ? "receipt manifest id \u4E0D\u4E00\u81F4" : manifestResult.reason
    };
  }
  if (typeof value.enabled !== "boolean") {
    return { ok: false, reason: "receipt enabled \u4E0D\u5408\u6CD5" };
  }
  const trust = validateTrust(value.trust);
  if (!trust) return { ok: false, reason: "receipt trust \u4E0D\u5408\u6CD5" };
  if (value.packageSha256 !== void 0 && (typeof value.packageSha256 !== "string" || !/^[a-f0-9]{64}$/.test(value.packageSha256))) {
    return { ok: false, reason: "receipt packageSha256 \u4E0D\u5408\u6CD5" };
  }
  const skillContentSha256 = {};
  {
    const raw2 = value.skillContentSha256;
    if (!raw2 || typeof raw2 !== "object" || Array.isArray(raw2)) {
      return { ok: false, reason: "receipt skillContentSha256 \u4E0D\u5408\u6CD5" };
    }
    const expectedDirs = (manifestResult.manifest.skill?.items ?? []).map((item) => item.dir).sort();
    const actualDirs = Object.keys(raw2).sort();
    if (expectedDirs.length !== actualDirs.length || expectedDirs.some((dir, index) => dir !== actualDirs[index])) {
      return { ok: false, reason: "receipt skillContentSha256 \u4E0E manifest \u58F0\u660E\u4E0D\u4E00\u81F4" };
    }
    for (const [dir, digest] of Object.entries(raw2)) {
      if (typeof digest !== "string" || !/^[a-f0-9]{64}$/.test(digest)) {
        return { ok: false, reason: `receipt skillContentSha256 \u4E0D\u5408\u6CD5:${dir}` };
      }
      skillContentSha256[dir] = digest;
    }
  }
  if (value.iconDataUrl !== void 0 && (typeof value.iconDataUrl !== "string" || Buffer.byteLength(value.iconDataUrl, "utf8") > MAX_ICON_DATA_URL_BYTES || !ICON_DATA_URL_RE.test(value.iconDataUrl))) {
    return { ok: false, reason: "receipt iconDataUrl \u4E0D\u5408\u6CD5" };
  }
  if (!value.localeResources || typeof value.localeResources !== "object" || Array.isArray(value.localeResources)) {
    return { ok: false, reason: "receipt localeResources \u4E0D\u5408\u6CD5" };
  }
  const expectedLocalePaths = [
    ...new Set(Object.values(manifestResult.manifest.locales ?? {}))
  ].sort();
  const actualLocalePaths = Object.keys(value.localeResources).sort();
  if (expectedLocalePaths.length !== actualLocalePaths.length || expectedLocalePaths.some((localePath, index) => localePath !== actualLocalePaths[index])) {
    return { ok: false, reason: "receipt localeResources \u4E0E manifest \u58F0\u660E\u4E0D\u4E00\u81F4" };
  }
  const localeResources = {};
  for (const [localePath, resource] of Object.entries(
    value.localeResources
  )) {
    if (Buffer.byteLength(JSON.stringify(resource), "utf8") > GHOST_LOCALE_MAX_BYTES2) {
      return { ok: false, reason: `receipt locale \u8D85\u8FC7\u5927\u5C0F\u4E0A\u9650:${localePath}` };
    }
    const validated = validateGhostManifestLocaleResource(resource, manifestResult.manifest);
    if (!validated.ok) return { ok: false, reason: `receipt locale \u4E0D\u5408\u6CD5:${localePath}` };
    localeResources[localePath] = validated.resource;
  }
  let installOrigin;
  if (value.installOrigin !== void 0) {
    if (typeof value.installOrigin !== "string" || !isPersistableInstallOrigin(value.installOrigin)) {
      return { ok: false, reason: "receipt installOrigin \u4E0D\u5408\u6CD5" };
    }
    installOrigin = value.installOrigin;
  }
  return {
    ok: true,
    receipt: {
      schemaVersion: RECEIPT_SCHEMA_VERSION,
      id: expectedId,
      revision: value.revision,
      manifest: manifestResult.manifest,
      localeResources,
      enabled: value.enabled,
      trust,
      skillContentSha256,
      ...typeof value.packageSha256 === "string" ? { packageSha256: value.packageSha256 } : {},
      ...typeof value.iconDataUrl === "string" ? { iconDataUrl: value.iconDataUrl } : {},
      ...installOrigin !== void 0 ? { installOrigin } : {}
    }
  };
}
function isRevision(value) {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(value);
}
function validateTrust(raw) {
  if (!raw || typeof raw !== "object" || Array.isArray(raw)) return null;
  const value = raw;
  if (!["cindy-official", "reviewed", "verified-publisher", "unverified"].includes(
    String(value.level)
  ) || typeof value.publisherSigned !== "boolean" || typeof value.publisherVerified !== "boolean" || typeof value.reviewed !== "boolean") {
    return null;
  }
  const optionalStrings = ["publisherName", "publisherKeyId", "reviewerName"];
  for (const key of optionalStrings) {
    if (value[key] !== void 0 && typeof value[key] !== "string") return null;
  }
  if (value.unknownReviewer !== void 0 && typeof value.unknownReviewer !== "boolean") {
    return null;
  }
  return value;
}

// apps/desktop/src/main/installedGhostManifest.ts
init_readBoundedFile();
function isPlainObject2(value) {
  if (typeof value !== "object" || value === null || Array.isArray(value)) return false;
  const prototype = Object.getPrototypeOf(value);
  return prototype === Object.prototype || prototype === null;
}
function parseInstalledGhostManifest(raw) {
  const strict = validateGhostManifest2(raw);
  if (strict.ok) return { ok: true, manifest: strict.manifest, legacyManualIgnored: false };
  if (!isPlainObject2(raw) || !Object.prototype.hasOwnProperty.call(raw, "manual")) {
    return { ok: false, reason: strict.reason };
  }
  const withoutLegacyManual = { ...raw };
  delete withoutLegacyManual.manual;
  const compatible = validateGhostManifest2(withoutLegacyManual);
  return compatible.ok ? { ok: true, manifest: compatible.manifest, legacyManualIgnored: true } : { ok: false, reason: compatible.reason };
}

// apps/desktop/src/main/cindy-brain/ghostManualValidation.ts
var FORBIDDEN_MARKDOWN_CONTROL_RE = /[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/;
var FORBIDDEN_MANUAL_PATH_CHAR_RE = /[\u0000-\u001f\u007f\\]/;
var GHOST_MANUAL_LOGICAL_PATH_MAX_CHARS = 1024;
function parseGhostManualLogicalPath(rawPath) {
  if (rawPath.length === 0 || rawPath.length > GHOST_MANUAL_LOGICAL_PATH_MAX_CHARS) return null;
  if (FORBIDDEN_MANUAL_PATH_CHAR_RE.test(rawPath)) return null;
  const segments = rawPath.split("/");
  if (segments.some((segment) => segment.length === 0 || segment === "." || segment === "..")) {
    return null;
  }
  return segments;
}
function ghostManualLogicalPathForEntry(itemName, relativePath, kind) {
  if (parseGhostManualLogicalPath(relativePath) === null) return null;
  if (kind === "file" && !isGhostManualMarkdownFile(relativePath)) return null;
  const logicalPath = kind === "file" && relativePath === GHOST_MANUAL_ENTRY_FILE ? itemName : `${itemName}/${relativePath}`;
  return parseGhostManualLogicalPath(logicalPath) === null ? null : logicalPath;
}
function isGhostManualMarkdownFile(relativePath) {
  return relativePath.toLowerCase().endsWith(".md");
}
function decodeGhostManualMarkdown(bytes) {
  let content;
  try {
    content = new TextDecoder("utf-8", { fatal: true }).decode(bytes);
  } catch {
    return { ok: false, reason: "\u4E0D\u662F\u5408\u6CD5 UTF-8 \u6587\u672C" };
  }
  if (FORBIDDEN_MARKDOWN_CONTROL_RE.test(content)) {
    return { ok: false, reason: "\u5305\u542B\u4E8C\u8FDB\u5236\u63A7\u5236\u5B57\u7B26" };
  }
  return { ok: true, content };
}

// apps/desktop/src/main/cindy-brain/GhostManager.ts
var MAX_BASIC_CINDY_FILE_BYTES = 8 * 1024 * 1024;
var MAX_NODE_CINDY_FILE_BYTES = PLUGIN_MEMBER_UPLOAD_MAX_ARCHIVE_BYTES;
var MAX_GHOST_MANIFEST_BYTES = GHOST_MANIFEST_MAX_BYTES;
async function readRegularFileStableWithLimit(filePath, maxBytes) {
  const handle = await import_node_fs4.default.promises.open(
    filePath,
    import_node_fs4.default.constants.O_RDONLY | (import_node_fs4.default.constants.O_NONBLOCK ?? 0)
  );
  try {
    const opened = await handle.stat();
    if (!opened.isFile()) {
      throw new Error("source is not a regular file");
    }
    if (opened.size > maxBytes) {
      throw new Error(`source exceeds ${maxBytes} bytes`);
    }
    const bytes = Buffer.allocUnsafe(opened.size);
    let offset = 0;
    while (offset < bytes.byteLength) {
      const { bytesRead } = await handle.read(bytes, offset, bytes.byteLength - offset, null);
      if (bytesRead === 0) throw new Error("source file shrank while being read");
      offset += bytesRead;
    }
    const after = await handle.stat();
    const sameIdentity = after.isFile() && after.size === opened.size && after.mtimeMs === opened.mtimeMs && after.ctimeMs === opened.ctimeMs && (opened.dev === 0 && opened.ino === 0 || after.dev === opened.dev && after.ino === opened.ino);
    if (!sameIdentity) throw new Error("source file changed while being read");
    return bytes;
  } finally {
    await handle.close().catch(() => void 0);
  }
}
var MAX_BASIC_UNCOMPRESSED_BYTES = 32 * 1024 * 1024;
var MAX_NODE_UNCOMPRESSED_BYTES = PLUGIN_MEMBER_UPLOAD_MAX_UNCOMPRESSED_BYTES;
var MAX_BASIC_ZIP_ENTRIES = 256;
var MAX_NODE_ZIP_ENTRIES = PLUGIN_MEMBER_UPLOAD_MAX_ZIP_ENTRIES;
var DISABLED_MARKER_FILE = ".disabled";
var TRUST_METADATA_FILE = ".cindy-trust.json";
function isZipSymbolicLink(entry) {
  return isZipSymbolicLinkMode(entry.unixPermissions);
}
var CINDY_OFFICIAL_GHOST_TRUST = Object.freeze({
  level: "cindy-official",
  publisherSigned: true,
  publisherVerified: true,
  reviewed: true,
  publisherName: "Cindy Plugin Market"
});
var TRANSIENT_RENAME_ERROR_CODES = /* @__PURE__ */ new Set(["EPERM", "EBUSY", "EACCES"]);
var DEFAULT_RENAME_RETRY_DELAYS_MS = [250, 500, 1e3, 2e3, 3e3, 3e3];
var RENAME_RETRY_EXHAUSTED_HINT = "\u6587\u4EF6\u53EF\u80FD\u88AB\u5B89\u5168\u8F6F\u4EF6\u6216\u5176\u5B83\u7A0B\u5E8F\u5360\u7528,\u8BF7\u7A0D\u540E\u91CD\u8BD5";
function hashLegacyGhostApprovalProjection(projection) {
  return import_node_crypto4.default.createHash("sha256").update(
    JSON.stringify({
      version: 1,
      manifest: projection.manifest,
      enabled: projection.enabled,
      trust: projection.trust,
      localeResources: projection.localeResources,
      iconDataUrl: projection.iconDataUrl ?? null,
      skillContentSha256: projection.skillContentSha256
    })
  ).digest("hex");
}
function sameLegacyApprovalDirectoryIdentity(expected, current) {
  if (!current.isDirectory() || current.isSymbolicLink()) return false;
  if (expected.dev !== 0 || expected.ino !== 0 || current.dev !== 0 || current.ino !== 0) {
    return expected.dev === current.dev && expected.ino === current.ino;
  }
  return expected.birthtimeMs === current.birthtimeMs && expected.ctimeMs === current.ctimeMs;
}
function sameLegacyApprovalCanonicalPath(left, right) {
  const fold = (value) => process.platform === "win32" ? value.toLowerCase() : value;
  return fold(import_node_path6.default.resolve(left)) === fold(import_node_path6.default.resolve(right));
}
function assertStableLegacyApprovalDirectory(dir, expectedStats, expectedRealPath) {
  const currentStats = import_node_fs4.default.lstatSync(dir);
  const currentRealPath = import_node_fs4.default.realpathSync(dir);
  if (!sameLegacyApprovalDirectoryIdentity(expectedStats, currentStats) || !sameLegacyApprovalCanonicalPath(expectedRealPath, currentRealPath)) {
    throw new Error("legacy approval directory changed while reading");
  }
}
function readLegacyDisabledMarkerForApproval(dir) {
  const marker = import_node_path6.default.join(dir, DISABLED_MARKER_FILE);
  try {
    const kind = classifyGhostDirEntrySync(marker);
    if (kind === "file") return true;
    throw new Error("legacy disabled marker is not a regular file");
  } catch (error) {
    if (error.code === "ENOENT") return false;
    throw error;
  }
}
function readLegacyLocaleResourcesForApproval(dir, realDir, manifest) {
  const resources = {};
  for (const localePath of Object.values(manifest.locales ?? {})) {
    if (!localePath) continue;
    const absPath = resolveGhostContentPathSync(dir, localePath, {
      expect: "file",
      label: "legacy locale"
    });
    const bytes = readBoundedFileNoFollowSync(absPath, GHOST_LOCALE_MAX_BYTES2, {
      containWithin: realDir
    });
    if (bytes === null) throw new Error(`legacy locale missing or oversized: ${localePath}`);
    let raw;
    try {
      raw = JSON.parse(bytes.toString("utf8"));
    } catch (error) {
      throw new Error(
        `legacy locale is not valid JSON: ${localePath}: ${error instanceof Error ? error.message : String(error)}`
      );
    }
    const validated = validateGhostManifestLocaleResource(raw, manifest);
    if (!validated.ok) throw new Error(`legacy locale invalid: ${localePath}`);
    resources[localePath] = validated.resource;
  }
  return resources;
}
function readLegacyIconDataUrlForApproval(dir, realDir, manifest) {
  if (manifest.icon === void 0) return void 0;
  try {
    const iconPath = resolveGhostContentPathSync(dir, manifest.icon, {
      expect: "file",
      label: "legacy icon"
    });
    const bytes = readBoundedFileNoFollowSync(iconPath, GHOST_ICON_MAX_BYTES, {
      containWithin: realDir
    });
    if (bytes === null) return void 0;
    return buildIconDataUrl(manifest.icon, bytes) ?? void 0;
  } catch {
    return void 0;
  }
}
async function readLegacyGhostApprovalProjection(dir, id) {
  const dirStats = import_node_fs4.default.lstatSync(dir);
  if (!dirStats.isDirectory() || dirStats.isSymbolicLink()) {
    throw new Error("legacy approval source is not a real directory");
  }
  const realDir = import_node_fs4.default.realpathSync(dir);
  assertStableLegacyApprovalDirectory(dir, dirStats, realDir);
  const manifestPath = resolveGhostContentPathSync(dir, GHOST_MANIFEST_FILE, {
    expect: "file",
    label: "legacy manifest"
  });
  const rawBytes = readBoundedFileNoFollowSync(manifestPath, GHOST_MANIFEST_MAX_BYTES, {
    containWithin: realDir
  });
  if (rawBytes === null) throw new Error("legacy manifest is missing or oversized");
  let raw;
  try {
    raw = JSON.parse(rawBytes.toString("utf8"));
  } catch (error) {
    throw new Error(`invalid manifest JSON: ${error instanceof Error ? error.message : String(error)}`);
  }
  const validated = parseInstalledGhostManifest(raw);
  if (!validated.ok) throw new Error(`invalid manifest: ${validated.reason}`);
  if (validated.manifest.id !== id) throw new Error("manifest id != install dir name");
  const trust = readLegacyInstallTrust(dir) ?? {
    level: "unverified",
    publisherSigned: false,
    publisherVerified: false,
    reviewed: false
  };
  const projection = {
    manifest: validated.manifest,
    enabled: !readLegacyDisabledMarkerForApproval(dir),
    trust,
    localeResources: readLegacyLocaleResourcesForApproval(dir, realDir, validated.manifest),
    skillContentSha256: await hashApprovedSkillContent(validated.manifest, dir)
  };
  const iconDataUrl = readLegacyIconDataUrlForApproval(dir, realDir, validated.manifest);
  if (iconDataUrl !== void 0) projection.iconDataUrl = iconDataUrl;
  assertStableLegacyApprovalDirectory(dir, dirStats, realDir);
  return { projection, sha256: hashLegacyGhostApprovalProjection(projection) };
}
function ghostManifestHostUnsupportedReason(raw) {
  if (!raw || typeof raw !== "object" || Array.isArray(raw)) return null;
  const record = raw;
  if (typeof record.schemaVersion === "number" && Number.isInteger(record.schemaVersion) && record.schemaVersion > 3) {
    return `\u63D2\u4EF6\u4F7F\u7528\u4E86\u66F4\u65B0\u7684\u6E05\u5355\u683C\u5F0F(schemaVersion ${record.schemaVersion})`;
  }
  return null;
}
var GhostManager = class {
  constructor(options2) {
    this.options = options2;
    this.receiptStore = new GhostInstallReceiptStore(
      () => this.stateRootDir(),
      this.options.mutateSnapshot
    );
    const contentRoot = this.resolveContentRoot();
    const stateRoot = this.resolveStateRoot();
    this.assertDisjointRoots(contentRoot, stateRoot);
    this.ownerContextKey = this.currentOwnerContextKey();
    this.recoverInterruptedMutationsSync();
  }
  options;
  receiptStore;
  ownerContextKey;
  mutationTail = Promise.resolve();
  activeMutationContext = null;
  /**
   * 本进程内被判定"批准状态不可信"的插件 id。
   *
   * 用途只有一个:撤销陈旧批准**失败**时的兜底。撤销失败的成因(状态根不可写)与
   * 写批准失败的成因是同一个,所以不能再指望往状态根写任何东西来表达"已失效" ——
   * 内存标记是此时唯一还能用的机制。下次启动重新对账,成功即自愈;仍然失败就仍然
   * 隔离,始终 fail closed。
   */
  untrustedApprovals = /* @__PURE__ */ new Set();
  /** Owner namespaces whose mutation journal could not be authoritatively scanned. */
  recoveryBlockedApprovalNamespaces = /* @__PURE__ */ new Set();
  /**
   * 进程内隔离集合的键:以**当前 owner 的状态根**为命名空间。集合是 manager 级
   * 单例、owner 切换不重建 —— 裸用 id 会让 A 账号的隔离污染 B 账号的同 id 插件
   * (B 无辜被投影成 invalid);而切换边界时清空集合又是反方向的 fail open
   * (切回 A 时隔离丢失,盘上陈旧 receipt 复活)。按状态根命名空间两头都对:
   * B 的键不命中,切回 A 键重新命中、隔离持续到自愈。
   */
  isolationKey(id) {
    return `${this.receiptStore.rootDir()}\0${id}`;
  }
  /**
   * 事务目录 rename(staging→final / final→backup / backup→final)。瞬时错误按
   * `options.renameRetry` 有界重试;重试耗尽或非瞬时错误照常抛出,由各调用点的
   * 既有回滚/journal 逻辑处理。不做任何 rm/复制,失败时源目录保持原样。
   */
  async renameManagedDir(from, to, stage, id) {
    const retry = this.options.renameRetry;
    const enabled = retry?.enabled ?? process.platform === "win32";
    const delays = enabled ? retry?.delaysMs ?? DEFAULT_RENAME_RETRY_DELAYS_MS : [];
    for (let attempt = 0; ; attempt += 1) {
      try {
        await import_node_fs4.default.promises.rename(from, to);
        if (attempt > 0) {
          this.options.log?.info?.("ghost transaction rename succeeded after transient retry", {
            id,
            stage,
            attempts: attempt + 1
          });
        }
        return;
      } catch (error) {
        const code = error.code;
        const transient = Boolean(code && TRANSIENT_RENAME_ERROR_CODES.has(code));
        if (transient && delays.length > 0 && attempt >= delays.length) {
          this.options.log?.warn("ghost transaction rename retry exhausted", {
            id,
            stage,
            code,
            attempts: attempt + 1
          });
          error.message = `${error.message};${RENAME_RETRY_EXHAUSTED_HINT}`;
          throw error;
        }
        if (attempt >= delays.length || !transient) throw error;
        this.options.log?.warn("ghost transaction rename hit transient error; retrying", {
          id,
          stage,
          code,
          attempt: attempt + 1,
          delayMs: delays[attempt]
        });
        await new Promise((resolve) => setTimeout(resolve, delays[attempt]));
      }
    }
  }
  resolveContentRoot() {
    return this.assertManagedRootPath(
      import_node_path6.default.resolve(this.options.getRootDir()),
      "ghost content root"
    );
  }
  resolveStateRoot() {
    if (this.options.getStateDir) {
      return this.assertManagedRootPath(
        import_node_path6.default.resolve(this.options.getStateDir()),
        "ghost approval state root"
      );
    }
    const root = this.resolveContentRoot();
    return this.assertManagedRootPath(
      import_node_path6.default.join(import_node_path6.default.dirname(root), `${import_node_path6.default.basename(root)}-install-state`),
      "ghost approval state root"
    );
  }
  contentRootDir() {
    return this.activeMutationContext?.contentRoot ?? this.resolveContentRoot();
  }
  stateRootDir() {
    return this.activeMutationContext?.stateRoot ?? this.resolveStateRoot();
  }
  assertDisjointRoots(contentRoot, stateRoot) {
    const physicalContentRoot = this.assertManagedRootPath(contentRoot, "ghost content root");
    const physicalStateRoot = this.assertManagedRootPath(stateRoot, "ghost approval state root");
    if (isPathInsideDir(physicalContentRoot, physicalStateRoot) || isPathInsideDir(physicalStateRoot, physicalContentRoot)) {
      throw new Error("ghost install content and approval state roots must be disjoint");
    }
  }
  /**
   * Managed roots themselves must be real directories (or not exist yet), but their ancestors may
   * be links: relocated Home/AppData is a supported OS layout. Return a physical identity by
   * resolving the nearest existing ancestor so lexical aliases cannot bypass the disjointness gate.
   */
  assertManagedRootPath(absPath, label) {
    const resolved = import_node_path6.default.resolve(absPath);
    try {
      const kind = classifyGhostDirEntrySync(resolved);
      if (kind !== "directory") throw new Error(`${label} is not a real directory`);
      return import_node_fs4.default.realpathSync.native(resolved);
    } catch (error) {
      if (error.code !== "ENOENT") throw error;
    }
    const missingSegments = [];
    let ancestor = resolved;
    while (true) {
      const parent = import_node_path6.default.dirname(ancestor);
      if (parent === ancestor) throw new Error(`${label} has no existing directory ancestor`);
      missingSegments.unshift(import_node_path6.default.basename(ancestor));
      ancestor = parent;
      try {
        const realAncestor = import_node_fs4.default.realpathSync.native(ancestor);
        if (!import_node_fs4.default.statSync(realAncestor).isDirectory()) {
          throw new Error(`${label} ancestor is not a directory`);
        }
        return import_node_path6.default.join(realAncestor, ...missingSegments);
      } catch (error) {
        if (error.code === "ENOENT") continue;
        throw error;
      }
    }
  }
  /**
   * The manager is retained by IPC closures, while owner-scoped roots are resolved
   * dynamically by the host. Re-run synchronous recovery whenever that namespace
   * changes before any list/mutation can consume the new owner's files.
   */
  ensureCurrentOwnerContextSync() {
    if (this.activeMutationContext) return;
    const next = this.currentOwnerContextKey();
    if (next === this.ownerContextKey) return;
    this.assertDisjointRoots(this.resolveContentRoot(), this.resolveStateRoot());
    this.ownerContextKey = next;
    this.recoverInterruptedMutationsSync();
  }
  currentOwnerContextKey() {
    return `${this.options.getOwnerContextKey?.() ?? ""}\0${this.resolveContentRoot()}\0${this.resolveStateRoot()}`;
  }
  approvalNamespaceKey() {
    return this.activeMutationContext?.ownerContextKey ?? this.ownerContextKey;
  }
  /**
   * A journal scan failure cannot identify which installed id may be between
   * content publication and receipt commit. Quarantine every real installed id
   * for this owner until a later manager instance can complete recovery.
   */
  quarantineAllInstalledApprovalsSync() {
    let entries;
    try {
      entries = import_node_fs4.default.readdirSync(this.contentRootDir(), { withFileTypes: true });
    } catch {
      return;
    }
    for (const entry of entries) {
      if (entry.name.startsWith(".") || !isValidGhostId2(entry.name)) continue;
      try {
        if (classifyGhostDirEntrySync(import_node_path6.default.join(this.contentRootDir(), entry.name)) !== "directory") {
          continue;
        }
      } catch {
        continue;
      }
      this.untrustedApprovals.add(this.isolationKey(entry.name));
    }
  }
  /**
   * 启动一次性:恢复装入/更新的"目录已 rename、receipt 还没写"崩溃现场。构造期同步跑
   * (目录极小,与 resolveGhostRepoRoot 的启动期迁移同一先例)。
   *
   * **事务标记(状态根内)是权威判据**:装入/更新在 rename 动盘前落标记、写完 receipt
   * 清标记,标记带本次 `packageSha256`。恢复时同步读 receipt,`receipt.packageSha256 ===
   * marker.packageSha256` 即"已提交":
   * - install 未提交 → finalDir 是不完整安装,删掉(否则迁移会把它当 legacy 收编,而
   *   崩溃窗口内 manifest 可能已被同权限进程改写 = 检查 A 却固化 B);已提交 → 保留;
   * - update 未提交 → 回滚到 backup(旧字节+旧 receipt 自洽);已提交 → 回收陈旧 backup。
   *   这修掉了"final 在位就删 backup"把"新字节+旧 receipt"固化成"按旧批准跑新代码"的洞。
   *
   * 无标记的孤儿 `.cindy-updating-*`(journal 之前的崩溃残留)沿用原启发式兜底:final
   * 缺位且唯一 backup → 搬回(§5 插件不得凭空消失);final 在位 → 陈旧 backup 回收。
   * `.cindy-installing-*` staging 残留一律回收(从未发布)。
   */
  recoverInterruptedMutationsSync() {
    const root = this.contentRootDir();
    const handledBackupNames = /* @__PURE__ */ new Set();
    const blockedMutationIds = /* @__PURE__ */ new Set();
    const pendingScan = this.receiptStore.listPendingMutationIdsSync();
    if (pendingScan.state === "unreadable") {
      this.recoveryBlockedApprovalNamespaces.add(this.approvalNamespaceKey());
      this.quarantineAllInstalledApprovalsSync();
      (this.options.log?.error ?? this.options.log?.warn)?.call(
        this.options.log,
        "ghost mutation journal root unreadable; skipped all recovery heuristics",
        { error: pendingScan.reason }
      );
      return;
    }
    let recoveryHeuristicsBlocked = false;
    if (pendingScan.blocked) {
      this.recoveryBlockedApprovalNamespaces.add(this.approvalNamespaceKey());
      this.quarantineAllInstalledApprovalsSync();
      recoveryHeuristicsBlocked = true;
      (this.options.log?.error ?? this.options.log?.warn)?.call(
        this.options.log,
        "invalid ghost mutation journal marker blocks orphan-backup heuristics"
      );
    } else {
      this.recoveryBlockedApprovalNamespaces.delete(this.approvalNamespaceKey());
    }
    for (const id of pendingScan.ids) {
      const markerResult = this.receiptStore.readPendingMutationSync(id);
      const finalDir = import_node_path6.default.join(root, id);
      if (markerResult.state === "missing") continue;
      this.untrustedApprovals.add(this.isolationKey(id));
      if (markerResult.state !== "valid") {
        blockedMutationIds.add(id);
        recoveryHeuristicsBlocked = true;
        (this.options.log?.error ?? this.options.log?.warn)?.call(
          this.options.log,
          "ghost mutation journal unavailable; left for manual/next-launch recovery",
          { id, state: markerResult.state, reason: markerResult.reason }
        );
        continue;
      }
      const marker = markerResult.mutation;
      try {
        if (marker.kind === "uninstall") {
          this.untrustedApprovals.add(this.isolationKey(id));
          if (marker.builtinTombstone) {
            if (!this.options.recordBuiltinTombstone) {
              throw new Error("builtin uninstall recovery has no tombstone writer");
            }
            this.options.recordBuiltinTombstone(id);
          }
          this.receiptStore.removeSync(id);
          if (this.recoveryEntryKind(finalDir) === "directory") {
            import_node_fs4.default.rmSync(finalDir, { recursive: true, force: true });
          }
        } else {
          const approval = this.receiptStore.readForRecovery(id);
          if (approval.state === "unreadable") {
            blockedMutationIds.add(id);
            recoveryHeuristicsBlocked = true;
            (this.options.log?.error ?? this.options.log?.warn)?.call(
              this.options.log,
              "ghost approval receipt unreadable during recovery; journal retained",
              { id, kind: marker.kind, reason: approval.reason }
            );
            continue;
          }
          if (marker.kind === "install") {
            const finalKind = this.recoveryEntryKind(finalDir);
            const receiptCommitted = approval.state === "approved" && (marker.receiptRevision !== void 0 ? approval.receipt.revision === marker.receiptRevision : approval.receipt.packageSha256 === marker.packageSha256);
            const committed = receiptCommitted && finalKind === "directory";
            if (receiptCommitted && finalKind !== "directory") {
              throw new Error("committed install receipt has no published directory");
            }
            if (committed && marker.clearBuiltinTombstone) {
              if (!this.options.clearBuiltinTombstone) {
                throw new Error("builtin install recovery has no tombstone clearer");
              }
              this.options.clearBuiltinTombstone(id);
            }
            if (!committed && finalKind === "directory") {
              import_node_fs4.default.rmSync(finalDir, { recursive: true, force: true });
            }
          } else {
            handledBackupNames.add(marker.backupDirName);
            const backupPath = import_node_path6.default.join(root, marker.backupDirName);
            const backupKind = this.recoveryEntryKind(backupPath);
            const finalKind = this.recoveryEntryKind(finalDir);
            const committed = approval.state === "approved" && finalKind === "directory" && (marker.receiptRevision !== void 0 ? approval.receipt.revision === marker.receiptRevision : approval.receipt.packageSha256 === marker.packageSha256 && (marker.oldPackageSha256 !== void 0 ? marker.oldPackageSha256 !== marker.packageSha256 : marker.phase === "published"));
            if (committed) {
              if (backupKind === "directory") {
                import_node_fs4.default.rmSync(backupPath, { recursive: true, force: true });
              } else if (backupKind !== "missing") {
                throw new Error("managed update backup is not a real directory");
              }
            } else {
              if (marker.receiptRevision !== void 0 && approval.state === "approved" && approval.receipt.revision === marker.receiptRevision && finalKind !== "directory") {
                throw new Error("committed update receipt has no published directory");
              }
              if (backupKind === "missing" && finalKind === "directory") {
                if (marker.phase === "prepared") {
                  this.receiptStore.clearPendingMutationSync(id);
                  this.untrustedApprovals.delete(this.isolationKey(id));
                  continue;
                }
                throw new Error("managed update final present without backup at an unknown phase");
              }
              if (finalKind === "directory") {
                import_node_fs4.default.rmSync(finalDir, { recursive: true, force: true });
              } else if (finalKind !== "missing") {
                throw new Error("managed update final is not a real directory");
              }
              if (backupKind === "directory") {
                import_node_fs4.default.renameSync(backupPath, finalDir);
              } else if (backupKind === "missing") {
                throw new Error("managed update final and backup are both missing");
              } else {
                throw new Error("managed update backup is not a real directory");
              }
            }
          }
        }
        this.receiptStore.clearPendingMutationSync(id);
        this.untrustedApprovals.delete(this.isolationKey(id));
      } catch (err) {
        blockedMutationIds.add(id);
        recoveryHeuristicsBlocked = true;
        (this.options.log?.error ?? this.options.log?.warn)?.call(
          this.options.log,
          "interrupted ghost mutation recovery failed; left for next launch",
          {
            id,
            kind: marker?.kind,
            error: err instanceof Error ? err.message : String(err)
          }
        );
      }
    }
    if (recoveryHeuristicsBlocked) return;
    let entries;
    try {
      entries = import_node_fs4.default.readdirSync(root, { withFileTypes: true });
    } catch {
      return;
    }
    const backups = entries.filter(
      (entry) => entry.name.startsWith(".cindy-updating-") && !handledBackupNames.has(entry.name)
    );
    for (const entry of backups) {
      const match = /^\.cindy-updating-(.+)-[0-9a-f]{8}$/.exec(entry.name);
      if (!match || !isValidGhostId2(match[1])) continue;
      const id = match[1];
      if (blockedMutationIds.has(id)) continue;
      const backupPath = import_node_path6.default.join(root, entry.name);
      try {
        if (classifyGhostDirEntrySync(backupPath) !== "directory") continue;
      } catch {
        continue;
      }
      const finalDir = import_node_path6.default.join(root, id);
      const siblings = backups.filter((other) => {
        const otherMatch = /^\.cindy-updating-(.+)-[0-9a-f]{8}$/.exec(other.name);
        return otherMatch !== null && otherMatch[1] === id;
      });
      let finalKind;
      try {
        finalKind = classifyGhostDirEntrySync(finalDir);
      } catch (err) {
        if (err.code === "ENOENT") {
          finalKind = "missing";
        } else {
          (this.options.log?.error ?? this.options.log?.warn)?.call(
            this.options.log,
            "interrupted-update final path unreadable; backup left untouched",
            { id, backup: entry.name, error: err instanceof Error ? err.message : String(err) }
          );
          continue;
        }
      }
      if (finalKind === "directory") {
        try {
          import_node_fs4.default.rmSync(backupPath, { recursive: true, force: true });
        } catch (err) {
          this.options.log?.warn("stale ghost update backup cleanup failed", {
            id,
            backup: entry.name,
            error: err instanceof Error ? err.message : String(err)
          });
        }
        continue;
      }
      if (finalKind !== "missing") {
        (this.options.log?.error ?? this.options.log?.warn)?.call(
          this.options.log,
          "interrupted-update final path is not a directory; backup left untouched",
          { id, backup: entry.name, finalKind }
        );
        continue;
      }
      if (siblings.length !== 1) {
        (this.options.log?.error ?? this.options.log?.warn)?.call(
          this.options.log,
          "multiple interrupted-update backups for one ghost; left untouched for manual recovery",
          {
            id,
            backups: siblings.map((other) => other.name)
          }
        );
        continue;
      }
      try {
        import_node_fs4.default.renameSync(backupPath, finalDir);
        this.options.log?.info("ghost restored from interrupted update backup", { id });
      } catch (err) {
        (this.options.log?.error ?? this.options.log?.warn)?.call(
          this.options.log,
          "ghost interrupted-update recovery failed; plugin stays missing until manual recovery",
          {
            id,
            backup: entry.name,
            error: err instanceof Error ? err.message : String(err)
          }
        );
      }
    }
    for (const entry of entries) {
      if (!entry.name.startsWith(".cindy-installing-")) continue;
      try {
        import_node_fs4.default.rmSync(import_node_path6.default.join(root, entry.name), { recursive: true, force: true });
      } catch {
      }
    }
  }
  /** `<root>/<id>` 是否真目录(非链接/junction;判据同 ghostContentTree,避免穿透删除)。 */
  isRealDirChild(root, id) {
    try {
      return classifyGhostDirEntrySync(import_node_path6.default.join(root, id)) === "directory";
    } catch {
      return false;
    }
  }
  /** Recovery distinguishes a missing path from transiently unreadable state. */
  recoveryEntryKind(absPath) {
    try {
      return classifyGhostDirEntrySync(absPath);
    } catch (error) {
      if (error.code === "ENOENT") return "missing";
      throw error;
    }
  }
  /**
   * 从 `.cindy` 包的内存投影算技能字节指纹(P0-8)。
   *
   * 固化基线必须取自**合法安装事务已校验、且不可再被本机进程改写**
   * 的来源。旧写法在
   * staging→final 发布之后才从 finalDir 首读 —— publish 与首次 hash 之间被换掉的
   * SKILL.md 正文/辅助文件会同时成为 receipt 指纹与快照,后续校验全自洽,篡改被
   * 洗成批准事实。包投影(JSZip 内存条目)在 inspect 时已被 packageSha256 钉住、
   * 与安装入口校验的是同一份字节;据它算指纹后,发布后的目录漂移会在快照落盘对账时
   * 如实 fail closed(拒装),而不是被钉进批准。
   */
  async hashSkillContentFromPackage(manifest, allEntries, prefix) {
    const items = manifest.skill?.items ?? [];
    if (items.length === 0) return {};
    const result = {};
    for (const item of items) {
      const itemPrefix = `${item.dir}/`;
      const files = [];
      for (const entry of allEntries) {
        if (entry.dir) continue;
        const rel = entry.name.slice(prefix.length);
        if (!rel.startsWith(itemPrefix)) continue;
        files.push({ path: rel.slice(itemPrefix.length), bytes: await entry.async("nodebuffer") });
      }
      result[item.dir] = hashGhostContentBuffers(files);
    }
    return result;
  }
  /** Forge 等 Host 能力必须排除的受管根（内容根 + 批准状态根）。 */
  managedRootDirs() {
    return [this.contentRootDir(), this.receiptStore.rootDir()];
  }
  approvalStateRoot() {
    return this.receiptStore.rootDir();
  }
  /** 只认显式 Forge 安装写入的来源；未知/手动来源一律按 manual。 */
  readEffectiveInstallOrigin(id) {
    this.ensureCurrentOwnerContextSync();
    try {
      const approval = this.readApproval(id);
      if (approval.state !== "approved") return "manual";
      return effectiveInstallOrigin(approval.receipt);
    } catch {
      return "manual";
    }
  }
  /**
   * 自动接管只能把一份成功读取且仍为 approved 的 receipt 当作来源证据。
   * 与授权链的宽松投影不同，这里任何缺失、损坏或 I/O 异常都必须上抛。
   */
  readApprovedInstallOriginStrict(id) {
    this.ensureCurrentOwnerContextSync();
    const approval = this.readApproval(id);
    if (approval.state !== "approved") {
      throw new Error(`approved Plugin receipt is unavailable: ${approval.state}`);
    }
    return effectiveInstallOrigin(approval.receipt);
  }
  /**
   * Host-owned evidence for reconnecting an installation to retained source metadata.
   * A pending package mutation or an invalid approval fails closed. Legacy provenance
   * is accepted only from the completed one-time migration's explicit id list.
   */
  approvedInstallEvidence(id) {
    this.ensureCurrentOwnerContextSync();
    if (!isValidGhostId2(id) || this.hasPendingMutationJournal(id)) return null;
    const approval = this.readApproval(id);
    if (approval.state !== "approved") return null;
    const packageSha256 = approval.receipt.packageSha256;
    const migration = this.receiptStore.readMigrationLedger();
    return {
      packageSha256: packageSha256 && /^[a-f0-9]{64}$/.test(packageSha256) ? packageSha256 : null,
      approvedManifest: approval.receipt.manifest,
      legacyMigrated: Boolean(
        migration && migration.state !== "in-progress" && migration.migratedIds.includes(id)
      )
    };
  }
  /**
   * 启停投影:receipt 为主,安装目录 `.disabled` 镜像**只往停用方向覆盖**(读时合并)。
   *
   * 为什么在读侧合并而不是只信 receipt:停用必须永远能成功(规则 §3 收敛方向不对称)。
   * 状态根不可写时 `setEnabled(false)` 仍能写镜像;若 list() 只读 receipt,那次停用会在
   * 重启后静默复活 —— fail open。镜像只能把启停态往下拉,不能往上翻(重新启用只有
   * setEnabled(true) 成功写 receipt 一条路),与随包对账的合并规则同向。
   */
  effectiveEnabled(dir, receiptEnabled) {
    return receiptEnabled && !this.isDisabledMarkerPresentSync(dir);
  }
  /** Compatibility marker reads fail closed and never follow a link/non-regular entry. */
  isDisabledMarkerPresentSync(dir) {
    const marker = import_node_path6.default.join(dir, DISABLED_MARKER_FILE);
    try {
      classifyGhostDirEntrySync(marker);
      return true;
    } catch (error) {
      if (error.code === "ENOENT") return false;
      return true;
    }
  }
  writeDisabledMarkerSync(dir) {
    if (classifyGhostDirEntrySync(dir) !== "directory") {
      throw new Error("ghost disabled marker parent is not a real directory");
    }
    const marker = import_node_path6.default.join(dir, DISABLED_MARKER_FILE);
    try {
      if (classifyGhostDirEntrySync(marker) !== "file") {
        throw new Error("ghost disabled marker is not a regular file");
      }
    } catch (error) {
      if (error.code !== "ENOENT") throw error;
    }
    import_node_fs4.default.writeFileSync(marker, "");
  }
  /**
   * 读批准状态的**唯一入口**:进程内隔离优先于磁盘上的 receipt。
   *
   * 所有消费方(list / setEnabled / update 的 token 比对)都必须走这里 —— 各自直接
   * 调 receiptStore.read() 会让隔离在某条路径上失效,那类"同一判定散落多处"的分叉
   * 正是本 PR 前几轮反复出问题的原因。
   */
  readApproval(id) {
    if (this.recoveryBlockedApprovalNamespaces.has(this.approvalNamespaceKey())) {
      return { state: "invalid", reason: "ghost mutation journal namespace is unreadable" };
    }
    if (this.untrustedApprovals.has(this.isolationKey(id))) {
      return { state: "invalid", reason: "\u6279\u51C6\u72B6\u6001\u5DF2\u88AB\u5224\u5B9A\u4E0D\u53EF\u4FE1(\u64A4\u9500\u5931\u8D25)" };
    }
    return this.receiptStore.read(id);
  }
  /**
   * 技能链接对账前重新核验批准快照。
   *
   * `list()` 是首帧同步 API,不能在里面流式重算目录摘要；因此由异步 reconciler
   * 对每个准备挂链的插件调用本入口。receipt revision 若已变化、快照缺失/不可读、
   * 含非普通条目或字节不符一律 false,让对账器撤掉已有链接并拒绝新建。
   */
  async verifyApprovedSkillSnapshot(ghost) {
    this.ensureCurrentOwnerContextSync();
    if (ghost.approval.state !== "approved" || !ghost.manifest.skill?.items.length || !ghost.approvedSkillRoot) {
      return false;
    }
    const current = this.readApproval(ghost.manifest.id);
    if (current.state !== "approved" || current.receipt.revision !== ghost.approval.revision) {
      return false;
    }
    const expectedRoot = this.receiptStore.skillSnapshotRoot(
      current.receipt.id,
      current.receipt.revision
    );
    if (import_node_path6.default.resolve(ghost.approvedSkillRoot) !== import_node_path6.default.resolve(expectedRoot)) {
      return false;
    }
    return this.receiptStore.skillSnapshotMatchesReceipt(current.receipt, expectedRoot);
  }
  /**
   * Serialize content-directory and approval-receipt mutations as one Host transaction lane.
   * The owner generation and both roots are captured after queue wait and remain fixed for the
   * whole callback, so a concurrent session commit cannot redirect later awaits into another
   * owner's namespace.
   */
  async runExclusiveMutation(operation) {
    this.ensureCurrentOwnerContextSync();
    const queuedOwnerContextKey = this.ownerContextKey;
    const previous = this.mutationTail;
    let release;
    const gate = new Promise((resolve) => {
      release = resolve;
    });
    this.mutationTail = previous.then(() => gate);
    await previous;
    let capabilityActive = true;
    try {
      const currentOwnerContextKey = this.currentOwnerContextKey();
      if (this.ownerContextKey !== queuedOwnerContextKey || currentOwnerContextKey !== queuedOwnerContextKey) {
        throw new Error("ghost owner context changed while mutation was queued");
      }
      const contentRoot = this.resolveContentRoot();
      const stateRoot = this.resolveStateRoot();
      this.assertDisjointRoots(contentRoot, stateRoot);
      this.activeMutationContext = {
        ownerContextKey: currentOwnerContextKey,
        contentRoot,
        stateRoot
      };
      const assertCapabilityActive = () => {
        if (!capabilityActive || this.activeMutationContext?.ownerContextKey !== currentOwnerContextKey) {
          throw new Error("ghost exclusive mutation capability is no longer active");
        }
      };
      const mutation = {
        writeDisabledMarker: (id) => {
          assertCapabilityActive();
          if (!isValidGhostId2(id) || !this.isRealDirChild(this.contentRootDir(), id)) {
            throw new Error("ghost disabled marker target is not a managed plugin directory");
          }
          this.writeDisabledMarkerSync(import_node_path6.default.join(this.contentRootDir(), id));
        },
        publishTrustedBundledSeed: async (id, sourceDir, options2) => {
          assertCapabilityActive();
          await this.publishTrustedBundledSeedUnlocked(id, sourceDir, options2);
        },
        approveTrustedBundledInstall: async (manifest, markerEnabled, options2) => {
          assertCapabilityActive();
          return this.approveTrustedBundledInstallUnlocked(manifest, markerEnabled, options2);
        },
        removeInstallApproval: async (id) => {
          assertCapabilityActive();
          return this.removeInstallApprovalUnlocked(id);
        },
        uninstall: async (id, options2 = {}) => {
          assertCapabilityActive();
          return this.uninstallUnlocked(id, options2);
        }
      };
      return await operation(mutation);
    } finally {
      capabilityActive = false;
      this.activeMutationContext = null;
      release();
    }
  }
  /**
   * 一次性 legacy backfill 迁移(docs/dev-rules/plugin-security-and-authoring.md 第 5 节
   * 红线的落地)。#1080 把授权事实从可变安装目录搬到 Host receipt,升级前装的插件没有
   * receipt —— 若不迁移,它们会一律落到 `legacy-unapproved`、被列停用、要用户逐个
   * 重新安装(这正是 #1080 被回滚的原因)。这里从旧的三份事实源(`ghost.json` /
   * `.cindy-trust.json` / `.disabled`)重建等价 receipt,让存量插件升级后**无感可用**。
   *
   * 三条不变量:
   * - **全局一次性**:状态根有迁移 ledger 即视为已迁过,此后缺 receipt 一律 fail closed,
   *   不再迁。理由见 `GhostLegacyMigrationLedger` 头注释(否则删 receipt 就能骗一次
   *   "从可变安装目录重建授权")。
   * - **不扩权**:receipt 中的 manifest = 当前 `ghost.json` 声明，只重建旧安装已有的
   *   等价运行事实；此后 manifest 变化只能由新的合法安装／更新事务固化。
   * - **只写状态根、绝不动安装目录**:三份旧文件原样保留,因此回滚到旧客户端时它照旧
   *   从安装目录判定启停,不会错位(§5 兜底第 4 条 回滚余地)。
   *
   * 随包种子 id 跳过 —— 它们走 provisioning 的 `approveTrustedBundledInstall`(有权威
   * 字节可比,是更强的迁移形态)。
   */
  async migrateLegacyApprovalsOnce() {
    return this.runExclusiveMutation(() => this.migrateLegacyApprovalsUnlocked());
  }
  /** True only while the durable migration ledger still carries retry work. */
  hasPendingLegacyApprovalMigration() {
    return this.receiptStore.readMigrationLedger()?.state === "in-progress";
  }
  async migrateLegacyApprovalsUnlocked() {
    const result = {
      migrated: [],
      skipped: [],
      failed: [],
      retryPending: []
    };
    if (this.receiptStore.migrationDoorClosed()) {
      if (this.receiptStore.hasMigrationLedger() && !this.receiptStore.readMigrationLedger()) {
        (this.options.log?.error ?? this.options.log?.warn)?.call(
          this.options.log,
          "legacy migration ledger unreadable; migration door kept closed",
          { path: this.receiptStore.rootDir() }
        );
      }
      return result;
    }
    const resumeLedger = this.receiptStore.readMigrationLedger();
    const resumePending = resumeLedger?.state === "in-progress" ? new Set(resumeLedger.pendingIds ?? []) : null;
    const resumeApprovalProjectionDigest = resumeLedger?.recoveryApprovalProjectionSha256ById ?? void 0;
    const root = this.contentRootDir();
    let entries = [];
    try {
      entries = import_node_fs4.default.readdirSync(root, { withFileTypes: true });
    } catch (err) {
      if (err.code === "ENOENT") {
        return result;
      }
      throw err;
    }
    const candidates = [];
    const blockedByPendingJournal = [];
    const unreadableReceiptIds = [];
    const preMigrated = [];
    let sawApprovedNonBundledInstall = false;
    const pendingForRetry = /* @__PURE__ */ new Set();
    for (const entry of entries) {
      const id = entry.name;
      if (id.startsWith(".") || !isValidGhostId2(id)) continue;
      if (classifyGhostDirEntrySync(import_node_path6.default.join(root, id)) !== "directory") continue;
      if (this.options.isTrustedBundledId?.(id)) {
        result.skipped.push(id);
        continue;
      }
      if (resumePending && !resumePending.has(id)) {
        result.skipped.push(id);
        continue;
      }
      const approval = this.receiptStore.readForRecovery(id);
      if (approval.state === "approved") {
        sawApprovedNonBundledInstall = true;
        (resumePending ? preMigrated : result.skipped).push(id);
        pendingForRetry.delete(id);
        continue;
      }
      if (approval.state === "unreadable") {
        result.failed.push(id);
        pendingForRetry.delete(id);
        unreadableReceiptIds.push(id);
        this.options.log?.warn("legacy migration found an unreadable receipt; automatic backfill blocked", {
          id,
          reason: approval.reason
        });
        continue;
      }
      if (this.hasPendingMutationJournal(id)) {
        result.skipped.push(id);
        blockedByPendingJournal.push(id);
        continue;
      }
      if (this.receiptStore.hasMigrationMarker(id)) {
        result.skipped.push(id);
        continue;
      }
      candidates.push(id);
    }
    if (candidates.length === 0 && !resumePending && blockedByPendingJournal.length === 0 && unreadableReceiptIds.length === 0) {
      if (sawApprovedNonBundledInstall) {
        await this.receiptStore.writeMigrationLedger({
          version: 1,
          migratedAt: (/* @__PURE__ */ new Date()).toISOString(),
          migratedIds: [],
          state: "completed"
        });
      }
      return result;
    }
    if (resumePending || candidates.length > 0 || blockedByPendingJournal.length > 0 || unreadableReceiptIds.length > 0) {
      const checkpointPendingIds = [
        .../* @__PURE__ */ new Set([...candidates, ...blockedByPendingJournal])
      ].sort();
      const checkpointFailedIds = [
        .../* @__PURE__ */ new Set([...resumeLedger?.failedIds ?? [], ...unreadableReceiptIds])
      ].sort();
      await this.receiptStore.writeMigrationLedger({
        version: 1,
        migratedAt: (/* @__PURE__ */ new Date()).toISOString(),
        migratedIds: [.../* @__PURE__ */ new Set([...resumeLedger?.migratedIds ?? [], ...preMigrated])].sort(),
        state: checkpointPendingIds.length > 0 ? "in-progress" : "completed",
        ...checkpointPendingIds.length > 0 ? { pendingIds: checkpointPendingIds } : {},
        ...checkpointFailedIds.length > 0 ? { failedIds: checkpointFailedIds } : {},
        ...checkpointPendingIds.length > 0 && resumeApprovalProjectionDigest ? {
          recoveryApprovalProjectionSha256ById: Object.fromEntries(
            Object.entries(resumeApprovalProjectionDigest).filter(([id]) => checkpointPendingIds.includes(id))
          )
        } : {}
      });
    }
    for (const id of candidates) {
      try {
        const migrated = await this.backfillLegacyApproval(import_node_path6.default.join(root, id), id, {
          expectedApprovalProjectionSha256: resumeApprovalProjectionDigest?.[id]
        });
        (migrated ? result.migrated : result.skipped).push(id);
        pendingForRetry.delete(id);
      } catch (err) {
        const transient = isTransientBackfillError(err);
        if (transient) {
          result.retryPending.push(id);
          pendingForRetry.add(id);
          this.options.log?.warn(
            "legacy ghost approval migration hit transient IO; will retry next launch",
            {
              id,
              code: err?.code,
              error: err instanceof Error ? err.message : String(err)
            }
          );
        } else {
          result.failed.push(id);
          pendingForRetry.delete(id);
          this.options.log?.warn("legacy ghost approval migration failed; kept fail-closed", {
            id,
            error: err instanceof Error ? err.message : String(err)
          });
        }
      }
    }
    const migratedIds = [.../* @__PURE__ */ new Set([...result.migrated, ...preMigrated])].sort();
    const failedIds = [.../* @__PURE__ */ new Set([...result.failed, ...resumeLedger?.failedIds ?? []])].sort();
    for (const id of blockedByPendingJournal) pendingForRetry.add(id);
    const retryIds = [...pendingForRetry].sort();
    const nextRecoveryDigests = retryIds.length > 0 && resumeLedger?.recoveryApprovalProjectionSha256ById ? Object.fromEntries(
      Object.entries(resumeLedger.recoveryApprovalProjectionSha256ById).filter(
        ([id]) => pendingForRetry.has(id)
      )
    ) : void 0;
    await this.receiptStore.writeMigrationLedger({
      version: 1,
      migratedAt: (/* @__PURE__ */ new Date()).toISOString(),
      migratedIds,
      ...retryIds.length > 0 ? {
        state: "in-progress",
        pendingIds: retryIds,
        ...nextRecoveryDigests && Object.keys(nextRecoveryDigests).length > 0 ? { recoveryApprovalProjectionSha256ById: nextRecoveryDigests } : {}
      } : { state: "completed" },
      ...failedIds.length > 0 ? { failedIds } : {}
    });
    if (result.migrated.length > 0) this.options.onChanged?.(this.list());
    return result;
  }
  /**
   * legacy 恢复流程(owner 命名空间认领旧布局目录)专用的 backfill 旁路。
   *
   * 为什么允许绕过一次性 ledger 门:`ids` 来自恢复流程**刚从旧布局根搬进安装根**的
   * 目录 —— 这个来源本身就是旧世界的授权事实(与首轮迁移同一信任级),不是可变安装
   * 目录里凭空冒出来的目录。调用方只传本次恢复实际搬动/新增的 id;逐 id 仍然只在
   * 没有有效 receipt 时 backfill,随包 id 照旧交给 provisioning。结果并进 ledger,
   * 事后可分辨来源。
   */
  /**
   * 有未清事务标记 = 一次装入/更新崩在半途、启动恢复还没收干净。任何会**写 receipt**
   * 的入口(主迁移、legacy backfill、新的安装／更新事务)都必须让路:绝不对一次
   * 未完成事务的
   * 中间态字节铸出批准 —— 否则 journal 之后的恢复会回滚字节却留下这份 receipt/技能快照,
   * 形成永不自愈的错位授权(约束 B-2/B-5/I-1)。journal 由启动恢复负责收敛,收敛后这些
   * 入口自然放行;若恢复被卡死,退出通道由批量恢复入口负责(见约束文档 §8 已知项),
   * 而不是靠这里对中间态铸批准。
   */
  hasPendingMutationJournal(id) {
    return this.receiptStore.readPendingMutationSync(id).state !== "missing";
  }
  async backfillRecoveredLegacyGhosts(ids, options2) {
    return this.runExclusiveMutation(async () => {
      const out = { migrated: [], failed: [] };
      const retryIds = [];
      const root = this.contentRootDir();
      const hasLedger = this.receiptStore.hasMigrationLedger();
      const prev = this.receiptStore.readMigrationLedger();
      if (hasLedger && !prev) {
        throw new Error("legacy migration ledger exists but is unreadable; recovery queue preserved");
      }
      const pendingForRetry = new Set(prev?.pendingIds ?? []);
      const permanentlyBlockedIds = new Set(prev?.failedIds ?? []);
      const workIds = [...new Set(ids)].filter(
        (id) => isValidGhostId2(id) && this.options.isTrustedBundledId?.(id) !== true && !permanentlyBlockedIds.has(id)
      );
      const queuedIds = [.../* @__PURE__ */ new Set([...pendingForRetry, ...workIds])].sort();
      const hadQueuedWork = queuedIds.length > 0;
      if (queuedIds.length > 0) {
        await this.receiptStore.writeMigrationLedger({
          version: 1,
          migratedAt: prev?.migratedAt ?? (/* @__PURE__ */ new Date()).toISOString(),
          migratedIds: prev?.migratedIds ?? [],
          ...prev?.failedIds?.length ? { failedIds: prev.failedIds } : {},
          state: "in-progress",
          pendingIds: queuedIds,
          recoveryApprovalProjectionSha256ById: (() => {
            const merged = {
              ...prev?.recoveryApprovalProjectionSha256ById
            };
            for (const id of queuedIds) {
              const current = options2.expectedApprovalProjectionSha256ById[id];
              if (current !== void 0) merged[id] = current;
            }
            return merged;
          })()
        });
        for (const id of queuedIds) pendingForRetry.add(id);
      }
      for (const id of workIds) {
        const approval = this.receiptStore.readForRecovery(id);
        if (approval.state === "approved") {
          pendingForRetry.delete(id);
          continue;
        }
        if (approval.state === "unreadable") {
          out.failed.push(id);
          pendingForRetry.delete(id);
          this.options.log?.warn("recovered legacy receipt unreadable; automatic backfill blocked", {
            id,
            reason: approval.reason
          });
          continue;
        }
        if (this.hasPendingMutationJournal(id)) {
          retryIds.push(id);
          pendingForRetry.add(id);
          this.options.log?.warn("recovered legacy ghost has an unsettled mutation journal; will retry", {
            id
          });
          continue;
        }
        try {
          const targetDir = import_node_path6.default.join(root, id);
          const expectedApprovalProjectionSha256 = options2.expectedApprovalProjectionSha256ById[id];
          if (expectedApprovalProjectionSha256 === void 0) {
            throw new Error(`recovered legacy approval projection is missing or invalid: ${id}`);
          }
          if (!/^[a-f0-9]{64}$/.test(expectedApprovalProjectionSha256)) {
            throw new Error(`recovered legacy approval projection is missing or invalid: ${id}`);
          }
          if (await this.backfillLegacyApproval(targetDir, id, {
            expectedApprovalProjectionSha256
          })) {
            out.migrated.push(id);
          }
          pendingForRetry.delete(id);
        } catch (err) {
          if (isTransientBackfillError(err)) {
            retryIds.push(id);
            pendingForRetry.add(id);
            this.options.log?.warn("recovered legacy ghost backfill hit transient IO; will retry", {
              id,
              error: err instanceof Error ? err.message : String(err)
            });
          } else {
            out.failed.push(id);
            pendingForRetry.delete(id);
            this.options.log?.warn("recovered legacy ghost backfill failed; kept fail-closed", {
              id,
              error: err instanceof Error ? err.message : String(err)
            });
          }
        }
      }
      if (hadQueuedWork || out.migrated.length > 0 || out.failed.length > 0 || retryIds.length > 0 || pendingForRetry.size > 0) {
        const failedIds = [.../* @__PURE__ */ new Set([...prev?.failedIds ?? [], ...out.failed])].sort();
        await this.receiptStore.writeMigrationLedger({
          version: 1,
          migratedAt: (/* @__PURE__ */ new Date()).toISOString(),
          migratedIds: [.../* @__PURE__ */ new Set([...prev?.migratedIds ?? [], ...out.migrated])].sort(),
          ...failedIds.length > 0 ? { failedIds } : {},
          // 旁路 backfill 的瞬时失败也必须进入持久化 work queue；目录已经搬入安装根，
          // 下一轮不会再次出现在”刚恢复”清单里，不能只靠内存日志重试。
          // 同时钉死恢复冻结的批准投影摘要，确保重试时内容未变。
          state: pendingForRetry.size > 0 ? "in-progress" : "completed",
          ...pendingForRetry.size > 0 ? {
            pendingIds: [...pendingForRetry].sort(),
            recoveryApprovalProjectionSha256ById: (() => {
              const merged = {
                ...prev?.recoveryApprovalProjectionSha256ById
              };
              for (const id of pendingForRetry) {
                const current = options2.expectedApprovalProjectionSha256ById[id];
                if (current !== void 0) merged[id] = current;
              }
              return Object.fromEntries(
                [...pendingForRetry].filter((id) => merged[id] !== void 0).map((id) => [id, merged[id]])
              );
            })()
          } : {}
        });
      }
      if (out.migrated.length > 0) this.options.onChanged?.(this.list());
      const pending = [...new Set(retryIds)].sort();
      return options2.includePending && pending.length > 0 ? { ...out, pending } : out;
    });
  }
  /**
   * 从旧安装目录的三份事实源重建一份等价 receipt。返回是否真的写了 receipt。
   *
   * 分级 fail 策略(对齐 §5"读不出核心事实才 fail closed,展示元数据缺失则降级"):
   * - `ghost.json` 读不出/不合法 → 抛错 → 调用方计入 failed、保持 fail closed;
   * - `.disabled` 镜像 → 旧模型的启停事实(不存在=启用);
   * - `.cindy-trust.json` 缺失/损坏 → 保守 `unverified`(展示信号,能力由 slot 授予);
   * - locale 声明存在但文件损坏 → 抛错 → fail closed。装入流程本就逐个校验声明的
   *   locale、不合格拒装(见 `install` 里 `locale 文件不合格` 分支),所以旧安装天然不含
   *   坏 locale;迁移时读到坏 locale 只可能是**装入后被损坏**,属 §5 的"自相矛盾即
   *   fail closed",也与 receipt「localeResources 键集必须等于 manifest.locales」的
   *   不变量一致(跳过坏 locale 会写出被 validateReceipt 拒绝的 receipt);
   * - `packageSha256` **不回填**：旧安装目录无法反推出原始 `.cindy` 整包 SHA。省略后，
   *   组织市场 Broker 资格会 fail closed，直到一次经校验的市场更新写入新来源指纹；
   *   既有 organization-market OIDC 仍沿用 manifestDigest，不受影响。其它运行期字节判据
   *   `skillContentSha256` 仍逐字节计算，技能目录含链接等异常会在那里如实 fail closed。
   */
  async backfillLegacyApproval(dir, id, options2 = {}) {
    const { projection, sha256: sha2562 } = await readLegacyGhostApprovalProjection(dir, id);
    if (options2.expectedApprovalProjectionSha256 !== void 0 && sha2562 !== options2.expectedApprovalProjectionSha256) {
      throw new Error("legacy approval projection changed after recovery discovery");
    }
    await this.receiptStore.write(
      createGhostInstallReceipt({
        manifest: projection.manifest,
        localeResources: projection.localeResources,
        enabled: projection.enabled,
        trust: projection.trust,
        skillContentSha256: projection.skillContentSha256,
        ...projection.iconDataUrl !== void 0 ? { iconDataUrl: projection.iconDataUrl } : {}
      }),
      { skillSourceDir: dir }
    );
    this.options.log?.info("legacy ghost approval migrated", {
      id,
      enabled: projection.enabled,
      trustLevel: projection.trust.level,
      origin: "legacy-migration"
    });
    return true;
  }
  /** 扫描已装意识(同步 —— renderer 首帧 sendSync 拉取,目录极小不卡启动)。 */
  list() {
    this.ensureCurrentOwnerContextSync();
    const root = this.contentRootDir();
    let entries;
    try {
      entries = import_node_fs4.default.readdirSync(root, { withFileTypes: true });
    } catch {
      return [];
    }
    const result = [];
    for (const entry of entries) {
      if (entry.name.startsWith(".")) continue;
      const dir = import_node_path6.default.join(root, entry.name);
      try {
        if (classifyGhostDirEntrySync(dir) !== "directory") continue;
      } catch {
        continue;
      }
      if (!isValidGhostId2(entry.name)) {
        this.options.log?.warn("ghost dir skipped: invalid directory id", { dir });
        continue;
      }
      const approvalResult = this.readApproval(entry.name);
      if (approvalResult.state === "approved") {
        const receipt = approvalResult.receipt;
        const localizedManifest2 = this.localizeApprovedManifest(receipt);
        result.push({
          manifest: localizedManifest2,
          dir,
          enabled: this.effectiveEnabled(dir, receipt.enabled),
          approval: { state: "approved", revision: receipt.revision },
          trust: receipt.trust,
          ...receipt.manifest.skill?.items.length ? {
            approvedSkillRoot: this.receiptStore.skillSnapshotRoot(
              receipt.id,
              receipt.revision
            )
          } : {},
          ...receipt.iconDataUrl !== void 0 ? { iconDataUrl: receipt.iconDataUrl } : {},
          ...this.options.isTrustedBundledId?.(entry.name) ? { builtin: true } : {}
        });
        continue;
      }
      if (approvalResult.state === "invalid") {
        this.options.log?.warn("ghost approval receipt invalid; plugin kept disabled", {
          id: entry.name,
          reason: approvalResult.reason
        });
      }
      let raw;
      try {
        const manifestPath = resolveGhostContentPathSync(dir, GHOST_MANIFEST_FILE, {
          expect: "file",
          label: "installed manifest"
        });
        const bytes = readBoundedFileNoFollowSync(manifestPath, MAX_GHOST_MANIFEST_BYTES);
        if (bytes === null) throw new Error("manifest is not a bounded regular file");
        raw = JSON.parse(bytes.toString("utf-8"));
      } catch (err) {
        this.options.log?.warn("ghost dir skipped: unreadable manifest", {
          dir,
          error: err instanceof Error ? err.message : String(err)
        });
        continue;
      }
      const parsedInstalled = parseInstalledGhostManifest(raw);
      const v = parsedInstalled;
      if (parsedInstalled.ok && parsedInstalled.legacyManualIgnored) {
        this.options.log?.warn("ghost legacy manual metadata ignored", {
          code: "LEGACY_MANUAL_METADATA_IGNORED",
          manifestId: parsedInstalled.manifest.id
        });
      }
      if (!v.ok) {
        this.options.log?.warn("ghost dir skipped: invalid manifest", { dir, reason: v.reason });
        continue;
      }
      if (v.manifest.id !== entry.name) {
        this.options.log?.warn("ghost dir skipped: dir name != manifest id", {
          dir,
          manifestId: v.manifest.id
        });
        continue;
      }
      const manifest = v.manifest;
      const iconDataUrl = this.readInstalledIconDataUrl(dir, v.manifest);
      const localizedManifest = this.readInstalledLocalizedManifest(dir, v.manifest);
      result.push({
        manifest: localizedManifest,
        dir,
        enabled: false,
        approval: { state: approvalResult.state },
        // 未批准安装目录里的 trust 镜像是可变字节，不能作为可信展示事实。
        trust: {
          level: "unverified",
          publisherSigned: false,
          publisherVerified: false,
          reviewed: false
        },
        ...iconDataUrl !== null ? { iconDataUrl } : {},
        ...this.options.isTrustedBundledId?.(entry.name) ? { builtin: true } : {}
      });
    }
    result.sort((a, b) => a.manifest.id.localeCompare(b.manifest.id));
    return result;
  }
  /**
   * Mutation callers may immediately use the returned object to spawn a
   * resident runtime.  Always return the same authorization projection that
   * list()/runtime lookup can currently observe instead of a hand-built
   * "approved" object that could bypass an active quarantine.
   */
  projectCommittedMutationResult(fallback) {
    const list = this.list();
    const ghost = list.find((item) => item.manifest.id === fallback.manifest.id) ?? {
      ...fallback,
      enabled: false,
      approval: { state: "invalid" },
      approvedSkillRoot: void 0
    };
    return { ghost, list };
  }
  /** receipt 内的 base manifest + 已批准 locale 资源；不再读取可变安装目录。 */
  localizeApprovedManifest(receipt) {
    const requestedLocale = this.options.getLocale?.();
    const runtimeManifest = withGhostResolvedLocale(receipt.manifest, requestedLocale);
    const localePath = ghostLocalePathFor(receipt.manifest, requestedLocale);
    const fallbackPath = receipt.manifest.locales?.en;
    const candidates = [
      ...new Set([localePath, fallbackPath].filter((value) => Boolean(value)))
    ];
    for (const candidate of candidates) {
      const resource = receipt.localeResources[candidate];
      if (resource) return resolveGhostManifestLocale(runtimeManifest, resource);
    }
    return runtimeManifest;
  }
  /**
   * 读取当前宿主语言对应的 locale 文件。已安装目录被用户手工改坏时不让
   * 整个插件消失：记录告警并回退原 manifest；正常安装路径已在 parse 阶段严验。
   */
  readInstalledLocalizedManifest(dir, manifest) {
    const requestedLocale = this.options.getLocale?.();
    const runtimeManifest = withGhostResolvedLocale(manifest, requestedLocale);
    const localePath = ghostLocalePathFor(manifest, requestedLocale);
    if (!localePath) return runtimeManifest;
    const fallbackPath = manifest.locales?.en;
    const candidates = [
      ...new Set([localePath, fallbackPath].filter((value) => Boolean(value)))
    ];
    for (const candidatePath of candidates) {
      try {
        const absPath = resolveGhostContentPathSync(dir, candidatePath, {
          expect: "file",
          label: "ghost locale"
        });
        const bytes = readBoundedFileNoFollowSync(absPath, GHOST_LOCALE_MAX_BYTES2, {
          containWithin: import_node_fs4.default.realpathSync(dir)
        });
        if (bytes === null) {
          throw new Error(`locale \u6587\u4EF6\u7F3A\u5931\u3001\u8D85\u8FC7 ${GHOST_LOCALE_MAX_BYTES2} \u5B57\u8282\u6216\u4F4D\u4E8E\u63D2\u4EF6\u76EE\u5F55\u4E4B\u5916`);
        }
        const raw = JSON.parse(bytes.toString("utf8"));
        const validated = validateGhostManifestLocaleResource(raw, manifest);
        if (!validated.ok) throw new Error(validated.reason);
        return resolveGhostManifestLocale(runtimeManifest, validated.resource);
      } catch (err) {
        this.options.log?.warn("ghost locale candidate invalid", {
          id: manifest.id,
          localePath: candidatePath,
          error: err instanceof Error ? err.message : String(err)
        });
      }
    }
    this.options.log?.warn("ghost locale fallback to base manifest", {
      id: manifest.id,
      localePath
    });
    return runtimeManifest;
  }
  /**
   * 启用 / 停用一张意识。停用不删任何东西,只把批准 receipt 的 enabled 翻过来
   * (安装目录里的 `.disabled` 只作为旧版本兼容镜像同步维护)。幂等。
   *
   * 两个方向不对称:**启用需要有效安装验证状态**(无法自动恢复时先重新安装),
   * **停用必须永远能成功** —— 停用是安全的收敛方向,不能因为技能快照
   * 被外部删掉之类的环境问题把插件卡在"既不能用也不能关"。
   */
  async setEnabled(id, enabled) {
    return this.runExclusiveMutation(() => this.setEnabledUnlocked(id, enabled));
  }
  async setEnabledUnlocked(id, enabled) {
    if (!isValidGhostId2(id)) {
      return { rejection: { code: "invalid-id", reason: "\u975E\u6CD5\u610F\u8BC6 id" } };
    }
    const dir = import_node_path6.default.join(this.contentRootDir(), id);
    let dirKind;
    try {
      dirKind = classifyGhostDirEntrySync(dir);
    } catch {
      dirKind = null;
    }
    if (dirKind !== "directory") {
      return { rejection: { code: "not-installed", reason: `\u610F\u8BC6 ${id} \u672A\u88C5\u5165` } };
    }
    const receiptResult = this.readApproval(id);
    if (receiptResult.state !== "approved" && enabled) {
      return {
        rejection: {
          code: "approval-required",
          reason: `\u63D2\u4EF6 ${id} \u7F3A\u5C11\u6709\u6548\u7684\u5B89\u88C5\u9A8C\u8BC1\u8BB0\u5F55\uFF0C\u8BF7\u91CD\u65B0\u5B89\u88C5`
        }
      };
    }
    if (!this.isRealDirChild(this.contentRootDir(), id)) {
      return { rejection: { code: "not-installed", reason: `\u610F\u8BC6 ${id} \u672A\u88C5\u5165` } };
    }
    const marker = import_node_path6.default.join(dir, DISABLED_MARKER_FILE);
    const markerExisted = this.isDisabledMarkerPresentSync(dir);
    try {
      if (enabled) {
        try {
          if (classifyGhostDirEntrySync(marker) !== "file") {
            throw new Error("ghost disabled marker is not a regular file");
          }
        } catch (error) {
          if (error.code !== "ENOENT") throw error;
        }
        await import_node_fs4.default.promises.rm(marker, { force: true });
      } else {
        try {
          if (classifyGhostDirEntrySync(marker) !== "file") {
            throw new Error("ghost disabled marker is not a regular file");
          }
        } catch (error) {
          if (error.code !== "ENOENT") throw error;
        }
        await import_node_fs4.default.promises.writeFile(marker, "");
      }
    } catch (err) {
      return {
        rejection: {
          code: "io",
          reason: `\u542F\u505C\u6807\u8BB0\u5199\u5165\u5931\u8D25:${err instanceof Error ? err.message : String(err)}`
        }
      };
    }
    if (receiptResult.state === "approved") {
      try {
        await this.receiptStore.write(
          { ...receiptResult.receipt, enabled },
          { skillSourceDir: dir, requireSkillSnapshot: enabled }
        );
      } catch (err) {
        if (!enabled) {
          this.options.log?.warn("ghost disable persisted via mirror only; receipt write failed", {
            id,
            error: err instanceof Error ? err.message : String(err)
          });
          this.options.onChanged?.(this.list());
          return { ok: true };
        }
        if (markerExisted) {
          await import_node_fs4.default.promises.writeFile(marker, "").catch((rollbackErr) => {
            (this.options.log?.error ?? this.options.log?.warn)?.call(
              this.options.log,
              "ghost enable failed and mirror rollback also failed; old clients may see it enabled",
              {
                id,
                error: rollbackErr instanceof Error ? rollbackErr.message : String(rollbackErr)
              }
            );
          });
        }
        return {
          rejection: { code: "io", reason: err instanceof Error ? err.message : String(err) }
        };
      }
    }
    this.options.log?.info("ghost enabled state changed", { id, enabled });
    this.options.onChanged?.(this.list());
    return { ok: true };
  }
  /**
   * 按清单声明读安装目录里的 icon,转 data URL。未声明 / 文件缺失 / 超限 /
   * 读失败一律返回 null(仅 warn 降级,不拖垮 list)。
   */
  readInstalledIconDataUrl(dir, manifest) {
    if (manifest.icon === void 0) return null;
    try {
      const iconPath = resolveGhostContentPathSync(dir, manifest.icon, {
        expect: "file",
        label: "ghost icon"
      });
      const bytes = readBoundedFileNoFollowSync(iconPath, GHOST_ICON_MAX_BYTES, {
        containWithin: import_node_fs4.default.realpathSync(dir)
      });
      if (bytes === null) {
        this.options.log?.warn("ghost icon skipped: missing or oversize", {
          dir,
          icon: manifest.icon
        });
        return null;
      }
      return buildIconDataUrl(manifest.icon, bytes);
    } catch {
      this.options.log?.warn("ghost icon skipped: unreadable", { dir, icon: manifest.icon });
      return null;
    }
  }
  /**
   * 只验不装:读 .cindy → 解包 → 校验清单,返回清单(含 icon data URL),
   * 零副作用。设置页 / 拖入 / 双击三个装入入口都先 inspect，校验通过后
   * 才 install；能力知情面由安装后的插件详情统一展示。
   */
  async inspect(lizFilePath) {
    const parsed = await this.parse(lizFilePath);
    if ("rejection" in parsed) return parsed;
    return {
      manifest: parsed.manifest,
      canonicalManifest: parsed.canonicalManifest,
      unsupportedLegacySlots: parsed.unsupportedLegacySlots,
      trust: parsed.trust,
      packageSha256: parsed.packageSha256,
      rawManifestSha256: parsed.rawManifestSha256,
      releasedLegacyDigestFormat: parsed.releasedLegacyDigestFormat,
      ...parsed.iconDataUrl !== void 0 ? { iconDataUrl: parsed.iconDataUrl } : {}
    };
  }
  /** 装入的前半程(读文件 / 解包 / 校验清单),inspect 与 install 共用。 */
  async parse(lizFilePath) {
    let buf;
    try {
      buf = await readRegularFileStableWithLimit(lizFilePath, MAX_NODE_CINDY_FILE_BYTES);
    } catch (err) {
      if (err.code === "ENOENT") {
        return { rejection: { code: "source-not-found", reason: "\u6587\u4EF6\u4E0D\u5B58\u5728" } };
      }
      if (err instanceof Error && err.message.includes("exceeds")) {
        return {
          rejection: {
            code: "file-invalid",
            reason: `\u6587\u4EF6\u8D85\u8FC7 ${MAX_NODE_CINDY_FILE_BYTES} \u5B57\u8282\u4E0A\u9650`
          }
        };
      }
      return {
        rejection: { code: "io", reason: err instanceof Error ? err.message : String(err) }
      };
    }
    let zip;
    try {
      zip = await import_jszip2.default.loadAsync(buf);
    } catch {
      return { rejection: { code: "file-invalid", reason: "\u4E0D\u662F\u5408\u6CD5\u7684 .cindy \u538B\u7F29\u5305" } };
    }
    const allEntries = Object.values(zip.files).filter((e) => !e.name.startsWith("__MACOSX/"));
    if (allEntries.length === 0) {
      return { rejection: { code: "file-invalid", reason: "\u538B\u7F29\u5305\u662F\u7A7A\u7684" } };
    }
    if (allEntries.length > MAX_NODE_ZIP_ENTRIES) {
      return {
        rejection: {
          code: "file-invalid",
          reason: `\u538B\u7F29\u5305\u6761\u76EE\u8FC7\u591A:${allEntries.length}(\u4E0A\u9650 ${MAX_NODE_ZIP_ENTRIES})`
        }
      };
    }
    const nonCanonicalEntry = allEntries.find((entry) => hasNonCanonicalZipPath(entry.name));
    if (nonCanonicalEntry) {
      return {
        rejection: { code: "file-invalid", reason: `\u538B\u7F29\u5305\u5185\u6709\u975E\u6CD5\u8DEF\u5F84:${nonCanonicalEntry.name}` }
      };
    }
    const prefix = detectSingleTopFolderPrefix(allEntries.map((e) => e.name));
    const seenEntryPaths = /* @__PURE__ */ new Set();
    const aliasedEntry = allEntries.find((entry) => {
      const rel = entry.name.slice(prefix.length).replace(/\/$/, "");
      if (rel.length === 0) return false;
      const folded = rel.toLowerCase();
      if (seenEntryPaths.has(folded)) return true;
      seenEntryPaths.add(folded);
      return false;
    });
    if (aliasedEntry) {
      return {
        rejection: {
          code: "file-invalid",
          reason: `\u538B\u7F29\u5305\u542B\u5927\u5C0F\u5199\u6298\u53E0\u540E\u91CD\u590D\u7684\u8DEF\u5F84:${aliasedEntry.name.slice(prefix.length)}`
        }
      };
    }
    const reservedHostFile = allEntries.find((entry) => {
      if (entry.dir || !entry.name.startsWith(prefix)) return false;
      const rel = entry.name.slice(prefix.length).toLowerCase();
      return rel === DISABLED_MARKER_FILE || rel === TRUST_METADATA_FILE;
    });
    if (reservedHostFile) {
      return {
        rejection: {
          code: "file-invalid",
          reason: `\u538B\u7F29\u5305\u4E0D\u80FD\u5305\u542B\u4E3B\u673A\u4FDD\u7559\u6587\u4EF6:${reservedHostFile.name.slice(prefix.length)}`
        }
      };
    }
    const manifestEntry = zip.file(`${prefix}${GHOST_MANIFEST_FILE}`);
    if (!manifestEntry) {
      return {
        rejection: { code: "file-invalid", reason: `\u538B\u7F29\u5305\u6839\u90E8\u7F3A\u5C11 ${GHOST_MANIFEST_FILE}` }
      };
    }
    let manifestRaw;
    let manifestBytes;
    try {
      manifestBytes = await readZipEntryBufferWithLimit(
        manifestEntry,
        MAX_GHOST_MANIFEST_BYTES,
        GHOST_MANIFEST_FILE
      );
      manifestRaw = JSON.parse(manifestBytes.toString("utf8"));
    } catch {
      return {
        rejection: { code: "file-invalid", reason: `${GHOST_MANIFEST_FILE} \u4E0D\u662F\u5408\u6CD5 JSON` }
      };
    }
    const hostUnsupportedReason = ghostManifestHostUnsupportedReason(manifestRaw);
    if (hostUnsupportedReason) {
      return { rejection: { code: "host-unsupported", reason: hostUnsupportedReason } };
    }
    const v = validateGhostManifest2(manifestRaw);
    if (!v.ok) {
      return { rejection: { code: "file-invalid", reason: `\u6E05\u5355\u4E0D\u5408\u683C:${v.reason}` } };
    }
    if (!v.manifest.node && buf.byteLength > MAX_BASIC_CINDY_FILE_BYTES) {
      return {
        rejection: {
          code: "file-invalid",
          reason: `\u666E\u901A\u6C99\u7BB1\u63D2\u4EF6\u6587\u4EF6\u8FC7\u5927:${buf.byteLength} \u5B57\u8282(\u4E0A\u9650 ${MAX_BASIC_CINDY_FILE_BYTES})`
        }
      };
    }
    const maxEntries = v.manifest.node ? MAX_NODE_ZIP_ENTRIES : MAX_BASIC_ZIP_ENTRIES;
    if (allEntries.length > maxEntries) {
      return {
        rejection: {
          code: "file-invalid",
          reason: `\u538B\u7F29\u5305\u6761\u76EE\u8FC7\u591A:${allEntries.length}(\u4E0A\u9650 ${maxEntries})`
        }
      };
    }
    if (v.manifest.node && !zip.file(`${prefix}${v.manifest.node.entry}`)) {
      return {
        rejection: {
          code: "file-invalid",
          reason: `\u6E05\u5355\u58F0\u660E\u4E86 node.entry,\u4F46\u538B\u7F29\u5305\u5185\u7F3A\u5C11 ${v.manifest.node.entry}`
        }
      };
    }
    if (v.manifest.mainView && !zip.file(`${prefix}${v.manifest.mainView.html}`)) {
      return {
        rejection: {
          code: "file-invalid",
          reason: `\u6E05\u5355\u58F0\u660E\u4E86 mainView.html,\u4F46\u538B\u7F29\u5305\u5185\u7F3A\u5C11 ${v.manifest.mainView.html}`
        }
      };
    }
    let localizedManifest = withGhostResolvedLocale(v.manifest, this.options.getLocale?.());
    const localeResources = {};
    if (v.manifest.locales !== void 0) {
      const resources = /* @__PURE__ */ new Map();
      for (const localePath2 of Object.values(v.manifest.locales)) {
        if (!localePath2) continue;
        const localeEntry = zip.file(`${prefix}${localePath2}`);
        if (!localeEntry) {
          return {
            rejection: {
              code: "file-invalid",
              reason: `\u6E05\u5355\u58F0\u660E\u4E86 locale,\u4F46\u538B\u7F29\u5305\u5185\u7F3A\u5C11 ${localePath2}`
            }
          };
        }
        let localeRaw;
        try {
          localeRaw = JSON.parse(
            (await readZipEntryBufferWithLimit(
              localeEntry,
              GHOST_LOCALE_MAX_BYTES2,
              `locale ${localePath2}`
            )).toString("utf8")
          );
        } catch {
          return {
            rejection: {
              code: "file-invalid",
              reason: `locale \u6587\u4EF6\u4E0D\u662F\u5408\u6CD5 JSON \u6216\u8D85\u8FC7 ${GHOST_LOCALE_MAX_BYTES2} \u5B57\u8282:${localePath2}`
            }
          };
        }
        const validated = validateGhostManifestLocaleResource(localeRaw, v.manifest);
        if (!validated.ok) {
          return {
            rejection: {
              code: "file-invalid",
              reason: `locale \u6587\u4EF6\u4E0D\u5408\u683C(${localePath2}):${validated.reason}`
            }
          };
        }
        resources.set(localePath2, validated.resource);
        localeResources[localePath2] = validated.resource;
      }
      const localePath = ghostLocalePathFor(v.manifest, this.options.getLocale?.());
      const resource = localePath ? resources.get(localePath) : void 0;
      if (resource) localizedManifest = resolveGhostManifestLocale(localizedManifest, resource);
    }
    const maxUncompressedBytes = v.manifest.node ? MAX_NODE_UNCOMPRESSED_BYTES : MAX_BASIC_UNCOMPRESSED_BYTES;
    try {
      await assertZipUncompressedLimit(allEntries, maxUncompressedBytes);
    } catch (err) {
      return {
        rejection: {
          code: "file-invalid",
          reason: err instanceof Error ? err.message : String(err)
        }
      };
    }
    const signature = await verifyGhostZipSignatures(
      zip,
      prefix,
      v.manifest,
      this.options.trustRegistry
    );
    if (!signature.ok) {
      return { rejection: { code: "file-invalid", reason: `\u7B7E\u540D\u9A8C\u8BC1\u5931\u8D25:${signature.reason}` } };
    }
    let iconDataUrl;
    if (v.manifest.icon !== void 0) {
      const iconEntry = zip.file(`${prefix}${v.manifest.icon}`);
      if (!iconEntry) {
        return {
          rejection: {
            code: "file-invalid",
            reason: `\u6E05\u5355\u58F0\u660E\u4E86 icon,\u4F46\u538B\u7F29\u5305\u5185\u7F3A\u5C11 ${v.manifest.icon}`
          }
        };
      }
      let iconData;
      try {
        iconData = await readZipEntryBufferWithLimit(iconEntry, GHOST_ICON_MAX_BYTES, "icon");
      } catch {
        return {
          rejection: {
            code: "file-invalid",
            reason: `icon \u8FC7\u5927(\u4E0A\u9650 ${GHOST_ICON_MAX_BYTES} \u5B57\u8282)`
          }
        };
      }
      iconDataUrl = buildIconDataUrl(v.manifest.icon, iconData) ?? void 0;
    }
    for (const skillItem of v.manifest.skill?.items ?? []) {
      const relPath = `${skillItem.dir}/SKILL.md`;
      const skillEntry = zip.file(`${prefix}${relPath}`);
      if (!skillEntry) {
        return {
          rejection: {
            code: "file-invalid",
            reason: `skill \u6761\u76EE\u58F0\u660E\u4E86 ${skillItem.dir},\u4F46\u538B\u7F29\u5305\u5185\u7F3A\u5C11 ${relPath}`
          }
        };
      }
      let skillMd;
      try {
        skillMd = await readZipEntryBufferWithLimit(
          skillEntry,
          GHOST_SKILL_MD_MAX_BYTES2,
          `skill ${relPath}`
        );
      } catch {
        return {
          rejection: {
            code: "file-invalid",
            reason: `${relPath} \u8FC7\u5927(\u4E0A\u9650 ${GHOST_SKILL_MD_MAX_BYTES2} \u5B57\u8282)`
          }
        };
      }
      const consistencyError = checkSkillMdConsistency(skillMd.toString("utf8"), skillItem);
      if (consistencyError) {
        return {
          rejection: {
            code: "file-invalid",
            reason: `skill \u6761\u76EE ${skillItem.dir}:${consistencyError}`
          }
        };
      }
    }
    const validatedManualEntries = /* @__PURE__ */ new Set();
    for (const manualItem of v.manifest.manual?.items ?? []) {
      const unitPrefix = `${prefix}${manualItem.dir}/`;
      const entryPath = `${unitPrefix}${GHOST_MANUAL_ENTRY_FILE}`;
      const entry = zip.file(entryPath);
      if (!entry || entry.dir || isZipSymbolicLink(entry)) {
        return {
          rejection: {
            code: "file-invalid",
            reason: `manual \u6761\u76EE\u58F0\u660E\u4E86 ${manualItem.dir},\u4F46\u538B\u7F29\u5305\u5185\u7F3A\u5C11\u666E\u901A\u6587\u4EF6 ${manualItem.dir}/${GHOST_MANUAL_ENTRY_FILE}`
          }
        };
      }
      const unitEntries = allEntries.filter(
        (candidate) => {
          const normalizedName = candidate.name.replace(/\\/g, "/");
          return normalizedName.startsWith(unitPrefix) && normalizedName !== unitPrefix;
        }
      );
      for (const manualEntry of unitEntries) {
        const normalizedEntryName = manualEntry.name.replace(/\\/g, "/");
        const relativePath = normalizedEntryName.slice(unitPrefix.length).replace(/\/$/, "");
        if (relativePath.length === 0) continue;
        if (manualEntry.name.includes("\\") || isZipSymbolicLink(manualEntry) || ghostManualLogicalPathForEntry(
          manualItem.name,
          relativePath,
          manualEntry.dir ? "directory" : "file"
        ) === null) {
          return {
            rejection: {
              code: "file-invalid",
              reason: `manual \u6761\u76EE\u65E0\u6CD5\u5F62\u6210\u5408\u6CD5 ghost_manual \u8DEF\u5F84:${manualItem.dir}/${relativePath}`
            }
          };
        }
        if (manualEntry.dir) continue;
        if (validatedManualEntries.has(manualEntry.name)) continue;
        let manualBytes;
        try {
          manualBytes = await readZipEntryBufferWithLimit(
            manualEntry,
            GHOST_MANUAL_MD_MAX_BYTES2,
            `manual ${manualItem.dir}/${relativePath}`
          );
        } catch {
          return {
            rejection: {
              code: "file-invalid",
              reason: `${manualItem.dir}/${relativePath} \u8FC7\u5927(\u4E0A\u9650 ${GHOST_MANUAL_MD_MAX_BYTES2} \u5B57\u8282)`
            }
          };
        }
        const decoded = decodeGhostManualMarkdown(manualBytes);
        if (!decoded.ok) {
          return {
            rejection: {
              code: "file-invalid",
              reason: `manual \u6587\u4EF6\u4E0D\u5408\u683C(${manualItem.dir}/${relativePath}):${decoded.reason}`
            }
          };
        }
        validatedManualEntries.add(manualEntry.name);
      }
    }
    return {
      manifest: localizedManifest,
      approvedManifest: v.manifest,
      canonicalManifest: v.manifest,
      localeResources,
      unsupportedLegacySlots: v.unsupportedLegacySlots,
      trust: signature.trust,
      packageSha256: import_node_crypto4.default.createHash("sha256").update(buf).digest("hex"),
      rawManifestSha256: import_node_crypto4.default.createHash("sha256").update(manifestBytes).digest("hex"),
      releasedLegacyDigestFormat: ghostManifestToLegacyV2DigestFormat(
        v.manifest,
        manifestRaw
      ),
      ...iconDataUrl !== void 0 ? { iconDataUrl } : {},
      allEntries,
      prefix
    };
  }
  async install(lizFilePath, opts) {
    return this.runExclusiveMutation(() => this.installUnlocked(lizFilePath, opts));
  }
  async installUnlocked(lizFilePath, opts) {
    const initiallyEnabled = opts?.initiallyEnabled ?? true;
    const parsed = await this.parse(lizFilePath);
    if ("rejection" in parsed) return parsed;
    if (opts?.expectedPackageSha256 !== void 0 && parsed.packageSha256 !== opts.expectedPackageSha256) {
      return {
        rejection: {
          code: "file-invalid",
          reason: "\u63D2\u4EF6\u6587\u4EF6\u5728\u68C0\u67E5\u540E\u53D1\u751F\u4E86\u53D8\u5316\uFF0C\u8BF7\u91CD\u65B0\u9009\u62E9"
        }
      };
    }
    const {
      manifest,
      approvedManifest,
      localeResources,
      packageSha256,
      iconDataUrl,
      allEntries,
      prefix
    } = parsed;
    const clearBuiltinTombstoneOnCommit = this.options.isTrustedBundledId?.(manifest.id) === true && this.options.clearBuiltinTombstone !== void 0;
    const trust = opts?.trustOverride === "cindy-official" ? CINDY_OFFICIAL_GHOST_TRUST : parsed.trust;
    const root = this.contentRootDir();
    const finalDir = import_node_path6.default.join(root, manifest.id);
    if (await pathExists(finalDir)) {
      return { rejection: { code: "already-installed", reason: `\u610F\u8BC6 ${manifest.id} \u5DF2\u88C5\u5165` } };
    }
    if (manifest.command !== void 0) {
      const commandFold = manifest.command.toLowerCase();
      const holder = this.list().find(
        (g) => g.manifest.command !== void 0 && g.manifest.command.toLowerCase() === commandFold
      );
      if (holder) {
        return {
          rejection: {
            code: "command-conflict",
            reason: `\u6307\u4EE4 /${manifest.command} \u5DF2\u88AB\u5DF2\u88C5\u610F\u8BC6\u300C${holder.manifest.name}\u300D(${holder.manifest.id})\u5360\u7528`
          }
        };
      }
    }
    const stagingDir = import_node_path6.default.join(
      root,
      `.cindy-installing-${manifest.id}-${import_node_crypto4.default.randomBytes(4).toString("hex")}`
    );
    const receiptRevision = import_node_crypto4.default.randomUUID();
    let receipt;
    try {
      await this.extractToStaging(allEntries, prefix, stagingDir, {
        disabled: !initiallyEnabled,
        maxUncompressedBytes: manifest.node ? MAX_NODE_UNCOMPRESSED_BYTES : MAX_BASIC_UNCOMPRESSED_BYTES,
        trust
      });
      await this.receiptStore.writePendingMutation(manifest.id, {
        kind: "install",
        packageSha256,
        receiptRevision,
        ...clearBuiltinTombstoneOnCommit ? { clearBuiltinTombstone: true } : {}
      });
      this.untrustedApprovals.add(this.isolationKey(manifest.id));
      try {
        opts?.beforePackagePlacement?.();
      } catch (error) {
        await this.receiptStore.clearPendingMutation(manifest.id);
        this.untrustedApprovals.delete(this.isolationKey(manifest.id));
        throw error;
      }
      try {
        await this.renameManagedDir(stagingDir, finalDir, "install placement", manifest.id);
      } catch (error) {
        const finalDirAbsent = await import_node_fs4.default.promises.lstat(finalDir).then(() => false).catch((statError) => statError.code === "ENOENT");
        if (finalDirAbsent) {
          try {
            await this.receiptStore.clearPendingMutation(manifest.id);
            this.untrustedApprovals.delete(this.isolationKey(manifest.id));
          } catch (clearError) {
            this.options.log?.warn("ghost install journal cleanup failed after placement error", {
              id: manifest.id,
              error: clearError instanceof Error ? clearError.message : String(clearError)
            });
          }
        }
        throw error;
      }
      try {
        receipt = createGhostInstallReceipt({
          manifest: approvedManifest,
          localeResources,
          enabled: initiallyEnabled,
          trust,
          // 指纹取自包投影而不是刚发布的 finalDir:发布后被换的字节应当在快照
          // 对账时被拒,而不是被首读钉成批准基线(P0-8)。
          skillContentSha256: await this.hashSkillContentFromPackage(
            approvedManifest,
            allEntries,
            prefix
          ),
          packageSha256,
          revision: receiptRevision,
          ...iconDataUrl !== void 0 ? { iconDataUrl } : {},
          ...opts?.installOrigin ? { installOrigin: opts.installOrigin } : {}
        });
        await this.receiptStore.write(receipt, { skillSourceDir: finalDir });
        let tombstoneClearPending = false;
        if (clearBuiltinTombstoneOnCommit) {
          try {
            this.options.clearBuiltinTombstone?.(manifest.id);
          } catch (error) {
            tombstoneClearPending = true;
            (this.options.log?.error ?? this.options.log?.warn)?.call(
              this.options.log,
              "builtin tombstone clear deferred to install recovery",
              {
                id: manifest.id,
                error: error instanceof Error ? error.message : String(error)
              }
            );
          }
        }
        if (!tombstoneClearPending) {
          try {
            await this.receiptStore.clearPendingMutation(manifest.id);
            this.untrustedApprovals.delete(this.isolationKey(manifest.id));
          } catch {
          }
        } else {
          this.untrustedApprovals.delete(this.isolationKey(manifest.id));
        }
      } catch (error) {
        try {
          await import_node_fs4.default.promises.rm(finalDir, { recursive: true, force: true });
          await this.receiptStore.clearPendingMutation(manifest.id);
          this.untrustedApprovals.delete(this.isolationKey(manifest.id));
        } catch (rollbackError) {
          (this.options.log?.error ?? this.options.log?.warn)?.call(
            this.options.log,
            "ghost install approval failed and rollback remains pending",
            {
              id: manifest.id,
              error: rollbackError instanceof Error ? rollbackError.message : String(rollbackError)
            }
          );
        }
        throw error;
      }
    } catch (err) {
      await import_node_fs4.default.promises.rm(stagingDir, { recursive: true, force: true }).catch(() => {
      });
      if (err instanceof InstallExtractError) {
        return { rejection: { code: "file-invalid", reason: err.message } };
      }
      return {
        rejection: { code: "io", reason: err instanceof Error ? err.message : String(err) }
      };
    }
    if (!receipt) {
      return { rejection: { code: "io", reason: "\u5B89\u88C5\u6279\u51C6\u72B6\u6001\u672A\u80FD\u751F\u6210" } };
    }
    const ghost = {
      manifest,
      dir: finalDir,
      enabled: initiallyEnabled,
      approval: { state: "approved", revision: receipt.revision },
      trust,
      ...iconDataUrl !== void 0 ? { iconDataUrl } : {}
    };
    this.options.log?.info("ghost installed", { id: manifest.id, version: manifest.version });
    const projected = this.projectCommittedMutationResult(ghost);
    this.options.onChanged?.(projected.list);
    return { ghost: projected.ghost };
  }
  /**
   * 原位更新一个已装意识(装入的姊妹操作,同一 .cindy 契约):
   * - 目标必须已装且 id 一致(装没装以目录为准,与 list 同一事实源);
   * - 唤醒/沉睡状态延续当前值(更新 ≠ 重新授权运行,也不偷偷点亮);
   * - 换目录走「旧目录改名备份 → staging 转正 → 删备份」,任何一步失败
   *   都把旧版原样滚回,不存在"旧的删了新的没就位"的中间态;
   * - 布局位置天然保留(panelKind 由 id 决定,id 未变)。
   * 调用方(IPC 层)负责先熄灯沙箱,更新后由下一次派活/渲染拉起新代码。
   */
  async update(lizFilePath, opts) {
    return this.runExclusiveMutation(() => this.updateUnlocked(lizFilePath, opts));
  }
  async updateUnlocked(lizFilePath, opts) {
    const parsed = await this.parse(lizFilePath);
    if ("rejection" in parsed) return parsed;
    if (opts?.expectedPackageSha256 !== void 0 && parsed.packageSha256 !== opts.expectedPackageSha256) {
      return {
        rejection: {
          code: "file-invalid",
          reason: "\u63D2\u4EF6\u6587\u4EF6\u5728\u68C0\u67E5\u540E\u53D1\u751F\u4E86\u53D8\u5316\uFF0C\u8BF7\u91CD\u65B0\u9009\u62E9"
        }
      };
    }
    const {
      manifest,
      approvedManifest,
      localeResources,
      packageSha256,
      iconDataUrl,
      allEntries,
      prefix
    } = parsed;
    const trust = opts?.trustOverride === "cindy-official" ? CINDY_OFFICIAL_GHOST_TRUST : parsed.trust;
    const root = this.contentRootDir();
    const finalDir = import_node_path6.default.join(root, manifest.id);
    if (!this.isRealDirChild(root, manifest.id)) {
      return {
        rejection: { code: "not-installed", reason: `\u610F\u8BC6 ${manifest.id} \u672A\u88C5\u5165,\u65E0\u4ECE\u66F4\u65B0` }
      };
    }
    const approvalResult = this.readApproval(manifest.id);
    const actualApproval = approvalTokenFor(approvalResult);
    if (actualApproval !== opts.expectedInstalledApproval) {
      return {
        rejection: {
          code: "state-changed",
          reason: "\u63D2\u4EF6\u5B89\u88C5\u72B6\u6001\u5728\u68C0\u67E5\u540E\u53D1\u751F\u4E86\u53D8\u5316\uFF0C\u8BF7\u91CD\u8BD5"
        }
      };
    }
    const installOrigin = opts.installOrigin;
    const enabled = approvalResult.state === "approved" ? (
      // 读时合并后的有效值:receipt 可能因状态根短暂不可写而停在陈旧的 enabled=true,
      // 用户的停用镜像不能被一次更新静默冲掉。
      this.effectiveEnabled(finalDir, approvalResult.receipt.enabled)
    ) : approvalResult.state === "legacy-unapproved" ? !this.isDisabledMarkerPresentSync(finalDir) : false;
    if (manifest.command !== void 0) {
      const commandFold = manifest.command.toLowerCase();
      const holder = this.list().find(
        (g) => g.manifest.id !== manifest.id && g.manifest.command !== void 0 && g.manifest.command.toLowerCase() === commandFold
      );
      if (holder) {
        return {
          rejection: {
            code: "command-conflict",
            reason: `\u6307\u4EE4 /${manifest.command} \u5DF2\u88AB\u5DF2\u88C5\u610F\u8BC6\u300C${holder.manifest.name}\u300D(${holder.manifest.id})\u5360\u7528`
          }
        };
      }
    }
    const rand = import_node_crypto4.default.randomBytes(4).toString("hex");
    const stagingDir = import_node_path6.default.join(root, `.cindy-installing-${manifest.id}-${rand}`);
    const backupDir = import_node_path6.default.join(root, `.cindy-updating-${manifest.id}-${rand}`);
    try {
      await this.extractToStaging(allEntries, prefix, stagingDir, {
        disabled: !enabled,
        maxUncompressedBytes: manifest.node ? MAX_NODE_UNCOMPRESSED_BYTES : MAX_BASIC_UNCOMPRESSED_BYTES,
        trust
      });
    } catch (err) {
      await import_node_fs4.default.promises.rm(stagingDir, { recursive: true, force: true }).catch(() => {
      });
      if (err instanceof InstallExtractError) {
        return { rejection: { code: "file-invalid", reason: err.message } };
      }
      return {
        rejection: { code: "io", reason: err instanceof Error ? err.message : String(err) }
      };
    }
    const receiptRevision = import_node_crypto4.default.randomUUID();
    try {
      await this.receiptStore.writePendingMutation(manifest.id, {
        kind: "update",
        packageSha256,
        backupDirName: import_node_path6.default.basename(backupDir),
        receiptRevision,
        phase: "prepared",
        ...approvalResult.state === "approved" && approvalResult.receipt.packageSha256 ? { oldPackageSha256: approvalResult.receipt.packageSha256 } : {}
      });
    } catch (err) {
      await import_node_fs4.default.promises.rm(stagingDir, { recursive: true, force: true }).catch(() => {
      });
      return {
        rejection: { code: "io", reason: err instanceof Error ? err.message : String(err) }
      };
    }
    this.untrustedApprovals.add(this.isolationKey(manifest.id));
    const clearUpdateQuarantineAfterRollback = async () => {
      try {
        await this.receiptStore.clearPendingMutation(manifest.id);
        this.untrustedApprovals.delete(this.isolationKey(manifest.id));
      } catch {
      }
    };
    try {
      await this.renameManagedDir(finalDir, backupDir, "update backup", manifest.id);
    } catch (err) {
      await import_node_fs4.default.promises.rm(stagingDir, { recursive: true, force: true }).catch(() => {
      });
      await clearUpdateQuarantineAfterRollback();
      return {
        rejection: { code: "io", reason: err instanceof Error ? err.message : String(err) }
      };
    }
    await this.receiptStore.writePendingMutation(manifest.id, {
      kind: "update",
      packageSha256,
      backupDirName: import_node_path6.default.basename(backupDir),
      receiptRevision,
      phase: "backed-up",
      ...approvalResult.state === "approved" && approvalResult.receipt.packageSha256 ? { oldPackageSha256: approvalResult.receipt.packageSha256 } : {}
    }).catch((error) => {
      (this.options.log?.error ?? this.options.log?.warn)?.call(
        this.options.log,
        "ghost update phase journal write failed; continuing with recoverable marker",
        {
          id: manifest.id,
          error: error instanceof Error ? error.message : String(error)
        }
      );
    });
    try {
      await this.renameManagedDir(stagingDir, finalDir, "update placement", manifest.id);
    } catch (err) {
      let rolledBack = true;
      await this.renameManagedDir(backupDir, finalDir, "update rollback", manifest.id).catch((rollbackErr) => {
        rolledBack = false;
        (this.options.log?.error ?? this.options.log?.warn)?.call(
          this.options.log,
          "ghost update rollback failed; install dir left inconsistent",
          {
            id: manifest.id,
            backupDir,
            error: rollbackErr instanceof Error ? rollbackErr.message : String(rollbackErr)
          }
        );
      });
      await import_node_fs4.default.promises.rm(stagingDir, { recursive: true, force: true }).catch(() => {
      });
      if (rolledBack) {
        await clearUpdateQuarantineAfterRollback();
      }
      return {
        rejection: {
          code: "io",
          reason: err instanceof Error ? err.message : String(err),
          ...rolledBack ? {} : { rollbackFailed: true }
        }
      };
    }
    let packageCommitPreparation;
    let receipt;
    try {
      packageCommitPreparation = opts.beforePackageCommit?.() ?? void 0;
      receipt = createGhostInstallReceipt({
        manifest: approvedManifest,
        localeResources,
        enabled,
        trust,
        // 同 install:指纹取自包投影,发布后的目录漂移在快照对账时 fail closed(P0-8)。
        skillContentSha256: await this.hashSkillContentFromPackage(
          approvedManifest,
          allEntries,
          prefix
        ),
        packageSha256,
        revision: receiptRevision,
        ...iconDataUrl !== void 0 ? { iconDataUrl } : {},
        ...installOrigin ? { installOrigin } : {}
      });
      await this.receiptStore.write(receipt, { skillSourceDir: finalDir });
    } catch (err) {
      let sideEffectRolledBack = !(err instanceof Error && "rollbackFailed" in err && err.rollbackFailed === true);
      if (packageCommitPreparation) {
        try {
          packageCommitPreparation.rollback();
        } catch (rollbackErr) {
          sideEffectRolledBack = false;
          (this.options.log?.error ?? this.options.log?.warn)?.call(
            this.options.log,
            "ghost update side-effect rollback failed",
            {
              id: manifest.id,
              error: rollbackErr instanceof Error ? rollbackErr.message : String(rollbackErr)
            }
          );
        }
      }
      let directoryRolledBack = false;
      if (sideEffectRolledBack) {
        directoryRolledBack = true;
        await import_node_fs4.default.promises.rm(finalDir, { recursive: true, force: true }).catch(() => void 0);
        await this.renameManagedDir(backupDir, finalDir, "update receipt rollback", manifest.id).catch((rollbackErr) => {
          directoryRolledBack = false;
          (this.options.log?.error ?? this.options.log?.warn)?.call(
            this.options.log,
            "ghost update rollback failed after receipt write failure",
            {
              id: manifest.id,
              backupDir,
              error: rollbackErr instanceof Error ? rollbackErr.message : String(rollbackErr)
            }
          );
        });
      } else {
        (this.options.log?.error ?? this.options.log?.warn)?.call(
          this.options.log,
          "ghost update left package swap for startup recovery after side-effect rollback failure",
          { id: manifest.id, backupDir }
        );
      }
      const rolledBack = sideEffectRolledBack && directoryRolledBack;
      if (rolledBack) {
        await clearUpdateQuarantineAfterRollback();
      }
      return {
        rejection: {
          code: "io",
          reason: err instanceof Error ? err.message : String(err),
          ...rolledBack ? {} : { rollbackFailed: true }
        }
      };
    }
    try {
      await this.receiptStore.clearPendingMutation(manifest.id);
      this.untrustedApprovals.delete(this.isolationKey(manifest.id));
    } catch {
    }
    try {
      packageCommitPreparation?.commit();
    } catch (err) {
      this.options.log?.warn("ghost update side-effect commit notification failed", {
        id: manifest.id,
        error: err instanceof Error ? err.message : String(err)
      });
    }
    await import_node_fs4.default.promises.rm(backupDir, { recursive: true, force: true }).catch(() => {
    });
    const ghost = {
      manifest,
      dir: finalDir,
      enabled,
      approval: { state: "approved", revision: receipt.revision },
      trust,
      ...iconDataUrl !== void 0 ? { iconDataUrl } : {}
    };
    opts?.onPackagePlaced?.();
    this.options.log?.info("ghost updated", { id: manifest.id, version: manifest.version });
    const projected = this.projectCommittedMutationResult(ghost);
    this.options.onChanged?.(projected.list);
    return { ghost: projected.ghost };
  }
  /**
   * 随包种子已经由 provisioning 层逐字节对账后，为其建立 Host 安装验证状态。
   * 该入口不得用于市场包或任意本地目录；id 必须落在注入的
   * 随包种子清单里(`isTrustedBundledId`)。
   *
   * `markerEnabled` 是安装目录 `.disabled` 兼容镜像的读数,**只往停用方向合并,
   * 不往启用方向翻**:receipt 才是授权事实,镜像文件可被外部因素移除(AV 隔离
   * 恢复/同步冲突解析/手动清理),拿它覆写 receipt 会让用户显式停用的插件在下一轮
   * 对账被静默重新启用 —— 无用户操作、无审计,且带 skill 能力的插件会随之重新挂进全局
   * 技能链。反方向(镜像说停用、receipt 说启用)必须照办:停用是安全方向,而且
   * 旧客户端只会写镜像文件。重新启用只有用户显式 `setEnabled(true)` 一条路。
   */
  async publishTrustedBundledSeedUnlocked(id, sourceDirInput, options2) {
    if (!isValidGhostId2(id) || this.options.isTrustedBundledId?.(id) !== true || this.options.isTrustedBundledSource?.(id, sourceDirInput) !== true) {
      throw new Error("builtin seed publish source is not trusted");
    }
    const sourceDir = import_node_path6.default.resolve(sourceDirInput);
    if (classifyGhostDirEntrySync(sourceDir) !== "directory") {
      throw new Error("builtin seed publish source is not a real directory");
    }
    const packageSha256 = await hashApprovedDirectory(sourceDir);
    const root = this.contentRootDir();
    const finalDir = import_node_path6.default.join(root, id);
    const rand = import_node_crypto4.default.randomBytes(4).toString("hex");
    const stagingDir = import_node_path6.default.join(root, `.cindy-installing-${id}-${rand}`);
    const backupDir = import_node_path6.default.join(root, `.cindy-updating-${id}-${rand}`);
    let finalKind;
    try {
      finalKind = classifyGhostDirEntrySync(finalDir);
    } catch (error) {
      if (error.code !== "ENOENT") throw error;
      finalKind = "missing";
    }
    if (finalKind !== "missing" && finalKind !== "directory") {
      throw new Error("builtin installed path is not a real directory");
    }
    try {
      await copyBundledSeedDirectory(sourceDir, stagingDir);
      if (options2.disabled) {
        await import_node_fs4.default.promises.writeFile(import_node_path6.default.join(stagingDir, DISABLED_MARKER_FILE), "");
      }
      if (options2.trust) {
        await import_node_fs4.default.promises.writeFile(
          import_node_path6.default.join(stagingDir, TRUST_METADATA_FILE),
          `${JSON.stringify(options2.trust, null, 2)}
`
        );
      }
      if (finalKind === "missing") {
        await this.receiptStore.writePendingMutation(id, { kind: "install", packageSha256 });
        this.untrustedApprovals.add(this.isolationKey(id));
        await this.renameManagedDir(stagingDir, finalDir, "seed install placement", id);
        return;
      }
      await this.receiptStore.writePendingMutation(id, {
        kind: "update",
        packageSha256,
        backupDirName: import_node_path6.default.basename(backupDir),
        phase: "prepared"
      });
      this.untrustedApprovals.add(this.isolationKey(id));
      await this.renameManagedDir(finalDir, backupDir, "seed update backup", id);
      await this.receiptStore.writePendingMutation(id, {
        kind: "update",
        packageSha256,
        backupDirName: import_node_path6.default.basename(backupDir),
        phase: "backed-up"
      });
      await this.renameManagedDir(stagingDir, finalDir, "seed update placement", id);
      await this.receiptStore.writePendingMutation(id, {
        kind: "update",
        packageSha256,
        backupDirName: import_node_path6.default.basename(backupDir),
        phase: "published"
      });
    } catch (error) {
      await import_node_fs4.default.promises.rm(stagingDir, { recursive: true, force: true }).catch(() => void 0);
      const backupKind = await classifyGhostDirEntry(backupDir).catch((entryError) => {
        if (entryError.code === "ENOENT") return null;
        throw entryError;
      });
      const publishedKind = await classifyGhostDirEntry(finalDir).catch((entryError) => {
        if (entryError.code === "ENOENT") return null;
        throw entryError;
      });
      if (backupKind === "directory" && publishedKind === null) {
        try {
          await this.renameManagedDir(backupDir, finalDir, "seed update rollback", id);
          await this.receiptStore.clearPendingMutation(id);
          this.untrustedApprovals.delete(this.isolationKey(id));
        } catch {
        }
      } else if (backupKind === null && publishedKind === null) {
        try {
          await this.receiptStore.clearPendingMutation(id);
          this.untrustedApprovals.delete(this.isolationKey(id));
        } catch {
        }
      }
      throw error;
    }
  }
  async approveTrustedBundledInstall(manifest, markerEnabled, options2) {
    return this.runExclusiveMutation(
      (mutation) => mutation.approveTrustedBundledInstall(manifest, markerEnabled, options2)
    );
  }
  async approveTrustedBundledInstallUnlocked(manifest, markerEnabled, options2) {
    if (this.options.isTrustedBundledId?.(manifest.id) !== true) {
      throw new Error(
        `approveTrustedBundledInstall \u53EA\u670D\u52A1\u968F\u5305\u79CD\u5B50\u63D2\u4EF6:${manifest.id} \u4E0D\u5728\u79CD\u5B50\u6E05\u5355\u91CC`
      );
    }
    const dir = import_node_path6.default.join(this.contentRootDir(), manifest.id);
    if (!options2 || typeof options2.sourceDir !== "string" || options2.sourceDir.trim() === "") {
      throw new Error("approveTrustedBundledInstall requires a verified bundled source directory");
    }
    const sourceDir = import_node_path6.default.resolve(options2.sourceDir);
    if (sourceDir === import_node_path6.default.resolve(dir)) {
      throw new Error("approveTrustedBundledInstall refuses the mutable installed directory");
    }
    if (this.options.isTrustedBundledSource?.(manifest.id, sourceDir) !== true) {
      throw new Error("approveTrustedBundledInstall source is outside the trusted seed roster");
    }
    if (classifyGhostDirEntrySync(sourceDir) !== "directory") {
      throw new Error("approveTrustedBundledInstall source is not a real directory");
    }
    const sourceManifestPath = resolveGhostContentPathSync(sourceDir, GHOST_MANIFEST_FILE, {
      expect: "file",
      label: "bundled manifest"
    });
    const sourceManifestRaw = JSON.parse(import_node_fs4.default.readFileSync(sourceManifestPath, "utf8"));
    const sourceManifest = validateGhostManifest2(sourceManifestRaw);
    const expectedManifest = validateNormalizedGhostManifest(manifest);
    if (!sourceManifest.ok || !expectedManifest.ok || !(0, import_node_util.isDeepStrictEqual)(sourceManifest.manifest, expectedManifest.manifest)) {
      throw new Error("approveTrustedBundledInstall source manifest does not match approval");
    }
    const approvedManifest = expectedManifest.manifest;
    const localeResources = this.readApprovedLocaleResources(sourceDir, approvedManifest);
    const iconDataUrl = this.readInstalledIconDataUrl(sourceDir, approvedManifest) ?? void 0;
    const packageSha256 = await hashApprovedDirectory(sourceDir);
    const skillContentSha256 = await hashApprovedSkillContent(approvedManifest, sourceDir);
    const pendingPublish = this.receiptStore.readPendingMutationSync(approvedManifest.id);
    if (pendingPublish.state === "invalid" || pendingPublish.state === "unreadable") {
      throw new Error(`builtin seed publish journal is ${pendingPublish.state}`);
    }
    if (pendingPublish.state === "valid" && pendingPublish.mutation.kind === "uninstall") {
      throw new Error("builtin seed publish journal conflicts with uninstall");
    }
    if (pendingPublish.state === "valid" && (pendingPublish.mutation.kind === "install" || pendingPublish.mutation.kind === "update") && pendingPublish.mutation.packageSha256 !== packageSha256) {
      throw new Error("builtin seed publish journal does not match immutable source");
    }
    const trust = CINDY_OFFICIAL_GHOST_TRUST;
    const current = this.readApproval(approvedManifest.id);
    const persisted = current.state === "approved" ? current : this.receiptStore.read(approvedManifest.id);
    const priorEnabled = persisted.state === "approved" ? persisted.receipt.enabled : void 0;
    const enabled = priorEnabled === void 0 ? markerEnabled : markerEnabled && priorEnabled;
    if (enabled !== markerEnabled) {
      try {
        this.writeDisabledMarkerSync(dir);
      } catch (err) {
        this.options.log?.warn("ghost disabled mirror rewrite failed", {
          id: approvedManifest.id,
          error: err instanceof Error ? err.message : String(err)
        });
      }
    }
    if (current.state === "approved" && (0, import_node_util.isDeepStrictEqual)(current.receipt.manifest, approvedManifest) && (0, import_node_util.isDeepStrictEqual)(current.receipt.localeResources, localeResources) && (0, import_node_util.isDeepStrictEqual)(current.receipt.trust, trust) && (0, import_node_util.isDeepStrictEqual)(current.receipt.skillContentSha256, skillContentSha256) && current.receipt.packageSha256 === packageSha256 && current.receipt.iconDataUrl === iconDataUrl) {
      const snapshotHealthy = (approvedManifest.skill?.items.length ?? 0) === 0 || await this.receiptStore.skillSnapshotMatchesReceipt(
        current.receipt,
        this.receiptStore.skillSnapshotRoot(approvedManifest.id, current.receipt.revision)
      );
      if (!snapshotHealthy) {
        await this.receiptStore.write(
          {
            ...current.receipt,
            enabled
          },
          { skillSourceDir: sourceDir }
        );
        await this.finishTrustedBundledPublish(approvedManifest.id, pendingPublish);
        this.untrustedApprovals.delete(this.isolationKey(approvedManifest.id));
        return true;
      }
      if (current.receipt.enabled !== enabled) {
        await this.receiptStore.write(
          {
            ...current.receipt,
            enabled
          },
          { skillSourceDir: sourceDir }
        );
        await this.finishTrustedBundledPublish(approvedManifest.id, pendingPublish);
        this.untrustedApprovals.delete(this.isolationKey(approvedManifest.id));
        return true;
      }
      await this.finishTrustedBundledPublish(approvedManifest.id, pendingPublish);
      this.untrustedApprovals.delete(this.isolationKey(approvedManifest.id));
      return false;
    }
    await this.receiptStore.write(
      createGhostInstallReceipt({
        manifest: approvedManifest,
        localeResources,
        enabled,
        trust,
        skillContentSha256,
        packageSha256,
        ...iconDataUrl !== void 0 ? { iconDataUrl } : {}
      }),
      { skillSourceDir: sourceDir }
    );
    await this.finishTrustedBundledPublish(approvedManifest.id, pendingPublish);
    this.untrustedApprovals.delete(this.isolationKey(approvedManifest.id));
    return true;
  }
  async finishTrustedBundledPublish(id, pending) {
    if (pending.state === "missing") return;
    if (pending.state !== "valid" || pending.mutation.kind === "uninstall") {
      throw new Error("builtin seed publish journal cannot be committed");
    }
    await this.receiptStore.clearPendingMutation(id);
    if (pending.mutation.kind === "update") {
      await import_node_fs4.default.promises.rm(import_node_path6.default.join(this.contentRootDir(), pending.mutation.backupDirName), {
        recursive: true,
        force: true
      }).catch(() => void 0);
    }
  }
  /**
   * 撤销 Host 批准。**契约是"调用返回后该插件一定不再被授权运行"**：正常路径删掉
   * receipt 与技能快照；删不掉(状态根不可写等)时退回进程内隔离，不把失败原样抛给
   * 调用方去自己 fail closed —— 那正是上一版留下 fail-open 的地方。
   */
  async removeInstallApproval(id) {
    return this.runExclusiveMutation((mutation) => mutation.removeInstallApproval(id));
  }
  async removeInstallApprovalUnlocked(id) {
    try {
      await this.receiptStore.remove(id);
      this.untrustedApprovals.delete(this.isolationKey(id));
      return true;
    } catch (err) {
      this.untrustedApprovals.add(this.isolationKey(id));
      const log2 = this.options.log;
      (log2?.error ?? log2?.warn)?.call(
        log2,
        "ghost approval could not be removed; kept untrusted in-process",
        { id, error: err instanceof Error ? err.message : String(err) }
      );
      return false;
    }
  }
  readApprovedLocaleResources(dir, manifest) {
    const resources = {};
    const realDir = import_node_fs4.default.realpathSync(dir);
    for (const localePath of Object.values(manifest.locales ?? {})) {
      if (!localePath) continue;
      const absPath = resolveGhostContentPathSync(dir, localePath, {
        expect: "file",
        label: "bundled locale"
      });
      const bytes = readBoundedFileNoFollowSync(absPath, GHOST_LOCALE_MAX_BYTES2, {
        containWithin: realDir
      });
      if (bytes === null) throw new Error(`bundled locale missing or oversized: ${localePath}`);
      const raw = JSON.parse(bytes.toString("utf8"));
      const validated = validateGhostManifestLocaleResource(raw, manifest);
      if (!validated.ok) throw new Error(`bundled locale invalid: ${localePath}`);
      resources[localePath] = validated.resource;
    }
    return resources;
  }
  /** 解压 zip 条目到 staging 目录(install / update 共用;含 zip-slip / bomb 防御)。 */
  async extractToStaging(allEntries, prefix, stagingDir, opts) {
    await import_node_fs4.default.promises.mkdir(stagingDir, { recursive: true });
    let totalBytes = 0;
    for (const entry of allEntries) {
      const relName = entry.name.slice(prefix.length);
      if (relName.length === 0) continue;
      const dest = safeJoin(stagingDir, relName);
      if (!dest) throw new InstallExtractError(`\u538B\u7F29\u5305\u5185\u6709\u975E\u6CD5\u8DEF\u5F84:${entry.name}`);
      if (entry.dir) {
        await import_node_fs4.default.promises.mkdir(dest, { recursive: true });
        continue;
      }
      const data = await entry.async("nodebuffer");
      totalBytes += data.byteLength;
      if (totalBytes > opts.maxUncompressedBytes) {
        throw new InstallExtractError(`\u89E3\u538B\u540E\u603B\u5927\u5C0F\u8D85\u8FC7\u4E0A\u9650(${opts.maxUncompressedBytes} \u5B57\u8282)`);
      }
      await import_node_fs4.default.promises.mkdir(import_node_path6.default.dirname(dest), { recursive: true });
      await import_node_fs4.default.promises.writeFile(dest, data);
      const mode = installedFileModeFromZip(entry.unixPermissions);
      if (mode !== null) await import_node_fs4.default.promises.chmod(dest, mode);
    }
    if (opts.disabled) {
      await import_node_fs4.default.promises.writeFile(import_node_path6.default.join(stagingDir, DISABLED_MARKER_FILE), "");
    }
    await import_node_fs4.default.promises.writeFile(
      import_node_path6.default.join(stagingDir, TRUST_METADATA_FILE),
      `${JSON.stringify(
        {
          ...opts.trust
        },
        null,
        2
      )}
`
    );
  }
  /**
   * 卸下一个意识(删除其目录;布局树里的位置记录由布局引擎保留)。
   *
   * Host 需要在内置意识卸载后先写 tombstone，再向 renderer 发布一份
   * 已安装 + 可恢复相互一致的快照。notify=false 只延后广播，不改变卸载语义。
   */
  async uninstall(id, options2 = {}) {
    return this.runExclusiveMutation(() => this.uninstallUnlocked(id, options2));
  }
  async uninstallUnlocked(id, options2 = {}) {
    if (!isValidGhostId2(id)) {
      return { rejection: { code: "invalid-id", reason: "\u975E\u6CD5\u610F\u8BC6 id" } };
    }
    const root = this.contentRootDir();
    const dir = import_node_path6.default.join(root, id);
    if (import_node_path6.default.dirname(dir) !== import_node_path6.default.resolve(root) && import_node_path6.default.dirname(dir) !== root) {
      return { rejection: { code: "invalid-id", reason: "\u975E\u6CD5\u610F\u8BC6 id" } };
    }
    if (!this.isRealDirChild(root, id)) {
      return { rejection: { code: "not-installed", reason: `\u610F\u8BC6 ${id} \u672A\u88C5\u5165` } };
    }
    const builtinTombstone = options2.recordBuiltinTombstone !== false && this.options.isTrustedBundledId?.(id) === true;
    await this.receiptStore.writePendingMutation(id, {
      kind: "uninstall",
      ...builtinTombstone ? { builtinTombstone: true } : {}
    });
    this.untrustedApprovals.add(this.isolationKey(id));
    if (builtinTombstone) {
      try {
        if (!this.options.recordBuiltinTombstone) {
          throw new Error("builtin uninstall has no tombstone writer");
        }
        this.options.recordBuiltinTombstone(id);
      } catch (err) {
        const journalCleared = await this.receiptStore.clearPendingMutation(id).then(() => true).catch(() => false);
        if (journalCleared) this.untrustedApprovals.delete(this.isolationKey(id));
        return {
          rejection: { code: "io", reason: err instanceof Error ? err.message : String(err) }
        };
      }
    }
    const approvalRemoved = await this.removeInstallApprovalUnlocked(id);
    try {
      await import_node_fs4.default.promises.rm(dir, { recursive: true, force: true });
    } catch (err) {
      return {
        rejection: { code: "io", reason: err instanceof Error ? err.message : String(err) }
      };
    }
    if (approvalRemoved) {
      await this.receiptStore.clearPendingMutation(id).catch(() => void 0);
      this.untrustedApprovals.delete(this.isolationKey(id));
    } else {
      this.options.log?.warn("ghost uninstall left journal for approval cleanup", { id });
    }
    this.options.log?.info("ghost uninstalled", { id });
    if (options2.notify !== false) this.options.onChanged?.(this.list());
    return { ok: true };
  }
};
var InstallExtractError = class extends Error {
};
function approvalTokenFor(result) {
  return result.state === "approved" ? ghostInstallApprovalToken({
    state: "approved",
    revision: result.receipt.revision
  }) : ghostInstallApprovalToken({ state: result.state });
}
async function readZipEntryBufferWithLimit(entry, maxBytes, label) {
  const chunks = [];
  let total = 0;
  await consumeZipEntry2(entry, (chunk, stream) => {
    total += chunk.byteLength;
    if (total > maxBytes) {
      stream.destroy();
      throw new InstallExtractError(`${label} \u8D85\u8FC7\u4E0A\u9650(${maxBytes} \u5B57\u8282)`);
    }
    chunks.push(chunk);
  });
  return Buffer.concat(chunks, total);
}
async function assertZipUncompressedLimit(entries, maxBytes) {
  let total = 0;
  for (const entry of entries) {
    if (entry.dir) continue;
    await consumeZipEntry2(entry, (chunk, stream) => {
      total += chunk.byteLength;
      if (total > maxBytes) {
        stream.destroy();
        throw new InstallExtractError(`\u89E3\u538B\u540E\u603B\u5927\u5C0F\u8D85\u8FC7\u4E0A\u9650(${maxBytes} \u5B57\u8282)`);
      }
    });
  }
}
async function consumeZipEntry2(entry, onChunk) {
  await new Promise((resolve, reject) => {
    const stream = entry.nodeStream();
    let settled = false;
    const fail = (err) => {
      if (settled) return;
      settled = true;
      reject(err instanceof Error ? err : new Error(String(err)));
    };
    stream.on("data", (value) => {
      if (settled) return;
      try {
        onChunk(Buffer.isBuffer(value) ? value : Buffer.from(value), stream);
      } catch (err) {
        fail(err);
      }
    });
    stream.on("error", fail);
    stream.on("end", () => {
      if (settled) return;
      settled = true;
      resolve();
    });
  });
}
function buildIconDataUrl(iconPath, data) {
  const mime = ghostIconMimeType(iconPath);
  if (!mime) return null;
  return `data:${mime};base64,${data.toString("base64")}`;
}
async function pathExists(p) {
  try {
    await import_node_fs4.default.promises.access(p);
    return true;
  } catch {
    return false;
  }
}
function isTransientBackfillError(err) {
  const code = err?.code;
  return typeof code === "string" && code !== "ENOENT";
}
async function copyBundledSeedDirectory(from, to) {
  await import_node_fs4.default.promises.mkdir(to, { recursive: true });
  for (const entry of await import_node_fs4.default.promises.readdir(from, { withFileTypes: true })) {
    const source = import_node_path6.default.join(from, entry.name);
    const target = import_node_path6.default.join(to, entry.name);
    const kind = await classifyGhostDirEntry(source);
    if (kind !== "directory" && kind !== "file") {
      throw new Error(`builtin seed rejects non-regular entry: ${entry.name}`);
    }
    if (entry.name.startsWith(".")) continue;
    if (kind === "directory") await copyBundledSeedDirectory(source, target);
    else await import_node_fs4.default.promises.copyFile(source, target);
  }
}
async function hashApprovedDirectory(root) {
  const tree = await collectGhostContentFiles(root, {
    dotEntries: "skip",
    nonRegular: "throw",
    label: "bundled Plugin"
  });
  return hashGhostContentFiles(root, tree.files, tree.rootIdentity);
}
function detectSingleTopFolderPrefix(names) {
  let top = null;
  for (const name of names) {
    const normalized = name.replace(/\\/g, "/");
    const slash = normalized.indexOf("/");
    if (slash <= 0) return "";
    const first = normalized.slice(0, slash);
    if (top === null) top = first;
    else if (top !== first) return "";
  }
  return top === null ? "" : `${top}/`;
}
function hasNonCanonicalZipPath(name) {
  const normalized = name.replace(/\\/g, "/");
  if (normalized.startsWith("/") || /^[a-zA-Z]:/.test(normalized)) return true;
  const segments = normalized.split("/");
  return segments.some(
    (seg, i) => seg === "." || seg === ".." || seg === "" && i !== segments.length - 1
  );
}
function safeJoin(dest, relPath) {
  const normalized = relPath.replace(/\\/g, "/").replace(/^\/+/, "");
  const resolved = import_node_path6.default.resolve(dest, normalized);
  const rel = import_node_path6.default.relative(import_node_path6.default.resolve(dest), resolved);
  if (rel === "" || rel.startsWith("..") || import_node_path6.default.isAbsolute(rel)) return null;
  return resolved;
}

// apps/desktop/src/main/cindy-brain/ghostSnapshotWorkerProcess.ts
var import_node_fs5 = __toESM(require("node:fs"));
var import_node_path7 = __toESM(require("node:path"));

// apps/desktop/src/main/cindy-brain/ghostSnapshotIdentity.ts
function sameGhostSnapshotParentIdentity(stats, expected) {
  return stats.isDirectory() && !stats.isSymbolicLink() && stats.dev !== 0n && stats.ino !== 0n && expected.dev !== 0n && expected.ino !== 0n && stats.dev === expected.dev && stats.ino === expected.ino;
}

// apps/desktop/src/main/cindy-brain/ghostSnapshotWorkerProcess.ts
var port = process.parentPort;
var send = (message) => port?.postMessage(message);
var hasCode = (error, code) => Boolean(error && typeof error === "object" && error.code === code);
function samePath(left, right) {
  const normalize = (value) => process.platform === "win32" ? import_node_path7.default.resolve(value).toLowerCase() : import_node_path7.default.resolve(value);
  return normalize(left) === normalize(right);
}
function targetParts(request) {
  const parts = request.targetName.split("/");
  if (request.operation === "ensure") {
    if (parts.length !== 2 || !/^[a-z0-9][a-z0-9-]{0,31}$/.test(parts[0]) || !/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(parts[1])) {
      throw new Error("invalid snapshot request");
    }
  } else if (parts.length !== 1 || !/^[a-z0-9][a-z0-9-]{0,31}$/.test(parts[0])) {
    throw new Error("invalid snapshot request");
  }
  return parts;
}
async function verifyParent(expected, workingDir) {
  const stats = await import_node_fs5.default.promises.lstat(workingDir, { bigint: true });
  if (!sameGhostSnapshotParentIdentity(stats, expected)) throw new Error("snapshot parent identity changed");
  if (!samePath(await import_node_fs5.default.promises.realpath(workingDir), expected.realPath)) throw new Error("snapshot parent path changed");
}
async function verifyDirectory(workingDir, name) {
  const target = import_node_path7.default.join(workingDir, name);
  const kind = await classifyGhostDirEntry(target);
  if (kind !== "directory") throw new Error("snapshot id parent changed");
}
async function removeVerifiedDirectory(expectedParent, workingDir, targetPath, parentName, expectedTarget) {
  const targetStat = await import_node_fs5.default.promises.lstat(targetPath, { bigint: true });
  if (!targetStat.isDirectory() || targetStat.isSymbolicLink()) {
    throw new Error("snapshot target is not a real directory");
  }
  const targetRealPath = await import_node_fs5.default.promises.realpath(targetPath);
  if (expectedTarget && (targetStat.dev !== expectedTarget.dev || targetStat.ino !== expectedTarget.ino || !samePath(targetRealPath, expectedTarget.realPath))) {
    throw new Error("snapshot target identity changed before removal");
  }
  const quarantinePath = `${targetPath}.remove-${process.pid}-${Date.now()}`;
  await import_node_fs5.default.promises.rename(targetPath, quarantinePath);
  const movedStat = await import_node_fs5.default.promises.lstat(quarantinePath, { bigint: true });
  if (!movedStat.isDirectory() || movedStat.isSymbolicLink() || movedStat.dev !== targetStat.dev || movedStat.ino !== targetStat.ino || !samePath(await import_node_fs5.default.promises.realpath(quarantinePath), targetRealPath)) {
    throw new Error("snapshot target identity changed during removal");
  }
  await verifyParent(expectedParent, workingDir);
  await verifyDirectory(workingDir, parentName);
  await import_node_fs5.default.promises.rm(quarantinePath, { recursive: true, force: true });
}
async function copyDirectory(source, target) {
  if (await classifyGhostDirEntry(source) !== "directory") throw new Error(`skill source is not a directory: ${source}`);
  await import_node_fs5.default.promises.mkdir(target, { recursive: true });
  for (const entry of await import_node_fs5.default.promises.readdir(source, { withFileTypes: true })) {
    const from = import_node_path7.default.join(source, entry.name);
    const to = import_node_path7.default.join(target, entry.name);
    const kind = await classifyGhostDirEntry(from);
    if (!isRegularGhostDirEntry(kind)) throw new Error(`skill snapshot rejects non-regular entry: ${from}`);
    if (kind === "directory") await copyDirectory(from, to);
    else await import_node_fs5.default.promises.copyFile(from, to, import_node_fs5.default.constants.COPYFILE_EXCL);
  }
}
async function hashes(receipt, root) {
  const result = {};
  for (const item of receipt.manifest.skill?.items ?? []) {
    const itemRoot = await resolveGhostContentPath(root, item.dir, { expect: "directory", label: "approved skill" });
    const tree = await collectGhostContentFiles(itemRoot, { dotEntries: "include", nonRegular: "throw", label: `approved skill ${item.dir}` });
    result[item.dir] = await hashGhostContentFiles(itemRoot, tree.files, tree.rootIdentity);
  }
  return result;
}
async function matches(receipt, root) {
  const actual = await hashes(receipt, root).catch(() => null);
  return Boolean(actual && (receipt.manifest.skill?.items ?? []).every(
    (item) => actual[item.dir] === receipt.skillContentSha256[item.dir]
  ));
}
async function runGhostSnapshotWorkerRequest(request, workingDir = process.cwd()) {
  if (!request || !request.expectedParent) {
    throw new Error("invalid snapshot request");
  }
  const parts = targetParts(request);
  const relativeWorkerPaths = import_node_path7.default.resolve(workingDir) === import_node_path7.default.resolve(process.cwd());
  const workPath = (name) => relativeWorkerPaths ? name : import_node_path7.default.join(workingDir, name);
  const targetPath = workPath(import_node_path7.default.join(...parts));
  await verifyParent(request.expectedParent, workingDir);
  if (request.operation === "remove") {
    await verifyParent(request.expectedParent, workingDir);
    if (parts.length !== 1) throw new Error("invalid snapshot removal target");
    await verifyDirectory(workingDir, parts[0]);
    const targetStat = await import_node_fs5.default.promises.lstat(targetPath, { bigint: true });
    if (!targetStat.isDirectory() || targetStat.isSymbolicLink()) {
      throw new Error("snapshot target is not a real directory");
    }
    const targetIdentity = {
      realPath: await import_node_fs5.default.promises.realpath(targetPath),
      dev: targetStat.dev,
      ino: targetStat.ino
    };
    await removeVerifiedDirectory(
      request.expectedParent,
      workingDir,
      targetPath,
      parts[0],
      targetIdentity
    );
    send({ ok: true });
    return;
  }
  if (!request.receipt || !request.sourceDir) throw new Error("approved skill snapshot is missing");
  let exists = false;
  let existingTargetIdentity;
  try {
    const stat = await import_node_fs5.default.promises.lstat(targetPath, { bigint: true });
    if (!stat.isDirectory() || stat.isSymbolicLink()) throw new Error("snapshot target is not a real directory");
    exists = true;
    existingTargetIdentity = {
      realPath: await import_node_fs5.default.promises.realpath(targetPath),
      dev: stat.dev,
      ino: stat.ino
    };
  } catch (error) {
    if (!hasCode(error, "ENOENT")) throw error;
  }
  if (exists) {
    await verifyDirectory(workingDir, parts[0]);
    if (await matches(request.receipt, targetPath)) {
      const targetKind = await classifyGhostDirEntry(targetPath);
      if (targetKind !== "directory") throw new Error("snapshot target is not a real directory on fast path");
      send({ ok: true });
      return;
    }
  }
  try {
    const parentKind = await classifyGhostDirEntry(workPath(parts[0]));
    if (parentKind !== "directory") throw new Error("snapshot parent identity changed");
  } catch (error) {
    if (!hasCode(error, "ENOENT")) throw error;
    await import_node_fs5.default.promises.mkdir(workPath(parts[0]), { recursive: false });
  }
  const temp = `.${parts[1]}-${process.pid}-${Date.now()}.tmp`;
  try {
    await verifyParent(request.expectedParent, workingDir);
    await verifyDirectory(workingDir, parts[0]);
    const tempPath = workPath(temp);
    await import_node_fs5.default.promises.mkdir(tempPath);
    const tempKind = await classifyGhostDirEntry(tempPath);
    if (tempKind !== "directory") throw new Error("snapshot temp directory was replaced before copy");
    const copiedRoots = [];
    for (const item of [...request.receipt.manifest.skill?.items ?? []].sort(
      (left, right) => left.dir.split("/").length - right.dir.split("/").length
    )) {
      const folded = item.dir.toLowerCase();
      if (copiedRoots.some((root) => folded === root || folded.startsWith(`${root}/`))) continue;
      const source = await resolveGhostContentPath(request.sourceDir, item.dir, { expect: "directory", label: "approved skill" });
      await copyDirectory(source, import_node_path7.default.join(tempPath, ...item.dir.split("/")));
      copiedRoots.push(folded);
    }
    for (const item of request.receipt.manifest.skill?.items ?? []) {
      const skillMd = import_node_path7.default.join(tempPath, ...item.dir.split("/"), "SKILL.md");
      const stat = await import_node_fs5.default.promises.lstat(skillMd);
      if (!stat.isFile()) throw new Error(`approved skill ${item.dir}/SKILL.md is not a regular file`);
      if (stat.size > GHOST_SKILL_MD_MAX_BYTES2) {
        throw new Error(`approved skill ${item.dir}/SKILL.md exceeds ${GHOST_SKILL_MD_MAX_BYTES2} bytes`);
      }
      const error = checkSkillMdConsistency(await import_node_fs5.default.promises.readFile(skillMd, "utf8"), item);
      if (error) throw new Error(`approved skill ${item.dir} is inconsistent: ${error}`);
    }
    if (!await matches(request.receipt, tempPath)) throw new Error("approved skill content no longer matches receipt");
    const tempBeforePublish = await classifyGhostDirEntry(tempPath);
    if (tempBeforePublish !== "directory") throw new Error("snapshot temp directory was replaced before publish");
    await verifyParent(request.expectedParent, workingDir);
    await verifyDirectory(workingDir, parts[0]);
    if (exists) {
      await removeVerifiedDirectory(
        request.expectedParent,
        workingDir,
        targetPath,
        parts[0],
        existingTargetIdentity
      );
    }
    await verifyParent(request.expectedParent, workingDir);
    await verifyDirectory(workingDir, parts[0]);
    try {
      await import_node_fs5.default.promises.lstat(targetPath);
      throw new Error("snapshot target recreated before publish");
    } catch (error) {
      if (!hasCode(error, "ENOENT")) throw error;
    }
    const tempBeforeRename = await classifyGhostDirEntry(tempPath);
    if (tempBeforeRename !== "directory") throw new Error("snapshot temp directory was replaced before rename");
    await import_node_fs5.default.promises.rename(tempPath, targetPath);
    const targetEntryKind = await classifyGhostDirEntry(targetPath);
    if (targetEntryKind !== "directory") {
      if (await verifyParent(request.expectedParent, workingDir).then(() => true, () => false) && await verifyDirectory(workingDir, parts[0]).then(() => true, () => false)) {
        await import_node_fs5.default.promises.rm(targetPath, { recursive: true, force: true }).catch(() => void 0);
      }
      throw new Error("snapshot target is not a real directory after publish");
    }
    await verifyParent(request.expectedParent, workingDir);
    await verifyDirectory(workingDir, parts[0]);
    if (!await matches(request.receipt, targetPath)) {
      if (await verifyParent(request.expectedParent, workingDir).then(() => true, () => false) && await verifyDirectory(workingDir, parts[0]).then(() => true, () => false)) {
        await import_node_fs5.default.promises.rm(targetPath, { recursive: true, force: true }).catch(() => void 0);
      }
      throw new Error("approved skill snapshot changed while being published");
    }
    const targetKindAfterMatch = await classifyGhostDirEntry(targetPath);
    if (targetKindAfterMatch !== "directory") throw new Error("snapshot target no longer a real directory after match");
    send({ ok: true });
  } finally {
    if (await verifyParent(request.expectedParent, workingDir).then(() => true, () => false) && await verifyDirectory(workingDir, parts[0]).then(() => true, () => false)) {
      await import_node_fs5.default.promises.rm(workPath(temp), { recursive: true, force: true }).catch(() => void 0);
    }
  }
}
if (port) {
  let handled = false;
  send({ type: "ready" });
  port.on("message", (event) => {
    const message = event.data;
    if (handled || message?.type !== "mutate" || !message.request) return;
    handled = true;
    runGhostSnapshotWorkerRequest(message.request).catch((error) => send({ ok: false, message: error instanceof Error ? error.message : String(error) }));
  });
}

// apps/desktop/tmp-harness/ghost-install-harness.ts
var sizeMb = Number(process.argv[2] || 120);
var only = (process.argv[3] || "install,update,lock-release,lock-exhaust").split(",");
var base = import_node_fs6.default.realpathSync.native(import_node_fs6.default.mkdtempSync(import_node_path8.default.join(import_node_os.default.tmpdir(), "cindy-5028-harness-")));
var rootDir = import_node_path8.default.join(base, "ghosts");
var ID = "probe5028";
var events = [];
var log = {
  info: (m, d) => rec("info", m, d),
  warn: (m, d) => rec("warn", m, d),
  error: (m, d) => rec("error", m, d),
  debug: () => {
  }
};
function rec(level, msg, data) {
  const e = { t: Date.now(), level, msg, data };
  events.push(e);
  console.log(JSON.stringify(e));
}
async function makeCindy(version, mb) {
  const zip = new import_jszip3.default();
  zip.file("ghost.json", JSON.stringify({ schemaVersion: 2, id: ID, name: "Probe 5028", version, kind: "chip", entry: "main.js", slots: ["node"], node: { entry: "node/worker.cjs", protocol: "json-rpc-stdio" } }));
  zip.file("main.js", "module.exports = {};");
  zip.file("node/worker.cjs", "process.stdin.resume();");
  for (let i = 0; i < 200; i++) zip.file(`assets/f${i}.txt`, import_node_crypto5.default.randomBytes(1024).toString("base64"));
  zip.file("assets/blob.bin", import_node_crypto5.default.randomBytes(mb * 1024 * 1024), { compression: "STORE" });
  const buf = await zip.generateAsync({ type: "nodebuffer", compression: "STORE" });
  const file = import_node_path8.default.join(base, `probe-${version}.cindy`);
  import_node_fs6.default.writeFileSync(file, buf);
  return { file, sha256: import_node_crypto5.default.createHash("sha256").update(buf).digest("hex") };
}
function newManager(renameRetry) {
  return new GhostManager({
    getRootDir: () => rootDir,
    getLocale: () => "zh-CN",
    log,
    renameRetry,
    onChanged: () => {
    },
    mutateSnapshot: async (request) => {
      const { parentDir, ...r } = request;
      await runGhostSnapshotWorkerRequest(r, parentDir);
    }
  });
}
function armLock() {
  let child = null;
  let released = false;
  if (process.platform !== "win32") {
    rec("warn", "lock not effective on non-windows (no FileShare semantics)");
    return { ready: Promise.resolve(false), locked: Promise.resolve(null), release: () => {
    }, exited: Promise.resolve() };
  }
  const pattern = import_node_path8.default.join(rootDir, `.cindy-installing-${ID}-*`, "ghost.json").replace(/'/g, "''");
  const ps = `Write-Output READY; $deadline=(Get-Date).AddSeconds(90); while((Get-Date) -lt $deadline){ $t=Get-ChildItem -Path '${pattern}' -ErrorAction SilentlyContinue | Select-Object -First 1; if($t){ try { $f=[System.IO.File]::Open($t.FullName,'Open','Read','Read'); Write-Output ('LOCKED ' + $t.FullName); while($true){Start-Sleep -Milliseconds 100} } catch { Start-Sleep -Milliseconds 5 } } else { Start-Sleep -Milliseconds 5 } }; Write-Output 'LOCK_TIMEOUT'`;
  child = (0, import_node_child_process.spawn)("powershell.exe", ["-NoProfile", "-NonInteractive", "-Command", ps], { stdio: ["ignore", "pipe", "inherit"] });
  let buf = "";
  let resolveReady;
  let resolveLocked;
  const ready = new Promise((r) => {
    resolveReady = r;
  });
  const locked = new Promise((r) => {
    resolveLocked = r;
  });
  const exited = new Promise((r) => child.on("exit", () => {
    resolveReady(false);
    resolveLocked(null);
    r();
  }));
  child.stdout.on("data", (b) => {
    buf += String(b);
    if (buf.includes("READY")) resolveReady(true);
    const m = buf.match(/LOCKED (.+)/);
    if (m) {
      const at = Date.now();
      rec("info", "harness lock acquired", { target: m[1].trim(), at });
      resolveLocked({ target: m[1].trim(), at });
    } else if (buf.includes("LOCK_TIMEOUT")) {
      rec("warn", "staging never appeared; lock not armed");
      resolveLocked(null);
    }
  });
  return { ready, locked, exited, release: () => {
    if (child && !released) {
      released = true;
      child.kill("SIGKILL");
      rec("info", "harness lock released", { at: Date.now() });
    }
  } };
}
function journalFiles() {
  const d = import_node_path8.default.join(base, "ghosts-install-state");
  return import_node_fs6.default.existsSync(d) ? import_node_fs6.default.readdirSync(d).filter((n) => n.startsWith(".pending-")) : [];
}
function stagingDirs() {
  return import_node_fs6.default.existsSync(rootDir) ? import_node_fs6.default.readdirSync(rootDir).filter((n) => n.startsWith(".cindy-installing-")) : [];
}
function state(m) {
  const g = m.list().find((x) => x.manifest.id === ID);
  const receiptPath = import_node_path8.default.join(base, "ghosts-install-state", `${ID}.json`);
  let receipt = null;
  try {
    const r = JSON.parse(import_node_fs6.default.readFileSync(receiptPath, "utf8"));
    receipt = { packageSha256: r.packageSha256 ?? r.package?.sha256 ?? null, keys: Object.keys(r) };
  } catch {
    receipt = null;
  }
  const entries = import_node_fs6.default.existsSync(rootDir) ? import_node_fs6.default.readdirSync(rootDir) : [];
  return {
    installed: !!g,
    version: g?.manifest.version ?? null,
    approval: g?.approval.state ?? null,
    enabled: g?.enabled ?? null,
    receiptExists: import_node_fs6.default.existsSync(receiptPath),
    receipt,
    journal: journalFiles(),
    staging: stagingDirs(),
    backups: entries.filter((n) => n !== ID && !n.startsWith(".cindy-installing-")),
    finalDirExists: import_node_fs6.default.existsSync(import_node_path8.default.join(rootDir, ID))
  };
}
var results = {};
(async () => {
  rec("info", "harness start", { base, platform: `${import_node_os.default.platform()} ${import_node_os.default.release()}`, node: process.version, sizeMb, delays: DEFAULT_RENAME_RETRY_DELAYS_MS, budgetMs: DEFAULT_RENAME_RETRY_DELAYS_MS.reduce((a, b) => a + b, 0) });
  const m = newManager({ enabled: true });
  const p100 = await makeCindy("1.0.0", sizeMb);
  rec("info", "package built", { version: "1.0.0", file: p100.file, sha256: p100.sha256, bytes: import_node_fs6.default.statSync(p100.file).size });
  if (only.includes("install")) {
    const t = Date.now();
    const r = await m.install(p100.file, { expectedPackageSha256: p100.sha256 });
    results.install = { ms: Date.now() - t, rejection: "rejection" in r ? r.rejection : null, state: state(m) };
    rec("info", "scenario install done", results.install);
  }
  if (only.includes("update")) {
    const p101 = await makeCindy("1.0.1", sizeMb);
    const t = Date.now();
    const r = await m.update(p101.file, { expectedInstalledApproval: ghostInstallApprovalToken(m.list().find((g) => g.manifest.id === ID)?.approval), expectedPackageSha256: p101.sha256 });
    results.update = { ms: Date.now() - t, rejection: "rejection" in r ? r.rejection : null, state: state(m), backupLeft: (import_node_fs6.default.existsSync(rootDir) ? import_node_fs6.default.readdirSync(rootDir) : []).filter((n) => n.includes("backup")) };
    rec("info", "scenario update done", results.update);
  }
  if (only.includes("lock-release")) {
    const p102 = await makeCindy("1.0.2", sizeMb);
    const lock = armLock();
    const ready = await lock.ready;
    rec("info", "lock process ready", { ready });
    let attemptsSeen = 0;
    let firstFailAt = null;
    const origWarn = log.warn;
    log.warn = (msg, d) => {
      origWarn(msg, d);
      if (msg.includes("retrying")) {
        attemptsSeen = d.attempt;
        if (firstFailAt === null) firstFailAt = Date.now();
        if (attemptsSeen === 5) lock.release();
      }
    };
    const t = Date.now();
    const r = await m.update(p102.file, { expectedInstalledApproval: ghostInstallApprovalToken(m.list().find((g) => g.manifest.id === ID)?.approval), expectedPackageSha256: p102.sha256 });
    log.warn = origWarn;
    lock.release();
    await lock.exited;
    const lk = await lock.locked;
    const succ = events.find((e) => e.msg === "ghost transaction rename succeeded after transient retry");
    const lockBeforeFirstFail = !!lk && firstFailAt !== null && lk.at <= firstFailAt;
    const coverage = !lk ? "insufficient: lock never acquired" : attemptsSeen === 0 ? "insufficient: no transient rename failure observed" : !lockBeforeFirstFail ? "insufficient: lock acquired after first rename failure" : "ok";
    results["lock-release"] = { ms: Date.now() - t, lockReady: ready, lockTarget: lk?.target ?? null, lockAt: lk?.at ?? null, firstFailAt, lockBeforeFirstFail, coverage, rejection: "rejection" in r ? r.rejection : null, retriesObserved: attemptsSeen, succeededAfterAttempts: succ ? succ.data.attempts : null, state: state(m) };
    rec("info", "scenario lock-release done", results["lock-release"]);
  }
  if (only.includes("lock-exhaust")) {
    const before = state(m);
    const p103 = await makeCindy("1.0.3", sizeMb);
    const lock = armLock();
    const ready = await lock.ready;
    rec("info", "lock process ready", { ready });
    let attemptsSeen = 0;
    let firstFailAt = null;
    let exhausted = false;
    const origWarn = log.warn;
    log.warn = (msg, d) => {
      origWarn(msg, d);
      if (msg.includes("retrying")) {
        attemptsSeen = d.attempt;
        if (firstFailAt === null) firstFailAt = Date.now();
      }
      if (msg.includes("retry exhausted")) {
        exhausted = true;
        lock.release();
      }
    };
    const t = Date.now();
    const r = await m.update(p103.file, { expectedInstalledApproval: ghostInstallApprovalToken(m.list().find((g) => g.manifest.id === ID)?.approval), expectedPackageSha256: p103.sha256 });
    log.warn = origWarn;
    lock.release();
    await lock.exited;
    const lk = await lock.locked;
    const rej = "rejection" in r ? r.rejection : null;
    const stateNow = state(m);
    const m2 = newManager({ enabled: true });
    const coverage = !lk ? "insufficient: lock never acquired" : !exhausted ? "insufficient: retry exhaustion not observed" : firstFailAt !== null && lk.at > firstFailAt ? "insufficient: lock acquired after first rename failure" : "ok";
    results["lock-exhaust"] = { ms: Date.now() - t, lockReady: ready, lockTarget: lk?.target ?? null, lockAt: lk?.at ?? null, firstFailAt, retriesObserved: attemptsSeen, exhausted, coverage, rejection: rej, hintPresent: !!rej && rej.reason.includes(RENAME_RETRY_EXHAUSTED_HINT), before: { version: before.version }, state: stateNow, afterStartupRecovery: state(m2) };
    rec("info", "scenario lock-exhaust done", results["lock-exhaust"]);
  }
  const out = import_node_path8.default.join(base, "harness-summary.json");
  import_node_fs6.default.writeFileSync(out, JSON.stringify({ head: "26aecab85b207f51c7f03448027343a37c0bd4ae", base, platform: `${import_node_os.default.platform()} ${import_node_os.default.release()}`, node: process.version, sizeMb, results, events }, null, 2));
  console.log("SUMMARY_FILE " + out);
  console.log("CINDY-5028-HARNESS-DONE " + JSON.stringify(Object.fromEntries(Object.entries(results).map(([k, v]) => {
    const x = v;
    return [k, x.coverage && x.coverage !== "ok" ? "COVERAGE_INSUFFICIENT" : x.rejection ? "REJECTED" : "OK"];
  }))));
})().catch((e) => {
  console.error("HARNESS_ERROR", e);
  process.exit(1);
});
/*! Bundled license information:

is-extendable/index.js:
  (*!
   * is-extendable <https://github.com/jonschlinkert/is-extendable>
   *
   * Copyright (c) 2015, Jon Schlinkert.
   * Licensed under the MIT License.
   *)

strip-bom-string/index.js:
  (*!
   * strip-bom-string <https://github.com/jonschlinkert/strip-bom-string>
   *
   * Copyright (c) 2015, 2017, Jon Schlinkert.
   * Released under the MIT License.
   *)
*/
