var loadoutsList = {
    primary: ['870 CQB', 'ARN-18', 'ARWC', 'B1301', 'Entryman', 'MK1 Carbine', 'Beanbag Shotgun', 'G36C', 'GA416', 'M4 Super 90', 'M32A1 Flash', 'MK18', 'MP5 10mm', 'MP5A2', 'MP5A3', 'MP7', 'MP9', 'MPX', 'P90', 'SA-58', 'MK16', 'SLR47', 'SPC', 'SR-16', 'UMP-45', 'R7'],
    pistol: ['.357 Magnum', 'P92X', '57USG', 'G19', 'M45A1', 'M11 Compact', 'PC19', 'Taser', 'USP45'],
    longTactical: ['Mirror Gun', 'Breaching Shotgun', 'Ballistic Shield', 'Rescue Shield', 'Battering Ram', 'M320 Flash', 'M320 Stinger', 'M320 Gas'],
    bodyArmor: ['Anti-Stab Vest', 'Light Armor', 'Heavy Armor'],
    armorType: ['Kevlar', 'Ceramic', 'Steel'],
    ammoType: ['JHP (Buckshot)', 'AP (Slug)'],
    grenade: ['Flashbang', 'CS Gas', 'Stinger'],
    deployable: ['C2 Explosive', 'Door Wedge', 'Lockpick Gun', 'Pepper Spray'],
    headwear: ['None', 'NVG', 'CBRN Mask', 'Anti-Flash Goggles', 'Ballistic Face Mask']
}

function randomFromLength(length){
    return Math.floor(Math.random() * length)
}

function randomLoadout(){
    let selectedElement, slot
    for (let key in loadoutsList){
        selectedElement = loadoutsList[key][randomFromLength(loadoutsList[key].length)]
        slot = document.getElementById(key)
        slot.innerHTML = selectedElement
    }
}

var button = document.getElementById('random')

button.addEventListener('click', randomLoadout)