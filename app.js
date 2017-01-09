module.exports = (function() {

  let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

  function firstVowelFinder(word) {
    let letters = word;
    for(let i = 0; i < letters.length; i++) {
      if(vowels.indexOf(letters[i]) !== -1) {
        let index = i;
        return index;
      }
    }
  }

  function pigLatin(word) {
    let letters = word.split('');
    if(vowels.indexOf(letters[0]) !== -1) {
      let pigWord = letters.join('') + '-ay';
      console.log(pigWord);
      return pigWord
    } else {
      let index = firstVowelFinder(letters);
      let firstLetters = letters.slice(0,index).join('');
      let lastLetters = letters.splice(index).join('');
      let word = `${lastLetters}-${firstLetters}ay`;
      console.log(word);
      return word;
    }
  }

  function wordConcat(str) {
    let words = str.split(' ');
    let sentence = '';

    for(var i = 0; i < words.length; i++) {
      let pigWord = pigLatin(words[i]);
      sentence += pigWord + ' ';
    }
    sentence = sentence.trim();
    console.log(sentence);
    return sentence;
  }

  return {
    pigLatin,
    wordConcat
  }

})();