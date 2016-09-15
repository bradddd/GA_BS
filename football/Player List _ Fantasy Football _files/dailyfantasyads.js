(function(){
	if( document.querySelectorAll && JSON){
		var baseUrl = 'http://sports.yahoo.com/dailyfantasy'
		var versionID = '39'
		var baseImageUrl = 'http://l.yimg.com/os/dfsad/'+versionID+'/'
		var baseImageSSLUrl = 'https://s.yimg.com/os/dfsad/'+versionID+'/'
		var css = '.df-ad{font-family: Helvetica Neue, Helvetica, Arial, sans-serif; font-size: 13px; position: relative; } body .df-ad *{box-sizing: content-box} .df-ad .dfad-button{border-radius: 3px; border:1px solid rgb(0,120,255); color:rgb(0,120,255); background-color:white; padding: 6px 20px 6px 20px; line-height: normal; text-decoration: none; display: inline-block; font-weight: normal; } .dfad-button:hover, .dfad-buttonhoverrow tr:hover .dfad-button{background-color:rgb(0,120,255); color:white; } .dfad-banner .dfad-button:hover, .dfad-buttonhoverrow .dfad-banner:hover .dfad-button, .dfad-bannerrect .dfad-button:hover, .dfad-buttonhoverrow .dfad-bannerrect:hover .dfad-button{background-color: #f3f3f3; color: #333333; } #dfad-t1, #dfad-t2{background:url(toplinelogo.gif) no-repeat top left; height: 27px; line-height: 27px; border-bottom:1px solid rgb(149,149,149); padding-left: 400px; display:block; cursor: pointer; padding-bottom: 15px; margin-bottom:15px; text-decoration: none; color:black; } #dfad-t1 .dfad-button, #dfad-t2 .dfad-button{position:absolute; right: 0px; } #dfad-t1:hover,#dfad-t2:hover{text-decoration: underline;} #dfad-t3{margin-bottom:15px;} .dfad-topoffset{padding: 20px 20px 0px 20px; } .dfad-startsin{font-weight: normal; } .dfad-bottommargin{margin-bottom:15px;} .dfad-bannerrect{display: block; background:url(bg.jpg); background-size: cover; background-position: right; background-size: 100% 100%; padding: 15px; margin-bottom: 15px; text-align:center; font-size: 23px; line-height: 20px; color: white; text-decoration: none; } a.dfad-bannerrect:hover{color: white; text-decoration: none; } .dfad-bannerrect .dfad-contesttitle{display:block; padding: 30px 0px 5px 0px } .dfad-bannerrect .dfad-conteststarts{display:block; font-size: 16px; font-weight: normal; } .dfad-bannerrect .dfad-contestprizes{display:block; font-size: 12px; font-weight: normal; padding-bottom:20px; } .dfad-bannerrect .dfad-button{border: 0px; color: #333333; font-size: 13px; margin-bottom:10px; } .dfad-banner{background:url(bg.jpg); background-size: cover; height:25px; padding: 10px; display:block; position: relative } .dfad-banner-contest{position: absolute; top:7px; font-size: 18px; line-height: 13px; right:5px; color: white; text-decoration: none; vertical-align: bottom; } .dfad-banner-contest .dfad-startsin{font-size:15px; } .dfad-banner-contest .dfad-bannertext {display:inline-block; position: relative; top: 3px; } .dfad-banner-contest .dfad-bannertext b{white-space: nowrap; overflow: hidden; text-overflow: ellipsis; display: inline-block; } .dfad-banner .dfad-button {border: 0px; color: #333333; margin-left:10px; font-size: 13px; } .dfad-banner-contest-left {position: relative; top:-3px; line-height: 24px; left:0px; } .dfad-banner-contest-left .dfad-button{position: absolute; top:0px; right: 0px; } .dfad-banner .dfad-logo, .dfad-bannerrect .dfad-logo{background:url(logowhite.png) no-repeat; background-size: contain; height:25px; width:100%; display: block; } .dfad-contesttable {width:100%; margin-bottom: 15px; border-spacing:0px; border-collapse:0px; } .dfad-contesttable .highlight{font-weight: bold; background-color:rgb(237, 247, 243); } .dfad-contesttable a{color:inherit; text-decoration: none; } .dfad-contesttable td{white-space: nowrap; width: 10px; text-align: right; font-size: 13px; padding:5px; padding-left:20px; border-bottom:1px solid #e7e7e7; } .dfad-contesttable td{font-size: 13px; cursor: pointer; } .dfad-contesttable tr:hover td.contest{color:#0078ff; } .dfad-contesttable tr:hover td{color:#0078ff; background-color:rgb(237, 247, 243); } .dfad-contesttable th{border-bottom:2px solid rgb(231,231,231); background-color:rgb(243,243,243); padding:4px 5px 4px 5px; text-align: right; font-size:11px; font-weight: normal; } .dfad-contesttable td.contest, .dfad-contesttable th.contest{width:auto; padding-left:5px; white-space:normal; text-align:left; } .dfad-bannerrect .dfad-timewrap {width: 64px; } .dfad-banner-contest .dfad-timewrap {width: 130px; height: 13px; } .dfad-banner-contest.dfad-banner-contest-left .dfad-timewrap {width: 144px; height: 19px; } .dfad-contesttable .dfad-timewrap {width: 51px; height: 12px; } .dfad-timewrap {position: relative; display: inline-block; height: 1em; } .dfad-timewrap .dfad-time {position: absolute; left: 0; top: 0; }'

		// write out css
		var secure = location.href.indexOf("http://")!=-1
		css = css.replace(/url\(/gi,'url('+(secure?baseImageSSLUrl:baseImageUrl))
		var s = document.createElement("style")
		s.setAttribute("type","text/css")
		s.innerHTML = css
		if(!dfAdsConfig.dev){
			document.querySelector("head").appendChild(s)
		}
		var ads = {
			top:[
				{name:"topbanner",ad:function(el,t){bannerAd(el,t,true,true,true, 340)}},
				{name:"topbannernologo",ad:function(el,t){bannerAd(el,t,false,true, true, 730)}},
				{name:"toptablebanner",ad:function(el,t){tableAd(el,t,true,1,true,true, true, true, true, true, true) }},
				{name:"toptablesimple",ad:function(el,t){el.className += " dfad-topoffset"; tableAd(el,t,false,1,true,true, true, true, true, true, true)}},

				{name:"topbanner_hr",ad:function(el,t){el.className += ' dfad-buttonhoverrow';bannerAd(el,t,true,true,true, 340)}},
				{name:"topbannernologo_hr",ad:function(el,t){el.className += ' dfad-buttonhoverrow';bannerAd(el,t,false,true, true, 730)}},
				{name:"toptablebanner_hr",ad:function(el,t){el.className += ' dfad-buttonhoverrow';tableAd(el,t,true,1,true,true, true, true, true, true, true) }},
				{name:"toptablesimple_hr",ad:function(el,t){el.className += " dfad-buttonhoverrow dfad-topoffset"; tableAd(el,t,false,1,true,true, true, true, true, true, true)}}
			],
			main:[
				{name:"maintable",ad:function(el,t){tableAd(el,t,true,2,true,true, false, true, true, true, true) }},
				{name:"mainbannernologo",ad:function(el,t){bannerAd(el,t,false,true, true, 360) }},
				{name:"maintable_hr",ad:function(el,t){el.className += ' dfad-buttonhoverrow'; tableAd(el,t,true,2,true,true, false, true, true, true, true) }},
				{name:"mainbannernologo_hr",ad:function(el,t){el.className += ' dfad-buttonhoverrow'; bannerAd(el,t,false,true, true, 360) }},
				],
			right:[
				{name:"righttable",ad:function(el,t){tableAd(el,t,true,5,true,true, false, false, false, false, true) }},
				{name:"righttablenohead",ad:function(el,t){tableAd(el,t,false,5,true,true, false, false, false, false, true) }},
				{name:"righttable_hr",ad:function(el,t){el.className += ' dfad-buttonhoverrow'; tableAd(el,t,true,5,true,true, false, false, false, false, true) }},
				{name:"righttablenohead_hr",ad:function(el,t){el.className += ' dfad-buttonhoverrow'; tableAd(el,t,false,5,true,true, false, false, false, false, true) }},
				{name:"rightbannerrect",ad:function(el,t){
					var html = '<a href="'+t.lobby+'" class="dfad-bannerrect">'
					html += '<span class="dfad-logo"></span>'
					html += '<span class="dfad-contestprizes">Win cash in one-day contests from the most trusted name in Fantasy!</span>'
					html += '<span class="dfad-button">Enter Contest</span>'
					html += '</a>'
					el.innerHTML = html
					loadContests(function(c){
						var contest = c.contests[0]
						var html = '<a href="'+t.setlineup(contest.id)+'" class="dfad-bannerrect">'
						html += '<span class="dfad-logo"></span>'
						html += '<span class="dfad-contesttitle">'+contest.title+'</span>'
						html += '<span class="dfad-conteststarts">Starts in '+countdown(c,contest)+'</span>'
						html += '<span class="dfad-contestprizes">'+renderDollars(contest.totalPrize)+' in Prizes</span>'
						html += '<span class="dfad-button">Enter Contest</span>'
						html += '</a>'
						el.innerHTML = html
					})
				}}
				]
		}
		var init = function(){
			var random = []
			var spots = document.querySelectorAll(".df-ad")
			for(var i=0;i!=spots.length;i++){
				var e = spots[i]
				random.splice(Math.round(Math.random()*random.length), 0, {
					el:e,
					exclusive:e.getAttribute("data-dfadexclusive"),
					position:e.getAttribute("data-dfadposition")
				})
			}
			var used = {}
			for(var i=0;i!=random.length;i++){
				var a = random[i]
				var ad = ads[a.position][Math.floor(Math.random()*ads[a.position].length)]
				if( !used[a.exclusive]){
					var adid = dfAdsConfig.page+"_"+ad.name 
					if(adid.length>32){
						adid = adid.substring(adid.length-32,adid.length)
					}
					var args = "adcamp=ff&adid="+adid
					var t = {
						lobby: baseUrl+'?'+args,
						setlineup: function(contestId){return baseUrl+'/contest/'+contestId+'/setlineup?'+args},
					}
					ad.ad(a.el,t)
					used[a.exclusive] = true
				}
			}
		}
		var getBucket = function(){
			var bcookie = /B=([^&;]*)/gi.exec(document.cookie)
			if( bcookie ){
				var str = bcookie[1]
				var hash = 5381
				var i = str.length
				while(i){
					hash = (hash * 33) ^ str.charCodeAt(--i)
				}
				return ((hash >>> 0) % 100)+1
			}else{
				return 100
			}
		}
		var fixtitle = function(input){
			return input.replace("[Single Entry, ","[")
		}
		var countdown_threshold = 48;
		var time = function(offset, end,includeStartsIn){
			var s = (end - (new Date().getTime()-offset)) / 1000
			var out;
			if (s < 0) {
				out = 'started';
			} else {
				var h = Math.floor(s / 3600);
				s -= h * 3600;
				var m = Math.floor(s / 60);
				s -= m * 60;
				var h0 = Math.floor(h / 10);
				var h1 = Math.floor(h % 10);
				var m0 = Math.floor(m / 10);
				var m1 = Math.floor(m % 10);
				var s0 = Math.floor(s / 10);
				var s1 = Math.floor(s % 10);

				if( h > countdown_threshold){
					out = Math.round(h/24) + " days"
				}else{
					out = ('' + h0 + h1 + ':' + m0 + m1 + ':' + s0 + s1)
				}
			}
			return (includeStartsIn ? '<span class="dfad-startsin">starts in</span> ': '') + out;
		}
		var countdown = function(result,contest, includeStartsIn){
			var offset = new Date().getTime()-result.currentTime;
			var id = randomId();
			var HOUR = 3600*1000;
			function delayTime() {
				var now = new Date().getTime();
				var dt = (contest.startTime - (now-offset));
				if (dt < 48*HOUR) {
					return 1000;
				}
				return Math.floor(dt % (24*HOUR));
			}
			function update() {
				var el = document.getElementById(id)
				if( el ){
					el.innerHTML = time(offset, contest.startTime,includeStartsIn)
				}
				setTimeout(update, delayTime());
			}
			setTimeout(update, delayTime());
			return '<span class="dfad-timewrap"><span class="dfad-time" id="'+id +'">'+time(offset, contest.startTime, includeStartsIn)+'</span></span>'
		}
		var loadContestsResults = null
		var loadContestCallbacks = null
		var loadContests = function(callback){
			if( loadContestsResults != null ){
				callback(loadContestsResults)
			}else if(loadContestCallbacks != null ){
				loadContestCallbacks.push(callback)
			}else{
				// initialize
				loadContestCallbacks = [callback]
				var url = 'https://dfyql-ro.sports.yahoo.com/v2/contestsInLobby?limit=30&src=dynamicffpromos'
				if(dfAdsConfig.sport){
					url += "&sport=" + escape(dfAdsConfig.sport)
				}
				var xhr = new XMLHttpRequest();
				if ("withCredentials" in xhr) {
					xhr.withCredentials = true
				} else if (typeof XDomainRequest != "undefined") {
					xhr = new XDomainRequest();
				} else {
					// CORS is not supported by the browser.
					return
				}
				xhr.onload = function(){
					var d = JSON.parse(xhr.responseText)
					if( d.contests && d.contests.result && d.contests.result.length>0 && d.currentTime){
						loadContestsResults = {currentTime:d.currentTime, contests:d.contests.result}
						var scoreContest  = function(a){return a.entryFee + (a.scope != "guaranteed" ? 1000 : 0)}
						loadContestsResults.contests.sort(function(a,b){
							return scoreContest(a)- scoreContest(b)
						})
						for(var i=0;i!=loadContestCallbacks.length;i++){
							loadContestCallbacks[i](loadContestsResults)
						}
					}
				}
				xhr.onerror = function(e){}
				xhr.open("GET", url, true);
				xhr.send()
			}
		}
		var tableAd = function(el,t,includeBanner, contestCount, headerRow, name, entries, entry, prizes, start, button, getContests){
			var html = ''
			if(includeBanner){
				html = '<a href="'+t.lobby+'" class="dfad-banner"><span class="dfad-logo"></span></a>'
			}
			html += '<table class="dfad-contesttable"><thead>'
			if( headerRow){
				html += '<tr>'
				if(name){html += '<th class="contest">Daily Fantasy Contest</th>'}
				if(entries){html += '<th>Entries/Size</th>'}
				if(entry){html += '<th>Entry</th>'}
				if(prizes){html += '<th>Prizes</th>'}
				if(start){html += '<th>Start Time</th>'}
				if(button){html += '<th></th>'}
				html += '</tr>'
			}
			html += '</thead><tbody>'

			// Dummy row if data fails to load
			html += '<tr class="highlight" onclick="location.href=\''+t.lobby+'\'">'
			if(name){html += '<td class="contest"><a href="'+t.lobby+'">Win cash in one-day contests from the most trusted name in Fantasy!</a></td>'}
			var colspan = (entries+entry+prizes+start);
			if (colspan) {
				html += '<td colspan="' + colspan + '">View available contests to get started</td>'
			}
			if(button){html += '<td><a href="'+t.lobby+'" class="dfad-button">Enter Contest</a></td>'}
			html += '</tr>'
			html += '</tbody>'
			el.innerHTML = html
			var load = (getContests||loadContests)
			load(function(c){
				var html = ''
				for(var i=0;i<Math.min(contestCount,c.contests.length);i++){
					var contest = c.contests[i]
					html += '<tr class="'+(i==0?'highlight':'')+'" onclick="location.href=\''+t.setlineup(contest.id)+'\'">'
					if(name){html += '<td class="contest"><a href="'+t.setlineup(contest.id)+'">'+contest.title+'</a></td>'}
					if(entries){html += '<td>'+contest.entryCount+'/'+contest.entryLimit+'</td>'}
					if(entry){html += '<td>'+renderDollars(contest.entryFee)+'</td>'}
					if(prizes){html += '<td>'+renderDollars(contest.totalPrize)+'</td>'}
					if(start){html += '<td>'+countdown(c,contest,false)+'</td>'}
					if(button){html += '<td><a href="'+t.setlineup(contest.id)+'" class="dfad-button">Enter Contest</a></td>'}
					html += '</tr>'
				}
				el.querySelector('tbody').innerHTML = html
			})
		}
		var bannerAd = function(el,t, showLogo, showText, showButton, width){
			var id = randomId()
			var html = '<a id="'+id+'" href="'+t.lobby+'" class="dfad-banner dfad-bottommargin">'
			html += '<span class="dfad-logo"></span>';
			var contest_html = '';
			if(showButton){
				contest_html += '<span class="dfad-button">Enter Contest</span>'
			}
			html += '<div class="dfad-banner-contest">' + contest_html + '</div>'
			el.innerHTML = html
			loadContests(function(c){
				if(c.contests.length>0){
					var contest = c.contests[0]
					var e = document.getElementById(id)
					if (!showLogo) {
						e.removeChild(e.querySelector('.dfad-logo'));
					}
					e.setAttribute("href",t.setlineup(contest.id))
					var html = ''
					if(showText){
						html += '<span class="dfad-bannertext"><b'+(width>0?' style="max-width:'+width+'px"':'')+'>'+fixtitle(contest.title)+'</b> <b>'+countdown(c,contest,true)+'</b></span>'
					}
					html += contest_html
					var banner_contest = e.querySelector('.dfad-banner-contest')
					banner_contest.innerHTML = html
					if (!showLogo) {
						banner_contest.className += ' dfad-banner-contest-left'
					}
				}
			})
		}
		var randomId = function(){
			return "rndid_"+Math.random()*9999+"_"+(new Date().getTime())
		}
		var renderDollars = function(dollar){
			return '$' +dollar.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,').replace(".00",""); //TODO
		}
		init()
	}
})()
