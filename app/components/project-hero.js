import Ember from 'ember';

export default Ember.Component.extend({
	classNameBindings: [':project-hero', 'isActiveProject', ':sr'],

	evenImages: Ember.computed(function () {
		return this.get('data.projectImgs').filter(function (image, index) {
			return index % 2 === 0;
		});
	}),

	oddImages: Ember.computed(function () {
		return this.get('data.projectImgs').filter(function (image, index) {
			return index % 2 === 1;
		});
	}),

	didInsertElement: function() {
		window.sr = ScrollReveal({ 
			reset: true,
			vFactor: 0.60 
		});

		sr.reveal('li');
		sr.reveal('h1');
		sr.reveal('.hero-img');
		sr.reveal('.gallery-image');

		requestAnimationFrame(function () {
			var el = this.get('element');
			el.style.transition = 'opacity 0.6s ease ' + (this.get('animationDuration') + 0.5) + 's';
			el.classList.add('show');
		}.bind(this));
	}
});
