angular.module('sofa.storages.memoryStorage', [])

.factory('storageService', function(){
    'use strict';
    return new sofa.MemoryStorageService();
});
