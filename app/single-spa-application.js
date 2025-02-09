import * as singleSpaAngularJS from 'single-spa-angularjs';
import angular from 'angular';
// import "systemjs-webpack-interop/auto-public-path";

const ngLifecycles = singleSpaAngularJS({
  angular: angular,
  mainAngularModule: 'myApp',
  uiRouter: true,
  preserveGlobal: false,
  template: '<my-app />',
});

// appRegs;

export const bootstrap = ngLifecycles.bootstrap;
export const mount = ngLifecycles.mount;
export const unmount = ngLifecycles.unmount;


// System.register(['angular'], function (_export) {
// 	return {
// 		execute: function () {
// 			_export(window.singleSpaAngularjs.default({
// 				angular: angular,
// 				mainAngularModule: 'myApp',
// 				uiRouter: true,
// 				preserveGlobal: false,
// 				template: '<my-app />',
// 			}))
// 		}
// 	}
// });

// System.import('app-regs');
