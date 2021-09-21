const user = require("./user");

exports.insert_cand = function (req, res) {
  var message = "";
  var post = req.body;
  var user_details = JSON.parse(post.user_details);
  var submit_type = post.action;
  var submitted;
  submit_type == "submitted"
    ? (submitted = "Yes")
    : submit_type == "saved"
    ? (submitted = "No")
    : null;
  var verified;
  user_details.user_type == "Assistant"
    ? (verified = "Yes")
    : user_details.user_type == "Public"
    ? (verified = "No")
    : null;
  var name = post.full_name;

  var num = Math.floor(Math.random() * 1e6);
  var cand_first = name.substring(0, 4);
  var cand_id = cand_first + num;
  //console.log('cand_id:'+num +cand_first + cand_id );

  // profile tab
  var cand_name = post.cand_name;
  var initial = post.initial;
  var initial_expansion = post.initial_expansion;
  var type_of_allotment = post.type_of_allotment;
  var father_name = post.father_name;
  var mother_name = post.mother_name;
  var date_of_birth = post.date_of_birth;
  var gender = post.gender;
  var blood_group = post.blood_group;
  var religion = post.religion;
  var community = post.community;
  var caste = post.caste;
  var nationality = post.nationality;
  var willing_to_donate_blood = post.willing_to_donate_blood;
  var academic_year = post.academic_year;
  var student_code = post.student_code;

  // admission tab
  var rank = post.rank;
  var rank_no = post.rank_no;
  var ar_no = post.ar_no;
  var total_mark = post.total_mark;
  var neet_mark = post.neet_mark;
  var reg_no = post.reg_no;
  var neet_roll_no = post.neet_roll_no;
  var course = post.course;
  var course_title = post.course_title;
  var admission_type = post.admission_type;
  var admission_quota = post.admission_quota;
  var course_commencement = post.course_commencement;
  var date_of_admission = post.date_of_admission;
  var date_of_allotment = post.date_of_allotment;
  var selected_category = post.selected_category;
  var willing_for_counciling = post.willing_for_counciling;

  //address tab
  var ps_address = post.ps_address;
  var ps_pincode = post.ps_pincode;
  var ps_state = post.ps_state;
  var ps_district = post.ps_district;
  var pm_address = post.pm_address;
  var pm_pincode = post.pm_pincode;
  var pm_state = post.pm_state;
  var pm_district = post.pm_district;
  var address_type = "";
  ps_address == pm_address ? (address_type = "1") : (address_type = "0");

  //contact tab
  var tel_phone = post.tel_phone;
  var mobile_phone = post.mobile_phone;
  var email_id = post.email_id;
  var aadhar_no = post.aadhar_no;
  var voter_id = post.voter_id;
  var remarks = post.remarks;

  // for institute mbbs
  var institute_name = post.institute_name;
  var place = post.place;
  var register_no = post.register_no;
  var exam_passed = post.exam_passed;
  var relieving_date = post.relieving_date;
  var district = post.district;
  var board = post.board;
  var month_of_passing = post.month_of_passing;
  var state = post.state;
  var year_of_passing = post.year_of_passing;
  var duration = post.duration;

  //for mark details mbbs
  var lang_theory = post.lang_theory;
  var lang_practical = post.lang_practical;
  var lang_internal = post.lang_internal;
  var lang_total = post.lang_total;
  var lang_max = post.lang_max;
  var eng_theory = post.eng_theory;
  var eng_practical = post.eng_practical;
  var eng_internal = post.eng_internal;
  var eng_total = post.eng_total;
  var eng_max = post.eng_max;
  var mat_theory = post.mat_theory;
  var mat_practical = post.mat_practical;
  var mat_internal = post.mat_internal;
  var mat_total = post.mat_total;
  var mat_max = post.mat_max;
  var phy_theory = post.phy_theory;
  var phy_practical = post.phy_practical;
  var phy_internal = post.phy_internal;
  var phy_total = post.phy_total;
  var phy_max = post.phy_max;

  var chem_theory = post.chem_theory;
  var chem_practical = post.chem_practical;
  var chem_internal = post.chem_internal;
  var chem_total = post.chem_total;
  var chem_max = post.chem_max;
  var bio_theory = post.bio_theory;
  var bio_practical = post.bio_practical;
  var bio_internal = post.bio_internal;
  var bio_total = post.bio_total;
  var bio_max = post.bio_max;
  var bot_theory = post.bot_theory;
  var bot_practical = post.bot_practical;
  var bot_internal = post.bot_internal;
  var bot_total = post.bot_total;
  var bot_max = post.bot_max;

  var zoo_theory = post.zoo_theory;
  var zoo_practical = post.zoo_practical;
  var zoo_internal = post.zoo_internal;
  var zoo_total = post.zoo_total;
  var zoo_max = post.zoo_max;
  var lang_paper = post.lang_paper;

  var lang_paper = post.lang_paper;
  var subj_code = post.subj_code;
  var total_mark_m = post.total_mark1;
  var max_mark = post.max_mark;
  var percentage = post.percentage;

  // for neet details mbbs
  var phy_neet_mark = post.phy_neet_mark;
  var chem_neet_mark = post.chem_neet_mark;
  var bio_neet_mark = post.bio_neet_mark;
  var agg_neet_mark = post.agg_neet_mark;
  var phy_neet_max = post.phy_neet_max;
  var chem_neet_max = post.chem_neet_max;
  var bio_neet_max = post.bio_neet_max;
  var agg_neet_max = post.agg_neet_max;

  //institute details mdms
  var institute_name = post.institute_name;
  var college_post = post.college_post;
  var amount_of_agreement = post.amount_of_agreement;
  var period_of_agreement = post.period_of_agreement;

  //academic details mdms
  var mbbs_name = post.mbbs_name;
  var mbbs_place = post.mbbs_place;
  var mbbs_district = post.mbbs_district;
  var mbbs_state = post.mbbs_state;
  var mbbs_university = post.mbbs_university;
  var mbbs_marksheet_no = post.mbbs_marksheet_no;
  var mbbs_passing_month = post.mbbs_passing_month;
  var mbbs_passing_year = post.mbbs_passing_year;
  var mbbs_speciality = post.mbbs_speciality;

  var pg_diplamo_name = post.pg_diplamo_name;
  var pg_diplamo_place = post.pg_diplamo_place;
  var pg_diplamo_district = post.pg_diplamo_district;
  var pg_diplamo_state = post.pg_diplamo_state;
  var pg_diplamo_university = post.pg_diplamo_university;
  var pg_diplamo_marksheet_no = post.pg_diplamo_marksheet_no;
  var pg_diplamo_passing_month = post.pg_diplamo_passing_month;
  var pg_diplamo_passing_year = post.pg_diplamo_passing_year;
  var pg_diplamo_speciality = post.pg_diplamo_speciality;

  var mdms_name = post.mdms_name;
  var mdms_place = post.mdms_place;
  var mdms_district = post.mdms_district;
  var mdms_state = post.mdms_state;
  var mdms_university = post.mdms_university;
  var mdms_marksheet_no = post.mdms_marksheet_no;
  var mdms_passing_month = post.mdms_passing_month;
  var mdms_passing_year = post.mdms_passing_year;
  var mdms_speciality = post.mdms_speciality;

  //neet_marks mdms
  var mbbs_marks = post.mbbs_marks;
  var pg_diplamo_marks = post.pg_diplamo_marks;
  var mdms_marks = post.mdms_marks;
  var neet_percentile = post.neet_percentile;

  //bank details
  var account_name = post.account_name;
  var account_no = post.account_no;
  var bank_name = post.bank_name;
  var branch_name = post.branch_name;
  var ifsc = post.ifsc;
  var micr = post.micr;
  var pan_no = post.pan_no;

  var transaction_id = post.transaction_id;
  var name_of_bank = post.name_of_bank;
  var name_of_branch = post.name_of_branch;
  var amount_paid = post.paid_amount;
  var payment_date = post.payment_date;
  //surety details
  var surety_one_name = post.surety_name_one;
  var surety_one_aadhaar = post.surety_aadhaar_one;
  var surety_one_pan = post.surety_pan_one;
  var surety_one_address = post.surety_address_one;

  var surety_two_name = post.surety_name_two;
  var surety_two_aadhaar = post.surety_aadhaar_two;
  var surety_two_pan = post.surety_pan_two;
  var surety_two_address = post.surety_address_two;

  var surety_three_name = post.surety_name_three;
  var surety_three_aadhaar = post.surety_aadhaar_three;
  var surety_three_pan = post.surety_pan_three;
  var surety_three_address = post.surety_address_three;

  // scanned
  var scan_sign = post.scan_sign.substring(22);
  //relieving details
  var relieved = "No";

  // console.log('candid:'+cand_id);
  var dt = new Date();
  submit_date = `${(dt.getMonth() + 1).toString().padStart(2, "0")}/${dt
    .getDate()
    .toString()
    .padStart(2, "0")}/${dt.getFullYear().toString().padStart(4, "0")}`;
  registered_time = `${(dt.getMonth() + 1).toString().padStart(2, "0")}/${dt
    .getDate()
    .toString()
    .padStart(2, "0")}/${dt.getFullYear().toString().padStart(4, "0")} ${dt
    .getHours()
    .toString()
    .padStart(2, "0")}:${dt.getMinutes().toString().padStart(2, "0")}:${dt
    .getSeconds()
    .toString()
    .padStart(2, "0")}`;
  last_modified_time = `${(dt.getMonth() + 1).toString().padStart(2, "0")}/${dt
    .getDate()
    .toString()
    .padStart(2, "0")}/${dt.getFullYear().toString().padStart(4, "0")} ${dt
    .getHours()
    .toString()
    .padStart(2, "0")}:${dt.getMinutes().toString().padStart(2, "0")}:${dt
    .getSeconds()
    .toString()
    .padStart(2, "0")}`;

  // -----------------------------------File Insertion------------------------------------------------
  var aadhar = [];
  var passbook = [];
  var challan = [];
  var communityarr = [];
  var transfer = [];
  var migration = [];
  var eligiblity = [];
  var conduct = [];
  var nativity = [];
  var ten_pass = [];
  var ten_mark = [];
  var twelve_pass = [];
  var twelve_mark = [];
  var neet_hal = [];
  var neet_score_card = [];
  var pan = [];
  var passport = [];
  var visa = [];
  var certificate_form = [];
  var admission_commitee_form = [];
  var suretyarr = [];
  var photosarr = [];
  var signarr = [];
  var thumbarr = [];
  var fingerarr = [];
  // -----------------------------------File Insertion------------------------------------------------

  var myObj = req.files;
  console.log(myObj);
  // console.log("myobj:" + myObj.length);

  for (i in myObj) {
    if (myObj[i].fieldname.includes("n_cand_photo")) {
      var pcategory = "Photo";

      photosarr.push(myObj[i]);
    } else if (myObj[i].fieldname.includes("n_cand_sign")) {
      var scategory = "Sign";
      signarr.push(myObj[i]);
    } else if (myObj[i].fieldname.includes("n_cand_thumb")) {
      var tcategory = "Thumb";
      thumbarr.push(myObj[i]);
    }
    // else if(myObj[i].fieldname.includes('n_cand_finger'))
    // {

    //   fingerarr.push(myObj[i]);
    // }
    else if (myObj[i].fieldname.includes("surety")) {
      suretyarr.push(myObj[i]);
    } else if (myObj[i].fieldname.includes("Certificate_Form")) {
      certificate_form.push(myObj[i]);
    } else if (myObj[i].fieldname.includes("Admission_commitee_Form")) {
      admission_commitee_form.push(myObj[i]);
    } else if (myObj[i].fieldname.includes("aadhar")) {
      aadhar.push(myObj[i]);
    } else if (myObj[i].fieldname.includes("passbook")) {
      passbook.push(myObj[i]);
    } else if (myObj[i].fieldname.includes("challan")) {
      challan.push(myObj[i]);
    } else if (myObj[i].fieldname.includes("community")) {
      communityarr.push(myObj[i]);
    } else if (myObj[i].fieldname.includes("transfer")) {
      transfer.push(myObj[i]);
    } else if (myObj[i].fieldname.includes("conduct")) {
      conduct.push(myObj[i]);
    } else if (myObj[i].fieldname.includes("eligibility")) {
      eligiblity.push(myObj[i]);
    } else if (myObj[i].fieldname.includes("migration")) {
      migration.push(myObj[i]);
    } else if (myObj[i].fieldname.includes("neet_hall_ticket")) {
      neet_hal.push(myObj[i]);
    } else if (myObj[i].fieldname.includes("neet_score_card")) {
      neet_score_card.push(myObj[i]);
    } else if (myObj[i].fieldname.includes("10th_mark")) {
      ten_mark.push(myObj[i]);
    } else if (myObj[i].fieldname.includes("10th_pass")) {
      ten_pass.push(myObj[i]);
    } else if (myObj[i].fieldname.includes("12th_mark")) {
      twelve_mark.push(myObj[i]);
    } else if (myObj[i].fieldname.includes("12th_pass")) {
      twelve_pass.push(myObj[i]);
    } else if (myObj[i].fieldname.includes("pan_card")) {
      pan.push(myObj[i]);
    } else if (myObj[i].fieldname.includes("passport")) {
      passport.push(myObj[i]);
    } else if (myObj[i].fieldname.includes("visa")) {
      visa.push(myObj[i]);
    } else if (myObj[i].fieldname.includes("nativity")) {
      nativity.push(myObj[i]);
    } else {
      null;
    }

    var x = "";
    x += myObj[i].filename + "<br>";
  }

  var pcategory = "Photo";
  var scategory = "Sign";
  var tcategory = "Thumb";
  var active_flag = "Y";

  var photo_file = "";
  photosarr.length != 0
    ? photosarr.forEach((element) => {
        photo_file += `INSERT INTO ems.biometric_details(cand_id,cand_name,category,Filename,active_flag,last_modified_time) VALUES ('${cand_id}','${name}','${pcategory}','${element.buffer.toString(
          "base64"
        )}','${active_flag}','${last_modified_time}')`;
      })
    : (photo_file += `INSERT INTO ems.biometric_details(cand_id,cand_name,category,active_flag,last_modified_time) VALUES ('${cand_id}','${name}','${pcategory}','${active_flag}','${last_modified_time}')`);
  db.query(photo_file, (err, data) => {
    var sign_file = "";
    scan_sign.length != 0
      ? (sign_file += `INSERT INTO ems.biometric_details(cand_id,cand_name,category,Filename,active_flag,last_modified_time) VALUES ('${cand_id}','${name}','${scategory}','${scan_sign}','${active_flag}','${last_modified_time}')`)
      : signarr.length != 0
      ? signarr.forEach((element) => {
          sign_file += `INSERT INTO ems.biometric_details(cand_id,cand_name,category,Filename,active_flag,last_modified_time) VALUES ('${cand_id}','${name}','${scategory}','${element.buffer.toString(
            "base64"
          )}','${active_flag}','${last_modified_time}')`;
        })
      : (sign_file += `INSERT INTO ems.biometric_details(cand_id,cand_name,category,active_flag,last_modified_time) VALUES ('${cand_id}','${name}','${scategory}','${active_flag}','${last_modified_time}')`);
    db.query(sign_file, (err, data) => {
      var thumb_file = "";
      thumbarr.length != 0
        ? thumbarr.forEach((element) => {
            thumb_file += `INSERT INTO ems.biometric_details(cand_id,cand_name,category,Filename,active_flag,last_modified_time) VALUES ('${cand_id}','${name}','${tcategory}','${element.buffer.toString(
              "base64"
            )}','${active_flag}','${last_modified_time}')`;
          })
        : (thumb_file += `INSERT INTO ems.biometric_details(cand_id,cand_name,category,active_flag,last_modified_time) VALUES ('${cand_id}','${name}','${tcategory}','${active_flag}','${last_modified_time}')`);
      db.query(thumb_file, (err, data) => {
        // fingerarr.forEach(element => {
        //   db.query("INSERT INTO ems.finger(cand_id,cand_name,cand_finger) VALUES ('"+ cand_id +"','"+ name +"','"+ element.filename+"')", function (err, data) {
        // });
        // });

        // common_certificate
        var cf_file = "";
        certificate_form.length != 0
          ? certificate_form.forEach((element) => {
              cf_file += `INSERT INTO ems.certificate_files(cand_id, certificate_type, certificate_files, certificate_files_name, last_modified_time) VALUES ('${cand_id}', 'Certificate_Form', '${element.buffer.toString(
                "base64"
              )}','${element.originalname}' , '${last_modified_time}')`;
            })
          : (cf_file += `INSERT INTO ems.certificate_files(cand_id, certificate_type, last_modified_time) VALUES ('${cand_id}','Certificate_Form','${last_modified_time}')`);
        db.query(cf_file, (err, data) => {
          var acf_file = "";
          admission_commitee_form.length != 0
            ? admission_commitee_form.forEach((element) => {
                acf_file += `INSERT INTO ems.certificate_files(cand_id, certificate_type, certificate_files, certificate_files_name, last_modified_time) VALUES ('${cand_id}', 'Admission_Commitee_Form', '${element.buffer.toString(
                  "base64"
                )}','${element.originalname}' , '${last_modified_time}')`;
              })
            : (acf_file += `INSERT INTO ems.certificate_files(cand_id, certificate_type, last_modified_time) VALUES ('${cand_id}','Admission_Commitee_Form','${last_modified_time}')`);
          db.query(acf_file, (err, data) => {
            var aadhar_file = "";
            aadhar.length != 0
              ? aadhar.forEach((element) => {
                  aadhar_file += `INSERT INTO ems.certificate_files(cand_id, certificate_type, certificate_files, certificate_files_name, last_modified_time) VALUES ('${cand_id}', 'aadhar', '${element.buffer.toString(
                    "base64"
                  )}','${element.originalname}' , '${last_modified_time}')`;
                })
              : (aadhar_file += `INSERT INTO ems.certificate_files(cand_id, certificate_type, last_modified_time) VALUES ('${cand_id}','aadhar','${last_modified_time}')`);
            db.query(aadhar_file, (err, data) => {
              var passbook_file = "";
              passbook.length != 0
                ? passbook.forEach((element) => {
                    passbook_file += `INSERT INTO ems.certificate_files(cand_id, certificate_type, certificate_files, certificate_files_name, last_modified_time) VALUES ('${cand_id}', 'passbook', '${element.buffer.toString(
                      "base64"
                    )}','${element.originalname}' , '${last_modified_time}')`;
                  })
                : (passbook_file += `INSERT INTO ems.certificate_files(cand_id, certificate_type, last_modified_time) VALUES ('${cand_id}','passbook','${last_modified_time}')`);
              db.query(passbook_file, (err, data) => {
                var challan_file = "";
                challan.length != 0
                  ? challan.forEach((element) => {
                      challan_file += `INSERT INTO ems.certificate_files(cand_id, certificate_type, certificate_files, certificate_files_name, last_modified_time) VALUES ('${cand_id}', 'challan', '${element.buffer.toString(
                        "base64"
                      )}','${element.originalname}' , '${last_modified_time}')`;
                    })
                  : (challan_file += `INSERT INTO ems.certificate_files(cand_id, certificate_type, last_modified_time) VALUES ('${cand_id}','challan','${last_modified_time}')`);
                db.query(challan_file, (err, data) => {
                  var community_file = "";
                  communityarr.length != 0
                    ? communityarr.forEach((element) => {
                        community_file += `INSERT INTO ems.certificate_files(cand_id, certificate_type, certificate_files, certificate_files_name, last_modified_time) VALUES ('${cand_id}', 'community', '${element.buffer.toString(
                          "base64"
                        )}','${
                          element.originalname
                        }' , '${last_modified_time}')`;
                      })
                    : (community_file += `INSERT INTO ems.certificate_files(cand_id, certificate_type, last_modified_time) VALUES ('${cand_id}','community','${last_modified_time}')`);
                  db.query(community_file, (err, data) => {
                    var transfer_file = "";
                    transfer.length != 0
                      ? transfer.forEach((element) => {
                          transfer_file += `INSERT INTO ems.certificate_files(cand_id, certificate_type, certificate_files, certificate_files_name, last_modified_time) VALUES ('${cand_id}', 'transfer', '${element.buffer.toString(
                            "base64"
                          )}','${
                            element.originalname
                          }' , '${last_modified_time}')`;
                        })
                      : (transfer_file += `INSERT INTO ems.certificate_files(cand_id, certificate_type, last_modified_time) VALUES ('${cand_id}','transfer','${last_modified_time}')`);
                    db.query(transfer_file, (err, data) => {
                      var conduct_file = "";
                      conduct.length != 0
                        ? conduct.forEach((element) => {
                            conduct_file += `INSERT INTO ems.certificate_files(cand_id, certificate_type, certificate_files, certificate_files_name, last_modified_time) VALUES ('${cand_id}', 'conduct', '${element.buffer.toString(
                              "base64"
                            )}','${
                              element.originalname
                            }' , '${last_modified_time}')`;
                          })
                        : (conduct_file += `INSERT INTO ems.certificate_files(cand_id, certificate_type, last_modified_time) VALUES ('${cand_id}','conduct','${last_modified_time}')`);
                      db.query(conduct_file, (err, data) => {
                        var eligibility_file = "";
                        eligiblity.length != 0
                          ? eligiblity.forEach((element) => {
                              eligibility_file += `INSERT INTO ems.certificate_files(cand_id, certificate_type, certificate_files, certificate_files_name, last_modified_time) VALUES ('${cand_id}', 'eligibility', '${element.buffer.toString(
                                "base64"
                              )}','${
                                element.originalname
                              }' , '${last_modified_time}')`;
                            })
                          : (eligibility_file += `INSERT INTO ems.certificate_files(cand_id, certificate_type, last_modified_time) VALUES ('${cand_id}','eligibility','${last_modified_time}')`);
                        db.query(eligibility_file, (err, data) => {
                          var migration_file = "";
                          migration.length != 0
                            ? migration.forEach((element) => {
                                migration_file += `INSERT INTO ems.certificate_files(cand_id, certificate_type, certificate_files, certificate_files_name, last_modified_time) VALUES ('${cand_id}', 'migration', '${element.buffer.toString(
                                  "base64"
                                )}','${
                                  element.originalname
                                }' , '${last_modified_time}')`;
                              })
                            : (migration_file += `INSERT INTO ems.certificate_files(cand_id, certificate_type, last_modified_time) VALUES ('${cand_id}','migration','${last_modified_time}')`);
                          db.query(migration_file, (err, data) => {
                            var neet_hall_file = "";
                            neet_hal.length != 0
                              ? neet_hal.forEach((element) => {
                                  neet_hall_file += `INSERT INTO ems.certificate_files(cand_id, certificate_type, certificate_files, certificate_files_name, last_modified_time) VALUES ('${cand_id}', 'neet_hall_ticket', '${element.buffer.toString(
                                    "base64"
                                  )}','${
                                    element.originalname
                                  }' , '${last_modified_time}')`;
                                })
                              : (neet_hall_file += `INSERT INTO ems.certificate_files(cand_id, certificate_type, last_modified_time) VALUES ('${cand_id}','neet_hall_ticket','${last_modified_time}')`);
                            db.query(neet_hall_file, (err, data) => {
                              var neet_score_file = "";
                              neet_score_card.length != 0
                                ? neet_score_card.forEach((element) => {
                                    neet_score_file += `INSERT INTO ems.certificate_files(cand_id, certificate_type, certificate_files, certificate_files_name, last_modified_time) VALUES ('${cand_id}', 'neet_score_card', '${element.buffer.toString(
                                      "base64"
                                    )}','${
                                      element.originalname
                                    }' , '${last_modified_time}')`;
                                  })
                                : (neet_score_file += `INSERT INTO ems.certificate_files(cand_id, certificate_type, last_modified_time) VALUES ('${cand_id}','neet_score_card','${last_modified_time}')`);
                              db.query(neet_score_file, (err, data) => {
                                var ten_mark_file = "";
                                ten_mark.length != 0
                                  ? ten_mark.forEach((element) => {
                                      ten_mark_file += `INSERT INTO ems.certificate_files(cand_id, certificate_type, certificate_files, certificate_files_name, last_modified_time) VALUES ('${cand_id}', 'ten_mark', '${element.buffer.toString(
                                        "base64"
                                      )}','${
                                        element.originalname
                                      }' , '${last_modified_time}')`;
                                    })
                                  : (ten_mark_file += `INSERT INTO ems.certificate_files(cand_id, certificate_type, last_modified_time) VALUES ('${cand_id}','ten_mark','${last_modified_time}')`);
                                db.query(ten_mark_file, (err, data) => {
                                  var ten_pass_file = "";
                                  ten_pass.length != 0
                                    ? ten_pass.forEach((element) => {
                                        ten_pass_file += `INSERT INTO ems.certificate_files(cand_id, certificate_type, certificate_files, certificate_files_name, last_modified_time) VALUES ('${cand_id}', 'ten_pass', '${element.buffer.toString(
                                          "base64"
                                        )}','${
                                          element.originalname
                                        }' , '${last_modified_time}')`;
                                      })
                                    : (ten_pass_file += `INSERT INTO ems.certificate_files(cand_id, certificate_type, last_modified_time) VALUES ('${cand_id}','ten_pass','${last_modified_time}')`);
                                  db.query(ten_pass_file, (err, data) => {
                                    var twelve_mark_file = "";
                                    twelve_mark.length != 0
                                      ? twelve_mark.forEach((element) => {
                                          twelve_mark_file += `INSERT INTO ems.certificate_files(cand_id, certificate_type, certificate_files, certificate_files_name, last_modified_time) VALUES ('${cand_id}', 'twelve_mark', '${element.buffer.toString(
                                            "base64"
                                          )}','${
                                            element.originalname
                                          }' , '${last_modified_time}')`;
                                        })
                                      : (twelve_mark_file += `INSERT INTO ems.certificate_files(cand_id, certificate_type, last_modified_time) VALUES ('${cand_id}','twelve_mark','${last_modified_time}')`);
                                    db.query(twelve_mark_file, (err, data) => {
                                      var twelve_pass_file = "";
                                      twelve_pass.length != 0
                                        ? twelve_pass.forEach((element) => {
                                            twelve_pass_file += `INSERT INTO ems.certificate_files(cand_id, certificate_type, certificate_files, certificate_files_name, last_modified_time) VALUES ('${cand_id}', 'twelve_pass', '${element.buffer.toString(
                                              "base64"
                                            )}','${
                                              element.originalname
                                            }' , '${last_modified_time}')`;
                                          })
                                        : (twelve_pass_file += `INSERT INTO ems.certificate_files(cand_id, certificate_type, last_modified_time) VALUES ('${cand_id}','twelve_pass','${last_modified_time}')`);
                                      db.query(
                                        twelve_pass_file,
                                        (err, data) => {
                                          var pan_card_file = "";
                                          pan.length != 0
                                            ? pan.forEach((element) => {
                                                pan_card_file += `INSERT INTO ems.certificate_files(cand_id, certificate_type, certificate_files, certificate_files_name, last_modified_time) VALUES ('${cand_id}', 'pan_card', '${element.buffer.toString(
                                                  "base64"
                                                )}','${
                                                  element.originalname
                                                }' , '${last_modified_time}')`;
                                              })
                                            : (pan_card_file += `INSERT INTO ems.certificate_files(cand_id, certificate_type, last_modified_time) VALUES ('${cand_id}','pan_card','${last_modified_time}')`);
                                          db.query(
                                            pan_card_file,
                                            (err, data) => {
                                              var passport_file = "";
                                              passport.length != 0
                                                ? passport.forEach(
                                                    (element) => {
                                                      passport_file += `INSERT INTO ems.certificate_files(cand_id, certificate_type, certificate_files, certificate_files_name, last_modified_time) VALUES ('${cand_id}', 'passport', '${element.buffer.toString(
                                                        "base64"
                                                      )}','${
                                                        element.originalname
                                                      }' , '${last_modified_time}')`;
                                                    }
                                                  )
                                                : (passport_file += `INSERT INTO ems.certificate_files(cand_id, certificate_type, last_modified_time) VALUES ('${cand_id}','passport','${last_modified_time}')`);
                                              db.query(
                                                passport_file,
                                                (err, data) => {
                                                  var visa_file = "";
                                                  visa.length != 0
                                                    ? visa.forEach(
                                                        (element) => {
                                                          visa_file += `INSERT INTO ems.certificate_files(cand_id, certificate_type, certificate_files, certificate_files_name, last_modified_time) VALUES ('${cand_id}', 'visa', '${element.buffer.toString(
                                                            "base64"
                                                          )}','${
                                                            element.originalname
                                                          }' , '${last_modified_time}')`;
                                                        }
                                                      )
                                                    : (visa_file += `INSERT INTO ems.certificate_files(cand_id, certificate_type, last_modified_time) VALUES ('${cand_id}','visa','${last_modified_time}')`);
                                                  db.query(
                                                    visa_file,
                                                    (err, data) => {
                                                      var nativity_file = "";
                                                      nativity.length != 0
                                                        ? nativity.forEach(
                                                            (element) => {
                                                              nativity_file += `INSERT INTO ems.certificate_files(cand_id, certificate_type, certificate_files, certificate_files_name, last_modified_time) VALUES ('${cand_id}','nativity', '${element.buffer.toString(
                                                                "base64"
                                                              )}','${
                                                                element.originalname
                                                              }' , '${last_modified_time}')`;
                                                            }
                                                          )
                                                        : (nativity_file += `INSERT INTO ems.certificate_files(cand_id, certificate_type, last_modified_time) VALUES ('${cand_id}','nativity','${last_modified_time}')`);
                                                      db.query(
                                                        nativity_file,
                                                        (err, data) => {
                                                          if (err)
                                                            console.log(err);
                                                        }
                                                      );
                                                    }
                                                  );
                                                }
                                              );
                                            }
                                          );
                                        }
                                      );
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
                });
              });
            });
          });
        });
      });
    });
  });
  // ---------------------------------end of files-----------------------
  user_details.user_type == "Public"
    ? db.query(
        `update ems.user_details set cand_id = '${cand_id}' where user_name ='${user_details.user_name}' and password ='${user_details.password}'`
      )
    : null;
  // if (err) console.error(err);
  // console.log(data);
  // MBBS
  if (course_title == "MBBS") {
    var c1_type = post.c1;
    var c1_reg_no = post.c1_reg_no;
    var c1_date = post.c1_date;
    var c1_issue = post.c1_issue;
    var c1_place = post.c1_place;

    var c2_type = post.c2;
    var c2_reg_no = post.c2_reg_no;
    var c2_date = post.c2_date;
    var c2_issue = post.c2_issue;
    var c2_place = post.c2_place;

    var c3_type = post.c3;
    var c3_reg_no = post.c3_reg_no;
    var c3_date = post.c3_date;
    var c3_issue = post.c3_issue;
    var c3_place = post.c3_place;

    var c4_type = post.c4;
    var c4_reg_no = post.c4_reg_no;
    var c4_date = post.c4_date;
    var c4_issue = post.c4_issue;
    var c4_place = post.c4_place;

    var c5_type = post.c5;
    var c5_reg_no = post.c5_reg_no;
    var c5_date = post.c5_date;
    var c5_issue = post.c5_issue;
    var c5_place = post.c5_place;

    var c6_type = post.c6;
    var c6_reg_no = post.c6_reg_no;
    var c6_date = post.c6_date;
    var c6_issue = post.c6_issue;
    var c6_place = post.c6_place;

    var c7_type = post.c7;
    var c7_reg_no = post.c7_reg_no;
    var c7_date = post.c7_date;
    var c7_issue = post.c7_issue;
    var c7_place = post.c7_place;

    var c8_type = post.c8;
    var c8_reg_no = post.c8_reg_no;
    var c8_date = post.c8_date;
    var c8_issue = post.c8_issue;
    var c8_place = post.c8_place;

    var c9_type = post.c9;
    var c9_reg_no = post.c9_reg_no;
    var c9_date = post.c9_date;
    var c9_issue = post.c9_issue;
    var c9_place = post.c9_place;

    var c10_type = post.c10;
    var c10_reg_no = post.c10_reg_no;
    var c10_date = post.c10_date;
    var c10_issue = post.c10_issue;
    var c10_place = post.c10_place;

    var c11_type = post.c11;
    var c11_reg_no = post.c11_reg_no;
    var c11_date = post.c11_date;
    var c11_issue = post.c11_issue;
    var c11_place = post.c11_place;

    var c12_type = post.c12;
    var c12_reg_no = post.c12_reg_no;
    var c12_date = post.c12_date;
    var c12_issue = post.c12_issue;
    var c12_place = post.c12_place;

    var c13_type = post.c13;
    var c13_reg_no = post.c13_reg_no;
    var c13_date = post.c13_date;
    var c13_issue = post.c13_issue;
    var c13_place = post.c13_place;

    var c14_type = post.c14;
    var c14_reg_no = post.c14_reg_no;
    var c14_date = post.c14_date;
    var c14_issue = post.c14_issue;
    var c14_place = post.c14_place;

    var c15_type = post.c15;
    var c15_reg_no = post.c15_reg_no;
    var c15_date = post.c15_date;
    var c15_issue = post.c15_issue;
    var c15_place = post.c15_place;

    var sql =
      "INSERT INTO `ems`.`cand_admission_details`(`cand_id`,`cand_name`,`rank`,`rank_no`,`ar_no`,`total_mark`,`neet_mark`,`reg_no`,`neet_roll_no`,`course`,`course_title`,`admission_type`,`admission_quota`,`course_commencement`,`date_of_admission`,`date_of_allotment`,`selected_category`,`willing_for_counciling`,`student_code`,`submitted`,`verified`,`last_modified_time`) VALUES ('" +
      cand_id +
      "','" +
      name +
      "','" +
      rank +
      "','" +
      rank_no +
      "','" +
      ar_no +
      "','" +
      total_mark +
      "','" +
      neet_mark +
      "','" +
      reg_no +
      "','" +
      neet_roll_no +
      "','" +
      course +
      "','" +
      course_title +
      "','" +
      admission_type +
      "','" +
      admission_quota +
      "','" +
      course_commencement +
      "','" +
      date_of_admission +
      "','" +
      date_of_allotment +
      "','" +
      selected_category +
      "','" +
      willing_for_counciling +
      "','" +
      student_code +
      "','" +
      submitted +
      "','" +
      verified +
      "','" +
      last_modified_time +
      "')";
    //var sql =`INSERT INTO ems.cand_admission_details (cand_id, cand_name, rank, rank_no, ar_no, total_mark, neet_mark, reg_no, neet_roll_no, course, admission_type, admission_quota, course_commencement, date_of_admission, date_of_allotment, selected_category, willing_for_counciling, last_modified_time) values('${cand_id}', '${name}', '${rank}', '${rank_no}', '${ar_no}', '${total_mark}', '${neet_mark}', '${reg_no}', '${neet_roll_no}', '${course}', '${admission_type}', '${admission_quota}', '${course_commencement}', '${date_of_admission}', '${date_of_allotment}', '${selected_category}', '${willing_for_counciling}', '${last_modified_time}')`;
    // var sql =`INSERT INTO ems.cand_admission_details (cand_id, cand_name,course, last_modified_time)values('${cand_id}', '${name}','${course}','${last_modified_time}')`;
    db.query(sql, function (err, data) {
      var sql = `INSERT INTO ems.cand_profile_details (cand_id, name, initial, initial_expansion,type_of_allotment, father_name, mother_name, date_of_birth, gender, blood_group, religion, community, caste, nationality, willing_to_donate_blood, academic_year,  registered_time, last_modified_time) values ('${cand_id}','${name}', '${initial}', '${initial_expansion}','${type_of_allotment}', '${father_name}', '${mother_name}', '${date_of_birth}', '${gender}', '${blood_group}', '${religion}', '${community}', '${caste}', '${nationality}', '${willing_to_donate_blood}', '${academic_year}',  '${registered_time}', '${last_modified_time}')`;
      db.query(sql, function (err, data) {
        var sql = `INSERT INTO ems.cand_address_details (cand_id, address_type, ps_address, ps_pincode, ps_state, ps_district, pm_address, pm_pincode, pm_state, pm_district, last_modified_time) values ('${cand_id}', '${address_type}', '${ps_address.replace(
          "'",
          "''"
        )}', '${ps_pincode}', '${ps_state}', '${ps_district}', '${pm_address.replace(
          "'",
          "''"
        )}', '${pm_pincode}', '${pm_state}', '${pm_district}', '${last_modified_time}')`;
        db.query(sql, function (err, data) {
          var sql = `INSERT INTO ems.cand_contact_details (cand_id, tel_phone, mobile_phone, email_id, aadhar_no, voter_id, remarks, last_modified_time) values('${cand_id}', '${tel_phone}', '${mobile_phone}', '${email_id}', '${aadhar_no}', '${voter_id}', '${remarks}', '${last_modified_time}')`;
          db.query(sql, function (err, data) {
            var sql = `INSERT INTO ems.cand_bank_details (cand_id,account_name,account_no, bank_name, branch_name, ifsc, micr, pan_no,transaction_id,name_of_bank,name_of_branch,amount_paid,payment_date, last_modified_time) values('${cand_id}','${account_name}' ,'${account_no}', '${bank_name}', '${branch_name}', '${ifsc}', '${micr}', '${pan_no}','${transaction_id}','${name_of_bank}','${name_of_branch}','${amount_paid}','${payment_date}','${last_modified_time}')`;
            db.query(sql, function (err, data) {
              var sql = `INSERT INTO ems.cand_relieving_details  (cand_id, relieved, amount_refunded, date_of_relieving, date_of_reallotment, college_name,last_modified_time) values('${cand_id}', '${relieved}','','','','','${last_modified_time}')`;
              db.query(sql, function (err, data) {
                var sql = `INSERT INTO ems.cand_institute_details(cand_id,institute_name,place,district,state,relieving_date,duration,exam_passed,register_no,month_of_passing,year_of_passing,board,last_modified_time) VALUES ('${cand_id}','${institute_name.replace(
                  "'",
                  "''"
                )}','${place}','${district}','${state}','${relieving_date}','${duration}','${exam_passed}','${register_no}','${month_of_passing}','${year_of_passing}','${board}','${last_modified_time}')`;
                db.query(sql, function (err, data) {
                  var sql = `INSERT INTO ems.cand_marks_details(cand_id,lang_theory,lang_practical,lang_internal,lang_total,lang_max,eng_theory,eng_practical,eng_internal,eng_total,eng_max,mat_theory,mat_practical,mat_internal,mat_total,mat_max,phy_theory,phy_practical,phy_internal,phy_total,phy_max,chem_theory,chem_practical,chem_internal,chem_total,chem_max,bio_theory,bio_practical,bio_internal,bio_total,bio_max,bot_theory,bot_practical,bot_internal,bot_total,bot_max,zoo_theory,zoo_practical,zoo_internal,zoo_total,zoo_max,lang_paper,subj_code,total_mark,max_mark,percentage) VALUES ('${cand_id}','${lang_theory}','${lang_practical}','${lang_internal}','${lang_total}','${lang_max}','${eng_theory}','${eng_practical}','${eng_internal}','${eng_total}','${eng_max}','${mat_theory}','${mat_practical}','${mat_internal}','${mat_total}','${mat_max}','${phy_theory}','${phy_practical}','${phy_internal}','${phy_total}','${phy_max}','${chem_theory}','${chem_practical}','${chem_internal}','${chem_total}','${chem_max}','${bio_theory}','${bio_practical}','${bio_internal}','${bio_total}','${bio_max}','${bot_theory}','${bot_practical}','${bot_internal}','${bot_total}','${bot_max}','${zoo_theory}','${zoo_practical}','${zoo_internal}','${zoo_total}','${zoo_max}','${lang_paper}','${subj_code}','${total_mark_m}','${max_mark}','${percentage}')`;
                  db.query(sql, function (err, data) {
                    var sql = `INSERT INTO ems.cand_neet_mark_details(cand_id,phy_mark,phy_max_mark,chem_mark,chem_max_mark,bio_mark,bio_max_mark,agg_mark,agg_max_mark,last_modified_time) VALUES ('${cand_id}','${phy_neet_mark}','${phy_neet_max}','${chem_neet_mark}','${chem_neet_max}','${bio_neet_mark}','${bio_neet_max}','${agg_neet_mark}','${agg_neet_max}','${last_modified_time}')`;
                    db.query(sql, function (err, data) {
                      var sql = `INSERT INTO ems.cand_fees (cand_id,last_modified_time) values ('${cand_id}','${last_modified_time}')`;
                      db.query(sql, function () {
                        var sql = `insert into ems.certificate_details(cand_id, all_certificate, reg_no, date, issue, place, active_flag, last_modified_time) values
                            ('${cand_id}','${c1_type}','${c1_reg_no}','${c1_date}','${c1_issue}','${c1_place}','Y','${last_modified_time}')`;
                        db.query(sql, function () {
                          var sql = `insert into ems.certificate_details(cand_id, all_certificate, reg_no, date, issue, place, active_flag, last_modified_time) values
                                  ('${cand_id}','${c2_type}','${c2_reg_no}','${c2_date}','${c2_issue}','${c2_place}','Y','${last_modified_time}')`;
                          db.query(sql, function () {
                            var sql = `insert into ems.certificate_details(cand_id, all_certificate, reg_no, date, issue, place, active_flag, last_modified_time) values
                                    ('${cand_id}','${c3_type}','${c3_reg_no}','${c3_date}','${c3_issue}','${c3_place}','Y','${last_modified_time}')`;
                            db.query(sql, function () {
                              var sql = `insert into ems.certificate_details(cand_id, all_certificate, reg_no, date, issue, place, active_flag, last_modified_time) values
                                        ('${cand_id}','${c4_type}','${c4_reg_no}','${c4_date}','${c4_issue}','${c4_place}','Y','${last_modified_time}')`;
                              db.query(sql, function () {
                                var sql = `insert into ems.certificate_details(cand_id, all_certificate, reg_no, date, issue, place, active_flag, last_modified_time) values
                                          ('${cand_id}','${c5_type}','${c5_reg_no}','${c5_date}','${c5_issue}','${c5_place}','Y','${last_modified_time}')`;
                                db.query(sql, function () {
                                  var sql = `insert into ems.certificate_details(cand_id, all_certificate, reg_no, date, issue, place, active_flag, last_modified_time) values
                                          ('${cand_id}','${c6_type}','${c6_reg_no}','${c6_date}','${c6_issue}','${c6_place}','Y','${last_modified_time}')`;
                                  db.query(sql, function () {
                                    var sql = `insert into ems.certificate_details(cand_id, all_certificate, reg_no, date, issue, place, active_flag, last_modified_time) values
                                          ('${cand_id}','${c7_type}','${c7_reg_no}','${c7_date}','${c7_issue}','${c7_place}','Y','${last_modified_time}')`;
                                    db.query(sql, function () {
                                      var sql = `insert into ems.certificate_details(cand_id, all_certificate, reg_no, date, issue, place, active_flag, last_modified_time) values
                                          ('${cand_id}','${c8_type}','${c8_reg_no}','${c8_date}','${c8_issue}','${c8_place}','Y','${last_modified_time}')`;
                                      db.query(sql, function () {
                                        var sql = `insert into ems.certificate_details(cand_id, all_certificate, reg_no, date, issue, place, active_flag, last_modified_time) values
                                          ('${cand_id}','${c9_type}','${c9_reg_no}','${c9_date}','${c9_issue}','${c9_place}','Y','${last_modified_time}')`;
                                        db.query(sql, function () {
                                          var sql = `insert into ems.certificate_details(cand_id, all_certificate, reg_no, date, issue, place, active_flag, last_modified_time) values
                                          ('${cand_id}','${c10_type}','${c10_reg_no}','${c10_date}','${c10_issue}','${c10_place}','Y','${last_modified_time}')`;
                                          db.query(sql, function () {
                                            var sql = `insert into ems.certificate_details(cand_id, all_certificate, reg_no, date, issue, place, active_flag, last_modified_time) values
                                          ('${cand_id}','${c11_type}','${c11_reg_no}','${c11_date}','${c11_issue}','${c11_place}','Y','${last_modified_time}')`;
                                            db.query(sql, function () {
                                              var sql = `insert into ems.certificate_details(cand_id, all_certificate, reg_no, date, issue, place, active_flag, last_modified_time) values
                                          ('${cand_id}','${c12_type}','${c12_reg_no}','${c12_date}','${c12_issue}','${c12_place}','Y','${last_modified_time}')`;
                                              db.query(sql, function () {
                                                var sql = `insert into ems.certificate_details(cand_id, all_certificate, reg_no, date, issue, place, active_flag, last_modified_time) values
                                          ('${cand_id}','${c13_type}','${c13_reg_no}','${c13_date}','${c13_issue}','${c13_place}','Y','${last_modified_time}')`;
                                                db.query(sql, function () {
                                                  var sql = `insert into ems.certificate_details(cand_id, all_certificate, reg_no, date, issue, place, active_flag, last_modified_time) values
                                          ('${cand_id}','${c14_type}','${c14_reg_no}','${c14_date}','${c14_issue}','${c14_place}','Y','${last_modified_time}')`;
                                                  db.query(sql, function () {
                                                    var sql = `insert into ems.certificate_details(cand_id, all_certificate, reg_no, date, issue, place, active_flag, last_modified_time) values
                                          ('${cand_id}','${c15_type}','${c15_reg_no}','${c15_date}','${c15_issue}','${c15_place}','Y','${last_modified_time}')`;
                                                    db.query(sql, function () {
                                                      if (
                                                        user_details.user_type ==
                                                          "Public" &&
                                                        submitted == "Yes"
                                                      ) {
                                                        var sql1 = `update ems.cand_admission_details set submit_date = '${submit_date}' where cand_id = '${cand_id}'`;
                                                        db.query(sql1, () => {
                                                          var sql = `select cand_id,course from ems.user_details where user_name = '${user_details.user_name}' and password = '${user_details.password}'`;
                                                          db.query(
                                                            sql,
                                                            (err, cand_id) => {
                                                              var sql_1 = `SELECT ems.cand_admission_details.cand_id,cand_name,course,name_of_bank,amount_paid,transaction_id,mobile_phone,submit_date FROM ems.cand_admission_details
                                                          inner join ems.cand_relieving_details on ems.cand_admission_details.cand_id = ems.cand_relieving_details.cand_id
                                                          inner join ems.cand_bank_details on ems.cand_admission_details.cand_id = ems.cand_bank_details.cand_id
                                                          inner join ems.cand_contact_details on ems.cand_admission_details.cand_id = ems.cand_contact_details.cand_id
                                                          where (course_title,active_status,relieved ,ems.cand_admission_details.cand_id) = ('${cand_id[0].course}','Yes','No','${cand_id[0].cand_id}')`;

                                                              db.query(
                                                                sql_1,
                                                                function (
                                                                  err,
                                                                  data
                                                                ) {
                                                                  res.render(
                                                                    "receipt.ejs",
                                                                    {
                                                                      userData:
                                                                        data,
                                                                    }
                                                                  );
                                                                }
                                                              );
                                                            }
                                                          );
                                                        });
                                                      } else {
                                                        user.all_boards(
                                                          req,
                                                          res
                                                        );
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
            });
          });
        });
      });
    });
  }

  // MDMS
  if (course_title == "MDMS") {
    var c1_type = post.c1;
    var c1_reg_no = post.c1_reg_no;
    var c1_date = post.c1_date;
    var c1_issue = post.c1_issue;
    var c1_place = post.c1_place;

    var c2_type = post.c2;
    var c2_reg_no = post.c2_reg_no;
    var c2_date = post.c2_date;
    var c2_issue = post.c2_issue;
    var c2_place = post.c2_place;

    var c3_type = post.c3;
    var c3_reg_no = post.c3_reg_no;
    var c3_date = post.c3_date;
    var c3_issue = post.c3_issue;
    var c3_place = post.c3_place;

    var c4_type = post.c4;
    var c4_reg_no = post.c4_reg_no;
    var c4_date = post.c4_date;
    var c4_issue = post.c4_issue;
    var c4_place = post.c4_place;

    var c5_type = post.c5;
    var c5_reg_no = post.c5_reg_no;
    var c5_date = post.c5_date;
    var c5_issue = post.c5_issue;
    var c5_place = post.c5_place;

    var c6_type = post.c6;
    var c6_reg_no = post.c6_reg_no;
    var c6_date = post.c6_date;
    var c6_issue = post.c6_issue;
    var c6_place = post.c6_place;

    var c7_type = post.c7;
    var c7_reg_no = post.c7_reg_no;
    var c7_date = post.c7_date;
    var c7_issue = post.c7_issue;
    var c7_place = post.c7_place;

    var c8_type = post.c8;
    var c8_reg_no = post.c8_reg_no;
    var c8_date = post.c8_date;
    var c8_issue = post.c8_issue;
    var c8_place = post.c8_place;

    var c9_type = post.c9;
    var c9_reg_no = post.c9_reg_no;
    var c9_date = post.c9_date;
    var c9_issue = post.c9_issue;
    var c9_place = post.c9_place;

    var c10_type = post.c10;
    var c10_reg_no = post.c10_reg_no;
    var c10_date = post.c10_date;
    var c10_issue = post.c10_issue;
    var c10_place = post.c10_place;

    var c11_type = post.c11;
    var c11_reg_no = post.c11_reg_no;
    var c11_date = post.c11_date;
    var c11_issue = post.c11_issue;
    var c11_place = post.c11_place;

    // surety_files
    suretyarr.length != 0
      ? suretyarr.forEach((element) => {
          db.query(
            `insert into ems.surety_mdms (surety_id, surety_File,file_name,last_modified_time) values ('${cand_id}','${element.buffer.toString(
              "base64"
            )}','${element.originalname}','${last_modified_time}')`
          );
        })
      : db.query(
          `insert into ems.surety_mdms (surety_id,last_modified_time)values('${cand_id}','${last_modified_time}')`
        );

    var sql =
      "INSERT INTO `ems`.`cand_admission_details`(`cand_id`,`cand_name`,`rank`,`rank_no`,`ar_no`,`total_mark`,`neet_mark`,`reg_no`,`neet_roll_no`,`course`,`course_title`,`admission_type`,`admission_quota`,`course_commencement`,`date_of_admission`,`date_of_allotment`,`selected_category`,`willing_for_counciling`,`student_code`,`submitted`,`verified`,`last_modified_time`) VALUES ('" +
      cand_id +
      "','" +
      name +
      "','" +
      rank +
      "','" +
      rank_no +
      "','" +
      ar_no +
      "','" +
      total_mark +
      "','" +
      neet_mark +
      "','" +
      reg_no +
      "','" +
      neet_roll_no +
      "','" +
      course +
      "','" +
      course_title +
      "','" +
      admission_type +
      "','" +
      admission_quota +
      "','" +
      course_commencement +
      "','" +
      date_of_admission +
      "','" +
      date_of_allotment +
      "','" +
      selected_category +
      "','" +
      willing_for_counciling +
      "','" +
      student_code +
      "','" +
      submitted +
      "','" +
      verified +
      "','" +
      last_modified_time +
      "')";
    //var sql =`INSERT INTO ems.cand_admission_details (cand_id, cand_name, rank, rank_no, ar_no, total_mark, neet_mark, reg_no, neet_roll_no, course, admission_type, admission_quota, course_commencement, date_of_admission, date_of_allotment, selected_category, willing_for_counciling, last_modified_time) values('${cand_id}', '${name}', '${rank}', '${rank_no}', '${ar_no}', '${total_mark}', '${neet_mark}', '${reg_no}', '${neet_roll_no}', '${course}', '${admission_type}', '${admission_quota}', '${course_commencement}', '${date_of_admission}', '${date_of_allotment}', '${selected_category}', '${willing_for_counciling}', '${last_modified_time}')`;
    // var sql =`INSERT INTO ems.cand_admission_details (cand_id, cand_name,course, last_modified_time)values('${cand_id}', '${name}','${course}','${last_modified_time}')`;
    db.query(sql, function (err, data) {
      var sql = `INSERT INTO ems.cand_profile_details (cand_id, name, initial, initial_expansion,type_of_allotment, father_name, mother_name, date_of_birth, gender, blood_group, religion, community, caste, nationality, willing_to_donate_blood, academic_year,  registered_time, last_modified_time) values ('${cand_id}','${name}', '${initial}', '${initial_expansion}','${type_of_allotment}', '${father_name}', '${mother_name}', '${date_of_birth}', '${gender}', '${blood_group}', '${religion}', '${community}', '${caste}', '${nationality}', '${willing_to_donate_blood}', '${academic_year}', '${registered_time}', '${last_modified_time}')`;
      db.query(sql, function (err, data) {
        var sql = `INSERT INTO ems.cand_address_details (cand_id, address_type, ps_address, ps_pincode, ps_state, ps_district, pm_address, pm_pincode, pm_state, pm_district, last_modified_time) values ('${cand_id}', '${address_type}', '${ps_address.replace(
          "'",
          "''"
        )}', '${ps_pincode}', '${ps_state}', '${ps_district}', '${pm_address.replace(
          "'",
          "''"
        )}', '${pm_pincode}', '${pm_state}', '${pm_district}', '${last_modified_time}')`;
        db.query(sql, function (err, data) {
          var sql = `INSERT INTO ems.cand_contact_details (cand_id, tel_phone, mobile_phone, email_id, aadhar_no, voter_id, remarks, last_modified_time) values('${cand_id}', '${tel_phone}', '${mobile_phone}', '${email_id}', '${aadhar_no}', '${voter_id}', '${remarks}', '${last_modified_time}')`;
          db.query(sql, function (err, data) {
            var sql = `INSERT INTO ems.cand_institute_details_mdms (cand_id, name, post, amount_of_agreement, period_of_agreement, last_modified_time) values ('${cand_id}', '${institute_name.replace(
              "'",
              "''"
            )}', '${college_post}', '${amount_of_agreement}', '${period_of_agreement}', '${last_modified_time}')`;
            db.query(sql, function (err, data) {
              var sql = `INSERT INTO ems.cand_academic_mdms (cand_id, mbbs_name, mbbs_place, mbbs_district, mbbs_state, mbbs_university, mbbs_marksheet_no, mbbs_passing_month, mbbs_passing_year, mbbs_speciality, last_modified_time) values('${cand_id}', '${mbbs_name}', '${mbbs_place}', '${mbbs_district}', '${mbbs_state}', '${mbbs_university}', '${mbbs_marksheet_no}', '${mbbs_passing_month}', '${mbbs_passing_year}', '${mbbs_speciality}', '${last_modified_time}')`;
              db.query(sql, function (err, data) {
                var sql = `INSERT INTO ems.cand_academic_mdms_1 (cand_id, pg_diplamo_name, pg_diplamo_place, pg_diplamo_district, pg_diplamo_state, pg_diplamo_university, pg_diplamo_marksheet_no, pg_diplamo_passing_month, pg_diplamo_passing_year, pg_diplamo_speciality, last_modified_time) values('${cand_id}', '${pg_diplamo_name}', '${pg_diplamo_place}', '${pg_diplamo_district}', '${pg_diplamo_state}', '${pg_diplamo_university}', '${pg_diplamo_marksheet_no}', '${pg_diplamo_passing_month}', '${pg_diplamo_passing_year}', '${pg_diplamo_speciality}', '${last_modified_time}')`;
                db.query(sql, function (err, data) {
                  var sql = `INSERT INTO ems.cand_academic_mdms_2 (cand_id, mdms_name, mdms_place, mdms_district, mdms_state, mdms_university, mdms_marksheet_no, mdms_passing_month, mdms_passing_year, mdms_speciality) values ('${cand_id}', '${mdms_name}', '${mdms_place}', '${mdms_district}', '${mdms_state}', '${mdms_university}', '${mdms_marksheet_no}', '${mdms_passing_month}', '${mdms_passing_year}', '${mdms_speciality}')`;
                  db.query(sql, function (err, data) {
                    var sql = `INSERT INTO ems.cand_neet_marks_mdms (cand_id, mbbs_marks, pg_diplamo_marks, mdms_marks, neet_percentile, last_modified_time) values('${cand_id}', '${mbbs_marks}', '${pg_diplamo_marks}', '${mdms_marks}','${neet_percentile}','${last_modified_time}')`;
                    db.query(sql, function (err, data) {
                      var sql = `INSERT INTO ems.cand_bank_details (cand_id,account_name,account_no, bank_name, branch_name, ifsc, micr, pan_no,transaction_id,name_of_bank,name_of_branch,amount_paid,payment_date, last_modified_time) values('${cand_id}','${account_name}' ,'${account_no}', '${bank_name}', '${branch_name}', '${ifsc}', '${micr}', '${pan_no}','${transaction_id}','${name_of_bank}','${name_of_branch}','${amount_paid}','${payment_date}','${last_modified_time}')`;
                      db.query(sql, function (err, data) {
                        var sql = `INSERT INTO ems.cand_surety_details (cand_id, surety_one_name, surety_one_aadhaar, surety_one_pan, surety_one_address, surety_two_name, surety_two_aadhaar, surety_two_pan, surety_two_address, surety_three_name, surety_three_aadhaar, surety_three_pan, surety_three_address, last_modified_time) values('${cand_id}', '${surety_one_name}', '${surety_one_aadhaar}', '${surety_one_pan}', '${surety_one_address}', '${surety_two_name}', '${surety_two_aadhaar}', '${surety_two_pan}', '${surety_two_address}', '${surety_three_name}', '${surety_three_aadhaar}', '${surety_three_pan}', '${surety_three_address}', '${last_modified_time}')`;
                        db.query(sql, function (err, data) {
                          var sql = `INSERT INTO ems.cand_relieving_details  (cand_id, relieved, amount_refunded, date_of_relieving, date_of_reallotment, college_name,last_modified_time) values('${cand_id}', '${relieved}','','','','','${last_modified_time}')`;
                          db.query(sql, function (err, data) {
                            var sql = `INSERT INTO ems.cand_fees (cand_id,last_modified_time) values ('${cand_id}','${last_modified_time}')`;
                            db.query(sql, function () {
                              var sql = `insert into ems.certificate_details(cand_id, all_certificate, reg_no, date, issue, place, active_flag, last_modified_time) values
                            ('${cand_id}','${c1_type}','${c1_reg_no}','${c1_date}','${c1_issue}','${c1_place}','Y','${last_modified_time}')`;
                              db.query(sql, function () {
                                var sql = `insert into ems.certificate_details(cand_id, all_certificate, reg_no, date, issue, place, active_flag, last_modified_time) values
                                  ('${cand_id}','${c2_type}','${c2_reg_no}','${c2_date}','${c2_issue}','${c2_place}','Y','${last_modified_time}')`;
                                db.query(sql, function () {
                                  var sql = `insert into ems.certificate_details(cand_id, all_certificate, reg_no, date, issue, place, active_flag, last_modified_time) values
                                    ('${cand_id}','${c3_type}','${c3_reg_no}','${c3_date}','${c3_issue}','${c3_place}','Y','${last_modified_time}')`;
                                  db.query(sql, function () {
                                    var sql = `insert into ems.certificate_details(cand_id, all_certificate, reg_no, date, issue, place, active_flag, last_modified_time) values
                                        ('${cand_id}','${c4_type}','${c4_reg_no}','${c4_date}','${c4_issue}','${c4_place}','Y','${last_modified_time}')`;
                                    db.query(sql, function () {
                                      var sql = `insert into ems.certificate_details(cand_id, all_certificate, reg_no, date, issue, place, active_flag, last_modified_time) values
                                          ('${cand_id}','${c5_type}','${c5_reg_no}','${c5_date}','${c5_issue}','${c5_place}','Y','${last_modified_time}')`;
                                      db.query(sql, function () {
                                        var sql = `insert into ems.certificate_details(cand_id, all_certificate, reg_no, date, issue, place, active_flag, last_modified_time) values
                                                    ('${cand_id}','${c6_type}','${c6_reg_no}','${c6_date}','${c6_issue}','${c6_place}','Y','${last_modified_time}')`;
                                        db.query(sql, function () {
                                          var sql = `insert into ems.certificate_details(cand_id, all_certificate, reg_no, date, issue, place, active_flag, last_modified_time) values
                                                ('${cand_id}','${c7_type}','${c7_reg_no}','${c7_date}','${c7_issue}','${c7_place}','Y','${last_modified_time}')`;
                                          db.query(sql, function () {
                                            var sql = `insert into ems.certificate_details(cand_id, all_certificate, reg_no, date, issue, place, active_flag, last_modified_time) values
                                                      ('${cand_id}','${c8_type}','${c8_reg_no}','${c8_date}','${c8_issue}','${c8_place}','Y','${last_modified_time}')`;
                                            db.query(sql, function () {
                                              var sql = `insert into ems.certificate_details(cand_id, all_certificate, reg_no, date, issue, place, active_flag, last_modified_time) values
                                                        ('${cand_id}','${c9_type}','${c9_reg_no}','${c9_date}','${c9_issue}','${c9_place}','Y','${last_modified_time}')`;
                                              db.query(sql, function () {
                                                var sql = `insert into ems.certificate_details(cand_id, all_certificate, reg_no, date, issue, place, active_flag, last_modified_time) values
                                                          ('${cand_id}','${c10_type}','${c10_reg_no}','${c10_date}','${c10_issue}','${c10_place}','Y','${last_modified_time}')`;
                                                db.query(sql, function () {
                                                  var sql = `insert into ems.certificate_details(cand_id, all_certificate, reg_no, date, issue, place, active_flag, last_modified_time) values
                                                            ('${cand_id}','${c11_type}','${c11_reg_no}','${c11_date}','${c11_issue}','${c11_place}','Y','${last_modified_time}')`;
                                                  db.query(sql, function () {
                                                    user.all_boards(req, res);
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
          });
        });
      });
    });
  }

  if (course_title == "BSC") {
    var c1_type = post.c1;
    var c1_reg_no = post.c1_reg_no;
    var c1_date = post.c1_date;
    var c1_issue = post.c1_issue;
    var c1_place = post.c1_place;

    var c2_type = post.c2;
    var c2_reg_no = post.c2_reg_no;
    var c2_date = post.c2_date;
    var c2_issue = post.c2_issue;
    var c2_place = post.c2_place;

    var c3_type = post.c3;
    var c3_reg_no = post.c3_reg_no;
    var c3_date = post.c3_date;
    var c3_issue = post.c3_issue;
    var c3_place = post.c3_place;

    var c4_type = post.c4;
    var c4_reg_no = post.c4_reg_no;
    var c4_date = post.c4_date;
    var c4_issue = post.c4_issue;
    var c4_place = post.c4_place;

    var c5_type = post.c5;
    var c5_reg_no = post.c5_reg_no;
    var c5_date = post.c5_date;
    var c5_issue = post.c5_issue;
    var c5_place = post.c5_place;

    var sql =
      "INSERT INTO `ems`.`cand_admission_details`(`cand_id`,`cand_name`,`rank`,`rank_no`,`ar_no`,`total_mark`,`neet_mark`,`reg_no`,`neet_roll_no`,`course`,`course_title`,`admission_type`,`admission_quota`,`course_commencement`,`date_of_admission`,`date_of_allotment`,`selected_category`,`willing_for_counciling`,`student_code`,`submitted`,`verified`,`last_modified_time`) VALUES ('" +
      cand_id +
      "','" +
      name +
      "','" +
      rank +
      "','" +
      rank_no +
      "','" +
      ar_no +
      "','" +
      total_mark +
      "','" +
      neet_mark +
      "','" +
      reg_no +
      "','" +
      neet_roll_no +
      "','" +
      course +
      "','" +
      course_title +
      "','" +
      admission_type +
      "','" +
      admission_quota +
      "','" +
      course_commencement +
      "','" +
      date_of_admission +
      "','" +
      date_of_allotment +
      "','" +
      selected_category +
      "','" +
      willing_for_counciling +
      "','" +
      student_code +
      "','" +
      submitted +
      "','" +
      verified +
      "','" +
      last_modified_time +
      "')";
    //var sql =`INSERT INTO ems.cand_admission_details (cand_id, cand_name, rank, rank_no, ar_no, total_mark, neet_mark, reg_no, neet_roll_no, course, admission_type, admission_quota, course_commencement, date_of_admission, date_of_allotment, selected_category, willing_for_counciling, last_modified_time) values('${cand_id}', '${name}', '${rank}', '${rank_no}', '${ar_no}', '${total_mark}', '${neet_mark}', '${reg_no}', '${neet_roll_no}', '${course}', '${admission_type}', '${admission_quota}', '${course_commencement}', '${date_of_admission}', '${date_of_allotment}', '${selected_category}', '${willing_for_counciling}', '${last_modified_time}')`;
    // var sql =`INSERT INTO ems.cand_admission_details (cand_id, cand_name,course, last_modified_time)values('${cand_id}', '${name}','${course}','${last_modified_time}')`;
    db.query(sql, function (err, data) {
      var sql = `INSERT INTO ems.cand_profile_details (cand_id, name, initial, initial_expansion,type_of_allotment, father_name, mother_name, date_of_birth, gender, blood_group, religion, community, caste, nationality, willing_to_donate_blood, academic_year,  registered_time, last_modified_time) values ('${cand_id}','${name}', '${initial}', '${initial_expansion}','${type_of_allotment}', '${father_name}', '${mother_name}', '${date_of_birth}', '${gender}', '${blood_group}', '${religion}', '${community}', '${caste}', '${nationality}', '${willing_to_donate_blood}', '${academic_year}', '${registered_time}', '${last_modified_time}')`;
      db.query(sql, function (err, data) {
        var sql = `INSERT INTO ems.cand_address_details (cand_id, address_type, ps_address, ps_pincode, ps_state, ps_district, pm_address, pm_pincode, pm_state, pm_district, last_modified_time) values ('${cand_id}', '${address_type}', '${ps_address.replace(
          "'",
          "''"
        )}', '${ps_pincode}', '${ps_state}', '${ps_district}', '${pm_address.replace(
          "'",
          "''"
        )}', '${pm_pincode}', '${pm_state}', '${pm_district}', '${last_modified_time}')`;
        db.query(sql, function (err, data) {
          var sql = `INSERT INTO ems.cand_contact_details (cand_id, tel_phone, mobile_phone, email_id, aadhar_no, voter_id, remarks, last_modified_time) values('${cand_id}', '${tel_phone}', '${mobile_phone}', '${email_id}', '${aadhar_no}', '${voter_id}', '${remarks}', '${last_modified_time}')`;
          db.query(sql, function (err, data) {
            var sql = `INSERT INTO ems.cand_bank_details (cand_id,account_name,account_no, bank_name, branch_name, ifsc, micr, pan_no,transaction_id,name_of_bank,name_of_branch,amount_paid,payment_date, last_modified_time) values('${cand_id}','${account_name}' ,'${account_no}', '${bank_name}', '${branch_name}', '${ifsc}', '${micr}', '${pan_no}','${transaction_id}','${name_of_bank}','${name_of_branch}','${amount_paid}','${payment_date}','${last_modified_time}')`;
            db.query(sql, function (err, data) {
              var sql = `INSERT INTO ems.cand_relieving_details  (cand_id, relieved, amount_refunded, date_of_relieving, date_of_reallotment, college_name,last_modified_time) values('${cand_id}', '${relieved}','','','','','${last_modified_time}')`;
              db.query(sql, function (err, data) {
                var sql = `INSERT INTO ems.cand_institute_details(cand_id,institute_name,place,district,state,relieving_date,duration,exam_passed,register_no,month_of_passing,year_of_passing,board,last_modified_time) VALUES ('${cand_id}','${institute_name.replace(
                  "'",
                  "''"
                )}','${place}','${district}','${state}','${relieving_date}','${duration}','${exam_passed}','${register_no}','${month_of_passing}','${year_of_passing}','${board}','${last_modified_time}')`;
                db.query(sql, function (err, data) {
                  var sql = `INSERT INTO ems.cand_marks_details(cand_id,lang_theory,lang_practical,lang_internal,lang_total,lang_max,eng_theory,eng_practical,eng_internal,eng_total,eng_max,mat_theory,mat_practical,mat_internal,mat_total,mat_max,phy_theory,phy_practical,phy_internal,phy_total,phy_max,chem_theory,chem_practical,chem_internal,chem_total,chem_max,bio_theory,bio_practical,bio_internal,bio_total,bio_max,bot_theory,bot_practical,bot_internal,bot_total,bot_max,zoo_theory,zoo_practical,zoo_internal,zoo_total,zoo_max,lang_paper,subj_code,total_mark,max_mark,percentage) VALUES ('${cand_id}','${lang_theory}','${lang_practical}','${lang_internal}','${lang_total}','${lang_max}','${eng_theory}','${eng_practical}','${eng_internal}','${eng_total}','${eng_max}','${mat_theory}','${mat_practical}','${mat_internal}','${mat_total}','${mat_max}','${phy_theory}','${phy_practical}','${phy_internal}','${phy_total}','${phy_max}','${chem_theory}','${chem_practical}','${chem_internal}','${chem_total}','${chem_max}','${bio_theory}','${bio_practical}','${bio_internal}','${bio_total}','${bio_max}','${bot_theory}','${bot_practical}','${bot_internal}','${bot_total}','${bot_max}','${zoo_theory}','${zoo_practical}','${zoo_internal}','${zoo_total}','${zoo_max}','${lang_paper}','${subj_code}','${total_mark_m}','${max_mark}','${percentage}')`;
                  db.query(sql, function (err, data) {
                    var sql = `INSERT INTO ems.cand_neet_mark_details(cand_id,phy_mark,phy_max_mark,chem_mark,chem_max_mark,bio_mark,bio_max_mark,agg_mark,agg_max_mark,last_modified_time) VALUES ('${cand_id}','${phy_neet_mark}','${phy_neet_max}','${chem_neet_mark}','${chem_neet_max}','${bio_neet_mark}','${bio_neet_max}','${agg_neet_mark}','${agg_neet_max}','${last_modified_time}')`;
                    db.query(sql, function (err, data) {
                      var sql = `INSERT INTO ems.cand_fees (cand_id,last_modified_time) values ('${cand_id}','${last_modified_time}')`;
                      db.query(sql, function () {
                        var sql = `insert into ems.certificate_details(cand_id, all_certificate, reg_no, date, issue, place, active_flag, last_modified_time) values
                            ('${cand_id}','${c1_type}','${c1_reg_no}','${c1_date}','${c1_issue}','${c1_place}','Y','${last_modified_time}')`;
                        db.query(sql, function () {
                          var sql = `insert into ems.certificate_details(cand_id, all_certificate, reg_no, date, issue, place, active_flag, last_modified_time) values
                                  ('${cand_id}','${c2_type}','${c2_reg_no}','${c2_date}','${c2_issue}','${c2_place}','Y','${last_modified_time}')`;
                          db.query(sql, function () {
                            var sql = `insert into ems.certificate_details(cand_id, all_certificate, reg_no, date, issue, place, active_flag, last_modified_time) values
                                    ('${cand_id}','${c3_type}','${c3_reg_no}','${c3_date}','${c3_issue}','${c3_place}','Y','${last_modified_time}')`;
                            db.query(sql, function () {
                              var sql = `insert into ems.certificate_details(cand_id, all_certificate, reg_no, date, issue, place, active_flag, last_modified_time) values
                                        ('${cand_id}','${c4_type}','${c4_reg_no}','${c4_date}','${c4_issue}','${c4_place}','Y','${last_modified_time}')`;
                              db.query(sql, function () {
                                var sql = `insert into ems.certificate_details(cand_id, all_certificate, reg_no, date, issue, place, active_flag, last_modified_time) values
                                          ('${cand_id}','${c5_type}','${c5_reg_no}','${c5_date}','${c5_issue}','${c5_place}','Y','${last_modified_time}')`;
                                db.query(sql, function () {
                                  user.all_boards(req, res);
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
            });
          });
        });
      });
    });
  }
  // AISSC
  if (course_title == "AISSC") {
    var c1_type = post.c1;
    var c1_reg_no = post.c1_reg_no;
    var c1_date = post.c1_date;
    var c1_issue = post.c1_issue;
    var c1_place = post.c1_place;

    var c2_type = post.c2;
    var c2_reg_no = post.c2_reg_no;
    var c2_date = post.c2_date;
    var c2_issue = post.c2_issue;
    var c2_place = post.c2_place;

    var c3_type = post.c3;
    var c3_reg_no = post.c3_reg_no;
    var c3_date = post.c3_date;
    var c3_issue = post.c3_issue;
    var c3_place = post.c3_place;

    var c4_type = post.c4;
    var c4_reg_no = post.c4_reg_no;
    var c4_date = post.c4_date;
    var c4_issue = post.c4_issue;
    var c4_place = post.c4_place;

    var c5_type = post.c5;
    var c5_reg_no = post.c5_reg_no;
    var c5_date = post.c5_date;
    var c5_issue = post.c5_issue;
    var c5_place = post.c5_place;

    var c6_type = post.c6;
    var c6_reg_no = post.c6_reg_no;
    var c6_date = post.c6_date;
    var c6_issue = post.c6_issue;
    var c6_place = post.c6_place;

    var c7_type = post.c7;
    var c7_reg_no = post.c7_reg_no;
    var c7_date = post.c7_date;
    var c7_issue = post.c7_issue;
    var c7_place = post.c7_place;

    var c8_type = post.c8;
    var c8_reg_no = post.c8_reg_no;
    var c8_date = post.c8_date;
    var c8_issue = post.c8_issue;
    var c8_place = post.c8_place;

    var c9_type = post.c9;
    var c9_reg_no = post.c9_reg_no;
    var c9_date = post.c9_date;
    var c9_issue = post.c9_issue;
    var c9_place = post.c9_place;

    var c10_type = post.c10;
    var c10_reg_no = post.c10_reg_no;
    var c10_date = post.c10_date;
    var c10_issue = post.c10_issue;
    var c10_place = post.c10_place;

    var c11_type = post.c11;
    var c11_reg_no = post.c11_reg_no;
    var c11_date = post.c11_date;
    var c11_issue = post.c11_issue;
    var c11_place = post.c11_place;

    // surety_files
    suretyarr.length != 0
      ? suretyarr.forEach((element) => {
          db.query(
            `insert into ems.surety_aissc (surety_id, surety_File,file_name,last_modified_time) values ('${cand_id}','${element.buffer.toString(
              "base64"
            )}','${element.originalname}','${last_modified_time}')`
          );
        })
      : db.query(
          `insert into ems.surety_aissc (surety_id,last_modified_time)values('${cand_id}','${last_modified_time}')`
        );

    var sql =
      "INSERT INTO `ems`.`cand_admission_details`(`cand_id`,`cand_name`,`rank`,`rank_no`,`ar_no`,`total_mark`,`neet_mark`,`reg_no`,`neet_roll_no`,`course`,`course_title`,`admission_type`,`admission_quota`,`course_commencement`,`date_of_admission`,`date_of_allotment`,`selected_category`,`willing_for_counciling`,`student_code`,`submitted`,`verified`,`last_modified_time`) VALUES ('" +
      cand_id +
      "','" +
      name +
      "','" +
      rank +
      "','" +
      rank_no +
      "','" +
      ar_no +
      "','" +
      total_mark +
      "','" +
      neet_mark +
      "','" +
      reg_no +
      "','" +
      neet_roll_no +
      "','" +
      course +
      "','" +
      course_title +
      "','" +
      admission_type +
      "','" +
      admission_quota +
      "','" +
      course_commencement +
      "','" +
      date_of_admission +
      "','" +
      date_of_allotment +
      "','" +
      selected_category +
      "','" +
      willing_for_counciling +
      "','" +
      student_code +
      "','" +
      submitted +
      "','" +
      verified +
      "','" +
      last_modified_time +
      "')";
    //var sql =`INSERT INTO ems.cand_admission_details (cand_id, cand_name, rank, rank_no, ar_no, total_mark, neet_mark, reg_no, neet_roll_no, course, admission_type, admission_quota, course_commencement, date_of_admission, date_of_allotment, selected_category, willing_for_counciling, last_modified_time) values('${cand_id}', '${name}', '${rank}', '${rank_no}', '${ar_no}', '${total_mark}', '${neet_mark}', '${reg_no}', '${neet_roll_no}', '${course}', '${admission_type}', '${admission_quota}', '${course_commencement}', '${date_of_admission}', '${date_of_allotment}', '${selected_category}', '${willing_for_counciling}', '${last_modified_time}')`;
    // var sql =`INSERT INTO ems.cand_admission_details (cand_id, cand_name,course, last_modified_time)values('${cand_id}', '${name}','${course}','${last_modified_time}')`;
    db.query(sql, function (err, data) {
      var sql = `INSERT INTO ems.cand_profile_details (cand_id, name, initial, initial_expansion,type_of_allotment, father_name, mother_name, date_of_birth, gender, blood_group, religion, community, caste, nationality, willing_to_donate_blood, academic_year,  registered_time, last_modified_time) values ('${cand_id}','${name}', '${initial}', '${initial_expansion}','${type_of_allotment}', '${father_name}', '${mother_name}', '${date_of_birth}', '${gender}', '${blood_group}', '${religion}', '${community}', '${caste}', '${nationality}', '${willing_to_donate_blood}', '${academic_year}', '${registered_time}', '${last_modified_time}')`;
      db.query(sql, function (err, data) {
        var sql = `INSERT INTO ems.cand_address_details (cand_id, address_type, ps_address, ps_pincode, ps_state, ps_district, pm_address, pm_pincode, pm_state, pm_district, last_modified_time) values ('${cand_id}', '${address_type}', '${ps_address.replace(
          "'",
          "''"
        )}', '${ps_pincode}', '${ps_state}', '${ps_district}', '${pm_address.replace(
          "'",
          "''"
        )}', '${pm_pincode}', '${pm_state}', '${pm_district}', '${last_modified_time}')`;
        db.query(sql, function (err, data) {
          var sql = `INSERT INTO ems.cand_contact_details (cand_id, tel_phone, mobile_phone, email_id, aadhar_no, voter_id, remarks, last_modified_time) values('${cand_id}', '${tel_phone}', '${mobile_phone}', '${email_id}', '${aadhar_no}', '${voter_id}', '${remarks}', '${last_modified_time}')`;
          db.query(sql, function (err, data) {
            var sql = `INSERT INTO ems.cand_institute_details_mdms (cand_id, name, post, amount_of_agreement, period_of_agreement, last_modified_time) values ('${cand_id}', '${institute_name.replace(
              "'",
              "''"
            )}', '${college_post}', '${amount_of_agreement}', '${period_of_agreement}', '${last_modified_time}')`;
            db.query(sql, function (err, data) {
              var sql = `INSERT INTO ems.cand_academic_mdms (cand_id, mbbs_name, mbbs_place, mbbs_district, mbbs_state, mbbs_university, mbbs_marksheet_no, mbbs_passing_month, mbbs_passing_year, mbbs_speciality, last_modified_time) values('${cand_id}', '${mbbs_name}', '${mbbs_place}', '${mbbs_district}', '${mbbs_state}', '${mbbs_university}', '${mbbs_marksheet_no}', '${mbbs_passing_month}', '${mbbs_passing_year}', '${mbbs_speciality}', '${last_modified_time}')`;
              db.query(sql, function (err, data) {
                var sql = `INSERT INTO ems.cand_academic_mdms_1 (cand_id, pg_diplamo_name, pg_diplamo_place, pg_diplamo_district, pg_diplamo_state, pg_diplamo_university, pg_diplamo_marksheet_no, pg_diplamo_passing_month, pg_diplamo_passing_year, pg_diplamo_speciality, last_modified_time) values('${cand_id}', '${pg_diplamo_name}', '${pg_diplamo_place}', '${pg_diplamo_district}', '${pg_diplamo_state}', '${pg_diplamo_university}', '${pg_diplamo_marksheet_no}', '${pg_diplamo_passing_month}', '${pg_diplamo_passing_year}', '${pg_diplamo_speciality}', '${last_modified_time}')`;
                db.query(sql, function (err, data) {
                  var sql = `INSERT INTO ems.cand_academic_mdms_2 (cand_id, mdms_name, mdms_place, mdms_district, mdms_state, mdms_university, mdms_marksheet_no, mdms_passing_month, mdms_passing_year, mdms_speciality) values ('${cand_id}', '${mdms_name}', '${mdms_place}', '${mdms_district}', '${mdms_state}', '${mdms_university}', '${mdms_marksheet_no}', '${mdms_passing_month}', '${mdms_passing_year}', '${mdms_speciality}')`;
                  db.query(sql, function (err, data) {
                    var sql = `INSERT INTO ems.cand_neet_marks_mdms (cand_id, mbbs_marks, pg_diplamo_marks, mdms_marks, neet_percentile, last_modified_time) values('${cand_id}', '${mbbs_marks}', '${pg_diplamo_marks}', '${mdms_marks}','${neet_percentile}','${last_modified_time}')`;
                    db.query(sql, function (err, data) {
                      var sql = `INSERT INTO ems.cand_bank_details (cand_id,account_name,account_no, bank_name, branch_name, ifsc, micr, pan_no,transaction_id,name_of_bank,name_of_branch,amount_paid,payment_date, last_modified_time) values('${cand_id}','${account_name}' ,'${account_no}', '${bank_name}', '${branch_name}', '${ifsc}', '${micr}', '${pan_no}','${transaction_id}','${name_of_bank}','${name_of_branch}','${amount_paid}','${payment_date}','${last_modified_time}')`;
                      db.query(sql, function (err, data) {
                        var sql = `INSERT INTO ems.cand_surety_details (cand_id, surety_one_name, surety_one_aadhaar, surety_one_pan, surety_one_address, surety_two_name, surety_two_aadhaar, surety_two_pan, surety_two_address, surety_three_name, surety_three_aadhaar, surety_three_pan, surety_three_address, last_modified_time) values('${cand_id}', '${surety_one_name}', '${surety_one_aadhaar}', '${surety_one_pan}', '${surety_one_address}', '${surety_two_name}', '${surety_two_aadhaar}', '${surety_two_pan}', '${surety_two_address}', '${surety_three_name}', '${surety_three_aadhaar}', '${surety_three_pan}', '${surety_three_address}', '${last_modified_time}')`;
                        db.query(sql, function (err, data) {
                          var sql = `INSERT INTO ems.cand_relieving_details  (cand_id, relieved, amount_refunded, date_of_relieving, date_of_reallotment, college_name,last_modified_time) values('${cand_id}', '${relieved}','','','','','${last_modified_time}')`;
                          db.query(sql, function (err, data) {
                            var sql = `INSERT INTO ems.cand_fees (cand_id,last_modified_time) values ('${cand_id}','${last_modified_time}')`;
                            db.query(sql, function () {
                              var sql = `insert into ems.certificate_details(cand_id, all_certificate, reg_no, date, issue, place, active_flag, last_modified_time) values
                            ('${cand_id}','${c1_type}','${c1_reg_no}','${c1_date}','${c1_issue}','${c1_place}','Y','${last_modified_time}')`;
                              db.query(sql, function () {
                                var sql = `insert into ems.certificate_details(cand_id, all_certificate, reg_no, date, issue, place, active_flag, last_modified_time) values
                                  ('${cand_id}','${c2_type}','${c2_reg_no}','${c2_date}','${c2_issue}','${c2_place}','Y','${last_modified_time}')`;
                                db.query(sql, function () {
                                  var sql = `insert into ems.certificate_details(cand_id, all_certificate, reg_no, date, issue, place, active_flag, last_modified_time) values
                                    ('${cand_id}','${c3_type}','${c3_reg_no}','${c3_date}','${c3_issue}','${c3_place}','Y','${last_modified_time}')`;
                                  db.query(sql, function () {
                                    var sql = `insert into ems.certificate_details(cand_id, all_certificate, reg_no, date, issue, place, active_flag, last_modified_time) values
                                        ('${cand_id}','${c4_type}','${c4_reg_no}','${c4_date}','${c4_issue}','${c4_place}','Y','${last_modified_time}')`;
                                    db.query(sql, function () {
                                      var sql = `insert into ems.certificate_details(cand_id, all_certificate, reg_no, date, issue, place, active_flag, last_modified_time) values
                                          ('${cand_id}','${c5_type}','${c5_reg_no}','${c5_date}','${c5_issue}','${c5_place}','Y','${last_modified_time}')`;
                                      db.query(sql, function () {
                                        var sql = `insert into ems.certificate_details(cand_id, all_certificate, reg_no, date, issue, place, active_flag, last_modified_time) values
                                                    ('${cand_id}','${c6_type}','${c6_reg_no}','${c6_date}','${c6_issue}','${c6_place}','Y','${last_modified_time}')`;
                                        db.query(sql, function () {
                                          var sql = `insert into ems.certificate_details(cand_id, all_certificate, reg_no, date, issue, place, active_flag, last_modified_time) values
                                                ('${cand_id}','${c7_type}','${c7_reg_no}','${c7_date}','${c7_issue}','${c7_place}','Y','${last_modified_time}')`;
                                          db.query(sql, function () {
                                            var sql = `insert into ems.certificate_details(cand_id, all_certificate, reg_no, date, issue, place, active_flag, last_modified_time) values
                                                      ('${cand_id}','${c8_type}','${c8_reg_no}','${c8_date}','${c8_issue}','${c8_place}','Y','${last_modified_time}')`;
                                            db.query(sql, function () {
                                              var sql = `insert into ems.certificate_details(cand_id, all_certificate, reg_no, date, issue, place, active_flag, last_modified_time) values
                                                        ('${cand_id}','${c9_type}','${c9_reg_no}','${c9_date}','${c9_issue}','${c9_place}','Y','${last_modified_time}')`;
                                              db.query(sql, function () {
                                                var sql = `insert into ems.certificate_details(cand_id, all_certificate, reg_no, date, issue, place, active_flag, last_modified_time) values
                                                          ('${cand_id}','${c10_type}','${c10_reg_no}','${c10_date}','${c10_issue}','${c10_place}','Y','${last_modified_time}')`;
                                                db.query(sql, function () {
                                                  var sql = `insert into ems.certificate_details(cand_id, all_certificate, reg_no, date, issue, place, active_flag, last_modified_time) values
                                                            ('${cand_id}','${c11_type}','${c11_reg_no}','${c11_date}','${c11_issue}','${c11_place}','Y','${last_modified_time}')`;
                                                  db.query(sql, function () {
                                                    user.all_boards(req, res);
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
          });
        });
      });
    });
  }

  if (course_title == "DIPLOMA IN NURSING") {
    var c1_type = post.c1;
    var c1_reg_no = post.c1_reg_no;
    var c1_date = post.c1_date;
    var c1_issue = post.c1_issue;
    var c1_place = post.c1_place;

    var c2_type = post.c2;
    var c2_reg_no = post.c2_reg_no;
    var c2_date = post.c2_date;
    var c2_issue = post.c2_issue;
    var c2_place = post.c2_place;

    var c3_type = post.c3;
    var c3_reg_no = post.c3_reg_no;
    var c3_date = post.c3_date;
    var c3_issue = post.c3_issue;
    var c3_place = post.c3_place;

    var c4_type = post.c4;
    var c4_reg_no = post.c4_reg_no;
    var c4_date = post.c4_date;
    var c4_issue = post.c4_issue;
    var c4_place = post.c4_place;

    var c5_type = post.c5;
    var c5_reg_no = post.c5_reg_no;
    var c5_date = post.c5_date;
    var c5_issue = post.c5_issue;
    var c5_place = post.c5_place;

    var sql =
      "INSERT INTO `ems`.`cand_admission_details`(`cand_id`,`cand_name`,`rank`,`rank_no`,`ar_no`,`total_mark`,`neet_mark`,`reg_no`,`neet_roll_no`,`course`,`course_title`,`admission_type`,`admission_quota`,`course_commencement`,`date_of_admission`,`date_of_allotment`,`selected_category`,`willing_for_counciling`,`student_code`,`submitted`,`verified`,`last_modified_time`) VALUES ('" +
      cand_id +
      "','" +
      name +
      "','" +
      rank +
      "','" +
      rank_no +
      "','" +
      ar_no +
      "','" +
      total_mark +
      "','" +
      neet_mark +
      "','" +
      reg_no +
      "','" +
      neet_roll_no +
      "','" +
      course +
      "','" +
      course_title +
      "','" +
      admission_type +
      "','" +
      admission_quota +
      "','" +
      course_commencement +
      "','" +
      date_of_admission +
      "','" +
      date_of_allotment +
      "','" +
      selected_category +
      "','" +
      willing_for_counciling +
      "','" +
      student_code +
      "','" +
      submitted +
      "','" +
      verified +
      "','" +
      last_modified_time +
      "')";
    //var sql =`INSERT INTO ems.cand_admission_details (cand_id, cand_name, rank, rank_no, ar_no, total_mark, neet_mark, reg_no, neet_roll_no, course, admission_type, admission_quota, course_commencement, date_of_admission, date_of_allotment, selected_category, willing_for_counciling, last_modified_time) values('${cand_id}', '${name}', '${rank}', '${rank_no}', '${ar_no}', '${total_mark}', '${neet_mark}', '${reg_no}', '${neet_roll_no}', '${course}', '${admission_type}', '${admission_quota}', '${course_commencement}', '${date_of_admission}', '${date_of_allotment}', '${selected_category}', '${willing_for_counciling}', '${last_modified_time}')`;
    // var sql =`INSERT INTO ems.cand_admission_details (cand_id, cand_name,course, last_modified_time)values('${cand_id}', '${name}','${course}','${last_modified_time}')`;
    db.query(sql, function (err, data) {
      var sql = `INSERT INTO ems.cand_profile_details (cand_id, name, initial, initial_expansion,type_of_allotment, father_name, mother_name, date_of_birth, gender, blood_group, religion, community, caste, nationality, willing_to_donate_blood, academic_year,  registered_time, last_modified_time) values ('${cand_id}','${name}', '${initial}', '${initial_expansion}','${type_of_allotment}', '${father_name}', '${mother_name}', '${date_of_birth}', '${gender}', '${blood_group}', '${religion}', '${community}', '${caste}', '${nationality}', '${willing_to_donate_blood}', '${academic_year}', '${registered_time}', '${last_modified_time}')`;
      db.query(sql, function (err, data) {
        var sql = `INSERT INTO ems.cand_address_details (cand_id, address_type, ps_address, ps_pincode, ps_state, ps_district, pm_address, pm_pincode, pm_state, pm_district, last_modified_time) values ('${cand_id}', '${address_type}', '${ps_address.replace(
          "'",
          "''"
        )}', '${ps_pincode}', '${ps_state}', '${ps_district}', '${pm_address.replace(
          "'",
          "''"
        )}', '${pm_pincode}', '${pm_state}', '${pm_district}', '${last_modified_time}')`;
        db.query(sql, function (err, data) {
          var sql = `INSERT INTO ems.cand_contact_details (cand_id, tel_phone, mobile_phone, email_id, aadhar_no, voter_id, remarks, last_modified_time) values('${cand_id}', '${tel_phone}', '${mobile_phone}', '${email_id}', '${aadhar_no}', '${voter_id}', '${remarks}', '${last_modified_time}')`;
          db.query(sql, function (err, data) {
            var sql = `INSERT INTO ems.cand_bank_details (cand_id,account_name,account_no, bank_name, branch_name, ifsc, micr, pan_no,transaction_id,name_of_bank,name_of_branch,amount_paid,payment_date, last_modified_time) values('${cand_id}','${account_name}' ,'${account_no}', '${bank_name}', '${branch_name}', '${ifsc}', '${micr}', '${pan_no}','${transaction_id}','${name_of_bank}','${name_of_branch}','${amount_paid}','${payment_date}','${last_modified_time}')`;
            db.query(sql, function (err, data) {
              var sql = `INSERT INTO ems.cand_relieving_details  (cand_id, relieved, amount_refunded, date_of_relieving, date_of_reallotment, college_name,last_modified_time) values('${cand_id}', '${relieved}','','','','','${last_modified_time}')`;
              db.query(sql, function (err, data) {
                var sql = `INSERT INTO ems.cand_institute_details(cand_id,institute_name,place,district,state,relieving_date,duration,exam_passed,register_no,month_of_passing,year_of_passing,board,last_modified_time) VALUES ('${cand_id}','${institute_name.replace(
                  "'",
                  "''"
                )}','${place}','${district}','${state}','${relieving_date}','${duration}','${exam_passed}','${register_no}','${month_of_passing}','${year_of_passing}','${board}','${last_modified_time}')`;
                db.query(sql, function (err, data) {
                  var sql = `INSERT INTO ems.cand_marks_details(cand_id,lang_theory,lang_practical,lang_internal,lang_total,lang_max,eng_theory,eng_practical,eng_internal,eng_total,eng_max,mat_theory,mat_practical,mat_internal,mat_total,mat_max,phy_theory,phy_practical,phy_internal,phy_total,phy_max,chem_theory,chem_practical,chem_internal,chem_total,chem_max,bio_theory,bio_practical,bio_internal,bio_total,bio_max,bot_theory,bot_practical,bot_internal,bot_total,bot_max,zoo_theory,zoo_practical,zoo_internal,zoo_total,zoo_max,lang_paper,subj_code,total_mark,max_mark,percentage) VALUES ('${cand_id}','${lang_theory}','${lang_practical}','${lang_internal}','${lang_total}','${lang_max}','${eng_theory}','${eng_practical}','${eng_internal}','${eng_total}','${eng_max}','${mat_theory}','${mat_practical}','${mat_internal}','${mat_total}','${mat_max}','${phy_theory}','${phy_practical}','${phy_internal}','${phy_total}','${phy_max}','${chem_theory}','${chem_practical}','${chem_internal}','${chem_total}','${chem_max}','${bio_theory}','${bio_practical}','${bio_internal}','${bio_total}','${bio_max}','${bot_theory}','${bot_practical}','${bot_internal}','${bot_total}','${bot_max}','${zoo_theory}','${zoo_practical}','${zoo_internal}','${zoo_total}','${zoo_max}','${lang_paper}','${subj_code}','${total_mark_m}','${max_mark}','${percentage}')`;
                  db.query(sql, function (err, data) {
                    var sql = `INSERT INTO ems.cand_neet_mark_details(cand_id,phy_mark,phy_max_mark,chem_mark,chem_max_mark,bio_mark,bio_max_mark,agg_mark,agg_max_mark,last_modified_time) VALUES ('${cand_id}','${phy_neet_mark}','${phy_neet_max}','${chem_neet_mark}','${chem_neet_max}','${bio_neet_mark}','${bio_neet_max}','${agg_neet_mark}','${agg_neet_max}','${last_modified_time}')`;
                    db.query(sql, function (err, data) {
                      var sql = `INSERT INTO ems.cand_fees (cand_id,last_modified_time) values ('${cand_id}','${last_modified_time}')`;
                      db.query(sql, function () {
                        var sql = `insert into ems.certificate_details(cand_id, all_certificate, reg_no, date, issue, place, active_flag, last_modified_time) values
                            ('${cand_id}','${c1_type}','${c1_reg_no}','${c1_date}','${c1_issue}','${c1_place}','Y','${last_modified_time}')`;
                        db.query(sql, function () {
                          var sql = `insert into ems.certificate_details(cand_id, all_certificate, reg_no, date, issue, place, active_flag, last_modified_time) values
                                  ('${cand_id}','${c2_type}','${c2_reg_no}','${c2_date}','${c2_issue}','${c2_place}','Y','${last_modified_time}')`;
                          db.query(sql, function () {
                            var sql = `insert into ems.certificate_details(cand_id, all_certificate, reg_no, date, issue, place, active_flag, last_modified_time) values
                                    ('${cand_id}','${c3_type}','${c3_reg_no}','${c3_date}','${c3_issue}','${c3_place}','Y','${last_modified_time}')`;
                            db.query(sql, function () {
                              var sql = `insert into ems.certificate_details(cand_id, all_certificate, reg_no, date, issue, place, active_flag, last_modified_time) values
                                        ('${cand_id}','${c4_type}','${c4_reg_no}','${c4_date}','${c4_issue}','${c4_place}','Y','${last_modified_time}')`;
                              db.query(sql, function () {
                                var sql = `insert into ems.certificate_details(cand_id, all_certificate, reg_no, date, issue, place, active_flag, last_modified_time) values
                                          ('${cand_id}','${c5_type}','${c5_reg_no}','${c5_date}','${c5_issue}','${c5_place}','Y','${last_modified_time}')`;
                                db.query(sql, function () {
                                  user.all_boards(req, res);
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
            });
          });
        });
      });
    });
  }
};
