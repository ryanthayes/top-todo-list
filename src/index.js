import dom from "./dom";
import handlers from "./handlers";

// ON PAGE LOAD - SHOW ALL TASKS
// dom.renderTasks();

// ON PAGE LOAD - SHOW ALL PROJECTS
dom.renderProjSidebar();
dom.renderToDos();

// SHOW ACTIVE PAGE IN SIDEBAR
dom.setActive();

handlers.listenForClicks();
