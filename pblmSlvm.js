// এমন  একটা  প্রোগ্রাম  লিখো   যেখানে  একটা  নম্বর  ইনপুট  করলে  কনসোল এ বলে  দিবে  যে  এইটা  জোর  নাকি  বিজোড় 

// var num = 58;
// if (num % 2 == 0) {
//     console.log(num + " is Even");
// }
// else {
//     console.log(num + " is Odd");
// }

// একটা  এরে  থাকবে  এরে  এর  মধ্যে  ১-২০ পর্যন্ত  নম্বর গুলা  এলোমেলো   থাকবে  আপনার  কাজ  হবে ক্রোম অনুসারে সাজানো 
// var num = [3, 6, 2, 14, 11, 19, 4, 17, 7, 8, 9, 10, 1, 12, 13, 15, 16, 5, 18, 20];
// num.sort(function (a, b) {
//     return a - b
// });
// console.log(num);

// এমন  একটা  প্রোগ্রাম  লিখো  যেখানে   নম্বর  ইনপুট  করলে  বলে  এইটা  লিপ ইয়ার  কি  না ?

// var leapYear = 2019;
// if (leapYear % 4 == 0) {
//     console.log(leapYear + " is a Leap Year");
// }
// else if (leapYear % 100 == 0) {
//     console.log(leapYear + " is not a Leap Year");
// }
// else if (leapYear % 400 == 0) {
//     console.log(leapYear + " is a Leap Year");
// }
// else {
//     console.log(leapYear + " is not a Leap Year");
// }

// // ১-৫০ এর  মধ্যে  ৩ এবং ৫ দিয়ে  বিভাজ্য  সংখ্যা  গুলা  বের  করো 
// var num = 50;
// for (i = 3; i <= num; i++) {
//     if (i % 3 == 0 && i % 5 == 0) {
//         console.log(i + " three and five");
//     }
//     else if (i % 3 == 0) {
//         console.log(i + " three");
//     }
//     else if (i % 5 == 0) {
//         console.log(i + " five");
//     }
// }

// উপরে এর  এরে  থেকে যেখানে  ৫ টা  ফ্রেন্ড  এর  নাম  এর  মধ্যে   বড়ো  নাম  কোন  ফ্রেন্ড  এর  খুঁজে  বের  করা 
// var friends = ["rahim", "karim", "abdulKalam", "sadsd", "heroAlom"];
// var temp = friends[0];

// for (var i = 0; i < friends.length; i++) {
//     var element = friends[i];
//     if (element.length > temp.length) {
//         temp = element;
//     }
// }
// console.log(temp);

// উবের  পরের  এরে  থেকে  ডুপ্লিকেট  নম্বর  গুলা  বাদ  দিয়ে  উনিক  নম্বর  গুলা বের  করতে    হবে 
// 

// var fruits = ["apple", "banana", "orange"];
// var bIndex = fruits.indexOf("banana");
// fruits[bIndex] = "mango";
// console.log(fruits);
// fruits.pop();
// console.log(fruits);
// fruits.push("Watermelon");
// console.log(fruits);
// var i = 0;
// for (i=0; i<5; i++){};
// console.log(i);

// var name = false;
// console.log(typeof name );

for (var i = 5; i < 5; i++) {
  console.log(i);
}