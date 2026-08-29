const fallbackImage = "https://cdn-icons-png.flaticon.com/512/808/808476.png";

const equipesDB = {
    // Bundesliga
    "ELV": { nom: "Elversberg", force: 72, form: ['D','N','D','V','D'], logo: "https://upload.wikimedia.org/wikipedia/en/thumb/2/23/SV_Elversberg_logo.svg/300px-SV_Elversberg_logo.svg.png" },
    "LEV_GER": { nom: "Bayer Leverkusen", force: 90, form: ['V','V','V','N','V'], logo: "https://crests.football-data.org/3.png" },
    "KOE": { nom: "FC Cologne", force: 76, form: ['V','N','D','V','N'], logo: "https://crests.football-data.org/1.png" },
    "HOF": { nom: "Hoffenheim", force: 79, form: ['N','V','V','D','N'], logo: "https://crests.football-data.org/2.png" },
    "MAI": { nom: "Mayence", force: 76, form: ['V','D','V','N','N'], logo: "https://crests.football-data.org/15.png" },
    "PAD": { nom: "Paderborn", force: 73, form: ['D','D','N','D','V'], logo: "https://crests.football-data.org/31.png" },
    "RBL": { nom: "RB Leipzig", force: 85, form: ['V','N','V','D','V'], logo: "https://crests.football-data.org/721.png" },
    "BMG": { nom: "B. Monchengladbach", force: 78, form: ['N','D','V','N','D'], logo: "https://crests.football-data.org/18.png" },
    "UNB": { nom: "Union Berlin", force: 77, form: ['V','D','V','N','V'], logo: "https://crests.football-data.org/28.png" },
    "SGE": { nom: "Eintracht Francfort", force: 80, form: ['V','V','N','V','D'], logo: "https://crests.football-data.org/19.png" },
    "BVB": { nom: "Dortmund", force: 86, form: ['V','N','V','V','D'], logo: "https://crests.football-data.org/4.png" },
    "HSV": { nom: "Hambourg SV", force: 75, form: ['V','D','V','N','V'], logo: "https://crests.football-data.org/10.png" },
    "FRE": { nom: "Fribourg", force: 81, form: ['N','V','D','V','N'], logo: "https://crests.football-data.org/17.png" },
    "WER": { nom: "Werder Brême", force: 78, form: ['D','V','N','V','D'], logo: "https://crests.football-data.org/12.png" },
    "AUG": { nom: "Augsbourg", force: 76, form: ['N','D','V','N','V'], logo: "https://crests.football-data.org/16.png" },
    "S04": { nom: "Schalke 04", force: 75, form: ['V','D','N','D','V'], logo: "https://crests.football-data.org/6.png" },

    // Premier League
    "LIV": { nom: "Liverpool", force: 89, form: ['V','N','V','V','V'], logo: "https://crests.football-data.org/64.png" },
    "NFO": { nom: "Nottingham", force: 76, form: ['D','V','N','D','V'], logo: "https://crests.football-data.org/351.png" },
    "BOU": { nom: "Bournemouth", force: 78, form: ['V','N','V','D','V'], logo: "https://crests.football-data.org/1044.png" },
    "EVE": { nom: "Everton", force: 76, form: ['D','D','V','N','V'], logo: "https://crests.football-data.org/62.png" },
    "COV": { nom: "Coventry", force: 74, form: ['V','D','D','N','V'], logo: "https://crests.football-data.org/71.png" },
    "HUL": { nom: "Hull", force: 75, form: ['N','V','D','V','D'], logo: "https://crests.football-data.org/322.png" },
    "TOT": { nom: "Tottenham", force: 84, form: ['V','V','D','V','N'], logo: "https://crests.football-data.org/73.png" },
    "NEW": { nom: "Newcastle", force: 84, form: ['V','N','V','V','D'], logo: "https://crests.football-data.org/67.png" },
    "CHE": { nom: "Chelsea", force: 83, form: ['N','V','V','D','V'], logo: "https://crests.football-data.org/61.png" },
    "BHA": { nom: "Brighton", force: 80, form: ['V','D','N','V','V'], logo: "https://crests.football-data.org/397.png" },
    "LEE": { nom: "Leeds", force: 77, form: ['V','V','D','N','D'], logo: "https://crests.football-data.org/341.png" },
    "BRE": { nom: "Brentford", force: 78, form: ['D','N','V','V','D'], logo: "https://crests.football-data.org/402.png" },
    "SUN": { nom: "Sunderland", force: 75, form: ['V','D','V','N','V'], logo: "https://crests.football-data.org/74.png" },
    "FUL": { nom: "Fulham", force: 78, form: ['N','V','D','V','N'], logo: "https://crests.football-data.org/63.png" },
    "MUN": { nom: "Manchester Utd", force: 82, form: ['V','V','N','V','D'], logo: "https://crests.football-data.org/66.png" },
    "IPS": { nom: "Ipswich", force: 73, form: ['D','D','N','D','V'], logo: "https://crests.football-data.org/349.png" },

    // La Liga
    "LEV": { nom: "Levante", force: 75, form: ['N','D','V','D','V'], logo: "https://crests.football-data.org/88.png" },
    "BET": { nom: "Betis", force: 81, form: ['V','N','V','V','D'], logo: "https://crests.football-data.org/90.png" },
    "RSO": { nom: "Real Sociedad", force: 83, form: ['V','V','D','N','V'], logo: "https://crests.football-data.org/92.png" },
    "ESP": { nom: "Espanyol", force: 75, form: ['D','V','N','D','N'], logo: "https://crests.football-data.org/80.png" },
    "SEV": { nom: "FC Séville", force: 80, form: ['N','V','D','V','N'], logo: "https://crests.football-data.org/559.png" },
    "ATM": { nom: "Atl. Madrid", force: 88, form: ['V','V','V','N','V'], logo: "https://crests.football-data.org/78.png" },
    "RMA": { nom: "Real Madrid", force: 94, form: ['V','V','V','V','N'], logo: "https://crests.football-data.org/86.png" },
    "MAL": { nom: "Malaga", force: 74, form: ['D','N','D','V','D'], logo: "https://crests.football-data.org/84.png" },
    "COR": { nom: "La Corogne", force: 75, form: ['N','D','V','D','N'], logo: "https://crests.football-data.org/560.png" },
    "VAL": { nom: "Valence", force: 79, form: ['V','D','N','V','V'], logo: "https://crests.football-data.org/95.png" },
    "CEL": { nom: "Celta Vigo", force: 78, form: ['D','V','V','N','D'], logo: "https://crests.football-data.org/558.png" },
    "ATH": { nom: "Ath. Bilbao", force: 84, form: ['V','V','N','V','V'], logo: "https://crests.football-data.org/77.png" },

    // Ligue 1
    "STR": { nom: "Strasbourg", force: 76, form: ['N','V','D','N','V'], logo: "https://crests.football-data.org/576.png" },
    "RCL": { nom: "Lens", force: 79, form: ['V','D','V','N','D'], logo: "https://crests.football-data.org/546.png" },
    "AJA": { nom: "Auxerre", force: 74, form: ['N','D','V','D','N'], logo: "https://crests.football-data.org/526.png" },
    "SCO": { nom: "Angers", force: 73, form: ['D','V','N','D','D'], logo: "https://crests.football-data.org/532.png" },
    "SB29": { nom: "Brest", force: 78, form: ['V','V','D','N','V'], logo: "https://crests.football-data.org/512.png" },
    "TFC": { nom: "Toulouse", force: 76, form: ['N','D','V','N','V'], logo: "https://crests.football-data.org/511.png" },
    "FCL": { nom: "Lorient", force: 75, form: ['V','D','V','N','D'], logo: "https://crests.football-data.org/525.png" },
    "ESTAC": { nom: "Troyes", force: 73, form: ['D','N','D','D','V'], logo: "https://crests.football-data.org/531.png" },
    "OL": { nom: "Lyon", force: 80, form: ['V','V','N','D','V'], logo: "https://crests.football-data.org/523.png" },
    "HAC": { nom: "Le Havre", force: 74, form: ['D','N','D','V','N'], logo: "https://crests.football-data.org/533.png" },
    "PFC": { nom: "Paris FC", force: 74, form: ['N','V','N','D','V'], logo: "https://crests.football-data.org/545.png" },
    "NIC": { nom: "Nice", force: 79, form: ['V','V','D','N','V'], logo: "https://crests.football-data.org/522.png" },
    "REN": { nom: "Rennes", force: 78, form: ['D','N','V','V','D'], logo: "https://crests.football-data.org/529.png" },
    "MFC": { nom: "Le Mans", force: 72, form: ['D','D','N','D','V'], logo: "https://upload.wikimedia.org/wikipedia/en/thumb/6/6c/Le_Mans_FC_logo.svg/150px-Le_Mans_FC_logo.svg.png" },
    "ASM": { nom: "Monaco", force: 82, form: ['V','N','V','V','D'], logo: "https://crests.football-data.org/548.png" },
    "OM": { nom: "Marseille", force: 81, form: ['V','D','V','N','V'], logo: "https://crests.football-data.org/516.png" },

    // Serie A
    "FIO": { nom: "Fiorentina", force: 80, form: ['V','N','V','D','V'], logo: "https://crests.football-data.org/99.png" },
    "FRO": { nom: "Frosinone", force: 75, form: ['D','D','V','N','D'], logo: "https://crests.football-data.org/445.png" },
    "MON": { nom: "Monza", force: 77, form: ['N','V','N','D','V'], logo: "https://crests.football-data.org/5911.png" },
    "UDI": { nom: "Udinese", force: 76, form: ['V','D','N','V','N'], logo: "https://crests.football-data.org/115.png" },
    "SAS": { nom: "Sassuolo", force: 76, form: ['N','V','D','V','N'], logo: "https://crests.football-data.org/471.png" },
    "TOR": { nom: "Torino", force: 78, form: ['V','D','N','V','D'], logo: "https://crests.football-data.org/586.png" },
    "JUV": { nom: "Juventus", force: 86, form: ['V','V','N','V','V'], logo: "https://crests.football-data.org/109.png" },
    "PAR": { nom: "Parme", force: 75, form: ['D','N','V','D','N'], logo: "https://crests.football-data.org/112.png" },
    "NAP": { nom: "Naples", force: 85, form: ['V','V','V','N','V'], logo: "https://crests.football-data.org/113.png" },
    "COM": { nom: "Côme", force: 73, form: ['D','D','V','N','D'], logo: "https://crests.football-data.org/7397.png" },
    "CAG": { nom: "Cagliari", force: 74, form: ['N','V','D','N','V'], logo: "https://crests.football-data.org/104.png" },
    "INT": { nom: "Inter", force: 91, form: ['V','V','V','V','N'], logo: "https://crests.football-data.org/108.png" },
    "LAZ": { nom: "Lazio", force: 81, form: ['N','V','V','D','N'], logo: "https://crests.football-data.org/110.png" },
    "GEN": { nom: "Genoa", force: 77, form: ['V','D','N','V','N'], logo: "https://crests.football-data.org/107.png" }
};

