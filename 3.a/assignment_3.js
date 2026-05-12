$(document).ready(function() {
    $("#add-movie-form").on("submit", function(event) {
        event.preventDefault();

        let title = $("#title-field").val();
        let rating = $("#rating-field").val();

        if (title === "" || rating === "0") {
            window.alert("Du måste ange både en titel och ett betyg.");
            return;
        }

        let li = $("<li></li>");
        li.attr("data-grade", rating);
        li.attr("data-title", title);
        li.text(title + " ");

        let stars = Number(rating);
        for (let i = 0; i < stars; i++) {
            let starImg = $("<img>").attr("src", "images/star.png").attr("alt", "Star");
            li.append(starImg);
        }

        let deleteImg = $("<img>").attr("src", "images/delete.png").attr("alt", "Delete movie").addClass("delete-movie-icon");
        li.append(deleteImg);

        $("#movies").append(li);

        $(this).trigger("reset");
    });

    $("#movies").on("click", ".delete-movie-icon", function() {
        $(this).parent().remove();
    });
});