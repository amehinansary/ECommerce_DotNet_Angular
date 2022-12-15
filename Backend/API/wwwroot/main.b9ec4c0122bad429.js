"use strict";(self.webpackChunkecommerce_client=self.webpackChunkecommerce_client||[]).push([["main"],{740:(C,b,n)=>{n.d(b,{B:()=>f});var u=n(8987),t=n(6067),T=n(745),g=n(635),d=n(2340),v=n(3210),U=n(5741);let f=(()=>{class p{constructor(r,s){this.http=r,this.router=s,this.baseUrl=d.N.apiUrl,this.currentUserSource=new t.t(1),this.currentUser$=this.currentUserSource.asObservable()}loadCurrentUser(r){if(null==r)return this.currentUserSource.next(null),(0,T.of)(null);let s=new u.WM;return s=s.set("Authorization",`Bearer ${r}`),this.http.get(this.baseUrl+"account",{headers:s}).pipe((0,g.U)(l=>{l&&(localStorage.setItem("token",l.token),this.currentUserSource.next(l))}))}login(r){return this.http.post(this.baseUrl+"account/login",r).pipe((0,g.U)(s=>{s&&(localStorage.setItem("token",s.token),this.currentUserSource.next(s))}))}register(r){return this.http.post(this.baseUrl+"account/register",r).pipe((0,g.U)(s=>{s&&(localStorage.setItem("token",s.token),this.currentUserSource.next(s))}))}logout(){localStorage.removeItem("token"),this.currentUserSource.next(null),this.router.navigateByUrl("/")}checkEmailExists(r){return this.http.get(this.baseUrl+"account/emailexists?email="+r)}getUserAddress(){return this.http.get(this.baseUrl+"account/address")}updateUserAddress(r){return this.http.put(this.baseUrl+"account/address",r)}}return p.\u0275fac=function(r){return new(r||p)(v.LFG(u.eN),v.LFG(U.F0))},p.\u0275prov=v.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"}),p})()},5866:(C,b,n)=>{n.d(b,{v:()=>f});var u=n(6317),t=n(635),T=n(2340),g=n(9896);class d{constructor(){this.id=(0,g.Z)(),this.items=[]}}var v=n(3210),U=n(8987);let f=(()=>{class p{constructor(r){this.http=r,this.baseUrl=T.N.apiUrl,this.basketSource=new u.X(null),this.basket$=this.basketSource.asObservable(),this.basketTotalSource=new u.X(null),this.basketTotal$=this.basketTotalSource.asObservable(),this.shipping=0}createPaymentIntent(){return this.http.post(this.baseUrl+"payments/"+this.getCurrentBasketValue().id,{}).pipe((0,t.U)(r=>{this.basketSource.next(r),console.log(this.getCurrentBasketValue())}))}setShippingPrice(r){this.shipping=r.price;const s=this.getCurrentBasketValue();s.deliveryMethodId=r.id,s.shippingPrice=r.price,this.calculateTotals(),this.setBasket(s)}getBasket(r){return this.http.get(this.baseUrl+"basket?id="+r).pipe((0,t.U)(s=>{this.basketSource.next(s),this.shipping=s.shippingPrice,this.calculateTotals()}))}setBasket(r){return this.http.post(this.baseUrl+"basket",r).subscribe(s=>{this.basketSource.next(s),this.calculateTotals()},s=>{console.log(s)})}getCurrentBasketValue(){return this.basketSource.value}addItemToBasket(r,s=1){const l=this.mapProductItemToBasketItem(r,s),h=this.getCurrentBasketValue()??this.createBasket();h.items=this.addOrUpdateItem(h.items,l,s),console.info(h),this.setBasket(h)}incrementItemQuantity(r){const s=this.getCurrentBasketValue(),l=s.items.findIndex(h=>h.id===r.id);s.items[l].quantity++,this.setBasket(s)}decrementItemQuantity(r){const s=this.getCurrentBasketValue(),l=s.items.findIndex(h=>h.id===r.id);s.items[l].quantity>1?(s.items[l].quantity--,this.setBasket(s)):this.removeItemFromBasket(r)}removeItemFromBasket(r){const s=this.getCurrentBasketValue();s.items.some(l=>l.id===r.id)&&(s.items=s.items.filter(l=>l.id!==r.id),s.items.length>0?this.setBasket(s):this.deleteBasket(s))}deleteLocalBasket(r){this.basketSource.next(null),this.basketTotalSource.next(null),localStorage.removeItem("basket_id")}deleteBasket(r){return this.http.delete(this.baseUrl+"basket?id="+r.id).subscribe({next:s=>{this.basketSource.next(null),this.basketTotalSource.next(null),localStorage.removeItem("basket_id")},error:s=>console.error(s),complete:()=>console.info("copmlete")})}calculateTotals(){const r=this.getCurrentBasketValue(),s=this.shipping,l=r.items.reduce((x,y)=>y.price*y.quantity+x,0);this.basketTotalSource.next({shipping:s,total:l+s,subtotal:l})}addOrUpdateItem(r,s,l){const h=r.findIndex(x=>x.id===s.id);return-1===h?(s.quantity=l,r.push(s)):r[h].quantity+=l,r}createBasket(){const r=new d;return localStorage.setItem("basket_id",r.id),r}mapProductItemToBasketItem(r,s){return{id:r.id,productName:r.name,price:r.price,pictureUrl:r.pictureUrl,quantity:s,brand:r.productBrand,type:r.productType}}}return p.\u0275fac=function(r){return new(r||p)(v.LFG(U.eN))},p.\u0275prov=v.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"}),p})()},4466:(C,b,n)=>{n.d(b,{m:()=>U});var u=n(6779),t=n(4666),T=n(6803),g=n(5741),d=n(4112),v=n(3210);let U=(()=>{class f{}return f.\u0275fac=function(m){return new(m||f)},f.\u0275mod=v.oAB({type:f}),f.\u0275inj=v.cJS({imports:[t.ez,u.jF,u.mH,u.XC,T.UX,T.u5,d.U5,g.Bz,u.IJ,T.UX,T.u5,u.jF,u.mH,u.XC,d.U5]}),f})()},2340:(C,b,n)=>{n.d(b,{N:()=>u});const u={apiUrl:"api/",production:!0}},6835:(C,b,n)=>{var u=n(4497),t=n(3210),T=n(9906),g=n(8987),d=n(5741),v=n(635),U=n(740);let f=(()=>{class e{constructor(o,i){this.accountService=o,this.router=i}canActivate(o,i){return this.accountService.currentUser$.pipe((0,v.U)(c=>!!c||(this.router.navigate(["account/login"],{queryParams:{returnUrl:i.url}}),!1)))}}return e.\u0275fac=function(o){return new(o||e)(t.LFG(U.B),t.LFG(d.F0))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),p=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-not-found"]],decls:3,vars:0,consts:[[1,"container","mt-5"]],template:function(o,i){1&o&&(t.TgZ(0,"div",0)(1,"h1"),t._uU(2,"Not found"),t.qZA()())}}),e})();var m=n(4666);function r(e,a){if(1&e&&(t.ynx(0),t.TgZ(1,"h5",2),t._uU(2),t.qZA(),t.TgZ(3,"p",3),t._uU(4,"Note: if you are seeing this then Angular is probably not responsible"),t.qZA(),t.TgZ(5,"p"),t._uU(6,"What to do next?"),t.qZA(),t.TgZ(7,"ol")(8,"li"),t._uU(9,"Open chrome dev tools"),t.qZA(),t.TgZ(10,"li"),t._uU(11,"Inspect the network tab"),t.qZA(),t.TgZ(12,"li"),t._uU(13,"Check the failing request"),t.qZA(),t.TgZ(14,"li"),t._uU(15,"Examine this request URL - make sure this is correct"),t.qZA(),t.TgZ(16,"li"),t._uU(17,"Reproduce the error in postman - if we get the same response in postman, then the issue is NOT with angular"),t.qZA()(),t.TgZ(18,"p"),t._uU(19,"Following is the stack trace - this is where your investigation should start!"),t.qZA(),t.TgZ(20,"code",4),t._uU(21),t.qZA(),t.BQk()),2&e){const o=t.oxw();t.xp6(2),t.hij("Error: ",o.error.message,""),t.xp6(19),t.Oqu(o.error.details)}}let s=(()=>{class e{constructor(o){this.router=o;const i=this.router.getCurrentNavigation();this.error=i?.extras?.state?.error}ngOnInit(){}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(d.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-server-error"]],decls:4,vars:1,consts:[[1,"container","mt-5"],[4,"ngIf"],[1,"text-danger"],[1,"font-weight-bold"],[1,"mt-5",2,"background-color","whitesmoke"]],template:function(o,i){1&o&&(t.TgZ(0,"div",0)(1,"h4"),t._uU(2,"Internal server error - refreshing the page will make the exception disapper"),t.qZA(),t.YNc(3,r,22,2,"ng-container",1),t.qZA()),2&o&&(t.xp6(3),t.Q6J("ngIf",i.error))},dependencies:[m.O5]}),e})();var l=n(2340);function h(e,a){if(1&e&&(t.TgZ(0,"li"),t._uU(1),t.qZA()),2&e){const o=a.$implicit;t.xp6(1),t.Oqu(o)}}function x(e,a){if(1&e&&(t.TgZ(0,"div",3)(1,"ul",4),t.YNc(2,h,2,1,"li",5),t.qZA()()),2&e){const o=t.oxw();t.xp6(2),t.Q6J("ngForOf",o.validationErrors)}}let y=(()=>{class e{constructor(o){this.http=o,this.baseUrl=l.N.apiUrl}ngOnInit(){}get404Error(){this.http.get(this.baseUrl+"products/42").subscribe(o=>{console.log(o)},o=>{console.log(o)})}get500Error(){this.http.get(this.baseUrl+"buggy/servererror").subscribe(o=>{console.log(o)},o=>{console.log(o)})}get400Error(){this.http.get(this.baseUrl+"buggy/badrequest").subscribe(o=>{console.log(o)},o=>{console.log(o)})}get400ValidationError(){this.http.get(this.baseUrl+"products/fortytwo").subscribe(o=>{console.log(o)},o=>{console.log(o),this.validationErrors=o.errors})}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(g.eN))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-test-error"]],decls:10,vars:1,consts:[[1,"container","mt-5"],[1,"btn","btn-outline-primary","me-3",3,"click"],["class","row mt-5",4,"ngIf"],[1,"row","mt-5"],[1,"text-danger"],[4,"ngFor","ngForOf"]],template:function(o,i){1&o&&(t.TgZ(0,"div",0)(1,"button",1),t.NdJ("click",function(){return i.get500Error()}),t._uU(2,"Test 500 error"),t.qZA(),t.TgZ(3,"button",1),t.NdJ("click",function(){return i.get404Error()}),t._uU(4,"Test 404 error"),t.qZA(),t.TgZ(5,"button",1),t.NdJ("click",function(){return i.get400Error()}),t._uU(6,"Test 400 error"),t.qZA(),t.TgZ(7,"button",1),t.NdJ("click",function(){return i.get400ValidationError()}),t._uU(8,"Test 400 validation error"),t.qZA(),t.YNc(9,x,3,1,"div",2),t.qZA()),2&o&&(t.xp6(9),t.Q6J("ngIf",i.validationErrors))},dependencies:[m.sg,m.O5]}),e})();var k=n(6779);const M=["carousel"];function L(e,a){1&e&&(t.TgZ(0,"div",5),t._UZ(1,"img",6),t.qZA())}function P(e,a){1&e&&(t.TgZ(0,"div",5),t._UZ(1,"img",7),t.qZA())}function F(e,a){1&e&&(t.TgZ(0,"div",5),t._UZ(1,"img",8),t.qZA())}const N=[{path:"",component:(()=>{class e{constructor(){this.paused=!1,this.unpauseOnArrow=!1,this.pauseOnIndicator=!1,this.pauseOnHover=!0,this.pauseOnFocus=!0}ngOnInit(){}togglePaused(){this.paused?this.carousel.cycle():this.carousel.pause(),this.paused=!this.paused}onSlide(o){this.unpauseOnArrow&&o.paused&&(o.source===k.lD.ARROW_LEFT||o.source===k.lD.ARROW_RIGHT)&&this.togglePaused(),this.pauseOnIndicator&&!o.paused&&o.source===k.lD.INDICATOR&&this.togglePaused()}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-home"]],viewQuery:function(o,i){if(1&o&&t.Gf(M,7),2&o){let c;t.iGM(c=t.CRH())&&(i.carousel=c.first)}},decls:9,vars:3,consts:[[2,"margin-top","75px",3,"interval","pauseOnHover","pauseOnFocus","slide"],["carousel",""],["ngbSlide",""],[1,"featured"],[1,"d-flex","justify-content-center","pt-4"],[1,"picsum-img-wrapper"],["src","assets/images/hero1.jpg","alt","first slide",2,"display","block","width","100%"],["src","assets/images/hero2.jpg","alt","second slide",2,"display","block","width","100%"],["src","assets/images/hero3.jpg","alt","third slide",2,"display","block","width","100%"]],template:function(o,i){1&o&&(t.TgZ(0,"ngb-carousel",0,1),t.NdJ("slide",function(A){return i.onSlide(A)}),t.YNc(2,L,2,0,"ng-template",2),t.YNc(3,P,2,0,"ng-template",2),t.YNc(4,F,2,0,"ng-template",2),t.qZA(),t.TgZ(5,"section",3)(6,"div",4)(7,"h1"),t._uU(8,"Welcome to the shop!"),t.qZA()()()),2&o&&t.Q6J("interval",2e3)("pauseOnHover",i.pauseOnHover)("pauseOnFocus",i.pauseOnFocus)},dependencies:[k.uo,k.xl],styles:[".featured[_ngcontent-%COMP%]{height:250px}img[_ngcontent-%COMP%]{object-fit:cover;height:500px;width:100%}"]}),e})(),data:{breadcrumb:"Home"}},{path:"test-error",component:y,data:{breadcrumb:"Test Errors"}},{path:"server-error",component:s,data:{breadcrumb:"Server Error"}},{path:"not-found",component:p,data:{breadcrumb:"Not found"}},{path:"shop",loadChildren:()=>n.e("src_app_shop_shop_module_ts").then(n.bind(n,9690)).then(e=>e.ShopModule),data:{breadcrumb:"Shop"}},{path:"basket",loadChildren:()=>Promise.all([n.e("common"),n.e("src_app_basket_basket_module_ts")]).then(n.bind(n,9207)).then(e=>e.BasketModule),data:{breadcrumb:"Basket"}},{path:"checkout",canActivate:[f],loadChildren:()=>Promise.all([n.e("common"),n.e("src_app_checkout_checkout_module_ts")]).then(n.bind(n,6425)).then(e=>e.CheckoutModule),data:{breadcrumb:"Checkout"}},{path:"orders",canActivate:[f],loadChildren:()=>Promise.all([n.e("common"),n.e("src_app_orders_orders_module_ts")]).then(n.bind(n,8607)).then(e=>e.OrdersModule),data:{breadcrumb:"Orders"}},{path:"account",loadChildren:()=>Promise.all([n.e("common"),n.e("src_app_account_account_module_ts")]).then(n.bind(n,3481)).then(e=>e.AccountModule),data:{breadcrumb:{skip:!0}}},{path:"**",redirectTo:"not-found",pathMatch:"full"}];let I=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[d.Bz.forRoot(N),d.Bz]}),e})();var S=n(5866);function D(e,a){if(1&e&&(t.TgZ(0,"div",12),t._uU(1),t.qZA()),2&e){const o=a.ngIf;t.xp6(1),t.Oqu(o.items.length)}}function H(e,a){1&e&&(t.ynx(0),t.TgZ(1,"a",13),t._uU(2,"Login"),t.qZA(),t.TgZ(3,"a",14),t._uU(4,"Sign up"),t.qZA(),t.BQk())}function R(e,a){if(1&e){const o=t.EpF();t.ynx(0),t.TgZ(1,"div",15)(2,"a",16)(3,"strong"),t._uU(4),t.ALo(5,"async"),t.qZA()(),t.TgZ(6,"ul",17)(7,"li")(8,"a",18),t.NdJ("click",function(c){return c.preventDefault()}),t._UZ(9,"i",19),t._uU(10," View Basket "),t.qZA()(),t.TgZ(11,"li")(12,"a",20),t.NdJ("click",function(c){return c.preventDefault()}),t._UZ(13,"i",21),t._uU(14," View Orders "),t.qZA()(),t.TgZ(15,"li"),t._UZ(16,"hr",22),t.qZA(),t.TgZ(17,"li")(18,"a",23),t.NdJ("click",function(c){return c.preventDefault()})("click",function(){t.CHM(o);const c=t.oxw();return t.KtG(c.logout())}),t._UZ(19,"i",24),t._uU(20," Logout "),t.qZA()()()(),t.BQk()}if(2&e){const o=t.oxw();t.xp6(4),t.hij("Welcome ",t.lcZ(5,1,o.currentUser$).displayName,"")}}const B=function(){return["/"]},w=function(){return{exact:!0}};let J=(()=>{class e{constructor(o,i){this.basketService=o,this.accountService=i,this.collapsed=!0}ngOnInit(){this.basket$=this.basketService.basket$,this.currentUser$=this.accountService.currentUser$}logout(){this.accountService.logout()}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(S.v),t.Y36(U.B))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-nav-bar"]],decls:19,vars:15,consts:[[1,"container","py-3"],[1,"d-flex","flex-column","flex-md-row","align-items-center","justify-content-between","p-3","mb-3","px-md-4","border-bottom","bg-white","border-bottom","shadow-sm","fixed-top"],["src","/assets/images/logo.png","alt","logo",1,"logo",3,"routerLink"],[1,"d-inline-flex","mt-2","mt-md-0","ms-md-auto","text-dark",2,"font-size","larger"],["routerLinkActive","active",1,"me-3","py-2","text-decoration-none",3,"routerLink","routerLinkActiveOptions"],["routerLink","/shop","routerLinkActive","active",1,"me-3","py-2","text-decoration-none"],["routerLink","/test-error","routerLinkActive","active",1,"me-3","py-2","text-decoration-none"],[1,"d-flex","align-items-center"],["href","","routerLink","/basket",1,"position-relative"],[1,"fa","fa-shopping-cart","fa-2x","me-4","text-dark"],["class","cart-no",4,"ngIf"],[4,"ngIf"],[1,"cart-no"],["routerLink","/account/login",1,"btn","btn-outline-secondary","me-2"],["routerLink","/account/register",1,"btn","btn-outline-secondary","me-3"],["ngbDropdown","",1,"btn-group","ml-3","me-5"],["ngbDropdownToggle","","role","button","id","dropdownMenuLink",1,"dropdown-toggle",2,"cursor","pointer"],["ngbDropdownMenu","","aria-labelledby","navbarDropdown3",1,"dropdown-menu",2,"cursor","pointer"],["ngbDropdownItem","","routerLink","/basket",1,"dropdown-item","d-flex","align-items-center","py-2",3,"click"],[1,"fa","fa-shopping-cart","me-2"],["ngbDropdownItem","","routerLink","/orders",1,"dropdown-item","d-flex","align-items-center","py-2",3,"click"],[1,"fa","fa-history","me-2"],[1,"dropdown-divider"],["ngbDropdownItem","",1,"dropdown-item","d-flex","align-items-center","py-2",3,"click"],[1,"fa","fa-sign-out","me-2"]],template:function(o,i){1&o&&(t.TgZ(0,"div",0)(1,"div",1),t._UZ(2,"img",2),t.TgZ(3,"nav",3)(4,"a",4),t._uU(5,"Home"),t.qZA(),t.TgZ(6,"a",5),t._uU(7,"Shop"),t.qZA(),t.TgZ(8,"a",6),t._uU(9,"Errors"),t.qZA()(),t.TgZ(10,"div",7)(11,"a",8),t._UZ(12,"i",9),t.YNc(13,D,2,1,"div",10),t.ALo(14,"async"),t.qZA(),t.YNc(15,H,5,0,"ng-container",11),t.ALo(16,"async"),t.YNc(17,R,21,3,"ng-container",11),t.ALo(18,"async"),t.qZA()()()),2&o&&(t.xp6(2),t.Q6J("routerLink",t.DdM(12,B)),t.xp6(2),t.Q6J("routerLink",t.DdM(13,B))("routerLinkActiveOptions",t.DdM(14,w)),t.xp6(9),t.Q6J("ngIf",t.lcZ(14,6,i.basket$)),t.xp6(2),t.Q6J("ngIf",null===t.lcZ(16,8,i.currentUser$)),t.xp6(2),t.Q6J("ngIf",t.lcZ(18,10,i.currentUser$)))},dependencies:[m.O5,k.jt,k.iD,k.Vi,k.TH,d.rH,d.yS,d.Od,m.Ov],styles:[".bi[_ngcontent-%COMP%]{font-size:30px}.cart-no[_ngcontent-%COMP%]{position:absolute;min-height:24px;min-width:24px;border-radius:50%;font-size:.75em;background:blue;color:#fff;text-align:center;top:-8px;right:16px}.btn[_ngcontent-%COMP%]{padding:6px 10px}a[_ngcontent-%COMP%]{text-decoration:none;color:#343a40}a.active[_ngcontent-%COMP%]{color:orange}.logo[_ngcontent-%COMP%]{max-height:70px;cursor:pointer}.logo[_ngcontent-%COMP%]:focus{outline:none}"]}),e})();var _=n(7861);function Y(e,a){if(1&e&&(t.TgZ(0,"section",2)(1,"div",3)(2,"div",4)(3,"div",5)(4,"h3"),t._uU(5),t.ALo(6,"titlecase"),t.qZA()(),t.TgZ(7,"div",6),t._UZ(8,"xng-breadcrumb"),t.qZA()()()()),2&e){const o=t.oxw().ngIf;t.xp6(5),t.Oqu(t.lcZ(6,1,o.length>0&&o[o.length-1].label))}}function W(e,a){if(1&e&&(t.ynx(0),t.YNc(1,Y,9,3,"section",1),t.BQk()),2&e){const o=a.ngIf;t.xp6(1),t.Q6J("ngIf",o.length>0&&"Home"!==o[o.length-1].label)}}let j=(()=>{class e{constructor(o){this.bcService=o}ngOnInit(){this.breadcrumb$=this.bcService.breadcrumbs$}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(_.pm))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-section-header"]],decls:2,vars:3,consts:[[4,"ngIf"],["style","margin-top: 75px; background-color: #f5f5f5;",4,"ngIf"],[2,"margin-top","75px","background-color","#f5f5f5"],[1,"container"],[1,"row","d-flex","align-items-center"],[1,"col-9"],[1,"col-3"]],template:function(o,i){1&o&&(t.YNc(0,W,2,1,"ng-container",0),t.ALo(1,"async")),2&o&&t.Q6J("ngIf",t.lcZ(1,1,i.breadcrumb$))},dependencies:[m.O5,_.LI,m.Ov,m.rS]}),e})();var Z=n(7217);let z=(()=>{class e{constructor(o,i){this.basketService=o,this.accountService=i,this.title="ecommerce-skinet"}ngOnInit(){this.loadBasket(),this.loadCurrentUser()}loadCurrentUser(){const o=localStorage.getItem("token");this.accountService.loadCurrentUser(o).subscribe({next:i=>console.log("loaded user"),error:i=>console.error(i),complete:()=>console.info("complete")})}loadBasket(){const o=localStorage.getItem("basket_id");o&&this.basketService.getBasket(o).subscribe({next:i=>console.log("initialised basket"),error:i=>console.error(i),complete:()=>console.info("complete")})}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(S.v),t.Y36(U.B))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-root"]],decls:7,vars:0,consts:[["type","ball-scale-multiple"]],template:function(o,i){1&o&&(t.TgZ(0,"ngx-spinner",0)(1,"h4"),t._uU(2,"loading..."),t.qZA()(),t._UZ(3,"app-nav-bar")(4,"app-section-header"),t.TgZ(5,"div"),t._UZ(6,"router-outlet"),t.qZA())},dependencies:[d.lC,J,j,Z.Ro]}),e})();var O=n(4466),E=n(2808);let Q=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[m.ez,_.wH,O.m,E.Rh.forRoot({positionClass:"toast-bottom-right",preventDuplicates:!0}),d.Bz]}),e})(),$=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[m.ez,O.m]}),e})();var G=n(5474),K=n(3158);let V=(()=>{class e{constructor(o,i){this.router=o,this.toastr=i}intercept(o,i){return i.handle(o).pipe((0,K.K)(c=>{if(c){if(400===c.status){if(c.error.errors)throw c.error;this.toastr.error(c.error.message,c.error.statusCode)}401===c.status&&this.toastr.error(c.error.message,c.error.statusCode),(404===c.status||0==c.ok)&&this.router.navigateByUrl("/not-found"),500===c.status&&this.router.navigateByUrl("/server-error",{state:{error:c.error}})}return(0,G._)(c)}))}}return e.\u0275fac=function(o){return new(o||e)(t.LFG(d.F0),t.LFG(E._W))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac}),e})();var X=n(2313);let q=(()=>{class e{constructor(o){this.spinnerService=o,this.busyRequestCount=0}busy(){this.busyRequestCount++,this.spinnerService.show(void 0,{type:"ball-atom",bdColor:"rgba(255,255,255,0.7)",color:"#333333"})}idle(){this.busyRequestCount--,this.busyRequestCount<=0&&(this.busyRequestCount=0,this.spinnerService.hide())}}return e.\u0275fac=function(o){return new(o||e)(t.LFG(Z.t2))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),tt=(()=>{class e{constructor(o){this.busyService=o}intercept(o,i){return"POST"===o.method&&o.url.includes("orders")||"DELETE"===o.method||o.url.includes("emailexists")?i.handle(o):(this.busyService.busy(),i.handle(o).pipe((0,X.x)(()=>{this.busyService.idle()})))}}return e.\u0275fac=function(o){return new(o||e)(t.LFG(q))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac}),e})(),et=(()=>{class e{constructor(){}intercept(o,i){const c=localStorage.getItem("token");return c&&(o=o.clone({setHeaders:{Authorization:`Bearer ${c}`}})),i.handle(o)}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac}),e})(),ot=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e,bootstrap:[z]}),e.\u0275inj=t.cJS({providers:[{provide:g.TP,useClass:V,multi:!0},{provide:g.TP,useClass:tt,multi:!0},{provide:g.TP,useClass:et,multi:!0}],imports:[I,u.b2,I,k.IJ,T.PW,g.JF,Q,$,Z.ef.forRoot({type:"ball-scale-multiple"})]}),e})();l.N.production&&(0,t.G48)(),u.q6().bootstrapModule(ot).catch(e=>console.error(e))}},C=>{C.O(0,["vendor"],()=>C(C.s=6835)),C.O()}]);
//# sourceMappingURL=main.b9ec4c0122bad429.js.map