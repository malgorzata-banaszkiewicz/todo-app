const deleteIcon = document.querySelectorAll(
	".block-todo__icon-action--delete"
);

let tasks = document.querySelectorAll(".block-todo__one-task");

export const tasksActions = () => {
	tasks.forEach((task) => {
		let editIcon = task.querySelector(".block-todo__icon-action--edit");
		let backIcon = task.querySelector(".block-todo__icon-action--back");
		let okIcon = task.querySelector(".block-todo__icon-action--ok");
		let edit = task.querySelector(".block-todo__task-part--edit");
		let editInput = task.querySelector(".block-todo__input--edit-input");
		let inputValue = "";

		editIcon.addEventListener("click", () => {
			edit.classList.toggle("hidden");
		});

		// editInput.addEventListener("input", updateValue);
		// function updateValue(e) {
		// 	inputValue = e.target.value;
		// }
		okIcon.addEventListener("click", () => {
			// if (inputValue) {
			// 	task.querySelector(".block-todo__label").textContent = inputValue;
			// }
			edit.classList.toggle("hidden");
		});
	});

	backIcon.addEventListener("click", () => {
		edit.classList.toggle("hidden");
	});
};
