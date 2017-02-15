(function() {
    'use strict';

    angular
        .module('avaliacao630SaraApp')
        .controller('TeamDetailController', TeamDetailController);

    TeamDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'entity', 'Team', 'User'];

    function TeamDetailController($scope, $rootScope, $stateParams, previousState, entity, Team, User) {
        var vm = this;

        vm.team = entity;
        vm.previousState = previousState.name;

        var unsubscribe = $rootScope.$on('avaliacao630SaraApp:teamUpdate', function(event, result) {
            vm.team = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
