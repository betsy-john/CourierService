Type.registerNamespace("CommonUI");CommonUI.u=function(){};CommonUI.u.registerInterface("CommonUI.u");CommonUI.g=function(n,t,i){this.L=Function.createDelegate(this,this.bh);this.K=Function.createDelegate(this,this.bg);this.J=Function.createDelegate(this,this.be);this.M=Function.createDelegate(this,this.bi);this.I=Function.createDelegate(this,this.bd);this.H=Function.createDelegate(this,this.bc);this.G=Function.createDelegate(this,this.bb);this.x=Function.createDelegate(this,this.bf);this.bk(n);this.bj(t);this.i=i;this.z=0;this.g(1)};CommonUI.g.prototype={t:null,s:null,i:null,p:!1,Y:null,W:"",F:0,k:null,X:null,v:null,m:null,u:null,n:null,N:null,o:null,R:null,ba:null,l:null,q:null,j:null,V:null,E:null,Q:!1,U:!1,P:"",O:"",A:!1,T:"",S:"",C:!1,B:null,D:null,r:null,Z:!1,y:null,z:0,d:function(n){return this.z=n,n},bk:function(n){return this.t!==n&&(this.t=n,this.v&&(this.v.innerText=this.t)),n},bj:function(n){return this.s!==n&&(this.s=n,this.m&&(this.m.innerText=this.s)),n},g:function(n){return this.F=n,this.F!==4&&(this.Y=""),n},b:function(){return this.E},f:function(n){return this.E=n,n},c:function(n){return this.p!==n&&(this.p=n,this.q&&(this.q.style.display=this.p?"table-cell":"none")),n},a:function(n,t,i,r){this.P=n;this.B=t;this.Q=!0;this.O=i;this.A=r},e:function(n,t,i,r){this.T=n;this.D=t;this.U=!0;this.S=i;this.C=r},h:function(n,t){var i={};i.WacSessionId=Common.a.n;i.ActionName="BusinessBar"+n;i.InputMethod=t;Diag.a.a(35489761,207,50,JSON.stringify(i))},bb:function(n){return this.B(n.g),this.h("ButtonOne","Mouse"),this.A&&(this.h("Close","Mouse_ButtonOne"),this.w(n)),!0},bc:function(n){return this.D(n.g),this.h("ButtonTwo","Mouse"),this.C&&(this.h("Close","Mouse_ButtonTwo"),this.w(n)),!0},bd:function(n){return this.r(n.g),this.h("Link","Mouse"),!0},bi:function(n){return n.a.keyCode===13&&!n.a.altKey?(this.r(n.g),this.h("Link","Keyboard"),!0):!1},be:function(n){return n.a.keyCode===13&&!n.a.altKey&&this.i?(this.i(n.g,n),this.h("Invoke","Keyboard"),!0):!1},dispose:function(){this.k&&(Common.a.a().d().b("click",this.k,this.x),this.Z&&Common.a.a().u().c(this.k,this.x));this.j&&(Common.a.a().d().b("click",this.j,this.K),Common.a.a().f().b("keyup",this.j,this.L));this.n&&Common.a.a().d().b("click",this.n,this.G);this.o&&Common.a.a().d().b("click",this.o,this.H);this.l&&this.r&&(Common.a.a().d().b("click",this.l,this.I),Common.a.a().f().b("keyup",this.l,this.M));this.u&&Common.a.a().f().b("keyup",this.u,this.J);this.W=null;this.X=null;this.v=null;this.k=null;this.m=null;this.u=null;this.n=null;this.N=null;this.o=null;this.R=null;this.l=null;this.ba=null;this.V=null;this.q=null;this.j=null;this.y=null},bf:function(n){return this.h("Invoke","Mouse"),!!this.i&&this.i(this,n)},bg:function(n){return this.h("Close","Mouse"),this.w(n),!0},bh:function(n){return n.a.keyCode===13&&!n.a.altKey?(this.h("Close","Keyboard"),this.w(n),!0):!1},w:function(n){var i=n.g,t;this.y.a(i);i.b()&&(t=Common.a.c(),t.h=10,t.j=n.b,i.b()(i),t.h=0,t.j=0)}};CommonUI.r=function(n,t,i,r){this.E=Function.createDelegate(this,this.a);this.O=Function.createDelegate(this,this.S);CommonUI.r.initializeBase(this,[document.createElement("div")]);this.I=n;this.H=t;this.G=i;this.F=r;this.x=t.ownerDocument;this.t=!1;this.k(!1);this.g(!1)};CommonUI.r.prototype={I:null,H:null,x:null,G:null,u:null,s:null,m:null,w:null,n:null,p:null,z:null,F:null,t:!1,y:!1,A:!1,D:null,L:null,f:function(n){return this.L=n,n},i:function(){return this.u||(this.u=this.x.createElement("div"),this.u.id=this.B("WACCalloutOuter"),this.u.className="WACCalloutOuter",this.u.setAttribute("role","dialog"),this.u.style.width=this.q+"px"),this.u},d:function(){var n,t;return this.s||(this.s=this.x.createElement("div"),this.s.id=this.B("WACCalloutBeakContainer"),this.s.className="WACCalloutBeakContainer",n="CalloutBeakTopFilled_32x16x32",(this.o===5||this.o===6||this.o===4)&&(n="CalloutBeakBottomFilled_32x16x32"),t=Common.A.a(32,16,n,"WACCalloutBeak",!0,""),this.s.appendChild(t)),this.s},j:function(n){return this.s=n,n},q:0,c:function(){return this.q},b:function(){return this.t},l:function(n){return this.D===n?n:(this.D=n,this.p&&(this.p.innerText=this.D),n)},K:null,o:0,e:function(n){return this.o=n,n},k:function(n){return this.y===n?n:(this.y=n,this.m&&(this.m.contains(this.n)&&!this.y?this.m.removeChild(this.n):!this.m.contains(this.n)&&this.y&&this.P()),n)},g:function(n){return this.A===n?n:(this.A=n,this.m&&(this.m.contains(this.p)&&!this.A?this.m.removeChild(this.p):!this.m.contains(this.p)&&this.A&&this.Q()),n)},h:function(){this.t||(this.T(),this.R(),this.H.appendChild(this.i()),this.i().style.display="Block",this.V(),this.t=!0)},a:function(){this.t&&(this.U(),this.H.removeChild(this.i()),this.t=!1)},dispose:function(){this.a();this.u=null;this.m=null;this.s=null;this.w=null;this.n=null;this.p=null;Sys.Component.prototype.dispose.call(this)},B:function(n){return this.get_element().id+n},T:function(){this.m=this.x.createElement("div");this.m.id=this.B("WACCalloutHeader");this.m.className="WACCalloutHeader";this.y&&this.P();this.A&&this.Q();this.w=this.x.createElement("div");this.w.id=this.B("WACCalloutContent");this.w.className="WACCalloutContent";this.w.style.width=this.q>190?this.q-26+"px":"164px";this.w.appendChild(this.L);this.i().appendChild(this.d());this.i().appendChild(this.m);this.i().appendChild(this.w)},P:function(){this.n=this.x.createElement("a");this.n.className="WACCalloutCloseAnchor";this.n.id=this.B("WACCalloutCloseAnchor");this.n.href="#";this.m.appendChild(this.n);var n=Common.A.a(16,16,"ClosePaneGlyph_16x16x32","WACCalloutCloseIcon",!0,$a.b);this.n.appendChild(n)},Q:function(){this.p=this.x.createElement("div");this.p.className="WACCalloutTitle UIFontBold";this.p.style.width=this.q>190?this.q-30+"px":"160px";this.p.id=this.B("WACCalloutTitle");this.p.innerText=this.D;this.m.contains(this.n)?this.m.insertBefore(this.p,this.n):this.m.appendChild(this.p)},V:function(){var t=this.I,i,r,u,n,e,f;this.o===1?(i=this.K.y+16,r=-16):this.o!==2&&this.o!==3&&this.o?(i=t.y-this.i().clientHeight-17,r=this.i().clientHeight-1):(i=t.y+t.height+15,r=-15);this.i().style.top=i+"px";this.d().style.top=r+"px";this.o===1?(n=this.K.x-16,this.i().style.left="50%",this.i().style.marginLeft=-this.q/2+"px",e=Sys.UI.DomElement.getBounds(this.i()),this.d().style.left=n-e.x+"px"):(f=t.x+this.I.width/2,this.o===2||this.o===5?(n=20,u=f-36):this.o&&this.o!==4?(n=this.q-52,u=f-this.q+36):(n=this.q/2-16,u=f-this.q/2),this.i().style.left=u+"px",this.d().style.left=n+"px")},R:function(){this.y&&!this.z&&(this.z=this.O,this.G.a("click",this.n,this.z,null))},U:function(){this.y&&this.z&&(this.G.b("click",this.n,this.z),this.z=null)},S:function(){return this.a(),this.F&&this.F(),!0}};CommonUI.a=function(){};CommonUI.a.a=function(n,t,i){var r=document.createElement(n);return t&&(r.id=t),i&&(r.className=i),r};CommonUI.a.b=function(n,t,i){var r=CommonUI.a.a(n,t,i);return r.setAttribute("Unselectable","on"),r};CommonUI.i=function(){};CommonUI.i.a=function(n,t,i,r,u){return new CommonUI.n(n,t,i,r,Common.a.a(),u)};CommonUI.n=function(n,t,i,r,u,f){this.M=Function.createDelegate(this,this.X);CommonUI.n.initializeBase(this,[n,i,u.i(),f]);this.q=this.W(r);this.C=t;this.r=u;this.J=7;this.v=this.C.ownerDocument.createElement("div");this.v.className="ModalCalloutControlOverlay";this.v.tabIndex=0;this.C.insertBefore(this.v,this.C.firstChild)};CommonUI.n.prototype={r:null,C:null,v:null,N:0,J:0,h:function(){this.t||(this.r.x(),this.r.p(!1),this.v.style.zIndex=this.r.m(),CommonUI.r.prototype.h.call(this),this.Y(),this.N=window.setTimeout(this.E,this.J*1e3))},a:function(){this.t&&(this.r.q(!1),this.Z(),this.C.removeChild(this.v),CommonUI.r.prototype.a.call(this),window.clearTimeout(this.N))},Y:function(){this.r.n(this.E);this.r.d().a("click",this.v,this.M)},Z:function(){this.r.o(this.E);this.r.d().b("click",this.v,this.M)},X:function(){return this.a(),!0},W:function(n){var t=0;switch(n){case 0:t=190;break;case 1:t=250;break;case 2:t=300;break;case 3:t=360}return t}};CommonUI.e=function(){};CommonUI.e.a=function(n,t,i,r,u){var s=u?"":i,f=CommonUI.a.a("a",n,"StandardButton "+t),e,o;return f.title=s,f.tabIndex=0,e=null,r?(e=Common.A.a(16,16,r,"StandardButtonImage",!0,null),e.setAttribute("role","presentation"),f.appendChild(e)):Sys.UI.DomElement.addCssClass(f,"StandardButtonNoImage"),u?(o=CommonUI.a.a("span",null,"StandardButtonLabel"),o.innerText=i,f.appendChild(o)):Sys.UI.DomElement.addCssClass(e,"StandardButtonImageNoText"),f.setAttribute("role","button"),f};CommonUI.e.b=function(n,t){if(!isNullOrUndefined(n)){n.disabled=!t;var i;t?(i="false",Sys.UI.DomElement.removeCssClass(n,"DisabledButton"),Sys.UI.DomElement.removeCssClass(n,"cui-disabled")):(i="true",Sys.UI.DomElement.containsCssClass(n,"DisabledButton")||Sys.UI.DomElement.addCssClass(n,"DisabledButton"),Sys.UI.DomElement.containsCssClass(n,"cui-disabled")||Sys.UI.DomElement.addCssClass(n,"cui-disabled"));Common.v.a(n,"aria-disabled",i)}};CommonUI.e.prototype={dispose:function(){}};CommonUI.r.registerClass("CommonUI.r",Sys.UI.Control,CommonUI.u);CommonUI.n.registerClass("CommonUI.n",CommonUI.r);CommonUI.e.registerClass("CommonUI.e",null,Sys.IDisposable);Type.registerNamespace("_Ewa");_Ewa.uP=function(){_Ewa.uP.initializeBase(this);this.j()};_Ewa.uP.prototype={b:function(){this.i(new CommonUI.e)}};_Ewa.uP.registerClass("_Ewa.uP",_Ewa.lZ.$$(Sys.IDisposable));Type.registerNamespace("_Ewa");_Ewa.Fy=function(){};_Ewa.Fy.a=function(){_Ewa.e.a(function(n){n.a().b(_Ewa.Jr.$$(Sys.IDisposable),199,new _Ewa.uP)})};_Ewa.Fy.a();