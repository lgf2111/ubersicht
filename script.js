function getWeeksDiff(startDate, endDate) {
    const msInWeek = 1000 * 60 * 60 * 24 * 7;
    weekDiff = Math.abs(endDate - startDate) / msInWeek
    console.log(weekDiff)
    return Math.floor(weekDiff);
}

const startWeek = new Date('2022-10-17');
const thisWeek = Date.now()
const thisWeekNo = getWeeksDiff(startWeek, thisWeek) + 1
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