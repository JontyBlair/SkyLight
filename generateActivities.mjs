import { supabase } from "./supabase.mjs";
import { updateUser } from './retrieveData.mjs';
import { userData } from './signin.mjs';

const eyes = ["Lights on", "Sniper gaze", "Oh no!", "Oh yes!", "Sniper Jump", "Smooth Pursuit", "Shut eye"];
const legs = ["Layback Lotus Chair", "Chill Chair", "hoedown", "Tassie Devil", "Low Toe Tag", "Beefeater", "Layback shindig", "Tassie Devil High", "Tightrope", "Tightrope hoedown", "The Stork", "Stork shindig", "Tightrope walk", "Stork Toe Tag", "One legged Morris Dancing", "Hokey Pokey", "Late for work", "On the hop", "Shop on the hop", "Soft Stork", "Soft Stork Shindig", "Soft Stork toe tag", "Soft one legged Morris Dancing", "Soft Hokey Pokey", "Soft late for work"];
const arms = ["On guard", "Bear Hug", "Zombie Bear Hug taps", "Wind the clock", "Stress Relief", "Heads, shoulders, knees and toes", "Get shirty", "Direct traffic", "Macarena", "Knee-bow", "Golf clap", "Trace base", "Tracking Sniper Jump", "Tracking Smooth Pursuit", "Counting fingers", "Play the violin", "Finger flicking good", "Tap a mole", "Windmill skill", "Pokey Nose", "Flip the pancake", "Totem tennis", "The artful lobber", "Handy Bandy", "Rap head and tub rummy", "Jugglebug", "This little pinky", "The money or the gun"];

let exercise = [];
let activitiesJSON;

onLogin();

async function onLogin() {
    let progress = 0;

    const ud = await userData;
    const uid = ud.user.id;

    const upd = await updateUser;
    const upda = upd.jsondata;

    const pr = JSON.parse(upd[0].levelprogress);

    for (let i = 0; i < 5; i++) {
        if (pr.progress[i] == 100) {
            progress++;
            console.log(progress);
        }
    }

    if (upda === null) {
        generate(0);

        console.log("calling upda");
        const { error } = await supabase
        .from('userdata')
        .insert({ uuid: uid, level: 0 })
    }

    if (progress == 5)
    {
        generate(ud.level + 1);

        console.log("calling progress");
        const { error } = await supabase
        .from('userdata')
        .update({ level: ud.level + 1 })
        .eq('uuid', uid)

        window.location.replace("file:///C:/Users/jonty/Desktop/Cerebellum%20Training%20Program/main.html");
    }
}

async function generate(level) {
    const ud = await userData;
    const uid = ud.user.id;

    for (let i = 0; i < 5; i++) {
        switch(level) {
            case 0:

            break;
            case 1:

            break;
            case 2:

            break;
            case 3:

            break;
            default:
        }
        exercise[i] = [eyes[ranGen(0, eyes.length)], legs[ranGen(0, legs.length)], arms[ranGen(0, arms.length)]]
    }
    activitiesJSON = JSON.stringify({exercise: exercise});

    const { error } = await supabase
    .from('userdata')
    .update({ jsondata: activitiesJSON, levelprogress: JSON.stringify({progress: [0, 0, 0, 0, 0]}), starrating: JSON.stringify({rating: [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]}) })
    .eq('uuid', uid)
    console.log("calling gen");
}

function ranGen(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
