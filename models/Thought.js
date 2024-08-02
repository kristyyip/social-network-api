const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');
const dayjs = require("dayjs");

// Schema to create User model
const thoughtSchema = new Schema(
  {
    thoughtText: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: timestamp => dayjs(timestamp).format("MM/DD/YYY, h:mm:ss")
    },
    username: {
        type: String,
        required: true,
    },
    reactions: [reactionSchema]
  },
  {
    toJSON: {
        virtuals: true,
        getters: true,
    },
  }
);

thoughtSchema
    .virtual('reactionCount')
    .get(function () {
        return this.reactions.length();
    })

const Thought = model('thought', thoughtSchema);

module.exports = Thought;