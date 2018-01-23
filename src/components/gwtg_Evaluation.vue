<template>
	<div>
		<x-header>AIS-GIB评估模式</x-header>
		<div class="margins-horizontal-x margins-top-md margins-bottom-sm">
			<p>
				GWTG评分：预测住院死亡率
			</p>
			<div class="margins-bottom-xs margins-top-xs">
				<x-table full-bordered style="background-color:#fff;">
					<thead>
						<tr>
							<th colspan="2">变量</th>
							<th colspan="2">分值</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td rowspan="6">年龄(岁)</td>
						</tr>
						<tr>
							<td>
								<=59</td>
									<td>0&nbsp;&nbsp;&nbsp;&nbsp;<input type="checkbox"></td>
						</tr>
						<tr>
							<td>60-69</td>
							<td>1&nbsp;&nbsp;&nbsp;&nbsp;<input type="checkbox"></td>
						</tr>
						<tr>
							<td>70-79</td>
							<td>5&nbsp;&nbsp;&nbsp;&nbsp;<input type="checkbox"></td>
						</tr>
						<tr>
							<td>>=80</td>
							<td>9&nbsp;&nbsp;&nbsp;&nbsp;<input type="checkbox"></td>
						</tr>
					</tbody>
					<tbody>
						<tr>
							<td rowspan="10">NIHSS评分</td>
						</tr>
						<tr>
							<td>0-2</td>
							<td>0&nbsp;&nbsp;&nbsp;&nbsp;<input type="checkbox"></td>
						</tr>
						<tr>
							<td>3-5</td>
							<td>10&nbsp;&nbsp;&nbsp;&nbsp;<input type="checkbox"></td>
						</tr>
						<tr>
							<td>6-10</td>
							<td>21&nbsp;&nbsp;&nbsp;&nbsp;<input type="checkbox"></td>
						</tr>
						<tr>
							<td>11-15</td>
							<td>37&nbsp;&nbsp;&nbsp;&nbsp;<input type="checkbox"></td>
						</tr>
						<tr>
							<td>16-20</td>
							<td>48&nbsp;&nbsp;&nbsp;&nbsp;<input type="checkbox"></td>
						</tr>
						<tr>
							<td>21-25</td>
							<td>56&nbsp;&nbsp;&nbsp;&nbsp;<input type="checkbox"></td>
						</tr>
						<tr>
							<td>>25</td>
							<td>65&nbsp;&nbsp;&nbsp;&nbsp;<input type="checkbox"></td>
						</tr>
					</tbody>
					<tbody>
						<tr>
							<td rowspan="6">
								运输模式
							</td>
						</tr>
						<tr>
							<td>私人交通</td>
							<td>0&nbsp;&nbsp;&nbsp;&nbsp;<input type="checkbox"></td>
						</tr>
						<tr>
							<td>非急诊方式</td>
							<td>16&nbsp;&nbsp;&nbsp;&nbsp;<input type="checkbox"></td>
						</tr>
						<tr>
							<td>从现场乘救护车</td>
							<td style=" max-width: 60px!important;min-width: 60px!important;">12&nbsp;&nbsp;&nbsp;&nbsp;<input type="checkbox"></td>
						</tr>
					</tbody>
					<tbody>
						<tr>
							<td rowspan="4">
								男性
							</td>
						</tr>
						<tr>
							<td>是</td>
							<td>0&nbsp;&nbsp;&nbsp;&nbsp;<input type="checkbox"></td>
						</tr>
						<tr>
							<td>否</td>
							<td>1&nbsp;&nbsp;&nbsp;&nbsp;<input type="checkbox"></td>
						</tr>
					</tbody>
					<tbody>
						<tr>
							<td rowspan="4">
								房颤
							</td>
						</tr>
						<tr>
							<td>是</td>
							<td>0&nbsp;&nbsp;&nbsp;&nbsp;<input type="checkbox"></td>
						</tr>
						<tr>
							<td>否</td>
							<td>1&nbsp;&nbsp;&nbsp;&nbsp;<input type="checkbox"></td>
						</tr>
					</tbody>
						<tbody>
						<tr>
							<td rowspan="4">
								既往脑梗或TIA病史
							</td>
						</tr>
						<tr>
							<td>是</td>
							<td>0&nbsp;&nbsp;&nbsp;&nbsp;<input type="checkbox"></td>
						</tr>
						<tr>
							<td>否</td>
							<td>1&nbsp;&nbsp;&nbsp;&nbsp;<input type="checkbox"></td>
						</tr>
					</tbody>
							<tbody>
						<tr>
							<td rowspan="4">
								冠状动脉疾病
							</td>
						</tr>
						<tr>
							<td>是</td>
							<td>0&nbsp;&nbsp;&nbsp;&nbsp;<input type="checkbox"></td>
						</tr>
						<tr>
							<td>否</td>
							<td>1&nbsp;&nbsp;&nbsp;&nbsp;<input type="checkbox"></td>
						</tr>
					</tbody>
						<tbody>
						<tr>
							<td rowspan="4">
								糖尿病
							</td>
						</tr>
						<tr>
							<td>是</td>
							<td>0&nbsp;&nbsp;&nbsp;&nbsp;<input type="checkbox"></td>
						</tr>
						<tr>
							<td>否</td>
							<td>1&nbsp;&nbsp;&nbsp;&nbsp;<input type="checkbox"></td>
						</tr>
					</tbody>
					<tbody>
						<tr>
							<td rowspan="4">
								血脂异常病史
							</td>
						</tr>
						<tr>
							<td>是</td>
							<td>0&nbsp;&nbsp;&nbsp;&nbsp;<input type="checkbox"></td>
						</tr>
						<tr>
							<td>否</td>
							<td>1&nbsp;&nbsp;&nbsp;&nbsp;<input type="checkbox"></td>
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
			<div class="margins-top-md">
		        <p class="text-center">计算公式</p>
		        <div><img src="../../static/image/WechatIMG257.jpg" width="100%" /></div>
			</div>
			<div class="margins-top-md">
				参考文献：
Risk Score for in-Hospital Ischemic Stroke Mortality Derived and Validated Within the Get With The Guidelines-Stroke Program.
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

</style>