import './style.css';
import { setupMenu } from './js/menu.js';
import { initAnimations } from './js/animations.js';
import { initParticles } from './js/particles-config.js';
import { renderProjects } from './js/gallery.js';

// Ejecutamos las funciones al cargar la página
document.addEventListener('DOMContentLoaded', () => {
  setupMenu();
  initAnimations();
  initParticles();
  renderProjects(document.getElementById('projects-grid'));

  console.log('🚀 Portafolio cargado y modularizado');
});