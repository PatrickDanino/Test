/**
 * Ad-Verification.js - Readable Version
 * 
 * This script integrates with the Open Measurement SDK (OMSDK) to provide viewability 
 * measurement and verification services for video ads. It registers with OMSDK to receive 
 * ad session events, measures viewability according to industry standards, and can inject 
 * additional partner verification scripts when needed.
 */

(function(global) {
    'use strict';

    // Module cache for webpack-style module loading
    const moduleCache = {};

    /**
     * Module loader function - similar to webpack's implementation
     */
    function requireModule(moduleId) {
        // Check if module is already in cache
        if (moduleCache[moduleId]) {
            return moduleCache[moduleId].exports;
        }
        
        // Create a new module and put it into cache
        const module = moduleCache[moduleId] = {
            id: moduleId,
            loaded: false,
            exports: {}
        };
        
        // Execute the module function
        global[moduleId].call(module.exports, module, module.exports, requireModule);
        
        // Flag the module as loaded
        module.loaded = true;
        
        // Return the exports of the module
        return module.exports;
    }

    // Setup webpack-style module system
    requireModule.m = global;
    requireModule.c = moduleCache;
    
    // Define getter function for module exports
    requireModule.d = function(exports, name, getter) {
        if (!requireModule.o(exports, name)) {
            Object.defineProperty(exports, name, { 
                enumerable: true, 
                get: getter 
            });
        }
    };
    
    // Mark exports as ES module
    requireModule.r = function(exports) {
        if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
            Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
        }
        Object.defineProperty(exports, '__esModule', { value: true });
    };
    
    // Create a fake namespace object for non-harmony modules
    requireModule.t = function(value, mode) {
        if (mode & 1) value = requireModule(value);
        if (mode & 8) return value;
        if (mode & 4 && typeof value === 'object' && value && value.__esModule) return value;
        
        const ns = Object.create(null);
        requireModule.r(ns);
        Object.defineProperty(ns, 'default', { enumerable: true, value: value });
        
        if (mode & 2 && typeof value != 'string') {
            for (const key in value) {
                requireModule.d(ns, key, function(k) { 
                    return value[k]; 
                }.bind(null, key));
            }
        }
        return ns;
    };
    
    // Get default export for compatibility with non-harmony modules
    requireModule.n = function(module) {
        const getter = module && module.__esModule ?
            function getDefault() { return module['default']; } :
            function getModuleExports() { return module; };
            
        requireModule.d(getter, 'a', getter);
        return getter;
    };
    
    // Check if property exists on object
    requireModule.o = function(object, property) { 
        return Object.prototype.hasOwnProperty.call(object, property); 
    };
    
    // Define public path for loading chunks
    requireModule.p = "";
    
    // Load entry module and return exports
    return requireModule(requireModule.s = 18);
})([
    /* 0 */
    function(module, exports) {
        /**
         * Helper function to define a property on an object
         */
        module.exports = function defineProperty(obj, key, value) {
            if (key in obj) {
                Object.defineProperty(obj, key, {
                    value: value,
                    enumerable: true,
                    configurable: true,
                    writable: true
                });
            } else {
                obj[key] = value;
            }
            return obj;
        };
    },
    /* 1 */
    /* 2 */
    function(module, exports) {
        /**
         * Determines the type of a value
         */
        function typeOf(obj) {
            if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
                module.exports = typeOf = function(obj) {
                    return typeof obj;
                };
            } else {
                module.exports = typeOf = function(obj) {
                    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
                };
            }
            return typeOf(obj);
        }
        module.exports = typeOf;
    },
    /* 3 */
    function(module, exports, __webpack_require__) {
        const arrayWithoutHoles = __webpack_require__(8);
        const iterableToArrayLimit = __webpack_require__(9);
        const unsupportedIterableToArray = __webpack_require__(10);
        const nonIterableRest = __webpack_require__(12);

        /**
         * Array destructuring helper
         */
        module.exports = function _slicedToArray(arr, i) {
            return arrayWithoutHoles(arr) || 
                   iterableToArrayLimit(arr, i) || 
                   unsupportedIterableToArray(arr, i) || 
                   nonIterableRest();
        };
    },
    /* 4 */
    /* 5 */
    function(module, exports) {
        // Get global object safely
        let globalThis;
        globalThis = (function() { return this; })();
        
        try {
            globalThis = globalThis || new Function("return this")();
        } catch (e) {
            if (typeof window === "object") {
                globalThis = window;
            }
        }
        
        module.exports = globalThis;
    },
    /* 6 */
    function(module, exports, __webpack_require__) {
        // Import OMID SDK
        (function(global) {
            // OMID SDK implementation
            // This is the Open Measurement SDK that provides viewability measurement
            // capabilities according to IAB standards
            
            // The full OMID SDK code is included here but has been omitted for readability
            // It provides the verification client API for registering with the OMSDK service
        })(typeof global === "undefined" ? this : global);
    },
    /* 7-17 - Various helper modules */
    /* 18 - Main module */
    function(module, exports, __webpack_require__) {
        "use strict";
        __webpack_require__.r(exports);
        
        const typeOf = __webpack_require__(2);
        const defineProperty = __webpack_require__(0);
        const slicedToArray = __webpack_require__(3);
        const omidClient = __webpack_require__(6);

        /**
         * Helper function to extend objects with properties
         */
        function extendObject(target) {
            for (let i = 1; i < arguments.length; i++) {
                const source = arguments[i] != null ? arguments[i] : {};
                
                if (i % 2) {
                    getOwnPropertyNames(Object(source), true).forEach(function(key) {
                        defineProperty(target, key, source[key]);
                    });
                } else if (Object.getOwnPropertyDescriptors) {
                    Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
                } else {
                    getOwnPropertyNames(Object(source)).forEach(function(key) {
                        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
                    });
                }
            }
            return target;
        }

        /**
         * Helper function to get own property names
         */
        function getOwnPropertyNames(object, enumerableOnly) {
            const keys = Object.keys(object);
            
            if (enumerableOnly) {
                return keys.filter(function(key) {
                    return Object.getOwnPropertyDescriptor(object, key).enumerable;
                });
            }
            
            return keys;
        }

        /**
         * Iterator helper function
         */
        function createIterator(collection) {
            if (typeof Symbol === "undefined" || collection[Symbol.iterator] == null) {
                if (Array.isArray(collection) || (collection = unsupportedIterableToArray(collection))) {
                    let i = 0;
                    const iteratorFn = function() {};
                    
                    return {
                        s: iteratorFn,
                        n: function() {
                            if (i >= collection.length) {
                                return { done: true };
                            }
                            return { done: false, value: collection[i++] };
                        },
                        e: function(error) { throw error; },
                        f: iteratorFn
                    };
                }
                
                throw new TypeError("Invalid attempt to iterate non-iterable instance");
            }
            
            let iterator, iteratorMethod, step, iteratorResult = true, error, normalCompletion = true;
            
            return {
                s: function() { iterator = collection[Symbol.iterator](); },
                n: function() {
                    step = iterator.next();
                    iteratorResult = step.done;
                    return step;
                },
                e: function(e) { error = e; iteratorResult = false; },
                f: function() {
                    try {
                        if (!iteratorResult && iterator.return != null) {
                            iterator.return();
                        }
                    } finally {
                        if (error) throw error;
                    }
                }
            };
        }

        /**
         * Helper function for unsupported iterable to array
         */
        function unsupportedIterableToArray(o, minLen) {
            if (!o) return;
            if (typeof o === "string") return arrayLikeToArray(o, minLen);
            
            const n = Object.prototype.toString.call(o).slice(8, -1);
            if (n === "Object" && o.constructor) n = o.constructor.name;
            
            if (n === "Map" || n === "Set") return Array.from(n);
            if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) {
                return arrayLikeToArray(o, minLen);
            }
        }

        /**
         * Helper function to convert array-like to array
         */
        function arrayLikeToArray(arr, len) {
            if (len == null || len > arr.length) len = arr.length;
            
            const result = new Array(len);
            for (let i = 0; i < len; i++) {
                result[i] = arr[i];
            }
            
            return result;
        }

        // Constants for Twitch domains and script URLs
        const TWITCH_DOMAIN = "www.twitch.tv/r/ts";
        const TWITCH_SOURCE_IDS = ["650", "651"];
        const VUE_SCRIPT_URL = "https://ts.amazon-adsystem.com/tg/resources/vue/omsdk-video/csmv4.js";
        const FORENSICS_SCRIPT_URL = "https://ts.amazon-adsystem.com/tg/resources/tq-forensics/adforensics_csmcollection.js";
        const FORENSICS_NTD_SCRIPT_URL = "https://ts.amazon-adsystem.com/tg/resources/tq-forensics/adforensics_basicv1.js";

        /**
         * Parse script parameters from URL
         */
        function parseScriptParameters(document) {
            try {
                const urlParser = document.createElement("a");
                urlParser.href = document.currentScript.src;
                
                const params = {};
                const queryString = urlParser.search.slice(1);
                
                if (queryString) {
                    const queryParams = createIterator(queryString.split("&"));
                    
                    try {
                        for (queryParams.s(); !(step = queryParams.n()).done;) {
                            const paramPair = step.value.split("=");
                            const paramParts = slicedToArray(paramPair, 2);
                            const key = paramParts[0];
                            const value = paramParts[1];
                            
                            params[decodeURIComponent(key)] = decodeURIComponent(value);
                        }
                    } catch (error) {
                        queryParams.e(error);
                    } finally {
                        queryParams.f();
                    }
                }
                
                // Combine parameters from p and s URL parameters
                return extendObject(
                    {},
                    params.p ? JSON.parse(decodeURIComponent(params.p).replaceAll("\\", "")) : null,
                    {},
                    params.s ? JSON.parse(decodeURIComponent(params.s).replaceAll("\\", "")) : null
                );
            } catch (error) {
                // Return null if parameters can't be parsed
                return null;
            }
        }

        /**
         * Construct URL with query parameters
         */
        function constructUrl(baseUrl, params) {
            const url = baseUrl.endsWith("/") ? baseUrl.slice(0, -1) : baseUrl;
            let queryString = "";
            
            for (const key in params) {
                if (Object.prototype.hasOwnProperty.call(params, key)) {
                    const encodedKey = encodeURIComponent(key);
                    const value = params[key];
                    const encodedValue = encodeURIComponent(
                        typeof value === "object" ? JSON.stringify(value) : value
                    );
                    
                    queryString += (queryString ? "&" : "") + encodedKey + "=" + encodedValue;
                }
            }
            
            return url + "?" + queryString;
        }

        /**
         * Inject script or iframe into document
         */
        function injectElement(document, elementType, url) {
            const doc = document;
            
            if (elementType === "script") {
                const scriptElement = doc.createElement("script");
                scriptElement.src = url;
                
                if (!doc.body) {
                    doc.body = doc.createElement("body");
                }
                
                doc.body.appendChild(scriptElement);
            } else if (elementType === "iframe") {
                const iframeElement = doc.createElement("iframe");
                iframeElement.src = url;
                iframeElement.style.display = "none";
                
                if (!doc.body) {
                    doc.body = doc.createElement("body");
                }
                
                doc.body.appendChild(iframeElement);
            }
        }

        /**
         * Get scripts to inject based on enabled partners
         */
        function getScriptsToInject(params) {
            const enabledPartners = params.ep;
            const scripts = [];
            
            // Add VUE script if enabled
            if (enabledPartners.includes("vue")) {
                const vueScriptUrl = TWITCH_SOURCE_IDS.indexOf(params.sourceid) !== -1 
                    ? VUE_SCRIPT_URL.replace("ts.amazon-adsystem.com/tg/resources", TWITCH_DOMAIN) 
                    : VUE_SCRIPT_URL;
                    
                scripts.push(["script", vueScriptUrl]);
            }
            
            // Add Forensics script if enabled
            if (enabledPartners.includes("forensics")) {
                const forensicsScriptUrl = TWITCH_SOURCE_IDS.indexOf(params.sourceid) !== -1 
                    ? FORENSICS_SCRIPT_URL.replace("ts.amazon-adsystem.com/tg/resources", TWITCH_DOMAIN) 
                    : FORENSICS_SCRIPT_URL;
                    
                scripts.push(["script", forensicsScriptUrl]);
            }
            
            // Add Forensics NTD script if enabled
            if (enabledPartners.includes("forensics-ntd")) {
                const forensicsNtdScriptUrl = TWITCH_SOURCE_IDS.indexOf(params.sourceid) !== -1 
                    ? FORENSICS_NTD_SCRIPT_URL.replace("ts.amazon-adsystem.com/tg/resources", TWITCH_DOMAIN) 
                    : FORENSICS_NTD_SCRIPT_URL;
                    
                scripts.push(["script", forensicsNtdScriptUrl]);
            }
            
            // Add PAA iframe if enabled
            if (enabledPartners.includes("paa")) {
                scripts.push(["iframe", "https://s2.paa-reporting-advertising.amazon/paa/rf_module_registration.html"]);
            }
            
            // Add ARA script if enabled
            if (enabledPartners.includes("ara")) {
                scripts.push(["script", "https://d37unsldgykj8z.cloudfront.net/ara.js"]);
            }
            
            return scripts;
        }

        /**
         * Main initialization function
         */
        (function initialize() {
            let document, params;
            
            try {
                // Get document and parse parameters
                document = typeof window !== "undefined" && window ? window.document : document;
                params = document && parseScriptParameters(document);
            } catch (error) {
                // Handle initialization errors
            }
            
            // If we have valid parameters with enabled partners
            if (params && typeof params === "object" && Object.prototype.hasOwnProperty.call(params, "ep") && params.ep.length > 0) {
                // Inject scripts for enabled partners
                const scriptsToInject = createIterator(getScriptsToInject(params));
                
                try {
                    for (scriptsToInject.s(); !(step = scriptsToInject.n()).done;) {
                        const scriptInfo = slicedToArray(step.value, 2);
                        const elementType = scriptInfo[0];
                        const scriptUrl = scriptInfo[1];
                        
                        injectElement(document, elementType, constructUrl(scriptUrl, params));
                    }
                } catch (error) {
                    scriptsToInject.e(error);
                } finally {
                    scriptsToInject.f();
                }
            } else {
                // If no parameters, initialize OMID verification client
                const verificationClient = new omidClient.OmidVerificationClient();
                
                // Register session observer with OMID
                verificationClient.registerSessionObserver(function(event) {
                    return handleSessionEvent(event, verificationClient);
                }, "amazon.com-omid");
            }
            
            /**
             * Handle OMID session events
             */
            function handleSessionEvent(event, client) {
                // Process session start events
                if (event.type === "sessionStart" && 
                    event.data && 
                    typeof event.data === "object" && 
                    event.data.verificationParameters) {
                    try {
                        // Parse verification parameters
                        const verificationParams = JSON.parse(event.data.verificationParameters);
                        
                        // Get scripts to inject based on enabled partners
                        const scriptsToInject = createIterator(getScriptsToInject(verificationParams));
                        
                        try {
                            for (scriptsToInject.s(); !(step = scriptsToInject.n()).done;) {
                                const scriptInfo = slicedToArray(step.value, 2);
                                const scriptUrl = scriptInfo[1];
                                
                                // Inject JavaScript resources
                                client.injectJavaScriptResource(scriptUrl);
                            }
                        } catch (error) {
                            scriptsToInject.e(error);
                        } finally {
                            scriptsToInject.f();
                        }
                    } catch (error) {
                        // Handle session event errors
                    }
                }
            }
        })();
    }
]);
