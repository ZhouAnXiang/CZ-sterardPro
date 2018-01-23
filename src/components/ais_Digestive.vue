<template>
	<div>
		<x-header>AIS-GIB评估模式</x-header>
		<div class="margins-horizontal-x margins-top-md margins-bottom-sm">
			<p>
				急性缺血性卒中相关消化道出血风险评估:AIS-GIB评分 （Acute ischemic stroke-associated Gastrointestinal bleeding score,AIS-GIB)
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
							<td>2&nbsp;&nbsp;&nbsp;&nbsp;<input type="checkbox"></td>
						</tr>
						<tr>
							<td>70-79</td>
							<td>5&nbsp;&nbsp;&nbsp;&nbsp;<input type="checkbox"></td>
						</tr>
						<tr>
							<td>>=80</td>
							<td>7&nbsp;&nbsp;&nbsp;&nbsp;<input type="checkbox"></td>
						</tr>
					</tbody>
					<tbody>
						<tr>
							<td rowspan="4">
								性别
							</td>
						</tr>
						<tr>
							<td>男性</td>
							<td>0&nbsp;&nbsp;&nbsp;&nbsp;<input type="checkbox"></td>
						</tr>
						<tr>
							<td>女性</td>
							<td>1&nbsp;&nbsp;&nbsp;&nbsp;<input type="checkbox"></td>
						</tr>
					</tbody>
					<tbody>
						<tr>
							<td rowspan="6">既往史／<br/>合并疾病</td>

						</tr>
						<tr>
							<td>高血压</td>
							<td>1&nbsp;&nbsp;&nbsp;&nbsp;<input type="checkbox"></td>
						</tr>
						<tr>
							<td>肝硬化</td>
							<td>3&nbsp;&nbsp;&nbsp;&nbsp;<input type="checkbox"></td>
						</tr>
						<tr>
							<td><span>消化性溃疡或既往华法林相关胃肠道出血</span></td>
							<td style=" max-width: 60px!important;min-width: 60px!important;">3&nbsp;&nbsp;&nbsp;&nbsp;<input type="checkbox"></td>
						</tr>
					</tbody>
					<thead>
						<tr>
							<th colspan="2">既往mRS>=3</th>
							<th>2&nbsp;&nbsp;&nbsp;&nbsp;<input type="checkbox"></th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td rowspan="6">入院NIHSS评分</td>

						</tr>
						<tr>
							<td>0-4</td>
							<td>0&nbsp;&nbsp;&nbsp;&nbsp;<input type="checkbox"></td>
						</tr>
						<tr>
							<td>5-9</td>
							<td>2&nbsp;&nbsp;&nbsp;&nbsp;<input type="checkbox"></td>
						</tr>
						<tr>
							<td>10-14</td>
							<td style=" max-width: 60px!important;min-width: 60px!important;">5&nbsp;&nbsp;&nbsp;&nbsp;<input type="checkbox"></td>
						</tr>
						<tr>
							<td>>=15</td>
							<td>8&nbsp;&nbsp;&nbsp;&nbsp;<input type="checkbox"></td>
						</tr>
					</tbody>
					<tbody>
						<tr>
							<td rowspan="6">入院时GCS得分</td>

						</tr>
						<tr>
							<td>15</td>
							<td>0&nbsp;&nbsp;&nbsp;&nbsp;<input type="checkbox"></td>
						</tr>
						<tr>
							<td>13-14</td>
							<td>0&nbsp;&nbsp;&nbsp;&nbsp;<input type="checkbox"></td>
						</tr>
						<tr>
							<td>9-12</td>
							<td style=" max-width: 60px!important;min-width: 60px!important;">1&nbsp;&nbsp;&nbsp;&nbsp;<input type="checkbox"></td>
						
						</tr>
						<tr>
							<td>3-8</td>
							<td>1&nbsp;&nbsp;&nbsp;&nbsp;<input type="checkbox"></td>
						</tr>
					</tbody>
					<!--	<thead>
						<tr>
							<th colspan="2">言语障碍</th>
							<th>3</th>
							<th><input type="checkbox"></th>
						</tr>
					</thead>-->
					<tbody>
						<tr>
							<td rowspan="6">OCSP分型</td>

						</tr>
						<tr>
							<td>腔隙性脑梗死（LACI)</td>
							<td>0&nbsp;&nbsp;&nbsp;&nbsp;<input type="checkbox"></td>
						</tr>
						<tr>
							<td>部分前循环梗死（PACI)</td>
							<td>0&nbsp;&nbsp;&nbsp;&nbsp;<input type="checkbox"></td>
						</tr>
						<tr>
							<td>完全前循环梗死（TACI)</td>
							<td style=" max-width: 60px!important;min-width: 60px!important;">2&nbsp;&nbsp;&nbsp;&nbsp;<input type="checkbox"></td>
						</tr>
						<tr>
							<td>后循环梗死（POCI)</td>
							<td>2&nbsp;&nbsp;&nbsp;&nbsp;<input type="checkbox"></td>
						</tr>
					</tbody>

					<!--	<tbody>
						<tr>
							<td rowspan="4">入院血糖（mmol/L)</td>
						</tr>
						</tr>
						<tr>
							<td><=11.0</td>
							<td style=" max-width: 60px!important;min-width: 60px!important;">0</td>
							<td style=" max-width: 60px!important;min-width: 60px!important;"><input type="checkbox"></td>
						</tr>
						<tr>
							<td>>=11.1)</td>
							<td>5</td>
							<td><input type="checkbox"></td>
						</tr>
					</tbody>-->
				</x-table>
			</div>
			<div class="margins-top-xs">
				<button type="button" style="border: 1px solid #DDDDDD;margin-left: 0.3rem;">计算</button>
				<span style="margin-left: 0.45rem;">得分</span>&nbsp;<input type="text" style="border: 1px solid #DDDDDD;" />
			</div>
			<div class="margins-top-xs">
				<div class="border-ddd paddings-horizontal-xs paddings-top-xs paddings-bottom-md">
					分数为5分，消化道出血风险为2.4%。（参见下表）
				</div>
			</div>
			<div class="margins-top-xs">
				<p class="text-center">不同分值对应的消化道出血风险</p>
			</div>
			<div class="margins-top-xs">
				<x-table full-bordered style="background-color:#fff;">
					<thead>
						<tr>
							<th>分值</th>
							<th>风险</th>
							<th>分值</th>
							<th>风险</th>
							<th>分值</th>
							<th>风险</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>0</td>
							<td>0.3%</td>
							<td>7</td>
							<td>5.7%</td>
							<td>14</td>
							<td>58.6%</td>
						</tr>
						<tr>
							<td>1</td>
							<td>0.4%</td>
							<td>8</td>
							<td>5.7%</td>
							<td>15</td>
							<td>68.9%</td>
						</tr>
						<tr>
							<td>2</td>
							<td>0.6%</td>
							<td>9</td>
							<td>13%</td>
							<td>16</td>
							<td>77.7%</td>
						</tr>
						<tr>
							<td>3</td>
							<td>1%</td>
							<td>10</td>
							<td>19%</td>
							<td>17</td>
							<td>84.5%</td>
						</tr>
						<tr>
							<td>4</td>
							<td>1.5%</td>
							<td>11</td>
							<td>6.89%</td>
							<td>18</td>
							<td>89.5%</td>
						</tr>
						<tr>
							<td>5</td>
							<td>2.4%</td>
							<td>12</td>
							<td>36.5%</td>
							<td>——</td>
							<td>——</td>
						</tr>
						<tr>
							<td>6</td>
							<td>2.4%</td>
							<td>12</td>
							<td>36.5%</td>
							<td>——</td>
							<td>——</td>
						</tr>
					</tbody>
				</x-table>
				
			</div>
			<div class="margins-top-md">
				参考文献： Ji R,Shen H,Pan Y,et al.Risk score to predict gastrointinal bleeding after acute ischemic stroke.[J].BMC Gastroenterology,2014,14(1):130.
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