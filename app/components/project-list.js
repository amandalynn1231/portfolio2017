import Ember from 'ember';

export default Ember.Component.extend({
	classNameBindings: ['viewSingle', ':project-list'],
	viewSingle: false,
	activeProject: null,
	activeProjectIndex: null,
	animationDuration: 0.7,
	randomIntervals: [],

	col0Projects: [],
	col1Projects: [],

	projects: Ember.computed(function () {
		return this.get('rawProjects').map(function (project, index) {
			project.index = index;
			return project;
		});
	}),

	rawProjects: [
		{
			title: 'NutriSavings Mobile App',
			type: ['UX', 'UI'],
			thumbnail: 'http://res.cloudinary.com/dxefmitas/image/upload/c_scale,w_3541/v1494866310/ns-mobile-app_kmzoip.jpg',
			heroImage: 'http://res.cloudinary.com/dxefmitas/image/upload/c_crop,h_2509,w_4000/v1494866310/ns-mobile-app_kmzoip.jpg',
			firstImage: 'http://res.cloudinary.com/dxefmitas/image/upload/v1503791701/welcome-screen_pdx9o3.png',
			featureText: ['wireframes', 'mockups', 'custom icons', 'interaction design', 'data visualization'],
			projectImgs: [
				{
					image: 'http://res.cloudinary.com/dxefmitas/image/upload/v1494866310/ns-mobile-app_kmzoip.jpg'
				},
				{
					image: 'http://res.cloudinary.com/dxefmitas/image/upload/v1500242214/dashboard-screens_hzlgsw.png',
					text: "preloader animation 2"
				},
				{
					image: 'http://res.cloudinary.com/dxefmitas/image/upload/c_scale,w_1256/v1503805040/ipad_z9izkk.png',
				}, 
				{
					image: 'http://res.cloudinary.com/dxefmitas/image/upload/c_scale,w_1074/v1500837808/profile-gif-mockup_y4fbat.gif',
					text: "preloader animation 3"
				},
				{
					image:'http://res.cloudinary.com/dxefmitas/image/upload/v1500493885/cash-rewards-screens-pink_k2rvaf.jpg'
				},
				{
					image: 'http://res.cloudinary.com/dxefmitas/image/upload/v1500344064/food-catalog-screens-green_egqstu.png',
					text: "preloader animation 4"

				},
				{
					image: 'http://res.cloudinary.com/dxefmitas/image/upload/v1500667188/profile-icons1-v1_dguupl.gif'
				}
			],
			description: 'NutriSavings is a program that educates people on how to make healthier grocery choices and rewards them with cash back on healthy food purchases. The program features a web app and mobile app platform through which users track food purchases and cash back earnings, as well as compare foods with heathier alternatives.',
			description2: 'The majority of my role as a designer at NutriSavings has been acting as the main designer on the entensive redesign on our mobile app. Working with product managers, product analysts, and mobile developers, we have redesigned the app page by page, for which I have provided design for the user experience, interface, interactions, and custom icons.',
			prototype: 'https://fruitloopmobile.netlify.com/',
			hover: '#5F7DD0',
			year: '2016 - 2017'
			// '#25D39E'
		},
		{
			title: 'MassChallenge Launch Event Animation',
			type: ['animation'],
			thumbnail: 'http://res.cloudinary.com/dxefmitas/image/upload/c_thumb,w_873/v1493910718/bostonSkyline_yhv8xd.png',
			heroImage: 'http://res.cloudinary.com/dxefmitas/image/upload/v1493910718/bostonSkyline_yhv8xd.png',
			description: "I designed and developed this animated graphic of the Boston Skyline for MassChallenge's 2016 Launch event. The graphic was projected on a wall at dimensions about 15ft tall and 20ft wide. I decided to create an animated graphic of the skyline gradually building from the ground up (in historical order) with transparent pastel colors to reflect the 'innovative, cool, and friendly nature of both MassChallenge as a brand and the event itself. This graphic was developed in HTML/CSS with some Javascript and Jquery, but is primarily animated using CSS animations. Click on the image below to see the Boston skyline grow up from nothing!",
			prototype: 'http://bostonskyline.netlify.com/',
			hover: '#25D39E',
			year: '2016'
			// '#B36AE2' 
		},

		{
			title: 'Cinch Mobile Prototype',
			type: ['UX', 'UI', 'Front End'],
			heroImage: 'http://res.cloudinary.com/dxefmitas/image/upload/v1493910718/cinchMobileMock_ou7spd.png',
			thumbnail: 'http://res.cloudinary.com/dxefmitas/image/upload/v1493910718/cinchMobileMock_ou7spd.png',
			projectLink: [
				{
					linkText: 'View Prototype',
					linkUrl: 'http://cinchprototype.netlify.com/'
				}
			],
			firstImage:  'http://res.cloudinary.com/dxefmitas/image/upload/c_crop,g_center,h_1000,w_1500/v1501003323/cinch-screens-pink_gxvbum.jpg',
			featureText: ['user research', 'personas', 'sitemapping', 'wireframes', 'mockups', 'html/css prototype'],
			projectImgs: [
				{
					image: 'http://res.cloudinary.com/dxefmitas/image/upload/v1493910718/cinchPersonas_qjfsik.png',
					text: "Personas"
				},
				{
					image: 'http://res.cloudinary.com/dxefmitas/image/upload/v1500245072/cinchWireframe_v2c05o.png'
				},
				{
					image: 'http://res.cloudinary.com/dxefmitas/image/upload/v1493910718/cinchSitemap_budq4u.png',
					text: "Site Map"
				}
				],
			description: 'Cinch Financial is a small financial tech startup. They have curated a list of the best financial products to make finding good financial services easier for the consumer.',
			description2: 'Cinch offers various ways of accessing their curated list. These include simply reading the list of serices and products (Cinch Picks), taking a short survey to get more personalized recommendations, or sending Cinch a copy of your bill in return for a specific recommendation (BillSnap). For Cinch to give the best recommendation, they need as much information about your current financial situation as possible. Cinch put my small cross-functional consulting team up to the task of improving the user experience of the site and working towards driving more users to engage with the site’s offerings.',
			hover: '#6D5AD7',
			year: '2015'
			// #BBD42B
		},

		{
			title: 'NutriSavings Marketing',
			type: ['Email', 'Print', 'Graphics', 'Animation'],
			typeHero: 'Email, Print, Graphic Design, Animation',
			year: '2016 - 2017',
			programs: 'photoshop, illustrator, indesign',
			heroImage: 'http://res.cloudinary.com/dxefmitas/image/upload/v1496166223/Poster-MockUp-Vert-and-Horiz_zkvhhi.jpg',
			projectImgs: [ 
				{
					image: 'http://res.cloudinary.com/dxefmitas/image/upload/c_crop,g_north,h_660,w_600/v1496165612/no-clipping4_plf42a.gif'
				},
				{
					image: 'http://res.cloudinary.com/dxefmitas/image/upload/c_crop,g_north,h_620,w_600/v1496165618/you-are-what-you-eat_u3bxge.gif'
				},
				{
					image: 'http://res.cloudinary.com/dxefmitas/image/upload/v1500350428/wellness-booklet-spread1_uvwbjr.jpg'
				},
				{
					image: 'http://res.cloudinary.com/dxefmitas/image/upload/v1500242232/radio_jcrazd.gif'
				},
				{
					image: 'http://res.cloudinary.com/dxefmitas/image/upload/v1500242233/liberty-bell_csmomg.gif'
				},
				{
					image: 'http://res.cloudinary.com/dxefmitas/image/upload/v1500242232/train_kqpu92.gif'
				},
				{
					image: 'http://res.cloudinary.com/dxefmitas/image/upload/v1502304186/case-study-bsneny_c64g5s.jpg'
				},
				{
					image: 'http://res.cloudinary.com/dxefmitas/image/upload/v1500242231/lighthouse_qabvrp.gif'
				},
				{ 
					image: 'http://res.cloudinary.com/dxefmitas/image/upload/v1497039547/NS-salessheet_wzmros.jpg'
				}
			],
			thumbnail: 'http://res.cloudinary.com/dxefmitas/image/upload/c_scale,w_500/v1496166223/Poster-MockUp-Vert-and-Horiz_zkvhhi.jpg',
			description: 'NutriSavings is a program that educates users on making healthier grocery choices and rewards them with cash back on healthy food purchases. A portion of my tasks as a designer at NutriSavings are devoted to creating marketing materials for the platform. NutriSavings has a multifaceted audience to whom we market: employers and health plans, grocery stores and food brands, and our users. I have created materials ranging from emails to case studies to post cards targeting each of these audiences with a specific message surrounding their place in the NutriSavings ecosystem. ',
			hover: '#F0D756'
			// #0E9F4F
		},

		{
			title: 'Wandermore',
			type: ['UX', 'UI', 'mobile app'],
			thumbnail: 'http://res.cloudinary.com/dxefmitas/image/upload/v1493910727/wandermore_screens_exyslj.png',
			heroImage: 'http://res.cloudinary.com/dxefmitas/image/upload/v1493910727/wandermore_screens_exyslj.png',			
			firstImage: 'http://res.cloudinary.com/dxefmitas/image/upload/v1502637878/wandermore-mocks_mtajgh.png',
			featureText: ['wireframes', 'mockups', 'custom font', 'prototype'],
			projectLink: [
				{
					linkText: 'View Prototype',
					linkUrl: 'https://projects.invisionapp.com/share/Q92HLPJW3#/screens/95568570_Wandermore_HomePURP'
				}
			],
			description: 'Wandermore, a mobile application that lets you become as familiar with the neighborhood as the locals. With Wandermore, you can create a tour of a local area with customizations such as a specific end destination, time constraints, and interests. For this project, I made wireframes, created original typography, designed the interface and user experience, and built out a small, clickable prototype',
			prototype2: 'https://projects.invisionapp.com/share/SZ3XCVK2N#/screens/95568570',
			hover: '#B36AE2',
			year: '2015'
		}
		// {
		// 	title: 'Mobile Heartbeat',
		// 	type: ['UX', 'UI', 'mobile app'],
		// 	heroImage: 'https://unsplash.it/700/200',
		// 	projectImgs: ['https://unsplash.it/500/600', 'https://unsplash.it/300/600', 'https://unsplash.it/200/60', 'https://unsplash.it/340/400'],
		// 	thumbnail: 'https://unsplash.it/500/300'
		// },

		// {
		// 	title: 'Dog App',
		// 	type: ['mobile app'],
		// 	heroImage: 'https://unsplash.it/700/200',
		// 	projectImgs: ['https://unsplash.it/500/600', 'https://unsplash.it/300/600', 'https://unsplash.it/200/60', 'https://unsplash.it/340/400'],
		// 	thumbnail: 'https://unsplash.it/500/500'
		// }
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
	},

	didInsertElement: function() {
		this.setRandomIntervals();
		this.reorganizeByHeight();
	},

	reorganizeByHeight: function () {
		var self = this;
		var projects = this.get('projects');
		var col0 = [];
		var col1 = [];

		var col0Height = 0;
		var col1Height = 0;

		function getNextImage(index) {
			if (index >= projects.length) {
				self.set('col0Projects', col0);
				self.set('col1Projects', col1);
				return;
			}

			var project = projects[index];
			var img = new Image();

			img.onload = function() {
				var inverseAspectRatio = img.height / img.width;

				if (col0Height <= col1Height) {
					col0.push(project);
					col0Height += inverseAspectRatio;
				} 
				else {
					col1.push(project);
					col1Height += inverseAspectRatio;
				}

				getNextImage(index + 1);
			}
			img.src = project.thumbnail;
		}

		getNextImage(0);
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

