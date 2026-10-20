const $=s=>document.querySelector(s);const $$=s=>[...document.querySelectorAll(s)];
const menu=$('#menu'),nav=$('#nav');menu.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'关闭导航':'打开导航');nav.classList.toggle('open',open);menu.textContent=open?'×':'☰'});$$('nav a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','打开导航');menu.textContent='☰'}));
const services=[['TERMITE MANAGEMENT','防患于隐，守护建筑安全','围绕白蚁对建筑、木质构件及相关设施的危害，开展有针对性的防治服务。关注隐蔽风险，让治理更有依据。',['建筑与设施白蚁防治','木质构件虫害风险关注','结合现场情况制定防治方案']],['VECTOR CONTROL','从监测出发，管理环境虫害','围绕鼠、蟑、蚊、蝇等病媒生物，面向餐饮酒店、食品企业、学校医院等场景，开展防制及密度监测评价。',['鼠、蟑、蚊、蝇防制服务','病媒生物密度监测评价','病媒生物密度控制水平评价']],['LANDSCAPE & FORESTRY','守护绿意，关注健康生长','围绕农作物与林业有害生物防治，结合园林绿化、城市绿化及公园管理相关业务，服务绿色空间。',['农作物病虫害、林业有害生物防治','园林绿化工程与城市绿化管理','城市公园管理、农业机械服务']],['ENVIRONMENT & ECOLOGY','关注环境，共护生态本底','开展专业保洁、清洗与消毒，以及生态资源监测、生态恢复及生态保护等相关服务。',['专业保洁、清洗、消毒服务','生态资源监测与生态保护','土壤、农业面源及重金属污染防治相关服务']]];
const tabs=$$('[data-service]');function selectService(i){const s=services[i];tabs.forEach((t,n)=>{t.setAttribute('aria-selected',String(n===i));t.tabIndex=n===i?0:-1});$('#service-panel').setAttribute('aria-labelledby','tab-'+i);$('#service-label').textContent=s[0];$('#service-title').textContent=s[1];$('#service-desc').textContent=s[2];$('#service-items').replaceChildren(...s[3].map(t=>{const li=document.createElement('li');li.textContent=t;return li}));}tabs.forEach((t,i)=>{t.addEventListener('click',()=>selectService(i));t.addEventListener('keydown',e=>{let n;if(e.key==='ArrowDown'||e.key==='ArrowRight')n=(i+1)%4;if(e.key==='ArrowUp'||e.key==='ArrowLeft')n=(i+3)%4;if(e.key==='Home')n=0;if(e.key==='End')n=3;if(n!==undefined){e.preventDefault();selectService(n);tabs[n].focus()}})});
const news=[
["乔迁新址启新程，深耕实干谱新篇", "2026年9月13日上午，长沙市隆回商会副会长单位湖南华宝有害生物防治有限公司在长沙举行乔迁庆典。商会负责人、行业代表、合作伙伴及公司员工等200余人齐聚现场，共同见证企业发展新起点。\n\n董事长肖功宝在致辞中表示，公司2014年在武冈成立，2019年迁至邵阳市大祥区，历经十二载深耕，逐步发展壮大。此次总部迁入湖南长沙隆平产业开发区，将成为企业坚守初心、深耕主业、推动高质量发展的新起点。商会党支部书记兼执行会长陈治富致贺词，监事长申海南参加揭牌仪式，长沙市人大代表、商会常务副会长郭东海参与剪彩仪式。\n\n庆典结束后，商会与会领导及隆回籍嘉宾参观公司新址并开展专题座谈。大家围绕资源对接、人才建设、数字化转型、AI工具应用和品牌塑造等交流建议，肯定华宝“把小产业做成大事业”的实干精神，并关注有害生物防治在改善人居环境、守护公共卫生安全方面的价值。\n\n商会表示，将发挥平台资源优势，助力企业立足长沙、深耕市场、擦亮品牌。华宝将以乔迁为契机，持续提升专业服务能力，积极履行社会责任，致力打造虫控行业百年企业。", "2026年9月13日", "assets/relocation-ribbon.jpg", "乔迁庆典剪彩仪式 · 公司提供", [["assets/relocation-ceremony.jpg", "乔迁庆典现场 · 公司提供"], ["assets/relocation-group.png", "嘉宾在公司新址合影（截图） · 公司提供"]]],
['怀化分公司开业，扎根区域服务','2025年11月12日，湖南华宝怀化分公司开业。开业现场举行了剪彩活动，记录了公司区域发展的新一步。华宝将持续深耕专业虫控服务，关注各类客户的实际防治需求。','2025年11月12日','assets/huaihua-ribbon.png','怀化分公司开业剪彩视频截图 · 公司提供', [['assets/huaihua-plaque.png','怀化分公司牌匾视频截图 · 公司提供']]],
['开展内部技术培训，把专业落到实处','公司开展内部技术培训，关注团队专业能力建设。培训活动的现场内容及相关动态，请查看官方抖音账号。','','',''],
['汇聚同行者，在团结协作中共同成长','公司通过官方抖音账号发布人才招聘及团队活动信息。华宝倡导“忠诚、团结、担当、奉献”的企业精神，致力打造虫控行业百年企业。欢迎关注最新招聘动态。','','','']]
;const dlg=$('#news-dialog');$$('[data-news]').forEach(b=>b.addEventListener('click',()=>{let n=news[Number(b.dataset.news)];$('#dialog-title').textContent=n[0];$('#dialog-text').replaceChildren(...n[1].split('\n\n').map(text=>{const paragraph=document.createElement('p');paragraph.textContent=text;return paragraph;}));const gallery=$('#dialog-gallery');gallery.replaceChildren();gallery.hidden=!(n[5]&&n[5].length);(n[5]||[]).forEach(([src,caption])=>{const figure=document.createElement('figure');const image=document.createElement('img');image.src=src;image.alt=caption;image.loading='lazy';const label=document.createElement('figcaption');label.textContent=caption;figure.append(image,label);gallery.append(figure);});$('#dialog-date').textContent=n[2];$('#dialog-date').hidden=!n[2];$('#dialog-figure').hidden=!n[3];if(n[3]){$('#dialog-image').src=n[3];$('#dialog-image').alt=n[4];$('#dialog-caption').textContent=n[4];}dlg.showModal();dlg.scrollTop=0;}));$('.dialog-close').addEventListener('click',()=>dlg.close());dlg.addEventListener('click',e=>{if(e.target===dlg){const r=dlg.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dlg.close()}});
let timer;function toast(s){$('#toast').textContent=s;$('#toast').classList.add('show');clearTimeout(timer);timer=setTimeout(()=>$('#toast').classList.remove('show'),3000)}async function copy(s){try{await navigator.clipboard.writeText(s);toast('已复制，可粘贴发送')}catch{const ta=document.createElement('textarea');ta.value=s;document.body.appendChild(ta);ta.select();const ok=document.execCommand('copy');ta.remove();toast(ok?'已复制，可粘贴发送':'复制未成功，请长按文字手动复制')}}$('.copy-account').addEventListener('click',()=>copy('tangyinhua688'));$('#inquiry').addEventListener('submit',e=>{e.preventDefault();const city=$('#city').value.trim(),detail=$('#detail').value.trim();if(!city||!detail){toast('请填写所在城市与具体情况');return}$('#result-text').value=`您好，我想了解湖南华宝虫控的${$('#need').value}相关方案。\n所在城市：${city}\n具体情况：${detail}\n请问如何进一步沟通？谢谢。`;$('#inquiry-result').hidden=false;$('#result-text').focus();toast('咨询文字已生成，复制后可发送给官方账号')});$('#copy-inquiry').addEventListener('click',()=>copy($('#result-text').value));$('#year').textContent=new Date().getFullYear();
const sections=$$('main section[id]');if('IntersectionObserver'in window){const obs=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){$$('nav a').forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+e.target.id))}})},{rootMargin:'-20% 0px -55% 0px'});sections.forEach(s=>obs.observe(s))}
/* 站内锚点滚动：自行缓动，不依赖浏览器的 scroll-behavior:smooth */
const headerBar=$('header'),reduceMotion=matchMedia('(prefers-reduced-motion: reduce)');let scrollAnim=0;
/**
 * 计算锚点的目标滚动位置，扣除吸顶导航栏高度，避免标题被遮挡。
 * @param {HTMLElement} target 锚点元素
 * @returns {number} 目标 scrollTop，已限制在可滚动范围内
 */
