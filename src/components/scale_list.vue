<template>
	<div>
		<x-header :left-options="{showBack: false}">风险评估</x-header>
		<ul  style="margin-top: 44px;">
			<router-link to="/staf_Pattern">
				<li class="border-bottom paddings-vertical-x  text-000 paddings-left-xs">STAF评分<span class="iconfont icon-xiangyou float-right text-000 margins-right-x"></span></li>
			</router-link>
			<router-link to="/ciss_Parting">
				<li class="border-bottom paddings-vertical-x  text-000 paddings-left-xs">卒中分型-CISS分型<span class="iconfont icon-xiangyou float-right text-000 margins-right-x"></span></li>
			</router-link>
			<router-link to="/nihss_Pattern">
				<li class="border-bottom paddings-vertical-x  text-000 paddings-left-xs">NIHSS指数评估模式<span class="iconfont icon-xiangyou float-right text-000 margins-right-x"></span></li>
			</router-link>
			<router-link to="/gcs_Pattern ">
				<li class="border-bottom paddings-vertical-x  text-000 paddings-left-xs">GCS评估模式<span class="iconfont icon-xiangyou float-right text-000 margins-right-x"></span></li>
			</router-link>
			<router-link to="/blood ">
				<li class="border-bottom paddings-vertical-x  text-000 paddings-left-xs">抗血小板管理<span class="iconfont icon-xiangyou float-right text-000 margins-right-x"></span></li>
			</router-link>
			<router-link to="/well_Pattern">
				<li class="border-bottom paddings-vertical-x  text-000 paddings-left-xs">Well评估模式<span class="iconfont icon-xiangyou float-right text-000 margins-right-x"></span></li>
			</router-link>
			<router-link to="/water_Test">
				<li class="border-bottom paddings-vertical-x  text-000 paddings-left-xs">洼田饮水试验<span class="iconfont icon-xiangyou float-right text-000 margins-right-x"></span></li>
			</router-link>
			<router-link to="/nsr_Pattern">
				<li class="border-bottom paddings-vertical-x  text-000 paddings-left-xs">NSR2002评估模式<span class="iconfont icon-xiangyou float-right text-000 margins-right-x"></span></li>
			</router-link>
			<router-link to="/aps_Pattern">
				<li class="border-bottom paddings-vertical-x  text-000 paddings-left-xs">AIS-APS评估模式<span class="iconfont icon-xiangyou float-right text-000 margins-right-x"></span></li>
			</router-link>
			<router-link to="/gib_Pattern">
				<li class="border-bottom paddings-vertical-x  text-000 paddings-left-xs">AIS-GIB评估模式<span class="iconfont icon-xiangyou float-right text-000 margins-right-x"></span></li>
			</router-link>
			<router-link to="/sich_Pattern">
				<li class="border-bottom paddings-vertical-x  text-000 paddings-left-xs">SICH评估模式<span class="iconfont icon-xiangyou float-right text-000 margins-right-x"></span></li>
			</router-link>
			<router-link to="/dragon_Pattern">
				<li class="border-bottom paddings-vertical-x  text-000 paddings-left-xs">DRAGON评估模式<span class="iconfont icon-xiangyou float-right text-000 margins-right-x"></span></li>
			</router-link>
			<router-link to="/has_Pattern">
				<li class="border-bottom paddings-vertical-x  text-000 paddings-left-xs">HAS-BLED评估模式<span class="iconfont icon-xiangyou float-right text-000 margins-right-x"></span></li>
			</router-link>
			<router-link to="/mrs_Pattern">
				<li class="border-bottom paddings-vertical-x  text-000 paddings-left-xs">mRS评估模式<span class="iconfont icon-xiangyou float-right text-000 margins-right-x"></span></li>
			</router-link>
			<router-link to="/barthel_Pattern">
				<li class="border-bottom paddings-vertical-x  text-000 paddings-left-xs">Barthel指数评估模式<span class="iconfont icon-xiangyou float-right text-000 margins-right-x"></span></li>
			</router-link>
			<router-link to="/iscore_Grade">
				<li class="border-bottom paddings-vertical-x  text-000 paddings-left-xs">IScore评估模式<span class="iconfont icon-xiangyou float-right text-000 margins-right-x"></span></li>
			</router-link>
			<router-link to="/gos_Pattern">
				<li class="border-bottom paddings-vertical-x  text-000 paddings-left-xs">GOS评估模式<span class="iconfont icon-xiangyou float-right text-000 margins-right-x"></span></li>
			</router-link>
			<router-link to="/gwtg_Pattern">
				<li class="border-bottom paddings-vertical-x  text-000 paddings-left-xs">GWTG评估模式<span class="iconfont icon-xiangyou float-right text-000 margins-right-x"></span></li>
			</router-link>
			<router-link to="/thrive_Pattern">
				<li class="border-bottom paddings-vertical-x  text-000 paddings-left-xs">THRIVE评估模式<span class="iconfont icon-xiangyou float-right text-000 margins-right-x"></span></li>
			</router-link>
			<router-link to="/essen_Pattern">
				<li class="border-bottom paddings-vertical-x  text-000 paddings-left-xs">ESSEN评估模式<span class="iconfont icon-xiangyou float-right text-000 margins-right-x"></span></li>
			</router-link>
			<router-link to="/abcd_Pattern">
				<li class="border-bottom paddings-vertical-x  text-000 paddings-left-xs">ABCD系列评估模式<span class="iconfont icon-xiangyou float-right text-000 margins-right-x"></span></li>
			</router-link>
			<router-link to="/shads_Pattern">
				<li class="border-bottom paddings-vertical-x  text-000 paddings-left-xs">CHADS2评估模式
					<span class="iconfont icon-xiangyou float-right text-000 margins-right-x"></span></li>
			</router-link>
			<router-link to="/vasc_Pattern">
				<li class="border-bottom paddings-vertical-x  text-000 paddings-left-xs">CHA2DS2-VASc评估模式
					<span class="iconfont icon-xiangyou float-right text-000 margins-right-x"></span></li>
			</router-link>
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
	ul {
		padding: 0!important;
	}
	.vux-header {
		position: fixed!important;
		width: 100%;
		z-index: 100;
		top:0;
	   background-color: #0F71B2!important;
	}
	@import '../../static/css/global.css';
	@import '../../static/css/app.css';
	@import '../../static/css/iconfont.css';
</style>
