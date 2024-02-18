import React from 'react';
import listIcon from '../assets/illustrations/list.svg'
import thumbnails from '../assets/illustrations/thumbnails.svg'

function displayList() {
  let illustrationsContainers = document.querySelectorAll(".Illustration-container")
  let main = document.getElementById("main");
  let items = document.querySelectorAll(".projectCard-item");

  main.classList.add("d-flex");

  illustrationsContainers.forEach(item => {
    item.classList.add("percent30");
  });

  items.forEach(item => {
    item.classList.add("d-flex", "vw100");
  });
}

function displayThumbnails() {
  let illustrationsContainers = document.querySelectorAll(".Illustration-container")
  let main = document.getElementById("main");
  let items = document.querySelectorAll(".projectCard-item");

  main.classList.remove("d-flex");

  illustrationsContainers.forEach(item => {
    item.classList.remove("percent30");
  });

  items.forEach(item => {
    item.classList.remove("d-flex", "vw100");
    item.classList.add("vw25");
  });
}

function DisplaySetup() {
  return (
    <section id="displaySetup">
      <button onClick={displayList}><img src={listIcon} style={{width: "50px"}}></img></button>
      <button onClick={displayThumbnails}><img src={thumbnails} style={{width: "50px"}}></img></button>
    </section>
  );
}

export default DisplaySetup;
