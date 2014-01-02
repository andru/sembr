	define(['backbone', 'sembr.modulerouter'], 
function(Backbone, ModuleRouter) {
   return ModuleRouter.extend({
			//'index' must be a method in AppRouter's controller

			urlPrefix: 'track',

			moduleRoutes: {
				'': 'Dashboard.dashboard',
			  'plantings': 'Plantings.list',
			  'planting/new': 'Plantings.add',
			  'planting/:planting_id': 'Plantings.show',

			  'places': 'Places.dashboard',

			  'record': 'Record.record',
			}

   });
});