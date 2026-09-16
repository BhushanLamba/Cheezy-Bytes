(function () {
  var shareBtn = document.getElementById("share-btn");
  var shareIcon = document.getElementById("share-icon");
  if (!shareBtn || !shareIcon) return;

  var defaultIconHTML = shareIcon.outerHTML;
  var checkIconHTML =
    '<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" ' +
    'stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ' +
    'xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"/></svg>';

  function showCopied() {
    shareBtn.innerHTML = checkIconHTML;
    shareBtn.title = "Link copied!";
    shareBtn.setAttribute("aria-label", "Link copied");
    setTimeout(function () {
      shareBtn.innerHTML = defaultIconHTML;
      shareBtn.title = "Share";
      shareBtn.setAttribute("aria-label", "Share this card");
    }, 2000);
  }

  shareBtn.addEventListener("click", function () {
    var shareData = {
      title: "Cheezy Bytes",
      text: "Cheezy Bytes — Pizza, pasta & fast food done right",
      url: window.location.href,
    };

    if (navigator.share) {
      navigator.share(shareData).catch(function () {
        /* user cancelled the share sheet */
      });
      return;
    }

    if (navigator.clipboard) {
      navigator.clipboard.writeText(shareData.url).then(showCopied).catch(function () {
        /* clipboard unavailable */
      });
    }
  });
})();
