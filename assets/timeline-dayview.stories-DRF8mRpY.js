import{j as e}from"./index-DlC1yEB1.js";import{e as r,S as t}from"./agenda-view-CY7xBDoX.js";import"./index-D5jfS-9e.js";import"./index-lf5wH9A6.js";import"./recurrence-editor-B2oMLTFe.js";const de={title:"Views/TimelineDayView",component:r,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"TimelineDayView displays a horizontal timeline layout with dates across columns and hours down the left side. Ideal for viewing and managing events throughout the day."}}}},s={render:()=>e.jsx("div",{children:e.jsx(t,{defaultSelectedDate:new Date,children:e.jsx(r,{startHour:"08:00",endHour:"18:00",timeScale:{enable:!0,slotCount:4,interval:90}})})}),parameters:{docs:{description:{story:"Default timeline view showing a single day with standard working hours (8 AM - 6 PM). Use arrow keys (← →) to navigate between hours, Home/End to jump to start/end of day."}}}},i={render:()=>e.jsx("div",{style:{height:"100vh",width:"100%"},children:e.jsx(t,{defaultSelectedDate:new Date,children:e.jsx(r,{startHour:"07:00",endHour:"20:00",timeScale:60,showWeekend:!0})})}),parameters:{docs:{description:{story:"Timeline view with extended working hours (7 AM - 8 PM) and weekend visibility enabled. Useful for shift-based or retail schedules."}}}},o={render:()=>e.jsx("div",{style:{height:"100vh",width:"100%"},children:e.jsx(t,{defaultSelectedDate:new Date,children:e.jsx(r,{interval:5,startHour:"08:00",endHour:"18:00",timeScale:60,showWeekend:!1})})}),parameters:{docs:{description:{story:"Five-day work week view (Monday-Friday) with standard working hours. Perfect for weekly planning and meeting scheduling."}}}},a={render:()=>e.jsx("div",{style:{height:"100vh",width:"100%"},children:e.jsx(t,{defaultSelectedDate:new Date,children:e.jsx(r,{interval:7,startHour:"08:00",endHour:"18:00",timeScale:60,showWeekend:!0})})}),parameters:{docs:{description:{story:"Full seven-day week view including weekends. Useful for seeing the complete week at a glance."}}}},n={render:()=>e.jsx("div",{style:{height:"100vh",width:"100%"},children:e.jsx(t,{defaultSelectedDate:new Date,children:e.jsx(r,{startHour:"08:00",endHour:"18:00",timeScale:30,showWeekend:!1})})}),parameters:{docs:{description:{story:"30-minute time slots for finer granularity. Useful for detailed scheduling with shorter meetings and breaks."}}}},d={render:()=>e.jsx("div",{style:{height:"100vh",width:"100%"},children:e.jsx(t,{defaultSelectedDate:new Date,children:e.jsx(r,{startHour:"09:00",endHour:"12:00",timeScale:60,showWeekend:!1})})}),parameters:{docs:{description:{story:"Minimal view showing only morning hours (9 AM - 12 PM). Ideal for quick meetings and status updates."}}}},l={render:()=>e.jsx("div",{style:{height:"100vh",width:"100%"},children:e.jsx(t,{defaultSelectedDate:new Date,children:e.jsx(r,{interval:5,startHour:"08:00",endHour:"18:00",timeScale:{enable:!0,slotCount:3,interval:90},showWeekend:!1})})}),parameters:{docs:{description:{story:"Two-day view useful for comparing schedules across consecutive days or planning transitions between days."}}}},c={render:()=>e.jsxs("div",{style:{height:"100vh",width:"100%"},children:[e.jsx("div",{style:{padding:"16px",backgroundColor:"#FFF9C4",borderBottom:"2px solid #FBC02D",marginBottom:"8px"},children:e.jsxs("p",{style:{margin:0,fontSize:"14px"},children:["💡 ",e.jsx("strong",{children:"Tip:"})," Resize your browser window to see the timeline adapt to different screen sizes (mobile, tablet, desktop). Column widths adjust automatically for optimal readability."]})}),e.jsx("div",{style:{height:"calc(100% - 80px)",width:"100%"},children:e.jsx(t,{defaultSelectedDate:new Date,children:e.jsx(r,{interval:3,startHour:"08:00",endHour:"18:00",timeScale:60,showWeekend:!1})})})]}),parameters:{docs:{description:{story:"Responsive timeline view that adapts to different screen sizes. Resize your browser to see the layout adjust for mobile, tablet, and desktop viewports."}}}},u={render:()=>e.jsxs("div",{style:{height:"100vh",width:"100%"},children:[e.jsxs("div",{style:{padding:"16px",backgroundColor:"#E3F2FD",borderBottom:"2px solid #2196F3",marginBottom:"8px"},children:[e.jsx("p",{style:{margin:"0 0 8px 0",fontSize:"14px",fontWeight:600},children:"⌨️ Keyboard Navigation:"}),e.jsxs("ul",{style:{margin:0,paddingLeft:"20px",fontSize:"13px"},children:[e.jsxs("li",{children:[e.jsx("strong",{children:"← → Arrow Keys:"})," Move between hours"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Home:"})," Jump to first hour (8:00 AM)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"End:"})," Jump to last hour (6:00 PM)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Tab:"})," Navigate to next cell, Shift+Tab for previous"]})]})]}),e.jsx("div",{style:{height:"calc(100% - 120px)",width:"100%"},children:e.jsx(t,{defaultSelectedDate:new Date,children:e.jsx(r,{startHour:"08:00",endHour:"18:00",timeScale:60,showWeekend:!1})})})]}),parameters:{docs:{description:{story:"Try keyboard navigation! Use arrow keys to move between hours, Home to jump to 8:00 AM, and End to jump to 6:00 PM. Focus indicators show which cell is currently active."}}}};var h,p,m,w,y;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => {
    return <div>\r
        <Scheduler defaultSelectedDate={new Date()}>\r
          <TimelineDayView startHour="08:00" endHour="18:00" timeScale={{
          enable: true,
          slotCount: 4,
          interval: 90
        }}
        // showWeekend={false}
        />\r
        </Scheduler>\r
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Default timeline view showing a single day with standard working hours (8 AM - 6 PM). Use arrow keys (← →) to navigate between hours, Home/End to jump to start/end of day.'
      }
    }
  }
}`,...(m=(p=s.parameters)==null?void 0:p.docs)==null?void 0:m.source},description:{story:`Basic single-day timeline view.\r
Shows 8 AM - 6 PM (default working hours) for selected date.`,...(y=(w=s.parameters)==null?void 0:w.docs)==null?void 0:y.description}}};var g,v,f,S,x;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    return <div style={{
      height: '100vh',
      width: '100%'
    }}>\r
        <Scheduler defaultSelectedDate={new Date()}>\r
          <TimelineDayView startHour="07:00" endHour="20:00" timeScale={60} showWeekend={true} />\r
        </Scheduler>\r
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Timeline view with extended working hours (7 AM - 8 PM) and weekend visibility enabled. Useful for shift-based or retail schedules.'
      }
    }
  }
}`,...(f=(v=i.parameters)==null?void 0:v.docs)==null?void 0:f.source},description:{story:`Extended working hours view (7 AM - 8 PM).\r
Useful for capturing early morning and evening activities.`,...(x=(S=i.parameters)==null?void 0:S.docs)==null?void 0:x.description}}};var D,k,b,j,H;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => {
    // const [selectedDate, setSelectedDate] = useState(() => {
    //   // Start from a Monday
    //   const d = new Date();
    //   d.setDate(d.getDate() - (d.getDay() || 7) + 1);
    //   return d;
    // });

    return <div style={{
      height: '100vh',
      width: '100%'
    }}>\r
        <Scheduler defaultSelectedDate={new Date()}>\r
          <TimelineDayView interval={5} startHour="08:00" endHour="18:00" timeScale={60} showWeekend={false} />\r
        </Scheduler>\r
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Five-day work week view (Monday-Friday) with standard working hours. Perfect for weekly planning and meeting scheduling.'
      }
    }
  }
}`,...(b=(k=o.parameters)==null?void 0:k.docs)==null?void 0:b.source},description:{story:`Work week view (5 consecutive days).\r
Displays Monday-Friday without weekends.`,...(H=(j=o.parameters)==null?void 0:j.docs)==null?void 0:H.description}}};var M,T,F,W,z;a.parameters={...a.parameters,docs:{...(M=a.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => {
    // const [selectedDate, setSelectedDate] = useState(() => {
    //   // Start from a Sunday
    //   const d = new Date();
    //   d.setDate(d.getDate() - d.getDay());
    //   return d;
    // });

    return <div style={{
      height: '100vh',
      width: '100%'
    }}>\r
        <Scheduler defaultSelectedDate={new Date()}>\r
          <TimelineDayView interval={7} startHour="08:00" endHour="18:00" timeScale={60} showWeekend={true} />\r
        </Scheduler>\r
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Full seven-day week view including weekends. Useful for seeing the complete week at a glance.'
      }
    }
  }
}`,...(F=(T=a.parameters)==null?void 0:T.docs)==null?void 0:F.source},description:{story:`Full week view (7 days including weekends).\r
Shows all days of the week.`,...(z=(W=a.parameters)==null?void 0:W.docs)==null?void 0:z.description}}};var A,P,V,C,E;n.parameters={...n.parameters,docs:{...(A=n.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => {
    return <div style={{
      height: '100vh',
      width: '100%'
    }}>\r
        <Scheduler defaultSelectedDate={new Date()}>\r
          <TimelineDayView startHour="08:00" endHour="18:00" timeScale={30} showWeekend={false} />\r
        </Scheduler>\r
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: '30-minute time slots for finer granularity. Useful for detailed scheduling with shorter meetings and breaks.'
      }
    }
  }
}`,...(V=(P=n.parameters)==null?void 0:P.docs)==null?void 0:V.source},description:{story:`30-minute time slots.\r
Finer granularity for shorter meetings and tasks.`,...(E=(C=n.parameters)==null?void 0:C.docs)==null?void 0:E.description}}};var B,U,R,K,N;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => {
    return <div style={{
      height: '100vh',
      width: '100%'
    }}>\r
        <Scheduler defaultSelectedDate={new Date()}>\r
          <TimelineDayView startHour="09:00" endHour="12:00" timeScale={60} showWeekend={false} />\r
        </Scheduler>\r
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Minimal view showing only morning hours (9 AM - 12 PM). Ideal for quick meetings and status updates.'
      }
    }
  }
}`,...(R=(U=d.parameters)==null?void 0:U.docs)==null?void 0:R.source},description:{story:`Minimal view (9 AM - 12 PM).\r
Focused view for quick morning planning.`,...(N=(K=d.parameters)==null?void 0:K.docs)==null?void 0:N.description}}};var J,q,I,O,L;l.parameters={...l.parameters,docs:{...(J=l.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => {
    // const [selectedDate, setSelectedDate] = useState(() => {
    //   const d = new Date();
    //   d.setDate(d.getDate() - (d.getDay() || 7) + 1); // Start from Monday
    //   return d;
    // });

    return <div style={{
      height: '100vh',
      width: '100%'
    }}>\r
        <Scheduler defaultSelectedDate={new Date()}>\r
          <TimelineDayView interval={5} startHour="08:00" endHour="18:00" timeScale={{
          enable: true,
          slotCount: 3,
          interval: 90
        }} showWeekend={false} />\r
        </Scheduler>\r
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Two-day view useful for comparing schedules across consecutive days or planning transitions between days.'
      }
    }
  }
}`,...(I=(q=l.parameters)==null?void 0:q.docs)==null?void 0:I.source},description:{story:`Two-day view (Monday and Tuesday).\r
Useful for comparing days or planning transitions.`,...(L=(O=l.parameters)==null?void 0:O.docs)==null?void 0:L.description}}};var _,G,Q,X,Y;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => {
    return <div style={{
      height: '100vh',
      width: '100%'
    }}>\r
        <div style={{
        padding: '16px',
        backgroundColor: '#FFF9C4',
        borderBottom: '2px solid #FBC02D',
        marginBottom: '8px'
      }}>\r
          <p style={{
          margin: 0,
          fontSize: '14px'
        }}>\r
            💡 <strong>Tip:</strong> Resize your browser window to see the timeline adapt to different screen sizes\r
            (mobile, tablet, desktop). Column widths adjust automatically for optimal readability.\r
          </p>\r
        </div>\r
\r
        <div style={{
        height: 'calc(100% - 80px)',
        width: '100%'
      }}>\r
          <Scheduler defaultSelectedDate={new Date()}>\r
            <TimelineDayView interval={3} startHour="08:00" endHour="18:00" timeScale={60} showWeekend={false} />\r
          </Scheduler>\r
        </div>\r
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Responsive timeline view that adapts to different screen sizes. Resize your browser to see the layout adjust for mobile, tablet, and desktop viewports.'
      }
    }
  }
}`,...(Q=(G=c.parameters)==null?void 0:G.docs)==null?void 0:Q.source},description:{story:`Responsive behavior demo.\r
Resize browser to see layout adapt to different screen sizes.`,...(Y=(X=c.parameters)==null?void 0:X.docs)==null?void 0:Y.description}}};var Z,$,ee,re,te;u.parameters={...u.parameters,docs:{...(Z=u.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => {
    return <div style={{
      height: '100vh',
      width: '100%'
    }}>\r
        <div style={{
        padding: '16px',
        backgroundColor: '#E3F2FD',
        borderBottom: '2px solid #2196F3',
        marginBottom: '8px'
      }}>\r
          <p style={{
          margin: '0 0 8px 0',
          fontSize: '14px',
          fontWeight: 600
        }}>\r
            ⌨️ Keyboard Navigation:\r
          </p>\r
          <ul style={{
          margin: 0,
          paddingLeft: '20px',
          fontSize: '13px'
        }}>\r
            <li>\r
              <strong>← → Arrow Keys:</strong> Move between hours\r
            </li>\r
            <li>\r
              <strong>Home:</strong> Jump to first hour (8:00 AM)\r
            </li>\r
            <li>\r
              <strong>End:</strong> Jump to last hour (6:00 PM)\r
            </li>\r
            <li>\r
              <strong>Tab:</strong> Navigate to next cell, Shift+Tab for previous\r
            </li>\r
          </ul>\r
        </div>\r
\r
        <div style={{
        height: 'calc(100% - 120px)',
        width: '100%'
      }}>\r
          <Scheduler defaultSelectedDate={new Date()}>\r
            <TimelineDayView startHour="08:00" endHour="18:00" timeScale={60} showWeekend={false} />\r
          </Scheduler>\r
        </div>\r
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Try keyboard navigation! Use arrow keys to move between hours, Home to jump to 8:00 AM, and End to jump to 6:00 PM. Focus indicators show which cell is currently active.'
      }
    }
  }
}`,...(ee=($=u.parameters)==null?void 0:$.docs)==null?void 0:ee.source},description:{story:`Keyboard navigation demo.\r
Test arrow keys, Home, and End for accessibility.`,...(te=(re=u.parameters)==null?void 0:re.docs)==null?void 0:te.description}}};const le=["Basic","ExtendedHours","WorkWeek","FullWeek","ThirtyMinuteSlots","MorningOnly","TwoDayView","Responsive","KeyboardNavigation"];export{s as Basic,i as ExtendedHours,a as FullWeek,u as KeyboardNavigation,d as MorningOnly,c as Responsive,n as ThirtyMinuteSlots,l as TwoDayView,o as WorkWeek,le as __namedExportsOrder,de as default};
