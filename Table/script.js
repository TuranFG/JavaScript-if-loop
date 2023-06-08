let data = "";
let color = '';

const selection = document.getElementById("slc");

selection.addEventListener("change", (e) => {
    const optValue = parseInt(selection.options[selection.selectedIndex].innerText);

    data = "";

    for (let i = 0; i < optValue; i++) {
        data += "<tr>";

        for (let j = 0; j < optValue; j++) {
            color = i===j ? 'black' : '';
          data += `<td style="background-color:${color};">  </td>`;
        }

        data += "</tr>";
    }

    document.getElementById('tbl').innerHTML = data;
});
