"use strict";(self.webpackChunkIOTProject=self.webpackChunkIOTProject||[]).push([[118],{8965:(P,f,a)=>{a.r(f),a.d(f,{AdminModule:()=>at});var m=a(9808),u=a(1083),Z=a(4004),g=a(5113),_=a(5226),c=a.n(_),p=a(3075),l=a(8966),t=a(5e3),v=a(7322),C=a(7531),T=a(7423);function x(n,i){if(1&n&&(t.TgZ(0,"mat-error"),t._uU(1),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Oqu(e.msg.err)}}let O=(()=>{class n{constructor(e,o,r){this.data=e,this.dialog=o,this.dialogRef=r,this.msg={},this.form=new p.cw({email:new p.NI(null,[p.kI.required])})}ngOnInit(){}Submit(){123456==this.form.value.email?this.dialogRef.close({status:!0}):this.msg.err="incorrect password"}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(l.WI),t.Y36(l.uw),t.Y36(l.so))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-verify"]],decls:10,vars:2,consts:[[1,"example-container"],[3,"formGroup","ngSubmit"],["appearance","fill"],["matInput","","formControlName","email","required",""],[4,"ngIf"],["mat-button","","color","primary"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"form",1),t.NdJ("ngSubmit",function(){return o.Submit()}),t.TgZ(2,"mat-form-field",2)(3,"mat-label"),t._uU(4,"Enter your password"),t.qZA(),t._UZ(5,"input",3),t.qZA(),t.YNc(6,x,2,1,"mat-error",4),t._UZ(7,"br"),t.TgZ(8,"button",5),t._uU(9,"Submit Password"),t.qZA()()()),2&e&&(t.xp6(1),t.Q6J("formGroup",o.form),t.xp6(5),t.Q6J("ngIf",o.msg.err))},directives:[p._Y,p.JL,p.sg,v.KE,v.hX,C.Nt,p.Fj,p.JJ,p.u,p.Q7,m.O5,v.TO,T.lW],styles:[""]}),n})();var y=a(9430),q=a(2368);const M=function(n){return["/admin/deviceDetail",n]},N=function(n){return{color:n}};function w(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"tr")(1,"th",8),t._uU(2),t.qZA(),t.TgZ(3,"td",9)(4,"a",10)(5,"h3"),t._uU(6),t.qZA()(),t.TgZ(7,"h4"),t._uU(8),t.qZA(),t.TgZ(9,"h4"),t._uU(10),t.qZA(),t.TgZ(11,"small",11),t._uU(12),t.qZA()(),t.TgZ(13,"td",12),t._uU(14," Power "),t.TgZ(15,"mat-slide-toggle",13),t.NdJ("click",function(){const s=t.CHM(e).$implicit;return t.oxw().powerUpdate(s.power,s._id)})("ngModelChange",function(r){return t.CHM(e).$implicit.power=r}),t.qZA()(),t.TgZ(16,"td",14),t._uU(17," Go Live "),t._UZ(18,"br"),t.TgZ(19,"small",15)(20,"h4"),t._uU(21),t.ALo(22,"date"),t.qZA()()()()}if(2&n){const e=i.$implicit,o=i.index;t.xp6(2),t.hij(" ",o+1," "),t.xp6(2),t.Q6J("routerLink",t.VKq(13,M,e._id)),t.xp6(2),t.AsE(" ",e.place," (",e.deviceId,")"),t.xp6(2),t.Oqu(e.location),t.xp6(2),t.hij(" ",e.subZoneName," "),t.xp6(2),t.hij(" IMEI NO : ",e.imeiNumber," "),t.xp6(3),t.Q6J("ngModel",e.power),t.xp6(4),t.Q6J("ngStyle",t.VKq(15,N,1==e.power?"green":"red")),t.xp6(2),t.hij(" ",t.xi3(22,10,e.installationDate,"M/d/yy h:mm a")," ")}}let L=(()=>{class n{constructor(e,o,r){this.breakpointObserver=e,this.deviceService=o,this.dialog=r,this.cards=this.breakpointObserver.observe(g.u3.Handset).pipe((0,Z.U)(({matches:s})=>s?[{title:"Card 1",cols:1,rows:1},{title:"Card 2",cols:1,rows:1},{title:"Card 3",cols:1,rows:1},{title:"Card 4",cols:1,rows:1}]:[{title:"Card 1",cols:2,rows:1},{title:"Card 2",cols:1,rows:1},{title:"Card 3",cols:1,rows:2},{title:"Card 4",cols:1,rows:1}]))}ngOnInit(){this.dashBoardList()}dashBoardList(){this.deviceService.deviceList().subscribe(e=>{console.log(e),this.DashboardTable=e.data})}powerUpdate(e,o){this.dialogRef=this.dialog.open(O,{}),this.dialogRef.afterClosed().subscribe(r=>{console.log("The dialog was closed"),console.log(r),this.dashBoardList(),1==r.status?this.onClick(e,o):this.dashBoardList()})}onClick(e,o){c().fire({title:"Are you sure?",text:"You want power change..?",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, go ahead.",cancelButtonText:"No, let me think"}).then(r=>{r.value&&this.deviceService.updatePower(o,1!=e).subscribe(d=>{console.log(d),c().fire("Saved!","","success"),this.spinner=!1,this.dashBoardList()},d=>{console.log(d),this.spinner=!1,console.log(d,"error>>>>>>>>>"),c().fire("Cancelled","error")})})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(g.Yg),t.Y36(y.U),t.Y36(l.uw))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-dashboard"]],decls:17,vars:1,consts:[[1,"table"],[1,"thead-dark"],["scope","col"],[1,"list-group","list-group-horizontal"],[1,"list-group-item"],[1,"list-group-item","w-75"],["matInput","","placeholder","Search here...",1,"w-100"],[4,"ngFor","ngForOf"],["scope","row"],[1,"title-info"],["routerLinkActive","router-link-active",3,"routerLink"],[2,"color","red"],[2,"padding-top","40px"],["color","warn",3,"ngModel","click","ngModelChange"],["scope","row",2,"text-align","center"],[2,"padding-top","10px",3,"ngStyle"]],template:function(e,o){1&e&&(t.TgZ(0,"table",0)(1,"thead",1)(2,"tr")(3,"th",2),t._uU(4,"#"),t.qZA(),t.TgZ(5,"th",2)(6,"ul",3)(7,"li",4),t._uU(8,"Dashboard"),t.qZA(),t.TgZ(9,"li",5),t._UZ(10,"input",6),t.qZA()()(),t.TgZ(11,"th",2),t._uU(12,"Last"),t.qZA(),t.TgZ(13,"th",2),t._uU(14,"Handle"),t.qZA()()(),t.TgZ(15,"tbody"),t.YNc(16,w,23,17,"tr",7),t.qZA()()),2&e&&(t.xp6(16),t.Q6J("ngForOf",o.DashboardTable))},directives:[C.Nt,m.sg,u.yS,u.Od,q.Rr,p.JJ,p.On,m.PC],pipes:[m.uU],styles:[".grid-container[_ngcontent-%COMP%]{margin:20px}.dashboard-card[_ngcontent-%COMP%]{position:absolute;top:15px;left:15px;right:15px;bottom:15px}.more-button[_ngcontent-%COMP%]{position:absolute;top:5px;right:10px}.dashboard-card-content[_ngcontent-%COMP%]{text-align:center}td[_ngcontent-%COMP%]{height:70px;margin:10px;transform:scale(.8)}"]}),n})();var h=a(9224),U=a(1125);function I(n,i){if(1&n&&(t.TgZ(0,"tr")(1,"td",17),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td"),t._uU(12),t.qZA()()),2&n){const e=i.$implicit,o=i.index;t.xp6(2),t.hij(" ",o+1," "),t.xp6(2),t.hij(" ",e.startTime," "),t.xp6(2),t.hij(" ",e.endTime," "),t.xp6(2),t.hij(" ",e.days," "),t.xp6(2),t.hij(" ",e.hours," "),t.xp6(2),t.hij(" ",e.seconds," ")}}let j=(()=>{class n{constructor(e,o){this.route=e,this._deviceService=o,this.data={}}ngOnInit(){this.id=this.route.snapshot.paramMap.get("id"),this.getDeviceDetail(),setTimeout(()=>{this.ngOnInit()},5e4)}getDeviceDetail(){this._deviceService.deviceDetail(this.id).subscribe(e=>{console.log(e),this.data=e.data[0],this.dataSource=this.data.timelog,this.power=this.data.power,this.Latval=e.data[0].location,console.log(this.Latval,"lat")})}powerUpdate(e){c().fire({title:"Are you sure?",text:"You want power change..?",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, go ahead.",cancelButtonText:"No, let me think"}).then(o=>{o.value&&this._deviceService.updatePower(this.id,1!=e).subscribe(s=>{console.log(s),c().fire("Saved!","","success"),this.spinner=!1,this.getDeviceDetail()},s=>{console.log(s),this.spinner=!1,console.log(s,"error>>>>>>>>>"),c().fire("Cancelled","error")})})}auto(e){this._deviceService.auto(e).subscribe(o=>{alert("success")})}manual(e){this._deviceService.manual(e).subscribe(o=>{alert("success")})}relayOn(e){this._deviceService.relayOn(e).subscribe(o=>{alert("success")})}relayOff(e){this._deviceService.relayOff(e).subscribe(o=>{alert("success")})}SetPoint1(e){const o=window.prompt("Set Point 1");this._deviceService.SetPoint1(e,o).subscribe(r=>{alert("success")})}SetPoint2(e){const o=window.prompt("Set Point 1");this._deviceService.SetPoint2(e,o).subscribe(r=>{alert("success")})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(u.gz),t.Y36(y.U))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-device-detail"]],decls:200,vars:31,consts:[[1,"p-3","mqtt"],["mat-raised-button","",3,"click"],[1,"example-card"],["mat-card-avatar","",1,"example-header-image"],[1,"container-fluid"],[1,"row"],[1,"col-md-8"],[1,"header1"],[1,"col-md-6"],[1,"table","table-hover"],["color","warn",3,"ngModel","ngModelChange","click"],[1,"col-md-4"],[1,"col-md-12"],[1,"col-md-3"],[3,"hideToggle"],[1,"table"],[4,"ngFor","ngForOf"],["scope","row"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"button",1),t.NdJ("click",function(){return o.auto(o.data.deviceId)}),t._uU(2,"Auto"),t.qZA(),t.TgZ(3,"button",1),t.NdJ("click",function(){return o.manual(o.data.deviceId)}),t._uU(4,"manual"),t.qZA(),t.TgZ(5,"button",1),t.NdJ("click",function(){return o.relayOn(o.data.deviceId)}),t._uU(6,"relayOn"),t.qZA(),t.TgZ(7,"button",1),t.NdJ("click",function(){return o.relayOff(o.data.deviceId)}),t._uU(8,"relayOff"),t.qZA(),t.TgZ(9,"button",1),t.NdJ("click",function(){return o.SetPoint1(o.data.deviceId)}),t._uU(10,"Set Point 1"),t.qZA(),t.TgZ(11,"button",1),t.NdJ("click",function(){return o.SetPoint2(o.data.deviceId)}),t._uU(12,"Set Point 2"),t.qZA()(),t.TgZ(13,"mat-card",2)(14,"mat-card-header"),t._UZ(15,"div",3),t.TgZ(16,"mat-card-title"),t._uU(17),t.qZA()(),t.TgZ(18,"mat-card-content")(19,"div",4)(20,"div",5)(21,"div",6)(22,"header",7),t._uU(23,"Live Date"),t.qZA(),t.TgZ(24,"div",4)(25,"div",5)(26,"div",8)(27,"table",9)(28,"tbody")(29,"tr")(30,"th"),t._uU(31,"Power "),t.qZA(),t.TgZ(32,"td")(33,"mat-slide-toggle",10),t.NdJ("ngModelChange",function(s){return o.data.power=s})("click",function(){return o.powerUpdate(o.data.power)}),t.qZA(),t._uU(34),t.qZA()(),t.TgZ(35,"tr")(36,"th"),t._uU(37,"Mode "),t.qZA(),t._UZ(38,"td"),t.qZA(),t.TgZ(39,"tr")(40,"th"),t._uU(41,"DOFF "),t.qZA(),t.TgZ(42,"td"),t._uU(43),t.qZA()(),t.TgZ(44,"tr")(45,"th"),t._uU(46,"Slincer "),t.qZA(),t.TgZ(47,"td"),t._uU(48),t.qZA()(),t.TgZ(49,"tr")(50,"th"),t._uU(51,"DG "),t.qZA(),t.TgZ(52,"td"),t._uU(53),t.qZA()(),t.TgZ(54,"tr")(55,"th"),t._uU(56,"Tempratue 1 "),t.qZA(),t.TgZ(57,"td"),t._uU(58),t.qZA()(),t.TgZ(59,"tr")(60,"th"),t._uU(61,"Tempratue 2 "),t.qZA(),t.TgZ(62,"td"),t._uU(63),t.qZA()()()()(),t.TgZ(64,"div",8)(65,"table",9)(66,"tbody")(67,"tr")(68,"th"),t._uU(69,"Presure 1 (kPA) "),t.qZA(),t.TgZ(70,"td"),t._uU(71),t.qZA()(),t.TgZ(72,"tr")(73,"th"),t._uU(74,"Presure 2 (kPA) "),t.qZA(),t.TgZ(75,"td"),t._uU(76),t.qZA()(),t.TgZ(77,"tr")(78,"th"),t._uU(79,"Presure Set Point 1 (kPA) "),t.qZA(),t.TgZ(80,"td"),t._uU(81),t.qZA()(),t.TgZ(82,"tr")(83,"th"),t._uU(84,"Presure Set Point 2 (kPA) "),t.qZA(),t.TgZ(85,"td"),t._uU(86),t.qZA()(),t.TgZ(87,"tr")(88,"th"),t._uU(89,"Signal Strength "),t.qZA(),t.TgZ(90,"td"),t._uU(91),t.qZA()(),t.TgZ(92,"tr")(93,"th"),t._uU(94,"Last String Data Stamp "),t.qZA(),t.TgZ(95,"td"),t._uU(96),t.qZA()()()()()()()(),t.TgZ(97,"div",11)(98,"header",7),t._uU(99,"Accutator"),t.qZA()()(),t.TgZ(100,"div",5)(101,"div",12)(102,"header",7),t._uU(103,"D G Details"),t.qZA(),t.TgZ(104,"div",4)(105,"div",5)(106,"div",13)(107,"table",9)(108,"tbody")(109,"tr")(110,"th"),t._uU(111,"Zone Name "),t.qZA(),t.TgZ(112,"td"),t._uU(113),t.qZA()(),t.TgZ(114,"tr")(115,"th"),t._uU(116,"Sub Zone Name "),t.qZA(),t.TgZ(117,"td"),t._uU(118),t.qZA()(),t.TgZ(119,"tr")(120,"th"),t._uU(121,"Location "),t.qZA(),t.TgZ(122,"td"),t._uU(123),t.qZA()()()()(),t.TgZ(124,"div",13)(125,"table",9)(126,"tbody")(127,"tr")(128,"th"),t._uU(129,"IMEI Number "),t.qZA(),t.TgZ(130,"td"),t._uU(131),t.qZA()(),t.TgZ(132,"tr")(133,"th"),t._uU(134,"SIM Number "),t.qZA(),t.TgZ(135,"td"),t._uU(136),t.qZA()(),t.TgZ(137,"tr")(138,"th"),t._uU(139,"Device Type "),t.qZA(),t.TgZ(140,"td"),t._uU(141),t.qZA()()()()(),t.TgZ(142,"div",13)(143,"table",9)(144,"tbody")(145,"tr")(146,"th"),t._uU(147,"DG Capicity "),t.qZA(),t._UZ(148,"td"),t.qZA(),t.TgZ(149,"tr")(150,"th"),t._uU(151,"Latitude "),t.qZA(),t.TgZ(152,"td"),t._uU(153),t.qZA()(),t.TgZ(154,"tr")(155,"th"),t._uU(156,"Longitude "),t.qZA(),t.TgZ(157,"td"),t._uU(158),t.qZA()()()()(),t.TgZ(159,"div",13)(160,"table",9)(161,"tbody")(162,"tr")(163,"th"),t._uU(164,"Operator Name "),t.qZA(),t.TgZ(165,"td"),t._uU(166),t.qZA()(),t.TgZ(167,"tr")(168,"th"),t._uU(169,"Operator Number "),t.qZA(),t.TgZ(170,"td"),t._uU(171),t.qZA()(),t.TgZ(172,"tr")(173,"th"),t._uU(174,"Installation Date "),t.qZA(),t.TgZ(175,"td"),t._uU(176),t.ALo(177,"date"),t.qZA()()()()()()()()()(),t.TgZ(178,"mat-expansion-panel",14)(179,"mat-expansion-panel-header")(180,"mat-panel-title"),t._uU(181,"Device Time log"),t.qZA(),t._UZ(182,"mat-panel-description"),t.qZA(),t.TgZ(183,"table",15)(184,"thead")(185,"tr")(186,"th"),t._uU(187,"Sno"),t.qZA(),t.TgZ(188,"th"),t._uU(189,"Start Date"),t.qZA(),t.TgZ(190,"th"),t._uU(191,"End Date"),t.qZA(),t.TgZ(192,"th"),t._uU(193,"Day"),t.qZA(),t.TgZ(194,"th"),t._uU(195,"hours"),t.qZA(),t.TgZ(196,"th"),t._uU(197,"seconds"),t.qZA()()(),t.TgZ(198,"tbody"),t.YNc(199,I,13,6,"tr",16),t.qZA()()()()()),2&e&&(t.xp6(17),t.lnq("Device Detail : ",o.data.deviceId," | location : ",o.data.place," | IMEI Number : ",o.data.imeiNumber," |"),t.xp6(16),t.Q6J("ngModel",o.data.power),t.xp6(1),t.hij(" ",o.data.power," "),t.xp6(9),t.hij(" ",o.data.doff," "),t.xp6(5),t.hij(" ",o.data.silencer," "),t.xp6(5),t.hij(" ",o.data.dg," "),t.xp6(5),t.hij(" ",null==o.data?null:o.data.DeviceLastLogs.ProcessData.Temperature1," "),t.xp6(5),t.hij(" ",null==o.data?null:o.data.DeviceLastLogs.ProcessData.Temperature2," "),t.xp6(8),t.hij(" ",null==o.data?null:o.data.DeviceLastLogs.ProcessData.Pressure1," "),t.xp6(5),t.hij(" ",null==o.data?null:o.data.DeviceLastLogs.ProcessData.Pressure2," "),t.xp6(5),t.Oqu(null==o.data||null==o.data.DeviceLastLogs||null==o.data.DeviceLastLogs.ProcessData?null:o.data.DeviceLastLogs.ProcessData.SetPoint1),t.xp6(5),t.Oqu(null==o.data||null==o.data.DeviceLastLogs||null==o.data.DeviceLastLogs.ProcessData?null:o.data.DeviceLastLogs.ProcessData.SetPoint2),t.xp6(5),t.Oqu(o.data.signalStrength),t.xp6(5),t.hij("",o.data.DeviceLastLogs.ReceivedAt," "),t.xp6(17),t.hij("",o.data.zoneId.zoneName," "),t.xp6(5),t.hij("",o.data.subZoneId.zoneName," "),t.xp6(5),t.Oqu(o.data.place),t.xp6(8),t.Oqu(o.data.imeiNumber),t.xp6(5),t.Oqu(o.data.simNumber),t.xp6(5),t.hij(" ",o.data.deviceType," "),t.xp6(12),t.Oqu(o.data.location.coordinates[0]),t.xp6(5),t.Oqu(o.data.location.coordinates[1]),t.xp6(8),t.Oqu(o.data.operatorName),t.xp6(5),t.Oqu(o.data.operatorNumber),t.xp6(5),t.Oqu(t.lcZ(177,29,o.data.installationDate)),t.xp6(2),t.Q6J("hideToggle",!1),t.xp6(21),t.Q6J("ngForOf",o.data.timelog))},directives:[T.lW,h.a8,h.dk,h.kc,h.n5,h.dn,q.Rr,p.JJ,p.On,U.ib,U.yz,U.yK,U.u4,m.sg],pipes:[m.uU],styles:[".header1[_ngcontent-%COMP%]{background:rgb(2,0,36);background:linear-gradient(90deg,rgba(2,0,36,1) 0%,rgba(87,231,144,1) 24%,rgba(0,212,255,1) 100%);color:#fff}.mqtt[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin:3px}"]}),n})(),J=(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-home"]],decls:1,vars:0,consts:[["src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d223978.74205514282!2d77.25494196122719!3d28.699581014117943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf1bb41c50fdf%3A0xe6f06fd26a7798ba!2sGhaziabad%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1646633207283!5m2!1sen!2sin","width","100%","height","650","allowfullscreen","","loading","lazy",2,"border","0","margin-top","-13px"]],template:function(e,o){1&e&&t._UZ(0,"iframe",0)},styles:[""]}),n})();var F=a(7579),R=a(6063);class Y extends F.x{constructor(i=1/0,e=1/0,o=R.l){super(),this._bufferSize=i,this._windowTime=e,this._timestampProvider=o,this._buffer=[],this._infiniteTimeWindow=!0,this._infiniteTimeWindow=e===1/0,this._bufferSize=Math.max(1,i),this._windowTime=Math.max(1,e)}next(i){const{isStopped:e,_buffer:o,_infiniteTimeWindow:r,_timestampProvider:s,_windowTime:d}=this;e||(o.push(i),!r&&o.push(s.now()+d)),this._trimBuffer(),super.next(i)}_subscribe(i){this._throwIfClosed(),this._trimBuffer();const e=this._innerSubscribe(i),{_infiniteTimeWindow:o,_buffer:r}=this,s=r.slice();for(let d=0;d<s.length&&!i.closed;d+=o?1:2)i.next(s[d]);return this._checkFinalizedStatuses(i),e}_trimBuffer(){const{_bufferSize:i,_timestampProvider:e,_buffer:o,_infiniteTimeWindow:r}=this,s=(r?1:2)*i;if(i<1/0&&s<o.length&&o.splice(0,o.length-s),!r){const d=e.now();let A=0;for(let b=1;b<o.length&&o[b]<=d;b+=2)A=b;A&&o.splice(0,A+1)}}}var E=a(3099),B=a(2340),G=a(520),k=a(4594),D=a(1451),Q=a(5245);function H(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"div",10)(1,"button",11),t.NdJ("click",function(){const s=t.CHM(e).$implicit;return t.oxw().zoneSetupRoutes(s.route)}),t._uU(2),t.qZA()()}if(2&n){const e=i.$implicit;t.xp6(2),t.hij(" ",e.title," ")}}const W=function(){return["/admin/home"]},K=function(){return["/admin/dasboard"]},V=function(){return["/admin/report"]};let X=(()=>{class n{constructor(e,o,r){this.breakpointObserver=e,this._router=o,this._http=r,this.zoneSetupbutton=[{title:"Account setup",route:"/admin/account-setup"},{title:"Zone Setup ",route:"/admin/zone-setup"},{title:"Sub zone setup",route:"/admin/sub-zone"},{title:"Device Setup",route:"/admin/device-setup"},{title:"Device Access Setup",route:"/admin/device-access-setup"}],this.isHandset$=this.breakpointObserver.observe(g.u3.Handset).pipe((0,Z.U)(s=>s.matches),function z(n,i,e){var o,r;let s,d=!1;return n&&"object"==typeof n?(s=null!==(o=n.bufferSize)&&void 0!==o?o:1/0,i=null!==(r=n.windowTime)&&void 0!==r?r:1/0,d=!!n.refCount,e=n.scheduler):s=null!=n?n:1/0,(0,E.B)({connector:()=>new Y(s,i,e),resetOnError:!0,resetOnComplete:!1,resetOnRefCountZero:d})}()),this.CheckSubZonePermission().subscribe(s=>{console.log(s,"?>?>?<>><>><>><><><><><><><><><><><><><><><><><><><><><><>")})}logout(){c().fire({text:"Do you want to log out.",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, go ahead.",cancelButtonText:"No"}).then(e=>{e.value?(c().fire("Removed!","You have been logged in successfully","success"),setTimeout(()=>{window.localStorage.clear(),this._router.navigate(["/auth"])},1e3)):e.dismiss===c().DismissReason.cancel&&c().fire("Cancelled","ok","warning")})}zoneSetupRoutes(e){this._router.navigate([e])}CheckSubZonePermission(){return this._http.get(B.N.baseUrl+"/admin/user/all/permission")}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(g.Yg),t.Y36(u.F0),t.Y36(G.eN))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-navigation"]],decls:22,vars:8,consts:[["color","primary",2,"height","90px"],["mat-icon-button","","aria-label","Example icon-button with menu icon",1,"example-icon"],["width","89px","src","https://chakr.in/wp-content/uploads/2018/12/Logo-Chakr-Innvoation-Ratina-1.png","alt",""],[1,"example-spacer"],["mat-button","","routerLinkActive","router-link-active",3,"routerLink"],["mat-button","",3,"routerLink"],["mat-button","",3,"matMenuTriggerFor"],["setup","matMenu"],["class","",4,"ngFor","ngForOf"],["mat-button","",3,"click"],[1,""],["mat-menu-item","",3,"click"]],template:function(e,o){if(1&e&&(t.TgZ(0,"p")(1,"mat-toolbar",0),t._UZ(2,"button",1),t.TgZ(3,"span"),t._UZ(4,"img",2),t.qZA(),t._UZ(5,"span",3),t.TgZ(6,"button",4),t._uU(7,"Home"),t.qZA(),t.TgZ(8,"button",4),t._uU(9,"Dashboard"),t.qZA(),t.TgZ(10,"button",5),t._uU(11,"Report"),t.qZA(),t.TgZ(12,"button",6),t._uU(13,"Setup"),t.qZA(),t.TgZ(14,"mat-menu",null,7),t.YNc(16,H,3,1,"div",8),t.qZA(),t.TgZ(17,"button",9),t.NdJ("click",function(){return o.logout()}),t._uU(18," Logout "),t.TgZ(19,"mat-icon"),t._uU(20,"logout"),t.qZA()()()(),t._UZ(21,"router-outlet")),2&e){const r=t.MAs(15);t.xp6(6),t.Q6J("routerLink",t.DdM(5,W)),t.xp6(2),t.Q6J("routerLink",t.DdM(6,K)),t.xp6(2),t.Q6J("routerLink",t.DdM(7,V)),t.xp6(2),t.Q6J("matMenuTriggerFor",r),t.xp6(4),t.Q6J("ngForOf",o.zoneSetupbutton)}},directives:[k.Ye,T.lW,u.Od,u.rH,D.p6,D.VK,m.sg,D.OP,Q.Hw,u.lC],styles:[".example-spacer[_ngcontent-%COMP%]{flex:1 1 auto}"]}),n})();var $=a(4107),tt=a(508);const et=[{path:"",component:X,children:[{path:"home",component:J},{path:"dasboard",component:L},{path:"zone-setup",loadChildren:()=>Promise.all([a.e(592),a.e(350)]).then(a.bind(a,4350)).then(n=>n.ZoneSetupModule)},{path:"sub-zone",loadChildren:()=>Promise.all([a.e(592),a.e(965)]).then(a.bind(a,965)).then(n=>n.SubZoneModule)},{path:"device-setup",loadChildren:()=>Promise.all([a.e(592),a.e(98)]).then(a.bind(a,6098)).then(n=>n.DeviceSetupModule)},{path:"account-setup",loadChildren:()=>a.e(504).then(a.bind(a,5504)).then(n=>n.AccountSetupModule)},{path:"device-access-setup",loadChildren:()=>a.e(660).then(a.bind(a,660)).then(n=>n.DeviceAccessSetupModule)},{path:"deviceDetail/:id",component:j},{path:"report",component:(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-report"]],decls:37,vars:0,consts:[[1,"example-card"],[1,"d-flex","justify-content-around"],[1,"m-2"],["appearance","outline",1,"example-full-width"],["matInput","","maxlength","256","type","date","placeholder","Ex. I need help with..."],["message",""],["appearance","outline",1,""],["value","3G"],["value","4G"],["value","5G"],["mat-raised-button","","color","primary",1,""]],template:function(e,o){1&e&&(t.TgZ(0,"mat-card",0),t._UZ(1,"mat-card-header"),t.TgZ(2,"div",1)(3,"h3",2),t._uU(4," DG: Log Data"),t.qZA(),t.TgZ(5,"mat-form-field",3)(6,"mat-label"),t._uU(7,"From Date"),t.qZA(),t._UZ(8,"input",4,5),t.qZA(),t.TgZ(10,"mat-form-field",3)(11,"mat-label"),t._uU(12,"To Date"),t.qZA(),t._UZ(13,"input",4,5),t.qZA(),t.TgZ(15,"mat-form-field",6)(16,"mat-label"),t._uU(17,"Type"),t.qZA(),t.TgZ(18,"mat-select")(19,"mat-option",7),t._uU(20,"3G"),t.qZA(),t.TgZ(21,"mat-option",8),t._uU(22,"4G"),t.qZA(),t.TgZ(23,"mat-option",9),t._uU(24,"5G"),t.qZA()()(),t.TgZ(25,"mat-form-field",6)(26,"mat-label"),t._uU(27,"Location"),t.qZA(),t.TgZ(28,"mat-select")(29,"mat-option",7),t._uU(30,"3G"),t.qZA(),t.TgZ(31,"mat-option",8),t._uU(32,"4G"),t.qZA(),t.TgZ(33,"mat-option",9),t._uU(34,"5G"),t.qZA()()(),t.TgZ(35,"button",10),t._uU(36,"Search.."),t.qZA()()())},directives:[h.a8,h.dk,v.KE,v.hX,C.Nt,$.gD,tt.ey,T.lW],styles:["mat-form-feild[_ngcontent-%COMP%]{padding:10px;margin:20px}"]}),n})()},{path:"",redirectTo:"home",pathMatch:"full"}]}];let ot=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[u.Bz.forChild(et)],u.Bz]}),n})();var S=a(9364);let nt=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[m.ez,S.h]]}),n})(),at=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[m.ez,ot,S.h,nt]]}),n})()},9430:(P,f,a)=>{a.d(f,{U:()=>_});var m=a(7579),u=a(2340),Z=a(5e3),g=a(520);let _=(()=>{class c{constructor(l){this._http=l,this.addDataShared=new m.x,this.updateDataShared=new m.x,this.NewUpdateDataShared=new m.x}AddDevice(l){return this._http.post(u.N.baseUrl+"admin/add/device-setup",l)}deviceList(){return this._http.get(u.N.baseUrl+"admin/list/device-setup")}deviceUpdate(l,t){return this._http.put(u.N.baseUrl+"admin/update/device-setup/"+l,t)}deviceDetail(l){return this._http.get(u.N.baseUrl+"admin/device-setup/details/"+l)}updatePower(l,t){return this._http.get(u.N.baseUrl+"admin/power/device-setup/"+l+"?power="+t)}auto(l){return this._http.get(u.N.baseUrl2+"auto/"+l)}manual(l){return this._http.get(u.N.baseUrl2+"manual/"+l)}relayOn(l){return this._http.get(u.N.baseUrl2+"relayOn/"+l)}relayOff(l){return this._http.get(u.N.baseUrl2+"relayOff/"+l)}SetPoint1(l,t){return this._http.get(u.N.baseUrl2+"SetPoint1/"+l+"/"+t)}SetPoint2(l,t){return this._http.get(u.N.baseUrl2+"SetPoint2/"+l+"/"+t)}verifyPassword(l){return 123456==l}}return c.\u0275fac=function(l){return new(l||c)(Z.LFG(g.eN))},c.\u0275prov=Z.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"}),c})()}}]);