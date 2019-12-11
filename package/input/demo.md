<script>
	export default {
		data() {
			return {
        input1: "",
        input2: "",
        input3: "",
			};
		}
	};
</script>

# Input 输入框

## 基础用法

::: demo

```html
<m-input v-model="input1" placeholder="请输入内容"></m-input>
<script>
	export default {
		data() {
			return {
        input1: ''
			};
		}
	};
</script>
```

:::

## 禁用状态

::: demo

```html
<m-input v-model="input2" placeholder="请输入内容" :disabled="true"></m-input>
<script>
	export default {
		data() {
			return {
        input2: ''
			};
    },
	};
</script>
```

:::

## 可清空

::: demo

```html
<m-input v-model="input3" placeholder="请输入内容" clearable="true"></m-input>
<script>
	export default {
		data() {
			return {
        input3: ''
			};
    },
	};
</script>
```


:::

## Attributes

| 参数     | 说明         | 类型    | 可选值                     | 默认值 |
| -------- | ------------ | ------- | -------------------------- | ------ |
| type     | 类型         | string  | primary、secondary、danger | -      |
| size     | 尺寸         | string  | default、large、small      | -      |
| disabled | 是否禁用状态 | boolean | -                          | false  |
| icon     | 图标         | string  | -                          | -      |
