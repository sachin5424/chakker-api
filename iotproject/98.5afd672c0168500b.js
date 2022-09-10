"use strict";(self.webpackChunkIOTProject=self.webpackChunkIOTProject||[]).push([[98],{6098:(K,h,n)=>{n.r(h),n.d(h,{DeviceSetupModule:()=>$});var p=n(9808),m=n(1083),i=n(3075),T=n(5226),u=n.n(T),e=n(5e3),b=n(6357),x=n(1215),g=n(9430),d=n(9224),v=n(7423),_=n(5245),Z=n(7322),U=n(7531),N=n(4107),S=n(508);function I(r,a){if(1&r&&(e.TgZ(0,"mat-option",39),e._uU(1),e.qZA()),2&r){const t=a.$implicit;e.s9C("value",t._id),e.xp6(1),e.hij(" ",t.zoneName," ")}}function q(r,a){if(1&r&&(e.TgZ(0,"mat-error"),e._uU(1),e.qZA()),2&r){const t=e.oxw();e.xp6(1),e.hij(" ",t.formError.zoneId," ")}}function D(r,a){if(1&r&&(e.TgZ(0,"mat-option",39),e._uU(1),e.qZA()),2&r){const t=a.$implicit;e.s9C("value",t._id),e.xp6(1),e.hij(" ",t.zoneName," ")}}function E(r,a){if(1&r&&(e.TgZ(0,"mat-error"),e._uU(1),e.qZA()),2&r){const t=e.oxw();e.xp6(1),e.hij(" ",t.formError.subZoneId," ")}}function C(r,a){if(1&r&&(e.TgZ(0,"mat-error"),e._uU(1),e.qZA()),2&r){const t=e.oxw();e.xp6(1),e.hij(" ",t.formError.place," ")}}function w(r,a){if(1&r&&(e.TgZ(0,"mat-error"),e._uU(1),e.qZA()),2&r){const t=e.oxw();e.xp6(1),e.hij(" ",t.formError.imeiNumber," ")}}function y(r,a){if(1&r&&(e.TgZ(0,"mat-error"),e._uU(1),e.qZA()),2&r){const t=e.oxw();e.xp6(1),e.hij(" ",t.formError.simNumber," ")}}function j(r,a){if(1&r&&(e.TgZ(0,"mat-error"),e._uU(1),e.qZA()),2&r){const t=e.oxw();e.xp6(1),e.hij(" ",t.formError.PumpHp," ")}}function O(r,a){if(1&r&&(e.TgZ(0,"mat-error"),e._uU(1),e.qZA()),2&r){const t=e.oxw();e.xp6(1),e.hij(" ",t.formError.applicationType," ")}}function J(r,a){if(1&r&&(e.TgZ(0,"mat-error"),e._uU(1),e.qZA()),2&r){const t=e.oxw();e.xp6(1),e.hij(" ",t.formError.deviceType," ")}}function L(r,a){if(1&r&&(e.TgZ(0,"mat-error"),e._uU(1),e.qZA()),2&r){const t=e.oxw();e.xp6(1),e.hij(" ",t.formError.operatorName," ")}}function Y(r,a){if(1&r&&(e.TgZ(0,"mat-error"),e._uU(1),e.qZA()),2&r){const t=e.oxw();e.xp6(1),e.hij(" ",t.formError.operatorNumber," ")}}function z(r,a){if(1&r&&(e.TgZ(0,"mat-error"),e._uU(1),e.qZA()),2&r){const t=e.oxw();e.xp6(1),e.hij(" ",t.formError.installationDate," ")}}function F(r,a){if(1&r&&(e.TgZ(0,"mat-error"),e._uU(1),e.qZA()),2&r){const t=e.oxw();e.xp6(1),e.hij(" ",t.formError.serviceOverDate," ")}}function Q(r,a){if(1&r&&(e.TgZ(0,"mat-error"),e._uU(1),e.qZA()),2&r){const t=e.oxw();e.xp6(1),e.hij(" ",t.formError.smsNumber," ")}}function M(r,a){if(1&r&&(e.TgZ(0,"mat-error"),e._uU(1),e.qZA()),2&r){const t=e.oxw();e.xp6(1),e.hij(" ",t.formError.smsStatus," ")}}const k=function(){return["../"]};let c=(()=>{class r{constructor(t,o,l,s,f){this._SubZoneService=t,this._zoneService=o,this._deviceService=l,this.route=s,this.router=f,this.spinner=!1,this.update=!1,this.formError={},this.get_data={},this.deviceSetupForm=new i.cw({zoneId:new i.NI(null,[i.kI.required]),subZoneId:new i.NI(null,[i.kI.required]),imeiNumber:new i.NI(null,[i.kI.required]),simNumber:new i.NI(null,[i.kI.required]),PumpHp:new i.NI(null,[i.kI.required]),operatorName:new i.NI(null,[i.kI.required]),operatorNumber:new i.NI(null,[i.kI.required]),installationDate:new i.NI(null,[i.kI.required]),serviceOverDate:new i.NI(null,[i.kI.required]),smsNumber:new i.NI(null,[]),smsStatus:new i.NI(null,[]),applicationType:new i.NI(null,[i.kI.required]),place:new i.NI(null,[i.kI.required]),deviceType:new i.NI(null,[i.kI.required]),deviceId:new i.NI(null,[i.kI.required])})}ngOnInit(){if(this.getZoneList(),this.getSubZoneList(),this.route.snapshot.paramMap.get("id")){var t=this.route.snapshot.paramMap.get("id");this.getDeviceDetail(t)}}getDeviceDetail(t){this._deviceService.deviceDetail(t).subscribe(o=>{console.log(o),this.get_data=o.data[0],this.setValue(),this.update=!0})}setValue(){console.log(this.get_data,"date");var t=this.formatDate(this.get_data.installationDate),o=this.formatDate(this.get_data.serviceOverDate);this.deviceSetupForm.patchValue({zoneId:this.get_data.zoneId._id,subZoneId:this.get_data.subZoneId._id,imeiNumber:this.get_data.imeiNumber,simNumber:this.get_data.simNumber,PumpHp:this.get_data.PumpHp,operatorName:this.get_data.operatorName,operatorNumber:this.get_data.operatorNumber,installationDate:t,serviceOverDate:o,smsNumber:this.get_data.smsNumber,smsStatus:this.get_data.smsStatus,applicationType:this.get_data.applicationType,place:this.get_data.place,deviceType:this.get_data.deviceType,deviceId:this.get_data.deviceId})}formatDate(t){return new Date(t).toJSON().split("T")[0]}getZoneList(){this._zoneService.ZoneSetupList().subscribe(t=>{console.log(t,"zone list"),this.zoneList=t.data})}getSubZoneList(){this._SubZoneService.SubZoneList().subscribe(t=>{console.log(t,"subzone"),this.subZoneList=t.data})}onSubmit(){this.deviceSetupForm.valid&&this.addZoneData()}addZoneData(){u().fire({title:"Are you sure?",text:"This process is irreversible.",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, go ahead.",cancelButtonText:"No, let me think"}).then(t=>{t.value?this.deviceSetupForm.valid&&this._deviceService.AddDevice(this.deviceSetupForm.value).subscribe({next:o=>{u().fire("Saved!","","success"),this.spinner=!1,this._deviceService.addDataShared.next(o)},error:o=>{this.spinner=!1,console.log(o,"error>>>>>>>>>");const l=o.error.errors;l&&l.map(s=>{this.formError[s.param]=s.msg}),this.formError&&u().fire("Cancelled",Object.keys(this.formError)[0]+" "+this.formError[Object.keys(this.formError)[0]],"error").then(s=>{console.log(s,"error"),l.map(f=>{this.formError[f.param]=f.msg})})}}):t.dismiss===u().DismissReason.cancel&&(this.spinner=!1,u().fire("Cancelled","Product still in our database.)","error"))})}updateDevice(){u().fire({title:"Are you sure?",text:"This process is irreversible.",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, go ahead.",cancelButtonText:"No, let me think"}).then(t=>{t.value?this.deviceSetupForm.valid&&this._deviceService.deviceUpdate(this.get_data._id,this.deviceSetupForm.value).subscribe({next:o=>{u().fire("Saved!","","success"),this.spinner=!1,this._deviceService.addDataShared.next(o)},error:o=>{this.spinner=!1,console.log(o,"error>>>>>>>>>"),o.error.errors.map(s=>{this.formError[s.param]=s.msg}),this.formError.zoneName&&u().fire("Cancelled",this.formError.zoneName,"error")}}):t.dismiss===u().DismissReason.cancel&&(this.spinner=!1,u().fire("Cancelled","Product still in our database.)","error"))})}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(b.X),e.Y36(x.P),e.Y36(g.U),e.Y36(m.gz),e.Y36(m.F0))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-device-setup-add-edit"]],decls:154,vars:19,consts:[[1,"example-card"],[1,"m-1"],["mat-icon-button","","routerLinkActive","router-link-active",3,"routerLink"],[1,"mat-18"],[1,"container"],[3,"formGroup","ngSubmit"],[1,"row"],[1,"col"],[1,"w-100",2,"margin","10px"],["appearance","outline",1,"example-full-width","w-75"],["formControlName","deviceId","matInput","","maxlength","256","placeholder","Ex. I need help with..."],["message",""],["appearance","outline",1,"w-75"],["formControlName","zoneId","name","food"],[3,"value",4,"ngFor","ngForOf"],[4,"ngIf"],["formControlName","subZoneId","name","food"],["matInput","","formControlName","place","maxlength","256","placeholder","Ex. I need help with..."],["formControlName","imeiNumber","matInput","","maxlength","256","placeholder","Ex. I need help with..."],["formControlName","simNumber","matInput","","maxlength","256","placeholder","Ex. I need help with..."],["formControlName","PumpHp","matInput","","maxlength","256","placeholder","Ex. I need help with..."],[1,"m-2"],["formControlName","applicationType","name","food"],["value","vfdgfh"],["formControlName","deviceType"],["value","3G"],["value","4G"],["value","5G"],[1,"w-100"],["matInput","","maxlength","256","placeholder","Ex. I need help with..."],["formControlName","operatorName","matInput","","maxlength","256","placeholder","Ex. I need help with..."],["formControlName","operatorNumber","matInput","","maxlength","256","placeholder","Ex. I need help with..."],["formControlName","installationDate","matInput","","maxlength","256","type","date","placeholder","Ex. I need help with..."],["formControlName","serviceOverDate","matInput","","maxlength","256","type","date","placeholder","Ex. I need help with..."],["formControlName","smsNumber","matInput","","maxlength","256","placeholder","Ex. I need help with..."],["formControlName","smsStatus","name","food"],["value","active"],["value","inactive"],["type","submit","mat-stroked-button","","color","primary",1,"mt-5","w-25"],[3,"value"]],template:function(t,o){1&t&&(e.TgZ(0,"mat-card",0)(1,"div",1)(2,"button",2)(3,"mat-icon",3),e._uU(4,"arrow_back"),e.qZA()()(),e.TgZ(5,"mat-card-title-group")(6,"mat-card-title"),e._uU(7,"Setup Device : Add Manager (GD)"),e.qZA()(),e.TgZ(8,"mat-card-content")(9,"div",4)(10,"form",5),e.NdJ("ngSubmit",function(){return o.update?o.updateDevice():o.onSubmit()}),e.TgZ(11,"div",6)(12,"div",7)(13,"div",8)(14,"mat-form-field",9)(15,"mat-label"),e._uU(16,"Divice Id"),e.qZA(),e._UZ(17,"input",10,11),e.qZA(),e._UZ(19,"br"),e.TgZ(20,"mat-form-field",12)(21,"mat-label"),e._uU(22,"Zone Name"),e.qZA(),e.TgZ(23,"mat-select",13),e.YNc(24,I,2,2,"mat-option",14),e.qZA(),e.YNc(25,q,2,1,"mat-error",15),e.qZA(),e._UZ(26,"br"),e.TgZ(27,"mat-form-field",12)(28,"mat-label"),e._uU(29,"Sub Zone Name"),e.qZA(),e.TgZ(30,"mat-select",16),e.YNc(31,D,2,2,"mat-option",14),e.qZA(),e.YNc(32,E,2,1,"mat-error",15),e.qZA(),e._UZ(33,"br"),e.TgZ(34,"mat-form-field",9)(35,"mat-label"),e._uU(36,"Location"),e.qZA(),e._UZ(37,"input",17,11),e.YNc(39,C,2,1,"mat-error",15),e.qZA(),e._UZ(40,"br"),e.TgZ(41,"mat-form-field",9)(42,"mat-label"),e._uU(43,"IMEI Number"),e.qZA(),e._UZ(44,"input",18,11),e.YNc(46,w,2,1,"mat-error",15),e.qZA(),e._UZ(47,"br"),e.TgZ(48,"mat-form-field",9)(49,"mat-label"),e._uU(50,"SIM Number"),e.qZA(),e._UZ(51,"input",19,11),e.YNc(53,y,2,1,"mat-error",15),e.qZA(),e._UZ(54,"br"),e.TgZ(55,"mat-form-field",9)(56,"mat-label"),e._uU(57,"Pump HP"),e.qZA(),e._UZ(58,"input",20,11),e.YNc(60,j,2,1,"mat-error",15),e.qZA(),e.TgZ(61,"span",21),e._uU(62,"Capicity Of Engine"),e.qZA(),e._UZ(63,"br"),e.TgZ(64,"mat-form-field",12)(65,"mat-label"),e._uU(66,"Application Type"),e.qZA(),e.TgZ(67,"mat-select",22)(68,"mat-option",23),e._uU(69,"3G"),e.qZA()(),e.YNc(70,O,2,1,"mat-error",15),e.qZA(),e._UZ(71,"br"),e.TgZ(72,"mat-form-field",12)(73,"mat-label"),e._uU(74,"Device Type"),e.qZA(),e.TgZ(75,"mat-select",24)(76,"mat-option",25),e._uU(77,"3G"),e.qZA(),e.TgZ(78,"mat-option",26),e._uU(79,"4G"),e.qZA(),e.TgZ(80,"mat-option",27),e._uU(81,"5G"),e.qZA()(),e.YNc(82,J,2,1,"mat-error",15),e.qZA(),e.TgZ(83,"span",21),e._uU(84,"4G/3G Modern "),e.qZA(),e._UZ(85,"br"),e.qZA(),e._uU(86,"12 "),e.qZA(),e.TgZ(87,"div",7)(88,"div",28)(89,"mat-form-field",9)(90,"mat-label"),e._uU(91,"Latitude"),e.qZA(),e._UZ(92,"input",29,11),e.qZA(),e._UZ(94,"br"),e.TgZ(95,"mat-form-field",9)(96,"mat-label"),e._uU(97,"Longitude"),e.qZA(),e._UZ(98,"input",29,11),e.qZA(),e._UZ(100,"br"),e.TgZ(101,"mat-form-field",9)(102,"mat-label"),e._uU(103,"Operator Name"),e.qZA(),e._UZ(104,"input",30,11),e.YNc(106,L,2,1,"mat-error",15),e.qZA(),e.TgZ(107,"span",21),e._uU(108,"Operator On Site "),e.qZA(),e._UZ(109,"br"),e.TgZ(110,"mat-form-field",9)(111,"mat-label"),e._uU(112,"Operator Number"),e.qZA(),e._UZ(113,"input",31,11),e.YNc(115,Y,2,1,"mat-error",15),e.qZA(),e.TgZ(116,"span",21),e._uU(117,"Operator On Site"),e.qZA(),e._UZ(118,"br"),e.TgZ(119,"mat-form-field",9)(120,"mat-label"),e._uU(121,"Installation Date"),e.qZA(),e._UZ(122,"input",32,11),e.YNc(124,z,2,1,"mat-error",15),e.qZA(),e._UZ(125,"br"),e.TgZ(126,"mat-form-field",9)(127,"mat-label"),e._uU(128,"Service Order Date"),e.qZA(),e._UZ(129,"input",33,11),e.YNc(131,F,2,1,"mat-error",15),e.qZA(),e._UZ(132,"br"),e.TgZ(133,"mat-form-field",9)(134,"mat-label"),e._uU(135,"SMS Number"),e.qZA(),e._UZ(136,"input",34,11),e.YNc(138,Q,2,1,"mat-error",15),e.qZA(),e.TgZ(139,"span",21),e._uU(140," Mobile numbers which will receive alert messages "),e.qZA(),e._UZ(141,"br"),e.TgZ(142,"mat-form-field",12)(143,"mat-label"),e._uU(144,"SMS Status"),e.qZA(),e.TgZ(145,"mat-select",35)(146,"mat-option",36),e._uU(147,"Active"),e.qZA(),e.TgZ(148,"mat-option",37),e._uU(149,"Pending"),e.qZA()(),e.YNc(150,M,2,1,"mat-error",15),e.qZA(),e._UZ(151,"br"),e.TgZ(152,"button",38),e._uU(153,"Save"),e.qZA()()()()()()()()),2&t&&(e.xp6(2),e.Q6J("routerLink",e.DdM(18,k)),e.xp6(8),e.Q6J("formGroup",o.deviceSetupForm),e.xp6(14),e.Q6J("ngForOf",o.zoneList),e.xp6(1),e.Q6J("ngIf",o.formError.zoneId),e.xp6(6),e.Q6J("ngForOf",o.subZoneList),e.xp6(1),e.Q6J("ngIf",o.formError.subZoneId),e.xp6(7),e.Q6J("ngIf",o.formError.place),e.xp6(7),e.Q6J("ngIf",o.formError.imeiNumber),e.xp6(7),e.Q6J("ngIf",o.formError.simNumber),e.xp6(7),e.Q6J("ngIf",o.formError.PumpHp),e.xp6(10),e.Q6J("ngIf",o.formError.applicationType),e.xp6(12),e.Q6J("ngIf",o.formError.deviceType),e.xp6(24),e.Q6J("ngIf",o.formError.operatorName),e.xp6(9),e.Q6J("ngIf",o.formError.operatorNumber),e.xp6(9),e.Q6J("ngIf",o.formError.installationDate),e.xp6(7),e.Q6J("ngIf",o.formError.serviceOverDate),e.xp6(7),e.Q6J("ngIf",o.formError.smsNumber),e.xp6(12),e.Q6J("ngIf",o.formError.smsStatus))},directives:[d.a8,v.lW,m.Od,m.rH,_.Hw,d.C1,d.n5,d.dn,i._Y,i.JL,i.sg,Z.KE,Z.hX,i.Fj,U.Nt,i.JJ,i.u,i.nD,N.gD,p.sg,S.ey,p.O5,Z.TO],styles:[""]}),r})();var A=n(8966);const P=function(r){return["edit",r]};function H(r,a){if(1&r&&(e.TgZ(0,"tr")(1,"td",6),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.qZA(),e.TgZ(9,"td"),e._uU(10),e.qZA(),e.TgZ(11,"td"),e._uU(12),e.qZA(),e.TgZ(13,"td"),e._uU(14),e.qZA(),e.TgZ(15,"td"),e._uU(16),e.qZA(),e.TgZ(17,"td"),e._uU(18),e.qZA(),e.TgZ(19,"td"),e._uU(20),e.qZA(),e.TgZ(21,"td")(22,"mat-icon",7),e._uU(23,"edit"),e.qZA()()()),2&r){const t=a.$implicit,o=a.index;e.xp6(2),e.hij(" ",o+1," "),e.xp6(2),e.hij(" ",t.addBy," "),e.xp6(2),e.hij(" ",t.applicationType," "),e.xp6(2),e.hij(" ",t.deviceId," "),e.xp6(2),e.hij("",t.zoneSetupName," "),e.xp6(2),e.hij("",t.subZoneName," "),e.xp6(2),e.hij(" ",t.place," "),e.xp6(2),e.hij(" ",t.imeiNumber," "),e.xp6(2),e.hij(" ",t.simNumber," "),e.xp6(2),e.hij(" ",t.PumpHp," "),e.xp6(2),e.Q6J("routerLink",e.VKq(11,P,t._id))}}let B=(()=>{class r{constructor(t,o){this._deviceService=t,this.dialog=o,this.data={}}ngOnInit(){this.getList()}getList(){this._deviceService.deviceList().subscribe(t=>{this.data=t.data})}edit(t){this.dialog.open(c,{data:{update:!0,data:t},width:"85%",height:"85%"}).afterClosed().subscribe(l=>{console.log("The dialog was closed"),this.getList()})}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(g.U),e.Y36(A.uw))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-device-setup-table"]],decls:29,vars:1,consts:[[1,"container-fluid"],[1,"table"],[1,"table","table-hover","m-3"],[1,"thead-dark"],["scope","col"],[4,"ngFor","ngForOf"],["scope","row"],["aria-hidden","false","routerLinkActive","router-link-active","aria-label","Example home icon",3,"routerLink"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"table",2)(3,"thead",3)(4,"tr")(5,"th",4),e._uU(6,"S.No"),e.qZA(),e.TgZ(7,"th",4),e._uU(8,"Add By "),e.qZA(),e.TgZ(9,"th",4),e._uU(10,"Application "),e.qZA(),e.TgZ(11,"th",4),e._uU(12,"Device Id "),e.qZA(),e.TgZ(13,"th",4),e._uU(14,"Zone Name"),e.qZA(),e.TgZ(15,"th",4),e._uU(16,"Sub Zone "),e.qZA(),e.TgZ(17,"th",4),e._uU(18,"Location"),e.qZA(),e.TgZ(19,"th",4),e._uU(20,"IMEI Number "),e.qZA(),e.TgZ(21,"th",4),e._uU(22,"SIM Number "),e.qZA(),e.TgZ(23,"th",4),e._uU(24,"Pump HP "),e.qZA(),e.TgZ(25,"th",4),e._uU(26,"Edit"),e.qZA()()(),e.TgZ(27,"tbody"),e.YNc(28,H,24,13,"tr",5),e.qZA()()()()),2&t&&(e.xp6(28),e.Q6J("ngForOf",o.data))},directives:[p.sg,_.Hw,m.Od,m.rH],styles:[""]}),r})();const G=function(){return["add"]},R=[{path:"",component:(()=>{class r{constructor(t){this.dialog=t}ngOnInit(){}onClick(){this.dialog.open(c,{width:"85%",height:"85%"}).afterClosed().subscribe(o=>{console.log("The dialog was closed")})}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(A.uw))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-device-setup-dashboard"]],decls:9,vars:2,consts:[[1,"container-fluid"],[1,"row"],[1,"col"],[1,"d-flex","justify-content-end",2,"margin-right","3%"],["mat-raised-button","","color","primary","routerLinkActive","router-link-active",3,"routerLink"],[1,"my-3"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div")(4,"div",3)(5,"a",4),e._uU(6,"Add"),e.qZA()(),e.TgZ(7,"mat-card",5),e._UZ(8,"app-device-setup-table"),e.qZA()()()()()),2&t&&(e.xp6(5),e.Q6J("routerLink",e.DdM(1,G)))},directives:[v.zs,m.yS,m.Od,d.a8,B],styles:[""]}),r})()},{path:"add",component:c},{path:"edit/:id",component:c}];let X=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[[m.Bz.forChild(R)],m.Bz]}),r})();var V=n(9364);let $=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[[p.ez,X,V.h]]}),r})()}}]);