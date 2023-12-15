$(document).ready(function () {
  // Highlight the current page's link
  var path = window.location.pathname;
  var page = path.split("/").pop();
  $('.nav-links a[href="' + page + '"]').addClass("active");

  $(".menu-icon").click(function () {
    $(".nav-links").toggleClass("active");
  });

  // Image carousel functionality
  var currentIndex = 0;
  var images = $(".image-carousel img");

  function showImage(index) {
    images.hide();
    images.eq(index).show();
  }

  showImage(currentIndex);

  // Auto-advance carousel every 3 seconds
  setInterval(function () {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  }, 3000);

  $(".match-cards .match-card, .previous-match-cards .match-card").click(
    function () {
      $(this).toggleClass("active");
    }
  );

  $(".match-cards").hide();

  // Toggle match card visibility when clicking on category heading
  $(".match-category-heading").click(function () {
    const category = $(this).data("category");
    $(".match-cards").hide();
    $(`.${category}-matches`).show();
    $(".match-category-heading").removeClass("active");
    $(this).addClass("active");
  });

  $(".player-card").click(function () {
    $(".player-card .player-info").hide();
    $(".player-card").css("opacity", "1");

    const playerCard = $(this);
    const playerInfo = playerCard.find(".player-info");
    const otherPlayerCards = $(".player-card").not(playerCard);

    playerCard.css("opacity", "0.8");
    playerInfo.fadeIn();
    otherPlayerCards.find(".player-info").hide();
  });

  $(".player-card").click(function () {
    // Get the player's unique identifier from data attribute
    var playerId = $(this).data("player");

    // Call a function to show player details in the popup
    showPlayerDetails(playerId);
  });

  $(".popup").click(function (event) {
    if (!$(event.target).closest(".popup-content").length) {
      $(".popup").fadeOut();
    }
  });

  function showPlayerDetails(playerId) {
    // Use switch-case to determine player details based on playerId
    switch (playerId) {
      case "ronaldo":
        $("#playerPortrait").attr("src", "./images/ronaldo.jpg");
        $("#playerName").text("Cristiano Ronaldo");
        $("#countryFlag").attr("src", "./images/portugal.png");
        $("#teamLogo").attr("src", "./images/juventus.png");
        $("#playerBio").html(`
                <p><strong>Full Name:</strong> Cristiano Ronaldo dos Santos Aveiro</p>
                <p><strong>Date of Birth:</strong> February 5, 1985</p>
                <p><strong>Nationality:</strong> Portuguese</p>
                <p><strong>Position:</strong> Forward</p>
            `);
        // International Stats
        $("#internationalStats").html(`
        <tr>
            <th>Statistic</th>
            <th>Goals</th>
            <th>Assists</th>
            <th>APS</th>
        </tr>
        <tr>
            <td>International</td>
            <td>120</td>
            <td>60</td>
            <td>180</td>
        </tr>
    `);

        // All-time Stats
        $("#allTimeStats").html(`
        <tr>
            <th>Statistic</th>
            <th>Goals</th>
            <th>Assists</th>
            <th>APS</th>
        </tr>
        <tr>
            <td>All times</td>
            <td>700</td>
            <td>200</td>
            <td>900</td>
        </tr>
    `);
        break;
      case "messi":
        $("#playerPortrait").attr("src", "./images/messi.jpg");
        $("#playerName").text("Lionel Messi");
        $("#countryFlag").attr("src", "./images/argentina.png");
        $("#teamLogo").attr("src", "./images/psg.png");
        $("#playerBio").html(`
              <p><strong>Full Name:</strong> Lionel Andrés Messi</p>
              <p><strong>Date of Birth:</strong> June 24, 1987</p>
              <p><strong>Nationality:</strong> Argentine</p>
              <p><strong>Position:</strong> Forward</p>
          `);
        $("#internationalStats").html(`
          <tr>
              <th>Statistic</th>
              <th>Goals</th>
              <th>Assists</th>
              <th>APS</th>
          </tr>
          <tr>
              <td>International</td>
              <td>76</td>
              <td>42</td>
              <td>118</td>
          </tr>
      `);

        // All-time Stats
        $("#allTimeStats").html(`
          <tr>
              <th>Statistic</th>
              <th>Goals</th>
              <th>Assists</th>
              <th>APS</th>
          </tr>
          <tr>
              <td>All times</td>
              <td>700</td>
              <td>300</td>
              <td>1000</td>
          </tr>
      `);
        break;
      case "neymar":
        $("#playerPortrait").attr("src", "./images/neymar.jpg");
        $("#playerName").text("Neymar Jr");
        $("#countryFlag").attr("src", "./images/brazil.jpg");
        $("#teamLogo").attr("src", "./images/psg.png");
        $("#playerBio").html(`
              <p><strong>Full Name:</strong> Neymar da Silva Santos Júnior</p>
              <p><strong>Date of Birth:</strong> February 5, 1992</p>
              <p><strong>Nationality:</strong> Brazilian</p>
              <p><strong>Position:</strong> Forward</p>
          `);
        $("#internationalStats").html(`
          <tr>
              <th>Statistic</th>
              <th>Goals</th>
              <th>Assists</th>
              <th>APS</th>
          </tr>
          <tr>
              <td>International</td>
              <td>68</td>
              <td>43</td>
              <td>111</td>
          </tr>
      `);

        // All-time Stats
        $("#allTimeStats").html(`
          <tr>
              <th>Statistic</th>
              <th>Goals</th>
              <th>Assists</th>
              <th>APS</th>
          </tr>
          <tr>
              <td>All times</td>
              <td>400</td>
              <td>200</td>
              <td>600</td>
          </tr>
      `);
        break;

      case "lewandowski":
        $("#playerPortrait").attr("src", "./images/robert.jpg");
        $("#playerName").text("Robert Lewandowski");
        $("#countryFlag").attr("src", "./images/poland.png");
        $("#teamLogo").attr("src", "./images/bayern.png");
        $("#playerBio").html(`
              <p><strong>Full Name:</strong> Robert Lewandowski</p>
              <p><strong>Date of Birth:</strong> August 21, 1988</p>
              <p><strong>Nationality:</strong> Polish</p>
              <p><strong>Position:</strong> Forward</p>
          `);
        $("#internationalStats").html(`
          <tr>
              <th>Statistic</th>
              <th>Goals</th>
              <th>Assists</th>
              <th>APS</th>
          </tr>
          <tr>
              <td>International</td>
              <td>71</td>
              <td>22</td>
              <td>93</td>
          </tr>
      `);

        // All-time Stats
        $("#allTimeStats").html(`
          <tr>
              <th>Statistic</th>
              <th>Goals</th>
              <th>Assists</th>
              <th>APS</th>
          </tr>
          <tr>
              <td>All times</td>
              <td>600</td>
              <td>150</td>
              <td>750</td>
          </tr>
      `);
        break;
      case "salah":
        $("#playerPortrait").attr("src", "./images/salah.jpg");
        $("#playerName").text("Mohamed Salah");
        $("#countryFlag").attr("src", "./images/egypt.png");
        $("#teamLogo").attr("src", "./images/liverpool.png");
        $("#playerBio").html(`
              <p><strong>Full Name:</strong> Mohamed Salah Hamed Mahrous Ghaly</p>
              <p><strong>Date of Birth:</strong> June 15, 1992</p>
              <p><strong>Nationality:</strong> Egyptian</p>
              <p><strong>Position:</strong> Forward</p>
          `);
        $("#internationalStats").html(`
          <tr>
              <th>Statistic</th>
              <th>Goals</th>
              <th>Assists</th>
              <th>APS</th>
          </tr>
          <tr>
              <td>International</td>
              <td>45</td>
              <td>32</td>
              <td>77</td>
          </tr>
      `);

        // All-time Stats
        $("#allTimeStats").html(`
          <tr>
              <th>Statistic</th>
              <th>Goals</th>
              <th>Assists</th>
              <th>APS</th>
          </tr>
          <tr>
              <td>All times</td>
              <td>250</td>
              <td>150</td>
              <td>400</td>
          </tr>
      `);
        break;
      case "mbappe":
        $("#playerPortrait").attr("src", "./images/mbappe.jpg");
        $("#playerName").text("Kylian Mbappé");
        $("#countryFlag").attr("src", "./images/france.png");
        $("#teamLogo").attr("src", "./images/psg.png");
        $("#playerBio").html(`
              <p><strong>Full Name:</strong> Kylian Mbappé Lottin</p>
              <p><strong>Date of Birth:</strong> December 20, 1998</p>
              <p><strong>Nationality:</strong> French</p>
              <p><strong>Position:</strong> Forward</p>
          `);
        $("#internationalStats").html(`
          <tr>
              <th>Statistic</th>
              <th>Goals</th>
              <th>Assists</th>
              <th>APS</th>
          </tr>
          <tr>
              <td>International</td>
              <td>23</td>
              <td>8</td>
              <td>31</td>
          </tr>
      `);

        // All-time Stats
        $("#allTimeStats").html(`
          <tr>
              <th>Statistic</th>
              <th>Goals</th>
              <th>Assists</th>
              <th>APS</th>
          </tr>
          <tr>
              <td>All times</td>
              <td>100</td>
              <td>50</td>
              <td>150</td>
          </tr>
      `);
        break;
      case "ramos":
        $("#playerPortrait").attr("src", "./images/sergio.jpg");
        $("#playerName").text("Sergio Ramos");
        $("#countryFlag").attr("src", "./images/spain.png");
        $("#teamLogo").attr("src", "./images/psg.png");
        $("#playerBio").html(`
              <p><strong>Full Name:</strong> Sergio Ramos García</p>
              <p><strong>Date of Birth:</strong> March 30, 1986</p>
              <p><strong>Nationality:</strong> Spanish</p>
              <p><strong>Position:</strong> Defender</p>
          `);
        break;
      case "debruyne":
        $("#playerPortrait").attr("src", "./images/kevin.jpg");
        $("#playerName").text("Kevin De Bruyne");
        $("#countryFlag").attr("src", "./images/belgium.png");
        $("#teamLogo").attr("src", "./images/manchester.png");
        $("#playerBio").html(`
              <p><strong>Full Name:</strong> Kevin De Bruyne</p>
              <p><strong>Date of Birth:</strong> June 28, 1991</p>
              <p><strong>Nationality:</strong> Belgian</p>
              <p><strong>Position:</strong> Midfielder</p>
          `);
        $("#internationalStats").html(`
          <tr>
              <th>Statistic</th>
              <th>Goals</th>
              <th>Assists</th>
              <th>APS</th>
          </tr>
          <tr>
              <td>International</td>
              <td>24</td>
              <td>46</td>
              <td>70</td>
          </tr>
      `);

        // All-time Stats
        $("#allTimeStats").html(`
          <tr>
              <th>Statistic</th>
              <th>Goals</th>
              <th>Assists</th>
              <th>APS</th>
          </tr>
          <tr>
              <td>All times</td>
              <td>70</td>
              <td>120</td>
              <td>190</td>
          </tr>
      `);
        break;
      case "benzema":
        $("#playerPortrait").attr("src", "./images/karim.jpg");
        $("#playerName").text("Karim Benzema");
        $("#countryFlag").attr("src", "./images/france.png");
        $("#teamLogo").attr("src", "./images/madrid.png");
        $("#playerBio").html(`
              <p><strong>Full Name:</strong> Karim Benzema</p>
              <p><strong>Date of Birth:</strong> December 19, 1987</p>
              <p><strong>Nationality:</strong> French</p>
              <p><strong>Position:</strong> Forward</p>
          `);
        $("#internationalStats").html(`
          <tr>
              <th>Statistic</th>
              <th>Goals</th>
              <th>Assists</th>
              <th>APS</th>
          </tr>
          <tr>
              <td>International</td>
              <td>29</td>
              <td>15</td>
              <td>44</td>
          </tr>
      `);

        // All-time Stats
        $("#allTimeStats").html(`
          <tr>
              <th>Statistic</th>
              <th>Goals</th>
              <th>Assists</th>
              <th>APS</th>
          </tr>
          <tr>
              <td>All times</td>
              <td>200</td>
              <td>100</td>
              <td>300</td>
          </tr>
      `);
        break;
      case "kane":
        $("#playerPortrait").attr("src", "./images/harry.jpg");
        $("#playerName").text("Harry Kane");
        $("#countryFlag").attr("src", "./images/england.png");
        $("#teamLogo").attr("src", "./images/tottenham.png");
        $("#playerBio").html(`
              <p><strong>Full Name:</strong> Harry Edward Kane</p>
              <p><strong>Date of Birth:</strong> July 28, 1993</p>
              <p><strong>Nationality:</strong> English</p>
              <p><strong>Position:</strong> Forward</p>
          `);
        $("#internationalStats").html(`
          <tr>
              <th>Statistic</th>
              <th>Goals</th>
              <th>Assists</th>
              <th>APS</th>
          </tr>
          <tr>
              <td>International</td>
              <td>45</td>
              <td>20</td>
              <td>65</td>
          </tr>
      `);

        // All-time Stats
        $("#allTimeStats").html(`
          <tr>
              <th>Statistic</th>
              <th>Goals</th>
              <th>Assists</th>
              <th>APS</th>
          </tr>
          <tr>
              <td>All times</td>
              <td>220</td>
              <td>100</td>
              <td>320</td>
          </tr>
      `);
        break;
      // Add cases for other players with their details

      default:
        // Handle default case
        break;
    }

    $(".popup").fadeIn();
  }
  document.querySelector(".menu-icon").addEventListener("click", function () {
    document.querySelector(".nav-links").classList.toggle("active");
  });

  $("form").submit(function (event) {
    event.preventDefault();
    const formData = new FormData(this);

    // Simulate form submission (Replace with your actual form submission logic)
    console.log("Form submitted with the following data:");
    for (const pair of formData.entries()) {
      console.log(pair[0] + ": " + pair[1]);
    }

    // Clear form fields after submission
    $(this).get(0).reset();
  });

  $(".submit-feedback-btn").click(function () {
    $("#feedbackPopup").css("display", "block");
  });

  $("#closeFeedbackPopup").click(function () {
    $("#feedbackPopup").css("display", "none");
  });

  $("#submitFeedbackBtn").click(function () {
    var feedback = $("#feedbackTextarea").val();
    if (feedback !== "") {
      // You can add your logic to submit the feedback here
      alert("Feedback submitted: " + feedback);
      $("#feedbackPopup").css("display", "none");
      $("#feedbackTextarea").val(""); // Clear the textarea
    } else {
      alert("Please enter your feedback.");
    }
  });

  $(".submit-feedback-btn").click(function () {
    $("#feedbackPopup2").css("display", "block");
  });

  // Close the feedback popup
  $("#closeFeedbackPopup2").click(function () {
    $("#feedbackPopup2").css("display", "none");
  });

  // Submit feedback
  $("#submitFeedbackBtn").click(function () {
    var feedback = $("#feedbackTextarea").val();
    if (feedback !== "") {
      // You can add your logic to submit the feedback here
      alert("Feedback submitted: " + feedback);
      $("#feedbackPopup2").css("display", "none");
      $("#feedbackTextarea").val(""); // Clear the textarea
    } else {
      alert("Please enter your feedback.");
    }
  });
  $.getJSON("Challenge league/at.2.clubs.json", function (data) {
    var play_data = "";
    $.each(data, function (key, value) {
      play_data += "<tr >";
      play_data += "<td >" + value.name + "</td>";
      play_data += "</tr>";
    });
    $("#play_data1").append(play_data);
  });

  $.getJSON("../Challenge league/ch.2.clubs.json", function (data) {
    var play_data = "";
    $.each(data, function (key, value) {
      play_data += "<tr>";
      play_data += "<td >" + value.name + "</td>";
      play_data += "</tr>";
    });
    $("#play_data2").append(play_data);
  });

  $.getJSON("../Challenge league/de.2.clubs.json", function (data) {
    var play_data = "";
    $.each(data, function (key, value) {
      play_data += "<tr>";
      play_data += "<td>" + value.name + "</td>";
      play_data += "</tr>";
    });
    $("#play_data3").append(play_data);
  });

  $.getJSON("../Challenge league/hu.1.clubs.json", function (data) {
    var play_data = "";
    $.each(data, function (key, value) {
      play_data += "<tr>";
      play_data += "<td>" + value.name + "</td>";
      play_data += "</tr>";
    });
    $("#play_data4").append(play_data);
  });
  $("#pre").click(function () {
    $(".upcoming_matches").css({ display: "block" });
    $(".today_matches").css({ display: "none" });
    $(".previous_matches").css({ display: "none" });
  });

  // Button click event handlers
  $("#tod").click(function () {
    tod();
    toggleActiveButton(this);
  });

  $("#pre").click(function () {
    pre();
    toggleActiveButton(this);
  });

  $("#upc").click(function () {
    upc();
    toggleActiveButton(this);
  });

  function toggleActiveButton(button) {
    $(".btn").removeClass("active");
    $(button).addClass("active");
  }

  function tod() {
    $(".today_matches").css({ display: "block" });
    $(".previous_matches").css({ display: "none" });
    $(".upcoming_matches").css({ display: "none" });
  }

  function pre() {
    $(".previous_matches").css({ display: "block" });
    $(".today_matches").css({ display: "none" });
    $(".upcoming_matches").css({ display: "none" });
  }

  function upc() {
    $(".upcoming_matches").css({ display: "block" });
    $(".today_matches").css({ display: "none" });
    $(".previous_matches").css({ display: "none" });
  }
  $(".tournament_identifier").on("change", function () {
    // console.log("some changes occure")
    var categ_list = [];

    $("#tournament :input:checked").each(function () {
      var categ = $(this).val();
      categ_list.push(categ);
      console.log(categ_list);

      if (categ_list.length == 0) {
        $(".match-card-content").fadeIn("slow"); // showing all items when nothing is selected
      } else {
        $(".match-card-content").each(function () {
          var categTag = $(this).attr("data-tag");

          if (jQuery.inArray(categTag, categ_list) > -1) {
            $(this).fadeIn("slow");
          } else {
            $(this).hide();
          }
        });
      }
    });
  });
  $("#td_mt1").click(function () {
        $("#td_mt1_Content").show();
        
    });

    // Close the pop-up when the close button is clicked
    $("#td_mt1_closePopupButton").click(function () {
        $("#td_mt1_Content").hide();

    });

    $("#td_mt2").click(function () {
        $("#td_mt2_Content").show();
        
    });

    // Close the pop-up when the close button is clicked
    $("#td_mt2_closePopupButton").click(function () {
        $("#td_mt2_Content").hide();

    });

    $("#td_mt3").click(function () {
        $("#td_mt3_Content").show();
        
    });

    // Close the pop-up when the close button is clicked
    $("#td_mt3_closePopupButton").click(function () {
        $("#td_mt3_Content").hide();

    });





// UPCOMING

    $("#up_mt1").click(function () {
        $("#up_mt1_Content").show();
        
    });

    // Close the pop-up when the close button is clicked
    $("#up_mt1_closePopupButton").click(function () {
        $("#up_mt1_Content").hide();

    });

    $("#up_mt2").click(function () {
        $("#up_mt2_Content").show();
        
    });

    // Close the pop-up when the close button is clicked
    $("#up_mt2_closePopupButton").click(function () {
        $("#up_mt2_Content").hide();

    });

    $("#up_mt3").click(function () {
        $("#up_mt3_Content").show();
        
    });

    // Close the pop-up when the close button is clicked
    $("#up_mt3_closePopupButton").click(function () {
        $("#up_mt3_Content").hide();

    });



// PREVIOUS

    $("#pr_mt1").click(function () {
        $("#pr_mt1_Content").show();
        
    });

    // Close the pop-up when the close button is clicked
    $("#pr_mt1_closePopupButton").click(function () {
        $("#pr_mt1_Content").hide();

    });

    $("#pr_mt2").click(function () {
        $("#pr_mt2_Content").show();
        
    });

    // Close the pop-up when the close button is clicked
    $("#pr_mt2_closePopupButton").click(function () {
        $("#pr_mt2_Content").hide();

    });

    $("#pr_mt3").click(function () {
        $("#pr_mt3_Content").show();
        
    });

    // Close the pop-up when the close button is clicked
    $("#pr_mt3_closePopupButton").click(function () {
        $("#pr_mt3_Content").hide();

    });
});
