import dom from "./dom";
import handlers from "./handlers";

// ON PAGE LOAD - SHOW ALL TODOS
dom.renderAllProjects();

// ON PAGE LOAD - SHOW ALL PROJECTS
dom.renderProjects();
// dom.renderToDos();

// SHOW ACTIVE PAGE IN SIDEBAR
dom.setActive();

handlers.listenForClicks();
