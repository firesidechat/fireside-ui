function changePowerTotal(tpg, id, status, amt) {
    if (status) {
        tpg += amt;
        alert("Generator #" + id + " is now on, adding 62 MW, for a total of " + tpg + " MW!");
    } else {
        tpg -= amt;
        alert("Generator #" + id + " is now on, adding 62 MW, for a total of " + tpg + " MW!");
    }

    return tpg
}
/**
function warningMaker(obstacle) {
  var count = 0;
  return function(number, location) {
    count++;
    alert("Beware! There have been " + obstacle +
          " sightings in the Cove today!\n" +
          number + " have been spotted at the " +
          location + "!\n" +
          "This is alert #" + count + " today for " + obstacle + " danger."
    );
  };
}
*/

function warningMaker(obstacle) {
    var count = 0;
    var zones = [];
    return function(number, location) {
        count++;
        var list = "";
        // push an array with location and number
        zones.push([location, number]);
        for (var i = 0; i < zones.length; i++) {
            // replace location and number with appropriate code
            list += zones[i][0] + " (" + zones[i][1] + ")" + "\n";
        }
        alert("Beware! There have been " + obstacle +
            " sightings in the Cove today!\n" +
            number + " have been spotted at the " +
            location + "!\n" +
            "This is alert #" + count +
            " today for " + obstacle + " danger.\n" +
            "Current danger zones are:\n" +
            list);
    };


}


function makeTargetAssigner(sharks, targets) {
    return function(shark) {
        for (var i = 0; i < sharks.length; i++) {
            if (sharks[i] == shark) {
                alert("Hey, " + shark + "!\n" +
                    "There've been " + targets[i] + " sightings in our area!\nTime to take care of business!");
            }
        }
    };
}

var getTargetFor = makeTargetAssigner(listOfSharks,
    listOfTargets);
getTargetFor("Ice Teeth");


function capacityStatus(numPassengers, capacity) {
    if (numPassengers == capacity) {
        return function() {
            alert("Ain't no mo seats.");
            return false;
        }
    } else {
        return function() {
            var seatsleft = capacity - numPassengers;
            alert("Get in this bitch! We have " + seatsleft + " seats left.");
            return true;
        }
    }
}

for (var i = 1; i < 4; i++) {
    var ("vehicle" + i) = {

    }
}

var vehicle1 = {
    "type" = "Motorboat",
    "capacity" = 1,
    "storedAt" = "Ammunition Depot"
}

var vehicle2 = {
    "type" = "Motorboat",
    "capacity" = 1,
    "storedAt" = "Ammunition Depot"
}

var vehicle3 = {
    "type" = "Motorboat",
    "capacity" = 1,
    "storedAt" = "Ammunition Depot"
}

//javascript class work
var superBlinders = [
    ["Firestorm", 4000],
    ["Solar Death Ray", 6000],
    ["Supernova", 12000]
];

var lighthouseRock = {
    gateClosed: true,
    weaponBulbs: superBlinders,
    capacity: 30,
    secretPassageTo: "Underwater Outpost",
    numRangers: 3,
    ranger1: { name: "Nick Walsh", skillz: "magnification burn", station: 2 },
    ranger2: { name: "Drew Barontini", skillz: "uppercut launch", station: 3 },
    ranger3: { name: "Christine Wong", skillz: "bomb defusing", station: 1 },
    addRanger: function(name, skillz, station) {
        this.numRangers++;
        this["ranger" + this.numRangers] = {
            this.name: name,
            this.skillz: skillz,
            this.station: station
        }
    }

};

// create addBulb function property here
lighthouseRock.addBulb = function(name, wattage) {
    var blinder = [name, wattage];
    lighthouseRock.weaponBulbs.push(blinder);
};

//javascript class/enumeration examples
function Fencepost(x, y, postNum) {
    this.x = x;
    this.y = y;
    this.postNum = postNum;
    this.connectionsTo = [];
    this.sendRopeTo = function(connectedPost) {
        this.connectionsTo.push(connectedPost);
    };
};

