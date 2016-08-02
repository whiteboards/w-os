webpackJsonp([2,0],{0:function(t,e,s){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}var o=s(751),n=a(o),i=s(741),c=a(i);s(355),s(354),s(353),new n["default"]({el:"body",components:{App:c["default"]}})},63:function(t,e,s){var a,o;s(366),a=s(311),o=s(740),t.exports=a||{},t.exports.__esModule&&(t.exports=t.exports["default"]),o&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=o)},114:function(t,e,s){var a,o;a=s(301),t.exports=a||{},t.exports.__esModule&&(t.exports=t.exports["default"]),o&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=o)},299:function(t,e,s){"use strict";function a(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e["default"]=t,e}function o(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var n=s(316),i=o(n),c=s(114),l=a(c),r=s(56);e["default"]={data:function(){return console.log("apps:",l.comps),{}},cmd:function(t,e){var s=e.split(" "),a=function(){switch(s[0]){case"test":return{v:{type:"string",data:"success"}};case"touch":if(!(s.length>1))return{v:{dataType:"string",data:"Requires at least 1 argument"}};r.setItem(s[1],"").then(function(){t.results.push({dataType:"string",data:s[1],command:e})})["catch"](function(s){t.results.push({dataType:"string",data:s,command:e})});break;case"cat":if(!(s.length>1))return{v:{dataType:"string",data:"Requires at least 1 argument"}};r.getItem(s[1]).then(function(s){t.results.push({dataType:"string",data:s,command:e})})["catch"](function(s){t.results.push({dataType:"string",data:s,command:e})});break;case"ls":var a=[];r.iterate(function(t,e,s){a.push(e)}).then(function(){t.results.push({dataType:"list",data:a,command:e})});break;case"help":return{v:{type:"string",data:"Try help, ls, cat, touch, or any app name."}};default:return t.$dispatch("openApp",e),{v:!0}}}();if("object"===("undefined"==typeof a?"undefined":(0,i["default"])(a)))return a.v}}},300:function(t,e,s){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var o=s(749),n=a(o),i=s(750),c=a(i);e["default"]={components:{navBar:n["default"],osDesktop:c["default"]},methods:{logIt:function(t){t.target.closest(".os--nav")||this.$broadcast("hideMenu")}},events:{openApp:function(t){this.$broadcast("openApp",t)}}}},301:function(t,e,s){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var o=s(742),n=a(o),i=s(744),c=a(i),l=s(745),r=a(l),u=s(746),d=a(u),p=s(743),f=a(p);e["default"]={comps:{calculator:n["default"],terminal:c["default"],textEditor:r["default"],weather:d["default"],settings:f["default"]}}},302:function(t,e,s){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var o=s(63),n=a(o),i=s(370),c=a(i);e["default"]={data:function(){return{calculatorAppInput:"",lastInput:"",hasDecimal:!1,operators:["+","-","*","/"]}},methods:{monitorKeys:function(t){this.handleEntry(t.key)},handleButtonPress:function(t){this.handleEntry(t.target.textContent)},handleEntry:function(t){"="===t||"Enter"===t?(this.calculatorAppInput=c["default"].eval(this.calculatorAppInput),this.lastInput=t):"clear"===t||"Delete"===t?(this.calculatorAppInput="",this.hasDecimal=!1,this.lastInput=""):"Backspace"===t?(this.calculatorAppInput=this.calculatorAppInput.substring(0,this.calculatorAppInput.length-1),this.lastInput=this.calculatorAppInput.charAt(this.calculatorAppInput.length-1)):this.operators.includes(t)?this.operators.includes(this.lastInput)||(this.calculatorAppInput+=t,this.hasDecimal=!1,this.lastInput=t):"."===t?this.hasDecimal||(this.hasDecimal=!0,this.calculatorAppInput+=t,this.lastInput=t):isNaN(t)||(this.calculatorAppInput+=t,this.lastInput=t)}},components:{wApp:n["default"]}}},303:function(t,e,s){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var o=s(63),n=a(o),i=s(56);e["default"]={data:function(){return{isSaving:!1,backgroundData:""}},components:{wApp:n["default"]},methods:{saveBackground:function(t){var e=this;this.$set("isSaving",!0),i.setItem(".wallpaper",this.$get("backgroundData")).then(function(){e.$set("isSaving",!1),e.$dispatch("updateBg")})},previewBackground:function(t){var e=this;console.log("file:",t.target.files[0]);var s=new FileReader;s.onload=function(t){var s=t.target.result;e.$set("backgroundData",s)},s.readAsDataURL(t.target.files[0])}}}},304:function(t,e,s){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var o=s(118),n=a(o),i=s(63),c=a(i),l=s(299),r=a(l);e["default"]={data:function(){return{commandPosition:1,command:"",results:[{command:"welcome",dataType:"string",data:"Welcome to w-os"}]}},components:{wApp:c["default"]},watch:{results:function u(t){var u=document.querySelectorAll(".terminal--result");u[u.length-1].scrollIntoView({block:"end",behavior:"smooth"})}},methods:{openNew:function(t){this.$dispatch("openApp",t)},giveFocus:function(t){t.currentTarget.querySelector("input").focus()},monitorKeys:function(t){console.log("key monitor:",t),console.log("commandPosition:",this.commandPosition),"up"===t&&this.results[this.commandPosition-1]?this.$set("commandPosition",this.$get("commandPosition")-1):"down"===t&&this.$set("commandPosition",this.$get("commandPosition")+1),this.$get("commandPosition")>=this.results.length?(this.$set("command",""),this.$set("commandPosition",this.results.length)):this.$set("command",this.results[this.$get("commandPosition")].command),console.log("commandPosition:",this.commandPosition)},runCommand:function(t){var e=this.$get("command"),s=r["default"].cmd(this,e);s&&this.results.push((0,n["default"])({},s,{command:e})),this.$set("command",""),this.commandPosition<this.results.length?this.$set("commandPosition",this.results.length):this.$set("commandPosition",this.commandPosition+1),console.log("results:",this.$get("results"))}}}},305:function(t,e,s){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var o=s(63),n=a(o);e["default"]={data:function(){return{fileName:"",fileData:""}},components:{wApp:n["default"]},methods:{saveFile:function(t){console.log("save file:",this.fileData),this.$dispatch("saveFile",{data:this.fileData,name:this.fileName})},getFileSystem:function(t){console.log("getFileSystem:",this),this.$dispatch("getFileSystem",this)},openNew:function(t){this.$dispatch("openApp",t)}}}},306:function(t,e,s){"use strict";function a(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var o=s(63),n=a(o),i=s(761),c=s(752);e["default"]={data:function(){return{zip:"",lat:"",lon:"",city:"",isLoadingWeather:!1,weather:{temp:"",windChill:"",windSpeed:"",humidity:"",condition:"",sunrise:"",sunset:""}}},components:{wApp:n["default"]},methods:{getWeather:function(t){var e=this,s=i.lookup(this.$get("zip"));this.$set("lat",s.latitude),this.$set("lon",s.longitude),this.$set("city",s.city+", "+s.state),this.$set("isLoadingWeather",!0);var a=new c(c.YAHOO);a.getCurrent(this.$get("lat"),this.$get("lon")).then(function(t){e.$set("weather.temp",t.getTemperature(c.FAHRENHEIT)),e.$set("weather.windCill",t.getWindChill(c.FAHRENHEIT)),e.$set("weather.windSpeed",t.getWindSpeed(c.MILES)),e.$set("weather.humidity",t.getHumidity()),e.$set("weather.condition",t.getCondition()),e.$set("weather.sunrise",t.getSunrise()),e.$set("weather.sunset",t.getSunset()),e.$set("isLoadingWeather",!1),console.log("got weather")})["catch"](function(t){console.log("oh no. we made something angry")})}}}},307:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(56);e["default"]={data:function(){return{fileName:"",fileData:"",isActive:!1}},methods:{closeFileSystem:function(t){this.$set("isActive",!1),"save"===t&&a.setItem(this.$get("fileName"),this.$get("fileData"))}},events:{saveFile:function(t){this.$set("isActive",!0),this.$set("fileData",t.data),this.$set("fileName",t.name)}}}},308:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(56);e["default"]={data:function(){return{files:[],selectedFile:"",app:{},isActive:!1}},methods:{closeFileSystem:function(t){var e=this;this.$set("isActive",!1),"save"===t&&!function(){var t=e.$get("app");console.log("selectedFile:",e.selectedFile),a.getItem(e.selectedFile).then(function(s){console.log("filedata:",s),t.$set("fileData",s),t.$set("fileName",e.selectedFile)})}(),this.$set("files",[])},setActiveFile:function(t,e){this.$set("selectedFile",e)}},events:{openSelect:function(t){var e=this;console.log("open fs:",t),a.iterate(function(t,s,a){console.log("key, value",[s,t]),s.indexOf(".txt")>-1&&(console.log("file is txt."),e.files.push(s))}).then(function(){console.log("Iteration has completed"),e.$set("isActive",!0),e.$set("app",t)})}}}},309:function(t,e,s){"use strict";function a(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e["default"]=t,e}function o(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var n=s(313),i=o(n),c=s(114),l=a(c);e["default"]={data:function(){return{active:"",isMenuActive:!1,apps:(0,i["default"])(l.comps)}},methods:{openApp:function(t){console.log("open:",t),this.$set("isMenuActive",!1),this.$dispatch("openApp",t)},toggleMenu:function(t){this.$set("isMenuActive",!this.isMenuActive)},closeMenu:function(t){this.$set("isMenuActive",!1)}},events:{hideMenu:function(){this.$set("isMenuActive",!1)}}}},310:function(t,e,s){"use strict";function a(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e["default"]=t,e}function o(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var n=s(118),i=o(n),c=s(114),l=a(c),r=s(748),u=o(r),d=s(747),p=o(d),f=s(56);e["default"]={data:function(){return{apps:[],appPositions:[],background:""}},computed:{osDesktop:function(){return{backgroundImage:'url("'+this.$get("background")+'")',backgroundPosition:"center center",backgroundSize:"cover",backgroundRepeat:"no-repeat"}}},components:(0,i["default"])({},l.comps,{fileSystemSelect:u["default"],fileSystemSave:p["default"]}),ready:function(){var t=this,e=[];e=document.querySelectorAll(".w-app"),this.$set("appPositions",Array.prototype.slice.call(e)),f.getItem(".wallpaper").then(function(e){t.$set("background",e)})},methods:{bringToFront:function(t){for(var e=this,s=0;s<e.apps.length;s++)if(t===e.appPositions[s]){var a=e.appPositions[s];e.appPositions.splice(s,1),e.appPositions.push(a);break}for(var o=0;o<e.appPositions.length;o++)e.appPositions[o].style.zIndex=o}},events:{bringToFront:function(t){this.bringToFront(t)},openApp:function(t){this.apps.push({name:t})},addMe:function(t){this.appPositions.push(t),t.style.zIndex=this.appPositions.length},getFileSystem:function(t){console.log("open system fs",t),this.$broadcast("openSelect",t)},saveFile:function(t){this.$broadcast("saveFile",t)},loseFocus:function(){this.$broadcast("loseFocus")},updateBg:function(){var t=this;f.getItem(".wallpaper").then(function(e){t.$set("background",e)})}}}},311:function(t,e,s){"use strict";function a(t){var e=t.target.parentNode,s=(parseFloat(e.getAttribute("data-x"))||0)+t.dx,a=(parseFloat(e.getAttribute("data-y"))||0)+t.dy;e.style.webkitTransform=e.style.transform="translate("+s+"px, "+a+"px)",e.setAttribute("data-x",s),e.setAttribute("data-y",a)}Object.defineProperty(e,"__esModule",{value:!0});var o=s(368);o(".w-app header").draggable({inertia:!0,restrict:{restriction:".bound",endOnly:!0,elementRect:{top:0,left:0,bottom:1,right:1}},autoScroll:!0,onmove:a,onend:function(t){}}),e["default"]={data:function(){return{hasFocus:!1,isMax:!1,isDeleted:!1}},methods:{bringToFront:function(t){this.$dispatch("bringToFront",t.currentTarget),this.$dispatch("loseFocus"),this.$set("hasFocus",!0)},closeApp:function(t){this.$set("isDeleted",!0),this.$dispatch("closeApp",t)},maxApp:function(t){this.$set("isMax",!this.isMax)},makeMe:function(t){var e=t.currentTarget;this.isDeleted?e.parentNode.removeChild(e):(e.classList.remove("animated"),e.classList.remove("fadeInDown"),this.$dispatch("addMe",e),this.$dispatch("loseFocus"),this.$set("hasFocus",!0))}},events:{loseFocus:function(){this.$set("hasFocus",!1)}},props:{title:{type:String,required:!0},loading:{type:Boolean},hasSubNav:{type:Boolean,"default":!1,required:!0}}}},353:function(t,e){},354:function(t,e){},355:function(t,e){},356:function(t,e){},357:function(t,e){},358:function(t,e){},359:function(t,e){},360:function(t,e){},361:function(t,e){},362:function(t,e){},363:function(t,e){},364:function(t,e){},365:function(t,e){},366:function(t,e){},726:function(t,e,s){function a(t){return s(o(t))}function o(t){return n[t]||function(){throw new Error("Cannot find module '"+t+"'.")}()}var n={"./af":183,"./af.js":183,"./ar":187,"./ar-ma":184,"./ar-ma.js":184,"./ar-sa":185,"./ar-sa.js":185,"./ar-tn":186,"./ar-tn.js":186,"./ar.js":187,"./az":188,"./az.js":188,"./be":189,"./be.js":189,"./bg":190,"./bg.js":190,"./bn":191,"./bn.js":191,"./bo":192,"./bo.js":192,"./br":193,"./br.js":193,"./bs":194,"./bs.js":194,"./ca":195,"./ca.js":195,"./cs":196,"./cs.js":196,"./cv":197,"./cv.js":197,"./cy":198,"./cy.js":198,"./da":199,"./da.js":199,"./de":201,"./de-at":200,"./de-at.js":200,"./de.js":201,"./dv":202,"./dv.js":202,"./el":203,"./el.js":203,"./en-au":204,"./en-au.js":204,"./en-ca":205,"./en-ca.js":205,"./en-gb":206,"./en-gb.js":206,"./en-ie":207,"./en-ie.js":207,"./en-nz":208,"./en-nz.js":208,"./eo":209,"./eo.js":209,"./es":211,"./es-do":210,"./es-do.js":210,"./es.js":211,"./et":212,"./et.js":212,"./eu":213,"./eu.js":213,"./fa":214,"./fa.js":214,"./fi":215,"./fi.js":215,"./fo":216,"./fo.js":216,"./fr":219,"./fr-ca":217,"./fr-ca.js":217,"./fr-ch":218,"./fr-ch.js":218,"./fr.js":219,"./fy":220,"./fy.js":220,"./gd":221,"./gd.js":221,"./gl":222,"./gl.js":222,"./he":223,"./he.js":223,"./hi":224,"./hi.js":224,"./hr":225,"./hr.js":225,"./hu":226,"./hu.js":226,"./hy-am":227,"./hy-am.js":227,"./id":228,"./id.js":228,"./is":229,"./is.js":229,"./it":230,"./it.js":230,"./ja":231,"./ja.js":231,"./jv":232,"./jv.js":232,"./ka":233,"./ka.js":233,"./kk":234,"./kk.js":234,"./km":235,"./km.js":235,"./ko":236,"./ko.js":236,"./ky":237,"./ky.js":237,"./lb":238,"./lb.js":238,"./lo":239,"./lo.js":239,"./lt":240,"./lt.js":240,"./lv":241,"./lv.js":241,"./me":242,"./me.js":242,"./mk":243,"./mk.js":243,"./ml":244,"./ml.js":244,"./mr":245,"./mr.js":245,"./ms":247,"./ms-my":246,"./ms-my.js":246,"./ms.js":247,"./my":248,"./my.js":248,"./nb":249,"./nb.js":249,"./ne":250,"./ne.js":250,"./nl":251,"./nl.js":251,"./nn":252,"./nn.js":252,"./pa-in":253,"./pa-in.js":253,"./pl":254,"./pl.js":254,"./pt":256,"./pt-br":255,"./pt-br.js":255,"./pt.js":256,"./ro":257,"./ro.js":257,"./ru":258,"./ru.js":258,"./se":259,"./se.js":259,"./si":260,"./si.js":260,"./sk":261,"./sk.js":261,"./sl":262,"./sl.js":262,"./sq":263,"./sq.js":263,"./sr":265,"./sr-cyrl":264,"./sr-cyrl.js":264,"./sr.js":265,"./ss":266,"./ss.js":266,"./sv":267,"./sv.js":267,"./sw":268,"./sw.js":268,"./ta":269,"./ta.js":269,"./te":270,"./te.js":270,"./th":271,"./th.js":271,"./tl-ph":272,"./tl-ph.js":272,"./tlh":273,"./tlh.js":273,"./tr":274,"./tr.js":274,"./tzl":275,"./tzl.js":275,"./tzm":277,"./tzm-latn":276,"./tzm-latn.js":276,"./tzm.js":277,"./uk":278,"./uk.js":278,"./uz":279,"./uz.js":279,"./vi":280,"./vi.js":280,"./x-pseudo":281,"./x-pseudo.js":281,"./zh-cn":282,"./zh-cn.js":282,"./zh-tw":283,"./zh-tw.js":283};a.keys=function(){return Object.keys(n)},a.resolve=o,t.exports=a,a.id=726},729:function(t,e){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcgaWQ9InN2ZzIiIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBoZWlnaHQ9IjE4LjA2Mm1tIiB3aWR0aD0iMTguMDYybW0iIHZlcnNpb249IjEuMSIgeG1sbnM6Y2M9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zIyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB2aWV3Qm94PSIwIDAgNjQuMDAwMDA0IDY0LjAwMDAwNCI+CiA8ZyBpZD0ibGF5ZXIxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNjkuMTM3IC02MzAuNjUpIj4KICA8Y2lyY2xlIGlkPSJwYXRoNDEzNiIgY3g9IjEwMS4xNCIgc3Ryb2tlPSIjZDEwMDAwIiBjeT0iNjYyLjY1IiByPSIyMS45IiBzdHJva2UtZGFzaGFycmF5PSI0MC4zOTk5ODA2OSwgMjAuMTk5OTkwMzUiIHN0cm9rZS13aWR0aD0iMjAuMiIvPgogPC9nPgo8L3N2Zz4K"},730:function(t,e){t.exports=' <w-app title="System Settings" class="app--settings animated fadeInDown" @keyup.up="monitorKeys(\'up\')" @keyup.down="monitorKeys(\'down\')" :has-sub-nav=false> <label class=label>Background Image:</label> <p class=control> <input @change=previewBackground id=the-file-input type=file> </p> <figure v-if="backgroundData !== \'\'" class="image is-16x9 animated fadeInDown"> <img :src=backgroundData> </figure> <p class=control> <a @click=saveBackground class="button is-info"> <span class=icon> <i class="fa fa-cloud-upload"></i> </span> <span>Save Background</span> </a> </p> </w-app> '},731:function(t,e){t.exports=' <w-app title=Terminal class="app--terminal animated fadeInDown" :has-sub-nav=true @keyup.up="monitorKeys(\'up\')" @keyup.down="monitorKeys(\'down\')" @click=giveFocus> <nav slot=header> <p class=panel-tabs> <a @click="openNew(\'terminal\')" class="" href=#>New</a> </p> </nav> <div class=terminal--output> <div class=terminal--result v-if="results.length > 0" v-for="(idx, result) in results" track-by=$index> <span>$ {{ result.command }}</span> <ul v-if="result.dataType === \'list\'"> <li v-for="(x, item) in result.data" track-by=$index>{{item}}</li> </ul> <span v-else><br/>{{result.data}}</span> </div> </div> <form @submit.prevent=runCommand class=terminal--input> <p class="control has-icon"> <input class=input type=text v-model=command placeholder="" autofocus> <i class="fa fa-dollar"></i> </p> </form> </w-app> '},732:function(t,e){t.exports=' <w-app title=Weather class="app--weather animated fadeInDown" @keyup.up="monitorKeys(\'up\')" @keyup.down="monitorKeys(\'down\')" :has-sub-nav=false :loading=isLoadingWeather> <div slot=header class=level> <p v-if=city>Weather for: {{city}}</p> <p v-else>Please input your location</p> </div> <div class=weather--output> <div v-if="weather.temp !== \'\'"> <p>It\'s currently <strong>{{weather.temp}}</strong>°F and <strong>{{weather.condition}}</strong></p> </div> <div v-else> <p>Enter a location below.</p> </div> </div> <form @submit.prevent=getWeather> <label class=label>Zip Code:</label> <div class="control is-grouped"> <p class="control has-icon is-expanded"> <input @submit.prevent=getWeather class="input is-large" :class="{\'is-disabled\' : isLoadingWeather}" type=text v-model=zip placeholder=68506 autofocus> <i class="fa fa-map-marker"></i> </p> <p class=control> <a @click.prevent=getWeather class="button is-info is-large" :class="{\'is-loading is-disabled\' : isLoadingWeather}"> <i class="fa fa-search"></i> </a> </p> </div> </form> </w-app> '},733:function(t,e){t.exports=' <w-app title=Text-Editor class="app--text-editor animated fadeInDown" :has-sub-nav=true _v-082eb0c5=""> <nav slot=header _v-082eb0c5=""> <p class=panel-tabs _v-082eb0c5=""> <a @click=getFileSystem class="" href=# _v-082eb0c5="">Open</a> <a @click=saveFile class="" href=# _v-082eb0c5="">Save</a> <a @click="openNew(\'textEditor\')" class="" href=# _v-082eb0c5="">New</a> </p> </nav> <p class=control _v-082eb0c5=""> <textarea class=textarea v-model=fileData placeholder=Type.. _v-082eb0c5="">{{fileData}}</textarea> </p> </w-app> '},734:function(t,e){t.exports=' <div class="osDesktop bound" v-bind:style=osDesktop _v-1d77d1a6=""> <component v-for="app in apps" :is=app.name _v-1d77d1a6=""></component> <file-system-select _v-1d77d1a6=""></file-system-select> <file-system-save _v-1d77d1a6=""></file-system-save> </div> '},735:function(t,e){t.exports=' <div class=modal v-bind:class="{\'is-active\': isActive}" _v-1ed75dca=""> <div class=modal-background _v-1ed75dca=""></div> <div class=modal-card _v-1ed75dca=""> <header class=modal-card-head _v-1ed75dca=""> <p class=modal-card-title _v-1ed75dca="">File Name</p> <button @click="closeFileSystem(\'cancel\')" class=delete _v-1ed75dca=""></button> </header> <section class=modal-card-body _v-1ed75dca=""> <p class=control _v-1ed75dca=""> <input class=input type=text v-model=fileName placeholder=tex.txt _v-1ed75dca=""> </p> </section> <footer class=modal-card-foot _v-1ed75dca=""> <a @click="closeFileSystem(\'save\')" class="button is-primary" _v-1ed75dca="">Save File</a> <a @click="closeFileSystem(\'cancel\')" class=button _v-1ed75dca="">Cancel</a> </footer> </div> </div> '},736:function(t,e){t.exports=' <div @click=logIt id=app _v-2bb1ab8a=""> <nav-bar _v-2bb1ab8a=""></nav-bar> <os-desktop _v-2bb1ab8a=""></os-desktop> </div> '},737:function(t,e){t.exports=' <w-app title=Calculator class="app--calculator animated fadeInDown" @keyup=monitorKeys _v-3fc3dacd=""> <p class=control _v-3fc3dacd=""> </p><div class=calculatorApp _v-3fc3dacd=""> <input class="input calculatorApp-input" value={{calculatorAppInput}} v-model=calculatorAppInput _v-3fc3dacd=""> <div class=calculatorApp-buttons-parent _v-3fc3dacd=""> <button @click=handleButtonPress class="button is-outlined calculatorApp-buttons-child" _v-3fc3dacd="">7</button> <button @click=handleButtonPress class="button is-outlined calculatorApp-buttons-child" _v-3fc3dacd="">8</button> <button @click=handleButtonPress class="button is-outlined calculatorApp-buttons-child" _v-3fc3dacd="">9</button> <button @click=handleButtonPress class="button is-outlined calculatorApp-buttons-child" _v-3fc3dacd="">+</button> <button @click=handleButtonPress class="button is-outlined calculatorApp-buttons-child" _v-3fc3dacd="">4</button> <button @click=handleButtonPress class="button is-outlined calculatorApp-buttons-child" _v-3fc3dacd="">5</button> <button @click=handleButtonPress class="button is-outlined calculatorApp-buttons-child" _v-3fc3dacd="">6</button> <button @click=handleButtonPress class="button is-outlined calculatorApp-buttons-child" _v-3fc3dacd="">-</button> <button @click=handleButtonPress class="button is-outlined calculatorApp-buttons-child" _v-3fc3dacd="">1</button> <button @click=handleButtonPress class="button is-outlined calculatorApp-buttons-child" _v-3fc3dacd="">2</button> <button @click=handleButtonPress class="button is-outlined calculatorApp-buttons-child" _v-3fc3dacd="">3</button> <button @click=handleButtonPress class="button is-outlined calculatorApp-buttons-child" _v-3fc3dacd="">*</button> <button @click=handleButtonPress class="button is-outlined calculatorApp-buttons-child" _v-3fc3dacd="">0</button> <button @click=handleButtonPress class="button is-outlined calculatorApp-buttons-child" _v-3fc3dacd="">.</button> <button @click=handleButtonPress class="button is-outlined calculatorApp-buttons-child" _v-3fc3dacd="">=</button> <button @click=handleButtonPress class="button is-outlined calculatorApp-buttons-child" _v-3fc3dacd="">/</button> <button @click=handleButtonPress class="button is-outlined calculatorApp-buttons-child" _v-3fc3dacd="">clear</button> </div> </div> <p _v-3fc3dacd=""></p> </w-app> '},738:function(t,e,s){t.exports=' <nav class="nav os--nav has-shadow" _v-4dd708d2=""> <div class="" _v-4dd708d2=""> <div class=nav-left _v-4dd708d2=""> <div @click=toggleMenu class=nav-item _v-4dd708d2=""> <figure class="image is-32x32" _v-4dd708d2=""> <img src='+s(729)+' _v-4dd708d2=""> </figure> <span style="line-height: 36px" _v-4dd708d2="">Menu</span> </div> </div> </div> <aside class="menu nav--apps" v-bind:class="{\'is-visible animated slideInLeft\': isMenuActive}" _v-4dd708d2=""> <p class=menu-label _v-4dd708d2=""> Apps </p> <ul class=menu-list _v-4dd708d2=""> <li class=nav-item--app @click=openApp(app) v-for="app of apps" _v-4dd708d2=""><a href=# _v-4dd708d2="">{{app}}</a></li> </ul> </aside> </nav> '},739:function(t,e){t.exports=' <div class=modal v-bind:class="{\'is-active\': isActive}" _v-62f1c089=""> <div class=modal-background _v-62f1c089=""></div> <div class=modal-card _v-62f1c089=""> <header class=modal-card-head _v-62f1c089=""> <p class=modal-card-title _v-62f1c089="">Browse Files</p> <button @click="closeFileSystem(\'cancel\')" class=delete _v-62f1c089=""></button> </header> <section class=modal-card-body _v-62f1c089=""> <ul _v-62f1c089=""> <li class=file @click="setActiveFile(this, file)" v-for="file in files" track-by=$index _v-62f1c089=""> <label class=radio _v-62f1c089=""> <input type=radio name=file _v-62f1c089=""> {{file}} </label> </li> </ul> </section> <footer class=modal-card-foot _v-62f1c089=""> <a @click="closeFileSystem(\'save\')" class="button is-primary" _v-62f1c089="">Select File</a> <a @click="closeFileSystem(\'cancel\')" class=button _v-62f1c089="">Cancel</a> </footer> </div> </div> '},740:function(t,e){t.exports=' <div class="w-app card" v-bind:class="[loading ? \'isLoading\': \'\', isDeleted ? \'animated zoomOutDown\': \'\', isMax ? \'is-fullwidth\' : \'\']" @click=bringToFront @mousedown=bringToFront @animationend=makeMe draggable=true tabindex=0 _v-ca6846e8=""> <header class=card-header _v-ca6846e8=""> <p class=card-header-title _v-ca6846e8=""> {{title}} </p> <a class=card-header-icon _v-ca6846e8=""> <i class="fa fa-minus-square" _v-ca6846e8=""></i> </a> <a class=card-header-icon @click=maxApp _v-ca6846e8=""> <i class=fa v-bind:class="[isMax ? \'fa-compress\': \'fa-expand\']" _v-ca6846e8=""></i> </a> <a class=card-header-icon @click=closeApp _v-ca6846e8=""> <i class="fa fa-times" _v-ca6846e8=""></i> </a> </header> <header v-if=hasSubNav class=card-header _v-ca6846e8=""> <slot name=header _v-ca6846e8=""></slot> </header> <div class=card-content _v-ca6846e8=""> <div class=content _v-ca6846e8=""> <slot _v-ca6846e8=""></slot> </div> </div> </div> '},741:function(t,e,s){var a,o;s(362),a=s(300),o=s(736),t.exports=a||{},t.exports.__esModule&&(t.exports=t.exports["default"]),o&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=o)},742:function(t,e,s){var a,o;s(363),a=s(302),o=s(737),t.exports=a||{},t.exports.__esModule&&(t.exports=t.exports["default"]),o&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=o)},743:function(t,e,s){var a,o;s(356),a=s(303),o=s(730),t.exports=a||{},t.exports.__esModule&&(t.exports=t.exports["default"]),o&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=o)},744:function(t,e,s){var a,o;s(357),a=s(304),o=s(731),t.exports=a||{},t.exports.__esModule&&(t.exports=t.exports["default"]),o&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=o)},745:function(t,e,s){var a,o;s(359),a=s(305),o=s(733),t.exports=a||{},t.exports.__esModule&&(t.exports=t.exports["default"]),o&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=o)},746:function(t,e,s){var a,o;s(358),a=s(306),o=s(732),t.exports=a||{},t.exports.__esModule&&(t.exports=t.exports["default"]),o&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=o)},747:function(t,e,s){var a,o;s(361),a=s(307),o=s(735),t.exports=a||{},t.exports.__esModule&&(t.exports=t.exports["default"]),o&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=o)},748:function(t,e,s){var a,o;s(365),a=s(308),o=s(739),t.exports=a||{},t.exports.__esModule&&(t.exports=t.exports["default"]),o&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=o)},749:function(t,e,s){var a,o;s(364),a=s(309),o=s(738),t.exports=a||{},t.exports.__esModule&&(t.exports=t.exports["default"]),o&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=o)},750:function(t,e,s){var a,o;s(360),a=s(310),o=s(734),t.exports=a||{},t.exports.__esModule&&(t.exports=t.exports["default"]),o&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=o)},763:function(t,e){}});
//# sourceMappingURL=app.6c2001bdb98be3e26848.js.map