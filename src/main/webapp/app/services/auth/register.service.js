(function () {
    'use strict';

    angular
        .module('avaliacao630SaraApp')
        .factory('Register', Register);

    Register.$inject = ['$resource'];

    function Register ($resource) {
        return $resource('api/register', {}, {});
    }
})();
