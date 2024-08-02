const { Schema, Types } = require('mongoose');

const reactionSchema = new Schema(
  {
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
    },
    reactionBody: {
        type: String,
        required: true,
        maxlength: 280,
    },
    username: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: timestamp => dayjs(timestamp).format("MM/DD/YYY, h:mm:ss")
    },
  },
  {
    toJSON: {
        getters: true,
    },
    id: false,
  }
);

module.exports = reactionSchema;
