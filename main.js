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
// so che devo loggare numeri da 1 a 100 quindi uso for
    
//FASE 2
// uso l'if per creare le condizioni dove viene loggato fizzbuzz solo per multipli di 3 E di 5 
// usando l'operatore % x ===0 per assicurarmi che prenda i multipli naturali soltanto.

//FASE 3
// loggo la condizione dove se è solo multiplo di 3 esce in console fizz
//FASE 4
//loggo la condizione dove se è solo multiplo di 5 esce in console buzz

for (let i = 1; i <= 100 ; i++) {
    if ((i % 3 === 0 ) && (i % 5 === 0)) {
        console.log('FizzBuzz');

    } else if  (i % 3 === 0){
        console.log('Fizz');
          
    } else if (i % 5 === 0){
        console.log('Buzz');
        
    
    } else {
        console.log(i);
        
    }
    
}
