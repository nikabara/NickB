async function getData() {
    try {
        const response = await fetch('https://66f2e81c71c84d8058772c4d.mockapi.io/users');

        if (!response.ok) { throw new Error("Request was not satisfied") }

        const myData = await response.json();

        return myData;
    } catch (error) {
        console.log(error);
    }
}

async function postData(name, lastname, age) {
    try {
        const response = await fetch('https://66f2e81c71c84d8058772c4d.mockapi.io/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Name: name,
                LastName: lastname,
                Age: age
            })
        })
    
        if (!response.ok) {
            throw new Error("postDate : Request was not satisfied" + response.statusText)
        }
    } catch (error) {
        console.log(error);
    }
}

async function patchData(id, name, lastname, age) {
    const patchData = {};

    if (name) patchData.name = name;
    if (lastname) patchData.lastname = lastname;
    if (id !== undefined) patchData.age = age;

    try {
        const response = await fetch(`https://66f2e81c71c84d8058772c4d.mockapi.io/users/${id}`, {
            method: "PATCH",
            headers: {
                'Data-Type': 'application/json'
            },
            body: JSON.stringify(patchData)
        })

        if (!response.ok) { throw new Error("patchData : Request was not satisfied" + response.statusText) }

    } catch (error) {
        console.log(error);
    }
}