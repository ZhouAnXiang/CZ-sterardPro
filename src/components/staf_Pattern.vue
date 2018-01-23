<template>
	<div>
		<!--<x-header title="headerTitle"></x-header>-->
		<x-header>STAF评分</x-header>
		<div class="margins-horizontal-x margins-top-md margins-bottom-sm">
			<p class="text-center">
				STAF评分：房颤鉴别评分
			</p>
			<p>（Score for the targeting of atrial fibrillation,STAF)</p>
			<div class="margins-bottom-xs margins-top-xs">
				<x-table full-bordered style="background-color:#fff;">
					<thead>
						<tr>
							<th colspan="2">变量</th>
							<th colspan="2">分值</th>
						</tr>
					</thead>
					<tbody id="wrap">
						<tr>
							<td rowspan="4">年龄(岁)</td>
						</tr>
						<tr>
							<td>>62</td>
							<td>2&nbsp;&nbsp;&nbsp;<input name="age1" value="2" type="radio"></td>
						</tr>
						<tr>
							<td>
								<=62</td>
									<td>0&nbsp;&nbsp;&nbsp;<input name="age2" value="0" type="radio"></td>
						</tr>
					</tbody>
					<tbody id="wraps">
						<tr>
							<td rowspan="4">基线NIHSS</td>
						</tr>
						<tr>
							<td>>=8</td>
							<td>1&nbsp;&nbsp;&nbsp;<input type="radio" name="nihss1" value="1"></td>
						</tr>
						<tr>
							<td>
								<8</td>
									<td>0&nbsp;&nbsp;&nbsp;<input type="radio" name="nihss2" value="0"></td>
						</tr>

					</tbody>
					<tbody id="enlarge">
						<tr>
							<td rowspan="4">左房扩大</td>
						</tr>
						<tr>
							<td>是</td>
							<td>2&nbsp;&nbsp;&nbsp;<input type="radio" name="enlarge1" value="2"></td>
						</tr>
						<tr>
							<td>否</td>
							<td>0&nbsp;&nbsp;&nbsp;<input type="radio" name="enlarge2" value="0"></td>
						</tr>
					</tbody>
					<tbody id="vessel">
						<tr>
							<td rowspan="4">血管原因</td>
						</tr>
						<tr>
							<td>是</td>
							<td>0&nbsp;&nbsp;&nbsp;<input type="radio" name="vessel1" value="0"></td>

						</tr>
						<tr>
							<td>否</td>
							<td>3&nbsp;&nbsp;&nbsp;<input type="radio" name="vessel2" value="3"></td>
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

			<div class="paddings-top-md bg-ddd paddings-x">
				<p>1.血管原因定义：大动脉粥样硬化（症状性颅内或颅外动脉狭窄>=50%）、小动脉粥样硬化（腔隙综合症）及症状性动脉夹层。</p>
				<p>2.本量表用于鉴别心源性与动脉源性脑梗塞。总分0-8分，若总分>=5分，90%可能是心源性；若
					<5分，动脉源性可能性大。</p>
			</div>

			<div class="margins-top-md">
				<p>参考文献：</p>
				<p>Score for targeting of atrial fibrillation(staf):A new approach to the detection of atrial fibrillation in the secondary prevention of ischemic stroke.2009;40:2866-68.</p>
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
				count: 0
			}
		},
		methods: {
			radios: function() {

				var _this = this;
				$("input:checked").each(function() {
					//if(this.checked == true) {
					_this.count = _this.count + Number($(this).val());
					console.log(_this.count);
					//}
				})
			}
		},
		computed: {
			countNum: function() {
				return Number(this.age1) + Number(this.age2)
			}

		}
	}
</script>

<style>
	.vux-header {
		position: fixed!important;
		width: 100%;
		z-index: 100;
		top:0;
		background-color: #0F71B2!important;
	}
</style>