var mysql = require("mysql");

// Define the connection.
var connection = mysql.createConnection({
  host: "HOST",
  user: "USER",
  password: "PASSWORD",
  database: "DATABASE_NAME",
});

// ==========================
// GET ALL
// ==========================
exports.handler = (event, context, callback) => {
  // Connect.
  connection.connect(function (err) {
    if (err) {
      callback(err);
    }
  });

  // Run Query.
  connection.query("SELECT * FROM Profile", (err, rows) => {
    if (err) {
      // Return error to requester.
      callback(err);
    } else {
      // Return data to requester.
      callback(null, rows);
    }
  });

  // Close Connection.
  connection.end();
};

// ==========================
// GET BY ID
// ==========================
exports.handler = (event, context, callback) => {
  // Connect.
  connection.connect(function (err) {
    if (err) {
      callback(err);
    }
  });

  // Run Query.
  connection.query(
    `SELECT * FROM Profile WHERE id = ${event.pathParameters.id}`,
    (err, rows) => {
      var response = {
        statusCode: 200,
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(rows),
        isBase64Encoded: false,
      };

      if (err) {
        callback(err);
      } else {
        callback(null, response);
      }
    }
  );
};

// ==========================
// INSERT USER
// ==========================
exports.handler = (event, context, callback) => {
  // Connect.
  connection.connect(function (err) {
    if (err) {
      callback(err);
    }
  });

  // Run Query.
  connection.query(
    `INSERT INTO Profile (fname, lname) VALUES ('${event.fname}', '${event.lname}')`,
    (err, rows) => {
      var response = {
        message: "succesfully added user",
        statusCode: 200,
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(rows),
        isBase64Encoded: false,
      };

      if (err) {
        callback(err);
      } else {
        callback(null, response);
      }
    }
  );

  // Close Connection.
  connection.end();
};

// ==========================
// UPDATE USER
// ==========================
exports.handler = (event, context, callback) => {
  // Connect.
  connection.connect(function (err) {
    if (err) {
      callback(err);
    }
  });

  const body = JSON.parse(event.body);
  // Run Query.
  connection.query(
    `UPDATE Profile SET fname = '${body.fname}', lname = '${body.lname}'  WHERE id = '${event.pathParameters.id}'`,
    (err, rows) => {
      var response = {
        statusCode: 200,
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(rows),
        isBase64Encoded: false,
      };

      if (err) {
        callback(err);
      } else {
        callback(null, response);
      }
    }
  );

  // Close Connection.
  connection.end();
};

// ==========================
// DELETE USER
// ==========================
exports.handler = (event, context, callback) => {
  // Connect.
  connection.connect(function (err) {
    if (err) {
      callback(err);
    }
  });

  // Run Query.
  connection.query(
    `DELETE FROM Profile WHERE id = '${event.pathParameters.id}'`,
    (err, result) => {
      var response = {
        statusCode: 200,
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(result),
        isBase64Encoded: false,
      };

      if (err) {
        callback(err);
      } else {
        callback(null, response);
      }
    }
  );

  // Close Connection.
  connection.end();
};
