$(document).ready(function() {

    $(".button-collapse").sideNav();
  
    $(document).on("click", ".scrapeButton", function() {
  
      $.ajax({
        method: "GET",
        url: "/scrape",
        // success: function() {
        //   window.location.href = "/";
        // }
      }).done(function() {
        console.log("hello");
          window.location.href = "/";
      });
  
    });
  
    $('.modal').modal();
  
  });
  
  // Grab the articles as a json
  $.getJSON("/articles", function(data) {
    if (data.length !== 0) {
      
      for (var i = 0; i < data.length; i++) {
        // Display the apropos information on the page
        $("#articles").append("<div class = 'col s9'>" +
          "<p data-id='" + data[i]._id + "'>" + data[i].title + "<br />" + data[i].link + "</p>" + "</div>" + "<div class = 'col s3'>" + "<button class='save waves-effect waves-light btn blue' id='" + data[i]._id + "'>Save Article</button>" + "</div>");
      }
    } else {
      var noArticles = $("#articles").append("<h3>UH OH! Looks like we don't have any articles.</h3>");
    }
  });
  