ons.ready(function() {
	document.querySelector('#myNavigator').addEventListener('init', function(event) {
		page = event.target;

		if (page.id === 'all_contacts') {
			ons.myApp.contactListController(page, ons.myApp.createAllListItem, ons.myApp.myData.slice(0).sort());
		} else if (page.id === 'fav_contacts') {
			ons.myApp.contactListController(page, ons.myApp.createFavListItem, ons.myApp.myData.slice(0, 9).sort());
		} else if (page.id === 'details_contacts') {
			ons.myApp.contactDetailsController(page);
		}
	});
});

