const user = require("./user");

exports.delete_students = function (req, res) {
  var message = "";
  var cand_id = req.body.cand_id;
  var course = req.body.course;
  console.log(req.body);
  var sql = `UPDATE admintv_ems.cand_admission_details SET active_status = 'NO' WHERE (cand_id = '${cand_id}')`;
  db.query(sql, function () {
    switch (course) {
      case "MBBS":
        user.mbbs_board(req, res);
        break;
      case "MDMS":
        user.mdms_board(req, res);
        break;
      case "BSC":
        user.bsc_board(req, res);
        break;
      case "AISSC":
        user.aissc_board(req, res);
        break;
      case "DIPLOMA IN NURSING":
        user.nursing_board(req, res);
        break;
      default:
        null;
        break;
    }
  });
};
