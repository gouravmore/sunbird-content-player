var content_renderer = function() {};
content_renderer.prototype._ = window._;
window.org.ekstep.contentrenderer = new content_renderer();
window.initializePreview = org.ekstep.contentrenderer.initializePreview;
window.setContentData = org.ekstep.contentrenderer.setContent;
window.previewData = {'context': {}, 'config': {} };
org.ekstep.contentrenderer.init = function(){
    org.ekstep.services.init();
   /* org.ekstep.contentrenderer.progressbar(true);*/
    /*org.ekstep.contentrenderer.getMetadata();*/

};
org.ekstep.contentrenderer.init();
org.ekstep.contentrenderer.getcontentMetadata = function(id, cb) {
    ContentService.getContent(id)
        .then(function(data) {
            org.ekstep.contentrenderer.setContentMetadata(data);
            if (!_.isUndefined(cb)) {
                cb(data);
            }
        })
        .catch(function(err) {
            console.info("contentNotAvailable : ", err);
            contentNotAvailable(err);
        });
};
org.ekstep.contentrenderer.setContentMetadata = function(meta){

};
org.ekstep.contentrenderer.initializePreview = function(configuration) {
    if (_.isUndefined(configuration.context)) {
        configuration.context = {};
    }
    if (_.isUndefined(configuration.config)) {
        configuration.config = {};
    }
    if (_.isUndefined(configuration.context.contentId)) {
        configuration.context.contentId = getUrlParameter("id")
    }
    localStorageGC.clear();
    AppConfig = _.extend(AppConfig, configuration.config)
    window.previewData = configuration;
    configuration.config.repos && configuration.config.plugins && EkstepRendererAPI.dispatchEvent("repo:intialize");
    EkstepRendererAPI.dispatchEvent("telemetryPlugin:intialize");
    addWindowUnloadEvent();
    EkstepRendererAPI.dispatchEvent("event:loadContent");
};
org.ekstep.contentrenderer.setContentData = function(metadata, data, configuration) {
    if (_.isUndefined(metadata) || _.isNull(metadata)) {
        content.metadata = defaultMetadata
    } else {
        content.metadata = metadata;
    }
    if (!_.isUndefined(data)) {
        content.body = data;
    }
    _.map(configuration, function(val, key) {
        config[key] = val;
    });
    if (!config.showHTMLPages) {
        config.showEndPage = false;
    }
    localStorageGC.clear();
    if (data) {
        var object = {
            'config': configuration,
            'data': data,
            'metadata': metadata
        }
    }
    window.initializePreview(object);
};

org.ekstep.contentrenderer.initPlugins = function(gamePath) {
    var pluginsPath = undefined;
    // @ plugin:error event is dispatching from the plugin-framework 
    // If any of the plugin is failed to load OR invoke then plugin:error event will trigger
    if (!EkstepRendererAPI.hasEventListener('plugin:error')) {
        EkstepRendererAPI.addEventListener('plugin:error', this.logErrorEventTelemetry, this);
    }
    pluginsPath = isCoreplugin ? AppConfig.CORE_PLUGINSPATH : (isbrowserpreview ? AppConfig.PREVIEW_PLUGINSPATH : AppConfig.DEVICE_PLUGINSPATH)
    var pluginRepo = gamePath + pluginsPath;
    var pfConfig = {
        env: "renderer",
        async: async,
        pluginRepo: pluginRepo,
        repos: [org.ekstep.pluginframework.publishedRepo]
    };
    org.ekstep.pluginframework.initialize(pfConfig);
};
org.ekstep.contentrenderer.loadPlugins = function(pluginManifest, manifestMedia, cb) {
    var pluginObj = []
    if (!Array.isArray(pluginManifest)) {
        pluginObj.push(pluginManifest);
        pluginManifest = pluginObj;
    }
    _.each(pluginManifest, function(p) {
        p.ver = parseFloat(p.ver).toFixed(1);
    });
    org.ekstep.pluginframework.pluginManager.loadAllPlugins(pluginManifest, manifestMedia, function() {
        console.info("Framework Loaded the plugins");
        if (typeof PluginManager != 'undefined') {
            PluginManager.pluginMap = org.ekstep.pluginframework.pluginManager.plugins;
        }
        if (cb) cb();
    });
};
org.ekstep.contentrenderer.registerPlguin = function(id, plugin) {
    org.ekstep.pluginframework.pluginManager._registerPlugin(id, undefined, plugin);
    if (typeof createjs !== "undefined")
        createjs.EventDispatcher.initialize(plugin.prototype);
};
org.ekstep.contentrenderer.progressbar = function(switcher) {
    if (switcher) {
        jQuery("#progressBar").width(0);
        jQuery('#loading').show();
        var elem = document.getElementById("progressBar");
        var width =20;
        var id = setInterval(function() {
            if (width >= 100) {
                clearInterval(id);
            } else {
                width++;
                if (elem && elem.style)
                    elem.style.width = width + '%';
                jQuery('#progressCount').text(width + '%');
            }
        }, 0.7);
    } else {
        jQuery('#loading').hide();
    }
};
