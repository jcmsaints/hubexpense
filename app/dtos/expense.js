//req.user
function Expense(obj) {
  this.user = obj.user;
  this.value = obj.value;
  this.categoryId = obj.categoryId;
  this.categoryName = obj.categoryName;
  this.description = obj.description;
  this.date = obj.date;
  this.imagepath = obj.objimagepath;
}
module.exports = Expense;
