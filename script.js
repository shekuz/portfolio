function addRecommendation() {
    // Get the message of the new recommendation
    let recommendation = document.getElementById("new_recommendation");
  
    // If the user has left a recommendation, display a pop-up
    if (recommendation.value != null && recommendation.value.trim() !== "") {
      console.log("New recommendation added");
  
      // Show the popup
      showPopup(true);
  
      // Create a new 'recommendation' element and set its value to the user's message
        let element = document.createElement("div");
        element.setAttribute("class", "recommendation");
        element.innerHTML =
        "<span>&#8220;</span>" +
        recommendation.value +
        "<span>&#8221;</span>";

        // Add this element to the end of the list of recommendations
        document.getElementById("all_recommendations").appendChild(element);

        // Display a friendly confirmation message (not in alert)
        let messageBox = document.getElementById("response_message");
        messageBox.innerText = "Thanks for leaving a recommendation!";
        messageBox.style.visibility = "visible";
  
      // Reset the value of the textarea
      recommendation.value = "";
    }
  }
  
  function showPopup(bool) {
    if (bool) {
      document.getElementById("popup").style.visibility = "visible";
    } else {
      document.getElementById("popup").style.visibility = "hidden";
    }
  }
  