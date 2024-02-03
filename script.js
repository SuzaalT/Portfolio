function darkmode() {
  const element = document.body;
  element.classList.toggle("dark-mode");
}
function scrollSection(sectionId){
  const section = document.querySelector(sectionId);
  section.scrollSection({behavior: 'smooth'});
}