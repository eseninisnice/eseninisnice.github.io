function rand_int(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function rand_element(array) {
    return array[rand_int(0, array.length - 1)];
}

function toggle_sidepanel(id) {
    let sidepanel = document.getElementById(id);

    if (sidepanel.style.left == "-25%" || !sidepanel.style.left) {
        sidepanel.style.left = "0%";
    } else if (sidepanel.style.left == "0%") {
        sidepanel.style.left = "-25%";
    }

    event.preventDefault(); // prevent redirect to an empty url (example.com/#)
}

let n_offset = 0;

function notify(text, type, time = 3500) {
    let notification = document.createElement("div");
    notification.innerHTML = text;
    document.body.append(notification);

    notification.classList.add("notification");
    
    if (type === "positive") {
        notification.classList.add("notification-positive");
    } else if (type === "negative") {
        notification.classList.add("notification-negative");
    }

    $(notification).animate({ 'top': n_offset }, 0);
    n_offset += $(notification).height() + 32;

    setTimeout(() => {
        n_offset -= $(notification).height() + 32;
        notification.remove();
    }, time);
}

function copy(content) {
    navigator.clipboard.writeText(content);
    activate_notification("notification_copied");
    return false; // to prevent the context menu from being opened
}

function redirect(url) {
    $("body").fadeOut(300, function() {
        window.location = url; 
    });
}

function lerp(start, end, t) {
    return start * (1 - t) + end * t;
}

$(document).ready(function() {
    $('body').fadeIn(300);

    $("a").click(function(e) {
        if ($(this).attr("class").includes("ignore_transition")) {
            return;
        }

        e.preventDefault();

        $link = $(this).attr("href");

        $("body").fadeOut(300, function() {
            window.location = $link; 
        });

        return false;
    });
});

window.addEventListener('unload', function(){});
window.addEventListener('beforeunload', function(){});
