# recommendation-widget

Recommendation Widget for product cards, represented in two different layouts: "modern" and "classic".

## Building and running on localhost

First install dependencies:

```sh
npm install
```

To create a production build:

```sh
npm run build
```

To create a development build:

```sh
npm run dev
```

## Usage

This is the basic HTML structure that recommendation-widget requires:

```html
<div class="recommendationWidget splide" type="modern">
  <div class="splide__arrows">
    <button class="splide__arrow splide__arrow--prev"></button>
    <button class="splide__arrow splide__arrow--next"></button>
  </div>

  <div class="splide__track">
    <ul class="splide__list">
      // List of product-cards

      <li class="splide__slide product-card">
        <div class="product-card__img"></div>
        <div class="product-card__info">
          <p class="product-card__brand">Brand name</p>
          <p class="product-card__name">Polstergarnitur Safrika 3tlg.</p>
          <div class="product-card__price">3.629,00 €</div>
          <div class="product-card__price product-card__price--sale">
            1.653,00 €
          </div>
        </div>
      </li>

      // ... Other product cards
    </ul>
  </div>

  <div class="my-slider-progress">
    <div class="my-slider-progress-bar"></div>
  </div>
</div>
```

This component was built on top of the library [Splide](https://splidejs.com/ "Splide") and adapted for mobile and desktop devices.

Changing attribute `type` to `type="classic"` or `type="modern"` in the runtime will cause changes in styling and scrolling behaviour of components. You can handle many instances of these sliders on a single page.

To change amount of scrolling elements in "classic widget" you can change CSS custom variable `--elements-on-swipe` in the file `/src/sass/components/_slider.scss`.