const calendrierMatches = [
    { ligue: "BL1", dateStr: "2026-08-29T14:30:00", dom: "ELV", ext: "LEV_GER" },
    { ligue: "BL1", dateStr: "2026-08-29T14:30:00", dom: "KOE", ext: "HOF" },
    { ligue: "BL1", dateStr: "2026-08-29T14:30:00", dom: "MAI", ext: "PAD" },
    { ligue: "BL1", dateStr: "2026-08-29T14:30:00", dom: "RBL", ext: "BMG" },
    { ligue: "BL1", dateStr: "2026-08-29T14:30:00", dom: "UNB", ext: "SGE" },
    { ligue: "BL1", dateStr: "2026-08-29T17:30:00", dom: "BVB", ext: "HSV" },
    { ligue: "BL1", dateStr: "2026-08-30T14:30:00", dom: "FRE", ext: "WER" },
    { ligue: "BL1", dateStr: "2026-08-30T16:30:00", dom: "AUG", ext: "S04" },

    { ligue: "PL", dateStr: "2026-08-29T12:30:00", dom: "LIV", ext: "NFO" },
    { ligue: "PL", dateStr: "2026-08-29T15:00:00", dom: "BOU", ext: "EVE" },
    { ligue: "PL", dateStr: "2026-08-29T15:00:00", dom: "COV", ext: "HUL" },
    { ligue: "PL", dateStr: "2026-08-29T17:30:00", dom: "TOT", ext: "NEW" },
    { ligue: "PL", dateStr: "2026-08-30T14:00:00", dom: "CHE", ext: "BHA" },
    { ligue: "PL", dateStr: "2026-08-30T14:00:00", dom: "LEE", ext: "BRE" },
    { ligue: "PL", dateStr: "2026-08-30T14:00:00", dom: "SUN", ext: "FUL" },
    { ligue: "PL", dateStr: "2026-08-30T16:30:00", dom: "MUN", ext: "IPS" },

    { ligue: "PD", dateStr: "2026-08-29T16:00:00", dom: "LEV", ext: "BET" },
    { ligue: "PD", dateStr: "2026-08-29T18:00:00", dom: "RSO", ext: "ESP" },
    { ligue: "PD", dateStr: "2026-08-29T20:30:00", dom: "SEV", ext: "ATM" },
    { ligue: "PD", dateStr: "2026-08-30T16:00:00", dom: "RMA", ext: "MAL" },
    { ligue: "PD", dateStr: "2026-08-30T18:30:00", dom: "COR", ext: "VAL" },
    { ligue: "PD", dateStr: "2026-08-30T20:30:00", dom: "CEL", ext: "ATH" },

    { ligue: "FL1", dateStr: "2026-08-29T16:15:00", dom: "STR", ext: "RCL" },
    { ligue: "FL1", dateStr: "2026-08-29T19:45:00", dom: "AJA", ext: "SCO" },
    { ligue: "FL1", dateStr: "2026-08-29T19:45:00", dom: "SB29", ext: "TFC" },
    { ligue: "FL1", dateStr: "2026-08-29T19:45:00", dom: "FCL", ext: "ESTAC" },
    { ligue: "FL1", dateStr: "2026-08-29T19:45:00", dom: "OL", ext: "HAC" },
    { ligue: "FL1", dateStr: "2026-08-30T14:00:00", dom: "PFC", ext: "NIC" },
    { ligue: "FL1", dateStr: "2026-08-30T16:15:00", dom: "REN", ext: "MFC" },
    { ligue: "FL1", dateStr: "2026-08-30T19:45:00", dom: "ASM", ext: "OM" },

    { ligue: "SA", dateStr: "2026-08-29T17:30:00", dom: "FIO", ext: "FRO" },
    { ligue: "SA", dateStr: "2026-08-29T17:30:00", dom: "MON", ext: "UDI" },
    { ligue: "SA", dateStr: "2026-08-29T17:30:00", dom: "SAS", ext: "TOR" },
    { ligue: "SA", dateStr: "2026-08-29T19:45:00", dom: "JUV", ext: "PAR" },
    { ligue: "SA", dateStr: "2026-08-30T17:30:00", dom: "NAP", ext: "COM" },
    { ligue: "SA", dateStr: "2026-08-30T19:45:00", dom: "CAG", ext: "INT" },
    { ligue: "SA", dateStr: "2026-08-30T19:45:00", dom: "LAZ", ext: "GEN" }
];

