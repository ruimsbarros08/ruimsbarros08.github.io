



var website = angular.module('website', ['duScroll', 'wu.masonry']);

website.filter('capitalize', function() {
  return function(input, scope) {
	if (input!=null)
	input = input.toLowerCase();
	return input.substring(0,1).toUpperCase()+input.substring(1);
  }
});



website.controller('websiteCtrl', function ($scope, $document, $window) {

	angular.element('#home_box').velocity("transition.slideDownIn");

	angular.element($document).ready(function() {  
        angular.element("html").niceScroll();
    });


	function fader() {
        var b = angular.element('#home_box'),
        	dt = angular.element($document).scrollTop(),
        	bh = b.height(),
        	bo = b.offset().top,
        	ratio = dt / (bh + bo)

	    if (ratio >= 0 && ratio <= 1) {
	        angular.element('#home_box').css({opacity: 1 - ratio});
	    }

	}

	angular.element($document).bind('scroll', fader);


	var mapOptions = {
		center: { lat: 41.1553283, lng: -8.6163775},
		zoom: 10,
		scrollwheel: false
	};
	var map = new google.maps.Map(document.getElementById('map-canvas'),
		mapOptions);

	var marker;

	$scope.setMarkerPos = function(lat, lon, place){
		var pos = {lat: lat, lng: lon };
		map.setCenter(pos);
		map.setZoom(15);

		if (marker == undefined) {
	
			marker = new google.maps.Marker({
			    map: map,
			    position: pos,
			});
			
		}
		else {
			marker.setPosition(pos);
			marker.setTitle(place);
		}
	}

	var $nav = angular.element('#navigator');

	enquire.register("screen and (min-width: 550px)", {
		match : function() {
			$nav.addClass('navigator-container');
			$nav.addClass('nav-stacked');
		},  
		unmatch : function() {
			$nav.removeClass('navigator-container');
			$nav.removeClass('nav-stacked');
		}
	});


	enquire.register("screen and (max-width: 550px)", {
		match : function() {
			$nav.addClass('navigator-container-phones');
			$nav.removeClass('nav-stacked');
		},  
		unmatch : function() {
			$nav.removeClass('navigator-container-phones');
			$nav.addClass('nav-stacked');
		}
	});


	$scope.education =  {
		studies: [{
			id: 'esha',
			color: 'orange',
			type: 'Highschool',
			name: 'Escola Secundária Alexandre Herculano',
			date_started: '2005',
			date_finished: '2008',
			course: 'Science',
			link: 'http://www.aealexandreherculano.pt/',
			details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
			location: {
				place: 'ESAH',
				lat: 41.1487249,
				lon: -8.5945147
			}
		},
		{
			id: 'feup',
			color: 'darkred',
			type: 'University',
			name:'FEUP - Faculty of Engineering of University of Porto',
			date_started: '2008',
			date_finished: '2013',
			course: 'Civil Engineering',
			link: 'http://paginas.fe.up.pt/~dec/',
			details: 'Master in Structural Engineering',
			location: {
				place: 'FEUP',
				lat: 41.1787077,
				lon: -8.5958268
			}
		},
		{
			id: 'upc',
			color: 'skyblue',
			type: 'University',
			name:'UPC - Universitat Politècnica de Catalunya',
			date_started: '2012',
			date_finished: '2013',
			course: 'Civil Engineering',
			link: 'http://www.upc.edu/learning/courses/masters-degrees/civil-engineering?set_language=en',
			details: 'Erasmus Programme. Time to travel and learn new cultures and languages.<br> I had the opportunity to learn Spanish and Catalan.',
			location: {
				place:'UPC',
				lat: 41.3884033,
				lon: 2.1114211
			}
		},
		{
			id: 'isep',
			color: 'darkgrey',
			type: 'University',
			name:'ISEP - Instituto Superior de Engenharia do Porto',
			date_started: '2015',
			date_finished: 'Current',
			course: 'Computer Science',
			link: 'https://www.isep.ipp.pt/Course/Course/26',
			details: 'Lorem ipsum',
			location: {
				place:'ISEP',
				lat: 41.1778174,
				lon: -8.6080084
			}
		}
		],
		online_courses: [{
			id: 'intro_cs',
			name: 'Introduction to computer science',
			details: 'A course to learn the basics of programming. I took it because I wanted to learn Python, but I ended up learning many concepts of computation.',
			company: 'Udacity',
			year: 2013,
			link: 'https://www.udacity.com/course/intro-to-computer-science--cs101',
			languages: ['Python'],
			color: 'darkgrey',
		},
		{
			id: 'web_dev',
			name: 'Web Development',
			details: 'This was the first time a got in touch with the web development world.',
			company: 'Udacity',
			year: 2014,
			link: 'https://www.udacity.com/course/web-development--cs253',
			languages: ['Python'],
			color: 'darkred',
		},
		{
			id: 'js',
			name: 'JavaScript',
			details: 'Since I get started to build web apps I felt the need to take a course where I could learn the basics of Javascript',
			company: 'CodeAcademy',
			year: 2014,
			link: 'http://www.codecademy.com/pt/tracks/javascript',
			languages: ['Javascript'],
			color: 'darkgreen',

		},
		{
			id: 'angular',
			name: 'A Better Way to Learn AngularJS',
			details: 'After a market research about the advantages of the client side web frameworks, I decided the learn this MVC framework to build some Single Page Apps. I also tried Backbone.js.',
			company: 'thinkster',
			year: 2014,
			link: 'https://thinkster.io/a-better-way-to-learn-angularjs/',
			languages: ['Javascript', 'HTML'],
			color: 'skyblue',
		},
		{
			id: 'db',
			name: 'Databases',
			details: 'Before I took this course I already knew to perform SQL queries. What I leant here was the ability to structure the data on a given problem, creating UML diagrams, and building SQL tables',
			company: 'FEUP',
			year: 2014,
			link: 'https://sigarra.up.pt/feup/en/UCURR_GERAL.FICHA_UC_VIEW?pv_ocorrencia_id=350459',
			languages: ['SQL'],
			color: 'orange',

		},
		{
			id: 'django',
			name: 'Get started with Django',
			details: 'On small projects I prefer to use more simple web frameworks such as Flask, but in greater ones this is defenetly the one to use.',
			company: 'Django',
			year: 2014,
			link: 'https://www.djangoproject.com/',
			languages: ['Python'],
			color: 'brown',

		},
		]
	}


	$scope.projects = [
		{
			id: 'fw',
			name: 'FLANGE+WEB 2.0',
			link: 'http://openg.fe.up.pt/flangeplusweb2.0/',
			github: 'https://github.com/ruimsbarros08/flangeplusweb2.0',
			technologies: ['Flask', 'SQLite', 'AngularJS', 'Bootstrap'],
			details: 'A Single Page Web App for structural Engineers to perform some calclations on the backend',
			image: 'img/flange.png',
			color: 'orange'
		},
		{
			id: 'eql',
			name: 'EQLogger',
			link: 'http://prise.fe.up.pt/eqlogger/',
			github: 'https://github.com/ruimsbarros08/prise',
			technologies: ['Flask', 'PostgreSQL', 'Postgis', 'Openquake', 'Tilestache', 'Leaflet', 'AngularJS', 'Bootstrap'],
			details: 'Wep Application for seismic risk data visualition. We used a software at the backend called Openquake to perform analysis. We pick up the results, store them on PostgreSQL database and we produce the data visualization on Leaflet Javascript maps and Highcharts.',
			image: 'img/prise.jpg',
			color: 'SkyBlue '
		},
		{
			id: 'risco',
			name: 'Risco',
			link: 'http://prise.fe.up.pt/risco/',
			github: 'https://github.com/ruimsbarros08/risco',
			technologies: ['Django', 'PostgreSQL', 'Postgis', 'Openquake', 'Leaflet', 'AngularJS', 'Bootstrap'],
			details: 'Cloud based computing and data visualization for earthquake risk analysis',
			image: 'img/risco.jpg',
			color: 'green'
		},
		{
			id: 'mtlg',
			name: 'Metalogalva',
			link: 'http://prise.fe.up.pt/metalogalva/',
			github: 'https://github.com/ruimsbarros08/metalogalva',
			technologies: ['Django', 'PostgreSQL', 'AngularJS', 'Bootstrap'],
			details: 'Web app for company products',
			image: 'img/metalogalva.jpg',
			color: 'MidnightBlue '
		},
	]

	$scope.open = function(id, menu){
		angular.element('#'+id+' .'+menu).addClass('active');
	}

	$scope.close = function(id, menu){
		angular.element('#'+id+' .'+menu).removeClass('active');
	}



});