<template>
  <div class="background-clip">
    <div class="lorem" v-if="isMobile">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium deserunt, delectus autem
      optio odio officiis impedit hic nobis similique at sunt omnis molestias, possimus obcaecati ab
      vitae facere dignissimos numquam consectetur debitis et praesentium aspernatur. Labore non
      alias accusantium ratione iure sequi, ad sit illo dolore, dolor velit voluptas reprehenderit,
      eum ipsum recusandae expedita commodi animi sapiente officiis officia ipsam? Omnis provident
      cupiditate earum molestiae nam delectus nostrum sequi iste, nobis doloribus assumenda!
      Quisquam, dicta aliquid eum reprehenderit a quas doloribus eius eos assumenda consequuntur
      illum repellat, officiis doloremque. Maiores repellendus tenetur odit dolores consectetur
      nostrum minus, quis et eveniet!
    </div>
    <div class="lorem" v-else>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero consequuntur ratione,
      doloribus delectus veniam eius obcaecati illo debitis. Eos ad eaque doloribus quasi assumenda
      libero placeat laudantium enim recusandae dolor sapiente impedit aliquam iste eligendi
      incidunt voluptatum, dolore qui! Aliquid explicabo asperiores nesciunt ab corporis consequatur
      expedita velit. Quaerat ratione recusandae quae maiores quam explicabo adipisci deserunt velit
      quis accusamus id quod fugiat quisquam possimus, asperiores suscipit eius laudantium. Quae,
      doloribus eligendi. Enim delectus, necessitatibus temporibus a eius unde quisquam, corrupti
      ipsum explicabo quo maiores esse obcaecati, perspiciatis accusantium voluptatum porro modi
      harum ipsa dolorum quia placeat error. Sapiente voluptates ducimus labore. Quo iusto vel eum,
      sequi alias non omnis necessitatibus nihil blanditiis exercitationem aspernatur ab totam unde
      ullam impedit adipisci deserunt ad explicabo commodi officiis similique fugiat. Possimus harum
      tempore similique iste modi quo dolorem quia quisquam itaque voluptas quis delectus tempora
      doloribus eligendi libero, ab asperiores, molestias quam, sunt necessitatibus eaque.
      Praesentium soluta quasi magnam veritatis, rem sed tempora excepturi dolore, recusandae,
      accusamus ipsa? Iusto ratione recusandae facilis dolor, perferendis, maiores odit dignissimos
      suscipit sed illo labore, tempore quaerat? Quibusdam necessitatibus vero magni, natus
      consequatur commodi nostrum autem aliquam esse nisi saepe nulla est at dolorum iure assumenda?
      Facere, corrupti quaerat quas esse aliquam minima totam tempore temporibus voluptatibus
      reprehenderit? Veritatis ipsam sit facilis ipsum quis numquam enim unde porro, quae placeat
      repellat est molestiae, excepturi, veniam aut dignissimos maxime quod vitae architecto
      nostrum. Perferendis vitae, labore aut, fugit rerum magnam dolore non, quia exercitationem
      nesciunt voluptate sint. Quos odio, tenetur vitae corrupti excepturi ducimus quasi nihil
      quidem quo nemo ipsa repellat repudiandae molestias quas sequi placeat, commodi maxime
      sapiente in unde harum aliquid, quisquam dignissimos reiciendis? Qui ex ipsa esse sit laborum
      quis, asperiores corporis velit nam dignissimos dicta autem similique vero at ab voluptates
      sint dolorem repudiandae beatae quo, repellat rem itaque cumque. Neque, nam! Tenetur minima
      temporibus fuga voluptatibus ullam quo iure quibusdam, aperiam minus sunt dolore iusto a
      exercitationem rem velit sapiente quaerat rerum nam molestias soluta ab et facilis vitae vel.
      Voluptas unde vero quis quas accusamus amet quia enim consequuntur ipsa quos cupiditate saepe
      eveniet, optio sit eos facilis id, laborum eligendi. Id incidunt asperiores reprehenderit,
      distinctio vero molestiae quibusdam dolorem, beatae dolores repudiandae repellendus? Quia
      blanditiis nemo sit impedit deserunt inventore porro eum harum architecto voluptas, adipisci
      soluta commodi numquam consequuntur id saepe suscipit eius voluptate obcaecati placeat tenetur
      dicta quibusdam.
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { computed } from 'vue'

  const isMobile = computed(
    () =>
      !!navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      )
  )
</script>

<style lang="scss" scoped>
  .background-clip {
    background: black;
    margin-top: 16px;

    .lorem {
      color: transparent;
      background: url(/images/frontend/giphy.gif) center/cover;
      background-clip: text;
      filter: grayscale(1) invert(1);
      mix-blend-mode: hard-light;
      // aspect-ratio: 1/1;
    }
  }
</style>
