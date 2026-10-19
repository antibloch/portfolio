'use strict';
const sheets=['about','projects','career','skills','publications','contact'];
const titles={about:'The engineer behind the system',projects:'Project index',career:'Research meets industry',skills:'Capabilities & tools',publications:'Published research',contact:'Let’s build what’s next.'};
const names={about:'About',projects:'Projects',career:'Experience',skills:'Capabilities',publications:'Publications',contact:'Contact'};
const $=s=>document.querySelector(s), esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const safeUrl=s=>/^https?:\/\//i.test(s)?esc(s):'#';
const external=(url,label)=>`<a href="${safeUrl(url)}" target="_blank" rel="noopener noreferrer">${esc(label)} ↗</a>`;
const chips=a=>a.map(x=>`<span class="chip">${esc(x)}</span>`).join('');
const dialog=$('#sheet');let active=0,filter='all',query='';
$('#navigation').innerHTML=sheets.map((s,i)=>`<button data-sheet="${s}"><span>0${i+1}</span>${names[s].toUpperCase()}</button>`).join('');

// Small original vector scenes turn the category index into a visual field guide.
const categoryArt={
 all:`<circle cx="80" cy="52" r="36"/><ellipse cx="80" cy="52" rx="54" ry="17" transform="rotate(-30 80 52)"/><ellipse cx="80" cy="52" rx="54" ry="17" transform="rotate(30 80 52)"/><circle class="art-solid" cx="80" cy="52" r="12"/><circle class="art-dot" cx="37" cy="27" r="5"/><circle class="art-dot" cx="123" cy="77" r="5"/>`,
 privacy:`<path class="art-fill" d="M80 12 112 24v28c0 21-32 37-32 37S48 73 48 52V24Z"/><path d="M68 46v-9a12 12 0 0 1 24 0v9"/><rect class="art-solid" x="63" y="46" width="34" height="25" rx="6"/><path class="art-cut" d="M80 54v9"/><path d="M23 35h14m86 0h14M20 57h16m88 0h16M29 78h16m70 0h16"/>`,
 radar:`<circle cx="80" cy="52" r="37"/><circle cx="80" cy="52" r="25"/><circle cx="80" cy="52" r="12"/><path class="art-fill" d="M80 52V15a37 37 0 0 1 32 55Z"/><path d="M80 52 106 26M36 52h88M80 8v88"/><circle class="art-dot" cx="97" cy="35" r="4"/><path class="art-bright" d="m10 76 25 0 6-9 7 18 7-34 9 25h29"/>`,
 cv:`<path class="art-fill" d="M24 52S45 22 80 22s56 30 56 30-21 30-56 30S24 52 24 52Z"/><circle cx="80" cy="52" r="21"/><circle class="art-solid" cx="80" cy="52" r="10"/><path class="art-bright" d="M37 28V15h16m54 0h16v13M37 77v13h16m54 0h16V77"/><circle class="art-dot" cx="87" cy="45" r="3"/>`,
 nlp:`<rect class="art-fill" x="32" y="25" width="96" height="58" rx="20"/><path d="M80 25V12m-10 0h20M22 45v20m116-20v20"/><circle class="art-solid" cx="62" cy="51" r="8"/><circle class="art-solid" cx="98" cy="51" r="8"/><path class="art-bright" d="M62 69h36"/><path d="m42 90-10 7m86-7 10 7"/>`,
 brain:`<path class="art-fill" d="M76 23C60 9 46 23 47 35c-19 3-22 24-10 34-3 20 22 28 39 14Zm8 0c16-14 30 0 29 12 19 3 22 24 10 34 3 20-22 28-39 14Z"/><path d="m57 35 10 8-8 13 11 12m-28-8 17-4m44-21-10 8 8 13-11 12m28-8-17-4"/><circle class="art-dot" cx="59" cy="56" r="4"/><circle class="art-dot" cx="101" cy="56" r="4"/>`,
 misc:`<path d="M22 82h116M28 18v64"/><path class="art-bright" d="m28 65 14-4 10 10 13-42 12 46 13-24 12 10 18-22 16 5"/><circle class="art-solid" cx="65" cy="29" r="5"/><circle class="art-dot" cx="120" cy="39" r="5"/><path d="M43 20v6m-3-3h6m66 51v6m-3-3h6"/>`,
 apps:`<rect class="art-fill" x="23" y="17" width="98" height="65" rx="8"/><path d="M23 32h98"/><circle class="art-dot" cx="32" cy="25" r="2"/><circle class="art-dot" cx="40" cy="25" r="2"/><path class="art-bright" d="m55 45-12 10 12 10m28-20 12 10-12 10m-10-23-8 26"/><rect class="art-solid" x="112" y="47" width="27" height="45" rx="5"/><path class="art-cut" d="M121 84h9"/>`
};
const categoryNotes={all:'The complete constellation',privacy:'Trust, protection & unlearning',radar:'Making hidden signals visible',cv:'Teaching machines to see',nlp:'Language that takes action',brain:'Patterns in minds & molecules',misc:'Experiments beyond boundaries',apps:'Ideas you can interact with'};
function renderCategories(){return Object.entries(Object.fromEntries(DATA.projects.map(p=>[p.category,p.categoryName]))).map(([key,label],i)=>{
 const count=key==='all'?DATA.projects.length:DATA.projects.filter(p=>p.category===key).length;
 return `<button class="category-tile category-${esc(key)}" data-filter="${esc(key)}" style="--card-delay:${-i*.65}s" aria-haspopup="dialog" aria-controls="category-popup"><span class="category-top"><span class="category-number">0${i+1}</span><span class="category-count">${count} projects</span></span><span class="category-scene" aria-hidden="true"><svg viewBox="0 0 160 104" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round">${categoryArt[key]||categoryArt.all}</svg></span><span class="category-title">${esc(label)}</span><span class="category-note">${esc(categoryNotes[key]||'Explore this field')}</span><span class="category-select" aria-hidden="true">↗</span></button>`;
 }).join('');}

