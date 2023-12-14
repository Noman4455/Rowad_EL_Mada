<template>
  <q-layout view="hHr lpR fFr">
    <q-header v-scroll="handleScroll" style="background-color: transparent">
      <div ref="mobList" class="navlist">
        <q-toolbar ref="mobList" class="container" style="height: 15vh">
          <q-img
            src="~assets/logo2.png"
            class="opecity"
            height="auto"
            width="80px"
          />

          <div class="absolute-right q-pt-lg q-mt-md gt-sm">
            <q-btn
              flat
              to="/"
              color="primary"
              class="text-bold opecity"
              label="Home"
            />
            <q-btn
              flat
              to="/service"
              color="primary opecity"
              class="text-bold"
              label="Services"
            />
            <q-btn
              flat
              to="/about"
              color="primary opecity"
              class="text-bold"
              label="About"
            />
            <q-btn
              flat
              to="/contact"
              color="primary opecity"
              class="text-bold"
              label="Contact"
            />
          </div>

          <q-space />

          <q-btn
            v-if="leftDrawerOpen == false"
            flat
            dense
            round
            color="primary"
            class="q-mr-md lt-md q-mt-xs"
            icon="menu"
            aria-label="Menu"
            @click="drawer"
          />
        </q-toolbar>
      </div>
    </q-header>

    <q-drawer
      side="right"
      class="bg-dark q-pa-md"
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      style="width: 100%"
    >
      <div class="row q-pb-md">
        <q-img
          src="~assets/logo1.png"
          class="opecity"
          height="90px"
          width="130px"
        />
        <q-space />
        <q-icon
          name="close"
          size="24px"
          class="q-pt-xs cursor-pointer q-pr-md q-mr-xs q-pt-lg"
          @click="close()"
          color="white"
        />
      </div>
      <div class="lt-md">
        <div>
          <q-btn
            class="flex flex-center"
            flat
            to="/"
            color="white"
            label="Home"
          />
        </div>
        <div>
          <q-btn
            class="flex flex-center"
            flat
            to="/service"
            color="white"
            label="Services"
          />
        </div>
        <div>
          <q-btn
            class="flex flex-center"
            flat
            to="/about"
            color="white"
            label="About"
          />
        </div>
        <div>
          <q-btn
            class="flex flex-center"
            flat
            to="/contact"
            color="white"
            label="Contact"
          />
        </div>
      </div>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <footer class="bg-primary text-white q-py-lg q-pt-lg gt-sm">
      <a href="https://wa.me/+96878678282" target="_blank">
        <q-img
          src="~assets/whatsapp.png"
          class="whatsapp q-mb-md q-mr-md"
          height="40px"
          width="40px"
        />
      </a>
      <div class="row container q-py-xl q-col-gutter-md">
        <div class="col-4">
          <q-img src="~assets/logo1.png" height="auto" width="200px" />
        </div>
        <div class="col-12 col-md-6 col-lg-3 q-gutter-y-md">
          <div class="text-h6 text-bold">COMPANY</div>
          <div><a href="#/about">About</a></div>
          <div><a href="#/service">What We Do</a></div>
          <div><a href="#/about">How We Do</a></div>
          <div><a href="#/contact">Contact</a></div>
        </div>
        <div class="col-12 col-md-6 col-lg-2 q-gutter-y-md">
          <div class="text-h6 text-bold">SERVICES</div>
          <div><a href="#/service">Construction</a></div>
          <div><a href="#/service">Interior Designing</a></div>
          <div><a href="#/service">Exterior Designing</a></div>
          <div><a href="#/service">Maintenance</a></div>
          <div><a href="#/service">Heating System</a></div>
          <div><a href="#/service">Air Conditioning Equipment</a></div>
          <div><a href="#/service">Ducts</a></div>
        </div>
        <div class="col-12 col-md-6 col-lg-3 q-gutter-y-sm text-right">
          <div>
            <div class="text-h6 text-bold text-red">HAVE QUESSTIONS?</div>
          </div>
          <div class="text-bold q-pb-md" style="font-size: 2.5rem">
            <div class="div">Get in Touch with us</div>
            <div class="">
              <a href="https://wa.me/+96878678282" target="_blank">
                +96878678282
              </a>
            </div>
          </div>
          <div class="text-bold">Rowad El-Mada LLC</div>
          <div>Al Khuwair, Bousher, Muscat</div>
          <div>info@rowadel-mada.com</div>
          <div class="q-gutter-x-md q-pt-lg">
            <a href="https://www.facebook.com/kualitysoft" target="_blank"
              ><q-img src="~assets/face.png" height="30px" width="30px"
            /></a>
            <a href="https://www.instagram.com/kualitysoft/" target="_blank"
              ><q-img src="~assets/instagram.png" height="30px" width="30px"
            /></a>
            <a
              href="https://www.linkedin.com/company/kualitysoft/"
              target="_blank"
              ><q-img src="~assets/linkedin.png" height="30px" width="30px"
            /></a>
          </div>
        </div>
      </div>
      <div class="q-my-md container">
        <q-separator dark />
      </div>
      <div class="q-pt-md container">
        <div>
          <a
            href="https://www.kualitysoft.co.uk/"
            target="_blank"
            style="text-decoration: none"
          >
            <q-img src="~assets/love.png" height="18px" width="240px" />
          </a>
        </div>
      </div>
    </footer>
    <footer class="bg-primary text-white q-py-lg lt-md">
      <a href="https://wa.me/+96878678282" target="_blank">
        <q-img
          src="~assets/whatsapp.png"
          class="whatsapp q-mb-md q-mr-md"
          height="40px"
          width="40px"
        />
      </a>
      <div class="row container text-center">
        <div class="col-12 col-md-6 col-lg-5 q-gutter-y-md">
          <div class="text-h6 text-bold">COMPANY</div>
          <div><a href="#/about">About</a></div>
          <div><a href="#/service">What We Do</a></div>
          <div><a href="#/about">How We Do</a></div>
          <div><a href="#/contact">Contact</a></div>
        </div>
        <div class="col-12 col-md-6 col-lg-3 q-pt-lg q-gutter-y-md">
          <div class="text-h6 text-bold">SERVICES</div>
          <div><a href="#/service">Construction</a></div>
          <div><a href="#/service">Interior Designing</a></div>
          <div><a href="#/service">Exterior Designing</a></div>
          <div><a href="#/service">Maintenance</a></div>
          <div><a href="#/service">Heating System</a></div>
          <div><a href="#/service">Air Conditioning Equipment</a></div>
          <div><a href="#/service">Ducts</a></div>
        </div>
        <div class="col-12 col-md-6 col-lg-4 q-pt-lg q-gutter-y-sm">
          <div>
            <div class="text-h6 text-bold text-red">HAVE QUESSTIONS?</div>
          </div>
          <div class="text-bold q-pb-md" style="font-size: 2rem">
            <div class="div" style="font-size: 12px">Get in Touch with us</div>
            <div class="">
              <a href="https://wa.me/+96878678282" target="_blank">
                +96878678282
              </a>
            </div>
          </div>
          <div class="text-bold">Rowad El-Mada LLC</div>
          <div>Al Khuwair, Bousher, Muscat</div>
          <div>info@rowadel-mada.com</div>
        </div>
        <div class="q-gutter-x-md q-pt-lg q-mx-auto">
          <a href="https://www.facebook.com/kualitysoft" target="_blank"
            ><q-img src="~assets/face.png" height="30px" width="30px"
          /></a>
          <a href="https://www.instagram.com/kualitysoft/" target="_blank"
            ><q-img src="~assets/instagram.png" height="30px" width="30px"
          /></a>
          <a
            href="https://www.linkedin.com/company/kualitysoft/"
            target="_blank"
            ><q-img src="~assets/linkedin.png" height="30px" width="30px"
          /></a>
        </div>
      </div>
      <div class="q-my-md q-pt-md container">
        <q-separator dark />
      </div>
      <div class="q-pt-md container text-center">
        <div>
          <a
            href="https://www.kualitysoft.co.uk/"
            target="_blank"
            style="text-decoration: none"
          >
            <q-img src="~assets/love.png" height="17px" width="200px" />
          </a>
        </div>
      </div>
    </footer>
  </q-layout>
</template>

<script>
import { ref, onMounted, onUnmounted } from "vue";

export default {
  name: "MainLayout",
  setup() {
    const leftDrawerOpen = ref(false);
    const mobList = ref(null);
    const displayList = () => {
      // Your displayList logic here
    };
    const handleScroll = () => {
      if (window.scrollY > 250) {
        mobList.value.style.backgroundColor = "white";
        mobList.value.style.opecity = "100%";
      } else {
        mobList.value.style.backgroundColor = "";
        mobList.value.style.opecity = "";
      }
    };

    onMounted(() => {
      leftDrawerOpen.value = false;
      window.addEventListener("scroll", handleScroll);
    });
    onUnmounted(() => {
      window.removeEventListener("scroll", handleScroll);
    });

    return {
      leftDrawerOpen,
      displayList,
      handleScroll,
      mobList,
      drawer() {
        leftDrawerOpen.value = true;
      },
      close() {
        leftDrawerOpen.value = false;
      },
    };
  },
};
</script>



<style lang="scss">
.whatsapp {
  position: fixed;
  bottom: 0px;
  right: 0px;
}

.div {
  margin-bottom: -12px;
  font-size: 12px;
}

.opecity {
  opacity: 100%;
}
</style>
