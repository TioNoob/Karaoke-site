;
(function () {
    'use strict';

    function SigninService($http) {
        var server = 'http://localhost:8090/';

        function register(user) {
            var uri = server + 'hello';

            return $http.get(uri, user);
        }

        return {
            'register': register
        };
    }

    angular.module('app')
        .factory('SigninService', SigninService);
}());