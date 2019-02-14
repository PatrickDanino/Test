! function(t) {
    function e(a) {
        if (i[a]) return i[a].exports;
        var o = i[a] = {
            i: a,
            l: !1,
            exports: {}
        };
        return t[a].call(o.exports, o, o.exports, e), o.l = !0, o.exports
    }
    var i = {};
    e.m = t, e.c = i, e.d = function(t, i, a) {
        e.o(t, i) || Object.defineProperty(t, i, {
            configurable: !1,
            enumerable: !0,
            get: a
        })
    }, e.n = function(t) {
        var i = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return e.d(i, "a", i), i
    }, e.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, e.p = "", e(e.s = 0)
}([function(t, e) {
    function i(t) {
        return "/" === t[t.length - 1] ? t : t + "/"
    }
    var a = function() {
        var t = {};
        t.domain = "www.amazon.de", t.iconSprite = "https://images-na.ssl-images-amazon.com/images/G/03/cstone/adchoices/topright/germany_opa.png", t.spriteWidth = 112;
        var e = {};
        e.domain = "www.amazon.es", e.iconSprite = "https://images-na.ssl-images-amazon.com/images/G/03/cstone/adchoices/topright/spain_opa.png", e.spriteWidth = 118;
        var i = {};
        i.domain = "www.amazon.fr", i.iconSprite = "https://images-na.ssl-images-amazon.com/images/G/03/cstone/adchoices/topright/france_opa.png", i.spriteWidth = 105;
        var a = {};
        a.domain = "www.amazon.it", a.iconSprite = "https://images-na.ssl-images-amazon.com/images/G/03/cstone/adchoices/topright/italy_opa.png", a.spriteWidth = 81;
        var o = {};
        o.domain = "www.amazon.co.uk", o.iconSprite = "https://images-na.ssl-images-amazon.com/images/G/03/cstone/adchoices/topright/uk_opa.png", o.spriteWidth = 91;
        var s = {};
        s.domain = "www.amazon.com", s.iconSprite = "https://images-na.ssl-images-amazon.com/images/G/03/cstone/adchoices/topright/default_opa.png", s.spriteWidth = 91;
        var n = {};
        n.domain = "www.amazon.ca", n.iconSprite = "https://images-na.ssl-images-amazon.com/images/G/03/cstone/adchoices/topright/default_opa.png", n.spriteWidth = 91;
        var r = {};
        r.domain = "www.amazon.co.jp", r.iconSprite = "https://images-fe.ssl-images-amazon.com/images/G/03/cstone/adchoices/topright/default_opa.png", r.spriteWidth = 91, this.adChoicesIconWidth_ = 19, this.adChoices_ = {
            uk: o,
            germany: t,
            de: t,
            france: i,
            fr: i,
            spain: e,
            es: e,
            italy: a,
            it: a,
            us: s,
            ca: n,
            jp: r,
            default: s
        }, this.slot_ = null, this.videoSlot_ = null, this.eventListeners_ = {}, this.attributes_ = {
            linear: !0,
            companions: "",
            icons: "",
            width: 0,
            height: 0,
            viewMode: "normal",
            desiredBitrate: 256,
            duration: 30,
            skippableState: !1,
            remainingTime: 0,
            volume: 1,
            expanded: !1
        }, this.quartileEvents_ = [{
            event: "AdVideoStart",
            value: 0
        }, {
            event: "AdVideoFirstQuartile",
            value: 25
        }, {
            event: "AdVideoMidpoint",
            value: 50
        }, {
            event: "AdVideoThirdQuartile",
            value: 75
        }, {
            event: "AdVideoComplete",
            value: 100
        }], this.lastQuartileIndex_ = 0, this.parameters_ = {}, this.skipButtonShown = false
    };
    a.prototype.createAdChoicesOverlay_ = function() {
        var t = this.parameters_.adChoicesLocale || "default";
        t = t.toLowerCase();
        var e = this.adChoices_[t] || this.adChoices_.default,
            i = this.parameters_.adCfid || 0,
            a = this.parameters_.creativeCfid || 0,
            o = "https://" + e.domain + "/adprefs/ref=cs_aap_" + a + "/?pn=1&pg=daae";
        this.slot_.innerHTML = '<style type="text/css">#adChoicesDiv' + i + " .invisible { display: none !important; }</style>";
        var s = document.createElement("div");
        s.setAttribute("id", "adChoicesDiv" + i);
        var n = document.createElement("a");
        n.setAttribute("target", "_blank"), n.setAttribute("href", o), n.setAttribute("border", "0"), n.setAttribute("style", "display:block; margin:0; padding: 0; border: 0; text-decoration: none; cursor: pointer"), s.appendChild(n);
        var r = document.createElement("span");
        r.setAttribute("id", "adChoicesIconText" + i), r.setAttribute("style", "margin:0; padding:0; position: absolute; height: 15px; overflow: hidden; top: 0; right: 0;"), n.appendChild(r);
        var d = document.createElement("span"),
            h = e.spriteWidth - this.adChoicesIconWidth_;
        d.setAttribute("id", "adMarkerFull" + i), d.setAttribute("style", "width: " + h + "px; height: 15px;display:inline-block;background-color:transparent;background-position: -" + this.adChoicesIconWidth_ + "px 0;-ms-background-position-x: -" + (this.adChoicesIconWidth_ - 1) + 'px; -ms-background-position-y: 1px;background-image:url("' + e.iconSprite + '");background-repeat: no-repeat;'), d.innerHTML = "&nbsp;", r.appendChild(d);
        var p = document.createElement("span");
        p.setAttribute("id", "adChoicesIcon" + i), p.setAttribute("style", "margin: 0; padding: 0;height: 15px; width: " + this.adChoicesIconWidth_ + 'px; border: none;display:inline-block;position: absolute; overflow: hidden;background: transparent url("' + e.iconSprite + '") no-repeat 0 0;top: 0; right: 0;'), p.innerHTML = "&nbsp;", n.appendChild(p), this.slot_.appendChild(s)
    };
    var o = function(t) {
            var e = /<JsParameters>([\s\S]*)<\/JsParameters>/g,
                i = e.exec(t),
                a = i[1];
            return JSON.parse(a)
        },
        s = function(t) {
            return t && (t = t.replace(/^https?:/, document.location.protocol), t = i(t)), t
        };
    a.prototype.initAd = function(t, e, i, a, n, r) {
        if (this.attributes_.width = t, this.attributes_.height = e, this.attributes_.viewMode = i, this.attributes_.desiredBitrate = a, this.parameters_ = o(n.AdParameters), this.attributes_.duration = this.parameters_.duration, this.attributes_.skippableState = this.parameters_.skippableState, this.attributes_.remainingTime = this.parameters_.duration, this.slot_ = r.slot, this.videoSlot_ = r.videoSlot, this.log("initAd " + t + "x" + e + " " + i + " " + a), this.updateVideoSlot_(), this.videoSlot_.addEventListener("timeupdate", this.timeUpdateHandler_.bind(this), !1), this.videoSlot_.addEventListener("ended", this.stopAd.bind(this), !1), this.callEvent_("AdLoaded"), this.parameters_ && this.parameters_.vu && this.parameters_.vuInstr) {
            var d = s(this.parameters_.vuInstr),
                h = window.location.protocol +"//"+this.parameters_.vu,
                p = this.parameters_.vuParams,
                c = this,
                l = function(t) {
                    var e = {
                        adViewability: [{
                            error: {
                                m: t
                            }
                        }],
                        c: "viewability",
                        api: "VDO",
                        error: 1
                    };
                    (new Image).src = d + encodeURI(JSON.stringify(e)) + "?cb=" + Math.floor(1e7 * Math.random())
                },
                u = document.createElement("script");
            u.type = "text/javascript", u.onload = function() {
                "undefined" != typeof amzncsm && "function" == typeof amzncsm.rmVP ? amzncsm.rmVP(d, c, p) : l("amzncsm.rmVP is not a function")
            }, u.onerror = function() {
                l("CSM JS loading failed")
            }, u.src = h, document.head.appendChild(u)
        }
    }, a.prototype.timeUpdateHandler_ = function() {
        if (!(this.lastQuartileIndex_ >= this.quartileEvents_.length)) {
            if (100 * this.videoSlot_.currentTime / this.videoSlot_.duration >= this.quartileEvents_[this.lastQuartileIndex_].value) {
                var t = this.quartileEvents_[this.lastQuartileIndex_].event;
                this.callEvent_(t), this.lastQuartileIndex_ += 1
            }
        }
        if ((100 * this.videoSlot_.currentTime / this.videoSlot_.duration > 20) && !this.skipButtonShown) {
            this._createSkipAdButton("Skip", this.skipAd);
            this.skipButtonShown = true;
        }
        this.attributes_.remainingTime = this.videoSlot_.duration - this.videoSlot_.currentTime;
        this.callEvent_("AdDurationChange");

    }, a.prototype.updateVideoSlot_ = function() {
        this.slot_ && this.slot_.tagName && "DIV" === this.slot_.tagName.toUpperCase() || (this.slot_ = document.createElement("div"), document.body || (document.body = document.createElement("body")), document.body.appendChild(this.slot_)), this.parameters_.showAdChoices && (this.createAdChoicesOverlay_(), adCfid = this.parameters_.adCfid, adChoicesDiv = this.getElement_("adChoicesDiv" + adCfid), adChoicesText = this.getElement_("adChoicesIconText" + adCfid), adChoicesImage = this.getElement_("adChoicesIcon" + adCfid), adChoicesText.className = "invisible", adChoicesImage.className = "", adChoicesDiv.onmouseover = function() {
            adChoicesImage.className = "invisible", adChoicesText.className = ""
        }, adChoicesDiv.onmouseout = function() {
            adChoicesText.className = "invisible", adChoicesImage.className = ""
        }, adChoicesDiv.addEventListener("click", function(t) {
            if (!t) var t = window.event;
            t.cancelBubble = !0, t.stopPropagation && t.stopPropagation()
        })), null == this.videoSlot_ && (this.videoSlot_ = document.createElement("video"), this.log("Warning: No video element passed to ad, creating element."), this.slot_.appendChild(this.videoSlot_));
        for (var t = !1, e = this.parameters_.videos || [], i = 0; i < e.length; i++)
            if ("" != this.videoSlot_.canPlayType(e[i].mimetype)) {
                this.videoSlot_.setAttribute("src", e[i].url), t = !0;
                break
            }
        t || this.callEvent_("AdError")
    }, a.prototype.updateVideoPlayerSize_ = function() {
        try {
            this.videoSlot_.setAttribute("width", this.attributes_.width), this.videoSlot_.setAttribute("height", this.attributes_.height), this.videoSlot_.style.width = this.attributes_.width + "px", this.videoSlot_.style.height = this.attributes_.height + "px"
        } catch (t) {}
    }, a.prototype.handshakeVersion = function(t) {
        return this.parameters_.vpaidVersion || "2.0"
    }, a.prototype.startAd = function() {
        this.log("Starting ad"), this.callEvent_("AdImpression"), this.videoSlot_.play();
        var t = this.callEvent_.bind(this);
        this.slot_.addEventListener("click", function(e) {
            if (t("AdClickThru"), !e) var e = window.event;
            e.cancelBubble = !0, e.stopPropagation && e.stopPropagation()
        }), this.callEvent_("AdStarted"),
        this.callEvent_("AdSkippableStateChange")
    }, a.prototype.stopAd = function() {
        this.log("Stopping ad");
        var t = this.callEvent_.bind(this);
        setTimeout(t, 75, ["AdStopped"])
    }, a.prototype.setAdVolume = function(t) {
        this.attributes_.volume = t, this.log("setAdVolume " + t), this.updateVideoPlayerVolume(), this.callEvent_("AdVolumeChanged")
    }, a.prototype.getAdVolume = function() {
        return this.log("getAdVolume"), this.attributes_.volume
    }, a.prototype.updateVideoPlayerVolume = function() {
        this.videoSlot_.setAttribute("volume", this.attributes_.volume)
    }, a.prototype.resizeAd = function(t, e, i) {
        this.log("resizeAd " + t + "x" + e + " " + i), this.attributes_.width = t, this.attributes_.height = e, this.attributes_.viewMode = i, this.updateVideoPlayerSize_(), this.callEvent_("AdSizeChange")
    }, a.prototype.pauseAd = function() {
        this.log("pauseAd"), this.videoSlot_.pause(), this.callEvent_("AdPaused")
    }, a.prototype.resumeAd = function() {
        this.log("resumeAd"), this.videoSlot_.play(), this.callEvent_("AdPlaying")
    }, a.prototype.expandAd = function() {
        this.log("expandAd")
    }, a.prototype.getAdExpanded = function() {
        return this.log("getAdExpanded"), this.attributes_.expanded
    }, a.prototype.getAdSkippableState = function() {
        return this.log("getAdSkippableState"), this.attributes_.skippableState
    }, a.prototype.collapseAd = function() {
        this.log("collapseAd")
    }, a.prototype.skipAd = function() {
        this.log("skipAd"), this.attributes_.skippableState && this.callEvent_("AdSkipped")
    }, a.prototype.subscribe = function(t, e, i) {
        this.log("Subscribe " + t.name + " to event " + e), this.eventListeners_[e] = (this.eventListeners_[e] || []).concat({
            callback: t,
            context: i
        })
    }, a.prototype.unsubscribe = function(t, e) {
        this.eventListeners_[e] && (this.log("Unsubscribe " + t.name + " from event " + e), this.eventListeners_[e] = this.eventListeners_[e].filter(function(e) {
            return e.callback !== t
        }))
    }, a.prototype.getAdWidth = function() {
        return this.attributes_.width
    }, a.prototype.getAdHeight = function() {
        return this.attributes_.height
    }, a.prototype.getAdRemainingTime = function() {
        return this.attributes_.remainingTime
    }, a.prototype.getAdDuration = function() {
        return this.attributes_.duration
    }, a.prototype.getAdLinear = function() {
        return this.attributes_.linear
    }, a.prototype.getAdCompanions = function() {
        return this.attributes_.companions
    }, a.prototype.getAdIcons = function() {
        return this.attributes_.icons
    }, a.prototype.log = console.log.bind(console), a.prototype.getElement_ = function(t) {
        var e = document.getElementById(t);
        if (null != e) return e;
        try {
            var e = parent.document.getElementById(t)
        } catch (t) {
            return null
        }
        return e
    }, a.prototype.callEvent_ = function(t) {
        this.eventListeners_[t] && this.eventListeners_[t].forEach(function(e) {
            var i = e.context || this,
                a = [];
            "AdClickThru" === t && (a = [this.parameters_ && this.parameters_.clickThruUrl, this.parameters_ && this.parameters_.adCfid, !0]);
            try {
                e.callback.apply(i, a)
            } catch (e) {
                this.log('Event callback "' + t + '" encountered an error.', e)
            }
        }.bind(this))
    }, a.prototype._createSkipAdButton = function(text, eventType) {
        var adButton = document.createElement('div');
        var buttonText = document.createElement('span');
        adButton.appendChild(buttonText);
        buttonText.innerHTML = "Skip Ad"
        adButton.addEventListener('click', eventType.bind(this), false);
        adButton.onclick = function(e) {
        e.stopPropagation();
        };
        adButton.setAttribute("class", "jw-text jw-skiptext jw-reset");
        buttonText.setAttribute("class", "jw-skip jw-reset");
        window.parent.document.getElementsByClassName("jw-controls")[0].appendChild(adButton);
    


    }, window.getVPAIDAd = function() {
        return new a
    }
}]);