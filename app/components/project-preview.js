import Ember from 'ember';

export default Ember.Component.extend({
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

	observeActiveProjectIndex: Ember.observer('activeProjectIndex', function () {
		this.set('isActiveProject', this.get('index') === this.get('activeProjectIndex'));
	}),

	didUpdateAttrs: function() {
		var delay = this.get('isActiveProject') ? this.get('animationDuration') : this.get('randomIntervals')[this.get('index')];
		var transition = 'opacity 0.6s ease ' + delay + 's';
		this.element.getElementsByClassName('preview-inner-wrapper')[0].style.transition = transition;
	},

	click: function() {
		this.sendAction('action', this.get('index'));
	}
});
