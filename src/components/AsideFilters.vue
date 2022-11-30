<template>
  <aside class="aside">
    <section class="aside_title">
      <h2 class="aside_sort-filters">SORT & FILTERS</h2>
      <button class="aside_button-close" @click="closeFilters(false)">
        <img
          class="aside_img-close"
          :src="require('@/assets/images/cross.png')"
          alt="cross"
        />
      </button>
    </section>
    <div class="nav_scroll">
      <nav class="nav_aside">
        <section class="nav_item">
          <button class="button_aside" @click="isOpenSort = !isOpenSort">
            Sort by
          </button>
          <ul class="nav_subItem" v-if="isOpenSort">
            <!-- <li><input type="radio" name="sort-by" checked /> No sorted</li>-->
            <li>
              <input
                type="radio"
                @click="sort = 'desc'"
                name="sort-by"
                class="sort_desc"
                checked
              />
              By score: High to Low
            </li>
            <li>
              <input
                type="radio"
                name="sort-by"
                @click="sort = 'asc'"
                class="sort_asc"
              />
              By score: Low to High
            </li>
          </ul>
        </section>
        <section class="nav_item">
          <button class="button_aside" @click="isOpenScore = !isOpenScore">
            Score
          </button>
          <div class="nav_subItem" v-if="isOpenScore">
            <div class="slider_score">
              <Slider
                @click="setValue()"
                class="slider"
                v-model="range"
                :max="10"
                :min="0"
              />
            </div>
          </div>
        </section>
        <section class="nav_item">
          <button class="button_aside" @click="openGenre()">Genre</button>
          <div class="nav_subItem" v-if="isOpenGenre">
            <div class="filters_genre">
              <div
                class="square1"
                @dragenter="enter($event)"
                @dragover="over($event)"
                @dragleave="leave($event)"
                @drop="drop($event)"
              >
                <button
                  v-for="(category, index) in categories"
                  :key="index"
                  class="button_genre-drag"
                  :id="'astraddle' + index"
                  draggable="true"
                  @dragstart="start($event)"
                  @dragend="end($event)"
                  :style="'background:' + category.color"
                >
                  {{ category.title }}
                </button>
              </div>
              <div>
                <p>
                  You can choose
                  <br />
                  three movie genres
                </p>
                <div
                  class="square2"
                  @dragenter="enter($event)"
                  @dragover="over($event)"
                  @dragleave="leave($event)"
                  @drop="drop($event)"
                ></div>
              </div>
            </div>
          </div>
        </section>
        <section class="nav_item">
          <button class="button_aside" @click="isOpenYear = !isOpenYear">
            Year
          </button>
          <div class="nav_subItem" v-if="isOpenYear">
            <div class="slider_score">
              <Slider
                @click="setValue()"
                class="slider"
                v-model="rangeYear"
                :max="2022"
                :min="1980"
              />
            </div>
          </div>
        </section>
        <section class="nav_item">
          <button class="button_aside" @click="isOpenMinutes = !isOpenMinutes">
            Minutes
          </button>
          <div class="nav_subItem" v-if="isOpenMinutes">
            <div class="slider_score">
              <Slider
                @click="setValue()"
                class="slider"
                v-model="rangeTime"
                :max="300"
                :min="50"
              />
            </div>
          </div>
        </section>
      </nav>
    </div>
    <div class="aside_button-applyFilters">
      <button @click="applyFilters()" class="button_view-results">
        View Results
      </button>
    </div>
  </aside>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import createStore from "@/store";
import Slider from "@vueform/slider";

