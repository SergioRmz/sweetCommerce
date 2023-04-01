/* $(function(){
    $("#navBarSection").load("/Assets/Components/NavBar/NavBar.html");
    
}); */

const cartButton = document.getElementById("ad");
const feedbackBtn = document.querySelector(".feedback")

const add = () => {
    cartButton.style.display = "none";
    feedbackBtn.style.display = "block";
  };
  cartButton.addEventListener("click", add);

  const feedback = () => {
    cartButton.style.display = "block";
    feedbackBtn.style.display = "none";
  };
  feedbackBtn.addEventListener("click", feedback);