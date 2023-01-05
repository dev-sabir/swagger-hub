'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.activateGET = function activateGET (req, res, next) {
  var authorization = req.swagger.params['Authorization'].value;
  var ids = req.swagger.params['ids'].value;
  Default.activateGET(authorization,ids)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.allrolesGET = function allrolesGET (req, res, next) {
  var authorization = req.swagger.params['Authorization'].value;
  Default.allrolesGET(authorization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.changepasswordPOST = function changepasswordPOST (req, res, next) {
  var body = req.swagger.params['body'].value;
  var authorization = req.swagger.params['Authorization'].value;
  Default.changepasswordPOST(body,authorization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.createPOST = function createPOST (req, res, next) {
  var body = req.swagger.params['body'].value;
  Default.createPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.emailexistGET = function emailexistGET (req, res, next) {
  var email = req.swagger.params['email'].value;
  Default.emailexistGET(email)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.loginPOST = function loginPOST (req, res, next) {
  var body = req.swagger.params['body'].value;
  Default.loginPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.profileGET = function profileGET (req, res, next) {
  var authorization = req.swagger.params['Authorization'].value;
  Default.profileGET(authorization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.removeGET = function removeGET (req, res, next) {
  var authorization = req.swagger.params['Authorization'].value;
  var ids = req.swagger.params['ids'].value;
  Default.removeGET(authorization,ids)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.signoutGET = function signoutGET (req, res, next) {
  var authorization = req.swagger.params['Authorization'].value;
  Default.signoutGET(authorization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sumPOST = function sumPOST (req, res, next) {
  var body = req.swagger.params['body'].value;
  var authorization = req.swagger.params['Authorization'].value;
  Default.sumPOST(body,authorization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updatePOST = function updatePOST (req, res, next) {
  var authorization = req.swagger.params['Authorization'].value;
  var body = req.swagger.params['body'].value;
  Default.updatePOST(authorization,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateprofilePOST = function updateprofilePOST (req, res, next) {
  var body = req.swagger.params['body'].value;
  var authorization = req.swagger.params['Authorization'].value;
  Default.updateprofilePOST(body,authorization)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
