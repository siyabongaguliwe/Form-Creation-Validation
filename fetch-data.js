document.addEventListener('DOMContentLoaded', fetchUserData);

async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById('api-data');

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        displayUserData(data);
    } catch (error) {
        dataContainer.textContent = 'Failed to load user data';
        console.error('Fetch error:', error);
    }
}

function displayUserData(users) {
    const dataContainer = document.getElementById('api-data');
    const userList = document.createElement('ul');

    users.forEach(user => {
        const listItem = document.createElement('li');
        listItem.textContent = user.name;
        userList.appendChild(listItem);
    });

    dataContainer.innerHTML = '';
    dataContainer.appendChild(userList);
}
