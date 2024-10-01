/* 
Scrivi un programma che stampi i numeri da 1 a 100, ma per i multipli di 3 stampi “Fizz” al posto del numero
e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
Prima di partire a scrivere codice poniamoci qualche domanda: Come faccio a sapere se un numero è divisibile per? 
Abbiamo visto qualcosa di particolare che possiamo usare?
Consigli del giorno:
scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"

 */

//FASE 1 
// so che devo stampare numeri da 1 a 100 quindi uso for
    
//FASE 2
// so che i multipli di 3 stampano fizz al posto dei numeri e i multipli di 5 buzz utilizzando la funzione 
// math.floor per far sì che usi SOLO i numeri divisibili NATURALMENTE per 3 e non decimali
//FASE 3
 // devo stampare in modo che i multipli di 3 e 5 devono stampare fizzbuzz
//FASE 4
for (let i = 1; i <= 100 ; i++) {
    if (i % 3 === 0){
        console.log('Fizz');
        
    } else if (i % 5 === 0){
        console.log('Buzz');
        
    } else if ((i % 3 === 0 ) && (i % 5 === 0)) {
        console.log('FizzBuzz');
        
    } else {
        console.log(i);
        
    }
    
}
