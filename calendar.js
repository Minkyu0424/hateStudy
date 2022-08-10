const button2 = document.querySelector(".calendar");
button2.addEventListener("click", function(){
    const mon = parseInt(prompt("월을적어주세요"));
    const day = parseInt(prompt("일을적어주세요"));
    var days = 0;
    const month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const dayOfWeek = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];
    for (let i = 0; i < mon - 1; i++) {
      days += month[i];
    }
    days = days + day;
    alert(dayOfWeek[days % 7] + "입니다.");
});
  

