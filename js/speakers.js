const speakers = [
  {
    name: 'Eng. Ayenew Yihune',
    title: 'Lecturer and Researcher Addis Ababa Science and Technology University',
    speakerImg: './images/speaker1.png',
    about:
      'Join us for an insightful industry talk session on Managing Geotechnical Test Data using a Web-Based System. ',
  },
  {
    name: 'Eng. Daniel Getachew',
    title: 'Director of Structural Engineering at ZIAS A+E',
    speakerImg: './images/speaker2.png',
    about:
      'Daniel has worked in the Architecture + Engineering industry in projects located in diffrent part of Africa and Ukrain (Kyiv/Odessa).',
  },
  {
    name: 'Architect Dawit Benti',
    title: 'Architect/ Educator/ Theorist in African architecture/Phd student',
    speakerImg: './images/speaker3.png',
    about:
      'Dawit is a licensed practicing professional architect, with more than two decades of experience in architectural design.',
  },
  {
    name: 'Eng. Yemisrach Molla',
    title: 'Project Manager at Turner & Townsend',
    speakerImg: './images/speaker4.png',
    about:
      'Young, motivated, determined and constant learner who believes in exploring new ideas for a better change.',
  },
  {
    name: 'Dr. Shifferaw Taye',
    title: 'Educator | Consultant Structural Engineer | Project Planner & Manager',
    speakerImg: './images/speaker5.png',
    about:
      'Experienced civil/structural engineering consultant, analyst, designer and code-compliance checker.',
  },
  {
    name: 'Prof. Abebe Dinku',
    title: 'Professor of Civil Engineering, Addis Ababa University',
    speakerImg: './images/speaker6.png',
    about:
      'Experienced Civil Engineer with a demonstrated history of working in the research industry. Skilled in Construction management.',
  },
];

// function to add element given tag name and class name
const createElement = (tag, className) => {
  const el = document.createElement(tag);
  el.classList.add(className);
  return el;
};

function renderSpeakers() {
  const mainContainer = document.querySelector('.featuredSpeakersContainer');
  const speakersContainer = createElement('div', 'speakersContainer');

  let cardContent = '<ul class="speakers">';

  for (let i = 0; i < speakers.length; i += 1) {
    const speakerInfo = speakers[i];

    cardContent += `
              
            <li class="speaker speaker${i + 1}">
                <div class="imgCtn">
                  <img class="speakerImg" src="${speakerInfo.speakerImg}" alt="Speaker Image">
                </div>
                <ul class="speaker-detail">
                    <li class="speakerName">
                        <h3>${speakerInfo.name}</h3>
                    </li>
                    <li class="speakerTitle">
                        <h4>${speakerInfo.title}</h4>
                    </li>
                    <li class="speakerDescription">
                        <p>${speakerInfo.about}
                        </p>
                    </li>
                </ul>
            </li>`;
  }

  cardContent += `</ul>
        <button class="seeMoreBtn">MORE&nbsp;&nbsp;<i class="fa-solid fa-angle-down down-arrow"></i></button>
        <button class="speaker3 less">LESS&nbsp;&nbsp;<i class="fa-solid fa-angle-up down-arrow"></i></button>`;
  speakersContainer.innerHTML = cardContent;
  mainContainer.appendChild(speakersContainer);

  const seeMoreBtn = document.querySelector('.seeMoreBtn');
  const seeLessBtn = document.querySelector('.less');
  const speaker3 = document.querySelector('.speaker3');
  const speaker4 = document.querySelector('.speaker4');
  const speaker5 = document.querySelector('.speaker5');
  const speaker6 = document.querySelector('.speaker6');

  function seeMore() {
    seeMoreBtn.setAttribute('class', 'speaker3');
    speaker3.classList.remove('speaker3');
    speaker4.classList.remove('speaker4');
    speaker5.classList.remove('speaker5');
    speaker6.classList.remove('speaker6');
    seeLessBtn.setAttribute('class', 'seeMoreBtn');
  }

  function seeLess() {
    seeLessBtn.setAttribute('class', 'speaker3 less');
    speaker3.classList.add('speaker3');
    speaker4.classList.add('speaker4');
    speaker5.classList.add('speaker5');
    speaker6.classList.add('speaker6');
    seeMoreBtn.setAttribute('class', 'seeMoreBtn');
  }

  seeMoreBtn.addEventListener('click', seeMore);
  seeLessBtn.addEventListener('click', seeLess);
}

window.addEventListener('load', renderSpeakers);