const capitalize = (phrase) => {
  const arr = phrase.toLowerCase().split(' ');
  let newPhrase = '';
  arr.forEach((word) => {
    newPhrase += `${word[0].toUpperCase()}${word.slice(1)} `;
  });
  return newPhrase.trim();
};

export default capitalize;