const themes = {
    'cyber': { p: '#06b6d4', s: '#7c3aed' },
    'madrid': { p: '#fbbf24', s: '#cbd5e1' },
    'arsenal': { p: '#ef4444', s: '#fca5a5' },
    'cash': { p: '#10b981', s: '#14b8a6' }
};

function changerTheme(t) {
    document.documentElement.style.setProperty('--theme-p', themes[t].p);
    document.documentElement.style.setProperty('--theme-s', themes[t].s);
    localStorage.setItem('master_theme', t);
    afficherToast("🎨 Thème mis à jour !");
}

const savedTheme = localStorage.getItem('master_theme');
if(savedTheme && themes[savedTheme]) changerTheme(savedTheme);

let monTicket = JSON.parse(localStorage.getItem('master_ticket')) || [];
let ligueActuelle = '';
let triActuel = 'chrono';

function naviguerVers(viewId) {
    document.getElementById('view-selection').classList.add('hidden');
    document.getElementById('view-dashboard').classList.add('hidden');
    document.getElementById('view-outils').classList.add('hidden');
    document.getElementById(viewId).classList.remove('hidden');
    
    document.getElementById('nav-ligues').classList.toggle('text-theme', viewId === 'view-selection' || viewId === 'view-dashboard');
    document.getElementById('nav-outils').classList.toggle('text-theme', viewId === 'view-outils');
}

