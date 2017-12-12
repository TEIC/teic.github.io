var slogans = [
  {
    "en": "Increase the TEI-C Membership +1: Join Now!",
    "de": "Steigern Sie die TEI-C-Mitgliedschaft +1: Jetzt Mitglied werden!",
    "es": "Aumente la Membresía de TEI-C +1: ¡Únase ahora!",
    "fr": "Augmentez l'adhésion TEI-C +1: Inscrivez-vous maintenant!",
    "ja": "TEI-C会員増強+1：今すぐ参加！"
  },
  {
    "en": "Join the constellation of TEI Superstars: Become a Member Now!",
    "de": "Trete der Konstellation von TEI Superstars bei: Werde jetzt Mitglied!",
    "es": "Únase a la constelación de superestrellas de TEI: ¡Conviértase en miembro ahora!",
    "fr": "Rejoignez la constellation de Superstars TEI: Devenez membre maintenant!",
    "ja": "TEI Superstarsの星座に参加しよう！メンバーになる！"
  },
  {
    "en": "Keep the TEI working: Participate Today!",
    "de": "Halten Sie die TEI am Laufen: Machen Sie heute mit!",
    "es": "Mantenga el TEI funcionando: ¡Participe hoy!",
    "fr": "Gardez le TEI en activité: Participez aujourd'hui!",
    "ja": "TEIの作業を続けましょう：今すぐ参加してください！"
  },
  {
    "en": "Where in the World is TEI Happening? Mark Your Spot!",
    "de": "Wo in der Welt ist TEI passiert? Markiere deinen Platz!",
    "es": "¿En qué parte del mundo está sucediendo TEI? Marque su lugar!",
    "fr": "Où se passe TEI dans le monde? Marquez votre place!",
    "ja": "世界でTEIが起こっている場所はどこですか？ あなたの場所をマークしてください！"
  },
  {
    "en": "Open source, open access is not free: Support the TEI-C!",
    "de": "Open Source, Open Access ist nicht kostenlos: Unterstützen Sie die TEI-C!",
    "es": "Código abierto, el acceso abierto no es gratuito: ¡Admite el TEI-C!",
    "fr": "Open source, l'accès libre n'est pas gratuit: Soutenez le TEI-C!",
    "ja": "オープンソース、オープンアクセスは無料ではありません：TEI-Cをサポートしてください！"
  }
];

var choice = Math.floor(Math.random() * slogans.length);
var language = window.navigator.language?window.navigator.language:"en-US";
language = language.substring(0,2);
var slogan = slogans[choice][language];
if (!slogan) {
  slogan = slogans[choice]["en"];
}

var showCampaign = function () {
  var banner = document.createElement("div");
  banner.setAttribute("style", "font-size:1.8em; background:#CDEEFE; border-bottom:thin solid black; margin:0px; padding: 10px; text-align:center; width:100%");
  banner.innerHTML = "<style type=\"text/css\">\
    a#campaignlink {text-decoration:none; color: black;} \
    a#campaignlink:hover {text-decoration:underline;}\
  </style>" +
    "<a id=\"campaignlink\" href=\"http://members.tei-c.org/Join\">" + slogan + "</a>";
  document.querySelector("#container").insertAdjacentElement('afterBegin', banner);
};

window.onload = showCampaign;
