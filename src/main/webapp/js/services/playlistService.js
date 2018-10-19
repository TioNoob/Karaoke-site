;
(function () {
    'use strict';

    function PlaylistService($http) {
        var server = 'http://localhost:8090/';

        function add(music, user) {
            var uri = server + 'playlist';
            var data = {
                'music': music,
                'user': user,
            };

            return $http.put(uri, data);
        }

        return {
            'add': add,
        };
    }

    angular.module('app')
        .factory('PlaylistService', PlaylistService);
}());