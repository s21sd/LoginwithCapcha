// Generate random text for CAPTCHA
function generateCaptcha() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < 5; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }
  
  // Set CAPTCHA image source
  function setCaptchaSrc() {
    var captchaImg = document.getElementById("captcha-img");
    var captchaText = generateCaptcha();
    captchaImg.setAttribute("src", "captcha.php?text=" + captchaText);
    return captchaText;
  }
  
  // Refresh CAPTCHA image
  function refreshCaptcha() {
    var captchaText = setCaptchaSrc();
    document.getElementById("captcha").value = "";
    return captchaText;
  }
  
  // On page load
  document.addEventListener("DOMContentLoaded", function(event) {
    var captchaText = setCaptchaSrc();
  
    // On form submit
    document.getElementById("contact-form").addEventListener("submit", function(event) {
      var inputCaptcha = document.getElementById("captcha").value;
      if (inputCaptcha !== captchaText) {
        event.preventDefault();
        alert("The CAPTCHA is incorrect.");
        refreshCaptcha();
      }
    });
  
    // On refresh button click
    document.getElementById("refresh-btn").addEventListener("click", function(event) {
      event.preventDefault();
      captchaText = refreshCaptcha();
    });
  });
  