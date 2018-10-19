;
(function() {
    'use strict';

    function ListMusicsService($http) {
        var server = 'http://localhost:8090/';
        
        function filter(filters) {
            var uri = server + 'music';

            return $http.get(uri, filters);
        }

        return {
            'filter': filter,
        };
    }

    angular.module('app')
        .factory('ListMusicsService', ListMusicsService);
}());