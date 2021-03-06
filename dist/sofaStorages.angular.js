/**
 * sofa-storages - v0.5.2 - Wed Apr 08 2015 13:38:54 GMT+0200 (CEST)
 * http://www.sofa.io
 *
 * Copyright (c) 2014 CouchCommerce GmbH (http://www.couchcommerce.com / http://www.sofa.io) and other contributors
 * THIS SOFTWARE CONTAINS COMPONENTS OF THE SOFA.IO COUCHCOMMERCE SDK (WWW.SOFA.IO)
 * IT IS PROVIDED UNDER THE LICENSE TERMS OF THE ATTACHED LICENSE.TXT.
 */
;(function (angular) {
angular.module('sofa.storages.localStorageService', [])

.factory('storageService', function(){
    'use strict';
    return new sofa.LocalStorageService();
});

angular.module('sofa.storages.memoryStorage', [])

.factory('storageService', function(){
    'use strict';
    return new sofa.MemoryStorageService();
});
}(angular));
