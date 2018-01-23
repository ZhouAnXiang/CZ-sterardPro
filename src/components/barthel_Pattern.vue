<template>
	<div>
		<x-header>Barthel指数评估模式</x-header>
		<div class="margins-horizontal-x margins-top-rem margins-bottom-sm">
			<div class="margins-top-md text-center"> Barthel指数（Barthel Index,BI)</div>
			<div class="margins-top-xs">
				<x-table full-bordered style="background-color:#fff;">
					<thead>
						<tr>
							<th colspan="2">项目</th>
							<th colspan="2">分值</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td rowspan="6">吃饭</td>
						</tr>
						<tr>
							<td>
								依赖
							</td>
							<td style=" max-width: 50px!important;min-width: 50px!important;">0&nbsp;&nbsp;&nbsp;<input type="radio" name="cf" value="0"></td>
						</tr>
						<tr>
							<td>
								需部分帮助
							</td>
							<td>5&nbsp;&nbsp;&nbsp;<input type="radio" name="cf" value="5"></td>
						</tr>
						<tr>
							<td>
								自理
							</td>
							<td>10&nbsp;&nbsp;&nbsp;<input type="radio" name="cf" value="10"></td>
						</tr>
					</tbody>
					<tbody>
						<tr>
							<td rowspan="6">洗澡</td>
						</tr>
						<tr>
							<td>
								依赖
							</td>
							<td>0&nbsp;&nbsp;&nbsp;<input type="radio" name="sz" value="0" ></td>
						</tr>
						<tr>
							<td>
								自理
							</td>
							<td>5&nbsp;&nbsp;&nbsp;<input type="radio" name="sz" value="5"></td>
						</tr>
					</tbody>
					<tbody>
						<tr>
							<td rowspan="4" style="max-width: 120px;min-width: 120px;">修饰（洗脸、梳刷牙、剃须）</td>
						</tr>
						<tr>
							<td>
								需帮助
							</td>
							<td>0&nbsp;&nbsp;&nbsp;<input type="radio" name="xs" value="0"></td>
						</tr>
						<tr>
							<td>
								自理
							</td>
							<td>5&nbsp;&nbsp;&nbsp;<input type="radio" name="xs" value="5"></td>
						</tr>
					</tbody>
					<tbody>
						<tr>
							<td rowspan="6" style="max-width: 50px;min-width: 50px;">穿衣（解系纽扣、拉链、穿鞋袜）</td>
						</tr>
						<tr>
							<td>
								依赖
							</td>
							<td>0&nbsp;&nbsp;&nbsp;<input type="radio" name="cy" value="0"></td>
						</tr>
						<tr>
							<td>
								需部分帮助
							</td>
							<td>5&nbsp;&nbsp;&nbsp;<input type="radio" name="cy" value="5"></td>
						</tr>
						<tr>
							<td>
								自理
							</td>
							<td>10&nbsp;&nbsp;&nbsp;<input type="radio" name="cy" value="10"></td>
						</tr>
					</tbody>

					<tbody>
						<tr>
							<td rowspan="6">大便</td>
						</tr>
						<tr>
							<td>
								失禁或需灌肠
							</td>
							<td>0&nbsp;&nbsp;&nbsp;<input type="radio" name="db" value="0"></td>
						</tr>
						<tr>
							<td>
								偶有失禁
							</td>
							<td>5&nbsp;&nbsp;&nbsp;<input type="radio" name="db" value="5"></td>
						</tr>
						<tr>
							<td>
								能控制
							</td>
							<td>10&nbsp;&nbsp;&nbsp;<input type="radio" name="db" value="10"></td>
						</tr>
					</tbody>
					<tbody>
						<tr>
							<td rowspan="6">小便</td>
						</tr>
						<tr>
							<td>
								失禁或插尿管和不能自理
							</td>
							<td>0&nbsp;&nbsp;&nbsp;<input type="radio" name="xb" value="0"></td>
						</tr>
						<tr>
							<td>
								偶有失禁
							</td>
							<td>5&nbsp;&nbsp;&nbsp;<input type="radio" name="xb" value="5"></td>
						</tr>
						<tr>
							<td>
								能控制
							</td>
							<td>10&nbsp;&nbsp;&nbsp;<input type="radio" name="xb" value="10"></td>
						</tr>
					</tbody>
					<tbody>
						<tr>
							<td rowspan="6" style="max-width: 80px;min-width: 80px;">用厕（包括拭净、整理衣裤、冲水）</td>
						</tr>
						<tr>
							<td>
								依赖
							</td>
							<td>0&nbsp;&nbsp;&nbsp;<input type="radio" name="yc" value="0"></td>
						</tr>
						<tr>
							<td>
								需要帮助
							</td>
							<td>5&nbsp;&nbsp;&nbsp;<input type="radio" name="yc" value="5"></td>
						</tr>
						<tr>
							<td>
								能控制
							</td>
							<td>10&nbsp;&nbsp;&nbsp;<input type="radio" name="yc" value="10"></td>
						</tr>
					</tbody>
					<tbody>
						<tr>
							<td rowspan="8" style="max-width: 80px;min-width: 80px;">床-椅转移</td>
						</tr>
						<tr>
							<td>
								完全依赖，不能坐
							</td>
							<td>0&nbsp;&nbsp;&nbsp;<input type="radio" name="chuangyi" value="0"></td>
						</tr>
						<tr>
							<td>
								需大量帮助（2人），能坐
							</td>
							<td>5&nbsp;&nbsp;&nbsp;<input type="radio"  name="chuangyi"  value="5"></td>
						</tr>
						<tr>
							<td>
								需少量帮助（1人）或指导
							</td>
							<td>10&nbsp;&nbsp;&nbsp;<input type="radio"  name="chuangyi"  value="10"></td>
						</tr>
						<tr>
							<td>
								自理
							</td>
							<td>15&nbsp;&nbsp;&nbsp;<input type="radio"  name="chuangyi"  value="15"></td>
						</tr>
					</tbody>
					<tbody>
						<tr>
							<td rowspan="8" style="max-width: 80px;min-width: 80px;">平地移位</td>
						</tr>
						<tr>
							<td>
								不能移动，或移动少于45米
							</td>
							<td>0&nbsp;&nbsp;&nbsp;<input type="radio" name="pd" value="0"></td>
						</tr>
						<tr>
							<td>
								独自操作轮椅移动超过45米，包括转弯
							</td>
							<td>5&nbsp;&nbsp;&nbsp;<input type="radio" name="pd"  value="5"></td>
						</tr>
						<tr>
							<td>
								需1人帮助步行超过45米（体力或言语指导）
							</td>
							<td>10&nbsp;&nbsp;&nbsp;<input type="radio" name="pd"  value="10"></td>
						</tr>
						<tr>
							<td>
								独立步行超过45米（可用辅助器）
							</td>
							<td>15&nbsp;&nbsp;&nbsp;<input type="radio" name="pd"  value="15"></td>
						</tr>
					</tbody>

					<tbody>
						<tr>
							<td rowspan="8" style="max-width: 80px;min-width: 80px;">上楼梯</td>
						</tr>
						<tr>
							<td>
								不能
							</td>
							<td>0&nbsp;&nbsp;&nbsp;<input type="radio" name="lt" value="0"></td>
						</tr>
						<tr>
							<td>
								需帮助（体力、言语指导、辅助器）
							</td>
							<td>5&nbsp;&nbsp;&nbsp;<input type="radio" name="lt" value="5"></td>
						</tr>
						<tr>
							<td>
								自理
							</td>
							<td>10&nbsp;&nbsp;&nbsp;<input type="radio" name="lt" value="10"></td>
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
				根据BI分值的临床预后分级
			</div>
			<div class="margins-top-xs">
				<x-table full-bordered style="background-color:#fff;">
					<thead>
						<tr>
							<th>分值</th>
							<th>临床预后</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td style="max-width: 80px;min-width: 80px;">>60</td>
							<td>轻度功能障碍，能基本完成日常活动，需部分帮助</td>
						</tr>
						<tr>
							<td>41-60</td>
							<td>中度功能障碍，需很大帮助方能完成日常活动</td>
						</tr>
						<tr>
							<td><=40</td>
							<td>重度功能障碍，大部分日常活动不能完成或需他人服侍</td>
						</tr>
					</tbody>
				</x-table>
			</div>
			<div class="margins-top-xs bg-ddd paddings-x">
				<p>注释：</p>
				<p> 1.该量表用来评估患者日常生活活动能力，可用于患者治 疗前后的功能恢复评价。依据患者日常实际表现，不以 患者可能具有的能力判断。</p>
				<p> 2.总分为100分，得分越高，独立性越好，依赖性越小。</p>
			</div>
			<div class="margins-top-xs">
				<p>参考文献：</p>
				<p> The Barthel ADL Index:a standard measure of physical disability?Int Disabil Stud.1988;10(2):64-7.</p>
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
				count:0,
			    conent:'分数为40分，重度功能障碍，大部分日常活动不能完成或需他人服侍。（参见下表)'
			}
		},
		methods: {
			radios: function() {
				var _this = this;
				_this.count = 0 ;
				$("input:checked").each(function() {
					_this.count = _this.count + Number($(this).val());
				})
			    if(_this.count <= "40"){
			    	     _this.conent = "分数为"+_this.count+"分，重度功能障碍，大部分日常活动不能完成或需他人服侍。（参见下表)";
			    }else if(_this.count == "41" && _this.count=="60"){
			    	     _this.conent = "分数为"+_this.count+"中度功能障碍，需很大帮助方能完成日常活动。（参见下表)";
			    }else{
			    	     _this.conent = "分数为"+_this.count+"轻度功能障碍，能基本完成日常活动，需部分帮助。（参见下表)";
			    }
				
			}
		}
	}
</script>

<style>

</style>