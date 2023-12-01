<template>
  <q-page>
    <div class="gt-sm">
      <q-carousel
        v-model="slide"
        transition-prev="scale"
        transition-next="scale"
        :autoplay="autoplay"
        @mouseenter="autoplay = false"
        @mouseleave="autoplay = true"
        swipeable
        control-color="negative"
        navigation
        padding
        infinite
        arrows
        class="bg-primary text-white shadow-1 rounded-borders"
        style="height: 100vh; margin-top: -10vh"
      >
        <q-carousel-slide
          v-for="(slide, index) in slides"
          :key="index"
          :name="slide.name"
          :img-src="slide.imgSrc"
          class="column no-wrap flex-center"
        >
          <div class="text-center container">
            <div class="text-h3 text-info text-bold">
              {{ slide.title }}
            </div>
          </div>
        </q-carousel-slide>
      </q-carousel>
    </div>
    <div class="lt-md">
      <q-carousel
        v-model="slide"
        transition-prev="scale"
        transition-next="scale"
        :autoplay="autoplay"
        @mouseenter="autoplay = false"
        @mouseleave="autoplay = true"
        swipeable
        control-color="negative"
        navigation
        padding
        infinite
        arrows
        class="bg-primary text-white shadow-1 rounded-borders"
        style="height: 50vh; margin-top: -10vh"
      >
        <q-carousel-slide
          v-for="(slide, index) in slides"
          :key="index"
          :name="slide.name"
          :img-src="slide.imgSrc"
          class="column no-wrap flex-center"
        >
          <div class="text-center container">
            <div class="text-h6 text-info text-bold">
              {{ slide.title }}
            </div>
          </div>
        </q-carousel-slide>
      </q-carousel>
    </div>

    <div class="bg-primary q-py-lg gt-xs">
      <div class="text-h2 text-center q-pt-xl q-pb-md text-white text-bold">
        How We Do
      </div>
      <div class="row container q-py-xl q-col-gutter-y-md text-center">
        <div
          class="col-12 col-sm-6 col-md-3 q-pb-lg"
          v-for="item in items"
          :key="item"
        >
          <q-img :src="item.img" height="70px" width="70px" />
          <div class="text-h5 text-white text-bold q-pt-md">
            {{ item.title }}
          </div>
        </div>
      </div>
    </div>
    <div class="bg-primary q-py-md lt-sm">
      <div class="text-h5 text-center q-pt-lg q-pb-md text-white text-bold">
        How We Do
      </div>
      <div class="row container q-py-md q-col-gutter-y-md text-center">
        <div class="col-6 col-md-3" v-for="item in items" :key="item">
          <q-img :src="item.img" height="50px" width="50px" />
          <div class="text-h6 text-white text-bold q-pt-md">
            {{ item.title }}
          </div>
        </div>
      </div>
    </div>

    <!-- <div class="container q-pb-lg">
      <div class="q-pt-lg">
        <div class="text-h2 text-primary q-mt-xl q-pb-lg text-bold gt-sm">
          About
        </div>
        <div
          class="text-h5 text-primary q-pb-md text-center text-bold q-mt-sm lt-md"
        >
          About
        </div>
      </div>
      <div class="row q-pb-xl q-col-gutter-lg gt-sm">
        <div class="col-12 col-md-6">
          <div class="text-subtitle1 text-info" align="justify">
            For a construction company engaged in the installation and
            maintenance of heating systems, air conditioning equipment, and
            ducts, the focus lies in ensuring optimal indoor climate control
            within structures. During installation, the company would
            meticulously position and secure heating and cooling equipment,
            configure ductwork, and ensure compliance with safety and building
            codes. This process requires a comprehensive understanding of the
            specific heating and cooling needs of the construction project.
            <br />
            <br />
            In the maintenance phase, the company would undertake regular
            inspections, cleaning procedures, and necessary repairs to guarantee
            the efficient and safe operation of these systems. This includes
            checking and cleaning components such as cooling systems, fans, and
            vents, inspecting cables and connectors for wear, and ensuring a
            stable power supply. The construction company's expertise in HVAC
            (heating, ventilation, and air conditioning) systems contributes not
            only to the comfort of occupants but also to the energy efficiency
            and sustainability of the constructed spaces.
          </div>
        </div>
        <div class="col-12 col-md-6">
          <div class="">
            <div class="text-center q-pt-md">
              <div class="row q-pb-xl">
                <div class="col-6">
                  <q-img
                    src="~assets/installation.jpeg"
                    height="80px"
                    width="80px"
                  />
                  <div class="text-h6 text-primary text-bold q-pt-md">
                    Installation
                  </div>
                </div>
                <div class="col-6">
                  <q-img
                    src="~assets/heating.jpeg"
                    height="80px"
                    width="80px"
                  />
                  <div class="text-h6 text-primary text-bold q-pt-md">
                    Heating System
                  </div>
                </div>
              </div>
              <div class="row q-py-xl">
                <div class="col-6">
                  <q-img src="~assets/ac.jpeg" height="80px" width="80px" />
                  <div class="text-h6 text-primary text-bold q-pt-md">
                    Air Conditioning
                  </div>
                </div>

                <div class="col-6">
                  <q-img src="~assets/ducts.jpeg" height="80px" width="80px" />
                  <div class="text-h6 text-primary text-bold q-pt-md">
                    Ducts
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row q-col-gutter-y-lg lt-md">
        <div class="col-12 col-md-6">
          <div class="text-subtitle1 text-info" align="justify">
            For a construction company engaged in the installation and
            maintenance of heating systems, air conditioning equipment, and
            ducts, the focus lies in ensuring optimal indoor climate control
            within structures. During installation, the company would
            meticulously position and secure heating and cooling equipment,
            configure ductwork, and ensure compliance with safety and building
            codes. This process requires a comprehensive understanding of the
            specific heating and cooling needs of the construction project.
            <br />
            <br />
            In the maintenance phase, the company would undertake regular
            inspections, cleaning procedures, and necessary repairs to guarantee
            the efficient and safe operation of these systems. This includes
            checking and cleaning components such as cooling systems, fans, and
            vents, inspecting cables and connectors for wear, and ensuring a
            stable power supply. The construction company's expertise in HVAC
            (heating, ventilation, and air conditioning) systems contributes not
            only to the comfort of occupants but also to the energy efficiency
            and sustainability of the constructed spaces.
          </div>
        </div>
        <div class="col-12 col-md-6">
          <div class="">
            <div class="text-center">
              <div class="row q-pb-md">
                <div class="col-6">
                  <q-img
                    src="~assets/installation.jpeg"
                    height="60px"
                    width="60px"
                  />
                  <div class="text-h6 text-primary text-bold q-pt-md">
                    Installation
                  </div>
                </div>
                <div class="col-6">
                  <q-img
                    src="~assets/heating.jpeg"
                    height="60px"
                    width="60px"
                  />
                  <div class="text-h6 text-primary text-bold q-pt-md">
                    Heating System
                  </div>
                </div>
              </div>
              <div class="row q-py-md">
                <div class="col-6">
                  <q-img src="~assets/ducts.jpeg" height="60px" width="60px" />
                  <div class="text-h6 text-primary text-bold q-pt-md">
                    Ducts
                  </div>
                </div>
                <div class="col-6">
                  <q-img src="~assets/ac.jpeg" height="60px" width="60px" />
                  <div class="text-h6 text-primary text-bold q-pt-md">
                    Air Conditioning
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> -->

    <div class="container q-py-xl q-my-lg gt-sm">
      <div class="text-h2 text-bold text-center text-primary q-pb-lg q-mb-sm">
        Our Mission and Vission
      </div>
      <div class="row q-pt-md">
        <div class="col-6 flex flex-center">
          <div class="text-subtitle1 text-primary" align="justify">
            We seek to improve the lives of our clients by providing unique and
            attractive interior design solutions, and creating innovative real
            estate projects that meet their needs and exceed their expectations.
            We also offer high-quality and efficient air conditioning systems to
            ensure their comfort and that of their families.
          </div>
          <br />
          <div class="text-subtitle1 text-primary" align="justify">
            We ensure that all our projects are characterized by high quality
            and modern design, in line with the aspirations and expectations of
            our customers. We adopt strict selection standards and cooperate
            with material suppliers and local partners, to ensure the best
            possible quality and service.
          </div>
        </div>
        <div class="col-6 q-pl-md">
          <q-img src="~assets/vission.jpg" height="280px" />
        </div>
      </div>
    </div>
    <div class="container q-py-md q-my-md lt-md">
      <div class="text-h5 text-bold text-center text-primary q-pb-md">
        Our Mission and Vission
      </div>
      <div class="row q-pt-md q-col-gutter-y-md">
        <div class="col-12 col-md-6 flex flex-center">
          <div class="text-subtitle1 text-primary" align="justify">
            We seek to improve the lives of our clients by providing unique and
            attractive interior design solutions, and creating innovative real
            estate projects that meet their needs and exceed their expectations.
            We also offer high-quality and efficient air conditioning systems to
            ensure their comfort and that of their families.
          </div>
          <br />
          <div class="text-subtitle1 text-primary" align="justify">
            We ensure that all our projects are characterized by high quality
            and modern design, in line with the aspirations and expectations of
            our customers. We adopt strict selection standards and cooperate
            with material suppliers and local partners, to ensure the best
            possible quality and service.
          </div>
        </div>
        <div class="col-12 col-md-6">
          <q-img src="~assets/vission.jpg" height="280px" />
        </div>
      </div>
    </div>

    <div class="bg-primary q-py-lg gt-sm">
      <div class="text-h2 text-center q-pt-xl q-pb-md text-white text-bold">
        Except Nothing,
      </div>
      <div class="text-h2 text-center q-pb-xl text-white text-bold">
        but Quality.
      </div>
    </div>
    <div class="bg-primary q-mt-md q-py-md lt-md">
      <div class="text-h5 text-center q-pt-md q-pb-md text-white text-bold">
        Except Nothing,
      </div>
      <div class="text-h5 text-center q-pb-md text-white text-bold">
        but Quality.
      </div>
    </div>

    <div class="q-py-xl gt-sm">
      <div class="text-center text-h2 q-py-lg text-bold text-primary">
        Industries We Serve
      </div>
      <div class="row text-center q-pb-xl q-pt-md container q-col-gutter-y-xl">
        <div class="col-4">
          <q-img src="~assets/oil.png" height="70px" width="70px" />
          <div class="text-h6 text-primary text-bold q-pt-sm">Oil & Gas</div>
        </div>
        <div class="col-4">
          <q-img src="~assets/marine.png" height="70px" width="70px" />
          <div class="text-h6 text-primary text-bold q-pt-sm">Marine</div>
        </div>
        <div class="col-4">
          <q-img src="~assets/mechanical.png" height="70px" width="70px" />
          <div class="text-h6 text-primary text-bold q-pt-sm">
            Mechanical & Electrical
          </div>
        </div>
        <div class="col-4">
          <q-img src="~assets/airport.png" height="70px" width="70px" />
          <div class="text-h6 text-primary text-bold q-pt-sm">
            Airports & Roads
          </div>
        </div>
        <div class="col-4">
          <q-img src="~assets/civil.png" height="70px" width="70px" />
          <div class="text-h6 text-primary text-bold q-pt-sm">Civil</div>
        </div>
        <div class="col-4">
          <q-img src="~assets/building.png" height="70px" width="70px" />
          <div class="text-h6 text-primary text-bold q-pt-sm">Buildings</div>
        </div>
      </div>
    </div>
    <div class="q-py-lg lt-md">
      <div class="text-center text-h5 q-py-md text-bold text-primary">
        Industries We Serve
      </div>
      <div class="row text-center q-pb-md q-pt-md container q-col-gutter-y-md">
        <div class="col-6 col-md-4">
          <q-img src="~assets/oil.png" height="40px" width="40px" />
          <div class="text-subtitle1 text-primary text-bold q-pt-sm">
            Oil & Gas
          </div>
        </div>
        <div class="col-6 col-md-4">
          <q-img src="~assets/marine.png" height="40px" width="40px" />
          <div class="text-subtitle1 text-primary text-bold q-pt-sm">
            Marine
          </div>
        </div>
        <div class="col-6 col-md-4">
          <q-img src="~assets/civil.png" height="40px" width="40px" />
          <div class="text-subtitle1 text-primary text-bold q-pt-sm">Civil</div>
        </div>
        <div class="col-6 col-md-4">
          <q-img src="~assets/building.png" height="40px" width="40px" />
          <div class="text-subtitle1 text-primary text-bold q-pt-sm">
            Buildings
          </div>
        </div>
        <div class="col-6 col-md-4">
          <q-img src="~assets/mechanical.png" height="40px" width="40px" />
          <div class="text-subtitle1 text-primary text-bold q-pt-sm">
            Mechanical & Electrical
          </div>
        </div>
        <div class="col-6 col-md-4">
          <q-img src="~assets/airport.png" height="40px" width="40px" />
          <div class="text-subtitle1 text-primary text-bold q-pt-sm">
            Airports & Roads
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref } from "vue";
export default {
  name: "IndexPage",
  setup() {
    return {
      slide: ref("style"),
      autoplay: ref(true),
      project: ref(1),
      gallery: ref(1),
      slides: [
        {
          name: "style",
          imgSrc:
            "https://plus.unsplash.com/premium_photo-1671808062726-2a7ffcd6109e?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          title: "Developing With Vision",
        },
        {
          name: "style1",
          imgSrc:
            "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          title: " When We Build, Let Us Think",
        },
        {
          name: "style2",
          imgSrc:
            "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          title: "Futuristic And Sustainable",
        },
        {
          name: "style3",
          imgSrc:
            "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          title: "Inspired Solutions For Your Construction",
        },
        {
          name: "style4",
          imgSrc:
            "https://abrarme.com/wp-content/uploads/2022/10/home-banner-2-1.jpg",
          title: "The Road To Success",
        },
      ],
      items: [
        {
          img: "https://abrarme.com/wp-content/uploads/2018/12/h7-custom-icon-img-01.png",
          title: "1. Discussion",
        },
        {
          img: "https://abrarme.com/wp-content/uploads/2018/12/h7-custom-icon-img-02.png",
          title: "2. Planning",
        },
        {
          img: "https://abrarme.com/wp-content/uploads/2022/10/Designing-icon.png",
          title: "3. Designing",
        },
        {
          img: "https://abrarme.com/wp-content/uploads/2018/12/h7-custom-icon-img.png",
          title: "4. Execution",
        },
      ],
    };
  },
};
</script>


<style lang="scss">
.number {
  border: solid 2px #002357;
  border-radius: 100%;
  font-size: 40px;
}
.number1 {
  border: solid 2px #002357;
  border-radius: 100%;
  margin: 10px 5px;
  padding: 15px 10px;
  font-size: 40px;
}
</style>
