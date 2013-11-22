define(['sembr', 'sembr.controller', 'backbone', 'backbone.collectionbinder','marionette', 
	'trackr/collections/places',
	'trackr/views/layout', 'trackr/views/dashboard/dashboard', 'trackr/views/places/treeview',
	"components/loader/loader"],
function (sembr, Controller, Backbone, CB, Marionette, 
	PlacesCollection,
	Layout, DashboardView, TreeView,
	LoaderView) {
	var DashboardController = Controller.extend({

		initialize:function (options) {
				this.layout = new Layout();
				this.loaderView = new LoaderView();
		},

		beforeModuleRoute: function(){
			sembr.log('Controller ID', this.id);
			sembr.base.setContent( this.layout );
			//this.layout.sidebar.show( new Sidebar({collection: this.collection}) );
		},

		dashboard: function(){
			this.layout.main.show( this.loaderView );
			new PlacesCollection().fetch().then(function(places){
				sembr.log('Places...', places);
				this.layout.main.show( new TreeView({collection:places}) );
			}.bind(this));
		}


	});

	return DashboardController;
});