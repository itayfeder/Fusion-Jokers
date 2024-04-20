let jokers = [
  {
    name: "Diamond Bard",
    text: [
      "Played cards with {C:diamonds}Diamond{} suit give {C:money}$1{}, as well as {C:mult}+4{} Mult for every {C:money}$20{} you have when scored"
    ],
    image_url: "img/j_diamond_bard.png",
    rarity: "Fusion",
    fusion_jokers: [
      "img/j_greedy_joker.png",
      "img/j_rough_gem.png"
    ]
  },
  {
    name: "Heart Paladin",
    text: [
      "Played cards with {C:hearts}Heart{} suit give {X:mult,C:white}X1.5{} Mult when scored. {C:green}1 in 3{} chance to re-trigger"
    ],
    image_url: "img/j_heart_paladin.png",
    rarity: "Fusion",
    fusion_jokers: [
      "img/j_lusty_joker.png",
      "img/j_bloodstone.png"
    ]
  },
  {
    name: "Spade Archer",
    text: [
      "Played cards with {C:spades}Spade{} suit give {C:chips}+50{} Chips when scored. Gains {C:chips}+10{} chips when 5 {C:spades}Spades{} are played"
    ],
    image_url: "img/j_spade_archer.png",
    rarity: "Fusion",
    fusion_jokers: [
      "img/j_wrathful_joker.png",
      "img/j_arrowhead.png"
    ]
  },
  {
    name: "Club Wizard",
    text: [
      "Played cards with {C:clubs}Club{} suit give {C:mult}+24{} Mult when scored"
    ],
    image_url: "img/j_club_wizard.png",
    rarity: "Fusion",
    fusion_jokers: [
      "img/j_gluttenous_joker.png",
      "img/j_onyx_agate.png"
    ]
  },
  {
    name: "Big Bang",
    text: [
      "{X:mult,C:white} X0.1{} Mult per the number of times {C:attention}poker hand{} has been played plus the level of the {C:attention}poker hand{}"
    ],
    image_url: "img/j_big_bang.png",
    rarity: "Fusion",
    fusion_jokers: [
      "img/j_supernova.png",
      "img/j_constellation.png"
    ]
  },
  {
    name: "Dynamic Duo",
    text: [
      "Played {C:attention}number{} cards give {C:mult}+4{} Mult and {C:chips}+30{} Chips when scored"
    ],
    image_url: "img/j_dynamic_duo.png",
    rarity: "Fusion",
    fusion_jokers: [
      "img/j_even_steven.png",
      "img/j_odd_todd.png"
    ]
  },
  {
    name: "Collectible Chaos Card",
    text: [
      "{C:mult}+2{} Mult per {C:attention}reroll{} in the shop. {C:attention}1{} free {C:green}Reroll{} per shop"
    ],
    image_url: "img/j_collectible_chaos_card.png",
    rarity: "Fusion",
    fusion_jokers: [
      "img/j_chaos.png",
      "img/j_flash.png"
    ]
  },
  {
    name: "Flip-Flop",
    text: [
      "{C:attention}+2{} hand size. {C:red}+8{} Mult. {C:attention}Flips{} after each blind. ({C:red}+2{} discard. {C:chips}+50{} Chips)"
    ],
    image_url: "img/j_flip_flop.png",
    rarity: "Fusion",
    fusion_jokers: [
      "img/j_juggler.png",
      "img/j_drunkard.png"
    ]
  },
  {
    name: "Royal Decree",
    text: [
      "Played {C:attention}face{} cards give {C:money}$2{} when scored. Each {C:attention}face{} card held in hand at end of round gives {C:money}$2{}"
    ],
    image_url: "img/j_royal_decree.png",
    rarity: "Fusion",
    fusion_jokers: [
      "img/j_business.png",
      "img/j_reserved_parking.png"
    ]
  },
  {
    name: "Dementia Joker",
    text: [
      "{C:mult}+3{} Mult for each {C:attention}Joker{} card. {C:green}1 in 3{} chance to {C:attention}clone{} if not {C:dark_edition}Negative{} after you beat a blind"
    ],
    image_url: "img/j_dementia_joker.png",
    rarity: "Fusion",
    fusion_jokers: [
      "img/j_abstract.png",
      "img/j_riff_raff.png"
    ]
  },
  {
    name: "Golden Egg",
    text: [
      "Gains {C:money}$4{} of {C:attention}sell value{} at end of round. Earn {C:money}$4{} at end of round"
    ],
    image_url: "img/j_golden_egg.png",
    rarity: "Fusion",
    fusion_jokers: [
      "img/j_egg.png",
      "img/j_golden.png"
    ]
  },
  {
    name: "Flag Bearer",
    text: [
      "{C:mult}+1{} Mult per hand played, {C:mult}-1{} Mult per discard. Mult is multiplied by remaining {C:attention}discards{}"
    ],
    image_url: "img/j_flag_bearer.png",
    rarity: "Fusion",
    fusion_jokers: [
      "img/j_banner.png",
      "img/j_green_joker.png"
    ]
  },
  {
    name: "Uncanny Face",
    text: [
      "Played {C:attention}face{} cards give {C:chips}+15{} Chips and {C:mult}+2{} Mult for every {C:attention}face{} card in the scoring hand"
    ],
    image_url: "img/j_uncanny_face.png",
    rarity: "Fusion",
    fusion_jokers: [
      "img/j_scary_face.png",
      "img/j_smiley.png"
    ]
  },
  {
    name: "Commercial Driver",
    text: [
      "{X:mult,C:white} X0.25{} Mult per consecutive hand played with a scoring {C:attention}enhanced{} card"
    ],
    image_url: "img/j_commercial_driver.png",
    rarity: "Fusion",
    fusion_jokers: [
      "img/j_ride_the_bus.png",
      "img/j_drivers_license.png"
    ]
  },
  {
    name: "Camping Trip",
    text: [
      "Played {C:attention}cards{} permanently gains {C:chips}+5{} Chips when scored ({C:chips}+10{} on the final hand). Your final hand triggers twice"
    ],
    image_url: "img/j_camping_trip.png",
    rarity: "Fusion",
    fusion_jokers: [
      "img/j_hiker.png",
      "img/j_dusk.png"
    ]
  }
]

