<template>
	<div>
		<x-header>抗血小板管理</x-header>
		<div class="margins-horizontal-x margins-top-rem margins-bottom-sm">
			<div class="margins-top-md text-center"> 脑卒中／TIA预防的抗血小板分层治疗</div>
			<div class="margins-top-xs">
				<x-table full-bordered style="background-color:#fff;">
					<thead>
						<tr>
							<th style="width: 60px;">危险分层</th>
							<th>临床特征</th>
							<th>治疗推荐</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td rowspan="4">极高危</td>
							<td>脑动脉支架或其他血管成形术</td>
							<td rowspan="4" style="min-width: 80px;max-width: 80px;">阿司匹林+氯吡格雷</td>
						</tr>
						<tr>
							<td rowspan="4" >动脉-动脉栓塞</td>
						</tr>
					</tbody>
						<tbody>
						<tr>
							<td rowspan="4">高危</td>
							<td>缺血性卒中，伴有动脉粥样硬化性动脉狭窄</td>
							<td rowspan="4">氯吡格雷</td>
						</tr>
						<tr>
							<td rowspan="4">缺血性卒中，伴有重要危险因素（糖尿病、冠心病、代谢综合征、持续吸烟）。</td>
						</tr>
					</tbody>
					<tbody>
						<tr>
							<td>中度高危</td>
					
							<td>其他缺血性卒中或TIA</td>
						
							<td>阿司匹林或氯吡格雷</td>
						</tr>
							<tr>
							<td>中危</td>
					
							<td>只有危险因素的高危人群</td>
						
							<td>阿司匹林</td>
						</tr>
					</tbody>
		
				</x-table>
			</div>
			<div class="margins-top-sm  ">
				注：2013年发表在《新英格兰杂志》的CHANCE研究结果显示：对TIA或轻型卒中患者，在症状发生后24h之内联合应用阿司匹林和氯吡格雷21天，随后单用氯吡格雷，降低最初90天内的卒中风险优于单用阿司匹林，且不增加出血风险。

			</div>
			<div class="margins-top-sm">
			<p>	参考文献：</p>
 <p>1.《2010中国缺血性脑卒中和短暂性脑缺血发作二级预防指南》。</p>
 <p>2.Clopidogrel with Aspirin in Acute Minor Stroke or Transient Ischemic Attack.N Engl JMed.2013 Jul 4;369(1):11-9.</p>
			</div>
		</div>
	</div>
</template>

<script>
	import { XHeader, XTable, LoadMore } from 'vux'

	export default {
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

</style>