var json_content=[
      {
        "phrase": "Чувство черного юмора - как ноги. У кого-то есть, а у кого-то нет.",
      },
      {
        "phrase": "Всех трупиков патологоанатом Валера называл ласково - котиками. Потому что у них носики холодные."
      },
      {
        "phrase": "Один человек сильно привязался к люстре и умер."
      },
      {
        "phrase": "Не кури, не бухай, занимайся спортом. Черви любят здоровую пищу."
      },
      {
        "phrase": "Девочка Таня, гуляя по тонкому льду, обнаружила, что лед сверху ломается гораздо легче, чем снизу."
      },
      {
        "phrase": "Учитель ОБЖ поджёг школу и тем, кто успел выбежать, ставил пятёрки за четверть."
      },
      {
        "phrase": "Она была прекрасно сложена. Хотя правая рука торчала из чемодана."
      },
      {
        "phrase": "Сын игрока в покер не может понять, любит его отец или нет."
      },
      {
        "phrase": "И помни: Никакой агрессии — убивай и улыбайся."
      },
      {
        "phrase": "Если после того, как вы покинули самолёт, у вас не раскрылся парашют — не паникуйте, наслаждайтесь полётом. Ведь он у вас последний…"
      },
      {
        "phrase": "Это худший подарок в моей жизни, а в прошлом году мой сын подарил мне гроб."
      },
      {
        "phrase": "Простите за этот приступ черного юмора, мимолетное убежище от кошмара."
      },
      {
        "phrase": "Бабушка, скажите, пожалуйста, вы, может быть, поторопитесь? У нас-то время еще есть... А вот у вас, по-моему, не очень."
      }
    ];
  var rand = Math.floor(Math.random() * json_content.length);
  document.querySelector(".js-joke").innerText=json_content[rand].phrase;