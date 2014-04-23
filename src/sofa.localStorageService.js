'use strict';
/* global sofa */
/* global store */
/**
 * @sofadoc class
 * @name sofa.LocalStorageService
 * @package sofa-storages
 * @requiresPackage sofa-core
 * @distFile dist/sofa.storages.js
 *
 * @description
 * We just wrap store.js in a service here.
 */
sofa.define('sofa.LocalStorageService', function () {
    return store;
});