function ouvrirDashboard(ligueCode, nomChampionnat) {
    ligueActuelle = ligueCode;
    naviguerVers('view-dashboard');
    document.getElementById('titre-championnat').innerText = nomChampionnat;
    filtrerTri('chrono');
}

function filtrerTri(type) {
    triActuel = type;
    const btnClassA = "flex-1 py-1.5 text-xs font-bold rounded-lg border border-theme text-theme bg-white/5";
    const btnClassIn = "flex-1 py-1.5 text-xs font-bold rounded-lg text-slate-400";
    document.getElementById('btn-tri-chrono').className = type === 'chrono' ? btnClassA : btnClassIn;
    document.getElementById('btn-tri-conf').className = type === 'confiance' ? btnClassA : btnClassIn;
    afficherListeMatchs();
}

function analyserMultiPronos(eq1, eq2) {
    const forceDomAjustee = eq1.force + 3;
    const diffForce = forceDomAjustee - eq2.force;
    
    let butsDom = Math.max(0, Math.round((eq1.force / 90) * 1.5 + (Math.random() * 0.8 - 0.3)));
    let butsExt = Math.max(0, Math.round((eq2.force / 90) * 1.3 + (Math.random() * 0.8 - 0.3)));
    if (diffForce > 8) butsDom += 1; else if (diffForce < -8) butsExt += 1;
    const totalButs = butsDom + butsExt;

    let confiance = Math.min(94, Math.max(60, Math.round(55 + Math.abs(diffForce) * 3.5)));

    let p1X2 = "X"; let cote1X2 = 3.20;
    if (diffForce >= 4) { p1X2 = "1"; cote1X2 = (1 + (15 / diffForce)).toFixed(2); }
    else if (diffForce <= -4) { p1X2 = "2"; cote1X2 = (1 + (15 / Math.abs(diffForce))).toFixed(2); }

    let dc = diffForce >= 0 ? "1X" : "X2";
    let dcCote = (Math.max(1.10, cote1X2 / 1.4)).toFixed(2);
    let mt = diffForce > 7 ? "1" : (diffForce < -7 ? "2" : "X");
    let mtCote = mt === "X" ? "2.10" : "2.40";
    let ou15 = totalButs >= 2 ? "+1.5" : "-1.5";
    let ou15Cote = totalButs >= 2 ? "1.25" : "3.00";
    let ou25 = totalButs >= 3 ? "+2.5" : "-2.5";
    let ou25Cote = totalButs >= 3 ? "1.85" : "1.75";
    let btts = (butsDom > 0 && butsExt > 0) ? "Oui" : "Non";
    let bttsCote = btts === "Oui" ? "1.75" : "1.90";
    let firstScore = diffForce >= 0 ? "Domicile" : "Extérieur";
    if (totalButs === 0) firstScore = "Aucun";
    let fsCote = firstScore === "Aucun" ? "8.00" : "1.60";
    let hcap = diffForce > 6 ? "1 (-1)" : (diffForce < -6 ? "2 (-1)" : "Neutre");
    let hcapCote = hcap !== "Neutre" ? "2.30" : "1.80";

    let rapportIA = `L'algorithme MasterScore AI a modélisé l'impact offensif de ${eq1.nom} face au bloc de ${eq2.nom}. `;
    if(diffForce > 5) rapportIA += `${eq1.nom} dispose d'un avantage statistique net à domicile et devrait imposer son rythme. `;
    else if(diffForce < -5) rapportIA += `Malgré le déplacement, ${eq2.nom} présente des métriques supérieures et part favori. `;
    else rapportIA += `L'équilibre tactique est serré, une issue indécise est attendue avec une probabilité élevée de match fermé. `;
    
    if(totalButs >= 3) rapportIA += `Le modèle projette un volume d'occasions supérieur à la moyenne.`;
    else rapportIA += `Les indices d'efficacité défensive indiquent un score serré.`;

    return { scoreExact: `${butsDom} - ${butsExt}`, confiance, p1X2, cote1X2, dc, dcCote, mt, mtCote, ou15, ou15Cote, ou25, ou25Cote, btts, bttsCote, firstScore, fsCote, hcap, hcapCote, rapportIA };
}

