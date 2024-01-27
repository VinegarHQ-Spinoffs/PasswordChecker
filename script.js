const pwd = document.getElementById("password-input");
const pwdStrength = document.getElementById("password-strength");
const pwdTime = document.getElementById("crack-time");
const pwdTimeSecs = document.getElementById("crack-time-seconds");

pwd.addEventListener("input", function () {
  const pwdVal = pwd.value;
  let result = zxcvbn(pwdVal);  
  pwdStrength.className = "strength-" + result.score;  
  pwdTime.textContent = "It would take " + result.crack_times_display.online_no_throttling_10_per_second + " to crack this password"
  pwdTimeSecs.textContent = "That's exactly " + result.crack_times_seconds.online_no_throttling_10_per_second + " seconds"
});
