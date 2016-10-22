(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['MenuService'];
function MyInfoController(MenuService) {
  var $ctrl = this;

  $ctrl.favitem = "";
  $ctrl.userfirstname = "";
  $ctrl.userlastname = "";
  $ctrl.useremail = "";
  $ctrl.userphone = "";
  $ctrl.nouserinfo = false;

  if(MenuService.userfirstname != '' && typeof MenuService.userfirstname != 'undefined') {
    $ctrl.favitem = MenuService.favitem;
    $ctrl.userfirstname =  MenuService.userfirstname;
    $ctrl.userlastname = MenuService.userlastname;
    $ctrl.useremail = MenuService.useremail;
    $ctrl.userphone = MenuService.phone;
  } else {
    $ctrl.nouserinfo = true;
  }
}


})();