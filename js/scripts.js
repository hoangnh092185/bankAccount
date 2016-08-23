
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

function printReceipt(account) {
  $("#receipt").text("");
  $("#receipt").append("<p>Thanks for banking with us today " + account.firstName + "!</p>" +
                        "<p>Your account balance is $" + account.deposit + "</p>");
}

function resetInput() {
  $("input.firstname-input").val("");
  $("input.lastname-input").val("");
  $("input.deposit-initial").val("");
  $("input.withdraw-input").val("");
  $("input.deposit-input").val("");
  $("input.acct-deposit-input").val("");
  $("input.acct-withdraw-input").val("");
}

$(document).ready(function() {
  $("#createAccount").submit(function(event){
    event.preventDefault();
    var firstName = $("input.firstname-input").val();
    var lastName = $("input.lastname-input").val();
    var deposit = parseFloat($("input.deposit-initial").val());

    account = new Name(firstName, lastName, deposit);
    accountArray.push(account);
    accountIndex.push(firstName);
    console.log(account);
    printReceipt(account);
    resetInput();
  });

  $("button.deposit-input").click(function(){
    var accountName = $("input.acct-deposit-input").val();
    if (findAccount(accountName) !== -1){
      account = findAccount(accountName);
      account.addMoney(parseFloat($("input.deposit-input").val()));
      printReceipt(account);
      console.log(account);
    } else {
      $("#receipt").text("");
      alert("account has not been created");
    }

    resetInput();

  });

  $("button.withdraw-input").click(function(){
    var accountName = $("input.acct-withdraw-input").val();
    if (findAccount(accountName) !== -1){
      account = findAccount(accountName);
      var withdrawHolder = parseFloat($("input.withdraw-input").val());
      if (withdrawHolder > account.deposit) {
        alert("You have unsufficient fund!");
      }else account.subtractMoney(parseFloat($("input.withdraw-input").val()));
      printReceipt(account);
      console.log(account);
    } else {
      $("#receipt").text("");
      alert("account has not been created");
    }

    resetInput();
  });

});
