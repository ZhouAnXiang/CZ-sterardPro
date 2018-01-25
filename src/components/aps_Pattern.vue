<template>
	<div>
		<x-header>AIS-APS评估模式</x-header>
		<div class="margins-horizontal-x margins-top-md margins-bottom-sm margins-top-rem">
			<div>
				急性缺血性卒中相关肺炎风险评估：AIS-APS评分（Acute ischemic stroke-associated pneumonia score,AIS-APS)
			</div>
			<div class="margins-bottom-xs margins-top-xs">
				<x-table full-bordered style="background-color:#fff;">
					<thead>
						<tr>
							<th colspan="2">项目</th>
							<th colspan="2">分值</th>
						</tr>
					</thead>
					<tbody id="age">
						<tr>
							<td rowspan="6" colspan="1">年龄(岁)</td>
						</tr>
						<tr>
							<td>
								<=59</td>
									<td colspan="2">0&nbsp;&nbsp;&nbsp;&nbsp;<input type="radio" name="age_num" value="0"></td>
						</tr>
						<tr>
							<td>60-69</td>
							<td colspan="2">2&nbsp;&nbsp;&nbsp;&nbsp;<input type="radio" name="age_num" value="2"></td>
						</tr>
						<tr>
							<td>70-79</td>
							<td colspan="2">5&nbsp;&nbsp;&nbsp;&nbsp;<input type="radio" name="age_num" value="5"></td>
						</tr>
						<tr>
							<td>>=80</td>
							<td colspan="2">7&nbsp;&nbsp;&nbsp;&nbsp;<input type="radio" name="age_num" value="7"></td>
						</tr>
					</tbody>
					<tbody id="history">
						<tr>
							<td rowspan="6" colspan="1">既往史／<br/> 合并疾病
							</td>
						</tr>
						<tr>
							<td>房颤</td>
							<td colspan="2">1&nbsp;&nbsp;&nbsp;&nbsp;<input type="radio" value="1"></td>
						</tr>
						<tr>
							<td>充血性心衰</td>
							<td colspan="2">3&nbsp;&nbsp;&nbsp;&nbsp;<input type="radio" value="3"></td>
						</tr>
						<tr>
							<td>慢性阻塞性肺病(COPD)</td>
							<td colspan="2">3&nbsp;&nbsp;&nbsp;&nbsp;<input type="radio" value="3"></td>
						</tr>
						<tr>
							<td>当前吸烟</td>
							<td colspan="2">1&nbsp;&nbsp;&nbsp;&nbsp;<input type="radio" value="1"></td>
						</tr>
					</tbody>
					<tbody id="past">
						<tr>
							<th colspan="2">既往mRS>=3</th>
							<th colspan="2">2&nbsp;&nbsp;&nbsp;&nbsp;<input type="radio" value="2" name="past_num"></th>
						</tr>
					</tbody>
					<tbody id="nihss">
						<tr>
							<td rowspan="6" colspan="1">入院NIHSS评分
							</td>
						</tr>
						<tr>
							<td>0-4</td>
							<td colspan="2">0&nbsp;&nbsp;&nbsp;&nbsp;<input type="radio" name="nihss_num" value="0"></td>
						</tr>
						<tr>
							<td>5-9</td>
							<td colspan="2">2&nbsp;&nbsp;&nbsp;&nbsp;<input type="radio" name="nihss_num" value="2"></td>
						</tr>
						<tr>
							<td>10-14</td>
							<td colspan="2">5&nbsp;&nbsp;&nbsp;&nbsp;<input type="radio" name="nihss_num" value="5"></td>
						</tr>
						<tr>
							<td>>=15</td>
							<td style="max-width: 60px;min-width: 60px;" colspan="2">8&nbsp;&nbsp;&nbsp;&nbsp;<input type="radio" name="nihss_num" value="8"></td>
						</tr>
					</tbody>
					<tbody id="gcs">
						<tr>
							<td rowspan="6" colspan="1">入院GCS评分
							</td>
						</tr>
						<tr>
							<td>15-13</td>
							<td colspan="2">0&nbsp;&nbsp;&nbsp;&nbsp;<input type="radio" name="ruyuan" value="0"></td>
						</tr>
						<tr>
							<td>9-12</td>
							<td colspan="2">0&nbsp;&nbsp;&nbsp;&nbsp;<input type="radio" name="ruyuan" value="0"></td>
						</tr>
						<tr>
							<td>3-8</td>
							<td colspan="2">3&nbsp;&nbsp;&nbsp;&nbsp;<input type="radio" name="ruyuan" value="3"></td>
						</tr>
					</tbody>
					<tbody id="lalopathy">
						<tr>
							<th colspan="2">言语障碍</th>
							<th colspan="2">3&nbsp;&nbsp;&nbsp;&nbsp;<input type="radio" value="3"></th>
						</tr>
					</tbody>
					<tbody id="ocsp">
						<tr>
							<td rowspan="8" colspan="1">OCSP分型
							</td>
						</tr>
						<tr>
							<td>腔隙性脑梗死（LACI)</td>
							<td colspan="2">0&nbsp;&nbsp;&nbsp;&nbsp;<input type="radio" name="ocsp" value="0"></td>
						</tr>
						<tr>
							<td>部分前循环梗死（PACI)</td>
							<td colspan="2">0&nbsp;&nbsp;&nbsp;&nbsp;<input type="radio" name="ocsp" value="0"></td>
						</tr>
						<tr>
							<td>完全前循环梗死（TACI)</td>
							<td colspan="2">2&nbsp;&nbsp;&nbsp;&nbsp;<input type="radio" name="ocsp" value="2"></td>
						</tr>
						<tr>
							<td>后循环梗死（POCI)</td>
							<td colspan="2">2 &nbsp;&nbsp;&nbsp;&nbsp;<input type="radio" name="ocsp" value="2"></td>
						</tr>
					</tbody>
					<tbody id="mmol">
						<tr>
							<td rowspan="8" colspan="1">入院血糖（mmol/L)
							</td>
						</tr>
						<tr>
							<td>
								<=11.0</td>
									<td colspan="2">0&nbsp;&nbsp;&nbsp;&nbsp;<input type="radio" name="ryxt" value="0"></td>
						</tr>
						<tr>
							<td>>=11.1</td>
							<td colspan="2">2&nbsp;&nbsp;&nbsp;&nbsp;<input type="radio" name="ryxt" value="2"></td>
						</tr>
					</tbody>
				</x-table>
			</div>
			<div class="margins-top-sm margins-bottom-md" style="height: 20px;">
				<div class="float-left"><button type="button" class="margins-left-md bg-fff bt-js" style="" @click="radios">计算</button></div>
				<div class="float-right margins-left-md"><span>得分</span>&nbsp;
					<div class="float-right input-k">{{ count }}</div>
				</div>
			</div>
			<p class="text-center margins-top-xs">不同分值对应的肺炎风险及危险分层</p>
			<div id="myChart" :style="{width: '300px', height: '300px'}" style="margin: 0 auto;"></div>
		    <div><span>危险因素：</span><span >非常低</span><span class="l">低</span><span class="l">中</span><span class="l">高</span><span style="margin-left: 0.2rem;">非常高</span></div>
			<div class="text-center margins-top-x">AIS-APS&nbsp;分值</div>
			<div class="margins-top-md">
				参考文献： Ji R,Shen H,Pan Y,et al.Risk score to predict gastrointinal bleeding after acute ischemic stroke.[J].BMC Gastroenterology,2014,14(1):130.
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
				count: 0
			}
		},
		mounted() {
			this.drawLine();
		},
		methods: {
			radios: function() {
				var _this = this;
				_this.count = 0;
				$("input:checked").each(function() {
					//if(this.checked == true) {
					_this.count = _this.count + Number($(this).val());
					console.log(_this.count);
					//}
				})
			},
			drawLine() {
				// 基于准备好的dom，初始化echarts实例
				let myChart = echarts.init(document.getElementById('myChart'))
				// 绘制图表
				myChart.setOption({
					color: ['#799241'],
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
						data: ['0-6', '7-13', '14-20', '21-27', '28-35'],
						axisTick: {
							alignWithLabel: true
						}
					}],
					yAxis: [{
						type: 'value',
						axisLabel: {
							show: true,
							interval: 'auto',
							formatter: '{value} %'
						},
						show: true
					}],
					series: [

						{
							name: '',
							type: 'bar',
							stack: '总量',
							label: {
								normal: {
									formatter: '{c}%',
									show: true,
									position: 'top'
								}
							},
							data: [2, 15,38,60,78],

						}

					]
				});
			}
		}
	}
</script>

<style>
.l{    margin-left: 0.321rem}
</style>