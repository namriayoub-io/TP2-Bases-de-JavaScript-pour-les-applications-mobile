const etudiants = [
    { id: 1, nom: "Amine", note: 16 },
    { id: 2, nom:"Youssef", note: 8 },
    { id: 3, nom:"Salma", note: 14 },
    { id: 4, nom: "Omar", note: 12 }
];
console.log(etudiants);
console.log('premier nom : ',etudiants[0].nom)
console.log('effectif : ',etudiants.length)

function notevalide(note){
    return Number.isFinite(note) && note>=0 && note<=20;
}
console.log(notevalide(16
    
));
console.log(notevalide(25));

function moyenne(notes){
    if (notes === 0) return null ;
    const total = notes.reduce((somme,notes) => somme + notes , 0);
    return total / notes.length ;
}
const notes = etudiants.map((e) => e.note);
console.log(`le moyenne est : ${moyenne(notes)}`);

const admis = etudiants.filter((e) => e.note >=10);
console.log(`les etudiants admis est : ${admis.length}`);

const lignes = etudiants.map((e) => {
    const decision = e.note  >= 10 ? "admis" : "ajourne";
    return `${e.nom} - ${e.note} - ${decision}`;
});
console.log(lignes);

for (const ligne of lignes){
    console.log(ligne);
}