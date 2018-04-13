var routerApp = angular.module('routerApp', ['ui.router']);

routerApp.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        // HOME STATES Y SUS VISTAS ANIDADAS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'partial-home.html'
        })
        
        // la lista anidada con su controlador
        .state('home.list', {
            url: '/list',
            templateUrl: 'partial-home-list.html',
            controller: function($scope) {
                $scope.tops = ['Finanzas', 'Recursos Humanos', 'Soporte Técnico'];
            }
        })
        
        // la lista anidadad con datos al azar
        .state('home.paragraph', {
            url: '/paragraph',
            //template: 'Some rules about our services.'
            templateUrl: 'partial-paragraph.html',
            controller: 'myCtrl'

        })
        
        // PÁGINA SOBRE NOSOTROS =================================
        .state('about', {
            url: '/about',
            views: {
                '': { templateUrl: 'partial-about.html' },
                'columnOne@about': { template: 'Información de la compañía.' },
                'columnTwo@about': { 
                    templateUrl: 'table-data.html',
                    controller: 'teamController'
                }
            }
            
        });
        
});

routerApp.controller('teamController', function($scope) {

    $scope.message = 'test';

    $scope.teams = [
        {
            name: 'Pedro Amigo',
            charge: 'Director'
        },
        {
            name: 'Edit Salgado',
            charge: 'Lider IT'
        },
        {
            name: 'Alberto Castro',
            charge: 'Finanzas'
        }
    ];

});

routerApp.controller('myCtrl', function($scope, $http) {


  //$http es un servicio de AngularJS para leer datos de servidores remotos,
  //En este caso con el método 'get'.
  
  $http.get("https://script.google.com/macros/s/AKfycbyJtu_rO9jvQ3NFK1JIe-lf7Sas-NBdsoBXqrLv9zp1KBZQNspl/exec", { responseType: "json" }).then(function (response) {
      $scope.myData = response.data; //La respuesta del servidor es almacenada en data
  });
  $scope.quantity = 15;
});