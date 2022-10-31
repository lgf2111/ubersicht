function getWeeksDiff(startDate, endDate) {
    const msInWeek = 1000 * 60 * 60 * 24 * 7;
    return Math.round(Math.abs(endDate - startDate) / msInWeek);
}

function getMonday(d) {
    d = new Date(d);
    var day = d.getDay(),
        diff = d.getDate() - day + (day == 0 ? -6 : 1); // adjust when day is sunday
    d.setHours(8);
    d.setMinutes(0);
    d.setSeconds(0);
    return new Date(d.setDate(diff));
}

const startWeek = new Date('2022-10-17');
const thisWeek = getMonday(Date.now())
const thisWeekNo = getWeeksDiff(startWeek, getMonday(Date.now()))
const weekNo = document.getElementById("week-no");
weekNo.innerText = thisWeekNo;

const tBody = document.querySelector("tbody");
const tRows = tBody.querySelectorAll("tr");
const totalAssessments = tRows.length;
var totalAssessmentsDone = 0

for (let i = 0; i < totalAssessments; i++) {
    const tRow = tRows[i];
    const rWeek = parseInt(tRow.querySelectorAll("td")[4].innerText);
    if (rWeek < thisWeekNo) {
        tRow.style.display = "none";
    } else {
        totalAssessmentsDone = i;
        break
    }
}

const assessmentNo = document.getElementById("assessment-no");
assessmentNo.innerText = totalAssessments - totalAssessmentsDone;