<template>
  <q-page>
    <div class="bg-img flex flex-center gt-sm">
      <div class="text-h2 q-my-auto text-info text-bold container">Contact</div>
    </div>
    <div
      class="bg-img flex flex-center lt-md"
      style="height: 60vh; margin-top: -15vh"
    >
      <div class="text-h5 q-my-auto text-info text-bold container">Contact</div>
    </div>
    <div class="container row q-pt-xl q-col-gutter-x-md text-info gt-sm">
      <div class="col-6 q-gutter-y-sm">
        <div class="text-h4 q-py-lg text-bold">Rowad El-Mada LLC</div>
        <div class="row">
          <q-icon name="place" size="24px" class="q-pr-md" />
          <div class="text-subtitle1">Al Khuwair, South Bousher, Muscat</div>
        </div>
        <div class="text-subtitle1">
          <q-icon name="phone" size="24px" class="q-pr-md" />
          +96892181472
        </div>
        <div class="text-subtitle1">
          <q-icon name="mail" size="24px" class="q-pr-md" />
          info@rowadel-mada.com
        </div>
      </div>

      <form
        action="https://formspree.io/f/mbjnjjbg"
        method="POST"
        class="col-6 q-pt-lg q-mt-sm"
      >
        <div class="row q-col-gutter-x-lg q-pt-xl">
          <div class="col-6">
            <input
              type="text"
              class="input_style"
              placeholder="Name"
              name="Name"
              required
            />
          </div>
          <div class="col-6">
            <input
              type="text"
              class="input_style"
              placeholder="Phone"
              name="Phone"
              required
            />
          </div>
        </div>
        <div class="q-pt-sm">
          <textarea
            placeholder="Message"
            class="input_style"
            rows="2"
            name="Message"
            required
            style="padding-top: 8px"
          ></textarea>
        </div>
        <div class="q-ml-xs">
          <q-btn
            color="primary"
            type="submit"
            icon="send"
            no-caps
            label="Send"
            class="q-px-md q-py-sm q-ma-sm"
          />
        </div>
      </form>
      <div class="container q-py-xl q-mb-md">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58504.830358928746!2d58.352774623177595!3d23.58453201157291!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e91ff1b5c71c501%3A0xd5531bfe6f92d25!2sAl%20Khuwayr%20South%2C%20Muscat%2C%20Oman!5e0!3m2!1sen!2s!4v1703851157798!5m2!1sen!2s"
          width="102%"
          height="450"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
    <div class="container row q-pt-xl q-col-gutter-y-md text-info lt-md">
      <div class="col-12 col-md-6 q-gutter-y-md">
        <div class="text-h5 text-bold">Rowad El-Mada LLC</div>
        <div class="row">
          <q-icon name="place" size="24px" class="q-pr-md" />
          <div class="text-subtitle1">Al Khuwair South, Bousher, Muscat</div>
        </div>
        <div class="text-subtitle1">
          <q-icon name="phone" size="24px" class="q-pr-md" />
          +96892181472
        </div>
        <div class="text-subtitle1">
          <q-icon name="mail" size="24px" class="q-pr-md" />
          info@rowadel-mada.com
        </div>
      </div>

      <form
        action="https://formspree.io/f/mbjnjjbg"
        method="POST"
        class="col-12 col-md-6 q-pr-md"
      >
        <div class="row q-col-gutter-x-md">
          <div class="col-6">
            <input
              type="text"
              class="input_style"
              placeholder="Name"
              name="Name"
              required
            />
          </div>
          <div class="col-6">
            <input
              type="text"
              class="input_style"
              placeholder="Phone"
              name="Phone"
              required
            />
          </div>
        </div>
        <div>
          <textarea
            placeholder="Message"
            class="input_style"
            rows="2"
            name="Message"
            required
            style="padding-top: 8px"
          ></textarea>
        </div>
        <div class="text-center">
          <q-btn
            color="primary"
            type="submit"
            icon="send"
            no-caps
            label="Send"
            class="q-px-md q-py-sm q-ma-sm"
          />
        </div>
      </form>
      <div class="container q-pt-lg q-pb-xl">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30109.275702363917!2d58.40132882623814!3d23.585841628020777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e91ff1b5c71c501%3A0xd5531bfe6f92d25!2sAl%20Khuwayr%20South%2C%20Muscat%2C%20Oman!5e0!3m2!1sen!2s!4v1703850245607!5m2!1sen!2s"
          width="100%"
          height="300"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </q-page>
</template>


<script>
export default {
  setup() {},
};
</script>



<style lang="scss">
.bg-img {
  background-image: url("https://images.unsplash.com/photo-1546455643-312811da2332?q=80&w=1536&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
  height: 80vh;
  margin-top: -15vh;
  background-repeat: no-repeat;
}

.input_style {
  border: 1px solid rgb(196, 191, 191);
  width: 100%;
  border-radius: 5px;
  padding-top: 0px;
  padding-left: 10px;
  margin: 10px;
  padding: 10px;
}
</style>
