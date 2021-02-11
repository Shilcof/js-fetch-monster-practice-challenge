class MonsterAPI {
    static baseURL = "http://localhost:3000/monsters";

    static getMonsters(num, page) {
        monsterContainer.innerHTML = "";
        fetch(`${this.baseURL}/?_limit=${num}&_page=${page}`)
            .then(resp => resp.json())
            .then(buildMonsters);
    }

    static create({name, age, description}) {
        const configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                name,
                age: parseFloat(age),
                description
            })
        }
        console.log(configObj)
        fetch(this.baseURL,configObj)
            .then(d=>d.json())
            .then(d=>console.log('new monster',d))
    }
}

// addSubmitEventListener=()=>{
//     document.querySelector('#monster-form').addEventListener('submit',a=>{
//         a.preventDefault(),
//         console.log('submitted',getFormData()),
//         postNewMonster(getFormData()),clearForm()
//     })
// },
// getFormData=()=>{
//     let a=document.querySelector('#name'),
//     b=document.querySelector('#age'),
//     c=document.querySelector('#description');
//     return{name:a.value,age:parseFloat(b.value),description:c.value}
// },
// postNewMonster=a=>{
//     let b=URL_PREFIX+`monsters`,
//     c={
//         method:'POST',
//         headers:{
//             'Content-type':'application/json',
//             Accept:'application/json'
//         },
//         body:JSON.stringify(a)
//     };
//     fetch(b,c)
//         .then(d=>d.json())
//         .then(d=>console.log('new monster',d))
// },
// clearForm=()=>{document.querySelector('#monster-form').reset()}