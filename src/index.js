import "./sass/main.scss";
import {
  modernSliderConfig,
  classicSliderConfig,
} from "./configs/slidersConfig";

import "../node_modules/@splidejs/splide/dist/css/splide-core.min.css";
import { Splide } from "@splidejs/splide";
import { Grid } from "@splidejs/splide-extension-grid";

document.addEventListener("DOMContentLoaded", function () {
  const sliderContainers = document.querySelectorAll(".splide");
  let slidersInstances = [];

  const observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      if (mutation.attributeName === "type") {
        initSliders();
      }
    });
  });

  const initSliders = () => {
    if (slidersInstances.length > 0) {
      slidersInstances.forEach((instance) => {
        instance.destroy({ completely: true });
      });
      slidersInstances = [];
    }

    const slidersModern = document.querySelectorAll(".splide[type=modern]");
    const slidersClassic = document.querySelectorAll(".splide[type=classic]");

    // Init Modern Sliders //
    slidersModern.forEach((slider) => {
      const splideModern = new Splide(slider, modernSliderConfig());
      const bar = splideModern.root.querySelector(".my-slider-progress-bar");

      // Update the bar width:
      splideModern.on("mounted move", function () {
        var end = splideModern.Components.Controller.getEnd() + 1;
        bar.style.width = String((100 * (splideModern.index + 1)) / end) + "%";
      });

      slidersInstances.push(splideModern);
      splideModern.mount();
      splideModern.refresh();
    });

    // Init Classic Sliders //
    slidersClassic.forEach((slider) => {
      const elementsPerPage = window
        .getComputedStyle(slider)
        .getPropertyValue("--elements-on-swipe");

      const splideClassic = new Splide(
        slider,
        classicSliderConfig(elementsPerPage)
      );

      slidersInstances.push(splideClassic);
      splideClassic.mount({ Grid });
    });
  };

  sliderContainers.forEach((slider) => {
    observer.observe(slider, {
      attributes: true,
    });
  });

  initSliders();
});
