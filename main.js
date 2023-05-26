let sessionTimeMin = 25;
let sessionTimeSec = 0;
let breakTimeMin = 5;
let breakTimeSec = 0;
let stop = false;

let initialSession = sessionTimeMin;
let initialBreak = breakTimeMin;

function countDownSession() {
    if (!stop) {
        if (sessionTimeMin >= 0) {
            if (sessionTimeSec >= 0) {
                $("#describeTime").text("session")
                $("#displayTime").text(`${sessionTimeMin}:${sessionTimeSec}`);
                $("#displayTime").css("color", "beige");
                $("#describeTime").css("color", "beige");
                
                sessionTimeSec -= 1;
                if (sessionTimeMin < 1) {
                    $("#displayTime").css("color", "red");
                    $("#describeTime").css("color", "red");
                    
                }
                setTimeout(countDownSession, 1000)
            } else if (sessionTimeSec < 0) {
                if (sessionTimeMin == 0) {
                    $("#beep")[0].play();
                }
                sessionTimeSec = 59;
                sessionTimeMin -= 1;
                countDownSession();
            }
        }
        else if (breakTimeMin >= 0) {
            if (breakTimeSec >= 0) {
                $("#describeTime").text("break")
                $("#displayTime").text(`${breakTimeMin}:${breakTimeSec}`);
                $("#displayTime").css("color", "beige");
                $("#describeTime").css("color", "beige");
                
                breakTimeSec -= 1;
                if (breakTimeMin < 1) {
                    $("#displayTime").css("color", "red");
                    $("#describeTime").css("color", "red");
                    
                }
                setTimeout(countDownSession, 1000)
            } else if (breakTimeSec < 0) {
                if (breakTimeMin == 0) {
                    $("#beep")[0].play();
                }
                breakTimeSec = 59;
                breakTimeMin -= 1;
                countDownSession();
            }
        } else if (breakTimeMin < 0 && sessionTimeMin < 0) {
            sessionTimeMin = initialSession;
            breakTimeMin = initialBreak;
            sessionTimeSec = 0;
            breakTimeSec = 0;
            countDownSession();
        }
/*         console.log(sessionTimeMin, sessionTimeSec, breakTimeMin, breakTimeSec, initialSession, initialBreak)
 */    }
}

$("document").ready(function () {
    $("#sessionTime").text(sessionTimeMin);
    $("#breakTime").text(breakTimeMin);
    $("#describeTime").text("Session");
    $("#displayTime").text(`${sessionTimeMin}:00`);
    $("#start").click(function () {
        stop = false;
        countDownSession()
    }
    );
    $("#stop").click(function () {
        stop = true;
    });
    $("#decrease-break").click(function () {
        if (breakTimeMin >= 2) {
            breakTimeMin -= 1;
            initialBreak = breakTimeMin;
            sessionTimeSec = 0;
            breakTimeSec = 0;
            $("#breakTime").text(breakTimeMin);
            /* console.log(initialBreak, initialSession) */
        }
    });
    $("#increase-break").click(function () {
        if (breakTimeMin < 60) {
            breakTimeMin += 1;
            initialBreak = breakTimeMin;
            sessionTimeSec = 0;
            breakTimeSec = 0;
            $("#breakTime").text(breakTimeMin);
            /* console.log(initialBreak, initialSession) */
        }
    });
    $("#decrease-session").click(function () {
        if (sessionTimeMin >= 2) {
            sessionTimeMin -= 1;
            initialSession = sessionTimeMin;
            sessionTimeSec = 0;
            breakTimeSec = 0;
            $("#sessionTime").text(sessionTimeMin);
            /* console.log(initialBreak, initialSession) */
        }
    });
    $("#increase-session").click(function () {
        if (sessionTimeMin < 60) {
            sessionTimeMin += 1;
            initialSession = sessionTimeMin;
            sessionTimeSec = 0;
            breakTimeSec = 0;
            $("#sessionTime").text(sessionTimeMin);
            /* console.log(initialBreak, initialSession) */
        }
    });
    $("#refresh").click(function () {
        sessionTimeMin = 25;
        breakTimeMin = 5;
        initialSession = sessionTimeMin;
        initialBreak = breakTimeMin;
        breakTimeSec = 0;
        sessionTimeSec = 0;
        stop = true;
        $("#sessionTime").text(sessionTimeMin);
        $("#breakTime").text(breakTimeMin);
        $("#describeTime").text("Session");
        $("#displayTime").text(`${sessionTimeMin}:00`);
        $("#displayTime").css("color", "beige");
        $("#describeTime").css("color", "beige");
        /* console.log(initialBreak, initialSession) */
    });
})