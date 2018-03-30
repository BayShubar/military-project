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

    Xy: null,
    Yy: null,
    hy: null,

}
var extraData = {
    alfaAngle : null,
    dk : null,
    mc : null
}

//################## UTILS ##########################

function toRadian(DEG){
    return DEG * (Math.PI/180)
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

//#######################INPUT HANDLER###################


function inputCheker(){
    state.Xknp  =    parseInt(document.getElementById('x').value);
    state.Yknp  =    parseInt(document.getElementById('y').value);
    state.Hknp  =    parseInt(document.getElementById('h').value);
    state.Xop   =    parseInt(document.getElementById('h').value);
    state.Yop   =    parseInt(document.getElementById('h').value);
    state.Hop   =    parseInt(document.getElementById('h').value);
    state.AlfaOn =  parseInt(document.getElementById('h').value);

    if(state.extraWork){
        extraData.alfaAngle = document.getElementById('aK').value;
        extraData.dk = document.getElementById('Dk').value;
        extraData.mc = document.getElementById('mC').value;
    }else{
        state.Xy = document.getElementById("Xy").value;
        state.Yy = document.getElementById("Yy").value;
        state.hy = document.getElementById("hy").value;
    }

    //some error happen
    if(state.Xknp === '' || state.Yknp === '' || state.Hknp === ''){
        console.log('### NOT ALL FILLED ###')

    //if there no error
    }else{
        console.log('### ALL FILDS FILLED ###')

    }
}



//#################### ENGINE ########################

function extraWork(){
    console.log('### EXTRA WORK ###');
    let X = Math.round(Math.cos(toRadian(extraData.alfaAngle * 6)) * 2740)
    let Y = Math.round(Math.sin(toRadian(extraData.alfaAngle * 6)) * 2740)
    console.log(X, Y);
    state.Xy = state.Xknp + X;
    state.Yy = state.Yknp + Y;
    state.hy = Math.round(state.Hknp + extraData.mc * 0.001 * extraData.dk);
    console.log( state.Xy, state.Yy, state.hy );    
    
}


function calculate(){
    console.log('### CALCULATE ###');
}

function engine(){
    inputCheker();
    //if here needed calculate from polar cordinate
    if(state.extraWork){       
        extraWork();
    }else{
        calculate();
    }
}



















//#################### METEO DANNIE ########################
//#######################################################################
var a = document.getElementById("firsttt");
var b = document.getElementById("seconddd");
b.style.display = "none";
<<<<<<< HEAD
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
=======
var stateMeteo = {
    extraWork: false,
}
function showFirstOptionMeteo() {
    if (stateMeteo.extraWork) {
        a.style.display = "block";
        b.style.display = 'none';
        stateMeteo.extraWork = false;
    }
}
function showSecondOptionMeteo(){
    if (!stateMeteo.extraWork) {
        b.style.display = "block";
        a.style.display = 'none';
        stateMeteo.extraWork = true;
>>>>>>> 904608669df31802beb38830955536bcb2cb51f7
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