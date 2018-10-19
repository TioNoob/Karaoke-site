;
(function () {
    'use strict';

    function SigninFormController($state, SigninService) {
        var vm = this;

        vm.user = {};

        vm.registerUser = registerUser;

        function registerUser() {
            SigninService.register(vm.user).then(function() {
                $state.go('list-musics');
            });
        }
    }

    angular.module('app')
        .controller('SigninFormController', SigninFormController);
}());