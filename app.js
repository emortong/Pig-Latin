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

  function pigWordConcat(str) {
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

  function english(w) {
    let word = w.split('-');
    let letters = word[1].split('')
    console.log(letters, word);
    if(vowels.indexOf(letters[0]) !== -1) {
      let englishWord = word[0];
      console.log(englishWord);
      return englishWord
    }
    if(word.length === 2) {
      let firstLetters = word[1].slice(0, (word[1].length-2));
      console.log(firstLetters);
      let englishWord = firstLetters + word[0];
      console.log(englishWord);
      return englishWord;
    }
  }

  function englishWordConcat(str) {
    let words = str.split(' ');
    let sentence = '';

    for(var i = 0; i < words.length; i++) {
      let englishWord = english(words[i]);
      sentence += englishWord + ' ';
    }

    sentence = sentence.trim();
    console.log(sentence);
    return sentence;
  }

  return {
    pigLatin,
    pigWordConcat,
    english,
    englishWordConcat
  }

})();