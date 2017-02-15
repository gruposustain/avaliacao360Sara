(function() {
    'use strict';
    angular
        .module('avaliacao630SaraApp')
        .factory('Team', Team);

    Team.$inject = ['$resource', 'DateUtils'];

    function Team ($resource, DateUtils) {
        var resourceUrl =  'api/teams/:id';

        return $resource(resourceUrl, {}, {
            'query': { method: 'GET', isArray: true},
            'get': {
                method: 'GET',
                transformResponse: function (data) {
                    if (data) {
                        data = angular.fromJson(data);
                        data.dataCriacao = DateUtils.convertDateTimeFromServer(data.dataCriacao);
                    }
                    return data;
                }
            },
            'update': { method:'PUT' }
        });
    }
})();
