/*
* 目标：确认末尾字符
* 解释：检查一个字符串(str)是否以指定的字符串(target)结尾
* 例如：confirmEnding("Bastian", "n") 应该返回 true；confirmEnding("Connor", "n") 应该返回 false
* 
* */
function confirmEnding(str, target) {
	if (typeof str !== 'string' && target !== 'string') return
	// 注意：会改变str的值，慎用
	var last = str.split(' ').pop()
	// 正则，从最向前匹配
	var reg = new RegExp(target + '$')

	return reg.test(last) ? true : false;
}

confirmEnding("Bastian", "n")