function genererFormBadges(formArray) {
    if (!formArray) return '';
    return formArray.map(res => {
        let bg = res === 'V' ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' : (res === 'N' ? 'bg-amber-500/20 text-amber-400 border-amber-500/30' : 'bg-rose-500/20 text-rose-400 border-rose-500/30');
        return `<span class="w-5 h-5 text-[10px] font-black rounded flex items-center justify-center border ${bg}">${res}</span>`;
    }).join('');
}

function afficherListeMatchs() {
    const container = document.getElementById('predictions-container');
    container.innerHTML = ''; 

    let matchs = calendrierMatches.filter(m => m.ligue === ligueActuelle);
    matchs.sort((a, b) => {
        if (triActuel === 'confiance') {
            const confA = analyserMultiPronos(equipesDB[a.dom]||{force:80}, equipesDB[a.ext]||{force:80}).confiance;
            const confB = analyserMultiPronos(equipesDB[b.dom]||{force:80}, equipesDB[b.ext]||{force:80}).confiance;
            return confB - confA;
        }
        return new Date(a.dateStr) - new Date(b.dateStr);
    });

    matchs.forEach(match => {
        const eq1 = equipesDB[match.dom] || { nom: match.dom, logo: fallbackImage };
        const eq2 = equipesDB[match.ext] || { nom: match.ext, logo: fallbackImage };
        const dateObj = new Date(match.dateStr);
        const dt = dateObj.toLocaleDateString('fr-FR', { weekday:'short', day:'2-digit', month:'short' }) + ' ' + dateObj.toLocaleTimeString('fr-FR', { hour:'2-digit', minute:'2-digit' });

        container.innerHTML += `
            <div onclick="ouvrirModalMatch('${match.dom}', '${match.ext}', '${dt}')" class="bg-[#111827] border border-white/5 rounded-2xl p-4 shadow-md active:bg-white/5 transition-colors cursor-pointer">
                <div class="text-[10px] text-theme font-bold uppercase mb-2 text-center">${dt}</div>
                <div class="flex items-center justify-between">
                    <div class="flex flex-col items-center w-5/12 gap-1">
                        <img src="${eq1.logo}" class="team-logo" onerror="this.src='${fallbackImage}';">
                        <span class="text-xs font-bold text-center leading-tight truncate w-full">${eq1.nom}</span>
                    </div>
                    <div class="w-2/12 flex flex-col items-center">
                        <span class="text-[10px] text-slate-500 font-black bg-white/5 px-2 py-0.5 rounded">VS</span>
                    </div>
                    <div class="flex flex-col items-center w-5/12 gap-1">
                        <img src="${eq2.logo}" class="team-logo" onerror="this.src='${fallbackImage}';">
                        <span class="text-xs font-bold text-center leading-tight truncate w-full">${eq2.nom}</span>
                    </div>
                </div>
            </div>
        `;
    });
}

