const user = require("../controller/user");
const employee = require("../controller/employee");
const userValidation = require("../util/userValidation");
const employeeValidation = require("../util/employeeValidation");
const auth = require('../util/auth');

module.exports = (app) => {
  app.post("/register", userValidation, user.register);
  app.post("/login", user.login);

  // employee CRUD api
  app.post('/createEmployee', [auth.verifyToken, employeeValidation], employee.saveEmployee);
  app.get('/getEmployees', auth.verifyToken, employee.getAllEmployee);
  app.get('/getEmployeeById/:employeeId', auth.verifyToken, employee.getEmployeeById);
  app.put('/updateEmployeeDetail/:employeeId', [auth.verifyToken, employeeValidation], employee.updateEmployeeDetail);
  app.delete('/deleteEmployeeById/:employeeId', auth.verifyToken, employee.deleteEmployeeById);
};
