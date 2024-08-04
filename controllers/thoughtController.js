const { Thought, User } = require('../models');

module.exports = {
    // get all thoughts  
    async getThoughts(req, res) {
        try {
            const thoughts = await Thought.find();
            res.json(thoughts);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // get a thought
    async getSingleThought(req, res) {
        try {
            const thought = await Thought.findOne({ _id: req.params.thoughtId });

            if (!thought) {
                return res.status(404).json({ message: 'No thought with that ID' });
            }

            return res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },

  // create a new thought
  async createThought(req, res) {
    try {
        const thought = await Thought.create(req.body);
        
        const userThought = await User.findOneAndUpdate(
            { _id: req.body.userId },
            { $addToSet: { thoughts: thought._id } },
            { runValidators: true, new: true }
        )

        if (!userThought) {
            return res.status(404).json({ message: 'No user found with that ID :(' });
        }

        return res.json(thought);
    } catch (err) {
        res.status(500).json(err);
    }
  },

  // Delete a thought
  async deleteThought(req, res) {
    try {
        const thought = await Thought.deleteOne({ _id: req.params.thoughtId });

        const userThought = await User.findOneAndUpdate(
            { _id: req.body.userId },
            { $pull: { thoughts: req.params.thoughtId } },
            { runValidators: true, new: true }
        )

        if (!thought) {
            return res.status(404).json({ message: 'No such thought exists' });
        }

        res.json({ message: 'Thought successfully deleted' });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
  },

  // Update a thought
  async updateThought(req, res) {
    try {
        const thought = await Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $set: req.body },
            { runValidators: true, new: true }
        );

        if (!thought) {
            res.status(404).json({ message: 'No thought with this id!' });
        }

        res.json(thought);
    } catch (err) {
        res.status(500).json(err);
    }
  },

  // add a reaction to a thought
  async addReaction(req, res) {
    try {
        const reaction = await Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $addToSet: { reactions: req.body } },
            { runValidators: true, new: true }
        );

        if (!reaction) {
            return res.status(404).json({ message: 'No thought found with that ID :(' });
        }

        res.json(reaction)
    } catch (err) {
        res.status(500).json(err);
    }
  },

  // remove a reaction from a thought
  async removeReaction(req, res) {
    try {
        const reaction = await Thought.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $pull: { reactions: { reactionId: req.params.reactionId} } },
            { runValidators: true, new: true }
        );

        if (!reaction) {
            return res.status(404).json({ message: 'No thought found with that ID :(' });
        }

        res.json(reaction)
    } catch (err) {
        res.status(500).json(err);
    }
  },



};
