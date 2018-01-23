<template>
	<div>
		<x-header>IScore评估模式</x-header>
		<div class="margins-horizontal-x margins-top-md margins-bottom-sm">
			<p class="text-center"> IScore评分：缺血性卒中预后评估 （IScore:Ischemic Stroke Predictive Risk Score)</p>
			<div class="margins-bottom-xs margins-top-xs">
				<x-table full-bordered style="background-color:#fff;">
					<thead>
						<tr>
							<th colspan="2">临床变量</th>
							<th colspan="2">分值(30天)</th>
						</tr>
					</thead>
					<thead>
						<tr>
							<th colspan="2">年龄</th>
							<th colspan="2"><input type="text" class="border-ddd" style="height: 30px; width: 70px;"></th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td rowspan="4">
								性别
							</td>
						</tr>
						<tr>
							<td>是</td>
							<td>0</td>
							<td><input type="checkbox"></td>
						</tr>
						<tr>
							<td>否</td>
							<td>1</td>
							<td><input type="checkbox"></td>
						</tr>
					</tbody>
					<tbody>
						<tr>
							<td rowspan="6">卒中严重性（NIHSS)</td>
						</tr>
						<tr>
							<td>轻度
								<=8</td>
									<td>0</td>
									<td><input type="checkbox"></td>
						</tr>
						<tr>
							<td>中等9-13</td>
							<td>40</td>
							<td><input type="checkbox"></td>
						</tr>
						<tr>
							<td>严重14-22</td>
							<td>65</td>
							<td><input type="checkbox"></td>
						</tr>
						<tr>
							<td>昏迷>22</td>
							<td>105</td>
							<td><input type="checkbox"></td>
						</tr>
					</tbody>
					<tbody>
						<tr>
							<td rowspan="6">
								卒中亚型
							</td>
						</tr>
						<tr>
							<td style=" max-width: 80px!important;min-width: 80px!important;">私人交通</td>
							<td>0</td>
							<td><input type="checkbox"></td>
						</tr>
						<tr>
							<td>非急诊方式</td>
							<td>16</td>
							<td><input type="checkbox"></td>
						</tr>
						<tr>
							<td>从现场乘救护车</td>
							<td style=" max-width: 50px!important;min-width: 50px!important;">12</td>
							<td style=" max-width: 50px!important;min-width: 50px!important;"><input type="checkbox"></td>
						</tr>
					</tbody>
					<tbody>
						<tr>
							<td rowspan="4">
								危险因素
							</td>
						</tr>
						<tr>
							<td>房颤</td>
							<td>10</td>
							<td><input type="checkbox"></td>
						</tr>
						<tr>
							<td>CHF</td>
							<td>10</td>
							<td><input type="checkbox"></td>
						</tr>
					</tbody>

					<tbody>
						<tr>
							<td rowspan="4">
								伴随疾病
							</td>
						</tr>
						<tr>
							<td>癌症</td>
							<td>10</td>
							<td><input type="checkbox"></td>
						</tr>
						<tr>
							<td>肾脏透析</td>
							<td>35</td>
							<td><input type="checkbox"></td>
						</tr>
					</tbody>
					<tbody>
						<tr>
							<td rowspan="4">
								院前残疾
							</td>
						</tr>
						<tr>
							<td>生活可自理</td>
							<td>0</td>
							<td><input type="checkbox"></td>
						</tr>
						<tr>
							<td>生活不可自理</td>
							<td>30</td>
							<td><input type="checkbox"></td>
						</tr>
					</tbody>
					<tbody>
						<tr>
							<td rowspan="4">
								入院时血糖mmol/L(mg/dL)
							</td>
						</tr>
						<tr>
							<td>
								<7.5(<135)</td>
									<td>0</td>
									<td><input type="checkbox"></td>
						</tr>
						<tr>
							<td>>=7.5(>=135)</td>
							<td>15</td>
							<td><input type="checkbox"></td>
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
					分数为5分，根据公式计算得出住院期间死亡率为0.39%。（公式见下）
				</div>
			</div>

			<div class="margins-top-md text-center">
				IScore评分：卒中30天的死亡风险
			</div>
			<div id="myChart" :style="{width: '300px', height: '300px'}"></div>
			<div class="margins-top-md bg-ddd paddings-x">
				注释： 1.IScore评分由加拿大学者开发，用于急性缺血性卒中患者入院后早期预测短期和长期死亡风险（30天和1年），分值越高，死亡风险越高。由于临床变量容易获得，所以使用广泛，社区医院也可应用。 2.MI史和吸烟与30天死亡不相关，与1年死亡相关，所以史1年死亡预测评分的危险因素。 3.IScore评分也能预测静脉溶栓后临床结局和出血风险，可指导临床治疗决策。分值越低，溶栓治疗的预后越好，出血风险越低。按分值分为三个等级： *低危：IScore
				<=139,良好结局的可能性>50%,可行溶栓治 疗； *中危：IScore 140-179,良好结局的可能性10%-50%，谨 慎溶栓； *高危：IScore >=180,良好结局的可能性
					<10%,尤其>200, 几乎无获益，颅内出血风险显著升高，不建议溶栓。 参考文献： 1.IScore:A Risk Score to Predict Death early after Hospitalization for an Acute Ischemic Stroke.Circulation
			</div>
			<div class="margins-top-md">
				1.IScore:A Risk Score to Predict Death early after Hospitalization for an Acute Ischemic Stroke.Circulation Febryary 2011.123:739-749. 2.The IScore Predicits Poor Functional Outcomes Early After Hospitalization for an Acute Ischemic Stroke.Stroke December 2011.2011;42;3421-3428. 3.The iScore predicits effectiveness of thrombolytic therapy for acute ischemic stroke.Stroke February 2012;43:1315-1322. 4.External Validation of the iScore for Prediciting Ischemic Stroke Mortality in Patients in China.Stroke.2013;44:1924-1929.
			</div>
		</div>
	</div>
</template>

<script>
	import { XHeader, XTable, LoadMore } from 'vux'
	// 引入基本模板
	let echarts = require('echarts/lib/echarts')
	// 引入柱状图组件
	require('echarts/lib/chart/bar')
	// 引入提示框和title组件
	require('echarts/lib/component/tooltip')
	require('echarts/lib/component/title')
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
		},
		mounted() {
			this.drawLine();
		},
		methods: {
			drawLine() {
				// 基于准备好的dom，初始化echarts实例
				let myChart = echarts.init(document.getElementById('myChart'))
				// 绘制图表
				myChart.setOption({
					title: {
						text: ''
					},
					color: ['#3398DB'],
					tooltip: {
						trigger: 'axis',
						axisPointer: { // 坐标轴指示器，坐标轴触发有效
							type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
						}
					},
					grid: {
						left: '3%',
						right: '4%',
						bottom: '3%',
						containLabel: true
					},
					xAxis: [{
						type: 'category',
						data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
						axisTick: {
							alignWithLabel: true
						}
					}],
					yAxis: [{
						type: 'value'
					}],
					series: [{
						name: '直接访问',
						type: 'bar',
						barWidth: '60%',
						data: [10, 52, 200, 334, 390, 330, 220]
					}]
				});
			}
		}
	}
</script>

<style>

</style>