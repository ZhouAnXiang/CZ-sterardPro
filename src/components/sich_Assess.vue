<template>
	<div>
		<x-header>SICH评估模式</x-header>
		<div class="margins-horizontal-x margins-top-md margins-bottom-sm">
			<p class="text-center"> SICH评分：静脉溶栓后症状性脑出血风险评估
    (SITS Symptomatic Intracerebral Hemorrhage Risk 
      Score)</p>
			<div class="margins-bottom-xs margins-top-xs">
				<x-table full-bordered style="background-color:#fff;">
					<thead>
						<tr>
							<th colspan="3">危险因素</th>
							<th colspan="1">分值</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td colspan="3">
								阿司匹林+氯吡格雷
							</td>
							<td colspan="3" style=" max-width: 60px!important;min-width: 60px!important;">3&nbsp;&nbsp;&nbsp;<input type="radio"></td>
						</tr>
						<tr>
							<td colspan="3">
								单用阿司匹林
							</td>
							<td colspan="3">2&nbsp;&nbsp;&nbsp;<input type="radio"></td>
						</tr>
						<tr>
							<td colspan="3">
								NIHSS>=13
							</td>
							<td colspan="3">2&nbsp;&nbsp;&nbsp;<input type="radio"></td>
						</tr>
						<tr>
							<td colspan="3">
								NIHSS7-12
							</td>
							<td colspan="3">1&nbsp;&nbsp;&nbsp;<input type="radio"></td>
						</tr>
						<tr>
							<td colspan="3">
								血糖>=180mg/dl(10mmol/L)
							</td>
							<td colspan="3">2&nbsp;&nbsp;&nbsp;<input type="radio"></td>
						</tr>
						<tr>
							<td colspan="3">
								年龄>=72岁
							</td>
							<td colspan="3">1&nbsp;&nbsp;&nbsp;<input type="radio"></td>
						</tr>
						<tr>
							<td colspan="3">
								收缩压>=146mmHg
							</td>
							<td colspan="3">1&nbsp;&nbsp;&nbsp;<input type="radio"></td>
						</tr>
						<tr>
							<td colspan="3">
								体重>=95kg
							</td>
							<td colspan="3">1&nbsp;&nbsp;&nbsp;<input type="radio"></td>
						</tr>
						<tr>
							<td colspan="3">
								发病到治疗时间>=180min
							</td>
							<td colspan="3">1&nbsp;&nbsp;&nbsp;<input type="radio"></td>
						</tr>
						<tr>
							<td colspan="3">
								高血压病史
							</td>
							<td colspan="3">1&nbsp;&nbsp;&nbsp;<input type="radio"></td>
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
					分数为1分，低危险，静脉溶栓后症状性脑出血（SICH）率为0.4%。（参见下表)
				</div>
			</div>
			<div class="margins-top-md">
				<x-table full-bordered style="background-color:#fff;">
					<thead>
						<tr>
							<th>危险分层</th>
							<th>总分</th>
							<th>SICH率（95%CI）</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>低</td>
							<td>0-2</td>
							<td>0.4%（0.2%-0.6%）</td>
						</tr>
						<tr>
							<td>平均水平</td>
							<td>3-5</td>
							<td>1.5%（1.3%-1.7%）</td>
						</tr>
						<tr>
							<td>>中</td>
							<td>6-8</td>
							<td>3.6%（3.1%-4.1%）</td>
						</tr>
						<tr>
							<td>>高</td>
							<td>>=9</td>
							<td>9.2%（5.9%-12.5%）</td>
						</tr>
					</tbody>
				</x-table>
			</div>
			<div class="margins-top-md bg-ddd paddings-x">
				注释：
1.该评分是预测静脉溶栓后症状性脑出血（SICH）的常用量表之一。
2.症状性脑出血（SICH）定义（SITS-MOST标准）：溶栓后36h内，相对基线／最低NIHSS增加>=4分，影像显示有占位效应的脑血肿。
3.分值10分患者发生SICH的风险是0分患者的约70倍。
			</div>
			<div class="margins-top-md">
				参考文献：
1.Predicting the Risk of Symptomatic Intracerebral Hemorrhage in Ischemic Stroke Treated.With Intravenous Alteplase:Safe Implementation of Treatments in Strock(SITS)Symptomatic.Intracerebral Hemorrhage RIsk Score.Stroke.2012;43:1524-1531
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