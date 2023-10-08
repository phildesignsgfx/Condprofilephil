import "../style/index.css";

/**
 *  EDIT ONLY INSIDE THIS RENDER FUNCTION
 *  This function is called every time the user changes types or changes any input
 *
    {
        includeCover: true, // if includeCover is true the algorithm should show the cover image
        background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da", // this is the image's url that will be used as a background for the profile cover
        avatarURL: "https://randomuser.me/api/portraits/women/42.jpg", // this is the url for the profile avatar
        socialMediaPosition: "right", // social media bar position (left or right)
       
        twitter: null, // social media usernames
        github: null,
        linkedin: null,
        instagram: null,


        name: null,
        lastName: null,
        role: null,
        country: null,
        city: null
    }
 */
function render(variables = {}) {
  console.log("These are the current variables: ", variables); // print on the console
  // here we ask the logical questions to make decisions on how to build the html
  // if includeCover==false then we reset the cover code without the <img> tag to make the cover transparent.
  let cover = `<div class="cover"><img src="${variables.background}" /></div>`;
  if (variables.includeCover == false) cover = "<div class='cover'></div>";
  if (variables.name === null) variables.name = "First Name";
  if (variables.lastName === null) variables.lastName = "Last Name";
  if (variables.role === null) variables.role = "Role";
  if (variables.city === null) variables.city = "City";
  if (variables.country === null) variables.country = "Country";
  if (variables.twitter === null)
    variables.twitter = "https://twitter.com/4GeeksAcademy";
  if (variables.github === null)
    variables.github = "https://github.com/4geeksacademy";
  if (variables.linkedin === null)
    variables.linkedin = "https://www.linkedin.com/school/4geeksacademy/";
  if (variables.instagram === null)
    variables.instagram = "https://instagram.com/4geeksacademy";

  // reset the website body with the new html output
  document.querySelector("#widget_content").innerHTML = `<div class="widget">
                ${cover}
              <img src="${variables.avatarURL}" class="photo" />
              <h1>${variables.name} ${variables.lastName}</h1>
              <h2>${variables.role}</h2>
              <h3>${variables.city}, ${variables.country}</h3>
              <ul class=${variables.socialMediaPosition}>
                <li><a href="${variables.twitter}" target="_blank"><i class="fab fa-twitter"></i></a></li>
                <li><a href="${variables.github}" target="_blank"><i class="fab fa-github"></i></a></li>
                <li><a href="${variables.linkedin}" target="_blank"><i class="fab fa-linkedin"></i></a></li>
                <li><a href="${variables.instagram}" target="_blank"><i class="fab fa-instagram"></i></a></li>
              </ul>
            </div>
        `;
}

/**
 * Don't change any of the lines below, here is where we do the logic for the dropdowns
 */
window.onload = function() {
  window.variables = {
    // if includeCover is true the algorithm should show the cover image
    includeCover: true,
    // this is the image's url that will be used as a background for the profile cover
    background:
      "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
    // this is the url for the profile avatar
    avatarURL: "https://i.pravatar.cc/300",
    // social media bar position (left or right)
    socialMediaPosition: "position-right",
    // social media usernames
    twitter: null,
    github: null,
    linkedin: null,
    instagram: null,
    name: null,
    lastName: null,
    role: null,
    country: null,
    city: null
  };
  render(window.variables); // render the card for the first time

  document.querySelectorAll(".picker").forEach(function(elm) {
    elm.addEventListener("change", function(e) {
      // <- add a listener to every input
      const attribute = e.target.getAttribute("for"); // when any input changes, collect the value
      let values = {};
      values[attribute] =
        this.value == "" || this.value == "null"
          ? null
          : this.value == "true"
          ? true
          : this.value == "false"
          ? false
          : this.value;
      render(Object.assign(window.variables, values)); // render again the card with new values
    });
  });
};
