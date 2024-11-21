// source: queue.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global =
    (typeof globalThis !== 'undefined' && globalThis) ||
    (typeof window !== 'undefined' && window) ||
    (typeof global !== 'undefined' && global) ||
    (typeof self !== 'undefined' && self) ||
    (function () { return this; }).call(null) ||
    Function('return this')();

var helper_pb = require('./helper_pb.js');
goog.object.extend(proto, helper_pb);
goog.exportSymbol('proto.simrs.Queue', null, global);
goog.exportSymbol('proto.simrs.UpdateQueueRequest', null, global);
goog.exportSymbol('proto.simrs.UpdateQueueResponse', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.simrs.UpdateQueueRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.simrs.UpdateQueueRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.simrs.UpdateQueueRequest.displayName = 'proto.simrs.UpdateQueueRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.simrs.UpdateQueueResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.simrs.UpdateQueueResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.simrs.UpdateQueueResponse.displayName = 'proto.simrs.UpdateQueueResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.simrs.Queue = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.simrs.Queue, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.simrs.Queue.displayName = 'proto.simrs.Queue';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.simrs.UpdateQueueRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.simrs.UpdateQueueRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.simrs.UpdateQueueRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.simrs.UpdateQueueRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    queue: (f = msg.getQueue()) && proto.simrs.Queue.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.simrs.UpdateQueueRequest}
 */
proto.simrs.UpdateQueueRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.simrs.UpdateQueueRequest;
  return proto.simrs.UpdateQueueRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.simrs.UpdateQueueRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.simrs.UpdateQueueRequest}
 */
proto.simrs.UpdateQueueRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.simrs.Queue;
      reader.readMessage(value,proto.simrs.Queue.deserializeBinaryFromReader);
      msg.setQueue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.simrs.UpdateQueueRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.simrs.UpdateQueueRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.simrs.UpdateQueueRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.simrs.UpdateQueueRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getQueue();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.simrs.Queue.serializeBinaryToWriter
    );
  }
};


/**
 * optional Queue queue = 1;
 * @return {?proto.simrs.Queue}
 */
proto.simrs.UpdateQueueRequest.prototype.getQueue = function() {
  return /** @type{?proto.simrs.Queue} */ (
    jspb.Message.getWrapperField(this, proto.simrs.Queue, 1));
};


/**
 * @param {?proto.simrs.Queue|undefined} value
 * @return {!proto.simrs.UpdateQueueRequest} returns this
*/
proto.simrs.UpdateQueueRequest.prototype.setQueue = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.simrs.UpdateQueueRequest} returns this
 */
proto.simrs.UpdateQueueRequest.prototype.clearQueue = function() {
  return this.setQueue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.simrs.UpdateQueueRequest.prototype.hasQueue = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.simrs.UpdateQueueResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.simrs.UpdateQueueResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.simrs.UpdateQueueResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.simrs.UpdateQueueResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, 0),
    message: jspb.Message.getFieldWithDefault(msg, 2, ""),
    errormessage: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.simrs.UpdateQueueResponse}
 */
proto.simrs.UpdateQueueResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.simrs.UpdateQueueResponse;
  return proto.simrs.UpdateQueueResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.simrs.UpdateQueueResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.simrs.UpdateQueueResponse}
 */
proto.simrs.UpdateQueueResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setErrormessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.simrs.UpdateQueueResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.simrs.UpdateQueueResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.simrs.UpdateQueueResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.simrs.UpdateQueueResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getErrormessage();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional int32 code = 1;
 * @return {number}
 */
proto.simrs.UpdateQueueResponse.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.simrs.UpdateQueueResponse} returns this
 */
proto.simrs.UpdateQueueResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.simrs.UpdateQueueResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.simrs.UpdateQueueResponse} returns this
 */
proto.simrs.UpdateQueueResponse.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string errorMessage = 3;
 * @return {string}
 */
proto.simrs.UpdateQueueResponse.prototype.getErrormessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.simrs.UpdateQueueResponse} returns this
 */
proto.simrs.UpdateQueueResponse.prototype.setErrormessage = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.simrs.Queue.prototype.toObject = function(opt_includeInstance) {
  return proto.simrs.Queue.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.simrs.Queue} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.simrs.Queue.toObject = function(includeInstance, msg) {
  var f, obj = {
    idqueue: jspb.Message.getFieldWithDefault(msg, 1, 0),
    queuenumber: jspb.Message.getFieldWithDefault(msg, 2, ""),
    idencounter: jspb.Message.getFieldWithDefault(msg, 3, 0),
    mrnumber: jspb.Message.getFieldWithDefault(msg, 4, ""),
    room: (f = msg.getRoom()) && helper_pb.HelperVar.toObject(includeInstance, f),
    queuestatus: (f = msg.getQueuestatus()) && helper_pb.HelperVar.toObject(includeInstance, f),
    accounting: (f = msg.getAccounting()) && helper_pb.Accounting.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.simrs.Queue}
 */
proto.simrs.Queue.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.simrs.Queue;
  return proto.simrs.Queue.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.simrs.Queue} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.simrs.Queue}
 */
