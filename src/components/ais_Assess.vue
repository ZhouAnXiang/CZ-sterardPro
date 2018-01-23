<template>
	<div>
		<x-header>AIS-APS评估模式</x-header>
		<div class="paddings-horizontal-x ">
			<p class="margins-top-md"> &nbsp;&nbsp;急性缺血性卒中相关肺炎风险评估：AIS-APS评分（Acute ischemic stroke-associated pneumonia score,AIS-APS)</p>
			<div class="margins-bottom-xs">
				<x-table full-bordered style="background-color:#fff;">
					<thead>
						<tr>
							<th colspan="2">项目</th>
							<th colspan="2">分值</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td rowspan="6">年龄(岁)</td>
						</tr>
						<tr>
							<td><=59</td>
							<td>0&nbsp;&nbsp;&nbsp;<input type="checkbox"></td>
						</tr>
						<tr>
							<td>60-69</td>
							<td>2&nbsp;&nbsp;&nbsp;<input type="checkbox"></td>
						</tr>
						<tr>
							<td>70-79</td>
							<td>5&nbsp;&nbsp;&nbsp;<input type="checkbox"></td>
						</tr>
						<tr>
							<td>>=80</td>
							<td>7&nbsp;&nbsp;&nbsp;<input type="checkbox"></td>
						</tr>
					</tbody>
					<tbody>
						<tr>
							<td rowspan="6">既往史／<br/>合并疾病</td>

						</tr>
						<tr>
							<td>房颤</td>
							<td>0&nbsp;&nbsp;&nbsp;<input type="checkbox"></td>
						</tr>
						<tr>
							<td>充血性心衰</td>
							<td>2&nbsp;&nbsp;&nbsp;<input type="checkbox"></td>
						</tr>
						<tr>
							<td>慢性阻塞性肺病(COPD)</td>
							<td style=" max-width: 60px!important;min-width: 60px!important;">5&nbsp;&nbsp;&nbsp;<input type="checkbox"></td>
						</tr>
						<tr>
							<td>>=80</td>
							<td>7&nbsp;&nbsp;&nbsp;<input type="checkbox"></td>
						</tr>

					</tbody>
					<thead>
						<tr>
							<th colspan="2">卒中前生活依赖（mRS>=3)</th>
							<th>7&nbsp;&nbsp;&nbsp;<input type="checkbox"></th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td rowspan="6">入院NIHSS评分</td>

						</tr>
						<tr>
							<td>0-4</td>
							<td>0&nbsp;&nbsp;&nbsp;<input type="checkbox"></td>
						</tr>
						<tr>
							<td>5-9</td>
							<td>2&nbsp;&nbsp;&nbsp;<input type="checkbox"></td>
						</tr>
						<tr>
							<td>10-14</td>
							<td style=" max-width: 60px!important;min-width: 60px!important;">5&nbsp;&nbsp;&nbsp;<input type="checkbox"></td>
						</tr>
						<tr>
							<td>>=15</td>
							<td>8&nbsp;&nbsp;&nbsp;<input type="checkbox"></td>
						</tr>

					</tbody>
					<thead>
						<tr>
							<th colspan="2">言语障碍</th>
							<th>3&nbsp;&nbsp;&nbsp;<input type="checkbox"></th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td rowspan="6">OCSP分型</td>

						</tr>
						<tr>
							<td>腔隙性脑梗死（LACI)</td>
							<td>0&nbsp;&nbsp;&nbsp;<input type="checkbox"></td>
						</tr>
						<tr>
							<td>部分前循环梗死（PACI)</td>
							<td>0&nbsp;&nbsp;&nbsp;<input type="checkbox"></td>
						</tr>
						<tr>
							<td>完全前循环梗死（TACI)</td>
							<td style=" max-width: 60px!important;min-width: 60px!important;">2&nbsp;&nbsp;&nbsp;<input type="checkbox"></td>
						
						</tr>
						<tr>
							<td>后循环梗死（POCI)</td>
							<td>2&nbsp;&nbsp;&nbsp;<input type="checkbox"></td>
						</tr>
					</tbody>
					<tbody>
						<tr>
							<td rowspan="4">入院血糖（mmol/L)</td>
						</tr>
						</tr>
						<tr>
							<td><=11.0</td>
							<td style=" max-width: 60px!important;min-width: 60px!important;">0&nbsp;&nbsp;&nbsp;<input type="checkbox"></td>
						
						</tr>
						<tr>
							<td>>=11.1)</td>
							<td>5&nbsp;&nbsp;&nbsp;<input type="checkbox"></td>
			
						</tr>
					</tbody>
				</x-table>
			</div>
			<div class="margins-top-xs">
				<button type="button" style="border: 1px solid #DDDDDD;margin-left: 0.3rem;">计算</button>
				<span style="margin-left: 0.45rem;">得分</span>&nbsp;<input type="text" style="border: 1px solid #DDDDDD;" />
			</div>
			<div id="myChart" :style="{width: '300px', height: '300px'}"></div>
			<div class="margins-top-xs bg-ddd paddings-x">
				注释： 1.该量表用于评估急性缺血性卒中相关肺炎风险，是根据中国国家卒中登记数据库（CNSR)，2013年由其研究者提出，AIS-APS比以前同类量表具有更好的识别能力。 2.总分最大值为35分，按分值分为五个危险分层；分值越高，发生肺炎的风险越大。
			</div>
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
						text: '不同分值对应的肺炎风险及危险分层'
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