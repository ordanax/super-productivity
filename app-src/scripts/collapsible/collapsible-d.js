/**
 * @ngdoc directive
 * @name superProductivity.directive:collapsible
 * @description
 * # collapsible
 */

(function() {
  'use strict';

  /* @ngInject */
  function CollapsibleCtrl($timeout, $element) {
    const vm = this;

    // TODO fix this
    $timeout(() => {
      if (vm.isInitiallyExpanded) {
        vm.isExpanded = true;
      }
    });

    vm.toggleExpand = () => {
      vm.isExpanded = !vm.isExpanded;

      if (vm.isExpanded) {
        $element.addClass('is-expanded');
      } else {
        $element.removeClass('is-expanded');
      }

    };
  }

  angular
    .module('superProductivity')
    .component('collapsible', {
      templateUrl: 'scripts/collapsible/collapsible-d.html',
      bindToController: true,
      controller: CollapsibleCtrl,
      controllerAs: 'vm',
      restrict: 'AE',
      transclude: true,
      bindings: {
        title: '@collapsibleTitle',
        icon: '@',
        isInitiallyExpanded: '@'
      }
    });
})();
