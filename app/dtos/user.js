function User(obj) {
  this.id = Date.now().toString();
  this.email = obj.email;
  this.password = obj.password;
  this.name = obj.name;
}
module.exports = User;
