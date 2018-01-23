<template>
	<div>
		<x-header>AIS-GIB评估模式</x-header>
		<div class="margins-horizontal-x margins-top-rem margins-bottom-sm">
			<p>
				急性缺血性卒中相关消化道出血风险评估:AIS-GIB评分 （Acute ischemic stroke-associated Gastrointestinal bleeding score,AIS-GIB)
			</p>
			<div class="margins-bottom-xs margins-top-xs">
				<x-table full-bordered style="background-color:#fff;">
					<thead id="age">
						<tr>
							<th colspan="2">项目</th>
							<th colspan="2">分值</th>
						</tr>
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
							<td colspan="2">1&nbsp;&nbsp;&nbsp;&nbsp;<input type="radio" name="age_num1" value="1"></td>
						</tr>
						<tr>
							<td>70-79</td>
							<td colspan="2">1&nbsp;&nbsp;&nbsp;&nbsp;<input type="radio" name="age_num2" value="1"></td>
						</tr>
						<tr>
							<td>>=80</td>
							<td colspan="2">2&nbsp;&nbsp;&nbsp;&nbsp;<input type="radio" name="age_num3" value="2"></td>
						</tr>
					</thead>
					<tbody id="sex">
						<tr>
							<td rowspan="4" colspan="1">性别</td>
						</tr>
						<tr>
							<td>男</td>
							<td colspan="2">0&nbsp;&nbsp;&nbsp;&nbsp;<input type="radio" name="sex_num" value="0"></td>
						</tr>
						<tr>
							<td>女</td>
							<td colspan="2">1&nbsp;&nbsp;&nbsp;&nbsp;<input type="radio" name="sex_num1" value="1"></td>
						</tr>
					</tbody>
					<tbody id="student">
						<tr>
							<td rowspan="6" colspan="1">既往史／<br/> 合并疾病
							</td>
						</tr>
						<tr>
							<td>高血压</td>
							<td colspan="2">1&nbsp;&nbsp;&nbsp;&nbsp;<input type="radio"name="student_num" value="1"></td>
						</tr>
						<tr>
							<td>肝硬化</td>
							<td colspan="2">3&nbsp;&nbsp;&nbsp;&nbsp;<input type="radio"name="student_num1" value="3"></td>
						</tr>
						<tr>
							<td>消化性溃疡或既往华法林相关胃肠道出血</td>
							<td colspan="2">3&nbsp;&nbsp;&nbsp;&nbsp;<input type="radio"name="student_num2" value="3"></td>
						</tr>
					</tbody>
					<tbody id="mrs">
						<tr>
							<th colspan="2">既往mRS>=3</th>
							<th colspan="2">2&nbsp;&nbsp;&nbsp;&nbsp;<input type="radio" name="mrs_num" value="2"></th>
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
							<td colspan="2">1&nbsp;&nbsp;&nbsp;&nbsp;<input type="radio" name="nihss_num1" value="1"></td>
						</tr>
						<tr>
							<td>10-14</td>
							<td colspan="2">2&nbsp;&nbsp;&nbsp;&nbsp;<input type="radio" name="nihss_num2" value="2"></td>
						</tr>
						<tr>
							<td>>=15</td>
							<td style="max-width: 60px;min-width: 60px;" colspan="2">3&nbsp;&nbsp;&nbsp;&nbsp;<input type="radio" name="nihss_num3" value="3"></td>
						</tr>
					</tbody>
					<tbody id="gcs">
						<tr>
							<td rowspan="6" colspan="1">入院时GCS得分
							</td>
						</tr>
						<tr>
							<td>15-13</td>
							<td colspan="2">0&nbsp;&nbsp;&nbsp;&nbsp;<input type="radio" name="gcs_num" value="0"></td>
						</tr>
						<tr>
							<td>9-12</td>
							<td colspan="2">0&nbsp;&nbsp;&nbsp;&nbsp;<input type="radio" name="gcs_num1" value="0"></td>
						</tr>
						<tr>
							<td>3-8</td>
							<td colspan="2">1&nbsp;&nbsp;&nbsp;&nbsp;<input type="radio" name="gcs_num2" value="1"></td>
						</tr>
						<tr>
							<td>3-8</td>
							<td colspan="2">1&nbsp;&nbsp;&nbsp;&nbsp;<input type="radio" name="gcs_num3" value="1"></td>
						</tr>
					</tbody>
					<tbody id="ocsp">
						<tr>
							<td rowspan="8" colspan="1">OCSP 分型
							</td>
						</tr>
						<tr>
							<td>腔隙性脑梗死（LACI）</td>
							<td colspan="2">0&nbsp;&nbsp;&nbsp;&nbsp;<input type="radio" name="ocsp_num" value="0"></td>
						</tr>
						<tr>
							<td>部分前循环梗死组（PACI)</td>
							<td colspan="2">0&nbsp;&nbsp;&nbsp;&nbsp;<input type="radio" name="ocsp_num1" value="0"></td>
						</tr>
						<tr>
							<td>完全前循环梗死组（TACI）</td>
							<td colspan="2">1&nbsp;&nbsp;&nbsp;&nbsp;<input type="radio" name="ocsp_num2" value="1"></td>
						</tr>
						<tr>
							<td>后循环梗死组（POCI）</td>
							<td colspan="2">2&nbsp;&nbsp;&nbsp;&nbsp;<input type="radio" name="ocsp_num3" value="2"></td>
						</tr>
					</tbody>

				</x-table>
			</div>
			<div class="margins-top-sm margins-bottom-md" style="height: 20px;">
				<div class="float-left"><button type="button" class="margins-left-md bg-fff bt-js"  style="" @click="radios">计算</button></div>
				<div  class="float-right margins-left-md" ><span >得分</span>&nbsp;<div class="float-right input-k">{{ count }}</div></div>
			</div>
			<p class="text-center margins-top-xs">不同分值对应的肺炎风险及危险分层</p>
			<div class="margins-top-xs">
				<div class="border-ddd paddings-horizontal-xs paddings-top-xs paddings-bottom-md">
					{{ conent }}
				</div>
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
							<td>26.8%</td>
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
							<td>47.4%</td>
							<td>——</td>
							<td>——</td>
						</tr>
					</tbody>
				</x-table>
			</div>
			<div class="margins-top-md">
				参考文献：
