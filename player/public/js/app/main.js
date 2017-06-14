var packageName = "org.ekstep.quiz.app",
    version = AppConfig.version,
    packageNameDelhi = "org.ekstep.delhi.curriculum",
    geniePackageName = "org.ekstep.genieservices",
    currentUser = {},
    userList = [],

    CONTENT_MIMETYPES = ["application/vnd.ekstep.ecml-archive", "application/vnd.ekstep.html-archive"],
    COLLECTION_MIMETYPE = "application/vnd.ekstep.content-collection",
    ANDROID_PKG_MIMETYPE = "application/vnd.android.package-archive"

// Need to modify the scope level hasStageSet
// hasStageSet = true

function startProgressBar(w, setInter) {
    jQuery("#progressBar").width(0);
    jQuery('#loading').show();
    var elem = document.getElementById("progressBar");
    var width = w ? w : 20;
    var id = setInterval(frame, setInter ? setInter : 0.7);

    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width++;
            if (elem && elem.style)
                elem.style.width = width + '%';
            jQuery('#progressCount').text(width + '%');
        }
    }
}

function removeRecordingFiles(path) {
    _.each(RecorderManager.mediaFiles, function(path) {
        $cordovaFile.removeFile(cordova.file.dataDirectory, path)
            .then(function(success) {
                console.log("success : ", success);
            }, function(error) {
                console.log("err : ", error);
            });
    })
}

function createCustomEvent(evtName, data) {
    var evt = new CustomEvent(evtName, data);
    // window.dispatchEvent(evt);
}

function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;
    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
}

function backbuttonPressed(pageId) {
    var data = (Renderer.running || HTMLRenderer.running) ? {
        type: 'EXIT_CONTENT',
        stageId: Renderer.theme ? Renderer.theme._currentStage : ""
    } : {
        type: 'EXIT_APP'
    };
    TelemetryService.interact('END', 'DEVICE_BACK_BTN', 'EXIT', data);
    if (pageId == "coverpage") {
        TelemetryService.end();
    }
    AudioManager.stopAll();
}

// TODO: After integration with Genie, onclick of exit we should go to previous Activity of the Genie.
// So, change exitApp to do the same.
function exitApp(pageId) {
    TelemetryService.interact("TOUCH", "gc_genie", "TOUCH", {
        stageId: ((pageId == "renderer" && GlobalContext.config.appInfo.mimeType != "application/vnd.ekstep.content-collection" ? Renderer.theme._currentStage : pageId))
    });
    try {
        TelemetryService.exit();
    } catch (err) {
        console.error('End telemetry error:', err.message);
    }
    localStorageGC.clear();
    localStorageGC = {};
    genieservice.endGenieCanvas();
}

function startApp(app) {
    if (!app) app = geniePackageName;
    if (!_.isUndefined(navigator) && !_.isUndefined(navigator.startApp)) {
        navigator.startApp.start(app, function(message) {
            exitApp();
            TelemetryService.exit(packageName, version)
        }, function(error) {
            if (app == geniePackageName)
                showToaster('error', "Unable to start Genie App.");
            else {
                var bool = confirm('App not found. Do you want to search on PlayStore?');
                if (bool) cordova.plugins.market.open(app);
            }
        });
    }
}

function contentNotAvailable(error) {
    EkstepRendererAPI.logErrorEvent(error,{'type':'content','action':'play','severity':'fatal'});
    showToaster('error', AppMessages.NO_CONTENT_FOUND);
    exitApp();
}

function checkStage(showalert) {
    if (GlobalContext.config.appInfo.mimeType == 'application/vnd.ekstep.content-collection') {
        if (showalert == "showAlert") {
            showToaster("error", "No stage found, redirecting to collection list page")
        }
        exitApp();
    } else {
        if (showalert == "showAlert") {
            showToaster("error", "No Stage found, existing canvas")
        }
        exitApp();
    }
    Renderer.running = false;
    return
}

function objectAssign() {
    Object.assign = function(target) {
        if (target === undefined || target === null) {
            throw new TypeError('Cannot convert undefined or null to object');
        }
        var output = Object(target);
        _.each(arguments, function(argument) {
            if (argument !== undefined && argument !== null) {
                for (var nextKey in argument) {
                    if (argument.hasOwnProperty(nextKey)) {
                        output[nextKey] = argument[nextKey];
                    }
                }
            }
        })
        return output;
    }
}

