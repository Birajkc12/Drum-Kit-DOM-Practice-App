const numberOfDrumButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfDrumButtons; i++) {
  const handleClick = () => {
    alert("I got Clicked");
  };
  document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
}
