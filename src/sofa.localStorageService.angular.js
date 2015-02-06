angular.module('sofa.storages.localStorageService', [])

.factory('storageService', function(){
    'use strict';
    return new sofa.LocalStorageService();
});
