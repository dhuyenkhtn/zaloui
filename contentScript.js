var link = document.createElement("link");
// link.href =
//   "https://fonts.googleapis.com/css2?family=Be+Vietnam:wght@100;400;600&display=swap";
link.href =
  "https://fonts.googleapis.com/css?family=Google+Sans:100,300,400,500,700,900,100i,300i,400i,500i,700i,900i";
link.rel = "stylesheet";
document.head.appendChild(link);
var styles = `
body {
  font-family: "Google Sans", "Be Vietnam", system-ui, -apple-system, BlinkMacSystemFont,
    ".SFNSText-Regular", sans-serif !important;
  -webkit-font-smoothing: antialiased !important;
  text-rendering: optimizeLegibility !important;
  -webkit-touch-callout: none !important;
}

#messageViewContainer {
  /* background: url(https://source.unsplash.com/random/1200x860); */
  /* background: url(https://source.unsplash.com/random/1600x860); */
  background: url(https://images.unsplash.com/photo-1539592071786-616fb62b6c27?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80);
  background-repeat: no-repeat;
  background-size: cover;
}

div#main-tab.nav__tabs.WEB {
  margin: 8px;
  border-radius: 12px;
  margin-top: 5px;
  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12),
    0 2px 4px -1px rgba(0, 0, 0, 0.2);
  background-color: #858585;
}

#sidebarNav > div:not(.nav__tabs) {
  margin: 8px;
  border-radius: 12px;
  margin-left: 4px;
  /* border: 1px solid; */
  background-color: #ffffff;
  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12),
    0 2px 4px -1px rgba(0, 0, 0, 0.2);
}

main {
  margin: 8px;
  /* border: 1px solid; */
  border-radius: 12px;
  margin-left: 4px;
  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12),
    0 2px 4px -1px rgba(0, 0, 0, 0.2);
}

div#resize-handle {
  background: none;
  color: #fff;
  border: none;
  opacity: 0;
}

nav#sidebarNav {
  border-right-color: #eeeeee;
  background-color: #eeeeee;
}

.card.card--text {
  border-radius: 14px;
}

.card.me {
  background-color: #bcbcbc;
  box-shadow: none;
}

.leftbar-tab.chat-message.first-selected:hover,
.leftbar-tab.chat-message.last-selected:hover,
.leftbar-tab:hover.selected {
  background: #858585;
}

.leftbar-tab.chat-message.first-selected,
.leftbar-tab.chat-message.last-selected,
.leftbar-tab.selected {
  background: #707070;
}

#chatOnboard {
    display: none;
}

.card--group-photo.me {
    background: none;
}
`;

if (window.location.href.includes('chat.zalo.me')) {
  styles = styles + `
  body {
    background-color: #eeeeee;
  }
  `;
}
var styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);
// document.title = "Hi, Danny. I'm Zalo";