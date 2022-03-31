
 function HandleClickButton(){
    console.log("Hello World");
}



fetch("./agenda.json")
.then(response => response.json())
.then(data => {
    let names = [];
    for (let i = 0; i < data.items.length; i++) {
        names.push(data.items[i].name);
    }
    console.log({names: names});
})
.catch(error => console.log(error));

