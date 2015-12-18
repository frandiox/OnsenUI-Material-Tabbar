app
  .controller('ContactListController', function($scope, ContactsFactory) {
    $scope.list = ContactsFactory.list;
  })
  .controller('FavouritesController', function($scope, ContactsFactory) {
    $scope.list = ContactsFactory.list.slice(0, 9);
  })
  .controller('DetailsContactController', function($scope) {
    $scope.name = $scope.myNavigator.getCurrentPage().options.person;
  })
;
