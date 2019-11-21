'use strict';


/*


function counterCreator() {

    let count =0 ;

    return{

        increment (){
            return ++count;
        },
        decrement (){
            return --count;
        },
    }

}


const  counter1 = counterCreator();


const  counter2 = counterCreator();*/
/*

function fib (n) {

    if(n < 1){
        return;
    }

    if (n<=2){
        return 1;
    }

    return fib(n-1)+ fib(n-2);

}



function fibI(n) {
    if(n<1){
        return ;
    }
    if(n<3){
        return 1;
    }

    let fib1 = 1;
    let fib2 = 1;
    let sum  = fib1 + fib2;


    for (let i = 3; i<n ; i++){


        fib1=fib2;
        fib2=sum;
        sum =fib1+ fib2;
    }

    return  sum;
}*/


/*
const  str = 'world';

const res = str.split('');

console.log(res);

const revsers = res.reverse();

console.log(revsers);

const join = revsers.join();

console.log(join);
*/



/*
const  checkPalindrome =  str =>{

    str = str.replace( /^a-яa-z/ig ,"");


    return str.toLowerCase() === str.split("").reverse().join("").toLowerCase();
};



do{
    const userStr = prompt ("Input your str");

    if(!userStr){
        break;
    }

    alert(checkPalindrome(userStr));
}while (true)*/


/*

class Animal {
    getVoice (){
        console.log(this.voice);
    }
}


class Cat extends Animal{
    constructor(name , jumpHeight){
        super();
        this.name = name;
        this.voice = "Мяу - мяу";
        this.jumpHeight = jumpHeight;
    }


    run(times){

        for(let i )

        console.log()
    }
}

const  cat = new Cat("Dead");*/


class User{

    constructor( login , password , email){
        this.login = login;
        this.password = password;
        this.email = email;

    }

    cheLogin(value){
        return this.login === value;
    }


    checkPassword (value){
        return this.password === password;
    }
}

class Buyer extends User{



    constructor(login, password, email) {
        super.constructor(login, password, email);
    }

}

class Seller extends User{


    constructor(login, password, email) {
        super.constructor(login, password, email);
    }

}

const buyer = new Buyer("fdsfdsf","4654564","fsdfdsfds@gmail.com");
const  seller = n