const content={
about:()=>`<div class="about-content"><div><p class="lead">I am an AI Engineer with around five years of applied research and industry experience.</p><p>My work spans natural language processing, large language models, computer vision, and signal-driven learning.</p><p>Explore implementations, experiments, and research across AI agents, privacy-preserving machine learning, radar, and visual intelligence.</p><div class="link-row">${external('https://github.com/antibloch','GitHub')}${external('https://scholar.google.com/citations?user=03BvsCEAAAAJ&hl=en','Google Scholar')}</div></div><img class="portrait" src="assets/images/my_photo.png" alt="Junaid Iqbal Khan"></div>`,
career:()=>DATA.career.map(x=>`<article class="role-card"><span class="meta">${esc(x.dates)}</span><h3>${esc(x.role)}</h3><p>${esc(x.company)}</p></article>`).join(''),
skills:()=>`<div id="capability-mount"></div><details class="capability-text-index"><summary>Read the complete capability directory</summary><p class="lead">Research depth. Engineering range.</p><p>Explore the full capability map, grounded in professional work, research, and implementations. Tools indicate supported capabilities, not identical stacks across every project.</p><div class="capability-directory">${CAPABILITIES.map(d=>`<article class="capability-entry" style="--domain-color:${d.color}"><p class="eyebrow">${esc(d.kind)}</p><h3>${esc(d.name)}</h3><p>${esc(d.tagline)}</p><ul>${d.capabilities.map(c=>`<li>${esc(c)}</li>`).join('')}</ul><div>${chips(d.tools)}</div><p class="evidence-note">${esc(d.evidence)}</p><div class="link-row">${d.links.map(([label,url])=>external(url,label)).join('')}</div></article>`).join('')}</div></details>`,
publications:()=>`<p>Research in sensing, learning, and applied AI. Publication information is retained from the original portfolio.</p>${DATA.publications.map((p,i)=>`<article class="publication"><span class="meta">PAPER ${String(i+1).padStart(2,'0')} / ${esc(p.year)} / ${esc(p.publisher)}</span><h3>${external(p.link,p.title)}</h3><p>${esc(p.authors)}</p><p>${esc(p.journal)} · ${esc(p.details)}</p></article>`).join('')}`,
contact:()=>`<p class="contact-intro">Have a role, research question, or project in mind? Let’s talk.</p><div class="contact-details"><a class="contact-detail" href="mailto:dianujkotov15@gmail.com"><span class="contact-symbol" aria-hidden="true">@</span><span><span class="eyebrow">EMAIL</span><strong>dianujkotov15@gmail.com</strong></span><span aria-hidden="true">↗</span></a><a class="contact-detail" href="tel:+923045339667"><span class="contact-symbol" aria-hidden="true">☎</span><span><span class="eyebrow">PHONE</span><strong>+92 304 533 9667</strong></span><span aria-hidden="true">↗</span></a></div><div class="contact-actions"><button id="copy-email">COPY EMAIL</button><span id="copy-status" role="status"></span></div><div class="link-row">${external('https://github.com/antibloch','GitHub')}${external('https://scholar.google.com/citations?user=03BvsCEAAAAJ&hl=en','Google Scholar')}</div>`,
projects:()=>`<p class="project-hint">Select a floating category to explore its projects, then open a project for details.</p><button id="category-motion" aria-pressed="false">Pause card motion</button><div class="filters" role="group" aria-label="Project category">${renderCategories()}</div>`
};
function projectCards(items){return items.map(p=>`<article class="card project-preview">${p.image?`<img src="${esc(p.image)}" alt="${esc(p.title.replaceAll('_',' '))} project preview" loading="lazy">`:''}<p class="meta">${esc(p.categoryName)}</p><h3><button class="project-open" data-project="${DATA.projects.indexOf(p)}" aria-haspopup="dialog" aria-controls="project-popup">${esc(p.title.replaceAll('_',' '))} <span aria-hidden="true">↗</span></button></h3><p>${esc(p.description)}</p><div>${chips(p.tech_stack)}</div></article>`).join('');}
function hideFailedImages(container){container.querySelectorAll('img').forEach(img=>img.addEventListener('error',()=>img.hidden=true));}

