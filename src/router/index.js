import Bests from '@/components/Bests/Bests';

import Cards from '@/components/Cards/Cards';
import Capocannoniere from '@/components/Capocannoniere/Capocannoniere';

import FinalPhase from '@/components/FinalPhase/FinalPhase';

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

export default new Router({
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
  },
  {
    path: '/nuovo-giocatore',
    name: 'newPlayer',
    component: NewPlayer,
  },
  {
    path: '/nuovo-team',
    name: 'newTeam',
    component: NewTeam,
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
  },
  {
    path: '/final-phase',
    name: 'finalPhase',
    component: FinalPhase,
  },
  {
    path: '/',
    redirect: '/ranking',
  }],
});
