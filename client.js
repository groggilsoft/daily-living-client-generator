const namedisplay = document.getElementById('name');
const agedisplay = document.getElementById('age');
const behaviordisplay = document.getElementById('behavior');
const namedisplay2 = document.getElementById('name2');
const agedisplay2 = document.getElementById('age2');
const behaviordisplay2 = document.getElementById('behavior2');
const genderdisp = document.getElementById('gender');
const genderdisp2 = document.getElementById('gender2');
const settingdisp = document.getElementById('setting');
const settingdisp2 = document.getElementById('setting2');

const sex = ['Male', 'Female'];

const setting = [
  'Clinical setting',
  'home setting',
  'school/day program setting',
];

const names = [
  'Parker',

  'Lane',

  'Indigo',

  'Kass',

  'Jayden',

  'Peyton',

  'Salem',

  'Emery',

  'Tracy',

  'Kaylor',

  'Dakota',

  'Angel',

  'Kendall',

  'Alex',

  'Peyton',

  'Chance',

  'Justice',

  'Jude',

  'Charlie',

  'Brook',

  'Dae',

  'Jay',

  'Nico',

  'Keagan',
];

const agerange = [
  '5-8 years old',
  '10-12 years old',
  '13-15 years old',
  '16-18 years old',
  '18-25 years old',
];

const behaviors = [
  'Dressing',
  'toileting',
  'bathing',
  'teeth brushing',
  'eating/feeding',
  'preparing meals',
  'pill swallowing',
  'hand washing',
  'cleaning up their room/area',
];

const getRandom = (num) => {
  //I think it helps to junk 1 random for more "randomness"
  const randjunk = Math.floor(Math.random() * num);
  console.log(randjunk);
  const rand = Math.floor(Math.random() * num);
  return rand;
};

const app = () => {
  //generate client 1
  const name1 = names[getRandom(names.length)];
  const age1 = agerange[getRandom(agerange.length)];
  const behavior1 = behaviors[getRandom(behaviors.length)];
  const sex1 = sex[getRandom(sex.length)];
  const setting1 = setting[getRandom(setting.length)];

  //remove all the ones that are already used from their arrays so you cant have duplicates
  const nameindex = names.indexOf(name1);
  names.splice(nameindex, 1);

  const sexindex = sex.indexOf(sex1);
  sex.splice(sexindex, 1);

  const ageindex = agerange.indexOf(age1);
  agerange.splice(ageindex, 1);

  const settingindex = setting.indexOf(setting1);
  setting.splice(settingindex, 1);

  const behavindex = behaviors.indexOf(behavior1);
  behaviors.splice(behavindex, 1);

  //generate client 2
  const name2 = names[getRandom(names.length)];
  const age2 = agerange[getRandom(agerange.length)];
  const behavior2 = behaviors[getRandom(behaviors.length)];
  const sex2 = sex[getRandom(sex.length)];
  const setting2 = setting[getRandom(setting.length)];

  //display all the info

  //client 1
  namedisplay.innerText = name1;
  genderdisp.innerText = sex1;
  agedisplay.innerText = age1;
  settingdisp.innerText = setting1;
  behaviordisplay.innerText = behavior1;

  //client 2
  genderdisp2.innerText = sex2;
  namedisplay2.innerText = name2;
  agedisplay2.innerText = age2;
  settingdisp2.innerText = setting2;
  behaviordisplay2.innerText = behavior2;
};

//start
app();
