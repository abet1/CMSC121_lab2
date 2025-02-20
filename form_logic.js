
const string_list = [];


function addStringToList(){
    const string = document.getElementById("user_string").value.trim();
    const list_item = document.createElement("li");

    if(string!==""){
        string_list.push(string);

        new_string = string_list[string_list.length - 1];

        list_item.innerHTML =`<button class="string_button">${new_string}</button>`;
        const button = list_item.querySelector('.string_button');
        button.addEventListener("click", function() {
            this.classList.toggle("selected");
        });


        document.getElementById("string_list").appendChild(list_item);

        document.getElementById("user_string").value = "";
    }else{
        alert("Please enter a string");
    }

}


function removeStringFromList(){

    const selected = document.querySelectorAll('.string_button.selected');
    if(selected.length>0){

        selected.forEach(element => { //remove the selected string from the list
            element.parentElement.remove();
        });

        selected.forEach(element => { //remove the selected string from the array
            let index = string_list.indexOf(element.textContent);
            string_list.splice(index,1);
        });

    }else{
        alert("Please select a string to remove");
    }


}

console.log(string_list);


document.head.insertAdjacentHTML('beforeend', `
    <style>
        .string_button {
            background-color: #4CAF50;
            border: black dotted 1px;
            color: white;
        }

        .string_button.selected {
            background-color: #ff0000;
            border: black dotted 1px;
            color: white;
        }

    </style>
`);

