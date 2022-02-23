const loadBuddies = () => {
    fetch('https://randomuser.me/api/?results=5')
        .then(Response => Response.json())
        .then(data => displyBuddies(data))
}

loadBuddies();

const displyBuddies = data => {
    const buddies = data.results
    for (const buddy of buddies) {
        console.log(buddy);
    }
}

