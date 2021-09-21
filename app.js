/**
 * Module dependencies.
 */
require("dotenv").config();
const multer = require("multer");
const exphbs = require("express-handlebars");
const express = require("express"),
  routes = require("./routes"),
  user = require("./routes/user"),
  select = require("./routes/select"),
  insert = require("./routes/insert"),
  update = require("./routes/update"),
  delte = require("./routes/delete"),
  relieve = require("./routes/relieve"),
  report = require("./routes/reports"),
  student_reports = require("./routes/student_reports"),
  admin = require("./routes/admin"),
  fee = require("./routes/fee"),
  checkslip = require("./routes/checkslip");
(http = require("http")), (path = require("path"));
//const methodOverride = require('method-override');
const session = require("express-session");
const app = express();
const mysql = require("mysql");
// Handlebars Middleware
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
let bodyParser = require("body-parser");

//Server port
const pool = mysql.createPool({
  connectionLimit: 100,
  host: "localhost",
  user: "root",
  password: "1234",
  database: "ems",
});

setInterval(function () {
  pool.query("SELECT 1", [], function () {});
}, 5000);

//const connection;
var getConnection = function (callback) {
  pool.getConnection(function (err, connection) {
    callback(err, connection);
  });
};
module.exports = getConnection;

//Server port

global.db = pool;

const socketio = require("socket.io");

const formatMessage = require("./public/assets/utils/messages");
const {
  userJoin,
  getCurrentUser,
  userLeave,
  getRoomUsers,
} = require("./public/assets/utils/users");
const { render } = require("ejs");
const server = http.createServer(app);
const io = socketio(server);

const botName = "EMS";

io.on("connection", (socket) => {
  socket.on("joinRoom", ({ username, room }) => {
    const user = userJoin(socket.id, username, room);

    socket.join(user.room);

    // Welcome current user
    socket.emit("message", formatMessage(botName, "Welcome to ChatRoom!"));

    // Broadcast when a user connects
    socket.broadcast
      .to(user.room)
      .emit(
        "message",
        formatMessage(botName, `${user.username} has joined the chat`)
      );

    // Send users and room info
    io.to(user.room).emit("roomUsers", {
      room: user.room,
      users: getRoomUsers(user.room),
    });
  });

  // Listen for chatMessage
  socket.on("chatMessage", (msg) => {
    const user = getCurrentUser(socket.id);

    io.to(user.room).emit("message", formatMessage(user.username, msg));
  });

  // Runs when client disconnects
  socket.on("disconnect", () => {
    const user = userLeave(socket.id);

    if (user) {
      io.to(user.room).emit(
        "message",
        formatMessage(botName, `${user.username} has left the chat`)
      );

      // Send users and room info
      io.to(user.room).emit("roomUsers", {
        room: user.room,
        users: getRoomUsers(user.room),
      });
    }
  });
});

// all environments
app.set("port", process.env.PORT || 80);
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(bodyParser.json({ limit: "50mb" }));
//app.use(express.static('public'))
// Public Folder
app.use(express.static("./public"));

// app.use(express.static(path.join(__dirname, 'public')));
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
    // cookie: { maxAge: 6000000000 },
  })
);
//upload files
const upload = multer({ storage: multer.memoryStorage() });

// development only

app.get("/", routes.index);
app.get("/icboard", user.icboard);

app.post("/acknowledgement", user.ack);

app.get("/signuphome", user.add_user);

app.get("/view_report", user.view_report);
app.post("/view_report", user.view_report);
app.post("/add_user", user.add_user);

// fees
app.get("/collect_fees", fee.collect_fees);
app.post("/collect_fees", fee.collect_fees);
app.get("/print_fees", fee.print_fees);
app.post("/print_fees", fee.print_fees);

app.get("/forgotpwd", user.forgotpwd);
app.post("/forgetpasssword", user.forgetpasssword);
// app.get("/pwdupdate", user.pwdupdate);
// app.post("/pwdupdate", user.pwdupdate);

