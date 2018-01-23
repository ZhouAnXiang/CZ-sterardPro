<template>
	<div>
		<x-header>ABCD系列评估模式</x-header>
		<div class="margins-horizontal-x margins-top-rem  margins-bottom-sm">
			<p class="text-center"> ABCD系列评分：评估TIA后早期卒中风险</p>
			<div class="margins-bottom-xs margins-top-xs">
				<x-table full-bordered style="background-color:#fff;">
					<thead>
						<tr>
							<th colspan="3">项目</th>
							<th colspan="1">ABCD2-1分值</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td colspan="3">
								年龄>=60岁
							</td>
							<td colspan="3" style=" max-width: 80px!important;min-width: 80px!important;">1&nbsp;&nbsp;&nbsp;<input type="radio"></td>
						</tr>
						<tr>
							<td colspan="3">
								收缩压>=140mmHg和（或）舒张压>=90mmHg
							</td>
							<td>1&nbsp;&nbsp;&nbsp;<input type="radio"></td>
						</tr>
					</tbody>
					<tbody>
						<tr>
							<td colspan="2" rowspan="4">临床特征</td>
							<td>一侧肢体无力</td>
							<td>1&nbsp;&nbsp;&nbsp;<input type="radio"></td>
						</tr>
						<tr>
							<td>不伴无力的言语障碍</td>
							<td>1&nbsp;&nbsp;&nbsp;<input type="radio"></td>
						</tr>

					</tbody>
					<tbody>
						<tr>
							<td colspan="2" rowspan="4">症状持续时间</td>
							<td>>=60分钟</td>
							<td>1&nbsp;&nbsp;&nbsp;<input type="radio"></td>
						</tr>
						<tr>
							<td>10-59分钟</td>
							<td>1&nbsp;&nbsp;&nbsp;<input type="radio"></td>
						</tr>

					</tbody>
					<tbody>
						<tr>
							<td colspan="3">
								糖尿病
							</td>
							<td colspan="3" style=" max-width: 80px!important;min-width: 80px!important;">1&nbsp;&nbsp;&nbsp;<input type="radio"></td>
						</tr>

					</tbody>
					<tbody>
						<tr>
							<td colspan="2">影像学检查</td>
							<td>DWI检查发现高信号</td>
							<td>1&nbsp;&nbsp;&nbsp;<input type="radio"></td>
						</tr>

					</tbody>
				</x-table>
			</div>
			<div class="margins-top-xs">

				说明： 1.ABCD2-1总分最大值为10分； 2.临床特征中一侧肢体无力与不伴无力的言语障碍，二 项只能选择其中一项。

			</div>
			<div class="margins-top-xs">
				<button type="button" style="border: 1px solid #DDDDDD;margin-left: 0.3rem;">计算</button>
				<span style="margin-left: 0.45rem;">得分</span>&nbsp;<input type="text" style="border: 1px solid #DDDDDD;" />
			</div>
			<div class="margins-top-xs">
				<div class="border-ddd paddings-horizontal-xs paddings-top-xs paddings-bottom-md">
					分数为1分，低危险，静脉溶栓后症状性脑出血（SICH）率为0.4%。（参见下表)
				</div>
			</div>
			
			<p class="margins-top-sm text-center">不同分值对应的危险分层</p>
			<div class="margins-top-md">
				<x-table full-bordered style="background-color:#fff;">
					<thead>
						<tr>
							<th>危险分层</th>
							<th>ABCD2-1分值</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>高危</td>
							<td>7-10</td>
						</tr>
						<tr>
							<td>中危</td>
							<td>4-6</td>
						</tr>
						<tr>
							<td>低危</td>
							<td>0-3</td>
						</tr>
					</tbody>
				</x-table>
			</div>
			<div class="margins-top-md">
				参考文献：
1.A simple score(abcd) to identify individuals at high early risk of stroke after transient ischaemic attack.Lancet,2005,366(9479):29-36.
2.Validation and refinement of scores to predict very stroke risk after transient ischaemic attack.Lancet,2007,369(9558):283-92.
3.Addition of brain and carotid imaging to the ABCD2 score to identify patients at early risk of stroke after transient ischaemic attack:a multicentre observational study.Lancet Neurol.2010 Nov;9(11):1060-9.
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