;
(function () {
    'use strict';

    function ListMusicsController(ListMusicsService, PlaylistService, toaster) {
        var vm = this;

        vm.filters = {};
        vm.musics = null;
        vm.user = null;

        vm.filter = filter;
        vm.addMusicToPlaylist = addMusicToPlaylist;

        function filter() {
            ListMusicsService.filter(vm.filters).then(function(result) {
                vm.musics = result.musics;
            });
        }

        function addMusicToPlaylist(music) {
            PlaylistService.add(music, vm.user).then(function() {
                toaster.pop('success', 'Sucesso', 'Música adicionada na fila com sucesso');
            });
        }
    }

    angular.module('app')
        .controller('ListMusicsController', ListMusicsController);
}());