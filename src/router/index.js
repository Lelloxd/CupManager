import Bests from '@/components/Bests/Bests';

import Cards from '@/components/Cards/Cards';
import Capocannoniere from '@/components/Capocannoniere/Capocannoniere';

import Group from '@/components/Groups/Group';

import Match from '@/components/Match-Entity/Match';
import Matches from '@/components/Match-Entity/Matches';

import NewMatch from '@/components/NewMatch/NewMatch';
import NewTeam from '@/components/Team/NewTeam';

import Ranking from '@/components/Ranking/Ranking';
import Router from 'vue-router';

import Statistic from '@/components/Statistic/Statistic';

import Team from '@/components/Team/Team';
import TeamReg from '@/components/Regs/TeamReg';

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
    path: '/group',
    name: 'group',
    component: Group,
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
    path: '/nuovo-giocatore',
    name: 'team-reg',
    component: TeamReg,
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
  }],
});
