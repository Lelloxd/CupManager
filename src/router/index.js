import Bests from '@/components/Bests/Bests';

import Calendar from "@/components/Calendar/Calendar";

import Cards from '@/components/Cards/Cards';
import Capocannoniere from '@/components/Capocannoniere/Capocannoniere';
import Contact from '@/components/Contact/Contact';

import FinalPhase from '@/components/FinalPhase/FinalPhase';
import FinalPhaseEuroCup from '@/components/FinalPhase/FinalPhaseEuroCup';

import Home from '@/components/Home/Home';

import Login from '@/components/Login/Login';

import Match from '@/components/Match/Match';
import Matches from '@/components/Matches/Matches';

import NewMatch from '@/components/NewMatch/NewMatch';
import NewPlayer from '@/components/NewPlayer/NewPlayer';
import NewTeam from '@/components/NewTeam/NewTeam';

import Ranking from '@/components/Ranking/Ranking';
import Router from 'vue-router';

import Statistic from '@/components/Statistic/Statistic';

import Team from '@/components/Team/Team';

import ViewGroups from '@/components/Groups/ViewGroups';
import Vue from 'vue';

Vue.use(Router);

let router = new Router({
  routes: [{
    path: '/best',
    name: 'best',
    component: Bests,
  },
  {
    path: '/capocannoniere',
    name: 'capocannoniere',
    component: Capocannoniere,
  },
  {
    path: '/cards',
    name: 'cards',
    component: Cards,
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact,
  },
  {
    path: '/match',
    name: 'match',
    component: Match,
  },
  {
    path: '/all-matches',
    name: 'all-matches',
    component: Matches,
  },
  {
    path: '/newMatch',
    name: 'newMatch',
    component: NewMatch,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/nuovo-giocatore',
    name: 'newPlayer',
    component: NewPlayer,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/nuovo-team',
    name: 'newTeam',
    component: NewTeam,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/team',
    name: 'team',
    component: Team,
  },
  {
    path: '/ranking',
    name: 'ranking',
    component: Ranking,
  },
  {
    path: '/statistic',
    name: 'statistic',
    component: Statistic,
  },
  {
    path: '/groups',
    name: 'groups',
    component: ViewGroups,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/final-phase',
    name: 'finalPhase',
    component: FinalPhase,
  },
  {
    path: '/final-phase-euro',
    name: 'final-phase-euro',
    component: FinalPhaseEuroCup,
  },
  {
    path: '/',
    redirect: '/calendario',
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/calendario',
    name: 'calendario',
    component: Calendar,
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
  }],
});

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (sessionStorage.getItem('token') != undefined || sessionStorage.getItem('token') != null) {
      next()
      return
    }
    next('/login')
  } else {
    next()
  }
})

export default router
