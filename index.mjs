import { userData } from './signin.mjs';
import { updateUser } from './retrieveData.mjs';

const activitiesprogress = {};

const activityDiv = {}; 
const progressDiv = {}; 
const nameDiv = {};

let updateExercises;
let lp;

let root = document.documentElement;

updateUser.then(data => {
    lp = JSON.parse(data[0].levelprogress);
    updateExercises = JSON.parse(data[0].jsondata);
    console.log(lp);
    init();
    return updateExercises;
});

function init() {
    if (userData != null) {
        const level = document.createElement("div");
        level.setAttribute('class', 'level');

        for (let i = 0; i < 5; i++) {
            activityDiv[i] = document.createElement("div");
            activityDiv[i].setAttribute('class', 'activityDiv');

            progressDiv[i] = document.createElement("div");
            progressDiv[i].setAttribute('class', 'progressDiv');

            nameDiv[i] = document.createElement("div");
            nameDiv[i].setAttribute('class', 'nameDiv');

            activitiesprogress[i] = document.createElement('a');

            activitiesprogress[i].onclick = function () {
                if (lp.progress[i] >= 100) {
                    return;
                }
                localStorage.setItem('Index', i);
                window.location.replace(`file:///C:/Users/jonty/Desktop/Cerebellum%20Training%20Program/exercise.html`);
            }

            root.style.setProperty('--progress-value-' + [i + 1], lp.progress[i]);

            activitiesprogress[i].setAttribute('class', 'activitiesprogress');
            activitiesprogress[i].setAttribute('id', 'ac' + [i + 1]);

            if (i % 2 == 0) {
                activityDiv[i].setAttribute('id', 'right');
            } else {
                activityDiv[i].setAttribute('id', 'left');
            }

            activitiesprogress[i].innerHTML = "<p id=gas>" + lp.progress[i] / 25 + "/4</p>";

            nameDiv[i].innerHTML = updateExercises.exercise[i][0] + "<br>" + updateExercises.exercise[i][1] + "<br>" + updateExercises.exercise[i][2];

            /*
            svg[i] = document.createElement("img");
            svg[i].setAttribute('src', 'Icons/' + activityArray[i][0] + '.svg');
            svg[i].setAttribute('class', 'icon');
            symbolsDiv[i].appendChild(svg[i]);
            */

            progressDiv[i].appendChild(activitiesprogress[i]);

            activityDiv[i].appendChild(progressDiv[i]);
            activityDiv[i].appendChild(nameDiv[i]);


            level.appendChild(activityDiv[i]);
        }
        document.body.appendChild(level);
    }
}