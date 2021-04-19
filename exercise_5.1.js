/*
Jonas has 3 friends, and his best friend is called Michael
*/

const myself = {
    name: null,
    friends: [],
    bestFriend: null
}

myself.name = "Jonas";
myself.friends.push("Arthur")
myself.friends.push("Michael")
myself.friends.push("Steven")
myself.bestFriend = myself.friends[2]

console.log(`${myself.name} has ${myself.friends.length} friends, and his best friend is called ${myself.bestFriend}`);