/*
* 目标：类及对象构建
* */

var Person = function(firstAndLast) {
  var pra = firstAndLast.split(' ')
  var fullName = firstAndLast
  var firstName = pra[0]
  var lastName = pra[1]

  this.getFullName = function(){
    return fullName
  }

  this.getFirstName = function(){
    return firstName
  }

  this.getLastName = function(){
    return lastName
  }

  this.setFirstName = function(str){
    if (typeof str !== 'string') return
    firstName = str
    fullName = `${firstName} ${lastName}`
    return fullName
  }

  this.setLastName = function(str){
    if (typeof str !== 'string') return
    lastName = str
    fullName = `${firstName} ${lastName}`
    return fullName
  }

  this.setFullName = function(str){
    if (typeof str !== 'string') return
    fullName = str
    var pra = fullName.split(' ')
    firstName = pra[0]
    lastName = pra[1]
    return fullName
  }

  return firstAndLast;
};

var bob = new Person('Bob Ross');
bob.getFullName();
// Person.prototype.getFullName = function(){
//   return this.fullName
// }

// Person.prototype.getFirstName = function(){
//   return this.firstName
// }

// Person.prototype.getLastName = function(){
//   return this.lastName
// }

// Person.prototype.setFirstName = function(str){
//   if (typeof str !== 'string') return
//   this.firstName = str
//   return this.fullName
// }

// Person.prototype.setLastName = function(str){
//   if (typeof str !== 'string') return
//   this.lastName = str
//   return this.fullName
// }

// Person.prototype.setFullName = function(str){
//   if (typeof str !== 'string') return
//   this.fullName = str
//   return this.fullName
// }

