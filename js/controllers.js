ons.myApp.contactListController = function (page, createListItem, myContacts) {
	var list = page.querySelector('ons-list'),
		div = document.createElement('div');
	div.innerHTML = createListItem(myContacts[0], 0, myContacts[0].charAt(0));
	list.appendChild(div.firstChild);
	for (var i = 1; i < myContacts.length; i++) {
		div.innerHTML = createListItem(myContacts[i], i, (myContacts[i].charAt(0) !== myContacts[i - 1].charAt(0)) ? myContacts[i].charAt(0) : '');
		list.appendChild(div.firstChild);
	}
}

ons.myApp.contactDetailsController = function (page) {
	page.querySelector('ons-toolbar .center').innerHTML = document.querySelector('#myNavigator').getCurrentPage().options.person;
}