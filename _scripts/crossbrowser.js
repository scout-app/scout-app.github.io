function log(e){window.console&&showLog&&console.log(e)}function css_browser_selector(e){function i(){var e=window.outerWidth||m.clientWidth,i=window.outerHeight||m.clientHeight;o.orientation="landscape",e<i&&(o.orientation="portrait"),m.className=m.className.replace(/ ?orientation_\w+/g,"").replace(/ [min|max|cl]+[w|h]_\d+/g,"");for(var a=r-1;a>=0;a--)if(e>=n[a]){o.maxw=n[a];break}var t="";for(var p in o)t+=" "+p+"_"+o[p];return m.className=m.className+t,t}var o={},n=[320,480,640,768,1024,1152,1280,1440,1680,1920,2560],r=n.length,a=e.toLowerCase(),t=function(e){return RegExp(e,"i").test(a)},p=function(e,i){i=i.replace(".","_");for(var o=i.indexOf("_"),n="";o>0;)n+=" "+e+i.substring(0,o),o=i.indexOf("_",o+1);return n+=" "+e+i},s="gecko",d="webkit",g="chrome",l="firefox",x="safari",c="opera",E="mobile",R="android",$="blackberry",w="lang_",_="device_",m=document.documentElement,b=[!/opera|webtv/i.test(a)&&/msie\s(\d+)/.test(a)?"ie ie"+(/trident\/4\.0/.test(a)?"8":RegExp.$1):t("firefox/")?s+" "+l+(/firefox\/((\d+)(\.(\d+))(\.\d+)*)/.test(a)?" "+l+RegExp.$2+" "+l+RegExp.$2+"_"+RegExp.$4:""):t("gecko/")?s:t("opera")?c+(/version\/((\d+)(\.(\d+))(\.\d+)*)/.test(a)?" "+c+RegExp.$2+" "+c+RegExp.$2+"_"+RegExp.$4:/opera(\s|\/)(\d+)\.(\d+)/.test(a)?" "+c+RegExp.$2+" "+c+RegExp.$2+"_"+RegExp.$3:""):t("konqueror")?"konqueror":t("blackberry")?$+(/Version\/(\d+)(\.(\d+)+)/i.test(a)?" "+$+RegExp.$1+" "+$+RegExp.$1+RegExp.$2.replace(".","_"):/Blackberry ?(([0-9]+)([a-z]?))[\/|;]/gi.test(a)?" "+$+RegExp.$2+(RegExp.$3?" "+$+RegExp.$2+RegExp.$3:""):""):t("android")?R+(/Version\/(\d+)(\.(\d+))+/i.test(a)?" "+R+RegExp.$1+" "+R+RegExp.$1+RegExp.$2.replace(".","_"):"")+(/Android (.+); (.+) Build/i.test(a)?" "+_+RegExp.$2.replace(/ /g,"_").replace(/-/g,"_"):""):t("chrome")?d+" "+g+(/chrome\/((\d+)(\.(\d+))(\.\d+)*)/.test(a)?" "+g+RegExp.$2+(RegExp.$4>0?" "+g+RegExp.$2+"_"+RegExp.$4:""):""):t("iron")?d+" iron":t("applewebkit/")?d+" "+x+(/version\/((\d+)(\.(\d+))(\.\d+)*)/.test(a)?" "+x+RegExp.$2+" "+x+RegExp.$2+RegExp.$3.replace(".","_"):/ Safari\/(\d+)/i.test(a)?"419"==RegExp.$1||"417"==RegExp.$1||"416"==RegExp.$1||"412"==RegExp.$1?" "+x+"2_0":"312"==RegExp.$1?" "+x+"1_3":"125"==RegExp.$1?" "+x+"1_2":"85"==RegExp.$1?" "+x+"1_0":"":""):t("mozilla/")?s:"",t("android|mobi|mobile|j2me|iphone|ipod|ipad|blackberry|playbook|kindle|silk")?E:"",t("j2me")?"j2me":t("ipad|ipod|iphone")?(/CPU( iPhone)? OS (\d+[_|\.]\d+([_|\.]\d+)*)/i.test(a)?"ios"+p("ios",RegExp.$2):"")+" "+(/(ip(ad|od|hone))/gi.test(a)?RegExp.$1:""):t("playbook")?"playbook":t("kindle|silk")?"kindle":t("playbook")?"playbook":t("mac")?"mac"+(/mac os x ((\d+)[.|_](\d+))/.test(a)?" mac"+RegExp.$2+" mac"+RegExp.$1.replace(".","_"):""):t("win")?"win"+(t("windows nt 6.2")?" win8":t("windows nt 6.1")?" win7":t("windows nt 6.0")?" vista":t("windows nt 5.2")||t("windows nt 5.1")?" win_xp":t("windows nt 5.0")?" win_2k":t("windows nt 4.0")||t("WinNT4.0")?" win_nt":""):t("freebsd")?"freebsd":t("x11|linux")?"linux":"",/[; |\[](([a-z]{2})(\-[a-z]{2})?)[)|;|\]]/i.test(a)?(w+RegExp.$2).replace("-","_")+(""!=RegExp.$3?(" "+w+RegExp.$1).replace("-","_"):""):"",t("ipad|iphone|ipod")&&!t("safari")?"ipad_app":""];window.onresize=i,i();var f=b.join(" ")+" js ";return m.className=(f+m.className.replace(/\b(no[-|_]?)?js\b/g,"")).replace(/^ /,"").replace(/ +/g," "),f}var showLog=!0;css_browser_selector(navigator.userAgent);