function ouvrirModalMatch(domCode, extCode, dtStr) {
    const eq1 = equipesDB[domCode] || { nom: domCode, force: 80, form: ['N','N','N'], logo: fallbackImage };
    const eq2 = equipesDB[extCode] || { nom: extCode, force: 80, form: ['N','N','N'], logo: fallbackImage };
    const an = analyserMultiPronos(eq1, eq2);
    const matchName = `${eq1.nom} - ${eq2.nom}`;

    document.getElementById('modal-match-content').innerHTML = `
        <div class="text-center mb-4">
            <div class="text-[10px] text-theme font-bold uppercase">${dtStr}</div>
            <div class="flex items-center justify-center gap-4 mt-3">
                <div class="flex flex-col items-center">
                    <img src="${eq1.logo}" class="team-logo-lg mb-2" onerror="this.src='${fallbackImage}';">
                    <div class="flex gap-1">${genererFormBadges(eq1.form)}</div>
                </div>
                <div class="text-xl font-black text-slate-500">VS</div>
                <div class="flex flex-col items-center">
                    <img src="${eq2.logo}" class="team-logo-lg mb-2" onerror="this.src='${fallbackImage}';">
                    <div class="flex gap-1">${genererFormBadges(eq2.form)}</div>
                </div>
            </div>
            <div class="mt-4 flex justify-center"><span class="bg-emerald-500/10 text-emerald-400 text-[10px] px-3 py-1.5 rounded-full border border-emerald-500/20 font-bold">Indice Confiance : ${an.confiance}%</span></div>
        </div>

        <div class="bg-theme bg-opacity-10 border border-theme border-opacity-30 rounded-2xl p-4 mb-5">
            <div class="flex items-center gap-2 mb-2 text-theme font-bold text-xs uppercase">
                <span>🤖</span> Analyse MasterScore AI
            </div>
            <p class="text-xs text-slate-300 leading-relaxed italic">"${an.rapportIA}"</p>
            <div class="mt-3 font-black text-sm text-center">Score Projeté : <span class="text-rose-400">${an.scoreExact}</span></div>
        </div>

        <div class="space-y-4">
            <div>
                <h4 class="text-xs font-bold text-slate-400 mb-2 border-b border-white/5 pb-1">🏆 Marché Principal</h4>
                <div class="grid grid-cols-2 gap-2">
                    ${creerBoutonPari(matchName, "1X2: " + an.p1X2, an.cote1X2)}
                    ${creerBoutonPari(matchName, "Double Chance: " + an.dc, an.dcCote)}
                    ${creerBoutonPari(matchName, "Mi-Temps: " + an.mt, an.mtCote)}
                </div>
            </div>
            <div>
                <h4 class="text-xs font-bold text-slate-400 mb-2 border-b border-white/5 pb-1">⚽ Buts (Over/Under)</h4>
                <div class="grid grid-cols-2 gap-2">
                    ${creerBoutonPari(matchName, "Total: " + an.ou15, an.ou15Cote)}
                    ${creerBoutonPari(matchName, "Total: " + an.ou25, an.ou25Cote)}
                    ${creerBoutonPari(matchName, "Les 2 marquent: " + an.btts, an.bttsCote)}
                </div>
            </div>
            <div>
                <h4 class="text-xs font-bold text-slate-400 mb-2 border-b border-white/5 pb-1">🎲 Spéciaux & Handicap</h4>
                <div class="grid grid-cols-2 gap-2">
                    ${creerBoutonPari(matchName, "1er But: " + an.firstScore, an.fsCote)}
                    ${an.hcap !== 'Neutre' ? creerBoutonPari(matchName, "Handicap: " + an.hcap, an.hcapCote) : ''}
                </div>
            </div>
        </div>
    `;

    document.getElementById('overlay-match').classList.remove('hidden');
    setTimeout(() => {
        document.getElementById('overlay-match').classList.remove('opacity-0');
        document.getElementById('bottom-sheet-match').classList.add('open');
    }, 10);
}

