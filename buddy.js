const loadBuddies = () => {
    fetch('https://randomuser.me/api/?results=5000')
        .then(Response => Response.json())
        .then(data => displyBuddies(data))
}

loadBuddies();

const displyBuddies = data => {
    const buddies = data.results;
    const buddiesDiv = document.getElementById('buddies');
    for (const buddy of buddies) {
        console.log(buddy);
        const p = document.createElement('p')
        p.innerText = `Name: ${buddy.name.title} ${buddy.name.first} ${buddy.name.last} Email: ${buddy.email} Photo: ${buddy.picture.medium} Address: ${buddy.location.city} ${buddy.location.country}`;
        buddiesDiv.appendChild(p);
    }
}

