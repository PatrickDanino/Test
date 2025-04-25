/**
 * Ad-VUE.js - OMSDK Testing Script
 * 
 * This script simulates the OMSDK implementation for video ads
 * based on the provided URL parameters.
 */

(function() {
  // Configuration parameters extracted from the URL
  const config = {
    // Source information
    sourceid: "204",
    expname: "UNITAG_VIDEO_ROLLOUT_5486",
    expbucket: "T",
    sourcetype: "ono",
    traffictype: "app",
    msrTechnique: "omsdk",
    mediatype: "video",
    
    // Tracking URLs
    impressionUrl: "https://aax-us-pdx.amazon-adsystem.com/x/px/JCQnRHt6Dd6pliJNcw3LiK4AAAGWbggB8wYAAADMBABvbm9fdHhuX2JpZDEgICBvbm9fdHhuX2ltcDEgICBRw_0y/?t=${AAX_TYPE}&p=${AAX_PAYLOAD}&bx=v1_CGrnR2Ao_-qXwza6CtoTxHP2fXxnCZ8QkK59nmbSq5OLI_82mq0iNMwX5QNvkBy53K8dh41YpF7L7jGNahhfHUcb_0_jNqiJThBWOhotGgr_Qtsj7WQpwqo0DxS-YLz5ENPdZ06g7ZhIRh55ygqDFhocZhpWUZknVA8_CPFnBkjSn7bo0ApiBwLubsexaOb4anMAbcSOz9dRRnJsPJpJZPsDi8yvj5wnCl_JM75u3QoWpIJu27ukQw0zm0qkyVxJHmb1NOzDuE51gXJDB9JWShK-I0iSlArrMdGQ3LrJcIkiHG398Im5-hq9RCXFP7D6lt0n0stCcdX-taeBUsKdJ-RO_u4reAAPlZIpgvpOLMIB2lNFX3eZtC-05LZfel7jCiFqg0aEwG40uGn-GauMeHx6UbP-nIhXROofHk5clCxYKPYPiyJwJzQ_kfMfHglxYOPIJ4i__7H3D-V4H0rrsJMueWKzqG-eQ3lYV6Yq9q7QOHpylb6i_hHXSExkLrPmwLEck0kfEuMFlxLbgg_Ik2KDXXocIgtVc2_YAmf5Yej-eyn2N3UUyH4ZWfadO_MAV50J9pwQ42xdsLUBGA",
    auditUrl: "https://aes.us-west.3px.axp.amazon-adsystem.com/x/px?t=${AAX_TYPE}&bi=v1_CGrnR2Ao_-qXwza6CtoTxHP2fXxnCZ8QkK59nmbSq5OLI_82mq0iNMwX5QNvkBy53K8dh41YpF7L7jGNahhfHUcb_0_jNqiJThBWOhotGgr_Qtsj7WQpwqo0DxS-YLz5ENPdZ06g7ZhIRh55ygqDFhocZhpWUZknVA8_CPFnBkjSn7bo0ApiBwLubsexaOb4anMAbcSOz9dRRnJsPJpJZPsDi8yvj5wnCl_JM75u3QoWpIJu27ukQw0zm0qkyVxJHmb1NOzDuE51gXJDB9JWShK-I0iSlArrMdGQ3LrJcIkiHG398Im5-hq9RCXFP7D6lt0n0stCcdX-taeBUsKdJ-RO_u4reAAPlZIpgvpOLMIB2lNFX3eZtC-05LZfel7jCiFqg0aEwG40uGn-GauMeHx6UbP-nIhXROofHk5clCxYKPYPiyJwJzQ_kfMfHglxYOPIJ4i__7H3D-V4H0rrsJMueWKzqG-eQ3lYV6Yq9q7QOHpylb6i_hHXSExkLrPmwLEck0kfEuMFlxLbgg_Ik2KDXXocIgtVc2_YAmf5Yej-eyn2N3UUyH4ZWfadO_MAV50J9pwQ42xdsLUBGA&c=${AAX_PAYLOAD}",
    zone: "US-PDX",
    
    // Endpoints
    endpoints: ["vue", "forensics"],
    
    // Pixel mapping
    pixelMapping: {
      bt: ["au"],
      ac: ["su"],
      at: ["su"],
      av: ["su"],
      v: ["su"],
      vp: ["su"]
    },
    
    // Instrumentation URL
    instrUrl: "https://aax-us-pdx.amazon-adsystem.com/x/px/JCQnRHt6Dd6pliJNcw3LiK4AAAGWbggB8wYAAADMBABvbm9fdHhuX2JpZDEgICBvbm9fdHhuX2ltcDEgICBRw_0y/",
    bidId: "JCdEe3oN3qmWIk1zDcuIrg"
  };

  // Mock OMSDK class
  class OMSDK {
    constructor(config) {
      this.config = config;
      this.isInitialized = false;
      this.sessionId = this.generateSessionId();
      this.events = [];
      
      console.log("OMSDK instance created with config:", JSON.stringify(config, null, 2));
    }
    
    generateSessionId() {
      return 'omsdk_' + Math.random().toString(36).substring(2, 15) + 
             Math.random().toString(36).substring(2, 15);
    }
    
    init() {
      console.log("Initializing OMSDK...");
      this.isInitialized = true;
      this.logEvent("init", { timestamp: new Date().toISOString() });
      return true;
    }
    
    registerAdSession(adContainer) {
      if (!this.isInitialized) {
        console.error("OMSDK not initialized. Call init() first.");
        return false;
      }
      
      console.log("Registering ad session with container:", adContainer);
      this.logEvent("registerAdSession", { 
        container: adContainer,
        timestamp: new Date().toISOString()
      });
      
      return true;
    }
    
    startAdSession() {
      if (!this.isInitialized) {
        console.error("OMSDK not initialized. Call init() first.");
        return false;
      }
      
      console.log("Starting ad session with ID:", this.sessionId);
      this.logEvent("startAdSession", { 
        sessionId: this.sessionId,
        timestamp: new Date().toISOString()
      });
      
      // Simulate sending impression pixel
      this.sendPixel("impression");
      
      return true;
    }
    
    trackVideoEvent(eventType, eventData) {
      if (!this.isInitialized) {
        console.error("OMSDK not initialized. Call init() first.");
        return false;
      }
      
      console.log(`Tracking video event: ${eventType}`, eventData);
      this.logEvent("videoEvent", { 
        type: eventType,
        data: eventData,
        timestamp: new Date().toISOString()
      });
      
      // Simulate sending event pixel
      this.sendPixel(eventType);
      
      return true;
    }
    
    endAdSession() {
      if (!this.isInitialized) {
        console.error("OMSDK not initialized. Call init() first.");
        return false;
      }
      
      console.log("Ending ad session with ID:", this.sessionId);
      this.logEvent("endAdSession", { 
        sessionId: this.sessionId,
        timestamp: new Date().toISOString()
      });
      
      // Simulate sending completion pixel
      this.sendPixel("complete");
      
      return true;
    }
    
    sendPixel(eventType) {
      const pixelType = this.getPixelTypeForEvent(eventType);
      const pixelUrl = this.getPixelUrlForType(pixelType);
      
      if (!pixelUrl) {
        console.warn(`No pixel URL found for event type: ${eventType}`);
        return false;
      }
      
      // In a real implementation, this would send the actual pixel
      // For testing purposes, we just log it
      console.log(`Sending ${pixelType} pixel for ${eventType} event:`, pixelUrl);
      
      // Simulate pixel response
      setTimeout(() => {
        console.log(`Pixel response received for ${eventType} event`);
      }, 100);
      
      return true;
    }
    
    getPixelTypeForEvent(eventType) {
      const pixelTypeMap = {
        "impression": "su",
        "start": "su",
        "firstQuartile": "su",
        "midpoint": "su",
        "thirdQuartile": "su",
        "complete": "su",
        "pause": "su",
        "resume": "su",
        "mute": "su",
        "unmute": "su",
        "click": "au"
      };
      
      return pixelTypeMap[eventType] || "su";
    }
    
    getPixelUrlForType(pixelType) {
      if (pixelType === "su") {
        return this.config.impressionUrl.replace("${AAX_TYPE}", "impression").replace("${AAX_PAYLOAD}", "test_payload");
      } else if (pixelType === "au") {
        return this.config.auditUrl.replace("${AAX_TYPE}", "audit").replace("${AAX_PAYLOAD}", "test_payload");
      }
      
      return null;
    }
    
    logEvent(eventName, eventData) {
      this.events.push({
        name: eventName,
        data: eventData,
        timestamp: new Date().toISOString()
      });
    }
    
    getEventLog() {
      return this.events;
    }
  }

  // Create global OMSDK instance
  window.OMSDK = OMSDK;
  
  // Create a test instance with the extracted config
  window.testOMSDK = function() {
    console.log("Starting OMSDK test...");
    
    const sdk = new OMSDK(config);
    sdk.init();
    
    // Mock video container element
    const mockContainer = {
      id: "video-container",
      width: 640,
      height: 360
    };
    
    sdk.registerAdSession(mockContainer);
    sdk.startAdSession();
    
    // Simulate video events
    setTimeout(() => {
      sdk.trackVideoEvent("start", { time: 0 });
    }, 1000);
    
    setTimeout(() => {
      sdk.trackVideoEvent("firstQuartile", { time: 7.5 });
    }, 2000);
    
    setTimeout(() => {
      sdk.trackVideoEvent("midpoint", { time: 15 });
    }, 3000);
    
    setTimeout(() => {
      sdk.trackVideoEvent("thirdQuartile", { time: 22.5 });
    }, 4000);
    
    setTimeout(() => {
      sdk.trackVideoEvent("complete", { time: 30 });
      sdk.endAdSession();
      
      // Print event log
      console.log("OMSDK Event Log:", JSON.stringify(sdk.getEventLog(), null, 2));
    }, 5000);
    
    return sdk;
  };
  
  // Auto-run test if in browser environment
  if (typeof window !== 'undefined') {
    console.log("OMSDK test script loaded. Run window.testOMSDK() to execute the test.");
    
    // Uncomment to auto-run the test
    // window.testOMSDK();
  }
})();
