import { todoAppNavigation } from "../__modules/todoAppNavigation.js";
import { customCheckbox } from "../__modules/customCheckbox.js";
import { tasksActions } from "../__modules/tasksActions.js";

// GLOBAL APP CONTROLLER
const controller = {
	init() {},
	loaded() {
		todoAppNavigation();
		customCheckbox();
		tasksActions();
	},
	resized() {},
	mouseUp(e) {},
	keyDown(e) {},
	scrolled(e) {},
};

export default controller;
