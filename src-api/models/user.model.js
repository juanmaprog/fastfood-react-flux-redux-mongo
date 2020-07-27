const { Schema, model } = require("mongoose");
const bcrypt = require("bcryptjs");
const generateToken = require("../helpers/helperString");

const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true, select: false },
  token: { type: String, unique: true },
  addresses: [{ type: String }],
  phones: [{ type: String }],
  newlaters: { type: Boolean },
  billcard: [{ type: String }],
  createdBy: String,
  createdAt: { type: Date, default: new Date() },
  active: { type: Boolean, default: true },
  deleted: { type: Boolean, default: false },
  // documents: [{ type: Schema.Types.ObjectId, ref: "Document" }],
});

UserSchema.pre("save", function () {
  let user = this;
  user.token = generateToken();
  // if (!user.isModified("password")) return next();
  // bcrypt.genSalt(10, (err, salt) => {
  //   if (err) return next(err);
  //   bcrypt.hash(user.password, salt, null, (err, hash) => {
  //     if (err) return next(err);
  //     user.password = hash;
  //     next();
  //   });
  // });
});

// UserSchema.methods.encryptPassword = async (password) => {
//   const salt = await bcrypt.genSalt(10);
//   return await bcrypt.hash(password, salt);
// };

UserSchema.methods.matchPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

module.exports = model("User", UserSchema);
