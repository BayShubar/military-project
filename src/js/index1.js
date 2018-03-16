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
function showFirstOption() {
    if (state.extraWork) {
        a.style.display = "block";
        b.style.display = 'none';
        state.extraWork = false;
    }
}
function showSecondOption(){
    if (!state.extraWork) {
        b.style.display = "block";
        a.style.display = 'none';
        state.extraWork = true;
    } 
}