"use strict";

/* jshint ignore:start */



/* jshint ignore:end */

define('portfolio2017/app', ['exports', 'ember', 'portfolio2017/resolver', 'ember-load-initializers', 'portfolio2017/config/environment'], function (exports, _ember, _portfolio2017Resolver, _emberLoadInitializers, _portfolio2017ConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _portfolio2017ConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _portfolio2017ConfigEnvironment['default'].podModulePrefix,
    Resolver: _portfolio2017Resolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _portfolio2017ConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define('portfolio2017/components/nav-header', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({});
});
define('portfolio2017/components/project-hero', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Component.extend({
		classNameBindings: [':project-hero', 'isActiveProject', 'viewSingle', 'viewAll'],
		viewSingle: true,
		viewAll: false,

		evenImages: _ember['default'].computed(function () {
			return this.get('data.projectImgs').filter(function (image, index) {
				return index % 2 === 0;
			});
		}),

		oddImages: _ember['default'].computed(function () {
			return this.get('data.projectImgs').filter(function (image, index) {
				return index % 2 === 1;
			});
		}),

		didInsertElement: function didInsertElement() {
			// window.sr = ScrollReveal({
			// 	reset: true,
			// 	vFactor: 0.60
			// });

			// sr.reveal('li');
			// sr.reveal('h1');
			// sr.reveal('.hero-img');
			// sr.reveal('.gallery-image');

			requestAnimationFrame((function () {
				var el = this.get('element');
				el.style.transition = 'opacity 0.6s ease ' + (this.get('animationDuration') + 0.5) + 's';
				el.classList.add('show');
			}).bind(this));
		},

		actions: {
			showAll: function showAll() {
				this.sendAction('action');
			}
		}
	});
});
define('portfolio2017/components/project-list', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Component.extend({
		classNameBindings: ['viewSingle', ':project-list'],
		viewSingle: false,
		activeProject: null,
		activeProjectIndex: null,
		animationDuration: 0.7,
		randomIntervals: [],

		col0Projects: [],
		col1Projects: [],

		projects: _ember['default'].computed(function () {
			return this.get('rawProjects').map(function (project, index) {
				project.index = index;
				return project;
			});
		}),

		rawProjects: [{
			title: 'Improv Asylum Website',
			type: ['UX', 'UI'],
			thumbnail: 'https://res.cloudinary.com/dxefmitas/image/upload/v1546890681/thumb_hl3rrk.jpg',
			heroImage: 'https://res.cloudinary.com/dxefmitas/image/upload/v1545937513/IA-portfolio-display_l8p4oj.jpg',
			firstImage: ['http://res.cloudinary.com/dxefmitas/image/upload/v1503791701/welcome-screen_pdx9o3.png'],
			featureText: ['wireframes', 'mockups', 'custom gif animations', 'interaction design'],
			projectLink: [{
				linkText: 'View Site',
				linkUrl: 'https://www.improvasylum.com/'
			}],
			projectImgs: [{
				image: 'https://res.cloudinary.com/dxefmitas/image/upload/v1545937513/1.Homepage_nst98r.jpg'
			}, {
				image: 'https://res.cloudinary.com/dxefmitas/image/upload/v1545937495/Corporate_Training_-_Public_Speaking_Classes_Improv_Asylum_ou3vep.gif'
			}, {
				image: 'https://res.cloudinary.com/dxefmitas/image/upload/v1548730987/shows-sign-animation_s7qmuh.gif'
			}, {
				image: 'https://res.cloudinary.com/dxefmitas/image/upload/v1545937511/2.ShowsCalendar_yk1c5f.jpg'
			}, {
				image: 'https://res.cloudinary.com/dxefmitas/image/upload/v1545937513/3.Corporate_Training_2_h9oery.jpg'
			}, {
				image: 'https://res.cloudinary.com/dxefmitas/image/upload/v1545937513/3.Corporate_Training_2_h9oery.jpg'
			}, {
				image: 'https://res.cloudinary.com/dxefmitas/image/upload/v1545937513/5.Show_Details_jqgcfl.jpg'
			}],
			description: 'Improv Asylum is a Boston based improv theatre. The company has historically been known for its fun improv shows and school for improv classes. However, in recent years the company has grown its corporate training division and in-house production services, creating commercials for companies like Dunkin Donuts and Hasbro. Improv Asylum came to the ADK Group requesting an updated website that reflected their growth and and funny, irreverant personality.',
			description2: 'I was the lead designer on this project at ADK Group, working alongside a project manager and development team. For Improv Asylum, I conducted stakeholder/user interviews to identify current pain points and opportunities for improvement and provided design for the user experience, interface, interactions, and custom animations.',
			// prototype: 'https://fruitloopmobile.netlify.com/',
			hover: '#4D1BDA',
			year: '2018'
			// '#25D39E'
		}, {
			title: 'Bar Lyon Website',
			type: ['UX', 'UI', 'Front End Development'],
			thumbnail: 'https://res.cloudinary.com/dxefmitas/image/upload/v1546874687/bar-lyon-thumb_eubzsw.jpg',
			heroImage: 'https://res.cloudinary.com/dxefmitas/image/upload/v1547133046/bar-lyon-animation_b8c4he.gif',
			firstImage: ['https://res.cloudinary.com/dxefmitas/image/upload/v1547133046/bar-lyon-animation_b8c4he.gif'],
			featureText: ['ui design', 'interaction design', 'animations', 'front-end development'],
			fullImg: 'https://res.cloudinary.com/dxefmitas/image/upload/v1548862678/home-fork-wide_oxqi9n.png',
			projectImgs: [{
				image: 'https://res.cloudinary.com/dxefmitas/image/upload/v1548735383/home-mockup_cqtpzg.jpg'
			}, {
				image: 'https://res.cloudinary.com/dxefmitas/image/upload/v1548738944/Home_page_h4jg7l.png'
			}, {
				image: 'https://res.cloudinary.com/dxefmitas/image/upload/v1548858538/logo-pig_lrpsag.png'
			}, {
				image: 'https://res.cloudinary.com/dxefmitas/image/upload/v1548738954/About_hadcxv.png'
			}, {
				image: 'https://res.cloudinary.com/dxefmitas/image/upload/v1548738944/Menu_2_jcizbt.png'
			}, {
				image: 'https://res.cloudinary.com/dxefmitas/image/upload/v1548862671/title-treatments_lxsznp.png'
			}, {
				image: 'https://res.cloudinary.com/dxefmitas/image/upload/v1548734015/Contact_exnche.png'
			}, {
				image: 'https://res.cloudinary.com/dxefmitas/image/upload/v1548737543/Bar_Lyon_A_CHG_Restaurant_lccujj.jpg'
			}],
			description: 'Bar Lyon is a new restaurant located in Bostons South End neighborhood featuring French cuisine inspired by Lyon, France. The restuarant is a modern take on the Lyonaise bouchon restaurant, in which the emphasis is on simple cuisine and a cozy atmosphere.',
			description2: 'Taking inspiration from Lyonaise bouchons, I stylized the titles of each page with elements that channeled the look and feel of signs and decor in bochons. Animation was added to the logo and its surrounding elements to reflect the modernity of the restaurant. The split screen layout allows the restaurant to emphasize their high quality photography of the atmosphere and food. I provided visual design and build the front end of this website as custom wordpress templates for the client.',
			hover: '#0A3629',
			year: '2018'
			// '#25D39E'
		}, {
			title: 'NutriSavings Mobile App',
			type: ['UX', 'UI'],
			thumbnail: 'http://res.cloudinary.com/dxefmitas/image/upload/c_scale,w_3541/v1494866310/ns-mobile-app_kmzoip.jpg',
			heroImage: 'http://res.cloudinary.com/dxefmitas/image/upload/c_crop,h_2509,w_4000/v1494866310/ns-mobile-app_kmzoip.jpg',
			firstImage: ['http://res.cloudinary.com/dxefmitas/image/upload/v1503791701/welcome-screen_pdx9o3.png'],
			featureText: ['wireframes', 'mockups', 'custom icons', 'interaction design', 'data visualization'],
			projectImgs: [{
				image: 'http://res.cloudinary.com/dxefmitas/image/upload/v1494866310/ns-mobile-app_kmzoip.jpg'
			}, {
				image: 'http://res.cloudinary.com/dxefmitas/image/upload/v1500242214/dashboard-screens_hzlgsw.png',
				text: "preloader animation 2"
			}, {
				image: 'http://res.cloudinary.com/dxefmitas/image/upload/c_scale,w_1256/v1503805040/ipad_z9izkk.png'
			}, {
				image: 'http://res.cloudinary.com/dxefmitas/image/upload/c_scale,w_1074/v1500837808/profile-gif-mockup_y4fbat.gif',
				text: "preloader animation 3"
			}, {
				image: 'http://res.cloudinary.com/dxefmitas/image/upload/v1500493885/cash-rewards-screens-pink_k2rvaf.jpg'
			}, {
				image: 'http://res.cloudinary.com/dxefmitas/image/upload/v1500344064/food-catalog-screens-green_egqstu.png',
				text: "preloader animation 4"

			}, {
				image: 'http://res.cloudinary.com/dxefmitas/image/upload/v1500667188/profile-icons1-v1_dguupl.gif'
			}],
			description: 'NutriSavings is a program that educates people on how to make healthier grocery choices and rewards them with cash back on healthy food purchases. The program features a web app and mobile app platform through which users track food purchases and cash back earnings, as well as compare foods with heathier alternatives.',
			description2: 'The majority of my role as a designer at NutriSavings has been acting as the main designer on the entensive redesign on our mobile app. Working with product managers, product analysts, and mobile developers, we have redesigned the app page by page, for which I have provided design for the user experience, interface, interactions, and custom icons.',
			prototype: 'https://fruitloopmobile.netlify.com/',
			hover: '#5F7DD0',
			year: '2016 - 2017'
			// '#25D39E'
		}, {
			title: 'MassChallenge Launch Event Animation',
			type: ['animation'],
			thumbnail: 'http://res.cloudinary.com/dxefmitas/image/upload/c_thumb,w_873/v1493910718/bostonSkyline_yhv8xd.png',
			heroImage: 'http://res.cloudinary.com/dxefmitas/image/upload/v1493910718/bostonSkyline_yhv8xd.png',
			description: "I designed and developed this animated graphic of the Boston Skyline for MassChallenge's 2016 Launch event. The graphic was projected on a wall at dimensions about 15ft tall and 20ft wide. I decided to create an animated graphic of the skyline gradually building from the ground up (in historical order) with transparent pastel colors to reflect the 'innovative, cool, and friendly nature of both MassChallenge as a brand and the event itself. This graphic was developed in HTML/CSS with some Javascript and Jquery, but is primarily animated using CSS animations. Click on the image below to see the Boston skyline grow up from nothing!",
			prototype: 'http://bostonskyline.netlify.com/',
			hover: '#25D39E',
			year: '2016'
			// '#B36AE2'
		}, {
			title: 'Cinch Mobile Prototype',
			type: ['UX', 'UI', 'Front End'],
			heroImage: 'https://res.cloudinary.com/dxefmitas/image/upload/v1546882658/cinchMobileMock_a3siml.png',
			thumbnail: 'https://res.cloudinary.com/dxefmitas/image/upload/v1546882658/cinchMobileMock_a3siml.png',
			projectLink: [{
				linkText: 'View Prototype',
				linkUrl: 'http://cinchprototype.netlify.com/'
			}],
			firstImage: ['http://res.cloudinary.com/dxefmitas/image/upload/c_crop,g_center,h_1000,w_1500/v1501003323/cinch-screens-pink_gxvbum.jpg'],
			featureText: ['user research', 'personas', 'sitemapping', 'wireframes', 'mockups', 'html/css prototype'],
			projectImgs: [{
				image: 'http://res.cloudinary.com/dxefmitas/image/upload/v1493910718/cinchPersonas_qjfsik.png',
				text: "Personas"
			}, {
				image: 'http://res.cloudinary.com/dxefmitas/image/upload/v1500245072/cinchWireframe_v2c05o.png'
			}, {
				image: 'http://res.cloudinary.com/dxefmitas/image/upload/v1493910718/cinchSitemap_budq4u.png',
				text: "Site Map"
			}],
			description: 'Cinch Financial is a small financial tech startup. They have curated a list of the best financial products to make finding good financial services easier for the consumer.',
			description2: 'Cinch offers various ways of accessing their curated list. These include simply reading the list of serices and products (Cinch Picks), taking a short survey to get more personalized recommendations, or sending Cinch a copy of your bill in return for a specific recommendation (BillSnap). For Cinch to give the best recommendation, they need as much information about your current financial situation as possible. Cinch put my small cross-functional consulting team up to the task of improving the user experience of the site and working towards driving more users to engage with the site’s offerings.',
			hover: '#6D5AD7',
			year: '2015'
			// #BBD42B
		}, {
			title: 'NutriSavings Marketing',
			type: ['Email', 'Print', 'Graphics', 'Animation'],
			typeHero: 'Email, Print, Graphic Design, Animation',
			year: '2016 - 2017',
			programs: 'photoshop, illustrator, indesign',
			heroImage: 'http://res.cloudinary.com/dxefmitas/image/upload/v1496166223/Poster-MockUp-Vert-and-Horiz_zkvhhi.jpg',
			projectImgs: [{
				image: 'http://res.cloudinary.com/dxefmitas/image/upload/c_crop,g_north,h_660,w_600/v1496165612/no-clipping4_plf42a.gif'
			}, {
				image: 'http://res.cloudinary.com/dxefmitas/image/upload/c_crop,g_north,h_620,w_600/v1496165618/you-are-what-you-eat_u3bxge.gif'
			}, {
				image: 'http://res.cloudinary.com/dxefmitas/image/upload/v1500350428/wellness-booklet-spread1_uvwbjr.jpg'
			}, {
				image: 'http://res.cloudinary.com/dxefmitas/image/upload/v1500242232/radio_jcrazd.gif'
			}, {
				image: 'http://res.cloudinary.com/dxefmitas/image/upload/v1500242233/liberty-bell_csmomg.gif'
			}, {
				image: 'http://res.cloudinary.com/dxefmitas/image/upload/v1500242232/train_kqpu92.gif'
			}, {
				image: 'http://res.cloudinary.com/dxefmitas/image/upload/v1502304186/case-study-bsneny_c64g5s.jpg'
			}, {
				image: 'http://res.cloudinary.com/dxefmitas/image/upload/v1500242231/lighthouse_qabvrp.gif'
			}, {
				image: 'http://res.cloudinary.com/dxefmitas/image/upload/v1497039547/NS-salessheet_wzmros.jpg'
			}],
			thumbnail: 'http://res.cloudinary.com/dxefmitas/image/upload/c_scale,w_500/v1496166223/Poster-MockUp-Vert-and-Horiz_zkvhhi.jpg',
			description: 'NutriSavings is a program that educates users on making healthier grocery choices and rewards them with cash back on healthy food purchases. A portion of my tasks as a designer at NutriSavings are devoted to creating marketing materials for the platform. NutriSavings has a multifaceted audience to whom we market: employers and health plans, grocery stores and food brands, and our users. I have created materials ranging from emails to case studies to post cards targeting each of these audiences with a specific message surrounding their place in the NutriSavings ecosystem. ',
			hover: '#F0D756'
			// #0E9F4F
		}, {
			title: 'Wandermore',
			type: ['UX', 'UI', 'mobile app'],
			thumbnail: 'http://res.cloudinary.com/dxefmitas/image/upload/v1493910727/wandermore_screens_exyslj.png',
			heroImage: 'http://res.cloudinary.com/dxefmitas/image/upload/v1493910727/wandermore_screens_exyslj.png',
			firstImage: 'http://res.cloudinary.com/dxefmitas/image/upload/v1502637878/wandermore-mocks_mtajgh.png',
			featureText: ['wireframes', 'mockups', 'custom font', 'prototype'],
			projectLink: [{
				linkText: 'View Prototype',
				linkUrl: 'https://projects.invisionapp.com/share/Q92HLPJW3#/screens/95568570_Wandermore_HomePURP'
			}],
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

		didUpdateAttrs: function didUpdateAttrs() {
			this.setRandomIntervals();
		},

		setRandomIntervals: function setRandomIntervals() {
			var orderedIntervals = [];
			var randomIntervals = [];
			var projectsLength = this.get('projects.length');
			var interval = this.get('animationDuration') / projectsLength;

			for (var i = 0; i < projectsLength; i++) {
				orderedIntervals.push(i * interval);
			}

			randomIntervals = orderedIntervals.sort(function () {
				return Math.sign(Math.random() - 0.5);
			});

			this.set('randomIntervals', randomIntervals);
		},

		didInsertElement: function didInsertElement() {
			this.setRandomIntervals();
			this.reorganizeByHeight();
		},

		reorganizeByHeight: function reorganizeByHeight() {
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

				img.onload = function () {
					var inverseAspectRatio = img.height / img.width;

					if (col0Height <= col1Height) {
						col0.push(project);
						col0Height += inverseAspectRatio;
					} else {
						col1.push(project);
						col1Height += inverseAspectRatio;
					}

					getNextImage(index + 1);
				};
				img.src = project.thumbnail;
			}

			getNextImage(0);
		},

		actions: {
			hideOthers: function hideOthers(activeProjectIndex) {
				this.set('viewSingle', true);
				this.set('activeProjectIndex', activeProjectIndex);
				this.set('activeProject', this.get('projects')[activeProjectIndex]);
			},

			showAll: function showAll() {
				this.set('viewSingle', false);
				this.set('activeProjectIndex', null);
				this.set('activeProject', null);
			}

		}
	});
});
define('portfolio2017/components/project-preview', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Component.extend({
		classNameBindings: [':project-preview', ':grid-item', 'isActiveProject'],
		activeProjectIndex: null,
		index: null,
		/*	
  	data is an object of this format:
  	{
  		title: 'project1',
  		previewDescription: 'mobile app',
  		thumbnail: 'https://unsplash.it/500/200',
  		projectImgs: ['https://unsplash.it/500/600'],
  		description: 'stuff'
  	},
  */
		data: {},

		observeActiveProjectIndex: _ember['default'].observer('activeProjectIndex', function () {
			this.set('isActiveProject', this.get('index') === this.get('activeProjectIndex'));
		}),

		// didInsertElement: function() {
		// 	var hoverColor = this.get('data.hover')
		// 	this.getElementById('hover-overlay').style.backgroundColor = 'hoverColor';
		// },

		didUpdateAttrs: function didUpdateAttrs() {
			var delay = this.get('isActiveProject') ? this.get('animationDuration') : this.get('randomIntervals')[this.get('index')];
			var transition = 'opacity 0.6s ease ' + delay + 's';
			this.element.getElementsByClassName('preview-inner-wrapper')[0].style.transition = transition;
		},

		click: function click() {
			this.sendAction('action', this.get('index'));
		}
	});
});
define('portfolio2017/helpers/app-version', ['exports', 'ember', 'portfolio2017/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _ember, _portfolio2017ConfigEnvironment, _emberCliAppVersionUtilsRegexp) {
  exports.appVersion = appVersion;
  var version = _portfolio2017ConfigEnvironment['default'].APP.version;

  function appVersion(_) {
    var hash = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    if (hash.hideSha) {
      return version.match(_emberCliAppVersionUtilsRegexp.versionRegExp)[0];
    }

    if (hash.hideVersion) {
      return version.match(_emberCliAppVersionUtilsRegexp.shaRegExp)[0];
    }

    return version;
  }

  exports['default'] = _ember['default'].Helper.helper(appVersion);
});
define('portfolio2017/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _emberInflectorLibHelpersPluralize) {
  exports['default'] = _emberInflectorLibHelpersPluralize['default'];
});
define('portfolio2017/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _emberInflectorLibHelpersSingularize) {
  exports['default'] = _emberInflectorLibHelpersSingularize['default'];
});
define('portfolio2017/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'portfolio2017/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _portfolio2017ConfigEnvironment) {
  var _config$APP = _portfolio2017ConfigEnvironment['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(name, version)
  };
});
define('portfolio2017/initializers/container-debug-adapter', ['exports', 'ember-resolver/container-debug-adapter'], function (exports, _emberResolverContainerDebugAdapter) {
  exports['default'] = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _emberResolverContainerDebugAdapter['default']);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('portfolio2017/initializers/data-adapter', ['exports'], function (exports) {
  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `data-adapter` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'data-adapter',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('portfolio2017/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data'], function (exports, _emberDataSetupContainer, _emberData) {

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    ```app/services/store.js
    import DS from 'ember-data';
  
    export default DS.Store.extend({
      adapter: 'custom'
    });
    ```
  
    ```app/controllers/posts.js
    import { Controller } from '@ember/controller';
  
    export default Controller.extend({
      // ...
    });
  
    When the application is initialized, `ApplicationStore` will automatically be
    instantiated, and the instance of `PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */

  exports['default'] = {
    name: 'ember-data',
    initialize: _emberDataSetupContainer['default']
  };
});
define('portfolio2017/initializers/export-application-global', ['exports', 'ember', 'portfolio2017/config/environment'], function (exports, _ember, _portfolio2017ConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_portfolio2017ConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _portfolio2017ConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_portfolio2017ConfigEnvironment['default'].modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('portfolio2017/initializers/injectStore', ['exports'], function (exports) {
  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `injectStore` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'injectStore',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('portfolio2017/initializers/store', ['exports'], function (exports) {
  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `store` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'store',
    after: 'ember-data',
    initialize: function initialize() {}
  };
});
define('portfolio2017/initializers/transforms', ['exports'], function (exports) {
  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `transforms` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'transforms',
    before: 'store',
    initialize: function initialize() {}
  };
});
define("portfolio2017/instance-initializers/ember-data", ["exports", "ember-data/initialize-store-service"], function (exports, _emberDataInitializeStoreService) {
  exports["default"] = {
    name: "ember-data",
    initialize: _emberDataInitializeStoreService["default"]
  };
});
define('portfolio2017/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  exports['default'] = _emberResolver['default'];
});
define('portfolio2017/router', ['exports', 'ember', 'portfolio2017/config/environment'], function (exports, _ember, _portfolio2017ConfigEnvironment) {

	var Router = _ember['default'].Router.extend({
		location: _portfolio2017ConfigEnvironment['default'].locationType,
		rootURL: _portfolio2017ConfigEnvironment['default'].rootURL
	});

	Router.map(function () {
		this.route('index', {
			path: '/'
		});
	});

	exports['default'] = Router;
});
define('portfolio2017/routes/index', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Route.extend({
		model: function model() {
			return {
				viewSingle: false
			};
		}
	});
});
define('portfolio2017/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _emberAjaxServicesAjax) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAjaxServicesAjax['default'];
    }
  });
});
define("portfolio2017/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "Ts1W55Bv", "block": "{\"statements\":[[\"text\",\"\\n\"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "portfolio2017/templates/application.hbs" } });
});
define("portfolio2017/templates/components/nav-header", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "7sJN4KiT", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"nav\"],[\"flush-element\"],[\"text\",\"\\n\\t\"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"http://www.amandalynnwilliams.com/\"],[\"flush-element\"],[\"open-element\",\"img\",[]],[\"static-attr\",\"class\",\"header-title\"],[\"static-attr\",\"src\",\"https://res.cloudinary.com/dxefmitas/image/upload/v1545940683/aw-logo_khyvsk.png\"],[\"flush-element\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n\\n\\t\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"nav-container\"],[\"flush-element\"],[\"text\",\"\\n\\t\\t\"],[\"open-element\",\"a\",[]],[\"static-attr\",\"class\",\"nav-item\"],[\"static-attr\",\"href\",\"https://dribbble.com/beantown_mandy\"],[\"static-attr\",\"target\",\"_blank\"],[\"flush-element\"],[\"text\",\"dribbble\"],[\"close-element\"],[\"text\",\"\\n\\t\\t\"],[\"open-element\",\"a\",[]],[\"static-attr\",\"class\",\"nav-item\"],[\"static-attr\",\"href\",\"https://www.behance.net/amandalynnwilliams\"],[\"static-attr\",\"target\",\"_blank\"],[\"flush-element\"],[\"text\",\"behance\\n\"],[\"text\",\"\\t\\t\"],[\"close-element\"],[\"text\",\"\\n\\t\\t\"],[\"open-element\",\"a\",[]],[\"static-attr\",\"class\",\"nav-item\"],[\"static-attr\",\"href\",\"https://www.linkedin.com/in/amandalynn1231/\"],[\"static-attr\",\"target\",\"_blank\"],[\"flush-element\"],[\"text\",\"linkedin\\n\"],[\"text\",\"\\t\\t\"],[\"close-element\"],[\"text\",\"\\n\\t\\t\"],[\"open-element\",\"a\",[]],[\"static-attr\",\"class\",\"nav-item\"],[\"static-attr\",\"id\",\"text-link\"],[\"static-attr\",\"href\",\"https://res.cloudinary.com/dxefmitas/image/upload/v1545937719/a-williams-resume_qc3243.pdf\"],[\"static-attr\",\"target\",\"_blank\"],[\"flush-element\"],[\"text\",\"resume\"],[\"close-element\"],[\"text\",\"\\n\\t\"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"intro-copy\"],[\"flush-element\"],[\"text\",\"\\n\\t\"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"I’m Amanda Williams, a Product and UX Designer living in Boston, MA.\"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "portfolio2017/templates/components/nav-header.hbs" } });
});
define("portfolio2017/templates/components/project-hero", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "ER6XlTpk", "block": "{\"statements\":[[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"viewAll\"]]],null,11],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"show-all\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"showAll\"]],[\"flush-element\"],[\"text\",\"— back\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"hero-top\"],[\"flush-element\"],[\"text\",\"\\n\\t\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"hero-left\"],[\"static-attr\",\"data-aos\",\"fade-up\"],[\"flush-element\"],[\"text\",\"\\n\\t\\t\"],[\"open-element\",\"img\",[]],[\"static-attr\",\"class\",\"hero-img\"],[\"dynamic-attr\",\"src\",[\"concat\",[[\"unknown\",[\"data\",\"heroImage\"]]]]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\\t\"],[\"close-element\"],[\"text\",\"\\n\\n\\t\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"hero-right\"],[\"flush-element\"],[\"text\",\"\\n\\t\\t\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"hero-data\"],[\"flush-element\"],[\"text\",\"\\n\\t\\t\\t\"],[\"open-element\",\"h1\",[]],[\"static-attr\",\"class\",\"hero-title\"],[\"flush-element\"],[\"append\",[\"unknown\",[\"data\",\"title\"]],false],[\"close-element\"],[\"text\",\"\\n\\t\\t\\t\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"line scroll-reveal\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\\t\\t\\t\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"info-text\"],[\"flush-element\"],[\"text\",\"\\n\\t\\t\\t\\t\"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"data\",\"year\"]],false],[\"close-element\"],[\"text\",\"\\n\"],[\"text\",\"\\t\\t\\t\\t\"],[\"open-element\",\"ul\",[]],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"data\",\"type\"]]],null,10],[\"text\",\"\\t\\t\\t\\t\"],[\"close-element\"],[\"text\",\"\\n\\t\\t\\t\"],[\"close-element\"],[\"text\",\"\\n\"],[\"block\",[\"with\"],[[\"get\",[\"data\",\"projectLink\"]]],null,9],[\"text\",\"\\t\\t\"],[\"close-element\"],[\"text\",\"\\n\\t\"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"style\",\"clear: both;\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"hero-body\"],[\"flush-element\"],[\"text\",\"\\n\\t\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"description\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"with\"],[[\"get\",[\"data\",\"description\"]]],null,7],[\"block\",[\"with\"],[[\"get\",[\"data\",\"description2\"]]],null,6],[\"text\",\"\\t\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"text\",\"\\n\\t\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"style\",\"clear: both;\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\\n\\t\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"hero-gallery\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"with\"],[[\"get\",[\"data\",\"prototype\"]]],null,5],[\"block\",[\"with\"],[[\"get\",[\"data\",\"prototype2\"]]],null,4],[\"block\",[\"with\"],[[\"get\",[\"data\",\"fullImg\"]]],null,3],[\"block\",[\"with\"],[[\"get\",[\"data\",\"projectImgs\"]]],null,2],[\"text\",\"\\t\"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"\\t\\t\\t\\t\\t\\t\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"gallery-image\"],[\"flush-element\"],[\"text\",\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[\"open-element\",\"img\",[]],[\"dynamic-attr\",\"src\",[\"unknown\",[\"image\",\"image\"]],null],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"],[\"text\",\"\\t\\t\\t\\t\\t\\t\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"image\",\"index\"]},{\"statements\":[[\"text\",\"\\t\\t\\t\\t\\t\\t\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"gallery-image\"],[\"flush-element\"],[\"text\",\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[\"open-element\",\"img\",[]],[\"dynamic-attr\",\"src\",[\"unknown\",[\"image\",\"image\"]],null],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"],[\"text\",\"\\t\\t\\t\\t\\t\\t\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"image\",\"index\"]},{\"statements\":[[\"text\",\"\\t\\t\\t\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"not-masonry-grid\"],[\"flush-element\"],[\"text\",\"\\n\\n\\t\\t\\t\\t\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"id\",\"col-1\"],[\"static-attr\",\"class\",\"col\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"evenImages\"]]],null,1],[\"text\",\"\\t\\t\\t\\t\"],[\"close-element\"],[\"text\",\"\\n\\n\\t\\t\\t\\t\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"id\",\"col-2\"],[\"static-attr\",\"class\",\"col\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"oddImages\"]]],null,0],[\"text\",\"\\t\\t\\t\\t\"],[\"close-element\"],[\"text\",\"\\n\\t\\t\\t\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"\\t\\t\\t\"],[\"open-element\",\"img\",[]],[\"static-attr\",\"class\",\"fullImg\"],[\"dynamic-attr\",\"src\",[\"concat\",[[\"unknown\",[\"data\",\"fullImg\"]]]]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"\\t\\t\\t\"],[\"open-element\",\"iframe\",[]],[\"static-attr\",\"class\",\"prototype2\"],[\"dynamic-attr\",\"src\",[\"concat\",[[\"unknown\",[\"data\",\"prototype2\"]]]]],[\"static-attr\",\"frameborder\",\"0\"],[\"static-attr\",\"scrolling\",\"no\"],[\"static-attr\",\"width\",\"418\"],[\"static-attr\",\"height\",\"930\"],[\"static-attr\",\"style\",\"transform: scale(0.6)\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"\\t\\t\\t\"],[\"open-element\",\"iframe\",[]],[\"static-attr\",\"class\",\"prototype\"],[\"dynamic-attr\",\"src\",[\"concat\",[[\"unknown\",[\"data\",\"prototype\"]]]]],[\"static-attr\",\"frameborder\",\"0\"],[\"static-attr\",\"scrolling\",\"no\"],[\"static-attr\",\"height\",\"650\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"\\t\\t\\t\"],[\"open-element\",\"p\",[]],[\"static-attr\",\"class\",\"description2\"],[\"flush-element\"],[\"append\",[\"unknown\",[\"data\",\"description2\"]],false],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"\\t\\t\\t\"],[\"open-element\",\"p\",[]],[\"static-attr\",\"class\",\"description1\"],[\"flush-element\"],[\"append\",[\"unknown\",[\"data\",\"description\"]],false],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"\\t\\t\\t\\t\\t\"],[\"open-element\",\"a\",[]],[\"dynamic-attr\",\"href\",[\"concat\",[[\"unknown\",[\"link\",\"linkUrl\"]]]]],[\"static-attr\",\"class\",\"project-link\"],[\"static-attr\",\"target\",\"_blank\"],[\"flush-element\"],[\"text\",\"\\n\\t\\t\\t\\t\\t\\t\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"link-text\"],[\"flush-element\"],[\"text\",\"\\n\\t\\t\\t\\t\\t\\t\"],[\"append\",[\"unknown\",[\"link\",\"linkText\"]],false],[\"text\",\"\\n\\t\\t\\t\\t\\t\\t\"],[\"close-element\"],[\"text\",\"\\n\\t\\t\\t\\t\\t\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"link\",\"index\"]},{\"statements\":[[\"block\",[\"each\"],[[\"get\",[\"data\",\"projectLink\"]]],null,8]],\"locals\":[]},{\"statements\":[[\"text\",\"\\t\\t\\t\\t\\t\\t\"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"append\",[\"get\",[\"type\"]],false],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"type\",\"index\"]},{\"statements\":[[\"text\",\"\\t\"],[\"append\",[\"helper\",[\"project-list\"],null,[[\"data\",\"action\"],[[\"get\",[\"rawProjects\"]],\"showAll\"]]],false],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "portfolio2017/templates/components/project-hero.hbs" } });
});
define("portfolio2017/templates/components/project-list", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "M/4oaHfe", "block": "{\"statements\":[[\"text\",\"\\n\"],[\"text\",\"\\n\"],[\"block\",[\"with\"],[[\"get\",[\"projects\"]]],null,3],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"activeProject\"]]],null,0]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"\\t\"],[\"append\",[\"helper\",[\"project-hero\"],null,[[\"data\",\"activeProjectIndex\",\"animationDuration\",\"action\"],[[\"get\",[\"activeProject\"]],[\"get\",[\"activeProjectIndex\"]],[\"get\",[\"animationDuration\"]],\"showAll\"]]],false],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"\\t\\t  \\t\\t\"],[\"append\",[\"helper\",[\"project-preview\"],null,[[\"data\",\"index\",\"activeProjectIndex\",\"animationDuration\",\"randomIntervals\",\"action\"],[[\"get\",[\"project\"]],[\"get\",[\"project\",\"index\"]],[\"get\",[\"activeProjectIndex\"]],[\"get\",[\"animationDuration\"]],[\"get\",[\"randomIntervals\"]],\"hideOthers\"]]],false],[\"text\",\"\\n\"]],\"locals\":[\"project\",\"index\"]},{\"statements\":[[\"text\",\"\\t\\t  \\t\\t\"],[\"append\",[\"helper\",[\"project-preview\"],null,[[\"data\",\"index\",\"activeProjectIndex\",\"animationDuration\",\"randomIntervals\",\"action\"],[[\"get\",[\"project\"]],[\"get\",[\"project\",\"index\"]],[\"get\",[\"activeProjectIndex\"]],[\"get\",[\"animationDuration\"]],[\"get\",[\"randomIntervals\"]],\"hideOthers\"]]],false],[\"text\",\"\\n\"]],\"locals\":[\"project\",\"index\"]},{\"statements\":[[\"text\",\"\\t\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"gridz\"],[\"flush-element\"],[\"text\",\"\\n\\t\\t\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"id\",\"project-col-1\"],[\"static-attr\",\"class\",\"col\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"col0Projects\"]]],null,2],[\"text\",\"\\t\\t\"],[\"close-element\"],[\"text\",\"\\n\\n\\t\\t\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"id\",\"project-col-2\"],[\"static-attr\",\"class\",\"col\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"col1Projects\"]]],null,1],[\"text\",\"\\t\\t\"],[\"close-element\"],[\"text\",\"\\n\\t\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "portfolio2017/templates/components/project-list.hbs" } });
});
define("portfolio2017/templates/components/project-preview", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "z6ZFGL9X", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"grid-sizer\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"preview-inner-wrapper\"],[\"flush-element\"],[\"text\",\"\\n\\t\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"hover-overlay\"],[\"dynamic-attr\",\"style\",[\"concat\",[\"background-color:\",[\"unknown\",[\"data\",\"hover\"]],\";\"]]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\\t\"],[\"open-element\",\"img\",[]],[\"static-attr\",\"class\",\"thumbnail\"],[\"dynamic-attr\",\"src\",[\"unknown\",[\"data\",\"thumbnail\"]],null],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\\t\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"text-wrapper\"],[\"flush-element\"],[\"text\",\"\\n\\t\\t\"],[\"open-element\",\"h3\",[]],[\"static-attr\",\"class\",\"preview-title\"],[\"flush-element\"],[\"append\",[\"unknown\",[\"data\",\"title\"]],false],[\"close-element\"],[\"text\",\"\\n\\t\\t\"],[\"open-element\",\"p\",[]],[\"static-attr\",\"class\",\"preview-description\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"data\",\"type\"]]],null,0],[\"text\",\"\\t\\t\"],[\"close-element\"],[\"text\",\"\\n\\t\"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"\\t\\t\\t— \"],[\"append\",[\"get\",[\"type\"]],false],[\"text\",\"\\n\"]],\"locals\":[\"type\",\"index\"]}],\"hasPartials\":false}", "meta": { "moduleName": "portfolio2017/templates/components/project-preview.hbs" } });
});
define("portfolio2017/templates/index", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "A0J/UG63", "block": "{\"statements\":[[\"text\",\"\\n\"],[\"append\",[\"unknown\",[\"nav-header\"]],false],[\"text\",\"\\n\\n\"],[\"text\",\"\\n\"],[\"append\",[\"unknown\",[\"project-list\"]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "portfolio2017/templates/index.hbs" } });
});
/* jshint ignore:start */



/* jshint ignore:end */

/* jshint ignore:start */

define('portfolio2017/config/environment', ['ember'], function(Ember) {
  var prefix = 'portfolio2017';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

/* jshint ignore:end */

/* jshint ignore:start */

if (!runningTests) {
  require("portfolio2017/app")["default"].create({"name":"portfolio2017","version":"0.0.0+9260d81a"});
}

/* jshint ignore:end */
//# sourceMappingURL=portfolio2017.map
