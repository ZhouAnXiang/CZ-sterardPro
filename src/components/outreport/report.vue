<template>
	<div>
		<x-header :left-options="{showBack: false}">风险评估</x-header>
		<ul>
           <router-link to="/outreport/discharged_roport" ><li class="border-bottom paddings-vertical-x  text-000 paddings-left-xs">出院报告 <span class="iconfont icon-xiangyou float-right text-000"></span></li></router-link>
           <router-link to="/outreport/Swallow" ><li class="border-bottom paddings-vertical-x  text-000 paddings-left-xs">吞咽困难评估 <span class="iconfont icon-xiangyou float-right text-000"></span></li></router-link>
			<router-link to="/outreport/treatReport/cerebral"> <li class="border-bottom paddings-vertical-x paddings-left-xs text-000">TIA治疗报告<span class="iconfont icon-xiangyou float-right"></span></li></router-link>
			<router-link to="/outreport/treatReport/embolectomy"> <li class="border-bottom paddings-vertical-x paddings-left-xs text-000">溶栓治疗报告<span class="iconfont icon-xiangyou float-right"></span></li></router-link>
		    <router-link to="/outreport/treatReport/thrombolysis"> <li class="border-bottom paddings-vertical-x paddings-left-xs text-000">取栓治疗报告<span class="iconfont icon-xiangyou float-right"></span></li></router-link>
			<router-link to="/outreport/treatReport/antithrombosis"><li class="border-bottom paddings-vertical-x paddings-left-xs text-000">抗栓治疗报告<span class="iconfont icon-xiangyou float-right"></span></li></router-link>
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
	@import '../../../static/css/global.css';
	@import '../../../static/css/app.css';
	@import '../../../static/css/iconfont.css';
</style>
