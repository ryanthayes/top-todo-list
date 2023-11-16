import dom from "./dom";
import handlers from "./handlers";

// ON PAGE LOAD - SHOW ALL TODOS
dom.renderInbox();

// ON PAGE LOAD - SHOW ALL PROJECTS
dom.renderSidebar();

// SHOW ACTIVE PAGE IN SIDEBAR
dom.setActive();

handlers.listenForClicks();
