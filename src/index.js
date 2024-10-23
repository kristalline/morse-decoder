const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

const getLetters = (substr, acc) => {
    const word = substr.substring(0, 10);
    const index = word.indexOf(1);
    acc.push(word.substring(index, 10));
    if (substr.length <= 10) {
        return acc;
    };
    return (getLetters(substr.substring(10), acc))
};

const decode = (str) => {
    const words = str.split('**********');
    const result = words.map((item) => {
        const letters = getLetters(item, []);
        const word = letters.map((letter) => {
            const temp = letter.replaceAll('10', '.');
            const temp1 = temp.replaceAll('11', '-');
            return MORSE_TABLE[temp1];
        });
        return word.join('')
    })
    return result.join(' ');
};

module.exports = {
    decode
}