// works the same. 
let consumables = [
  // {
  //   name: "Joker",
  //   text: [
  //     "{C:mult}+4{} Mult"
  //   ],
  //   image_url: "img/j_joker.png",
  //   rarity: "Tarot"
  // },
]

let card_modifications = [
  // {
  //   name: "Joker",
  //   text: [
  //     "{C:mult}+4{} Mult"
  //   ],
  //   image_url: "img/j_joker.png",
  //   rarity: "Enhancement"
  // },
]

let decks = [
  // {
  //   name: "Joker",
  //   text: [
  //     "{C:mult}+4{} Mult"
  //   ],
  //   image_url: "img/j_joker.png",
  //   rarity: "Deck"
  // },
]

let stickers = [
  // {
  //   name: "Joker",
  //   text: [
  //     "{C:mult}+4{} Mult"
  //   ],
  //   image_url: "img/sticker_example.png",
  //   rarity: "Sticker"
  // },
]

let blinds = [
  // {
  //   name: "The Wall",
  //   text: [
  //     "Extra large blind",
  //     "{C:inactive}({C:red}4x{C:inactive} Base for {C:attention}$$$$${C:inactive})",
  //     "{C:inactive}(Appears from Ante 2)"
  //   ],
  //   image_url: "img/the_wall.png",
  //   rarity: "Boss Blind"
  // },
]

let shop_items = [
]

let cols = {
  
  MULT: "#FE5F55",
  CHIPS: "#009dff",
  MONEY: "#f3b958",
  XMULT: "#FE5F55",
  FILTER: "#ff9a00",
  ATTENTION: "#ff9a00",
  BLUE: "#009dff",
  RED: "#FE5F55",
  GREEN: "#4BC292",
  PALE_GREEN: "#56a887",
  ORANGE: "#fda200",
  IMPORTANT: "#ff9a00",
  GOLD: "#eac058",
  YELLOW: "#ffff00",
  CLEAR: "#00000000", 
  WHITE: "#ffffff",
  PURPLE: "#8867a5",
  BLACK: "#374244",
  L_BLACK: "#4f6367",
  GREY: "#5f7377",
  CHANCE: "#4BC292",
  JOKER_GREY: "#bfc7d5",
  VOUCHER: "#cb724c",
  BOOSTER: "#646eb7",
  EDITION: "#ffffff",
  DARK_EDITION: "#5d5dff",
  ETERNAL: "#c75985",
  INACTIVE: "#ffffff99",
  HEARTS: "#f03464",
  DIAMONDS: "#f06b3f",
  SPADES: "#403995",
  CLUBS: "#235955",
  ENHANCED: "#8389DD",
  JOKER: "#708b91",
  TAROT: "#a782d1",
  PLANET: "#13afce",
  SPECTRAL: "#4584fa",
  VOUCHER: "#fd682b",
  EDITION: "#4ca893",
}

let rarities = {
  "Common": "#009dff", 
  "Uncommon": "#4BC292",
  "Rare": "#fe5f55",
  "Legendary": "#b26cbb",
  "Joker": "#708b91",
  "Tarot": "#a782d1",
  "Planet": "#13afce",
  "Spectral": "#4584fa",
  "Voucher": "#fd682b",
  "Pack": "#9bb6bd",
  "Enhancement": "#8389DD",
  "Edition": "#4ca893",
  "Seal": "#4584fa",
  "Deck": "#9bb6bd",
  "Sticker": "#5d5dff",
  "Boss Blind": "#5d5dff",
  "Showdown": "#4584fa",
  "Fusion": "#F7D762"
}

