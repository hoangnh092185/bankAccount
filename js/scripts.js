
function Name(first, last, deposit){
  this.firstName = first;
  this.lastName = last;
  this.deposit = deposit;
}

Name.prototype.addMoney = function(amount){
  this.deposit += amount;
  return this.deposit;
}
Name.prototype.subtractMoney = function(amount){
  this.deposit -= amount;
  return this.deposit;
}

$(document).ready(function() {
  $("#createAccount").submit(function(event){
    event.preventDefault();
    var firstName = $("input.firstname-input").val();
    var lastName = $("input.lastname-input").val();
    var deposit = parseInt($("input.deposit-input").val());
    var account = new Name(firstName, lastName, deposit);
    console.log(account);
    debugger;
  });

});
