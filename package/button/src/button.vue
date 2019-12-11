<template>
	<button
		@click="$emit('click')"
		class="mics-button"
		:disabled="disabled"
		:class="[
    'mics-button--'+type,
    {'is-disabled': disabled, 'has-icon': icon},
    'mics-button--size-'+size,
    ]"
	>
		<i v-if="icon !== ''" class="mics-button-icon" :class="icon"></i>
		<span>
			<slot></slot>
		</span>
	</button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
	name: 'MButton',
})

export default class MButton extends Vue {
	@Prop({ default: 'default' }) public size!: string
	@Prop({ default: 'default' }) public type!: string
	@Prop({ default: '' }) public icon!: string
	@Prop({ default: false }) public disabled!: boolean
}
</script>

<style lang="scss">
@import '~/style/var';
@import '~/style/base';
.mics-button {
	display: inline-block;
	line-height: 1;
	transition: 0.1s;
	padding: 7px 14px;
	border-radius: 3px;
	font-size: 14px;
	cursor: pointer;
	box-sizing: border-box;
	& + .mics-button {
		margin-left: 10px;
	}
	&--primary {
		background-color: $blue;
		color: $white;
		border: 1px solid $blue;
		&:hover {
			background-color: #2ea2ff;
		}
		&:active {
			background-color: #0087f3;
		}
		&.is-disabled {
			background-color: #e4e8eb;
			border-color: #e4e8eb;
			cursor: not-allowed;
		}
	}
	&--secondary {
		background-color: $white;
		color: #0365f7;
		border: 1px solid #0365f7;
		&:hover {
			border-color: #2ea2ff;
			color: #2ea2ff;
		}
		&:active {
			background-color: #eef4f8;
		}
		&.is-disabled {
			color: #dee1e4;
			border-color: #dee1e4;
			cursor: not-allowed;
		}
	}
	&--danger {
		background-color: $white;
		border: 1px solid #df3535;
		color: #df3535;
		&:active {
			background-color: #eef4f8;
		}
		&.is-disabled {
			color: #dee1e4;
			border-color: #dee1e4;
			cursor: not-allowed;
		}
	}
	&-icon + span {
		margin-left: 10px;
	}
	&.has-icon {
		padding: 6px 11px;
	}
	&--size-large {
		padding: 13px 24px;
	}
	&--size-small {
		padding: 5px 8px;
		font-size: 12px;
	}
}
</style>