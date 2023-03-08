function filterName(name) {
  // input vide
  if (name == undefined) {
    name = "Unknow";
  }
  // input avec un mots et aussi avec des espaces
  if (name.startsWith(" ") || name.endsWith(" ")) {
    name = name.trim();
  }
 // input prende juste les 12 1er caractères
  if (name.length > 12) {
    name = name.substring(0, 12);
  }

  // input si le nom commance par un _ 
  if (name.startsWith('_')) {
    name = name.substring(1);
  }

    // input pour supprime les mots 
     
    if (name === 'Hell') {
     throw Error("This name Is not Allowed")
    }
  

  return name;
}

module.exports = filterName;
