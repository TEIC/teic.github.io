var slogans = {
  "en": [
    "Increase the TEI-C Membership +1: Join Now!",
    "Join the constellation of TEI Superstars: Become a Member Now!",
    "Keep the TEI working: Participate Today!",
    "Where in the World is TEI Happening? Mark Your Spot!",
    "Open source, open access is not free: Support the TEI-C!"
  ],
  "fr": [
    "Ajoutez votre voix au concert de la TEI: devenez-en membre !",
    "Rejoignez la constellation des étoiles de la TEI: souscrivez maintenant !",
    "Contribuez au travail de la TEI en devenant membre !",
    "Montrez que la TEI est présente chez vous aussi. Participez !",
    "Aidez la TEI à rester libre et ouverte. Participez !",
    "Un membre de plus du consortium TEI : vous !",
    "Pour que la TEI continue : participez maintenant !"
  ],
  "ja": [
    "TEI協会のメンバーが1人増えることがデジタル時代の人文学の将来につながります。ぜひご参加を！",
    "TEIのスーパースター達の集まりに参加しましょう。ぜひメンバーに！",
    "デジタル時代の人文学のためにTEIに参加しましょう！",
    "TEIは世界のどこで活動しているでしょうか？あなたが参加すれば、そこもTEIの拠点になります！",
    "オープンソース、オープンアクセス、オープンデータは無料では成り立ちません。TEI協会を支援しましょう！"
  ],
  "es-US": [
    "Aumenta los miembros del TEI-C +1: Únete ahora",
    "Únete a la constelación de superestrellas: ¡Hazte miembro ahora!",
    "Mantengamos al TEI funcionando: ¡Participa hoy!",
    "¿Dónde en el mundo está TEI ocurriendo? ¡Marca tu lugar!",
    "Código abierto y acceso abierto nunca son gratis. ¡Apoye al TEI-C!"
  ],
  "es-ES": [
    "Haz crecer la comunidad TEI-C +1: apúntate ya",
    "Únete a la constelación de superestrellas TEI: hazte miembro",
    "Mantén en marcha a TEI: participa hoy mismo",
    "¿En qué sitios del mundo está ocurriendo TEI? ¡Marca en dónde estás tú!",
    "El código libre y el acceso abierto no son gratis. ¡Apoya al TEI-C!"
  ],
  "pl": [
    "Podbij statystyki TEI-C: dołącz już dziś!",
    "Zostań nową gwiazdą w konstelacji TEI: dołącz już dziś!",
    "Niech TEI nie przestaje działać: dołącz i Ty.",
    "Gdzie na świecie używa się TEI? Zaznacz swoje miejsce!",
    "Open source i open access nie są za darmo: wesprzyj TEI-C!"
  ],
  "de": [
    "Legen wir eins drauf: TEI-C Mitgliedschaft +1",
    "Werde Teil der TEI Superstars: Jetzt Mitgliedschaft beantragen!",
    "Unterstütze die Arbeit der TEI: als Mitglied!",
    "Mache die TEI noch weltumspannender: Jetzt Mitgliedschaft beantragen!",
    "Erhalten wir die freie Zugänglichkeit der TEI: Jetzt Mitgliedschaft beantragen!",
    "Wo in aller Welt wird die TEI angewendet? Zeige Deine Beteiligung!",
    "Open Source und Open Access sind nicht umsonst: werde Mitglied der TEI!"
  ],
  "ro": [
    "Deveniți membri ai grupului TEI: aplicați acum!",
    "Vrei să fii o stea TEI? Poți deveni membru astăzi!",
    "Contribuie şi tu la activitățile TEI: participă astăzi!",
    "Unde se desfăşoară activități TEI în lume? Inscrie-te pe hartă!",
    "Sursele libere pe internet, open access, nu apar prin minune: contribuie la TEI-C!"
  ],
  "ca": [
    "Feu crèixer la comunitat TEI-C +1: apunteu-vos-hi ja",
    "Uniu-vos a la constel·lacó de superestrelles TEI: feu-vos-en membre!",
    "Manteniu en marxa el TEI: participeu avui mateix!",
    "En quins llocs del món ocorre TEI? Marca on ets tu!",
    "La font lliure, l'accés lliure, no són gratis. Doneu suport a TEI-C!"
  ],
  "pt-PT": [
    "Faz crescer a comunicade TEI-C +1: Inscreve-te já!",
    "Junta-te à constelação TEI Superstars: Torna-te membro agora!",
    "Mantém o TEI em marcha: Participa hoje!",
    "Onde está a funcionar o TEI no mundo? Marca o teu local!",
    "O código livre e o acesso aberto não são gratuitos: Apoia o TEI-C!"
  ]
};

var language = window.navigator.language?window.navigator.language:"en-US";
language = language.substring(0,5);
if (!slogans[language]) {
  language = language.substring(0,2);
}
if (!slogans[language]) {
  language = "fr";
}
var choice = Math.floor(Math.random() * slogans[language].length);
var slogan = slogans[language][choice];


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
