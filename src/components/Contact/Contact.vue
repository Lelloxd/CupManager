<template>
  <div class="component min-h-100">
    <div class="col-md-8">
      <div class="content">
        <div class="mt-8">
          <b-card>
            <b-card-text>Contatti</b-card-text>
            <div class="row">
              <div class="col-md-12">
                <p>
                  <i class="fas fa-map-marker-alt"></i>
                  Via Canareggio 37
                  Rovarè, Veneto, Italy
                </p>
                <p>
                  <i class="fas fa-at"></i>
                  rovarecup@gmail.com
                </p>
                <p>
                  <a href="https://www.facebook.com/Rovarecupofficial/">
                    <i class="fab fa-facebook fa-2x facebook"></i>
                  </a>
                  <a href="https://www.instagram.com/officialrovarecup/">
                    <i class="fab fa-instagram fa-2x"></i>
                  </a>
                  <i class="fab fa-youtube fa-2x youtube"></i>
                </p>
              </div>
              <div class="col-md-12">
                <gmap-map
                  :center="{lat: 45.679242, lng: 12.406569}"
                  :zoom="14"
                  style="width:100%;  height: 400px;"
                >
                  <gmap-marker
                    :position="{lat: 45.679242, lng: 12.406569}"
                    @click="center={lat: 45.679242, lng: 12.406569}"
                  ></gmap-marker>
                </gmap-map>
              </div>
            </div>
          </b-card>
        </div>
      </div>
    </div>
  </div>
</template>

<style src="../../styles/component.scss" lang="scss"></style>
<script src="./Contact.js"></script>
<style src="./Contact.scss" lang="scss"></style>


