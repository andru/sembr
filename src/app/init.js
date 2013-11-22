/**
 * Sembr application initializer.  This AMD function sets up the core 
 * application dependencies and defines a mean to start Sembr with an
 * object hash of options.
 *  
 * This initialization design allows us to require the sembr application
 * object as a dependency for all modules without having a circular 
 * dependency problem. 
 *
 * Note that the design of Marionette.Module makes it difficult to simply
 * extend it to add custom functionality. To get around that we monkey patch
 * it, which means it's simplest to load it upfront.
 *
 * Returns an init function which, when called, starts the application.
 */
define(['underscore', 
        'sembr', 'sembr.module',
        'sembr.base', 'sembr.default', 'sembr.trackr'], 
function(_, 
        sembr, monkey_patch_module,
        layoutModule, defaultModule, trackrModule){
	
    function init(options){
        var envDefaults = {
            development:{
                log: true,
                global: true
            },
            production:{
                log: false,
                global: false
            }
        }

        options = _(options || {}).defaults({
            environment: 'production'
        });
        options = _(options).defaults(envDefaults[options.environment]);

        //try{
            sembr.start(options);
        //}catch(err){
          //  console.error("Fail.", err);
        //}

        if(options.global && window){
            window.sembr = sembr;
        }

        return sembr;
    }

    return init;
});

window.PUTON_HOST = 'http://sembr.dev:8001/libs/puton/';