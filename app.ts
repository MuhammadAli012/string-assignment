export{};
//1. Write a ts program to find length of a string.
var name2:string = "Muhammad Ali";
console.log("lenght of string is:", name2.length);

//2. Write a ts program to copy one string to another string.
var string1:string = "ali";
var string2:string = "Ahmed";
console.log("for copy string:", string1.concat( string2));


//3. Write a ts program to concatenate two strings.
var string1:string = "ali";
var string2:string = "Ahmed";
console.log("for concatenate string:", string1.concat( string2));

//4. Write a ts program to compare two strings.
var compare1 : string = "Ali Muhammad";
var compare2 : string = "Ali Muhammed";
        console.log("comparision is:",compare1.localeCompare(compare2));

//5. Write a ts program to convert lowercase string to uppercase.

var lower:string = "muhammad ali";
    console.log("convert upper case", lower.toUpperCase());

//6. Write a ts program to convert uppercase string to lowercase.
 var upper:string = "ALI";
 console.log("lower case conversion;", upper.toLowerCase());

 //7. Write a ts program to toggle case of each character of a string.
        var toggleString : string = "MuhAmmMMAd Ali";
        var checkLower =  /^[a-z]+$/
        var checkUpper =  /^[A-Z]+$/

        for (let index = 0; index < toggleString.length; index++) {
           if(toggleString[index].match(checkLower)){
                toggleString[index].toUpperCase
           } else if(toggleString[index].match(checkUpper)){
            toggleString[index].toLowerCase
           }
            
        }
        console.log("for toggle Case:", toggleString);
        


 //8. Write a ts program to find total number of alphabets, digits or special character in a string.

var checkStr : string = "MuhammAD Ali 65$#@ HAMid";
var checkAlphabet= /^[a-zA-Z]+$/
var checkNumber= /^[0-9]+$/
var alphabets :number = 0;
var space :number = 0;
var number :number = 0;
var specialCharachter :number = 0;
        for (let i = 0; i < checkStr.length; i++) {
            if(checkStr[i].match(checkAlphabet)){
                alphabets++
            }else if(checkStr[i].match(checkNumber)){
                    number++
            }else if(checkStr[i]== ' '){
                space++
            }else{
                specialCharachter++
            }
            
        }

        console.log("Number of Alhpabets :", alphabets);
        console.log("Number of number :", number);
        console.log("Number of spaces :", space);
        console.log("Number of specialcharachter :", specialCharachter);
   
        
//9. Write a ts program to count total number of vowels and consonants in a string.
var checkVowelConstonent:string = "SirNaveedSarwar";
var vowel :number = 0;
var constonenent:number = 0
        for (let index = 0; index < checkVowelConstonent.length; index++) {
                if(checkVowelConstonent[index] == 'A' || checkVowelConstonent[index] == 'E' || checkVowelConstonent[index] == 'I' || checkVowelConstonent[index] == 'O' || checkVowelConstonent[index] == 'U' || checkVowelConstonent[index] == 'a' || checkVowelConstonent[index] == 'e' || checkVowelConstonent[index] == 'i' || checkVowelConstonent[index] == 'u' ||checkVowelConstonent[index] == 'o'){
                    vowel++
                }else
                constonenent++
            
        }        

        console.log("Number of Vowels :", vowel);
        console.log("Number of constonent :", constonenent);

//10. Write a ts program to count total number of words in a string.
        var checkTotal:string = "SaylaniMassIT";
        console.log("Total Number of  words in String:", checkTotal.length);


//11. Write a ts program to find reverse of a string.        
function reverse(s:string):string{
    return s.split("").reverse().join("");
}
       console.log("reverse is:", reverse("ComputerSci"));
       
//12. Write a ts program to check whether a string is palindrome or not.


