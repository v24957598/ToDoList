import{r as v,i as f,c as u,a as t,b as h,v as g,w as i,n as c,j as T,F as b,k as x,t as m,o as d,l as w}from"./index-BwlxGF34.js";const y={id:"todoListPage",class:"bg-half"},D={class:"conatiner todoListPage vhContainer"},V={class:"todoList_Content"},B={class:"inputBox"},N={class:"todoList_list"},P={class:"todoList_tab"},$={class:"todoList_items"},M={key:0},O={class:"todoList_item"},U={class:"todoList_label"},E=["onUpdate:modelValue"],F=["onClick"],I={class:"todoList_statistics"},z={__name:"ToDoListPage",setup(S){const n=v(""),o=v([]),a=v("all"),_=f(()=>a.value==="todo"?o.value.filter(s=>!s.status):a.value==="done"?o.value.filter(s=>s.status):o.value),L=f(()=>o.value.filter(s=>!s.status).length),k=()=>{n.value.trim()!==""&&(o.value.push({id:Date.now(),content:n.value,status:!1}),n.value="")},C=s=>{o.value=o.value.filter(e=>e.id!==s)},r=s=>{a.value=s};return(s,e)=>(d(),u("div",y,[e[6]||(e[6]=t("nav",null,[t("h1",null,[t("a",{href:"#"},"ONLINE TODO LIST")]),t("ul",null,[t("li",{class:"todo_sm"},[t("a",{href:"#"},[t("span",null,"王小明的代辦")])]),t("li",null,[t("a",{href:"#loginPage"},"登出")])])],-1)),t("div",D,[t("div",V,[t("div",B,[h(t("input",{type:"text",placeholder:"請輸入待辦事項","onUpdate:modelValue":e[0]||(e[0]=l=>n.value=l)},null,512),[[g,n.value]]),t("a",{href:"#",onClick:i(k,["prevent"])},e[4]||(e[4]=[t("i",{class:"fa fa-plus"},"+",-1)]))]),t("div",N,[t("ul",P,[t("li",null,[t("a",{href:"#",onClick:e[1]||(e[1]=i(l=>r("all"),["prevent"])),class:c({active:a.value==="all"})},"全部",2)]),t("li",null,[t("a",{href:"#",onClick:e[2]||(e[2]=i(l=>r("todo"),["prevent"])),class:c({active:a.value==="todo"})},"待完成",2)]),t("li",null,[t("a",{href:"#",onClick:e[3]||(e[3]=i(l=>r("done"),["prevent"])),class:c({active:a.value==="done"})},"已完成",2)])]),t("div",$,[_.value.length===0?(d(),u("div",M,"目前尚無待辦事項")):T("",!0),t("ul",O,[(d(!0),u(b,null,x(_.value,l=>(d(),u("li",{key:l.id},[t("label",U,[h(t("input",{class:"todoList_input",type:"checkbox","onUpdate:modelValue":p=>l.status=p},null,8,E),[[w,l.status]]),t("span",null,m(l.content),1)]),t("a",{href:"#",onClick:i(p=>C(l.id),["prevent"])},e[5]||(e[5]=[t("i",{class:"fa fa-times"},"X",-1)]),8,F)]))),128))]),t("div",I,[t("p",null,m(L.value)+" 個待完成項目",1)])])])])])]))}};export{z as default};