function openSheet(key){const universe=$('#capability-universe');if($('#sheet-content').contains(universe))$('#capability-storage').append(universe);active=sheets.indexOf(key);if(active<0)return;if(key==='projects'){filter='all';query='';}dialog.classList.toggle('contact-widget',key==='contact');$('#sheet-title').textContent=titles[key];$('#sheet-counter').textContent=`SHEET 0${active+1} / 06 — ${names[key].toUpperCase()}`;$('#sheet-content').innerHTML=content[key]();dialog.classList.toggle('capabilities-sheet',key==='skills');if(key==='skills')$('#capability-mount').append(universe);if(!dialog.open)dialog.showModal();dialog.scrollTop=0;if(key==='projects'){$('.filters').addEventListener('click',e=>{const b=e.target.closest('[data-filter]');if(b)openProjectCategory(b.dataset.filter);});}if(key==='contact')$('#copy-email').addEventListener('click',async()=>{try{await navigator.clipboard.writeText('dianujkotov15@gmail.com');$('#copy-status').textContent='Email copied.'}catch{$('#copy-status').textContent='Copy this address: dianujkotov15@gmail.com'}});}
document.addEventListener('click',e=>{const b=e.target.closest('[data-sheet]');if(b)openSheet(b.dataset.sheet)});
$('#close').onclick=()=>dialog.close();$('#previous').onclick=()=>openSheet(sheets[(active+5)%6]);$('#next').onclick=()=>openSheet(sheets[(active+1)%6]);
dialog.addEventListener('click',e=>{const r=dialog.getBoundingClientRect();if(e.target===dialog&&(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom))dialog.close()});
dialog.addEventListener('keydown',e=>{if(e.target.matches('input,textarea,select,video'))return;if(e.key==='ArrowLeft'){$('#previous').click();e.preventDefault()}if(e.key==='ArrowRight'){$('#next').click();e.preventDefault()}});
$('#zoom').oninput=e=>$('#blueprint').style.setProperty('--zoom',e.target.value);$('#reset').onclick=()=>{$('#zoom').value=1;$('#blueprint').style.setProperty('--zoom',1);$('#workspace').classList.remove('flat');$('#flat').setAttribute('aria-pressed','false')};$('#flat').onclick=()=>{$('#workspace').classList.toggle('flat');$('#flat').setAttribute('aria-pressed',$('#workspace').classList.contains('flat'))};

