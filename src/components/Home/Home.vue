<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide>
        <img
          slot="img"
          class="d-block img-fluid img-carousel"
          src="../../assets/1.png"
          alt="image slot"
        >
      </b-carousel-slide>

      <b-carousel-slide>
        <img
          slot="img"
          class="d-block img-fluid img-carousel"
          src="../../assets/3.png"
          alt="image slot"
        >
      </b-carousel-slide>

      <b-carousel-slide>
        <img
          slot="img"
          class="d-block img-fluid img-carousel"
          src="../../assets/4.png"
          alt="image slot"
        >
      </b-carousel-slide>
    </b-carousel>
    <div class="component min-h-100" style="background-image:none; background: white">
      <div class="col-md-12">
        <div class="title-backgroud mt-3">
          <p class="title-page mt-3">ULTIME NEWS</p>
        </div>
        <div class="col-md-12">
          <div class="content">
            <div class="container">
              <div class="row">
                <div class="first col-md-4">
                  <b-card
                    class="first"
                    img-src="../../assets/iscriviti.png"
                    img-alt="Card image"
                    img-bottom
                    bg-variant="light"
                  >
                    <b-card-text class="title-date">
                      <span class="title">Ultimi posti disponibili!!!</span>
                      <span class="date">15-04-19</span>
                    </b-card-text>
                    <p>Ancora pochi posti a disponibili per la Rovarè Cup 2019!!!</p>
                    <p>
                      Ecco link con tutte le info per
                      <a
                        href="https://www.facebook.com/events/1711907855621098/"
                      >iscriversi!</a>
                    </p>
                  </b-card>
                </div>
                <div class="first col-md-4">
                  <b-card
                    class="first"
                    img-src="../../assets/sorteggi.png"
                    img-alt="Card image"
                    img-bottom
                    bg-variant="light"
                  >
                    <b-card-text class="title-date">
                      <span class="title">Iscrizioni aperte !!!</span>
                      <span class="date">15-03-19</span>
                    </b-card-text>
                    <p>Non è estate senza Rovarè Cup 😎</p>
                    <p>Dal 24/06 al 13/07</p>
                    <p>⚽ Torneo di calcio a 7 ⚽</p>
                    <p>💰 Montepremi totale 2000€ 💰</p>
                    <a href="https://www.facebook.com/events/1711907855621098/">Iscriviti!</a>
                  </b-card>
                </div>
                <div class="first col-md-4">
                  <b-card
                    class="first"
                    img-src="../../assets/volantino.jpeg"
                    img-alt="Card image"
                    img-bottom
                    bg-variant="light"
                  >
                    <b-card-text class="title-date">
                      <span class="title">Stiamo tornando....</span>
                      <span class="date">01-03-19</span>
                    </b-card-text>
                    <p>Non fartelo raccontare⚽️🥇</p>
                    <p>Per info ed iscrizioni: ‭</p>
                    <p>📞 Marco ‭340 3705754‬  - Enrico ‭349 7114426</p>
                    <p>📩 rovarecup@gmail.com</p>
                  </b-card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style src="./Home.scss" lang="scss"></style>
<script src="./Home.js"></script>
<style src="../../styles/component.scss" lang="scss"></style>


