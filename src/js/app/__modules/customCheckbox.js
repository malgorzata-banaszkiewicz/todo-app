const checkboxBoxes = document.querySelectorAll(
	".block-todo__task-part--check"
);

export const customCheckbox = () => {
	checkboxBoxes.forEach((checkboxBox) => {
		checkboxBox.addEventListener("click", () => {
			let checkbox = checkboxBox.querySelector("input[type='checkbox']"); // <input type="checkbox">
			if (!checkbox.checked) {
				checkbox.setAttribute("checked", "");
				checkboxBox.classList.add("block-todo__completed-tasks");
				checkbox.checked = true;
			} else {
				checkbox.removeAttribute("checked");
				checkboxBox.classList.remove("block-todo__completed-tasks");
				checkbox.checked = false;
			}
		});
	});
};