// Pointer coordinates are measured against the stage, never the moving board.
// This avoids feedback when a transformed module crosses under the cursor.
(()=>{
 const stage=$('.stage'),board=$('#blueprint'),reduced=matchMedia('(prefers-reduced-motion: reduce)');
 const view={x:0,y:0,tilt:0,yaw:0,roll:0};
 let drag=null,suppressClick=false,frame=0;
 const clamp=(v,min,max)=>Math.max(min,Math.min(max,v));
 function render(){frame=0;board.style.setProperty('--pan-x',`${view.x}px`);board.style.setProperty('--pan-y',`${view.y}px`);board.style.setProperty('--pointer-tilt',`${view.tilt}deg`);board.style.setProperty('--pointer-yaw',`${view.yaw}deg`);board.style.setProperty('--pointer-roll',`${view.roll}deg`);}
 function update(){if(!frame)frame=requestAnimationFrame(render);}
 function neutral(){view.tilt=0;view.yaw=0;view.roll=0;update();}
 stage.addEventListener('pointerdown',e=>{
  if(!e.isPrimary||e.button!==0||dialog.open)return;
  suppressClick=false;
  drag={id:e.pointerId,x:e.clientX,y:e.clientY,fromX:view.x,fromY:view.y,moved:false};
 });
 stage.addEventListener('pointermove',e=>{
  if(dialog.open)return;
  if(drag&&e.pointerId===drag.id){
   const dx=e.clientX-drag.x,dy=e.clientY-drag.y;
   if(!drag.moved&&Math.hypot(dx,dy)<8)return;
   if(!drag.moved){drag.moved=true;stage.setPointerCapture(e.pointerId);stage.classList.add('dragging');neutral();}
   const rect=stage.getBoundingClientRect();
   view.x=clamp(drag.fromX+dx,-rect.width*.35,rect.width*.35);
   view.y=clamp(drag.fromY+dy,-rect.height*.3,rect.height*.3);
   update();return;
  }
  if(e.pointerType!=='mouse'||reduced.matches||$('#workspace').classList.contains('flat'))return;
  const rect=stage.getBoundingClientRect();
  const x=clamp((e.clientX-rect.left)/rect.width*2-1,-1,1);
  const y=clamp((e.clientY-rect.top)/rect.height*2-1,-1,1);
  view.tilt=-y*6;view.yaw=x*7;view.roll=x*3;update();
 });
 function finish(e){if(!drag||e.pointerId!==drag.id)return;suppressClick=drag.moved;drag=null;stage.classList.remove('dragging');if(stage.hasPointerCapture(e.pointerId))stage.releasePointerCapture(e.pointerId);neutral();}
 stage.addEventListener('pointerup',finish);stage.addEventListener('pointercancel',finish);stage.addEventListener('lostpointercapture',finish);
 stage.addEventListener('pointerleave',()=>{if(!drag)neutral();});
 stage.addEventListener('click',e=>{if(suppressClick){suppressClick=false;e.preventDefault();e.stopImmediatePropagation();}},true);
 $('#reset').addEventListener('click',()=>{view.x=0;view.y=0;neutral();});
 $('#flat').addEventListener('click',neutral);
 reduced.addEventListener('change',neutral);
 // Opening a sheet leaves the board still behind the modal.
 new MutationObserver(()=>{stage.classList.toggle('is-reading',dialog.open);if(dialog.open)neutral();}).observe(dialog,{attributes:true,attributeFilter:['open']});
 window.addEventListener('blur',()=>{if(drag)finish({pointerId:drag.id});neutral();});
})();

// Visitors can stop the staggered section lift independently of pointer controls.
$('#motion').addEventListener('click',()=>{
 const paused=$('.stage').classList.toggle('motion-paused');
 $('#motion').setAttribute('aria-pressed',String(paused));
 $('#motion').textContent=paused?'RESUME LIFT':'PAUSE LIFT';
});

// Elliptical orbital motion keeps labels upright and supports reduced motion.
const worlds=$('#domain-worlds'),cosmos=$('.cosmos'),domainPopup=$('#domain-popup');
worlds.innerHTML=CAPABILITIES.map((d,i)=>`<button class="domain-world" data-domain="${d.id}" style="--world-color:${d.color};--delay:${-i*.7}s" aria-haspopup="dialog" aria-controls="domain-popup"><span class="planet" aria-hidden="true"><i></i></span><span class="world-name">${esc(d.name)}</span><span class="world-index">${String(i+1).padStart(2,'0')}</span></button>`).join('');
function selectDomain(id){const d=CAPABILITIES.find(d=>d.id===id);if(!d)return;const panel=$('#domain-detail');panel.style.setProperty('--domain-color',d.color);panel.innerHTML=`<p class="eyebrow">${esc(d.kind)} / ${String(CAPABILITIES.indexOf(d)+1).padStart(2,'0')}</p><h3 id="domain-title">${esc(d.name)}</h3><p class="domain-tagline">${esc(d.tagline)}</p><ul>${d.capabilities.map(c=>`<li>${esc(c)}</li>`).join('')}</ul><div class="domain-tools">${chips(d.tools)}</div><details open><summary>What I have done & project evidence</summary><p>${esc(d.evidence)}</p><div class="link-row">${d.links.map(([label,url])=>external(url,label)).join('')}</div></details>`;domainPopup.showModal();cosmos.classList.add('popup-reading');domainPopup.scrollTop=0;}
worlds.addEventListener('click',e=>{const b=e.target.closest('[data-domain]');if(b)selectDomain(b.dataset.domain)});
domainPopup.addEventListener('close',()=>cosmos.classList.remove('popup-reading'));
$('#domain-close').addEventListener('click',()=>domainPopup.close());
domainPopup.addEventListener('click',e=>{const r=domainPopup.getBoundingClientRect();if(e.target===domainPopup&&(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom))domainPopup.close();});
$('#cosmos-motion').addEventListener('click',()=>{const paused=cosmos.classList.toggle('motion-paused');$('#cosmos-motion').setAttribute('aria-pressed',String(paused));$('#cosmos-motion').textContent=paused?'Resume orbit motion':'Pause orbit motion';});
(()=>{
 const reduced=matchMedia('(prefers-reduced-motion: reduce)'),buttons=[...worlds.children];
 let angle=0,last=0,width=cosmos.clientWidth,height=cosmos.clientHeight,visible=true;
 new ResizeObserver(()=>{width=cosmos.clientWidth;height=cosmos.clientHeight;draw();}).observe(cosmos);
 new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;}).observe(cosmos);
 function draw(){buttons.forEach((b,i)=>{const a=angle+i*Math.PI*2/buttons.length-Math.PI/2;const depth=(Math.sin(a)+1)/2;b.style.left=`${width/2+Math.cos(a)*width*.39}px`;b.style.top=`${height*.47+Math.sin(a)*height*.37}px`;b.style.transform=`translate(-50%,-50%) scale(${.83+depth*.17})`;b.style.zIndex=String(2+Math.round(depth*10));});}
 function tick(now){const dt=last?Math.min(now-last,60):0;last=now;if(visible&&!document.hidden&&!reduced.matches&&!domainPopup.open&&!cosmos.classList.contains('motion-paused')&&!cosmos.matches(':hover,:focus-within')){angle+=dt*Math.PI*2/110000;draw();}requestAnimationFrame(tick);}
 draw();requestAnimationFrame(tick);
})();

