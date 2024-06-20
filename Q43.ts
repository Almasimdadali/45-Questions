let magician: String[] = ["Almas", "huda", "isha"];
function make_Great(Magician: string[]): string[] {
  let Great: string[] = [];
  magician.forEach((magic) => {
    Great.push(`${magic} the great`);
  });
  return Great;
}

function show_Magicians(magicians: string[]) {
  magician.forEach((magician) => {
    console.log(magician);
  });
}

let Great = make_Great(magicians.slice()); 
console.log("Original Array");

show_Magicians(magicians); 
console.log("modified array");

show_Magicians(Great);
