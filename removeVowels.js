function removeVowels(str) { 
  if (hasVowels(str)){
     if(str.length == 1){
       return ""
     } else {
       let characterArray = str.split("")
       return characterArray.map(character => {
           if(/[aeiouAEIOU]/.test(character)){
              character = ""
           } else {return character}
       }).join("")
    }
  } else {return str}
}

function hasVowels(string){
let word = string.toLowerCase()
if(/[aeiou]/.test(word)){
     return true
  } else {
     return false
  }
}