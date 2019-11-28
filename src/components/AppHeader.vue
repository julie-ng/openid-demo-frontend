<template>
  <header>
    <nav class="navbar navbar-expand-sm navbar-dark bg-primary">
    <div class="container">
      <a class="navbar-brand" href="/">Azure AD</a> <span class="navbar-div">|</span>
      <a class="navbar-title" href="/">OpenID Connect</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav ml-auto">
          <!-- Logged In -->
          <template v-if="loggedIn">
            <li class="nav-item">
              <a class="nav-link" href="/profile">Profile</a>
            </li>
            <li class="nav-item pl-3">
              <a class="nav-link btn btn-outline-light" role="button" href="/api/logout">Logout</a>
            </li>
          </template>
          <!-- Logged Out -->
          <template v-else>
            <li class="nav-item">
              <router-link class="nav-link" to="/login">Login</router-link>
            </li>
          </template>
        </ul>
      </div>
    </div>
    </nav>
  </header>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'AppHeader',
  props: {
    loggedIn: Boolean
  },
  computed: mapState([
    'loggedIn'
  ])
}
</script>

<style scoped lang="scss">
.navbar {
  padding: 1em 0;
  margin-bottom: 2em;
}

.navbar-brand {
  font-weight: 600;
  margin-right: 0;
}

.navbar-div {
  font-weight: 400;
  display: inline-block;
  margin: 0 0.75em;
  color: #fff;
}

.navbar-title {
  font-weight: 400;
  &:link,
  &:visited {
    color: rgba(255, 255, 255, 0.9);
  }

  &:hover,
  &:active {
    text-decoration: none;
  }
}

.navbar-dark .navbar-nav {
  .btn-outline-light {
    &:link, :visted {
      color: #fff;
    }
    &:hover, &:active {
      color: var(--primary);
    }
  }
}
</style>
