//##################INPUT OPTIONS##########################
var state = {
    extraWork: false,
    Xknp: null,
    Yknp: null,
    Hknp: null,
    Xop: null,
    Yop: null,
    Hop: null,
    AlfaOn: null,
}
var temporary = {
    alfa : 0,
    dk : 0,
    mc : 0
}
var meteoData = {
    extraWork1: false,
    temperOfAir: null,
    nazemDavlen: null,    
    ugolVetra: null,
    skorostVetra: null,
    VysotaMEteo: null
}

//##################INPUT OPTIONS##########################
var x = document.getElementById("first_opt");
var y = document.getElementById("second_opt");
y.style.display = "none";
function showFirstOption() {
    if (state.extraWork) {
        x.style.display = "block";
        y.style.display = 'none';
        state.extraWork = false;
    }
}
function showSecondOption(){
    if (!state.extraWork) {
        y.style.display = "block";
        x.style.display = 'none';
        state.extraWork = true;
    } 
}

//#####################INEXTRA WORK#######################

function extraWork(){
    if(state.extraWork){
        console.log('EXTRA WORK')
    }
}

//#######################INPUT HANDLER###################


function inputCheker(){
    state.Xknp = document.getElementById('x').value;
    state.Yknp = document.getElementById('y').value;
    state.Hknp = document.getElementById('h').value;
    state.Xop = document.getElementById('h').value;
    state.Yop = document.getElementById('h').value;
    state.Hop = document.getElementById('h').value;
    state.AlfaOn = document.getElementById('h').value;

    

    //some error happen
    if(state.Xknp === '' || state.Yknp === '' || state.Hknp === ''){
        console.log('ERROR HAPPEN')
    //if there no error
    }else{
        console.log('NO ERROR')
    }
}



//#################### ENGINE ########################

function engine(){
    inputCheker();
    extraWork();
}



//#################### METEO DANNIE ########################
//#######################################################################
var a = document.getElementById("firsttt");
var b = document.getElementById("seconddd");
b.style.display = "none";
function showFirstOptionMeteo() {
    if (state.extraWork) {
        a.style.display = "block";
        b.style.display = 'none';
        meteoData.extraWork1 = false;
    }
}
function showSecondOptionMeteo(){
    if (!state.extraWork) {
        b.style.display = "block";
        a.style.display = 'none';
        meteoData.extraWork1 = true;
    } 
}
function meteoHandler(event){
    console.log(event);
    var x = getElementById("meteoruch").value;
    
}





//#######################VVESTI VRYCHNUY
function mask(inputName, mask, evt) { 
    try { 
    var text = document.getElementById(inputName); 
    var value = text.value;
    // If user pressed DEL or BACK SPACE, clean the value 
   /* try { 
    var e = (evt.which) ? evt.which : event.keyCode; 
    if ( e == 46 || e == 8 ) { 
    text.value = ""; 
    return; 
    } 
    } catch (e1) {} 
    */
    var literalPattern=/[0\*]/; 
    var numberPattern=/[0-9]/; 
    var newValue = ""; 
    
    for (var vId = 0, mId = 0 ; mId < mask.length ; ) { 
    if (mId >= value.length) 
    break; 
    
    // Number expected but got a different value, store only the valid portion 
    if (mask[mId] == '0' && value[vId].match(numberPattern) == null) { 
    break; 
    } 
    
    // Found a literal 
    while (mask[mId].match(literalPattern) == null) { 
    if (value[vId] == mask[mId]) 
    break; 
    
    newValue += mask[mId++]; 
    } 
    
    newValue += value[vId++]; 
    mId++; 
    } 
    
    text.value = newValue; 
    } catch(e) {} 
    } 