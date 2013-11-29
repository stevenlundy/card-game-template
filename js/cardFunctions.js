function hasClass(element, cls) {
    return(' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
}

function isValidRank(rank) {
    rank = rank.toString();
    var ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    for(var i = 0; i < ranks.length; i++) {
        if(rank === ranks[i]) {
            return true;
        }
    }
    return false;
}

function isValidSuit(suit) {
    var suits = ["C", "D", "H", "S"];
    for(var i = 0; i < suits.length; i++) {
        if(suit === suits[i]) {
            return true;
        }
    }
    return false;
}

function addCard(handId, rank, suit) { // e.g. addCard("hand1","3","H")
    if(isValidRank(rank) && isValidSuit(suit)) {
        var hand = document.getElementById(handId);
        var newCard = document.createElement("div");
        newCard.classList.add("card");
        newCard.classList.add("rank" + rank);
        newCard.classList.add(suit);
        hand.appendChild(newCard);
        return 1;
    } else {
        return -1;
    }
}

function removeCard(handId, rank, suit) {
    var hand = document.getElementById(handId);
    var cards = hand.childNodes;
    for(var i = 1; i < cards.length; i += 2) {
        if(hasClass(cards[i], "rank" + rank) && hasClass(cards[i], suit)) {
            hand.removeChild(cards[i]);
            return 1;
        }
    }
    return -1;
}