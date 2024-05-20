let string=['dad','mum','cat'];
function palindromeChecker(str){
    const len =str.length;
    for (let a=0;a<len/2;a++){
        if (str[a]!==str[len-1-a]){
            console.log(`${str} is not a palindrome`);
            return;

        }
    }
    console.log(`${str} is  a palindrome`);
}
    for (let i = 0; i < string.length; i++) {
        palindromeChecker(string[i]);
}
/*output
dad is  a palindrome
mum is  a palindrome
cat is not a palindrome
*/