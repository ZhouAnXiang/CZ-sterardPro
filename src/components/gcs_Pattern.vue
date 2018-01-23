<template>
	<div>
		<x-header>GCS评估模式</x-header>
		<div class="margins-horizontal-x margins-top-rem margins-bottom-sm">
			<div class="margins-top-md text-center">
				<p>Glasgow昏迷评分</p>
				<p> （Glasgow Coma Scale,GCS)</p>
			</div>
			<div class="margins-top-xs">
				<x-table full-bordered style="background-color:#fff;">
					<thead>
						<tr>
							<th colspan="5">项目</th>
							<th colspan="2">分值</th>
						</tr>
					</thead>
					<tbody id="eyes">
						<tr>
							<td colspan="5" rowspan="8" style=" max-width: 50px!important;min-width: 60px!important;">睁眼</td>
						</tr>
						<tr>
							<td colspan="1">
								自动睁眼
							</td>
							<td colspan="1" style=" max-width: 50px!important;min-width: 60px!important;">4&nbsp;&nbsp;&nbsp;<input type="radio" name="eyes_num" value="4"></td>
						</tr>
						<tr>
							<td colspan="1">
								呼唤睁眼
							</td>
							<td colspan="1" style=" max-width: 50px!important;min-width: 60px!important;">3&nbsp;&nbsp;&nbsp;<input type="radio" name="eyes_num1" value="3"></td>
						</tr>
						<tr>
							<td colspan="1">
								刺痛睁眼
							</td>
							<td colspan="1" style=" max-width: 50px!important;min-width: 50px!important;">2&nbsp;&nbsp;&nbsp;<input type="radio" name="eyes_num2" value="2"></td>
						</tr>
						<tr>
							<td colspan="1">
								无反应
							</td>
							<td colspan="1" style=" max-width: 50px!important;min-width: 50px!important;">1&nbsp;&nbsp;&nbsp;<input type="radio" name="eyes_num3" value="1"></td>
						</tr>
					</tbody>
					<tbody id="verbal">
						<tr>
							<td colspan="5" rowspan="10">言语反应</td>
						</tr>
						<tr>
							<td colspan="1">
								回答正确
							</td>
							<td colspan="1">5&nbsp;&nbsp;&nbsp;<input type="radio" name="verbal_num" value="5"></td>
						</tr>
						<tr>
							<td colspan="1">
								回答错乱
							</td>
							<td colspan="1">4&nbsp;&nbsp;&nbsp;<input type="radio" name="verbal_num1" value="4"></td>
						</tr>
						<tr>
							<td colspan="1">
								言语含糊不清
							</td>
							<td colspan="1">3&nbsp;&nbsp;&nbsp;<input type="radio" name="verbal_num2" value="3"></td>
						</tr>
						<tr>
							<td colspan="1">
								只能发音，不能理解
							</td>
							<td colspan="1">2&nbsp;&nbsp;&nbsp;<input type="radio" name="verbal_num3" value="2"></td>
						</tr>
						<tr>
							<td colspan="1">
								无反应
							</td>
							<td colspan="1">1&nbsp;&nbsp;&nbsp;<input type="radio" name="verbal_num4" value="1"></td>
						</tr>
					</tbody>
					<tbody id="exercise">
						<tr>
							<td colspan="5" rowspan="12">运动反应（非偏瘫侧</td>
						</tr>
						<tr>
							<td colspan="1">
								按吩咐动作
							</td>
							<td colspan="1">6&nbsp;&nbsp;&nbsp;<input type="radio" name="exercise_num" value="6"></td>
						</tr>
						<tr>
							<td colspan="1">
								刺痛时定位
							</td>
							<td colspan="1">5&nbsp;&nbsp;&nbsp;<input type="radio" name="exercise_num1" value="5"></td>
						</tr>
						<tr>
							<td colspan="1">
								刺痛时肢体回缩
							</td>
							<td colspan="1">4&nbsp;&nbsp;&nbsp;<input type="radio" name="exercise_num2" value="4"></td>
						</tr>
						<tr>
							<td colspan="1">
								刺痛时肢体屈曲
							</td>
							<td colspan="1">3&nbsp;&nbsp;&nbsp;<input type="radio" name="exercise_num3" value="3"></td>
						</tr>
						<tr>
							<td colspan="1">
								刺痛时肢体伸直
							</td>
							<td colspan="1">2&nbsp;&nbsp;&nbsp;<input type="radio" name="exercise_num4" value="2"></td>
						</tr>
						<tr>
							<td colspan="1">
								无反应
							</td>
							<td colspan="1">1&nbsp;&nbsp;&nbsp;<input type="radio" name="exercise_num5" value="1"></td>
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
			<div class="margins-top-xs text-center">
				GCS评分对应的昏迷程度及预后
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
							<td>13-15分</td>
							<td>轻度昏迷，预后好</td>
						</tr>
						<tr>
							<td>9-12分</td>
							<td>中度昏迷，预后一般</td>
						</tr>
						<tr>
							<td>3-8分</td>
							<td>重度昏迷，预后差</td>
						</tr>
					</tbody>
				</x-table>
			</div>
			<div class="margins-top-sm paddings-x bg-ddd">
				注释： 1.总分最大值15分，最小值3分；分值越大，预后越好。 2.该量表不能用于5岁以下儿童。 3.因插管气管切开无法发声的重度昏迷者低于3分。

			</div>
			<div class="margins-top-sm">
				参考文献： “Assessment of coma and impaired consciousness.A practical scale."The Lancet 1974,13;2(7872):81-4.
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
				conent: "分数为9分，中度昏迷，预后一般。（参照下表）"
			}
		},
		methods: {
			radios: function() {
				var _this = this;
				$("input:checked").each(function() {
					//if(this.checked == true) {
					_this.count = _this.count + Number($(this).val());
					//console.log( _this.count);
					//}
				})
				if(_this.count >= "3" || _this.count <= "8") {
					_this.conent = "分数为3-8分，重度昏迷，预后差（参照下表）";
				} else if(_this.count >= "9" || _this.count <= "12") {
					_this.conent = "分数为9-12分，中度昏迷，预后一般（参照下表）";
				} else if(_this.count >= "13" || _this.count <= "15") {
					_this.conent = "分数为13-15分，轻度昏迷，预后好（参照下表）";
				}
			}
		}
	}
</script>

<style>

</style>