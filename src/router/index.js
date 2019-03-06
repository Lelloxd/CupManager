import Vue from 'vue';
import Router from 'vue-router';
import TeamReg from '@/components/Regs/TeamReg'
import Team from '@/components/Team/Team'
import NewTeam from '@/components/Team/NewTeam'
import Capocannoniere from '@/components/Capocannoniere/Capocannoniere'
import Bests from '@/components/Bests/Bests'
import NewMatch from '@/components/NewMatch/NewMatch'
import Matches from '@/components/Match-Entity/Matches'
import Match from '@/components/Match-Entity/Match'
import Cards from '@/components/Cards/Cards'
import ViewGroups from '@/components/Groups/ViewGroups'
import Group from '@/components/Groups/Group'
import Ranking from '@/components/Groups/Ranking'
import Statistic from '@/components/Statistic/Statistic'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/nuovo-giocatore',
      name: 'team-reg',
      component: TeamReg,
    },
    {
      path: '/team',
      name: 'team',
      component: Team,
    },
    {
      path: '/nuovo-team',
      name: 'newTeam',
      component: NewTeam,
    },
    {
      path: '/capocannoniere',
      name: 'capocannoniere',
      component: Capocannoniere,
    },
    {
      path: '/best',
      name: 'best',
      component: Bests,
    },
    {
      path: '/newMatch',
      name: 'newMatch',
      component: NewMatch,
    },
    {
      path: '/all-matches',
      name: 'all-matches',
      component: Matches,
    },
    {
      path: '/match',
      name: 'match',
      component: Match,
    },
    {
      path: '/cards',
      name: 'cards',
      component: Cards,
    },
    {
      path: '/groups',
      name: 'groups',
      component: ViewGroups,
    },
    {
      path: '/group',
      name: 'group',
      component: Group,
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
    }
  ],
});
