/**
 *
 * JS wrapper for Google Publisher Tag
 * Reference: https://developers.google.com/doubleclick-gpt/reference
 * Created By: Next Mobile Ltd.
 * Version: 3.0.1
 * Last modified date: 2017-01-25
 *
 **/

            (function() {
                var gads = document.createElement('script');
                gads.async = true;
                gads.type = 'text/javascript';
                var useSSL = 'https:' == document.location.protocol;
                gads.src = (useSSL ? 'https:' : 'http:') +
                        '//www.googletagservices.com/tag/js/gpt.js';
                var node = document.getElementsByTagName('script')[0];
                node.parentNode.insertBefore(gads, node);
            })();

if (typeof(gpt) === "undefined") {

     var PREBID_TIMEOUT = 2000;
            var googletag = googletag || {};
        var gptadslots = [];
            googletag.cmd = googletag.cmd || [];
            var pbjs = pbjs || {};
            pbjs.que = pbjs.que || [];
            var adUnits = [];
            googletag.cmd.push(function() {
                googletag.pubads().disableInitialLoad();
            });

            pbjs.que.push(function() {
                pbjs.addAdUnits(adUnits);
                pbjs.enableSendAllBids();
                pbjs.setPriceGranularity("dense");
                pbjs.requestBids({
                    bidsBackHandler: function(bidResponses) {
                        initAdserver();
                    }
                })
            });

            function initAdserver() {
                if (pbjs.initAdserverSet) return;
                googletag.cmd.push(function() {
                    pbjs.que.push(function() {
                        pbjs.setTargetingForGPTAsync();
                        googletag.pubads().refresh();
                    });
                });
                pbjs.initAdserverSet = true;
            };
           
            setTimeout(initAdserver, PREBID_TIMEOUT);
           
            (function() {
                var pbjsEl = document.createElement("script");
                pbjsEl.type = "text/javascript";
                pbjsEl.async = true;
                var useSSL = 'https:' == document.location.protocol;
                pbjsEl.src = (useSSL ? 'https:' : 'http:') + "//acdn.adnxs.com/prebid/not-for-prod/prebid.js";
                var pbjsTargetEl = document.getElementsByTagName("head")[0];
                pbjsTargetEl.insertBefore(pbjsEl, pbjsTargetEl.firstChild);
            })();


    var gpt = {
        networkCode: 7350,

        createAdSlot: function(adUnit, adFormat, divId, extras) {

            var sizeArray;
            switch (adFormat) {
                case 'HeadBanner':
                    sizeArray = [
                        [728, 90],
                        [970, 90],
                        [970, 160],
                        [970, 250]
                    ];
                    break;
                case 'LREC':
                    sizeArray = [
                        [300, 250],
                        [300, 430],
                        [300, 600]
                    ];
                    break;
                case 'MiniBanner':
                    sizeArray = [300, 100];
                    break;
                case 'TextLink':
                    sizeArray = [300, 50];
                    break;
                 case 'FlashLink':
                    sizeArray = [300, 45];
                    break;
                case 'FoodPromo':
                    sizeArray = [640, 250];
                    break;
                case 'TextAdvertorial':
                    sizeArray = [1, 1];
                    break;
                case 'Interstitial':
                    sizeArray = [1, 1];
                    break;
                case 'EntXLBanner':
                    sizeArray = [
                        [300, 50],
                        [300, 250]
                    ];
                    break;
                case 'MiddleBanner':
                    sizeArray = [564, 90];
                    break;
                case 'Halfpage':
                    sizeArray = [300, 600];
                    break;
                case 'Skyscraper':
                     sizeArray = [
                        [120, 600],
                        [160, 600]
                    ];
                    break;
                case 'PushAd':
                    sizeArray = [530, 45];
                    break;
                case 'MiniPushAd':
                    sizeArray = [236, 55];
                    break;
                default:
                    adFormat = adFormat.split('x');
                    if (typeof(adFormat) != 'undefined' && adFormat.length == 2) {
                        var width = parseInt(adFormat[0]);
                        var height = parseInt(adFormat[1]);
                        sizeArray = [width, height];
                    } else {
                        sizeArray = [1, 1];
                    }
                    break;
            }

        adUnits.push({
                code: divId,
                sizes: sizeArray,
                bids: [{
                        bidder: "rubicon",
                        params: {accountId: "14062", siteId: "70608", zoneId: "335918"}
                  }]
            });
             googletag.cmd.push(function() {
            var adSlot = googletag.defineSlot('/' + this.networkCode + '/' + adUnit, sizeArray, divId);
            adSlot.addService(googletag.pubads());
           

            var previewId = this.getUrlParam('dfppreview');
            if (typeof(previewId) != 'undefined' && previewId != '') {
                adSlot.setTargeting('dfppreview', previewId);
            }

            for (var key in extras) {
                if (extras.hasOwnProperty(key)) {
                    adSlot.setTargeting(key, extras[key]);
                }
            }
            return adSlot;
             });
        },

        generateVideoAdTag: function(adUnit, adFormat, extras) {
            var size;
            var currentTimeStamp = new Date().getTime();
            var referrerUrl = document.referrer;

            switch (adFormat) {
                case 'Preroll':
                    size = '640x360';
                    break;
                default:
                    if (adFormat.indexOf('x') != -1) {
                        size = adFormat;
                    } else {
                        size = '640x360';
                    }
                    break;
            }

            adSlot = 'http://pubads.g.doubleclick.net/gampad/ads?';
            adSlot += 'sz=' + size + '&';
            adSlot += 'iu=' + encodeURIComponent('/' + this.networkCode + '/' + adUnit) + '&';
            adSlot += 'ciu_szs=' + '&';
            adSlot += 'impl=s&';
            adSlot += 'gdfp_req=1&';
            adSlot += 'env=vp&';
            adSlot += 'output=xml_vast2&';
            adSlot += 'unviewed_position_start=1&';
            adSlot += 'url='+referrerUrl+'&';
            adSlot += 'correlator='+currentTimeStamp;

            var previewId = this.getUrlParam('dfppreview');
            if ((typeof(previewId) != 'undefined' && previewId != '') || (extras != null && typeof(extras) != 'undefined')) {
                adSlot += '&cust_params=';
                if (typeof(previewId) != 'undefined' && previewId != '') {
                    adSlot += encodeURIComponent('dfppreview=' + previewId + '&');
                }

                for (var key in extras) {
                    if (extras.hasOwnProperty(key)) {
                        adSlot += encodeURIComponent(key + '=' + extras[key] + '&');
                    }
                }

            }
            return adSlot;
        },

        enableServices: function() {
            googletag.cmd.push(function() {
            googletag.pubads().collapseEmptyDivs();
       //     googletag.pubads().enableSyncRendering();
            googletag.pubads().enableSingleRequest();
            googletag.enableServices();
             });
        },
        getUrlParam: function(name) {
            name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
            var regexS = "[\\?&]" + name + "=([^&#]*)";
            var regex = new RegExp(regexS);
            var results = regex.exec(window.location.href);
            if (results == null)
                return "";
            else
                return results[1];
        }
    }

}
