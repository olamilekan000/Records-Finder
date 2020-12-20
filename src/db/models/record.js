const mongoose = require('mongoose');

const { Schema } = mongoose;

const RecordSchema = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  value: String,
  counts: [Number],
});

const RecordModel = mongoose.model('records', RecordSchema);
module.exports = RecordModel;
