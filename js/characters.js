document.addEventListener('DOMContentLoaded', function (event) {
    document.querySelectorAll('.character-icon img').forEach(item => {
        item.addEventListener('mouseover', function (event) {
            switch (event.target.id) {
                case "ch1":
                    document.querySelector('.character-img img').src = "./../assets/characters/Chara_1_Knight.gif";
                    document.querySelector('.character-name').innerHTML = 'Knight Boy';
                    document.querySelector('.character-desc').innerHTML = 'A boy with great bravery and determination to save his city from the darkness. With only one handed sword and a shield that was made by his late grandfather, he travel to find all four stones of life to revive the city where his family was raised.';
                    break;
                case "ch2":
                    document.querySelector('.character-img img').src = "./../assets/characters/Chara_2_Zorro.gif";
                    document.querySelector('.character-name').innerHTML = 'Zorro';
                    document.querySelector('.character-desc').innerHTML = 'With a dashing masked vigilante, he defends people from villains to maintain peace. He loves mystery and real life stories that happen all around the world. He travel around the world to getting juicy informations and help others who in need along the way.';
                    break;
                case "ch3":
                    document.querySelector('.character-img img').src = "./../assets/characters/Chara_3_RoyalGuard.gif";
                    document.querySelector('.character-name').innerHTML = 'Royal Guard';
                    document.querySelector('.character-desc').innerHTML = 'Dashing suit and one handed sword is his trademark to become the best guard in the city! In order to be accepted to be the king’s royal guard. He must prove himself worthy by getting the title of the strongest in the city.';
                    break;
                case "ch4":
                    document.querySelector('.character-img img').src = "./../assets/characters/Chara_4_Officer.gif";
                    document.querySelector('.character-name').innerHTML = 'Officer Girl';
                    document.querySelector('.character-desc').innerHTML = 'Justice is her middle name! in the name of justice, she want to make the whole world a better place for all living creatures. Her high ups recommend her to experience the battle of the strongest for balancing her fighting skills.';
                    break;
                case "ch5":
                    document.querySelector('.character-img img').src = "./../assets/characters/Chara_5_NinjaGirl.gif";
                    document.querySelector('.character-name').innerHTML = 'Ninja Girl';
                    document.querySelector('.character-desc').innerHTML = 'Determined to be the best ninja in the whole world, she travel around the world to win the title of the strongest human in the world. She hide her face with a mask to hide all her dark pasts that had happen to her.';
                    break;
                default:
                    break;
            }
        })
    })
});