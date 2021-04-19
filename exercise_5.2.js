
const fede = {
    firstName: "Federico",
    lastName: "Noto",
    birthYear: 1993,
    job: "developer",
    friends: ["Martin", "Sandra", "Federico", "Victoria"],
    bestFriend: "Martin",
    hasDriverLicence: true,

    getSummary: function () {
        return `Me llamo ${this.firstName} ${this.lastName} y nací en ${this.birthYear}. Trabajo como ${this.job}.Tengo ${this.friends.length} amigos que se llaman, ${this.friends}, donde mi mejor amigo es ${this.bestFriend}. Actualmente ${this.hasDriverLicence == true ? "poseo" : "no poseo"} licencia de conducir.`;
    }
};

console.log(fede.getSummary());
