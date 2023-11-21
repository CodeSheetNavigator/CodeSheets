document.addEventListener("DOMContentLoaded", function () {
	fetch("striver.json")
		.then((response) => response.json())
		.then((data) => {
			// Process the data and create collapsible divs
			createCollapsibleDivs(data);
		})
		.catch((error) => console.error("Error fetching data:", error));
});

function createCollapsibleDivs(data) {
	const wrapper = document.createElement("div");
	wrapper.className = "wrapper";

	data.data.forEach((item, index) => {
		const collapsible = document.createElement("div");
		collapsible.className = "collapsible";

		const checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.id = `collapsible-${index}`;
		collapsible.appendChild(checkbox);

		const label = document.createElement("label");
		label.htmlFor = `collapsible-${index}`;
		label.textContent = item.title;
		collapsible.appendChild(label);

		const collapsibleText = document.createElement("div");
		collapsibleText.className = "collapsible-text";

		// Append your content inside collapsibleText if needed

		collapsible.appendChild(collapsibleText);
		wrapper.appendChild(collapsible);
	});

	document.body.appendChild(wrapper);
}
