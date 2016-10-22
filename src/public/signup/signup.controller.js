(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['MenuService'];
function SignUpController(MenuService) {
  var $ctrl = this;

  $ctrl.submit = function () {
    var promise = MenuService.getMenuItem($ctrl.dishcode); 

    promise.then(function (response) {
      if(response != false) {
        $ctrl.success = true;
        $ctrl.dishiteminvalid = false;

        MenuService.favitem = response;
        MenuService.userfirstname = $ctrl.user.firstname;
        MenuService.userlastname = $ctrl.user.lastname;
        MenuService.useremail = $ctrl.user.email;
        MenuService.phone = $ctrl.user.phone;
      } else {
        $ctrl.dishiteminvalid = true;
        $ctrl.success = false;
      }
    })
    .catch(function (error) {
      $ctrl.dishiteminvalid = true;
      $ctrl.success = false;
    });

  };
}


})();
