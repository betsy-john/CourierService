function $_global_sharingmodern(){if("undefined"==typeof g_all_modules)g_all_modules={};g_all_modules["sharingmodern.js"]={version:{rmj:16,rmm:0,rup:8321,rpr:1209}};typeof spWriteProfilerMark=="function"&&spWriteProfilerMark("perfMarkBegin_sharingmodern.js");if(typeof ElementCreator==="undefined")ElementCreator=function(d,b){var a=Boolean(b)?b:document.createElement("textarea");switch(d.toLowerCase()){case"textarea":c()}return a;function c(){a:;var i="placeholder"in a,e;if(i){var g=document.createElement("div");g.className="ms-helperText ms-hide";document.body.appendChild(g);var j=CSSUtil.getCurrentStyleCorrect(g,"color","color");document.body.removeChild(g);var h=false,o=document.getElementsByTagName("head")[0],b=document.createElement("style");b.type="text/css";var c="::-webkit-input-placeholder { color:#color; } ::-moz-placeholder { color:#color; opacity:1; } :-ms-input-placeholder { color:#color; } input:-moz-placeholder { color:#color; opacity:1; }";c=c.replace(/#color/g,j);try{if(typeof b.styleSheet!="undefined"&&b.styleSheet!=null&&typeof b.styleSheet.cssText!="undefined"){b.styleSheet.cssText=c;h=true}}catch(p){}!h&&b.appendChild(document.createTextNode(c));o.appendChild(b)}else{var f=true,d="";a.setAttribute("value","");Object.defineProperty(Object(a),"placeholder",{"get":function(){a:;return d},"set":function(b){d=b;e(a.value);return d}});Object.defineProperty(Object(a),"value",{"get":function(){a:;return f?"":a.innerText},"set":function(b){e(b);return a.value}});var m=a.getAttribute;a.getAttribute=function(b){var c=b!=null?b.toLowerCase():null;return c=="value"?this.value:m.call(a,b)};var n=a.setAttribute;a.setAttribute=function(b,c){var d=b!=null?b.toLowerCase():null;if(d=="placeholder")this.placeholder=c;else n.call(a,b,c)};e=function(b){f=b==""||b==null;if(f){CSSUtil.AddClass(a,"ms-helperText");a.innerText=d}else{CSSUtil.RemoveClass(a,"ms-helperText");a.innerText=b}};var k=function(){if(f){CSSUtil.RemoveClass(a,"ms-helperText");a.innerText=""}},l=function(){e(a.innerText)};AddEvtHandler(a,"onfocus",k,false);AddEvtHandler(a,"onblur",l,false)}}};DialogOpened=false;(function(){a:;function d(b){var c=b;if(Boolean(b)){var a=document.createElement("A");a.style.display="none";a.href=b;document.body.appendChild(a);c=a.href}return c}function c(b){return typeof Flighting!=="undefined"&&Flighting.VariantConfiguration!=null&&Flighting.VariantConfiguration.IsExpFeatureClientEnabled!=null&&Flighting.VariantConfiguration.IsExpFeatureClientEnabled(b)}function a(g,b,c,e,f){if(!Boolean(c)||!Boolean(e)){typeof b=="function"&&b("Invalid sharing arguments.");return}if(!Boolean(f))f=null;var i=new URI(c),a=Boolean(i.getScheme())?c:d(c),h=function(d){a:;if(a.substring(a.length-1)=="/")a=a.substring(0,a.length-1);var h=a+(e.charAt(0)!="/"?"/":"")+e,c=new XMLHttpRequest;c.open("POST",h,true);c.setRequestHeader("Content-type","application/json;odata=verbose");c.setRequestHeader("x-requestdigest",d);c.setRequestHeader("x-requested-with","XMLHttpRequest");c.setRequestHeader("accept","application/json; odata=verbose");c.onreadystatechange=function(){a:;if(IsXhrReady(c)){var a=null,d=null;try{a=JSON.parse(c.responseText)}catch(e){d=e}if(Boolean(a))if(Boolean(a.d)&&Boolean(a.d.sharingErrorMessage))d=a.d.sharingErrorMessage;else if(Boolean(a.error)){d="";if(Boolean(a.error.message))d=a.error.message.value}if(typeof d!="undefined"&&d!=null||!Boolean(a)||!Boolean(a.d))typeof b=="function"&&b(c,d);else typeof g=="function"&&g(c,a.d)}};c.send(f)};EnsureScript("core.js","GetRequestDigest",function(){a:;var b=GetRequestDigest(a,h);Boolean(b)&&h(b)})}ShowShareV3=function(m,i,h,n,g,f,a,k,d,l){if(!OffSwitch.IsActive("E9ADB487-8353-4BC9-A17E-84B460CF7B9F"))if(DialogOpened)return;else DialogOpened=true;var j=function(a,d){if(c(1071))a(null,{shareUiUrl:window._spPageContextInfo.webAbsoluteUrl+"/"+window._spPageContextInfo.layoutsUrl+"/sharedialog.aspx?clientId=clientId&listId="+i+"&listItemId="+h});else b(a,d,typeof contextWebUrl!="undefined"&&Boolean(contextWebUrl)?contextWebUrl:m,i,h)},e=SP.UI.ModalDialog.showWaitScreenWithNoClose(SP.Res.genericLoading,null,null,null);EnsureScriptFunc("SP.UI.Dialog.js","SP.UI.ModalDialog.showWaitScreenWithNoClose",function(){a:;e.close(0);var b;j(function(p,o){var h,i=false,m=function(j){if(!j||!j.data)return;var g;try{g=JSON.parse(j.data)}catch(w){return}var e=g.name;if(e==="share_resize")c.autoSize();else if(e==="share_ready"){b.close(0);if(!OffSwitch.IsActive("9F38267C-EAFC-4B19-BAAE-D8BEB0340D39"))document.getElementsByClassName("ms-dlgContent")[0].style.zIndex=1e5;h.style.visibility="visible";var o=h.getElementsByTagName("iframe")[0];!OffSwitch.IsActive("f476ef89-a938-4518-8b8a-2123cc242a40")&&o.setAttribute("role","presentation");!OffSwitch.IsActive("280AC1A6-CAC4-4803-92FB-91CC5BD7676E")&&o.focus();if(!OffSwitch.IsActive("486E914A-A1A5-4FA2-B38D-E5B28C249619")){var r={MessageId:"Blur_Focus",SendTime:Date.now(),Values:{ShareCorrelation:l}},v=document.getElementById("WebApplicationFrame").contentWindow;v.postMessage(JSON.stringify(r),d)}}else if(e==="share_outlookClicked"||e==="share_dismiss")c.close(0);else if(e==="share_grantAccessCompleted"){i=true;b.close(0);for(var m=[],k=0;k<a.length;k++){var p=a[k];m.push({Id:p.Id,Provider:p.Provider,Status:g.successful?0:3})}var q={MessageId:"CheckUserAccessAndGrantPermissions_Result",SendTime:Date.now(),Values:{Id:f,DialogCanceled:false,Persons:m}},u=document.getElementById("WebApplicationFrame").contentWindow;u.postMessage(JSON.stringify(q),d);c.close(0)}else if(e==="share_readyForRecipients"){var n=[];a.forEach(function(a){a:;n.push(a.Id)},this);var t={name:"atMention_defaultRecipients",recipientIds:n},s=c.get_frameElement();s.contentWindow.postMessage(JSON.stringify(t),"*")}};window.addEventListener("message",m,false);var e=o.shareUiUrl;if(n)e=e.replace("=clientId","=wac");if(g){e+="&mode=atMention";e+="&accessChecked="+(k?"true":"false")}var j=false;if(!OffSwitch.IsActive("08f4f42f-f019-4f45-9eb3-40bc2f7c83fd"))j=true;var c=SP.UI.ModalDialog.showModalDialog({url:e,width:320,autoSize:true,title:Strings.STS.L_Share_SubmitButton_Text,hideTitle:j,dialogReturnValueCallback:function(){a:;if(g&&!i){for(var c=[],b=0;b<a.length;b++){var e=a[b];c.push({Id:e.Id,Provider:e.Provider,Status:3})}var h={MessageId:"CheckUserAccessAndGrantPermissions_Result",SendTime:Date.now(),Values:{Id:f,DialogCanceled:true,Persons:c}},j=document.getElementById("WebApplicationFrame").contentWindow;j.postMessage(JSON.stringify(h),d)}if(!OffSwitch.IsActive("E9ADB487-8353-4BC9-A17E-84B460CF7B9F"))DialogOpened=false}});h=c.get_dialogElement();h.style.visibility="hidden";b=SP.UI.ModalDialog.showWaitScreenWithNoClose(SP.Res.genericLoading,null,null,null);!OffSwitch.IsActive("DB8DD0E3-CD72-4597-A888-ADD1D8BD366D")&&window.addEventListener("keydown",function(a){a.keyCode===27&&c.close(0)},false)},function(b,a){e.close(0);alert(a)})})};function b(c,b,g,f,d){var e="_api/web/Lists('"+f+"')/GetItemById('"+d+"')/GetSharingInformation";a(c,b,g,e,"")}})();typeof spWriteProfilerMark=="function"&&spWriteProfilerMark("perfMarkEnd_sharingmodern.js")}function ULSRtp(){var a={};a.ULSTeamName="Microsoft SharePoint Foundation";a.ULSFileName="sharingmodern.commentedjs";return a}var ShowShareV3,DialogOpened;$_global_sharingmodern();