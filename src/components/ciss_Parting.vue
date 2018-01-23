<template>
	<div>
		<x-header>STAF评估模式</x-header>
		<div class="margins-horizontal-xs margins-bottom-sm margins-top-rem">
			<div class="">
				中国缺血性卒中亚型-CISS分型 （Chinese Ischemic Stroke Subclassification,CISS)
			</div>
			<div class="margins-top-xs text-center">
				CISS分型全貌
			</div>
			<div class="margins-top-xs ">
				<img src="../../static/image/WechatIMG2302.jpg" width="100%" />
			</div>
			<div class="margins-top-xs text-center">
				CISS分型图示
			</div>
			<div class="margins-top-xs">
				<img src="../../static/image/WechatIMG2303.jpg" width="100%" />
			</div>
			<div class="margins-top-xs">ACA：大脑前动脉；MCA：大脑中动脉；ICA:颈内动脉</div>
			<div class="margins-top-xs bg-ddd paddings-x">
				注释： 1.CISS既有病因诊断，也有发病机制诊断，更有效指导临床治疗。 2.病因诊断中将主动脉弓粥样硬化归类到大动脉粥样硬化，更加合理。 3.病因诊断中提出了穿支动脉疾病，将粥样病变正式引入到穿支动脉的病因诊断中。 4.大动脉粥样硬化性梗死的发病机制分为：载体动脉堵塞穿支、动脉到动脉栓塞、低灌注／栓子清除下降以及混合机制。
			</div>
			<div class="margins-top-xs">

				参考文献： Chinese ischemic stroke subclassification.Frontiers in Neurology。2011；2:6.
			</div>
		</div>
	</div>
</template>

<script>
	import { XHeader, XTable, LoadMore } from 'vux'
	export default {
		name: 'hello',
		components: {
			XHeader,
			XTable,
			LoadMore
		},
		data() {
			return {
				msg: 'Welcome to Your Vue.js App'
			}
		}
	}
</script>
<style>
	.vux-header {
		position: fixed!important;
		width: 100%;
		z-index: 100;
		top:0;
		background-color: #0F71B2!important;
	}
</style>