regex = /{([^}]+)}/g;

let add_cards_to_div = (jokers, jokers_div) => {
  for (let joker of jokers) {
    console.log("adding joker", joker.name);
  
    joker.text = joker.text.map((line) => { return line + "{}"});
  
    joker.text = joker.text.join("<br/>");
    joker.text = joker.text.replaceAll("{}", "</span>");
    joker.text = joker.text.replace(regex, function replacer(match, p1, offset, string, groups) {
      let classes = p1.split(",");
  
      let css_styling = "";
  
      for (let i = 0; i < classes.length; i++) {
        let parts = classes[i].split(":");
        if (parts[0] === "C") {
          css_styling += `color: ${cols[parts[1].toUpperCase()]};`;
        } else if (parts[0] === "X") {
          css_styling += `background-color: ${cols[parts[1].toUpperCase()]}; border-radius: 5px; padding: 0 5px;`;
        }
      }
  
      return `</span><span style='${css_styling}'>`;
    });
  
    let joker_div = document.createElement("div");
    joker_div.classList.add("joker");
    if (joker.rarity === "Sticker" || joker.rarity == "Seal") {
      joker_div.innerHTML = `
        <h3>${joker.name}</h3>
        <img src="${joker.image_url}" alt="${joker.name}" class="hasback" />
        <h4 class="rarity" style="background-color: ${rarities[joker.rarity]}">${joker.rarity}</h4>
        <div class="text">${joker.text}</div>
      `;
    } else if (joker.soul) {
      joker_div.innerHTML = `
        <h3>${joker.name}</h3>
        <span class="soulholder">
          <img src="${joker.image_url}" alt="${joker.name}" class="soul-bg" />
          <img src="${joker.image_url}" alt="${joker.name}" class="soul-top" />
        </span>
        <h4 class="rarity" style="background-color: ${rarities[joker.rarity]}">${joker.rarity}</h4>
        <div class="text">${joker.text}</div>
      `;
    } else {
      joker_div.innerHTML = `
        <h3>${joker.name}</h3>
        <img src="${joker.image_url}" alt="${joker.name}" />
        <h4 class="rarity" style="background-color: ${rarities[joker.rarity]}">${joker.rarity}</h4>
        <div class="text">${joker.text}</div>
      `;
    }

    if (joker.fusion_jokers) {
      let fusion_div = document.createElement("div");
      fusion_div.innerHTML = `
      <table>
        <tr>
        <td><img src="${joker.fusion_jokers[0]}" alt="${joker.name}" style="width: 100%; height: 100%"/></td>
        <td><h1 style="padding-right: 20px; padding-left: 20px">+</h1></td>
        <td><img src="${joker.fusion_jokers[1]}" alt="${joker.name}" style="width: 100%; height: 100%"/></td>
        </tr>
      </table>
      `
      joker_div.innerHTML += `
      <button type="button" class="collapsible">Show Fusion</button>`

      fusion_div.classList.add("content");
      joker_div.appendChild(fusion_div);
    }
  
    jokers_div.appendChild(joker_div);
  }
}

if (jokers.length === 0) {
  document.querySelector(".jokersfull").style.display = "none"
} else {
  let jokers_div = document.querySelector(".jokers");
  add_cards_to_div(jokers, jokers_div);
}

if (consumables.length === 0) {
  document.querySelector(".consumablesfull").style.display = "none"
} else {
  let consumables_div = document.querySelector(".consumables");
  add_cards_to_div(consumables, consumables_div);
}

if (card_modifications.length === 0) {
  document.querySelector(".cardmodsfull").style.display = "none"
} else {
  let cardmods_div = document.querySelector(".cardmods");
  add_cards_to_div(card_modifications, cardmods_div);
}

if (decks.length === 0) {
  document.querySelector(".decksfull").style.display = "none"
} else {
  let decks_div = document.querySelector(".decks");
  add_cards_to_div(decks, decks_div);
}

if (stickers.length === 0) {
  document.querySelector(".stickersfull").style.display = "none"
} else {
  let stickers_div = document.querySelector(".stickers");
  add_cards_to_div(stickers, stickers_div);
}

if (blinds.length === 0) {
  document.querySelector(".blindsfull").style.display = "none"
} else {
  let blinds_div = document.querySelector(".blinds");
  add_cards_to_div(blinds, blinds_div);
}

if (shop_items.length === 0) {
  document.querySelector(".shopitemsfull").style.display = "none"
} else {
  let shopitems_div = document.querySelector(".shopitems");
  add_cards_to_div(shop_items, shopitems_div);
}

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      this.innerHTML = "Show Fusion"
      content.style.maxHeight = null;
    } else {
      this.innerHTML = "Hide Fusion"
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}