import{j as e}from"./index-DlC1yEB1.js";import{r as l}from"./index-D5jfS-9e.js";import{S as g,D as p,W as v,l as x,M as y,A as I,e as R,g as C,h as V,f as W}from"./agenda-view-CY7xBDoX.js";import"./recurrence-editor-B2oMLTFe.js";import{d as D}from"./dataSource-CIfUTw8c.js";/* empty css               */import"./index-lf5wH9A6.js";const L=({logger:n})=>{const[t,a]=l.useState([]);return l.useEffect(()=>{const r=o=>{const d=o.detail,u=new Date().toLocaleTimeString();a(m=>[`${u} - ${d}`,...m].slice(0,50))};return n.addEventListener("log",r),()=>n.removeEventListener("log",r)},[n]),e.jsxs("div",{children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:8},children:[e.jsx("h4",{style:{margin:0},children:"Event trace"}),e.jsx("button",{onClick:()=>a([]),children:"Clear"})]}),e.jsx("div",{id:"event-trace",style:{height:510,overflow:"auto",border:"1px solid #e0e0e0",borderRadius:4,padding:8,background:"#fafafa"},children:t.length===0?e.jsx("div",{style:{color:"#666"},children:"Interact with the scheduler to see events here."}):e.jsx("ul",{style:{listStyle:"none",padding:0,margin:0},children:t.map((r,o)=>e.jsx("li",{style:{padding:"4px 0",borderBottom:"1px dashed #e5e5e5"},children:r},o))})})]})},A=({enable:n=!0})=>{const t={dataSource:D,fields:{id:"Id",subject:"Subject",location:"Location",description:"Description",startTime:"StartTime",endTime:"EndTime",isAllDay:"IsAllDay",isBlock:"IsBlock",isReadonly:"IsReadonly"}},a=l.useRef(null);return e.jsx("div",{className:"control-section",children:e.jsx("div",{className:"scheduler-control",children:e.jsxs(g,{ref:a,height:"550px",width:"100%",defaultSelectedDate:new Date(2017,10,13),defaultView:"TimelineDay",eventDrag:{enable:n,interval:15},eventResize:{enable:n,interval:30},eventSettings:t,headerRows:[],children:[e.jsx(p,{}),e.jsx(v,{showWeekend:!0}),e.jsx(x,{}),e.jsx(y,{}),e.jsx(I,{}),e.jsx(R,{interval:1,startHour:"08:00",endHour:"18:00",timeScale:{enable:!0,slotCount:2,interval:30}}),e.jsx(C,{interval:1,timeScale:{enable:!0,slotCount:2,interval:60}}),e.jsx(V,{interval:2}),e.jsx(W,{interval:2,startHour:"08:00",endHour:"18:00",timeScale:{enable:!0,slotCount:3,interval:30}})]})})})},N=({})=>{const n=l.useRef(new EventTarget),t=l.useMemo(()=>r=>{n.current.dispatchEvent(new CustomEvent("log",{detail:r}))},[]),a={dataSource:D,fields:{id:"Id",subject:"Subject",location:"Location",description:"Description",startTime:"StartTime",endTime:"EndTime",isAllDay:"IsAllDay",isBlock:"IsBlock",isReadonly:"IsReadonly"}};return e.jsx("div",{className:"control-section",children:e.jsxs("div",{className:"scheduler-control",style:{display:"grid",gridTemplateColumns:"1fr 320px",gap:"16px"},children:[e.jsxs(g,{height:"550px",width:"100%",defaultSelectedDate:new Date(2017,10,1),defaultView:"Week",eventDrag:!0,eventSettings:a,onDragStart:()=>t("onDragStart"),onDrag:()=>t("onDrag"),onDragStop:()=>t("onDragStop"),children:[e.jsx(p,{}),e.jsx(v,{}),e.jsx(x,{}),e.jsx(y,{})]}),e.jsx(L,{logger:n.current})]})})},z=({enable:n=!0,interval:t=10,excludeSelectors:a="sf-all-day-cell",autoScroll:r=!0,scrollBy:o=5,timeDelay:d=10,navigationEnable:u=!1,navigationTimeDelay:m=2e3})=>{const B={dataSource:D,fields:{id:"Id",subject:"Subject",location:"Location",description:"Description",startTime:"StartTime",endTime:"EndTime",isAllDay:"IsAllDay",isBlock:"IsBlock",isReadonly:"IsReadonly"}};return e.jsx("div",{className:"control-section",children:e.jsx("div",{className:"scheduler-control",children:e.jsxs(g,{height:"550px",width:"100%",defaultSelectedDate:new Date(2017,10,1),defaultView:"Week",eventDrag:{enable:n,interval:t,excludeSelectors:a,scroll:{enable:r,scrollBy:o,timeDelay:d},navigation:{enable:u,timeDelay:m}},eventSettings:B,children:[e.jsx(p,{}),e.jsx(v,{}),e.jsx(x,{}),e.jsx(y,{})]})})})},q={title:"Scheduler/Drag and Drop",parameters:{layout:"padded",docs:{description:{component:"Meta configuration for the Storybook stories"}}},tags:["autodocs"]},s={render:n=>e.jsx(A,{...n}),args:{enable:!0},parameters:{controls:{include:["enable"]}},argTypes:{enable:{control:"boolean"}}},i={render:n=>e.jsx(z,{...n}),args:{enable:!0,interval:15,excludeSelectors:"sf-all-day-cell",autoScroll:!0,scrollBy:5,timeDelay:10,navigationEnable:!1,navigationTimeDelay:2e3},parameters:{controls:{include:["enable","interval","excludeSelectors","autoScroll","scrollBy","timeDelay","navigationEnable","navigationTimeDelay"]}},argTypes:{enable:{control:"boolean"},interval:{control:"number"},excludeSelectors:{control:"text"},autoScroll:{control:"boolean"},scrollBy:{control:"number"},timeDelay:{control:"number"},navigationEnable:{control:"boolean"},navigationTimeDelay:{control:"select",options:[1e3,2e3,3e3,4e3,5e3]}}},c={render:()=>e.jsx(N,{})};var S,b,h;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => <EventDragSample {...args} />,
  args: {
    enable: true
  },
  parameters: {
    controls: {
      include: ['enable']
    }
  },
  argTypes: {
    enable: {
      control: 'boolean'
    }
  }
}`,...(h=(b=s.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var j,f,T;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => <CustomizedSample {...args} />,
  args: {
    enable: true,
    interval: 15,
    excludeSelectors: 'sf-all-day-cell',
    autoScroll: true,
    scrollBy: 5,
    timeDelay: 10,
    navigationEnable: false,
    navigationTimeDelay: 2000
  },
  parameters: {
    controls: {
      include: ['enable', 'interval', 'excludeSelectors', 'autoScroll', 'scrollBy', 'timeDelay', 'navigationEnable', 'navigationTimeDelay']
    }
  },
  argTypes: {
    enable: {
      control: 'boolean'
    },
    interval: {
      control: 'number'
    },
    excludeSelectors: {
      control: 'text'
    },
    autoScroll: {
      control: 'boolean'
    },
    scrollBy: {
      control: 'number'
    },
    timeDelay: {
      control: 'number'
    },
    navigationEnable: {
      control: 'boolean'
    },
    navigationTimeDelay: {
      control: 'select',
      options: [1000, 2000, 3000, 4000, 5000]
    }
  }
}`,...(T=(f=i.parameters)==null?void 0:f.docs)==null?void 0:T.source}}};var E,w,k;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <DragEventsSample />
}`,...(k=(w=c.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};const F=["EventDrag","Customization","UserEndEvents"];export{i as Customization,s as EventDrag,c as UserEndEvents,F as __namedExportsOrder,q as default};
