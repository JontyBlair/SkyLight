import { userData } from './signin.mjs';
import { supabase } from "./supabase.mjs";
import { updateUser } from './retrieveData.mjs';

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const index = urlParams.get('index');

var s = 10;
var m = 1;

let start;
let stop;
let stars = {};

let b;
let a;

let pause = false;
let starSelect = 4;

window.buttonsInit = function buttonsInit() {
    start = document.getElementById("startTimer");
    stop = document.getElementById("stopTimer");

    a = true;
    b = true;

    start.onclick = function() {
        if (b) {
            if (a) {
                start.innerHTML = "Pause";
                stop.innerHTML = "Leave";

                a = false;
            } else {
                pause = !pause;
            }
            displayTimer();
        }
    }

    stop.onclick = async function() { 
        if (!a) {
            if (b) {
                window.location.replace("file:///C:/Users/jonty/Desktop/Cerebellum%20Training%20Program/main.html");
            } else {
                const ud = await userData;
                const uid = ud.user.id;

                const p = await updateUser;
                const pg = JSON.parse(p[0].levelprogress);
                const sr = JSON.parse(p[0].starrating);

                const prog = (pg.progress[index]/25)-1;

                pg.progress[index] = pg.progress[index] += 25;

                sr.rating[index][prog] = starSelect;

                const { error } = await supabase
                .from('userdata')
                .update({ levelprogress: JSON.stringify(pg), starrating: JSON.stringify(sr) })
                .eq('uuid', uid)

                //update star select

                window.location.replace("file:///C:/Users/jonty/Desktop/Cerebellum%20Training%20Program/main.html");
            }
        }
    }
}

function displayTimer() {
    if (pause) {
        start.style.backgroundColor = "#325D9E";
        return;
    }
    stop.style.backgroundColor = "#e33232";
    start.style.backgroundColor = "#0076BD";
    
    //This script expects an element with an ID = "counter". You can change that to what ever you want. 
    var current_minutes = m-1;
    s--;
    document.getElementById("timer").innerHTML = current_minutes.toString() + ":" + (s < 10 ? "0" : "") + s.toString();
    if( s > 0 ) {
        setTimeout(displayTimer, 1000);
    } 
    else
    {
        if (current_minutes > 0) {
        s = 60;
        m = 1;
        setTimeout(displayTimer, 1000);
        } 
        else 
        {  
            pause = true;
            b = false;

            start.innerHTML = "Start";
            start.classList.add('disabled');

            stop.innerHTML = "Finish";

            b = false;
            pause = true;

            starInit();
        }
    }
}

function starInit() {
    for (let i = 0; i < 5; i++) {
        stars[i] = document.getElementById("star-" + [i]);
        stars[i].classList.remove('black');
        stars[i].classList.add('checked');
        stars[i].onclick = function() {
            for (let k = 0; k < 5; k++) {
                stars[k].classList.remove('checked');
            }
            for (let j = 0; j <= [i]; j++) {
                stars[j].classList.add('checked');
            }
            console.log([i]);
            return starSelect = i;
        }
    }
}