function fermerModalMatch() {
    document.getElementById('bottom-sheet-match').classList.remove('open');
    document.getElementById('overlay-match').classList.add('opacity-0');
    setTimeout(() => document.getElementById('overlay-match').classList.add('hidden'), 300);
}

function creerBoutonPari(match, selection, cote) {
    return `
        <button onclick="ajouterAuTicket('${match}', '${selection}', ${cote})" class="prono-btn bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-2.5 flex justify-between items-center w-full text-left">
            <span class="text-[10px] font-bold text-slate-300 w-2/3 truncate pr-1">${selection}</span>
            <span class="text-xs font-black text-theme w-1/3 text-right">${cote}</span>
        </button>
    `;
}

function ajouterAuTicket(match, selection, cote) {
    if (!monTicket.find(i => i.match === match && i.selection === selection)) {
        monTicket.push({ match, selection, cote });
        localStorage.setItem('master_ticket', JSON.stringify(monTicket));
        verifierTicketUI();
        afficherToast("✨ Ajouté au combiné !");
        fermerModalMatch();
    } else {
        afficherToast("⚠️ Déjà ajouté !");
    }
}

function verifierTicketUI() {
    const badge = document.getElementById('ticket-badge');
    badge.innerText = monTicket.length;
    if (monTicket.length > 0) badge.classList.remove('hidden'); else badge.classList.add('hidden');
    rafraichirModalTicket();
}

function toggleModalTicket() {
    const modal = document.getElementById('modal-ticket');
    if (modal.classList.contains('hidden')) {
        modal.classList.remove('hidden');
        setTimeout(() => modal.classList.remove('translate-y-full'), 10);
    } else {
        modal.classList.add('translate-y-full');
        setTimeout(() => modal.classList.add('hidden'), 300);
    }
}

function rafraichirModalTicket() {
    const container = document.getElementById('ticket-items');
    const coteGlobalEl = document.getElementById('ticket-cote');
    const gainsEl = document.getElementById('ticket-gains');
    const vipCoteEl = document.getElementById('vip-cote');
    const miseInput = parseFloat(document.getElementById('input-mise').value) || 0;
    
    container.innerHTML = '';

    if (monTicket.length === 0) {
        container.innerHTML = `<div class="text-center text-slate-500 py-10 text-sm">Votre ticket est vide.</div>`;
        coteGlobalEl.innerText = "1.00"; gainsEl.innerText = "0.00 €"; vipCoteEl.innerText = "1.00";
        return;
    }

    let coteTotale = 1;
    monTicket.forEach((item, index) => {
        coteTotale *= item.cote;
        container.innerHTML += `
            <div class="bg-[#111827] p-3 rounded-xl flex justify-between items-center border border-white/5" data-html2canvas-ignore="false">
                <div class="w-10/12">
                    <div class="text-[10px] text-slate-400 truncate">${item.match}</div>
                    <div class="text-xs font-bold text-white mt-0.5">${item.selection} <span class="text-theme">@${item.cote}</span></div>
                </div>
                <button onclick="supprimerDuTicket(${index})" class="text-red-400 p-2 text-lg hide-on-export">×</button>
            </div>
        `;
    });
    const cStr = coteTotale.toFixed(2);
    coteGlobalEl.innerText = cStr;
    vipCoteEl.innerText = cStr;
    gainsEl.innerText = (coteTotale * miseInput).toFixed(2) + " €";
}

