<template>
	<div
		class="mics-input"
		:class="[{ 'is-disabled': disabled, 'mics-input--suffix': clearable }]"
	>
		<!-- todo:把v-bind:value="value"修改成v-bind="$attrs" -->
		<input
			class="mics-input__inner"
			:placeholder="placeholder"
			:disabled="disabled"
			v-bind:value="value"
			@input="handleInput"
		/>
		<span class="mics-input__suffix-inner" v-if="getSuffixVisible">
			<i v-if="showClear" class="iconfont icon-quxiao" @click="clear"></i>
		</span>
	</div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from "vue-property-decorator";

@Component({
	name: "MInput",
	inheritAttrs: false
})

export default class MInput extends Vue {
	@Prop({
		default: "请输入"
	})
	public placeholder!: string | number;
	@Prop({
		default: false
	})
	public disabled!: boolean;
	@Prop({
		default: false
	})
	public clearable!: boolean;
	@Prop() public value!: string | number;

	private get getSuffixVisible(): boolean {
		return this.clearable;
	}

	private get showClear(): boolean {
		return this.clearable && !!this.value;
	}

	private get nativeInputValue(): string {
		return this.value === null || this.value === undefined
			? ""
			: String(this.value);
	}

	@Emit("input")
	public clear() {
		return "";
	}

	@Emit("input")
	public handleInput(event) {
		return event.target.value;
	}
}
</script>

<style lang="scss">
@import "~/style/var";
@import "~/style/base";

.mics-input {
	display: inline-block;
	width: 280px;
	height: 40px;
	box-sizing: border-box;
	border-radius: 2px;
	font-size: 14px;
	border: 1px solid #98b1d9;
	color: #98b1d9;

	.mics-input__inner {
		width: 100%;
		height: 100%;
		border: none;
		padding: 0 8px;
		box-sizing: border-box;
	}

	&.is-disabled {
		.mics-input__inner {
			background-color: #f5f7fa;
			border-color: #e4e7ed;
			color: #c0c4cc;
			cursor: not-allowed;

			&::placeholder {
				color: #c0c4cc;
			}
		}
	}

	&--suffix {
		display: inline-flex;

		.mics-input__suffix-inner {
			width: 20px;
			line-height: 38px;
		}
	}
}
</style>
