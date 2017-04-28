var page = require('webpage').create();
page.settings.userAgent = 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/37.0.2062.120 Safari/537.36';
page.open('http://fastlane.rubiconproject.com/a/api/fastlane.json?account_id=14062&site_id=70608&zone_id=335918&size_id=15&p_pos=btf&rp_floor=0.01&tk_flint=pbjs.lite&p_screen_res=1920x1080&rand=0.1447080348238371&rf=http%3A%2F%2Fdummy.bhaskar.com%2Fgaurav%2Fprebid%2Fprebid.html%3Fpbjs_debug%3Dtrue%261', function () {
    var jsonSource = page.plainText;
    var resultObject = JSON.parse(jsonSource);
    var creative = resultObject.ads[0].script;
    var statusAd = resultObject.ads[0].status;
	//console.log(creative);

    if (statusAd === "ok"){
    	console.log(statusAd);
//var creative = "rubicon_cb = Math.random(); rubicon_rurl = document.referrer; if(top.location==document.location){rubicon_rurl = document.location;} rubicon_rurl = escape(rubicon_rurl);\nwindow.rubicon_ad = \"3450172\" + \".\" + \"js\"; window.rubicon_creative = \"3563774\" + \".\" + \"js\"; document.write(\"<div style=\\\"width: 0; height: 0; overflow: hidden;\\\"><img border=\\\"0\\\" width=\\\"1\\\" height=\\\"1\\\" src=\\\"http:\/\/beacon-us-west.rubiconproject.com\/beacon\/d\/508205b9-574d-426d-8d6e-1ee65a336de6?accountId=14062&siteId=70608&zoneId=335918&e=6A1E40E384DA563B921C6CC71DCFEDC1B86DF4176DE8E4C59F772DB08147B8FBAA58EFF4546A8ABD8659D8DCA5FD3832445713E55995F6E0C2D100CEE797FFDCC37D6512A12CE0B22657B9C0AC5DC81EC88A50A2252E70047918CB3F721E5FA5C787BF4CF38AA58FEB882A1579BBA6B8F60B14A7F97F2E09B2C529B54EBC8547170431C715F959DB8A3F318D46C6E76F5F70AE1B4A29C0A95C2C2DDF0194702A\\\" alt=\\\"\\\" \/><\/div>\\n\\n\"); rubicon_tag_code = \"%3cscript%20type=%22text\/javascript%22%20src=%22https:\/\/pr.ybp.yahoo.com\/ab\/secure\/true\/imp\/isl5-aY63t53YFwT1xXL_mfQcK7_ZXYjw1Hv7smJ4kmJCLlnoNzy2RvX916AbZxUAJDE28jxuGfm3Zs867VR3Mt9vtwWW5Upi95L9QW5fB2hPEeclzlSHTu-0U5U-ttUv5yUxRGHkffMIUzbCI2qN8WWbsV2JdOn9kBPjDJU-DB8UYF6BLjJeBY2KdmBUlzuLXWHlBoNDDvgRlxoPSnLrxOdG6JHrCtsjCjp1vLni-YAGPHb69PZwQPJBH0al1JCQG42YDapVCmSZDz2PMuSksoQBAPkS1FOsvImnk1hT53tX8tTEQpWY6j3t5ARiDaWMJ7fC4egSQp7exghsS1kAM2Cm1fiZT6GTRqDeKX1MFA5sFBiVD0HJ3cOhPBS4qY6WC8FGD9x8QtxykdYxXx9Du43UVREKRgaBvSWDo9eK1Mkg57FeJaeJuvOgMLKaGSpuhGSpj8QNVHArPSG4X4nGr-FhKcTOl0gF2SnpV0xCZScN5dliZDOCgs7Np_2vBw_AN4glFjXPRCzsetmfIB_PnIcxogqHeVjHrN3kf4qWm23VUYM_k4jk8P3vExyBDcIf2_UZ037QRSmFaiN4YnGt1viP6N9UL7Yt9-rulxGHmtdimdjSpySrdhEJbJ2BjNx3ILmBwNTDPOmrEzJHxbJawgOHrYNj3ZuH5JJDX3W-TMlBU2lEbPdkVUCgLr-B6z98FkBJ7QWxULrtq7_AxxJGVmCnI16FFtp8FHvcdZvvfT1etnNFjd7D7YXQHxCIXXsTDGtJpnE3Iu6Eph3hW3DOvGmT8yAfxJ6rg3fC9hwefuz7kjuEh8YblIXEYiEQF0WMEq9hjmUTIcPbGws4ab6VykcysYRY-mhWxnQnNroafkAyxmA3LQOJKG59EEGQ8DUy0T1dl6HU8G6N_4h4RKz_mV6kRYBguh61O3kzC6TIOezufkYFetD4UCHd8gswqMiRQMMXAX-AniXO42-qkTJ2w\/wp\/4D4D8C2FCDAE97C5%22%3e%3c\/script%3e\"; rubicon_tag_code = rubicon_tag_code.replace(\/##RUBICON_CB##\/g,rubicon_cb); document.write(unescape(rubicon_tag_code)); document.write(\"<div style=\\\"height:0px;width:0px;overflow:hidden\\\"><script>(function(){var proto=\\'https:\\';try{proto=window.top.location.protocol;}catch(e){proto=(document.referrer===\\'\\'?\\'https:\\':document.referrer.split(\\'\/\/\\')[0]);}var server=\\\"http:\/\/tap2-cdn.rubiconproject.com\\\";if(proto==\\\"https:\\\")server=\\\"https:\/\/tap-secure.rubiconproject.com\\\";document.write(\\'<iframe src=\\\"\\'+server+\\'\/partner\/scripts\/rubicon\/emily.html?pc=14062\/70608&geo=au&co=sg\\\" frameborder=\\\"0\\\" marginwidth=\\\"0\\\" marginheight=\\\"0\\\" scrolling=\\\"NO\\\" width=\\\"0\\\" height=\\\"0\\\" style=\\\"height:0px;width:0px\\\"><\/iframe>\\');})();<\\\/script><\/div>\\n\");";
//test creative code from a Fastlane code
var expectedContent = '<html><body><div><script>'+creative+'</script></div></body></html>';
var expectedLocation = 'http://www.rubiconproject.com/';
page.setContent(expectedContent, expectedLocation);
var outObject = 0;
page.onResourceRequested = function(request) {
	outObject +=1;
    //console.log('Request ' + JSON.stringify(request, undefined, 4));
};
page.onResourceReceived = function(response) {
 // console.log('Receive ' + JSON.stringify(response, undefined, 4));
};

//page.open("http://www.phantomjs.org/", function(status) {

page.onLoadFinished = function(status) {
//var content = page.content;
//console.log('Content: ' + content);
   setTimeout(function() {
   console.log("Status of the request is: " + status);
  	if(status === "success") {
    console.log("The number of call out from this ad is: "+ outObject);
  }
  phantom.exit();},2000);
//SetTimeout use to be sure all ressource are made

};

    } 
else {phantom.exit();}
   
});



