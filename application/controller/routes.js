/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


/* global angular */

(function () {
    angular.module("routes", ["organizadores", "layouts", "actividades"])
            .filter('shuffle', function () {
                return function (ary) {
                    return _.shuffle(ary);
                };
            });
})();
