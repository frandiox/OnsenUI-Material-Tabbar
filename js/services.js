ons.myApp = {};

ons.myApp.createAllListItem = function(name, index, initials) {

    return '<ons-list-item modifier="material" onclick="document.querySelector(\'#myNavigator\').pushPage(\'html/details_contact.html\', {animation: \'lift\', person: \'' + name + '\'})">' +
          '<div class="list__item__left">' +
             '<span class="contact-initials">' + initials + '</span>' +
          '</div>' +
          '<div class="list__item__center">' +
            '<ons-ripple color="rgba(0, 0, 0, 0.1)"></ons-ripple>' +
            '<img src="images/profile-image-0' + (index % 9 + 1) + '.png" class="list__item__thumbnail">' +
            '<div>' + name + '</div>' +
          '</div>' +
        '</ons-list-item>'
    ;
};

ons.myApp.createFavListItem = function(name, index) {

    return '<ons-list-item modifier="material" onclick="document.querySelector(\'#myNavigator\').pushPage(\'html/details_contact.html\', {animation: \'lift\', person: \'' + name + '\'})">' +
          '<ons-ripple color="rgba(0, 0, 0, 0.1)"></ons-ripple>' +
          '<div class="list__item__left">' +
            '<img src="images/profile-image-0' + (index % 9 + 1) + '.png" class="list__item__thumbnail">' +
          '</div>' +
          '<div class="list__item__center">' +
            name +
          '</div>' +
        '</ons-list-item>'
    ;
};

ons.myApp.myData = [
    'Jody Moran',
    'Terri  Stewart',
    'Mona Roberts',
    'Johnathan  Torres',
    'Shelia Foster',
    'Milton Robertson',
    'Doyle  Alvarado',
    'Jodi Perez',
    'Cecilia  Chambers',
    'Wayne  Hodges',
    'Jeffery  Lowe',
    'Betsy  Shaw',
    'Drew Norman',
    'Elmer  Stevens',
    'Desiree  Casey',
    'Jermaine Hampton',
    'Lowell Miller',
    'Alexandra  Aguilar',
    'Jessie Sims',
    'Orville  Carr',
    'Helen  Mathis',
    'Terry  Anderson',
    'Claudia  Reid',
    'Sally  Gill',
    'Arturo Duncan',
    'Noah Ortiz',
    'Kathleen Beck',
    'Fredrick Dunn',
    'Ismael Horton',
    'Ricardo  Keller',
    'Jason  Tyler',
    'Kurt Sharp',
    'Delbert  Santos',
    'Rafael Page',
    'Oscar  Quinn',
    'Juana  Bass',
    'Julian Mcdaniel',
    'Allison  Brewer',
    'Cristina Santiago',
    'Lorene Curtis',
    'Jesus  Elliott',
    'Alejandro  Fowler',
    'Ted  Vaughn',
    'Delores  Schwartz',
    'Thelma Mccormick',
    'Daniel Romero',
    'Lisa Little',
    'Tricia Jefferson',
    'Leticia  Dixon',
    'Olivia Leonard',
    'Allen  Neal',
    'Adam Maxwell',
    'Allan  Mendoza',
    'Camille  Lindsey',
    'Kari Medina',
    'Ross Kelly',
    'Doug Palmer',
    'Raquel Hamilton',
    'Douglas  Gordon',
    'Essie  Wagner',
    'Loretta  Barnes',
    'Cameron  Frazier',
    'Lee  Patton',
    'Marlene  Cunningham',
    'Andrea Francis',
    'Jan  Buchanan',
    'Danielle Black',
    'Carole Hoffman',
    'Eugene Owens',
    'Alex Kim',
    'Armando  Schultz',
    'Curtis Carpenter',
    'Clyde  Morris',
    'Julie  Maldonado',
    'Angel  Carter',
    'Jamie  Reese',
    'Paul Townsend',
    'Jennie Wright',
    'Luther Goodwin',
    'Aubrey Hawkins',
    'Karen  Taylor',
    'Seth Newton',
    'Jacquelyn  Holt',
    'Isaac  Lloyd',
    'Frank  Norris',
    'Don  Frank',
    'Christine  Evans',
    'Mae  Burns',
    'Dwayne Coleman',
    'Pat  Klein',
    'Alfonso  Craig',
    'Sheri  Newman',
    'Tamara Perry',
    'Marcos Manning',
    'Darin  Doyle',
    'Rex  Cole',
    'Bertha Valdez',
    'Annette  Willis',
    'Francisco  Lynch',
    'Sonya  Mendez'

];