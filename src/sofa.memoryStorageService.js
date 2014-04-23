'use strict';
/* global sofa */
/**
 * @sofadoc class
 * @name sofa.MemoryStorageService
 * @package sofa-storages
 * @requiresPackage sofa-core
 * @distFile dist/sofa.storages.js
 *
 * @description
 * Simple memory storage service. Provides methods to get and set values in form
 * of simple key - value pairs.
 */
sofa.define('sofa.MemoryStorageService', function () {

    var _storage = {};

    /**
     * @sofadoc method
     * @name sofa.MemoryStorageService#set
     * @memberof sofa.MemoryStorageService
     *
     * @description
     * Sets a value by a given id.
     *
     * @param {string} id Identifier
     * @param {object} data Any kind of data to store under given id.
     */
    var set = function (id, data) {
        _storage[id] = data;
    };

    /**
     * @sofadoc method
     * @name sofa.MemoryStorageService#get
     * @memberof sofa.MemoryStorageService
     *
     * @description
     * Gets a value by a given id.
     *
     * @param {string} id Identifier
     *
     * @return {object} Stored data.
     */
    var get = function (id) {
        return _storage[id];
    };

    /**
     * @sofadoc method
     * @name sofa.MemoryStorageService#remove
     * @memberof sofa.MemoryStorageService
     *
     * @description
     * Removes a value by a given id.
     *
     * @param {string} id Identifier
     */
    var remove = function (id) {
        delete _storage[id];
    };

    /**
     * @sofadoc method
     * @name sofa.MemoryStorageService#clear
     * @memberof sofa.MemoryStorageService
     *
     * @description
     * Clear memory storage.
     */
    var clear = function () {
        _storage = {};
    };

    return {
        set: set,
        get: get,
        remove: remove,
        clear: clear
    };
});
