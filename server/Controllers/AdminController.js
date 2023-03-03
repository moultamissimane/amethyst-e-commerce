const Admin = require("../Models/Admin");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");

require("dotenv").config();

const Login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ msg: "Please enter all fields" });
  }

  const savedAdmin = await Admin.findOne({ email: email });
  if (!savedAdmin) {
    return res.status(400).json({ msg: "Invalid credentials" });
  }

  try {
    compare(password, savedAdmin.password, (err, res) => {
      if (res) {
        console.log("password matched");
        const token = jwt.sign({ id: savedAdmin._id }, process.env.JWT_SECRET);
        res.send({ token });
      } else {
        return res.status(400).json({ msg: "Invalid credentials" });
      }
    });
  } catch (err) {
    return res.status(422).json({ error: "Invalid credentials" });
  }
};

const Register = async (req, res) => {
  const { name, email, password } = req.body;
 try{
    const Admin = new Admin({ name, email, password }) = req.body;
await Admin.save();
const token = jwt.sign({ id: Admin._id }, process.env.JWT_SECRET);
res.send({ token });
    } catch (err) {
    return res.status(422).json({ error: "Invalid credentials" });
}

Admin.findOne({email:email}).then((savedAdmin)=>{
if(savedAdmin){
return res.status(400).json({msg:"User already exists with that email"})
}
const admin = new Admin({
name,
email,
password
})
admin.save()
.then(admin=>{
    console.log(admin);
    res.json({msg:"saved successfully"})
});
});
};

module.exports = {
  Login,
  Register,
};