Fencepost.prototype.toString = function() {
    var result = "Fence post #" + this.postNum + "\n";
    result += "Connected to posts:\n";
    for (var postIndex = 0; postIndex < this.connectionsTo.length; postIndex++) {
        result += ("" + this.connectionsTo[postIndex].postNum + "\n");
    }
    result += "Distance from ranch: " + this.valueOf() + " yards";
    return result;
};

//Click and mouse hover listenining examples with jquery
function showTicket() {
    var ticket = $(this).closest('.confirmation').find('ticket');
    ticket.slideToggle();
};

$(document).ready(function() {
    $('.confirmation').on('click', 'button', showTicket);
    $('.confirmation').on('mouseenter', 'h3', showTicket);
});

//keyboard listeners
$(document).ready(function() {
    $('.vacation').on('keyup', '.quantity', function() {
        //convert input to js number value
        var price = +$(this).closest('.vacation').data('price');
        var quantity = +$(this).val();
        $('#total').text(quantity * price);
    });
});

//fade & prevent jumpiness with event handler
$(document).ready(function(e) {
    $('.vacation').on('click', '.expand', function() {
        $(this).closest('.vacation')
            .find('.comments')
            .fadeToggle();
    });
    //e.stopPropagation();
    e.preventDefault();
});

//f with the css
$(document).ready(function(e) {
    $('.vacations').on('clicked', '.vacation', function(e) {
        /*$(this).css({
          'backgroundColor':'honeydew',
          'borderColor':'maroon'
        });
        $(this).find('price')
          .show();*/
        $(this).toggleClass('highlighted')
            .toggleClass('price');
    });
});

$(document).ready(function() {
    var el = $("#tour");
    el.on("click", "button", function() {
        $.ajax('/photos.html', {
            data: { location: el.data('location') },
            success: function(response) {
                $('.photos').html(response).fadeIn();
            },
            error: function() {
                $('.photos').html('<li>Well this sucks</li>');
            },
            timeout: 3000,
            beforeSend: function() {
                $('#tour').addClass('is-fetching');
            },
            complete: function() {
                $('#tour').removeClass('is-fetching');
            }
        });
    });
});

$(document).ready(function() {
    $('#tour').on('click', 'button', function() {
            $.get('/photos.html', function(response) {
                    $('.photos').html(response)
                        .fadeIn();
                }
            });
    });
});

function Tour(el) {
    this.el = el;
    this.photo = this.el.find($('#tour'));
    var tour = this;
    this.showPhotos = function() {
        $.ajax('/photos.html', {
            data: { location: el.data('location') },
            success: function(response) {
                this.photo.html(response).fadeIn();
            },
            context: tour,
            error: function() {
                this.photo.html('<li>Well this sucks</li>');
            },
            timeout: 3000,
            beforeSend: function() {
                this.addClass('is-fetching');
            },
            complete: function() {
                this.removeClass('is-fetching');
            }
        });
    }
    this.el.on("click", "button", this.showPhotos);
}

function dopeForm(formname) {
    this.name = formname;
    var form = this;
    this.submitForm = function(event) {
        event.preventDefault();
        $.ajax('book', {
            type: 'POST',
            /*data: {
              destination: form.find('#destination').val();
              quantity: form.find('#quantity').val();
            }*/
            data: form.serialize(),
            dataType: 'json',
            contentType: 'application/json'
            success: function(result) {
                form.remove();
                var msg = '<p></p>'
                msg.append("The Destination is" + result['destination'] + ". ");
                msg.append("The Quantity is" + result['quantity'] + ". ");
                msg.append("The Total Price is" + result['price'] + ".");
                vacation.hide().html(msg).fadeIn();
            }
        });
    }
    $('form').on('submit', this.submitForm);
}

