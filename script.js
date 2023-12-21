const pwd = document.getElementById("password-input");
const pwdStrength = document.getElementById("password-strength");
const pwdTime = document.getElementById("crack-time");

pwd.addEventListener("input", function () {
  const pwdVal = pwd.value;
  let result = zxcvbn(pwdVal);  
  pwdStrength.className = "strength-" + result.score;  
  pwdTime.className = "It would take " + result.crack_times_display.offline_fast_hashing_1e10_per_second + " to crack this password"
});
