"use strict";(self.webpackChunkIOTProject=self.webpackChunkIOTProject||[]).push([[965],{965:(oe,f,s)=>{s.r(f),s.d(f,{SubZoneModule:()=>ne});var m=s(9808),c=s(1083),e=s(5e3),p=s(6357),b=s(679),u=s(4999),Z=s(5226),d=s.n(Z),h=s(7423),S=s(5245);function T(t,o){1&t&&(e.TgZ(0,"th",15),e._uU(1," S No. "),e.qZA())}function g(t,o){if(1&t&&(e.TgZ(0,"td",16),e._uU(1),e.qZA()),2&t){const n=o.index;e.xp6(1),e.hij(" ",n+1," ")}}function x(t,o){1&t&&(e.TgZ(0,"th",15),e._uU(1," UID "),e.qZA())}function C(t,o){if(1&t&&(e.TgZ(0,"td",16),e._uU(1),e.qZA()),2&t){const n=o.$implicit,i=o.index;e.xp6(1),e.hij(" ",n._id[10]+i," ")}}function D(t,o){1&t&&(e.TgZ(0,"th",15),e._uU(1," Sub Zone Name "),e.qZA())}function N(t,o){if(1&t&&(e.TgZ(0,"td",16),e._uU(1),e.qZA()),2&t){const n=o.$implicit;e.xp6(1),e.hij(" ",n.zoneName," ")}}function A(t,o){1&t&&(e.TgZ(0,"th",15),e._uU(1," Latitude "),e.qZA())}function v(t,o){if(1&t&&(e.TgZ(0,"td",16),e._uU(1),e.qZA()),2&t){const n=o.$implicit;e.xp6(1),e.hij(" ",n.location.coordinates[0]?n.location.coordinates[0]:"-----"," ")}}function I(t,o){1&t&&(e.TgZ(0,"th",15),e._uU(1," Longitude "),e.qZA())}function w(t,o){if(1&t&&(e.TgZ(0,"td",16),e._uU(1),e.qZA()),2&t){const n=o.$implicit;e.xp6(1),e.hij(" ",n.location.coordinates[1]?n.location.coordinates[1]:"-----"," ")}}function U(t,o){1&t&&(e.TgZ(0,"th",15),e._uU(1," Status "),e.qZA())}const P=function(t){return{color:t}};function E(t,o){if(1&t&&(e.TgZ(0,"td",17),e._uU(1),e.qZA()),2&t){const n=o.$implicit;e.Q6J("ngStyle",e.VKq(2,P,n.status?"green":"red")),e.xp6(1),e.hij(" ",1==n.status?"Actiive":"Deactivated"," ")}}function y(t,o){1&t&&(e.TgZ(0,"th",15),e._uU(1," server Time "),e.qZA())}function Y(t,o){if(1&t&&(e.TgZ(0,"td",16),e._uU(1),e.ALo(2,"date"),e.qZA()),2&t){const n=o.$implicit;e.xp6(1),e.hij(" ",e.xi3(2,1,n.serverTime,"dd/mm/yyyy")," ")}}function Q(t,o){1&t&&(e.TgZ(0,"th",15),e._uU(1," Edit "),e.qZA())}function J(t,o){if(1&t){const n=e.EpF();e.TgZ(0,"button",20),e.NdJ("click",function(){e.CHM(n);const a=e.oxw().$implicit;return e.oxw().ZoneSetupEdit(a)}),e.TgZ(1,"mat-icon",21),e._uU(2," edit "),e.qZA()()}}function O(t,o){1&t&&(e.TgZ(0,"button",22)(1,"mat-icon",21),e._uU(2," edit "),e.qZA()()),2&t&&e.Q6J("disabled",!0)}function k(t,o){if(1&t&&(e.TgZ(0,"td",16),e.YNc(1,J,3,0,"button",18),e.YNc(2,O,3,1,"button",19),e.qZA()),2&t){const n=e.oxw();e.xp6(1),e.Q6J("ngIf",n.Update_Permissions),e.xp6(1),e.Q6J("ngIf",!n.Update_Permissions)}}function q(t,o){1&t&&(e.TgZ(0,"th",15),e._uU(1," Delete "),e.qZA())}function z(t,o){if(1&t){const n=e.EpF();e.TgZ(0,"button",25),e.NdJ("click",function(){e.CHM(n);const a=e.oxw().$implicit;return e.oxw().ZoneSetupDelete(a)}),e.TgZ(1,"mat-icon",26),e._uU(2," delete "),e.qZA()()}}function B(t,o){1&t&&(e.TgZ(0,"button",27)(1,"mat-icon",26),e._uU(2," delete "),e.qZA()()),2&t&&e.Q6J("disabled",!0)}function M(t,o){if(1&t&&(e.TgZ(0,"td",16),e.YNc(1,z,3,0,"button",23),e.YNc(2,B,3,1,"button",24),e.qZA()),2&t){const n=e.oxw();e.xp6(1),e.Q6J("ngIf",n.Update_Permissions),e.xp6(1),e.Q6J("ngIf",!n.Update_Permissions)}}function R(t,o){1&t&&e._UZ(0,"tr",28)}function j(t,o){1&t&&e._UZ(0,"tr",29),2&t&&e.Q6J("@fadeOut",void 0)}let L=(()=>{class t{constructor(n){this._SubZoneService=n,this.displayedColumns=["position","name","weight","symbol","longitude","status","stime","action","delete"],this.Update_Permissions=!1,this.Delete_Permissions=!1,this.View_Permissions=!1,console.log(this.adddata,"jhgfds"),this._SubZoneService.NewUpdateDataShared.subscribe(i=>{console.log(i,"??update value");const a=this.dataSource.findIndex(l=>l._id==i._id);console.log(a,"????"),this.dataSource[a].zoneName=i.zoneName})}onClose(n){console.log(n,"table")}ngOnInit(){0==this.View_Permissions?this.dataSource=[]:this.ZoneSetupList(),console.log(this.View_Permissions),this._SubZoneService.addDataShared.subscribe(n=>{this.dataSource=[...this.dataSource,n.data]})}onRowClick(n){this.dataSource=new u.by(this.dataSource.data.filter(i=>i.id!==n.id))}ZoneSetupList(){this._SubZoneService.SubZoneList().subscribe({next:n=>{this.dataSource=n.data,console.log(this.dataSource,"data")}})}ZoneSetupDelete(n){d().fire({text:`Do you want ${n.zoneName} to be deleted.`,icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, go ahead.",cancelButtonText:"No"}).then(i=>{i.value?this._SubZoneService.SubZoneDelete(n._id).subscribe({next:a=>{d().fire("Deleted!","Your file has been deleted.","success"),this.dataSource=this.dataSource.filter(l=>l._id!=n._id)}}):i.dismiss===d().DismissReason.cancel&&d().fire("Cancelled","","warning")})}ZoneSetupEdit(n){this._SubZoneService.updateDataShared.next(n)}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(p.X))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-sub-zone-table"]],inputs:{Update_Permissions:"Update_Permissions",Delete_Permissions:"Delete_Permissions",View_Permissions:"View_Permissions",adddata:"adddata"},decls:30,vars:3,consts:[["mat-table","",1,"mat-elevation-z8",3,"dataSource"],["matColumnDef","position"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","name"],["matColumnDef","weight"],["matColumnDef","symbol"],["matColumnDef","longitude"],["matColumnDef","status"],["mat-cell","",3,"ngStyle",4,"matCellDef"],["matColumnDef","stime"],["matColumnDef","action"],["matColumnDef","delete"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell",""],["mat-cell","",3,"ngStyle"],["style","background:green","mat-mini-fab","",3,"click",4,"ngIf"],["style","background:#dddd","mat-mini-fab","",3,"disabled",4,"ngIf"],["mat-mini-fab","",2,"background","green",3,"click"],[1,"mat-18",2,"color","white"],["mat-mini-fab","",2,"background","#dddd",3,"disabled"],["color","warn","mat-mini-fab","",3,"click",4,"ngIf"],["color","warn","mat-mini-fab","",3,"disabled",4,"ngIf"],["color","warn","mat-mini-fab","",3,"click"],[1,"mat-18"],["color","warn","mat-mini-fab","",3,"disabled"],["mat-header-row",""],["mat-row",""]],template:function(n,i){1&n&&(e.TgZ(0,"table",0),e.ynx(1,1),e.YNc(2,T,2,0,"th",2),e.YNc(3,g,2,1,"td",3),e.BQk(),e.ynx(4,4),e.YNc(5,x,2,0,"th",2),e.YNc(6,C,2,1,"td",3),e.BQk(),e.ynx(7,5),e.YNc(8,D,2,0,"th",2),e.YNc(9,N,2,1,"td",3),e.BQk(),e.ynx(10,6),e.YNc(11,A,2,0,"th",2),e.YNc(12,v,2,1,"td",3),e.BQk(),e.ynx(13,7),e.YNc(14,I,2,0,"th",2),e.YNc(15,w,2,1,"td",3),e.BQk(),e.ynx(16,8),e.YNc(17,U,2,0,"th",2),e.YNc(18,E,2,4,"td",9),e.BQk(),e.ynx(19,10),e.YNc(20,y,2,0,"th",2),e.YNc(21,Y,3,4,"td",3),e.BQk(),e.ynx(22,11),e.YNc(23,Q,2,0,"th",2),e.YNc(24,k,3,2,"td",3),e.BQk(),e.ynx(25,12),e.YNc(26,q,2,0,"th",2),e.YNc(27,M,3,2,"td",3),e.BQk(),e.YNc(28,R,1,0,"tr",13),e.YNc(29,j,1,1,"tr",14),e.qZA()),2&n&&(e.Q6J("dataSource",i.dataSource),e.xp6(28),e.Q6J("matHeaderRowDef",i.displayedColumns),e.xp6(1),e.Q6J("matRowDefColumns",i.displayedColumns))},directives:[u.BZ,u.w1,u.fO,u.ge,u.Dz,u.ev,m.PC,m.O5,h.lW,S.Hw,u.as,u.XQ,u.nj,u.Gk],pipes:[m.uU],styles:["table[_ngcontent-%COMP%]{width:100%}"],data:{animation:[b.U6,b.i9]}}),t})();var r=s(3075),_=s(7322),F=s(7531),V=s(773);function $(t,o){1&t&&e._UZ(0,"mat-spinner",15)}function X(t,o){if(1&t&&(e.TgZ(0,"div",16),e._uU(1),e.qZA()),2&t){const n=e.oxw(2);e.xp6(1),e.hij(" ",0==n.check_update?" Add Sub Zone ":" Update Sub Zone "," ")}}function H(t,o){if(1&t&&(e.TgZ(0,"button",12),e.YNc(1,$,1,0,"mat-spinner",13),e.YNc(2,X,2,1,"div",14),e.qZA()),2&t){const n=e.oxw();e.Q6J("disabled",n.form.invalid),e.xp6(1),e.Q6J("ngIf",n.spinner),e.xp6(1),e.Q6J("ngIf",!n.spinner)}}function W(t,o){1&t&&(e.TgZ(0,"button",12),e._uU(1," Add Sub Zone "),e.qZA()),2&t&&e.Q6J("disabled",!0)}let G=(()=>{class t{constructor(n){this._SubZoneService=n,this.Add_Permissions=!1,this.spinner=!1,this.formError={},this.upDateData={},this.check_update=!1,this.addData=new e.vpe,this.formAddData=this.addData,this._SubZoneService.updateDataShared.subscribe(i=>{this.upDateData=i,console.log(i,"update"),this.createForm(),this.check_update=!0})}newForm(){this.check_update=!1,this._SubZoneService.updateDataShared.unsubscribe(),this.createForm()}createForm(){this.form=new r.cw({status:new r.NI(!1),zoneName:new r.NI(this.upDateData.zoneName?this.upDateData.zoneName:null,[r.kI.required]),latitude:new r.NI(this.latitdude?this.latitdude:null,[r.kI.required]),longitude:new r.NI(this.longitude?this.longitude:null,[r.kI.required])})}ngOnInit(){this.createForm(),0==this.Add_Permissions&&this.form.disable()}onSubmit(){this.spinner=!0,0==this.check_update?this.addZoneData():this.subZoneUpdate()}addZoneData(){d().fire({title:"Are you sure?",text:"This process is irreversible.",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, go ahead.",cancelButtonText:"No, let me think"}).then(n=>{n.value?this.form.valid&&this._SubZoneService.SubZoneAdd(this.form.value).subscribe({next:i=>{d().fire("Saved!","","success"),this.spinner=!1,this._SubZoneService.addDataShared.next(i)},error:i=>{this.spinner=!1,console.log(i,"error>>>>>>>>>"),i.error.errors.map(l=>{this.formError[l.param]=l.msg}),this.formError.zoneName&&d().fire("Cancelled",this.formError.zoneName,"error")}}):n.dismiss===d().DismissReason.cancel&&(this.spinner=!1,d().fire("Cancelled","Product still in our database.)","error"))})}subZoneUpdate(){this.spinner=!0,d().fire({title:"Do you want to save the changes?",showDenyButton:!0,showCancelButton:!0,confirmButtonText:"Save",denyButtonText:"Don't save"}).then(n=>{n.isConfirmed?this.form.valid&&this._SubZoneService.SubZoneUpdate(this.upDateData._id,this.form.value).subscribe({next:i=>{d().fire("Saved!","","success"),this.spinner=!1,this._SubZoneService.NewUpdateDataShared.next(i.data)},error:i=>{this.spinner=!1,console.log(i,"error>>>>>>>>>"),i.error.errors.map(l=>{this.formError[l.param]=l.msg}),this.formError.zoneName&&d().fire("Cancelled",this.formError.zoneName,"error")}}):n.isDenied&&(this.spinner=!1,d().fire("Changes are not saved","","info"))})}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(p.X))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-sub-zone-add-edit"]],inputs:{Add_Permissions:"Add_Permissions"},outputs:{addData:"addData"},decls:23,vars:4,consts:[[3,"formGroup","ngSubmit"],[1,"container"],[1,"text-center"],[1,"row","mt-3"],[1,"col-md-12","mt-"],["appearance","outline",1,"example-full-width"],["formControlName","zoneName","matInput","","placeholder","Name"],[1,"col-md-6"],["formControlName","latitude","matInput","","placeholder","Latitude"],["formControlName","longitude","matInput","","placeholder","Longitude"],[1,"col-ma-12"],["class","w-100 t","type","submit","mat-raised-button","",3,"disabled",4,"ngIf"],["type","submit","mat-raised-button","",1,"w-100","t",3,"disabled"],["diameter","40","style","margin-left:150px",4,"ngIf"],["class","",4,"ngIf"],["diameter","40",2,"margin-left","150px"],[1,""]],template:function(n,i){1&n&&(e.TgZ(0,"form",0),e.NdJ("ngSubmit",function(){return i.onSubmit()}),e.TgZ(1,"div",1)(2,"h1",2),e._uU(3),e.qZA(),e.TgZ(4,"div",3)(5,"div",4)(6,"mat-form-field",5)(7,"mat-label"),e._uU(8,"Sub Zone Name"),e.qZA(),e._UZ(9,"input",6),e.qZA()(),e.TgZ(10,"div",7)(11,"mat-form-field",5)(12,"mat-label"),e._uU(13,"Latitude"),e.qZA(),e._UZ(14,"input",8),e.qZA()(),e.TgZ(15,"div",7)(16,"mat-form-field",5)(17,"mat-label"),e._uU(18,"Longitude"),e.qZA(),e._UZ(19,"input",9),e.qZA()(),e.TgZ(20,"div",10),e.YNc(21,H,3,3,"button",11),e.YNc(22,W,2,1,"button",11),e.qZA()()()()),2&n&&(e.Q6J("formGroup",i.form),e.xp6(3),e.hij(" ",1==i.check_update?" Update Sub Zone ":" Add Sub Zone "," "),e.xp6(18),e.Q6J("ngIf",i.Add_Permissions),e.xp6(1),e.Q6J("ngIf",!i.Add_Permissions))},directives:[r._Y,r.JL,r.sg,_.KE,_.hX,r.Fj,F.Nt,r.JJ,r.u,m.O5,h.lW,V.Ou],styles:[".example-form[_ngcontent-%COMP%]{min-width:150px;max-width:500px;width:100%}.example-full-width[_ngcontent-%COMP%]{width:100%}"]}),t})();const K=[{path:"",component:(()=>{class t{constructor(n,i){this._http=n,this._router=i,this.check_valid=[],this.permissions=[],this.subZone_permissions=[],this.VIEW_PERMISSIONS=!1,this.DELETE_PERMISSIONS=!1,this.UPDATE_PERMISSIONS=!1,this.ADD_PERMISSIONS=!1}ngOnInit(){console.log("ok;:"),this.getPermission()}getPermission(){this._http.CheckSubZonePermission().subscribe(n=>{n.data.map(i=>{this.permissions=[...this.permissions,...i.permissions]}),console.log(this.permissions,"?>:?>:>"),this.permissions.map(i=>{console.log(i,"."),"sub_zones"==i.model_name&&this.subZone_permissions.push(i),this.subZone_permissions.map(a=>{"GET"==a.method&&(this.VIEW_PERMISSIONS=!0),"DELETE"==a.method&&(this.DELETE_PERMISSIONS=!0),"PUT"==a.method&&(this.UPDATE_PERMISSIONS=!0),"POST"==a.method&&(this.ADD_PERMISSIONS=!0)})}),console.log(this.subZone_permissions,"?>:?>:>,subZone_permissions")})}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(p.X),e.Y36(c.F0))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-sub-zone-dashboard"]],decls:6,vars:4,consts:[[1,"container-fluid"],[1,"row"],[1,"col-md-8"],[3,"Update_Permissions","Delete_Permissions","View_Permissions"],[1,"col-md-4","p-3"],[3,"Add_Permissions"]],template:function(n,i){1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2),e._UZ(3,"app-sub-zone-table",3),e.qZA(),e.TgZ(4,"div",4),e._UZ(5,"app-sub-zone-add-edit",5),e.qZA()()()),2&n&&(e.xp6(3),e.Q6J("Update_Permissions",i.UPDATE_PERMISSIONS)("Delete_Permissions",i.DELETE_PERMISSIONS)("View_Permissions",i.VIEW_PERMISSIONS),e.xp6(2),e.Q6J("Add_Permissions",i.ADD_PERMISSIONS))},directives:[L,G],styles:[""]}),t})()}];let ee=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[c.Bz.forChild(K)],c.Bz]}),t})();var te=s(9364);let ne=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[m.ez,ee,te.h]]}),t})()}}]);