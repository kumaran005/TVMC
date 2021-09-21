const user = require("./user");

exports.reli_check = function (req, res, next) {
  var post = req.body;
  var message = "";
  // console.log(post);
  var course = post.reli_course;
  var reli_info = post.reli_info;
  // console.log("Relieving info: " + reli_info);
  if (reli_info == "All") {
    var sql = `SELECT * FROM ems.check_slip_status`;
    db.query(sql, function (err, data30) {
      var sql = `SELECT * FROM ems.cand_admission_details INNER JOIN
  ems.cand_relieving_details ON ems.cand_admission_details.cand_id= ems.cand_relieving_details.cand_id
   where (ems.cand_relieving_details.relieved,ems.cand_admission_details.active_status,ems.cand_admission_details.course_title)= ('Yes','Yes','MBBS')`;
      db.query(sql, function (err, data27) {
        var sql = `SELECT * FROM ems.state_details`;
        db.query(sql, function (err, data10) {
          var sql = `SELECT * FROM ems.admiss_type`;
          db.query(sql, function (err, data8) {
            var sql = `SELECT * FROM ems.admiss_quota`;
            db.query(sql, function (err, data7) {
              var sql = `SELECT * FROM ems.community_details`;
              db.query(sql, function (err, data6) {
                var sql = `SELECT * FROM ems.nation_details`;
                db.query(sql, function (err, data5) {
                  var sql = `SELECT * FROM ems.religion_details`;
                  db.query(sql, function (err, data4) {
                    var sql = `SELECT * FROM ems.no_delete`;
                    db.query(sql, function (err, data3) {
                      var sql = `SELECT * FROM ems.cand_relieving_details inner join ems.cand_admission_details on ems.cand_admission_details.cand_id = ems.cand_relieving_details.cand_id
                      where (course_title,active_status) = ('${course}','Yes') order by student_code`;
                      db.query(sql, function (err, data) {
                        if (course == "MBBS") {
                          res.render("mbbs_viewstudent.ejs", {
                            message: message,
                            userData: data,
                            userData3: data3,
                            userData4: data4,
                            userData5: data5,
                            userData6: data6,
                            userData7: data7,
                            userData8: data8,
                            userData10: data10,
                            userData27: data27,
                            userData30: data30,
                          });
                        }
                        if (course == "MDMS") {
                          res.render("mdms_viewstudent.ejs", {
                            message: message,
                            userData: data,
                            userData3: data3,
                            userData4: data4,
                            userData5: data5,
                            userData6: data6,
                            userData7: data7,
                            userData8: data8,
                            userData10: data10,
                            userData27: data27,
                            userData30: data30,
                          });
                        }
                        if (course == "BSC") {
                          res.render("bsc_viewstudent.ejs", {
                            message: message,
                            userData: data,
                            userData3: data3,
                            userData4: data4,
                            userData5: data5,
                            userData6: data6,
                            userData7: data7,
                            userData8: data8,
                            userData10: data10,
                            userData27: data27,
                            userData30: data30,
                          });
                        }
                        if (course == "AISSC") {
                          res.render("aissc_viewstudent.ejs", {
                            message: message,
                            userData: data,
                            userData3: data3,
                            userData4: data4,
                            userData5: data5,
                            userData6: data6,
                            userData7: data7,
                            userData8: data8,
                            userData10: data10,
                            userData27: data27,
                            userData30: data30,
                          });
                        }
                        if (course == "DIPLOMA IN NURSING") {
                          res.render("nursing_viewstudent.ejs", {
                            message: message,
                            userData: data,
                            userData3: data3,
                            userData4: data4,
                            userData5: data5,
                            userData6: data6,
                            userData7: data7,
                            userData8: data8,
                            userData10: data10,
                            userData27: data27,
                            userData30: data30,
                          });
                        }
                      });
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
  } else {
    var sql = `SELECT * FROM ems.check_slip_status`;
    db.query(sql, function (err, data30) {
      var sql = `SELECT * FROM ems.cand_admission_details INNER JOIN
  ems.cand_relieving_details ON ems.cand_admission_details.cand_id= ems.cand_relieving_details.cand_id
   where (ems.cand_relieving_details.relieved,ems.cand_admission_details.active_status,ems.cand_admission_details.course_title)= ('Yes','Yes','MBBS')`;
      db.query(sql, function (err, data27) {
        var sql = `SELECT * FROM ems.state_details`;
        db.query(sql, function (err, data10) {
          var sql = `SELECT * FROM ems.admiss_type`;
          db.query(sql, function (err, data8) {
            var sql = `SELECT * FROM ems.admiss_quota`;
            db.query(sql, function (err, data7) {
              var sql = `SELECT * FROM ems.community_details`;
              db.query(sql, function (err, data6) {
                var sql = `SELECT * FROM ems.nation_details`;
                db.query(sql, function (err, data5) {
                  var sql = `SELECT * FROM ems.religion_details`;
                  db.query(sql, function (err, data4) {
                    var sql = `SELECT * FROM ems.no_delete`;
                    db.query(sql, function (err, data3) {
                      var sql = `SELECT * FROM ems.cand_relieving_details inner join ems.cand_admission_details on ems.cand_admission_details.cand_id = ems.cand_relieving_details.cand_id
                      where (course_title,active_status,relieved) = ('${course}','Yes','${reli_info}') order by student_code`;
                      db.query(sql, function (err, data) {
                        if (course == "MBBS") {
                          res.render("mbbs_viewstudent.ejs", {
                            message: message,
                            userData: data,
                            userData3: data3,
                            userData4: data4,
                            userData5: data5,
                            userData6: data6,
                            userData7: data7,
                            userData8: data8,
                            userData10: data10,
                            userData27: data27,
                            userData30: data30,
                          });
                        }
                        if (course == "MDMS") {
                          res.render("mdms_viewstudent.ejs", {
                            message: message,
                            userData: data,
                            userData3: data3,
                            userData4: data4,
                            userData5: data5,
                            userData6: data6,
                            userData7: data7,
                            userData8: data8,
                            userData10: data10,
                            userData27: data27,
                            userData30: data30,
                          });
                        }
                        if (course == "BSC") {
                          res.render("bsc_viewstudent.ejs", {
                            message: message,
                            userData: data,
                            userData3: data3,
                            userData4: data4,
                            userData5: data5,
                            userData6: data6,
                            userData7: data7,
                            userData8: data8,
                            userData10: data10,
                            userData27: data27,
                            userData30: data30,
                          });
                        }
                        if (course == "AISSC") {
                          res.render("aissc_viewstudent.ejs", {
                            message: message,
                            userData: data,
                            userData3: data3,
                            userData4: data4,
                            userData5: data5,
                            userData6: data6,
                            userData7: data7,
                            userData8: data8,
                            userData10: data10,
                            userData27: data27,
                            userData30: data30,
                          });
                        }
                        if (course == "DIPLOMA IN NURSING") {
                          res.render("nursing_viewstudent.ejs", {
                            message: message,
                            userData: data,
                            userData3: data3,
                            userData4: data4,
                            userData5: data5,
                            userData6: data6,
                            userData7: data7,
                            userData8: data8,
                            userData10: data10,
                            userData27: data27,
                            userData30: data30,
                          });
                        }
                      });
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
  }
};
