<template>
  <b-navbar class="w-100" toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#">
      <img alt="Rovarè Cup" class="navbar-logo" src="~@/assets/logo.png">
    </b-navbar-brand>
    <b-navbar-toggle target="nav_collapse"/>
    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav>
        <b-nav-item-dropdown text="Classifiche" right>
          <b-dropdown-item router-link to="/ranking">Gironi</b-dropdown-item>
          <b-dropdown-item router-link to="/capocannoniere">Capocannoniere</b-dropdown-item>
          <b-dropdown-item router-link to="/best">Miglior giocatore</b-dropdown-item>
          <b-dropdown-item router-link to="/cards">Cartellini</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown text="Squadre" right>
          <b-dropdown-item router-link to="team">Squadre</b-dropdown-item>
          <b-dropdown-item router-link to="nuovo-team">Nuova squadra</b-dropdown-item>
          <b-dropdown-item router-link to="nuovo-giocatore">Nuovo giocatore</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown text="Gruppi" right>
          <b-dropdown-item router-link to="groups">Gestisci gruppi</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item-dropdown text="Partite" right>
          <b-dropdown-item router-link to="all-matches">Partite</b-dropdown-item>
          <b-dropdown-item router-link to="newMatch">Nuova partita</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<style lang="scss">
.navbar-dark {
  .navbar-nav {
    .nav-link {
      color: #fff;
    }
  }
}

.navbar-logo {
  height: 32px;
  width: auto;
}

.bg-info {
  background-color: #23406b !important;
}
</style>
