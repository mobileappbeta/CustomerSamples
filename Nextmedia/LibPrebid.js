/**
 *
 * API of Google Publisher Tag - Website
 * By: NextMedia Interactive Ltd.
 * Version: 1.3
 * Last modified date: 2012-09-13
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

if( typeof (gpt) === "undefined") {

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
		networkCode : 7350,
		
		createAdSlot : function(adUnit, sizeString, divId, extras) {

			var sizeArray;
			switch (sizeString) {
				case 'HeadBanner':
					sizeArray = [970, 90];
					break;
				case 'LREC':
					sizeArray = [300, 250];
					break;
				case 'MiniBanner':
					sizeArray = [300, 100];
					break;
				case 'TextLink':
					sizeArray = [300, 50];
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
				default:
					sizeString = sizeString.split('x');
					if( typeof (sizeString) != 'undefined' && sizeString.length == 2) {
						var width = parseInt(sizeString[0]);
						var height = parseInt(sizeString[1]);
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

			googletag.cmd.push(function () {
			var adSlot = googletag.defineSlot('/' + this.networkCode + '/' + adUnit, sizeArray, divId);
			adSlot.addService(googletag.pubads());
			

			var previewId = this.getUrlParam('dfppreview');
			if( typeof (previewId ) != 'undefined' && previewId != '') {
				adSlot.setTargeting('dfppreview', previewId);
			}

			for(var key in extras) {
				if(extras.hasOwnProperty(key)) {
					adSlot.setTargeting(key, extras[key]);
				}
			}
			return adSlot;
			});
		}, 
		
		generateVideoAdTag : function(adUnit, sizeString, extras) {
			var size;
			switch (sizeString) {
				case 'Preroll':
					size = '640x360';
					break;
				default:
					if(sizeString.indexOf('x') != -1) {
						size = sizeString;
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
			adSlot += 'url=[referrer_url]&';
			adSlot += 'correlator=[timestamp]';
			
			var previewId = this.getUrlParam('dfppreview'); 
			if( (typeof (previewId) != 'undefined' && previewId != '') || ( extras != null && typeof (extras) != 'undefined' ) ) {
				adSlot += '&cust_params=';
				if( typeof (previewId ) != 'undefined' && previewId != '') {
					adSlot += encodeURIComponent('dfppreview=' + previewId + '&');
				} 
				
				for(var key in extras) {
					if(extras.hasOwnProperty(key)) {
						adSlot += encodeURIComponent(key + '=' + extras[key] + '&');
					}
				}
				
			} 
			return adSlot;
		},
		
		enableServices : function() {
			googletag.cmd.push(function() {
			googletag.pubads().collapseEmptyDivs();
		//	googletag.pubads().enableSyncRendering();
			googletag.pubads().enableSingleRequest();
			googletag.enableServices();
			 });
		},
		getUrlParam : function(name) {
			name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
			var regexS = "[\\?&]" + name + "=([^&#]*)";
			var regex = new RegExp(regexS);
			var results = regex.exec(window.location.href);
			if(results == null)
				return "";
			else
				return results[1];
		}
	}

}
