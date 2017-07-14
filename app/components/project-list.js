import Ember from 'ember';

export default Ember.Component.extend({
	classNameBindings: ['viewSingle', ':project-list', ':grid'],
	viewSingle: false,
	activeProject: null,
	activeProjectIndex: null,
	animationDuration: 0.7,
	randomIntervals: [],

	// 'http://res.cloudinary.com/dxefmitas/image/upload/c_fill,h_1772,w_3541/v1494866310/ns-mobile-app_kmzoip.jpg',

	projects: [
		{
			title: 'NutriSavings Mobile App',
			type: ['UX', 'UI'],
			thumbnail: 'http://res.cloudinary.com/dxefmitas/image/upload/c_scale,w_3541/v1494866310/ns-mobile-app_kmzoip.jpg',
			heroImage: 'http://res.cloudinary.com/dxefmitas/image/upload/c_crop,h_2509,w_4000/v1494866310/ns-mobile-app_kmzoip.jpg',
			firstImage: 'https://unsplash.it/600/350',
			featureText: ['meow', 'woof', 'quack', 'baaaaaaaaaaaa'],
			projectImgs: [
				{
					image: 'http://res.cloudinary.com/dxefmitas/image/upload/v1494866310/ns-mobile-app_kmzoip.jpg'
				},
				{
					image: 'https://unsplash.it/300/200',
					text: "preloader animation 2"

				}, 
				{
					image: 'http://res.cloudinary.com/dxefmitas/image/upload/v1493910718/cinchMobileMock_ou7spd.png',
					text: "preloader animation 3"

				},
				{
					image: 'https://unsplash.it/340/200',
					text: "preloader animation 4"

				},
				{
					image: 'https://unsplash.it/500/200'
				}, 
				{
					image:'https://unsplash.it/300/200'
				},
				{
					image: 'https://unsplash.it/200/100'
				}, 
				{
					image: 'https://unsplash.it/340/200'
				},
				{
					image: 'https://unsplash.it/500/200'
				},
				{
					image: 'https://unsplash.it/300/200'
				},
				{
					image: 'https://unsplash.it/200/100' 
				}, 
				{
					image: 'https://unsplash.it/340/200'
				},
				{
					image: 'https://unsplash.it/500/200'
				}
			],
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi condimentum porta justo at fermentum. Vestibulum mattis sapien in luctus posuere. Aenean sapien lectus, lobortis et eros ut, viverra lobortis enim. Donec at dolor ac nunc ultricies porta. In eu odio ligula. Aenean vel odio ut mauris lobortis venenatis. Praesent egestas dui sed ex molestie scelerisque. Maecenas volutpat pellentesque ante. Duis euismod malesuada odio, quis eleifend sapien finibus quis. Suspendisse hendrerit, metus non convallis dictum, mauris dolor convallis leo, at pharetra enim nunc id magna. Sed molestie mi nec risus semper, at vulputate quam viverra. Sed posuere consectetur porttitor. Nulla facilisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
			prototype: 'https://fruitloopmobile.netlify.com/'
		},
		{
			title: 'MassChallenge Launch Event Animation',
			type: 'animation',
			thumbnail: 'http://res.cloudinary.com/dxefmitas/image/upload/c_thumb,w_873/v1493910718/bostonSkyline_yhv8xd.png',
			heroImage: 'http://res.cloudinary.com/dxefmitas/image/upload/v1493910718/bostonSkyline_yhv8xd.png',
			description: "I designed and developed this animated graphic of the Boston Skyline for MassChallenge's 2016 Launch event. The graphic was projected on a wall at dimensions about 15ft tall and 20ft wide. I decided to create an animated graphic of the skyline gradually building from the ground up (in historical order) with transparent pastel colors to reflect the 'innovative, cool, and friendly nature of both MassChallenge as a brand and the event itself. This graphic was developed in HTML/CSS with some Javascript and Jquery, but is primarily animated using CSS animations. Click on the image below to see the Boston skyline grow up from nothing!",
			prototype: 'http://bostonskyline.netlify.com/'
		},

		{
			title: 'Cinch Mobile Prototype',
			type: ['UX', 'UI', 'Front End'],
			heroImage: 'http://res.cloudinary.com/dxefmitas/image/upload/v1493910718/cinch_awmthq.png',
			thumbnail: 'http://res.cloudinary.com/dxefmitas/image/upload/v1493910718/cinchMobileMock_ou7spd.png',
			// firstImage:  'http://res.cloudinary.com/dxefmitas/image/upload/v1493910718/cinchMobileMock_ou7spd.png',
			projectImgs: [
				{
					image: 'http://res.cloudinary.com/dxefmitas/image/upload/v1493910718/cinchPersonas_qjfsik.png',
					text: "Personas"
				},
				{
					image: 'http://res.cloudinary.com/dxefmitas/image/upload/v1493910718/cinchSitemap_budq4u.png',
					text: "Site Map"

				}],
			description: 'Cinch Financial is a small financial tech startup. They have curated a list of the best financial products to make finding good financial services easier for the consumer.',
			description2: 'Cinch offers various ways of accessing their curated list. These include simply reading the list of serices and products (Cinch Picks), taking a short survey to get more personalized recommendations, or sending Cinch a copy of your bill in return for a specific recommendation (BillSnap). For Cinch to give the best recommendation, they need as much information about your current financial situation as possible.Cinch put my small cross-functional consulting team up to the task of improving the user experience of the site and working towards driving more users to engage with the site’s offerings.'
		},

		{
			title: 'NutriSavings Marketing',
			type: ['Email', 'Print', 'Graphics', 'Animation'],
			heroImage: 'http://res.cloudinary.com/dxefmitas/image/upload/v1496166223/Poster-MockUp-Vert-and-Horiz_zkvhhi.jpg',
			projectImgs: [ 
				{
					image: 'http://res.cloudinary.com/dxefmitas/image/upload/c_crop,g_north,h_660,w_600/v1496165612/no-clipping4_plf42a.gif'
				},
				{
					image: 'http://res.cloudinary.com/dxefmitas/image/upload/c_crop,g_north,h_620,w_600/v1496165618/you-are-what-you-eat_u3bxge.gif'
				},
				{ 
					image: 'http://res.cloudinary.com/dxefmitas/image/upload/v1497039547/NS-salessheet_wzmros.jpg'
				}
			],
			thumbnail: 'http://res.cloudinary.com/dxefmitas/image/upload/c_scale,w_500/v1496166223/Poster-MockUp-Vert-and-Horiz_zkvhhi.jpg',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi condimentum porta justo at fermentum. Vestibulum mattis sapien in luctus posuere. Aenean sapien lectus, lobortis et eros ut, viverra lobortis enim. Donec at dolor ac nunc ultricies porta. In eu odio ligula. Aenean vel odio ut mauris lobortis venenatis. Praesent egestas dui sed ex molestie scelerisque. Maecenas volutpat pellentesque ante. Duis euismod malesuada odio, quis eleifend sapien finibus quis. Suspendisse hendrerit, metus non convallis dictum, mauris dolor convallis leo, at pharetra enim nunc id magna. Sed molestie mi nec risus semper, at vulputate quam viverra. Sed posuere consectetur porttitor. Nulla facilisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.'
		},

		{
			title: 'Wandermore',
			type: ['mobile app'],
			thumbnail: 'http://res.cloudinary.com/dxefmitas/image/upload/v1493910727/wandermore_screens_exyslj.png',
			heroImage: 'https://unsplash.it/700/200',
			projectImgs: ['https://unsplash.it/500/600', 'https://unsplash.it/300/600', 'https://unsplash.it/200/60', 'https://unsplash.it/340/400'],
			description: 'stuff'
		},
		{
			title: 'Mobile Heartbeat',
			type: ['ns dashboard'],
			heroImage: 'https://unsplash.it/700/200',
			projectImgs: ['https://unsplash.it/500/600', 'https://unsplash.it/300/600', 'https://unsplash.it/200/60', 'https://unsplash.it/340/400'],
			thumbnail: 'https://unsplash.it/500/300'
		},

		{
			title: 'Dog App',
			type: ['mc stuff'],
			heroImage: 'https://unsplash.it/700/200',
			projectImgs: ['https://unsplash.it/500/600', 'https://unsplash.it/300/600', 'https://unsplash.it/200/60', 'https://unsplash.it/340/400'],
			thumbnail: 'https://unsplash.it/500/500'
		},

		{
			title: 'project4',
			type: ['mc stuff'],
			heroImage: 'https://unsplash.it/700/200',
			projectImgs: ['https://unsplash.it/500/600', 'https://unsplash.it/300/600', 'https://unsplash.it/200/60', 'https://unsplash.it/340/400'],
			thumbnail: 'https://unsplash.it/500/350'
		},

		{
			title: 'project3',
			type: ['mc stuff'],
			heroImage: 'https://unsplash.it/500/200',
			projectImgs: ['https://unsplash.it/500/600', 'https://unsplash.it/300/600', 'https://unsplash.it/200/60', 'https://unsplash.it/340/400'],
			thumbnail: 'https://unsplash.it/500/500'
		},

		{
			title: 'project4',
			type: ['mc stuff'],
			heroImage: 'https://unsplash.it/700/200',
			projectImgs: ['https://unsplash.it/500/600', 'https://unsplash.it/300/600', 'https://unsplash.it/200/60', 'https://unsplash.it/340/400'],
			thumbnail: 'https://unsplash.it/500/350'
		}
	],

	didUpdateAttrs: function () {
		this.setRandomIntervals();
	},

	setRandomIntervals: function () {
		var orderedIntervals = [];
		var randomIntervals = [];
		var projectsLength = this.get('projects.length')
		var interval = this.get('animationDuration') / projectsLength;
		
		for (var i = 0; i < projectsLength; i++) {
			orderedIntervals.push(i * interval);
		}

		randomIntervals = orderedIntervals.sort(function() {
			return Math.sign(Math.random() - 0.5);
		});

		this.set('randomIntervals', randomIntervals);

		// var backButton = this.element.getElementsByClassName('show-all');

		// console.log('backButton');

	},

	didInsertElement: function() {
		var $grid = $('.grid').masonry({
		    itemSelector: '.grid-item',
		    columnWidth: '.grid-sizer',
			percentPosition: true,
			fitWidth: true,
			resize: true,
		});

		$grid.imagesLoaded().progress( function() {
		    $grid.masonry('layout');
		});

		this.setRandomIntervals();

		window.sr = ScrollReveal({ reset: true });
		window.sr.reveal('img');
		window.sr.reveal('li');

		// var backButton = this.element.getElementsByClassName('show-all')[0];

		// backButton.classList.add('hide')

		// if (this.get('isActiveProject')) {
		// 	backButton.classList.remove('hide');
		// }   

 
	},

	actions: {
		hideOthers: function(activeProjectIndex) {
			this.set('viewSingle', true);
			this.set('activeProjectIndex', activeProjectIndex);
			this.set('activeProject', this.get('projects')[activeProjectIndex]);
		},

		showAll: function() {
			this.set('viewSingle', false);
			this.set('activeProjectIndex', null);
			this.set('activeProject', null);
		}
	} 
});