// Category and project dialogs form a stack; closing returns to the originating card.
const categoryPopup=$('#category-popup'),projectPopup=$('#project-popup');
function openProjectCategory(key){const category=DATA.projects.find(p=>p.category===key);$('#category-title').textContent=key==='all'?'All projects':category?.categoryName||'Projects';$('#category-description').textContent=categoryNotes[key]||'Explore this field';$('#category-search').value='';function update(){const term=$('#category-search').value.toLowerCase();const items=DATA.projects.filter(p=>(key==='all'||p.category===key)&&[p.title,p.title.replaceAll('_',' '),p.description,...p.tech_stack].join(' ').toLowerCase().includes(term));$('#category-result-count').textContent=`${items.length} project${items.length===1?'':'s'}`;$('#category-projects').innerHTML=items.length?projectCards(items):'<p>No matching projects in this category.</p>';hideFailedImages($('#category-projects'));}$('#category-search').oninput=update;update();categoryPopup.showModal();categoryPopup.scrollTop=0;}
function openProject(index){const p=DATA.projects[index];if(!p)return;$('#project-title').textContent=p.title.replaceAll('_',' ');$('#project-content').innerHTML=`<p class="meta">${esc(p.categoryName)}</p>${p.image?`<img class="project-hero" src="${esc(p.image)}" alt="${esc(p.title)} preview">`:''}<p class="lead">${esc(p.description)}</p>${p.features?`<p>${esc(p.features)}</p>`:''}<div>${chips(p.tech_stack)}</div><p>${external(p.url,'View repository')}</p>${p.overview?`<h3>Technical overview</h3><p class="project-overview">${esc(p.overview)}</p>`:''}${(p.extra_images||[]).map(img=>`<a href="${esc(img)}" target="_blank" rel="noopener noreferrer"><img class="project-media" src="${esc(img)}" alt="${esc(p.title)} additional result" loading="lazy"></a>`).join('')}${(p.extra_videos||[]).map(v=>`<video class="project-media" controls preload="none" src="${esc(v)}"></video>`).join('')}`;hideFailedImages($('#project-content'));projectPopup.showModal();projectPopup.scrollTop=0;}
document.addEventListener('click',e=>{const project=e.target.closest('[data-project]');if(project)openProject(Number(project.dataset.project));if(e.target.closest('#category-motion')){const paused=$('.filters').classList.toggle('cards-paused');$('#category-motion').setAttribute('aria-pressed',String(paused));$('#category-motion').textContent=paused?'Resume card motion':'Pause card motion';}});
for(const [popup,close] of [[categoryPopup,'#category-close'],[projectPopup,'#project-close']]){$(close).addEventListener('click',()=>popup.close());popup.addEventListener('click',e=>{const r=popup.getBoundingClientRect();if(e.target===popup&&(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom))popup.close();});}
projectPopup.addEventListener('close',()=>projectPopup.querySelectorAll('video').forEach(v=>v.pause()));