Ji R,Shen H,Pan Y,et al.Risk score to predict gastrointinal bleeding after acute ischemic stroke.[J].BMC Gastroenterology,2014,14(1):130.
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
				 count:0,
				 conent:"分数为0分，消化道出血风险为0.3%。（参见下表）"
			}
		},
		methods:{
		 radios: function() {
				var _this =  this;
				$("input:checked").each(function() {
					//if(this.checked == true) {
					_this.count = _this.count+Number($(this).val());
					//console.log( _this.count);
					//}
				})
				if(_this.count=="0"){
					_this.conent="分数为0分，消化道出血风险为0.3%。（参见下表）";
				}else if(_this.count=="1"){
					_this.conent="分数为1分，消化道出血风险为0.4%。（参见下表）";
				}else if(_this.count=="2"){
					_this.conent="分数为2分，消化道出血风险为0.6%。（参见下表）";
				}else if(_this.count=="3"){
					_this.conent="分数为3分，消化道出血风险为1%。（参见下表）";
				}else if(_this.count=="4"){
					_this.conent="分数为4分，消化道出血风险为1.5%。（参见下表）";
				}else if(_this.count=="5"){
					_this.conent="分数为5分，消化道出血风险为2.4%。（参见下表）";
				}else if(_this.count=="6"){
					_this.conent="分数为6分, 消化道出血风险为3.7%。（参见下表）"
				}else if(_this.count=="7"){
					_this.conent="分数为7分, 消化道出血风险为5.7%。（参见下表）"
				}else if(_this.count=="8"){
					_this.conent="分数为8分, 消化道出血风险为8.7%。（参见下表）"
				}else if(_this.count=="9"){
					_this.conent="分数为9分, 消化道出血风险为13%。（参见下表）"
				}else if(_this.count=="10"){
					_this.conent="分数为10分, 消化道出血风险为19%。（参见下表）"
				}else if(_this.count=="11"){
					_this.conent="分数为11分, 消化道出血风险为26.8%。（参见下表）"
				}else if(_this.count=="12"){
					_this.conent="分数为12分, 消化道出血风险为36.5%。（参见下表）"
				}else if(_this.count=="13"){
					_this.conent="分数为13分, 消化道出血风险为47.4%。（参见下表）"
				}else if(_this.count=="14"){
					_this.conent="分数为14分, 消化道出血风险为58.6%。（参见下表)"
				}else if(_this.count=="15"){
					_this.conent="分数为15分, 消化道出血风险为68.9%。（参见下表)"
				}else if(_this.count=="16"){
					_this.conent="分数为16分, 消化道出血风险为77.7%。（参见下表)"
				}else if(_this.count=="17"){
					_this.conent="分数为17分, 消化道出血风险为84.5%。（参见下表)"
				}else if(_this.count=="17"){
					_this.conent="分数为17分, 消化道出血风险为89.5%。（参见下表)"
				}
			}
		}
	}
</script>

<style>

</style>
