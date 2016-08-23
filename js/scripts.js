
var account;
var accountArray = [];
var accountIndex = [];


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

function findAccount(name) {
  var accountTemp = -1;
  accountIndex.forEach(function(element, index){
    if (element === name) {
      accountTemp = accountArray[index];
    }
  });
  return accountTemp;
}
function resetInput() {
  $("input.firstname-input").val("");
  $("input.lastname-input").val("");
  $("input.deposit-initial").val("");
  $("input.withdraw-input").val("");
  $("input.deposit-input").val("");
}

$(document).ready(function() {

  $("#createAccount").submit(function(event){
    event.preventDefault();
    var firstName = $("input.firstname-input").val();
    var lastName = $("input.lastname-input").val();
    var deposit = parseInt($("input.deposit-initial").val());

    account = new Name(firstName, lastName, deposit);
    accountArray.push(account);
    accountIndex.push(firstName);
    console.log(account);
    resetInput();
  });

  $("button.deposit-input").click(function(){
    var accountName = $("input.firstname-input").val();
    if (findAccount(accountName) !== -1){
      account = findAccount(accountName);
      account.addMoney(parseInt($("input.deposit-input").val()));
      console.log(account);
    } else {
      alert("account has not been created");
    }  resetInput();

  });

  $("button.withdraw-input").click(function(){
    var accountName = $("input.firstname-input").val();
    if (findAccount(accountName) !== -1){
      account = findAccount(accountName);
      account.subtractMoney(parseInt($("input.withdraw-input").val()));
      console.log(account);
    } else {
      alert("account has not been created");
    }  resetInput();
  });

});