function checkPalindrome(str:string) {
    const len = str.length;
    for (let i = 0; i < len / 2; i++) { 
        if (str[i] !== str[len - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}

const value = checkPalindrome("madam");
console.log(value);
       
//13. Write a ts program to reverse order of words in a given string       
        
function reverse2(s:string):string{
    return s.split("").reverse().join("");
}
       console.log("reverse is:", reverse2("ComputerSci"));     

//14. Write a ts program to find first occurrence of a character in a given string.
var firstOccurrence:string =  "Now we start object oriented programming in Typescript";
var findFirst = firstOccurrence.indexOf("start");
console.log("First Occurence of given :", findFirst);


//15. Write a ts program to find last occurrence of a character in a given string.

var lastOccurrence:string =  "Now we start object oriented programming in Typescript also start in js";
var findLast = lastOccurrence.lastIndexOf("start");
console.log("Last Occurence of given :", findLast);

//16. Write a ts program to search all occurrences of a character in given string.

var searchAll : string = "Banana is healthy";
for (let index = 0; index < searchAll.length; index++) {
            if(searchAll[index] == 'a'){
                console.log("check all ocurrence of given word;",  index);
                
            }
    
}



//17. Write a ts program to count occurrences of a character in given string.

var searchAll2 : string = "Banana is healthy";
var countOcurrence:number = 0
for (let index = 0; index < searchAll2.length; index++) {
            if(searchAll2[index] == 'a'){
               countOcurrence++
                
            }
    
}
console.log("count occurrences of a character:", countOcurrence);

//18. Write a ts program to find highest frequency character in a string.
var frequencyStr : string = "hjdfgjdhjfhkjdhkdiufgidhfgeur";
var obj = {};

for (let index = 0; index < frequencyStr.length; index++) {
    let element = frequencyStr[index];
    if(obj[element]==undefined){
        obj[element]=1
    }else{
        obj[element]++
    }
    
}
console.log(obj);//problem no 19 and 20 also include


//21. Write a ts program to remove first occurrence of a character from string
var strRemove = 'Saylani Mass It Training';
console.log('Original String: ', strRemove);

var newStr: string = strRemove.replace('M', '');
console.log('After character removed: ', newStr);

//22. Write a ts program to remove last occurrence of a character from string.

var lastRemove : string = "Bannana"

console.log("remove last ocurrence:", lastRemove.slice(0,lastRemove.length - 1));



//24. Write a ts program to remove all repeated characters from a given string.


function removeRepeatedCharacters(string) {
    return string
      .split('').filter(function(item, pos, self) {
        return self.indexOf(item) == pos;
      })
      .join('');
  }
  console.log("Remove Repeated Charachter",removeRepeatedCharacters('baraban'));

//25. Write a ts program to replace first occurrence of a character with another in a string.

var replaceFirst : string = "ali";
var replace = replaceFirst.replace('a','o')
console.log('replace first occurrence of charachter', replace);


//26. Write a ts program to replace last occurrence of a character with another in a string.
var str:string = 'Hello World.';

const replaced = str.slice(0, -1) + '!';
console.log("Replaced last occurrence",replaced);

//28. Write a ts program to find first occurrence of a word in a given string
var findFirstOccurrence : string = " Muhammad Naveed Sarvar";
console.log("find first occurrence of a word", findFirstOccurrence.indexOf('a'));

//29. Write a ts program to find last occurrence of a word in a given string.

var findFirstOccurrence : string = " Muhammad Naveed Sarvar";
console.log("find last occurrence of a word", findFirstOccurrence.lastIndexOf('a'));

//30. Write a ts program to search all occurrences of a word in given string.
var findAllOccurrence : string = "Bannanaa";
for (let index = 0; index < findAllOccurrence.length; index++) {
    if(findAllOccurrence[index]=='n'){
        console.log("All Occurrence of word :", index);
        
    }
    
}


//32. Write a ts program to remove first occurrence of a word from string.

var s1:string = "nfoobar";
var s2 = s1.substring(1);
console.log("Remove First Occurrence:", s2);

//33. Write a ts program to remove last occurrence of a word in given string.
  

var s3:string = "nfoobar";
var s4 = s3.slice(0,- 1);
console.log("Remove last Occurrence:", s4);

//34. Write a ts program to remove all occurrence of a word in given string
    

        // let string:string = 'Typescript is popular language'
        // string = string.replaceAll('p','')
        // console.log("Remove All occurrence:", string )

       
//38. Write a ts program to remove all extra blank spaces from given string

        // let removeBlank:string = 'Typescript is popular language'
        //  removeBlank = removeBlank.replaceAll(' ','')
        //  console.log("Remove All occurrence:", removeBlank )




 



























        

    
         




