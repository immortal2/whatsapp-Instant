console.log('hello from index js')

document.getElementById("sendMsg").addEventListener("click", 
    function() {
        console.log('button was click')
        var iHt = document.getElementById("demo")
        iHt.text = iHt.text + "Hello World";

        var countryCode = document.getElementById("countryCode").value
        console.log('countryCode', countryCode)

        var mobileNo = document.getElementById("mobileNo").value
        console.log('mobileNo', mobileNo)

        var textMsg = document.getElementById("textMsg").value
        console.log('textMsg', textMsg)
        
        var phone = countryCode+'' + mobileNo
        console.log('phone', phone)
        window.open(`https://api.whatsapp.com/send?phone=${phone}&text=${textMsg}&lang=en`);
        
    }
);

function getOS() {
    var userAgent = window.navigator.userAgent,
        platform = window.navigator.platform,
        macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
        windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
        iosPlatforms = ['iPhone', 'iPad', 'iPod'],
        os = null;
  
    if (macosPlatforms.indexOf(platform) !== -1) {
      os = 'Mac OS';
    } else if (iosPlatforms.indexOf(platform) !== -1) {
      os = 'iOS';
    } else if (windowsPlatforms.indexOf(platform) !== -1) {
      os = 'Windows';
    } else if (/Android/.test(userAgent)) {
      os = 'Android';
    } else if (!os && /Linux/.test(platform)) {
      os = 'Linux';
    }
  
    return os;
  }
  
  alert(getOS());