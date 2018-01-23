import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import risk_Assessment from '@/components/risk_Assessment'
import ais_Assess from '@/components/ais_Assess'
import ais_Digestive from '@/components/ais_Digestive'
import gwtg_Evaluation from '@/components/gwtg_Evaluation.vue'
import iscore_Assess from '@/components/iscore_Assess.vue'
import iscore_one_Assess from '@/components/iscore_one_Assess.vue'
import essen_Assess from '@/components/essen_Assess.vue'
import sich_Assess from '@/components/sich_Assess.vue'
import thrive_Assess from '@/components/thrive_Assess.vue'
import dragon_Evaluation from '@/components/dragon_Evaluation.vue'
import thrive_Evaluation from '@/components/thrive_Evaluation.vue'
import thrive_death_Evaluation from '@/components/thrive_death_Evaluation.vue'
import abcd_Assess from '@/components/abcd_Assess.vue'
import scale_list from '@/components/scale_list.vue'
import staf_Pattern from '@/components/staf_Pattern.vue'
import ciss_Parting from '@/components/ciss_Parting.vue'
import nihss_Pattern from '@/components/nihss_Pattern.vue'
import gcs_Pattern from '@/components/gcs_Pattern.vue'
import blood from '@/components/blood.vue'
import well_Pattern from '@/components/well_Pattern.vue'
import water_Test from '@/components/water_Test.vue'
import nsr_Pattern from '@/components/nsr_Pattern.vue'
import aps_Pattern from '@/components/aps_Pattern.vue'
import gib_Pattern from '@/components/gib_Pattern.vue'
import sich_Pattern from '@/components/sich_Pattern.vue'
import dragon_Pattern from '@/components/dragon_Pattern.vue'
import has_Pattern from '@/components/has_Pattern.vue'
import mrs_Pattern from '@/components/mrs_Pattern.vue'
import barthel_Pattern from '@/components/barthel_Pattern.vue'
import iscore_Grade from '@/components/iscore_Grade.vue'
import gos_Pattern from '@/components/gos_Pattern.vue'
import gwtg_Pattern from '@/components/gwtg_Pattern.vue'
import thrive_Pattern from '@/components/thrive_Pattern.vue'
import essen_Pattern from '@/components/essen_Pattern.vue'
import abcd_Pattern from '@/components/abcd_Pattern.vue'
import shads_Pattern from '@/components/shads_Pattern.vue'
import vasc_Pattern from '@/components/vasc_Pattern.vue'
import test from '@/components/test.vue'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
    	  path: '/risk_Assessment',
    	  component: risk_Assessment
    },
    {
    	  path:'/ais_Assess',
    	  component:ais_Assess
    },
    {
    	   path: '/ais_Digestive',
    	   component:ais_Digestive
    },
    {
    	   path: '/gwtg_Evaluation',
    	   component:gwtg_Evaluation
    },
    {
    	  path: '/iscore_Assess',
    	  component: iscore_Assess
    },
    {
    	 path: '/iscore_one_Assess',
    	 component:iscore_one_Assess
    },
    {
    	  path: '/essen_Assess',
    	  component: essen_Assess
    },
    {
    	  path: '/sich_Assess',
    	  component: sich_Assess
    },
    {
    	  path: '/thrive_Assess',
    	  component: thrive_Assess
    },
    {
    	 path: '/dragon_Evaluation',
    	 component: dragon_Evaluation
    },
    {
    	 path: '/thrive_Evaluation',
    	 component: thrive_Evaluation
    },
    {
    	 path: '/thrive_death_Evaluation',
    	 component: thrive_death_Evaluation
    },
    {
    	  path: '/abcd_Assess',
    	  component: abcd_Assess
    },
    {
    	 path: '/scale_list',
    	 component: scale_list
    },
    {
    	 path: '/staf_Pattern',
    	 component: staf_Pattern
    },
    {
    	 path: '/ciss_Parting',
    	 component: ciss_Parting
    },
    {
    	 path: '/nihss_Pattern',
    	 component: nihss_Pattern
    },
    {
    	 path: '/gcs_Pattern',
    	 component: gcs_Pattern
    },
    {
    	 path: '/blood',
    	 component: blood
    },
    {
    	 path: '/well_Pattern',
    	 component: well_Pattern
    },
    {
    	 path: '/water_Test',
    	 component: water_Test
    },
    {
    	 path: '/nsr_Pattern',
    	 component:	nsr_Pattern
    },
    {
    	  path: '/aps_Pattern',
    	  component: aps_Pattern
    },
    {
    	  path: '/gib_Pattern',
    	  component: gib_Pattern
    },
    {
    	  path: '/sich_Pattern',
    	  component: sich_Pattern
    },
    {
    	 path: '/dragon_Pattern',
    	 component: dragon_Pattern
    },
    {
    	  path: '/has_Pattern',
    	  component: has_Pattern
    },
    {
    	  path: '/mrs_Pattern',
    	  component: mrs_Pattern
    },
    {
    	 path: '/barthel_Pattern',
    	 component:barthel_Pattern
    },
    {
    	  path: '/iscore_Grade',
    	  component:iscore_Grade
    },
    {
    	  path: '/gos_Pattern',
    	  component: gos_Pattern
    },
    {
    	  path: '/gwtg_Pattern',
    	  component:gwtg_Pattern
    },
    {
    	  path: '/thrive_Pattern',
    	  component: thrive_Pattern
    },
    {
    	  path: '/essen_Pattern',
    	  component: essen_Pattern
    },
    {
    	  path: '/abcd_Pattern',
    	  component: abcd_Pattern
    },
    {
    	  path: '/shads_Pattern',
    	  component: shads_Pattern
    },
    {
    	 path: '/vasc_Pattern',
    	 component: vasc_Pattern
    },
    {
    	 path: '/test',
    	 component: test
	}
  ]
})
