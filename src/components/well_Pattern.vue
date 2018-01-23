<template>
	<div>
		<x-header>Well评估模式</x-header>
		<div class="margins-horizontal-x margins-bottom-sm margins-top-rem">
			<div class="margins-top-md text-center"> 改良的Well评分</div>
			<div class="margins-top-xs">
				<x-table full-bordered style="background-color:#fff;">
					<thead>
						<tr>
							<th>临床特征</th>
							<th>分值</th>
						</tr>
					</thead>
					<tbody id="clinical">
						<tr>
							<td>癌症活动期（近6个月内接受治疗货当前姑息治疗）</td>
							<td>1&nbsp;&nbsp;&nbsp;<input type="radio"name="clinical_num" value="1"></td>
						</tr>
						<tr>
							<td>偏瘫，轻瘫或最近下肢石膏固定</td>
							<td>1&nbsp;&nbsp;&nbsp;<input type="radio"name="clinical_num1" value="1"></td>
						</tr>
						<tr>
							<td>近期卧床>=3天或近12周内行大手术（全麻或局麻）</td>
							<td>1&nbsp;&nbsp;&nbsp;<input type="radio"name="clinical_num2" value="1"></td>
						</tr>
						<tr>
							<td>沿深静脉走行有局限性压痛</td>
							<td>1&nbsp;&nbsp;&nbsp;<input type="radio"name="clinical_num3" value="1"></td>
						</tr>
						<tr>
							<td>整个下肢肿胀</td>
							<td>1&nbsp;&nbsp;&nbsp;<input type="radio"name="clinical_num4" value="1"></td>
						</tr>
						<tr>
							<td>肿胀小腿周径至少大于无症状侧3cm(胫骨粗隆下10cm测量）</td>
							<td>1&nbsp;&nbsp;&nbsp;<input type="radio"name="clinical_num5" value="1"></td>
						</tr>
						<tr>
							<td>凹陷性水肿（仅症状腿）</td>
							<td>1&nbsp;&nbsp;&nbsp;<input type="radio"name="clinical_num6" value="1"></td>
						</tr>
						<tr>
							<td>浅静脉侧支（非静脉曲张））</td>
							<td>1&nbsp;&nbsp;&nbsp;<input type="radio"name="clinical_num7" value="1"></td>
						</tr>
						<tr>
							<td>既往DVT史</td>
							<td>1&nbsp;&nbsp;&nbsp;<input type="radio"name="clinical_num8" value="1"></td>
						</tr>
						<tr>
							<td>至少可能和DVT相当的其他病因诊断*</td>
							<td style="max-width: 80px;min-width: 80px;" >1&nbsp;&nbsp;&nbsp;<input  type="radio"name="clinical_num9" value="1"></td>
						</tr>
					</tbody>
				</x-table>
			</div>
			<div class="margins-top-xs">
				*其他病因诊断包括：肌肉损伤、慢性水肿、浅静脉炎、血栓后综合症、关节炎、慢性静脉功能不全、蜂窝组织炎、腘窝囊肿、骨盆肿瘤、术后肿胀、多种混杂因素。
				
			</div>
		<div class="margins-top-sm margins-bottom-md" style="height: 20px;">
				<div class="float-left"><button type="button" class="margins-left-md bg-fff bt-js"  style="" @click="radios">计算</button></div>
				<div  class="float-right margins-left-md" ><span >得分</span>&nbsp;<div class="float-right input-k">{{ count }}</div></div>
			</div>
			<div class="margins-top-sm paddings-x bg-ddd">
				注释：
1.本量表用于DVT临床可能性评估，总分<2分，不太可能发生DVT；总分>=2分，很可能发生DVT。
2.Well评分联合D-二聚体对DVT的诊断：总分<2分且D-二聚体阴性，可排除DVT诊断；总分>=2分且D-二聚体阳性，考虑DVT诊断。
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
				count:0
			}
		},
		methods:{
			 radios: function() {
				var _this =  this;
				$("input:checked").each(function() {
					//if(this.checked == true) {
					_this.count = _this.count+Number($(this).val());
					console.log( _this.count);
					//}
				})
			}
		}
	}
</script>

<style>

</style>