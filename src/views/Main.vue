<template>
  <div class="main-page">
    <AsideBlock />
    <main class="main-block">
      <Card />
      <MedicationBlock />
    </main>
  </div>
</template>
<script>
import AsideBlock from '../components/MainComponents/AsideBlock';
import Card from '../components/MainComponents/Card';
import MedicationBlock from "../components/MainComponents/MedicationBlock";

export default {
  name: "Main",
  components: {
    AsideBlock,
    Card,
    MedicationBlock
  },
  data: () => ({
    clients: [
      {id:1, photo: './assets/image/clients/Valentina.png', name: 'Валентіна', age:75, year:'років',
        quest:'Дитя, дай бабусі ліки від тиску за цим рецептом, але не дорогих, тих, що дешевші!'},
      {id:2, photo: './assets/image/clients/Maria.png', name: 'Марія', age:19, year:'років',
        quest:'Бабуся приймає брендовий препарат від болю в суглобах, він допомагає, але занадто дорогий. У Вас є якісний аналог з нижчою ціною? Якщо ні — давайте бренд.'},
      {id:3, photo: './assets/image/clients/Stepan.png', name: 'Стеан', age:61, year:'рік',
        quest:'Спросоння відсунув гарячий чайник рукою та обпікся. У Вас всі ліки від опіків такі дорогі? Можна хороший препарат недорого?'},
      {id:4, photo: './assets/image/clients/Lubov.png', name: 'Любов', age:58, year:'років',
        quest:'Лікар призначив препарат від артеріальної гіпертензії, а бренд дорого коштує. Тому мені потрібен аналог з хорошою ефективністю та приємною ціною.'},
      {id:5, photo: './assets/image/clients/Olexandr.png', name: 'Олександр', age:20, year:'років', quest:'Порекомендуйте ефективний препарат від болю в горлі за розумну ціну.'},
      {id:6, photo: './assets/image/clients/Irina.png', name: 'Ірина', age:55, year:'років',
        quest:'У мене часто невралгії, лікар призначив вітаміни групи В. Мені потрібен якісний аналог за прийнятною ціною.'},
    ]
  }),
}
</script>
<style scoped>
</style>