import{q as C,n as m,_ as B,d as F,o as U,c as L,a as f,b as n,w as o,F as w,E as p,f as k,g as v,h as $,i as a,j as I,k as P,l as q,m as E}from"./index-f9d9056b.js";/* empty css                   */const N=e=>m.request({url:"/api/menu/delete",method:"get",params:e}),W=e=>m.request({url:"/api/menu/colums",method:"get",params:e}),S=e=>m.request({url:"/api/menu/getFrontendMenuByUserId",method:"get",params:e}),j=e=>m.request({url:"/api/menu/getMenusByPid",method:"get",params:e}),T=e=>m.request({url:"/api/menu/add",method:"post",data:e}),D=e=>m.request({url:"/api/menu/edit",method:"post",data:e}),A=e=>m.request({url:"/api/menu/all",method:"get",params:e}),b=C.create({baseURL:"http://api.jqrjq.cn",withCredentials:!0});b.interceptors.request.use(e=>e,e=>Promise.reject(e));b.interceptors.response.use(e=>e,e=>Promise.reject(e));const z=F({data(){return{FrontendMenusByColums:!1,colums:null,FrontendMenuByUserId:!1,id:null,MenusByPid:!1,pid:null,addFlag:!1,frontendMenuList:[],frontendMenu:{description:"",id:0,hasChildren:"",menuName:"",menuSort:"",menuUrl:"",pid:""},formLabelWidth:80}},created(){this.getList()},methods:{getFrontendMenusByColums(e){var l=new Array;l.push(e),W({colums:l}).then(g=>{console.log(g),this.frontendMenuList=g.data.menus})},getFrontendMenuByUserId(e){console.log(e),S({id:e}).then(u=>{console.log(u),this.frontendMenuList=u.data})},getMenusByPid(e){j({pid:e}).then(u=>{this.frontendMenuList=u.data.menus,console.log(u.data.menus)}),this.getList(),this.MenusByPid=!1},getList(){A().then(e=>{this.frontendMenuList=e.data.communities})},del(e){N({id:e}).then(u=>{if(u.success)this.getList();else return console.log(u.msg),!1}).catch(u=>{})},add(){this.frontendMenu={description:"",id:0,hasChildren:"",menuName:"",menuSort:"",menuUrl:"",pid:""},this.addFlag=!0},edit(e){this.addFlag=!0,this.frontendMenu.id=e.id,this.frontendMenu.menuSort=e.menuSort,this.frontendMenu.menuUrl=e.menuUrl,this.frontendMenu.menuName=e.menuName,this.frontendMenu.pid=e.pid,this.frontendMenu.description=e.description,this.frontendMenu.hasChildren=e.hasChildren},save(){const e=this.frontendMenu;e.id==0?T(e).then(l=>{if(l.success)this.addFlag=!1,this.getList(),p(l.msg);else return p(l.msg),!1}).catch(l=>{p("网络错误联系管理员")}):D(e).then(l=>{if(l.success)this.addFlag=!1,this.getList(),p(l.msg);else return p(l.msg),!1}).catch(l=>{p("网络错误联系管理员")})}}}),H={class:"adCates"},R={class:"adcate-tools"},G={class:"dialog-footer"},J={class:"dialog-footer"},K={class:"dialog-footer"},O={class:"dialog-footer"};function Q(e,l,u,g,X,Y){const d=k,r=I,y=v,s=P,i=q,M=E,h=$;return U(),L(w,null,[f("div",H,[f("div",R,[n(d,{type:"warning",onClick:l[0]||(l[0]=t=>e.addFlag=!0)},{default:o(()=>[a("添加")]),_:1}),n(d,{type:"warning",onClick:l[1]||(l[1]=t=>e.FrontendMenusByColums=!0)},{default:o(()=>[a("通过字段查询前端菜单")]),_:1}),n(d,{type:"warning",onClick:l[2]||(l[2]=t=>e.FrontendMenuByUserId=!0)},{default:o(()=>[a("通过用户id查询前端菜单")]),_:1}),n(d,{type:"warning",onClick:l[3]||(l[3]=t=>e.MenusByPid=!0)},{default:o(()=>[a("通过父id查询前端菜单")]),_:1})]),n(y,{data:e.frontendMenuList,style:{width:"100%"}},{default:o(()=>[n(r,{fixed:"",prop:"id",label:"#",width:"50"}),n(r,{prop:"description",label:"描述"}),n(r,{prop:"hasChildren",label:"是否有子菜单"}),n(r,{prop:"menuName",label:"前端菜单名称"}),n(r,{prop:"menuSort",label:"排序"}),n(r,{prop:"menuUrl",label:"前端菜单访问HTML地址"}),n(r,{prop:"pid",label:"父ID	"}),n(r,{fixed:"right",label:"操作",width:"120"},{default:o(t=>[n(d,{link:"",type:"primary",size:"small",onClick:V=>e.edit(t.row)},{default:o(()=>[a("更新")]),_:2},1032,["onClick"]),n(d,{link:"",type:"primary",size:"small",onClick:V=>e.del(t.row.id)},{default:o(()=>[a("删除")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])]),n(h,{modelValue:e.addFlag,"onUpdate:modelValue":l[12]||(l[12]=t=>e.addFlag=t),title:"前端菜单编辑"},{footer:o(()=>[f("span",G,[n(d,{onClick:l[10]||(l[10]=t=>e.addFlag=!1)},{default:o(()=>[a("Cancel")]),_:1}),n(d,{type:"primary",onClick:l[11]||(l[11]=t=>e.save())},{default:o(()=>[a(" 保存 ")]),_:1})])]),default:o(()=>[n(M,{model:e.frontendMenuList},{default:o(()=>[n(i,{label:"描述","label-width":e.formLabelWidth},{default:o(()=>[n(s,{modelValue:e.frontendMenu.description,"onUpdate:modelValue":l[4]||(l[4]=t=>e.frontendMenu.description=t),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),n(i,{label:"是否有子菜单","label-width":e.formLabelWidth},{default:o(()=>[n(s,{modelValue:e.frontendMenu.hasChildren,"onUpdate:modelValue":l[5]||(l[5]=t=>e.frontendMenu.hasChildren=t),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),n(i,{label:"前端菜单名称","label-width":e.formLabelWidth},{default:o(()=>[n(s,{modelValue:e.frontendMenu.menuName,"onUpdate:modelValue":l[6]||(l[6]=t=>e.frontendMenu.menuName=t),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),n(i,{label:"排序","label-width":e.formLabelWidth},{default:o(()=>[n(s,{modelValue:e.frontendMenu.menuSort,"onUpdate:modelValue":l[7]||(l[7]=t=>e.frontendMenu.menuSort=t),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),n(i,{label:"前端菜单访问HTML地址","label-width":e.formLabelWidth},{default:o(()=>[n(s,{modelValue:e.frontendMenu.menuUrl,"onUpdate:modelValue":l[8]||(l[8]=t=>e.frontendMenu.menuUrl=t),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),n(i,{label:"父ID","label-width":e.formLabelWidth},{default:o(()=>[n(s,{modelValue:e.frontendMenu.pid,"onUpdate:modelValue":l[9]||(l[9]=t=>e.frontendMenu.pid=t),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"])]),_:1},8,["model"])]),_:1},8,["modelValue"]),n(h,{modelValue:e.FrontendMenusByColums,"onUpdate:modelValue":l[16]||(l[16]=t=>e.FrontendMenusByColums=t),title:"请输入查询的字段名称"},{footer:o(()=>[f("span",J,[n(d,{onClick:l[14]||(l[14]=t=>e.FrontendMenusByColums=!1)},{default:o(()=>[a("Cancel")]),_:1}),n(d,{type:"primary",onClick:l[15]||(l[15]=t=>e.getFrontendMenusByColums(this.colums))},{default:o(()=>[a(" 保存 ")]),_:1})])]),default:o(()=>[n(M,null,{default:o(()=>[n(i,{label:"字段","label-width":e.formLabelWidth},{default:o(()=>[n(s,{modelValue:this.colums,"onUpdate:modelValue":l[13]||(l[13]=t=>this.colums=t),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"])]),_:1})]),_:1},8,["modelValue"]),n(h,{modelValue:e.FrontendMenuByUserId,"onUpdate:modelValue":l[20]||(l[20]=t=>e.FrontendMenuByUserId=t),title:"请输入id"},{footer:o(()=>[f("span",K,[n(d,{onClick:l[18]||(l[18]=t=>e.FrontendMenuByUserId=!1)},{default:o(()=>[a("Cancel")]),_:1}),n(d,{type:"primary",onClick:l[19]||(l[19]=t=>e.getFrontendMenuByUserId(this.id))},{default:o(()=>[a(" 保存 ")]),_:1})])]),default:o(()=>[n(M,null,{default:o(()=>[n(i,{label:"用户id","label-width":e.formLabelWidth},{default:o(()=>[n(s,{modelValue:this.id,"onUpdate:modelValue":l[17]||(l[17]=t=>this.id=t),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"])]),_:1})]),_:1},8,["modelValue"]),n(h,{modelValue:e.MenusByPid,"onUpdate:modelValue":l[24]||(l[24]=t=>e.MenusByPid=t),title:"请输入父id"},{footer:o(()=>[f("span",O,[n(d,{onClick:l[22]||(l[22]=t=>e.MenusByPid=!1)},{default:o(()=>[a("Cancel")]),_:1}),n(d,{type:"primary",onClick:l[23]||(l[23]=t=>e.getMenusByPid(this.pid))},{default:o(()=>[a(" 保存 ")]),_:1})])]),default:o(()=>[n(M,null,{default:o(()=>[n(i,{label:"父id","label-width":e.formLabelWidth},{default:o(()=>[n(s,{modelValue:this.pid,"onUpdate:modelValue":l[21]||(l[21]=t=>this.pid=t),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"])]),_:1})]),_:1},8,["modelValue"])],64)}const c=B(z,[["render",Q]]);export{c as default};