// GC - GenieCanvas
var localStorageGC = {
    name: 'canvasLS',
    isHtmlContent: false,
    isCollection: false,
    content: {},
    collection: {},
    telemetryService: {},
    setItem: function(param, data) {
        if (data) {
            this[param] = _.isString(data) ? data : JSON.stringify(data);
        }
    },
    getItem: function(param) {
        if (param) {
            var paramVal = this[param];
            paramVal = _.isEmpty(paramVal) ? {} : JSON.parse(paramVal);
            return paramVal;
        } else {
            return;
        }
    },
    removeItem: function(param) {
        this[param] = {};
        //localStorage.removeItem(canvasLS.param);
    },
    save: function() {
        // Storing into localStorage
        var thisData = {};
        thisData.content = this.content;
        thisData.collection = this.collection;
        thisData.telemetryService = this.telemetryService;
        thisData.isCollection = this.isCollection;
        thisData.isHtmlContent = this.isHtmlContent;

        localStorage.setItem(this.name, JSON.stringify(thisData));
    },
    clear: function() {
        localStorage.removeItem(this.name);
    },
    update: function() {
        //gettting from localstorage and updating all its values
        var lsData = localStorage.getItem(this.name);
        if (lsData) {
            lsData = JSON.parse(lsData);
            var lsKeys = _.keys(lsData);
            var instance = this;
            _.each(lsKeys, function(key) {
                instance.setItem(key, lsData[key]);
            })
        }
    }
}

function startTelemetry(id, ver, cb) {
    localStorageGC.removeItem("telemetryService");
    var correlationData = [];
    if (!_.isEmpty(GlobalContext.game.contentExtras) && !_.isUndefined(GlobalContext.game.contentExtras)) {
        GlobalContext.game.contentExtras = ("string" == typeof(GlobalContext.game.contentExtras)) ? JSON.parse(GlobalContext.game.contentExtras) : GlobalContext.game.contentExtras;
        for (var parentTree = '', contentExtrasLength = GlobalContext.game.contentExtras.length - 1, i = 0; i < contentExtrasLength && (parentTree += GlobalContext.game.contentExtras[i].identifier, i != contentExtrasLength - 1); i += 1) parentTree += "/";
        correlationData = [{
            "id": parentTree,
            "type": GlobalContext.game.contentExtras[0].contentType
        }];
    }
    correlationData.push({"id": CryptoJS.MD5(Math.random().toString()).toString(), "type": "ContentSession"});
    TelemetryService.init(GlobalContext.game, GlobalContext.user, correlationData).then(function(response) {
        var data = {};
        data.mode = "undefined" != typeof cordova ? 'mobile' : EkstepRendererAPI.getPreviewData().context.mode || 'preview';
        TelemetryService.start(id, ver, data);
        if (!_.isUndefined(TelemetryService.instance)) {
            var tsObj = _.clone(TelemetryService);
            tsObj._start = JSON.stringify(tsObj.instance._start);
            tsObj._end = JSON.stringify(tsObj.instance._end);
            localStorageGC.setItem("telemetryService", tsObj);
            localStorageGC.save();
        }
        if (!_.isUndefined(cb) && response == true) {
            cb();
        }
    }).catch(function(error) {
        EkstepRendererAPI.logErrorEvent(error, {'type':'system','action':'play','severity':'fatal'});
        console.warn('TelemetryService init failed');
        showToaster('error', 'TelemetryService init failed.');
        exitApp();
    });
}

function getAsseturl(content) {
    var content_type = content.mimeType == 'application/vnd.ekstep.html-archive' ? "html/" : "ecml/";
    var path = window.location.origin + AppConfig.S3_CONTENT_HOST + content_type;
    path += content.status == "Live" ? content.identifier + "-latest" : content.identifier + "-snapshot";
    return path;

}
//ref: http://www.jqueryscript.net/other/Highly-Customizable-jQuery-Toast-Message-Plugin-Toastr.html
function showToaster(toastType, message, customOptions) {
    var defaultOptions = {"positionClass": "toast-top-right", "preventDuplicates": true, "tapToDismiss": true, "hideDuration": "1000", "timeOut": "4000", };
    toastr.options = _.extend(defaultOptions, customOptions);
    if (toastType === 'warning') {
        toastr.warning(message);
    }
    if (toastType === 'error') {
        toastr.error(message);
    }
    if (toastType === 'info') {
        toastr.info(message);
    }
}

function addWindowUnloadEvent() {
    // TODO: Use Iframe unload event
    window.onbeforeunload = function(e) {
        e = e || window.event;
        var y = e.pageY || e.clientY;
        !y && EkstepRendererAPI.getTelemetryService().interrupt('OTHER', EkstepRendererAPI.getCurrentStageId()); EkstepRendererAPI.getTelemetryService().end();
    }
    if (EkstepRendererAPI.getPreviewData().context.mode === 'edit') {
        parent.document.getElementsByTagName('iframe')[0].contentWindow.onunload = function() {
            EkstepRendererAPI.getTelemetryService().interrupt('OTHER', EkstepRendererAPI.getCurrentStageId());
            EkstepRendererAPI.getTelemetryService().end();
        }
    }
}
