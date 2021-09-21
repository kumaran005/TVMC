var nodemailer = require("nodemailer");

exports.mail = (req, res) => {
  var pwd = 'QWas*"09';
  var { userid, emailid, password } = req.session.login_user;
  // console.log(req.session.login_user);
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "rkumaran368@gmail.com",
      pass: `${pwd}`,
    },
  });

  var mailOptions = {
    from: "rkumaran368@gmail.com",
    to: `${emailid}`,
    subject: "Sending Email from TVMC",
    text: `Dear User,
          Please find your user name and password to login
          Username: ${userid},
          Password: ${password},
          Thanks and Regards,
          Tirunelveli Medical College,
          Tirunelveli`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

function convertCryptKey(strKey) {
  var newKey = new Buffer([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  strKey = new Buffer(strKey);
  for (var i = 0; i < strKey.length; i++) newKey[i % 16] ^= strKey[i];
  return newKey;
}
exports.pwdrecover = (req, res, data) => {
  var rdata = JSON.parse(JSON.stringify(data));
  var pwd = 'QWas*"09';
  var userid = rdata[0].user_id;
  var emailid = rdata[0].emailid;
  var epass = rdata[0].password;
  var dc = crypto.createDecipheriv(
    "aes-128-ecb",
    convertCryptKey("myPassword"),
    ""
  );
  var password = dc.update(epass, "hex", "utf8") + dc.final("utf8");
  var transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "rkumaran368@gmail.com",
      pass: `${pwd}`,
    },
  });
  var mailOptions = {
    from: "rkumaran368@gmail.com",
    to: `${emailid}`,
    subject: "Sending Email from TVMC",
    text: `Dear User,
          Please find your user name and password to login
          Username: ${userid},
          Password: ${password},
          Thanks and Regards,
          Tirunelveli Medical College,
          Tirunelveli`,
  };
  transport.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};