function supprimerDuTicket(index) {
    monTicket.splice(index, 1);
    localStorage.setItem('master_ticket', JSON.stringify(monTicket));
    verifierTicketUI();
}

function viderTicket() { monTicket = []; localStorage.removeItem('master_ticket'); verifierTicketUI(); }

function afficherToast(msg) {
    const t = document.getElementById('toast');
    document.getElementById('toast-msg').innerText = msg;
    t.classList.remove('opacity-0', 'translate-y-[-20px]');
    setTimeout(() => t.classList.add('opacity-0', 'translate-y-[-20px]'), 2000);
}

function partagerTicketWhatsapp() {
    if(monTicket.length === 0) return;
    let coteTotale = monTicket.reduce((acc, item) => acc * item.cote, 1).toFixed(2);
    let mise = document.getElementById('input-mise').value;
    let gains = (coteTotale * mise).toFixed(2);
    let texte = `🤖 *MasterScore AI - Mon Combiné* 🎟️\n\n`;
    monTicket.forEach(i => texte += `⚽ ${i.match}\n👉 ${i.selection} (@${i.cote})\n\n`);
    texte += `📊 Cote Totale : ${coteTotale}\n💰 Mise : ${mise} €\n🏆 Gains : ${gains} €\n🔥 Validé par MasterScore AI !`;
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(texte)}`, '_blank');
}

function exporterTicketImage() {
    if(monTicket.length === 0) { afficherToast('⚠️ Ticket vide !'); return; }
    
    afficherToast('📸 Génération du ticket VIP...');
    
    const area = document.getElementById('ticket-export-area');
    const watermark = document.getElementById('vip-watermark');
    const summary = document.getElementById('vip-summary');
    
    watermark.classList.remove('hidden');
    summary.classList.remove('hidden');
    const deleteBtns = area.querySelectorAll('.hide-on-export');
    deleteBtns.forEach(btn => btn.style.display = 'none');

    html2canvas(area, { backgroundColor: '#0b1120', scale: 2, useCORS: true }).then(canvas => {
        watermark.classList.add('hidden');
        summary.classList.add('hidden');
        deleteBtns.forEach(btn => btn.style.display = 'block');

        const link = document.createElement('a');
        link.download = 'MasterScore_VIP.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
        afficherToast('✅ Ticket VIP enregistré !');
    }).catch(err => {
        console.error(err);
        afficherToast('❌ Erreur lors de la capture.');
        watermark.classList.add('hidden');
        summary.classList.add('hidden');
        deleteBtns.forEach(btn => btn.style.display = 'block');
    });
}

let montanteCapital = parseFloat(localStorage.getItem('master_m_cap')) || 10;
let montantePalier = parseInt(localStorage.getItem('master_m_pal')) || 1;

function updateMontanteUI() {
    document.getElementById('montante-capital').innerText = montanteCapital.toFixed(2) + " €";
    document.getElementById('montante-palier').innerText = montantePalier;
}

function validerPalier() {
    const coteInput = document.getElementById('montante-cote');
    const cote = parseFloat(coteInput.value);
    
    if (isNaN(cote) || cote <= 1) {
        afficherToast('⚠️ Entrez une cote valide (> 1.00)');
        return;
    }

    montanteCapital = montanteCapital * cote;
    montantePalier += 1;
    
    localStorage.setItem('master_m_cap', montanteCapital);
    localStorage.setItem('master_m_pal', montantePalier);
    
    coteInput.value = '';
    updateMontanteUI();
    afficherToast(`✅ Palier validé ! Capital: ${montanteCapital.toFixed(2)}€`);
}

function reinitialiserMontante() {
    montanteCapital = 10;
    montantePalier = 1;
    localStorage.setItem('master_m_cap', montanteCapital);
    localStorage.setItem('master_m_pal', montantePalier);
    updateMontanteUI();
    afficherToast("🔄 Challenge réinitialisé !");
}

verifierTicketUI();
updateMontanteUI();
