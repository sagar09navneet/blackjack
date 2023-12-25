// javascript
//let firstCard=10
let firstCard=getrandomnumber()

//let secondCard=11
let secondCard=getrandomnumber()

let cards=[firstCard,secondCard]
//let cards=[]
let sum= firstCard+secondCard
//let sum= 0
let hasBlackJack =false
let isAlive = true
console.log(cards)
//let cards="cards: " +cards[0]+" " +cards[1]
let messageEl=document.getElementById("message-el")
console.log(messageEl)
//let sumEl=document.getElementById("sum-el")
//let sumEl=document.querySelector("body") it refers to the complete body and  changes the output //interface i.e some value get omiited off from display screen.
let sumEl=document.querySelector("#sum-el")
console.log(sumEl)
let cardsEl=document.querySelector("#cards-el")
console.log(cardsEl)
function getrandomnumber(){
   // return Math.floor(Math.random()*13)+1
   let randomnumber=Math.floor(Math.random()*13)+1
   if(randomnumber>10){
       return 10
   }
   else if(randomnumber==1){
       return 11
   }
   else{
       return randomnumber
   }
}

function start(){
    
    render()
   
}
function render() 
{
  cardsEl.textContent="cards: "
//use loop to access and print the cards array.
for(let i =0;i<cards.length;i++){
   cardsEl.textContent+=cards[i]+" "
    
}
sumEl.textContent="sum: "+sum
 if (sum<=20){
     message="do u want to draw a new card"
     
 }
 else if(sum===21){
     message="whoo! you have got the one"
     hasBlackJack=true
 }
 else {
     message="you are out of the gam"
     isAlive=false
 }
 console.log(message)
 console.log(isAlive)
 messageEl.textContent=message
 //inner text can also be used.
}
function newcard(){
    console.log("draw a new card")
    let thirdcard=getrandomnumber()
    sum=sum+thirdcard
    cards.push(thirdcard)
    console.log(cards)
    render()
    }
    //array in js notes: 
    //::concept of loop using array 
   let featurepost=[
        "check out my netflix clone",
        "here the code from my project",
        "relaunched my portfolio"
        
    ]
    for (let i=0; i<featurepost.length ;i+=1){
        console.log(featurepost[i])
    }
    /*
    let experience=["ceo at findpandit","frontend developer"]
    //indexing is similar to c++.so accesing the element using indexing .
    console.log(featurepost.length)
    //it prints by adding the( no of element in an array +1) value.
    let per=["navneet sagar",20,true]
    //adding or removing the element in an array
    let cards=[2,3,4]
    cards.push(8)
    console.log(cards)
    let mess=[
        " hey whats going!!",
        "i am great ,thanks for asking",
        "do you have problem do reach me"
      ]
      mess.push(" i will do surely")
      console.log(mess)
      //pop() is used to remove the last element of an array
      //shift() is used to remove the firstelemnt of an array.
      */
      //loop concept is similar to what we have learnt in c++ or c,just the increament or decreament is done by "i+=1" or i++/i--