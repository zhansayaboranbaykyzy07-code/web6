
$(document).ready(function () {

    // Task 0: jQuery Setup
    console.log("jQuery is ready!");

    // Task 1: Selectors and CSS
    $("body").css("transition", "background-color 0.3s, color 0.3s");
    $("#headline").css("letter-spacing", "0.5px");

    // Light Mode
    $("#lightMode").on("click", function () {
        $("body").removeClass("dark-mode");
        $("body").addClass("light-mode");
    });

    // Dark Mode
    $("#darkMode").on("click", function () {
        $("body").removeClass("light-mode");
        $("body").addClass("dark-mode");
    });

    // Task 2: Hide, Show and Toggle
    $("#hideStatus").on("click", function () {
        $("#status").hide();
    });

    $("#showStatus").on("click", function () {
        $("#status").show();
    });

    $("#toggleFacts").on("click", function () {
        $("#funFacts").toggle();
    });

    // Task 3: Fade Effects
    $("#fadeIn").on("click", function () {
        $(".gallery-img").stop(true, true).fadeIn(500);
    });

    $("#fadeOut").on("click", function () {
        $(".gallery-img").stop(true, true).fadeOut(500);
    });

    $("#fadeToggle").on("click", function () {
        $(".gallery-img").stop(true, true).fadeToggle(500);
    });

    // Task 4: Slide Effects
    $(".slide-heading").on("click", function () {
        $(this).next(".slide-panel").stop(true, true).slideToggle(400);
    });

    $("#openAll").on("click", function () {
        $(".slide-panel").stop(true, true).slideDown(400);
    });

    $("#closeAll").on("click", function () {
        $(".slide-panel").stop(true, true).slideUp(400);
    });

    // Task 5: Add and Remove Skills
    function addSkill(position) {
        let skill = $("#skillInput").val().trim();

        if (skill === "") {
            alert("Please enter a skill!");
            return;
        }

        let newSkill = $("<li>").text(skill + " ");
        let removeButton = $("<button>")
            .attr("type", "button")
            .addClass("remove-item")
            .text("Remove");

        newSkill.append(removeButton);

        if (position === "prepend") {
            $("#skillsList").prepend(newSkill);
        } else {
            $("#skillsList").append(newSkill);
        }

        $("#skillInput").val("");
    }

    $("#addSkill").on("click", function () {
        addSkill("append");
    });

    $("#prependSkill").on("click", function () {
        addSkill("prepend");
    });

    $("#removeSkill").on("click", function () {
        $("#skillsList li:last").remove();
    });

    $("#skillsList").on("click", ".remove-item", function () {
        $(this).closest("li").remove();
    });

    // Task 6: Changing Attributes
    let githubLink = true;

    $("#changeLink").on("click", function () {
        if (githubLink) {
            $("#socialLink")
                .attr("href", "https://www.linkedin.com/")
                .text("Visit LinkedIn");
        } else {
            $("#socialLink")
                .attr("href", "https://github.com/")
                .text("Visit my GitHub");
        }

        githubLink = !githubLink;
    });

    // Task 7: Form Handling
    $("#nameInput").on("input", function () {
        let name = $(this).val();
        $("#displayName").text(name || "—");
    });

    $("#emailInput").on("input", function () {
        let email = $(this).val();
        $("#displayEmail").text(email || "—");
    });

    // Task 8: Animation
    let animationActive = false;

    $("#animateSkills").on("click", function () {
        if (!animationActive) {
            $(".bar").each(function () {
                let level = $(this).data("level");
                $(this).stop().animate({ width: level + "%" }, 1000);
            });

            animationActive = true;
            $(this).text("Reset Skills");

        } else {
            $(".bar").stop().animate({ width: "0%" }, 1000);

            animationActive = false;
            $(this).text("Animate Skills");
        }
    });

});
