<template>
	<div>
		<x-header>SICH评估模式</x-header>
		<div class="margins-horizontal-x margins-top-rem margins-bottom-sm">
			<p class="margins-top-md text-center">   SICH评分：静脉溶栓后症状性脑出血风险评估
    (SITS Symptomatic Intracerebral Hemorrhage Risk 
      Score)</p>
			<div class="margins-top-xs">
				<x-table full-bordered style="background-color:#fff;">
					<thead>
						<tr>
							<th>危险因素</th>
							<th>分值</th>
						</tr>
					</thead>
					<tbody id="hazards">
						<tr>
							<td>阿司匹林+氯吡格雷</td>
							<td>3&nbsp;&nbsp;&nbsp;<input type="radio" value="3"></td>
						</tr>
						<tr>
							<td>单用阿司匹林</td>
							<td>2&nbsp;&nbsp;&nbsp;<input type="radio" value="2"></td>
						</tr>
						<tr>
							<td>NIHSS>=13</td>
							<td>2&nbsp;&nbsp;&nbsp;<input type="radio" value="2"></td>
						</tr>
						<tr>
							<td>NIHSS7-12</td>
							<td>1&nbsp;&nbsp;&nbsp;<input type="radio" value="1"></td>
						</tr>
						<tr>
							<td>血糖>=180mg/dl(10mmol/L)</td>
							<td>2&nbsp;&nbsp;&nbsp;<input type="radio" value="2"></td>
						</tr>
						<tr>
							<td>年龄>=72岁</td>
							<td>1&nbsp;&nbsp;&nbsp;<input type="radio" value="1"></td>
						</tr>
						<tr>
							<td>收缩压>=146mmHg</td>
							<td>1&nbsp;&nbsp;&nbsp;<input type="radio" value="1"></td>
						</tr>
						<tr>
							<td>体重>=95kg</td>
							<td>1&nbsp;&nbsp;&nbsp;<input type="radio" value="1"></td>
						</tr>
						<tr>
							<td>发病到治疗时间>=180min</td>
							<td>1&nbsp;&nbsp;&nbsp;<input type="radio" value="1"></td>
						</tr>
						<tr>
							<td>高血压病史</td>
							<td style="max-width: 80px;min-width: 80px;">1&nbsp;&nbsp;&nbsp;<input type="radio" value="1"></td>
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
			<div class="margins-top-xs">
				<div class="border-ddd paddings-horizontal-xs paddings-top-xs paddings-bottom-md">
					{{ conent }}
				</div>
			</div>
			<p class="margins-top-xs text-center">GCS评分对应的昏迷程度及预后</p>
			<div class="margins-top-xs">
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
							<td>高</td>
							<td>>=9</td>
							<td>9.2%（5.9%-12.5%）</td>
						</tr>
					</tbody>
				</x-table>
			</div>
			<div class="margins-top-sm paddings-x bg-ddd">
				注释： 1.该评分是预测静脉溶栓后症状性脑出血（SICH）的常用量表之一。 2.症状性脑出血（SICH）定义（SITS-MOST标准）：溶栓后36h内，相对基线／最低NIHSS增加>=4分，影像显示有占位效应的脑血肿。 3.分值10分患者发生SICH的风险是0分患者的约70倍。
			</div>
			<div class="margins-top-xs">
				参考文献： 1.Predicting the Risk of Symptomatic Intracerebral Hemorrhage in Ischemic Stroke Treated.With Intravenous Alteplase:Safe Implementation of Treatments in Strock(SITS)Symptomatic.Intracerebral Hemorrhage RIsk Score.Stroke.2012;43:1524-1531
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
				count: 0,
				conent:"分数为0-2分，低危险，静脉溶栓后症状性脑出血（SICH）率为0.4%。（参见下表）"
			}
		},
		methods: {
			radios: function() {
				var _this =  this;
				$("input:checked").each(function() {
					//if(this.checked == true) {
					_this.count = _this.count+Number($(this).val());
					//console.log( _this.count);
					//}
				})
				if(_this.count >= "0" || _this.count <= "2"){
					_this.conent="分数为0-2分，低危险，静脉溶栓后症状性脑出血（SICH）率为0.4%。（参见下表）";
				}else if(_this.count >= "3" || _this.count <= "5"){
					_this.conent="分数为3-5分，平均水平，静脉溶栓后症状性脑出血（SICH）率为1.5%。（参见下表）";
				}else if(_this.count >= "6" || _this.count <= "8"){
					_this.conent="分数为6-8分，平均水平，静脉溶栓后症状性脑出血（SICH）率为3.6%。（参见下表）";
				}else if(_this.count >= "9"){
					_this.conent="分数为>=9分，平均水平，静脉溶栓后症状性脑出血（SICH）率为9.2%。（参见下表）";
				}
			}
		}
	}
</script>

<style>

</style>