function filterEpics(el, filter) {
    const epics = el.querySelectorAll('div.ghx-classification-item');
    epics.forEach(epic => {
        const epicNameSpan = epic.querySelector("span[data-fieldname='epicLabel']");
        if (epicNameSpan) {
            const epicName = epicNameSpan.textContent;
            if (epicName.toLowerCase().indexOf(filter.toLowerCase()) === -1) {
                epic.style.display = 'none';
            }
            else {
                epic.style.display = 'block';
            }
        }
    });
}

setTimeout(() => {
    console.log('Browser action called!');
    const el = document.querySelector('div#ghx-epic-column div.ghx-classification-cards');
    if (el) {
        const input = document.createElement("input");
        input.type = 'text';
        input.style.margin = '5px';
        input.addEventListener("input", event => {
            filterEpics(el, input.value);
        });
        input.addEventListener("keydown", event => {
            if (event.keyCode === 27) {
                input.value = '';
                filterEpics(el, input.value);
            }
        });
        el.insertAdjacentElement("beforebegin", input);
    }
}, 3000);