proto.simrs.Queue.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setIdqueue(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setQueuenumber(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setIdencounter(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setMrnumber(value);
      break;
    case 5:
      var value = new helper_pb.HelperVar;
      reader.readMessage(value,helper_pb.HelperVar.deserializeBinaryFromReader);
      msg.setRoom(value);
      break;
    case 6:
      var value = new helper_pb.HelperVar;
      reader.readMessage(value,helper_pb.HelperVar.deserializeBinaryFromReader);
      msg.setQueuestatus(value);
      break;
    case 7:
      var value = new helper_pb.Accounting;
      reader.readMessage(value,helper_pb.Accounting.deserializeBinaryFromReader);
      msg.setAccounting(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.simrs.Queue.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.simrs.Queue.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.simrs.Queue} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.simrs.Queue.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIdqueue();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getQueuenumber();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getIdencounter();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getMrnumber();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getRoom();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      helper_pb.HelperVar.serializeBinaryToWriter
    );
  }
  f = message.getQueuestatus();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      helper_pb.HelperVar.serializeBinaryToWriter
    );
  }
  f = message.getAccounting();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      helper_pb.Accounting.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 idQueue = 1;
 * @return {number}
 */
proto.simrs.Queue.prototype.getIdqueue = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.simrs.Queue} returns this
 */
proto.simrs.Queue.prototype.setIdqueue = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string queueNumber = 2;
 * @return {string}
 */
proto.simrs.Queue.prototype.getQueuenumber = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.simrs.Queue} returns this
 */
proto.simrs.Queue.prototype.setQueuenumber = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int64 IDEncounter = 3;
 * @return {number}
 */
proto.simrs.Queue.prototype.getIdencounter = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.simrs.Queue} returns this
 */
proto.simrs.Queue.prototype.setIdencounter = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string mrNumber = 4;
 * @return {string}
 */
proto.simrs.Queue.prototype.getMrnumber = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.simrs.Queue} returns this
 */
proto.simrs.Queue.prototype.setMrnumber = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional HelperVar room = 5;
 * @return {?proto.simrs.HelperVar}
 */
proto.simrs.Queue.prototype.getRoom = function() {
  return /** @type{?proto.simrs.HelperVar} */ (
    jspb.Message.getWrapperField(this, helper_pb.HelperVar, 5));
};


/**
 * @param {?proto.simrs.HelperVar|undefined} value
 * @return {!proto.simrs.Queue} returns this
*/
proto.simrs.Queue.prototype.setRoom = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.simrs.Queue} returns this
 */
proto.simrs.Queue.prototype.clearRoom = function() {
  return this.setRoom(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.simrs.Queue.prototype.hasRoom = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional HelperVar QueueStatus = 6;
 * @return {?proto.simrs.HelperVar}
 */
proto.simrs.Queue.prototype.getQueuestatus = function() {
  return /** @type{?proto.simrs.HelperVar} */ (
    jspb.Message.getWrapperField(this, helper_pb.HelperVar, 6));
};


/**
 * @param {?proto.simrs.HelperVar|undefined} value
 * @return {!proto.simrs.Queue} returns this
*/
proto.simrs.Queue.prototype.setQueuestatus = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.simrs.Queue} returns this
 */
proto.simrs.Queue.prototype.clearQueuestatus = function() {
  return this.setQueuestatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.simrs.Queue.prototype.hasQueuestatus = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional Accounting accounting = 7;
 * @return {?proto.simrs.Accounting}
 */
proto.simrs.Queue.prototype.getAccounting = function() {
  return /** @type{?proto.simrs.Accounting} */ (
    jspb.Message.getWrapperField(this, helper_pb.Accounting, 7));
};


/**
 * @param {?proto.simrs.Accounting|undefined} value
 * @return {!proto.simrs.Queue} returns this
*/
proto.simrs.Queue.prototype.setAccounting = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.simrs.Queue} returns this
 */
proto.simrs.Queue.prototype.clearAccounting = function() {
  return this.setAccounting(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.simrs.Queue.prototype.hasAccounting = function() {
  return jspb.Message.getField(this, 7) != null;
};


goog.object.extend(exports, proto.simrs);