function anchorOffset(target){const gap=(headerBar?headerBar.offsetHeight:0)+9,top=target.getBoundingClientRect().top+window.scrollY-gap,max=document.documentElement.scrollHeight-window.innerHeight;return Math.max(0,Math.min(Math.round(top),Math.round(max)))}
/**
 * 用 requestAnimationFrame 缓动滚动到锚点（easeInOutCubic）。
 * 逐帧使用 behavior:'instant' 覆盖 CSS 的 smooth，避免两套动画叠加。
 * 系统开启“减少动态效果”时缩短为 380ms，仍保留滚动过程，便于看清页面位置变化。
 * @param {HTMLElement} target 锚点元素
 */
function smoothScrollTo(target){const from=window.scrollY,to=anchorOffset(target),dist=to-from;cancelAnimationFrame(scrollAnim);if(Math.abs(dist)<2){window.scrollTo({top:to,behavior:'instant'});return}const dur=reduceMotion.matches?380:Math.min(1100,Math.max(450,Math.abs(dist)*.42)),t0=performance.now(),step=now=>{const p=Math.min(1,(now-t0)/dur),e=p<.5?4*p*p*p:1-Math.pow(-2*p+2,3)/2;window.scrollTo({top:from+dist*e,behavior:'instant'});if(p<1)scrollAnim=requestAnimationFrame(step)};scrollAnim=requestAnimationFrame(step)}
['wheel','touchstart','keydown'].forEach(evt=>window.addEventListener(evt,()=>cancelAnimationFrame(scrollAnim),{passive:true}));
document.addEventListener('click',e=>{if(!(e.target instanceof Element))return;const link=e.target.closest('a[href^="#"]');if(!link)return;const href=link.getAttribute('href');if(href==='#')return;const target=document.getElementById(href.slice(1));if(!target)return;e.preventDefault();smoothScrollTo(target);history.pushState(null,'',href);target.setAttribute('tabindex','-1');target.focus({preventScroll:true})});
/* 首页新闻封面轮播：依次展示该条新闻的全部现场图片 */
/**
 * 取出一条新闻的全部图片（首图 + 附图）。
 * @param {Array} item news 数组中的一条记录
 * @returns {Array<[string,string]>} [图片地址, 图片说明] 列表
 */