app.get("/login", routes.index);
app.get("/logout", user.logout);
app.post("/login", user.login);
// app.get("/home/icdashboard", user.icdashboard);

app.get("/myprofile", user.myprofile);
app.post("/myprofile", user.myprofile);
app.get("/changepassword", user.changepassword);
app.post("/changepassword", user.changepassword);
app.post("/changepswd", user.changepswd);

//mbbs
app.get("/boards", user.all_boards);
app.post("/boards", user.all_boards);

// //mdms
// app.get("/mdms_board", user.mdms_board);
// app.post("/mdms_board", user.mdms_board);

// //bsc
// app.get("/bsc_board", user.bsc_board);
// app.post("/bsc_board", user.bsc_board);

// //aissc
// app.get("/aissc_board", user.aissc_board);
// app.post("/aissc_board", user.aissc_board);

// // nursing
// app.get("/nursing_board", user.nursing_board);
// app.post("/nursing_board", user.nursing_board);

// select
app.post("/select_mbbs_student", select.select_mbbs);
app.post("/select_mdms_student", select.select_mdms);
app.post("/select_bsc_student", select.select_bsc);
app.post("/select_aissc_student", select.select_aissc);
app.post("/select_nursing_student", select.select_nursing);

// insert
app.post("/add_students", upload.any(), insert.insert_cand);

// update
app.get("/update_student", upload.any(), update.edit_cand);
app.post("/update_student", upload.any(), update.edit_cand);

//reports
app.get("/get_reports", report.all_report);
app.post("/get_reports", report.all_report);

//student_reports
app.get("/student_reports", student_reports.student_reports);
app.post("/student_reports", student_reports.student_reports);

// random report
app.get("/report", admin.random_report);
app.post("/random_report", admin.random_reports);

app.post("/report_print", admin.report_print);

// relieve
app.get("/reli_check", relieve.reli_check);
app.post("/reli_check", relieve.reli_check);

// delete
app.post("/del_student", delte.delete_students);

app.get("/home/logout", user.logout);

app.post("/check_slip", checkslip.check_slip);

app.post("/verify", select.verify);
app.get("/approve", admin.approve_page);
app.post("/approval_serach", admin.approve_search);
app.post("/approved", admin.approved);
app.post("/approval_filter", admin.approve_filter);
// certificate_download

app.post("/cert_form", (req, res) => {
  var { cand_id } = req.body;
  console.log(cand_id);
  var sql = `select * from ems.certificate_files where (cand_id,certificate_type) = ('${cand_id}','Certificate_Form')`;
  db.query(sql, (err, data) => {
    res.send(data);
  });
});
app.post("/admission_commitee_form", (req, res) => {
  var { cand_id } = req.body;
  var sql = `select * from ems.certificate_files where (cand_id,certificate_type) = ('${cand_id}','Admission_Commitee_Form')`;
  db.query(sql, (err, data) => {
    res.send(data);
  });
});

// surety_file_mdms
app.post("/surety_file", (req, res) => {
  var { cand_id } = req.body;
  var sql = `SELECT * FROM ems.surety_mdms where surety_id = '${cand_id}'`;
  db.query(sql, (err, data) => {
    res.send(data);
  });
});
// surety_aissc;
app.post("/surety_file_aissc", (req, res) => {
  var { cand_id } = req.body;
  var sql = `SELECT * FROM ems.surety_aissc where surety_id = '${cand_id}'`;
  db.query(sql, (err, data) => {
    res.send(data);
  });
});

app.post("/fees_file", (req, res) => {
  var cand_id = req.body;
  var sql = `SELECT * FROM ems.fees_file;`;
  db.query(sql, (err, data) => {
    res.send(data);
  });
});

//Middleware
server.listen(8080, () => {
  console.log("http://localhost:8080");
});
