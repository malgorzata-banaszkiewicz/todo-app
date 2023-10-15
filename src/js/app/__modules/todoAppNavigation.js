const tabs = document.querySelectorAll("[data-tab]");
const buttonDelete = document.querySelector(".button--delete");
const tasks = document.querySelectorAll(".block-todo__one-task");

export const todoAppNavigation = () => {
	tabs.forEach((tab) => {
		tab.addEventListener("click", () => {
			tabs.forEach((t) => t.classList.remove("active-nav"));
			tab.classList.add("active-nav");
			buttonDelete.classList.toggle("hidden", tab.dataset.tab !== "completed");

			tasks.forEach((task) => {
				let checkboxBox = task.querySelector(".block-todo__task-part--check");
				let checkbox = checkboxBox.querySelector("input[type='checkbox']");
				const isChecked = checkbox.checked;

				if (
					(tab.dataset.tab === "active" && !isChecked) ||
					(tab.dataset.tab === "completed" && isChecked) ||
					tab.dataset.tab === "all"
				) {
					task.classList.remove("hidden");
					task.classList.add("block-todo__one-task");
				} else {
					task.classList.add("hidden");
					task.classList.remove("block-todo__one-task");
				}
			});
		});
	});
};
