<template>
	<div>
		<x-header>THRIVE评估模式</x-header>
		<div class="margins-horizontal-x margins-bottom-sm">
			<div class="margins-top-md text-center">THRIVE评分：静脉溶栓后症状性脑出血风险评估</div>
			<div class="margins-top-xs">
				<x-table full-bordered style="background-color:#fff;">
					<thead>
						<tr>
							<th colspan="5">变量</th>
							<th colspan="2">分值</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td colspan="5" rowspan="4" style=" max-width: 50px!important;min-width: 60px!important;">年龄</td>
						</tr>
						<tr>
							<td colspan="1">
								年龄65-75岁
							</td>
							<td colspan="1" style=" max-width: 50px!important;min-width: 60px!important;">1&nbsp;&nbsp;&nbsp;<input type="radio"></td>
						</tr>
						<tr>
							<td colspan="1">
								>=80
							</td>
							<td colspan="1" style=" max-width: 50px!important;min-width: 60px!important;">2&nbsp;&nbsp;&nbsp;<input type="radio"></td>
						</tr>

					</tbody>
					<tbody>
						<tr>
							<td colspan="5" rowspan="4" style=" max-width: 50px!important;min-width: 60px!important;">NIHSS</td>
						</tr>
						<tr>
							<td colspan="1">
								11-20
							</td>
							<td colspan="1" style=" max-width: 50px!important;min-width: 60px!important;">2&nbsp;&nbsp;&nbsp;<input type="radio"></td>
						</tr>
						<tr>
							<td colspan="1">
								>=21
							</td>
							<td colspan="1" style=" max-width: 50px!important;min-width: 60px!important;">4&nbsp;&nbsp;&nbsp;<input type="radio"></td>
						</tr>
					</tbody>
					<tbody>
						<tr>
							<td colspan="5" rowspan="6" style=" max-width: 50px!important;min-width: 60px!important;">合并症</td>
						</tr>
						<tr>
							<td colspan="1">
								高血压
							</td>
							<td colspan="1" style=" max-width: 50px!important;min-width: 60px!important;">1&nbsp;&nbsp;&nbsp;<input type="radio"></td>
						</tr>
						<tr>
							<td colspan="1">
								糖尿病
							</td>
							<td colspan="1" style=" max-width: 50px!important;min-width: 60px!important;">1&nbsp;&nbsp;&nbsp;<input type="radio"></td>
						</tr>
						<tr>
							<td colspan="1">
								房颤
							</td>
							<td colspan="1" style=" max-width: 50px!important;min-width: 50px!important;">1&nbsp;&nbsp;&nbsp;<input type="radio"></td>
						</tr>
					</tbody>
				</x-table>
			</div>
			<div class="margins-top-xs">
				<button type="button" style="border: 1px solid #DDDDDD;margin-left: 0.3rem;">计算</button>
				<span style="margin-left: 0.45rem;">得分</span>&nbsp;<input type="text" style="border: 1px solid #DDDDDD;" />
			</div>
			<div class="margins-top-xs">
				<div class="border-ddd paddings-horizontal-xs paddings-top-xs paddings-bottom-md">
					分数为3分，静脉溶栓后症状性脑出血（THRIVE）率为6.8%。（参见下表）
				</div>
			</div>
			<div class="margins-top-xs text-center">
				THRIVE评分对应的症状性脑出血风险
			</div>
			<div class="margins-top-sm">
				<x-table full-bordered style="background-color:#fff;">
					<thead>
						<tr>
							<th>总分</th>
							<th>THRIVE率（95%CI）</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>低</td>
							<td>0.4%（0.2%-0.6%）</td>
						</tr>
						<tr>
							<td>0-2</td>
							<td>2.4%（1.2%-4.1%）</td>
						</tr>
						<tr>
							<td>3-5</td>
							<td>6.8%（4.8%-9.3%）</td>
						</tr>
						<tr>
							<td>6-9</td>
							<td>13.2%（7.4%-21.2%））</td>
						</tr>
					</tbody>
				</x-table>
			</div>
			<div class="margins-top-sm paddings-x bg-ddd">
				注释：
1.该评分是预测静脉溶栓后症状性脑出血（THRIVE）的常用量表之一。

			</div>
			<div class="margins-top-sm">
				参考文献：
1.Totaled Health Risks in Vascular Events Score Predicts Clinical Outcome and Symptomatic Intracranial Hemorrhage in Chinese Patients After Thrombolysis.Stroke.2015;864-866.
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