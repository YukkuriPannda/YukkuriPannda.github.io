let nowEditingPlanPos;
function MoveToNextCalender() {
  selectDate.setMonth(selectDate.getMonth() + 1);
  console.log(selectDate);
  generateCalender(selectDate.getMonth() + 1, selectDate.getFullYear());
}
function MoveToBeforeCalender() {
  selectDate.setMonth(selectDate.getMonth() - 1);
  console.log(selectDate);
  generateCalender(selectDate.getMonth() + 1, selectDate.getFullYear());
}
function SavePlan() {
  let plantitle = document.getElementById('PlanTitle');
  console.log(plantitle.value);
  let xhr = new XMLHttpRequest();
  xhr.onload = () =>
    callback(JSON.parse(xhr.response));
  xhr.open("POST", "http://localhost:80/MakePlan");
  let planData = {
    "month": selectDate.getMonth(),

    "date": nowEditingPlanPos + 1,
    "time": document.getElementById("PlanTime").value,
    "title": document.getElementById("PlanTitle").value,
    "explanation": document.getElementById("PlanExplanation").value
  }
  xhr.send(JSON.stringify(planData));

}
function ClosePlanEditorWindow() {
  document.getElementsByClassName("PlanEditorWindow")[0].classList.add("Hide");
}
function OpenPlanEditorWindow(planPos) {
  document.getElementsByClassName("PlanEditorWindow")[0].classList.remove("Hide");
  console.log(planPos);
  nowEditingPlanPos = planPos;
}


function inputCalenderPlans(callback) {
  let planJson;
  let xhr = new XMLHttpRequest();
  xhr.onload = () =>
    callback(JSON.parse(xhr.response));
  xhr.open("GET", "http://localhost:80/CalenderPlan");
  xhr.responseType = "text";
  xhr.send();
}
function generateCalender(month, year) {
  let date = new Date();
  date.setMonth(month - 1);
  date.setDate(1);
  date.setFullYear(year);
  let days = document.getElementsByClassName("days");
  var day = [];
  for (let i = 0; i < days.length; i++) {
    for (let n = 0; n < 7; n++) {
      day.push(days[i].children[n]);
    }
  }
  day.forEach(element => {
    element.textContent = "";
  });
  console.log(date.getMonth() + 1, new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate() + date.getDay());
  for (let i = date.getDay(); i < new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate() + date.getDay(); i++) {
    day[i].textContent = i - date.getDay() + 1;
  }

  let plans = document.getElementsByClassName("plans");
  let plan = [];
  for (let i = 0; i < plans.length; i++) {
    for (let n = 0; n < 7; n++) {
      plan.push(plans[i].children[n].children[0]);
    }
  }
  plan.forEach(element => {
    element.textContent = "";
  });
  inputCalenderPlans((res) => {
    console.log(res);
    document.getElementsByClassName("Title")[0].textContent = res["CalenderName"] + " " + date.getFullYear().toString() + " " + (date.getMonth() + 1).toString();

    let numOfPlanAdded = 0;
    if (res["plans"][month] != null) {
      for (let i = date.getDay(); i < new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate() + date.getDay()
        , res["plans"][month].length > numOfPlanAdded; i++) {
        if (res["plans"][month][numOfPlanAdded]["date"] == i - date.getDay() + 1) {
          plan[i].textContent = res["plans"][month][numOfPlanAdded]["title"];
          numOfPlanAdded++;
        }
      }
    }
  });

}
let selectDate = new Date();
document.getElementsByClassName("PlanEditorWindow")[0].classList.add("Hide");
generateCalender(selectDate.getMonth() + 1, selectDate.getFullYear());
console.log(selectDate);