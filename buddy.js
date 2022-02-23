const loadBuddies = () => {
    fetch('https://randomuser.me/api/?results=5')
        .then(Response => Response.json())
        .then(data => displyBuddies(data))
}

loadBuddies();

const displyBuddies = data => {
    const buddies = data.results;
    const buddiesDiv = document.getElementById('buddies');
    for (const buddy of buddies) {
        const p = document.createElement('p')
        p.innerText = buddy.email;
        buddiesDiv.appendChild(p);
    }
}

