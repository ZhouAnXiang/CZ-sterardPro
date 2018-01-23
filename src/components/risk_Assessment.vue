<template>
	<div>
		<x-header :left-options="{showBack: false}">风险评估</x-header>
		<ul>
		    <router-link to="/ais_assess" ><li class="border-bottom paddings-vertical-x  text-000 paddings-left-xs">肺炎<span class="iconfont icon-xiangyou float-right text-000"></span></li></router-link>	
		    <router-link to="/ais_Digestive"><li class="border-bottom paddings-vertical-x paddings-left-xs text-000">消化道出血<span class="iconfont icon-xiangyou float-right text-000"></span></li></router-link>	
			<router-link to="/gwtg_Evaluation"> <li class="border-bottom paddings-vertical-x paddings-left-xs text-000">住院期间死亡率<span class="iconfont icon-xiangyou float-right"></span></li></router-link>
			<router-link to="/iscore_Assess"> <li class="border-bottom paddings-vertical-x paddings-left-xs text-000">AIS 30天的死亡风险<span class="iconfont icon-xiangyou float-right"></span></li></router-link>
			<router-link to="/iscore_one_Assess"> <li class="border-bottom paddings-vertical-x paddings-left-xs text-000">AIS 1年后的死亡风险<span class="iconfont icon-xiangyou float-right"></span></li></router-link>
		    <router-link to="/essen_Assess"><li class="border-bottom paddings-vertical-x paddings-left-xs text-000">复发风险<span class="iconfont icon-xiangyou float-right"></span></li></router-link>
			<router-link to="/sich_Assess"> <li class="border-bottom paddings-vertical-x paddings-left-xs text-000">静脉溶栓后症状性脑出血风险（SICH）<span class="iconfont icon-xiangyou float-right"></span></li></router-link>
			<router-link to="/thrive_Assess"> <li class="border-bottom paddings-vertical-x paddings-left-xs text-000">静脉溶栓后症状性脑出血风险（THRIVE））<span class="iconfont icon-xiangyou float-right"></span></li></router-link>
			<router-link to="/dragon_Evaluation"> <li class="border-bottom paddings-vertical-x paddings-left-xs text-000">静脉溶栓三个月预后风险（DRAGON)）<span class="iconfont icon-xiangyou float-right"></span></li></router-link>
			<router-link to="/thrive_Evaluation"> <li class="border-bottom paddings-vertical-x paddings-left-xs text-000">静脉溶栓三个月不良结局风险（THRIVE)<span class="iconfont icon-xiangyou float-right"></span></li></router-link>
			<router-link to="/thrive_death_Evaluation"> <li class="border-bottom paddings-vertical-x paddings-left-xs text-000">静脉溶栓三个月死亡率（THRIVE)<span class="iconfont icon-xiangyou float-right"></span></li></router-link>
			<router-link to="/abcd_Assess"><li class="border-bottom paddings-vertical-x paddings-left-xs text-000">TIA一年后卒中风险<span class="iconfont icon-xiangyou float-right"></span></li></router-link>
		</ul>
	</div>
</template>

<script>
	import { XHeader } from 'vux'
	export default {
		components: {
			XHeader
		},
		data() {
			return {
				menus: {
					menu1: 'Take Photo',
					menu2: 'Choose from photos'
				},
				showMenus: false
			}
		}
	}
</script>

<style>
	@import '../../static/css/global.css';
	@import '../../static/css/app.css';
	@import '../../static/css/iconfont.css';

</style>