export default defineComponent({
  name: "AsideFilters",
  components: { Slider },
  data: function () {
    return {
      isOpenSort: false,
      isOpenScore: false,
      isOpenYear: false,
      isOpenGenre: false,
      isOpenMinutes: false,
      range: [0, 10],
      rangeTime: [50, 300],
      rangeYear: [1980, 2022],
      sort: "desc",
      genres: [] as any[],
      filters: [
        "minScore",
        "maxScore",
        "minYear",
        "maxYear",
        "minMinutes",
        "maxMinutes",
        "sortRating",
      ],
      params: ["0", "10", "1980", "2022", "50", "300", "desc"],
      categories: [
        {
          title: "Romance",
          color: "lightblue",
        },
        {
          title: "Horror",
          color: "#f2ad9f",
        },
        {
          title: "Action",
          color: "rgba(224, 255, 74, 0.67)",
        },
        {
          title: "Animation",
          color: "#efc592",
        },
        {
          title: "Comedy",
          color: "rgba(193, 132, 255, 0.67)",
        },
        {
          title: "Fantasy",
          color: "rgb(146,255,250)",
        },
        {
          title: "Sci-Fi",
          color: "rgba(150,245,133,0.67)",
        },
        {
          title: "Musical",
          color: "rgb(255,180,240)",
        },
        {
          title: "Documentary",
          color: "rgba(166,235,255,0.67)",
        },
        {
          title: "Musical",
          color: "#f2ad9f",
        },
        {
          title: "Documentary",
          color: "rgba(224, 255, 74, 0.67)",
        },
      ],
    };
  },
  methods: {
    closeFilters: function (value: boolean) {
      createStore.state.isOpen = value;
      let element = document.querySelector(".sectionOpen");
      if (element !== null) element.remove();
    },
    setValue: function () {
      let element = document.querySelectorAll(".slider-handle");
      if (element !== null) {
        for (let i = 0; i < element.length; i = i + 2) {
          if (element[i].ariaValueMin === "0.0") {
            console.log(element[i]);
            this.params[0] = element[i].ariaValueNow;
            this.params[1] = element[i].ariaValueMax;
          } else if (element[i].ariaValueMin === "1980.0") {
            this.params[2] = element[i].ariaValueNow.substring(
              0,
              element[i].ariaValueNow.length - 2
            );
            this.params[3] = element[i].ariaValueMax.substring(
              0,
              element[i].ariaValueMax.length - 2
            );
          } else if (element[i].ariaValueMin === "50.0") {
            this.params[4] = element[i].ariaValueNow.substring(
              0,
              element[i].ariaValueNow.length - 2
            );
            this.params[5] = element[i].ariaValueMax.substring(
              0,
              element[i].ariaValueMax.length - 2
            );
          }
        }
      }
    },
    setGenre: function () {
      let genres = document.querySelector(".square2");
      if (genres !== null) {
        for (let i = 0; i < genres.childElementCount; i++) {
          this.genres[i] = genres.childNodes[i].textContent;
        }
      }
    },
    openGenre: function () {
      this.setGenre();
      this.isOpenGenre = !this.isOpenGenre;
    },
    applyFilters: function () {
      this.params[this.params.length - 1] = this.sort;
      if (this.genres.length === 0 && this.isOpenGenre) {
        this.setGenre();
      }
      createStore.dispatch("setAsideGenders", this.genres);
      createStore.dispatch("setAsideFilters", this.filters);
      createStore.dispatch("setAsideParams", this.params);
      createStore.dispatch("setIsFilter", true);
      createStore.dispatch("searchFiltersAside");
      this.closeFilters(false);
    },
    drop: function (e: any) {
      var elementAstraddle = e.dataTransfer.getData("Data"); // Elemento arrastrado
      e.target.appendChild(document.getElementById(elementAstraddle));
      e.target.style.border = ""; // Quita el borde
    },
    over: function (e: any) {
      if (e.target.className === "button_genre-drag") {
        return true;
      }
      if (e.target.className === "square2") {
        let element = document.querySelector(".square2");
        if (element !== null) {
          if (element.childElementCount === 3) {
            return true;
          }
        }
      }
      e.preventDefault();
    },
    start: function (e: any) {
      e.dataTransfer.effecAllowed = "move"; // Define el efecto como mover (Es el por defecto)
      e.dataTransfer.setData("Data", e.target.id); // Coje el elemento que se va a mover
      e.dataTransfer.setDragImage(e.target, 0, 0); // Define la imagen que se vera al ser arrastrado el elemento y por donde se coje el elemento que se va a mover (el raton aparece en la esquina sup_izq con 0,0)
      e.target.style.opacity = "0.4";
    },
    end: function (e: any) {
      e.target.style.opacity = ""; // Pone la opacidad del elemento a 1
      e.dataTransfer.clearData("Data");
    },
    enter: function (e: any) {
      e.target.style.border = "2px solid grey";
    },
    leave: function (e: any) {
      e.target.style.border = "";
    },
  },
});
</script>

<style lang="scss" scoped>
.aside {
  position: absolute;
  top: 0;
  background: white;
  height: 100%;
  display: flex;
  flex-direction: column;
  border-right: solid lightgrey;
  padding-top: 2rem;
}
.nav_scroll {
  overflow: auto;
  scoll-snap-type: y mandatory;
}
.nav_aside {
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;
}
.nav_subItem {
  list-style: none;
  li {
    display: flex;
    justify-content: left;
    padding-bottom: 0.5rem;
  }
}
.nav_item {
  border-bottom: solid lightgrey;
}
.button_aside {
  width: 100%;
  border-style: none;
  background: white;
  margin-top: 2rem;
  margin-bottom: 2rem;
  font-size: 1rem;
}
.aside_title {
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  align-items: center;
  padding-bottom: 2rem;
  border-bottom: solid lightgrey 10px;
}
.aside_img-close {
  height: 2rem;
  width: 2rem;
}
.aside_button-close {
  margin-right: 2rem;
  background: white;
  border: none;
}
.aside_button-close:hover {
  border-radius: 40px;
  background: lightblue;
}
.aside_sort-filters {
  margin-left: 3rem;
}
.slider {
  width: 80%;
}
.slider_score {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
  margin-top: 2rem;
}
.button_view-results {
  border-radius: 30px;
  height: 3rem;
  width: 15rem;
  border: none;
  background: lightblue;
  &:hover {
    background: rgba(166, 235, 255, 0.67);
  }
}
.filters_genre {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.square1,
.square2 {
  margin-left: 1rem;
  margin-right: 1rem;
  display: flex;
  flex-direction: column;
  height: 40rem;
  margin-bottom: 1rem;
}
.square2 {
  background: #f7dfc2;
  height: 20rem;
}
.button_genre-drag {
  height: 3rem;
  width: 10rem;
  margin: 0.5rem;
  border-radius: 40px;
  border: none;
}
</style>
<style src="@vueform/slider/themes/default.css"></style>