function newsImages(item){const list=[];if(item&&item[3])list.push([item[3],item[4]||item[0]]);((item&&item[5])||[]).forEach(pair=>{if(pair&&pair[0])list.push([pair[0],pair[1]||item[0]])});return list}
/**
 * 为一张新闻卡片建立封面轮播：补齐图片、生成指示点、按固定间隔淡入淡出。
 * 鼠标悬停、键盘聚焦、卡片移出视口、页面隐藏或详情弹窗打开时暂停。
 * 系统开启“减少动态效果”时照常轮播，仅由 CSS 把淡入淡出缩短。
 * @param {HTMLElement} card 带 data-news 的新闻卡片
 */
function buildNewsCarousel(card){const photo=card.querySelector('.news-photo'),first=photo&&photo.querySelector('img');if(!photo||!first)return;const images=newsImages(news[Number(card.dataset.news)]);if(images.length<2)return;photo.classList.add('has-carousel');first.classList.add('is-active');const slides=[first];images.slice(1).forEach(([src])=>{const img=document.createElement('img');img.src=src;img.alt='';img.loading='lazy';img.decoding='async';img.setAttribute('aria-hidden','true');slides[slides.length-1].after(img);slides.push(img)});const dots=document.createElement('span');dots.className='photo-dots';dots.setAttribute('aria-hidden','true');slides.forEach(()=>dots.append(document.createElement('i')));dots.children[0].className='on';photo.append(dots);const count=photo.querySelector('.photo-count');if(count)count.textContent=slides.length+'张现场图片';let index=0,paused=false,inView=true;
const show=next=>{slides[index].classList.remove('is-active');dots.children[index].classList.remove('on');index=next;slides[index].classList.add('is-active');dots.children[index].classList.add('on')};
card.addEventListener('mouseenter',()=>{paused=true});card.addEventListener('mouseleave',()=>{paused=false});card.addEventListener('focusin',()=>{paused=true});card.addEventListener('focusout',()=>{paused=false});
if('IntersectionObserver'in window)new IntersectionObserver(es=>{inView=es[0].isIntersecting},{threshold:.25}).observe(photo);
setInterval(()=>{if(paused||!inView||document.hidden||dlg.open)return;show((index+1)%slides.length)},3800)}
$$('.news-card[data-news]').forEach(buildNewsCarousel);
