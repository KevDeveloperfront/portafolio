import { projects } from './projects.js';

const CARD_CLASS =
  'bg-slate-900 rounded-xl overflow-hidden shadow-lg border border-gray-800 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-blue-500/50';
const TAG_CLASS =
  'text-blue-400 text-xs font-bold px-2 py-1 bg-blue-900/30 rounded transition-colors duration-300 hover:bg-blue-500 hover:text-white cursor-default';
const IMAGE_CLASS = 'w-full h-48 object-cover';
const BODY_CLASS = 'p-4 flex flex-col flex-1';
const LINK_CLASS =
  'inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors';

function createTag(tag) {
  const span = document.createElement('span');
  span.className = TAG_CLASS;
  span.textContent = tag;
  return span;
}

function createLink(href, label) {
  const anchor = document.createElement('a');
  anchor.href = href;
  anchor.target = '_blank';
  anchor.rel = 'noreferrer noopener';
  anchor.className = LINK_CLASS;
  anchor.textContent = label;
  return anchor;
}

function createCard(project) {
  const card = document.createElement('article');
  card.className = `${CARD_CLASS} flex flex-col`;

  const image = document.createElement('img');
  image.src = project.image;
  image.alt = project.alt;
  image.loading = 'lazy';
  image.className = IMAGE_CLASS;
  card.appendChild(image);

  const body = document.createElement('div');
  body.className = BODY_CLASS;

  const title = document.createElement('h3');
  title.className = 'text-white font-bold text-xl';
  title.textContent = project.title;
  body.appendChild(title);

  const description = document.createElement('p');
  description.className = 'text-gray-400 text-sm mt-2';
  description.textContent = project.description;
  body.appendChild(description);

  const tags = document.createElement('div');
  tags.className = 'flex gap-2 mt-4';
  project.tags.forEach((tag) => tags.appendChild(createTag(tag)));
  body.appendChild(tags);

  if (project.demo || project.repo) {
    const links = document.createElement('div');
    links.className = 'flex gap-5 mt-4 pt-4 border-t border-gray-800';
    if (project.demo) links.appendChild(createLink(project.demo, 'Demo en vivo'));
    if (project.repo) links.appendChild(createLink(project.repo, 'Repositorio'));
    body.appendChild(links);
  }

  card.appendChild(body);
  return card;
}

export function renderProjects(container) {
  if (!container) return;
  const fragment = document.createDocumentFragment();
  projects.forEach((project) => fragment.appendChild(createCard(project)));
  container.replaceChildren(fragment);
}