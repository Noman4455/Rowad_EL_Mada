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
        style="height: 100vh; margin-top: -15vh"
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
        style="height: 50vh; margin-top: -15vh"
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

    <div class="container q-pt-lg">
      <div
        class="text-h2 text-center text-primary q-mt-xl q-py-lg text-bold gt-sm"
      >
        About
      </div>
      <div class="text-h5 text-primary text-center text-bold q-mt-md lt-md">
        About
      </div>
      <div class="row q-pb-xl q-mb-lg q-col-gutter-x-lg q-pt-lg">
        <div class="col-12 col-md-6">
          <div class="text-subtitle1 text-info" align="justify">
            Rawad-el Mada thrives on the dynamic interplay of aesthetics and
            functionality in construction, seamlessly blending interior and
            exterior design. Our expertise extends to personalized, functional
            interior spaces and visually appealing exterior structures, creating
            a harmonious fusion of style and practicality that transforms
            spaces.
            <br />
            <br />
            As a construction firm specializing in HVAC systems, we prioritize
            achieving optimal indoor climate control. During installation, our
            meticulous approach ensures precise positioning and securing of
            equipment, configuration of ductwork, and strict adherence to safety
            codes. We possess a comprehensive understanding of project-specific
            heating and cooling needs, integral for delivering effective
            solutions. In the maintenance phase, Rawad-el Mada conducts regular
            inspections, cleaning, and repairs to guarantee efficient and safe
            operation. Our expertise not only enhances occupant comfort but also
            significantly improves energy efficiency and sustainability in the
            spaces we construct.
            <br />
            <br />
            Trust Rawad-el Mada for innovative construction solutions that
            elevate both aesthetics and functionality.
          </div>
        </div>
        <div class="col-1 gt-sm"></div>
        <div class="q-pt-lg q-mt-sm col-12 col-md-5 gt-sm">
          <div class="text-center">
            <div class="row q-gutter-md">
              <div class="col-12 col-sm-5 box">
                <q-img
                  src="~assets/construction.png"
                  height="60px"
                  width="60px"
                />
                <div class="text-h6 text-primary text-bold q-pt-md">
                  Construction
                </div>
              </div>
              <div class="col-12 col-sm-5 box">
                <q-img src="~assets/interior.png" height="60px" width="60px" />
                <div class="text-h6 text-primary text-bold q-pt-md">
                  Interior Designing
                </div>
              </div>
              <div class="col-12 col-sm-5 box">
                <q-img src="~assets/exterior.png" height="60px" width="60px" />
                <div class="text-h6 text-primary text-bold q-pt-md">
                  Exterior Designing
                </div>
              </div>
              <div class="col-12 col-sm-5 box">
                <q-img src="~assets/heating.jpeg" height="60px" width="60px" />
                <div class="text-h6 text-primary text-bold q-pt-md">
                  Heating System
                </div>
              </div>
              <div class="col-12 col-sm-5 box">
                <q-img src="~assets/ac.jpeg" height="60px" width="60px" />
                <div class="text-h6 text-primary text-bold q-pt-md">
                  Air Conditioning
                </div>
              </div>

              <div class="col-12 col-sm-5 box">
                <q-img src="~assets/ducts.jpeg" height="60px" width="60px" />
                <div class="text-h6 text-primary text-bold q-pt-md">
                  Air Ducts
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-5 lt-md">
          <div class="text-center q-pt-md q-pr-md">
            <div class="row q-gutter-md">
              <div class="col-6 box">
                <q-img
                  src="~assets/construction.png"
                  height="60px"
                  width="60px"
                />
                <div class="text-h6 text-primary text-bold q-pt-md">
                  Construction
                </div>
              </div>
              <div class="col box">
                <q-img src="~assets/interior.png" height="60px" width="60px" />
                <div class="text-h6 text-primary text-bold q-pt-md">
                  Interior Designing
                </div>
              </div>
              <div class="col-6 box">
                <q-img src="~assets/exterior.png" height="60px" width="60px" />
                <div class="text-h6 text-primary text-bold q-pt-md">
                  Exterior Designing
                </div>
              </div>
              <div class="col box">
                <q-img src="~assets/heating.jpeg" height="60px" width="60px" />
                <div class="text-h6 text-primary text-bold q-pt-md">
                  Heating System
                </div>
              </div>
              <div class="col-6 box">
                <q-img src="~assets/ac.jpeg" height="60px" width="60px" />
                <div class="text-h6 text-primary text-bold q-pt-md">
                  Air Conditioning
                </div>
              </div>

              <div class="col box">
                <q-img src="~assets/ducts.jpeg" height="60px" width="60px" />
                <div class="text-h6 text-primary text-bold q-pt-md">
                  Air Ducts
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-primary q-py-lg gt-xs">
      <div class="text-h2 text-center q-pt-xl q-pb-md text-white text-bold">
        How We Do
      </div>
      <div class="row container q-py-xl q-col-gutter-y-md text-center">
        <div class="row container q-py-md q-col-gutter-y-md text-center">
          <div class="col-6 col-md-3">
            <q-img src="~assets/circle.png" height="70px" width="70px" />
            <div class="text-h5 text-white text-bold q-pt-md">
              1. Discussion
            </div>
          </div>
          <div class="col-6 col-md-3">
            <q-img src="~assets/round.png" height="70px" width="70px" />
            <div class="text-h5 text-white text-bold q-pt-md">2. Planning</div>
          </div>
          <div class="col-6 col-md-3">
            <q-img src="~assets/design.png" height="70px" width="70px" />
            <div class="text-h5 text-white text-bold q-pt-md">3 Designing</div>
          </div>
          <div class="col-6 col-md-3">
            <q-img src="~assets/execution.png" height="70px" width="70px" />
            <div class="text-h5 text-white text-bold q-pt-md">4. Execution</div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-primary q-py-md lt-sm">
      <div class="text-h5 text-center q-pt-lg q-pb-md text-white text-bold">
        How We Do
      </div>
      <div class="row container q-py-md q-col-gutter-y-md text-center">
        <div class="row container q-py-md q-col-gutter-y-md text-center">
          <div class="col-6 col-md-3">
            <q-img src="~assets/circle.png" height="50px" width="50px" />
            <div class="text-h6 text-white text-bold q-pt-md">
              1. Discussion
            </div>
          </div>
          <div class="col-6 col-md-3">
            <q-img src="~assets/round.png" height="50px" width="50px" />
            <div class="text-h6 text-white text-bold q-pt-md">2. Planning</div>
          </div>
          <div class="col-6 col-md-3">
            <q-img src="~assets/design.png" height="50px" width="50px" />
            <div class="text-h6 text-white text-bold q-pt-md">3 Designing</div>
          </div>
          <div class="col-6 col-md-3">
            <q-img src="~assets/execution.png" height="50px" width="50px" />
            <div class="text-h6 text-white text-bold q-pt-md">4. Execution</div>
          </div>
        </div>
      </div>
    </div>

    <div class="container q-py-xl q-my-lg gt-sm">
      <div class="text-h2 text-bold text-center text-primary q-pb-lg q-mb-lg">
        Our Mission and Vision
      </div>
      <div class="row q-pt-md">
        <div class="col-6 flex flex-center">
          <div class="text-subtitle1 text-primary" align="justify">
            We seek to improve the lives of our clients by providing unique and
            attractive interior design solutions, and creating innovative real
            estate projects that meet their needs and exceed their expectations.
            We offer high-quality and efficient air conditioning systems to
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
            We offer high-quality and efficient air conditioning systems to
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
        Constructing Solutions that Balance
      </div>
      <div class="text-h2 text-center q-pb-xl text-white text-bold">
        Beauty and Practicality
      </div>
    </div>
    <div class="q-px-md bg-primary q-mt-md q-py-md lt-md">
      <div class="text-h5 text-center q-pt-md q-pb-md text-white text-bold">
        Constructing Solutions that Balance Beauty and Practicality
      </div>
    </div>

    <div class="q-py-xl gt-sm">
      <div
        class="text-center text-h2 q-pt-lg q-pb-xl q-mb-xl text-bold text-primary"
      >
        Industries We Serve
      </div>
      <div class="row text-center q-pb-xl q-pt-md container q-col-gutter-xl">
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
import img1 from "../assets/cons1.png";
import img2 from "../assets/cons2.png";
import img3 from "../assets/cons3.png";
import img8 from "../assets/cons8.png";
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
          imgSrc: img1,
          title: "Developing With Vision",
        },
        {
          name: "style1",
          imgSrc: img2,
          title: " When We Build, Let Us Think",
        },
        {
          name: "style2",
          imgSrc: img3,
          title: "Futuristic And Sustainable",
        },
        {
          name: "style4",
          imgSrc: img8,
          title: "The Road To Success",
        },
      ],
    };
  },
};
</script>

