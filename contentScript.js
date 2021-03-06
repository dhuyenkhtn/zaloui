var link = document.createElement("link");
// link.href =
//   "https://fonts.googleapis.com/css2?family=Be+Vietnam:wght@100;400;600&display=swap";
link.href =
  "https://fonts.googleapis.com/css?family=Google+Sans:100,300,400,500,700,900,100i,300i,400i,500i,700i,900i";
link.rel = "stylesheet";
document.head.appendChild(link);
var styles = `
:root {
  --danui-background-random: "https://source.unsplash.com/random/1200x860";

  --danui-background-normal: url(https://images.unsplash.com/photo-1539592071786-616fb62b6c27?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80);
  --danui-background-color-normal: #eff2f5;
  --danui-main-color-normal: #858585;
  --danui-main-color-selected-normal: #707070;
  --danui-box-shadow-normal: 0 4px 5px 0 rgba(0, 0, 0, 0.14),
  0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.2);
  --danui-text-background-normal: #bcbcbc;
  --danui-text-time-color-normal: #4b4b4b;
  --danui-text-color-normal: inherit;
  
  --danui-background-avocado: url(https://images.unsplash.com/photo-1560155016-bd4879ae8f21?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2467&q=80);
  --danui-background-color-avocado: #c9f4ba36;
  --danui-main-color-avocado: #94cb80;
  --danui-main-color-selected-avocado: #7bb865;
  --danui-box-shadow-avocado: 0 4px 5px 0 rgba(0, 0, 0, 0.14),
  0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.2);;
  --danui-text-background-avocado: #7ab765;
  --danui-text-time-color-avocado: #ececec;
  --danui-text-color-avocado: #FFFFFF;
  
  --danui-background: var(--danui-background-avocado);
  --danui-background-color: var(--danui-background-color-avocado);
  --danui-main-color: var(--danui-main-color-avocado);
  --danui-main-color-selected: var(--danui-main-color-selected-avocado);
  --danui-box-shadow: var(--danui-box-shadow-avocado);
  --danui-text-background: var(--danui-text-background-avocado);
  --danui-text-time-color: var(--danui-text-time-color-avocado);
  --danui-text-color: var(--danui-text-color-avocado);
}

#messageViewContainer {
  background: var(--danui-background);
  background-repeat: no-repeat;
  background-size: cover;
}

body {
  font-family: "Google Sans", "Be Vietnam", system-ui, -apple-system,
    BlinkMacSystemFont, ".SFNSText-Regular", sans-serif !important;
  -webkit-font-smoothing: antialiased !important;
  text-rendering: optimizeLegibility !important;
  -webkit-touch-callout: none !important;
}

/* #messageViewContainer {
  background: url(https://images.unsplash.com/photo-1539592071786-616fb62b6c27?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80);
  background-repeat: no-repeat;
  background-size: cover;
} */

div#main-tab.nav__tabs.WEB {
  margin: 8px;
  border-radius: 12px;
  margin-top: 5px;
  box-shadow: var(--danui-box-shadow);
  background-color: var(--danui-main-color);
}

#sidebarNav > div:not(.nav__tabs) {
  margin: 8px;
  border-radius: 12px;
  margin-left: 4px;
  background-color: #ffffff;
  box-shadow: var(--danui-box-shadow);
}

main {
  margin: 8px;
  border-radius: 12px;
  margin-left: 4px;
  box-shadow: var(--danui-box-shadow);
}

div#resize-handle {
  background: none;
  color: #ffffff;
  border: none;
  opacity: 0;
}

nav#sidebarNav {
  border-right-color: var(--danui-background-color);
  background-color: var(--danui-background-color);
}

.card.card--text {
  border-radius: 14px;
}

.card.me {
  background-color: var(--danui-text-background);
  box-shadow: none;
  color: var(--danui-text-color);
}

body {
  background-color: var(--danui-background-color);
}

.leftbar-tab.chat-message.first-selected:hover,
.leftbar-tab.chat-message.last-selected:hover,
.leftbar-tab:hover.selected {
  background: var(--danui-main-color);
}

.leftbar-tab.chat-message.first-selected,
.leftbar-tab.chat-message.last-selected,
.leftbar-tab.selected {
  background: var(--danui-main-color-selected);
}

#chatOnboard {
  display: none;
}

.card--group-photo.me {
  background: none;
}

.card.me span.card-send-time__sendTime, .card.me .card-send-status {
  color: var(--danui-text-time-color);
  font-style: italic;
}
`;

// if (window.location.href.includes('chat.zalo.me')) {
//   styles = styles + `
//   body {
//     background-color: #eeeeee;
//   }
//   `;
// }
var styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);
// document.title = "Hi, Danny. I'm Zalo";
const themeColor = localStorage.getItem('danui-theme')
const currentMode = themeColor ? themeColor : 'avocado';

document.body.style.setProperty("--danui-background", `var(--danui-background-${currentMode})`);
document.body.style.setProperty("--danui-background-color", `var(--danui-background-color-${currentMode})`);
document.body.style.setProperty("--danui-main-color", `var(--danui-main-color-${currentMode})`);
document.body.style.setProperty("--danui-main-color-selected", `var(--danui-main-color-selected-${currentMode})`);
document.body.style.setProperty("--danui-box-shadow", `var(--danui-box-shadow-${currentMode})`);
document.body.style.setProperty("--danui-text-background", `var(--danui-text-background-${currentMode})`);
document.body.style.setProperty("--danui-text-time-color", `var(--danui-text-time-color-${currentMode})`);
document.body.style.setProperty("--danui-text-color", `var(--danui-text-color-${currentMode})`);

