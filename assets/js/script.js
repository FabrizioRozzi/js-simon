//1. Cliccando su “via” il computer genera 5 numeri
//2. Vengono mostrati per 5 secondi i numeri generati
//3. Una volta inserito il quinto numero viene mostrato per 3 sec: “Calcolo in corso”
//4. Vengono mostrati i numeri indovinati e se non ce ne sono viene mostrato “Hai perso, nessun numero indovinato!”


$(document).ready(function(){
  //DICHIARO 3 ARRAY VUOTI CHE CONTERRANNO I NUMERI DEL COMPUTER, QUELLI DELL'UTENTE E IL RISULTATO
  var arrRandom = [];
  var arrUtente = [];
  var arrResult = [];
  var c = 0;


  //NASCONDO I MIEI ELEMENTI HTML TRANNE IL TASTO 'VIA'
  $('input').hide();
  $('#btn-invia').hide();
  
  $('#btn').hide();
  $('#btn2').click(function(){
    //DOPO IL CLICK DEL BOTTONE VIA LO NASCONDO E FACCIO GENERARE L'ARRAY RANDOM
    $(this).hide();
    while( arrRandom.length < 5 ){
      arrRandom.push(generatorRandomNumber(1,100));
    }
    //FACCIO APPARIRE I NUMERI DEL COMPUTER PER 5 SECONDI
    printOutput(arrRandom, '#display');
    setTimeout(function(){
      $('#display').hide();
      //UNA VOLTA NASCOSTI FACCIO APPARIRE IL MESSAGGIO E I BOTTONI NECESSARI PER ANDARE AVANTI
      printOutput("Inserisci i numeri che hai appena visto...", '#display');
      $('#display').show();
      $('input').show();
      $('btn2').show();
      $('#btn-invia').show();
      //INSERISCO I VALORI DELL'UTENTE NELL'ARRAY APPOSITO
      
      
        $('#btn-invia').click(insertValue(arrUtente))
        for(i=0; i<5; i++){
        if(arrUtente.includes(arrRandom[i])){
          arrResult[i].push(arrRandom[i])
          c++;
        }
      }

      printOutput("Hai indovinato i seguenti numeri: ", '#display');
      printOutput(arrResult, '#display2')
     
  
    }, 1000)
    
  })
  
  
})

















//FUNZIONI

function printOutput (text, target){
  $(target).text(text);
};

function generatorRandomNumber(min, max){
 return Math.floor(Math.random()*(max - min + 1)+min);
};


function insertValue(array){
  for(var i = 0; i < 5; i++ ){
    array[i]=$('#input').val();
        
        $('input').val(" ");
        printOutput(array[i], '#display2')
  }
}