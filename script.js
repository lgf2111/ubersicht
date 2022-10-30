function getWeeksDiff(startDate, endDate) {
    const msInWeek = 1000 * 60 * 60 * 24 * 7;
    return Math.round(Math.abs(endDate - startDate) / msInWeek);
}

const startWeek = new Date('2022-10-17');
const thisWeek = getWeeksDiff(startWeek, Date.now())
const weekNo = document.getElementById("week-no");
weekNo.innerText = thisWeek;

const tBody = document.querySelector("tbody");
const tRows = tBody.querySelectorAll("tr");
const totalAssessments = tRows.length;
var totalAssessmentsDone = 0

for (let i = 0; i < totalAssessments; i++) {
    const tRow = tRows[i];
    const rWeek = parseInt(tRow.querySelectorAll("td")[4].innerText);
    console.log(tRow)
    if (rWeek < thisWeek) {
        tRow.style.display = "none";
    } else {
        totalAssessmentsDone = i;
        break
    }
}

const assessmentNo = document.getElementById("assessment-no");
assessmentNo.innerText = totalAssessments - totalAssessmentsDone;