//form and ajax example, using actions and display results from json response
$(document).ready(function() {
    $('form').on('submit', function(event) {
        event.preventDefault();
        $.ajax($('form').attr('action'), {
            type: $('form').attr('method'),
            data: $('form').serialize(),
            dataType: 'json',
            success: function(response) {
                $('.tour').html('<p></p>')
                    .find('p')
                    .append('Trip to ' + response.description)
                    .append(' at $' + response.price)
                    .append(' for ' + response.nights + ' nights')
                    .append('. Confirmation: ' + response.confirmation);
            }
        });
    });
});

$('.update-status').on('click', 'button', function {
    $.getJSON('/getit', function(response) {
        var statuses = $.map(response, function(status, item) {
            var msg = $("<li></li>");
            msg.append("<h3>" + status['name'] + "</h3>");
            msg.append("<p>" + status['status'] + "</p>");
            return msg;
        });
        //detach, update, reappend to increases efficiency
        //assumes status-list is inside an encapsulating div with class .status
        $('.status-list').detach()
            .html(statuses)
            .appendTo('status');
    });
});

//ES2015 Shit - object initializer w shorthand declaration and template literals
function groupStuff(myStuff, yourStuff) {
    let ourstuff = `${mystuff}, ${yourstuff}`;
    return { myStuff, yourStuff, ourStuff };
}

function spinner(target, options = {}) {
    let defaults = {
        message: "Please wait",
        spinningSpeed: 5,
        cssClass: ".is-spinning"
    };

    let settings = Object.assign({}, defaults, options);

    console.log(`Message: ${settings.message}`);
    console.log(`spinningSpeed: ${settings.spinningSpeed}`);
    console.log(`cssClass: ${settings.cssClass}`);
}

spinner(targetElement, {
    cssClass: ".is-fast-spinning",
    spinningSpeed: 8
});

//outputss
Message: Please wait
spinningSpeed: 8
cssClass: .is - fast - spinning

//array example with rest and deconstructuring AND template literals all jumbled
function buildTopicInfo(topic) {
    let title = `<h1>${topic.title}</h1>`;
    let author = `<small>${topic.author}<small>`;

    return [title, author];
}

let topic = getCurrentTopic();
let [topicTitle, topicAuthor] = buildTopicInfo(topic);

//sample
let recentTopics = [{
    title: "Semi-colons: Good or Bad?",
    isLocked: true
}, {
    title: "New JavaScript Framework Released",
    isLocked: true
}, {
    title: "ES2015 - The Shape of JavaScript to Come",
    isLocked: false
}];

/* //finds first unlocked topic:

recentTopics.find((topic) => !topic.isLocked);
*/

//classes and inheritance... ES2015 me hace calor
class ShoppingCart {
    constructor(userId) {
        this.userId = userId;
        this.products = [];
    }

    addProducts(product) {
        this.products.push(product);
    }

    calculate() {
        //... complex math
    }
}


class ForumShoppingCart extends ShoppingCart {
    constructor(userId) {
        super(userId);
    }

    calculate() {
        let partialCost = // call parent class `calculate` method here
            return partialCost - _calculateDiscount();
    }

    _calculateDiscount() {
        //... complex math
    }
}

//promises examples with es2015 chaining and arrow function
getReplies(1)
    .then(function(replies) {
        return replies.filter(reply => !reply.isAbuse);
    })
    .then(function(filteredReplies) {
        console.log(filteredReplies);
    })
    .catch((error) => console.log(error));

//generic object iterable, since they don't have one by default
let obj = {
    firstkey: "whatup",
    secondkey: "heyo",
    thirdkey: "i got hte keys, keys, keys"
}

//iterable and generative function example
obj[Symbol.iterable] = function() {
    let keys = Object.keys(this);

    let count = 0;
    let isDone = false;

    let next = () => {
        if (count >= keys.length) {
            isDone = true;
        }
        return {
            value: keys[count++], //apparently this counts up after reading
            done: isDone
        };
    }

    return { next };
}

//now the generative version... apparently this just... works?
obj[Symbol.iterable] = function() {
    let keys = Object.keys(this);
    for (let key of keys) {
        yield this[key];
    }
}
