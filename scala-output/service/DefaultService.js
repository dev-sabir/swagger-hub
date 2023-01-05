'use strict';


/**
 * Activate single as well as multiple users
 *
 * authorization String 
 * ids String users ids you want to activate
 * no response value expected for this operation
 **/
exports.activateGET = function(authorization,ids) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get all roles
 *
 * authorization String 
 * no response value expected for this operation
 **/
exports.allrolesGET = function(authorization) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Change user password
 *
 * body Changepassword-form Request payload in application/json
 * authorization String 
 * no response value expected for this operation
 **/
exports.changepasswordPOST = function(body,authorization) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Create an account
 *
 * body Sign-up request payload in application/json
 * no response value expected for this operation
 **/
exports.createPOST = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Check email already exists or not
 *
 * email String User email
 * no response value expected for this operation
 **/
exports.emailexistGET = function(email) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Login to account
 *
 * body Login Request payload in application/json
 * no response value expected for this operation
 **/
exports.loginPOST = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get user profile
 *
 * authorization String 
 * no response value expected for this operation
 **/
exports.profileGET = function(authorization) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Inactivate single as well as multiple user
 *
 * authorization String 
 * ids String users ids you want to remove
 * no response value expected for this operation
 **/
exports.removeGET = function(authorization,ids) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Sign out from the account
 *
 * authorization String 
 * no response value expected for this operation
 **/
exports.signoutGET = function(authorization) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Sum of two numbers
 *
 * body Add Request payload in application/json
 * authorization String 
 * no response value expected for this operation
 **/
exports.sumPOST = function(body,authorization) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Update user role, name status and organization.
 *
 * authorization String 
 * body Update request payload in application/json
 * no response value expected for this operation
 **/
exports.updatePOST = function(authorization,body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Update user profile
 *
 * body Update-profile Request payload in application/json
 * authorization String 
 * no response value expected for this operation
 **/
exports.updateprofilePOST = function(body,authorization) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

