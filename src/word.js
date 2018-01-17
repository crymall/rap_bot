const Word = ({ word }) => {
  if (word) {
    return word;
  } else {
    return "_____";
  }
}

export default Word;